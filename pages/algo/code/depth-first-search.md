## Depth First Search (DFS)

### Introduction:

Depth First Search (DFS) is a graph traversal algorithm that explores vertices and their adjacent vertices in a depth-first manner. It starts from a given source vertex and visits as far as possible along each branch before backtracking. DFS can be used to traverse both directed and undirected graphs.

### Algorithm:

The DFS algorithm follows these steps:

1. Begin with a graph and a source vertex.
2. Mark the source vertex as visited.
3. Explore an unvisited adjacent vertex of the current vertex and recursively apply steps 2 and 3 on it.
4. If all adjacent vertices have been visited or there are no adjacent vertices, backtrack to the previous vertex and continue the exploration.
5. Repeat steps 3 and 4 until all vertices have been visited.

### Code Example (Python):

```python
def dfs(graph, start_vertex):
    visited = set()

    def dfs_recursive(vertex):
        visited.add(vertex)
        print(vertex)

        for neighbor in graph[vertex]:
            if neighbor not in visited:
                dfs_recursive(neighbor)

    dfs_recursive(start_vertex)
```

### Example Usage:

```python
# Graph represented as an adjacency list
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

# Starting vertex
start_vertex = 'A'

# Call dfs function
dfs(graph, start_vertex)
```

### Explanation:

DFS explores the graph in a depth-first manner by following these key points:

- **Graph Representation**: The graph can be represented using various data structures. In this example, an adjacency list is used, where each vertex is mapped to a list of its adjacent vertices.

- **Algorithm**: The algorithm begins with a graph and a source vertex. It maintains a set called `visited` to keep track of the visited vertices. Initially, the `visited` set is empty.

- **Recursive Approach**: DFS employs a recursive approach. The main `dfs` function serves as a wrapper function that initializes the `visited` set and calls the recursive `dfs_recursive` function.

- **Depth-First Exploration**: The `dfs_recursive` function takes a vertex as an argument. It marks the vertex as visited by adding it to the `visited` set and prints the vertex to demonstrate the traversal order.

- **Exploring Adjacent Vertices**: For each unvisited neighbor of the current vertex, the `dfs_recursive` function recursively calls itself on that neighbor. This process ensures that all reachable vertices are visited before backtracking.

- **Backtracking and Termination**: If all adjacent vertices of a vertex have been visited or if there are no adjacent vertices, the function backtracks to the previous vertex and continues the exploration until all vertices have been visited.

### Time Complexity:

The time complexity of DFS is O(V + E), where V represents the number of vertices and E represents the number of edges in the graph. In the worst-case scenario, DFS must visit all vertices and traverse all edges.

### Space Complexity:

The space complexity of DFS is O(V), where V is the number of vertices. This space is required to store the `visited` set, which keeps track of visited vertices during the traversal.

DFS is a fundamental graph traversal algorithm with practical applications in various areas. It can be used to solve mazes, detect cycles in graphs, find connected components, perform topological sorting, and more. Understanding its implementation and principles will enable you to apply this algorithm effectively in graph-related problems.
