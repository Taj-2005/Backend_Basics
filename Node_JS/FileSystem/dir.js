const fs = require('fs')
const path = require('path')

if (!fs.existsSync(path.join('new'))){
    fs.mkdir(path.join('new'), (err) => {
        if (err) throw err
        console.log('Directory created')
})}

setTimeout(() => {
    if (fs.existsSync(path.join('new'))){
        fs.rmdir(path.join('new'), (err) => {
            if (err) throw err
            console.log('Directory removed')
    })}
}, 1000)

