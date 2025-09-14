# Taylor series

TODO

# Taylor expansion of $\sin(x)$
## Equation

Expanding $\sin(x)$ function using Taylor series takes form of:

\[
\begin{equation}
    \sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - ...
\end{equation}
\]

or 

\[
\begin{equation}
    \sin(x) = x - \sum_{i=0}^{\frac{n}{2}}\frac{x^{3+4i}}{(3+4i)!} + \sum_{i=0}^{\frac{n}{2} -1}\frac{x^{5+4i}}{(5+4i)!}
\end{equation}
\]

where:
- $n$ - expected number of terms used

For low values of $x$ ($x < 1$) it can be approximated that the value of $\sin(x) \approx x$

## Approximation error

- Absolute error

\[
\begin{equation}
    \Delta = x - \sin(x)
\end{equation}
\]

- Relative error

\[
\begin{equation}
    \delta = \frac{x-\sin(x)}{\sin(x)} = \frac{x}{\sin(x)} - 1
\end{equation}
\]

The absolute error is characterized by similarity to a parabolic function. The relative error for a single term resembles of a $\tan$ function graph, and with increasing number of terms starts to resemble a linear function. 

# Taylor expansion of $\cos(x)$

TODO