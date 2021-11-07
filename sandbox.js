const btn = document.querySelector(".btn")
const list = document.querySelector(".todo-list");
const inputTodo = document.querySelector(".input-todo");
const todoFilter = document.querySelector(".todo-filter");

// function 
const addTodo = ((event)=>{ 
// prevent Defualt 
event.preventDefault();

if (inputTodo.value === ""){
    alert ("not defind");
}else{
// create div 
    const divTodo = document.createElement("div");
    divTodo.classList.add("info-box-todo");
    divTodo.contentEditable = "false"
    list.appendChild(divTodo);
// creat li 
    const li = document.createElement("li");
    li.innerText = inputTodo.value;
    inputTodo.value = ""
    li.classList.add("li-todo");
    divTodo.appendChild(li);    
// btn edit 
    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = `<img class="edited" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAd0lEQVRIie3P0QmAIBSF4Z/em6l2aIJokHxsBmerGRrBHuKCiBbktad74IAgfgfBcmcBDuAEPNBr4g4ISb1cdppLUSYNZIjO6S/2WlxAVxiZNXBpOuJyj77i0q0GfcOlY0t8Ndzwf3Ba408DKnhpQA3PDajilmwu1Ot0Hy1/FRoAAAAASUVORK5CYII="/>` ;
    btnEdit.classList.add("btn-edit");
    divTodo.appendChild(btnEdit);
// btn delete 
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML= `<img class="remove" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIieWTTQqDMBCFP6xb7yg9Qo/SHik3qUgXFlxWqGI3WYQ4Jc5I0NIHswnM+5lH4F9wAXpg9tP7NzVcQGIdFxIWFhcJzBk4D4Yb9vtfYzKpg2aDucWuJHDPLbAlwcJc9gQSTsAbfcEjUMZkUoIJeKi9Q+tFkgJg60Hc+SZg6UHc2S3BIQVUJ7J0oDJVAQPr/8DL76hwBp4ryDug1pL/Dj5MW2BhteGWuAAAAABJRU5ErkJggg=="/>` ;
    btnDelete.classList.add("btn-delete");
    divTodo.appendChild(btnDelete);
// btn complete
    const btnComplete = document.createElement("button");
    btnComplete.innerHTML = `<img class="done" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABBElEQVRIie3UMUoDQRQG4E8rUTAqRE9iIWij2IhYeQAP4BUEO7EJqJ122ukhbKwsRQRFEARBsQ4WmsQiWQizs5CNs2CRH6aZ9+Z9O7C7jPJPsoNj1KtElvCDDj6wWQUyiccekq0vjKeGjgKkg8vUyDJaAfKJhZTIFJ7lb7OdEoHTCHKRGllHO0DeMJcSqeFV/jYbZYbM4kD3uyjKeQQ5K4PM4LZ3sIm1SM9WBHnBdBnoOhjQxGpfvY73oKcd9AyUm8jT9mNXkfpJWQTmcV+ANSL7T7q/n6FSx11kaLhaWBkWKYMd/hUZBHvARCqoCPvGYkokS/iC7FeBZKlhD7sYqxIaJZdfhYF6R58+xmoAAAAASUVORK5CYII="/>`;
    btnComplete.classList.add("btn-complete");
    divTodo.appendChild(btnComplete); 
    }      
})
const btnTodo = (e)=>{
    const item = e.target ;
    if(item.classList[0]== "btn-complete") {
        const todo = item.parentElement
        todo.classList.toggle("dn");
    }
    if (item.classList[0] == "btn-delete"){
        item.parentElement.remove();
    }
    if (item.classList[0]== "btn-edit"){
        const edit = item.parentElement
       if ( edit.contentEditable === "true"){
        edit.contentEditable = "false";
       }else {
            edit.contentEditable = "true";
       }
    }
   
}

const todoFilters = (e)=>{
    const todo = Array.from(list.children);
    todo.forEach((td)=>{
        switch(e.target.value){
            case "all":
                td.style.display = "flex";
                break ;
            case "complete" :
                if (td.classList.contains("dn")){
                     td.style.display = "flex" ;
            }else{
                td.style.display = "none";
            }   
            break;
            
            case "uncomplete" :
                if(!td.classList.contains("dn")){
                    td.style.display = "flex";
                }else {
                    td.style.display = "none"
                }
                break
        }
        
    })

}
// event listener 
btn.addEventListener("click",addTodo);
list.addEventListener("click",btnTodo);
todoFilter.addEventListener("click", todoFilters)

