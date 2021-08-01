//类型保护
//类型保护就是一些表达式，他们在编译的时候就能通过类型信息确保某个作用域内变量的类型
//类型保护就是能够通过关键字判断出分支中的类型

namespace a {
    // typeof类型保护 就是更精确的知道是哪种类型

    function double(input:string | number | boolean) {
        if(typeof input === 'string'){
            input.toLocaleLowerCase()
        }else if(typeof input === 'number'){
            input.toFixed(2)
        }else{
            input
        }
    }
    //instanceof 类型保护
    class Animal {
        public name:string = 'majiong'
        constructor() {
            
        }
    }
    class Bird extends Animal {
        public swing:number = 2
    }
    function getName(a:Animal) {
        if(a instanceof Bird){
            console.log(a.swing)
        }else {
            console.log(a.name)
        }
    }

    //null保护
    function getFirstLetter(s:string | null){
        if(s === null){
            s = ''
        }
        return s.charAt(0)
    }

    function getFirstLetter1(s:string | null){
        function ensure() {
            s = s || ''
        }
        ensure()
        return s.charAt(0)    //如果报错可用s!.chartAr(0)  非空断言
    }

    //链判断运算符 判断a是否为null或者undefined，如果是的话就直接返回null或者undefined，如果不是则返回a.b
    let a = {b:1}
    console.log(a?.b)


    //可辨识的联合类型
    //就是利用联合类型中的共有字段进行类型保护的一种技巧
    //相同字段的不同取值就是可辨识度
    interface wrningbutton {
        class:'warning',     //自变量也可以是个类型
        text1:'修改'
    }
    interface dangerbutton {
        class:'danger',
        text2:'删除'
    }
    type Button = wrningbutton | dangerbutton
    function getButton(button:Button) {
        if(button.class === 'warning'){    //如果没有一个判断  你写button的时候，提示语只有class,因为wrningbutton和dangerbutton共有的属性就是class
            console.log(button.text1)
        }else{
            console.log(button.text2)
        }
    }

    //in 类型保护
    interface Bird {
        swing:number
    }
    interface Dog {
        leg:number
    }
    function getNumber(x:Bird|Dog) {
        if('swing' in x){
            console.log(x.swing)
        }else{
            console.log(x.leg)
        }
    }
}

namespace b{
    //自定义的类型保护    isBird
    //typescript 里的类型保护本质上就是一些类型表达水，他们会在运行时检查类型信息，以确保在某个作用域里的类型是符合预期的
    //要定义一个类型保护，只需要简单的为这个类型保护定义一个函数即可，这个函数的返回值是一个类型谓词
    //类型谓词的语法为parameterName is Type这种形式，其中parameterName必须是当前函数签名里的一个参数名
    interface Bird {
        name1:'Bird'
        legs:number
    }
    interface Dog {
        name2:'Dog'
        legs:number
    }
    function isBird(x:Bird | Dog):x is Bird {
        return x.legs === 2
    }
    function getAnimal(x:Bird | Dog) {
        if(isBird(x)){
            console.log(x.name1)
        }else{
            console.log(x.name2)
        }
    }
    let x:Bird = {name1:'Bird', legs:2}  //{name1:'鸟', legs:2} 这样回报错，因为接口本身是定义类型的，之前的Bird接口写死了name1：’Bird'所以后续的都必须写name1:'Bird'
    getAnimal(x)
}