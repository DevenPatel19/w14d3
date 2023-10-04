/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode {
    // TreeNode , node
    constructor(data) {
        this.data = data;
        this.left = null; // a BSTNode with a smaller value
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        // turning the newVal into a node --> newNode
        const newNode = new BSTNode(newVal);
        // start of the arrow is at the root
        let current = this.root;
        // empty tree case
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        while (true) {
            // checking if the newVal is less than the data at the current node
            if (newVal < current.data) {
                // Check to see if there is a node to the left
                if (!current.left) {
                    //assign to the left
                    current.left = newNode;
                    return this;
                }
                // move to the left if it exists
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {}

    // HELPER METHOD
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
                `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
// oneNodeTree.root = new BSTNode(10);
console.log("======== Empty Tree ========");
emptyTree.insert(1);
// emptyTree.print();
console.log("======== One Node Tree ========");
oneNodeTree.insert(10);
// oneNodeTree.print()

/* twoLevelTree
		  root
		  10
		/   \
	  5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.insert(10);
twoLevelTree.insert(5);
twoLevelTree.insert(15);
console.log("======== Two Level Tree ========");
// twoLevelTree.insert(1);
// twoLevelTree.insert(7);
twoLevelTree.print();

/* threeLevelTree 
		  root
		  10
		/   \
	  5     15
	/ \    / \
  2   8  13  20
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree
    .insert(10)
    .insert(5)
    .insert(2)
    .insert(8)
    .insert(15)
    .insert(20)
    .insert(13);

console.log("======== Three Level Tree ========");
threeLevelTree.print();
