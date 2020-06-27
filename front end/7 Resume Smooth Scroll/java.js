var touch1=document.querySelector(".touch");
touch1.addEventListener('click',fun);
let current=0;
function fun(){
    var k=setInterval(function(){ 
        if(current>1430){
            clearInterval(k);
            return;
        }
        current+=50;
        window.scrollBy(0,50) }, 50);
        
}; 