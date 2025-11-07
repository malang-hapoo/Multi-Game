// 메뉴 스크롤
let currentIndex = 0;

function showContent(index) {
    const wrap = document.querySelector('.main-wrap');
    const menus = document.querySelectorAll('.submenu');

    // 이동 거리 계산
    const distance = Math.abs(index - currentIndex);

    // 거리 비례 트랜지션 시간 (1초 + 0.5 × 거리)
    const duration = 1 + 0.5 * (distance - 1);

    // transition 시간 동적으로 설정
    wrap.style.transition = `${duration}s`;

    // 슬라이드 이동
    wrap.style.transform = `translateX(-${index * 100}%)`;

    // 메뉴 active 상태 표시
    menus.forEach(menu => menu.classList.remove('active'));
    menus[index].classList.add('active');

    // 현재 인덱스 갱신
    currentIndex = index;
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