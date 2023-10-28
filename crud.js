const openModal = () => document.getElementById('modal')
    .classList.add('active') 

const openModal1 = () => document.getElementById('modal1')
    .classList.add('active') 


const closeModal = () => {
    clearInfo()
    document.getElementById('modal').classList.remove('active')
}
const closeModal1 = () => {
    clearInfo()
    document.getElementById('modal1').classList.remove('active')
}


const trocatela = () => document.getElementById('tela').classList.add('disabled') 
const voltatela = () => {
    document.getElementById('tela').classList.remove('disabled')
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

const clearInfo = () =>{
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
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createReceita(receita)
            updateTable()
            closeModal()
        } else {
            updateReceita(index, receita)
            updateTable()
            closeModal()
        } 
        }
    }

    const createRow = (receita, index) => {
        const newRow = document.createElement('tr')
        newRow.innerHTML = `
            <td>${receita.nome}</td>
            <td>${receita.ingredientes}</td>
            <td>${receita.preparo}</td>
            <td>${receita.tempo}</td>
            <td>
                <button type="button" class="button green" id="edit-${index}">Editar</button>
                <button type="button" class="button red" id="delete-${index}" >Excluir</button>
            </td>
        `
        document.querySelector('#tableClient>tbody').appendChild(newRow)
    }
    
    const clearTable = () => {
        const rows = document.querySelectorAll('#tableClient>tbody tr')
        rows.forEach(row => row.parentNode.removeChild(row))
    }
    
    const updateTable = () => {
        const dbrec = readReceita()
        clearTable()
        dbrec.forEach(createRow)
    }
    
    const fillFields = (receita) => {
        document.getElementById('nome').value = receita.nome
        document.getElementById('ingredientes').value = receita.ingredientes
        document.getElementById('preparo').value = receita.preparo
        document.getElementById('tempo').value = receita.tempo
         }
    
    const editReceita = (index) => {
        const receita = readReceita()[index]
        receita.index = index
        fillFields(receita)
        document.querySelector(".modal-n>h2").textContent  = `Editando ${receita.nome}`
        openModal()
    }
    
    const editDelete = (event) => {
        if (event.target.type == 'button') {
    
            const [action, index] = event.target.id.split('-')
    
            if (action == 'edit') {
                editReceita(index)
            } else {
                const receita = readReceita()[index]
                const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
                if (response) {
                    deleteReceita(index)
                    updateTable()
                }
            }
        }
    }
    
    updateTable()

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cadastrarReceita').addEventListener('click', openModal);
    document.getElementById('cadastrarReceita').addEventListener('click', openModal1);
    document.getElementById('cadastrarReceita').addEventListener('click', trocatela);


    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalClose').addEventListener('click', closeModal1);
    document.getElementById('modalClose').addEventListener('click', voltatela);
    document.getElementById('salvar').addEventListener('click', saveReceita);
});

//document.getElementById('cadastrarReceita').addEventListener('click', openModal);






