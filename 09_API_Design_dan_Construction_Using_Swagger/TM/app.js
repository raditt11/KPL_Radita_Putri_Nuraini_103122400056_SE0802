import express from "express";
import { specs, swaggerUi } from "./swagger.js";

const app = express();
const PORT = 8000;

app.use(express.json());

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * 🔹 Fungsi untuk menghasilkan angka tetap dari nama
 * (deterministic hashing sederhana)
 */
function generateNumberFromName(nama) {
  let hash = 0;

  for (let i = 0; i < nama.length; i++) {
    hash += nama.charCodeAt(i);
  }

  return (hash % 100) + 1; // range 1–100
}

/**
 * @swagger
 * /:
 *   post:
 *     summary: Tebak angka berdasarkan nama
 *     description: Menghasilkan angka rahasia berdasarkan nama dan membandingkan dengan tebakan user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - tebakan
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Hamid
 *               tebakan:
 *                 type: integer
 *                 example: 24
 *     responses:
 *       200:
 *         description: Hasil tebakan
 */
app.post("/", (req, res) => {
  const { nama, tebakan } = req.body;

  // Validasi input
  if (!nama || typeof tebakan !== "number") {
    return res.status(400).json({
      jawaban: "Input tidak lengkap atau tidak valid",
    });
  }

  const angkaRahasia = generateNumberFromName(nama);

  if (tebakan === angkaRahasia) {
    return res.json({
      jawaban: `Benar sekali! Tebakannya adalah ${angkaRahasia}.`,
    });
  }

  if (tebakan > angkaRahasia) {
    return res.json({
      jawaban: "Tebakanmu terlalu tinggi!",
    });
  }

  return res.json({
    jawaban: "Tebakanmu terlalu rendah!",
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});