const os = require('os');

console.log('Free memory:', os.freemem());
console.log('home directory:', os.homedir());
console.log('hostname:', os.hostname());
console.log('Total memory:', os.totalmem());
console.log('Uptime:', os.uptime());