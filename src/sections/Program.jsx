function Program() {
  return (
    <section id="program" className="py-16 px-4 max-w-6xl mx-auto bg-green-50">
      <h2
        className="text-3xl font-bold mb-8 text-center text-green-800"
        data-aos="fade-up"
      >
        Program Kerja
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-300"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <img
            src="https://via.placeholder.com/400x250?text=Penyuluhan+Gizi"
            alt="Penyuluhan Gizi"
            className="rounded mb-3"
          />
          <h3 className="text-xl font-semibold text-green-700">Penyuluhan Gizi Balita</h3>
          <p className="text-gray-700 text-sm mt-1 mb-3">
            Edukasi kepada para ibu tentang pentingnya gizi seimbang untuk pertumbuhan anak.
          </p>
          <a
            href="#"
            className="text-green-600 text-sm hover:underline"
          >
            Lihat Dokumentasi
          </a>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="https://via.placeholder.com/400x250?text=Digitalisasi+Desa"
            alt="Digitalisasi Desa"
            className="rounded mb-3"
          />
          <h3 className="text-xl font-semibold text-green-700">Digitalisasi Administrasi</h3>
          <p className="text-gray-700 text-sm mt-1 mb-3">
            Pelatihan kepada perangkat desa tentang penggunaan komputer untuk administrasi.
          </p>
          <a
            href="#"
            className="text-green-600 text-sm hover:underline"
          >
            Lihat Modul Pelatihan
          </a>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://via.placeholder.com/400x250?text=UMKM"
            alt="UMKM"
            className="rounded mb-3"
          />
          <h3 className="text-xl font-semibold text-green-700">Pendampingan UMKM</h3>
          <p className="text-gray-700 text-sm mt-1 mb-3">
            Sosialisasi dan pendampingan UMKM dalam pemasaran produk secara digital.
          </p>
          <a
            href="#"
            className="text-green-600 text-sm hover:underline"
          >
            Lihat Pamflet
          </a>
        </div>

        {/* Card 4 */}
        <div
          className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://via.placeholder.com/400x250?text=Wisata+Desa"
            alt="Wisata Edukasi"
            className="rounded mb-3"
          />
          <h3 className="text-xl font-semibold text-green-700">Pengembangan Wisata Edukasi</h3>
          <p className="text-gray-700 text-sm mt-1 mb-3">
            Penataan lokasi desa untuk dijadikan wisata edukatif bagi anak-anak dan pelajar.
          </p>
          <a
            href="#"
            className="text-green-600 text-sm hover:underline"
          >
            Lihat Galeri
          </a>
        </div>
      </div>
    </section>
  );
}

export default Program;