var first = document.getElementById("num1")
var second = document.getElementById("num2")
var ans = document.getElementById("answer")

document.getElementById("addition").addEventListener("click",function(){
    ans.value = parseInt(first.value)+parseInt(second.value);
});

document.getElementById("subtraction").addEventListener("click",function(){
    ans.value = parseInt(first.value)-parseInt(second.value);
});

document.getElementById("multiplication").addEventListener("click",function(){
    ans.value = parseInt(first.value)*parseInt(second.value);
});

document.getElementById("division").addEventListener("click",function(){
    ans.value = parseInt(first.value)/parseInt(second.value);
});

document.getElementById("percent").addEventListener("click",function(){
    ans.value = parseInt(first.value)%parseInt(second.value);
});