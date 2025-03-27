import React, { useState, useEffect } from "react";
import axios from "axios";
import TambahProduk from "./components/TambahProduk";
import ProdukList from "./components/ProdukList";
import { Container } from "react-bootstrap";
import "./App.css"; // Tambahkan ini

function App() {
  const [produk, setProduk] = useState([]);

  // Ambil data produk saat pertama kali aplikasi dibuka
  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = async () => {
    try {
      const res = await axios.get("http://localhost:3001/produk");
      setProduk(res.data);
      console.log("Data produk diperbarui:", res.data); // Debugging
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    }
  };

  const handleProdukTambah = async () => {
    console.log("Produk berhasil ditambahkan, mengambil data terbaru...");
    await fetchProduk();
  };

  return (
    <Container className="my-4">
      <h1 className="text-center">Aplikasi E-Commerce Sederhana</h1>
      <TambahProduk onProdukTambah={handleProdukTambah} />
      <hr />
      <ProdukList produk={produk} />
    </Container>
  );
}

export default App;