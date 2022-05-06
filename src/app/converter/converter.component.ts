import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../sevices/currency.service';
import { Rates } from '../shared/rates';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  amount1: number = 1;
  amount2: number = 1;
  currency1: string = 'USD';
  currency2: string = 'EUR';
  rates: object = {};

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getRates().subscribe((items: Rates) => {
      this.rates = items.rates;
    })

    this.handleFirstAmount(1);

  }

  format(number: number) {
    return number.toFixed(4)
  }

  handleFirstAmount(amount1: number) {
    // @ts-ignore
    this.amount2 = this.format(amount1 * this.rates[this.currency2] / this.rates[this.currency1])
  }

  onFirstCurrencyChange() {
    // @ts-ignore
    this.amount2 = this.format(this.amount1 * this.rates[this.currency2] / this.rates[this.currency1])
  }

  handleSecondAmount(amount2: number) {
    // @ts-ignore
    this.amount1 = this.format(amount2 * this.rates[this.currency1] / this.rates[this.currency2])
  }

  onSecondCurrencyChange() {
    // @ts-ignore
    this.amount1 = this.format(this.amount2 * this.rates[this.currency1] / this.rates[this.currency2])
  }
}
