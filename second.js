//now we want to access contents of index.js from second.js

//module wrapper function
// (function(exports, require, module, __filename, __dirname) {

    chaitanya = {
        name: "chaitanya",
        favNum: 4,
        developer: true
    }
    console.log(exports, require, module, __filename, __dirname)
    module.exports = chaitanya
// })
