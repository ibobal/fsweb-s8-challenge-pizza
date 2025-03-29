import { Link } from "react-router-dom";
import logo from "/images/iteration-1-images/logo.svg";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Success() {
  const location = useLocation();
  const { finalOrder } = location.state || {};

  return (
    <div className="bg-[#CE2829] py-10 w-screen h-screen bg-cover bg-center flex flex-col place-content-center text-center text-white">
      <div className="flex justify-center mb-5">
        <Link to="/">
          <img src={logo} alt="logo" className="py-5 w-70 sm:w-full" />
        </Link>
      </div>

      <div className="font-[Barlow] flex-1 justify-center items-center flex flex-col gap-5 sm:gap-10 text-center text-white px-5">
        <div className="flex flex-col gap-5 sm:gap-10">
          <div>
            <h3 className="text-4xl sm:text-6xl font-light font-[Satisfy] text-[#FDC913] mb-3">
              lezzetin yolda
            </h3>
            <h3 className="text-5xl sm:text-7xl font-light px-5 sm:px-20">
              SİPARİŞ ALINDI
            </h3>
          </div>
          <hr></hr>
          <h3 className="text-xl sm:text-3xl">{finalOrder.name}</h3>
        </div>

        <div className="w-1/2 sm:w-1/6 flex flex-col gap-3 sm:gap-5 text-sm sm:text-lg text-left font-semibold my-5">
          <p>
            <span className="font-extralight text-gray-300">Boyut: </span>
            {finalOrder.size}
          </p>
          <p>
            <span className="font-extralight text-gray-300">Hamur: </span>
            {finalOrder.dough}
          </p>
          <p>
            <span className="font-extralight text-gray-300">
              Ek Malzemeler:{" "}
            </span>
            {finalOrder.extras.join(", ")}
          </p>
        </div>
        <div className="w-1/2 sm:w-1/6 flex flex-col gap-3 sm:gap-5 text-sm sm:text-lg text-left border border-gray-300 rounded px-5 py-5 sm:px-10 sm:py-10">
          <div className="flex flex-col items-left gap-4 font-bold text-lg">
            <p>Sipariş Toplamı</p>
            <div className="flex justify-between font-semibold text-base">
              <span>Seçimler</span>
              <span>{(finalOrder.extras.length * 5).toFixed(2)}₺</span>
            </div>
            <div className="flex justify-between font-bold text-base">
              <span>Toplam</span>
              <span>{finalOrder.price.toFixed(2)}₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
