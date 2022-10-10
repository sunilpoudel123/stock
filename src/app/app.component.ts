import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface> | undefined;
  constructor(service: StocksService) {
    // @ts-ignore
    service.load(['AAPL']).subscribe((stocks: StockInterface[]) => {
      this.stocks = stocks;
    });
  }
}
