const btn = document.querySelector("button");

function alterarTema() {
    document.body.classList.toggle("dark");
}

btn.addEventListener("click", () => {
    alterarTema();
})