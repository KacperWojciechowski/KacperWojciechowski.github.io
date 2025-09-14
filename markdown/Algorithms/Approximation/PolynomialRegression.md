# Polynomial regression

It's a technique of regression analysis, where we know a set of values $x$ and their corresponding values $f(x)$ (a.k.a. $y$), but we don't know the equation for $f(x)$ and we try to approximate it using ***a polynomial***. This approach is typically used for modeling ***non-linear relations*** within data.

In order to acquire the coefficients for the $N$-th degree polynomial, we require $m$ datapoints, where $m<N$ in order for the matrix used in calculation to be invertible. Subsequently we need to construct the following equation:

\[
\begin{equation}
\begin{bmatrix}
y_1 \\
y_2 \\
y_3 \\
\dots \\
y_m
\end{bmatrix} = 
\begin{bmatrix}
1 & x_1 & x_1^2 & \dots & x_1^n \\
1 & x_2 & x_2^2 & \dots & x_2^n \\
1 & x_3 & x_3^2 & \dots & x_3^n \\
\dots & \dots & \dots & \dots & \dots \\
1 & x_m & x_m^2 & \dots & x_m^n
\end{bmatrix}
\begin{bmatrix}
\beta_0 \\
\beta_1 \\
\beta_2 \\
\dots \\
\beta_n
\end{bmatrix} 
+
\begin{bmatrix}
\varepsilon_1 \\
\varepsilon_2 \\
\varepsilon_3 \\
\dots \\
\varepsilon_m
\end{bmatrix}
\end{equation}
\]

which in pure matrix notation can be written as:

\[
\begin{equation}
\overrightarrow{y} = X\overrightarrow{\beta} + \overrightarrow{\varepsilon}
\end{equation}   
\]

where:
- $\overrightarrow{y}$ - an $m$-element vertical vector of $y_i$ ( $f(x_i)$ ) values;
- $X$ - an $m$ x $n+1$ design matrix, representing a system of ***N-th degree polynomial*** equations, where each row respresents said polynomial for $x_i$;
- $\overrightarrow{\beta}$ - an $n$-element vertical vector of coefficients for the calculated polynomial
- $\overrightarrow{\varepsilon}$ - an $m$-element vertical vector of random errors

Using ***ordinary least squares estimation***, we can estimate the polynomial regression coefficients as follows:

\[
\begin{equation}
\widehat{\overrightarrow{\beta}} = (X^TX)^{-1} * X^T *\overrightarrow{y}
\end{equation}
\]

where:

- $\widehat{\overrightarrow{\beta}}$ - estimated coefficients;
- X^T - transposed design matrix
- $(...)^{-1}$ - inverse matrix

In this method $X$ is a ***Vandermonde matrix***, so having each $x_j$ as a ***unique*** value ***guarantees invertibility***.

Subsequently, the resulting polynomial takes the form of:

\[
\begin{equation}
\widehat{y} = \beta_0x^0 + \beta_1x^1 + \beta_2x^2 + \dots + \beta_nx^n
\end{equation}   
\]

or 

\[
\begin{equation}
\widehat{y} = \sum_{i=0}^N \beta_ix^i
\end{equation}
\]