//variables to use
const form = document.getElementById('temp-conv');
const degreeInput = document.getElementById('temp');
const farOutput = document.getElementById('far');

//loading the convertors

mainConverter();

//getting the convertor function 
function mainConverter() {

    form.addEventListener('submit', function (e) {

        //show the loader
        document.querySelector('#loader').style.display = 'block';
        //set the timeout
        setTimeout(getConvection, 2000);
        //prevent defualt

        e.preventDefault();
    });
}

//getting the functions

function getConvection() {

    //getting the formula
    const formula = (degreeInput.value * (9 / 5)) + 32;

    //checking finite
    if (degreeInput.value === '') {
        showErrors('Degree input can\'t be empty');
        document.querySelector('#loader').style.display = 'none';
        document.querySelector('.result').style.display = 'none';

    } else {
        if (isFinite(formula)) {
            farOutput.value = formula;
            document.querySelector('#loader').style.display = 'none';
            document.querySelector('.result').style.display = 'block';
        }
    }


}

function showErrors(e) {

    //get the card and the heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //create an error div

    const div = document.createElement('div');
    //add a classname
    div.className = 'alert alert-danger';

    //append the div to the error
    div.appendChild(document.createTextNode(e));

    //inset the error before the heading 

    card.insertBefore(div, heading);

    //set the timer for the error

    setTimeout(errorDisapper, 3000);
}

function errorDisapper() {
    document.querySelector('.alert').remove();
}