// write your code here
let baseUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", () => {
    //fetch from base
    const fetchGram = () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.forEach((gram) => renderGram(gram))   
            }) 
            // console.log("peaches") works
    }

    const renderGram = () => {
        //create elements
        // console.log("yo") this isn't logging, but fetchGram logs peaches. why is renderGram not getting called?

        let h2 = document.querySelector(".title")
        let image = document.querySelector(".image") 
        let likes = document.querySelector(".likes")
        let likeBtn = document.querySelector(".like-button")
        let comments = document.querySelector(".comments")
        const submitBtn = document.querySelector(".comment-button")
        let commentForm = document.querySelector(".comment-form")
        let likesSection = document.querySelector(".likes-section")
        let imageCard = document.querySelector(".image-card")
        let imageContainer = document.querySelector(".image-container")
        
        //define identifiers and set values
        h2.innerText = images.title
        image.src = images.image
        likes.innerText = images.likes
        comments.innerText = comments.content
        submitBtn.data = images.id 
        likeBtn.data = images.id
        submitBtn.innerText = "Post"

        //appending
        commentForm.append(input, submitBtn)
        likesSection.append(likes, likeBtn)
        imageCard.append(h2, image, likesSection, comments, commentForm)
        imageContainer.appendChild(imageCard)

        //event listeners
        likes.addEventListener('click', e => {
            let gramId = e.target.data
            gramId.likes.value ++
            let info = likes.innerText
            patchGram(gramId, info)
        })
        
        comment.addEventListener('submit', e => {
            e.preventDefault
            let comText = e.target.content.value
            postCom(comText)
        })
    }
    fetchGram();
})
   

//focusing in on 
    // cleaning up fetch syntax x
    // keeping variable names and function calls consistent x
    // syntax my dude x
    //make sure routes lead to right place

//notes for Friday
    //why is renderGram not getting called?
    //old js moved to src/indextest.js
    //does everything get called?