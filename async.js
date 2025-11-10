setTimeout(()=>{
    console.log("afteer 5 seconds");
},5000)
setTimeout(()=>{
    console.log("after 3 seconds");
},3000)
setTimeout(()=>{
    console.log("after a second");
},1000)

let timerid=setInterval(()=>{
    console.log("hi i am akash");
},2000);

setTimeout(()=>{
    clearInterval(timerid)
},8000)


let timerId = setTimeout(function tick() {
  console.log('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);