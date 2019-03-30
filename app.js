//initialize xml
const xhr = new XMLHttpRequest();

const getJokes = document.getElementById('jokeForm').addEventListener('submit', genJoke);

function genJoke(e) {
    const number = document.querySelector('input[type="number"]').value;

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
    
    xhr.onload = function(e) {
        let output = '';
        if(this.status === 200) {
            const jokes = JSON.parse(this.responseText);
            if(jokes.type === 'success'){
                jokes.value.forEach(function(jokes){
                    output +=`<li>${jokes.joke}</li>`
                });
            } else {
                output += `
                <li>something went wrong</li>
                `;
            }
            const jokeOutput = document.querySelector("#jokeOutput");
            jokeOutput.innerHTML = output;
        }
    };

    xhr.send();
    e.preventDefault();
}