import { DH_UNABLE_TO_CHECK_GENERATOR } from "node:constants";

//抽象类不能被实例化
abstract class Animal {
    name:string;
    abstract getName():string;  //只能定义，不能实现，再子类实现
}

class Cat extends Animal {
    getName():string{
        return this.name
    }
}
let cst = new Cat()
cst.name = '猫'

//接口  可以用来描述对象的形状，指的是对象有哪些属性，属性是什么类型

interface Point {
    x:number;
    y:number;
}
let point:Point = {x:0, y:0}

//还可以用来描述行为的抽象
interface Speakable {
    speak():void //因为接口里不能放实现，只能放定义，所有的方法都是抽象的
}

interface Eatable {
    eat():void
}

//类可以继承多个接口，但只能继承一个父类,需要实现接口里面所有的接口
class Person implements Speakable, Eatable {
    speak(){}
    eat(){}
}

let p = new Person()

namespace A {
    abstract class Animal {
        name:string
        constructor(name:string) {
            this.name = name 
        }
        abstract speak():void;
    }
    interface Flying{
        fly():void
    }
    class Duck extends Animal implements Flying {
        speak() {
            console.log('wangwangwnag')
        }
        fly() {
            console.log('我会飞')
        }
    }
    let duck = new Duck('majiong')
    duck.speak()
    duck.fly()
}

//抽象类  vs   接口
//不同类之间共有的属性或方法，可以抽象成一个接口
//而抽象类是工跟其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
//抽象类本质上是一个无法被实例化的类，其中能够实现方法和初始化属性，而接口仅能够用于描述，既不提供方法的实现，也不为属性进行初始化
//一个类可以继承一个类或抽象类，但可以实现（implements）多个接口
//抽象类也可以实现接口

//重写 （overwrite） vs  重载（overload）

//重载：指为同一个函数提供多个类型定义
function sum2(a:number, b:string):void;
function sum2(a:string, b:string):void;
function sum2(a:number, b:number):void;
function sum2(a:any, b:any) {

}
sum2(1, 'd')
sum2(1, 1)
sum2('1', '1')

//重写 子类重新实现并覆盖父类中的方法
namespace b{
    //关于继承跟静态方法没有关系，子类并不能继承父类的静态方法
    class Animal {    
        height:number = 28;
        constructor() {}
        speak() {
            // throw new Error('')
            console.log('动物叫')
        }

    }
    //继承和多态
    //继承（inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
    //多态（polymorphism): 由继承而产生了相关的不同的类，对同一方法可以有不同的行为
    //像下面的dog 和 cat 对speak的实现，其实就是多态，
    class Dog extends Animal{  
        speak() {
            console.log('wangwang')
        }
    }
    //super 在 constructor 只能super(参数)  不在constructor那就必须后面带着方法(属性都不行，属性用this)
    class Cat extends Animal{
        constructor() {
            super()
        }
        speak() {
            console.log('miaomiaomiao')
            super.speak()   
            console.log(this.height)
            //super.speak = Animal.prototype.speak
            //super的其实就是父类的原型
        }
    }
    let dog = new Dog()
    dog.speak()
    let cat = new Cat()
    cat.speak()
}

//class 的super 有两种指向  在静态方法和构造函数中指向父类，在普通函数种，指向父类的prototype