---
layout: post
title: "[Jekyll] Theme NuLL"
subtitle: 因为没起好名字所以叫它 NuLL 了
header-img: img/theme.jpg
header-mask: rgba(40, 57, 101, .4)
catalog: true
hide-author: true
multilingual: true
---

<!-- Chinese Version -->
<div class="zh post-container">
    {% capture docs_zh %}{% include docs/zh.md %}{% endcapture %}
    {{ docs_zh | markdownify }}
</div>

<!-- English Version -->
<div class="en post-container">
    {% capture docs_en %}{% include docs/en.md %}{% endcapture %}
    {{ docs_en | markdownify }}
</div>