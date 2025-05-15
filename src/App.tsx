import { firestore } from "./firebase";
import { Heart } from "lucide-react";
import { Logo } from "./components/Logo";
import { SearchBar } from "./components/SearchBar";
import { FeaturedListings } from "./components/FeaturedListings";
import { BrowseSection } from "./components/BrowseSection";
import { StatsSection } from "./components/StatsSection";
import { Car, type CarBrand, type CarType, type SearchFilters } from "./types";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

function App() {
  const [brands, setBrands] = useState<CarBrand[]>([]);
  useEffect(() => {
    getDocs(collection(firestore, "brands")).then((docs) => {
      const bs = docs.docs.map((d) => ({ ...d.data(), id: d.id } as CarBrand));
      setBrands(bs);
    });
  }, []);

  const [types, setTypes] = useState<CarType[]>([]);
  useEffect(() => {
    getDocs(collection(firestore, "types")).then((docs) => {
      const ts = docs.docs.map((d) => ({ ...d.data(), id: d.id } as CarType));
      setTypes(ts);
    });
  }, []);

  const [filter, setFilter] = useState<SearchFilters>({});
  const handleSearch = (filter: SearchFilters) => {
    setFilter(filter);
  };

  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    const conditions = [];
    if (filter.brandId) conditions.push(where("brandId", "==", filter.brandId));
    if (filter.typeId) conditions.push(where("typeId", "==", filter.typeId));
    if (filter.fuelType)
      conditions.push(where("fuelType", "==", filter.fuelType));
    if (filter.transmission)
      conditions.push(where("transmission", "==", filter.transmission));
    if (filter.year) conditions.push(where("year", "==", filter.year));
    if (filter.minPrice)
      conditions.push(where("minPrice", ">=", filter.minPrice));
    if (filter.maxPrice)
      conditions.push(where("maxPrice", "<=", filter.maxPrice));
    getDocs(query(collection(firestore, "cars"), ...conditions)).then(
      (docs) => {
        const cs = docs.docs.map((d) => ({ ...d.data(), id: d.id } as Car));
        setCars(cs);
      }
    );
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Titre */}
            <div className="flex items-center gap-2">
              <Logo className="text-blue-600" size={40} />
              <span className="text-2xl font-bold">AutoExpert</span>
            </div>

            {/* NAVIGATION + BOUTONS GROUPÉS */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-6">
                <a href="#home" className="text-gray-600 hover:text-blue-600">
                  HOME
                </a>
                <a
                  href="#recommendations"
                  className="text-gray-600 hover:text-blue-600"
                >
                  RECOMMENDATIONS
                </a>
                <a href="#about" className="text-gray-600 hover:text-blue-600">
                  ABOUT
                </a>
              </nav>

              {/* Boutons */}
              <div className="flex items-center gap-4">
                <button className="relative">
                  <Heart
                    className="text-gray-600 hover:text-blue-600"
                    size={24}
                  />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors flex items-center gap-2">
                  <Logo size={20} className="text-white" />
                  GET RECOMMENDATIONS
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920')] bg-cover bg-center py-20"
      >
        <SearchBar
          onSearch={handleSearch}
          types={types}
          brands={brands}
          totalVehicles={cars.length}
        />
      </section>

      {/* Browse Sections */}
      <section id="browse" className="py-16">
        <BrowseSection makes={brands} bodyTypes={types} />
      </section>

      {/* Featured Cars Section */}
      <section id="recommendations" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <FeaturedListings vehicles={cars} />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Footer */}
      <footer id="about" className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                AutoExpert is your trusted platform for car recommendations and
                reviews.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#car-reviews"
                    className="text-gray-400 hover:text-white"
                  >
                    Car Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#recommendations"
                    className="text-gray-400 hover:text-white"
                  >
                    Recommendations
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Street Name</li>
                <li>City, State 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@autoexpert.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest car reviews and
                recommendations.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoExpert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
