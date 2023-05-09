//fs modules enables interacting with the file system in a way modeled on standard POSIX functions
const fs = require('fs');

//readfile() function - it facilitates any file to be readen
fs.readFile('file.txt', 'utf-8', (err, data)=>{
    console.log(err, data)      
})

//output:- null got printed in place of err since there was no such error and in place of data the contents in file got displayed
