export function tambah(x, y) {
    return x + y;
}

export function kurang(x, y) {
    return x - y;
}

export function kali(x, y) {
    return x * y;
}

export function bagi(x, y) {
    return x / y;
}

export function pangkat(x, y) {
    return x ** y;
}

// /**
//  * @param {string} str
//  */
// export function persamaan(str) {
//     // misalkan 3x + 16 = 0
//     // cari x
//     const sisiKanan = /\=(.*)/g;
//     const sisiKiri = /(.*)\=/g;

//     const sukuKiri = [];
//     const sukuKanan = [];

//     const kiri = sisiKanan.exec(str);
//     const kanan = sisiKiri.exec(str);

//     console.log(kiri);
//     console.log(kanan);
// }

// persamaan("3x + 16 = 0");


/**
 * @param {string} x
 * @param {number} a
 */
export function plsv_dua(x, a) {
    const coeff = parseInt(x);
    return bagi(a, coeff);
}

/**
 * @param {string} x
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function plsv_tiga(x, a, b) {
    const k = b - a;

    //jika hanya x saja
    if (x.length === 1) {
        return k;
    } else if (x.length === 2) {
        const v = parseInt(x);
        return bagi(k, v);
    }

    return 0;
}

export function ptlsv_dua(x, op, a) {
    const coeff = parseInt(x);

    const balikkan_op = {
        ">=": "<=",
        "<=": ">=",
        ">": "<",
        "<": ">"
    }

    const op_baru = coeff < 0 ? balikkan_op[op] : op;

    return {
        "X" : x,
        "dengan" : op_baru,
        "hasil" : bagi(a, coeff)
    };
}