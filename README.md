# Just a Blog

My blog. A Jekyll theme modified from [Huxpro/huxpro.github.io](https://github.com/Huxpro/huxpro.github.io).

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
        href: "https://renovamen.github.io/",
        img: "img/dragon.jpeg",
        linkdes: "The coolest dragon in the world",
      }
    ],
  },
]
```

&nbsp;

#### About Page & Portfolio Page

New about page and portfolio page, responsive and more beautiful.

&nbsp;

### Other Changes

- Indentation of heading 2 to heading 4 in catalog;

- Hide posts from home page: 

  Add `hide: true` to the front-matter of the post you want to hide.

- Email address is supported in SNS settings now, you can modify it in `_config.yml`, for example:

  ```yaml
  email_address: renovamenzxh@gmail.com
  ```