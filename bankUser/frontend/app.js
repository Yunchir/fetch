// const { clear } = require("console");

let users = document.querySelector(".users");
fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((data) => {
    // balance(data);

    data.map((user) => {
      users.innerHTML += `<div class="user">
            <div class="name">Name: ${user.name}</div>
            <div class="surName">sureName: ${user.surName}</div>
            <div class="balance">Balance: ${user.balance}</div>
          </div>`;
    });
  });

let button = document.querySelector("button");
let input = document.querySelector("input");
button.addEventListener("click", () => {
  users.innerHTML= ""
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((data) => {
        data.map((user) => {
          let money = user.balance 
            for (i = 0; i < input.value; i++) {
              if(user.balance_type){
                money = money * 0.1 + money;
                console.log(money)
              } else {
                money = money * 0.01 + money;
                console.log(money)
              }
            }
              users.innerHTML += `<div class="user">
            <div class="name">Name: ${user.name}</div>
            <div class="surName">sureName: ${user.surName}</div>
            <div class="balance">Balance: ${money}</div>
          </div>`;
      })
  });
});

clear.removeEventListener("click", () => {
  
  fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((data) => {
      data.map((user) => {
        users.innerHTML = ""
       
          
            users.innerHTML += `<div class="user">
          <div class="name">Name: ${user.name}</div>
          <div class="surName">sureName: ${user.surName}</div>
          <div class="balance">Balance: ${user.balance}</div>
        </div>`;
    })
});

});



