function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}
function EditItem(){
    const item = this.parentElement
    const edit =
    document.createElement("input")
    item.innerHTML =
    item.appendChild(edit)
    item.appendChild_botaodelete()
    item.appendChild_botaoedit()
    edit.select()
}

function CriarBotaoEdit(){
    const button_edit =  document.createElement('button')
    button_edit.classList.add("btn", "btn-secondary")
    button_edit.innerHTML = "Edit"
    button_edit.type = "button"
    button_edit.addEventListener("click", EditItem);

    return button_edit
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    lista.appendChild (novo_item_lista)

    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild (novo_item_lista)

    document.getElementById("item").value = ""
}













// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}
