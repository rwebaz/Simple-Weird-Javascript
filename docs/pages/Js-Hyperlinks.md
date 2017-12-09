---
title: Hyperlink Options
layout: default
categories: Javascript Lessons
navigation_weight: 9
---
# Javascript Onclick

Hyperlinks may be set with Html and alternatively with Javascript

## Table O Contents

- TOC
{:toc}

## Javascript 

More to come ...

### External Links

More to come ...

#### Html

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

#### Markdown

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

## Raw Code

```liquid
{% raw %}
`...`
{% endraw %}
```

***

**Source**: [Project Source Links](https://rwebaz.github.io/Zazzle-Hempaz-Project/pages/Source-Links.html){:target="_self"). Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:target="_blank"}
