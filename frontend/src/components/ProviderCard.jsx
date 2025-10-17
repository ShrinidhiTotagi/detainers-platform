import { useNavigate } from "react-router-dom";

const ProviderCard = ({ provider }) => {
  const navigate = useNavigate();

  return (
    <div className="min-w-[250px] bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition duration-300">
      <img
        src={provider.image}
        alt={provider.name}
        className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-blue-500"
      />
      <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
      <p className="text-sm text-gray-500">{provider.location}</p>
      <div className="mt-2 text-yellow-500 font-medium">⭐ {provider.rating}</div>
      <p className="text-gray-700 mt-1">{provider.price}</p>
      <button
        onClick={() => navigate(`/provider/${provider.id}`)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Explore Profile
      </button>
    </div>
  );
};

export default ProviderCard;
