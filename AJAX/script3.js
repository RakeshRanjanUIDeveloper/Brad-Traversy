const http = new easyHTTP;
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(posts);
//     }
// });
const data =
    {
        "title":"Custom Title",
        "body" : "Custom Body"
    }

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(post);
//     }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(post);
//     }
// })

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
});