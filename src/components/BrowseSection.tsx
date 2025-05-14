import type { CarBrand, CarType } from "../types";

interface BrowseSectionProps {
  makes: CarBrand[];
  bodyTypes: CarType[];
}

export function BrowseSection({ makes, bodyTypes }: BrowseSectionProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Browse by <span className="text-green-500">Make</span>
          </h2>
          <a href="#" className="text-gray-500 hover:text-green-500">
            Show all Makes
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {makes.map((make) => (
            <a className="flex flex-col items-center group">
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
          <a href="#" className="text-gray-500 hover:text-green-500">
            Show all Bodies
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {bodyTypes.map((body) => (
            <a className="flex flex-col items-center group">
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
