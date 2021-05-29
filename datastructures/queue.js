class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first.value;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (this.length == 0) {
            this.first = this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (this.length == 0) {
            return "Queue is empty";
        }
        let topNode = this.first;
        if (this.first == this.last) {
            this.first = this.last = null;
            this.length--;
            return this;
        }
        this.first = this.first.next;
        topNode.next = null;
        this.length--;
        return this;
    }
    //isEmpty;
}

const myQueue = new Queue();
console.log(myQueue.enqueue('Google'));
console.log(myQueue.enqueue('Amazon'));
console.log(myQueue.enqueue('Netflix'));

console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());


  //Joy
  //Matt
  //Pavel
  //Samir

