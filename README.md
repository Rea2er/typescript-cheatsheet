# Comprehensive TypeScript Cheatsheet

A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types and many other TypeScript related subjects.

## Contents

**&nbsp;&nbsp;&nbsp;** **1. Basic Assign Types:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`String`](#string)**, **[`Number`](#number)**, **[`Boolean`](#boolean)**, **[`Undefined`](#undefine)**, **[`Null`](#null)**.\
**&nbsp;&nbsp;&nbsp;** **2. Any:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Any`](#any)**.\
**&nbsp;&nbsp;&nbsp;** **3. Void Function Type:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Void`](#void)**.\
**&nbsp;&nbsp;&nbsp;** **3. Union:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Union`](#union)**.\
**&nbsp;&nbsp;&nbsp;** **4. Interface:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`Interface`](#interface)**.

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
