let box = document.getElementById("box")
let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    if(box.style.display === "none"){
        box.style.display = "block";
        btn.textContent = "Hide";
    }else{
        box.style.display = "none";
        btn.textContent = "Show";
    }
})