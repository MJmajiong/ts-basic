//如何定义类

//同样的类名怎么办，那就用命名空间的隔离，比如这里的a 和 b
namespace a {
  class Person {
    //两种初始化方式 第一种name:string = 'majiong'  第二种在constructor里面进行this.age = 10
    name: string = "majiong";
    age: number;    
    height:number;  //这样子不报错的原因是strictNullChecks设置成了false  或者  strictPropertyInitialization设置成false也是可以的
    constructor() {
      this.age = 10;
    }
  }
  let p1 = new Person();
  console.log(p1.name);
  console.log(p1.age);
}

//存取器 gtter setter
namespace b {
  class Person {
    //两种初始化方式 第一种name:string = 'majiong'  第二种在constructor里面进行this.age = 10
    myname: string;
    age: number;
    constructor(name:string) {
      this.myname = name;
    }
    get name() {
        return this.myname
    }
    set name(newVal) {
        this.myname = newVal.toUpperCase()
    }
  }
  let p = new Person('majiog')
  console.log(p.name)
  p.name = 'majiong'
  console.log(p.name)
}

namespace c {
    
    class Person {
        // name: string;
        //为了让实例化候的对象能通过p.name来访问，可以现在外面定义name:string,然后构造函数里面this.name = name或者直接在参数的前面加上public
        //public 公开的，公共的
        constructor(public readonly name:string) {
        //   this.name = name;
        }
        
      }
      let p = new Person('majiong')
      p.name;
    //   p.name = 'jiagou'   //如果参数前面加了readonlu，那么就是只读的，不可赋值的
}

//继承
// 子类继承父类后，子类的实例上就拥有与了父类种的属性和方法
// 访问修饰符 public protected private
// public 自己的子类和其他类都可以访问
// protected 受保护的  自己和自己的子类能访问，其他类不能访问(比如在外面实例化的对象，就没法访问，看下面的age)
// private 私有的  只能自己访问，自己的子类不能访问，其他的更不行了

namespace d {
    class Person {
        public name:string;
        protected age:number;
        private amount:number;
        constructor(name:string, age:number) {
            this.name = name
            this.age = age
            this.amount = 100
        }
        getName() {
            return this.name
        }
        setName(newName:string){
            this.name = newName
        }
    }
    class Student extends Person {
        static type = 'student'
        stuNumber:number;
        constructor(name:string, age:number, stuNumber:number){
            super(name, age)
            this.stuNumber = stuNumber
        }
        static getType() {
            return Student.type
        }
        getStuNumber() {
            return this.name + this.age +  this.stuNumber
        }
        setStuNumber(stuNumber:number){
            this.stuNumber = stuNumber
        }
    }

    let s = new Student('majiong', 10, 1)
    console.log(s.name)
    // console.log(s.age)   //不能获取到，因为是protected
    console.log(Student.type)
    console.log(Student.getType())
}


