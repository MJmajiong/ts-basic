//如何定义一个复杂对象
//jquery
declare namespace jquery {
    function ajax(url:string, config:any):void
    // let name : string = 'jquery'   //声明文件里不能赋值
    let name:string;
    namespace fn {
        function extend(object:any):void
    }
}