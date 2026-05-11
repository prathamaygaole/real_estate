import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Properties } from './components/properties/properties';
import { PropertyDetail } from './components/property-detail/property-detail';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'properties', component: Properties },
  { path: 'property/:id', component: PropertyDetail },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
