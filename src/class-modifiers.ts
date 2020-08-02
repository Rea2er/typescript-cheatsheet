// Default modifier is public
class Person {
  name = "Alice";
  private age: 18;
  protected sex: "man";
  say() {
    console.log("Hi");
    // sex can only access by person object
    console.log(this.sex);
  }
}

const person = new Person();
person.name;
// can not get the age attribute of Person object
// can not get the sex attribute of Person object
person.say();

class Child extends Person {
  callParent() {
    super.say();
    super.name;
    // sex can only access by person object
    super.sex;
  }
  static test() {
    console.log("test");
  }
}

const child = new Child();
child.name;
// can not get the age attribute of Person object
// can not get the sex attribute of Person object
child.say();
child.callParent();
// can call test method without create the child object
Child.test();
