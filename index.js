const posts = [{
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const infoContent = document.getElementById("info-content")
const heartEl = document.getElementById("the-heart")
const likesEl = document.querySelector("likes-el")

let likesArray = []

for (let i = 0; i < posts.length; i++) {
    let userInfo = posts[i]
    printScreen(userInfo)
    likesArray.push(userInfo.likes)
}

function printScreen(element) {
    infoContent.innerHTML +=
        `<section id="info-poster">
        <div class="container">
        <img src="${element.avatar}" class="poster-pic">
        <div id="poster-text">
            <h3 class="poster-user">${element.name}</h3>
            <p class="poster-location">${element.location}</p>
        </div>
        </div>
        </section>
    
        <section id="photo-section">
          <div class="container">
            <img src="${element.post}" id="post-photo" class="photo-size">
          </div>
        </section>
        
        <section id="comment-section">
        <div class="container">
            <img src="images/icon-heart.png" class="icon" class="heart" id="the-heart">
            <img src="images/icon-comment.png" class="icon">
            <img src="images/icon-dm.png" class="icon">
        </div>
    </section>
    
    <section id="likes">
                <div class="container">
                    <p class="likes-el">${element.likes} likes</p>
                </div>
            </section>
    
            <section id="title-comment">
                <div class="container">
                    <p class="comment">${element.username} <span class="lighter">${element.comment}</span> </p>
                </div>
            </section>

            
        `

}

document.querySelectorAll('.photo-size').forEach(item => {
    item.addEventListener('dblclick', event => {
        alert("clicked")
    })
})