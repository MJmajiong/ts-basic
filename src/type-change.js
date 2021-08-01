"use strict";
var a;
(function (a) {
    var p = {
        name: 'majiong',
        fly: function () { },
        eat: function () { }
    };
})(a || (a = {}));
//typeof 可以获取一个变量的类型
var b;
(function (b) {
    // type Person = {
    //     name: string;
    //     age: number
    // }
    var p = {
        name: 'majiong',
        age: 10
    };
    var p2 = {
        name: 'zhufeng',
        age: 20
    };
    var myname = 'fe';
    var mylevel = 10;
    function getValueByKey(val, key) {
        return val[key]; //xx
    }
    var person3 = {
        name: 'majiong',
        age: 10,
        gender: 'male'
    };
    var p4 = {
        name: 'majiong'
    };
    var p5 = {
        name: 'majiong',
        age: 10
    };
    var p6 = {
        name: 'majiong',
        age: 10,
        gender: 'male'
    };
    var p7 = {
        name: 'majiong',
        age: 10,
        gender: 'male'
    };
    var x = {
        name: 'name'
    };
    var condition = {
        name2: 'water'
    };
    //鱼或者鸟是一个类型
    var c1 = {
        name2: 'majiong'
    };
    //等于下面的c3
    var c3 = { name2: 'majiong' };
    var c2 = {
        name4: 'majiong'
    };
    var c4 = { name4: 'majiong' };
})(b || (b = {}));
var c;
(function (c) {
    var e = 10;
    var es = 'hello';
    var e3 = 'hello';
    var e4 = 10;
    //redux 回要用的ReturnType
    function getUserInfo() {
        return { name: 'majiong', age: 10 };
    }
    var user = { name: 'majiong', age: 10 };
    //instanceType 获取构造函数的实例类型
    var Person5 = /** @class */ (function () {
        function Person5(name) {
            this.name = name;
        }
        return Person5;
    }());
    var p = new Person5('majiong');
})(c || (c = {}));
