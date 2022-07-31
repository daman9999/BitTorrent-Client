"# BitTorrent-Client" 
1. We make use of buffers in this. using
readFileSync which returns a buffer.
<!-- More information about buffer -->

Q What is buffer?
Ans. Buffer is like a container for raw bytes.In 1 byte there are 8 bits represented by 0's and 1's.

-------------------------------
| 0 | 1 | 0 | 1 |0  | 0  | 0  |
-------------------------------
^ this is a  byte ^ [ where 0 and 1 are the bits]

number 10 is represented in byte like => 00001010

In Node js a buffer is multiple number of byte(s) and  is represented by the hexadecimal numbers. 

Like 10 
In binary represented as : 00001010
In Hexadecimal: 0A

so to store  Decimal info like 2,4,6,10,16 in buffer it will be equivalent hexadecimal of These numbers.It is represented as
<Buffer 02 , 04 , 06 , 0a , 0f> 



|  Another day work
---------------------------------------------------------------

install bencode in npm because because the torrent is encoded in bencode and to decode we have to use bencode library.

bencode is a code just like JSON but with the additional properties like [peices property] you can see these by console.warn(torrent);

the info if tracker has been in announce section, you will clearly observe all the bytes are in buffer so,first let's find the address of tracker by:

console.warn(torrent.announce.toString('utf-8'));

you will clearly see the address is in "udp:/" instead of "http:// or https:/" that is because the modern torrent uses the udp protocol to send the data to your computer

The main reason that most trackers now use udp is that udp has better performance than http.


The main difference is that http guarantees that when a user sends data, the other user will recieve that data in its entirety, uncorrupted, and in the correct order – but it must create a persistent connection between users before sending data and this can make http much slower than udp.


