namespace a{
    interface Bird {
        name:string;
        fly():void
    }
    interface Person {
        name:string;
        eat():void
    }
    //交叉类型其实就是两个接口类型的属性的并集
    type birdman = Bird & Person
    let p:birdman = {
        name:'majiong',
        fly(){},
        eat(){}
    }
}


//typeof 可以获取一个变量的类型
namespace b{
    // type Person = {
    //     name: string;
    //     age: number
    // }
    let p = {
        name:'majiong',
        age:10
    }
    //type 用来定义类型  let  var  只能定义值
    type Person = typeof p
    let p2:Person = {
        name:'zhufeng',
        age:20
    }
    //索引访问操作符  我们可以通过[]来获取一个类型的子类型
    interface Person2 {
        name:string;
        age:number;
        job:{
            name:string
        },
        interests:{name:string; level:number}[]
    }
    let myname:Person2['job']['name'] = 'fe'
    let mylevel:Person2['interests'][0]['level']=10
    
    //keyof  索引类型查询操作符
    interface Person3{
        name:string;
        age:number;
        gender:'male' | 'female';
        // [propsName:string]:any   //可以通过这样加任意属性
    }
    // type Person3Keys = 'name' | 'age' | 'gender'
    //优化写法
    type Person3Keys = keyof Person3  //返回一个接口他的key的集合
    function getValueByKey(val:Person3, key:Person3Keys):any {
        return val[key]   //xx
    }
    let person3:Person3 = {
        name:'majiong',
        age:10,
        gender:'male'
    }

    //映射类型  在定义的时候用in操作符去批量定义
    interface Person4 {
        name:string,
        age:number,
        gender:'male' | 'female';
    }
    type PartialPerson = {
        [key in keyof Person4]?:Person4[key]
    }
    let p4:PartialPerson = {
        name:'majiong'
    }
    //内置工具类型  Partial Required Readonly Pick
    // type Partial<T> = {   //Partial源码
    //     [key in keyof T]?:T[key]
    // }
    //部分
    type PartialPerson1 = Partial<Person4>
    let p5:PartialPerson = {
        name:'majiong',
        age:10
    }

    // type Required<T> = {    //Required源码  主要是-?
    //     [key in keyof T]-?:T[key]
    // }
    //全部必填
    type RequiredPerson = Required<Person4>
    let p6:RequiredPerson = {
        name:'majiong',
        age:10,
        gender:'male'
    }


    // type Readonly<T> = {    //readonly源码  主要是-?
    //     readonly [key in keyof T]:T[key]
    // }
    //只读
    type ReadonlyPerson = Readonly<Person4>
    let p7:ReadonlyPerson = {
        name:'majiong',
        age:10,
        gender:'male'
    }
    // p7.name = 'jiagou'   //报错因为是readonly



    type Pick<T, K extends keyof T> = {    //readonly源码  主要是-?
        [key in K]:T[key]
    }
    //Pick 只能pick一个，不可以传多个值，比如传name  age
    type PickPerson = Pick<Person4, 'name'>;  //把接口的某一个属性弄出来
    let x:PickPerson = {
        name:'name'
    }
    
    //TS 要区分类型和值  类型 interface class enum  值  let var function

    //关键字            作为类型使用     作为值使用
    //class             yes            yes
    //enum              yes            yes
    //interface         yes            no
    //type              yes            no
    //function          no             yes
    //var let const     no             yes


    //什么时候interface  什么时候用type  什么时候用class，三者一般都在啥时候用
    //interface是定义接口类型，他是真实的类型，也可能回被导出和导入
    //type只是临时用得别名，并不会产出真正的类型
    //class就是定义类  new xxx


    //条件类型
    //在定义泛型的时候能够添加进逻辑分支，以后泛型更加灵活
    interface Fish {
        name1:string
    }
    interface Watch {
        name2:string
    }
    interface Bird{
        name3:string
    }
    interface Sky{
        name4:string
    }
    type Condition<T> = T extends Fish ? Watch : Sky    //只要里面的属性有，就能继承
    let condition: Condition<Fish> = {
        name2:'water'
    }

    //条件类型的分发
    type Condition1<T> = T extends Fish ? Watch : Sky;
    //鱼或者鸟是一个类型
    let c1:Condition1<Fish | Bird> = {
        name2:'majiong'
    }
    //等于下面的c3
    let c3 : Watch | Sky = {name2:'majiong'}
    let c2:Condition1<Fish | Bird> = {
        name4:'majiong'
    }
    let c4: Watch | Sky = {name4:'majiong'}
}

namespace c {
    type E = Exclude<string | number, string>  //从前者中排除掉后者
    let e:E = 10
    type E2 = Extract<string | number | null, string>   //从前者中挑选
    let es:E2 = 'hello'
    type E3 = NonNullable<string | number | undefined | null>   //把undifined 和 null的干掉，也就是把为空的干掉
    let e3:E3 = 'hello'
    let e4:E3 = 10
    //redux 回要用的ReturnType
    function getUserInfo() {
        return {name:'majiong', age:10}
    }
    type UserInfo = ReturnType<typeof getUserInfo>
    let user:UserInfo = {name:'majiong', age:10}

    //instanceType 获取构造函数的实例类型
    class Person5 {
        name:string;
        constructor(name:string){
            this.name = name
        }
    }
    type P = InstanceType<typeof Person5>
    let p:P = new Person5('majiong') 
}