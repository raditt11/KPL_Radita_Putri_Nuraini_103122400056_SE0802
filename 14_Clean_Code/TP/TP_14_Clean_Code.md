# Tugas Pendahuluan 14 – Clean Code

## Identitas Mahasiswa

**Nama** : Radita Putri Nuraini  
**NIM** : 103122400056  
**Kelas** : SE-08-02  

---

# Refactoring Kode Berdasarkan Prinsip Clean Code

Refactoring adalah proses memperbaiki struktur internal kode tanpa mengubah fungsi atau perilaku program. Pada kode yang diberikan, fungsi fetchOrderDetails() sudah dapat berjalan dengan baik, tetapi masih terdapat beberapa pelanggaran terhadap prinsip Clean Code yang dapat menyebabkan kode sulit dipahami, dipelihara, dan dikembangkan di masa depan.

# Hasil Refactoring
``` javascript
async function fetchOrderDetails(orderId, token) {
    try {
        const order = await getOrder(orderId, token);

        renderOrderDetails(order);
        showModal();

        setupConfirmButton(order, token);

    } catch (error) {
        console.error(error);
    }
}

async function getOrder(orderId, token) {
    const response = await fetch(
        `https://example.com/api/orders/${orderId}`,
        {
            headers: {
                Authorization: token
            }
        }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch order details');
    }

    return response.json();
}

function renderOrderDetails(order) {
    detailsDiv.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Status: ${order.status}</p>
    `;
}

function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

function setupConfirmButton(order, token) {
    confirmBtn.style.display =
        order.status === 'Delivered'
            ? 'none'
            : 'block';

    confirmBtn.onclick = () => {
        confirmOrder(order.id, token);
    };
}
```

# Kesimpulan
Kode asli sudah berjalan dengan baik, tetapi melanggar beberapa prinsip Clean Code, yaitu:

1. Single Responsibility Principle karena satu fungsi mengerjakan terlalu banyak hal.
2. Long Function yang sulit dipahami dan dipelihara.
3. Event Listener Duplication yang berpotensi menyebabkan bug dan memory leak.
4. Hardcoded Values yang mengurangi maintainability.
5. Manipulasi DOM Berulang yang membuat kode tidak efisien.

Refactoring dilakukan dengan memecah fungsi menjadi beberapa fungsi kecil yang memiliki satu tanggung jawab, sehingga kode menjadi lebih modular, mudah dibaca, mudah diuji, dan lebih mudah dikembangkan di masa depan.