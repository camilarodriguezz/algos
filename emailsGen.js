function emailsGen(fName, lName, companyName){
    var emails = [];
    var end = ['.com', '.io'];
    fName = fName.toLowerCase()
    lName = lName.toLowerCase()
    companyName = companyName.toLowerCase()

    for (let i = 0; i < end.length; i++) {
        emails.push(fName+"@"+companyName+end[i])
        emails.push(fName+lName+"@"+companyName+end[i])
        emails.push(fName+"."+lName+"@"+companyName+end[i])
        emails.push(fName[0]+lName+"@"+companyName+end[i])
        emails.push(fName[0]+"."+lName+"@"+companyName+end[i])
        emails.push(fName+lName[0]+"@"+companyName+end[i])
        emails.push(fName+"."+lName[0]+"@"+companyName+end[i])
    }

    return emails;
}

console.log(emailsGen('name', "last", 'test'));