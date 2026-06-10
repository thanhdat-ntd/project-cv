/* ==========================================================================
   1. XỬ LÝ ĐÓNG / MỞ HỘP ABOUT ME (TOGGLE BOX)
   ========================================================================== */
function toggleAbout() {
  const aboutBox = document.getElementById("aboutBox");
  if (aboutBox) {
    aboutBox.classList.toggle("active");
  }
  
  // Hiệu ứng rung nhẹ khi click (chỉ hoạt động trên thiết bị di động hỗ trợ)
  if (navigator.vibrate) {
    navigator.vibrate(6);
  }
}

// Dự phòng: Nếu người dùng bấm trúng nút mũi tên (.toggle), nó vẫn chạy mượt mà
const toggleBtn = document.querySelector(".toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", (e) => {
    // Ngăn chặn sự kiện click bị lặp lại hai lần do lan truyền (Event Bubbling)
    e.stopPropagation(); 
    toggleAbout();
  });
}


/* ==========================================================================
   2. HIỆU ỨNG HOẠT HỌA CHO TÊN KHI VỪA TẢI TRANG (ANIMATION ON LOAD)
   ========================================================================== */
setTimeout(() => {
  const nameElement = document.querySelector('.name');
  if (nameElement) {
    nameElement.classList.add('loaded');
  }
}, 500);


/* ==========================================================================
   3. HIỆU ỨNG HIỆN HÌNH MƯỢT MÀ (SCROLL REVEAL) CHO KHUNG CONTACT ME
   ========================================================================== */
const contactBox = document.querySelector(".contact-box");
if (contactBox) {
  ScrollReveal().reveal(contactBox, {
    duration: 1000,
    opacity: 0,
    distance: "30%",
    origin: "bottom",
    scale: 0.9,
  });
}