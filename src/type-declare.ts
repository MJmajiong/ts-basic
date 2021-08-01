//声明文件可以让我们不需要可以让我们不需要将js重构为ts，只需要加上声明文件就可以使用系统
//类型声明在编译的时候会被删除，不会影响真正的代码

//声明文件怎么写
//你把他用ts重写一遍
//你给他配上声明文件
//安装第三方声明文件库   //比如我们装了jquery（npm i jquery）,jquery是js写的，所以需要安装上@types/jquery（npm i @type/jquery）这样子写出来的ts文件才不会报错

//@types是一个约定的前缀，所有的第三方声明的类型库都会带有这样的前缀
//javascript中有很多内置对象，他们可以在typescript中被当做声明好了的类型
//内置对象是指根据标准在全局作用域上存在的对象，这里的标准是指ecmascript和其他环境（比如dom）的标准
//这些内置对象的类型声明文件，就包含在typescript和辛苦的类型声明文件中

//types auto installer  这个插件，每次你装了一个包，就会自动下载ts的声明文件


//tsconfig.json
//如果配置了paths，那么在引入包的时候回自动去paths目录里找类型声明文件
//在webpack中，我们可以通过配置alias的形式来为项目里的文件做映射。在tsconfig.json中，我们同样也可以坐路径的映射
//在tsconfig.json中，我们通过compilerOptions里的paths属性来配置路径映射。tsconfig.json

export {}
declare const $:(select:string) => {  //变量
    click():void,
    width(length:number):void
}
//----------------------上面声明了就可以用了，如果把上面的声明文件去掉，下面的两句话就报错了
$('#root').click()
$('#root').width(100)

declare let name:string;     
declare let age:number;
declare function getName():string;     //方法 
declare class Animal{name:string};   //类  
interface Person {                   //声明接口
    name:string
}
type Student = {                     //声明类型
    name:'string'
} | 'string'

declare const enum Seasons {
    Spring,
    Summer,
    Autumn,
    Winter
}

let seasons:Seasons[] = [
    Seasons.Spring,
    Seasons.Summer,
    Seasons.Autumn,
    Seasons.Winter
]

console.log(seasons)

//如何定义一个复杂对象
//jquery

//把他放到专门的xx.d.ts中
// declare namespace jquery {
//     function ajax(url:string, config:any):void
//     // let name : string = 'jquery'   //声明文件里不能赋值
//     let name:string;
//     namespace fn {
//         function extend(object:any):void
//     }
// }

//上面定义了命名空间，下面就可以用了
jquery.ajax('/api/users', {})
jquery.name
jquery.fn.extend({})