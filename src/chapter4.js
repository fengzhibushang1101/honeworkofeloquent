//1.
function range(start, end, step = 1) {
    if (step === 0) {
        return;
    }
    let _start = start;
    let _end = end;
    let _arr = [];
    while (step > 0 ? _start <= _end : _start >= _end) {
        _arr.push(_start);
        _start += step;
    }
    return _arr;
}

function sum(arr) {
    return arr.reduce((prev, curr) => {
        return prev + curr;
    });
}
console.log(sum(range(0, 10, 1)));
console.log(sum(range(10, 0, -1)));
console.log(range(0, 10, 1));
console.log(range(10, 0, -1));

// 2.

function deepEqual(obj1, obj2) {

}




