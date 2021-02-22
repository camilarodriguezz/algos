function maximumPower(s) {
    let n, count, maxCount, zeroCount;
    [n, count, maxCount, zeroCount] = [s.length, 0, 0, 0];

    console.log('n', n)

    for (let i = 0; i < n; i++) {
        if (s[i] == '0') {
            count += 1;
            zeroCount += 1;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    };
    maxCount = Math.max(maxCount, count);
    if (zeroCount == n) {
        return -1;
    };
    let k, l, firstCount, lastCount;
    [k, l, firstCount, lastCount] = [0, n-1, 0, 0]

    while (s[k] == '0') {
        firstCount += 1;
        k += 1;
    };
    while (s[l] == '0') {
        lastCount += 1;
        l += 1;
    }
    maxCount = Math.max(maxCount, (firstCount + lastCount));

    return maxCount;
}

console.log(maximumPower('1011010'))