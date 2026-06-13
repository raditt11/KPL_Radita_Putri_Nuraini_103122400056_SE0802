# Tugas Mandiri 13 – Design Pattern

---

## Identitas Mahasiswa

**Nama** : Radita Putri Nuraini  
**NIM** : 103122400056  
**Kelas** : SE-08-02  

**Asisten Praktikum** :

- Adhiansyah Muhammad Pradana Farawowan  
- Hamid Khaeruman  

---

## Analisis Design Pattern pada Sistem Telkom In Competition

**1. Sigleton Pattern**
```javascript
export class BroadcastManager {

  private static instance:
    BroadcastManager | null = null;

  public static getInstance():
    BroadcastManager {

    if (!BroadcastManager.instance) {

      BroadcastManager.instance =
        new BroadcastManager();

    }

    return BroadcastManager.instance;
  }
}
```

**Penjelasan** : 
Singleton Pattern diterapkan pada kelas BroadcastManager untuk memastikan bahwa hanya terdapat satu objek pengelola broadcast yang digunakan oleh seluruh sistem. Implementasi ini dilakukan dengan menggunakan variabel statis instance yang menyimpan objek BroadcastManager dan method getInstance() yang bertugas mengembalikan objek tersebut. Ketika method getInstance() dipanggil untuk pertama kali, sistem akan membuat instance baru. Selanjutnya, setiap pemanggilan method yang sama akan mengembalikan instance yang telah dibuat sebelumnya. Dengan demikian, seluruh komponen aplikasi menggunakan objek BroadcastManager yang sama sehingga pengelolaan pengumuman menjadi lebih konsisten, efisien, dan mudah dipelihara.

**2. Middleware Pattern**
```javascript
export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    next();
};
```
**Penjelasan :**
Middleware Pattern diterapkan melalui fungsi authMiddleware yang bertugas melakukan validasi autentikasi sebelum request diproses oleh controller. Middleware akan memeriksa keberadaan token pada header request dan menentukan apakah pengguna memiliki hak untuk mengakses layanan yang diminta. Jika validasi berhasil, request diteruskan menggunakan fungsi next(), sedangkan jika gagal sistem akan mengembalikan respons error. Penerapan pattern ini membuat proses autentikasi dapat digunakan kembali pada berbagai route, meningkatkan modularitas kode, serta mempermudah pengelolaan keamanan aplikasi.

**3. Context Pattern**
```javascript
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{ user, setUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};
```
**Penjelasan :**
Context Pattern diterapkan melalui AuthContext dan AuthProvider yang berfungsi sebagai pusat penyimpanan data pengguna (user). Dengan menggunakan createContext(), data autentikasi dapat dibagikan ke seluruh komponen aplikasi tanpa perlu mengirimkan props secara berulang (prop drilling). Pada komponen AuthProvider, state user dan fungsi setUser disimpan menggunakan useState, kemudian dibagikan melalui AuthContext.Provider. Dengan demikian, setiap komponen yang membutuhkan informasi pengguna dapat mengaksesnya langsung melalui useContext(AuthContext). Penerapan pattern ini membuat pengelolaan state autentikasi menjadi lebih terpusat, modular, dan mudah dipelihara.

## Kesimpulan
Telkom-In-Competition menerapkan beberapa design pattern untuk meningkatkan kualitas dan struktur perangkat lunak, yaitu Singleton Pattern, Middleware Pattern, dan Context Pattern. Singleton Pattern digunakan untuk memastikan hanya terdapat satu instance objek yang digunakan bersama oleh seluruh aplikasi, Middleware Pattern digunakan untuk menangani proses autentikasi dan validasi request secara modular sebelum mencapai controller, sedangkan Context Pattern digunakan untuk mengelola data autentikasi pengguna secara global pada frontend React.

Penerapan ketiga design pattern tersebut membuat sistem menjadi lebih terstruktur, mudah dikembangkan, reusable, dan mudah dipelihara. Selain itu, pemisahan tanggung jawab pada setiap komponen membantu meningkatkan keterbacaan kode serta mendukung pengembangan fitur baru secara lebih efisien di masa mendatang.