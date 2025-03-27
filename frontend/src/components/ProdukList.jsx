import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Form, Modal, Alert } from "react-bootstrap";

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [search, setSearch] = useState("");
  const [notif, setNotif] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [produkEdit, setProdukEdit] = useState({ id: "", nama: "", harga: "" });

  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = async () => {
    try {
      const res = await axios.get("http://localhost:3001/produk");
      setProduk(res.data);
    } catch (error) {
      console.error("Gagal mengambil data", error);
    }
  };

  // Menampilkan modal edit
  const handleEditClick = (item) => {
    setProdukEdit(item);
    setShowEditModal(true);
  };

  // Simpan hasil edit ke database
  const handleUpdateProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/produk/${produkEdit.id}`, produkEdit);
      setProduk(produk.map((p) => (p.id === produkEdit.id ? produkEdit : p)));
      setShowEditModal(false);
      setNotif("Produk berhasil diperbarui!");
      setTimeout(() => setNotif(""), 3000);
    } catch {
      setNotif("Gagal mengupdate produk!");
    }
  };

  // Hapus produk
  const handleHapusProduk = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/produk/${id}`);
      setProduk(produk.filter((p) => p.id !== id));
      setNotif("Produk berhasil dihapus!");
      setTimeout(() => setNotif(""), 3000);
    } catch {
      setNotif("Gagal menghapus produk!");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Daftar Produk</h2>

      {notif && <Alert variant="success">{notif}</Alert>}

      {/* Pencarian Produk */}
      <Form.Control
        type="text"
        placeholder="Cari produk..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-25 mb-3"
      />

      {/* Tabel Produk */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {produk
            .filter((p) => p.nama.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>Rp {item.harga}</td>
                <td>
                  <Button variant="warning" className="me-2" onClick={() => handleEditClick(item)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleHapusProduk(item.id)}>
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      {/* Modal Edit Produk */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateProduk}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control
                type="text"
                value={produkEdit.nama}
                onChange={(e) => setProdukEdit({ ...produkEdit, nama: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                value={produkEdit.harga}
                onChange={(e) => setProdukEdit({ ...produkEdit, harga: e.target.value })}
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" className="me-2" onClick={() => setShowEditModal(false)}>
                Batal
              </Button>
              <Button type="submit" variant="primary">
                Simpan Perubahan
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProdukList;
