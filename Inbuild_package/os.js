const os = require("os")//this is old vs5 type of import

console.log("Free Memory",os.freemem() / 1024 / 1024 / 1024)
console.log("Total Memory",os.totalmem()/ 1024 / 1024 / 1024)

//before running this file, we have to give path using cd in terminal, as 
//we done in react "cd Inbuild_package"
//and now node os.js =>coz os is in another folder..thats y we changed the directory
//1 kb = 1024bytes 1mb = 1024kb 1gb = 1024mb to convert memory into gb, 
// we have to divide 3 times by 1024

console.log("Version",os.version())
console.log("platform",os.platform())
console.log("Arch",os.arch())
console.log("Version",os.cpus()) 

console.log("Types",os.type())
console.log("Release",os.release())
console.log("core",os.cpus().length)
  
console.log(`Cores, ${os.cpus().length} Core`)
console.log("Cpu speed", os.cpus()[0].speed)