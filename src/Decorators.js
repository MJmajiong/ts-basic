"use strict";
//装饰器（https://www.jianshu.com/p/f4c961cbb074）装饰器工厂和重载不明白的可以看这里，这里的普通装饰器没有问题
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//类装饰器
var a;
(function (a) {
    console.log('dayinlema');
    function enhancer(target) {
        // target.mm = 'person'   
        target.prototype.xx = 'xx'; //要想让实例能读取到相应的值，那就要在prototype上记性赋值
        target.prototype.yy = 'yy';
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.xx); //这样子不报错的原因就是因为interface Person 和 class Person进行了合并
    console.log(p.yy);
    // console.log(Person.mm)  
})(a || (a = {}));
//把类整个替换（重载）,但是要注意，以前的类有的装饰器返回的类里面也需要有，不然报错,如需拓展又不想放在原型上，记得在前面要加上interface Person{}
//普通装饰器是没有参数的，装饰器工厂是有装饰器的
var b;
(function (b) {
    function enhancer(target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = 'majiong'; //但是这么写不是个办法，因为之前的class可能有太多方法属性或者不可见，所以的在上面通过extends target
                _this.age = 10;
                return _this;
            }
            return class_1;
        }(target));
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'person';
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.age);
    console.log();
})(b || (b = {}));
//装饰器工:闭包，返回的函数才是真正的装饰器
var c;
(function (c) {
    function enhancer(name) {
        return function (target) {
            console.log(target);
            return /** @class */ (function (_super) {
                __extends(class_2, _super);
                function class_2() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.name = name; //但是这么写不是个办法，因为之前的class可能有太多方法属性或者不可见，所以的在上面通过extends Person来进行继承
                    _this.age = 10;
                    return _this;
                }
                return class_2;
            }(target));
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'person';
        }
        Person = __decorate([
            enhancer('majiong')
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.age);
    console.log();
})(c || (c = {}));
//属性装饰器 静态方法 普通方法 装饰属性
var d;
(function (d) {
    //target如果装饰的是个普通属性的话，那么这个target指向类的原型
    //target装饰的是一个类的属性static, 那么这个target指向类的定义
    function upperCase(target, propertyName) {
        var value = target[propertyName];
        var getter = function () { return value; };
        var setter = function (newVal) {
            value = newVal.toUpperCase();
        };
        delete target[propertyName];
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
    function methodEnumerable(flag) {
        //第一个参数 class 第二个参数 方法名  第三个参数 属性的描述属性（对象）
        return function (target, methodName, propertyDescriptor) {
            propertyDescriptor.enumerable = flag;
        };
    }
    function staicMethodGetAge(age) {
        return function (target, methodName, propertyDescriptor) {
            target.age = age;
        };
    }
    function toNumber(target, methodName, propertyDescriptor) {
        var oldMethod = propertyDescriptor.value;
        propertyDescriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (item) { return parseFloat(item); });
            console.log(args, 'args');
            return oldMethod.apply(this, args);
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.age = 0;
            this.name = 'majiong';
        }
        Person.prototype.getName = function () {
            console.log('getName');
        };
        Person.getAge = function () {
        };
        Person.prototype.add = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            return arg.reduce(function (accu, item) { return accu + item; });
        };
        __decorate([
            upperCase
        ], Person.prototype, "name", void 0);
        __decorate([
            methodEnumerable(false)
        ], Person.prototype, "getName", null);
        __decorate([
            toNumber
        ], Person.prototype, "add", null);
        __decorate([
            staicMethodGetAge(100)
        ], Person, "getAge", null);
        return Person;
    }());
    var p = new Person();
    p.name = 'jiagou';
    console.log(p.name);
    for (var attr in p) {
        console.log('attr=' + attr);
    }
    Person.getAge();
    p.add(1, '2', '3');
    console.log(p.add(1, '2', '3'));
})(d || (d = {}));
//方法参数装饰器
var e;
(function (e) {
    function logParams(params) {
        console.log(params); // 装饰器传入的参数：uuid
        return function (target, methodName, paramIndex) {
            console.log(target); // { constructor:f, getData:f } Heepclient.prototype
            console.log(methodName); // getData
            console.log(paramIndex); // 0
            target.age = 18;
        };
    }
    var HttpClient = /** @class */ (function () {
        function HttpClient() {
        }
        HttpClient.prototype.getData = function (uuid) {
            console.log(uuid);
            console.log(this.age);
        };
        __decorate([
            __param(0, logParams('uuid'))
        ], HttpClient.prototype, "getData", null);
        return HttpClient;
    }());
})(e || (e = {}));
// 顺序
// 属性方法先执行，谁先写先执行
// 方法的会后，先参数再方法，而且他们一定会在一起
// 最后是类
// 如果是同类型，先执行后写的
