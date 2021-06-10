
const btn = document.querySelector("button")
const list = document.querySelector(".todoList");



btn.addEventListener("click",function(){
    const input = document.querySelector(".todo");
    const li = document.createElement("li");
    if (input.value==""){
        alert("please enter your task")
    }
    else{
        li.innerText = input.value;
        input.value=""
        list.prepend(li)
    }
   
    
})