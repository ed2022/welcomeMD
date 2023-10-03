// This allows for the us to interact with the HTML Front end! 

const body = document.body; 
const container = document.querySelector('.container'); 
const message = document.querySelector('h1'); 
const emoji = document.querySelector('.emoji-container'); 

//Arrays of things that could happen! 
const backgroundColors = ['#FFC49F','#F49F95', '#C5A5B0', '#FDAFA4', '#CAC6E1']; 
const fontColors = ['#2A255C', '#3558AE', '#B64074','#F9C3D7','#B64074']; 
const languages = ['Hola BeyondMD!', 'Bonjour BeyondMD!','您好 BeyondMD!', '안녕하세요 BeyondMD!', 'السلام عليكم BeyondMD!'];
const emojisImgs = ['&#129442;', '&#129436;', '&#128056;', '&#128011;', '&#129419;'];
let index = 0;
 

// Allows us to control the colors at random per click! 
function designHandler(){
    index = Math.floor(Math.random()*5); 
    console.log(index); 
}

// This is what will happen when we use the event handlers! 
function eventHandler(){
    console.log("Working!");
    designHandler();
    body.style.background = backgroundColors[index];  
    console.log(`background color: ${body.style.background}`); 
    message.style.color = fontColors[index];
    console.log(`font color: ${message.style.color}`); 
    message.innerHTML = languages[index]; 
    console.log(`languages: ${message.innerHTML}`); 
    emoji.innerHTML = emojisImgs[index]; 
    console.log(`emoji : ${emoji.innerHTML}`); 
}

// Adding multiple event Handlers! 
window.addEventListener('click', eventHandler); 
window.addEventListener('keypress', eventHandler); 