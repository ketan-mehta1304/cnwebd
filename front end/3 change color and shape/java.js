var bt=0;
var button=document.querySelector(".button");
var correct=document.querySelector(".box");
button.addEventListener('click',fun);

function fun(){
    if(bt%2==0)
    correct.style.backgroundColor = "black";
    else 
    correct.style.backgroundColor = "blue";  
    bt++;
};
var bt1=0;
var button1=document.querySelector(".button1");
var btn=document.querySelector(".innerbox");

button1.addEventListener('click',fu);

function fu(){
    
    if(bt1%2==0)
    btn.style.borderTopLeftRadius="300px";
    else 
    btn.style.borderTopLeftRadius="0px";
    bt1++;
};