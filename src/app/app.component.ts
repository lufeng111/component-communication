import { Component, EventEmitter } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stock:string = "061230";
  // 中间人模式
  priceQuote: PriceQuote = new PriceQuote("",0);
  // EventEmitter拿到最新的报价event之后，把这个价格给到当前的priceQuote 这个变量上，但是app.component不是要把数据展示出来，而是要把数据传递给下单组件
  buyHandler(event: PriceQuote) {
    this.priceQuote = event;
  }
  title = 'component-communication';
}
