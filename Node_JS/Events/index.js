const fs  = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const logEvents = require(path.join(__dirname,'logItems.js'))

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

//initialize object
const myEmitter = new MyEmitter()
myEmitter.on('log', msg => logEvents(msg))

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', '\nLog event emitted\n')
}, 2000)