
//initialisation

let price= document.querySelectorAll(".price");
let add= document.querySelectorAll(".plus");
let minus= document.querySelectorAll(".minus");
let del= document.querySelectorAll(".delete");
let size= document.querySelector(".size");
let subtotal=document.querySelector(".subtotal");
let total=document.querySelector(".total");
let quantité=document.querySelectorAll(".quant");


//events 


//get prices : 

let prices = [];

for (let i = 0; i < price.length; i++) {

    prices.push(parseInt(price[i].innerHTML))
   
}

console.log(prices)


 //delete button  

function deleteBtn(event) {

  var btnClicked = event.target

  console.log(btnClicked);

  btnClicked.parentElement.remove();
  
  
}

for (let index = 0; index < del.length; index++) {
  
  del[index].addEventListener("click",()=>{

    price[index].textContent= 0 ;
    del[index].parentElement.remove();
    
   } ) ;
  
}

//add button

for (let i = 0; i < add.length; i++) {

  add[i].addEventListener("click", (event) =>{

    var btnClicked = event.target

    console.log(btnClicked);

    let parent =btnClicked.parentElement

    let p=parent.querySelector(".quant")

    p.textContent++;

    price[i].innerHTML=parseInt(p.textContent)*prices[i] + "$";
  }
  
  )
  
}

// minus button

for (let i = 0; i < minus.length; i++) {

  minus[i].addEventListener("click", (event) =>{

    var btnClicked = event.target

    console.log(btnClicked);

    let parent =btnClicked.parentElement

    let p=parent.querySelector(".quant")

    if ( p.textContent > 0) {

    p.textContent-- ;

    price[i].innerHTML=parseInt(p.textContent)* prices[i] + "$";

    }
  
  })
  
}



  function getPrice(){

    let sum = 0 ;

    for (let i = 0; i < price.length; i++) {
     
    sum += parseInt(price[i].innerHTML);
      
    }
    
    total.textContent= `${sum}$`;

    subtotal.textContent = `${sum}$`;

  }

  setInterval(getPrice, 1);