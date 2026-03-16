/* ===== Mengambil elemen dari HTML menggunakan getElementById ===== */
const elemenEditor = document.getElementById("editor-kecil");
const elemenHf = document.getElementById("hf");
const elemenHb = document.getElementById("hb");
const elemenHk = document.getElementById("hk");

/* ===== Fungsi untuk menghitung jumlah huruf ===== */
function hitungHuruf(event) {

    const text = event.target.value;

    /* menghitung total karakter */
    elemenHf.textContent = text.length;

    /* menghitung huruf besar */
    const capsMatch = text.match(/[A-Z]/g);
    elemenHb.textContent = capsMatch ? capsMatch.length : 0;

    /* menghitung huruf kecil */
    const lowerMatch = text.match(/[a-z]/g);
    elemenHk.textContent = lowerMatch ? lowerMatch.length : 0;
}

/* ===== Event Listener untuk mendeteksi input pada textarea ===== */
elemenEditor.addEventListener("input", hitungHuruf);


/* ===== Tombol mengubah teks menjadi huruf besar ===== */
document.getElementById("huruf-besar").onclick = () => {
    elemenEditor.value = elemenEditor.value.toUpperCase();
};

/* ===== Tombol mengubah teks menjadi huruf kecil ===== */
document.getElementById("huruf-kecil").onclick = () => {
    elemenEditor.value = elemenEditor.value.toLowerCase();
};

/* ===== Tombol mengubah teks menjadi format paragraf ===== */
document.getElementById("huruf-paragraf").onclick = () => {

    let text = elemenEditor.value.toLowerCase();

    let capitalizedText = text.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (match) => {
        return match.toUpperCase();
    });

    elemenEditor.value = capitalizedText;

    /* memicu kembali event input agar jumlah huruf diperbarui */
    elemenEditor.dispatchEvent(new Event("input"));
};