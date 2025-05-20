import type { Car } from "../types";
import { Calendar, Cog, Fuel, Heart, RockingChair } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FeaturedListingsProps {
  vehicles: Car[];
  onToggleFavorite: (car: Car) => void;
  favorites: Car[];
}

export function FeaturedListings({
  vehicles,
  favorites,
  onToggleFavorite,
}: FeaturedListingsProps) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="relative">
            <img
              src={vehicle.imageUrl}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={(e) => {
                e.stopPropagation(); // empêcher la navigation
                onToggleFavorite(vehicle);
              }}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
            >
              {" "}
              <Heart
                size={20}
                className={
                  favorites.some((c) => c.name === vehicle.name)
                    ? "text-red-500"
                    : "text-gray-400"
                }
                fill={
                  favorites.some((c) => c.name === vehicle.name)
                    ? "currentColor"
                    : "none"
                }
              />{" "}
            </button>
          </div>
          <div className="p-4" onClick={() => navigate(`/car/${vehicle.name}`)}>
            <h3 className="text-lg font-semibold mb-2">{vehicle.name}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Starting from ${vehicle.minPrice.toLocaleString()}
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{vehicle.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cog size={16} />
                <span>
                  {(vehicle.transmission ||
                    (vehicle as any).transmission_type) ??
                    "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel size={16} />
                <span>{vehicle.fuelType}</span>
              </div>
              <div className="flex items-center gap-2">
                <RockingChair size={16} />
                <span>{vehicle.seats}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
