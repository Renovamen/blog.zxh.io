---
layout: post
title: Image Caption
subtitle: "Papers Reading: Image Caption & Image Asethetic Caption"
author: "Renovamen"
header-img: img/in-post/2020-03-17/header.jpg
header-style: text
catalog: true
tags:
  - CV
  - Image Caption
  - Text Generation
---

我的 Pytorch 复现：[<i class="fas fa-link"></i> Github: Renovemen/Image-Caption](https://github.com/Renovamen/Image-Caption){:target="_blank"}

## Show and Tell

**Show and Tell: A Neural Image Caption Generator.** *Oriol Vinyals, et al.* CVPR 2015. [[Paper]](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Vinyals_Show_and_Tell_2015_CVPR_paper.pdf){:target="_blank"} [[Code]](https://github.com/tensorflow/models/tree/master/research/im2txt){:target="_blank"}


Google 出品，算是最早开用 CNN-LSTM 做 Image Caption 这个坑的论文之一。

**P.S.** 依然是在 CVPR 2015 上，Stanford 也发了篇模型核心结构差不多的论文：

**Deep Visual-semantic Alignments for Generating Image Descriptions.** *Andrej Karpathy and Li Fei-Fei.* CVPR 2015. [[Paper]](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Karpathy_Deep_Visual-Semantic_Alignments_2015_CVPR_paper.pdf){:target="_blank"} [[NeuralTalk]](https://github.com/karpathy/neuraltalk){:target="_blank"} [[NeuralTalk2]](https://github.com/karpathy/neuraltalk2){:target="_blank"}

但鉴于 NeuralTalk 的代码是用 Lua 和 Torch 写的，而我不会 Lua 和 Torch（...），所以这篇论文就没认真看......


### CNN-LSTM

**模型目标：**

$$
\theta^* = \arg \max_{\theta} \sum_{(I,S)} \log p(S \text{\textbar} I; \theta)
$$

$$\theta$$ 是模型参数，$$I$$ 是图像，$$S$$ 是对应的正确的图像描述。也就是要最大化正确描述的概率。

为了解决解决 $$S$$ 的长度不定的问题，用条件概率的链式法则来把上述联合概率分解成以下形式，这里为了方便扔掉了模型参数 $$\theta$$：

$$
\log p(S \text{\textbar} I) = \sum_{t=0}^N \log p(S_t \text{\textbar} I, S_0, ... , S_{t-1})
$$

$$S_0$$ 是起始符，$$S_N$$ 是终止符。如果生成了终止符，则该句子生成结束。


**LSTM：**

在 LSTM 中，每个时间步的条件概率可以表示为：

$$
\log p(S_t \text{\textbar} S_1, ... , S_{t-1}, I) = k(h_t, z_t)
$$

$$k$$ 是一个非线性函数，输出为单词 $$S_t$$ 的概率。$$h_t$$ 是 LSTM 在当前时间步的隐状态。$$z_t$$ 是图像特征，在这里是 CNN 最后一个全连接层输出的一个向量；在加了 Attention 机制的 LSTM 中则是每个时间步对 CNN 最后一个卷积层输出的特征图进行 Attention 操作后得到的一个向量，依赖于 $$h_t$$。

新的 $$x_t$$ 输入后，隐状态更新的公式为：

$$
h_{t} = f(x_t, h_{t-1}, c_{t-1})
$$

$$c_{t-1}$$ 是 LSTM 在上一时间步的细胞状态。

**CNN：**

用来提图像特征的 CNN 直接用了 Inception V3：

**Rethinking the Inception Architecture for Computer Vision.** *Christian Szegedy, et al.* CVPR 2016. [[Paper]](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Szegedy_Rethinking_the_Inception_CVPR_2016_paper.pdf){:target="_blank"} [[Code]](https://github.com/tensorflow/models/blob/master/research/slim/nets/inception_v3.py){:target="_blank"}

**Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift.** *Sergey Ioffe and Christian Szegedy.* arXiv 2015. [[arXiv]](https://arxiv.org/pdf/1502.03167v3.pdf){:target="_blank"}


### LSTM

在[另一篇文章](/2019/02/15/rnn-with-its-friends/#lstm){:target="_blank"}里理过 LSTM。

![LSTM](/img/in-post/2020-03-17/img2txt/lstm.png){:width="350px"}

#### Training

把 LSTM 按时间步展开就是这个样子：

![CNN-LSTM](/img/in-post/2020-03-17/img2txt/cnn-lstm.png){:width="450px"}

这样看起来就像一个前馈网络了。

假设输入的图片为 $$I$$，它的正确描述为 $$S = (S_0, ... , S_N )$$，则展开过程为：

$$
x_{-1} = \text{CNN}(I)
$$

$$
x_t = W_e S_t, t \in \{ 0 ... N-1 \}
$$

$$
p_{t+1} = \text{LSTM} (x_t), t \in \{ 0 ... N-1 \}
$$

其中，$$S_t$$ 是经过独热编码的单词，都是 $$1 \times D$$ 的向量，$$D$$ 是词典大小；$$W_e$$ 是 word embedding；$$p_t$$ 是每个时间步输出的所有单词的概率分布。

图片 $$I$$ 只在 $$t = -1$$ 时输入一次，因为论文经过实验后发现如果每个时间步都输入一遍图像，模型会更容易过拟合和学习到图像的噪声。（[这里](https://github.com/ruotianluo/ImageCaptioning.pytorch/blob/master/models/OldModel.py){:target="_blank"}复现了这种做法）

损失函数：

$$
L(I,S) = - \sum_{t=1}^N \log p_t (S_t)
$$

目标是通过调 CNN、LSTM 和 $$W_e$$ 的参数让 Loss 最小。

**训练细节**：

- 用在 ImageNet 上训练好的预训练模型来初始化 CNN 参数，效果提升明显；
- 用在一个新闻语料库上训练好的预训练模型来初始化 $$W_e$$ 参数，效果提升不明显；
- 尝试 dropout 和 ensembling，效果提升了一些；
- 调 LSTM hidden units 的数量，最后设成了 512，embedding 维度也设成了 512；
- 除了 CNN 以外，其他部分都用 SGD 来调参，随机初始化参数，固定学习率，无 momentum;
- 词典中只保留出现次数 > 5 的单词


#### Inference

在测试生成句子时使用了 beam search，beam size 设为 20。当把 beam size 设为 1（相当于 greedy search）时，BLEU 值降了 2 点左右。


### Experiments

![result](/img/in-post/2020-03-17/img2txt/img2txt-result.png){:width="400px"}


## Show, Attend and Tell

**Show, Attend and Tell: Neural Image Caption Generation with Visual Attention.** *Kelvin Xu, et al.* ICML 2015. [[Paper]](http://proceedings.mlr.press/v37/xuc15.pdf){:target="_blank"} [[Code]](https://github.com/kelvinxu/arctic-captions){:target="_blank"}

由于原版代码是用（我不会的）Theano 写的，所以这里是俩用（我大概会的）PyTorch 写的复现代码：

- [sgrvinod/a-PyTorch-Tutorial-to-Image-Captioning](https://github.com/sgrvinod/a-PyTorch-Tutorial-to-Image-Captioning){:target="_blank"}
  
  这个代码写得是真的好...

- [ruotianluo/ImageCaptioning.pytorch](https://github.com/ruotianluo/ImageCaptioning.pytorch){:target="_blank"}
  
  实现了很多模型，作者还有一个名为 [self-critical.pytorch](https://github.com/ruotianluo/self-critical.pytorch){:target="_blank"} 的加强版 repo...


首次把 Attention 机制用进 Image Caption 中。

在上述 Encoder-Decoder 结构中，Encoder 和 Decoder 之间唯一的联系只有一个固定长度的语义向量 $$x_{-1}$$，所以 Encoder 必须把原始输入的所有信息都压进 $$x_{-1}$$ 中。如果原始输入包含的信息较多， $$x_{-1}$$ 可能就无法表达所有信息。而且 $$x_{-1}$$ 携带的信息还可能被后面输入的信息覆盖掉。

于是就有了 Attention 机制，最先把它用在 seq2seq 结构中的论文是这篇做机器翻译的：

**Neural Machine Translation by Jointly Learning to Align and Translate.** *Dzmitry Bahdanau, KyungHyun Cho, and Yoshua Bengio.* arXiv 2014. [[arXiv]](https://arxiv.org/pdf/1409.0473.pdf){:target="_blank"}

### CNN

CNN 用了 VGGNet。

前面的论文是用全连接层输出的一个固定长度的向量当特征（高层特征），而这篇论文用了最后一个卷积层（用 Keras 的话说是 block5_conv3）的 $$H \times W \times D$$（$$14 \times 14 \times 512$$）的特征图来当特征（低层特征）：

$$
a = \{ \bold{a}_1, ..., \bold{a}_L \}, \bold{a}_i \in \reals^D
$$

![VGGNet](/img/in-post/2020-03-17/show-attend-tell/vggnet-arrow.png){:width="500px"}

VGGNet 结构
{:.desc}

其中 $$H$$ 和 $$W$$ 为特征图的高度和宽度，$$D$$ 为特征图的维度，$$L = H \times W$$。相当于对于图片的 $$L$$ 个位置各提一个特征，每个特征都是一个 $$D$$ 维向量（annotation vector）。

于是接下来的 LSTM 就需要在这 $$L$$ 个位置的特征里选有用的，这就是 Attention 机制。

### LSTM + Attention

以下是论文里给的 LSTM 结构图和推导公式：

- LSTM 结构：

  ![LSTM](/img/in-post/2020-03-17/show-attend-tell/attention-lstm.png){:width="400px"}

- 推导公式：

  $$
  i_t = \sigma (W_i E y_{t-1} + U_i h_{t-1} + Z_i \hat{z}_t + b_i)
  $$

  $$
  f_t = \sigma (W_f E y_{t-1} + U_f h_{t-1} + Z_f \hat{z}_t + b_f )
  $$

  $$
  c_t = f_t c_{t-1} + i_t \text{tanh} (W_c E y_{t-1} + U_c h_{t-1} + Z_c \hat{z}_t + b_c)
  $$

  $$
  o_t = \sigma (W_o E y_{t-1} + U_o h_{t-1} + Z_o \hat{z}_t + b_o)
  $$

  $$
  h_t = o_t \text{tanh} (c_t)
  $$

但从代码实现来看（以原版代码为准），图应该画成这样（代码实现跟论文描述的出入会在后面提到）（图来自论文 [Adaptive Attention](#adaptive-attention)）：

![True LSTM](/img/in-post/2020-03-17/show-attend-tell/true-attention-lstm.png){:width="400px"}

`备注`{:.info} 虽然在图和推导式里，上一步输出 $$y_{t-1}$$ 也参与了这一步的计算，但代码（原版和复现）里似乎没有参与。

跟正常 LSTM 的区别是用 context vector $$\hat{z}_t$$ 来代替了当前输入 $$x_t$$。

`备注`{:.info} 按论文里的描述是这样，即 $$x_t$$ 完全没有参与计算。但代码（原版和复现）里是把 $$\hat{z}_t$$ 和 $$x_t$$ 拼到了一起作为输入。


$$\hat{z}_t$$ 由 $$\phi$$ 函数对 $$\{ \bold{a}_1, ..., \bold{a}_L \}$$ 进行一些加权得到，$$\alpha_i$$ 为 $$\bold{a}_i$$ 的权重：

$$
\hat{z}_t = \phi(\{\bold{a}_i\}, \{\alpha_i\})
$$

Soft Attention 和 Hard Attention 的不同在于 $$\phi$$ 的不同。在 **Soft Attention** 中：

$$
\hat{z}_t = \phi(\{\bold{a}_i\}, \{\alpha_i\}) = \beta \sum_i^L \alpha_{t,i} \bold{a}_i
$$

$$\beta$$ 是一个决定当前时间步要用多少 context 信息的门控信号：

$$
\beta = \sigma (f_{\beta} (h_{t-1}))
$$

相当于在 Soft Attention 中，$$\alpha_{t,i}$$ 代表图像的第 $$i$$ 个位置的特征 $$\bold{a}_i$$ 在 $$t$$ 时刻输入 Decoder 的信息所占的比例，即对 $$\bold{a}_i$$ 求加权平均。$$\alpha_{t,i}$$ 由 Attention 模型 $$f_{att}$$（也就是一个 MLP）计算得到：

$$
e_{ti} = f_{att}(\bold{a}_i, h_{t-1})
$$

然后把 $$e_{ti}$$ 归一化（softmax）后就得到了 $$\alpha_{ti}$$：

$$
\alpha_{ti} = \frac{\exp(e_{ti})}{\sum_{k=1}^L \exp(e_{tk})}
$$


除了标准化自带的 $$\sum_i^L \alpha_{ti} = 1$$ 这个限定以外，还对 $$\alpha_{ti}$$ 加了另一个限定，来避免图像某些部分的特征被忽略（论文里设的 $$\tau = 1$$）：

$$
\sum_t \alpha_{ti} \approx \tau, \tau \geq \frac{L}{D}
$$

所以 Soft Attention 模型的训练目标是要最小化以下惩罚函数：

$$
L_d = - \log(p(y \text{\textbar} \bold{a})) + \lambda \sum_i^L (1 - \sum_t^C \alpha_{ti})^2
$$

细胞状态和隐状态初始值为（$$f_{init, c}$$ 和 $$f_{init, h}$$ 都是 MLP）：

$$
c_0 = f_{init, c} (\frac{1}{L} \sum_i^L \bold{a}_i)
$$

$$
h_0 = f_{init, h} (\frac{1}{L} \sum_i^L \bold{a}_i)
$$

最终输出的单词概率分布为：

$$
p(y_t \text{\textbar} \bold{a}, y_{t-1}) \propto  \exp (L_o (Ey_{t-1} + L_h h_t + L_z \hat{z}_t))
$$

其中，$$L_o$$、$$L_h$$、$$L_z$$、$$E$$ 都是需要学习的权重参数。

`备注`{:.info} 似乎只有原版代码算是按照上面这个公式来算的单词概率（而且它依然没有考虑 $$y_{t-1}$$），俩复现代码都直接把 $$h_t$$ 扔进 softmax 完事，即：$$y_t = \text{softmax}(h_t)$$。

### Experiments

![Result](/img/in-post/2020-03-17/show-attend-tell/attention-result.png)


## Adaptive Attention

**Knowing When to Look: Adaptive Attention via A Visual Sentinel for Image Captioning.** *Jiasen Lu, et al.* CVPR 2017. [[Paper]](http://openaccess.thecvf.com/content_cvpr_2017/papers/Lu_Knowing_When_to_CVPR_2017_paper.pdf){:target="_blank"} [[Code]](https://github.com/jiasenlu/AdaptiveAttention){:target="_blank"}


不是每个单词的生成都需要利用图像特征，有的词的生成只需要依赖语义信息，如“the”、“of”等词，和跟在“talking on a cell”后面的“phone”等词。因此该论文的 Adaptive Attention 机制能决定当前时间步要用多少图像特征和多少语义信息。

### CNN

用了 ResNet，最后一个卷积层输出 $$2048 \times 7 \times 7$$ 的特征图，表示为：

$$
A = \{ a_1, ..., a_k \}, a_i \in R^{2048}
$$

对每个向量做以下变换：

$$
v_i = \text{ReLU}(W_a a_i) 
$$

则最终的图像特征为：

$$
V = [v_1, ... , v_k]
$$

论文还算了一个全局图像特征，即把特征图中所有向量做个算术平均，然后做个类似的变换：

$$
a^g = \frac{1}{k} \sum_{i=1}^k a_i
$$

$$
v^g = \text{ReLU} (W_b a^g)
$$

然后 LSTM 每个时间步的输入为把 word embedding 和 $$v^g$$ 拼到一起后的结果，即：

$$
x_t = [w_t; v^g]
$$


### Spatial Attention

首先对 Attention 机制做了一些修改：

![Spatial Attention](/img/in-post/2020-03-17/adaptive-attention/spatial-attention.png){:width="500px"}

(a)：Show, Attend and Tell 网络结构，(b)：该论文的 Spatial Attention 网络结构
{:.desc}

与[上一篇论文](#show-attend-and-tell)的不同：

- 计算 context vector $$c_t$$ 时用了 $$h_t$$ 而不是 $$h_{t-1}$$，论文认为这样 $$c_t$$ 就可以看作 $$h_t$$ 的残差连接，可以在生成下一个词时降低不确定性和提供当前时刻隐状态的信息，灵感来源于 [ResNet](http://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf){:target="_blank"}


- $$c_t$$ 没有输入 LSTM

context vector $$c_t$$ 定义为：

$$
c_t = g(V, h_t)
$$

$$V = [v_1, ... , v_k] , v_i \in R^d$$ 是[上一步](#cnn-1)中操作出来的图像特征，$$g$$ 是 Attention 模型。

$$g$$ 的具体实现如下，先算权重 $$\alpha_t$$（MLP + softmax）：

$$
z_t = w^T_h \text{tanh}(W_v V + (W_g h_t) \frak{1}^T) \tag{1}
$$

$$
\alpha_t = \text{softmax}(z_t)
$$


$$\frak{1} \in R^k$$ 是一个元素全为 1 的向量，目的是跟 $$W_g h_t$$ 相乘得到 $$k \times k$$ 的矩阵。$$W_v, W_g \in R^{k \times d}$$
和 $$w_h \in R^k$$ 都是要学习的权重参数。

然后对 $$V$$ 加权平均，得到 $$c_t$$：

$$
c_t = \sum_{i=1}^k \alpha_{ti} v_{ti}
$$


### Adaptive Attention

![Adaptive Attention](/img/in-post/2020-03-17/adaptive-attention/adaptive-attention.png){:width="400px"}

在 LSTM 上新增了一个叫 visual sentinel 的向量 $$s_t$$，用于记录一部分的细胞状态：

$$
g_t = \sigma (W_x x_t + W_h h_{t-1})
$$

$$
s_t = g_t \odot \text{tanh} (m_t)
$$

$$g_t$$ 是个门控信号，$$m_t$$ 是 $$t$$ 时刻的细胞状态，$$\sigma$$ 是 sigmoid 激活函数。跟 [LSTM 输出门](/2019/02/15/rnn-with-its-friends/#输出门){:target="_blank"}公式的形式是一样的，但是分别由不同的权重控制。

于是 Adaptive Attention 中的 context vector $$\hat{c}_t$$ 为：

$$
\hat{c}_t = \beta_t s_t + (1 - \beta_t) c_t
$$

$$\beta_t \in [0,1]$$ 是一个控制 $$t$$ 时刻要利用多少 $$s_t$$（语义信息）和 $$c_t$$（图像特征）的门控信号（sentinel gate）。为了算出 $$\beta_t$$，把 Attention 权重的计算公式也做了修改，新的权重 $$\hat{\alpha}$$ 为：

$$
\hat{\alpha}_t = \text{softmax}([z_t; w^T_h \text{tanh}(W_s s_t + (W_g h_t))]) 
$$

相当于把 $$z_t$$ 跟 $$w^T_h \text{tanh}(W_s s_t + (W_g h_t))$$ 拼了起来。这里的 $$W_g$$ 跟公式 $$(1)$$ 中的 $$W_g$$ 是一样的，同时虽然论文中没说，但 $$w^T_h$$ 的确也是一样的。

$$\hat{\alpha}_t$$ 有 $$k+1$$ 个元素，则 $$\beta_t$$ 为：

$$
\beta_t = \hat{\alpha}_t[k+1]
$$

单词概率分布为：

$$
p_t = \text{softmax} (W_p (\hat{c}_t + h_t))
$$


### Experiments

![result](/img/in-post/2020-03-17/adaptive-attention/adaptive-attention-result.png)


## Self-critical

**Self-critical Sequence Training for Image Captioning.** *Steven J. Rennie, et al.* CVPR 2017. [[Paper]](http://openaccess.thecvf.com/content_cvpr_2017/papers/Rennie_Self-Critical_Sequence_Training_CVPR_2017_paper.pdf){:target="_blank"} 

Pytorch 复现：[ruotianluo/self-critical.pytorch](https://github.com/ruotianluo/self-critical.pytorch){:target="_blank"} 


之前的方法都是用最大似然进行语言建模，在训练时最大化模型生成的单词序列的联合概率，从而最小化交叉熵损失。这种方法存在两个问题：

- 曝光偏差（exposure bias）：训练时用了 teacher forcing，即解码器每个时刻的输入都是训练集中的真实单词（ground truth），而测试时，解码器每个时刻的输入是自己上一时刻生成的单词，如果某一个单词预测得不够准确，之后所有单词的预测都会受到影响；

- 训练目标和评价准则不匹配：训练时用的交叉熵损失函数，而验证时用的是 BLEU、ROUGE、METEOR、CIDEr 之类的指标，导致模型训练时无法做到充分的优化评估指标。

于是一个自然的想法是直接优化评估指标（CIDEr）。但由于生成单词的操作不可微，所以不能用一般的反向传播梯度下降来优化这些指标，因此考虑用强化学习（中的 Policy Gradient 方法）来优化。


### Policy Gradient 

如果把图像描述问题看成强化学习问题：

- agent：decoder
- environment：单词和图像特征
- policy：$$p_{\theta}$$，由模型参数 $$\theta$$ 决定
- action：对下一个单词的预测
- state：decoder 要更新的各种状态，如 LSTM 隐状态和细胞状态、 attention 权重等
- reward：$$r$$，CIDEr 值

训练目标是最大化期望 reward，因为要用梯度下降，所以写成最小化负期望 reward：

$$
L(\theta) = - \mathbb{E}_{w^s \thicksim p_{\theta}} [r(w^s)] = - \sum_{w^s} p_{\theta}(w^s) r(w^s)
$$

其中，$$w^s = (w_1^s, ... , w_T^s)$$ 是生成的句子，$$r(w^s)$$ 是 $$w^s$$ 上的 $$\gamma$$ 折扣累积 reward：

$$
r(w^s) = r_1 + \gamma r_2 + \gamma_1 r_3 + ... +  \gamma_{T-1} r_T
$$

对 $$L(\theta)$$ 求梯度：

$$
\begin{aligned}
  \nabla_{\theta} L(\theta) = - \nabla_{\theta} \mathbb{E}_{w^s \thicksim p_{\theta}} [r(w^s)] &= - \nabla_{\theta} \sum_{w^s} p_{\theta}(w^s) r(w^s) \\
  &= - \sum_{w^s} \nabla_{\theta}  p_{\theta}(w^s) r(w^s) \\
  &= - \sum_{w^s} p_{\theta}(w^s) \frac{\nabla_{\theta} p_{\theta}(w^s)}{p_{\theta}(w^s)} r(w^s)\\
  &= - \sum_{w^s} p_{\theta}(w^s) \nabla_{\theta} \log p_{\theta}(w^s) r(w^s)\\
  &= - \mathbb{E}_{w^s \thicksim p_{\theta}} [r(w^s) \nabla_{\theta} \log p_{\theta}(w^s)]
\end{aligned}
$$

推导过程参考：[Deep Reinforcement Learning: Pong from Pixels](http://karpathy.github.io/2016/05/31/rl/){:target="_blank"}

实际训练时，会用蒙特卡洛的思想从 $$p_{\theta}$$ 中按概率随机采样出一个单词序列 $$w^s = (w_1^s, ... , w_T^s)$$ 来估计出梯度的近似值：

$$
\nabla_{\theta} L(\theta) \approx -r(w^s) \nabla_{\theta} \log p_{\theta} (w^s)
$$

因为采样的每一步都具有较大的随机性，可能会使最终得到的样本之间差异巨大，所以一般认为这种基于蒙特卡洛采样的近似方法会导致估计出的梯度有较高的方差。于是为了引入了一个 baseline $$b$$ 来减小方差，即：

$$
\nabla_{\theta} L(\theta) = - \mathbb{E}_{w^s \thicksim p_{\theta}} [(r(w^s) - b) \nabla_{\theta} \log p_{\theta}(w^s)]
$$

只要 $$b$$ 不依赖于 $$w^s$$，减去一个 $$b$$ 并不会改变梯度的值，证明过程为：

$$
\begin{aligned}
  \mathbb{E}_{w^s \thicksim p_{\theta}} [b \nabla_{\theta} \log p_{\theta}(w^s)] &= b \sum_{w_s} \nabla_{\theta} p_{\theta}(w^s) \\
  &= b \nabla_{\theta} \sum_{w_s}  p_{\theta}(w^s) \\
  &= b \nabla_{\theta} 1 = 0
\end{aligned}
$$

所以估计出的梯度为：

$$
\nabla_{\theta} L(\theta) \approx -(r(w^s) - b) \nabla_{\theta} \log p_{\theta} (w^s)
$$

由链式法则可以得到：

$$
\nabla_{\theta} L(\theta) = \sum_{t=1}^T \frac{\partial L(\theta)}{\partial s_t} \frac{\partial s_t}{\partial \theta}
$$

其中 $$s_t$$ 是 softmax 的输入，是一个长度为词典大小的向量，表示了 $$t$$ 时刻词典中每个单词的分数。

把 $$\frac{\partial L(\theta)}{\partial s_t}$$ 近似一下可以得到：

$$
\frac{\partial L(\theta)}{\partial s_t} \approx (r(w^s)-b)(p_{\theta}(w_t \text{\textbar} h_t) - 1_{w_t^s}) \tag{2}
$$

其中 $$1_{w_t^s}$$ 是单词 $$w_t^s$$ 的独热编码向量。这个近似相当于把 $$w_t^s$$ 当成了 $$t$$ 时刻 $$p_{\theta}(w_t \text{\textbar} h_t)$$ 的目标输出，在 [MIXER 的论文](https://arxiv.org/pdf/1511.06732.pdf){:target="_blank"}里有解释。


因为公式 $$(2)$$ 的第二项 $$(p_{\theta}(w_t \text{\textbar} h_t) - 1_{w_t^s})$$ 一定小于 0，所以当样本的 reward 大于 baseline $$b$$ 时，梯度为负，梯度下降时就会提高单词 $$w_t^s$$ 的分数，否则就会抑制 $$w_t^s$$ 的分数。一般来说会用对当前模型的 reward 的平均值的估计函数作为 baseline，如在 MIXER 中，baseline $$\bar{r}_t$$ 是一个线性回归模型，通过优化均方误差 $$\lVert \bar{r}_t - r \rVert^2$$ 得到。


### SCST

**self-critical sequence training**

论文把 baseline 定义为当前模型通过 greedy decoding 得到的句子 $$\hat{w}$$ 的reward。所以叫 self-critical，因为 baseline 也是自己生成的，相当于自己跟自己比。于是有：

$$
\frac{\partial L(\theta)}{\partial s_t} \approx (r(w^s) - r(\hat{w}))(p_{\theta}(w_t \text{\textbar} h_t) - 1_{w_t^s})
$$

![self-critical](/img/in-post/2020-03-17/self-critical/self-critical.png)

论文认为这样做的优点是：

- 不用另外训练一个模型来当 baseline，只需要用现有模型 inference 一遍，降低了训练复杂度
- 训练和测试阶段的一致性，都用的同样的生成方法（但训练时不是随机采样吗...）
- 梯度方差低于 MIXER，训练得更快（用 SGD 时）

用强化学习的方法训练之前，会先用交叉熵损失进行预训练。


### Experiments


- 与以优化交叉熵损失（XE）为目标的模型和用 MIXER 方法训练的模型的对比实验：

  ![self-critical result1](/img/in-post/2020-03-17/self-critical/sc-result1.png){:width="400px"}

- 尝试 curriculum learning，即先对最后一个单词以优化 CIDEr 为目标进行训练，前面的词则以优化交叉熵损失为目标进行训练，然后每个 epoch 增加一个用 CIDEr 进行训练的单词。但这种方法至少在 MSCOCO 上对效果没有提升。

- 尝试以优化别的指标为目标，但优化 CIDEr 的效果是最好的，能把所有指标都往上拉：

  ![self-critical result2](/img/in-post/2020-03-17/self-critical/sc-result2.png){:width="450px"}


- 发现 beam search 对 RL 训练出来的模型效果提升很小：

  ![self-critical result3](/img/in-post/2020-03-17/self-critical/sc-result3.png){:width="450px"}

  作为对比，这是 beam search 对用交叉熵损失训练出来的模型效果提升：

  ![self-critical result4](/img/in-post/2020-03-17/self-critical/sc-result4.png){:width="450px"}

- 似乎能对 objects out-of-context (OOOC) 的图片生成比较好的结果

## Aesthetic Critiques

**Aesthetic Critiques Generation for Photos.** *Kuang-Yu Chang, Kung-Hung Lu, and Chu-Song Chen.* ICCV 2017. [[IEEE]](https://ieeexplore.ieee.org/document/8237642){:target="_blank"} [[Paper]](https://www.iis.sinica.edu.tw/~kuangyu/iccv17_aesthetic_critiques.pdf){:target="_blank"} [[Code]](https://github.com/kunghunglu/DeepPhotoCritic-ICCV17){:target="_blank"} [[Dataset]](https://github.com/ivclab/DeepPhotoCritic-ICCV17){:target="_blank"}

开图像美感描述这个坑的第一篇论文，数据集 PCCD 的提出者（虽然我并没有找到这个数据集）。该论文考虑从不同美学角度来对图片进行美感描述，对每个角度而言大概就跟 Image Caption 差不多了。

训练数据结构：

$$
D = (\Phi_i, C_i, a_i), i \in \{ 1 ... N \}
$$


$$\Phi_i$$ 是第 $$i$$ 张图片，$$C_i$$ 是它的描述（同一张图片可能有多个不同角度的描述），$$a_i$$（$$i \in \{1 ... L\}$$）是该描述的角度。在此之外，还有一个 $$p_{i,l} \in [0, 1] $$ 来描述图片 $$\Phi_i$$ 在角度 $$l$$ 上的美感分数。


### Aspect-oriented

**Baseline - Aspect-oriented (AO) Approach**

AO 中，训练数据中每张图都只带有一个角度的描述，即 $$(\Phi_i, C_i, l)$$。然后用 CNN-LSTM 在每个角度的数据上进行训练。

相当于要对 $$L$$ 个角度各建一个 CNN-LSTM 模型。关于 CNN-LSTM 可以参考 [Show and Tell](#show-and-tell) 那篇论文。

CNN 还会用 $$\{ (\Phi_i; p_{i,l}) \}$$ 进行训练。在测试时，它会输出图片在每个角度上的美感分数，然后把得分最高的角度 $$l^*$$ 所对应的 CNN-LSTM 模型的输出结果当做最终结果。流程图如下：

![ao-approach](/img/in-post/2020-03-17/pccd/ao.png){:width="400px"}


### Aspect-fusion

AO 只能输出一个角度的描述，比较单一。为了解决这个问题，论文先尝试把整个数据集都扔进 CNN-LSTM 训练，但效果不好。

**Aspect-fusion (AF) Approach**

于是论文决定在测试时把 AO 中每个角度的 CNN-LSTM 模型输出的隐状态 $$h_l = \{ h_{l,t} \text{\textbar} t = 1 ... T, l = 1 ... L \} $$ 用 Soft Attention 融合一下之后，当做输入扔进一个新的 LSTM 中，于是新的 LSTM 的递推公式为：

$$
(g_{\tau}, y_{\tau} ) = F(g_{\tau-1}, x_{\tau}, s_{\tau} )
$$

$$y_{\tau}$$ 为概率分布，$$x_{\tau}$$ 为当前输入，$$g_{\tau - 1}$$ 为上一时刻的隐状态，$$s_{\tau}$$ 为 Soft Attention 融合出来的 context vector。


**Soft Attention**

$$s_{\tau}$$ 相当于是对 $$h_{lt}$$ 求加权平均：

$$
s_{\tau} = \sum_{l=1}^{L} \sum_{t=1}^{T} \alpha_{lt}^{\tau} (h, g_{\tau-1}) h_{lt}
$$

其中，权重 $$\alpha_{lt}^{\tau}$$ 需要在 Soft Attention 模型中生成：

$$
e_{lt}^{\tau} = A(g_{\tau-1}, h_{lt}) = W_{\gamma} (Ug_{\tau-1} + Vh_{lt})
$$

$$
\alpha_{lt}^{\tau} = \frac{ \exp (e_{lt}^{\tau}) }{ \sum_{p=1}^L \sum_{q=1}^T \exp (e_{pq}^{\tau}) }
$$


其中，$$\gamma$$ 是 ReLU 激活函数，$$W \in R^{n \times n}$$、$$U \in R^{n \times n}$$ 和 $$V \in R^{n \times n}$$ 是需要学习的权重，$$n$$ 是 LSTM 隐藏层大小（论文里面设的 768）。

流程图如下（自行加了一些不知对不对的标注）：

![af-approach](/img/in-post/2020-03-17/pccd/af.jpg){:width="600px"}

相当于论文认为 CNN-LSTM 输出的隐状态可以被看做每个角度的输入的深层特征，然后 Soft Attention 机制又可以很好的把它们融合到一起。


**困惑：**按照代码里面的写法，第二个 LSTM 明明已经是在生成融合各个角度之后的句子了，却依然把每个角度的句子分别输入和用来算损失，感觉说不通，虽然的确也没有角度融合后的 ground truth 就是了...


### PCCD

图片和评论来源于 [GuruShots](https://gurushots.com/){:target="_blank"}，评论被分为了 7 个角度，每个角度都有评分（评分范围为 1-10）：

![PCCD](/img/in-post/2020-03-17/pccd/pccd.png){:width="450px"}


### Experiments

因为不是每个角度都有评论，所以实验时论文只选了 3 个角度（composition and perspective、color and lighting、subject of photo）。为了控制词典大小，词典中只保留出现次数 > 5 的单词，其他单词会被映射为 `<UNK>`。

论文直接用了 [NeuralTalk2](#show-and-tell) 来当 CNN-LSTM 模型，拿了在 MSCOCO 数据集上预训练好的模型在 PCCD 上 fine-tune（只 fine-tune 了 LSTM 部分，CNN 部分保持不变）。

评估指标用了 [SPICE](https://panderson.me/images/SPICE.pdf){:target="_blank"}。


实验结果：

![result](/img/in-post/2020-03-17/pccd/pccd-result.png){:width="450px"}
