import type { Vehicle } from "../types";
import { Calendar, Cog, Fuel, RockingChair } from "lucide-react";

interface FeaturedListingsProps {
  vehicles: Vehicle[];
}

export function FeaturedListings({ vehicles }: FeaturedListingsProps) {
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
          </div>
          <div className="p-4">
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
                <span>{vehicle.transmission} </span>
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
