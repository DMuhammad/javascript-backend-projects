const fs = require("fs")

const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('./output.txt');
 
readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(error) {
        console.log(error);
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
    writableStream.end();
});
