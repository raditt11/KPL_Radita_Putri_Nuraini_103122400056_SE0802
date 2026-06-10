import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ quiet: true }); // <-- menghilangkan pesan injected

const BASE_API = process.env.BASE_API;

// fungsi ambil kurs
async function getRates() {
  try {
    const response = await axios.get(BASE_API);
    return response.data.idr;
  } catch (error) {
    console.error("Gagal mengambil data API:", error.message);
  }
}

// fungsi format tanggal
function formatDate(date) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// fungsi format mata uang
function formatCurrency(value, currency) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(value);
}

// fungsi konversi
async function convert(amount) {
  const rates = await getRates();

  const cny = amount * rates.cny;
  const eur = amount * rates.eur;

  const date = formatDate(new Date());

  console.log(
    `Kurs ${formatCurrency(amount, "IDR")} pada ${date} adalah ${cny.toFixed(
      2
    )} CNY dan ${eur.toFixed(2)} €`
  );
}

// test sesuai soal
(async () => {
  await convert(25000);
  await convert(50000);
  await convert(100000);
})();