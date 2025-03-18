import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [editProduk, setEditProduk] = useState(null);
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/produk')
      .then((response) => setProduk(response.data))
      .catch((error) => console.error('Terjadi error:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch(err => console.error('Gagal menghapus produk:', err));
  };

  const handleEdit = (item) => {
    setEditProduk(item);
    setNama(item.nama);
    setHarga(item.harga);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/produk/${editProduk.id}`, { nama, harga })
      .then(response => {
        setProduk(produk.map(p => (p.id === editProduk.id ? response.data : p)));
        setEditProduk(null);
        setNama('');
        setHarga('');
      })
      .catch(err => console.error('Gagal mengupdate produk:', err));
  };

  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {produk.map((item) => (
          <li key={item.id}>
            {item.nama} - Rp{item.harga}
            <button onClick={() => handleEdit(item)} style={{ marginLeft: '10px', backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {editProduk && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h3>Edit Produk</h3>
          <form onSubmit={handleUpdate}>
            <label>
              Nama:
              <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
            </label>
            <br />
            <label>
              Harga:
              <input type="number" value={harga} onChange={(e) => setHarga(e.target.value)} required />
            </label>
            <br />
            <button type="submit" style={{ marginTop: '10px', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Update</button>
            <button onClick={() => setEditProduk(null)} style={{ marginLeft: '10px', backgroundColor: 'gray', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Batal</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProdukList;
