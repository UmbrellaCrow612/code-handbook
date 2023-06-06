# Queues

## Introduction

A queue is a widely used data structure that follows the First-In-First-Out (FIFO) principle. It represents a collection of elements where the first element added is the first one to be removed. Think of it as a line of people waiting for a bus, where the person who arrives first is the first one to board.

## Types Of Queues

There are two common implementations of queues:

1. **Array-based Queue**
   - In an array-based queue, a fixed-size array is used to store the elements. Two variables, `front` and `rear`, keep track of the indices of the frontmost and rearmost elements, respectively.
   - Diagram:

![queue_data_structures](/queue_data_structures.png)

2. **Linked List-based Queue**
   - In a linked list-based queue, a linked list data structure is used, where each node contains an element and a reference to the next node. The front and rear references point to the respective nodes.
   - Diagram:

![](/linked_list_queue.webp)

## Basic Operations

The following operations can be performed on a queue:

- **Enqueue**: Adding an element to the rear (end) of the queue.
- **Dequeue**: Removing the frontmost (first) element from the queue.
- **Peek**: Inspecting the frontmost element without removing it.
- **IsEmpty**: Checking if the queue is empty.
- **Size**: Determining the number of elements in the queue.

## Implementation

### Array-based Queue

To implement an array-based queue:

1. Create a fixed-size array to store the elements.
2. Initialize `front` and `rear` indices to -1.
3. Implement the operations:
   - **Enqueue**: Increment the `rear` index, store the element, and adjust the index if it exceeds the array size or wraps around.
   - **Dequeue**: Retrieve the element at the `front` index, increment `front`, and return the element. Adjust the indices based on the implementation approach.
   - **Peek**: Return the element at the `front` index without modifying the queue.
   - **IsEmpty**: Check if `front` is greater than `rear`, indicating an empty queue.
   - **Size**: Calculate the size of the queue using `rear - front + 1` if the indices are non-negative, or `rear - front + 1 + arraySize` if the indices wrap around.

```python
class ArrayQueue:
    def __init__(self):
        self.queue = []
        self.front = -1
        self.rear = -1

    def enqueue(self, item):
        self.rear += 1
        self.queue.append(item)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        self.front += 1
        return self.queue[self.front]

    def peek(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.queue[self.front + 1]

    def is_empty(self):
        return self.front == self.rear

    def size(self):
        return self.rear - self.front
```

### Linked List-based Queue

To implement a linked list-based queue:

1. Create a linked list data structure where each node contains an element and a reference to the next node.
2. Maintain references to the frontmost and rearmost nodes.
3. Implement the operations:
   - **Enqueue**: Create a new node, set its value to the element, make it the new rearmost node, and adjust the references accordingly.
   - **Dequeue**: Remove the frontmost node, update the front reference, and return the element.
   - **Peek**: Return the value of the frontmost node without modifying the queue.
   - **IsEmpty**: Check if the front reference is null, indicating an empty queue.
   - **Size**: Traverse the linked list, counting the number of nodes.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedListQueue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, item):
        new_node = Node(item)
        if self.is_empty():
            self.front = new_node
            self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        item = self.front.value
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return item

    def peek(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.front.value

    def is_empty(self):
        return self.front is None

    def size(self):
        count = 0
        current = self.front
        while current:
            count += 1
            current = current.next
        return count
```

## Usage

Queues are commonly used in various algorithms and programming scenarios, including:

- **Breadth-First Search (BFS)**: Queues are essential in BFS algorithms for exploring nodes in a level-by-level manner.
- **Job Scheduling**: Queues can manage a list of jobs to be executed in a specific order.
- **Buffering**: Queues are used to buffer data between processes or entities.
- **Printing and Spooling**: Queues can manage print jobs or spool data for processing.

## Advantages

- Queues provide an efficient way to manage elements in a specific order.
- They are suitable for handling data in a sequential manner.
- Queues are easy to implement and understand.
- They have a predictable behavior that follows the FIFO principle.

## Disadvantages

- Queues have a fixed capacity in the array-based implementation, which can lead to overflow or underflow if not handled properly.
- Array-based queues may require shifting elements when the array becomes full or implementing a circular array approach.
- Linked list-based queues use additional memory for node references.

## Time and Space Complexity

- Enqueue, dequeue, peek, isEmpty, and size operations in both array-based and linked list-based queues have a time complexity of O(1).
- The space complexity of both implementations is O(n), where n is the number of elements in the queue.

## Use Cases

- Queues are suitable for scenarios that require handling elements in the order of their arrival.
- They are used in various algorithms like BFS, job scheduling, buffering, and printing/spooling.

## Comparison with Other Data Structures

- Queues are similar to stacks in terms of the underlying principle (FIFO vs. LIFO), but their behavior and use cases differ.
- Queues are distinct from arrays and linked lists, which are general-purpose data structures.
- Priority queues prioritize elements based on their associated priority, unlike regular queues that follow the FIFO principle.

## Summary

Queues are a fundamental data structure that follows the First-In-First-Out (FIFO) principle. They provide an efficient way to manage elements in a specific order and are widely used in various algorithms and programming scenarios. Understanding queues and their operations allows you to handle data in a sequential manner and solve a wide range of problems effectively.
