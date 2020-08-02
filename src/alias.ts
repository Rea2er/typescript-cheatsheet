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

type sex = "man" | "woman";
function getSex(s: sex): string {
  return s;
}
getSex("man");
