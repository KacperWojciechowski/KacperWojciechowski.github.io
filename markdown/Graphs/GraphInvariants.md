# Graph invariants

## Atom-Bond connectivity index

\[
    ABC(G) = \sum_{\{u,v\}\in E(G)}\sqrt{\frac{d(u) + d(v) - 2}{d(v)^2}}    
\]

## Graph potential

### Potential of the entire graph
\[
    P(G) = max\{p(v) : v \in V(G)\} \\    
\]

where:
- $V(G)$ - set of vertices of the graph $G$;

### Potential of given vertex
\[
    p(v) = max \{k+1, k : N; \exist d(u) \ge k, u:N(v)\}
\]

where:
- $N(v)$ - set of neighbors of the $v$ vertex;