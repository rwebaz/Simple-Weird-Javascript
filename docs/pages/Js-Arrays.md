---
title: Js Arrays
layout: default
navigation_weight: 3
---
# Js Arrays

"A Javascript `array` is a collection of *values* that can be saved into a single variable." ~ Gabriel Cánepa

{% include toc-flammarion.md %}

## Subtitle Begin Template Dtd 12-31-17

An array in Javascript can be a simple, straight collection of like *type* values.

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

```liquid
{% raw %}
Enjoy the successful output!
{% endraw %}
```

{% include sources-and-uses.md %}

### External Sources

- [What You Need To Know About Javascript](https://medmj.us/KnowJavaScript){:title="Click to download 'What You Need To Know About Javascript' by Gabriel Cánepa"}{:target="_blank"} by Gabriel Cánepa. Published by © 2016 [Packtpub.com](https://www.packtpub.com){:title="Click to Visit the Home Page of Packt Pub dot com"}{:target="_blank"}.

- The [Project Source Links](https://mminail.github.io/Javascript/Source-Javascript-Links.htm){:title="Click to Visit the Source Links page of the Javascript Lessons Project at GitHub pages"}{:target="_blank"} page of the Javascript Lessons Project. Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
