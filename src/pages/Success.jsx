import { Link } from "react-router-dom";
import logo from "/images/iteration-1-images/logo.svg";

export default function Success() {
  return (
    <div className="bg-[#CE2829] py-10 w-screen h-screen bg-cover bg-center flex flex-col place-items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="py-5" />
      </Link>
      <p className="font-[Barlow] font-light text-7xl text-white text-center flex flex-col flex-1 justify-center gap-8">
        <p>TEBRİKLER!</p>
        <p>SİPARİŞİNİZ ALINDI!</p>
      </p>
    </div>
  );
}
