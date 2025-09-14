# Iterative Jacobi method
## Algorithm

1. Describe the system of equations in a matrix form $Ax = B$;
2. Decompose $A$ into $A = D+R$, where $D$ contains only ***diagonal*** elements and $R$ contains ***all remaining*** elements;
3. Zero-fill the $x$ vector;
4. For $k$ iterations calculate the approximation values in $x$ as follows:

\[
\begin{equation}
    x^{(k+1)} = D^{-1} * (b - R*x^k)
\end{equation}    
\]

or using this equation for each element:

\[
\begin{equation}
x_i^{(k+1)} = \frac{b_i - \sum^j i*a_i * j * x_j^k}{a_i * i}; \quad j \ne i
\end{equation}
\]