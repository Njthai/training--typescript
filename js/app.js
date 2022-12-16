const square = (number) => {
    return number * number;
};
console.log(square(2));
//anotcion de tipo primitivo
let user = "Jhon";
let num = 11;
let isActive = true;
//tipificación inferida
let hello = "world";
//anotación de tipos de array
const heroes = ["Thor", "Hulk", "iron man", "doctor strange"];
const numbers = [1, 2, 3];
// anotación de tipos de función
let sayHello;
sayHello = (greet) => `Hello ${greet}`;
//Anotación de tipo objeto
let hero;
hero = {
    character: "Thor",
    powers: [
        "Uru-forged hammer Mjolnir",
        "superhuman strength",
        "speed",
        "endurance and resistance to injury",
    ],
};
const Hulk = {
    character: "Bruce Banner",
    powers: ["incredible super human strenght", "durability", "healing factor"]
};
const series1 = {
    title: "Mr robot",
    mainCharacter: "Elliot Alderson",
    seasons: 4,
};
let user1 = {
    user: "joe",
    password: "abcd"
};
let user2 = {
    user: "joe",
    password: 1234
};
//Tipos enumerados
var Sizes;
(function (Sizes) {
    Sizes[Sizes["SMALL"] = 0] = "SMALL";
    Sizes[Sizes["MEDIUM"] = 1] = "MEDIUM";
    Sizes[Sizes["LARGE"] = 2] = "LARGE";
    Sizes[Sizes["X_LARGE"] = 3] = "X_LARGE";
})(Sizes || (Sizes = {}));
let pulloverSize = Sizes.MEDIUM;
// Tipado dinámico
let password = "abcd";
password = 1234;
password = [];
let password2 = true;
//let password3=password2+123
let password3 = password2 + "true";
console.log(typeof password3);
console.log(password3);
let word;
word = 1234;
word = "abcd";
let animal = {
    weight: 200,
    color: "white",
};
let animal2;
animal2 = {
    weight: 250,
    color: "brown",
};
animal2 = {
    weight: 150,
    speed: 69,
    color: "pink",
};
let animal4 = {
    strenght: "max",
    speed: 69,
};
let animal3;
animal3 = {
    weight: 300,
    color: "brown",
    speed: 150,
    strenght: "max"
};
hello = undefined;
console.log(typeof hello);
hello = null;
console.log(hello);
const sayHello2 = (greet = "Naiara") => {
    console.log("Hello" + greet);
};
sayHello2();
sayHello2("Judith");
const retornoInalcanzable = () => {
    throw TypeError("something went wrong");
};
const retornoInalcanzable2 = (number) => {
    while (true) {
        console.log(number++);
    }
};
