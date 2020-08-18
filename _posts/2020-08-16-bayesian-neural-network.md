---
layout: post
title: 贝叶斯神经网络
subtitle: "万恶的贝叶斯嗷，真的学得会吗"
author: "Renovamen"
header-img: img/in-post/2020-08-16/header.png
header-style: text
catalog: true
tags:
  - Machine Learning
  - Deep Learning
  - Math
---

Radford Neal: I don't necessarily think that the Bayesian method is the best thing to do in all cases...

Geoff Hinton: Sorry Radford, my prior probability for you saying this is zero, so I couldn't hear what you said.

## 关于贝叶斯估计

$$X$$ 的概率密度函数为 $$p_\theta(X)$$，现在观测到了一组样本 $$(X_1, X_2, \dots, X_n) = (x_1, x_2, \dots, x_n)$$，要估计参数 $$\theta$$。

### 极大似然估计

**极大似然估计（Maximum Likelihood Estimation，MLE）**，频率学派的思想。频率学派的观点是：模型参数 $$\theta$$ 存在唯一真值，只是这个真值是未知的。如果当 $$\theta = 
\hat{\theta}_{\text{MLE}}$$ 时，事件 $$(X_1, X_2, \dots, X_n) = (x_1, x_2, \dots, x_n)$$ 发生的可能性最大，那么就说 $$\hat{\theta}_{\text{MLE}}$$ 是 $$\theta$$ 的极大似然估计。

$$
\begin{aligned}
  \hat{\theta}_{\text{MLE}}&= \arg \max_\theta p_\theta(x) \\
    &= \arg \max_\theta \prod_{i=1}^n p_\theta(x_i) \\
    &= \arg \max_\theta \log \prod_{i=1}^n p_\theta(x_i) \\
    &= \arg \max_\theta \sum_{i=1}^n \log p_\theta(x_i) \\
    &= \arg \min_\theta - \sum_{i=1}^n \log p_\theta(x_i)
\end{aligned}
$$

也就是说最后需要优化的是 Negative Log Likelihood (NLL)。经常看到的用频率学派的方法求抛硬币概率的问题，本质上就是在优化 NLL：

抛硬币可以看做参数为 $$\theta$$ 的 Bernoulli 分布：

$$
p_\theta(x_i) = 

\begin{cases}
  \theta &x_i = 1 \\
  1 - \theta &x_i = 0
\end{cases}

= \theta^{x_i} (1 - \theta)^{1-x_i}
$$

那么 NLL：

$$
\text{NLL} = - \sum_{i=1}^n \log p_\theta(x_i) = - \sum_{i=1}^n \log \theta^{x_i} (1 - \theta)^{1-x_i}
$$

令导数为 0 来求极值：

$$
\text{NLL}' = - \sum_{i=1}^n \left (\frac{x_i}{\theta} + (1-x_i) \frac{-1}{1 - \theta} \right ) = 0
$$

$$
\rArr \frac{\sum_{i=1}^n x_i}{\theta} - \frac{n - \sum_{i=1}^n x_i}{1 - \theta}  = 0
$$

$$
\rArr \theta = \frac{\sum_{i=1}^n x_i}{n}
$$

即 $$\theta$$ 为正面的次数除以总共的抛硬币次数。

### 贝叶斯估计

**贝叶斯估计（Bayesian Estimation）**，贝叶斯学派的思想。贝叶斯学派认为 $$\theta$$ 也是随机的，和一般的随机变量没有本质区别，因此只能根据观测样本去估计参数 $$\theta$$ 的分布。其基础是贝叶斯公式：

$$
p(\theta | x) = \frac{p(x | \theta)p(\theta)}{p(x)}
$$

$$
p(x) = \sum_\theta p(x | \theta)p(\theta)
$$

$$
\hat{\theta}_{\text{BE}} = \mathbb{E}[p(\theta | x)]
$$

其中：

- $$p(\theta)$$：**先验（prior）**，指在没有观测到任何数据时对 $$\theta$$ 的预先判断，比如认为硬币大概率是均匀的，所以 $$\theta$$ 的先验可以是最大值取在 0.5 处的 Beta 分布；

- $$p(x \text{\textbar} \theta)$$：**似然（likelihood）**，假设 $$\theta$$ 已知后，观测数据应该是什么样子；

- $$p(\theta \text{\textbar} x)$$：**后验（posterior）**，最终的参数分布；

- $$p(x)$$，样本的先验，一个常量（和要估计的参数无关）。

相当于贝叶斯估计是在 $$\theta$$ 服从先验分布 $$p(\theta)$$ 的前提下，然后根据观测到的样本去校正先验分布，最终得到后验分布 $$p(\theta \text{\textbar} x)$$，然后取后验分布的期望作为参数的估计值。

如果先验是均匀分布，则贝叶斯估计等价于极大似然，因为先验是均匀分布相当于对参数没有任何预判。



### 最大后验估计

贝叶斯估计估计的是 $$\theta$$ 的后验分布，而**最大后验估计（Maximum a Posteriori，MAP）**考虑的是后验分布极大化时 $$\theta$$ 的取值：

$$
\begin{aligned}
  \hat{\theta}_{\text{MAP}}&= \arg \max_\theta p(\theta | x) \\
    &= \arg \min_\theta - \log p(\theta | x) \\
    &=  \arg \min_\theta - \log \frac{p(x | \theta)p(\theta)}{p(x)}\\
    &=  \arg \min_\theta - \log p(x | \theta) - \log p(\theta) + \log p(x)\\
    &=  \arg \min_\theta - \log p(x | \theta) - \log p(\theta)
\end{aligned}
$$

$$- \log p(x \text{\textbar} \theta)$$ 就是 NLL，所以相比 MLE，MAP 就是在优化时多了一个先验项 $$p(\theta)$$。在有的情况下，$$- \log p(\theta)$$ 可以看做用 MLE 时结构化风险里的正则化项，比如当先验是一个高斯分布：

$$
\\[2px]
p(\theta) = \text{constant} \times e^{- \frac{\theta^2}{2 \sigma^2}}
$$

constant 是一个参数无关的常数项，在上式中它相当于 $$\frac{1}{\sqrt{2 \pi} \sigma}$$。那么：

$$
- \log p(\theta) = \text{constant} + \frac{\theta^2}{2 \sigma^2}
$$

这时的 $$- \log p(\theta)$$ 就相当于一个 L2 正则化项（倾向于取小值）。

而当先验是一个拉普拉斯分布（Laplace Distribution）时，$$- \log p(\theta)$$ 相当于一个 L1 正则化（倾向于取 0 使权重稀疏）。

MAP 提供了一个直观的方法来设计复杂但可解释的正则化项，比如可以通过把混合高斯分布作为先验来得到更复杂的正则化项。


## 贝叶斯神经网络

这一节主要基于论文：

**Weight Uncertainty in Neural Networks.** *Charles Blundell, et al.* ICML 2015. [[Paper]](https://arxiv.org/pdf/1505.05424.pdf){:target="_blank"}

在看这一节之前，或许先去看看[概率图模型](https://notebook.renovamen.ink/ai/ml/pcg/){:target="_blank"}中的贝叶斯网络部分比较好。

优点：

- 贝叶斯神经网络中的权重都是随机变量，做预测的时候用的是采样后的权重，所以可以集成某权重分布上的多组神经网络进行预测，相当于 ensemble。

- 反应数据中的不确定性（aleatoric uncertainty）

  - [Deep Learning Is Not Good Enough, We Need Bayesian Deep Learning for Safe AI](https://alexgkendall.com/computer_vision/bayesian_deep_learning_for_safe_ai/){:target="_blank"}

  - [贝叶斯神经网络建模两类不确定性](https://zhuanlan.zhihu.com/p/88654038){:target="_blank"}

- 为权重引入不确定性进行正则化


### 神经网络模型

这是一个神经元：

![neuron](/img/in-post/2020-08-16/neuron.png){:width="400px"}

一般的神经网络中，$$w$$ 和 $$b$$ 都是确定的值。对于数据集 $$D = \{(x_1, y_1), \dots, (x_n, y_n)\}$$，其学习可以视作是一个极大似然估计：

$$
\begin{aligned}
  w_{\text{MLE}}&= \arg \max_w \log p(D | w) \\
    &= \arg \max_w \sum_{i=1}^n \log p(y_i | x_i, w)
\end{aligned}
$$

有些时候我们对 $$w$$ 有一些偏好，于是如[之前](#最大后验估计)所说，引入先验（最大后验估计）可以引入正则化项：

$$
\begin{aligned}
  w_{\text{MAP}}&= \arg \max_w \log p(w | D) \\
    &= \arg \max_w \log p(D | w) + \log p(w)
\end{aligned}
$$


### 气氛突然贝叶斯了起来

而在贝叶斯神经网络中，$$w$$ 和 $$b$$ 由确定的值变为了分布，因此概率模型就变为了：

$$
p(y | x) = \mathbb{E}_{p(w | D)} [p(y | x, w)]
$$

那么存在两个问题：

- 后验 $$p(w \text{\textbar} D)$$ 是 intractable 的。由贝叶斯公式：

  $$
  p(w | D) = \frac{p(D|w)p(w)}{p(D)}
  $$

  而输入数据分布 $$p(D)$$ 通常是是 intractable 的，因为这相当于要对所有可能的 $$w$$ 求和（或积分）：

  $$
  p(D) = \sum_w p(D | w)p(w)
  $$

- 期望 $$p(y \text{\textbar} x)$$ 也不好求，因为这相当于要对每一个可能的 $$p(w \text{\textbar} D)$$ 计算神经网络的预测值

朋友，所有搞不定的分布都用**变分推断**，乌拉！（不是


### 变分推断

对于第一个问题求后验 $$p(w \text{\textbar} D)$$，可以用变分推断来解决。变分推断可以参考[这里](https://notebook.renovamen.ink/ai/ml/pcg/variational-inference/){:target="_blank"}，其思想是用一个由参数 $$\theta$$ 控制的分布 $$q(w \text{\textbar} \theta)$$ 来近似 $$p(w \text{\textbar} D)$$，这两个分布之间的 KL 散度要尽可能小：

$$
\begin{aligned}
  \theta^\text{*} &= \arg \min_\theta \text{KL} [q(w | \theta) \| p(w | D)] \\
    &= \arg \min_\theta \sum_w q(w | \theta) \log \frac{q(w | \theta)}{p(w | D)} \\
    &= \arg \min_\theta \sum_w q(w | \theta) \log \frac{q(w | \theta)p(D)}{p(D | w)p(w)} \\
    &= \arg \min_\theta \sum_w q(w | \theta) \log \frac{q(w | \theta)}{p(w)} - \sum_w q(w | \theta) \log p(D | w) + \sum_w q(w | \theta) \log p(D) \\
    &= \arg \min_\theta \text{KL} [q(w | \theta) \| p(w)] - \mathbb{E}_{q(w|\theta)} [\log p(D|w)]
\end{aligned}
$$

写成目标函数就是：

$$
F(D,\theta) = \underbrace{\text{KL} [q(w | \theta) \| p(w)]}_{\text{complexity
cost}} - \underbrace{\mathbb{E}_{q(w|\theta)} [\log p(D|w)]}_{\text{likelihood cost}} \tag{1}
$$

这个函数也被称为 variational free energy，就是 ELBO 加个负号。所以我们要最大化 ELBO，但要最小化 variational free energy。

式 (1) 可以被看做两种代价的组合：

- complexity cost：权重和其先验的差距

- likelihood cost：对样本的拟合程度

相当于既要尽可能拟合样本，又要尽可能符合先验，在两种代价中取平衡，是一个 trade-off 的过程，可以看做正则化。

式 (1) 是个优化问题，所以可以上梯度下降。但在这之前，还有一些问题需要解决，因为式 (1) 没法求梯度。

### 蒙特卡洛采样

式 (1) 的第一项中，$$q(w \text{\textbar} \theta)$$ 是个我们自己定的分布（通常是高斯分布），$$p(w)$$ 是个我们自己定的先验（通常也是高斯分布），都有闭式解，可以直接对 $$\theta$$ 求梯度。

主要问题在第二项 $$\mathbb{E}_{q(w \text{\textbar} \theta)} [\log p(D \text{\textbar} w)]$$ 上。这是个期望，它不好求，那么算它的时候一般会喜闻乐见地用蒙特卡洛采样来近似，即根据 $$q(w \text{\textbar} \theta)$$ 采样 M 个 $$w_i$$，然后有：

$$
\mathbb{E}_{q(w | \theta)} [\log p(D | w)] \approx \frac{1}{M} \sum_{i=1}^M \log p(D | w_i)
$$

于是近似之后这一项就变得跟参数 $$\theta$$ 无关了，梯度下降时这一项关于 $$\theta$$ 的梯度会为 0。这是因为 $$z$$ 和 $$\theta$$ 之间不是确定性函数关系，而是一种采样的关系。于是就有一种叫**重参数化**的 trick，把这种采样的关系转变成确定性函数关系。

### 重参数化

**重参数化（reparameterization）**是[变分自编码器（Variational Auto-Encoder, VAE）](https://notebook.renovamen.ink/ai/dl/generative-models/vae/){:target="_blank"}引入的操作。先引入一个分布为 $$p(\epsilon)$$ 的随机变量 $$\epsilon$$，然后把期望 $$\mathbb{E}_{q(w \text{\textbar} \theta)} [\log p(D \text{\textbar} w)]$$ 重写为：

$$
\mathbb{E}_{q(w | \theta)} [\log p(D | w)] = \mathbb{E}_{p(\epsilon)} [\log p(D | t(\theta, \epsilon))]
$$

其中 $$w \triangleq t(\theta, \epsilon)$$，是一个确定性函数，这样就可以先从 $$p(\epsilon)$$ 中采样出 $$\epsilon$$，然后可导地引入 $$w$$。例如 $$q(w \text{\textbar} \theta) = \mathcal{N}(\mu, \sigma^2)$$，$$\mu, \sigma$$ 依赖于参数 $$\theta$$，那么可以把 $$w$$ 写为：

$$
w \triangleq t(\theta, \epsilon) = \mu + \sigma \odot \epsilon
$$

其中 $$\epsilon \thicksim \mathcal{N}(0, 1)$$。

---

而该论文对此作了推广。对于期望 $$\mathbb{E}_{q(w \text{\textbar} \theta)} [\log p(D \text{\textbar} w)]$$，它的梯度 $$\frac{\partial}{\partial \theta} \mathbb{E}_{q(w \text{\textbar} \theta)} [\log p(D \text{\textbar} w)]$$ 不好直接算，采样之后梯度又为 0，那么能不能把求导移到期望里面去：$$\mathbb{E}_{q(w \text{\textbar} \theta)} [\frac{\partial}{\partial \theta} \log p(D \text{\textbar} w)]$$？

并不能，因为期望（积分）是跟参数 $$\theta$$ 有关的，而 $$\log p(D \text{\textbar} w)$$ 是与 $$\theta$$ 无关的，把求导移进去的话梯度又为 0 了。因此该论文把 $$w$$ 写为 $$t(\theta, \epsilon)$$，其中 $$\epsilon \thicksim q(\epsilon)$$。然后它证明了对于函数 $$f(w, \theta)$$，只要有 $$q(\epsilon)d \epsilon = q(w \text{\textbar} \theta)dw$$，就有：

$$
\begin{aligned}
  \frac{\partial}{\partial \theta} \mathbb{E}_{q(w | \theta)} [f(w, \theta)] &= \frac{\partial}{\partial \theta} \int f(w, \theta)q(w | \theta) dw \\
    &= \frac{\partial}{\partial \theta} \int f(w, \theta) q(\epsilon)d \epsilon\\
    &= \mathbb{E}_{q(\epsilon)} \left [\frac{\partial f(w, \theta)}{\partial w} \frac{\partial w}{\partial \theta} +  \frac{\partial f(w, \theta)}{\partial \theta} \right ]
\end{aligned}
$$

这时就可以把求导移进期望里了。我从直觉上来理解的话，现在 $$\mathbb{E}_{q(w \text{\textbar} \theta)} [\log p(D \text{\textbar} w)]$$ 可以写成：

$$
\mathbb{E}_{q(w | \theta)} [\log p(D | w)] = \mathbb{E}_{q(\epsilon)} [\log p(D | t(\theta, \epsilon))]
$$

那么现在期望就和 $$\theta$$ 无关，而似然则和 $$\theta$$ 有关了，于是就可以把求导移进去了。

---

论文里令 $$f(w \text{\textbar} \theta) = \log q(w \text{\textbar} \theta) - \log p(w)p(D \text{\textbar} w)$$，则：

$$
F(D,\theta) = \mathbb{E}_{q(w | \theta)} [f(w | \theta)] \approx \sum_{i=1}^n \log q(w_i | \theta) - \log p(w_i) - \log p(D|w_i)
$$

这个近似把 KL 散度也蒙特卡洛了，这种做法摆脱了对 KL 散度有闭式解的要求。虽然在很多情况下 KL 散度能写出闭式解，但这样可以适配更多的先验后验分布形式。




## 参考

- [聊一聊机器学习的MLE和MAP：最大似然估计和最大后验估计](https://zhuanlan.zhihu.com/p/32480810){:target="_blank"}

- [Weight Uncertainty in Neural Networks.](https://arxiv.org/pdf/1505.05424.pdf){:target="_blank"} *Charles Blundell, et al.* ICML 2015.

- [贝叶斯深度学习是什么，和传统神经网络有何不同？](https://www.zhihu.com/question/352295592){:target="_blank"}

- [Deep Learning Is Not Good Enough, We Need Bayesian Deep Learning for Safe AI](https://alexgkendall.com/computer_vision/bayesian_deep_learning_for_safe_ai/){:target="_blank"}
  
- [贝叶斯神经网络建模两类不确定性](https://zhuanlan.zhihu.com/p/88654038){:target="_blank"}

- [Bayesian Neural Networks：贝叶斯神经网络](https://zhuanlan.zhihu.com/p/81170602){:target="_blank"}