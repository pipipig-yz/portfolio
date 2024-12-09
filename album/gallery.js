// 给所有图片自动添加 lazy loading
document.querySelectorAll('img').forEach(function(img) {
    // 只有没有 loading 属性的图片才加上 lazy
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});


// 获取模态框元素
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// 给所有图片添加点击事件
document.querySelectorAll(".image").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; // 显示模态框
        modalImage.src = img.src; // 将点击图片的 src 赋值给模态框图片
    });
});

// 关闭模态框
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // 隐藏模态框
});

// 点击模态框背景关闭
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
