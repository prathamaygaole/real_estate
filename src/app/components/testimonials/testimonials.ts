import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  reviews = [
    { name: 'Sneha Kulkarni', location: 'Mumbai', rating: 5, type: '2BHK', text: 'Found our dream 2BHK in Powai within a week! The team was incredibly helpful and transparent throughout the process.' },
    { name: 'Vikram Reddy', location: 'Bangalore', rating: 5, type: '1BHK', text: 'As a first-time buyer, I was nervous. DreamHome made it so easy. Got a beautiful 1BHK in Whitefield at a great price.' },
    { name: 'Anita Joshi', location: 'Pune', rating: 4, type: '1RK', text: 'Perfect 1RK for my son who just started working. Affordable, well-located, and the documentation was hassle-free.' },
    { name: 'Rajesh Menon', location: 'Mumbai', rating: 5, type: '2BHK', text: 'Third property I have bought through DreamHome. Their market knowledge is unmatched. Highly recommended!' },
  ];

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}
