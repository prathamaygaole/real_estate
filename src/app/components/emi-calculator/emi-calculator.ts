import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-emi-calculator',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './emi-calculator.html',
  styleUrl: './emi-calculator.css',
})
export class EmiCalculator {
  loanAmount = 3000000;
  interestRate = 8.5;
  tenure = 20;

  get monthlyRate(): number {
    return this.interestRate / 12 / 100;
  }

  get totalMonths(): number {
    return this.tenure * 12;
  }

  get emi(): number {
    const r = this.monthlyRate;
    const n = this.totalMonths;
    if (r === 0) return this.loanAmount / n;
    return (this.loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  get totalPayment(): number {
    return this.emi * this.totalMonths;
  }

  get totalInterest(): number {
    return this.totalPayment - this.loanAmount;
  }

  get interestPercent(): number {
    return (this.totalInterest / this.totalPayment) * 100;
  }
}
