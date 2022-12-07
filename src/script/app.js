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
});

//testimonial
let viewWidth = window.innerWidth;
window.onresize = () => {
  console.log("working");
  viewWidth = window.innerWidth;
};
new Glide(".glide-testimonial", {
  type: "carousel",
  startAt: 0,
  perView: 1,
  autoplay: 2000,
  peek: {
    before: viewWidth > 992 ? 100 : 0,
    after: 0,
  },
}).mount();
