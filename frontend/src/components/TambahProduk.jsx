import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Alert, Card } from "react-bootstrap";

function TambahProduk({ onProdukTambah }) {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [notif, setNotif] = useState("");
  const [notifVariant, setNotifVariant] = useState("success"); // Warna alert dinamis

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !harga) {
      setNotif("⚠️ Nama dan Harga wajib diisi!");
      setNotifVariant("danger");
      return;
    }

    try {
      await axios.post("http://localhost:3001/produk", { nama, harga });

      setNotif("✅ Produk berhasil ditambahkan!");
      setNotifVariant("success");
      setNama("");
      setHarga("");

      if (onProdukTambah) {
        await onProdukTambah();
      }

      setTimeout(() => setNotif(""), 3000);
    } catch (error) {
      setNotif("❌ Gagal menambahkan produk!");
      setNotifVariant("danger");
    }
  };

  return (
    <div className="card p-4 shadow-sm"> 
  <h3 className="text-primary"></h3>
  {notif && <Alert variant="success">{notif}</Alert>}
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>Nama Produk</Form.Label>
      <Form.Control
        type="text"
        className="form-control"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Harga</Form.Label>
      <Form.Control
        type="number"
        className="form-control"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
      />
    </Form.Group>
    <Button type="submit" variant="primary" className="w-100">Simpan</Button>
  </Form>
</div>
  );
}

export default TambahProduk;
