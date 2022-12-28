fetch("http://localhost:3333/api/users")
  .then((res) => res.json())
  .then((data) => {
    // balance(data);

    let users = document.querySelector(".users");
    data.map((user) => {
      users.innerHTML += `<div class="user">
            <div class="name">Name: ${user.name}</div>
            <div class="balance">Balance: ${user.balance}</div>
          </div>`;
    });
  });

let button = document.querySelector("button");
let input = document.querySelector("input");
button.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((data) => {
      for (i = 0; i < 1; i++) {
        data.map((user) => {
          if (user.balance_type) {
            let interestRate =
              input.value * (user.balance * 0.1) + user.balance;
            console.log(interestRate);
          } else {
            let interestRates =
              input.value * (user.balance * 0.01) + user.balance;
            // console.log(interestRates);
          }
        });
      }
    });
});
