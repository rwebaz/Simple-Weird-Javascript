---
title: Js Objects
layout: default
navigation_weight: 3
---
# Js Objects

{{ site.tagline }}

{% include toc-flammarion.md %}

## Object Variables

An *Object* variable can be instantiated with a set of curly braces `{...}` enclosing a set of *key-value* pairs.

```liquid
{% raw %}
var universa = {state: 'Florida', name: 'Florida Southern', enrollment: '10,000'};
{% endraw %}
```

**Note**. In an *Object* variable, the developer may mix value *types*.

For, example ...

In the above `universa` *Object* variable, the *key* enrollment represents a *number* value type.

Whereas, the state *key* represents a *string* value type.

### Inheritance

Because an *Object* variable is actually spawned by the built-in *Object* Class, the now `var` object universa may *call* the methods of its parent Class using *dot notation*, as follows:


```liquid
{% raw %}
universa.isCamelCase();
{% endraw %}
```

;where `isCamelCase` is an exposed function of the built-in *Object* Class.

### Properties

The *properties* of the `var` object universa may also be called with *dot notation* substituting the *value* of each property for the name of the function in the above example, as follows:

```liquid
{% raw %}
universa.enrollment;
{% endraw %}
```

;where the value of the property enrollment is returned, as follows:

```liquid
{% raw %}
10,000
{% endraw %}
```

### Function Values

When constructing your *Object* variable, mixing and matching value *types* is agreeable to the underlying Javascript interpreter.

For example, rather than a normal value of type *String*, or a numeric value of type *Number*, why not try a method value of type *Function*?

Just plug your function code into one of the placeholders of your *Object* variable, as follows:

```liquid
{% raw %}
run: function() {console.log('go fast!')}};
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

- [What You Need To Know About Javascript](https://medmj.us/KnowJavaScript){:title="Click to download 'What You Need To Know About Javascript' by Gabriel Cánepa"}{:target="_blank"} by Gabriel Cánepa. Published by © 2016 [Packtpub.com](https://www.packtpub.com){:title="Click to Visit the Home Page of Packt Pub dot com"}{:target="_blank"}.

- The [Project Source Links](https://mminail.github.io/Javascript/Source-Javascript-Links.htm){:title="Click to Visit the Source Links page of the Javascript Lessons Project at GitHub pages"}{:target="_blank"} page of the Javascript Lessons Project. Published by © 2017 [Mminail.github.io](https://mminail.github.io/){:title="Click to Visit the Concept Library of the Medical Marijuana Initiative of North America - International Limited, an Arizona Benefit Corporation"}{:target="_blank"}.
