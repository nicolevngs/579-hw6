

// PROBLEM SET5: LIBRARY ONE USED: libphonenumber (https://gitlab.com/catamphetamine/libphonenumber-js/#cdn) ---- Used as a user input to re-format phone numbers :)
// SECOND LIBRARY USED: swiper (https://swiperjs.com/) for image carrousel

import {AsYouType} from 'libphonenumber-js';
import Swiper from 'swiper';

var block = document.getElementById('band1');

block.addEventListener ("click" , changeColor)

function changeColor(){  
    
    console.log(block.style.background);
   
    if ( block.style.background === "rgb(167, 188, 222)")
    {
        block.style.background = "#f03e3e";
        

    }
    else{
        block.style.background= "#A7BCDE";

    }
}


var SubmitButton = document.getElementById("guestName")
var theName = document.getElementById("Userinput")

SubmitButton.addEventListener('click',  GreetMessage )

function GreetMessage(){
    
    alert("Hello " + theName.value + " nice to meet you!");

}

var block2= document.getElementById("band2")
block2.addEventListener("mousemove", ChangeBorder);

function ChangeBorder() {
    block2.style.border = "solid 10px black";
  }


var HideButton = document.getElementById("HideButton")
var theTable = document.getElementById("table")

HideButton.addEventListener ("click" , HideTable)

function HideTable() {
    theTable.parentNode.removeChild(theTable)
}

var phone = document.getElementById("number-input");
phone.addEventListener ("input" , EditNumber)
console.log(phone);

function EditNumber(e) {
    console.log(this.value);
    let formatted = new AsYouType('US').input(this.value);
    this.value = formatted;
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
