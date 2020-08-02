// There are three way to define an array
// First one is type + []
let arr_one: number[] = [1, 2, 3];
let arr_two: string[] = ["1", "2", "3"];
let arr_three: any[] = [1, "2", true];

// Second one is Array <elemType>
let arr_four: Array<number> = [1, 2, 3];
let arr_five: Array<string> = ["1", "2", "3"];
let arr_six: Array<any> = [1, "2", true];

// Third using interface
interface IarrOne {
  [index: number]: number;
}
let arr_seven: IarrOne = [1, 2, 3];

interface Istate {
  username: string;
  age: number;
}
interface IarrTwo {
  [index: number]: Istate;
}
let arr_eight: IarrTwo = [
  { username: "Alice", age: 20 },
  { username: "Bob", age: 18 },
];
