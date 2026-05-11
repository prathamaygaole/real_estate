import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { PropertyService } from '../../services/property';
import { Property } from '../../models/property.model';
import { Agents } from '../agents/agents';
import { Testimonials } from '../testimonials/testimonials';
import { EmiCalculator } from '../emi-calculator/emi-calculator';
import { Neighborhood } from '../neighborhood/neighborhood';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe, Agents, Testimonials, EmiCalculator, Neighborhood],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  featured: Property[];
  stats = [
    { value: '500+', label: 'Properties Sold' },
    { value: '1200+', label: 'Happy Families' },
    { value: '15+', label: 'Cities Covered' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  constructor(private ps: PropertyService) {
    this.featured = this.ps.getAll().filter(p => p.available).slice(0, 3);
  }
}
