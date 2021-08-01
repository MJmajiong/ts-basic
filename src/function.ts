import { Console } from "node:console"

//函数定义
function hello(name:string):void{
    console.log('hello' + name)
}
// type用来定义一个类型或者 类型别名
// 这里的=> 不是箭头函数，就是个分隔符
type GetUserNameType = (firstName:string, lastName:string) => string
// 函数表达式
let getUserName:GetUserNameType = function (firstName:string, lastName:string):string {
    return firstName + lastName
}

//可选参数
function print(name:string, age:number, home?:string) {

}
print('zhufeng', 10)

//默认参数
function ajax(url:string, method:string = 'GET') {
    console.log(url, method)
}

ajax('/user')
ajax('/user', 'post')

//剩余参数
function sum(...number:Array<number>) {
    return number.reduce((accu, item) => accu + item, 0)
}

//函数重载
//no overload(重载) expects 1 arguments
let obj:any = {}
function attr(val:string):void;
function attr(val:number):void;
// console.log(333)  函数的重载和函数的定义必须紧紧地挨在一起，中间什么东西也不能写，除了注释
function attr(val:any):void {
    if(typeof val === 'string'){
        obj.name = val;
    }else if(typeof val === 'number'){
        obj.age = val
    }
}

attr('majiong')
attr(10)
// attr(false)   //报错 没有与此调用匹配的重载。


function sum2(a:number, b:string):void;
function sum2(a:string, b:string):void;
function sum2(a:number, b:number):void;
function sum2(a:any, b:any) {

}
sum2(1, 'd')
sum2(1, 1)
sum2('1', '1')
// sum2(1, [])       //报错 没有与此调用匹配的重载。

//ts怎么写箭头函数
//ts写箭头函数跟在js是一样的
type Delay = (ms:number) => void;
let delay = (ms:number) => {
    setTimeout(function () {

    }, 1000)
}


