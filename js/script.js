
let currentIndex = 0;
function hideContentDelay(index, second) {
    const contents = document.querySelectorAll('.main-contents');
    const menus = document.querySelectorAll('.submenu');

    const delay = 1000 * second;

    setTimeout(function() {
        contents.forEach(content => content.classList.add('hidden'));
        contents[index].classList.remove('hidden');

        menus.forEach(menu => menu.classList.remove('active'));
        menus[index].classList.add('active');

        currentIndex = index;
    }, delay);
}

//학과 스크롤
let scrolltIndex = 0;

function scrollDepartment(index) {
    const wrap = document.querySelector('.department-wrap');
    const menus = document.querySelectorAll('.department-submenu');

    wrap.style.transform = `translateX(-${index * 33.333}%)`;

    menus.forEach(menu => menu.classList.remove('active'));
    menus[index].classList.add('active');

    scrolltIndex = index;
}

//원하는 위치 세로 스크롤

function scrollDistanceDelay(distance,second) {
    const delay = 1000 * second;
    setTimeout(function() {
        window.scrollTo({top: distance, behavior:'smooth'})
    }, delay);
}