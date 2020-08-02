# Comprehensive TypeScript Cheatsheet

A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types and many other TypeScript related subjects.

## Contents

**&nbsp;&nbsp;&nbsp;** **1. Basic Assign Types:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`String`](#string)**, **[`Number`](#number)**, **[`Boolean`](#boolean)**, **[`Undefined`](#undefined)**, **[`Null`](#null)**.\
**&nbsp;&nbsp;&nbsp;** **2. Any:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Any`](#any)**.\
**&nbsp;&nbsp;&nbsp;** **3. Void Function Type:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Void`](#void)**.\
**&nbsp;&nbsp;&nbsp;** **3. Union:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Union`](#union)**.\
**&nbsp;&nbsp;&nbsp;** **4. Interface:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Interface`](#interface)**.\
**&nbsp;&nbsp;&nbsp;** **5. Array:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Array`](#array)**.\
**&nbsp;&nbsp;&nbsp;** **6. Function Type:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Function Type`](#function-type)**.\
**&nbsp;&nbsp;&nbsp;** **7. Type Assertion:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Type Assertion`](#type-assertion)**.\
**&nbsp;&nbsp;&nbsp;** **8. Alias:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Alias`](#alias)**.\
**&nbsp;&nbsp;&nbsp;** **9. Enum:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Enum`](#enum)**.\
**&nbsp;&nbsp;&nbsp;** **10. Class Modifiers:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Class Modifiers`](#class-modifiers)**.\
**&nbsp;&nbsp;&nbsp;** **11. Generic Type:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Generic Type`](#generic-type)**.

## String

```typescript
const str_double_quote: string = "Hello";
const str_single_quote: string = "World!";
```

## Number

```typescript
const num_int: number = 1;
const num_float: number = 1.0;
```

## Boolean

```typescript
const yes: boolean = true;
const not: boolean = false;
```

## Undefined

```typescript
const un: undefined = undefined;
```

## Null

```typescript
const nul: null = null;
```

## Any

```typescript
let num: any = 1;
num = true;
num = "3";

let str;
str = 1;
str = "3";
```

## Void

```typescript
const fun = function (): void {};

const fun_arrow = (): void => {};
```

## Union

```typescript
let diff_type: string | number = "hello";
diff_type = 10;
```

## Interface

```typescript
interface Istate {
  name: string;
  age: number;
}

let obj: Istate;
obj = {
  name: "Bob",
  age: 23,
};
```

Mark attribute with keyword `readonly`

```typescript
interface Istate {
  name: string;
  readonly age: number;
}
```

Define attribute of interface with `?` mark

```typescript
interface Istate {
  name: string;
  age?: number;
}

let obj: Istate;
obj = {
  name: "Bob",
};
```

Define unknown attribute for future use

```typescript
interface Istate {
  name: string;
  age?: number;
  [propName: string]: any;
}

let obj: Istate;
obj = {
  name: "Bob",
  age: 23,
  sex: "man",
  isMarry: true,
};
```

## Array

There are three way to define an array. First one is type + []

```typescript
let arr_one: number[] = [1, 2, 3];
let arr_two: string[] = ["1", "2", "3"];
let arr_three: any[] = [1, "2", true];
```

Second one is Array `<elemType>`

```typescript
let arr_four: Array<number> = [1, 2, 3];
let arr_five: Array<string> = ["1", "2", "3"];
let arr_six: Array<any> = [1, "2", true];
```

Third using interface

```typescript
interface IarrOne {
  [index: number]: number;
}

let arr_seven: IarrOne = [1, 2, 3];
```

Array can also contain pre-define interface

```typescript
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
```

## Function Type

Function declarations

```typescript
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
```

Function expression

```typescript
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
```

Union function type

````typescript
function getValue(value: number): number;
function getValue(value: string): string;
function getValue(value: number | string): number | string {
  return value;
}
let num: number = getValue(1);
let str: string = getValue("1");```
````

## Type Assertion

```typescript
function getAssertOne(name: string | number) {
  return (<string>name).length;
}

function getAssertTwo(name: string | number) {
  return (name as string).length;
}
```

## Alias

```typescript
type strType = string | number;
let str: strType = "10";
str = 10;

interface ItypeOne {
  name: string;
}

interface ItypeTwo {
  age: number;
}

type obj_type = ItypeOne | ItypeTwo;
let obj: obj_type = { name: "Alice" };
obj = { age: 23 };
obj = { name: "Alice", age: 23 };
```

Restricted parameter

```typescript
type sex = "man" | "woman";
function getSex(s: sex): string {
  return s;
}
getSex("man");
```

## Enum

```typescript
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
```

## Class Modifiers

Default modifier is public \
Sex attribut of Person class can only access by person object within Person class

```typescript
class Person {
  name = "Alice";
  private age: 18;
  protected sex: "man";
  say() {
    console.log("Hi");
    console.log(this.sex);
  }
}

const person = new Person();
person.name;
person.say();
```

```typescript
class Child extends Person {
  callParent() {
    super.say();
    super.name;
    super.sex;
  }
  static test() {
    console.log("test");
  }
}

const child = new Child();
child.name;
child.say();
child.callParent();
// call test method without create the child object
Child.test();
```

## Generic Type

```typescript
function createArray<T>(length: number, value: T): Array<T> {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}

let str_arr: string[] = createArray<string>(3, "1");
let num_arr: number[] = createArray(3, 1);
```

```typescript
interface IcreateArry {
  <T>(name: string, value: T): Array<T>;
}

let func: IcreateArry;
func = function <T>(name: string, value: T): Array<T> {
  return [];
};

let str_arr_i: string[] = func("Alice", "1");
let num_arr_i: number[] = func("Bob", 1);
```
