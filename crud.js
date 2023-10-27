const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearinfo()
    document.getElementById('modal').classList.remove('active')
}

const getLocalstorage = () => JSON.parse(localStorage.getItem('dbrec')) ?? [];
const setLocalstorage = (dbrec) => localStorage.setItem("dbrec", JSON.stringify(dbrec))

const tempreceita = {
    nome: "arroz",
    ingredientes: "ovo",
    preparo: "bater ovos",
    tempo: 15
}

//read
const readReceita = () => getLocalstorage()

//CREATE
const createReceita = (receita) => {
    const dbrec = getLocalstorage()
    dbrec.push(receita)
    setLocalstorage(dbrec)
}

//update
const updateReceita = (index, receita) =>{
    const dbrec = readReceita ()
    dbrec[index] = receita
    setLocalstorage(dbrec)
}

//delete
const deleteReceita = (index) =>{
    const dbrec = readReceita()
    dbrec.splice(index,1)
    setLocalstorage(dbrec)
}
const isValidFields = () => {
    document.getElementById('form').reportValidity();
}

const clearinfo = () =>{
    const info = document.querySelectorAll('.modal-info')
    info.forEach(info => info.value = "" )
}

const saveReceita = () =>{
    if (isValidFields()){
        const receita = {
            Nome: document.getElementById('Nome').value,
            Ingredientes: document.getElementById('Ingredientes').value,
            Preparo: document.getElementById('Preparo').value,
            Tempo: document.getElementById('Tempo').value,
        }
        createReceita(receita)
        clearinfo()
        closeModal  ()
        console.log ("Criando nova receita")
    }
}

document.getElementById('cadastrarReceita')
.addEventListener('click', openModal)

document.getElementById('modalClose')
.addEventListener('click', closeModal)

document.getElementById('salvar')
.addEventListener('click', saveReceita)
