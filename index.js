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

for (let i = 0; i < posts.length; i++) {
    let userInfo = posts[i]
    printScreen(userInfo)
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
            <img src="${element.post}" id="post-photo-${element.username}" class="photo-size">
          </div>
        </section>
        
        <section id="comment-section">
        <div class="container">
            <img src="images/icon-heart.png" id="heart-${element.username}" class="heart-class">
            <img src="images/icon-comment.png" class="icon">
            <img src="images/icon-dm.png" class="icon">
        </div>
    </section>
    
    <section id="likes">
                <div class="container">
                    <p class="likesClass"><span id="likes-el-${element.username}">${element.likes}</span> likes</p>
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
        let actualPhotoId = item.id
        let idphoto = " "

        for (let i = 0; i < posts.length; i++) {
            let user = posts[i].username
            idphoto = "post-photo-" + user
            const likesEl = document.getElementById("likes-el-" + user)
            if (idphoto === actualPhotoId) {
                likesEl.textContent = posts[i].likes += 1
            }
        }


    })
})

document.querySelectorAll('.heart-class').forEach(item => {
    item.addEventListener('dblclick', event => {
        let actualHeart = item.id
        let idheart = " "


        for (let i = 0; i < posts.length; i++) {
            let user = posts[i].username
            idheart = "heart-" + user
            const likesEl = document.getElementById("likes-el-" + user)
            if (idheart === actualHeart) {
                likesEl.textContent = posts[i].likes += 1
                let heartEl = document.getElementById(idheart)
                console.log(heartEl);
                heartEl.style.opacity = "30%"
            }


        }


    })
})