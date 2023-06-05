## Binary Search Tree (BST)

A binary search tree (BST) is a binary tree-based data structure that follows a specific property: for every node `n`, all nodes in its left subtree have values less than `n`, and all nodes in its right subtree have values greater than `n`. This property allows for efficient searching, insertion, and deletion operations.

### Key Features

1. **Binary Tree Structure**: A binary search tree is a binary tree, where each node can have at most two child nodes, referred to as the left child and the right child.

2. **Ordering Property**: The ordering property of a BST ensures that the values of nodes in the left subtree are less than the value of the current node, and the values in the right subtree are greater. This property applies recursively to all nodes in the BST.

3. **Unique Key Values**: In a BST, each node has a unique key value. Duplicate keys are not allowed.

### BST Operations

1. **Search**: Searching in a BST is performed by comparing the target value with the value of the current node and recursively traversing left or right based on the comparison until the target value is found or a null subtree is reached.

2. **Insertion**: Inserting a new node into a BST involves comparing the key value of the new node with the keys of existing nodes and recursively traversing left or right until finding an appropriate position. The new node is then added as a leaf node.

3. **Deletion**: Deleting a node from a BST requires handling three cases:
   - If the node to be deleted has no children, it is simply removed from the tree.
   - If the node has one child, the child is linked to the parent of the node to be deleted.
   - If the node has two children, it can be replaced by either its in-order predecessor (maximum value in its left subtree) or its in-order successor (minimum value in its right subtree).

### BST Advantages and Applications

1. **Efficient Searching**: The BST property allows for efficient searching operations, as the search space is reduced by half at each step. On

average, the time complexity for search, insertion, and deletion is O(log n), making BSTs suitable for large datasets.

2. **Ordered Data Storage**: BSTs are useful for storing data in a sorted order, making it easier to perform range queries or traverse the data in ascending or descending order.

3. **Efficient Insertion and Deletion**: BSTs support efficient insertion and deletion operations while maintaining the ordering property. Although BSTs can become unbalanced, leading to worst-case time complexity of O(n), balanced BSTs like AVL trees or Red-Black trees can be used to maintain logarithmic time complexity for all operations.

4. **Applications**: BSTs find applications in various areas, including database systems, symbol tables in compilers, interval trees for efficient range queries, and self-balancing BSTs used in indexing and searching algorithms.

### Summary

Binary search trees (BSTs) provide an efficient way to store and manage ordered data. With their key features, such as the ordering property and unique key values, BSTs enable efficient searching, insertion, and deletion operations. The logarithmic time complexity of BST operations makes them suitable for large datasets, and self-balancing BST variants ensure performance guarantees. Understanding BSTs is crucial for designing efficient algorithms and data structures that involve sorted data storage, retrieval, and manipulation in various domains of computer science.
