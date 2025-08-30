# Linear Interpolation

## Interpolating two points

Having two points $P_0$ and $P_1$:

1. Calculate the value of the $a$ coefficient of a linear function as:

\[a = \frac{y_1 - y_0}{x_1 - x_0}\]

2. Calculate the value of the **intercept** ($b$) as:

\[b = y_0 - a * x_0\]

## Interpolating multiple points

In case of interpolating more than two points, a spline function is created, consisting of linear interpolations of each of the pairs of adjacent points.
