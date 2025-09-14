# Inverse matrix method

## Algorithm

1. Describe the system of equation in a matrix form $Ax=B$;
2. Calculate the inverse matrix $A^{-1}$ (typically using ***Gaussian eleminitation*** method due to numeric stability)
3. Using ***left-side matrix multiplication*** on both sides of the $Ax=B$ by the inverse matrix $A^{-1}$, calculate $x$ as follows:

\[
\begin{equation}
    x = A^{-1}*B
\end{equation}    
\]