import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.scss']
})
export class PriceQuoteComponent implements OnInit {

  // stockCode 股票代码
  stockCode: string = "IBM";
  // price 股票价格
  price: number;
  // EventEmitter 需要一个泛型PriceQuote， 泛型是往外发射事件的数据是什么类型的，现在发射数据的类型PriceQuote中的最新的报价，多以泛型写PriceQuote，emit发射的就需要是这个泛型所指定类型数据
  @Output('priceChange')
  lastPrice:EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(()=> {
      /*
      这个函数每隔一秒调用一次，价格就重新生成一次，priceQuote 的数据类型是PriceQuote，把price属性等于最新生成的报价,100乘与 一个随机数 Math.random()
      */
      let priceQuote: PriceQuote = new PriceQuote(this.stockCode, 100*Math.random());
      this.price = priceQuote.lastPrice;
      // 使用@Output注解后，就可以emit(priceQuote), priceQuote就是最新的报价
      this.lastPrice.emit(priceQuote);
    },1000);
  }

  ngOnInit() {
  }

}
/*
1：定义一个报价对象PriceQuote，来封装股票价格信息：注意将特定的数据结构用类或接口来明确的定义
2: 通过一个定时器模拟股票价格在不停的变化
3：通过输出属性EventEmitter（一定要声明在@angular/core中,并且要@Output()来注解一下） 告诉组件外部，谁有兴趣，谁就可以来订阅
4：如何在父组件app.component中接收这个报价信息
5：
*/

/*
1: 声明一个类PriceQuote
2： 在他的构造函数constructor里声明它的属性，有两个属性
*/
export class PriceQuote {
  constructor(
    public stockCode: string, // stockCode 股票代码
    public lastPrice: number, // lastPrice 最新的价格
  ){}

}
