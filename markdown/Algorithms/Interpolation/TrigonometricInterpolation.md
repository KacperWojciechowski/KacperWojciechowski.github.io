# Trigonometric interpolation

## General formula

A trigonometric polynomial of $N$-th degree takes form:

\[
\begin{equation} 
    f(x) = a_0 + \sum_{n=1}^N a_n\cos(nx) + \sum_{n=1}^N b_n\sin(nx)
\end{equation}
\]

The expression contains $2N+1$ coefficients $a_0, ..., a_n, b1, ..., b_n$. There exists a solution for any number of data points ($K$) as long as $K \le 2N+1$. A solution may or may not exist if $K > 2N+1$ depeding upon the particular set of datapoints.

Since the trygonometric polynomial is *periodic* with the period of $2\pi$, the $K$ points can be distributed and ordered within ***one period***, as:

\[
\begin{equation} 
    0 \le x_0 \le x_1 \le \dots \le x_{k-1} \le 2\pi 
\end{equation}
\]

The formula for a trigonometric polynomial in a *complex plane* can be rewritten as follows:

\[
\begin{equation} 
    p(x) = \sum_{n=-N}^{N} c_ne^{inx}
\end{equation}
\]

where $i$ is the ***imaginary unit***.

If we set $z = e^{ix}$, then the formula takes form:

\[
\begin{equation} 
    q(z) = \sum_{n=-N}^{N} c_nz^n
\end{equation}
\]

with

\[
\begin{equation} 
    q(e^{ix}) \triangleq p(x)
\end{equation}
\]

(where $\triangleq$ means *"defined as"* or *"equal by definition"*)

As such, the problem is reduced to ***polynomial interpolation on unit circle***.

The interpolation polynomial is ***unique*** if and only if the number of adjustable coefficients is equal to the number of data points $K=2N+1$.

## Formula for odd number of points

If the number of $K$ ***is odd*** ($K = 2N+1$), applying *Lagrange's formula for polynomial interpolation* to the complex plane form of the problem results in:

\[ 
\begin{equation}
    p(x) = \sum_{n=0}^{2N} y_nt_n(x)
\end{equation}
\]

where:

\[ 
\begin{equation}
    t_n(x) = e^{-iNx + iNx_n} \sum_{m=0; m \ne n}^{2N} \frac{e^{ix} - e^{ix_m}}{e^{ix_n} - e^{ix_m}}
\end{equation}
\]

The factor $e^{-iNx+iNx_n}$ compensates for the complex plane formulation of the problem containing *negative powers of $e^{ix}$*.

Upon using the identity:

\[ 
\begin{equation}
    e^{iz_1} - e^{iz_2} = 2i\sin\frac{1}{2}(z_1 - z_2)e^{\frac{(z_1 + z_2)i}{2}}
\end{equation}
\]

The formula can be written as folows:

\[ 
\begin{equation}
    t_n(x) = \prod_{m=0; m \ne n}^{2N} \frac{\sin\frac{1}{2}(x-x_m)}{\sin\frac{1}{2}(x_n - x_m)}
\end{equation}
\]

## Formula for even number of points

If the number of points $K$ ***is even*** ($K = 2N$), applying *Lagrange's formula* results in the following equation:

\[ 
\begin{equation}
    p(x) = \sum_{n=0}^{2N-1} y_nt_n(x)
\end{equation}
\]

where:

\[ 
\begin{equation}
    t_n(x) = e^{-iNx + iNx_n} \frac{e^{ix} - e^{i\alpha_n}}{e^{ix_n} - e^{i\alpha_n}} \prod_{m=0; m \ne n}^{2N-1} \frac{e^{ix} - e^{ix_m}}{e^{ix_n} - e^{ix_m}}
\end{equation}
\]

Here, the $\alpha_n$ constants can be chosen freely, however typical approach is to calculate them using the following formula:

\[ 
\begin{equation}
    \alpha_n = \sum_{m=0; m \ne n}^{2N-1} x_m-2\varphi_N 
\end{equation}
\]

where $\varphi_N$ is the phase of the highest frequency of the constant times $\cos(N_x)$.

This results in the following formula:

\[ 
\begin{equation}
    t_n(x) = \frac{\sin\frac{1}{2}(x-\alpha_n)}{\sin\frac{1}{2}(x_n - \alpha_n)} \prod_{m=0; m \ne n}^{2N-1} \frac{\sin\frac{1}{2}(x-x_m)}{\sin\frac{1}{2}(x_n - x_m)}
\end{equation}
\]

## Final interpolation equations

That's how we end up with the following interpolation equations:

- For odd number of datapoints

\[ 
\begin{equation}
    p(x) = \sum_{n=0}^{2N} \left( y_n \prod_{m=0; m \ne n}^{2N} \frac{\sin\frac{1}{2}(x - x_m)}{\sin\frac{1}{2}(x_n - x_m)}\right)
\end{equation}
\]

- For even number of datapoints

\[
\begin{equation} 
    p(x) = \sum_{n=0}^{2N-1} \left( y_n \left( \frac{\sin\frac{1}{2}\left( x - g(X)\right)}{\sin\frac{1}{2}\left( x_n - g(X)\right)}\right) \right) \prod_{m=0; m \ne n}^{2N-1} \frac{\sin\frac{1}{2}(x - x_m)}{\sin\frac{1}{2}(x_n - x_m)}
\end{equation}
\]

where:

\[ 
\begin{equation}
    g(X) = \sum_{m=0; m \ne n}^{2N-1} x_m - 2\varphi_N 
\end{equation}
\]