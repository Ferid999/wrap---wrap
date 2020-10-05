const body = document.getElementsByTagName("body")[0];

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>
response.json()
).then((data)=>{


    for(let index = 0; index <data.length; index++){
        let container = document.createElement("div")
        container.classList.add("cart")
        container.style.width = "18rem"
        body.classList.add("flex")
        container.classList.add("border")
        container.innerHTML =`

       <div class="card-body">
       <h5 class="card-title">${data[index].title}</h5>
       <h6 class="card-subtitle mb-2 text-muted">${data[index].id}</h6>
       <p class="card-text">${data[index].body}</p>
    
        </div>

        
        
        `

        body.appendChild(container)

    }
})