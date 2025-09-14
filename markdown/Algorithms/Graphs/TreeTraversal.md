# Tree traversal

TODO - make the code and diagram display side-by-side

## Inorder

### Algorithm
```cpp
traverseInorder(root) {
    if (not root) {
        return;
    }
    traverseInorder(root->left);
    // process vertex data
    traverseInorder(root->right);
}
```
### Order of tree exploration

```plantuml
skinparam componentStyle rectangle
[6] as A
[4] as B
[7] as C
[2] as D
[5] as E
[1] as F
[3] as G

A -- B
A -- C
B -- D
B -- E
D -- F
D -- G
```

## Preorder
### Algorithm
```cpp
traversePreorder(root) {
    if (not root) {
        return;
    }
    // process vertex data
    traversePreorder(root->left);
    traversePreorder(root->right);
}
```
### Order of tree exploration

```plantuml
skinparam componentStyle rectangle
[1] as A
[2] as B
[7] as C
[3] as D
[6] as E
[4] as F
[5] as G

A -- B
A -- C
B -- D
B -- E
D -- F
D -- G
```

## Postorder
### Algorithm
```cpp
traversePostorder(root) {
    if (not root) {
        return;
    }
    traversePostorder(root->right);
    // process vertex data
    traversePostorder(root->left);
}
```
### Order of tree exploration

```plantuml
skinparam componentStyle rectangle
[2] as A
[4] as B
[1] as C
[6] as D
[3] as E
[7] as F
[5] as G

A -- B
A -- C
B -- D
B -- E
D -- F
D -- G
```

## Max path sum in a binary tree

### Algorithm
```cpp
maxPathSum(root) {
    sum = 0;
    if (not root) {
        return 0;
    }
    sum = calculateMaxPathSum(root, sum);
    return sum;
}

calculateMaxPathSum(root, sum) {
    if (not root) {
        return 0;
    }
    leftChildSum = calculateMaxPathSum(root->left, sum);
    rightChildSum = calculateMaxPathSum(root->right, sum);
    rootSum = std::max(root->data + std::max(leftChildSum, rightChildSum), root->data);
    maxPathAncestors = std::max(rootSum, leftChildSum + rightChildSum + root->data);
    return std::max(sum, maxPathAncestors);
}
```

### Order of tree exploration

```plantuml
skinparam componentStyle rectangle
[16] as A
[10] as B
[15] as C
[6] as G
[7] as H
[14] as I
[3] as E
[4] as F
[8] as J
[9] as K
[13] as L
[1] as M
[2] as N
[5] as O
[11] as P
[12] as Q

A -- B
A -- C
B -- G
B -- H
G -- E
G -- F
E -- M
E -- N
F -- O
H -- J
H -- K
C -- I
I -- L
L -- P
L -- Q
```
