# Rounding error

## Definition

Rounding error is a limited precision value $\sigma$ available for given machine, defined as a value for which:

\[
\begin{equation}
\forall_{\delta\le\sigma} 1 + \delta = 1
\end{equation}
\]

## Iterative algorithm for determining the rounding error

1. Assume $\varepsilon$ = 1;
2. As long as $1 + \varepsilon > 1$:
2.1. Divide $\varepsilon$ by 2;
3. Use calculated $\varepsilon$ as rounding error value;

## Calculating rounding error in IEEE standard

TODO

## Roundoff error caused by floating-point arithmetic
### Addition

TODO
### Subtraction
TODO
### Multiplication
TODO
### Division
TODO

## Ill-conditioned problems
TODO