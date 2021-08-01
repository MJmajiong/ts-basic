"use strict";
var zoo;
(function (zoo) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        return Dog;
    }());
})(zoo || (zoo = {}));
var home;
(function (home) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        return Dog;
    }());
    home.Dog = Dog;
})(home || (home = {}));
var dog = new home.Dog();
// let zooDog = new zoo.Dog()    //必须从里面到处的才能新建实例，像上面的dog
