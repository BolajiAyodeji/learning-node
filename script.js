const fs = require('fs')

fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log('errrrrrrr');
    }
    console.log(data.toString());
})