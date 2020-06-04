//this project is to use the fetch api to get data from a text file and
// from a locak JSON file and then from an external API

//get the buttons by their id's
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApiEX);



//define the getText function
function getText() {
    //now declear the fetch function
    fetch('text.txt')
        .then(function (response) {
            return response.text();
        }).then(function (data) {
            document.getElementById('output').innerHTML = data;
        }).catch(function (err) {
            console.log(err)
        });
}

//get the getJSON function
function getJson() {
    fetch('data.json')
        .then(function (jso) {

            return jso.json();
        }).then(function (data) {
            let output = '';

            data.forEach(function (post) {
                output += `
            
                <li>${post.type}</li>
                <li>${post.comment}</li>
                <li>${post.id}</li>
                `;
            })
            document.getElementById('output').innerHTML = output

        }).catch(function (err) {
            console.log(err)
        });
}

//get the api from external file

function getApiEX() {
    fetch('https://api.github.com/users')
        .then(function (data) {
            return data.json();

        }).then(function (j) {
            let output = "";
            j.forEach(function (user) {
                output += `<li>${user.login}</li>`
            });
            document.getElementById('output').innerHTML = output;
        }).catch(function (error) {
            console.log(error);
        });
}