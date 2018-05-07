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
function reverseArray(arr) {
    let _arr = [];
    arr.forEach(i => {
        _arr.unshift(i);
    });
    return _arr;
}

function reverseArrayInPlace(arr) {
    let len = arr.length;
    let end = Math.ceil(len / 2);
    for (let i = 0; i < end; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr
}

let a = [1, 2, 3, 4, 5];
console.log(reverseArray(a));
console.log(a);
console.log(reverseArrayInPlace(a));
console.log(a);

// 3.

function deepEqual(obj1, obj2) {
    let reg;
    for (let k in obj1) {
        if (obj1.hasOwnProperty(k)) {
            if (typeof obj1[k] === 'object' && typeof obj2[k] === 'object') {
                if (!obj1[k] || !obj2[k]) {
                    reg = (obj1[k] === obj2[k]);
                } else {
                    reg = deepEqual(obj1[k], obj2[k]);
                }
            } else {
                reg = (obj1[k] === obj2[k]);
            }
            if (!reg) {
                return reg;
            }
        }
    }
    return true;
}

function deepEqual2(a, b) {
  if (a === b) return true;

  if (a == null || typeof a !== "object" ||
      b == null || typeof b !== "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

function deepcopy(obj){
    if(!obj) return obj;
    let _obj = Object.prototype.toString.call(obj) === "[object Array]" ? [] : {};
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            _obj[k] = typeof obj[k] !== 'object' ? obj[k] : deepcopy(obj[k]);
        }
    }
    return _obj;
}


console.log(deepEqual({a: 1, b: {c: null}}, {a: 1, b: {c: [1, 2, 3]}}));
console.log(deepcopy({a: 1, b: {c: null}}));


