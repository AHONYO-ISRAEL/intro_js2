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
        <h1>${title}</h1>
        <p>${description}</p>
        <img src="${image} "/>
        <div class="purchase">
  <button class = "add" onclick="add(${id})">+</button>
  <h1 id= "${id}">${quantity}</h1>
  <button class = "remove" onclick="substract(${id})">-</button>
        <p>${price}</p>
        <button class = "removeproduct" onclick="remove(${id})">Remove from cart</button>
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
document.querySelector(".totalprice").innerHTML= (CartPrice() === undefined) ?  0+"$": CartPrice() ;
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
      totalprice .innerHTML = amount+"$";
      return amount;
  } else return;
};

let remove = (id)=>{
  let search = cart_products.find((x) => x.id === id);

alert("You sure you wanna remove "+search.title+"  from cart")
cart_products = cart_products.filter((x) => x.id !== id)
localStorage.setItem('cart_data', JSON.stringify(cart_products));
document.querySelector(".totalprice").innerHTML= (CartPrice() === undefined) ?  0+"$": CartPrice() ;

generateCartProducts();
}
localStorage.setItem('cart_data', JSON.stringify(cart_products));
