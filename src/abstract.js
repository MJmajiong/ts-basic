"use strict";
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
//抽象类不能被实例化
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.getName = function () {
        return this.name;
    };
    return Cat;
}(Animal));
var cst = new Cat();
cst.name = '猫';
var point = { x: 0, y: 0 };
//类可以继承多个接口，但只能继承一个父类,需要实现接口里面所有的接口
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () { };
    Person.prototype.eat = function () { };
    return Person;
}());
var p = new Person();
var A;
(function (A) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Duck = /** @class */ (function (_super) {
        __extends(Duck, _super);
        function Duck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Duck.prototype.speak = function () {
            console.log('wangwangwnag');
        };
        Duck.prototype.fly = function () {
            console.log('我会飞');
        };
        return Duck;
    }(Animal));
    var duck = new Duck('majiong');
    duck.speak();
    duck.fly();
})(A || (A = {}));
function sum2(a, b) {
}
sum2(1, 'd');
sum2(1, 1);
sum2('1', '1');
//重写 子类重新实现并覆盖父类中的方法
var b;
(function (b) {
    //关于继承跟静态方法没有关系，子类并不能继承父类的静态方法
    var Animal = /** @class */ (function () {
        function Animal() {
            this.height = 28;
        }
        Animal.prototype.speak = function () {
            // throw new Error('')
            console.log('动物叫');
        };
        return Animal;
    }());
    //继承和多态
    //继承（inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
    //多态（polymorphism): 由继承而产生了相关的不同的类，对同一方法可以有不同的行为
    //像下面的dog 和 cat 对speak的实现，其实就是多态，
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.speak = function () {
            console.log('wangwang');
        };
        return Dog;
    }(Animal));
    //super 在 constructor 只能super(参数)  不在constructor那就必须后面带着方法(属性都不行，属性用this)
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super.call(this) || this;
        }
        Cat.prototype.speak = function () {
            console.log('miaomiaomiao');
            _super.prototype.speak.call(this);
            console.log(this.height);
            //super.speak = Animal.prototype.speak
            //super的其实就是父类的原型
        };
        return Cat;
    }(Animal));
    var dog = new Dog();
    dog.speak();
    var cat = new Cat();
    cat.speak();
})(b || (b = {}));
//class 的super 有两种指向  在静态方法和构造函数中指向父类，在普通函数种，指向父类的prototype
