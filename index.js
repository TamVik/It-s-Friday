let hoverText = document.getElementById("hover-text")

hoverText.addEventListener("mouseover", function(){
    hoverText.style.display = "none"
})

hoverText.addEventListener("mouseleave", function(){
    hoverText.style.display = "block"
    hoverText.style.display = "flex"
})