# Gungnir

我的博客，也是一个 Jekyll 主题。~~瞎改~~修改自 [Huxpro/huxpro.github.io](https://github.com/Huxpro/huxpro.github.io)，感谢它。

**Gungnir**，冈格尼尔，是北欧神话中主神奥丁使用的矛（强行科普）。

中文说明 | [English Intro](README.md)

![preview](img/docs/gungnir.jpg)

&nbsp;

## 演示实例

[这里](https://renovamen.ink/)是一个演示实例（也就是我的博客）。

&nbsp;

## 文档

[这里](https://renovamen.ink/theme/)是本主题的文档，有中文和英文版本。

&nbsp;

## 特性

- 响应式
- 多级目录
- 可切换的首页大图
- 明亮和夜间模式：识别系统的外观设置并自动切换模式，也支持用户手动切换
- 搜索（使用了 [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)）
- 文章目录（使用了 [Tocbot](https://github.com/tscanlin/tocbot)）
- 基于 [Highlight.js](https://github.com/highlightjs) 的代码高亮渲染，还支持代码块全屏和光标所在行高亮（从 WordPress 主题 [Sakura](https://github.com/mashirozx/Sakura) 搬过来的功能）
- 支持在文章中使用 [Mathjax](https://github.com/mathjax/MathJax)、[Katex](https://github.com/KaTeX/KaTeX)、[Chart.js](https://github.com/chartjs/Chart.js) 和 [mermaid](https://github.com/mermaid-js/mermaid)
- 文章中的一些附加样式（提示和标签）
- 支持在文章中使用 emoji（使用了 [jemoji](https://github.com/jekyll/jemoji)）和其他表情（比如 B 站小电视）
- 评论（[Gitalk](https://github.com/gitalk/gitalk)、[Disqus](https://disqus.com/) 和 [Valine](https://github.com/xCss/Valine)）
- 关于、作品和友链页

继承自原主题的特性：

- PWA
- RSS
- 带标签的归档页
- 文章多语言
- 站点统计（[Google Analytics](https://analytics.google.com/) 和 [百度统计](https://tongji.baidu.com/)）

&nbsp;

## 快速开始

```bash
git clone https://github.com/Renovamen/renovamen.github.io.git
cd renovamen.github.io

# 安装依赖
bundle config set path 'vendor/bundle'
bundle install

# 本地预览
bundle exec jekyll serve
```

&nbsp;

## 开源协议

Gungnir 遵守 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) 开源协议，详细细节见 [LICENSE](LICENSE) 文件。