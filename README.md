
# HOTEL PANARUNG - Mobile Website

Website mobile first untuk Hotel Panarung Palangka Raya.
Siap deploy ke GitHub Pages.

## Struktur
- index.html = Home + Katalog + Kontak + Alamat + Rute otomatis
- assets/ = gambar katalog 7 kamar (tema oranye Hotel Panarung)

## Cara Deploy ke GitHub
1. Buat repo baru di github.com (misal hotel-panarung)
2. Upload semua file di folder ini ke repo (atau push via git)
3. Masuk ke Settings > Pages
4. Source: Deploy from a branch, Branch: main, Folder: / (root)
5. Save. Link website akan muncul: https://username.github.io/hotel-panarung/

## Cara Ganti Nomor WhatsApp
Buka index.html, cari baris:
const WA_NUMBER = "6281234567890";
Ganti dengan nomor WhatsApp Business kamu tanpa spasi, pakai kode negara 62.

Contoh: 6281234567890 -> untuk 0812-3456-7890

## Fitur
- Mobile responsive
- Katalog 7 tipe kamar sesuai daftar harga asli
- Tombol Booking langsung ke WhatsApp dengan pesan otomatis
- Peta embed + tombol Rute Otomatis ke Hotel Panarung
- Link Google Maps asli: https://maps.app.goo.gl/UneBsMLtS9qaUc4A8
- Alamat: Jl. Dr Murjani No.51, Langkai, Pahandut, Palangka Raya 73111

## Rute Otomatis
Tombol "Rute Otomatis ke Hotel Panarung" akan membuka Google Maps dengan:
https://www.google.com/maps/dir/?api=1&destination=Jl.+Dr+Murjani+No.51+Langkai+Pahandut+Palangka+Raya
Google akan otomatis mendeteksi lokasi user saat ini dan memberi navigasi.

Dibuat untuk Ryan - Resepsionis & Cleaning Service Hotel Panarung
