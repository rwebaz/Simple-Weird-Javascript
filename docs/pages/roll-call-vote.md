---
title: Roll Call | SWJP
layout: default

navigation_weight: 3
---
# Rendering Data

For purposes of accessing data, the Jekyll engine will allow access to the following types of files from the hidden `_data` subdirectory:

- Comma separated values, or `(.csv)` files that contain a header line ...

- Javascript Object Notation name-value pairs, or `(.json)` files ..., and

- Yaml data file entries, or `(.yml)` files.

## How to Call a Data set in Jekyll

First, create your data set and place the file in the `_data` subdirectory of your repo.

**Note.** Be sure to place the `_data` folder either in the `/` root directory of your repo, or under the `/docs` subdirectory of your repo ...

Dependent upon which directory ( `root or docs` ) is being used by GitHub pages.

For this example, we will create a `(.json)` file named 'tabs' and place it in the `_data` folder under the `/docs` subdirectory, as follows:

```Javascript
{"reps":[
  { "lastName" : "Allen", "vote" : true },
  { "lastName" : "Alston", "vote" : false },
  { "lastName" : "Andrade", "vote" : "nv" },
  { "lastName" : "Barton", "vote" : true }
]}
```

Next, we will us a liquid statement to access the above data store, as follows:

```liquid
{% raw %}
{% for tab in site.data.tabs.reps %}{% endfor %}
{% endraw %}
```

**Note.** Because we are using the Jekyll engine to render the highlighted example code on this page, and because Jekyll processes liquid statements by default ...

When we attempt to render a highlighted block of code that includes liquid code statements ...

We can place an escape `\` character before the liquid statement characters of `{` and `%` and `}` in order to neutralize their effect.

But, this is cumbersome ...

Plus, the escape `\` characters must eventually be removed from the liquid `example` statements when rendered "live".

There must be a better way.

Simply enveloping the liquid `example` statements in Triple back-ticks {% raw %}```{% endraw %} does not work because the Jekyll engine automatically parses liquid statements as it iterates through the repo in a sort of logical progressions.

## Eureka Moment

If we could only find a way to [temporarily disable liquid tag processing](https://shopify.github.io/liquid/tags/raw/){:target="_blank"} we would be set.

**Note.** To route an external link to a new tabbed page within your browser, from your GitHub Flavored Markdown, or **GFM** `(.md)` page ...

Append your `(.md)` external link with the `{:target="_blank"}` kramdown statement, as follows:

```liquid
{% raw %}
[temporarily disable liquid tag processing](https://shopify.github.io/liquid/tags/raw/){:target="_blank"}
{% endraw %}
```

## Shopify Liquid

After checking with our friends over at Shopify ...

Who also use liquid statements to render their output ...

If we envelope the liquid `example` statements with the keyword `raw`, itself a liquid statement, and then envelope all with Triple-backticks {% raw %}```{% endraw %}, then

We should see a highlighted, yet disabled liquid `example` statement, as follows:

```liquid

{% raw %}```liquid

{% raw %}

{% for tab in site.data.tabs.reps %}{% endfor %}

\{\% endraw \%\}
{% endraw %}
```

**Note.** Don't forget the Triple-backticks {% raw %}```{% endraw %}, at the end of a highlighted block of code.

## The Roll Call Vote

Inside the liquid statement we will call ...

- a `string`, followed by ...

- the `lastName` value from each record within the data store, followed by ...

- a colon `:`

```liquid
{% raw %}
- {{ 'Arizona State Representative' }} {{ tab.lastName }}:
{% endraw %}
```

**Note.** A traditional Html unordered `line item`, or `<li></li>` may be produced in GitHub Flavored Markdown, or **GFM** by prepending the line with a simple `-` hyphen character as shown above.

## The If Else If Loop

After the colon `:` ...

We will place an 'If Else If Loop' that will iterate over the data store for the purpose of discovering a boolean state of either `true`, `false`, or a string of `nv` ( representing a "Non-vote" or abstention ) from the `vote` value of each record within the data store.

If the boolean state of either `true`, `false`, or the string of `null` is discovered in the `vote` value, then the Jekyll engine is instructed to render a piece of descriptive text in the type of a string for each respective discovery.

## Summation

In this case, we shall ask the Jekyll engine to:

- Render the string 'Yea' when encountering the boolean state of `true`,

- Render the string 'Nay' when encountering the boolean state of `false`, and to

- Render the string 'Abstain' when encountering the string state of `nv`, as follows:

```liquid
{% raw %}
{% if tab.vote == true %}{{'Yea'}}{% else if tab.vote == false %}{{'Nay'}}{% else if vote == "nv" %}{{'Abstain'}}{% endif %}
{% endraw %}
```

## Check Injection

After ending the 'If Else If Loop' ...

An optional line may be injected into the sequence of events to guard against that rare moment when the data store you have selected is vacant!

As follows,

```liquid
{% raw %}
{% else %}{{ 'There are no items to report!' }}
{% endraw %}
```

## Going Live

What follows is a "live" rendition of all of the highlighted example components from above stitched together minus the `\` escape characters, if any.

{% for tab in site.data.tabs.reps %}

- {{ 'Arizona State Representative' }} {{ tab.lastName }}: {% if tab.vote == true %}{{'Yea'}}{% else if tab.vote == false %}{{'Nay'}}{% else if vote = 0 %}{{'Abstain'}}

{% endif %}

{% else %}{{ 'There are no items to report!' }}

{% endfor %}

{% comment %}Finito!{% endcomment %}

Source: [Arizona House of Representatives](http://www.azleg.gov/MemberRoster/?body=H)

## The Sequence of Events

Still befuddled as to how to stitch the above components together in order to render a coherent display?

Well, it goes a-like this ...

- Remember to remove the escape `\` characters from the liquid statements, if any, before going "Live" ...

```liquid
{% raw %}
{% for tab in site.data.tabs.reps %}

- {{ 'Arizona State Representative' }} {{ tab.lastName }}: {% if tab.vote == true %}{{'Yea'}}{% else if tab.vote == false %}{{'Nay'}}{% else if vote == 0 %}{{'Abstain'}}

{% endif %}

{% else %}{{ 'There are no items to report!' }}

{% endfor %}

{% comment %}Finito!{% endcomment %}
{% endraw %}
```
