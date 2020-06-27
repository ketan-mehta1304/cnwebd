var operand1=0;
var operand2=null;
var operator=null;
var display=document.querySelector(".display");
var button = document.getElementsByClassName("button");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', calculate);
}

function calculate(){
    var targetid=this.textContent.trim();
    if(isNaN(targetid)==false){
        display.innerHTML+=targetid;
    }else{
        if(targetid==='+'){
            operand1=parseFloat( display.innerHTML );
            display.innerHTML="";
            operator='+';
        }else if(targetid==='-'){
            operand1=parseFloat( display.innerHTML );
            display.innerHTML="";
            operator='-';
        }else if(targetid==='/'){
            operand1=parseFloat( display.innerHTML );
            display.innerHTML="";
            operator='/';
        }else if(targetid==='*'){
            operand1=parseFloat( display.innerHTML );
            display.innerHTML="";
            operator='*';
        }else if(targetid==='ac'){
            display.innerHTML="";
        }else if(targetid==='+/-'){
            
        }else if(targetid==='%'){
            operand1=parseFloat( display.innerHTML );
            display.innerHTML="";
            operator='%';
        }else if(targetid==='.'){
            display.innerHTML+=targetid;
        }else if(targetid==='='){
           operand2=parseFloat(display.innerHTML);
           display.innerHTML="";
           display.innerHTML=eval(operand1+" "+ operator+" "+ operand2);
        }
    }
};
