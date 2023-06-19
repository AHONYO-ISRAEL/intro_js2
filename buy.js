let cart_products= JSON.parse(localStorage.getItem('cart_data')) ||  [];
var buyproduct = document.querySelector(".buyproduct");
let generateCartProducts = () => {
if (cart_products.length > 0) {
    return (buyproduct.innerHTML = cart_products
      .map((product) => {
        let { id, title, description, image, price, quantity } = product;
        return `
        <div class="product" id="product-id-${id}">
        <h1>${title}</h1>
        <p>${description}</p>
        <img src="${image} "/>
        <div class="purchase">
  <button class = "add" onclick="add(${id})">+</button>
  <h1>${quantity}</h1>
  <button class = "remove">-</button>
        <p>${price}</p>
        </div>
        </div>
        `;
      }).join(""));
}else{
  buyproduct.innerHTML = 
  `<h1 class= "noproduct">No Product to display</h1>`
}
}

generateCartProducts()

var cartIndex = document.querySelector(".cart-index");
let cart =JSON.parse(localStorage.getItem("cart_data"))  ||   []  ;






reset = () =>{
cart_products= [];
  localStorage.setItem("cart_data", JSON.stringify(cart_products));
generateCartProducts();
}


let totalprice = document.querySelector(".totalprice")

totalprice.innerHTML = cart_products.map((product) =>product.price).reduce((x,y)=>x+y,0)+"$";

add = (id) =>{
let prdct = cart_products.find((product) =>product.id === id)
prdct .quantity+= 1;
console.log(prdct.quantity);
}