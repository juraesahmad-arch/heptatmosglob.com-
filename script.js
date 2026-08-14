document.getElementById('inquiryForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // 1. Masukkan Nomor WhatsApp Tujuan (Gunakan kode 62 di depan)
  const noWaTujuan = "6285881364710"; 

  // 2. Ambil nilai input dari form di website
  const namaUser = document.getElementById('nama').value;
  const kontakUser = document.getElementById('emailWa').value;
  const kategoriProduk = document.getElementById('kategori').value;
  const pesanDetail = document.getElementById('pesan').value;

  // 3. Susun teks pesan WhatsApp
  const teksPesan = `Halo *HAG Tires & Rims*, saya ingin mengajukan inquiry produk:%0A%0A` +
                    `*Nama / Perusahaan:* ${encodeURIComponent(namaUser)}%0A` +
                    `*Email / No. WA:* ${encodeURIComponent(kontakUser)}%0A` +
                    `*Kategori Produk:* ${encodeURIComponent(kategoriProduk)}%0A` +
                    `*Detail Pesan / Ukuran:* ${encodeURIComponent(pesanDetail)}%0A%0A` +
                    `Mohon informasi harga dan ketersediaannya. Terima kasih!`;

  // 4. Buka WhatsApp
 window.open(`https://wa.me/${whatsappNo}?text=${encodedText}`, '_blank');
});