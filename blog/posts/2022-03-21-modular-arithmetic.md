---
layout: Post
title: 同余运算
subtitle: Modular Arithmetic
author: Renovamen
date: 2022-03-21
headerImage: /img/in-post/2022-03-21/header.jpeg
permalinkPattern: /post/:year/:month/:day/:slug/
catalog: true
hide: true
tags:
  - Math
  - Cryptography
---

在 CS 538 密码学彻底躺平之后的一次记录。

<!-- more -->

## 基础

记整数集合 $\Z = \{ \dots, -2, -1, 0, 1, 2, \dots \}$。

### 整除

:::info 整除
有整数 $a, b \in \Z$，$a \not= 0$。如果存在整数 $k$ 使得 $ak = b$，那么我们称 $b$ 可以被 $a$ 整除，或 $a$ 是 $b$ 的约数（Divisor），记作 $a \mid b$。
:::


### 余数

:::info 余数（Remainder）
有整数 $a, b \in \Z$，$b > 0$。那么一定存在唯一的一对整数 $q, r \in \Z$，满足 $a = bq + r$ 且 $0 \leq r < b$。

我们称 $q$ 为商（Quotient），称 $r$ 为余数（Remainder）。
:::

:::tip 模除（Modulo Operation）
有整数 $a, b \in \Z$，$b > 0$。假设 $q, r \in \Z$ 是上述定理中提到的满足 $a = bq + r$ 且 $0 \leq r < b$ 的唯一的一对整数。

模除（Modulo Operation）：$a \text{ mod } b := r$

在某些参考资料中，也可能会用 $a \text{ \% } b$ 来表示模除。
:::


### 同余

:::tip 同余（Congruence）
有整数 $a, b, n \in \Z$，$n > 0$。如果有 $n \mid (a - b)$，则我们称 $a$ 同余于（is congruent to）$b$ 模 $n$，记做 $a \equiv_n b$。

如果 $n \not| \; (a - b)$，则 $a$ 不同余于 $b$ 模 $n$，记做 $a \not \equiv_n b$。

在某些参考资料中，也可能会用 $a \equiv b \text{ (mod } n)$ 来表示同余。
:::

由上述定义，我们可以推出：$a \text{ mod } n = b \text{ mod } n$ 是 $a \equiv_n b$ 的充分必要条件。

:::details 证明
我们可以把 $a, b$ 写为 $a = q_a n + r_a$ 和 $b = q_b n + r_b$，其中 $q_a, q_b, r_a, r_b$ 都是整数，且 $0 \leq r_a, r_b < n$。因此，这个问题等价于证明：$r_a = r_b$ 是 $n \mid (a - b)$ 的充分必要条件。

**必要条件**，即 $n \mid (a - b)$ 可以推出 $r_a = r_b$

令 $a - b = kn$。那么有：

$$
\begin{gathered}
a - b = (q_a - q_b) n + (r_a - r_b) = kn \\
\Rightarrow r_a - r_b = (k - q_a + q_b) n \\
\Rightarrow n \mid (r_a - r_b)
\end{gathered}
$$

又因为 $-n < r_a - r_b < n$，所以有 $r_a = r_b$。

---

**充分条件**，即 $r_a = r_b$ 可以推出 $n \mid (a - b)$

因为：

$$
a - b = (q_a - q_b) n + (r_a - r_b) = (q_a - q_b) n
$$

所以 $n \mid (a - b)$。
:::
