import { Component, EventEmitter } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stock:string = "061230";

  /*
  priceQuote接收最新报价,因为发射出来的事件是PriceQuote 这个类型的，所以接收的事件数据类型也是PriceQuote
priceQuote这个类型PriceQuote的属性接收发射出来的数据，默认情况下股票代码是空字符串，股票代码是0，

  */
  // priceQuote: PriceQuote = new PriceQuote("",0);
  // priceQuoteHandler这个方法的event就是PriceQuote 类型的，是emit 发射出来的类型
  // priceQuoteHandler(event: PriceQuote) {
  //   把本地的priceQuote 等于捕获到的这个事件,这样子组件发射出来的数据就被父组件捕获到了，
  //   this.priceQuote = event;
  // }


  // 中间人模式
  priceQuote: PriceQuote = new PriceQuote("",0);
  // EventEmitter拿到最新的报价event之后，把这个价格给到当前的priceQuote 这个变量上，但是app.component不是要把数据展示出来，而是要把数据传递给下单组件
  buyHandler(event: PriceQuote) {
    this.priceQuote = event;
  }


  title = 'component-communication';
}
