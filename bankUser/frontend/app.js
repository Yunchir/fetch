
    fetch("http://localhost:3333/api/users") 
    .then((res) => res.json())
    .then((data) => {
        let users = document.querySelector(".users")
        data.map((user) =>  {
            users.innerHTML += `<div class="user">
            <div class="name">Name: ${user.name}</div>
            <div class="balance">Balance: ${user.balance}</div>
          </div>`
        })
    })

    
    function balance (users) {
        
    }