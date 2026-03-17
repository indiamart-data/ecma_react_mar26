class Person {
    constructor(name, city) {
        this._name = name;
        this._city = city;
    }

    get Name() {
        return this._name;
    }

    set Name(value) {
        this._name = value;
    }

    get City() {
        return this._city;
    }

    set City(value) {
        this._city = value;
    }
}

let p1 = new Person("Manish", "Pune");
console.log(p1.Name);
console.log(p1.City);
p1.Name = "Abhijeet";
p1.City = "Mumbai";
console.log(p1.Name);
console.log(p1.City);
