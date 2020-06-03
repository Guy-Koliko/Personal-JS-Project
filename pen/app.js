// defining variables

const form = document.querySelector('#atnd-form');
const fName = document.querySelector('#names');
const phone = document.querySelector('#phone');
const indexNumber = document.querySelector('#index');
const search = document.querySelector('#search');


// load the students
loadAllStudents();

//function to loadAllStudents
function loadAllStudents() {

    //Add evenListener to form variable
    form.addEventListener('submit', addStudents);

    //filter the student
    search.addEventListener('keyup', searchStudent);

    //Load DOM Content
    document.addEventListener('DOMContentLoaded', getStudent);

}


//function to addStudents

function addStudents(e) {


    creatTable();
    getStudent();

    e.preventDefault();


}

//function to store student to local storage
function storeStudentToLocal(student) {
    let stud;
    if (localStorage.getItem('school') === null) {
        stud = [];
    } else {
        stud = JSON.parse(localStorage.getItem('school'));
    }
    stud.push(student);

    localStorage.setItem('school', JSON.stringify(stud));
}

//function for creating table
function creatTable() {
    // studentPresent();
    let myTableDiv = document.querySelector(".div-main");
    let table = document.createElement('TABLE');
    table.border = '1';


    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (let i = 0; i < 1; i++) {
        let tr = document.createElement('TR');

        //adding classname to tr
        tr.className = 'each-table';

        tableBody.appendChild(tr);

        for (let j = 0; j < 1; j++) {
            let td = document.createElement('TD');
            let td1 = document.createElement('TD');
            let td2 = document.createElement('TD');
            td.width = '75';
            td1.width = '75';
            td2.width = '75';
            td.appendChild(document.createTextNode(fName.value));
            td1.appendChild(document.createTextNode(phone.value));
            td2.appendChild(document.createTextNode(indexNumber.value));

            studentPresent();
            //getting student into the localstorage
            let s1 = td.textContent;
            let s2 = td1.textContent;
            let s3 = td2.textContent;

            const store = [];
            store.push(s1, s2, s3)
            storeStudentToLocal(store);

        }
        myTableDiv.appendChild(link);

    }

    myTableDiv.appendChild(table);

    fName.value = '';
    phone.value = '';
    indexNumber.value = '';
}

//Searching through the student list
function searchStudent(e) {
    let search, tr, td, td1, i, txtValue;
    search = e.target.value.toUpperCase();
    tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(search) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//function to get student from the local storage
function getStudent() {
    let stud;
    if (localStorage.getItem('school') === null) {
        stud = [];
    } else {
        stud = JSON.parse(localStorage.getItem('school'));
    }
    stud.forEach(
        function (student) {


            let myTableDiv = document.querySelector(".div-main");
            let table = document.createElement('TABLE');
            table.border = '1';

            let tableBody = document.createElement('TBODY');
            table.appendChild(tableBody);
            //create a new link element
            const link = document.createElement('a');
            //create className for the new element
            link.className = 'delete-item secondary-content';


            for (let i = 0; i < 1; i++) {
                let tr = document.createElement('TR');


                //adding classname to tr
                tr.className = 'each-table';

                tableBody.appendChild(tr);

                for (let j = 0; j < 1; j++) {
                    let td = document.createElement('TD');
                    let td1 = document.createElement('TD');
                    let td2 = document.createElement('TD');
                    td.width = '75';
                    td1.width = '75';
                    td2.width = '75';

                    td.appendChild(document.createTextNode(student[0]));
                    td1.appendChild(document.createTextNode(student[1]));
                    td2.appendChild(document.createTextNode(student[2]));

                    tr.appendChild(td);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                }
                myTableDiv.appendChild(table);

            }

        }
    );
}

//function to check if student is recorded
function studentPresent() {
    let stud;
    if (localStorage.getItem('school') === null) {
        stud = [];
    } else {
        stud = JSON.parse(localStorage.getItem('school'));
    }

    stud.forEach(
        function (s) {
            let checked = s[2];
            if (checked) {
                alert(`NAME: ${s[0]},PHONE NUMBER: ${s[1]}, INDEX NUMBER: ${s[2]} ALREADY SIGNED `);

            }
        }
    );
}