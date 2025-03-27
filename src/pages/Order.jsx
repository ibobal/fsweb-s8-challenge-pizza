import logo from "/images/iteration-1-images/logo.svg";
import { pizzaDb } from "../../pizzaDb";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OrderForm from "../components/OrderForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const selectedPizza = pizzaDb[0];

export default function PizzaOrderPage() {
  return (
    <div className="w-full bg-gray-50 font-[Barlow]">
      <ToastContainer />

      <header className="bg-[#CE2829] text-white py-5 flex flex-col place-items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="py-5" />
        </Link>

        <nav className="text-sm text-white mb-1">
          <span>Anasayfa &gt; Seçili Yemekler &gt; </span>
          <span className="font-semibold">{selectedPizza.name}</span>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto py-6">
        <div className="bg-white py-10 px-15 rounded shadow">
          <h2 className="text-2xl font-semibold mb-10">{selectedPizza.name}</h2>
          <div className="flex justify-between items-center mb-7">
            <p className="text-3xl text-[#292929] font-bold">
              {selectedPizza.price.toFixed(2)}₺
            </p>
            <div className="flex gap-20">
              <span className="text-[#5F5F5F]">{selectedPizza.rating}</span>
              <span className="text-[#5F5F5F]">
                ({selectedPizza.usersRated})
              </span>
            </div>
          </div>
          <p className="leading-7 text-[#5F5F5F] mb-10">
            {selectedPizza.description}
          </p>

          <OrderForm selectedPizza={selectedPizza} />
        </div>
      </main>
    </div>
  );
}
