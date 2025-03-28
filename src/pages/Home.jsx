import CallToAction from "../components/CallToAction";
import NavBar from "../components/NavBar";
import { pizzaDb } from "../../pizzaDb";
import CtaCards from "../components/CtaCards";
import FoodCard from "../components/FoodCard";

export default function Home() {
  return (
    <div className="bg-[#FAF7F2]">
      <header>
        <CallToAction />
        <div className="bg-white shadow-md">
          <NavBar />
        </div>
      </header>
      <main>
        <CtaCards />
        <h3 className="text-4xl font-semibold text-center mt-30 font-[Satisfy] text-[#CE2829]">
          en çok paketlenen menüler
        </h3>
        <h3 className="text-4xl font-semibold text-center mt-5 mb-5 font-[Barlow]">
          Acıktıran Kodlara Doyuran Lezzetler
        </h3>
        <NavBar />
        <div className="flex overflow-x-auto justify-start lg:justify-center mt-10 mb-30 gap-5">
          {pizzaDb.map((pizza) => (
            <FoodCard pizza={pizza} />
          ))}
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}
