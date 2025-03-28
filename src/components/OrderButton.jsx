import { Link } from "react-router-dom";

export default function OrderButton() {
  return (
    <Link
      to="#food-slider"
      className="bg-white text-[#CE2829] text-lg font-medium py-3 px-10 my-15 rounded-3xl shadow-lg hover:bg-gray-100 transition duration-200 ease-in-out"
    >
      SİPARİŞ VER
    </Link>
  );
}
