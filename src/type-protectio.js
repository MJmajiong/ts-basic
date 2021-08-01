"use strict";
//类型保护
//类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型
//类型保护就是能够通过关键字判断出分支中的类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
(function (a_1) {
    // typeof类型保护 就是更精确的知道是哪种类型
    function double(input) {
        if (typeof input === 'string') {
            input.toLocaleLowerCase();
        }
        else if (typeof input === 'number') {
            input.toFixed(2);
        }
        else {
            input;
        }
    }
    //instanceof 类型保护
    var Animal = /** @class */ (function () {
        function Animal() {
            this.name = 'majiong';
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.swing = 2;
            return _this;
        }
        return Bird;
    }(Animal));
    function getName(a) {
        if (a instanceof Bird) {
            console.log(a.swing);
        }
        else {
            console.log(a.name);
        }
    }
    //null保护
    function getFirstLetter(s) {
        if (s === null) {
            s = '';
        }
        return s.charAt(0);
    }
    function getFirstLetter1(s) {
        function ensure() {
            s = s || '';
        }
        ensure();
        return s.charAt(0); //如果报错可用s!.chartAr(0)  非空断言
    }
    //链判断运算符 判断a是否为null或者undefined，如果是的话就直接返回null或者undefined，如果不是则返回a.b
    var a = { b: 1 };
    console.log(a === null || a === void 0 ? void 0 : a.b);
    function getButton(button) {
        if (button.class === 'warning') { //如果没有一个判断  你写button的时候，提示语只有class,因为wrningbutton和dangerbutton共有的属性就是class
            console.log(button.text1);
        }
        else {
            console.log(button.text2);
        }
    }
    function getNumber(x) {
        if ('swing' in x) {
            console.log(x.swing);
        }
        else {
            console.log(x.leg);
        }
    }
})(a || (a = {}));
var b;
(function (b) {
    function isBird(x) {
        return x.legs === 2;
    }
    function getAnimal(x) {
        if (isBird(x)) {
            console.log(x.name1);
        }
        else {
            console.log(x.name2);
        }
    }
    var x = { name1: 'Bird', legs: 2 }; //{name1:'鸟', legs:2} 这样回报错，因为接口本身是定义类型的，之前的Bird接口写死了name1：’Bird'所以后续的都必须写name1:'Bird'
    getAnimal(x);
})(b || (b = {}));
