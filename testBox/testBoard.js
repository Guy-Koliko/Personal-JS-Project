//variables
const fName = document.querySelector('.put1');
const mName = document.querySelector('.put2');
const sName = document.querySelector('.put3');
const form = document.querySelector('#forms-me');
const divs = document.querySelector('.div-main');


//loading details
loadName();

function loadName() {
    form.addEventListener('submit', addNames);
}

function addNames(e) {
    let firstname = fName.value;
    let middlename = mName.value;
    let secondname = sName.value;
    let arr = { firstname, middlename, secondname };
    var myTableDiv = document.querySelector(".div-main");

    var table = document.createElement('TABLE');
    table.border = '1';


    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < 1; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < 1; j++) {
            var td = document.createElement('TD');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            td.width = '75';
            td1.width = '75';
            td2.width = '75';
            td.appendChild(document.createTextNode(firstname));
            td1.appendChild(document.createTextNode(secondname));
            td2.appendChild(document.createTextNode(middlename));
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
    }

    myTableDiv.appendChild(table);


    e.preventDefault();
}