import { Link } from "react-router-dom";

export default function OrderButton() {
  return (
    <Link
      to="/order"
      className="hover:bg-gray-50 bg-white text-[#CE2829] text-lg font-medium py-3 px-10 my-15 rounded-3xl shadow-lg transition duration-300 ease-in-out transform"
    >
      SİPARİŞ VER
    </Link>
  );
}
