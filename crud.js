const getLocalstorage = () => JSON.parse(localStorage.getItem('db_receita')) ?? [];
const setLocalstorage = (dbrec) => localStorage.setItem("db_receita", JSON.stringify(dbrec))

const tempreceita = {
    nome: "bolo",
    ingredientes: "ovo",
    preparo: "bater ovos",
    tempo: 15
}

//CREATE

const createReceita = (receita) => {
    const db_rec = getLocalstorage()
    dbrec.push(receita)
    setLocalStorage(dbrec)
}

//delete
const deleteReceita = (index) => {
    const dbrec = readrec()
    dbrec.splice
}

// Evento
document.getElementById('cadastrarRec').addEventListener('click',)
