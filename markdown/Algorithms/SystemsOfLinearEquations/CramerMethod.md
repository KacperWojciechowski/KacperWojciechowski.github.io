# Cramer method

## Algorithm

1. Describe the system of equations in a matrix form $Ax = B$;
2. If the ***determinant*** of the $A$ matrix is different than $0$:
2.1. For each column of the $A$ matrix:
2.1.1. Replace said column with vector $B$, creating matrix $A_B$;
2.1.2. Calculate $x_n = \det(A_B)/\det(A)$;
3. Else:
3.1. The system has ***no solution***;