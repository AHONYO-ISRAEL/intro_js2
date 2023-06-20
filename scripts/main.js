var product_list = [
  {
    id: 1,
    title: "Beauty Brush",
    description: "Lorem ipsum shits and stuff",
    image: "assets/images/im8.png",
    price: 7.5,
    tocart: false
  },
  {
    id: 2,
    title: "Random Product 1",
    description: "Lorem ipsum dolor sit amet",
    image: "assets/images/im7.png",
    price: 9.99,
    tocart: false
  },
  {
    id: 3,
    title: "Random Product 2",
    description: "Consectetur adipiscing elit",
    image: "assets/images/im6.png",
    price: 12.5,
    tocart: false
  },
  {
    id: 4,
    title: "Random Product 3",
    description: "Sed do eiusmod tempor incididunt",
    image: "assets/images/im5.png",
    price: 6.99,
    tocart: false
  },
  {
    id: 5,
    title: "Random Product 4",
    description: "Ut labore et dolore magna aliqua",
    image: "assets/images/im4.png",
    price: 15.99,
    tocart: false
  },
  {
    id: 6,
    title: "Random Product 5",
    description: "Ut enim ad minim veniam",
    image: "assets/images/im3.png",
    price: 10.99,
    tocart: false
  },
  {
    id: 7,
    title: "Random Product 6",
    description: "Quis nostrud exercitation ullamco",
    image: "assets/images/im2.png",
    price: 8.75,
    tocart: false
  },
  {
    id: 8,
    title: "Random Product 7",
    description: "Duis aute irure dolor in reprehenderit",
    image: "assets/images/im1.png",
    price:14.5,
    tocart: false
  },

];


var products = document.querySelector(".products");
let generateProducts = () => {
  
  return (products.innerHTML = product_list
    .map((product) => {
      let { id, title, description, image, price, tocart } = product;
      return `
      <div class="product" id="product-id-${id}">
      <h1>${title}</h1>
      <p>${description}</p>
      <img src="${image} "/>
      <div class="purchase">
      <button type="button" id="${id }${id}" text="" onclick= "add(${id})">Add to Cart</button>
      <button type="button" class="but" text="">Buy Now</button>
      <p>${price}$</p>
      </div>
      </div>
      `;
    }).join(""));
}

generateProducts()

var cartIndex = document.querySelector(".cart-index");
let cart =JSON.parse(localStorage.getItem("cart_data"))  ||   []  ;

add = (id) => {
  var link = "../"
let newid= id.toString()+id.toString();
let addcart = document.getElementById(newid);
  let searchProduct = product_list.find((product) => product.id === id);
  let search = cart.find((x) => x.id === id);
  if (search === undefined) {
    cart.push({
      id: searchProduct.id,
      image :  link + searchProduct.image, 
      description : searchProduct.description,
      title : searchProduct.title,
      price: searchProduct.price,
      quantity: 1
    });
  cartIndex.innerHTML = cart.length;

  }
  localStorage.setItem("cart_data", JSON.stringify(cart));

  addcart.innerHTML="Product Added";
  this.innerHTML = "Product Added";
}
cartIndex.innerHTML = cart.length;


reset = () =>{
  cart = [];
  localStorage.setItem("cart_data", JSON.stringify(cart));
  cartIndex.innerHTML= cart.length;
}
const cartdialog = document.querySelector(".cartdialog");
showdialog = () =>{

 /*if(cartdialog.classList.contains("active"))return;
 else
  cartdialog.classList.add("active");*/
  cartdialog.classList.contains("active")? cartdialog.classList.remove("active"): cartdialog.classList.add("active");
}

