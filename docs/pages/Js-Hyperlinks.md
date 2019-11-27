---
title: Js Hyperlinks
layout: default
excerpt: Hyperlinks may be set with Html and alternatively with Javascript, as follows ...
hint: Place the intro paragraph ie.) the 'hypothesis' here ...
repo: Javascript-Lessons-Project
ver_date: 11-26-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Javascript Onclick

> **Hint**. {{ page.hint }}

More to come ...

### Html

```javascript
{% raw %}
onclick="javaScript:this.target='_blank';"
{% endraw %}
```

Example ...

```html
{% raw %}
<a href="https://www.economist.com" title="Click to Visit The Economist Magazine" onclick="javaScript:this.target='_blank';">The Economist Magazine</a>
{% endraw %}
```

### Markdown

In markdown, we simply set the target type ( self = internal, blank = external ) of the hyperlink with a **Liquid** statement, as follows:

```liquid
{% raw %}
{:target="_blank"}
{% endraw %}
```

Or,

```liquid
{% raw %}
{:target="_self"}
{% endraw %}
```

Por Ejemplo ...

```liquid
{% raw %}
[Project Source Links](https://rwebaz.github.io/Zazzle-Hempaz-Project/pages/Source-Links.html){:target="_self"). Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:target="_blank"}
{% endraw %}
```

## Brackets IDE

The **Brackets IDE** allows the Javascript developer to display instant changes to both your Javascript program (.js) and your View page (.html) through the Chrome browser window.

**Note**. The Javascript console may also be exposed through Chrome's developer tools.

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Blank Author [[1](#BLANKAUTHOR){:.red}].

1. {:#BLANKAUTHOR}[A Narrative of Psychology by Blank Author, Jan #1999](http://cowles.yale.edu/sites/default/files/files/pub/d20/d2069.pdf){:title="Click to Review ..."}{:target="_blank"}

***

{% include patreon-link.md %}
