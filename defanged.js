// Given a valid (IPv4) IP address, 
// return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function (address) {
    let defanged = "";
    for (let i = 0; i < address.length; i++) {
      if (address[i] === '.') {
        defanged += '[.]'
      } else {
        defanged += address[i];
      }
    }
    return defanged
  };
  
  console.log(defangIPaddr("255.100.50.0"))