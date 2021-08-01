namespace zoo {
    class Dog {

    }
}

namespace home{
    export class Dog {

    }
}

let dog = new home.Dog()
// let zooDog = new zoo.Dog()    //必须从里面到处的才能新建实例，像上面的dog
