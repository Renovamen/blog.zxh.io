# Just a Blog

My blog. A Jekyll theme modified from [Huxpro/huxpro.github.io](https://github.com/Huxpro/huxpro.github.io).

[View this blog](https://renovamen.ink/)

&nbsp;

## New Features

### Pages

#### Links Page

Add a beautiful and responsive links page (refer to [mashirozx/Sakura](https://github.com/mashirozx/Sakura)). You can easily add links to it by modifying `_config.yml`, for example:

```yaml
links: [
  {
    link-title: "Why I lost in human world",
    link-list: [
      {
        sitename: "Cool Dragon",
        href: "https://renovamen.github.io/",
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

Experience information can be modified in `_config.yml`, for example:

```yaml
experience: [
  {
    img: "../img/avatar.jpeg",
    time: "2019.9 - Present",
    job: "Company",
    description: "Code all days.",
    if-left: true, # whether you want to show the text on the left
  },
]
```

&nbsp;

#### Portfolio Page

New portfolio page, responsive and more beautiful.

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

- Go to top (refer to [mashirozx/Sakura](https://github.com/mashirozx/Sakura));

- Add fonts of pages to navigation bar by modifying the front-matter:

  ```yaml
  title: List
  font: fa-list-ul
  ```