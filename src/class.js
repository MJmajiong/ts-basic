"use strict";
//如何定义类
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
//同样的类名怎么办，那就用命名空间的隔离，比如这里的a 和 b
var a;
(function (a) {
    var Person = /** @class */ (function () {
        function Person() {
            //两种初始化方式 第一种name:string = 'majiong'  第二种在constructor里面进行this.age = 10
            this.name = "majiong";
            this.age = 10;
        }
        return Person;
    }());
    var p1 = new Person();
    console.log(p1.name);
    console.log(p1.age);
})(a || (a = {}));
//存取器 gtter setter
var b;
(function (b) {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.myname = name;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this.myname;
            },
            set: function (newVal) {
                this.myname = newVal.toUpperCase();
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person('majiog');
    console.log(p.name);
    p.name = 'majiong';
    console.log(p.name);
})(b || (b = {}));
var c;
(function (c) {
    var Person = /** @class */ (function () {
        // name: string;
        //为了让实例化候的对象能通过p.name来访问，可以现在外面定义name:string,然后构造函数里面this.name = name或者直接在参数的前面加上public
        //public 公开的，公共的
        function Person(name) {
            this.name = name;
            //   this.name = name;
        }
        return Person;
    }());
    var p = new Person('majiong');
    p.name;
    //   p.name = 'jiagou'   //如果参数前面加了readonlu，那么就是只读的，不可赋值的
})(c || (c = {}));
//继承
// 子类继承父类后，子类的实例上就拥有与了父类种的属性和方法
// 访问修饰符 public protected private
// public 自己的子类和其他类都可以访问
// protected 受保护的  自己和自己的子类能访问，其他类不能访问(比如在外面实例化的对象，就没法访问，看下面的age)
// private 私有的  只能自己访问，自己的子类不能访问，其他的更不行了
var d;
(function (d) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
            this.amount = 100;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        Person.prototype.setName = function (newName) {
            this.name = newName;
        };
        return Person;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, stuNumber) {
            var _this = _super.call(this, name, age) || this;
            _this.stuNumber = stuNumber;
            return _this;
        }
        Student.getType = function () {
            return Student.type;
        };
        Student.prototype.getStuNumber = function () {
            return this.name + this.age + this.stuNumber;
        };
        Student.prototype.setStuNumber = function (stuNumber) {
            this.stuNumber = stuNumber;
        };
        Student.type = 'student';
        return Student;
    }(Person));
    var s = new Student('majiong', 10, 1);
    console.log(s.name);
    // console.log(s.age)   //不能获取到，因为是protected
    console.log(Student.type);
    console.log(Student.getType());
})(d || (d = {}));
