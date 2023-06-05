# Linked List

## Introduction

A linked list is a linear data structure consisting of nodes, where each node contains a data element and a reference (or link) to the next node in the sequence. Unlike arrays, linked lists do not require contiguous memory allocation, which allows for efficient insertion and deletion of elements at any position within the list.

## Node

A node is a fundamental building block of a linked list. It contains two components:

- Data: The actual value or information stored in the node.
- Next: A reference to the next node in the list.

## Types of Linked Lists

1. **Singly Linked List**: In a singly linked list, each node has a reference to the next node, forming a unidirectional chain. The last node points to null to indicate the end of the list.

   ![singly_linked_list_diagram](/singly_linked_list_diagram.png)

2. **Doubly Linked List**: In a doubly linked list, each node has references to both the next and previous nodes, forming a bidirectional chain. This allows for traversal in both directions.

   ![doubly_linked_list_diagram](/doubly_linked_list_diagram.png)

3. **Circular Linked List**: In a circular linked list, the last node's reference points back to the first node, creating a circular structure. This enables continuous traversal without a clear beginning or end.

   ![circular_linked_list_diagram](/circular_linked_list_diagram.png)

## Basic Operations

1. **Insertion**: Inserting a new node into a linked list involves modifying the references of existing nodes. There are three common insertion scenarios:

   - **Insertion at the Beginning**: Create a new node, set its next reference to the current first node, and update the head reference to the new node.

   - **Insertion at the End**: Traverse the list until reaching the last node, create a new node, and set the next reference of the last node to the new node.

   - **Insertion at a Specific Position**: Traverse the list to the desired position, create a new node, and update the references of the surrounding nodes.

2. **Deletion**: Deleting a node from a linked list involves updating the references of the previous and next nodes.

   - **Deletion at the Beginning**: Update the head reference to the second node.

   - **Deletion at the End**: Traverse the list to the second-to-last node, and set its next reference to null.

   - **Deletion at a Specific Position**: Traverse the list to the desired position, and update the references of the surrounding nodes.

3. **Traversal**: Linked lists can be traversed from the beginning to the end by following the next references of each node until reaching the end of the list.

## Implementation

```python
# Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Linked List class
class LinkedList:
    def __init__(self):
        self.head = None

    # Insertion at the beginning of the list
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Insertion at the end of the list
    def insert_at_end(self, data):
        new_node = Node(data)

        # If the list is empty, make the new node the head
        if self.head is None:
            self.head = new_node
            return

        current = self.head
        while current.next:
            current = current.next

        current.next = new_node

    # Insertion at a specific position
    def insert_at_position(self, data, position):
        new_node = Node(data)

        # If the list is empty or position is 0, insert at the beginning
        if self.head is None or position == 0:
            self.insert_at_beginning(data)
            return

        current = self.head
        prev = None
        count = 0

        while current and count < position:
            prev = current
            current = current.next
            count += 1

        if current is None:
            # If the position exceeds the length of the list, insert at the end
            prev.next = new_node
        else:
            # Insert at the specified position
            new_node.next = current
            prev.next = new_node

    # Deletion of a node with given data
    def delete_node(self, data):
        if self.head is None:
            return

        # If the node to be deleted is the head node
        if self.head.data == data:
            self.head = self.head.next
            return

        current = self.head
        prev = None

        while current and current.data != data:
            prev = current
            current = current.next

        if current is None:
            # Node not found
            return

        prev.next = current.next

    # Traversal of the linked list
    def traverse(self):
        current = self.head

        while current:
            print(current.data, end=" ")
            current = current.next

        print()
```

## Usage

```python
# Creating a linked list
linked_list = LinkedList()

# Insertion at the beginning
linked_list.insert_at_beginning(3)
linked_list.insert_at_beginning(2)
linked_list.insert_at_beginning(1)

# Insertion at the end
linked_list.insert_at_end(4)
linked_list.insert_at_end(5)

# Insertion at a specific position
linked_list.insert_at_position(7, 2)

# Deletion of a node
linked_list.delete_node(4)

# Traversal
linked_list.traverse()
```

## Advantages

- Dynamic Size: Linked lists can grow or shrink dynamically, unlike fixed-size arrays.
- Efficient Insertion/Deletion: Inserting or deleting elements within a linked list is efficient, especially compared to arrays where shifting elements may be required.

## Disadvantages

- Sequential Access: Random access is not efficient in linked lists. To access an element at a specific position, traversal from the beginning is required.
- Extra Memory: Linked lists require additional memory for storing the next reference in each node.

## Time and Space Complexity

- The time complexity of inserting or deleting a node at the beginning or end of a linked list is O(1) since it only requires updating a few references.
- The time complexity of inserting or deleting a node at a specific position in a linked list is O(n) in the worst case, as it may involve traversing through the list.
- The space complexity of a linked list is O(n) as it requires memory for each

node and its references.

## Use Cases

- Linked lists are often used when the size of the data is not known in advance and needs to grow or shrink dynamically.
- They are useful in scenarios where efficient insertion and deletion of elements at any position is required, such as maintaining a sorted list.

## Comparison with Other Data Structures

- Linked lists vs. Arrays: Linked lists provide dynamic size and efficient insertion/deletion, while arrays offer random access. Arrays are suitable for scenarios where random access is a priority, whereas linked lists are preferred for dynamic data and frequent insertions/deletions.
- Linked lists vs. Dynamic Arrays: Dynamic arrays offer random access and dynamic size, but their insertion/deletion operations are less efficient compared to linked lists. Linked lists are preferable when efficient insertions/deletions are crucial, even though random access is not required.

## Summary

A linked list is a linear data structure consisting of nodes, each containing a data element and a reference to the next node. There are three types of linked lists: singly linked lists, doubly linked lists, and circular linked lists. Singly linked lists have a unidirectional chain, while doubly linked lists have references to both the next and previous nodes, enabling bidirectional traversal. Circular linked lists form a loop with the last node's reference pointing back to the first node.
