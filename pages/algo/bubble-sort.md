# Bubble Sort

## Introduction

Bubble sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It gets its name from the way smaller elements "bubble" to the top of the list with each pass.

## Explanation

The bubble sort algorithm works as follows:

1. Start with an unsorted list of elements.
2. Compare each pair of adjacent elements in the list.
3. If the elements are in the wrong order (i.e., the current element is greater than the next element), swap them.
4. Repeat steps 2 and 3 until the list is sorted. Each pass through the list will "bubble up" the largest remaining element to its correct position.
5. Repeat the process for the remaining elements, excluding the ones that are already in their correct position after each pass.

## Implementation

Here's an implementation of bubble sort in Python:

```python
def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
```

Step-by-step explanation of the code:

1. Get the length of the array and assign it to the variable `n`.
2. Iterate `i` from 0 to `n - 1` to represent the pass number.
3. Within each pass, iterate `j` from 0 to `n - i - 1` to compare adjacent elements.
4. Compare `arr[j]` with `arr[j + 1]` and swap them if `arr[j]` is greater.
5. After each pass, the largest element will be at the end of the array.
6. Repeat the process for the remaining elements by decrementing the range of the inner loop.

## Use Cases

Bubble sort is primarily used for educational purposes or when simplicity is more important than efficiency. It is rarely used in practice for large datasets due to its relatively slow time complexity of O(n^2). However, it can be useful for small lists or as a starting point for understanding sorting algorithms.

## Time and Space Complexity

The time complexity of bubble sort is O(n^2), where n is the number of elements in the array. This is because in the worst case, the algorithm requires comparing and swapping every pair of elements. The space complexity is O(1) as the algorithm only requires a few variables for storing indices and temporary values.

## Variants or Extensions

Bubble sort is a straightforward algorithm without significant variations or extensions. However, there is a slight optimization called the "Flagged Bubble Sort" that stops the algorithm early if no swaps are made during a pass. This optimization can improve the best-case scenario from O(n^2) to O(n).

## Summary

Bubble sort is a simple but inefficient sorting algorithm that compares and swaps adjacent elements until the list is sorted. While it is not suitable for large datasets, understanding bubble sort helps lay the foundation for more advanced sorting algorithms and provides insights into basic comparison-based sorting techniques.
