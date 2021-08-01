"use strict";
//接口
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
Object.defineProperty(exports, "__esModule", { value: true });
//任意属性
var a;
(function (a) {
    var obj = {
        x: 1,
        y: 2,
        z: 3,
        d: 4,
    };
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.speak = function () { };
        Person.prototype.speakChinese = function () { };
        return Person;
    }());
})(a || (a = {}));
var circle = {
    PI: 3.14,
    radius: 10,
};
var cost = function (price) {
    return price * 0.8;
};
var arr = ["1", "2", "3"];
var obj = {
    1: "1",
    2: "2",
};
//type interface的区别
//类接口 可以用接口来装饰类 学ts核心 要学会两个重要 接口 + 泛型
var c;
(function (c) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.speak = function () { };
        return Dog;
    }());
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    function createAnimal(clazz, name) {
        return new clazz(name);
    }
    var a = createAnimal(Animal, 'zhufeng');
})(c || (c = {}));
(function (c) {
    function getName(animal) {
        return animal.name;
    }
    var p = {
        name: 'majiong',
        age: 10,
        speak: function () { }
    };
    console.log(getName(p));
    //基本类型的兼容性
    var num;
    var str = 'hello';
    // num = str   //可以这么赋值
    // str = num      //不可以这么赋值
    var d;
    (function (d) {
        //类的兼容性   跟类型无关（也就是跟父类，或者子类无关）只跟属性有关，只要属性齐全就能指向当前的这个类
        var Animal = /** @class */ (function () {
            function Animal() {
            }
            return Animal;
        }());
        var Bird = /** @class */ (function (_super) {
            __extends(Bird, _super);
            function Bird() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Bird;
        }(Animal));
        var a;
        a = new Bird(); //父类的变量能指向子类的实例
        var b;
        // b = new Animal()   //子类的变量不能指向父类的实例，但是其实是不对的，把上面的swing：number属性注释掉，这里就不报错了，所以跟类型无关，看上面类的兼容性
    })(d || (d = {}));
})(c || (c = {}));
var e;
(function (e) {
    var sum;
    function f1(a, b) {
        return a;
    }
    sum = f1;
    function f2(a) {
        return a;
    }
    sum = f2;
    function f3() {
        return 1;
    }
    sum = f3;
    function f4(a, b, c) {
        return a;
    }
    var getPerson;
    function g1() {
        return { name: 'string', age: 10 };
    }
    getPerson = g1;
    function g2() {
        return { name: 'string' };
    }
    // getPerson = g2   //返回值多了可以，少了不行
    function g3() {
        return {
            name: 'string',
            age: 10,
            home: 'beijiing'
        };
    }
    getPerson = g3;
    var log;
    //如果这里的只有a:number那就报错，赋值log = log1的时候，我要你接受两个参数，你只接收了一个，那就不可以
    function log1(a) {
        console.log(a);
    }
    log = log1;
})(e || (e = {}));
var f;
(function (f) {
    //泛型的兼容性  泛型在判断兼容性的时候会先判断具体的类型，然后再进行兼容性判断
    var x;
    var y;
    x = y; //但如果interface 里面写了属性了，比如data:T 那么久不能赋值了，因为x是{data:string}, y是{data:number}
    //枚举的兼容性  枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
    //不同枚举类型之间是不兼容的
    var Colors;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Yellow"] = 1] = "Yellow";
    })(Colors || (Colors = {}));
    var c;
    c = Colors.Red; //0  
    c = 1; //枚举类型和数字类型兼容
    var d;
    d = Colors.Yellow; //1
})(f || (f = {}));
