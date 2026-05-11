import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { PropertyService } from '../../services/property';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-properties',
  imports: [RouterLink, CurrencyPipe, FormsModule],
  templateUrl: './properties.html',
  styleUrl: './properties.css',
})
export class Properties implements OnInit {
  allProperties: Property[] = [];
  properties: Property[] = [];
  activeFilter = 'All';
  filters = ['All', '1RK', '1BHK', '2BHK'];
  showAdvanced = false;

  maxPrice = 10000000;
  minArea = 0;
  sortBy = 'default';
  locations: string[] = [];
  selectedLocation = '';

  constructor(private ps: PropertyService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.allProperties = this.ps.getAll();
    this.locations = [...new Set(this.allProperties.map(p => p.location))];

    this.route.queryParams.subscribe(params => {
      this.activeFilter = params['type'] || 'All';
      this.applyFilters();
    });
  }

  setType(type: string) {
    this.activeFilter = type;
    this.applyFilters();
  }

  applyFilters() {
    let result = this.activeFilter === 'All'
      ? [...this.allProperties]
      : this.allProperties.filter(p => p.type === this.activeFilter);

    result = result.filter(p => p.price <= this.maxPrice);
    result = result.filter(p => p.area >= this.minArea);
    if (this.selectedLocation) {
      result = result.filter(p => p.location === this.selectedLocation);
    }

    if (this.sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (this.sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (this.sortBy === 'area') result.sort((a, b) => b.area - a.area);

    this.properties = result;
  }

  resetFilters() {
    this.activeFilter = 'All';
    this.maxPrice = 10000000;
    this.minArea = 0;
    this.selectedLocation = '';
    this.sortBy = 'default';
    this.applyFilters();
  }
}
