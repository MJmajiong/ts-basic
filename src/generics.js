"use strict";
//泛型
//泛型（generics）是指在定义函数、接口或类的时候，不预先制定具体的类型，而在使用的时候再指定类型的一种特性
//泛型T作用域只限于函数内部使用
Object.defineProperty(exports, "__esModule", { value: true });
var a;
(function (a) {
    function createArray(length, value) {
        //value的类型写了any，里面的result[i]=1这样赋值也不会报错，但是我不想要这种效果，我想要的效果是我传进来什么类型，数组里面丢进去的就是什么类型
        //而且我还不想写死他的类型，所以不能写string number这种类型，那么这个时候泛型就是最好的选择
        //最好的写法看下面的namespace b
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = 1;
        }
        return result;
    }
    var result = createArray(3, 'x');
    console.log(result);
})(a || (a = {}));
var b;
(function (b_1) {
    function createArray(length, value) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    var result = createArray(3, 'x');
    console.log(result);
    var result1 = createArray(3, 3); //就相当于一个参数 传什么进去就是什么类型
    console.log(result);
    //类数组 ArrayLike arguments
    function sum() {
        var arg2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg2[_i] = arguments[_i];
        }
        var args = arguments;
        for (var i = 0; i < args.length; i++) {
            console.log(args[i]);
        }
    }
    sum(1, 2, 3);
    // 这些都是类数组
    //ts 为dom提供了所有的类型
    // let root:HTMLElement | null = document.getElementById('root')
    // let children: HTMLCollection = root!.children
    // let childNodes:NodeListOf<ChildNode> = root!.childNodes
    //类里面使用泛型
    var MyArray = /** @class */ (function () {
        function MyArray() {
            this.list = [];
        }
        MyArray.prototype.add = function (val) {
            this.list.push(val);
        };
        MyArray.prototype.getMax = function () {
            var result = this.list[0];
            for (var i = 1; i < this.list.length; i++) {
                if (this.list[i] > result) {
                    result = this.list[i];
                }
            }
            return result;
        };
        return MyArray;
    }());
    var arr = new MyArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    var result2 = arr.getMax();
    console.log(result2);
    var add = function (a, b) {
        return a;
        // a as number <number>  两种断言方式 都报错  泛型里面不能用这种断言
        //如果返回a + b  报错  运算符“+”不能应用于类型“T”和“T”。
    };
    var result3 = add(1, 2);
    console.log(result3);
    //多个类型参数   如何在不增加中间变量的情况下，交换两个变量的值
    function swap(typle) {
        return [typle[1], typle[0]];
    }
    var result4 = swap(['majiong', 10]);
    console.log(result4);
    // let a = 1, b = 2
    // [b, a] = [a, b]
    //默认泛型类型  <T=number>
    function createArray2(length, value) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result[i] = value;
        }
        return result;
    }
    var result5 = createArray2(3, '1');
    function logger(val) {
        console.log(val.length); //如果泛型没有继承接口就不行  因为不知道T是什么类型，写了继承就可以了
    }
    logger('majiong');
    var car = {
        list: ['1', '2', '3']
    };
    var c1 = { list: ['1'] };
    var c2 = ['1'];
    //interface 定义一个实实在在的接口  他是一个真正的类型
    //type 一般用来定义别名，并不是真正的类型
})(b || (b = {}));
