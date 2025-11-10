// 메뉴 스크롤
let currentIndex = 0;

function showContentDelay(index,second) {
    const wrap = document.querySelector('.main-wrap');
    const menus = document.querySelectorAll('.submenu');

    const distance = Math.abs(index - currentIndex);

    const duration = 1 + 0.5 * (distance - 1);
    wrap.style.transition = `${duration}s`;

    const delay = 1000 * second;

    setTimeout(function() {
        // 슬라이드 이동
        wrap.style.transform = `translateX(-${index * 100}%)`;

        // 메뉴 active 상태 표시
        menus.forEach(menu => menu.classList.remove('active'));
        menus[index].classList.add('active');

        // 현재 인덱스 갱신
        currentIndex = index;
    },delay)
}

//학과 스크롤
let scrolltIndex = 0;

function scrollDepartment(index) {
    const wrap = document.querySelector('.department-wrap');
    const menus = document.querySelectorAll('.department-submenu');

    // 슬라이드 이동
    wrap.style.transform = `translateX(-${index * 50}%)`;

    // 메뉴 active 상태 표시
    menus.forEach(menu => menu.classList.remove('active'));
    menus[index].classList.add('active');

    // 현재 인덱스 갱신
    scrolltIndex = index;
}

//원하는 위치 세로 스크롤

function scrollDistanceDelay(distance,second) {
    const delay = 1000 * second;
    setTimeout(function() {
        window.scrollTo({top: distance, behavior:'smooth'})
    }, delay)
}