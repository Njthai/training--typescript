const square = (number:number) => {
    return number * number
}
console.log (square(2));

//anotcion de tipo primitivo
let user:string = "Jhon";
let num:number = 11;
let isActive: boolean = true;

//tipificación inferida
let hello = "world";

//anotación de tipos de array
const heroes:string[] = ["Thor", "Hulk", "iron man", "doctor strange"];
const numbers: number [] = [1,2,3]

// anotación de tipos de función
let sayHello: (greeting: string) => string;
sayHello = (greet) => `Hello ${greet}`

//Anotación de tipo objeto
let hero :  {
    character : string,
    powers : string[],
};

hero = {
    character: "Thor",
    powers: [
        "Uru-forged hammer Mjolnir",
        "superhuman strength",
        "speed",
        "endurance and resistance to injury",
    ],
};

//Interfaces
interface heroInterface {
    character:string;
    powers:string[];
}

const Hulk: heroInterface = {
    character: "Bruce Banner",
    powers: [ "incredible super human strenght", "durability", "healing factor"]
}
// Alias de tipo
 type seriesType = {
    title: string;
    mainCharacter:string;
    seasons:number;
 }
 const series1: seriesType = {
    title: "Mr robot",
    mainCharacter: "Elliot Alderson",
    seasons: 4,
 }

 // Interfaces como tipos
interface Login<U, P>{
    user:U;
    password:P;
}
let user1: Login<string,string>={
    user:"joe",
    password: "abcd"
}
let user2: Login<string,number>={
    user:"joe",
    password: 1234
}

//Tipos enumerados
enum Sizes{
    SMALL, MEDIUM, LARGE, X_LARGE
}
let pulloverSize = Sizes.MEDIUM;

// Tipado dinámico
let password:any= "abcd";
password= 1234
password=[]

let password2:unknown = true
//let password3=password2+123
let password3 = password2 + "true";

console.log (typeof password3);
console.log (password3);

// Uniones, intersections, tipos literales
interface Bear{
    weight:number;
    color:string;
}
interface Tiger {
    weight:number;
    speed: number;
}
interface Lion {
    strenght: string;
    speed: number;
}
let word : number|string;
word=1234
word= "abcd"

let animal: Bear ={
    weight: 200,
    color: "white",
}
let animal2: Bear|Tiger;
animal2 ={
    weight:250,
    color: "brown",
};

animal2 = {
    weight:150,
    speed:69,
    color:"pink",
};
let animal4 : Lion={
    strenght:"max",
    speed:69,

}

let animal3 : Bear | (Tiger & Lion)
animal3= {
    weight:300,
    color:"brown",
    speed:150,
    strenght:"max"
}

hello= undefined;
console.log(typeof hello);
hello= null;
console.log(hello);
const sayHello2 = (greet:string = "Naiara"): void=> {
    console.log ("Hello" + greet)
}
sayHello2();
sayHello2("Judith");

const retornoInalcanzable = () :never => {
    throw TypeError ("something went wrong");
}
const retornoInalcanzable2 = (number:number) :never => {
    while(true){
        console.log(number++);
    }
}
