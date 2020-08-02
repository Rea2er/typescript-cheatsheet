function createArray<T>(length: number, value: T): Array<T> {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}

let str_arr: string[] = createArray<string>(3, "1");
let num_arr: number[] = createArray(3, 1);

interface IcreateArry {
  <T>(name: string, value: T): Array<T>;
}

let func: IcreateArry;
func = function <T>(name: string, value: T): Array<T> {
  return [];
};

let str_arr_i: string[] = func("Alice", "1");
let num_arr_i: number[] = func("Bob", 1);
