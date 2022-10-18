const aside_menu = document.querySelector("#aside_menu");
const cart = document.querySelector("#cart");
const galleryFullscreen = document.querySelector("dialog.gallery-fullscreen");
const highlightFullscreen = document.querySelector(".highlight[data-type='fullscreen']");
const highlight = document.querySelector("div.highlight[data-type='default']");
function generateBackground(url) {
  return `url(${url}) center top/cover no-repeat`
}

const product_images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg"
]

let selectedIndex = 0;

highlight.style.background = generateBackground(product_images[selectedIndex]);

highlightFullscreen.style.background = generateBackground(product_images[selectedIndex]);

function next(picture) {
  if(selectedIndex == product_images.length - 1) 
    selectedIndex = 0
  else 
    selectedIndex++;
    picture.style.background = generateBackground(product_images[selectedIndex]);
}

function previous(picture) {
  if(selectedIndex == 0) 
    selectedIndex = product_images.length -1;
  else 
    selectedIndex--;
    picture.style.background = generateBackground(product_images[selectedIndex]);
}

function openGalleryFullscreen(clickedIndex) {
  galleryFullscreen.showModal();
  highlightFullscreen.style.background = generateBackground(product_images[clickedIndex]);
}

