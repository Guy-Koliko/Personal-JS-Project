// constructor and this

function Person(names, dob) {

    this.name = names;
    this.birthday = new Date(dob);

    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const getAge = new Date(diff);
        return Math.abs(getAge.getUTCFullYear() - 1970);
    }

}


const john = new Person('Edem', '8-2-1020');
console.log(john.calculateAge());