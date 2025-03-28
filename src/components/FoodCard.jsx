export default function FoodCard(props) {
  const { pizza } = props;
  return (
    <div
      key={pizza.id}
      className="bg-white shadow-md rounded-lg p-5 w-80 flex-shrink-0"
    >
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-40 object-contain rounded-md mb-4"
      />
      <h4 className="text-2xl font-medium mb-2">{pizza.name}</h4>
      <div className="text-md font-semibold text-[#CE2829] flex justify-between">
        <span>{pizza.rating}</span>
        <span>{pizza.usersRated}</span>
        <span>{pizza.price} ₺</span>
      </div>
    </div>
  );
}
