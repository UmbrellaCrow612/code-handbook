## Heap

A heap is a complete binary tree-based data structure that satisfies the heap property. It is commonly used to implement priority queues and efficiently extract the minimum or maximum element from a set.

### Complete Binary Tree

A complete binary tree is a binary tree in which all levels, except possibly the last, are fully filled, and the last level is filled from left to right. This property allows us to represent a heap using an array, as the elements can be stored in a contiguous manner.

### Heap Property

A heap can be either a min-heap or a max-heap. The heap property defines the relationship between parent and child nodes:

- In a min-heap, for any given node `i`, the value of `i` is less than or equal to the values of its children.
- In a max-heap, for any given node `i`, the value of `i` is greater than or equal to the values of its children.

### Heap Operations

The two primary operations performed on a heap are:

1. **Insertion**: Inserting an element into a heap while maintaining the heap property. The new element is added as the last element in the tree and then sifted up (percolated up) by swapping it with its parent until it satisfies the heap property. This operation has a time complexity of O(log n), where n is the number of elements in the heap.
2. **Extraction**: Removing the minimum (in a min-heap) or maximum (in a max-heap) element from the heap. The element at the root is removed, and the last element in the tree is moved to the root position. Then, the element is sifted down (percolated down) by comparing it with its children and swapping with the smaller (in a min-heap) or larger (in a max-heap) child until it satisfies the heap property. This operation also has a time complexity of O(log n).

### Heap Applications

Heaps have various applications, including:

- **Priority Queues**: A priority queue is a data structure that allows efficient retrieval of the minimum or maximum element based on its priority. A heap is commonly used to implement a priority queue, as the root of the heap always holds the minimum or maximum element.
- **Heap Sort**: Heap sort is an efficient in-place sorting

algorithm that uses the heap data structure to sort an array of elements. It first builds a max-heap from the unsorted array and repeatedly extracts the maximum element to sort the array.

- **Graph Algorithms**: Heaps are used in graph algorithms like Dijkstra's algorithm for finding the shortest path and Prim's algorithm for constructing the minimum spanning tree. The efficient extraction of the minimum element from the heap is crucial in these algorithms.
- **Job Scheduling**: Heaps can be used for scheduling jobs based on their priority or execution time, ensuring that the highest priority or shortest job is executed first.

### Summary

Heaps are binary tree-based data structures that satisfy the heap property. They provide efficient insertion and extraction operations, making them suitable for implementing priority queues and solving various algorithmic problems. Understanding heaps allows you to efficiently manage priority-based operations and optimize algorithms in areas such as sorting, graph algorithms, and job scheduling.
