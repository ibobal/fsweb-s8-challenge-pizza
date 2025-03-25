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
    dough: "İnce Hamur",
    note: "",
    quantity: 1,
    price: selectedPizza.price + selectedPizza.extras.length * extraCost,
    buyerName: "",
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
      console.log(event);
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
      note: order.note,
      quantity: order.quantity,
      price: order.price,
      buyerName: order.buyerName,
    };

    axios
      .post("https://reqres.in/api/pizza", finalOrder)
      .then((response) => {
        console.log("Sipariş Özeti:", response.data);
        toast.success("Siparişiniz alındı! Teşekkür ederiz.", {
          onClose: () => {
            history.push("/success");
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
        <div className="mb-10 flex justify-start gap-25">
          <div>
            <h3 className="text-xl font-medium mb-5">Boyut Seç</h3>
            <div className="flex flex-col gap-3">
              {sizes.map((size) => (
                <label key={size} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={order.size === size}
                    onChange={handleChange}
                    required
                  />
                  <span
                    className={`${
                      order.size === size ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {size}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-5">Hamur Seç</h3>
            <select
              name="dough"
              className="border border-gray-300 rounded px-3 py-2 font-semibold"
              value={order.dough}
              onChange={handleChange}
              required
            >
              <option value="İnce Hamur">İnce Hamur</option>
              <option value="Kalın Hamur">Kalın Hamur</option>
            </select>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium mb-5">Ek Malzemeler</h3>
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <label
                htmlFor={ingredient}
                key={ingredient}
                className="flex items-center space-x-2"
              >
                <input
                  id={ingredient}
                  type="checkbox"
                  name="extras"
                  value={ingredient}
                  checked={order.extras.includes(ingredient)}
                  onChange={handleChange}
                />
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
            className="w-full border border-gray-300 rounded px-3 py-2"
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
            className="w-full border border-gray-300 rounded px-3 py-2 mt-5"
            rows="3"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            value={order.note}
            onChange={handleChange}
          />
        </div>

        <hr className="my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-10">
          <div className="flex items-center border border-gray-300 rounded">
            <button
              type="button"
              name="quantity"
              className="px-3 py-2 text-lg font-bold bg-[#FDC913] hover:bg-[#CE2829] hover:text-white transition duration-300 ease-in-out"
              data-action="decrement"
              onClick={handleChange}
            >
              -
            </button>
            <span className="px-5">{order.quantity}</span>
            <button
              type="button"
              name="quantity"
              className="px-3 py-2 text-lg font-bold bg-[#FDC913] hover:bg-[#CE2829] hover:text-white transition duration-300 ease-in-out"
              data-action="increment"
              onClick={handleChange}
            >
              +
            </button>
          </div>
          <div>
            <div className="border border-gray-300 rounded px-10 py-10">
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
              } text-lg font-bold px-30 py-3 rounded shadow w-full transition duration-300 ease-in-out`}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
