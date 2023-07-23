// data types==============
var a = 12;
var b = "text";
var c = true;
var d = null;
var e = undefined;
var f = { name: "Hojiakbar" };
f.name;
var g; // any istalgan typeni oladi, lekin bu typeni ishlatish tavsiya qilinmaydi!!!
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
function overLoadFunc(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        return "".concat(x, " ").concat(y);
    }
}
console.log(overLoadFunc(3, 5));
