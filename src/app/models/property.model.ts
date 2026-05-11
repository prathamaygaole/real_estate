export interface Property {
  id: number;
  title: string;
  type: '1RK' | '1BHK' | '2BHK';
  price: number;
  area: number;
  location: string;
  image: string;
  description: string;
  amenities: string[];
  available: boolean;
}
