
// json contents 
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
//raw data
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log("response: ", response))
    .catch((error) => console.log("error: ", error));

//json parsing 
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        console.log("response: ", response);
        return response.json();
    })
    .then((message) => console.log(message)
    )


//POST 처리 
fetch("https://jsonplaceholder.typicode.com/posts/",{
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify({
        title: "Test",
        body: "I am testing!",
        userId: 1,
    }),
})  
    .then((response) => response.json())
    .then((data) => console.log(data));

