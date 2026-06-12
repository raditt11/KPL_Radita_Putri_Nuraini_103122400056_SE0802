// Fungsi untuk menghitung jumlah huruf (A-Z saja)
export function hitungHuruf(text) {
  // Ambil hanya huruf A-Z (besar & kecil)
  const huruf = text.match(/[a-zA-Z]/g);
  
  // Jika tidak ada huruf, return 0
  return huruf ? huruf.length : 0;
}

// Fungsi untuk menghitung jumlah kata (hanya kata berisi huruf A-Z)
export function hitungKata(text) {
  // Ambil kata yang hanya terdiri dari huruf
  const kata = text.match(/\b[a-zA-Z]+\b/g);
  
  // Jika tidak ada kata, return 0
  return kata ? kata.length : 0;
}