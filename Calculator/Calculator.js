$(function(){
    let result = 0;
    let prevEntry = 0;
    let operation = null;
    let currentEntry = '0';
    updateScreen(result);

    $(".button").on('click',function(){
        let buttonPressed = $(this).html();
       console.log(buttonPressed);
   
    if(buttonPressed === "C"){
        result = 0;
        currentEntry = '0';
    }else if(buttonPressed === "CE"){
        currentEntry = '0';
    }else if(buttonPressed === "Back"){
        currentEntry = currentEntry.substring(0,currentEntry.length-1);
        //the substring(start,end) shows the characters between its interval
    }else if(buttonPressed ==="+/-"){
        currentEntry *= -1;
    }else if(buttonPressed ==="."){
        currentEntry += '.';
    }else if(isNumber(buttonPressed)){
        if(currentEntry === '0'){
            currentEntry = buttonPressed;
          //this part doesnt let calculator have "00"  
        }else{
            currentEntry += buttonPressed; 
        }
    }else if(isOperator(buttonPressed)){
      //  console.log(prevEntry);
        prevEntry = parseFloat(currentEntry);
        operation = buttonPressed;
        currentEntry = '';
    }else if(buttonPressed === "%"){
        currentEntry = currentEntry/100;
    }else if(buttonPressed === "sqrt"){
        currentEntry = Math.sqrt(currentEntry);
    }else if(buttonPressed === "1/x"){
        currentEntry = 1/currentEntry;
    }else if(buttonPressed === "pi"){
        currentEntry = Math.PI;
    }else if(buttonPressed === "="){
        currentEntry = operate(prevEntry,currentEntry,operation);
        operation = null;
        
    }
    updateScreen(currentEntry);
});

});
function updateScreen(displayValue){
    var displayValue = displayValue.toString();
    //I have no idea why let is not working
    $(".screen").html(displayValue.substring(0,10));
    //this let screen shows up to 10 charachters on the screen
    
};
function isNumber(value){
    return !isNaN(value);
}
function isOperator(value){
    return value === "/" || value === "*" || value === "+" || value === "-" ;
}
function operate(a,b,operation){
    a = parseFloat(a);
    b = parseFloat(b);
   // console.log(a,b,operation);
    if(operation === "+") return a+b;
    if(operation === "-") return a-b;
    if(operation === "*") return a*b;
    if(operation === "/") return a/b;
}