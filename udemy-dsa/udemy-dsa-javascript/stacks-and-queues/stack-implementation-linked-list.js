class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    };
};

class Stack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    };

    peek() {
        return this.top;
    };

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const topNode = this.top;
            this.top = newNode;
            this.top.next = topNode;
        }
        this.length++
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        // const topNode = this.top
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next
        this.length--
        return this;
    }

    isEmpty() {
        return this.length >= 0;
    }
}

const myStack = new Stack();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
console.log(myStack.pop())
