// TypeScript also uses double quotes (“)
// or single quotes (‘) to surround string data.
const str_hello: string = "Hello";
const str_world: string = "World!";

// All numbers in TypeScript are floating point values.
const num_int: number = 1;
const num_float: number = 1.0;

// Boolean only have two type of value: true & false
const yes: boolean = true;
const not: boolean = false;

// we know in other language that 1 is equal true
// however in typescript below syntax
// var bol:boolean = 1 is wrong

// undefined and null type is subset of str, num and boolean
// variable with type str, num, boolean can be reassigned
// to undefined or null
const un: undefined = undefined;
const nul: null = null;

// void keyworld means it doesnt have any return type
const fun = function (): void {};

const fun_arrow = (): void => {};

// We may need to describe the type of variables that we do not know when we are writing an application.
// These values may come from dynamic content
let num: any = 1;
num = true;
num = "3";

// If we not specify the type,
// It will automatically assign to any
let str;
str = 1;
str = "3";
