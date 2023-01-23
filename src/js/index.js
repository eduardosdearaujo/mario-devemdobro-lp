const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
});

fecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
})
