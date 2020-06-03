//get the dom element
document.getElementById('jokes').addEventListener('click', jokeGenerator);


//define the generator function

function jokeGenerator(e) {

    //get the user input
    const input = document.getElementById('get-jokes').value;

    //get the ajax call
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${input}`, true)
    xhr.onload = function () {
        //check if the server is alive
        if (this.status === 200) {
            const responds = JSON.parse(this.responseText);
            let = ouput = '';
            if (responds.type === 'success') {
                responds.value.forEach(function (joke) {
                    output = `
            
                            <li>${joke.joke}
                        
                    `

                    console.log(responds)
                });
            } else {
                ouput = 'Something went wrong';
            }

            document.getElementById('show-jokes').innerHTML = output;
        }
    }
    xhr.send();

    e.preventDefault();
}