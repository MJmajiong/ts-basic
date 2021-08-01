//接口

import { stringify } from "node:querystring";

//任意属性
namespace a {
  interface PlainObject {
    [propName: string]: number;
  }
  let obj: PlainObject = {
    x: 1,
    y: 2,
    z: 3,
    d: 4,
  };
  //接口的继承
  interface Speakable {
    speak(): void;
  }
  interface SpeakChinese extends Speakable {
    speakChinese(): void;
  }
  class Person implements SpeakChinese {
    speak() {}
    speakChinese() {}
  }
}

//接口的readonly
//让PI只读
interface Circle {
  PI: number;
  radius: number;
}

let circle: Circle = {
  PI: 3.14,
  radius: 10,
};

//接口还可以用来约束函数
interface Discount {
  (price: number): number; //约束函数的参数和返回值
}
let cost: Discount = function (price: number): number {
  return price * 0.8;
};

//可索引接口
//是用来对数组和对象进行约束
interface UserInterface {
  [index: number]: string;
}

let arr: UserInterface = ["1", "2", "3"];
let obj: UserInterface = {
  1: "1",
  2: "2",
};

//type interface的区别

//类接口 可以用接口来装饰类 学ts核心 要学会两个重要 接口 + 泛型
namespace c {
  interface Speakable {
    name: string;
    speak(words: string): void;
  }
  class Dog implements Speakable {
    name: string;
    speak() {}
  }
  class Animal {
    constructor(public name: string) {}
  }
  //约束构造函数  使用new来约束构造函数(类)
  interface withNameClass {
    new (namea: string): Animal;
  }

  function createAnimal(clazz:withNameClass, name:string) {
      return new clazz(name)
  }
  let a = createAnimal(Animal, 'zhufeng')
}

namespace c {
    //接口的兼容性 ts跟类型没有关系，只跟属性有关系，我要的属性，你有就行
    //如果传入的变量和声明的类型不匹配，TS就会进行兼容性检查
    //原理是duck-check,就是说只要目标类型种声明的属性变量在源类型种都存在就是兼容的
    //如果他是以及狗，学猫叫，那他就是一直猫
    interface Animal {
        name : string;
        age: number;
    }

    interface Person {
        name:string;
        age:number;
        speak:(words:string) => void
    }
    function getName(animal:Animal):string {
        return animal.name
    }
    let p:Person = {   //如果这里的类型改成Animal（第三个属性speak删掉），getName的参数类型改成Person就不行，因为对于参数的接口来说， 少了speak
        name:'majiong',
        age:10,
        speak(){}
    }
    console.log(getName(p))
    //基本类型的兼容性
    let num:string | number
    let str:string = 'hello'
    // num = str   //可以这么赋值
    // str = num      //不可以这么赋值

    namespace d {
    //类的兼容性   跟类型无关（也就是跟父类，或者子类无关）只跟属性有关，只要属性齐全就能指向当前的这个类
        class Animal {
            name:string
        }
        class Bird extends Animal {
            swing:number
        }
        let a:Animal;
        a = new Bird()     //父类的变量能指向子类的实例
        
        let b:Bird;
        // b = new Animal()   //子类的变量不能指向父类的实例，但是其实是不对的，把上面的swing：number属性注释掉，这里就不报错了，所以跟类型无关，看上面类的兼容性
    }
}

namespace e{
    //函数的兼容性
    //比较参数
    type someFuntion = (a:number, b:number)=>number
    let sum:someFuntion
    function f1(a:number, b:number):number {
        return a
    }
    sum = f1;
    function f2(a:number):number {
        return a
    }
    sum = f2
    function f3():number {
        return 1
    }
    sum = f3
    function f4(a:number, b:number, c:number) {
        return a
    }
    // sum = f4    //这样就报错了，原则是参数能少不能多

    //比较返回值
    type Getperson = () => {name:string, age:number}
    let getPerson:Getperson;
    function g1() {
        return {name:'string', age:10}
    }
    getPerson = g1
    function g2() {
        return {name:'string'}
    }
    // getPerson = g2   //返回值多了可以，少了不行
    function g3() {
        return {
            name:'string', 
            age:10,
            home:'beijiing'
        }
    }
    getPerson = g3

    //函数参数的协变
    type logFunc = (a:number | string) => void;
    let log:logFunc;
    //如果这里的只有a:number那就报错，赋值log = log1的时候，我要你接受两个参数，你只接收了一个，那就不可以
    function log1(a:number | string | boolean) {
        console.log(a)
    }
    log = log1
}

namespace f {
    //泛型的兼容性  泛型在判断兼容性的时候会先判断具体的类型，然后再进行兼容性判断

    //判断兼容性的时候先判断具体的类型再进行兼容性判断
    interface Empty<T> {

    }
    let x:Empty<string>;
    let y:Empty<number>;
    x = y  //但如果interface 里面写了属性了，比如data:T 那么久不能赋值了，因为x是{data:string}, y是{data:number}

    //枚举的兼容性  枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
    //不同枚举类型之间是不兼容的
    enum Colors {
        Red, Yellow
    }
    let c:Colors;
    c = Colors.Red   //0  
    c = 1            //枚举类型和数字类型兼容
    let d:number;
    d = Colors.Yellow  //1


}

