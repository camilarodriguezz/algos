// a binary number is a combination of 1s and 0s 
// its nth least significant digit is the nth digit starting from the right starting with 1. 
// given a decimal number convert it to binary and determine the value of the 4th least significant digit

function dec2bin(dec){
    dec = (dec >>> 0).toString(2);
    let lsd4th = dec[dec.length-4]
    return  parseInt(lsd4th) 
}

console.log(dec2bin(23));
