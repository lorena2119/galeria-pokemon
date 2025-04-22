let add = document.getElementById("addPokemon");
let namePokemon = document.getElementById("namePokemon");
let img = document.getElementById("imagen");


add.addEventListener('click', (e) => {
    e.preventDefault()
    const text = namePokemon.value.trim()
    const img1 = img.value
    if (!text || !img1) {
        alert('Campos vacíos');
        return
    }
    const card = document.createElement('div')
    const nameP = document.createElement('h2')
    const url = document.createElement('img')
    const _delete = document.createElement('button')
    _delete.textContent = 'x'
    _delete.classList = 'delete'
    url.src = img1
    nameP.textContent = text
    card.appendChild(url)
    card.appendChild(nameP)
    card.appendChild(_delete)
    card.classList = "card"
    document.getElementById('cards').appendChild(card)
    namePokemon.value = ""
    img.value = ""
})