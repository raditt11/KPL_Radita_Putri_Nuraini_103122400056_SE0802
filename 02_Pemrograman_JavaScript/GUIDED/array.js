const kotaDikunjungi = ["Pekalonan", "Semarang", "Kendal"];

kotaDikunjungi.unshift("Cilacap"); // untuk menambahkan elemen di awal array
kotaDikunjungi.push("Solo");
kotaDikunjungi.pop(); // untuk menghapus elemen terakhir array
kotaDikunjungi.reverse(); // untuk membalik urutan elemen dalam array
kotaDikunjungi.splice(0,1); // untuk menghapus elemen pada index tertentu, dalam hal ini index 0 dengan jumlah 1 elemen
console.log(kotaDikunjungi);