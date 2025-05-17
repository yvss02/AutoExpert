import { useState } from "react";
import type { CarBrand, CarType } from "../types";

interface BrowseSectionProps {
  makes: CarBrand[];
  bodyTypes: CarType[];
  onBrandSearch: (brand: string) => void;
  onTypeSearch: (type: string) => void;
}

export function BrowseSection({
  makes,
  bodyTypes,
  onBrandSearch,
  onTypeSearch,
}: BrowseSectionProps) {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const displayedBrands = showAllBrands ? makes : makes.slice(0, 8);
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Browse by <span className="text-green-500">Brands</span>
          </h2>
          <button
            onClick={() => setShowAllBrands((prev) => !prev)}
            className="text-gray-500 hover:text-green-500"
          >
            {showAllBrands ? "Show less" : "Show all Brands"}
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {displayedBrands.map((make) => (
            <a
              onClick={() => onBrandSearch(make.name)}
              key={make.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              <img
                src={make.logo}
                alt={make.name}
                className="w-16 h-16 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all"
              />
              <span className="text-gray-600 group-hover:text-green-500">
                {make.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Browse by <span className="text-green-500">Body</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {bodyTypes.map((body) => (
            <a
              onClick={() => onTypeSearch(body.name)}
              key={body.id}
              className="flex flex-col items-center group"
            >
              <img
                src={body.icon}
                alt={body.name}
                className="w-16 h-16 object-contain mb-2 group-hover:text-green-500"
              />
              <span className="text-gray-600 group-hover:text-green-500">
                {body.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
