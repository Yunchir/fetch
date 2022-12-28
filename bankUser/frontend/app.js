search.addEventListener("click", () => {
    fetch("http://localhost:3333/api/cars") 
    .then((res) => res.json())
})