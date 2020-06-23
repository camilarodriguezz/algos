

function stringSearch(str, val) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < val.length; j++) {
            if (val[j] !== str[i + j]) {
                break;
            }
            if (j === val.length - 1) {
                counter += 1;
            }
        }
    }
    return counter;
}

console.log(stringSearch('lmgaomgrtomghyomg', 'omgr'))