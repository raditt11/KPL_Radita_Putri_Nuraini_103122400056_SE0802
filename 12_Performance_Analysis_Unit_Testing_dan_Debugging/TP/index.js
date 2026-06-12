function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {
  // Mengubah semua input menjadi string terlebih dahulu
  const str = String(data).toLowerCase();

  // Mengonversi string menjadi angka
  const num = Number(str);

  // Jika berhasil dikonversi menjadi angka
  if (!isNaN(num)) {
    return `Number: ${num * 2}`;
  }

  // Jika bukan angka, dianggap teks
  return `Teks: ${str} (panjangnya: ${str.length})`;
}

main();