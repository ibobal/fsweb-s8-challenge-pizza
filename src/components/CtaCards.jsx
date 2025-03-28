import OrderButton from "./OrderButton";
import { pizzaDb } from "../../pizzaDb";

export default function CtaCards() {
  return (
    <div className="flex flex-wrap justify-center gap-5 p-5 mt-30 md:flex-nowrap">
      <div className="w-full p-15 text-white bg-cover bg-center shadow-lg rounded-lg md:w-1/2 lg:w-1/3 bg-[url(/images/iteration-2-images/cta/kart-1.png)]">
        <h2 className="mb-5 text-6xl font-bold font-[Quattrocento]">
          Özel<br></br>Lezzetus
        </h2>
        <p className="mb-10 text-2xl">{pizzaDb[3].name}</p>
        <OrderButton />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3">
        <div className="p-15 text-white bg-cover bg-center shadow-lg rounded-lg bg-[url(/images/iteration-2-images/cta/kart-2.png)]">
          <h3 className="mb-10 text-4xl font-semibold">
            Hackathlon<br></br>Burger Menü
          </h3>
          <OrderButton />
        </div>
        <div className="p-15 bg-cover bg-center shadow-lg rounded-lg bg-[url(/images/iteration-2-images/cta/kart-3.png)]">
          <h3 className="mb-10 text-4xl font-semibold">
            Çoooook hızlı npm<br></br>gibi kurye
          </h3>
          <OrderButton />
        </div>
      </div>
    </div>
  );
}
