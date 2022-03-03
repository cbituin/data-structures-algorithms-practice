class Stack{
    constructor() {
        this.myArray = [];
    }

    peek() {
        return this.myArray[this.myArray.length-1];
    };

    push(value) {
        this.myArray.push(value);
        return this;
    }

    pop() {
        this.myArray.pop();
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
console.log(myStack)
