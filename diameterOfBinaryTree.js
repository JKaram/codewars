// Given a binary tree, you need to compute the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
// This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    

// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}

// create nodes with values
const one = new TreeNode('1');
const two = new TreeNode('2');
const three = new TreeNode('3');
const four = new TreeNode('4');
const five = new TreeNode('5');

// associate root with is descendents
one.descendents.push(two, three);
two.descendents.push(four, five);

var diameterOfBinaryTree = function (root) {

};

console.log(diameterOfBinaryTree());
