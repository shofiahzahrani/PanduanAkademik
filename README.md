# PanduanAkademik - Mobile Application 🎓📱

Aplikasi mobile **PanduanAkademik** adalah proyek praktikum berbasis **React Native** yang dirancang sebagai simulator manajemen Kartu Rencana Studi (KRS) dan informasi profil mahasiswa. Aplikasi ini berfokus pada implementasi navigasi antar-layar, pengelolaan tumpukan halaman (_back stack_), serta pemanfaatan fitur _Intent_ (baik _Explicit_ maupun _Implicit_) untuk integrasi dengan aplikasi eksternal.

Aplikasi ini dikembangkan oleh **Shofiah Zahrani** (NPM: **233510588**), mahasiswi **Teknik Informatika**, **Universitas Islam Riau**.

---

## 🚀 Fitur Utama & Implementasi Tugas

### 1. Splash Screen

- Menampilkan layar selamat datang berdurasi **2 detik** saat aplikasi pertama kali dibuka.
- Berpindah secara otomatis ke halaman utama (_Main Screen_) dengan transisi yang halus.

### 2. Main Screen & Bottom Navigation

- Menggunakan navigasi bawah (_Bottom Navigation_) untuk berpindah ke tiga tab utama:
  - **PanduanAkademik (Home):** Menampilkan banner selamat datang personal, informasi IPK, dan tata letak _Menu Cepat_ simetris berbasis 3-kolom (Mata Kuliah, Nilai, Profil). Serta menampilkan daftar mata kuliah aktif.
  - **Mata Kuliah:** Daftar lengkap mata kuliah yang diambil mahasiswa dengan indikator visual inisial mata kuliah (_custom dynamic badge_) yang rapi dan responsif di iOS & Android.
  - **Profil Mahasiswa:** Halaman rangkuman akademik, statistik SKS, informasi institusi, serta daftar minat mahasiswa.

### 3. Navigasi Antar-Screen & Passing Data

- **Explicit Intent / Navigation:** Alur perpindahan dari halaman utama ke halaman _Detail Mata Kuliah_ ketika salah satu item diklik.
- **Data Transfer (Passing Data):** Mengirimkan data dinamis berupa nama mahasiswa, NPM, dan informasi mata kuliah antar-layar.
- **Data Balikan (Return Data):** Tombol **"Daftar Mata Kuliah"** pada halaman Detail berfungsi mengirimkan data kelas kembali ke halaman Beranda (_Home Screen_) dan langsung memicu _banner alert_ sukses berwarna hijau di bagian atas layar.
- **Back Stack Management:** Menjamin manajemen memori yang benar sehingga tidak terjadi penggandaan tumpukan halaman (_multiple instances_) saat navigasi balik arah dilakukan.

### 4. Penggunaan Implicit Intent (Aksi Eksternal)

Integrasi penuh dengan fitur bawaan _smartphone_ melalui library `Linking` dan `Share` pada React Native:

- 📞 **Hubungi Dosen:** Membuka aplikasi telepon atau WhatsApp.
- 📧 **Kirim Email:** Membuka aplikasi email client bawaan dengan alamat tujuan institusi.
- 📍 **Lihat di Google Maps:** Membuka rute koordinat lokasi kampus Universitas Islam Riau secara presisi.
- 🔗 **Bagikan Mata Kuliah:** Memicu sistem _native share_ untuk membagikan info mata kuliah ke media sosial.

---

## 🛠️ Tech Stack yang Digunakan

- **Framework:** React Native (Expo)
- **UI Component Library:** React Native Paper
- **Icons:** MaterialCommunityIcons (React Native Vector Icons)
- **Navigation:** React Navigation (Stack & Bottom Tabs)

---

## 💻 Cara Menjalankan Projek di Lokal

1. **Clone Repositori ini:**

```bash
   git hub (https://github.com/shofiahzahrani/PanduanAkademik.git)
   vercel  (https://panduan-akademik-react.vercel.app)
```
