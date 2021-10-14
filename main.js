const images = document.querySelectorAll(".image");

if (images) {
  images.forEach((image) => {
    image.onclick = () => {
      document.querySelector(".active").classList.remove("active");
      image.classList.add("active");
    };
  });
}

// Icon Navbar Glassmorphism Hover Effects
let marker = document.querySelector("#marker");
let list = document.querySelectorAll(".glassmorphism-hover-effects ul li");

function moveIndicator(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}

list.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    moveIndicator(e.target);
  });
});
// Add active class in hover item list
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
