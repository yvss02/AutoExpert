import React, { useState } from "react";
import { Search } from "lucide-react";
import type { Car, CarBrand, CarType, SearchFilters } from "../types";

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  totalVehicles: number;
  brands: CarBrand[];
  types: CarType[];
}

export function SearchBar({
  onSearch,
  totalVehicles,
  brands,
  types,
}: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({});
  const transmissions: Car["transmission"][] = [
    "Automatic",
    "Manual",
    "Electric",
  ];
  const fuelTypes: Car["fuelType"][] = ["Diesel", "Electric", "CNG", "Petrol"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ ...filters });
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-7xl font-bold text-yellow-400 mb-2">
          {totalVehicles.toLocaleString()}+
        </h1>
        <h2 className="text-3xl text-white">Cars Reviewed</h2>
      </div>

      <div className="bg-[rgba(0,0,0,0.6)] p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
          <select
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, brandId: e.target.value || undefined })
            }
          >
            <option value="">Select Brand...</option>
            {brands.map((b) => (
              <option key={b.id} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>

          <select
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, typeId: e.target.value || undefined })
            }
          >
            <option value="">Select Type...</option>
            {types.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            min={1}
            placeholder="Min Price"
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, minPrice: Number(e.target.value) })
            }
          />

          <input
            type="number"
            min={1}
            placeholder="Max Price"
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
          />

          <select
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({
                ...filters,
                transmission:
                  (e.target.value as Car["transmission"]) || undefined,
              })
            }
          >
            <option value="">Select Transmission...</option>
            {transmissions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({
                ...filters,
                fuelType: (e.target.value as Car["fuelType"]) || undefined,
              })
            }
          >
            <option value="">Select Fuel Type...</option>
            {fuelTypes.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>

          <input
            type="number"
            max={2024}
            min={2022}
            placeholder="Year"
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, year: Number(e.target.value) })
            }
          />

          <button
            type="submit"
            className="col-span-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <Search size={20} />
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
