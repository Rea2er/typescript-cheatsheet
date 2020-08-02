// Type assertions have two forms.
// One is the “angle-bracket” syntax,
// which is fine, except for JSX (read React) code because JSX works with angle-bracket syntax itself:

function getAssertOne(name: string | number) {
  return (<string>name).length;
}

function getAssertTwo(name: string | number) {
  return (name as string).length;
}
