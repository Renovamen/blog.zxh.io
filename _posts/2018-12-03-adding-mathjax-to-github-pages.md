---
layout: post
title: "在Github Pages中使用Mathjax渲染数学公式"
subtitle: 'Enable MathJax in GitHub Pages '
author: "Renovamen"
header-style: text
mathjax: true
tags:
  - 摸爬滚打
---

在Github的Markdown上渲染数学公式可以直接装Chrome插件[MathJax Plugin for Github](https://chrome.google.com/webstore/detail/mathjax-plugin-for-github/ioemnmodlmafdkllaclgeombjnmnbima?utm_source=chrome-app-launcher-info-dialog)。

然而在[Github Pages](https://pages.github.com)中并没有用。



### 步骤：

1. 在`_includes`文件夹下新建`mathjax.html`，并在里面添加：

   ```javascript
   {% if page.mathjax %}
   <script type="text/x-mathjax-config">
     MathJax.Hub.Config({
       tex2jax: {
         inlineMath: [ ['$','$'], ["\\(","\\)"] ],
         processEscapes: true
       }
     });
   </script>
   <script
     type="text/javascript"
     charset="utf-8"
     src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
   >
   </script>
   <script
     type="text/javascript"
     charset="utf-8"
     src="https://vincenttam.github.io/javascripts/MathJaxLocal.js"
   >
   </script>
   {% endif %}
   ```

2. 在`_layouts/post.html`的`Post Header`中添加(去掉'/')：

   ```html
   /{/% include mathjax.html %/}/
   ```


3. 在想要启用Mathjax的文章的[Front Matter](https://jekyllrb.com/docs/front-matter)中添加：

   ```
   mathjax: true
   ```
   
   
   &nbsp;
   Example：

   本文的Front Matter长这样：

   ```
   layout: post
   title: "在Github Pages中使用Mathjax渲染数学公式"
   subtitle: 'Enable MathJax in GitHub Pages '
   author: "Renovamen"
   header-style: text
   mathjax: true
   tags:
     - 摸爬滚打
   ```


然后理论上就可以在文章中显示Markdown数学公式了。



### 测试

薛定谔方程：$i \hbar \frac{\epsilon}{\epsilon t} \psi(r, t)= \hat{H} \psi(r, t)$

傅里叶变换：$\hat{f}(\xi):=\int_{-\infty}^{\infty}f(x)e^{-2 \pi  ix \xi}dx$