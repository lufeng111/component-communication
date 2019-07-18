import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PriceQuote } from '../price-quote/price-quote.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {
  // 中间人模式
  // 定义一个变量，类型是PriceQuote
  @Input()
  priceQuote:PriceQuote;
  constructor() {
  }
// @Input() 绑定是单向的，只能父组件的值改变的时候影响子组件，不能子组件值改变不影响父组件，
  ngOnInit() {
  }

}
