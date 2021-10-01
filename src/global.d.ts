// 声明文件，比如我们常用的console.log setTimeout， 如果没有安装@types/node 那么这些语句在编译的时候，是会报错的


// declare namespace console {   // 有了es6后很少用这个了
//     function log(message?:any):void
//     function error(message?:any):void
// }

// declare var console:{
//     log:(message:any) => void,
//     error:(message:any) => void
// }

interface Console {
    log: (message?:any) => void,
    error: (message?:any) => void
}

declare function setTimeout(handler:() => void, milliseconds:number)

declare function setInterval(handler:() => void, milliseconds:number)