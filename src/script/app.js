const menuBtn = document.querySelector(".menu-icon");
let menuStatus = false;
menuBtn.addEventListener("click", () => {
  if (!menuStatus) {
    menuStatus = true;
    menuBtn.classList.add("open");
  } else {
    menuStatus = false;
    menuBtn.classList.remove("open");
  }
  console.log("pressed");
});
