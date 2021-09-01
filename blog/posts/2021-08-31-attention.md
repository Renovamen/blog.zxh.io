---
layout: post
title: Attention 大锅烩
subtitle: Attention's Big Family
author: "Renovamen"
date: 2021-08-31
header_img: /img/in-post/2021-08-31/header.jpg
catalog: true
tags:
  - Deep Learning
---

长期更新和实现看过的各种论文里的 attention 机制，咕咕咕，实现地址在：[<v-icon name="ri-link-m" scale="0.9"/> Github](https://github.com/Renovamen/torchattn)

<!-- more -->


提前定义，$F \in \Reals^{N \times d}$ 是一个特征，在文本任务里，$N$ 是文本长度，$d$ 是词向量维度；在视觉任务里，$N$ 是特征图的 $W \times H$，$d$ 是通道数量。


## Self-Attenion

**Attention Is All You Need.** *Ashish Vaswani, et al.* NIPS 2017. [[Paper]](https://papers.nips.cc/paper/7181-attention-is-all-you-need.pdf) [[Code]](https://github.com/tensorflow/tensor2tensor/blob/master/tensor2tensor/models/transformer.py)

<img src="~public/img/in-post/2021-08-31/self-attention.png" width="300px" alt="self-attention" />

<p class="desc">图片来源：论文 <a href="https://arxiv.org/pdf/2105.02358.pdf" target="_blank">Beyond Self-attention: External Attention using Two Linear Layers for Visual Tasks</a></p>

$Q, V, K$ 由同一个值 $F \in \Reals^{N \times d}$ 经过线性变换得到，然后 attention map 和 context 的计算公式为：

$$
A = \text{softmax}(\frac{QK^T}{\sqrt{d_k}})
$$

$$
F_{\text{out}} = A V
$$

其中 $d_k = d / h$ 是一个注意力头的维度，$h$ 是注意力头的数量。除以 $\sqrt{d_k}$ 是因为，$d_k$ 越大 $QK^T$ 就会越大，可能就会将 softmax 函数推入梯度极小的区域，导致更新缓慢，所以要用 $\sqrt{d_k}$ 对 $QK^T$ 进行缩放。

最后 $F_{\text{out}}$ 会经过线性层、残差连接和 Layer Normalization。

一个简化版本是，把线性变换扔掉，直接用 $F$ 计算 attention，即 $Q = K = V = F$，从而省掉那三个线性层的计算量：

<img src="~public/img/in-post/2021-08-31/simplified-self-attention.png" width="300px" alt="simplified-self-attention" />

<p class="desc">图片来源：论文 <a href="https://arxiv.org/pdf/2105.02358.pdf" target="_blank">Beyond Self-attention: External Attention using Two Linear Layers for Visual Tasks</a></p>

$$
A = \text{softmax}(\frac{FF^T}{\sqrt{d_k}})
$$

$$
F_{\text{out}} = A F
$$

Self Attention 是在计算任意两个位置之间的相关性，得到一个 $N \times N$ 的 attention map，所以计算复杂度是 $O(d N^2)$（“简化版本”也是这样），这是一个很高的计算开销。所以 Bert 的最大长度只有 $N = 512$。而对于视觉任务来说，$N = W \times H$，所以特征图也不能太大，一般 $W$ 和 $H$ 都需要先被降到 10+ 的数量级。


## SAGAN

**Self-Attention Generative Adversarial Networks.** *Han Zhang, et al.* ICML 2019. [[Paper]](https://arxiv.org/abs/1805.08318) [[Code]](https://github.com/brain-research/self-attention-gan)

SAGAN 是一个用 self attention 来替代了卷积层的 GAN，它跟原始 self attention 的不同在于：

- 在将 $F$ 通过线性变换得到 $Q$ 和 $K$ 时，进行了降维（$d \to d / 8$）
- 在残差连接之前，对 $F_{\text{out}}$ 进行了缩放：$\gamma F_{\text{out}}$，其中 $\gamma$ 是一个可学习的参数


## External Attention

**Beyond Self-attention: External Attention using Two Linear Layers for Visual Tasks..** *Han Zhang, et al.* arXiv 2021. [[Paper]](https://arxiv.org/abs/2105.02358) [[Code]](https://github.com/MenghaoGuo/EANet)

![external-attention](~public/img/in-post/2021-08-31/external-attention.png)

<p class="desc">图片来源：论文 <a href="https://arxiv.org/pdf/2105.02358.pdf" target="_blank">Beyond Self-attention: External Attention using Two Linear Layers for Visual Tasks</a></p>


External Attention 主要考虑了以下问题：

- 原始 self attention 会计算任意两个位置（pixel）之间的相关性，计算量太大。但实际上，attention map 是很稀疏的，只有很少量的 pixel 之间有关联，所以没有必要用 $N \times N$ 的 attention map
- 原始 self attention 只考虑了同一个样本中不同 pixel 之间的关系，但没有考虑不同样本间的关联

因此 External Attention 提出用 external memory unit $M_k$ 和 $M_v$（都是可学习的参数）来代替 $K$ 和 $V$：

$$
A = \text{Norm}(Q M_k^T)
$$

$$
F_{\text{out}} = A M_v
$$

其中 $M \in \Reals^{S \times d}$，$S$ 是一个超参，这样计算复杂度就变为了 $O(d S N)$，与 $N$ 线性相关。因为 $S$ 可以取得远远小于 $N$（在论文的实验中，$S = 64$ 的时候效果就已经很好了），所以计算复杂度可以降低很多。

$\text{Norm}(\cdot)$ 是 double-normalization 操作。Softmax 只会对一个维度进行归一化，但 attention map 对于输入特征的 scale 比较敏感，所以 double-normalization 在 softmax 之后对另一个维度也进行了归一化：

$$
\begin{gathered}
  \tilde{a} = Q M_k^T \\
  \hat{a}_{ij} = \underbrace{\frac{\text{exp} (\tilde{a}_{ij})}{\sum_k \text{exp} (\tilde{a}_{\textcolor{red}{k}j})}}_{\text{Softmax}} \\
  a_{ij} = \frac{\hat{a}_{ij}}{\sum_k \hat{a}_{i\textcolor{red}{k}}}
\end{gathered}
$$
