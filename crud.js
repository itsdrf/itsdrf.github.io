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

