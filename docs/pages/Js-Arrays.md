---
title: Js Arrays
layout: default
excerpt: An array in Javascript can be a simple, straight collection of like type values ...
hint: A Javascript array is a collection of values that can be saved into a single variable per Gabriel Cánepa.
repo: Javascript-Lessons-Project
ver_date: 11-26-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Push Pop Join

> **Hint**. {{ page.hint }}

Arrays in Javascript are instantiated with a set of enclosing brackets `[...]`.

The brackets `[...]` house the collection of values, as follows:

```liquid
{% raw %}
var birds = ["parrot", "robin", "cardinal"];
{% endraw %}
```

;where `bird` of `birds` can be picked using the built in *query-by-position* algorithm, as follows:

```liquid
{% raw %}
birds[1];
{% endraw %}
```

**Note.** Just plug-in the index of the placeholder for the *value* you are attempting to expose right behind the name of the array.

Returns,

```liquid
{% raw %}
"robin"
{% endraw %}
```

;where the index zero(0) represents the value of first place in the array

## Brackets IDE

The **Brackets IDE** allows the Javascript developer to display instant changes to both your Javascript program (.js) and your View page (.html) through the Chrome browser window.

**Note**. The Javascript console may also be exposed through Chrome's developer tools.

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Gabriel Cánepa [[1](#GABRIELCANEPA){:.red}].

1. {:#GABRIELCANEPA}[What You Need To Know About Javascript](https://www.packtpub.com){:title="Click to download 'What You Need To Know About Javascript' by Gabriel Cánepa"}{:target="_blank"} by Gabriel Cánepa. Published by © 2016 [Packtpub.com](https://www.packtpub.com){:title="Click to Visit the Home Page of Packt Pub dot com"}{:target="_blank"}.

***

{% include patreon-link.md %}
