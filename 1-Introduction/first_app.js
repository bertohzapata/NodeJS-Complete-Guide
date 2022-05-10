console.log("Hello from Node.js")

const fileSystem = require('fs')

fileSystem.writeFileSync('hello.txt', 'Hello from Node.js')