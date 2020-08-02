// void keyworld means it doesnt have any return type
const fun = function (): void {};

const fun_arrow = (): void => {};

// Declaring variables of type void is not useful
// because you can only assign undefined or null to them:
let un_void: void = undefined;
let nul_void: void = null;
