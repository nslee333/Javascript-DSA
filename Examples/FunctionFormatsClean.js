

function traditionalFunction() {
    console.log("Hello World!");
}

traditionalFunction();


function traditionalFun2(param1, param2) {
    console.log(param1, param2);
}

traditionalFun2();

function tradFun1(num) {
    return num + 3;
}

tradFun1();

const arrowFunction = function() {
    console.log("Hello World!");
}


const arrowFunctionV2 = () => {
    console.log("Hello World!");
}



const arrowFunctionV3 = () => "value";

const doubler = (item) => item * 2;

const doubler2 = item => item * 2;

const multiplier = (item, multi) => item * multi;

multiplier(4,2);

const greeting = (name = "Anonymous") => "Hello" + name;

console.log(greeting("John"));
console.log(greeting());



function howMany(...args) {
    return "You have passed" + args.length +  " arguments.";
}

console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));


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

function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function(y) {
        return x + y;
    }
}

const curried = x => y => x + y;

curried(1)(2);

const funcForY = curried(1);
console.log(funcForY(2));

function impartial(x, y, z) {
    return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(13);