# Heap

## Introduction

A heap is a data structure that is based on a complete binary tree and satisfies the heap property. It is commonly used to implement priority queues, where elements can be efficiently extracted based on their priority.

Types of Heap:
There are two types of heaps: min-heap and max-heap. In a min-heap, the value of each node is less than or equal to the values of its children, while in a max-heap, the value of each node is greater than or equal to the values of its children. This property allows us to perform efficient operations on the heap.

![Min-Heap and Max-Heap Diagram](/min_heap.jpeg)

## Basic Operations

1. **Insertion**: Adding a new element to the heap while maintaining the heap property. The new element is inserted at the next available position in the tree (usually the last level) and then percolated up by swapping it with its parent until the heap property is satisfied. This operation has a time complexity of O(log n), where n is the number of elements in the heap.
2. **Extraction**: Removing the minimum (in a min-heap) or maximum (in a max-heap) element from the heap. The element at the root is extracted, and the last element in the tree is moved to the root position. Then, the element is percolated down by comparing it with its children and swapping with the smaller (in a min-heap) or larger (in a max-heap) child until the heap property is satisfied. This operation also has a time complexity of O(log n).

## Implementation

A heap can be implemented using an array, as the complete binary tree property allows for a compact representation. The elements are stored in the array in a specific order that preserves the tree structure.

```python
import heapq

# Create an empty heap
heap = []

# Insert elements into the heap
heapq.heappush(heap, 4)
heapq.heappush(heap, 2)
heapq.heappush(heap, 9)
heapq.heappush(heap, 1)
heapq.heappush(heap, 7)

# Extract the minimum element
min_element = heapq.heappop(heap)
print("Minimum element:", min_element)

# Print the remaining heap
print("Heap:", heap)
```

## Usage

Heaps are commonly used to implement priority queues, where elements with higher priority can be extracted first. They are also used in algorithms such as Dijkstra's algorithm for finding the shortest path and Prim's algorithm for constructing minimum spanning trees. Additionally, heaps are used in sorting algorithms like heap sort and in job scheduling based on priority or execution time.

### Priority Queue

```python
import heapq

# Create a priority queue
priority_queue = []

# Add elements to the priority queue
heapq.heappush(priority_queue, (3, "Task 1"))
heapq.heappush(priority_queue, (1, "Task 2"))
heapq.heappush(priority_queue, (2, "Task 3"))

# Process the tasks based on priority
while priority_queue:
    priority, task = heapq.heappop(priority_queue)
    print("Processing Task:", task)
```

### Heap Sort

```python
import heapq

def heap_sort(array):
    # Create a heap from the array
    heapq.heapify(array)

    sorted_array = []
    while array:
        # Extract the minimum element from the heap
        min_element = heapq.heappop(array)
        sorted_array.append(min_element)

    return sorted_array

# Example usage
arr = [4, 2, 9, 1, 7]
sorted_arr = heap_sort(arr)
print("Sorted Array:", sorted_arr)
```

### Graph Algorithms

```python
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0

    priority_queue = [(0, start)]

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances

# Example usage
graph = {
    'A': {'B': 5, 'C': 2},
    'B': {'D': 3},
    'C': {'B': 1, 'D': 6},
    'D': {'E': 4},
    'E': {}
}

start_node = 'A'
distances = dijkstra(graph, start_node)
print("Shortest distances from", start_node + ":", distances)
```

## Advantages

- Efficient extraction of the minimum or maximum element.
- Compact representation using an array.
- Suitable for solving problems involving priority-based operations.
- Useful in various algorithmic applications, such as graph algorithms and sorting.

## Disadvantages

- Insertion and extraction operations have a time complexity of O(log n), which may not be the most efficient for some scenarios.
- Additional memory overhead for storing the heap structure.

## Time and Space Complexity

- Insertion and extraction operations have a time complexity of O(log n).
- Building a heap from an array takes O(n) time complexity.
- The space complexity of a heap is O(n), where n is the number of elements in the heap.

## Use Cases

- Priority queue implementations.
- Sorting algorithms like heap sort.
- Graph algorithms such as Dijkstra's algorithm and Prim's algorithm.
- Job scheduling based on priority or execution time.

## Comparison with Other Data Structures

- Arrays: Heaps provide efficient extraction of the minimum or maximum element, whereas arrays require additional operations to maintain sorted order.
- Linked Lists: Heaps offer faster insertion and extraction operations compared to linked lists.
- Binary Search Trees: Heaps have a more restricted structure but provide faster extraction of the minimum or maximum element compared to binary search trees.

## Summary

In summary, a heap is a binary tree-based data structure that satisfies the heap property. It provides efficient insertion and extraction operations, making it suitable for implementing priority queues and solving various algorithmic problems. Understanding heaps allows for efficient management of priority-based operations and optimization of algorithms in areas such as sorting, graph algorithms, and job scheduling.
