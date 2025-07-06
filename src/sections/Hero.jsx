function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="text-center px-4 max-w-2xl">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg"
          data-aos="fade-down"
        >
          Selamat Datang di <br />
          <span className="text-green-200">Desa Pugeran</span>
        </h1>
        <p
          className="text-lg md:text-xl mb-6 drop-shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Pusat informasi dan dokumentasi kegiatan desa berbasis digital.
        </p>
        <a
          href="#profil"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Telusuri Desa
        </a>
      </div>
    </section>
  );
}

export default Hero;