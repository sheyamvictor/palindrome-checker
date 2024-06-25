
var btn = document.getElementById("find")
    var inbox = document.getElementById("inbox")
    var result = document.getElementById("result")


btn.addEventListener("click" , ()=>{
       
var text =inbox.value.trim();


if(text.length== 0){
    alert("enter the text")
    return;
}

var cleanText = text.replace(/[^a-zA-Z0-9]/g ,"").toLowerCase();


var isPlaindrome = cleanText===cleanText.split("").reverse("").join("");

var message = isPlaindrome

?`<span> yes.</span>It,s a plaindrome!`
:`<span> no.</span>It,s not  plaindrome!`


result.innerHTML=message;

result.classList.remove("success","error");

setTimeout(()=>{

    result.classList.add(isPlaindrome?"success":"error");


  

})

});