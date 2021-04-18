---
title: Closures
layout: default
excerpt: Closures are properties of functions in Javascript that can be executed in scopes other than the scope the subject closure originated.
hint: Only functions have closures ...
repo: Javascript-Lessons-Project
ver_date: 04-17-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Incremental Closures

> **Hint**. {{ page.hint }}

### The Code

```javascript
// Set up a `function scope` named `handleLikePost` to increment the `likeCount` variable
function handleLikePost() {
  // Set the `likeCount` to `default zero`
  let likeCount = 0;
  
  // Note. Nested functions can be anonymous ie.) no name required
  // Return the nested function ... 
  // Disallow the outer `main` function further with a `return` statement

  return function addLike() {
    // The nested function `addLike` will increment the `likeCount` variable by `1`
    likeCount += 1;
    // Next, make the variable `likeCount` available outside both the nested function ...
    // As well as the `main` function using a `return` statement
    return likeCount;
  }
}

// Execute the `main` function by calling the constant `like`
const like = handleLikePost();

// Return the appropriate repeated responses to the console
console.log(like())
console.log(like())
console.log(like())
```

## Last Subtitle

More to come ...

**Note**. The above synopsis was derived from a video lecture written, produced and performed by ...

`Reed Barger`: [[1](#REEDBARGER){:.red}].

For additional reference on the topic of `Ternary Operators` see the `Mozilla Developer Network`: [[2](#MDN){:.red}]

For a working Internet development platform for Javascript `Closures` see `Scrimba`: [[3](#SCRIMBA){:.red}]

1. {:#REEDBARGER}[Javascript: The Complete Developer, 2020](https://subscription.packtpub.com/video/web_development/9781801072847?uuid=cc36e816-6930-4834-852a-206c35a8c895){:title="Click to Review Javascript: The Complete Developer, 2020 by Reed Barger at Packt"}{:target="_blank"}

2. {:#MDN}[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator){:title="Click to Review the Ternary Operators section of the Mozilla Developer Network"}{:target="_blank"}

3. {:#SCRIMBA}[Scrimba Javascript Developer Platform](https://www.scrimba.com){:title="Click to Review the Javascript Developer Platform at Scrimba"}{:target="_blank"}

***

{% include patreon-link.md %}
