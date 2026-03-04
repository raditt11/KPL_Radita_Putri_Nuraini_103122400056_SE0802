/**
 * 1. Buatlah sebuah array berisi  minuman favorit kalian, dan simpan dalam variabel bernama listMinuman.
 * 2, setelah itu, ubah 2 elemen pertama menggunakan notasi kurung dan penugasan.
 * 3. terakhir, tambahkan minuman baru di depan array
 */

const listMinuman = ["Teh", "Kopi", "Jus"];

listMinuman[0] = "Milktea";
listMinuman[1] = "Air Mineral";
listMinuman.unshift("Susu");
console.log(listMinuman);