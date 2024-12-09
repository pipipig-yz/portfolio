let lastScrollY = window.scrollY; // 记录上一次滚动的位置
const header = document.querySelector('.headercontainer'); // 选择头部

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; // 当前滚动位置

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // 用户向下滚动，隐藏头部
        header.classList.add('hidden');
    } else if (currentScrollY < lastScrollY) {
        // 用户向上滚动，显示头部
        header.classList.remove('hidden');
    }

    // 更新上一次滚动的位置
    lastScrollY = currentScrollY;
});



const backToTopButton = document.querySelector('.backtotop');
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const images = document.querySelectorAll('.imgae');

images.forEach(img => {
    const originalSrc = img.style.backgroundImage; // 原始背景图片路径
    const hoverSrc = img.querySelector('.img-hover').getAttribute('data-hover'); // 获取替换图片路径

    img.addEventListener('mouseover', () => {
        img.style.backgroundImage = `url(${hoverSrc})`; // 鼠标悬浮时切换为 hover 图片
    });

    img.addEventListener('mouseout', () => {
        img.style.backgroundImage = originalSrc; // 鼠标移出时恢复原始背景图片
    });
});
