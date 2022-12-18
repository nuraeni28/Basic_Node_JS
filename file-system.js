const fs = require('fs')

fs.readFile('biodata.txt','utf8', (err, data) => {
    if(err){
        throw new Error(err)
    }
console.log(data);

})


