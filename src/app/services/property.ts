import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({ providedIn: 'root' })
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1, title: 'Cozy 1RK Studio', type: '1RK', price: 1500000, area: 300,
      location: 'Andheri West, Mumbai', image: 'images/prop-1.svg',
      description: 'A compact and well-designed 1RK studio apartment perfect for singles or young professionals.',
      amenities: ['Furnished', 'Parking', '24/7 Security', 'Power Backup'], available: true
    },
    {
      id: 2, title: 'Modern 1RK Flat', type: '1RK', price: 1800000, area: 350,
      location: 'Koramangala, Bangalore', image: 'images/prop-2.svg',
      description: 'Modern 1RK with smart storage solutions and contemporary interiors.',
      amenities: ['Semi-Furnished', 'Gym', 'Swimming Pool', 'Garden'], available: true
    },
    {
      id: 9, title: 'Budget 1RK Space', type: '1RK', price: 1200000, area: 280,
      location: 'Hadapsar, Pune', image: 'images/prop-9.svg',
      description: 'Affordable 1RK in a prime location with all basic amenities included.',
      amenities: ['Unfurnished', 'Parking', 'Security', 'Lift'], available: true
    },
    {
      id: 3, title: 'Elegant 1BHK Apartment', type: '1BHK', price: 3500000, area: 550,
      location: 'Bandra East, Mumbai', image: 'images/prop-3.svg',
      description: 'Spacious 1BHK with a separate bedroom, living area, and a modern kitchen.',
      amenities: ['Semi-Furnished', 'Parking', 'Gym', 'Children Play Area'], available: true
    },
    {
      id: 4, title: 'Premium 1BHK Suite', type: '1BHK', price: 4200000, area: 620,
      location: 'Whitefield, Bangalore', image: 'images/prop-4.svg',
      description: 'Premium 1BHK with balcony, modular kitchen, and premium fittings throughout.',
      amenities: ['Fully Furnished', 'Balcony', 'Club House', 'Power Backup'], available: true
    },
    {
      id: 5, title: 'Luxury 1BHK Home', type: '1BHK', price: 3800000, area: 580,
      location: 'Hinjewadi, Pune', image: 'images/prop-5.svg',
      description: 'Well-ventilated 1BHK apartment with ample natural light and modern amenities.',
      amenities: ['Parking', 'Garden', 'Security', 'Lift'], available: false
    },
    {
      id: 6, title: 'Spacious 2BHK Flat', type: '2BHK', price: 6500000, area: 950,
      location: 'Powai, Mumbai', image: 'images/prop-6.svg',
      description: 'A beautifully designed 2BHK flat with two bedrooms, hall, and a fully equipped kitchen.',
      amenities: ['Fully Furnished', 'Parking', 'Swimming Pool', 'Gym', 'Club House'], available: true
    },
    {
      id: 7, title: 'Family 2BHK Apartment', type: '2BHK', price: 5800000, area: 880,
      location: 'Electronic City, Bangalore', image: 'images/prop-7.svg',
      description: 'Ideal family home with spacious rooms, modern kitchen, and great community facilities.',
      amenities: ['Semi-Furnished', 'Garden', 'Children Play Area', 'Power Backup', 'Security'], available: true
    },
    {
      id: 8, title: 'Premium 2BHK Villa', type: '2BHK', price: 7500000, area: 1100,
      location: 'Wakad, Pune', image: 'images/prop-8.svg',
      description: 'Premium 2BHK with large balconies, designer interiors, and top-notch amenities.',
      amenities: ['Fully Furnished', 'Balcony', 'Parking', 'Gym', 'Jogging Track'], available: true
    },
  ];

  getAll(): Property[] {
    return this.properties;
  }

  getById(id: number): Property | undefined {
    return this.properties.find(p => p.id === id);
  }

  getByType(type: string): Property[] {
    return type === 'All' ? this.properties : this.properties.filter(p => p.type === type);
  }
}
