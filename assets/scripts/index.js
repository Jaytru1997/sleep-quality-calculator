
//Thank you modal
let modal=document.querySelector(".modal")
document.getElementById("modal-link").addEventListener("click", () => {
    modal.style.display="block"
})

document.querySelector(".close").addEventListener("click", () => {
    modal.style.display="none"
})

window.addEventListener("click", (e) => {
    if (e.target==modal) {
        modal.style.display="none"
    }
});