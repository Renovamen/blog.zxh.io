---
layout: post
title: Paper Reading 2020.3
subtitle: Image Caption & Image Asethetic Caption
author: "Renovamen"
header-img: img/in-post/2020-03-17/header.jpg
header-style: text
catalog: true
tags:
  - CV
  - Image Caption
---

## Aesthetic Critiques Generation for Photos

**Aesthetic Critiques Generation for Photos.** *Kuang-Yu Chang, Kung-Hung Lu, and Chu-Song Chen.* ICCV 2017. [[IEEE]](https://ieeexplore.ieee.org/document/8237642){:target="_blank"} [[Paper]](https://www.iis.sinica.edu.tw/~kuangyu/iccv17_aesthetic_critiques.pdf){:target="_blank"} [[Code]](https://github.com/kunghunglu/DeepPhotoCritic-ICCV17){:target="_blank"}

开图像美感描述这个坑的第一篇论文，数据集 PCCD 的提出者（虽然我并没有找到这个数据集）。该论文考虑从不同角度（composition、color-arrangement、subject-contrast）来对图片进行美感描述，对每个角度而言大概就跟 Image Caption 差不多了。

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

![ao-approach](/img/in-post/2020-03-17/ao.png){:width="450px"}


### Aspect-fusion

AO 只能输出一个角度的描述，比较单一。为了解决这个问题，论文先尝试把整个数据集都扔进 CNN-LSTM 训练，但效果不好。

**Aspect-fusion (AF) Approach**

于是论文决定在测试时把 AO 中每个角度的 CNN-LSTM 模型输出的隐状态 $$h_l = \{ h_{l,t} \text{\textbar} t = 1 ... T, l = 1 ... L \} $$ 用 Soft Attention 融合一下之后，当做输入扔进一个新的 LSTM 中，于是新的 LSTM 的递推公式为：

$$
(g_{\tau}, y_{\tau} ) = F(g_{\tau-1}, x_{\tau}, s_{\tau} )
$$

概率 $$y_{\tau}$$ 依赖于当前输入 $$x_{\tau}$$、上一个隐状态 $$g_{\tau - 1}$$ 和 Soft Attention 融合出来的 $$s_{\tau}$$。


**Soft Attention**

$$
s_{\tau} = \sum_{l=1}^{L} \sum_{t=1}^{T} \alpha_{lt}^{\tau} (h, g_{\tau-1}) h_{lt}
$$

其中，每个 $$\tau$$ 下的 $$\alpha_{lt}^{\tau}$$ 需要在 Soft Attention 中生成，公式为：

$$
e_{lt}^{\tau} = A(g_{\tau-1}, h_{lt}) = W_{\gamma} (Ug_{\tau−1} + Vh_{lt})
$$

然后把 $$e_{lt}^{\tau}$$ 归一化后就得到了 $$\alpha_{lt}^{\tau}$$：

$$
\alpha_{lt}^{\tau} = \frac{ \exp (e_{lt}^{\tau}) }{ \sum_{p=1}^L \sum_{q=1}^T \exp (e_{pq}^{\tau}) }
$$


其中，$$\gamma$$ 是 ReLU 激活函数，$$W \in R^{n \times n}$$、$$U \in R^{n \times n}$$ 和 $$V \in R^{n \times n}$$ 是需要学习的参数矩阵，$$n$$ 是 LSTM 输出的隐状态的维数（论文里面设的 768）。

流程图如下：

![af-approach](/img/in-post/2020-03-17/af.png){:width="450px"}

相当于论文认为 CNN-LSTM 输出的隐状态可以被看做每个角度的输入的深层特征，然后 Soft Attention 机制又可以很好的把它们融合到一起。

### PCCD

图片和评论来源于 [GuruShots](https://gurushots.com/){:target="_blank"}，评论被分为了 7 个角度，每个角度都有评分（评分范围为 1-10）：

![PCCD](/img/in-post/2020-03-17/pccd.png){:width="450px"}


### 实验

因为不是每个角度都有评论，所以实验时论文只选了 3 个角度（composition and perspective、color and lighting、subject of photo）。为了控制词典大小，出现次数低于一个阈值（论文中设的是 5）的单词都会被映射为 `<UNK>`。

论文直接用了 [NeuralTalk2](#show-and-tell) 来当 CNN-LSTM 模型，拿了在 MSCOCO 数据集上预训练好的模型在 PCCD 上 fine-tune（只 fine-tune 了 LSTM 部分，CNN 部分保持不变）。

评估指标用了 SPICE：

**SPICE: Semantic Propositional Image Caption Evaluation.** *Peter Anderson, et al.* ECCV 2016. [[Paper]](https://panderson.me/images/SPICE.pdf){:target="_blank"}

实验结果：

![result](/img/in-post/2020-03-17/pccd-result.png){:width="450px"}


## Show and Tell

**Show and Tell: A Neural Image Caption Generator.** *Oriol Vinyals, et al.* CVPR 2015. [[Paper]](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Vinyals_Show_and_Tell_2015_CVPR_paper.pdf){:target="_blank"} [[Code]](https://github.com/tensorflow/models/tree/master/research/im2txt){:target="_blank"}


Google 出品，算是最早开用 CNN-LSTM 做 Image Caption 这个坑的论文之一。

**P.S.** 依然是在 CVPR 2015 上，Stanford 也发了篇模型核心结构差不多的论文：

**Deep Visual-semantic Alignments for Generating Image Descriptions.** *Andrej Karpathy and Li Fei-Fei.* CVPR 2015. [[Paper]](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Karpathy_Deep_Visual-Semantic_Alignments_2015_CVPR_paper.pdf){:target="_blank"} [[NeuralTalk]](https://github.com/karpathy/neuraltalk){:target="_blank"} [[NeuralTalk2]](https://github.com/karpathy/neuraltalk2){:target="_blank"}

但鉴于 NeuralTalk 的代码是用 Lua 和 Torch 写的，而我不会 Lua ~~和 Torch~~（...），所以这篇论文就没认真看......


### CNN-LSTM

**模型：**

$$
\theta^* = \arg \max_{\theta} \sum_{(I,S)} \log p(S \text{\textbar} I; \theta)
$$

$$\theta$$ 是模型参数，$$I$$ 是图像，$$S$$ 是对应的正确的图像描述。也就是要最大化正确描述的概率。

一般会用一步条件概率的链式法则来解决 $$S$$ 的长度不定的问题：

$$
\log p(S \text{\textbar} I) = \sum_{t=0}^N \log p(S_t \text{\textbar} I, S_0, ... , S_{t-1})
$$

$$S_0$$ 是起始符，$$S_N$$ 是终止符。如果生成了终止符，则该句子生成结束。

**LSTM：**

用 LSTM 来对 $$p(S_t \text{\textbar} I, S_0, ... , S_{t-1})$$ 进行建模。新的 $$x_t$$ 输入后，隐状态更新的公式为：

$$
h_{t+1} = f(h_t, x_t)
$$

**CNN：**

用来提图像特征的 CNN 直接用了 Inception V3：

**Rethinking the Inception Architecture for Computer Vision.** *Christian Szegedy, et al.* CVPR 2016. [[Paper]](https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Szegedy_Rethinking_the_Inception_CVPR_2016_paper.pdf){:target="_blank"} [[Code]](https://github.com/tensorflow/models/blob/master/research/slim/nets/inception_v3.py){:target="_blank"}

**Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift.** *Sergey Ioffe and Christian Szegedy.* arXiv 2015. [[arXiv]](https://arxiv.org/pdf/1502.03167v3.pdf){:target="_blank"}


### LSTM

在[另一篇文章](/2020/03/04/rnn-with-its-friends/#lstm){:target="_blank"}里理过 LSTM。

![LSTM](/img/in-post/2020-03-17/lstm.png){:width="350px"}

#### Training

把 LSTM 按时间步展开就是这个样子：

![CNN-LSTM](/img/in-post/2020-03-17/cnn-lstm.png){:width="450px"}

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

图片 $$I$$ 只在 $$t = -1$$ 时输入一次，因为论文经过实验后发现如果每个时间步都输入一遍图像，模型会更容易过拟合和学习到图像的噪声。

Loss 函数：

$$
L(I,S) = - \sum_{t=1}^N \log p_t (S_t)
$$

目标是通过调 CNN、LSTM 和 $$W_e$$ 的参数让 Loss 最小。

**训练细节**：

- 用在 ImageNet 上训练好的预训练模型来初始化 CNN 参数，效果提升明显；
- 用在一个新闻语料库上训练好的预训练模型来初始化 $$W_e$$ 参数，效果提升不明显；
- 尝试 dropout 和 ensembling，效果提升了一些；
- 调 LSTM hidden units 的数量，最后设成了 512，embedding 维数也设成了 512；
- 除了 CNN 以外，其他部分都用 SGD 来调参，随机初始化参数，固定学习率，无 momentum;
- 词典中只保留出现次数 > 5 的单词


#### Inference

在测试生成句子时使用了 beam search，beam size 设为 20。当把 beam size 设为 1（相当于 greedy search）时，BLEU 值降了 2 点左右。


### 实验结果

![result](/img/in-post/2020-03-17/img2txt-result.png){:width="400px"}


## Show, Attend and Tell

**Show, Attend and Tell: Neural Image Caption Generation with Visual Attention.** *Kelvin Xu, et al.* ICML 2015. [[Paper]](http://proceedings.mlr.press/v37/xuc15.pdf){:target="_blank"} [[Code]](https://github.com/kelvinxu/arctic-captions){:target="_blank"}

首次把 Attention 机制用进 Image Caption 中。

在上述 Encoder-Decoder 结构中，Encoder 和 Decoder 之间唯一的联系只有一个固定长度的语义向量 $$h_n$$，所以 Encoder 必须把原始输入的所有信息都压进 $$h_n$$ 中。如果原始输入包含的信息较多， $$h_n$$ 可能就无法表达所有信息。而且 $$h_n$$ 携带的信息还可能被后面输入的信息覆盖掉。

于是就有了 Attention 机制，最开始是被下面这篇论文提出来做机器翻译的：

**Neural Machine Translation by Jointly Learning to Align and Translate.** *Dzmitry Bahdanau, KyungHyun Cho, and Yoshua Bengio.* arXiv 2014. [[arXiv]](https://arxiv.org/pdf/1409.0473.pdf){:target="_blank"}

### CNN

CNN 用了 VGGNet。

前面的论文是用全连接层输出的一个固定长度的向量当特征（高层特征），而这篇论文用了最后一个卷积层（用 Keras 的话说是 block5_conv3）的 $$H \times W \times D$$（$$14 \times 14 \times 512$$）的 feature map 来当特征（低层特征）：

$$
a = \{ \bold{a}_1, ..., \bold{a}_L \}, \bold{a}_i \in \reals^D
$$

![VGGNet](/img/in-post/2020-03-17/vggnet.jpeg){:width="500px"}

VGGNet 结构
{:.desc}

其中 $$H$$ 和 $$W$$ 为 feature map 的高度和宽度，$$D$$ 为 feature map 的维度，$$L = H \times W$$。相当于对于图片的 $$L$$ 个位置各提一个特征，每个特征都是一个 $$D$$ 维向量（annotation vector）。

于是接下来的 LSTM 就需要在这 $$L$$ 个位置的特征里选有用的，这就是 Attention 机制。

### Attention

LSTM 结构：

![LSTM](/img/in-post/2020-03-17/attention-lstm.png){:width="400px"}

推导公式：

$$
i_t = \sigma (W_i E y_{t−1} + U_i h_{t−1} + Z_i \hat{z}_t + b_i)
$$

$$
f_t = \sigma (W_f E y_{t−1} + U_f h_{t−1} + Z_f \hat{z}_t + b_f )
$$

$$
c_t = f_t c_{t−1} + i_t \text{tanh} (W_c E y_{t−1} + U_c h_{t−1} + Z_c \hat{z}_t + b_c)
$$

$$
o_t = \sigma (W_o E y_{t−1} + U_o h_{t−1} + Z_o \hat{z}_t + b_o)
$$

$$
h_t = o_t \text{tanh} (c_t)
$$

**存疑：**虽然在图和推导式里，上一步输出 $$y_{t−1}$$ 也参与了这一步的计算，但代码里似乎没有参与，当然也不排除我理解错了代码...

跟正常 LSTM 的区别是用 context vector $$\hat{z}_t$$ 来代替了当前输入 $$x_t$$。$$\hat{z}_t$$ 由 $$\phi$$ 函数对 $$\{ \bold{a}_1, ..., \bold{a}_L \}$$ 进行一些加权得到，$$\alpha_i$$ 为 $$\bold{a}_i$$ 的权重：

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

相当于 $$\alpha_{t,i}$$ 代表图像的第 $$i$$ 个位置的特征 $$\bold{a}_i$$ 在 $$t$$ 时刻输入 Decoder 的信息所占的比例。$$\alpha_{t,i}$$ 由 Attention 网络 $$f_{att}$$（大概是若干全连接层，论文原话是 MLP）计算得到，依赖于 $$h_{t-1}$$：

$$
e_{ti} = f_{att}(\bold{a}_i, h_{t-1})
$$

$$
\alpha_{ti} = \frac{\exp(e_{ti})}{\sum_{k=1}^L \exp(e_{tk})}
$$


除了标准化自带的 $$\sum_i^L \alpha_{ti} = 1$$ 这个限定以外，还对 $$\alpha_{ti}$$ 加了另一个限定，来避免图像某些部分的特征被忽略（论文里设的 $$\tau = 1$$）：

$$
\sum_t \alpha_{ti} \approx \tau, \tau \geq \frac{L}{D}
$$

所以 Soft Attention 网络的训练目标是要最小化以下惩罚函数：

$$
L_d = − \log(p(y \text{\textbar} \bold{a})) + \lambda \sum_i^L (1 - \sum_t^C \alpha_{ti})^2
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
p(y_t \text{\textbar} \bold{a}, y_1^{t-1}) \propto  \exp (L_o (Ey_{t-1} + L_h h_t + L_z \hat{z}_t))
$$

其中，$$L_o$$、$$L_h$$、$$L_z$$、$$E$$ 都是需要学习的参数矩阵。

### 实验结果

![Result](/img/in-post/2020-03-17/attention-result.png)