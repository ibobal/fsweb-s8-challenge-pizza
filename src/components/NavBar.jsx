import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/ramen",
    text: "Ramen",
    icon: "../images/iteration-2-images/icons/1.svg",
  },
  {
    to: "/",
    text: "Pizza",
    icon: "../images/iteration-2-images/icons/2.svg",
  },
  {
    to: "/burger",
    text: "Burger",
    icon: "../images/iteration-2-images/icons/3.svg",
  },
  {
    to: "/frenchfries",
    text: "French Fries",
    icon: "../images/iteration-2-images/icons/4.svg",
  },
  {
    to: "/fastfood",
    text: "Fast Food",
    icon: "../images/iteration-2-images/icons/5.svg",
  },
  {
    to: "/softdrinks",
    text: "Soft Drinks",
    icon: "../images/iteration-2-images/icons/6.svg",
  },
];

export default function NavBar() {
  return (
    <>
      <nav className="font-[Barlow] text-[#292929] py-5">
        <ul className="flex text-lg justify-center flex-wrap md:flex-nowrap md:gap-10 md:text-xl">
          {navItems.map((item) => (
            <li key={item.to} className="flex w-50 md:w-55 group bg-white rounded-full">
              <NavLink
                to={item.to}
                activeClassName="font-semibold bg-[#292929] text-[#CE2829]"
                className="hover:text-[#CE2829] hover:bg-gray-50 hover:shadow-lg flex flex-1 gap-3 rounded-full justify-center items-center px-4 py-2 transition duration-300 ease-in-out"
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-115 transition duration-300"
                />
                <span>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
