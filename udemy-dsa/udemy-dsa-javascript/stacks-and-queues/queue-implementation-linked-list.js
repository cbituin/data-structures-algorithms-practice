class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    };
};

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    };

    peek() {
        return this;
    };

    enqueue(value) {
        return this;
    }

    dequeue() {
        return this;
    }

}

const myQueue = new Queue();
myQueue.enqueue('google')
myQueue.enqueue('udemy')
myQueue.enqueue('discord')
console.log(myQueue.peek())
