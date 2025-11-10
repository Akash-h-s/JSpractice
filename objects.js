const obj={
    name:"Jhon",
    surname:"Smith"
}
obj.name="Pete"
console.log(obj)
delete obj.name
console.log(obj)

//task2
let salaries={
    John:100,
    Ann:160,
    Pete:130
}

console.log(salaries)
let sum=0
for(let i in salaries)
    sum+=salaries[i]
console.log(sum)

//task3
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(menu)
{
    for(let i in menu)
    {
        if(Number(menu[i]))
            menu[i]*=2
    }
    return menu
}
console.log((multiplyNumeric(menu)))

//object inside a object
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
console.log(myHonda.engine)//to access entire object
console.log(myHonda.engine.cylinders)//to access elemnts of a object inside the object

//objects using a construction function
function Car(name,model,engine){
    this.name=name,
    this.model=model,
    this.engine=engine
}
const myCar=new Car("toyota","A1","s25")
console.log(myCar)
myCar.color="black"
console.log(myCar)
const car2=new Car("BENZ",'','s44')
console.log(car2)

//object creation using a createobject method
const Animal={
    type:'vertebrates',
    displayType(){
        console.log(this.type)
    }
}
const animal=Object.create(Animal)
animal.displayType()
//when the two object needs to perform same task we have to write function outside the object intializer then we can addd the same function to both this is what the function reusability

const Intern={
    name:"akash",
    age:"21",
    role:"software developer intern",
    
}
const Manager={
    name:"Renu",
    age:"25",
    role:"Engineering Manager"
}
function printDetails(){
     console.log("hi I am ",this.name)
}
Intern.printDetails=printDetails
Manager.printDetails=printDetails
Intern.printDetails()
Manager.printDetails()

//getter and setter they are the function used to get the particulae value and set the particular value
//2 ways to declare them  
//1.within object initializer
const myobj={
    a:25,
    get b()
    {
        return this.a+1
    },
    set c(x){
        this.a=x/2
    }
}
console.log(myobj.a)
console.log(myobj.b)
myobj.c=60
console.log(myobj.a)

//2.using Object.defineProperties method
const bike={a:"20"}
Object.defineProperties(bike,{
    b:{
        get()
        {
            return Number(this.a)+20
        }
    },
    c:{
        set(x){
            this.a=x/5
        }
    }
})
console.log(bike.a)
console.log(bike.b)
bike.c=1000
console.log(bike.a)

//comparing two objects
const fruit={name:"apple"}
const fruit1={name:"apple"}
console.log(fruit==fruit1)//it return false becaus they are different objects

//to do that  follow this thing
const f1={name:"grapes"}
const f2=f1
console.log(f1)
 
//object prototype
/*every object in Js has a builtin property, which is called its protype'*/
console.log(Object.getPrototypeOf(f1))

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
const reuben = new Person("Reuben");
console.log(reuben.greet()); 
// hello, my name is Reuben!
//main reasons to use prototypes 
// i.after declaration of constructor function we cant able to add extra methods or properties to do that we will use the  prototypes
function Person(name, lname) {
    this.firstname = name;
    this.lastname = lname;
}

const p1 = new Person('aksh', 'arya');
console.log(p1);

Person.prototype.age=25//this protypes property will be inhrited to all the objects in the prototype chain
console.log(p1.age)

//adding a prototype function to the constuctor function
Person.prototype.getFullname=function()
{
    return this.firstname+" "+this.lastname
};
console.log(p1.getFullname())

//if the prototype value is changed then all the new objects will  have the changed value and also all previously created objects will have the previous value
function intern()
{
    this.name="akash"
}
intern.prototype.age=20
const i1=new intern()
intern.prototype={age:30}//synatax foe change properties
const i2=new intern()
console.log(i1.age)
console.log(i2.age)

const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,//prototype shadowing happen here alrey the onbject has the value of the b so it does not enters into the prototype
    c: 4,
     __proto__: {
      d: 5,
    },
  },
};
console.log(o.d)
  
//inheriting methods
const parent={
    value:2,
    method()
    {
        return this.value+1
    }
};
console.log(parent.method())
const child={
__proto__:parent,
}
child.value=5
console.log(child.method())

function doSomething() {}
console.log(doSomething.prototype);
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);

//global this work for all frames 
globalThis.console.log("hello iam akassh")

