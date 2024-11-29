let age: number;
age = 12;

let userName: string;
userName = 'Denis';

let isTrue: boolean;

isTrue = true;

//arrays and objects

let hobbies: string[]; //number[]
hobbies = ['Sports', 'Cooking'];

//Type aliases
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 30,
};

// Type inference

let course = 'Typescript';

// Union types

let course2: string | number = 'Typescript';
course2 = 33;

//Functions and types
function add2(a: number, b: number) {
  return a + b;
}

//Generics
function insertAtBeggining<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArr = [1, 2, 3];

const updatedArr = insertAtBeggining(demoArr, -1);
