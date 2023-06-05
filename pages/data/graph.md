# Graphs

## Introduction

A graph is a non-linear data structure that represents a collection of vertices (nodes) connected by edges. It is widely used to model relationships and solve real-world problems efficiently.

## Types of Graphs with Diagrams

1. Directed Acyclic Graph (DAG): A directed graph with no directed cycles. It is often used for representing dependencies and task scheduling.

   Diagram:

   ```
         A --> B
         |     |
         v     v
         C --> D
   ```

2. Tree: A connected, acyclic undirected graph with a single root node and every other node having exactly one parent. Trees represent hierarchical structures.

   Diagram:

   ```
           A
         / | \
        B  C  D
   ```

3. Complete Graph: A graph in which every pair of distinct vertices is connected by an edge. Complete graphs are useful for modeling fully connected networks.

   Diagram:

   ```
           A ----- B
         / | \   / | \
        C  D - E  F - G
   ```

4. Bipartite Graph: A graph in which the vertices can be divided into two disjoint sets, such that every edge connects a vertex from one set to a vertex in the other set. Bipartite graphs are applied in matching problems and network flows.

   Diagram:

   ```
        Set A       Set B
         / | \     / | \
        A1 A2 A3  B1 B2 B3
   ```

5. Weighted Graph: A graph in which each edge has an associated weight or value. Weighted graphs are used in various optimization and pathfinding algorithms.

   Diagram:

   ```
           A
         / | \
        B-3 C-2
         \ |
          D-4
   ```

## Basic Operations on Graphs

1. Adding a Vertex: Adding a new vertex to the graph.
2. Adding an Edge: Establishing a connection between two vertices by adding an edge.
3. Removing a Vertex: Removing a vertex and all its associated edges from the graph.
4. Removing an Edge: Removing the connection between two vertices by removing an edge.
5. Checking Connectivity: Determining if there is a path between two vertices in the graph.
6. Traversing the Graph: Visiting all the vertices and edges of the graph using techniques like Depth-First Search (DFS) or Breadth-First Search (BFS).

## Implementation of Graphs

Graphs can be implemented using two common data structures:

1. Adjacency Matrix: A two-dimensional matrix representing the graph's connectivity using boolean values or weights.

```python
class Graph:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.matrix = [[0] * num_vertices for _ in range(num_vertices)]

    def add_edge(self, src, dest):
        self.matrix[src][dest] = 1
        self.matrix[dest][src] = 1

    def remove_edge(self, src, dest):
        self.matrix[src][dest] = 0
        self.matrix[dest][src] = 0

    def has_edge(self, src, dest):
        return self.matrix[src][dest] == 1

    def get_neighbors(self, vertex):
        neighbors = []
        for i in range(self.num_vertices):
            if self.matrix[vertex][i] == 1:
                neighbors.append(i)
        return neighbors
```

2. Adjacency List: A collection of lists or arrays where each list represents a vertex and contains the adjacent vertices.

```python
class Graph:
    def __init__(self, num_vertices):
        self.num_vertices = num_vertices
        self.adj_list = [[] for _ in range(num_vertices)]

    def add_edge(self, src, dest):
        self.adj_list[src].append(dest)
        self.adj_list[dest].append(src)

    def remove_edge(self, src, dest):
        self.adj_list[src].remove(dest)
        self.adj_list[dest].remove(src)

    def has_edge(self, src, dest):
        return dest in self.adj_list[src]

    def get_neighbors(self, vertex):
        return self.adj_list[vertex]
```

## Usage of Graphs and their Operations

Graphs and their operations have various applications in different domains:

- Social Networks: Analyzing social relationships, suggesting friends, and detecting communities.
- Routing and Network Analysis: Finding shortest paths, optimizing network flows, and identifying bottlenecks.
- Recommendation Systems: Providing personalized recommendations based on user-item interactions.
- Computer Networks: Modeling network topologies, analyzing connectivity, and optimizing data routing.
- Logistics and Supply Chain Optimization: Optimizing transportation routes and minimizing costs.
- Data Clustering: Discovering groups of related data points based on their connections.
- Machine Learning: Utilizing graph-based algorithms for tasks like node classification and link prediction.

### Adding and Removing Edges

```python
# Using Adjacency Matrix Implementation
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
print(g.matrix)  # [[0, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 0], [0, 1, 0, 0]]

g.remove_edge(1, 3)
print(g.matrix)  # [[0, 1, 1, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]]


# Using Adjacency List Implementation
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
print(g.adj_list)  # [[1, 2], [0, 3], [0], [1]]

g.remove_edge(1, 3)
print(g.adj_list)  # [[1, 2], [0], [0], []]
```
### Checking Connectivity

```python
# Using Adjacency Matrix Implementation
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 3)

print(g.has_edge(0, 1))  # True
print(g.has_edge(1, 3))  # False


# Using Adjacency List Implementation
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(1, 2)
g.add_edge(2, 3)

print(g.has_edge(0, 1))  # True
print(g.has_edge(1, 3))  # False
```

### Getting Neighbors of a Vertex 

```python
# Using Adjacency Matrix Implementation
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)

print(g.get_neighbors(0))  # [1, 2]
print(g.get_neighbors(1))  # [0, 3]


# Using Adjacency List Implementation
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)

print(g.get_neighbors(0))  # [1, 2]
print(g.get_neighbors(1))  # [0, 3]
```
## Advantages of Graphs

- Graphs can efficiently represent complex relationships and dependencies.
- They allow for flexible modeling of various real-world problems.
- Graph algorithms provide effective solutions for many computational challenges.

## Disadvantages of Graphs

- Storage and memory requirements can be higher for dense graphs using adjacency matrices.
- Certain graph algorithms can have high time complexity for large graphs.

- Modifying the structure of a graph can be more complex and time-consuming than other data structures.

## Time and Space Complexity

- The time and space complexity of graph operations depend on the chosen implementation and specific algorithms used. Generally, the time complexity ranges from O(1) to O(V + E), where V is the number of vertices and E is the number of edges.

## Use Cases

- Social network analysis, route planning, recommendation systems, logistics optimization, data clustering, and machine learning tasks are some of the common use cases for graphs.

## Comparison with Other Data Structures

- Graphs are different from linear data structures like arrays and linked lists as they represent non-linear relationships between elements.
- Graphs offer more flexibility in modeling complex relationships compared to trees, which have a strict hierarchical structure.
- Graphs can be more memory-intensive than other data structures due to their potentially large number of vertices and edges.

## Summary

Graphs are powerful data structures used to represent relationships and solve a wide range of problems. They come in various types such as directed acyclic graphs, trees, complete graphs, bipartite graphs, and weighted graphs. Graphs can be implemented using adjacency matrices or adjacency lists. They are useful in social networks, routing, recommendation systems, logistics, data clustering, and machine learning. Graph operations involve adding and removing vertices/edges, checking connectivity, and graph traversal using algorithms like DFS and BFS. While graphs have advantages in modeling complex relationships, they can be memory-intensive and have higher time complexity for certain operations.
