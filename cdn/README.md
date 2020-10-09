# 依赖库合并

[`lib.min.js`](lib.min.js) 是通过 jsDelivr 把除了 Katex 和 Mathjax（因为这俩涉及到引用字体的问题）以外的所有 js 依赖库合并后得到的文件，被合并的库包括（按顺序）：

1. [jQuery](https://cdn.jsdelivr.net/npm/jquery@2.1.3/dist/jquery.min.js)
2. [Highlight.js](https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.2.1/build/highlight.min.js)
3. [highlightjs-line-numbers.js](https://cdn.jsdelivr.net/npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js)
4. [fastclick](https://cdn.jsdelivr.net/npm/fastclick@1.0.6/lib/fastclick.min.js)
5. [Tocbot](https://cdn.jsdelivr.net/npm/tocbot@4.10.0/dist/tocbot.min.js)
6. [AnchorJS](https://cdn.jsdelivr.net/npm/anchor-js@4.2.2/anchor.min.js)
7. [md5.js](https://github.com/Renovamen/renovamen.github.io/blob/master/cdn/libjs/md5.js)
8. [Gitalk](https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js)
9. [Valine](https://cdn.jsdelivr.net/npm/valine@1.3.10/dist/Valine.min.js)
10. [Chart.js](https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js)
11. [mermaid](https://cdn.jsdelivr.net/npm/mermaid@8.4.8/dist/mermaid.min.js)
12. [Simple-Jekyll-Search](https://cdn.jsdelivr.net/npm/simple-jekyll-search@1.7.3/dest/simple-jekyll-search.min.js)
13. [ScrollReveal](https://cdn.jsdelivr.net/npm/scrollreveal@4.0.5/dist/scrollreveal.min.js)
14. [jquery.tagcloud.js](https://github.com/Renovamen/renovamen.github.io/blob/master/cdn/libjs/jquery.tagcloud.js)


&nbsp;

合并方式为：

https://cdn.jsdelivr.net/combine/npm/jquery@2.1.3/dist/jquery.min.js,gh/highlightjs/cdn-release@10.2.1/build/highlight.min.js,npm/highlightjs-line-numbers.js@2.6.0/dist/highlightjs-line-numbers.min.js,npm/fastclick@1.0.6/lib/fastclick.min.js,npm/tocbot@4.10.0/dist/tocbot.min.js,npm/anchor-js@4.2.2/anchor.min.js,gh/Renovamen/renovamen.github.io/js/library/md5.js,npm/gitalk@1/dist/gitalk.min.js,npm/valine@1.3.10/dist/Valine.min.js,npm/chart.js@2.9.3/dist/Chart.min.js,npm/mermaid@8.4.8/dist/mermaid.min.js,npm/simple-jekyll-search@1.7.3/dest/simple-jekyll-search.min.js,npm/scrollreveal@4.0.5/dist/scrollreveal.min.js,gh/Renovamen/renovamen.github.io/js/library/jquery.tagcloud.js