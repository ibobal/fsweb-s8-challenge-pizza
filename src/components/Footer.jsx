import { Link } from "react-router-dom";
import { pizzaDb } from "../../pizzaDb";

const instagramImages = [
  "/images/iteration-2-images/footer/insta/li-0.png",
  "/images/iteration-2-images/footer/insta/li-1.png",
  "/images/iteration-2-images/footer/insta/li-2.png",
  "/images/iteration-2-images/footer/insta/li-3.png",
  "/images/iteration-2-images/footer/insta/li-4.png",
  "/images/iteration-2-images/footer/insta/li-5.png",
];

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row bg-[#292929] text-white font-[Barlow] justify-around pt-10">
        <div className="flex flex-col lg:flex-row gap-10 px-5 lg:px-0">
          <div className="flex flex-col flex-shrink-0 justify-around gap-7 text-lg">
            <img
              src="/images/iteration-2-images/footer/logo-footer.svg"
              alt="logo-footer"
              className="w-40 h-20 mx-auto lg:mx-0"
            />
            <div className="flex gap-2 items-center">
              <img
                src="/images/iteration-2-images/footer/icons/icon-1.png"
                alt=""
              />
              <span className="text-center lg:text-left">
                341 Londonberry Road, Istanbul Türkiye
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/images/iteration-2-images/footer/icons/icon-2.png"
                alt=""
              />
              <span className="text-center lg:text-left">
                aciktim@teknolojikyemekler.com
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/images/iteration-2-images/footer/icons/icon-3.png"
                alt=""
              />
              <span className="text-center lg:text-left">
                +90 216 123 45 67
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="mb-5 text-xl lg:text-2xl text-center lg:text-left">
              Sıccacık Menüler
            </h5>
            <div className="flex flex-col gap-2">
              {pizzaDb.map((pizza) => (
                <Link
                  to={{
                    pathname: "/order",
                    state: { pizza },
                  }}
                  className="text-center lg:text-left"
                >
                  {pizza.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end px-5 lg:px-0 mt-10 lg:mt-0">
          <h5 className="text-xl lg:text-2xl text-center lg:text-left">
            Instagram
          </h5>
          <div className="max-w-full mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {instagramImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`insta-${index}`}
                    className="w-full h-full object-cover 
                         transform hover:scale-105 
                         transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
