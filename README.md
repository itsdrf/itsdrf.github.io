<!DOCTYPE html>
<html lang="pt-br">
 
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MYRECIPES</title>
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />

  
    <style>
    :root {
  --fundo: white;
  --lista-item-hover: #CDFAD5;
  --lista-item-clique: #F1C27B;
  --lista-item-fundo: #FFD89C;
  --lista-fundo: white;
  --lista-item-texto: black;
  --view-fundo: white;
  --view-borda: #FF8080;
  --edit-fundo: white;
  --delete-fundo: #FF8080;
  --delete-text: red;
  --scroll-cor-barra: rgb(8, 8, 8);
  --form-borda: black;
  --botao-cancelar-fundo: yellow;
  --botao-salvar-fundo: #CDFAD5;
  --botao-edit-hover: #F1C27B;
  --botao-delete-hover: #FF8080;
  --botao-create-click: #F1C27B;

}


::-webkit-scrollbar {
  width: 12px;
}


::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2rem;
}

::-webkit-scrollbar-track {
  background: #e0d7d7;
  border-radius: 2rem;
}


body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--fundo);
  color: black;
}

#btn-create {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  max-width: 280px;
  border: 1px solid black;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  

  && h2 {
   margin-top: 0.8rem;
   font-size: 1.3rem;
  }
  &&:hover{
    transform: scale(1.02);
    
  }
  &&:active{
    background-color: var(--botao-create-click);
  }
  & img {
    width: 1rem;
  }
}



#lista-modal {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

#lista {
  min-width: 280px;
  max-width: 300px;
  height: 400px;
  padding: 0;
  border: 1px solid #9A4444;
  background-color: var(--lista-fundo);
  color: var(--lista-item-texto);
  border-radius: 1rem;
  max-height: 400px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

#receita-lista p,
h2 {
  margin: 0;
  margin-bottom: 0.8rem;
}

#receita-lista h2 {
  padding-left: 1rem;
}

#receita-lista {
  list-style-type: none;
  min-height: 5rem;
  border-bottom: 1px solid black;
  background-color: var(--lista-item-fundo);
  cursor: pointer;

  && header {
    padding-top: 1.2rem;
  }

  && :hover {
    background-color: var(--lista-item-hover);
  }

  && :active {
    background-color: var(--lista-item-clique);
  }
  
}



#receita-lista.last {
  border-bottom: 0px;
}

#vazio {
  margin: 0;
  margin-bottom: 0.8rem;
  margin-top: 1rem;
  padding-left: 1rem;
  list-style-type: none;
  height: 5rem;
  border-bottom: 1px solid black;
}

#vazio.false {
  display: none;
}

.info-resumo {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  && .tempo,
  .rendimento {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 50%;
    padding-left: 1rem;
  }
}

.info-resumo .tempo img {
  width: 1rem;
}

.info-resumo .rendimento  img{
  width: 1rem;
}


#modal {
  border: 1px solid saddlebrown;
  border-radius: 1rem;
  height: 400px;
  padding-left: 1rem;
  padding-right: 1rem;
  display: none;

}

#modal.active {
  border: 1px solid saddlebrown;
  border-radius: 1rem;
  height: 400px;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  transition: 2s;
  transition-property: all;
  transition-delay: 300ms;
}

#modal-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.3rem;
}

#view {
  height: 400px;
  padding-left: 1rem;
  padding-right: 1rem;
  display: none;
}

#view.active {
  border: 1px solid var(--view-borda);
  background-color: var(--view-fundo);
  border-radius: 1rem;
  height: 400px;
  padding-left: 1rem;
  padding-right: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 30%;
  max-width: 400px;
}

#view2 {
  width: 100%;
  height: 80%;
  overflow-y: auto;
  scroll-behavior: smooth;
  word-wrap: break-word;
  
}

#view.active .nome {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.fechar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  width: 100%;
}

#x2 {
  transform: scale(2);
  cursor: pointer;
  margin: 0.5rem;
}

#btn {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#edit-btn {
  border: 1px solid saddlebrown;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.4rem;
  pointer-events: all;
  cursor: pointer;

  && p {
    margin-block: 0px;
    
    
  }
}

#edit-btn:hover {
  background-color: var(--botao-edit-hover);
}

#delete-btn {
  border: 1px solid red;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  && p {
    margin-block: 0px;
    color: var(--delete-text);
    font-weight: bold;
  }

}
#delete-btn:hover {
   background-color: var(--botao-delete-hover);
 }

#view.active #nome {
  font-size: 2rem;
  text-align: left;
  padding-left: 0px;
  padding-top: 0rem;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.info h3 {
  font-size: 1rem;
  font-weight: 100;
  padding-right: 0.5rem;
  padding-left: 0rem;
}

#view.active .rend,
.tempo {
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

#view.active .rend {
  padding-right: 1rem;
}

#view.active .ingred {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 0.5rem;

  && h3 {
    font-size: 1rem;
  }

  && p {
    font-size: 1rem;
    font-weight: 100;
  }
}

#view.active .preparo {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 0.6rem;

  && h3 {
    font-size: 1rem;
  }

  && p {
    font-size: 1rem;
    font-weight: 100;
  }
}

#x {
  transform: scale(2);
  margin: 0.5rem;
  cursor: pointer;
}

#add-receita {
  height: 90%;
}

#myform {
  padding: 0.5rem;
  overflow-y: auto;
}

#myform-pai {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#myform-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem;
  margin-left: 0px;
}

#div-ingre {
  display: flex;
  justify-content: stretch;
  width: 100%;
  margin: 0.5rem;
  margin-left: 0px;
  margin-top: 0px;
}

#div-preparo {
  display: flex;
  justify-content: stretch;
  width: 100%;
  margin: 0.5rem;
  margin-left: 0px;

}

#div-tempo {
  display: flex;
  justify-content: left;
  width: 50%;
}

#div-rend {
  display: flex;
  justify-content: right;
  width: 50%;


}

#div-nome {
  display: flex;
  justify-content: stretch;
}

.book-field#nome {
  width: 100%;
  padding: 0.3rem;
  word-break: break-all;
  border: 1px solid gray;
  border-radius: 0.5rem;

}

.book-field#tempo {
  width: 85%;
  padding: 0.3rem;
  word-break: break-all;
  border: 1px solid gray;
  border-radius: 0.5rem;

}

.book-field#rendimento {
  width: 85%;
  padding: 0.3rem;
  word-break: break-all;
  border: 1px solid gray;
  border-radius: 0.5rem;

}

.book-field#ingredientes {
  width: 100%;
  padding: 0.3rem;
  word-break: break-all;
  border: 1px solid gray;
  border-radius: 0.5rem;
  white-space: pre-wrap;
  resize: none;

}

.book-field#preparo {
  width: 100%;
  padding: 0.3rem;
  word-break: break-all;
  border: 1px solid gray;
  border-radius: 0.5rem;
  resize: none;
  white-space: pre-wrap;

}

#modal-footer {
  padding: 0.5rem;
}

.btn-save {
  background-color: var(--botao-salvar-fundo);
  border: black 1px solid;
  border-radius: 0.3rem;
  cursor: pointer;

}

.btn-cancel {
  background-color: var(--botao-cancelar-fundo);
  border: black 1px solid;
  border-radius: 0.3rem;
  cursor: pointer;

}

#view2::-webkit-scrollbar {
  display: block;
  width: 5px;
}

#view2::-webkit-scrollbar-track {
  background: transparent;
}

#view2::-webkit-scrollbar-thumb {
  background-color: var(--scroll-cor-barra);
  border-right: none;
  border-left: none;
}

#view2::-webkit-scrollbar-track-piece:end {
  background: transparent;
  margin-bottom: 10px;
}

#view2::-webkit-scrollbar-track-piece:start {
  background: transparent;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}


@-webkit-keyframes swing-in-left-fwd {
  0% {
    -webkit-transform: rotateY(100deg);
    transform: rotateY(100deg);
    -webkit-transform-origin: left;
    transform-origin: left;
    opacity: 0;
  }

  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    -webkit-transform-origin: left;
    transform-origin: left;
    opacity: 1;
  }
}

@keyframes swing-in-left-fwd {
  0% {
    -webkit-transform: rotateY(100deg);
    transform: rotateY(100deg);
    -webkit-transform-origin: left;
    transform-origin: left;
    opacity: 0;
  }

  100% {
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
    -webkit-transform-origin: left;
    transform-origin: left;
    opacity: 1;
  }
}

#mensagem {
  display: none; 
  background-color: var(--botao-salvar-fundo); 
  color: black; 
  padding: 10px; 
  position: absolute; 
  top: 5%; 
  right: 2%; 
  transform: translate(-50%, -50%); 
  z-index: 999; 
  border: 1px green solid;
  border-radius: 0.5rem;
}
  </style>
  <script>
    const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_receita")) ?? [];

const setLocalStorage = (db_receita) =>
  localStorage.setItem("db_receita", JSON.stringify(db_receita));

const IsValidFields = () => {
  return document.getElementById("myform").reportValidity();
};

const clearFields = () => {
  const fields = document.querySelectorAll(".book-field");
  fields.forEach((field) => (field.value = ""))
  
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
};

const clear_li = () => {
  const itens = document.querySelectorAll("#receita-lista");
  itens.forEach((row) => row.parentNode.removeChild(row));
};

const ordenar = () => {
  const db_receita = readreceita();
  db_receita.sort((a, b) => a.nome.localeCompare(b.nome));
  setLocalStorage(db_receita);
};

const update_li = () => {
  ordenar();
  const db_receita = readreceita();
  clear_li();
  db_receita.forEach(createrow);
  vazio();
};


let modo = "create"

//---------------------------------------


const createrow = (receita, index) => {
  const newrow = document.createElement("li");
  newrow.id = "receita-lista";
  newrow.innerHTML = `
    <div id='${index}' class='pai'>
    <header>
    
        <h2>${receita.nome}</h2>
        </header>
        <div class="info-resumo">
        <div class="tempo">
        <p>${receita.tempo}</p>
        <img src="css/time-outline.svg" alt="">
        
        </div>
        <div class="rendimento">
        <p>${receita.rendimento}</p>
        <img src="css/icons8-gráfico-de-pizza-64.png" alt="">
        </div>
        </div>
        </div>
        </div>

    `;

  document.getElementById("lista").appendChild(newrow);
};

const vazio = () => {
  const receitas = getLocalStorage().length;

  if (receitas >= 1) {
    document.getElementById("vazio").classList.add("false");
  } else {
    document.getElementById("vazio").classList.remove("false");
  }
};

//create
const createreceita = (receita) => {
  const db_receita = getLocalStorage();
  db_receita.push(receita);
  
  setLocalStorage(db_receita);
};

//read
const readreceita = () => getLocalStorage();

//update
const updatereceita = (index, receita) => {
  const db_receita = readreceita();
  db_receita[index] = receita;
  setLocalStorage(db_receita);
};

//delete
const deletereceita = () => {
  const index = document.getElementById("delete-btn").className;
  const db_receita = readreceita();
  db_receita.splice(index, 1);
  setLocalStorage(db_receita);
  update_li();
  closeView();
};

const savereceita = () => {
  if (IsValidFields()) {
    const receita = {
      nome: document.getElementById("nome").value,
      tempo: document.getElementById("tempo").value,
      rendimento: document.getElementById("rendimento").value,
      ingredientes: document.getElementById("ingredientes").value,
      preparo: document.getElementById("preparo").value
    };

    const index = document.getElementById('nome').dataset.index
    console.log(index)

    if (modo === "create"){
        createreceita(receita);
        console.log("Cadastrando");
        clearFields();
        update_li();
        closeModal();
    }
    if (modo === "edit"){
        updatereceita(index, receita)
        clearFields();
        update_li();
        closeModal();
    }

    // window.alert('Salvo')
    mostrarMensagem()
    modo = 'create'
  }
};

function mostrarMensagem() {
  var mensagem = document.getElementById("mensagem");
  mensagem.style.display = "block"; // Torna a mensagem visível
  setTimeout(function() {
      mensagem.style.display = "none";
  }, 1000); 
}


const animain = (elemento) =>{
    // const lista = document.getElementById("lista")
    // lista.style.setProperty('-webkit-animation', "slide-in-right .8s .3s both")
    // lista.style.setProperty('animation', "slide-in-right .8s .3s both")
    elemento.style.setProperty('-webkit-animation', 'swing-in-left-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both')
    elemento.style.setProperty('animation', 'swing-in-left-fwd 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) both')
}





const editreceita = () => {
  const index = document.getElementById("edit-btn").className;
  const receita = readreceita()[index];
  receita.index = index;
  modo = 'edit'
  fillfields(receita);
  openModal();
};

const openreceita = (index) => {
  const receita = readreceita()[index];
  receita.index = index;
  filltext(receita);
  openView();
};

const opentela = (event) => {
  

  const child = event.target;
  console.log(child);
  const pai = child.closest(".pai");
  if(pai){
    const index = pai.id
    console.log(index);
    const receita = readreceita()[index];
    const view = document.getElementById("view2");
    view.scrollTop = 0;
    openreceita(index);
  }
};

const fillfields = (receita) => {
  document.getElementById("nome").value = receita.nome;
  document.getElementById("tempo").value = receita.tempo;
  document.getElementById("rendimento").value = receita.rendimento;
  document.getElementById("ingredientes").value = receita.ingredientes;
  document.getElementById("preparo").value = receita.preparo;
  document.getElementById("nome").dataset.index = receita.index;
};

const filltext = (receita) => {
  document.querySelector("#view #nome").innerText = receita.nome;
  document.querySelector("#view #tempo").innerText = receita.tempo;
  document.querySelector("#view #rend").innerText = receita.rendimento;
  document.querySelector("#view #ingred").innerText = receita.ingredientes;
  document.querySelector("#view #preparo").innerText = receita.preparo;
  document.querySelector("#edit-btn").setAttribute("class", receita.index);
  document.querySelector("#delete-btn").setAttribute("class", receita.index);
};

const listaMax = () => {
  const receitas = document.getElementById("lista").children;
  const itens = receitas.length;

  if (itens > 4) {
    const lastitem = receitas[itens - 1];
    lastitem.classList.add("last");
  }
};

const troca = () => {
  const input = document.querySelectorAll(".book-field");

  for (var i = 0; i < 5; i++) {
    input[i].setAttribute("disabled", "");
  }

  //document.querySelectorAll(".book-field").

  //input.classList.add('disabled')
};

const openModal = () => {
  if (modo === 'edit'){
    document.getElementById("modal-modo").innerHTML = 'Editando'
  } else{
    document.getElementById("modal-modo").innerHTML = 'Nova receita'

  }

  closeView();
  const modal = document.getElementById("modal");
  animain(modal)
  modal.classList.add("active");
};
const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  clearFields();
};
const openView = () => {
  closeModal();
  const open = document.getElementById("view");
  animain(open)
  open.classList.add("active");
};
const closeView = () => {
  const view = document.getElementById("view");
  view.classList.remove("active");
};

//ações

update_li();
vazio();
listaMax();

document.getElementById("salvar").addEventListener("click", savereceita);

document.getElementById("cancelar").addEventListener("click", clearFields);

document.getElementById("lista").addEventListener("click", opentela);

document.getElementById("btn-create").addEventListener("click", openModal);

document.getElementById("edit-btn").addEventListener("click", editreceita);

document.getElementById("delete-btn").addEventListener("click", deletereceita);

document.getElementById("x").addEventListener("click", closeModal);

document.getElementById("x2").addEventListener("click", closeView);
  </script>
  </head>

  <body>
    <div id="mensagem">Salvo</div>
    <header>
      <h1>Minhas Receitas</h1>
    </header>

    <div id="btn-create">
      <h2>Adicionar nova receita</h2>
      <img src="css/add-circle-outline.svg" alt="">
    </div>

    <div id="lista-modal">
      <ul id="lista">
        <li id="vazio">
          <h2>Nenhuma receita adicionada.</h2>
        </li>
      </ul>

      <div id="modal">
        <div id="add-receita">
          <header id="modal-title">
            <h1 id="modal-modo">Nova receita</h1>
            <i id="x" class="bx bx-x"></i>
          </header>

          <form id="myform">
            <div id="myform-pai">
              <div id="div-nome">
                <input
                  type="text"
                  id="nome"
                  class="book-field"
                  placeholder="Nome da receita"
                  required
                />
              </div>
              <div id="myform-row">
                <div id="div-tempo">
                  <input
                    type="text"
                    id="tempo"
                    class="book-field"
                    placeholder="Tempo de preparo"
                    required
                  />
                </div>
                <div id="div-rend">
                  <input
                    type="text"
                    id="rendimento"
                    class="book-field"
                    placeholder="Rendimento"
                    required
                  />
                </div>
              </div>
              <div id="form-column">
                <div id="div-ingre">
                  <textarea name="ingredientes" id="ingredientes"  class="book-field" rows="5" placeholder="Ingredientes"></textarea>
                  <!-- <input
                    type="text"
                    id="ingredientes"
                    class="book-field"
                    placeholder="Ingredientes"
                    required
                  /> -->
                </div>
                <div id="div-preparo">
                  <textarea name="preparo" id="preparo" class="book-field" rows="5" placeholder="Modo de preparo"></textarea>
                  <!-- <input
                    type="text"
                    id="preparo"
                    class="book-field"
                    placeholder="Modo de preparo"
                    required
                  /> -->
                </div>
              </div>
            </div>
          </form>

          <footer id="modal-footer">
            <button id="salvar" class="btn-save">Salvar</button>
            <button id="cancelar" class="btn-cancel">Cancelar</button>
          </footer>
        </div>
      </div>


      
      <div id="view">
        <div class="fechar">
          <div id="btn">
            <div id="edit-btn">
              <p>Editar</p>
            </div>
            <div id="delete-btn">
              <p>Excluir</p>
            </div>
          </div>
          <i class="bx bx-x" id="x2"></i>
        </div>
        <div id="view2">
          <div class="nome">
            <h2 id="nome"></h2>
          </div>
          <div class="info">
            <div class="tempo">
              <h3>Tempo:</h3>
              <p id="tempo"></p>
            </div>
            <div class="rend">
              <h3>Rendimento:</h3>
              <p id="rend"></p>
            </div>
          </div>
          <div class="ingred">
            <h3>Ingredientes:</h3>
            <p id="ingred">ddddds</p>
          </div>
          <div class="preparo">
            <h3>Modo de preparo:</h3>
            <p id="preparo"></p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
