---
layout: post
title: 持续学习
subtitle: "Continual / Lifelong / Incremental Learning"
author: "Renovamen"
header-img: img/in-post/2020-08-01/header.png
header-style: text
catalog: true
tags:
  - Deep Learning
  - Continual Learning
---

[Continual Learning 论文列表](https://notebook.renovamen.ink/papers/dl/continual-learning/){:target="_blank"}

## 问题定义

### 离线监督学习

传统的离线监督学习（offline supervised learning）中，训练集是一个固定的 $$D = \{ (x_i, y_i) \}^n_{i=1}$$，由 n 个样本组成，每个样本包含一个输入向量 $$x_i \in \mathcal{X}$$ 和其对应的输出 $$y_i \in \mathcal{Y}$$。一般会假设样本满足**独立同分布（independent and identically distributed，iid）**，即训练数据和测试数据满足相同分布。

学习目标一般是找到一个函数 $$f_{\theta}(x): \mathcal{X} \to \mathcal{Y}$$（$$\theta$$ 是从训练数据中估计出的参数），使得损失函数 $$L(f_{\theta}(x), y)$$ 最小：

$$
\min_{\theta} \frac{1}{|D|} \sum_{(x_i, y_i) \thicksim D} L(f_{\theta}(x), y)
$$