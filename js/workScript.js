// json 파일 로드 html 출력
async function loadGallery() {
    try {
        const res = await fetch("data/data_set.json");
        const structure = await res.json();

        const gallery = document.querySelector(".gallery");

        for (const year in structure) {
            const yearContainer = document.createElement("div");
            yearContainer.className = "year-container";
            yearContainer.className += " active"; 

            const yearTitle = document.createElement("h2");
            yearTitle.textContent = year + "";
            yearContainer.appendChild(yearTitle);

            for (const folder in structure[year]) {
                const lectureWrap = document.createElement("div");
                lectureWrap.className = "lecture-wrap";

                const subTitle = document.createElement("h3");
                subTitle.textContent = folder;
                lectureWrap.appendChild(subTitle);

                const lectureContents = document.createElement("div");
                lectureContents.className = "lecture-contents";

                for (const content of structure[year][folder]) {
                    const pdfItem = document.createElement("div");
                    pdfItem.className = "content-box";

                    const link = document.createElement("a");
                    link.href = `data/${year}/${folder}/${content}`;
                    link.textContent = `${folder} - ${content}`;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";

                    const iframe = document.createElement("iframe");
                    iframe.className = "item-frame";
                    iframe.src = `data/${year}/${folder}/${content}`;

                    pdfItem.appendChild(link);
                    pdfItem.appendChild(iframe);
                    lectureContents.appendChild(pdfItem);
                }

                lectureWrap.appendChild(lectureContents);
                yearContainer.appendChild(lectureWrap);
            }

            gallery.appendChild(yearContainer);
        }

        setupToggles();

    } catch (err) {
        console.error("data_set.json 로드 실패:", err);
    }
}

// 애니메이션 함수
function toggleHeight(element, minHeight) {
    const isActive = element.classList.contains("active");

    if (isActive) {
        const currentHeight = element.scrollHeight;
        element.style.height = currentHeight + "px";
        requestAnimationFrame(() => {
            element.style.height = minHeight;
        });
        element.classList.remove("active");
    } else {
        element.classList.add("active");
        const targetHeight = element.scrollHeight;
        element.style.height = minHeight;
        requestAnimationFrame(() => {
            element.style.height = targetHeight + "px";
        });
        element.addEventListener("transitionend", () => {
            if (element.classList.contains("active")) {
                element.style.height = "auto";
            }
        }, { once: true });
    }
}

// 클릭 이벤트
function setupToggles() {
    document.querySelectorAll(".lecture-wrap > h3").forEach(title => {
        title.addEventListener("click", e => {
            const wrap = e.target.closest(".lecture-wrap");
            toggleHeight(wrap, "55px");
        });
    });

    document.querySelectorAll(".year-container > h2").forEach(title => {
        title.addEventListener("click", e => {
            const container = e.target.closest(".year-container");
            toggleHeight(container, "100px");
        });
    });
}

// 로드
document.addEventListener("DOMContentLoaded", loadGallery);
