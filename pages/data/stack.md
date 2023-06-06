# Stack

## Introduction

A stack is a fundamental data structure in computer science that follows the Last-In-First-Out (LIFO) principle. It represents a collection of elements with two main operations: push and pop. The push operation adds an element to the top of the stack, and the pop operation removes the topmost element from the stack.

## Types of the Stacks with Diagrams

There are different types of stacks that have variations in their implementations and specific use cases. Here are three commonly used types of stacks:

1. **Fixed-Size Stack**: A fixed-size stack has a predetermined maximum capacity. Once the stack is full, it cannot accommodate additional elements. Here's a diagram representing a fixed-size stack:

   ```
   +---+
   | 5 |
   +---+
   | 3 |
   +---+
   | 8 |
   +---+
   | 2 |
   +---+
   ```

2. **Dynamic Stack**: A dynamic stack can dynamically resize itself to accommodate more elements when needed. It starts with a certain initial capacity and grows as elements are added. Here's a diagram representing a dynamic stack:

   ```
   +---+
   | 7 |
   +---+
   | 4 |
   +---+
   | 9 |
   +---+
   | 1 |
   +---+
   | 6 |
   +---+
   ```

3. **Linked Stack**: A linked stack is implemented using a linked list structure. Each element in the stack is represented by a node, and the nodes are linked together. Here's a diagram representing a linked stack:

   ```
   +---+    +---+    +---+    +---+
   | 5 | -> | 3 | -> | 8 | -> | 2 |
   +---+    +---+    +---+    +---+
   ```

## Basic Operations

A stack typically supports the following operations:

1. **Push**: Adds an element to the top of the stack.
2. **Pop**: Removes the topmost element from the stack.
3. **Peek**: Retrieves the topmost element from the stack without removing it.
4. **IsEmpty**: Checks if the stack is empty.
5. **Size**: Returns the number of elements currently in the stack.

## Implementation

A stack can be implemented using various data structures, such as an array or a linked list. Here, we'll use a dynamic array-based implementation for simplicity.

```python
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            raise IndexError("Stack is empty.")

    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            raise IndexError("Stack is empty.")

    def is_empty(self):
        return len(self.stack) == 0

    def size(self):
        return len(self.stack)
```

## Usage

Let's see how to use the stack class we just created:

```python
# Create a new stack
stack = Stack()

# Push elements onto the stack
stack.push(5)
stack.push(10)
stack.push(15)

# Get the size of the stack
print("Size:", stack.size())  # Output: Size: 3

# Peek at the topmost element
print("Top element:", stack.peek())  # Output: Top element: 15

# Pop elements from the stack
item = stack.pop()
print("Popped item:", item)  # Output: Popped item: 15

# Check if the stack

 is empty
print("Is empty?", stack.is_empty())  # Output: Is empty? False
```

## Advantages

- Simple and intuitive data structure to understand and implement.
- Provides constant-time operations for push and pop.
- Efficient for managing function calls and maintaining program flow.
- Well-suited for solving problems that require a LIFO ordering, such as parentheses matching.

## Disadvantages

- Limited accessibility since only the topmost element is directly accessible.
- Fixed size limitation when using an array-based implementation.
- Dynamic memory allocation and deallocation may lead to performance overhead.
- Not suitable for scenarios that require efficient random access or searching.

## Time and Space Complexity

Stack operations generally have a time complexity of O(1) since push and pop operations only involve adding or removing elements from the top of the stack. The space complexity of a stack is O(n), where n is the number of elements stored in the stack.

## Use Cases

Stacks find application in various programming scenarios, including:

- Function Call Stack: Tracks the execution context of function calls, allowing for proper program flow.
- Expression Evaluation: Facilitates the evaluation of arithmetic expressions by maintaining the order of operations and handling parentheses correctly.
- Browser History: Enables users to navigate backward through their browsing history by utilizing a stack to keep track of visited web pages.
- Undo/Redo Operations: Supports undo and redo functionality in applications by utilizing stacks to revert or redo changes.

## Comparison with Other Data Structures

When comparing stacks with other data structures, it's important to consider their specific characteristics and use cases. Stacks excel in scenarios that require LIFO ordering and efficient push and pop operations. However, they may not be suitable for situations that demand random access, searching, or efficient insertion/deletion at arbitrary positions. It's essential to evaluate the requirements of a given problem to determine whether a stack or an alternative data structure would be more appropriate.

## Summary

In summary, a stack is a Last-In-First-Out (LIFO) data structure that supports push, pop, peek, is_empty, and size operations. There are different types of stacks, including fixed-size stacks, dynamic stacks, and linked stacks. Stacks have various applications in programming, such as managing function calls, evaluating expressions, and implementing undo/redo functionality. They offer advantages like simplicity, constant-time operations, and suitability for LIFO ordering. However, they also have limitations, such as limited accessibility and fixed size constraints. Understanding stacks and their operations forms the foundation for more advanced data structures and algorithms.
