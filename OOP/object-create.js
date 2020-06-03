//creating prototype with Object.fa-creative-commons

const personP = {

    greetings: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

const ama = Object.create(personP);
ama.firstName = 'Koliko';
ama.lastName = 'Edem';
ama.age = 30;

// console.log(ama)
console.log(ama.greetings())

//second method

const brad = Object.create(personP, {
    firstName: { value: 'Kojo' },
    lastName: { value: 'Monkey' },
    age: { value: 40 }
});

console.log(brad);
console.log(brad.greetings());
