# Newton's Polynomial Interpolation

## General form

\[ N(x) = \sum_{j=0}^n a_jw_j(x)\]

where:

\[ w_j(x) = \prod_{i=0}^{j-1}\left( x - x_j \right)\]

\[ a_{n+1} = \frac{f(x_{n+1} - p_n(x_{n+1}))}{w_n(x_{n+1})}\]

The $w_n(x)$ term is called a ***Newton basis***, and it is defined for $j > 0$ and $w_0(x) \equiv 0$.

### Calculating $a$ coefficients

In order to determine the values of the $a$ coefficients using the matrix method, we need to solve the ***lower triangular matrix*** of the matrix representation of a polynomial equation.

\[ 
    \begin{bmatrix} 
        1 & \dots & \dots & \dots & 0 \\
        1 & x_1 - x_0 & \dots & \dots & \dots \\
        1 & x_2 - x_0 & (x_2 - x_0)(x_2 - x_1) & \dots & \dots \\
        \dots & \dots & \dots & \dots & \dots \\
        1 & x_n - x_0 & \dots & \dots & \prod_{j=0}^{n-1}(x_n-x_j)
    \end{bmatrix}
    \begin{bmatrix}
        a_0 \\
        \dots \\
        \dots \\
        \dots \\
        a_n
    \end{bmatrix}
    = 
    \begin{bmatrix}
        y_0 \\
        \dots \\
        \dots \\
        \dots \\
        y_n
    \end{bmatrix}
\]

the &a_j& coefficients for the above equation are calculated as follows:

\[ a_j = \left[ y_0, ..., y_j\right] \]

where $\left[ y_0, ..., y_j\right]$ stands for ***divided differences*** of coordinates of interpolated points $P_k = (x_k, y_k)$, calculated as:

\[
    \begin{equation}
    [y_k] = y_k
    \end{equation}
\]
\[ 
    \begin{equation}
        [y_k, ..., y_{k+j}] = \frac{[y_{k+1}, ..., y_{k+j}] - [y_k, ..., y_{k+j-1}]}{x_{k+j} - x_k}
    \end{equation}
\]

where for $(1)$ the $k \in \{0, ..., n\}$ and for $(2)$ the $k \in \{0, ..., n-1\}$ and $j \in \{1, ..., n\}$

An alternative representation of the difference division is as follows:

\[ [y_0, ..., y_n] = \sum_{j=0}^n \frac{y_j}{\prod_{k\in\{0, ..., n\}/\{j\}}(x_j - x_k)}\]