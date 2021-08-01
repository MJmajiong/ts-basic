"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//函数定义
function hello(name) {
    console.log('hello' + name);
}
// 函数表达式
var getUserName = function (firstName, lastName) {
    return firstName + lastName;
};
//可选参数
function print(name, age, home) {
}
print('zhufeng', 10);
//默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/user');
ajax('/user', 'post');
//剩余参数
function sum() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    return number.reduce(function (accu, item) { return accu + item; }, 0);
}
//函数重载
//no overload(重载) expects 1 arguments
var obj = {};
// console.log(333)  函数的重载和函数的定义必须紧紧地挨在一起，中间什么东西也不能写，除了注释
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
attr('majiong');
attr(10);
function sum2(a, b) {
}
sum2(1, 'd');
sum2(1, 1);
sum2('1', '1');
var delay = function (ms) {
    setTimeout(function () {
    }, 1000);
};
