let addbtn=document.getElementById("btn");
let content=document.getElementById("content");
let todoCon=document.getElementById("todo-container");

addbtn.addEventListener("click",function(){

    
        var todos=document.createElement("p");
        todos.classList.add("paragraph-style");
        todos.innerText=content.value;
        todoCon.appendChild(todos);
        // var btn=document.createElement("button");
        // btn.appendChild(document.createTextNode("Delete"));
        // var cross=document.createElement("button");
        // btn.appendChild(document.createTextNode("Cross"));
        //  todos.appendChild(btn);
        //  todos.appendChild(cross);
        content.value="";

        todos.addEventListener("click",function(){
            todos.style.textDecoration="line-through";
        })
        todos.addEventListener("dblclick",function(){
            todoCon.removeChild(todos);
        })
         
    

})