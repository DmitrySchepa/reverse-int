module.exports = function reverse (n) {
    if (n < 0) {
        let str = n.toString().slice(1).split('').reverse().join('');
        return +(str);
    } else {
        let str = n.toString().split('').reverse().join('');
        return +str;
    }
}
