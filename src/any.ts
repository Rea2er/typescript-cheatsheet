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
