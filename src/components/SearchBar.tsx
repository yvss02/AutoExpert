import React, { useState } from "react";
import { Search } from "lucide-react";
import type { SearchFilters } from "../types";

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  totalVehicles: number;
}

export function SearchBar({ onSearch, totalVehicles }: SearchBarProps) {
  const [activeCondition, setActiveCondition] = useState("all");
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ ...filters });
  };

  const conditions = [
    { id: "all", label: "All Types" },
    { id: "luxury", label: "Luxury" },
    { id: "sports", label: "Sports" },
    { id: "family", label: "Family" },
    { id: "eco", label: "Eco-Friendly" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-7xl font-bold text-yellow-400 mb-2">
          {totalVehicles.toLocaleString()}+
        </h1>
        <h2 className="text-3xl text-white">Cars Reviewed</h2>
      </div>

      <div className="bg-[rgba(0,0,0,0.6)] p-6 rounded-lg">
        <div className="flex gap-1 mb-6">
          {conditions.map((condition) => (
            <button
              key={condition.id}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeCondition === condition.id
                  ? "bg-green-500 text-white"
                  : "text-white hover:bg-[rgba(255,255,255,0.1)]"
              }`}
              onClick={() => setActiveCondition(condition.id)}
            >
              {condition.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
          <select
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, brandId: e.target.value })
            }
          >
            <option value="">Select Make</option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <select
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) => setFilters({ ...filters, typeId: e.target.value })}
          >
            <option value="">Select Model</option>
          </select>

          <select
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
          >
            <option value="">Price Range</option>
            <option value="30000">Under $30,000</option>
            <option value="50000">Under $50,000</option>
            <option value="100000">Under $100,000</option>
          </select>

          <input
            type="text"
            placeholder="Enter features (e.g., AWD, Hybrid)"
            className="w-full px-4 py-3 rounded-md bg-white"
            onChange={(e) =>
              setFilters({ ...filters, transmission: e.target.value })
            }
          />

          <button
            type="submit"
            className="col-span-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <Search size={20} />
            FIND RECOMMENDATIONS
          </button>
        </form>
      </div>
    </div>
  );
}
