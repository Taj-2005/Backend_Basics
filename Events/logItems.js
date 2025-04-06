const {format} = require('date-fns')
const {v4 : uuid} = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')
const { errorMonitor } = require('stream')

const logEvents = async(msg) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${msg}`
    console.log(logItem)
    try {
        const logDir = path.join(__dirname, 'logs');

        // Create the logs directory if it doesn't exist
        if (!fs.existsSync(logDir)) {
            await fsPromises.mkdir(logDir);
        }
        //testing
        await fsPromises.appendFile(path.join(logDir, 'eventLog.txt'), logItem);
    } catch (err) {
        console.error(err)
    }
}
module.exports = logEvents