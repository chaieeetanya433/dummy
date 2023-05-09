const {readFileSync, writeFileSync, write} = require('fs')
console.log('start')
const first = readFileSync('./modules/first.txt','utf8');
const second = readFileSync('./modules/second.txt','utf8');

// console.log(first, second)
writeFileSync('./modules/result-sync.txt',
`here is the result:  ${first}, ${second}`,
{flag: 'a'}     //when there is and object we're appending with everything in that file again
)

console.log('done with this')
console.log('starting with next')



