# Bisection method
## Minimal number of iterations guaranteeing given error $\varepsilon$ in the bisection method

\[
\Delta = | \alpha - c_n | \le \frac{1}{2^n}(b-a) \\
\quad \\
\varepsilon = \frac{1}{2^n}(b-a) \\
\quad \\
\varepsilon = 2^{-n}(b-a) \quad// *2^n \\
\quad \\
2^n\varepsilon = (b-a) \quad // *\varepsilon \\
\quad \\
2^n = \frac{b-a}{\varepsilon}
\]

\[    
\begin{equation}
n = log_2(\frac{b-a}{\varepsilon})
\end{equation}
\]

where:

- $n$ - searched number of iterations
- $\varepsilon$ - given value of rounding error
- $\langle a;b \rangle$ - range for searching for the root of the characteristic polynomial

## Bisection method algorithm

TODO