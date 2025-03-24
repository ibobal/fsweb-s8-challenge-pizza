import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="cta-content bg-[url(/images/iteration-1-images/home-banner.png)] w-screen h-screen bg-cover bg-center flex flex-col justify-top items-center">
        <img
          src="/images/iteration-1-images/logo.svg"
          alt="logo"
          className="mt-20 mb-15"
        />
        <p className="font-[Barlow] font-light text-7xl text-white text-center">
          KOD ACIKTIRIR<br></br>PİZZA, DOYURUR
        </p>
        <Link
          to="/order"
          className="cta-button bg-[#FDC913] hover:bg-amber-500 text-black text-xl font-[Barlow] font-medium py-3 px-15 my-15 rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          ACIKTIM
        </Link>
      </div>
    </div>
  );
}
