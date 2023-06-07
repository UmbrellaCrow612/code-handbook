# Binary Search

## Introduction

Binary search is a classic divide-and-conquer algorithm used to efficiently find the position of a target value in a sorted array. It operates by repeatedly dividing the search space in half and narrowing down the range of possible values until the target value is found or determined to be absent.

## Explanation

The binary search algorithm works as follows:

1. Start with a sorted array and define the search range as the entire array.
2. Compute the middle element of the search range.
3. Compare the middle element with the target value:
   - If they are equal, the search is successful, and the middle element is the desired value.
   - If the middle element is greater than the target value, the search continues in the lower half of the search range.
   - If the middle element is less than the target value, the search continues in the upper half of the search range.
4. Repeat steps 2 and 3, updating the search range based on the comparison, until the target value is found or the search range becomes empty.

## Implementation

Here's an implementation of binary search in Python:

```python
def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

Step-by-step explanation of the code:

1. Set the left pointer to the start of the array and the right pointer to the end of the array.
2. Enter a loop that continues as long as the left pointer is less than or equal to the right pointer.
3. Calculate the middle index of the current search range using integer division.
4. Compare the element at the middle index with the target value.
5. If they are equal, return the middle index as the position of the target value.
6. If the middle element is less than the target, update the left pointer to mid + 1 to search in the upper half.
7. If the middle element is greater than the target, update the right pointer to mid - 1 to search in the lower half.
8. If the target value is not found, return -1 to indicate its absence.

## Use Cases

Binary search is useful in scenarios where you need to quickly find the position of a target value in a sorted array. Some common use cases include:

- Searching for a specific element in a large dataset or database.
- Finding the insertion point for a new element in a sorted list.
- Checking for the presence of a value in a sorted array.

## Time and Space Complexity

The time complexity of binary search is O(log n), where n is the number of elements in the array. This is because the search space is halved in each iteration, leading to a logarithmic time complexity. The space complexity is O(1) as the algorithm only requires a few variables to store the pointers and does not use any additional data structures.

## Variants or Extensions

Some variants or extensions of binary search include:

- Lower Bound Binary Search: Finds the position of the first element that is greater than or equal to the target value.
- Upper Bound Binary Search: Finds the position of the first element that is strictly greater than the target value.
- Interpolation Search: A variation of binary search that uses interpolation to make intelligent guesses about the target's position.
- Exponential Search: Uses binary search after identifying an appropriate range by doubling the search space's size.

## Summary

Binary search is a powerful algorithm for quickly finding the position of a target value in a sorted array. It offers an efficient approach with a time complexity of O(log n) and is widely used in various applications that involve sorted data. Understanding binary search is crucial for every programmer, as it forms the basis for many other algorithms and problem-solving techniques.
