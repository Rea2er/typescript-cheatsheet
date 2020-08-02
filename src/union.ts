// Variables are not restricted to only one assigned type.
// This is where union types come in where we can assign two or more types (e.g. assign number and string) to a single variable.
let much_type: string | number = "hello";
much_type = 10;

// However if you want use some method related to string,
// you can convert the type to string first
// because the number type dont have length attribute
much_type.toString().length;
