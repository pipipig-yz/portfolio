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

// 获取容器和图片
const container = document.querySelector('.scroll-list-container ');
const image = document.querySelector('.selfie');

// 监听鼠标移动事件
container.addEventListener('mousemove', (event) => {
    // 获取容器的位置和鼠标的相对位置
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    // 计算图片的移动范围，调整数值来控制移动灵敏度
    const moveX = (mouseX / container.offsetWidth - 0.5) * 20;  // 水平偏移
    const moveY = (mouseY / container.offsetHeight - 0.5) * 20; // 垂直偏移

    // 更新图片的位置
    image.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
});

// const popup = document.getElementById('backtotopcontainer');

// // 添加滚动事件监听
// window.addEventListener('scroll', () => {
//     // 判断是否滚动到底部
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         popup.classList.add('show'); // 显示弹窗
//     } else {
//         popup.classList.remove('show'); // 隐藏弹窗
//     }
// });

const backToTopButton = document.querySelector('.backtotop');
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};




