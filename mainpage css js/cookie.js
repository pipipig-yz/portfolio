document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById('cookiePopup');
    const overlay = document.getElementById('overlay');
    const acceptButton = document.getElementById('acceptCookie');
    const rejectButton = document.getElementById('rejectCookie');

    // 页面加载时显示弹窗和遮罩层
    cookiePopup.classList.add('show');
    overlay.classList.add('show');

   
  

    rejectButton.addEventListener('click', () => {
        cookiePopup.classList.remove('show');
        overlay.classList.remove('show');
    });
});
