const fs = require('fs')
fs.readFile('./files/starter.txt', (err, data) => {
     if (err) {
        console.log(err)
        return
     }
     return console.log(data)
})