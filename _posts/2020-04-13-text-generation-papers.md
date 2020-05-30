---
layout: post
title: Text Generation
subtitle: "Papers Reading: Machine Translation & Text Summarization"
author: "Renovamen"
header-img: img/in-post/2020-04-13/header.jpg
header-style: text
catalog: true
tags:
  - NLP
  - Text Generation
  - Text Summarization
  - Machine Translation
---

## Machine Translation

给定源语言句子 $$x$$，目标是最大化其对应的目标语言翻译 $$y$$ 的概率，即：

$$
\hat{y} = \arg \max_y p(y \text{\textbar} x)
$$


### Seq2Seq 

**Sequence to Sequence Learning with Neural Networks.** *Ilya Sutskeve, Oriol Vinyals and Quoc V. Le.* NIPS 2014. [[Paper]](https://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks.pdf){:target="_blank"}

提出了 Sequence to Sequence 框架，由一个 encoder 和一个 decoder 组成。

![seq2seq](/img/in-post/2020-04-13/seq2seq.png)


#### Encoder

一个 LSTM，用于把源语言句子 $$x = (x_1, ... , x_{T_x})$$ 编码成一个固定长度的向量 $$c$$：

$$
h_t = f_1 (x_t, h_{t−1}) 
$$

$$
c = h_{T_x}
$$

即 LSTM 最后一个时间步输出的隐状态就是句子编码后的向量。\<EOS\> 是终止符，不用编码。


#### Decoder

一个 LSTM，用于生成目标语言翻译 $$y = (y_1, ... , y_{T_y})$$，第一个时间步的输入是 $$c$$，生成终止符 \<EOS\> 后停止句子生成。

把[上述](#machine-translation)联合概率用链式法则分解后得到：

$$
p(y) = \prod_{t=1}^T p(y_t \text{\textbar} \{ y_1, ..., y_{t-1} \}, c)
$$

每个时间步的条件概率为：

$$
p(y_t \text{\textbar} \{ y_1, ..., y_{t-1} \}, c) = g(y_{t-1}, s_t, c)
$$

$$
s_i = f_2 (s_{i−1}, y_{i−1})
$$

$$g$$ 是一个非线性函数，用于输出单词 $$y_t$$ 的概率（比如 softmax），$$s_t$$ 是 LSTM（decoder）在 $$t$$ 时刻的隐状态。


### Seq2Seq + Attention

**Neural Machine Translation by Jointly Learning to Align and Translate.** *Dzmitry Bahdanau, Kyunghyun Cho and Yoshua Bengio.* ICLR 2015. [[arXiv]](https://arxiv.org/pdf/1409.0473.pdf){:target="_blank"}

首次把 attention 引入 seq2seq。

![seq2seq attention](/img/in-post/2020-04-13/seq2seq-attention.png){:width="450px"}


#### Encoder

encoder 是一个 BiLSTM，即有两个 LSTM：

- 第一个把源句子正向输入（$$x_1 \rightarrow x_{T_x}$$），所有时间步输出的隐状态为 $$(\overrightarrow{h_1}, ... , \overrightarrow{h_{T_x}})$$

- 第二个把源句子逆向输入（$$x_{T_x} \rightarrow x_1$$），所有时间步输出的隐状态为 $$(\overleftarrow{h_1}, ... , \overleftarrow{h_{T_x}})$$

最终，encoder 每个时间步的输出就是把 $$\overrightarrow{h_j}$$ 和 $$\overleftarrow{h_j}$$ 拼起来：

$$h_j = [\overrightarrow{h_j}; \overleftarrow{h_j}]$$

所有时间步的输出为：

$$
(h_1, ..., h_{T_x})
$$


#### Decoder

把每个时间步的条件概率定义为：

$$
p(y_i \text{\textbar} y_1, ... , y_{i−1}, x) = g(y_{i−1}, s_i, c_i)
$$

$$s_i$$ 是 LSTM 在 $$i$$ 时刻的隐状态：

$$
s_i = f(s_{i−1}, y_{i−1}, c_i)
$$

$$c_i$$ 是 $$i$$ 时刻的 context vector，通过把 encoder 每个时间步的输出向量加权平均得到：

$$
c_i = \sum_{j=1}^{T_x} \alpha_{ij} h_j
$$

$$\alpha_{ij}$$ 是 $$h_j$$ 的权重，计算公式为：

$$
e_{ij} = a(s_{i−1}, h_j)
$$

$$
\alpha_{ij} = \frac{\exp (e_{ij})}{\sum_{k=1}^{T_x} \exp (e_{ik})}
$$

$$a$$ 是一个 MLP，$$\alpha_{ij}$$ 由 $$e_{ij}$$ 归一化（softmax）后得到。相当于 $$\alpha_{ij}$$ 代表了在生成第 $$i$$ 个目标句子单词时，第 $$j$$ 个源句子单词的重要性。


### Unsupervised NMT

**Unsupervised Neural Machine Translation.** *Mikel Artetxe, et al.* ICLR 2018. [[arXiv]](https://arxiv.org/pdf/1710.11041.pdf){:target="_blank"} [[Code]](https://github.com/artetxem/undreamt){:target="_blank"}

**Unsupervised Machine Translation Using Monolingual Corpora Only.** *Guillaume Lample, et al.* ICLR 2018. [[Paper]](https://research.fb.com/wp-content/uploads/2018/03/unsupervised-machine-translation-using-monolingual-corpora-only.pdf){:target="_blank"}



## Text Summarization

### Unsupervised

#### DAE

**Unsupervised Sentence Compression using Denoising Auto-Encoders.** *Thibault Fevry and Jason Phang.* CoNLL 2018. [[Paper]](https://www.aclweb.org/anthology/K18-1040.pdf){:target="_blank"} [[Code]](https://github.com/zphang/usc_dae){:target="_blank"}