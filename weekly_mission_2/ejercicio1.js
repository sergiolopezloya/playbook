const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const facebook = {
    user: "Sergio Lopez",
    username: "@sergiolopezloya",
    bio: "Software Engineer",
    age: 39,
    location: "Mexico",
    website: "https://www.facebook.com/sergiolopezloya",
    posts: [
        {
            message: "I'm learning JavaScript",
            likes: 10
        },
        {
            message: "I'm learning React",
            likes: 20
        },
        {
            message: "I'm learning NodeJS",
            likes: 30
        }
    ],
    getUserInfo: function(){
        return `${this.user} ${this.username} ${this.bio} ${this.age} ${this.location} ${this.website}`
    },
    getPosts: function(){
        return this.posts
    },
    getTotalLikes: function(){
        let total = 0
        for(let i = 0; i < this.posts.length; i++){
            total += this.posts[i].likes
        }
        return total
    }
}

console.log('Nombre del usuario: ' + facebook.user)
console.log('Total de likes: ' + facebook.getTotalLikes())
console.log(facebook.getUserInfo())
console.log(facebook.getPosts())
