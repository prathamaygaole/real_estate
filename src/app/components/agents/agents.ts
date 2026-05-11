import { Component } from '@angular/core';

@Component({
  selector: 'app-agents',
  imports: [],
  templateUrl: './agents.html',
  styleUrl: './agents.css',
})
export class Agents {
  agents = [
    { name: 'Rahul Sharma', role: 'Senior Property Consultant', experience: '8+ Years', deals: 250, phone: '+91 98XXX XXXXX', email: 'rahul@example.com', speciality: '2BHK & Premium' },
    { name: 'Priya Patel', role: 'Residential Expert', experience: '5+ Years', deals: 180, phone: '+91 97XXX XXXXX', email: 'priya@example.com', speciality: '1BHK Apartments' },
    { name: 'Amit Deshmukh', role: 'Investment Advisor', experience: '10+ Years', deals: 400, phone: '+91 99XXX XXXXX', email: 'amit@example.com', speciality: '1RK & Budget Homes' },
  ];
}
