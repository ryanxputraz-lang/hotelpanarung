# Hotel Panarung — hotelpanarung.pages.dev
Website statis, siap deploy ke Cloudflare Pages via GitHub.

## Struktur (navigasi terpisah)
- `components/nav.html` — navigasi (di-load via `js/nav.js`, jangan duplikat di tiap halaman)
- `index.html` — Beranda
- `kamar.html` — Kamar & Harga + Katalog gambar
- `fasilitas.html` — Fasilitas
- `map.html` — Lokasi / Map (route /map)
- `kontak.html` — Kontak & Booking
- `css/style.css`, `js/nav.js`, `assets/logo.jpg`, `assets/katalog.jpg`

## Deploy ke Cloudflare Pages via GitHub
1. Buat repo baru di GitHub, upload SEMUA isi folder ini (bukan folder zip-nya) ke root repo.
2. Di Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git > pilih repo ini.
3. Framework preset: **None / Static**. Build command: (kosongkan). Output directory: `/` atau `.` (root).
4. Deploy. Domain akan jadi `hotelpanarung.pages.dev`.
5. Custom domain (opsional): Pages > Custom domains > tambahkan domain kamu.

## WhatsApp & Map
- WhatsApp booking: https://wa.me/6285353185994 (Staf Ryan 085353185994)
- Google Maps: https://maps.app.goo.gl/v9G1kDK77zaPMktw9?g_st=ac
- Route /map di-handle oleh `_redirects` -> /map.html

## Catatan
- Ganti harga / nomor kamar di `kamar.html` + `index.html` + `assets/katalog.jpg` kalau ada perubahan.
