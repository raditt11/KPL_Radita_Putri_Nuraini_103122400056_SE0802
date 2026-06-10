const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const charLowerElement = document.getElementById("hk");
const charUpperElement = document.getElementById("hb");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");

const btnModeTerang = document.getElementById("light-mode");
const btnModeGelap = document.getElementById("dark-mode");
const btnModeSepia = document.getElementById("sepia-mode");

const root = document.documentElement;


/* Ubah ke huruf besar */
btnBesar.addEventListener("click", () => {
  editorElement.value = editorElement.value.toUpperCase();
});


/* Ubah ke huruf kecil */
btnKecil.addEventListener("click", () => {
  editorElement.value = editorElement.value.toLowerCase();
});


/* Hitung huruf */
function hitungHuruf(event) {
  const text = event.target.value;
  const chr = text.split("");

  let jmlHurufSejati = 0;
  let jmlHurufBesar = 0;
  let jmlHurufKecil = 0;

  const spasi = /\s+/;
  const besar = /[A-Z]/;
  const kecil = /[a-z]/;

  chr.forEach((char) => {
    if (spasi.test(char)) return;

    if (besar.test(char)) jmlHurufBesar++;
    if (kecil.test(char)) jmlHurufKecil++;

    jmlHurufSejati++;
  });

  charLowerElement.textContent = jmlHurufKecil;
  charUpperElement.textContent = jmlHurufBesar;
  charCountElement.textContent = jmlHurufSejati;
}

editorElement.addEventListener("input", hitungHuruf);


/* =========================
   MODE (STATE)
========================= */

function resetMode() {
  root.classList.remove("dark-mode", "sepia-mode");
}

/* Mode Terang */
btnModeTerang.addEventListener("click", () => {
  resetMode();
});

/* Mode Gelap */
btnModeGelap.addEventListener("click", () => {
  resetMode();
  root.classList.add("dark-mode");
});

/* Mode Sepia */
btnModeSepia.addEventListener("click", () => {
  resetMode();
  root.classList.add("sepia-mode");
});