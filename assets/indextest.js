// write your code here
let baseUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
    //define variables
    const image = document.querySelector(".image")
    const likes = document.querySelector(".like-button")
    const comment = document.querySelector(".comment-button")

    //fetch from server
    const fetchGram = () => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach((gram) => renderGram(gram))           
        })
    }

    //patch
    const patchGram = (likes, gramId) => {
        fetch(baseUrl + `/${gramId}`, { 
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                'likes': likes,
            })
            .then(res => res.json())
            .then(console.log)
    })

    //post
    const postCom = (comments) => {
        fetch(baseUrl + `/$gramId`, {
            method: 'POST',
            headers: {     
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                'comment' : comments
             })
            .then(res => res.json())
            .then(console.log)
        })
    }

    //delete
    const delCom = (comments, gramId ) => {
        fetch(baseUrl + `/${gramId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                'comment': comments
            })
                .then(res => res.json())
                .then(console.log)
        })
    }
    

    //render page
    const renderGram = () => {
        //create elements
        let container = document.querySelector(".image-container")
            let card = document.querySelector(".image-card")
                let h2 = document.querySelector(".title")
                let image = document.querySelector(".image") 
                let likeSec = document.querySelector(".likes-section")
                    let likes = document.querySelector(".likes")
                    let likeBtn = document.querySelector(".like-button")
                let comments = document.querySelector(".comments")
                let comForm = document.querySelector(".comment-form")
                    let input = document.querySelector(".comment-input")
                    let submitBtn = document.querySelector(".comment-button")
        
        //define identifiers and set values
        h2.innerText = images.title
        image.src = images.image
        likes.innerText = images.likes
        comments.innerText = comments.content
        submitBtn.data = images.id 
        likeBtn.data = images.id
        submitBtn.innerText = "Post"

        //appending
        comForm.append(input, submitBtn)
        likeSec.append(likes, likeBtn)
        card.append(h2, image, likeSec, comments, comForm)
        container.appendChild(card)

        //event listeners
        likes.addEventListener('click', e => {
            let gramId = e.target.data
            likes.value ++
            let info = likes.innerText
            patchGram(gramId, info)
        })
        
        comment.addEventListener("submit", e => {
            e.preventDefault
            let comText = e.target.content.value
            postCom(comText)
        })
    }
    fetchGram()
})