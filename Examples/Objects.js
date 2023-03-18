const cat = {
    "name": "whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["water", "Dogs"]
};

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

const myObject = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObject.prop1;
const prop2val = myObject.prop2;

const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
}

myObj["Space Name"];
myObj["More Space"];
myObj["NoSpace"];


const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);


const alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    //...
    24: "C",
    25: "B",
    26: "A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];



const ourStorage = {
    "desk": {
        "drawer": "stapler"
    }, 
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;


let obj = {
    name: "freeCodeCamp",
    review: "awesome"
};

Object.freeze(obj);


const user = {name: "John Dutton", age: 55};

const name = user.name;
const age = user.age;

const {name1, age3} = user;


const user2 = { name: "John Dutton", age: 55};

const {name: userName, age: userAge} = user;

const user3 = {
    johnDoe: {
        age: 55,
        email: 'jd@fcc.com'
    }
};

const { johnDoe: { age2, email}} = user3;

const { johnDoe: { age: userAge2, email: userEmail }} = user3;


const profileUpdate = (profileData) => {
    const {name, age, nationality, location } = profileData;
}

const profileUpdate2 = ({name, age, nationality, location}) => {

}


const person = {
    name: "Kayce Dutton",
    age: 32
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old`;

console.log(greeting);

const getMousePosition = (x, y) = ({
    x: x,
    y: y
});

const getMousePosition2 = (x, y) => ({x, y});

const person2 = {
    name: "Sabrina",
    sayHello: function() {
        return `Hello! My name is ${this.name}.`;
    }
};

const person3 = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
}

var spaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle('Jupiter');

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const mars = new SpaceShuttle("Mars");

class Book{
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


const tekkenCharacter = {
    player: "Hwoarang",
    fightingStyle: "Tae Kwon Doe",
    human: true
};

let nestedObject = {
    id: 28802695164,
    date: "December 31, 2016",
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8
        }
    }
};

nestedObject.data.onlineStatus.busy = 10;

for (let user in users) {
    console.log(user);
}

let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of the duck is " + duck.name + ".";}
}
duck.sayName();

function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}

let blueBird = new Bird();


function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let baldy = new Bird("eagle", "white");

let Bird = function(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;

Bird.prototype.numLegs = 2;


let duck2 = new Bird();
let beagle2 = new Dog();

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);


Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
        console.log("Nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

function Bird(name) {
    this.name = name;
}

let duck3 = new Bird("Donald");

Bird.prototype.isPrototypeOf(duck);

function Bird(name) {
    this.name = name;
}
typeof Bird.prototype;

Object.prototype.isPrototypeOf(Bird.prototype);


Bird.prototype = {
    constructor: Bird,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

Dog.prototype = {
    constructor: Dog,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

function Animal() {};

Animal.prototype = {
    constructor: Animal,
    describe: function() {
        console.log("My name is " + this.name);
    }
};

Bird.prototype = {
    constructor: Bird
};

Dog.prototype = {
    constructor: Dog
};

let animal = Object.create(Animal.prototype);

let animal2= new Animal();

Bird.prototype = Object.create(Animal.prototype);

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck4 = new Bird();
duck4.constructor

Bird.prototype.constructor = Bird;
duck4.constructor

function Animal() {};
Animal.prototype.eat = function() {
    console.log("Nom nom nom");
};
function Bird() {};
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function() {
    console.log("I'm flying!");
}

let duck5 = new Bird();
duck5.eat();
duck5.fly();

ChildObject.prototype = Object.create(ParentObject.prototype);

ChildObject.prototype.methodName = function() {};

function Animal() {};
Animal.prototype.eat = function() {
    return "nom, nom, nom";
}

function Bird() {};

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
    return "peck peck peck";
}


let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, woosh!");
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

function Bird() {
    let hatchedEgg = 10;
    
    this.getHatchedEggCount = function() {
        return hatchedEgg;
    };
}

let ducky = new Bird();
ducky.getHatchedEggCount();

(function() {
    console.log("Chirp, Chirp!");
})();


function glideMixin(obj) {
    obj.glide = function() {
        console.log("Gliding on the water");
    }
};


let flyMixin2 = function(obj) {
    obj.fly = function() {
        console.log("Flying, woosh!");
    }
};

let motionModule = (function () {
    return {
        glideMixin: function(obj) {
            obj.glide = function() {
                console.log("Gliding on the water");
            };
        },
        
        
        flyMixin2: function(obj) {
            obj.fly = function() {
                console.log("Flying, woosh!");
            };
        },
    }
}) ();

motionModule.glideMixin(duck);
duck.glide();