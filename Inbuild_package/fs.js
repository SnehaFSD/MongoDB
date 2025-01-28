const fs = require ("fs")

// const quote = "No beauty shines better then that of a good heart"

// // fs.writeFile("awesome.pdf", quote, (err) => {
// //     console.log("completed writing awesome.html")
// // })
 const quote2 = "Live more Worry less";
    
// //   for(let i=1; i<=10; i++){
// //     fs.writeFile(`./Backup/text-${i}.html`, quote2, (err) => {
// //      console.log(`completed writing text-${i}.html`)
// //         })
// //   }

// const [ , , noOfFiles] = process.argv;

// console.log(noOfFiles);

// for(let i=1; i<=noOfFiles; i++){
//     fs.writeFile(`./Backup/Note-${i}.txt`, quote2, (err) => {
//     console.log(`completed writing Note-${i}.txt`)
//     })
//       }

// fs.readFile("./cool123.txt","utf-8",(err,data) => {
//   if(err){
//     console.error("Error ❌",err)
//   }
//   console.log(data)
// })


// // const quote = "No beauty shines better then that of a good heart"

//  fs.writeFile("awesome.pdf", quote, (err) => {
//      console.log("completed writing awesome.html")
// })

// const quote3 = "\n Everything will be alright";

// fs.appendFile("awesome.pdf", quote3, (err) => {
//        console.log("completed writing awesome.html")
//   })

// fs.unlink("./toRemove.txt",(err) =>{
//   console.log("Deleted Successfully")
// }) 

// fs.readdir("./Backup",(err, files) =>{
//   if(err){
//   console.error(err)
// }
// console.log(files)
// });

//Combining read and delete
//Delete files in Backup folder

// fs.readdir("./Backup",(err, files) =>{
// console.log("All file name",files)
// files.forEach(fileName => {
//   fs.unlink(`./Backup/${fileName}`,(err) =>{
//      console.log("Deleted Successfully",fileName)
//     })
// })
// });
//writeFile => callstack => webApi(whoever finishes first) => callback queue => Event loop => callstack
//fs.writeFile, fs.readFile, fs.appendFile, fs. unlink => asynchronous behaviour
//fs.writeFileSync, fs.readFileSync, fs.appendFileSync, fs.unlinkSync => synchronous way

const [, , n] = process.argv

for(let i = 1; i<=n; i++) {
fs.writeFileSync(`./Backup/note-${i}.txt`, quote2)
      console.log(`completed writing ${i}`)
      
}
