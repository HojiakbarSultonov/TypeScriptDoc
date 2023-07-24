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

// let f: [number, string];
// let g: [number, [number, string]];

// f = [2, "str"];
// g = [4, [2, "str"]];

// ===============================

//Enum  --- Qayta hisoblash

// enum Gender {
//     Male,
//     Female
// }

// console.log(Gender.Female, Gender.Male); // Bu 0 ga va 1ga teng

// enum G {
//     A,
//     B=10,
//     C,
// }

// console.log(G.A, G.B, G.C); /// G.A == 0, G.B ==10, G.C == 11 ga teng boladi

// enum D {
//     A,
//     A2,
//     B=10,
//     C,
// }

// console.log(D.A, D.A2, D.B, D.C); /// D.A == 0, D.A2 == 1, D.B ==10, D.C == 11 ga teng boladi

// enum H {
//     A = "Hello",
//     B= "TypeScript"
// }

// console.log(H.A, H.B);

// ==================================

//Class

// class Person {
//   _name: string = "Hojiakbar";
//   _age: number = 23;

//   //constructor faqat 1marta foydalaniladi!!!

//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }

//   //method
//   // info():string {
//   //     return `${this._name} - ${this._age}da `
//   // }

//   //2-methodga parametr berish

//   info(value: number): string {
//     return `${this._name} - ${this._age + value}da `;
//   }

//   // static bu classga yani Person orqali ishlatilinadi. Masalan: Person.isFlaying

//   static isFlaying = false;
//   static description() {
//     return "Bu class Person haqida";
//   }

//   // getter va setter methodi

//   get name(): string {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }

//   get age(): number {
//     return this._age;
//   }

//   set age(value: number) {
//     if (value > 0 && value < 100) {
//       this._age = value;
//     }else throw new Error('Siz notori yosh kiritdingiz')
//   }
// }

// const Hojiakbar: Person = new Person("Hojiakbar", 27);
// const Rasul: Person = new Person("Rasul", 57);

// // console.log(Hojiakbar.info(2)); //2chi methodni ishlatish
// // console.log(Rasul);
// // console.log(Person.description());

// if(Hojiakbar instanceof Person){
//     console.log('tegishli');

// }else {
//     console.log('tegishli emas');

// }

class Person implements IPerson {
  _name: string = "";
  _age: number = 0;
  seyHello(): string {
    return "dasdad";
  }

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
}

class Student extends Person {
  _group: string = "";
  _course: number = 0;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this._group = group;
    this._course = course;
  }
}

const Hoji: Person = new Person("Hojiakbar", 27);
console.log(Hoji);

const Rasul: Student = new Student("Rasul", 57, "5guruh", 2);
console.log(Rasul);

class Teacher extends Person {
  disciplines: string[] = [];

  constructor(name: string, age: number, disciplines: string[]) {
    super(name, age);
    this.disciplines = disciplines;
  }
}

const SSS: Teacher = new Teacher("SSS", 34, ["React", "JS"]);

console.log(SSS);

// ==========================================================================

//type & interfaces

interface IPerson {
  _name: string;
  _age: number;
  seyHello(): string;
}


