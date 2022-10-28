window.onload= function() {
    display=document.getElementById("display").value; 
}
var num1=0;
var num2=0;
//var num1 =document.getElementById("num1");
//var num2 =document.getElementById("num2");
var operacion;
var value=document.getElementById("numero");;

function numero(numero){  
    var result= document.getElementById("display");
    var value= document.getElementById("numero");
    result.value+=numero;//
   // console.log(numero.innerHTML);
//var display= document.getElementById('display');
//var operacion =document.getElementById('display').value;
//operacion+=numero;
//display.value=operacion;
}
function result () {
   value= document.getElementById("display");
   console.log(operacion);
    // result.value=eval(result);
   //return (parseInt(numero1) =(parseInt(numero2)));
}
function clickResult ( ) { }

function suma(num1, num2){ 
    var display = document.getElementById('display');
    var numero= parseInt(document.getElementById(num1));
    var numero= parseInt(document.getElementById(num2));

   // display(num1+num2);
     result.value+=numero;
    var num1 = document.getElementById("result");
    var num2 = document.getElementById("result");
    var value =document.getElementById("numero");
    document.getElementById("result");
     operacion = document.getElementById("result");
    // suma.addEventListener("click", clickSuma);
     console.log(num1, num2);
    return (parseInt(num1) +(parseInt(num2)));
     //document.getElementById("result").value = num1 + '+';
   // console.log(value.innerHTML);
   //document.getElementById("memoria").value = "suma"; 
    //var suma = document.getElementById("suma");
    //document.getElementById("resultado").value = num1 + "+";
    //var operacion = document.getElementById("suma");
   
   // operacion ='+';
   // display=(value.result); //revisar 
}
    function clickSuma ( ) {}
     

function resta(num1, num2){
    var display = document.getElementById('display');
    result.value-=numero;
    var num1 = document.getElementById("result");
    var num2 = document.getElementById("result");
    var value =document.getElementById("numero");
    document.getElementById("result");
    operacion = document.getElementById("numero");
    console.log(resta.innerHTML);
    return (parseInt(num1) -(parseInt(num2)));
    //display=(value.result);//revisar

    
}
    function clickResta ( ) { }

function multiplicacion(num1, num2){
    var display = document.getElementById('display');
    var num1 = document.getElementById("result");
    var num2 = document.getElementById("result");
    var value =document.getElementById("numero");
    document.getElementById("result");
    operacion = document.getElementById("numero");
     return (parseInt(num1) *(parseInt(num2)));
   // console.log(multiplicacion.innerHTML);
   

   // var multiplicacion = document.getElementById("multiplicacion");
   // var display = document.getElementById('display');
   // var value =document.getElementById("numero");
    //multiplicacion.addEventListener("click", clickMultiplicacion);//
   // operacion='*';
 //   display=(value.result);//revisar
    
}
    function clickMultiplicacion ( ) { }

function division(num1, num2){
    var display = document.getElementById('display');
    var num1 = document.getElementById("result");
    var num2 = document.getElementById("result");
    var value =document.getElementById("numero");
    document.getElementById("result");
    operacion = document.getElementById("numero");
     return (parseInt(num1) *(parseInt(num2)));

    //var numero= document.getElementById('display').value;
    //numero='/';
    //display=(value);
    //var division = document.getElementById("division");
    //division.addEventListener("click", clickDivision);
    //console.log(division.innerHTML);
   // return (parseInt(num1) /(parseInt(num2)));
 }
 
 function clickDivision ( ) {    }

function borrar(){ //C  listo 
 var display = document.getElementById('display');
 display.value="";
}
function operacion () {
 display = document.getElementById('display');
//aqui van las operaciones 
operacion= document.getElementById('numero');
 suma = num1 + num2;
 resta = num1 - num2;
 multiplicacion = num1 * num2;
 division = num1 / num2;
result = operacion;
console.log(operacion);
}




//revisar lo del api 
//revisar variables 
//botones 





