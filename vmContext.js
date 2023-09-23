// /** ===== VM ===== **/
// const vm = require("vm")

// /** RUN IN THIS CONTEXT **/
// const helloWorld = "console.log('test hello!')"
// vm.runInThisContext(helloWorld)

// const code = "function test() { console.log('hello from the vm!'); }; test();"
// vm.runInThisContext(code)

// const glbl = "console.log(this == global); console.log(this)"
// vm.runInThisContext(glbl)

// global.nama = "Test Set Nama Di Global"
// const code2 = "console.log(this.nama)"
// vm.runInThisContext(code2)


// /** CREATE CONTEXT AND RUN IN CONTEXT **/
// const context = {
//     nama: "Test",
//     console: console
// }

// vm.createContext(context)
// const code3 = "console.log(this); console.log(this.nama);"
// vm.runInContext(code3, context)


// /** IMPORT AND EXPORT MODULE **/
// /*
//     // Need install express for example

//     const express = require("express")
//     const vm = require("vm")

//     const context = {
//     express: express, 
//     }

//     vm.createContext(context)

//     const code = `
//     const app = express()
//     app.get('/', (req, res) => {
//     res.send('hello world')
//     })
//     app.listen(8080)
//     `

//     vm.runInContext(code, context)
// */

// /** **/
// // to leave the output clean for the logs of the test environment. As context for the log function, simply an empty function is passed.
// const context2 = {
//     console: () => {}
// }
// // this way, internal logs can be silenced cleanly. But you can customize the console.log function without changeing the original code
// // example silencing the logs but want to keep them somehow for analytical purposes
// let internalLogs = []
// const context3 = {
//     console: {
//         log: (value) => {
//             internalLogs.push(value)
//         }
//     }
// }
// vm.createContext(context3)
// const code4 = "function testing() { return 10 }; console.log(testing()); console.log('TESETESTSE')"
// vm.runInContext(code4, context3)
// console.log(internalLogs)


