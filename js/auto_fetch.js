const username = "malang-hapoo";
const repo = "Multi-Game";
const path = "data"; // data 폴더 기준
const baseUrl = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

async function getStructure() {
    const res = await fetch(baseUrl);
    const years = await res.json();
    const result = {};

    for (const yearFolder of years) {
        if (yearFolder.type === "dir") {
            result[yearFolder.name] = {};
            const yearRes = await fetch(yearFolder.url);
            const subFolders = await yearRes.json();

            for (const sub of subFolders) {
                if (sub.type === "dir") {
                    const subRes = await fetch(sub.url);
                    const files = await subRes.json();
                    result[yearFolder.name][sub.name] = files
                        .map(f => f.name);
                }
            }
        }
    }

    console.log(result); // 구조 출력
    return result;
}

getStructure().then(structure => {
    console.log("✅ 자동 구조 생성 완료", structure);
});
