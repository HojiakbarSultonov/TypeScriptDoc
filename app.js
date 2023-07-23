// data types==============
// let a: number = 12;
// let b: string = "text";
// let c: boolean = true;
// let d: null = null;
// let e: undefined = undefined;
// let f: { name: string } = { name: "Hojiakbar" };
// f.name;
// let g: any; // any istalgan typeni oladi, lekin bu typeni ishlatish tavsiya qilinmaydi!!!
// g = 12;
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
// Arrays, tuples & enum ===============
// let a = [];
// a = [12, "str", true, undefined, {}]
// let b = [1,2,3,4]
// let b:number[] = [1,2,3]
// let c : Array<number> = []
// =====================
// tuples
var f;
var g;
f = [2, "str"];
g = [4, [2, "str"]];
// ===============================
//Enum  --- Qayta hisoblash
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female, Gender.Male); // Bu 0 ga va 1ga teng
var G;
(function (G) {
    G[G["A"] = 0] = "A";
    G[G["B"] = 10] = "B";
    G[G["C"] = 11] = "C";
})(G || (G = {}));
console.log(G.A, G.B, G.C); /// G.A == 0, G.B ==10, G.C == 11 ga teng boladi
var D;
(function (D) {
    D[D["A"] = 0] = "A";
    D[D["A2"] = 1] = "A2";
    D[D["B"] = 10] = "B";
    D[D["C"] = 11] = "C";
})(D || (D = {}));
console.log(D.A, D.A2, D.B, D.C); /// D.A == 0, D.A2 == 1, D.B ==10, D.C == 11 ga teng boladi
