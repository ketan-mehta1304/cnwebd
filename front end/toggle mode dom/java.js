var toggled = false;

var box=document.querySelector(".box");
box.addEventListener('click',fun);
console.log(box); 
function fun(){
    if(!toggled) {
        document.body.style.backgroundColor = "black";
        toggled = true;
    } else {
        document.body.style.backgroundColor = "white";
        toggled = false;
    }
};