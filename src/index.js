const fs = require('fs')



const torrent =fs.readFileSync('123.torrent');
console.log(torrent.toString('utf-8'))