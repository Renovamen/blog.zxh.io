---
layout: post
title: "线性代数笔记"
subtitle: 'Note of Linear Algebra'
author: "Renovamen"
header-style: text
mathjax: true
catalog: true
tags:
  - 数学
---


在 <a href="https://github.com/zlotus/notes-linear-algebra" target="_blank"><i class="fa fa-link"></i> notes-linear-algebra</a> 的基础上进行了完善。

### 8. 求解 $Ax=b$：可解性和解的结构
#### 8.1 $Ax=b$ 的解
举例，同上一讲：$3 \times 4$ 矩阵： 

<center>
$$
A=
\left[
  \begin{matrix}
    1 &amp; 2 &amp; 2 &amp; 2\\
    2 &amp; 4 &amp; 6 &amp; 8\\
    3 &amp; 6 &amp; 8 &amp; 10
  \end{matrix}
\right]
$$
</center>
求 $Ax=b$ 的特解：

写出其增广矩阵（augmented matrix）
$ [A | b]$：

<center>
$$
\left[
\begin{array}{c c c c|c}
1 &amp; 2 &amp; 2 &amp; 2 &amp; b_1 \\
2 &amp; 4 &amp; 6 &amp; 8 &amp; b_2 \\
3 &amp; 6 &amp; 8 &amp; 10 &amp; b_3 \\
\end{array}
\right]
\underrightarrow{消元}
\left[
\begin{array}{c c c c|c}
1 &amp; 2 &amp; 2 &amp; 2 &amp; b_1 \\
0 &amp; 0 &amp; 2 &amp; 4 &amp; b_2-2b_1 \\
0 &amp; 0 &amp; 0 &amp; 0 &amp; b_3-b_2-b_1 \\
\end{array}
\right]
$$
</center>

显然，有解的必要条件为 $b_3-b_2-b_1=0$。

##### 8.1.1 $Ax=b$ 可解性
讨论 $b$ 满足什么条件才能让方程 $Ax=b$ 有解（solvability condition on $b$）：

1. 从列空间看：当且仅当 $b$ 属于 $A$ 的列空间时；
2. 如果 $A$ 的各行线性组合得到 0 行，则 $b$ 端分量做同样的线性组合，结果也为 0 时，方程才有解。

##### 8.1.2 $Ax=b$ 的解结构
1. 特解

    解法：令所有自由变量取 0，则有：
    <center>
    $$
    \Big\lbrace
    \begin{eqnarray*}
      x_1 &amp; + &amp; 2x_3 &amp; = &amp; 1 \\
      &amp; &amp; 2x_3 &amp; = &amp; 3 \\
    \end{eqnarray*}
    $$
    </center>

    解得：
    <center>
    $$
    \Big\lbrace
    \begin{eqnarray*}
      x_1 &amp; = &amp; -2 \\
      x_3 &amp; = &amp; \frac{3}{2} \\
    \end{eqnarray*}
    $$
    </center>
   
    代入 $Ax=b$ 求得特解： 
    <center>
    $$
    x_p=
    \begin{bmatrix}-2 \\ 
      0 \\ 
      \frac{3}{2} \\ 
      0
    \end{bmatrix}
    $$
    </center>

2. 通解

    令 $Ax=b$ 成立的所有解：
    <center>
    $$
    \Big\lbrace
    \begin{eqnarray}
      A &amp; x_p &amp; = &amp; b \\
      A &amp; x_n &amp; = &amp; 0 \\
    \end{eqnarray}
    \quad
      \underrightarrow{两式相加}
    \quad
    A(x_p+x_n)=b
    $$
    </center>

    即 $Ax=b$ 的解集为其特解加上零空间。对本例有：
    <center>
    $$
    x_{complete}=
    \begin{bmatrix}-2 \\ 
      0 \\ 
      \frac{3}{2} \\ 
      0
    \end{bmatrix}
    +c_1
    \begin{bmatrix}
      -2\\
      1\\
      0\\
      0\\
    \end{bmatrix}
    +c_2
    \begin{bmatrix}
      2\\
      0\\
      -2\\
      1\\
    \end{bmatrix}
    $$
    </center>

#### 8.2 秩 r 与 $Ax=b$ 的解关系
对于 $m \times n$ 矩阵 $A$，有矩阵 $A$ 的秩 $r \leq min(m, n)$。

##### 8.2.1 列满秩

主元变量为 $n$，没有自由变量。因为没有自由变量可以赋值，所以列的线性组合得不到 0（因为如果存在非零 x 使 $Ax=0$ 成立，那么A中有一列是没有贡献的，既然没有贡献，那么也就不存在列满秩的情况了）。

所以列满秩的解的情况：0 或 1 个特解。

举例：

列满秩 $r=n$ 情况：
<center>
$$
A=
\begin{bmatrix}
  1 &amp; 3 \\
  2 &amp; 1 \\
  6 &amp; 1 \\
  5 &amp; 1 \\
\end{bmatrix}
，
R=
\begin{bmatrix}
  1 &amp; 0 \\
  0 &amp; 1 \\
  0 &amp; 0 \\
  0 &amp; 0 \\
\end{bmatrix}
$$
</center>

$rank(A)=2$，要使 $Ax=b, b \neq 0$ 有非零解，$b$ 必须取 $A$ 中各列的线性组合，此时 $A$ 的零空间中只有 $0$ 向量。

P.S 因为行向量是 2 维的，且前两行线性无关，2 维平面中有两个向量线性无关，那该平面的所有向量都可以由这两个向量线性组合得到，所以后面两行一定会是 0 行。

##### 8.2.2 行满秩
每行都有主元，不存在 0 行，那么 $b$ 就没有要求，而且有 n-r 个自由变量，所以解有无穷多个。

举例：

行满秩 $r=m$ 情况：
<center>
$
A=
\begin{bmatrix}
  1 &amp; 2 &amp; 6 &amp; 5 \\
  3 &amp; 1 &amp; 1 &amp; 1 \\
\end{bmatrix}
$，
$
R=
\begin{bmatrix}
  1 &amp; 0 &amp; - &amp; - \\
  0 &amp; 1 &amp; - &amp; - \\
\end{bmatrix}
$
</center>

$rank(A)=2$，$\forall b \in R^m$ 都有 $x \neq 0$ 的解，因为此时A的列空间为 $R^m$，$b \in R^m$ 恒成立，组成 $A$ 的零空间的自由变量有 n-r 个。


##### 8.2.3 行列满秩
代表的是满秩方阵，消元到最简形式是单位矩阵，是一个可逆矩阵，结合 $r=m$ 和 $r=n$ 的解的情况得出此时一定有一个解 $b$，$b$ 满足是 $A$ 向量的线性组合。

举例：

行列满秩情况：$r=m=n$，如：
<center>
$
A=
\begin{bmatrix}
  1 &amp; 2 \\
  3 &amp; 4 \\
\end{bmatrix}
$
</center>
则 $A$ 最终可以化简为 $R=I$，其零空间只包含 $0$ 向量。


##### 8.2.4 总结
<center>
$
\begin{array}
  {c|c|c|c}
  r=m=n&amp;r=n\lt m&amp;r=m\lt n&amp;r\lt m,r\lt n\\
  R=I&amp;R=\begin{bmatrix}I\\0\end{bmatrix}&amp;R=\begin{bmatrix}I&amp;F\end{bmatrix}&amp;R=\begin{bmatrix}I&amp;F\\0&amp;0\end{bmatrix}\\
  1\ solution&amp;0\ or\ 1\ solution&amp;\infty\ solution&amp;0\ or\ \infty\ solution\
\end{array}
$
</center>

&nbsp;
### 9. 线性相关性、基、维数
#### 9.1 线性相关性
$v_1,\ v_2,\ \cdots,\ v_n$ 是 $m\times n$ 矩阵 $A$ 的列向量：

如果 $A$ 零空间中有且仅有 $0$ 向量，则各向量线性无关，$rank(A)=n$。

如果存在非零向量 $c$ 使得 $Ac=0$，则存在线性相关向量，$rank(A)\lt n$。


#### 9.2 基
向量空间 $S$ 中的一组基（basis），具有两个性质：

1. 他们线性无关；
2. 他们可以生成 $S$。

对于向量空间 $R^n$，如果 $n$ 个向量组成的矩阵为可逆矩阵，则这 $n$ 个向量为该空间的一组基，而数字 $n$ 就是该空间的维数（dimension）。


#### 9.3 维数
举例：
<center>
$
A=
\begin{bmatrix}
  1 &amp; 2 &amp; 3 &amp; 1 \\
  1 &amp; 1 &amp; 2 &amp; 1 \\
  1 &amp; 2 &amp; 3 &amp; 1 \\
\end{bmatrix}
$
</center>

$A$ 的列向量线性相关，其零空间中有非零向量，所以 $rank(A)=2=$主元存在的列数$=$列空间维数。

可以很容易的求得 $Ax=0$ 的两个解，如：

<center>
$
x_1=
\begin{bmatrix}-1 \\
  -1 \\
  1 \\
  0 \\
\end{bmatrix}，
x_2=
\begin{bmatrix}
  -1 \\
  0 \\
  0 \\
  1 \\
\end{bmatrix}
$
</center>

根据前几讲，我们知道特解的个数就是自由变量的个数，所以 $n-rank(A)=2=$自由变量存在的列数$=$零空间维数

可以得到：列空间维数 $dim C(A)=rank(A)$，零空间维数 $dim N(A)=n-rank(A)$。