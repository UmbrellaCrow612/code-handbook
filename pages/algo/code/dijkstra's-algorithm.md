## Dijkstra's Algorithm

### Introduction:

Dijkstra's algorithm is a graph traversal algorithm used to find the shortest path between a source vertex and all other vertices in a weighted graph. It is a fundamental algorithm for solving various problems, such as network routing, GPS navigation, and task scheduling.

### Algorithm:

The algorithm can be summarized in the following steps:

1. Begin with a graph and a source vertex.
2. Assign a tentative distance value to every vertex: set the distance of the source vertex to 0 and the distance of all other vertices to infinity.
3. Set the source vertex as the current vertex.
4. For the current vertex, consider all of its adjacent vertices and calculate their tentative distances from the source vertex. If a shorter path is found, update the tentative distances.
5. Once all adjacent vertices have been visited, mark the current vertex as visited.
6. If the destination vertex has been visited or there are no unvisited vertices with finite distances, stop the algorithm.
7. Otherwise, select the unvisited vertex with the smallest tentative distance as the next current vertex and go back to step 4.

### Code Example (Python):

```python
import heapq

def dijkstra(graph, start_vertex):
    distances = {vertex: float('inf') for vertex in graph}
    distances[start_vertex] = 0

    priority_queue = [(0, start_vertex)]

    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in graph[current_vertex].items():
            distance = current_distance + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))

    return distances
```

### Example Usage:

```python
# Graph represented as an adjacency list with weighted edges
graph = {
    'A': {'B': 4, 'C': 2},
    'B': {'A': 4, 'D': 5},
    'C': {'A': 2, 'D': 7},
    'D': {'B': 5, 'C': 7}
}

# Starting vertex
start_vertex = 'A'

# Call dijkstra function
distances = dijkstra(graph, start_vertex)

print(distances)
```

### Explanation:

Dijkstra's algorithm finds the shortest path from a source vertex to all other vertices in a graph.

- **Graph Representation**: The graph can be represented using various data structures. In this example, an adjacency list is used, where each vertex is mapped to a dictionary of its neighboring vertices along with their corresponding edge weights.

- **Algorithm Overview**: Dijkstra's algorithm starts by assigning tentative distance values to all vertices. The distance to the source vertex is set to 0, and the distances to all other vertices are set to infinity. The algorithm maintains a priority queue to keep track of the vertices with the smallest tentative distances.

- **Iterative Process**: The algorithm repeatedly selects the vertex with the smallest tentative distance as the current vertex and explores its adjacent vertices.

- **Tentative Distance Update**: For each adjacent vertex, the algorithm calculates a tentative distance from the source vertex. This distance is the sum of the current distance and the weight of the edge connecting the current vertex to the adjacent vertex. If the tentative distance is smaller than the current distance assigned to the adjacent vertex, the distance is updated.

- **Priority Queue**: The priority queue is used to efficiently select the vertex with the smallest tentative distance. It ensures that vertices with shorter distances are explored first.

- **Termination**: The algorithm stops when all vertices have been visited, or when the destination vertex has been

visited. At this point, the algorithm has calculated the shortest path from the source vertex to all other vertices.

The provided code example demonstrates the implementation of Dijkstra's algorithm in Python. It takes a graph represented as an adjacency list with weighted edges and a starting vertex as inputs. The algorithm returns a dictionary of distances, where each vertex is associated with its shortest distance from the source vertex.

### Time Complexity:

The time complexity of Dijkstra's algorithm is O((V + E) log V), where V represents the number of vertices and E represents the number of edges in the graph. The logarithmic term arises from the operations performed on the priority queue.

### Space Complexity:

The space complexity of Dijkstra's algorithm is O(V), where V is the number of vertices. This space is required to store the distances dictionary that keeps track of the shortest distances from the source vertex to each vertex.

Dijkstra's algorithm is a fundamental algorithm for finding the shortest paths in graphs. It has applications in various domains, such as network routing, GPS navigation, and task scheduling. Understanding its implementation and principles will enable you to apply this algorithm effectively in graph-related problems.
