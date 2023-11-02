

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_receita')) ?? []

const setLocalStorage = (db_receita) => localStorage.setItem("db_receita", JSON.stringify(db_receita))




const IsValidFields = () => {
    return document.getElementById("myform").reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll(".book-field")
    fields.forEach(field => field.value = '')
    
}


const clear_li = () => {
    const itens = document.querySelectorAll("#receita-lista")
    itens.forEach(row => row.parentNode.removeChild(row))
}

const update_li = () => {
    const db_receita = readreceita();
    clear_li();
    db_receita.forEach(createrow)
    vazio()

}

//---------------------------------------


const createrow = (receita, index) => {
    const newrow = document.createElement('li')
    newrow.id = 'receita-lista';
    newrow.innerHTML = `
    <div id='open-${index}' class='pai'>
    <header>
    
        <h2>${receita.nome}</h2>
        </header>
        <div class="info-resumo">
        <div class="tempo">
        <p>${receita.tempo}</p>
        <i class='bx bxs-time'></i>
        </div>
        <div class="rendimento">
        <p>${receita.rendimento}</p>
        <i class='bx bxs-pie-chart-alt-2'></i>
        </div>
        </div>
        </div>
        </div>

    `

    document.getElementById('lista').appendChild(newrow)


}


const vazio = () => {
    const receitas = getLocalStorage().length


    if (receitas >= 1) {
        document.getElementById('vazio').classList.add('false')

    }
}


//create
const createreceita = (receita) => {
    const db_receita = getLocalStorage()
    db_receita.push(receita)
    setLocalStorage(db_receita)

}

//read
const readreceita = () => getLocalStorage();


//update
const updatereceita = (index, receita) => {
    const db_receita = readreceita()
    db_receita[index] = receita
    setLocalStorage(db_receita)
}


//delete
const deletereceita = (index) => {
    const db_receita = readreceita()
    db_receita.splice(index, 1)
    setLocalStorage(db_receita)
}

const savereceita = () => {
    if (IsValidFields()) {
        const receita = {
            nome: document.getElementById('nome').value,
            tempo: document.getElementById('tempo').value,
            rendimento: document.getElementById('rendimento').value,
            ingredientes: document.getElementById('ingredientes').value,
            preparo: document.getElementById('preparo').value,
        }
        createreceita(receita)
        console.log('Cadastrando')
        clearFields()
        update_li()

    } else {
        console.log("erro")
    }
}



const editreceita = (index) => {
    const receita = readreceita()[index]
    receita.index = index
    fillfields(receita)
    openModal();
}

const openreceita = (index) =>{
    const receita = readreceita()[index]
    receita.index = index
    filltext(receita)
    openView()
} 




const opentela = (event) => {
    const child = (event.target)
    console.log(child)
    const pai = child.closest('.pai')
    const [action, index] = pai.id.split('-')
    
    if (action === 'open') {
        const receita = readreceita()[index];
        console.log(index)
        console.log(action)
        const view = document.getElementById('view2')
        view.scrollTop = 0;
        openreceita(index)
    }
    
}

const ler = (event) =>{

} 




const fillfields = (receita) => {
    document.getElementById('nome').value = receita.nome
    document.getElementById('tempo').value = receita.tempo
    document.getElementById('rendimento').value = receita.rendimento
    document.getElementById('ingredientes').value = receita.ingredientes
    document.getElementById('preparo').value = receita.preparo
    document.getElementById('nome').dataset.index = receita.index
}
const filltext = (receita) => {
    document.querySelector('#view #nome').innerText = receita.nome
    document.querySelector('#view #tempo').innerText = receita.tempo
    document.querySelector('#view #rend').innerText = receita.rendimento
    document.querySelector('#view #ingred').innerText = receita.ingredientes
    document.querySelector('#view #preparo').innerText = receita.preparo
}

const listaMax = () => {
    const receitas = document.getElementById('lista').children
    const itens = receitas.length
    
    if (itens > 4) {
        const lastitem = receitas[itens - 1]
        lastitem.classList.add('last')
    }
}


const troca = () => {
    const input = document.querySelectorAll('.book-field')

    for (var i = 0; i < 5; i++) {
        input[i].setAttribute('disabled', '')

    }

    //document.querySelectorAll(".book-field").

    //input.classList.add('disabled')

}

const openModal = () => {
    closeView()
    const modal = document.getElementById('modal')
    modal.classList.add('active')
}
const closeModal = () => {
    const modal = document.getElementById('modal')
    modal.classList.remove('active')
    clearFields()
}
const openView = () => {
    const open = document.getElementById('view')
    open.classList.add('active')
    closeModal()
    
}
const closeView = () => {
    const view = document.getElementById('view')
    view.classList.remove('active')
}


//ações


update_li();

vazio();
listaMax();


document.getElementById('salvar').addEventListener('click', savereceita);

document.getElementById('cancelar').addEventListener('click', clearFields);


document.getElementById('lista').addEventListener('click', opentela);

document.getElementById('btn-create').addEventListener('click', openModal);
document.getElementById('x').addEventListener('click', closeModal);
document.getElementById('x2').addEventListener('click', closeView);