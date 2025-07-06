function Galeri() {
  return (
    <section id="galeri" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Galeri Kegiatan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="https://via.placeholder.com/400x250?text=Kegiatan+1" alt="Kegiatan 1" className="rounded shadow" />
        <img src="https://via.placeholder.com/400x250?text=Kegiatan+2" alt="Kegiatan 2" className="rounded shadow" />
        <img src="https://via.placeholder.com/400x250?text=Kegiatan+3" alt="Kegiatan 3" className="rounded shadow" />
      </div>
    </section>
  );
}

export default Galeri;
