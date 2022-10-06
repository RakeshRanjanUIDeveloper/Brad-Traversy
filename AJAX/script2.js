const posts= [
    {"title": "title one", "name" :"This is post one"},
    {"title" :"title two", "name" :"This is post two"}
]

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output= '';
        posts.forEach(function(post){
            output +=`<li>${post.title}</li>`
        })
        document.body.innerHTML =output;
    },1000)
}

createPost({"title": "title three", "name" :"This is post three"}, getPosts)