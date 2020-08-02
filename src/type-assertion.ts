function getAssertOne(name: string | number) {
  return (<string>name).length;
}

function getAssertTwo(name: string | number) {
  return (name as string).length;
}
