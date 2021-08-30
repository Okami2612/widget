const images = document.querySelectorAll(".image");

if(images) {
  images.forEach(image => {
    image.onclick =() => {
      document.querySelector(".active").classList.remove("active");
      image.classList.add("active")
    }
  })
}