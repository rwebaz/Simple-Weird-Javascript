---
title: De Structuring Objects
layout: default
excerpt: Reed Barger sez we are creating `variables` here ... not `Objects` directly ...
hint: The object assigned to `const user` stores the original content as `key-value` pairs ...
repo: Javascript-Lessons-Project
ver_date: 04-22-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## De-structuring Objects

> **Hint**. {{ page.hint }}

### The Code

```javascript
const user = {
  name: "Reed",
  username: "ReedBarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"
  }
};

// What happens to the old `const user = this object` and its contents?

// Create new variables `username` and `email`

// Store as variable `user` constant consisting of the internal elements of `username` and `email`

const { username, email } = user;

function displayUser() {
  console.log(`Username: ${username}, Email: ${email}`);
}

// Run the function
displayUser()
```

## Display User Bio

```javascript
// Original Object
const user = {
  name: "Reed",
  username: "ReedBarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"
  }
};

const { name } = user;

function displayUserBio() {
  console.log(`${name}`);
}

// Run the function
displayUserBio()
```

## Last Subtitle

More to come ...

**Note**. The above synopsis was derived from a video lecture written, produced and performed by ...

`Reed Barger`: [[1](#REEDBARGER){:.red}].

For additional reference on the topic of `De-structuring` see the `Mozilla Developer Network`: [[2](#MDN){:.red}]

For a working Internet development platform for Javascript `Closures` see `Scrimba`: [[3](#SCRIMBA){:.red}]

1. {:#REEDBARGER}[Javascript: The Complete Developer, 2020](https://subscription.packtpub.com/video/web_development/9781801072847?uuid=cc36e816-6930-4834-852a-206c35a8c895){:title="Click to Review Javascript: The Complete Developer, 2020 by Reed Barger at Packt"}{:target="_blank"}

2. {:#MDN}[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator){:title="Click to Review the Ternary Operators section of the Mozilla Developer Network"}{:target="_blank"}

3. {:#SCRIMBA}[Scrimba Javascript Developer Platform](https://www.scrimba.com){:title="Click to Review the Javascript Developer Platform at Scrimba"}{:target="_blank"}

***

{% include patreon-link.md %}

