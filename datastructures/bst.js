class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            let temp = this.root;
            while (temp != null) {
                if (value >= temp.value) {
                    if (temp.right === null) {
                        temp.right = newNode;
                        break;
                    }
                    temp = temp.right;
                } else if (value < temp.value) {
                    if (temp.left === null) {
                        temp.left = newNode;
                        break;
                    }
                    temp = temp.left;
                }
            }
        }
        return this.root;
    }

    lookup(value) {
        if (this.root === null) {
            return "Tree is empty!";
        }
        else {
            let temp = this.root;
            while (temp != null) {
                if (value === temp.value) {
                    return temp;
                }
                else if (value > temp.value) {
                    temp = temp.right;
                } else if (value < temp.value) {
                    temp = temp.left;
                }
            }
            return "Not found!";
        }
    }
    // remove
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));
console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(1));
console.log(tree.lookup(4));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}