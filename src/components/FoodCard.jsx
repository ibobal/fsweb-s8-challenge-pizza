export default function FoodCard(props) {
  const { pizza } = props;
  return (
    <div
      key={pizza.id}
      className="bg-white shadow-md rounded-lg p-5 w-80 flex-shrink-0 font-[Barlow]"
    >
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-40 object-contain rounded-md mb-4"
      />
      <h4 className="text-2xl font-semibold mb-2">{pizza.name}</h4>
      <div className="flex justify-between">
        <span className="text-[#5F5F5F] text-md">{pizza.rating}</span>
        <span className="text-[#5F5F5F] text-md">({pizza.usersRated})</span>
        <span className="text-[#292929] font-bold text-lg">{pizza.price} ₺</span>
      </div>
    </div>
  );
}
