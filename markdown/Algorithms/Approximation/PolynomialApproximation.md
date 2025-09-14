# Polynomial Approximation

If we have a function $f(x)$ which equation is known, we can create an ***N-th degree polynomial approximation*** using the following formula:

\[
\begin{equation}
p(x) = \sum_{i=0}^{N}\frac{f^{(i)}(0) * x^i}{i!}
\end{equation}
\]

where:
- $p(x)$ - approximating polynomial
- $f^{(i)}(x)$ - $i$-th derivative of $f(x)$ calculated at $x=0$