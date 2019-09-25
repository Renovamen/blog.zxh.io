# Just a Blog

My blog. A Jekyll theme modified from [Huxpro/huxpro.github.io](https://github.com/Huxpro/huxpro.github.io). Some styles refer to [mashirozx/Sakura](https://github.com/mashirozx/Sakura).

[View this blog](https://renovamen.ink/)

&nbsp;

## New Features

### Pages

#### Links Page

Add a beautiful and responsive links page. You can easily add links to it by modifying `_config.yml`, for example:

```yaml
links: [
  {
    link-title: "Why I lost in human world",
    link-list: [
      {
        sitename: "Cool Dragon",
        href: "http://allspark.ink/",
        img: "img/dragon.jpeg",
        linkdes: "The coolest dragon in the world",
      }
    ],
  },
]
```

&nbsp;

#### About Page

New about page page, responsive and more beautiful. 

Biography can be modified in `_includes/about/biography.md`.

Experience information can be added by creating Markdown files in `/_experience`, an example of the file's front-matter is:

```yaml
---
img: "../../img/experience/cat.jpeg"
time: "2019.9 - Present"
job: "Bala"
description: "Waitting to be completed..."
if-left: true
---
```

&nbsp;

#### Portfolio Page

New portfolio page, responsive and more beautiful.

&nbsp;

### Gitalk

[Gitalk](https://github.com/gitalk/gitalk) is supported as third party discussion system now.

You have to register a [Github Application](https://github.com/settings/applications/new) and get your Client ID and Client Secret, then modify `_config.yml`:

```yaml
# Gitalk settings
gitalk:
  clientID: your_client_id
  clientSecret: your_client_secret
  repo: your_repo
  owner: owner_of_your_repo
```

&nbsp;

### Switch Header Image

Switching the header image of homepage is supported now. You can add the images which you want to show on your homepage to `_config.yml`, for example:

```yaml
header-img: [
  {
    url: img/home-bg/1.jpg,
    mask: "rgba(40, 57, 101, .6)",
  },
  {
    url: img/home-bg/2.jpg,
    mask: "rgba(31, 64, 87, .4)",
  }
]
```

&nbsp;

### Other Changes

- More beautiful catalog (based on [tocbot.js](https://github.com/tscanlin/tocbot));

- Hide posts from home page: 

  Add `hide: true` to the front-matter of the post you want to hide;

- Email address is supported in SNS settings now, you can modify it in `_config.yml`, for example:

  ```yaml
  email_address: renovamenzxh@gmail.com
  ```
- Search (based on [simple-jekyll-search.js](https://github.com/christian-fei/Simple-Jekyll-Search));

- Go to top;

- Add fonts of pages to navigation bar by modifying the front-matter:

  ```yaml
  title: List
  font: fa-list-ul
  ```

- Change theme (default mode & night mode).