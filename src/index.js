/**
 * dgram is used for handling the datagram sended by the udp protocol
 * 
 */

const fs = require('fs');
const bencode = require('bencode');
const dgram = require('dgram');
const Buffer = require('buffer/').Buffer;
const urlPrase = require('url').parse;
//file of torrent
const torrentFile = '123.torrent';

const read_file = fs.readFileSync(torrentFile);
const torrent = bencode.decode(read_file);
const url = urlPrase(torrent.announce.toString('utf-8'));
// console.warn(torrent.announce.toString('utf-8'));

const socket  = dgram.createSocket('udp4');

const myMsg = Buffer.from('hello?', 'utf8');

socket.send(myMsg, 0, myMsg.length, url.port, url.host, () => {});

socket.on('message', msg => {
  console.log('message is', msg);
});


