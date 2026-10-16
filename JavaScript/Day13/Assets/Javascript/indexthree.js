let box = document.getElementById("box")
let btn = document.getElementById("btn")
let btno = document.getElementById("btno")

btn.addEventListener("click", ()=> {
    box.style.display = "none";
})

btno.addEventListener("click",()=> {
    box.style.display = "block";
})