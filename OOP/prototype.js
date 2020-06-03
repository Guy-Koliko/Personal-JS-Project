// constructor and this

function Person(firstName, lastName, dob) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const getAge = new Date(diff);
    //     return Math.abs(getAge.getUTCFullYear() - 1970);
    // }

}

Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const getAge = new Date(diff);
    return Math.abs(getAge.getUTCFullYear() - 1970);
}

//geting fullname
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}


const john = new Person('Kojo', 'Edem', '8-2-1020');
const mary = new Person('Mary', 'Johnson', '4 March 2002');
console.log(mary.getFullName());
console.log(john.getFullName(), john.calculateAge());

//get married

Person.prototype.getMarried = function (lastname) {
    return this.lastname = lastname
}

console.log(mary.getMarried('Ama'));
