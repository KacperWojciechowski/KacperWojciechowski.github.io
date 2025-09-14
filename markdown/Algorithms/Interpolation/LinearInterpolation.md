# Linear interpolation

## Interpolating two points

Having two points $P_0$ and $P_1$:

1. Calculate the value of the $a$ coefficient of a linear function as:

\[
\begin{equation}
    a = \frac{y_1 - y_0}{x_1 - x_0}
\end{equation}
\]

2. Calculate the value of the **intercept** ($b$) as:

\[
\begin{equation}
    b = y_0 - a * x_0
\end{equation}
\]

## Interpolating multiple points

In case of interpolating more than two points, a spline function is created, consisting of linear interpolations of each of the pairs of adjacent points.
