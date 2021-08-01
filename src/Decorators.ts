//装饰器（https://www.jianshu.com/p/f4c961cbb074）装饰器工厂和重载不明白的可以看这里，这里的普通装饰器没有问题

//类装饰器
namespace a {
    console.log('dayinlema')
    interface Person {  //这样子定义接口，接口回跟class进行合并
        xx:string;
        yy:string;
    }
    function enhancer(target:any) {
        // target.mm = 'person'   
        target.prototype.xx = 'xx'   //要想让实例能读取到相应的值，那就要在prototype上记性赋值
        target.prototype.yy = 'yy'
    }
    @enhancer
    class Person {     //experimentalDecorators": true,设置这个Person就不会因为装饰器而报错了
        constructor () {

        }
    }
    let p = new Person()
    console.log(p.xx)   //这样子不报错的原因就是因为interface Person 和 class Person进行了合并
    console.log(p.yy)

    // console.log(Person.mm)  
}



//把类整个替换（重载）,但是要注意，以前的类有的装饰器返回的类里面也需要有，不然报错,如需拓展又不想放在原型上，记得在前面要加上interface Person{}
//普通装饰器是没有参数的，装饰器工厂是有装饰器的
namespace b {
    interface Person{
        age:number
    }

    function enhancer(target:any) {
        return class extends target{
            name:string = 'majiong'  //但是这么写不是个办法，因为之前的class可能有太多方法属性或者不可见，所以的在上面通过extends target
            public age:number = 10
        }
    }
    @enhancer
    class Person {     //experimentalDecorators": true,设置这个Person就不会因为装饰器而报错了
        name:string = 'person'
        constructor () {
        }
    }
    let p = new Person()
    console.log(p.age)
    console.log()
}

//装饰器工:闭包，返回的函数才是真正的装饰器
namespace c {
    interface Person {
        age:number
    }
    function enhancer(name:string) {
        return function (target:any) {
            console.log(target)
            return class extends target{
                name:string = name  //但是这么写不是个办法，因为之前的class可能有太多方法属性或者不可见，所以的在上面通过extends Person来进行继承
                public age:number = 10
            }
        }
        
    }
    @enhancer('majiong')
    class Person {     //experimentalDecorators": true,设置这个Person就不会因为装饰器而报错了
        name:string = 'person'
        constructor () {
        }
    }
    let p = new Person()
    console.log(p.age)
    console.log()
}

//属性装饰器 静态方法 普通方法 装饰属性
namespace d {
    //target如果装饰的是个普通属性的话，那么这个target指向类的原型
    //target装饰的是一个类的属性static, 那么这个target指向类的定义
    function upperCase(target:any, propertyName:string) {
        let value = target[propertyName]
        const getter = () => value;
        const setter = (newVal:string) => {
            value = newVal.toUpperCase()
        }
        delete target[propertyName]
        Object.defineProperty(target, propertyName, {
            get:getter,
            set:setter,
            enumerable:true,
            configurable:true
        })

    }
    function methodEnumerable(flag:boolean) {
        //第一个参数 class 第二个参数 方法名  第三个参数 属性的描述属性（对象）
        return function (target:any, methodName:string, propertyDescriptor:any) {
            propertyDescriptor.enumerable = flag
        }
    }
    function staicMethodGetAge(age:number) {
        return function (target:any, methodName:string, propertyDescriptor:any) {
            target.age = age
        }
    }
    function toNumber(target:any, methodName:string, propertyDescriptor:any) {
        let oldMethod = propertyDescriptor.value
        propertyDescriptor.value = function(...args:any[]){
            args = args.map(item => parseFloat(item))
            console.log(args, 'args')
            return oldMethod.apply(this, args)
        }
    }
    class Person {
        age : number = 0
        @upperCase
        name:string = 'majiong'
        @methodEnumerable(false)
        getName() {
            console.log('getName')
        }
        @staicMethodGetAge(100)
        static getAge() {

        }
        @toNumber
        add(...arg:any[]){
            return arg.reduce((accu, item)=>accu + item)
        }
    }
    let p = new Person()
    p.name = 'jiagou'
    console.log(p.name)
    for(let attr in p){
        console.log('attr=' + attr)
    }
    Person.getAge()
    p.add(1, '2', '3')
    console.log(p.add(1, '2', '3'))
}

//方法参数装饰器
namespace e{
    interface HttpClient {
        age:number
    }
    function logParams(params:any) {
        console.log(params)  // 装饰器传入的参数：uuid
        return function(target:any, methodName:any, paramIndex:any) {
            console.log(target)  // { constructor:f, getData:f } Heepclient.prototype
            console.log(methodName)  // getData
            console.log(paramIndex)  // 0
            target.age = 18
        }
    }
    class HttpClient {
        constructor() { }
        getData(@logParams('uuid') uuid:any) {
            console.log(uuid);
            console.log(this.age)
        }
    }
}

// 顺序
// 属性方法先执行，谁先写先执行
// 方法的会后，先参数再方法，而且他们一定会在一起
// 最后是类
// 如果是同类型，先执行后写的