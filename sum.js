
let overallSum= 0;
let number=0;

function sum(number){
    overallSum +=number;
    if(number-1==0){
        console.log(overallSum);
    }   
    else{
        number-=1;
        sum(number);
    } 
}
function triggerSum(){
    var numberUserInput = document.getElementsByTagName("input")[0].value;
    number = Math.round(numberUserInput);
    sum(number);
    document.getElementById('output').innerHTML = "The fibonacci series result is: " + overallSum;
}
