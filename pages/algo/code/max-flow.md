## Max Flow

### Introduction:

Max Flow is a graph algorithm used to determine the maximum flow that can be sent through a network. It models a network as a directed graph with a source node, a sink node, and capacities on the edges. The goal is to find the maximum amount of flow that can be pushed from the source to the sink while respecting the capacities of the edges.

### Algorithm:

The algorithm to find the Max Flow in a network is typically based on the Ford-Fulkerson method. One of the popular implementations of this method uses the Edmonds-Karp algorithm, which uses Breadth-First Search (BFS) to find augmenting paths.

1. Start with an initial flow of zero.
2. While there is an augmenting path from the source to the sink, do:
   - Perform a BFS to find the shortest augmenting path in terms of the number of edges.
   - Determine the maximum amount of flow that can be pushed through this path. This is the minimum capacity among the edges of the path.
   - Update the flow on each edge of the augmenting path by adding the maximum flow.
   - Update the residual capacities of the edges. Subtract the maximum flow from forward edges and add it to backward edges.
3. Once there are no more augmenting paths, the algorithm terminates, and the maximum flow is obtained.

### Code Example (Python):

```python
from collections import deque

def bfs(graph, source, sink, parent):
    visited = [False] * len(graph)
    queue = deque()
    queue.append(source)
    visited[source] = True

    while queue:
        u = queue.popleft()

        for v, capacity, flow in graph[u]:
            if not visited[v] and capacity > flow:
                queue.append(v)
                visited[v] = True
                parent[v] = u

    return visited[sink]

def max_flow(graph, source, sink):
    parent = [-1] * len(graph)
    max_flow = 0

    while bfs(graph, source, sink, parent):
        path_flow = float("inf")
        s = sink

        while s != source:
            for u, capacity, flow in graph[parent[s]]:
                if u == s:
                    path_flow = min(path_flow, capacity - flow)
                    s = parent[s]
                    break

        s = sink
        while s != source:
            for i, (u, capacity, flow) in enumerate(graph[parent[s]]):
                if u == s:
                    graph[parent[s]][i][2] += path_flow
                    break

            for i, (u, capacity, flow) in enumerate(graph[s]):
                if u == parent[s]:
                    graph[s][i][2] -= path_flow
                    break

            s = parent[s]

        max_flow += path_flow

    return max_flow
```

### Example Usage:

```python
graph = [
    [[1, 16, 0], [2, 13, 0]],                 # Adjacency list representation: [v, capacity, flow]
    [[2, 10, 0], [3, 12, 0]],
    [[1, 4, 0], [4, 14, 0]],
    [[2, 9, 0], [5, 20, 0]],
    [[3, 7, 0], [5, 4, 0]],
    []
]

source = 0
sink = 5

max_flow_value = max_flow(graph, source, sink)
print("Max Flow:", max_flow_value)
```

### Explanation:

The code example provides a basic implementation of

the Max Flow algorithm using the Edmonds-Karp algorithm and BFS.

- The `bfs` function performs a Breadth-First Search to find an augmenting path from the source to the sink. It returns `True` if an augmenting path exists, `False` otherwise.
- The `max_flow` function initializes a parent array to keep track of the augmenting path and the maximum flow value.
- The algorithm continues to find augmenting paths using BFS until there are no more paths.
- Inside the main loop, the algorithm finds the minimum capacity of the augmenting path using a nested loop.
- It updates the flow on each edge of the augmenting path and updates the residual capacities of the edges accordingly.
- The algorithm repeats this process until there are no more augmenting paths, and the maximum flow value is obtained.
- The example usage demonstrates how to use the algorithm on a given graph represented as an adjacency list.
- The graph contains a source node (`0`) and a sink node (`5`), and each edge is represented as `[v, capacity, flow]`.
- The algorithm calculates and returns the maximum flow value in the network.

Understanding the Max Flow algorithm allows for solving various network flow problems, such as transportation planning, resource allocation, and network optimization.
