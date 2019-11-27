---
title: Js Numbers
layout: default
excerpt: Place the introducing line of text ie.) the 'tagline' here ...
hint: Javascript provides a primitive constructor for the Number object that makes a variable var immutable with respect to type.
repo: Javascript-Lessons-Project
ver_date: 11-26-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Number()

> **Hint**. {{ page.hint }}

Forcing or *casting* a variable's *type* in Javascript may be performed with the *primitive constructor* for the *Number* object `Number()`.

### Coercement

A variable container declared with the *primitive constructor* for the *Number* object `Number()` may optionally accept numerical values masquerading as a *string*.

However, the Javascript engine will attempt to coerce the *string* into a *number* and if the *string* contains characters other than *numerical digits*, and *if* the Javascript engine is not comfortable with the resulting *value* when tested, a value of *Not a Number*, or `NaN` will be returned.

**Note**. Javascript also provides a primitive constructor for the *Boolean* object and the *String* object, as well.

As is the case for the primitive constructor for the *Number* object `Number()` ...

Both the primitive constructor for the *Boolean* object `Boolean()` and the primitive constructor for the *String* object `String()` make a variable `var` immutable with respect to *type*.

## Boolean()

Variable containers that have been created with the primitive constructor for the *Boolean* object `Boolean()` may only hold one of two distinct *state*.

The value placed into the *variable container* may be a `true` value, or the value placed into the *variable container* may be a `false` value.

Because the variable `var` was constructed with the primitive constructor for the *Boolean* object `Boolean()`, the *type* of value that can be placed into the *variable container* is the now immutably fixed `bool` type.

## String()

When declared via the primitive constructor for the *String* object `String()`, a variable `var` returns `false` when tested if the string value provided is the *empty* string `""`, if the string value provided contains only the numeral zero (0) `"0"`, or if the value provided is either `undefined` or `null`.

**Note**. When initializing a *string* at the time of declaration via the primitive constructor for the *String* object `String()`, the values of `"NaN"`, `"null"`, `"undefined"`, `"true"`, and `"false"` when tested *will return true* if operated upon by the `toString` method of the object *String* ...!

In other words, the values declared for *Number* at the time of declaration when utilizing the primitive constructor for the *Number* object `Number()` may be *changed* to the different type *string* if operated upon by the `toString` method of the *String* object.

So, an odd case of explicitly changing an immutably declared variable `var` as to *type* does exist for *Number* when otherwise *implicitly* Javascript would simply return `false` when tested for *string* and `NaN` when tested for *number*.

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Marijn Haverbeke [[1](#MARIJNHAVERBEKE){:.red}].

1. {:#MARIJNHAVERBEKE}[Eloquent Javascript](https://www.syncfusion.com/resources/techportal/details/ebooks/eloquent-javascript){:title='Click to Visit the Landing page for Eloquent Javascript by Marijn Haverbeke at Synch Fusion dot com'}{:target='_blank'}. Published by © 2012 [Syncfusion.com](https://www.syncfusion.com/){:title='Click to Visit the Home page of Synch Fusion dot com'}{:target='_blank'}.

***

{% include patreon-link.md %}
