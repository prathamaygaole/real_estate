import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = { name: '', email: '', phone: '', propertyType: '', message: '' };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Enquiry submitted:', this.form);
  }
}
