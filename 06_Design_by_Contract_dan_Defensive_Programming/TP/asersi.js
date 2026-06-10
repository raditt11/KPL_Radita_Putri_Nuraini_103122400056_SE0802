const assert = require('assert');

function divide(a, b) {
    assert(typeof a === 'number' && typeof b === 'number', 'Input harus berupa angka');
    assert(b !== 0, 'Tidak bisa pembagian dengan nol');

    return a / b;
}

console.log(divide(10, 2));