const boton = document.querySelector("#boton")
const modal = document.querySelector(".modal")
const botonCerrarModal = document.querySelector(".delete")

boton.onclick = () => {
    boton.classList.add("is-loading")
    setTimeout(() => {
        boton.classList.remove("is-loading")
    }, 2000) // son 2 segundos
    modal.classList.add("is-active")
}

botonCerrarModal.onclick = () => {
    modal.classList.remove("is-active")
}