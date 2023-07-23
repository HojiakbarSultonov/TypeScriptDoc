// data types==============

let a: number = 12;
let b: string = "text";
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
let f: { name: string } = { name: "Hojiakbar" };
f.name;

let g: any; // any istalgan typeni oladi, lekin bu typeni ishlatish tavsiya qilinmaydi!!!
g = 12;

// ==================================================================================

//Typescript =>functions, signature functions, function overloads==============

// function pow(x: number, y: number):number {
//   return x ** y;
// }
// pow(3, 4);

// const add = (x:number, y:number):number =>x + y

// function log(x: number):void {
//   console.log(x);
// }

// function someFunc(s:string):never {
//     throw new Error(s)
// }

// Signature function tayyor tipi berilgan function shablon===

// funtion overload===========================================

// function overLoadFunc(x: any, y: any): any {
//   if (typeof x === "number" && typeof y === "number") {
//     return x + y;
//   } else {
//     return `${x} ${y}`;
//   }
// }

// console.log(overLoadFunc(3, 5));

// ========================================

// union types

// let h: number | string | boolean = 10;
// h = "str";
// h = true;

// let s: "sm" | "md" | "lg";

// // ======================

// // type aliases

// type Sizes = "SM" | "MD" | "LG";

// let s2: Sizes = "LG";
//=================================================


// Arrays, tuples & enum
