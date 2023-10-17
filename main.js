let usersEL = document.querySelector(".content .users")
let postsEl = document.querySelector(".content .posts")

function getUsers () {
    let requstUsers = new XMLHttpRequest()
    requstUsers.open("GET", "https://jsonplaceholder.typicode.com/users")
    requstUsers.send()
    console.log(requstUsers)
    requstUsers.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            let users = JSON.parse(this.responseText)
            for (let i = 0; i < users.length; i++) {
                let user = `
                <div id="asas" class="user" onclick="changepost(${users[i].id}, this)">
                    <h2>${users[i].name}</h2>
                    <p>${users[i].email}</p>
                </div>
                `
                usersEL.innerHTML += user
            }
        }
    }
}


function getPosts (userid) {
    let requstPosts = new XMLHttpRequest()
    requstPosts.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    requstPosts.send()
    console.log(requstPosts)
    requstPosts.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {
            let posts = JSON.parse(this.responseText)
            postsEl.innerHTML = ""
            for (let i = 0; i < posts.length; i++) {
                let post = `
                <div class="post">
                    <h2>${posts[i].title}</h2>
                    <p>${posts[i].body}</p>
                </div>
                `
                postsEl.innerHTML += post
            }
        }
    }
}

getUsers()
getPosts(1)

function changepost(id, el) {
    getPosts(id)
    let active = document.getElementsByClassName("active")
    for (act of active) {
        act.classList.remove("active")
    }
    el.classList.add("active")
}

