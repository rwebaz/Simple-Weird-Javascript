---
title: Js Objects
layout: default
excerpt: In an Object variable, the developer may mix value types ...
hint: An Object variable can be instantiated with a set of curly braces enclosing a set of key-value pairs.
repo: Javascript-Lessons-Project
ver_date: 11-26-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Object Variables

> **Hint**. {{ page.hint }}

More to come ...

```liquid
{% raw %}
var universa = {state: 'Florida', name: 'Florida Southern', enrollment: '10,000'};
{% endraw %}
```

### Mixing Value types

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

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Blank Author [[1](#BLANKAUTHOR){:.red}].

1. {:#BLANKAUTHOR}[A Narrative of Psychology by Blank Author, Jan #1999](http://cowles.yale.edu/sites/default/files/files/pub/d20/d2069.pdf){:title="Click to Review ..."}{:target="_blank"}

***

{% include patreon-link.md %}
