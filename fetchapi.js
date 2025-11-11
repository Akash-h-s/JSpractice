fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
         title: "Cat Facts",
         body: "Learning fetch POST requests",
         userId:166
    })

})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));

  
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

//classes

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak();//if the dog class has a speak then it will be called or else it  will refers to the parent class


fetch("https://itunes.apple.com/search?term=arijit+singh&limit=10")
.then(res=>res.json())
.then(res=>console.log(res))
.catch(err=>console.log("404"))