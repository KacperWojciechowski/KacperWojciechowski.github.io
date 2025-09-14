# Trigonometric polynomial approximation

1. Zero-fill $N$-element vectors of $a$ and $b$ coefficients;
2. Repeat $N$ times:
2.1. For each datapoint:
2.1.1. Add $y_i\cos(x_ii)$ to the current value of $a_i$
2.1.2. Add $y_i\sin(x_ii)$ to the current value of $b_i$;
3. Multiply all $a$ and $b$ coefficients by 2 and divide by the ***number of datapoints***;
4. Place the coefficients into the equation:

\[
\begin{equation}
p(x) = \sum_{i=1}^N a_i\sin(ix) + \sum_{i=1}^N b_i\cos(ix)
\end{equation}
\]