// function declarations
function funcTypeOne(name: string, age: number): number {
  return age;
}
const age_num: number = funcTypeOne("Alice", 23);

function funcTypeTwo(name: string, age: number, sex?: string): number {
  return age;
}
const age_num_two: number = funcTypeTwo("Alice", 23);
const age_num_three: number = funcTypeTwo("Alice", 23, "man");

function funcTypeThree(name: string = "Bob", age: number = 18): number {
  return age;
}
const age_num_four: number = funcTypeThree();
const age_num_five: number = funcTypeThree("Alice", 23);

// function expression
const funcTypeFour = function (name: string, age: number): number {
  return age;
};

const funcTypeFive: (name: string, age: number) => number = function (
  name: string,
  age: number
): number {
  return age;
};

interface IfunType {
  (name: string, age: number): number;
}

const funcTypeSix: IfunType = function (name: string, age: number): number {
  return age;
};

function getValue(value: number): number;
function getValue(value: string): string;
function getValue(value: number | string): number | string {
  return value;
}
let num: number = getValue(1);
let str: string = getValue("1");
