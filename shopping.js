
//initialisation

let add=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let del=document.querySelector(".delete");
let size=document.querySelector(".size");
console.log(size.innerHTML);
let price1=document.querySelector(".price1");
//let price2=document.querySelector(".price2");
//let price3=document.querySelector(".price3");
//let price4=document.querySelector(".price4");
let subtotal=document.querySelector(".subtotal");
let total=document.querySelector(".total");
let quantité=document.querySelector(".quant");
let article1=document.querySelector(".article1");
//events 

function sizeBtn () {

let ar=[`S`,`M`,`L`,`XL`,`XXL`,`XXXL`];

i=1;
 //size=ar[i];
 size.innerHTML=ar[i];
 i++;
 
 
}



size.addEventListener("click",sizeBtn);

let q=1;
let p=50;
let sub=0;

function addBtn() {
   
    q+=1;
    let price=p*q;
    quantité.innerHTML=q;
   
    price1.innerHTML= `${price} $`;

    subtotal.innerHTML=`${price} $`;
    total.innerHTML=`${price} $`;
}

add.addEventListener("click",addBtn);

function minBtn() {

  
  q= parseInt(quantité.innerHTML);
  price=parseInt(price1.innerHTML);
if(q>1){
  
  q--;

  price=price-p;

  price1.innerHTML=`${price} $`;
  quantité.innerHTML=q;
  subtotal.innerHTML=`${price} $`;
  total.innerHTML=`${price} $`;
}
}

minus.addEventListener("click",minBtn);

function deleteBtn() {
article1.innerHTML="";
subtotal.innerHTML=`${price-price}`;
total.innerHTML=`${price-price}`;

    
}

del.addEventListener("click",deleteBtn);

