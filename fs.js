var fs = require('fs');


fs.readFile('data.txt',(err,data)=> {

    fs.appendFile('file.txt', data, ()=>{
        console.log('Written!')
    })

})