---
title: Default Values
layout: default
excerpt: How to convert Celsius temperature readings to Fahrenheit readings using `Default Values` ...
hint: First, create a standard function named `convert temperature` ...
repo: Javascript-Lessons-Project
ver_date: 04-20-21
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Change Temp

> **Hint**. {{ page.hint }}

```javascript
function convertTemperature(celsius, decimalPlaces = 1) {

  // decimalPlaces = decimalPlaces || 1;
  
  // if (!decimalPlaces) {
    // decimalPlaces = 1;
  // }
  
  const fahrenheit = celsius * 1.8 + 32;

  return Number(fahrenheit.toFixed(decimalPlaces));
}
// Call the function, override the default value
console.log(convertTemperature(21, 0));
```

## Last Subtitle

More to come ...

**Note**. The above synopsis was derived from a video lecture written, produced and performed by ...

`Reed Barger`: [[1](#REEDBARGER){:.red}].

For additional reference on the topic of `Default Values` see the `Mozilla Developer Network`: [[2](#MDN){:.red}]

For a working Internet development platform for Javascript `Functions` see `Scrimba`: [[3](#SCRIMBA){:.red}]

1. {:#REEDBARGER}[Javascript: The Complete Developer, 2020](https://subscription.packtpub.com/video/web_development/9781801072847?uuid=cc36e816-6930-4834-852a-206c35a8c895){:title="Click to Review Javascript: The Complete Developer, 2020 by Reed Barger at Packt"}{:target="_blank"}

2. {:#MDN}[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator){:title="Click to Review the Ternary Operators section of the Mozilla Developer Network"}{:target="_blank"}

3. {:#SCRIMBA}[Scrimba Javascript Developer Platform](https://www.scrimba.com){:title="Click to Review the Javascript Developer Platform at Scrimba"}{:target="_blank"}

***

{% include patreon-link.md %}
