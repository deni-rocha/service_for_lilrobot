
 // VARIÁVEIS 

const btnOk = document.querySelector("#ok");
const mainJanela = document.querySelector(".main__janela"); 

// ADD EVENTO PRA PEGAR O CLICK NO BOTÃO OK

btnOk.addEventListener("click", function() {
  mainJanela.classList.add('active'); // add a classe "active"
})

