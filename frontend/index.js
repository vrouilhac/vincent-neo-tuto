let button=document.querySelector("#taskButton");
let input=document.querySelector("#TaskVal");

button.addEventListener("click",ButtonCallback);


function ButtonCallback(){
    console.log(input.value);

}
