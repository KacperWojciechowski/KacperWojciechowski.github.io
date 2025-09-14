# LaGrange's polynomial interpolation

## General form

\[
\begin{equation}
 p = \sum_{i=0}^n \left( \prod_{0\le j \le n; j \ne i} \frac{x - x_j}{x_i - x_j} \right) * y_i
\end{equation}
\]

where $x_i$, $x_j$ and $y_i$ stand for the coordinates of the interpolated points