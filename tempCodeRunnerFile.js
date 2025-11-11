fetch("https://itunes.apple.com/search?term=arijit+singh&limit=10")
.then(res=>res.json())
.then(res=>console.log(res))
.catch(err=>console.log("404"))