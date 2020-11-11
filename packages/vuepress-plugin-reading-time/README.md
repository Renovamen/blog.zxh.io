# vuepress-plugin-reading-time

A plugin for displaying the number of words and how long a post takes to read in VuePress.

&nbsp;

## Usage

```js
module.exports = {
  plugins: ['vuepress-plugin-reading-time']
}
```

The `readingTime` data can be accessed by:

```js
$page.readingTime
```

An example `readingTime` data:

```js
{
  minutes: 12,
  words: 3500
}
```

You can override by specifying `readingTime` data in frontmatter

```yaml
title: Hello Word
readingTime: { minutes: 3, words: 1500 }
```

&nbsp;

## Options

### excludes

Exclude pages by their path via a regular expression. This tests for both `path`
and `regularPath`.

- Type: `Array<string>`
- Default: `[]`

Example:

```js
plugins: [
  [
    'vuepress-plugin-reading-time', {
      excludes: ['/about', '/tag/.*']
    }
  ]
]
```

&nbsp;

### wordsPerMinuteCN

The number of Chinese words per minute a user can read.

- Type: `int`
- Default: `300`

Example:

```js
plugins: [
  [
    'vuepress-plugin-reading-time', {
      wordsPerMinuteCN: 500
    }
  ]
]
```

&nbsp;

### wordsPerMinuteEN

The number of English words per minute a user can read.

- Type: `int`
- Default: `160`

Example:

```js
plugins: [
  [
    'vuepress-plugin-reading-time', {
      wordsPerMinuteEN: 200
    }
  ]
]
```