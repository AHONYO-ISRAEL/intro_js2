let cart_products= JSON.parse(localStorage.getItem('cart_data')) ||  [];
localStorage.setItem("cart_data", JSON.stringify(cart_products));

var buyproduct = document.querySelector(".buyproduct");
let generateCartProducts = () => {
if (cart_products.length > 0) {
    return (buyproduct.innerHTML = cart_products
      .map((product) => {
        let { id, title, description, image, price, quantity } = product;
        return `
        <div class="product" id="product-id-${id}">
    <div class = "product-head">
    <h1>${title}</h1>
    <p>${description}</p>
    </div>
<div class = "product-body">
<img src="${image} "/>
<div class="purchase">
<div class="quantity">

<button class = "remove" onclick="substract(${id})">-</button>
<h1 id= "${id}" class = "qty">${quantity}</h1>
<button class = "add" onclick="add(${id})">+</button>

</div>
<p>${price}</p>
<button class = "removeproduct" onclick="remove(${id})">Remove from cart</button>
</div>
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
const cartIndex1 = document.querySelector(".cart-index1");
let cart =JSON.parse(localStorage.getItem("cart_data"))  ||   []  ;






reset = () =>{
cart_products= [];
  localStorage.setItem("cart_data", JSON.stringify(cart_products));
generateCartProducts();
document.querySelector(".totalprice").innerHTML= (CartPrice() === undefined) ?  0+"$": CartPrice() ;
cartIndex.innerHTML = cart_products.length;
cartIndex1.innerHTML = cart_products.length;
}


let totalprice = document.querySelector(".totalprice")

totalprice.innerHTML = cart_products.map((product) =>product.price).reduce((x,y)=>x+y,0)+"$";
/*
add = (id) =>{
let prdct = cart_products.find((product) =>product.id === id)
prdct .quantity+= 1;
document.getElementById(id).innerHTML= prdct;
console.log(prdct.quantity);
  localStorage.setItem("cart_data", JSON.stringify(cart_products));

}*/

add = (id) =>{
  let temp = cart_products.find((product) =>product.id ===id).quantity;
 temp ++;
 let addedproduct = cart_products.find((product) =>product.id === id);
 addedproduct.quantity = temp;
 document.getElementById(id).innerHTML= addedproduct.quantity;
 localStorage.setItem("cart_data", JSON.stringify(cart_products));
CartPrice();
}

substract = (id) =>{
  let temp = cart_products.find((product) =>product.id ===id).quantity;

if (temp>1) {
    let temp = cart_products.find((product) =>product.id ===id).quantity;
   temp --;
   let addedproduct = cart_products.find((product) =>product.id === id);
   addedproduct.quantity = temp;
   document.getElementById(id).innerHTML= addedproduct.quantity;
   localStorage.setItem("cart_data", JSON.stringify(cart_products));
CartPrice();
}else return ;
}


let  CartPrice = () => {
  if (cart_products.length !== 0) {
    let amount = cart_products
      .map((x) => {
        let { id, quantity } = x;
        let filterData = cart_products.find((x) => x.id === id);
        return filterData.price * quantity;
      })
      .reduce((x, y) => x + y, 0);
      ramount  = Math.round(amount*100)/100;
      totalprice .innerHTML = ramount+"$";
      return Math.round(amount*100)/100;
  } else return;
};



let remove = (id)=>{
  let search = cart_products.find((x) => x.id === id);

alert("You sure you wanna remove "+search.title+"  from cart")
cart_products = cart_products.filter((x) => x.id !== id)
localStorage.setItem('cart_data', JSON.stringify(cart_products));
document.querySelector(".totalprice").innerHTML= (CartPrice() === undefined) ?  0+"$": CartPrice()+"$" ;


cartIndex .innerHTML= cart_products.length;
cartIndex1 .innerHTML= cart_products.length;

generateCartProducts();
}
localStorage.setItem('cart_data', JSON.stringify(cart_products));
var cartIndex = document.querySelector(".cart-index");

cartIndex.innerHTML = cart_products.length;
cartIndex1.innerHTML = cart_products.length;



const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

release = () =>{
          burger.classList.contains("active")?burger.classList.remove("active"):burger.classList.add("active");
          nav.classList.contains("active")?nav.classList.remove("active"):nav.classList.toggle("active");
}