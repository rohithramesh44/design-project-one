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

//testimonial

new Glide(".glide-testimonial", {
  type: "carousel",
  startAt: 0,
  autoplay: 2000,
}).mount();
