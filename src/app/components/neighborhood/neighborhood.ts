import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-neighborhood',
  imports: [RouterLink],
  templateUrl: './neighborhood.html',
  styleUrl: './neighborhood.css',
})
export class Neighborhood {
  areas = [
    { name: 'Andheri, Mumbai', tag: 'Popular', avgPrice: '₹45L - ₹1.2Cr', connectivity: 'Metro, Railway, Airport nearby', highlights: ['IT Hubs', 'Malls & Restaurants', 'Schools & Hospitals'], growth: '+12% YoY' },
    { name: 'Whitefield, Bangalore', tag: 'IT Hub', avgPrice: '₹38L - ₹95L', connectivity: 'Metro (upcoming), ORR access', highlights: ['Tech Parks', 'International Schools', 'Gated Communities'], growth: '+15% YoY' },
    { name: 'Hinjewadi, Pune', tag: 'Emerging', avgPrice: '₹30L - ₹80L', connectivity: 'Expressway, BRT', highlights: ['IT Parks', 'Affordable Housing', 'New Infrastructure'], growth: '+18% YoY' },
    { name: 'Powai, Mumbai', tag: 'Premium', avgPrice: '₹65L - ₹2Cr', connectivity: 'JVLR, Eastern Express', highlights: ['Lake View', 'IIT Campus', 'Premium Lifestyle'], growth: '+10% YoY' },
  ];
}
