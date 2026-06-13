# Tugas Mandiri 13.3 – Event Delegation pada JavaScript

## Identitas Mahasiswa

**Nama** : Radita Putri Nuraini  
**NIM** : 103122400056  
**Kelas** : SE-08-02  

---

# Event Delegation pada JavaScript

Pada project Telkom-In-Competition, konsep Event Delegation diterapkan melalui mekanisme event handling yang disediakan oleh React. React tidak memasang event listener pada setiap komponen secara langsung, melainkan mengelola event secara terpusat melalui sistem Synthetic Event. Ketika pengguna melakukan interaksi seperti mengklik tombol pendaftaran kompetisi, bookmark, login, atau submit proposal, event akan ditangani oleh React dan diteruskan ke komponen yang sesuai.

Sebagai contoh, pada halaman daftar kompetisi terdapat beberapa tombol aksi yang dapat dipilih pengguna. Setiap tombol memiliki event handler seperti onClick, tetapi React mengelola event tersebut secara terpusat sehingga tidak perlu membuat event listener DOM secara terpisah untuk setiap elemen. Pendekatan ini sejalan dengan konsep Event Delegation yang memanfaatkan propagasi event untuk meningkatkan efisiensi pengelolaan event.

### Contoh

```html 
<button onClick={handleRegister}>
    Daftar Kompetisi
</button>
```

### Alasan Penggunaan

- Mengurangi jumlah event listener yang harus dibuat.
- Meningkatkan performa aplikasi ketika jumlah komponen bertambah banyak.
- Mempermudah pengelolaan interaksi pengguna.
- Mendukung pengembangan antarmuka yang dinamis dan responsif.
- Membuat kode lebih terstruktur dan mudah dipelihara.

### Kesimpulan

Pada project Telkom-In-Competition, konsep Event Delegation diterapkan melalui mekanisme event handling React yang menggunakan Synthetic Event System. Dengan pendekatan ini, event pengguna seperti klik tombol pendaftaran, bookmark, login, dan submit proposal dapat dikelola secara efisien tanpa perlu memasang event listener pada setiap elemen secara langsung. Hal ini membuat aplikasi lebih optimal, mudah dikembangkan, dan lebih mudah dipelihara.