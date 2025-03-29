import logo from "/images/iteration-1-images/logo.svg";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import OrderForm from "../components/OrderForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer";

export default function PizzaOrderPage() {
  const location = useLocation();
  const selectedPizza = location.state?.pizza;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-[Barlow]">
      <ToastContainer />

      <header>
        <div className="bg-[#CE2829] flex justify-center">
          <Link to="/">
            <img src={logo} alt="logo" className="py-5 w-32 sm:w-auto" />
          </Link>
        </div>
      </header>

      <main>
        <div className="bg-[#FAF7F2] mb-5">
          <div className="max-w-2xl mx-auto px-4 sm:px-0">
            <img
              src="/images/iteration-2-images/pictures/form-banner.png"
              alt="Form Banner"
              className="w-full sm:w-4/5 mx-auto mb-8"
            />

            <nav className="text-sm sm:text-md mb-6 sm:mb-10">
              <span>Anasayfa &gt; Seçenekler &gt; </span>
              <span className="font-semibold text-[#CE2829] ml-1">
                {selectedPizza.name}
              </span>
            </nav>
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-10">
              {selectedPizza.name}
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 sm:mb-7 gap-4 sm:gap-0">
              <p className="text-2xl sm:text-3xl text-[#292929] font-bold">
                {selectedPizza.price.toFixed(2)}₺
              </p>
              <div className="flex gap-10 sm:gap-20 text-sm sm:text-base">
                <span className="text-[#5F5F5F]">{selectedPizza.rating}</span>
                <span className="text-[#5F5F5F]">
                  ({selectedPizza.usersRated})
                </span>
              </div>
            </div>
            <p className="leading-6 sm:leading-7 text-[#5F5F5F] pb-5 text-sm sm:text-base">
              {selectedPizza.description}
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          <OrderForm selectedPizza={selectedPizza} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
