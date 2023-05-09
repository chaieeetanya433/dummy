//The node:path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');    //returns basename of this path which is 'myfile.html'
const b = path.dirname('C:\\temp\\myfile.html');    //returns dirname of this path which is 'C:\temp'
console.log(a)
console.log(b)
//the path.extname() method returns the extension of the path
const c = path.extname(__filename)
console.log(c)
