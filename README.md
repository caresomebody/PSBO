# SIMARU (Sistem Management Peminjaman Ruangan)
SIMARU adalah sistem peminjaman ruangan yang ada di IPB University

Trello: https://trello.com/b/ykm9C6zl/mamen-family-psbo

# Back-End
https://github.com/caresomebody/SIMARU-API

# Deskripsi Singkat Aplikasi
Selama penyelenggaraan acara kepanitiaan maupun organisasi di IPB, salah satu hal yang perlu dipersiapkan adalah ruangan. Banyak jenis ruangan yang dapat dipinjam dengan berbagai macam cara peminjaman. Variasi dalam peminjaman ruangan tersebut kerap menimbulkan pertanyaan bagi panitia penyelenggara, seperti informasi terkait ketersediaan, kapasitas, waktu operasional, fasilitas serta narahubung yang harus dihubungi. Dengan adanya permasalahan yang dialami tersebut, kami memutuskan untuk membuat suatu platform terpusat mengenai informasi setiap ruangan yang ada di IPB. Platform tersebut bernama SIMARU.

SIMARU ( Sistem Management Peminjaman Ruang ) merupakan platform berbasis website yang diperuntukkan untuk mahasiswa IPB dalam melakukan pencarian informasi dan pengajuan peminjaman dari data ruangan yang tersedia. Fitur yang disediakan oleh Simaru berupa Data Ruangan, Ajukan Peminjaman, Data Peminjaman, dan Pengajuan. Dengan adanya platform informasi ini, tentunya akan membuat alur peminjaman setiap ruangan menjadi lebih terstruktur, informasi jadwal booking setiap ruangan akan lebih terpusat, dan proses peminjaman dapat dilakukan dengan lebih efektif dan efisien.

# User Analysis
### User Story
“Sebagai panitia sebuah acara di ipb saya ingin tahu data realtime ruangan mana di IPB yang sudah terbooking, agar saya dapat menyesuaikan dengan jadwal peminjaman untuk booking ruangan di acara saya.”

“Sebagai panitia sebuah acara di ipb saya ingin tahu kapasitas ruangan yang ada di IPB, agar saya dapat menyesuaikan peminjaman ruangan untuk acara saya.”

“Sebagai panitia sebuah acara di ipb saya ingin tahu fasilitas yang tersedia di ruangan yang akan dipinjam, agar saya dapat menyesuaikan kebutuhan acara dengan fasilitas ruangan.”

“Sebagai panitia sebuah acara di ipb saya ingin tahu narahubung dari setiap ruangan yang ada di IPB, agar saya dapat lebih mudah dalam menghubungi pihak ruangan yang ingin saya sewa nantinya”

# Spesifikasi Teknis Lingkungan Pengembangan
### Software
Visual Studio Code, Github, Github Desktop, Insomnia, Figma, Chrome, Trello

### Hardware
- Processors  : AMD Ryzen 5 3600, Intel Core i5-8250U 1.60 GHz
- Memory      : 16GB, 8GB RAM
- VGA         : Radeon RX 570, NVIDIA GeForce® 940MX

### Tech Stack
![image](https://user-images.githubusercontent.com/48080443/119326060-b78f8d80-bcab-11eb-8bdf-26cbabea530c.png)

MERN adalah singkatan dari MongoDB, Express, React, Node yang merupakan tech stack yang digunakan pada pengembangan aplikasi kali ini.

<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>Fungsi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MongoDB</td>
            <td>Database</td>
        </tr>
         <tr>
            <td>ExpressJS</td>
            <td>NodeJS Web Framework</td>
        </tr>
        <tr>
            <td>NodeJS</td>
            <td>JavaScript Web Server</td>
        </tr>
       <tr>
            <td>React JS</td>
            <td>Client-side JavaScript framework (Front-End)</td>
        </tr>
</tbody>
</table>

MERN adalah salah satu dari beberapa variasi stack MEAN (MongoDB, Express, Angular, Node), di mana Angular sebagai framework front-end tradisional digantikan dengan React.js. Variasi lainnya adalah MEVN (MongoDB, Express, Vue, Node) dan framework front end dengan bahasa pemrograman JavaScript apapun dapat digunakan.

# Konsep OOP yang Digunakan

# Tipe Desain Pengembangan yang Digunakan
Dalam pengembangan sistem Simaru, kami menggunakan metode waterfall (Air terjun). Metode ini menggambarkan pendekatan yang cukup sistematis juga berurutan pada pengembangan software. Tahapan yang dilakukan terdiri dari Requirement, Design System, Coding, Integration dan Operation, serta Maintenance. Berikut merupakan uraian dari tahapan yang kami lakukan :

<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Tahapan</th>
             <th>Uraian</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1.</td>
            <td>Requirement Analysis</td>
            <td>Pada tahapan ini dilakukan untuk mengetahui kebutuhan pengguna atas perangkat lunak yang diharapkan. Informasi kebutuhan tersebut bisa diperoleh dengan cara wawancara langsung, diskusi, dan studi literatur. Kemudian, hasil dari informasi tersebut akan dianalisis dan dikelompokkan berdasarkan kebutuhan pengguna</td>
        </tr>
         <tr>
            <td>2.</td>
            <td>Design System</td>
            <td>Pada tahap ini akan dibuat software requirement dimulai dari perancangan perangkat lunak, pembuatan ERD, Use case diagram, Activity diagram, Class diagram, Arsitektur sistem, serta representasi interface</td>
        </tr>
         <tr>
            <td>3.</td>
            <td>Coding & System</td>
            <td>Tahapan ini merupakan implementasi dari perancangan yang dibuat. Sistem informasi akan dibuat menggunakan bahasa pemrograman JavaScript dengan Framework React JS. Setelah itu akan dilakukan testing terhadap sistem yang telah dibuat untuk mengetahui kesalahan dari sistem tersebut dan dilakukan perbaikan</td>
        </tr>
         <tr>
            <td>4.</td>
            <td>Integration</td>
            <td>Tahap ini merupakan tahapan final. Setelah melakukan tiga tahapan di atas, maka sistem telah siap untuk digunakan oleh user</td>
        </tr>
        <tr>
            <td>5.</td>
            <td>Operation & Maintenance</td>
            <td>Pemeliharaan akan dilakukan apabila terdapat update fitur atau memperbaiki kesalahan yang ditemukan pada saat sistem digunakan langsung oleh user</td>
        </tr>
</tbody>
</table>

# Hasil dan Pembahasan
### Use Case Diagram
![USE CASE DIAGRAM](https://user-images.githubusercontent.com/60166539/121931675-1f4a6d00-cd6e-11eb-877f-faceee4b0914.png)

Kami menawarkan ide sebuah platform dimana mahasiswa IPB dapat melakukan peminjaman ruangan yang ada di  IPB. Pengguna dapat melihat ketersediaan ruangan pada daftar ruangan dan juga fasilitas pada ruangan secara lengkap seperti kapasitas orang, luas ruangan dan peralatan pada detail ruangan. Pengguna dapat melakukan pengajuan untuk meminjam ruangan dengan memasukan tujuan peminjaman ruangan dan juga memilih jam serta tanggal pada detail ruangan. Kemudian pengajuan itu akan masuk ke dalam daftar pending pada aplikasi penjaga ruangan sebagai admin yang nantinya pengajuan tersebut dapat disetujui oleh admin. Jika sudah diterima, maka permohonan tersebut akan masuk ke dalam list yang ada pada daftar pengajuan bahwa ruangan sudah dipesan oleh pihak yang memesan dengan rinci.

### Activity Diagram
![class diagram](https://user-images.githubusercontent.com/48080553/122062720-dcde6a00-ce19-11eb-8f51-c3fc8951cfb9.png)

### Class Diagram
![PSBO KELOMPOK-CLASS DIAGRAM](https://user-images.githubusercontent.com/60166539/121931715-2f624c80-cd6e-11eb-841f-487f05934cda.png)

### Entity Relationship Diagram (ERD)
![ERD REVISED-ERD REVISED](https://user-images.githubusercontent.com/60166539/121931754-39844b00-cd6e-11eb-8cd1-e99e4135abb9.png)

### Arsitektur Sistem

### Fungsi Utama yang Dikembangkan
Fitur-fitur aplikasi Simaru antara lain :
- Data Ruangan

Pada fitur “Data Ruangan” pengguna dapat melihat daftar ruangan yang ada di IPB lengkap dengan informasi detail yang meliputi foto ruangan, deskripsi, kapasitas, ukuran, waktu operasional, fasilitas yang tersedia,  dan narahubung dari ruangan tersebut.
- Ajukan Peminjaman

Fitur “Ajukan Peminjaman” dapat digunakan pengguna apabila ingin mengajukan peminjaman ruangan. Pada fitur ini pengguna diwajibkan untuk mengisikan form pengajuan yang tersedia.
- Data Peminjaman

Fitur “Data Peminjaman” berisikan informasi realtime ruangan yang sudah terbooking. Fitur ini membantu pengguna untuk menyesuaikan pengajuan berdasarkan ruangan dan waktu peminjaman yang akan ia ajukan.
- Pengajuan

Pada fitur “Pengajuan” pengguna dapat melihat daftar pengajuan yang telah ia buat lengkap dengan status dari pengajuan tersebut.

### Fungsi CRUD
1. CREATE
- Pengguna dapat membuat pengajuan permintaan untuk booking ruangan dengan atribut Id pengajuan, dokumen, deskripsi, tanggal mulai, tanggal selesai, waktu mulai, waktu selesai.
2. READ
- Pengguna dapat melihat daftar ketersediaan ruangan yang terdapat pada homepage
- Pengguna dapat melihat data detail ruangan IPB
- Pengguna dapat melihat detail pengajuan dari pengajuan yang telah ia buat
3. UPDATE
- Pengguna dapat mengupdate pengajuan yang telah ia ajukan sebelumnya selama admin belum menanggapi pengajuan tersebut
4. DELETE
- Pengguna dapat menghapus pengajuan yang telah ia buat sebelumnya

# Hasil Implementasi
### Screenshot sistem
### Link Aplikasi
Figma: https://www.figma.com/file/UBvLP54qv5oLWKCFyiYgVp/SIMARU

### Saran untuk Pengembangan Selanjutnya

# Developer dan Job Desc

<table>
    <thead>
        <tr>
            <th></th>
            <th>Nama</th>
            <th>Nim</th>
          <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Zahwa Wahyu Riana</td>
            <td>G64180070</td>
            <td>Front-End & Back-End</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Ali Naufal Ammarullah</td>
            <td>G64180080</td>
            <td>Project Manager & Back-End</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Mutia Marcha Fatika</td>
            <td>G64180085</td>
            <td>Front-End & UI/UX Designer</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Muhammad Rayhanendra Adikoesoemo</td>
            <td>G64180098</td>
            <td>Front-End</td>
        </tr>
      <tr>
            <td>5</td>
            <td>Muhammad Hafizhan</td>
            <td>G64180100</td>
            <td>Front-End</td>
        </tr>
</tbody>
</table>

