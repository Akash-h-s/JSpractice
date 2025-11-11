const prom=new Promise((resolve,reject)=>{
    const p=1+1
    if(p==2)
        resolve('success')
    else
        reject("failed")
})

// prom.then((message)=>{
//     console.log("then block "+message)
// }).catch((message)=>{
//     console.log("catch block "+message)
// })

let userleft=false
let userwatching=false
function checkpromise()
{
    return new Promise((res,rej)=>{
        if(userleft){
            rej({
                name:'user left',
                message:':('
            })
        }
        else if(userwatching){
            rej({
                name:'watching movie',
                message:'warrior 3'
            })
        }
        else{
            res("thums up for subscribe")
        }
    })
}
// checkpromise()
//   .then((mes) => {
//     console.log(mes);
//   })
//   .catch((err) => {
//     console.log(err.name + " " + err.message);
//   });

  //to run all promises at once//race like promise.race gives onlyh the first promise
  Promise.all([
   
    prom,
    checkpromise()

  ]).then((mes)=>{
    console.log("from sucess "+" "+mes)
  }).catch((mes)=>{
    console.log(mes)
  })

  console.log(5+5)

  function checklocation(location){
    return new Promise((res,rej)=>{
        if(location==="google")
            res("google say hi")
        else
            rej("sorry we only accept google")
    })
  }
  checklocation("googleeee").then((mes)=>{
    console.log(mes)
  }).catch((mes)=>{
    console.log(mes)
  })
  //async awsait make the promises easier to run
let location="bangalore"
function greet()
{
    return new Promise((res,rej)=>{
        if(location==="bangalore")
            res("say hi bangalore")
        else
            rej("only bangalore is available")
    })
}
//insted of using then and catch we can use async and await
//await will waits untill the promise is resolved
  async function asyncandawait(check){
    //when u are using a await u cant able to use new promises
       
    try{
             if(check=="sucess"){
            const wa=await greet();
            console.log(wa)
        }
    }
    catch(error){
            console.log(error)
        
  }
}
  asyncandawait("sucess")