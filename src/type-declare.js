"use strict";
//声明文件可以让我们不需要可以让我们不需要将js重构为ts，只需要加上声明文件就可以使用系统
//类型声明在编译的时候会被删除，不会影响真正的代码
Object.defineProperty(exports, "__esModule", { value: true });
//----------------------上面声明了就可以用了，如果把上面的声明文件去掉，下面的两句话就报错了
$('#root').click();
$('#root').width(100);
; //类  
var seasons = [
    0 /* Spring */,
    1 /* Summer */,
    2 /* Autumn */,
    3 /* Winter */
];
console.log(seasons);
//如何定义一个复杂对象
//jquery
//把他放到专门的xx.d.ts中
// declare namespace jquery {
//     function ajax(url:string, config:any):void
//     // let name : string = 'jquery'   //声明文件里不能赋值
//     let name:string;
//     namespace fn {
//         function extend(object:any):void
//     }
// }
//上面定义了命名空间，下面就可以用了
jquery.ajax('/api/users', {});
jquery.name;
jquery.fn.extend({});
