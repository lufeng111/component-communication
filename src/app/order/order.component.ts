import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

// stockCode和amount等父组件传值过来，父组件是app.components
export class OrderComponent implements OnInit {
  // stockCode 用@Input()来注解，stockCode 是要买的股票代码 ，amount 是要买的股票数量
  @Input()
  stockCode: string;

  @Input()
  amount: number;
  /*
  路由传参：在构造函数中注入一个routeInfo: ActivatedRoute这样类型的对象，然后通过这个参数订阅或参数快照来获取外面传入的参数，

  */
  constructor(routeInfo: ActivatedRoute) {
    setInterval(()=>{
      this.stockCode = "apple"
    },3000)
  }
// @Input() 绑定是单向的，只能父组件的值改变的时候影响子组件，不能子组件值改变不影响父组件，
  ngOnInit() {
  }

}
