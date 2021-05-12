//defining variables
let baseUrl = "http://localhost:3000"
let comUrl = "http://localhost:3000/comments"

const lSec = document.querySelector('div.likes-section')
const lSpan = document.querySelector('span.likes')
const lBtn = document.querySelector('button.like-button')
const comUl = document.querySelector('ul.comments')
const comForm = document.querySelector('form.comment-form')

//fetch from base
fetch(baseUrl + '/images/1')
    .then(res => res.json())
    .then(gramObj => rendGram(gramObj)
    // .then(console.log(gramObj)
    )
    
    //fetch coms

fetch(baseUrl + '/comments')
    .then(res => res.json())
    .then(array => {
        array.forEach(comObj => rendCom(comObj))
    }) 

//SA functions 
const rendGram = (gramObj) => {
    //grab vars
    const h2 = document.querySelector('h2.title')
    const image = document.querySelector('img.image')
    const likes = document.querySelector('span.likes')
    const subBtn = document.querySelector('button.comment-button')
   
    let comments = []

    //define vals
    image.dataset.id = gramObj.id
    h2.innerText = gramObj.title
    image.src = gramObj.image
    likes.innerText = gramObj.likes
    comments.innerText = comObj.content
    subBtn.data = gramObj.id 
    lBtn.data = gramObj.id
    lSpan.textContent = `${gramObj.likes} Likes`
    comForm.dataset.id = gramObj.id
    comUl.innerHTML = ''

    rendCom()
}

    //render comments
const rendCom = (comObj) => {
    // fetchCom()
    const newCom = document.createElement('li')
    newCom.textContent = comObj.content
    newCom.dataset.id = comObj.id

    comUl.append(newCom)
}

//event listeners
lBtn.addEventListener('click', e => {
    let likeN = parseInt(lSpan.textContent)
    fetch('http://localhost:3000/images/1', {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({likes: likeN + 1})
    })
        .then(res => res.json())
        .then(gramObj => {
            lSpan.textContent = `${gramObj.likes} Likes`
        })
})

comForm.addEventListener('submit', e => {
    e.preventDefault()
    let newCom = {
        id: '',
        imageId: e.target.dataset.id,
        content: e.target.comment.value
    }
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(newCom)
    })
    .then(res => res.json())
    .then(comObj => {
        rendCom(comObj)
        comForm.reset()
    })
})


