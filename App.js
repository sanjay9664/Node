// module.exports={

//     a:10 ,
//     b:20,
//     c:function(){
//         return 50
//     }
// }

// *****************************************globly data banane ke liye aur jaise data banega waise hi dusra file ban jayega

// const fs = require('fs')
// console.log("code send on terminal")
// fs.writeFileSync("hellow dear","send data again and again")


// create the new file with the help of  App.js

// const fs = require("fs")
// fs.writeFileSync("hellow dear","my name is sanjay gupta") 

/// jaise run karenge waise hi new file ban jayegi jaishe hellow dear aur use me my name is sanjay gupta likh ke 
// aa jayega  

// ****************************************************************************************************************

// directry and file name

// console.log("==>>>",__dirname)
// console.log("==>>>",__filename)

// ****************************************************************************************************************

// const http  = require("http")

// yaha pe maine createServer kiya aur yaha 2 req and res beja  res me maine kucch likhe
// aur useke baad response ko band kar diya
// http.createServer((req , res)=>{
//     res.write("this is my first call in browser")
//     res.end();
// }).listen(3000)  // aur local host 3000 portal pe suru kiya aur output dekha

// jab jab ham server ko create karenge tab tab terminal me  suru se run karna padega jaise ki
// es file ka name and node   ,,,, node App.js and enter
// go to server and open local host 3000 portal and show your output


// const http = require("http")
// const server = http.createServer((req, res)=>{
//   res.write("my name is sanjay gupta")
//   res.end()

// })
// server.listen("3000")
// ****************************************************************************************************************

// const http = require("http");

// function controller(req, res) {
//   res.write(
//     ` <h1>this is updataed value th  the help of node js </h1>
//         <p>This is updated with normal function</p>
//         <form action="">
//         <input type="text" placeholder="Enter your name" />
//         <input type="text" placeholder="Enter your second name" />
//         <input type="text" placeholder="Enter your age" />
//         <input type="text" placeholder="Enter your male" />
//         <button>Submit</button>
//       </form>
//         `
//   );

//   res.end();
// }

// http.createServer(controller).listen(3000);




// ****************************************************************************************************************

// const colors = require("colors")

// console.log("hello" .bgCyan)

// ****************************************************************************************************************

// console.log("my name is nodemon")
// console.log(10*44)

// ****************************************************************************************************************

// API CALL WITH NODE JS

// const http = require("http")
// const data = require("./data")
// http.createServer((req, res)=>{
//   res.writeHead(200, {"Contect-Text":"application\json"})
//   res.write(JSON.stringify(data))
//   res.end()
// }).listen(3000)


// const http = require("http")
// const data = require("./data")
// http.createServer((req, res)=>{
//     res.writeHead(200, {"Contect-Type":"application\json"})
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(3000)

// const http = require("http")
// const data = require("./data")
// http.createServer((req, res)=>{
//     res.writeHead(200, {"Contect-Type":"application\json"})
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(3000)

// const http = require("http")

// http.createServer((req, res)=>{
//   res.writeHead(200,{"Context-type":"application/json"})
//   res.write(JSON.stringify({name:"sanjay", age:21}))
//   res.end()
// }).listen(3000)

// const http  = require("http")
// const  data = require("./data")
// http.createServer((req, res)=>{
//     res.writeHead(200,{"Cotent-type":"application/json"})
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(3000)
// ****************************************************************************************************************

// const http = require("http")
// const data = require("./data")
// http.createServer((req, res)=>{
//     res.writeHead(200,{"Content-type": "application/json"})
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(3000)


// ****************************************************************************************************************
// how to create new file on vs code with help of node js


// const fs = require("fs")

// const input = process.argv

// fs.writeFileSync(input[2],input[3])    // hame run aishe karenge like  node App.js 'test.txt' ,"my name sana"

// ****************************************************************************************************************

// How to remove the file and add the file and show the invaild

// const fs = require("fs")

// const input = process.argv

// if(input[2]==="add"){

//     fs.writeFileSync(input[3], input[4])
// }else if(input[2]==="remove"){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("Invailid value")
// }

// console.log(directry)

// 2 hours stop

// const fs = require("fs")
// const colors  = require("colors")
// const input = process.argv;

// if(input[2]==="add"){
//     fs.writeFileSync(input[3],input[4])

// }else if(input[2]==="remove"){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("Sanjay your input is Invaild value".white)
// }

// ****************************************************************************************************************
// nexted file created  very easy way

// console.log(dirpath)

// const fs = require("fs")
// const path = require("path")
// const dirpath = path.join(__dirname,"curd")

// for(var a=0; a<5; a++){

//     fs.writeFileSync(dirpath + "/val" + a+ ".txt" , "my name is sanjay")
// }
// console.log(dirpath)

// how to show the file inside the array and without the array also
// fs.readdir(dirpath,((err, item)=>{
//     // console.log(item)

//     // without array you can use the forEach
//     item.forEach((el)=>{
//         console.log(el)
//     })
// }))

// const fs  = require("fs")
// const path = require("path")
// const dirpath = path.join(__dirname,'curd')

// for(var a=0;a<5; a++){
//     fs.writeFileSync(dirpath + "/val"+ a + ".txt" , "my name is sanjay")
// }

//  fs.readdir(dirpath,((err, item)=>{
//     // console.log(item)
//      item.forEach((el)=>{
//         console.log(el)
//      })
//  }))

// ****************************************************************************************************************
//  Curd  use in the backend

// const fs = require("fs")
// const path = require("path")
// const dirpath = path.join(__dirname,"curd")
// const filpath = `${dirpath}/val.txt`

// fs.writeFileSync(filpath ,"my name is sanjay")

// fs.appendFile(filename,'and file name is val.txt ',((err)=>{
//     if(!err) console.log("file is updated")
// }))

// fs.readFile(filename,"utf-8",((err, el)=>{
//   console.log(el)
// }))

/// yaha file ko read kiya

// fs.readFile(filpath,'utf-8',(err,item)=>{
//     console.log(item)
// })

// yaha file ko update kiya

// fs.appendFile(filpath,'and the file name is :val.txt ' ,(err)=>{
//     if(!err) console.log("my file is updated")
// })

// yaha file ko update karenge
//yaha pe file name update ho jayega

//  fs.rename(filpath,`${dirpath}/next.txt`,(err)=>{
//     if(!err) console.log("file name is sanjay updated")
//  })

// Ab ham log file delete karna sikhenge

// fs.unlinkSync(`${dirpath}/next.txt`)

// just practice  curd

// const fs = require("fs")
// const path = require("path")
// const dirpath = path.join(__dirname,"curd")
// const filename =`${dirpath}/val.txt`

// fs.writeFileSync(filename,"my name is sanjay")

// fs.readFile(filename,'utf8',((err, item)=>{
//     console.log(item)
// }))

// yaha text ko change kareng

// fs.appendFile(filename,'and file name is val.txt',((err, itme)=>{
//     if(!err) console.log("file is updated")
// }))

// yaha file ko updat karenge

//  fs.rename(filename, `${dirpath}/next.txt`, ((err)=>{
//     if(!err) console.log("file name is updated")
//  }))

/// ab yaha se delete karenge file ko

// fs.unlinkSync(`${dirpath}/next.txt`)
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']

// let data = array.map((el)=>{
//     if(el===' '){
//         return "empty string"
//     }else{
//         return el
//     }
// })

// console.log(data)

// **********************************************************rest operator *************************************
// 1)
// const obj1 = {'key1': 1}
// const obj2 = { ...obj1}
// if(obj2 === obj1){
// console.log('same objects')
// }
// else{
// console.log('different objects')
// }

// 2)
// const obj1 = {'key1': 1 , 'key2' : 2}
// const obj2 = { ...obj1, key1: 1000}
// console.log(obj1)
// console.log(obj2)

// **********************************************************Destructuring  *************************************

//   with array

//   const arr = ["sanjay" ,21 ]
//   const[name, age] = arr
//   console.log(name)
//   console.log(age)

// with object

// const person = {
//      name:"sanjay",
//      age: 21
// }

// const {name , age} = person

// console.log(name , age)

// **********************************************************Async  *************************************

//   1)
// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');

// output:
// a
// b
// d
// c

// **********************************************************Create server  *************************************

// Create a server , run it on port 4000 and console log your name.
// Call the server from the browser and your name would get printed.

// const http = require("http")

// http.createServer((req, res)=>{
//   res.write("my name is sanjay gupta  : this is my first create server ")
//   res.end()
// }).listen(4000)

// 2)
// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

// output :
//  a
//  b
//  e
//  d
//  c

//  const http = require("http");
//  http.createServer((req, res)=>{
//   //  const url = res.url;
//   //  if(url==='/'){
//     // res.setHeader("Content-Type" , "text/html");
//     res.write('<html>')
//     res.write('<head>')
//     res.write( '<title>')
//     res.write( '</title>')
//     res.write('</head>')
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button> </form> </body>')
//     res.write('</html>')
//     return res.end();
//    }).listen(3000);


// ***********************************************************************************************************************************************************

const http = require("http")
const data = require("./data")
http.createServer((req, res)=>{
    res.writeHead(200,{"Content-type": "application/json"})
    res.write(JSON.stringify(data))
    res.end()
}).listen(3000)