## Knapsack Problem

### Introduction:

The Knapsack Problem is a classic optimization problem in computer science and mathematics. It involves selecting a subset of items with maximum value while respecting the capacity constraint of a knapsack. The goal is to determine the optimal combination of items that maximizes the total value within the given capacity. The problem finds applications in various fields, including operations research, resource allocation, logistics, and financial portfolio optimization.

### Algorithm:

The Knapsack Problem can be solved using dynamic programming with a bottom-up approach. The algorithm breaks down the problem into smaller subproblems and leverages overlapping substructure to efficiently find the optimal solution.

1. Create a memoization table of size `(n + 1) x (W + 1)`, where `n` is the number of items and `W` is the knapsack capacity.
2. Initialize the first row and the first column of the table to zero. These values represent the base case where there are no items or no capacity available.
3. Iterate through the items from `1` to `n` and capacities from `1` to `W`:
   - If the weight of the current item is less than or equal to the current capacity, consider two cases:
     - Include the current item and add its value to the maximum value of the remaining capacity.
     - Exclude the current item and take the maximum value from the previous row.
     - Take the maximum of these two cases as the value for the current item and capacity.
   - If the weight of the current item is greater than the current capacity, take the value from the previous row.
4. The last cell in the memoization table will contain the maximum value that can be achieved within the given capacity.
5. Backtrack through the table, starting from the last cell, to find the items that contribute to the maximum value. Follow the path of the maximum values by considering whether the current item was included or excluded.
6. Return the maximum value and the list of selected items.

### Code Example (Python):

```python
def knapsack(items, capacity):
    n = len(items)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        weight, value = items[i - 1]
        for w in range(1, capacity + 1):
            if weight <= w:
                dp[i][w] = max(value + dp[i - 1][w - weight], dp[i - 1][w])
            else:
                dp[i][w] = dp[i - 1][w]

    selected_items = []
    w = capacity
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            weight, value = items[i - 1]
            selected_items.append(items[i - 1])
            w -= weight

    return dp[n][capacity], selected_items
```

### Example Usage:

```python
items = [(2, 12), (1, 10), (3, 20), (2, 15)]
capacity = 5

max_value, selected_items = knapsack(items, capacity)
print("Max Value:", max_value)
print("Selected Items:", selected_items)
```

### Explanation:

The code example provides a basic implementation of the Knapsack Problem using dynamic programming. It follows the following steps:

- The `knapsack` function takes a list of items, where each item is represented as a tuple `(weight, value)`, and the knapsack capacity as input.
- It initializes a 2D DP table to store

the maximum values for different subproblems.

- The algorithm iterates through the items and capacities to fill the DP table.
- For each item and capacity, it considers two cases: including the current item or excluding it.
- If the weight of the current item is less than or equal to the current capacity, it takes the maximum value of including the item or excluding it.
- If the weight of the current item is greater than the current capacity, it takes the value from the previous row.
- Once the table is filled, the algorithm backtracks through the table, starting from the last cell, to find the items that contribute to the maximum value.
- The algorithm returns the maximum value that can be achieved within the given capacity and the list of selected items.
- The example usage demonstrates how to use the algorithm on a given list of items and a capacity.
- The algorithm calculates and returns the maximum value that can be achieved within the given capacity and the list of selected items.

Understanding the Knapsack Problem and its algorithm allows for solving optimization problems involving resource allocation and selection. It finds applications in various fields, including operations research, resource allocation, logistics, and financial portfolio optimization. By leveraging dynamic programming and the concept of overlapping substructure, the algorithm efficiently finds the optimal solution, providing insights into the best selection of items given the knapsack capacity.
