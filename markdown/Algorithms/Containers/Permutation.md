# Finding container permutations

## Complexity class
- Time complexity $O(n!)$

## Algorithm

```cpp
findPermutation(container, left, right) {
    for (i = left; i < right; i++) {
        swap(container[left], container[i]);
        // perform your action on the found permutation here
        findPermutation(container, left+1, right);
        swap(container[left], container[i]);
    }
}
```