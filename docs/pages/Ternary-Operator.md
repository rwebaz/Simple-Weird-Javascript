---
title: Ternary Operator
layout: default
excerpt: The Ternary or conditional operator is the only JavaScript operator that takes three operands ...
hint: Store in a constant variable ...
repo: Javascript-Lessons-Project
ver_date: 4-17-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## The Formula

> **Hint**. {{ page.hint }}

### The Code

```ruby
const cartItemCount = isAuthenticatedUser ? 1 : 0;
```

### In Action Test

```ruby
const isAuthenticatedUser = true;
// const isAuthenticatedUser = false;
const cartItemCount = isAuthenticatedUser ? 1 : 0;
console.log(cartItemCount);
```

### The Results

Returns ...

`1` for `true` and `0` for `false`

## Steps of the Algorithm

```ruby
// Store in a constant variable named `cartItemCount` ...
// Is our subject an `authenticated user`?
// If so by placing a Boolean function upon the element  ...
// Returns `true`
// Statement resolves to `1`
// Or, 
// After initially placing a Boolean function upon the element ...
// Returns `false`
// Statement resolves to `0`
// Stop
```

## Last Subtitle

More to come ...

**Note**. The above synopsis was derived from a video lecture written, produced and performed by ...

`Reed Barger`: [[1](#REEDBARGER){:.red}].

For additional reference on the topic of `Ternary Operators` see the `Mozilla Developer Network`: [[2](#MDN){:.red}]

For a working Internet development platform for Javascript `Ternary Operators` see `Scrimba`: [[3](#SCRIMBA){:.red}]

1. {:#REEDBARGER}[Javascript: The Complete Developer, 2020](https://subscription.packtpub.com/video/web_development/9781801072847?uuid=cc36e816-6930-4834-852a-206c35a8c895){:title="Click to Review Javascript: The Complete Developer, 2020 by Reed Barger at Packt"}{:target="_blank"}

2. {:#MDN}[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator){:title="Click to Review the Ternary Operators section of the Mozilla Developer Network"}{:target="_blank"}

3. {:#SCRIMBA}[Scrimba Javascript Developer Platform](https://www.scrimba.com){:title="Click to Review the Javascript Developer Platform at Scrimba"}{:target="_blank"}

***

{% include patreon-link.md %}
