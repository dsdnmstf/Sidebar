const sidebar_btn = document.querySelector(".sidebar-toggle");
const aside = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
sidebar_btn.addEventListener("click", () => {
  aside.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  aside.classList.toggle("show-sidebar", false);
});
