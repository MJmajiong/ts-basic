//无法重新声明块范围变量“name”。
//如果代码里面有export import 之类的代码，那么这个文件变成了一个模块
//在一个作用于内部，相同的变量名只能声明一次

export {}  //有了这个下面的就变成私有变量了
let name : string | null = 'zhufeng'   //如果单单写这个就报错了，因为gloabal全局对象里面有了name的变量，但是加上export 就可以了，不管export什么，哪怕是export {}都行
let age: number = 10
let marryed:boolean = true
let hobbies : string[] = ['1', '2', '3']
let interests: Array<string> = ['4', '5']

//元组 类似一个数组，他是一个长度和类型都固定的数组
//1 长度固定 2 类型可以不一样

let point:[number, number] = [100, 100]
point[0], point[1]
let person:[string, number]= ['majiong', 33]

//枚举类型
enum Gender {
    BOY,
    GIRL
}
console.log(Gender.BOY)  //0
console.log(Gender.GIRL) //1

//通过编译后的es5来看，就相当于
let  Gender2 = {
    0: "BOY",
    1: "GIRL",
    "BOY":0,
    "GIRL":1
}

enum Week {
    MONDAY = 1,
    TUESDAY = 2
}

//常数枚举
//看编译后的es5  这个常数枚举就没有了，直接就显示线面的console.log(0, 1, 2)
const enum Colors {
    Red,
    Yellow,
    Blue
}

console.log(Colors.Red, Colors.Yellow, Colors.Blue)  //0 1 2

//任意类型  anyscript
//第三方库没有类型定义  类型转换的时候  数据结构太复杂太灵活了  any  能不用就不用

//Any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it.
//任何HTML元素。一些元素直接实现这个接口，而其他元素通过继承它的接口实现它。

//ts 为dom提供了一整套的类型声明
// let root:HTMLElement | null = document.getElementById('root')
// !强行断言,断言不为空
// root!.style.color = 'red';

//类型断言还有as
let majiong : string | boolean | number;
(majiong as string).toLocaleLowerCase()

//null undefined
//null 空 undefined 未定义
//他们都是其他类型的子类型  你可以把他们赋给其他类型的变量
let myname1:string = null
let myname2:string = undefined

let x:number;
x = 1;
x = undefined;
x = null;

//void 类型 空的 没有
function greeting(name:string):void{
    console.log(`hello ${name}`)
    //不能返回，但是可以返回null 和 undifined 因为他们是任意类型的子类型，也是需要设置strictNullChecks为false
    return null
}

greeting('majiong')

//nerver 永远不
//never是其他类型的子类型，代表不会出现的值

//返回“never”的函数不能具有可访问的终结点。
//在函数内部回永远抛出错误，导致函数无法正常结束，所以如果写了never的返回值，应该throw new Error()
function createError(message:string):never {
    throw new Error()
    console.log(3)
}

function sum():never {
    while(true) {
        console.log('hello')
    }
    console.log('end point')
}

