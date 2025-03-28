import { Link } from "react-router-dom";
import logo from "/images/iteration-1-images/logo.svg";

export default function CallToAction() {
  return (
    <div className="bg-[url(/images/iteration-1-images/home-banner.png)] font-[Barlow] h-screen bg-cover bg-center flex flex-col justify-top items-center">
      <img src={logo} alt="logo" className="mt-20 mb-15" />
      <p className="font-[Satisfy] text-[#FDC913] text-4xl">fırsatı kaçırma</p>
      <p className="font-light text-7xl text-white text-center">
        KOD ACIKTIRIR<br></br>PİZZA, DOYURUR
      </p>
      <Link
        to="#food-slider"
        className="bg-[#FDC913] hover:text-[#CE2829] hover:font-bold hover:bg-[#292929] text-black text-xl font-medium py-3 px-15 my-15 rounded-3xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        data-cy="cta-button"
      >
        ACIKTIM
      </Link>
    </div>
  );
}
