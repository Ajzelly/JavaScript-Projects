// const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')
const clearListBtn = document.getElementById('clear-list-btn')
const removeItemBtn = document.getElementById('remove-item-btn')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){
    if (shoppingList.includes(itemInput.value)){
        alert('Item already in list')
    } else {
        shoppingList.push(itemInput.value)
        render()        
        itemInput.value = '' 
    }
})
clearListBtn.addEventListener('click', function(){
    shoppingList.length = 0
    render()
})

removeItemBtn.addEventListener('click', function(){
    shoppingList.pop()
    render()
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()

