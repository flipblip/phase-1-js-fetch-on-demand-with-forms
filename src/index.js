const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');


        // console.log(event.target.children)
        // console.log(event.target.children[1].value)
        // console.log(input.value)

        // fetch(`http://localhost:3000/movies/${input.value}`)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })

        //modify DOM with data from server
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p')

            title.innerText = data.title;
            summary.innerText = data.summary;
        })
    });
  
}

document.addEventListener('DOMContentLoaded', init);