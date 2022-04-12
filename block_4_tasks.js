// Task1
let car = {
    color: "black"
};

// Task2
car.color = "green";

// Task3
function power() {
    let engine = "320 hp";
    return console.log(engine);
}
car.power = power();

// Task4
function CalcAmount(pears, apples) {
    return pears + apples;
}

// Task5
function CheckName(name) {
    if (name == "Oleh") {
        console.log(`Welcome ${name}`);
    } else {
        console.log("There is no such name");
    }
}

// Task6
function CheckType(arg) {
    return console.log(typeof(arg));
}

// Task7
function isPrime(num) {
    for (let i = 2; i < num; i++){
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}