// Utilize os arquivos de base disponibilizados para realizar os exercícios
// propostos. Manipule os elementos HTML utilizando o querySelectorAll e o
// setAttribute, aplicando as alterações necessárias para que fique
// semelhante a imagem abaixo.

// 1. Capture, armazene e manipule todos os elementos de classe "card".
// Modifique os estilos necessários nesses elementos para que fique
// semelhante a imagem.
const className = document.querySelectorAll(".card");
for (let i = 0; i < className.length; i++) {
  className[i].style.background = "orange";

  //FALTA TERMINAR
}

// 2. Capture, armazene e manipule todos os elementos de classe
// "titulo-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.
const titulo = document.getElementsByClassName("titulo-card");
for (let i = 0; i < titulo.length; i++) {
  titulo[i].style.color = "#2b385b";
}

// 3. Modifique o texto dos títulos nos cards para "Meu card".
for (let i = 0; i < titulo.length; i++) {
  titulo[i].innerText = "Meu Card";
}

// 4. Capture, armazene e manipule todos os elementos de classe
// "descricao-card". Modifique os estilos necessários nesses elementos
// para que fique semelhante a imagem.
const descricao = document.getElementsByClassName("descricao-card");
for (let i = 0; i < descricao.length; i++) {
  descricao[i].style.color = "white";
  descricao[i].style.fontSize = "14px";
}

// 5. Modifique o texto das descrições nos cards para "Descrição
// modificada pelo JavaScript".
for (let i = 0; i < descricao.length; i++) {
  descricao[i].innerText = "Descrição modificada pelo JavaScript";
}

// 6. Capture, armazene e manipule todos os elementos de classe
// "botao-editar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.
const botaoEditar = document.getElementsByClassName("botao-editar");
for (let i = 0; i < botaoEditar.length; i++) {
  botaoEditar[i].style.color = "white";
  botaoEditar[i].style.background = "green";
  botaoEditar[i].style.border = "0px";
  botaoEditar[i].style.width = "50px";
  botaoEditar[i].style.height = "30px";
  botaoEditar[i].style.borderRadius = "9px";
}

// 7. Capture, armazene e manipule todos os elementos de classe
// "botao-apagar". Modifique o estilo desses elementos para que fique
// semelhante a imagem.
const botaoApagar = document.getElementsByClassName("botao-apagar");
for (let i = 0; i < botaoEditar.length; i++) {
  botaoApagar[i].style.color = "white";
  botaoApagar[i].style.background = "red";
  botaoApagar[i].style.border = "0px";
  botaoApagar[i].style.width = "50px";
  botaoApagar[i].style.height = "30px";
  botaoApagar[i].style.borderRadius = "9px";
}

// 8. Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'.
// Essa função deve mostrar um alerta com a mensagem "Clicou em
// Editar!".
const editarCard = () => {
  alert("Clicou em Editar!");
};

let selecionarBotaoAdd = document.querySelectorAll(".botao-editar");

for (let i = 0; i < selecionarBotaoAdd.length; i++) {
  selecionarBotaoAdd[i].setAttribute("onclick", "editarCard()");
}
// 9. Adicione o atributo 'onclick' nos elementos de classe
// “botão-apagar”. Ao clicar nesses elementos deve chamar a função
// 'apagarCard()'. Essa função deve perguntar ao usuário se ele tem
// certeza da exclusão do card. Se o usuário confirmar a exclusão deve
// mostrar um alerta com a mensagem "Confirmado!", se não deve
// mostrar a mensagem "Cancelou!".
const apagarCard = () => {
  if (confirm("Deseja excluir este card?")) {
    alert("Confirmado");
  } else {
    alert("Cancelado");
  }
};

let selecionarBotaoApagar = document.querySelectorAll(".botao-apagar");

for (let i = 0; i < selecionarBotaoApagar.length; i++) {
  selecionarBotaoApagar[i].setAttribute("onclick", "apagarCard()");
}
