/*
Classes in JavaScript
JavaScript classes are a syntactical sugar over JavaScript's existing prototype-based inheritance. 
They provide a clearer and more concise way to create objects and handle inheritance.
Classes are defined using the class keyword, followed by the class name and a block of code that defines the class's properties and methods.
Classes can have a constructor method, which is called when an instance of the class is created.
Classes can also have static methods, which are called on the class itself rather than on instances of the class.
Classes can extend other classes, allowing for inheritance and the ability to create subclasses.
Classes can implement interfaces, which are contracts that define the methods and properties that a class must implement.
Classes can be abstract, meaning they cannot be instantiated directly and are meant to be subclassed.
*/
// // 1. Class Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// // 2. Class Expression
const Animal = class {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }

    makeSound() {
        console.log(`The ${this.type} goes ${this.sound}`);
    }
};

// // 3. Inheritance
class Dog extends Animal {
    constructor(name) {
        super("dog", "bark");
        this.name = name;
    }

    bark() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// // 4. Static Method
class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

// // 5. Abstract Class
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract class cannot be instantiated.");
        }
    }

    area() {
        throw new Error("Method 'area()' must be implemented.");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// // 6. Private Fields
class Counter {
    #count = 0; // private field

    increment() {
        this.#count++;
    }

    getCount() {
        return this.#count;
    }
}

// // 7. Getters and Setters
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions({ width, height }) {
        this.width = width;
        this.height = height;
    }
}

// // 8. Method Overriding
class Cat extends
    Animal {
    constructor(name) {
        super("cat", "meow");
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// // 9. Class with Constructor Overloading
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return `${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }

    getDetails() {
        return `${this.year} ${super.getDetails()}`;
    }
}

// // 10. Class with Default Parameters
class Book {
    constructor(title, author = "Unknown") {
        this.title = title;
        this.author = author;
    }

    getDetails() {
        return `${this.title} by ${this.author}`;
    }
}

// // 11. Class with Rest Parameters
class ShoppingCart {
    constructor(...items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }
}
