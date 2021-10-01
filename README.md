amd cmd require.js  sea.js
node commonjs  commonjs2
es module
umd  兼容以上三种

 /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
 启用模块的转译在commonjs 和es模块中，默认包含allowSyntheticDefaultImports（具体的语法看src下面的common.ts和es6.ts）

## 编写声明文件

> 手动编写  自动生成

- 自动生成

工程是使用ts开发的，发布（编译）之后，是js文件，发布的是js文件

如果发布的文件，需要其他开发者使用，可以使用声明文件，来描述发布结果中的类型

配置```tsconfig.json```中的```declaration:true```即可

 ```
 // tsconfig.json
declaration:true,   编译后自动生成声明文件
sourceMap:true       编译后自动生成sourcemap文件
 ```

- 手动编写

1. 对已有的库，他是使用js书写而成的，并且更改该库的代码为ts成本较高，可以手动编写声明文件，比如vue2

2. 对一些第三方库，他们使用js书写而成，并且这些第三方库没有提供声明文件，可以手动编写声明文件


**全局声明**

声明一些全局的对象，属性，变量

> namespace: 表示命名空间，可以将其认为是一个对象


**模块声明**

比如lodash

声明一个lodash.d.ts文件
在引入的import _ from "lodash"中就不会报错了

但是不会报错的前提是编译后，如果在开发阶段（npm run dev）的时候，需要配置
```
typeRoots:["./node_modules/@types", "./src/types"]
```

**三斜线指令**

有了es6后很少用这个了

在一个声明文件中，包含另一个声明文件

比如我一个声明文件不在指定的目录中typeRoots:["./node_modules/@types", "./src/types"], 那么我可以通过一个在指定目录中的声明文件告诉程序，我这个声明文件在那里，编译的时候去对应的位置读取就行了

```
/// <reference path="../../index.d.ts" />
```

## 发布

1. 当前工程ts开发

编译完成后，将编译结果所在文件夹直接发布到npm上即可

npm run build 
把dist发布到npm上


2. 为其他第三方库开发的声明文件

发布到@type/**中

1. 进入github开源项目：https://github.com/DefinitelyTyped/DefinitelyTyped

2. fork到自己的开源库中

3. 从自己的开源库中克隆到本地

4. 本地新建分支， 在新分支中声明文件的开发

   在types目录中新建文件夹，在新的文件夹中开发声明文件

5. push分支到你的开源库中

6. 到官方的开源库中，提交pull request

7. 等待官方管理员审核（1天）

审核通过后，会将你的分支代码合并到主分支，然后发布到npm

之后，就可以通过命令````npm install @types/你发布的库名```