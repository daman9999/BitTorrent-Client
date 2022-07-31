const fs = require('fs');
const bencode = require('bencode');


const read_file = fs.readFileSync('123.torrent');
const torrent = bencode.decode(read_file);
console.warn(torrent.announce.toString('utf-8'));


