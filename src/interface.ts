// Interfaces as a way to assign types to the structure of a variable.
interface IstateOne {
  name: string;
  age: number;
}

let obj_one: IstateOne;
obj_one = {
  name: "Bob",
  age: 23,
};

// ? indicate the age attribute can have null or undefined value
interface IstateTwo {
  name: string;
  age?: number;
}

let obj_two: IstateTwo;
obj_two = {
  name: "Bob",
};

// Want to define unknown attribute in interface
// type of unknown attribute must be any
interface IstateThree {
  name: string;
  age?: number;
  [propName: string]: any;
}

let obj_three: IstateThree;
obj_three = {
  name: "Bob",
  age: 23,
  sex: "man",
  isMarry: true,
};

// if any attribute mark as readonly
// and it will not allow any future change
interface IstateFour {
  name: string;
  readonly age?: number;
  [propName: string]: any;
}

let obj_four: IstateFour;
obj_four = {
  name: "Bob",
  age: 23,
  sex: "man",
  isMarry: true,
};

// below code is incorrect
// obj_four.age = 14;
