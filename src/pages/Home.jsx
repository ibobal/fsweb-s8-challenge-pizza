import CallToAction from "../components/CallToAction";
import NavBar from "../components/NavBar";
import { pizzaDb } from "../../pizzaDb";
import CtaCards from "../components/CtaCards";

export default function Home() {
  return (
    <div className="bg-[#FAF7F2]">
      <header>
        <CallToAction />
        <NavBar />
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
      </main>
      <footer></footer>
    </div>
  );
}
