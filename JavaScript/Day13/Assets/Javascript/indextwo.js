let box = document.getElementById("box")
let btn = document.getElementById("btn")
let btno = document.getElementById("btno")

btn.addEventListener("click",() => {
    box.style.backgroundColor = "blue";
    box.style.color = "white";
})

btno.addEventListener("click",() =>{
    box.style.backgroundColor = "yellow";
    box.style.color = "white";
})