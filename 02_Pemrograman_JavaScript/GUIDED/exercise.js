/**
 * Tulislah sebuah fungsi yang menerima bilangan N dan mencetak penjumlahan dari 1 hingga N. 
 * Contohnya jika N = 5, maka fungsi akan mencetak 15 (1 + 2 + 3 + 4 + 5 = 15).
 */

function sumNValues(N) {
    const sum = (N * (N + 1)) / 2;
    console.log(sum);
}

sumNValues(5); 