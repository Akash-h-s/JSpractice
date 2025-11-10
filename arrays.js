const numbers=[10,20,30,40,50,"fghj"]
const first=numbers[5]
console.log(first)
const second=numbers[1]
console.log(second)

//easy way to do this using the destturing
const [first1,second2,third]=numbers
console.log(first1)

//copying the array
const copyNumbers=[...numbers]
console.log(copyNumbers)

const people=[{name:'John'},{name:'Jack'}]
console.log(people)

//to find the index
const nam=['akash','renu','sumanth','akash','renu']
console.log(nam.lastIndexOf('akash'))

console.log(people.indexOf('Jack'))

const numbe=[1,2,3,4,-5]
console.log(numbe.includes(100))

//some function iw used to find that the array elements are positive
console.log(numbe.some((num)=>num>0))
//every function is used to check all the elements are positive
console.log(numbe.every((num)=>num>0))

