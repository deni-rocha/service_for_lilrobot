
// VARIÁVEIS
const btnOkEdit = document.querySelector("#janelaEdit___ok");
const btnEdit = document.querySelector("#edit");
const navEdit = document.querySelector(".navbar__janelaEdit");

// ADD EVENTO PRA PEGAR O CLICK NO NAVBAR (EDIT)

btnEdit.addEventListener("click", function() {
  navEdit.classList.toggle("active"); // adiciona a classe "active"
})

btnOkEdit.addEventListener("click", () => {
  navEdit.classList.remove("active"); // remover active apertando no "ok"
})