---
layout: post
title: 文本分类
subtitle: "Papers Reading: Text Classification"
author: "Renovamen"
header-img: img/in-post/2020-06-10/header.jpg
header-style: text
catalog: true
tags:
  - NLP
  - Text Classification
---

## Hierarchical Attention Network

**Hierarchical Attention Networks for Document Classification.** *Zichao Yang, et al.* NAACL 2016. [[Paper]](https://www.aclweb.org/anthology/N16-1174.pdf){:target="_blank"}

- 用“词-句子-文档”的层次化结构来表示一篇文档，用词向量来表示句子向量，然后用句子向量来表示文档向量。

- 两个层次的 attention (word attention 和 sentence attention)。动机是文档中不同的句子和单词的重要性不同，且词和句子的重要性依赖于上下文。

![HAN](/img/in-post/2020-06-10/HAN.png){:width="450px"}


### Word Encoder

双向 [GRU](/2019/02/15/rnn-with-its-friends/#gru){:target="_blank"}：

$$
\overrightharpoon{h}_{it} = \overrightharpoon{\text{GRU}} (x_{it}), t \in [1, T]
$$

$$
\overleftharpoon{h}_{it} = \overleftharpoon{\text{GRU}} (x_{it}), t \in [T, 1]
$$

$$
h_{it} = [\overrightharpoon{h}_{it}; \overleftharpoon{h}_{it}]
$$

$$x_{ij} = W_e w_{ij}$$ 是文档中第 $$i$$ 个句子的第 $$t$$ 个单词的词嵌入向量，$$T$$ 为该句子中的单词个数。


### Word Attention

对每个 $$h_{it} $$ 计算一个权重（MLP + softmax），然后加权平均得到句子向量 $$s_i$$：

$$
u_{it} = \text{tanh} (W_w h_{it} + b_w)
$$

$$
\alpha_{it} = \frac{\exp (u_{it}^{\top} u_w)}{\sum_t \exp (u_{it}^{\top} u_w)}
$$

$$
s_i = \sum_t \alpha_{it} h_{it}
$$

softmax 中，$$u_w$$ 是一个随机初始化的 context vector，用于表示哪些词更重要。


### Sentence Encoder

依然是双向 GRU，只不过输入为上一步得到的句子向量 $$s_i$$：

$$
\overrightharpoon{h}_i = \overrightharpoon{\text{GRU}} (s_i), t \in [1, L]
$$

$$
\overleftharpoon{h}_i = \overleftharpoon{\text{GRU}} (s_i), t \in [L, 1]
$$

$$
h_i = [\overrightharpoon{h}_i; \overleftharpoon{h}_i]
$$

其中，$$L$$ 为文档中的句子个数。

### Sentence Attention

对每个 $$h_i $$ 计算一个权重（MLP + softmax），然后加权平均得到文档向量 $$v$$：

$$
u_i = \text{tanh} (W_s h_i + b_s)
$$

$$
\alpha_{it} = \frac{\exp (u_i^{\top} u_s)}{\sum_t \exp (u_i^{\top} u_s)}
$$

$$
v = \sum_t \alpha_i h_i
$$

$$u_s$$ 依然是是一个随机初始化的 context vector，用于表示哪些句子更重要。

### Document Classification

最后把文档向量 $$v$$ 扔进 softmax 来进行分类：

$$
p = \text{softmax} (W_c v + b_c)
$$

损失函数为：

$$
L = - \sum_d \log p_{dj}
$$

$$p_{dj}$$ 是文档 $$d$$ 的真实标签 $$j$$ 出现的概率。