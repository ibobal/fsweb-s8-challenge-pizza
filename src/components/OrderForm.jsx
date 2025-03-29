import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ingredients = [
  "Pepperoni",
  "Mozarella",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Zeytin",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Mantar",
  "Soğan",
  "Sarımsak",
];
const sizes = ["Küçük", "Orta", "Büyük"];
const extraCost = 5;

export default function OrderForm(props) {
  const { selectedPizza } = props;
  const [order, setOrder] = useState({
    ...selectedPizza,
    size: "Orta",
    dough: "",
    buyerName: "",
    note: "",
    quantity: 1,
    price: selectedPizza.price + selectedPizza.extras.length * extraCost,
  });

  const isFormValid =
    order.buyerName.trim().length >= 3 &&
    order.extras.length >= 4 &&
    order.extras.length <= 10;

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value, checked, dataset } = event.target;
    const newOrder = { ...order };

    if (name === "extras") {
      newOrder.extras = checked
        ? [...order.extras, value]
        : order.extras.filter((item) => item !== value);
    } else if (name === "quantity") {
      if (dataset.action === "increment") {
        newOrder.quantity = order.quantity + 1;
      } else if (dataset.action === "decrement") {
        newOrder.quantity = order.quantity > 1 ? order.quantity - 1 : 1;
      }
    } else {
      newOrder[name] = value;
    }

    newOrder.price =
      selectedPizza.price * newOrder.quantity +
      newOrder.extras.length * extraCost * newOrder.quantity;
    setOrder(newOrder);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Lütfen gerekli alanları doldurun ve hataları giderin!");
      return;
    }

    const finalOrder = {
      name: order.name,
      size: order.size,
      dough: order.dough,
      extras: order.extras,
      buyerName: order.buyerName,
      note: order.note,
      quantity: order.quantity,
      price: order.price,
    };

    axios
      .post("https://reqres.in/api/pizza", finalOrder)
      .then((response) => {
        console.log("Sipariş Özeti:", response.data);
        toast.success("Siparişiniz alındı! Teşekkür ederiz.", {
          onClose: () => {
            history.push({
              pathname: "/success",
              state: { finalOrder },
            });
          },
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          "Sipariş gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
        );
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-10 flex flex-wrap items-start gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-5">Boyut Seç</h3>
            <div className="flex items-center space-x-4">
              {sizes.map((size) => {
                const labelText =
                  size === "Küçük" ? "S" : size === "Orta" ? "M" : "L";

                return (
                  <div key={size}>
                    <input
                      type="radio"
                      name="size"
                      id={`size-${size}`}
                      value={size}
                      checked={order.size === size}
                      onChange={handleChange}
                      required
                      className="hidden peer"
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className={`
                    flex items-center justify-center
                    w-12 h-12
                    border border-transparent
                    rounded-full
                    cursor-pointer
                    transition
                    duration-300
                    bg-[#FAF7F2]
                    ${
                      order.size !== size
                        ? "hover:bg-[#f2e8c2] hover:shadow-sm"
                        : ""
                    }
                    peer-checked:bg-[#FDC913]
                    peer-checked:text-black
                    peer-checked:font-semibold
                    peer-checked:border-gray-300
                    peer-checked:shadow-lg                  
                    `}
                    >
                      {labelText}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5">Hamur Seç</h3>
            <select
              name="dough"
              className={`rounded px-3 py-2 ${
                order.dough !== "" ? "font-semibold" : "font-light"
              } bg-[#FAF7F2]`}
              value={order.dough}
              onChange={handleChange}
              required
            >
              <option value="" disabled className="font-extralight">
                --Hamur Kalınlığı Seç--
              </option>
              <option value="İnce Hamur" className="font-medium">
                İnce Hamur
              </option>
              <option value="Kalın Hamur" className="font-medium">
                Kalın Hamur
              </option>
            </select>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-5">Ek Malzemeler</h3>
          <p className="text-sm text-gray-600 mb-4">
            En Fazla 10 malzeme seçebilirsiniz. {extraCost}₺
          </p>

          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <label
                key={ingredient}
                htmlFor={ingredient}
                className="flex items-center cursor-pointer"
              >
                <input
                  id={ingredient}
                  type="checkbox"
                  name="extras"
                  value={ingredient}
                  checked={order.extras.includes(ingredient)}
                  onChange={handleChange}
                  className="hidden peer"
                />

                <div
                  className={`
                    w-8 h-8
                    rounded
                    flex items-center justify-center
                    mr-3
                    transition-colors
                    bg-[#FAF7F2]
                    ${
                      !order.extras.includes(ingredient)
                        ? "hover:bg-[#f2e8c2] hover:shadow-sm"
                        : ""
                    }
                    peer-checked:bg-[#FDC913]
                    peer-checked:shadow-sm
                  `}
                >
                  <svg
                    className={`${
                      order.extras.includes(ingredient) ? "block" : "hidden"
                    } w-5 h-5 text-black`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <span
                  className={`${
                    order.extras.includes(ingredient)
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                >
                  {ingredient}
                </span>
              </label>
            ))}
          </div>

          {(order.extras.length < 4 || order.extras.length > 10) && (
            <p className="text-red-500 text-sm mt-1">
              Lütfen en az 4 ve en fazla 10 malzeme seçin.
            </p>
          )}
        </div>

        <div className="mb-10">
          <label htmlFor="buyerName" className="block text-xl font-medium mb-5">
            İsim <span className="text-red-500">*</span>
          </label>
          <input
            id="buyerName"
            name="buyerName"
            type="text"
            className="w-full rounded px-3 py-2 bg-[#FAF7F2] shadow-sm"
            placeholder="İsminizi giriniz"
            value={order.buyerName}
            onChange={handleChange}
            required
          />

          {order.buyerName.trim().length > 0 &&
            order.buyerName.trim().length < 3 && (
              <p className="text-red-500 text-sm mt-1">
                İsim en az 3 karakter olmalı.
              </p>
            )}
        </div>

        <div className="mb-10">
          <label htmlFor="note" className="text-xl font-medium">
            Sipariş Notu
          </label>
          <textarea
            id="note"
            name="note"
            className="w-full rounded px-3 py-2 mt-5 bg-[#FAF7F2] shadow-sm"
            rows="3"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            value={order.note}
            onChange={handleChange}
          />
        </div>

        <hr className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-10">
          <div className="flex items-center rounded bg-[#FAF7F2] shadow-sm">
            <button
              type="button"
              name="quantity"
              className="px-3 py-2 text-lg font-bold hover:bg-[#FDC913] hover:text-white transition duration-300 ease-in-out"
              data-action="decrement"
              onClick={handleChange}
            >
              -
            </button>
            <span className="px-5">{order.quantity}</span>
            <button
              type="button"
              name="quantity"
              className="px-3 py-2 text-lg font-bold hover:bg-[#FDC913] hover:text-white transition duration-300 ease-in-out"
              data-action="increment"
              onClick={handleChange}
            >
              +
            </button>
          </div>
          <div>
            <div className="rounded px-10 py-10 bg-[#FAF7F2] shadow-sm">
              <div className="flex flex-col items-left gap-4 font-bold text-lg">
                <p>Sipariş Toplamı</p>
                <div className="flex justify-between font-semibold text-[#5F5F5F] text-base">
                  <span>Seçimler</span>
                  <span>{(order.extras.length * extraCost).toFixed(2)}₺</span>
                </div>
                <div className="flex justify-between font-bold text-[#CE2829] text-base">
                  <span>Toplam</span>
                  <span>{order.price.toFixed(2)}₺</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`${
                isFormValid
                  ? "bg-[#FDC913] hover:bg-[#CE2829] hover:text-white"
                  : "bg-amber-200 cursor-not-allowed"
              } text-lg font-bold px-30 py-3 rounded shadow w-full transition duration-300 ease-in-out shadow-sm`}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
