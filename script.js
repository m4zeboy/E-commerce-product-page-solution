const aside_menu = document.querySelector("#aside_menu");
const cartElement = document.querySelector("#cart");
const galleryFullscreen = document.querySelector("dialog.gallery-fullscreen");
const highlightFullscreen = document.querySelector(".highlight[data-type='fullscreen']");
const highlight = document.querySelector("div.highlight[data-type='default']");
const quantity = document.querySelector("input#quantity")

const products = [
  {
    id: 0,
    title: 'Fall Limited Edition Sneakers',
    company: 'SNEAKERS COMPANY',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    thumbnail: './images/image-product-1-thumbnail.jpg',
    price: {
      current: 125.00,
      old: 250.00,
      promotion: "50%"
    },
  }
]
let cart = []

function renderCart() {
  const cartMainElement = document.querySelector("div.cart-main")
  const button = document.querySelector(".cart-footer button")
  const counter = document.querySelector(".counter");

  if (cart.length > 0) {
    button.style.display = 'flex'
    cartMainElement.innerHTML = ""
    counter.style.display = 'block'
    counter.innerHTML = cart.length
    cart.map((item,index) => {
      const article = createItem(item, index)
      cartMainElement.appendChild(article)
    })
  } else {
    button.style.display = 'none'
    counter.style.display = 'none'
    cartMainElement.innerHTML = "<p>Your cart is empty</p>"
    cartMainElement.style.textAlign = "center"
  }
}
function createItem(item, index) {
  const article = document.createElement("article");
      article.dataset.index = index
      article.classList.add("cart-article")
      const itemHTML = `
          <img src="${item.thumbnail}" alt="product 1" width="50" height="50">
          <p>
            <span>${item.title}</span>
            <span>$${item.unityPrice} x${item.quantity} <strong>${item.totalPrice}</strong></span>
          </p>
          <button class="glass" onclick="deleteItem(${index})"><img src="./images/icon-delete.svg" alt="delete"></button>
      `
      article.innerHTML = itemHTML;
      return article
}

renderCart()
function addToCart(id) {
  if (quantity.value) {
    const product = products.find(product => product.id === id);
    const item = {
      thumbnail: product.thumbnail,
      title: product.title,
      unityPrice: product.price.current,
      quantity: Number(quantity.value),
      totalPrice: product.price.current * Number(quantity.value)
    }
    cart.unshift(item)
    console.log(cart)
  } else {
    alert("please select one product.")
  }
  renderCart();
}

function deleteItem(data_index) {
  cart = cart.filter((item, index) => index != data_index)
  renderCart();
}

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

function select(clickedIndex) {
  selectedIndex = clickedIndex;
  highlightFullscreen.style.background = generateBackground(product_images[selectedIndex]);
}

function next(picture) {
  if (selectedIndex == product_images.length - 1)
    selectedIndex = 0
  else
    selectedIndex++;
  picture.style.background = generateBackground(product_images[selectedIndex]);
}

function previous(picture) {
  if (selectedIndex == 0)
    selectedIndex = product_images.length - 1;
  else
    selectedIndex--;
  picture.style.background = generateBackground(product_images[selectedIndex]);
}

function openGalleryFullscreen(clickedIndex) {
  galleryFullscreen.showModal();
  highlightFullscreen.style.background = generateBackground(product_images[clickedIndex]);
}

