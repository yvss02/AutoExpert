export interface Vehicle {
  id: string;
  brandId: string;
  name: string;
  typeId: string;
  maxPrice: number;
  minPrice:number;
  year: number;
  transmission: string;
  fuelType: string;
  seats:number;
  fuel_tank_capacity:number;
  no_cylinder:number;
  engine_displacement:number;
  country: string;
  reviews_count:number;
  rating:number;
  max_torque_nm:number;
  max_torque_rpm:number;
  max_power_bhp:number;
  max_power_rp:number;
  imageUrl: string;
}

export interface SearchFilters {
  brandId?: string;
  typeId?: string;
  year?: number;
  minPrice?:number;
  maxPrice?: number;
  transmission?: string;
  fuelType?: string;
}

export interface CarBrand {
  id: string;
  name: string;
  logo: string;
  
}

export interface CarType {
  id: string;
  name: string;
  icon: string;

}