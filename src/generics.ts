//泛型
//泛型（generics）是指在定义函数、接口或类的时候，不预先制定具体的类型，而在使用的时候再指定类型的一种特性
//泛型T作用域只限于函数内部使用

//为什么会有泛型，他的意义在哪里
import React from 'react'
namespace a {
    function createArray(length:number, value:any) : Array<any>{
        //value的类型写了any，里面的result[i]=1这样赋值也不会报错，但是我不想要这种效果，我想要的效果是我传进来什么类型，数组里面丢进去的就是什么类型
        //而且我还不想写死他的类型，所以不能写string number这种类型，那么这个时候泛型就是最好的选择
        //最好的写法看下面的namespace b
        let result:Array<any> = [];
        for(let i = 0; i < length; i++){
            result[i]= 1
        }
        return result
    }
    let result = createArray(3, 'x')
    console.log(result)
}

namespace b {
    function createArray<T>(length:number, value:T) : Array<T>{
        let result:Array<T> = [];
        for(let i = 0; i < length; i++){
            result[i]= value
        }
        return result
    }
    let result = createArray<string>(3, 'x')
    console.log(result)
    let result1 = createArray<number>(3, 3)    //就相当于一个参数 传什么进去就是什么类型
    console.log(result)

//类数组 ArrayLike arguments
    function sum(...arg2:any[]) {
        let args:IArguments = arguments;
        for(let i = 0; i < args.length; i++){
            console.log(args[i])
        }
    }
    sum(1, 2, 3)
    // 这些都是类数组
    //ts 为dom提供了所有的类型
    // let root:HTMLElement | null = document.getElementById('root')
    // let children: HTMLCollection = root!.children
    // let childNodes:NodeListOf<ChildNode> = root!.childNodes

    //类里面使用泛型
    class MyArray<T> {
        private list : T[] = []
        add(val:T) {
            this.list.push(val)
        }
        getMax():T {
            let result:T = this.list[0]
            for(let i = 1; i < this.list.length; i++){
                if(this.list[i]>result){
                    result = this.list[i]
                }
            }
            return result
        }
    }

    let arr = new MyArray<number>()
    arr.add(1)
    arr.add(2)
    arr.add(3)
    let result2:number = arr.getMax()
    console.log(result2)


    //接口里面使用泛型
    interface Calculate {    //<T> 写在 Calculate后面  作用域整个接口内部
        <T>(a:T, b:T) : T   //<T> 写在这里 作用域这个函数
    }

    let add : Calculate = function<T> (a:T, b:T): T {
        return a
        // a as number <number>  两种断言方式 都报错  泛型里面不能用这种断言
        //如果返回a + b  报错  运算符“+”不能应用于类型“T”和“T”。
    }
    let result3 = add<number>(1, 2)
    console.log(result3)


    //多个类型参数   如何在不增加中间变量的情况下，交换两个变量的值
    function swap<A, B>(typle:[A, B]):[B, A] {
        return [typle[1], typle[0]]
    }
    let result4 = swap<string, number>(['majiong', 10])
    console.log(result4)
    // let a = 1, b = 2
    // [b, a] = [a, b]


    //默认泛型类型  <T=number>
    function createArray2<T=number>(length:number, value:T) : Array<T>{
        let result:Array<T> = [];
        for(let i = 0; i < length; i++){
            result[i]= value
        }
        return result
    }
    let result5 = createArray2<string>(3, '1')


    //泛型的约束
    //在函数种使用泛型的时候，由于预先并不知道具体的类型，所以不能访问相应类型的方法
    //泛型继承接口
    interface LengthWise{
        length:number
    }

    function logger<T extends LengthWise>(val:T) {
        console.log(val.length)   //如果泛型没有继承接口就不行  因为不知道T是什么类型，写了继承就可以了
    }
    logger('majiong')


    //泛型接口
    interface Car<T> {
        list : T[]
    }
    let car:Car<string> = {
        list:['1', '2', '3']
    }

    //泛型类型别名
    type Cart2<T> = {list:T[]} | T[]
    let c1:Cart2<string> = {list:['1']}
    let c2:Cart2<string> = ['1']

    //interface 定义一个实实在在的接口  他是一个真正的类型
    //type 一般用来定义别名，并不是真正的类型
}

