"use strict";
//无法重新声明块范围变量“name”。
//如果代码里面有export import 之类的代码，那么这个文件变成了一个模块
//在一个作用于内部，相同的变量名只能声明一次
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'zhufeng'; //如果单单写这个就报错了，因为gloabal全局对象里面有了name的变量，但是加上export 就可以了，不管export什么，哪怕是export {}都行
var age = 10;
var marryed = true;
var hobbies = ['1', '2', '3'];
var interests = ['4', '5'];
//元组 类似一个数组，他是一个长度和类型都固定的数组
//1 长度固定 2 类型可以不一样
var point = [100, 100];
point[0], point[1];
var person = ['majiong', 33];
//枚举类型
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
console.log(Gender.BOY); //0
console.log(Gender.GIRL); //1
//通过编译后的es5来看，就相当于
var Gender2 = {
    0: "BOY",
    1: "GIRL",
    "BOY": 0,
    "GIRL": 1
};
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 2] = "TUESDAY";
})(Week || (Week = {}));
console.log(0 /* Red */, 1 /* Yellow */, 2 /* Blue */); //0 1 2
//任意类型  anyscript
//第三方库没有类型定义  类型转换的时候  数据结构太复杂太灵活了  any  能不用就不用
//Any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.
//任何HTML元素。一些元素直接实现这个接口，而其他元素通过继承它的接口实现它。
//ts 为dom提供了一整套的类型声明
// let root:HTMLElement | null = document.getElementById('root')
// !强行断言,断言不为空
// root!.style.color = 'red';
//类型断言还有as
var majiong;
majiong.toLocaleLowerCase();
//null undefined
//null 空 undefined 未定义
//他们都是其他类型的子类型  你可以把他们赋给其他类型的变量
var myname1 = null;
var myname2 = undefined;
var x;
x = 1;
x = undefined;
x = null;
//void 类型 空的 没有
function greeting(name) {
    console.log("hello " + name);
    //不能返回，但是可以返回null 和 undifined 因为他们是任意类型的子类型，也是需要设置strictNullChecks为false
    return null;
}
greeting('majiong');
//nerver 永远不
//never是其他类型的子类型，代表不会出现的值
//返回“never”的函数不能具有可访问的终结点。
//在函数内部回永远抛出错误，导致函数无法正常结束，所以如果写了never的返回值，应该throw new Error()
function createError(message) {
    throw new Error();
    console.log(3);
}
function sum() {
    while (true) {
        console.log('hello');
    }
    console.log('end point');
}
