# E-Commerce Product Management System

## Deskripsi Proyek
Aplikasi E-Commerce Product Management System adalah sistem pengelolaan produk berbasis web yang dibangun menggunakan React.js untuk frontend dan Express.js untuk backend. Aplikasi ini menyediakan antarmuka yang modern dan intuitif untuk manajemen produk dalam konteks e-commerce.


Link Repositori Aplikasi Final : https://github.com/10231005/praktikum-proweb
## Teknologi yang Digunakan
- Frontend:
  - React.js
  - Tailwind CSS untuk styling
  - Axios untuk HTTP requests
- Backend:
  - Express.js
  - Node.js
  - RESTful API

## Prasyarat
Sebelum menjalankan aplikasi, pastikan telah terinstall:
- Node.js (versi 14.0.0 atau lebih tinggi)
- NPM (Node Package Manager)
- Web browser modern (Chrome, Firefox, Safari, atau Edge)

## Instalasi dan Penggunaan

### Cara Install Dependensi:
```bash
npm install
```

### Cara Menjalankan Aplikasi Backend:
```bash
node index.js
```
Server akan berjalan pada `http://localhost:3001`

### Cara Menjalankan Aplikasi Frontend:
```bash
npm run dev
```
Aplikasi dapat diakses pada `http://localhost:5173` (atau port yang ditentukan)

## Struktur Proyek
```
ecommerce-main/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProdukList.jsx
│   │   │   └── TambahProduk.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── backend/
    ├── db.js
    ├── index.js
    └── package.json
```

## API Endpoints

### Base URL: http://localhost:3001

#### 1. Get All Products
- Method: GET
- Endpoint: /produk
- Response: Array of products JSON
- Used in: ProdukList.jsx

#### 2. Get Single Product
- Method: GET 
- Endpoint: /produk/:id
- Parameters: id (number)
- Response: Single product object
- Used in: ProdukList.jsx

#### 3. Create Product
- Method: POST
- Endpoint: /produk
- Body: { nama: string, harga: number }
- Response: Created product object
- Used in: TambahProduk.jsx

#### 4. Update Product
- Method: PUT
- Endpoint: /produk/:id
- Parameters: id (number)
- Body: { nama: string, harga: number }
- Response: Updated product object
- Used in: ProdukList.jsx

#### 5. Delete Product
- Method: DELETE
- Endpoint: /produk/:id
- Parameters: id (number)
- Response: { message: 'Produk berhasil dihapus' }
- Used in: ProdukList.jsx

### Additional Test Endpoints (Unused):
1. GET /
   - Returns: "Hello World from Dhyas, Aqila, Rizki"
2. POST /data
   - Body: { nama: string }
   - Returns: "Data diterima: {nama}"
3. DELETE /produk/:id  
   - Parameters: `id` (number)  
   - Returns: `{"message": "Produk dihapus"}`  
   - If Not Found: `{"error": "Produk tidak ditemukan"}`  
4. PUT /produk/:id  
   - Parameters: `id` (number)  
   - Body: `{ nama: string, harga: number }`  
   - Returns: Updated product object  
   - If Not Found: `{"error": "Produk tidak ditemukan"}`

## Fitur Aplikasi

### 1. Manajemen Produk
- Create: Menambahkan produk baru
- Read: Menampilkan daftar produk
- Update: Mengubah data produk
- Delete: Menghapus produk

### 2. Validasi Input
- Validasi form untuk input produk
- Feedback visual untuk error
- Konfirmasi untuk aksi penting

### 3. User Interface
- Desain responsif
- Animasi dan transisi
- Feedback visual

## Review Aplikasi Berjalan Tanpa Error

Aplikasi E-commerce ini telah berhasil diimplementasikan dengan berbagai fitur modern dan user-friendly. Dalam pengujian yang dilakukan, seluruh fungsionalitas berjalan dengan baik tanpa ditemukan error atau bug yang signifikan. Berikut adalah review detail dari implementasi aplikasi:

### Tampilan dan Interaksi Utama
Aplikasi menyajikan antarmuka yang modern dan intuitif dengan fokus pada pengalaman pengguna yang optimal. Halaman utama menampilkan daftar produk dengan layout yang rapi, juga dapat menambahkan produk

**Fitur-fitur Utama:**
1. **Manajemen Produk**
   - Daftar produk dengan tampilan modern
   - Badge penghitung jumlah produk
   - Daftar harga produk
   ![alt text](image.png)

2. **Sistem CRUD yang Lengkap**
   * Penambahan Produk:
     - Form input yang intuitif
     - Validasi data real-time
     - Feedback visual saat sukses
     ![alt text](image-2.png)
     ![alt text](image-4.png)

   * Pembaruan Produk:
     - Modal edit dengan data terpopulasi
     - Preview perubahan langsung
     - Konfirmasi sukses yang jelas
     ![alt text](image-4.png)
     ![alt text](image-6.png)
     ![alt text](image-7.png)

   * Penghapusan Produk:
     - Modal konfirmasi yang aman
     - Feedback visual yang jelas
     - Update tampilan secara real-time
     ![alt text](image-7.png)
     ![alt text](image-8.png)

### User Experience:
- Desain responsif di berbagai perangkat
- Feedback visual yang informatif
- Navigasi yang mudah dan intuitif
- Pesan error yang jelas dan helpful
![alt text](image-10.png)

### Validasi dan Error Handling

Aplikasi dilengkapi dengan sistem validasi yang komprehensif:
- Pencegahan input kosong dengan pesan error yang jelas
- Highlight field yang memerlukan perhatian
![alt text](image-9.png)

### Kesimpulan

Setelah melalui serangkaian pengujian dan penyempurnaan, aplikasi berhasil memenuhi standar dengan:

1. Berjalan dengan stabil tanpa mengalami error
2. Memiliki performa yang optimal
3. Menyajikan UX/UI yang modern serta mudah digunakan
4. Menangani berbagai kasus penggunaan dengan baik
5. Memberikan feedback yang jelas kepada pengguna

Semua fitur telah berfungsi sesuai dengan spesifikasi yang diharapkan, menciptakan pengalaman pengguna yang mulus dan profesional dalam manajemen produk e-commerce.

## Troubleshooting

### Masalah Umum dan Solusi
1. Jika server tidak bisa dijalankan:
   - Pastikan port 3001 tidak digunakan oleh aplikasi lain
   - Periksa instalasi Node.js dan NPM

2. Jika frontend tidak bisa diakses:
   - Pastikan semua dependensi terinstall dengan `npm install`
   - Periksa console browser untuk error

3. Jika API tidak merespons:
   - Pastikan backend server berjalan
   - Periksa URL dan port yang digunakan
