# ComponentCommunication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 输入属性
<!-- 
输入属性使用input 注解的属性@Input()
@Input() 绑定是单向的，只能父组件的值改变的时候影响子组件，不能子组件值改变不影响父组件

两种传递数据的方式：
1：输入属性：输入属性是通过属性传递数据的，并且这种传递只能在有父子关系的组件中从父组件传递到子组件，在父组件的模板中引用子组件，通过输入属性，从父组件给子组件传递数据，
<app-order [stockCode] = "stock" [amount]="100"></app-order>

2： 路由传参：路由参数是通过构造函数传递数据在构造函数中注入一个对象：
  constructor(routeInfo: ActivatedRoute) {
    setInterval(()=>{
      this.stockCode = "apple"
    },3000)
  }
 -->
## 输出属性
<!-- 


 -->
