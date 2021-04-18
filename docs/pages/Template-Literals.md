---
title: Template Literals
layout: default
excerpt: Place the introducing line of text ie.) the 'tagline' here ...
hint: Place the intro paragraph ie.) the 'hypothesis' here ...
repo: Javascript-Lessons-Project
ver_date: 04-17-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## The Code

> **Hint**. {{ page.hint }}

```javascript
// Use template literals when concatenating both strings and mutable values
let weight = prompt("Please enter your weight");
let message = `
                Hello!
                ------
                You weigh ${weight * 0.165} pounds ...
                On the moon!
                ----------------
                How R you do'in?`;
                
// Returns a message to the screen
alert(message)

// Returns a message to the console
console.log('Rule. All variables are declared at the top of the stack when assigned via `var`. However, a variable when declared (and, assigned) using `let` or `const` is NOT auto-hoisted to the top of the stack. Hoisted variables can cause conflicts. Summation: All variables when declared using `var` are auto-hoisted to the top of the stack. And, all variables when declared (and, assigned) using `const` or `let` are NOT auto-hoisted. Note. A variable declared with `const` must also be initialized with a value simultaneously.')

```

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Blank Author [[1](#BLANKAUTHOR){:.red}].

1. {:#BLANKAUTHOR}[A Narrative of Psychology by Blank Author, Jan #1999](http://cowles.yale.edu/sites/default/files/files/pub/d20/d2069.pdf){:title="Click to Review ..."}{:target="_blank"}

***

{% include patreon-link.md %}
