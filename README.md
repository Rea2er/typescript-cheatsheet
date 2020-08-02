# Comprehensive TypeScript Cheatsheet

A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types and many other TypeScript related subjects.

## Contents

**&nbsp;&nbsp;&nbsp;** **1. Types:** **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** **[`String`](#string)**, **[`Number`](#number)**, **[`Boolean`](#boolean)**, **[`Undefined`](#undefine)**, **[`Null`](#null)**, **[`Void`](#void)**, **[`Any`](#any)**.

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

## Void

```typescript
const fun = function (): void {};

const fun_arrow = (): void => {};
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
