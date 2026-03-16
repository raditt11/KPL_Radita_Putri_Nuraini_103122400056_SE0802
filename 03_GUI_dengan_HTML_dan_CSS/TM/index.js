const editor = document.getElementById("editor-kecil");

const jumlahHuruf = document.getElementById("hf");
const hurufBesar = document.getElementById("hb");
const hurufKecil = document.getElementById("hk");

const btnBesar = document.getElementById("huruf-besar");
const btnKecil = document.getElementById("huruf-kecil");


function hitungHuruf() {

const teks = editor.value;

jumlahHuruf.textContent = teks.length;

let besar = 0;
let kecil = 0;

for (let huruf of teks) {

if (huruf >= "A" && huruf <= "Z") {
besar++;
}

else if (huruf >= "a" && huruf <= "z") {
kecil++;
}

}

hurufBesar.textContent = besar;
hurufKecil.textContent = kecil;

}

editor.addEventListener("input", hitungHuruf);


btnBesar.addEventListener("click", function () {

editor.value = editor.value.toUpperCase();

hitungHuruf();

});


btnKecil.addEventListener("click", function () {

editor.value = editor.value.toLowerCase();

hitungHuruf();

});

hitungHuruf();