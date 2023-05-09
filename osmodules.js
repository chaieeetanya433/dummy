// the os module provides operating system-related utility methods and properties. it can be accessed using:
const os = require('os');

console.log(os.freemem()) //it shows us how much free memory we have in our pc
console.log(os.homedir()) //Returns the string path of the current user's home directory.
console.log(os.hostname()) //Returns the host name of the operating system as a string.
console.log(os.platform()) //Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux', 'openbsd', 'sunos', and 'win32'.
console.log(os.release()) //Returns the operating system as a string.
console.log(os.type()) //Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.