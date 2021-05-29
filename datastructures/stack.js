class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        if (this.top == null) {
            return "Stack is empty";
        }
        console.log("Top Node: ", this.top.value);
        return this.top;
    }
    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        console.log("Node added: ", this.top.value);
        return this.top;
    }
    pop() {
        if (this.top != null) {
            let topNode = this.top;
            this.top = topNode.next;
            topNode.next = null;
            this.length--;
            console.log("Node removed: ", topNode.value);
            return topNode;
        }
        return "Stack is empty!";
    }
    //isEmpty
}

const myStack = new Stack();

myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');

myStack.pop();
myStack.peek();


  //Discord
  //Udemy
  //google
