---
title: Js Hyperlinks
layout: default
categories: Javascript Lessons
navigation_weight: 3
---
# Js Hyperlinks

{{ site.tagline }}

{% include toc-flammarion.md %}

## Subtitle Begin Template Dtd 12-31-17

Place the introducing line of text ie.) the 'tagline' here ...

```liquid
{% raw %}
`...`
{% endraw %}
```

## Javascript Onclick

Hyperlinks may be set with Html and alternatively with Javascript, as follows:

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

```liquid
{% raw %}
Enjoy the successful output!
{% endraw %}
```

{% include sources-and-uses.md %}

### External Sources

- The [Project Source Links](https://mminail.github.io/Javascript/Source-Javascript-Links.htm){:title="Click to Visit the Source Links page of the Javascript Lessons Project at GitHub pages"}{:target="_blank"} page of the Javascript Lessons Project. Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
