import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../sevices/currency.service';
import { Converts } from '../shared/rates';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dollarAmount!: string;
  euroAmount!: string;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getConvertUSD().subscribe((item: Converts) => {
      this.dollarAmount = this.format(item.result);
    });

    this.currencyService.getConvertEUR().subscribe((item: Converts) => {
      this.euroAmount = this.format(item.result);
    })
  }

  format(number: number) {
    return number.toFixed(4)
  }

}
