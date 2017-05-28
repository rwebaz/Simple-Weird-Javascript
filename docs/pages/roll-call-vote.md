---
title: Roll Call | SWJP
layout: default

navigation_weight: 3
---
# Rendering Data

For purposes of accessing data, the Jekyll engine will allow access to the following types of files from the hidden _data subdirectory:

- Comma separated values, or `(.csv)` files that contain a header line ...

- Javascript object notation name-value pairs, or `(.json)` files ..., and

- Yaml data file entries, or `(.yml)` files.

## How to Call a Data set in Jekyll

First, create your data set and place the file in the _data subdirectory of your repo.

**Note.** Be sure to place the _data folder either in the "/" root directory of your repo, or under the "/docs" subdirectory of your repo ... Dependent upon which directory ( root or docs ) is being used by GitHub pages.

For this example, we will create a (.json) file named 'tabs' and place it in the _data folder under the "/docs" subdirectory, as follows:

```Javascript
{"reps":[
  { "lastName" : "Allen", "vote" : true },
  { "lastName" : "Alston", "vote" : true },
  { "lastName" : "Andrade", "vote" : true },
  { "lastName" : "Barton", "vote" : true }
]}
```

Next, we will us a liquid statement to access the above data store, as follows:

```liquid
\{\% for tab in site.data.tabs.reps \%\}\{\% endfor \%\}
```

**Note.** Because we are using the Jekyll engine to render the highlighted example code on this page ...

We must place an escape `\` character before the liquid statement characters of `{` and `%` and `}` in order to neutralize their effect.

Please remove the escape `\` characters from the liquid `example` statements when rendering live.

## The Roll Call Vote

Inside the liquid statement we will call ...

- a `string`, followed by ...

- the `lastName` value from each record within the data store, followed by ...

- a colon `:`

```liquid
- \{\{ 'Arizona State Representative' \}\} \{\{ tab.lastName \}\}:
```

## The If Else If Loop

After the colon `:` we will place an 'If Else If Loop' that will iterate over the data store for the purpose of discovering a boolean state of either `true`, `false`, or `nil` from the `vote` value of each record within the data store.

If the boolean state of either `true`, `false`, or `nil` is discovered in the `vote` value, then the Jekyll engine is instructed to render a piece of text in the type of a string for each respective discovery.

**Note.** The Jekyll engine identifies the liquid keyword of `nil` instead of `null` when identifying boolean states. In this case, we shall ask the engine to render the string 'Abstain' when encountering the boolean state of `nil`, to render the string 'Yea' when encountering the boolean state of `true`, and finally to render the string 'Nay' when encountering the boolean state of `false`, as follows:

```liquid
\{\% if tab.vote == true \%\}\{\{'Yea'\}\}\{\% else if tab.vote == false \%\}\{\{'Nay'\}\}\{\% else if vote == nil \%\}\{\{'Abstain'\}\}\{\% endif \%\}
```

After ending the 'If Else If Loop', an optional line may be injected into the sequence of events to guard against that rare moment when the data store you have selected is vacant!

As follows,

```liquid
\{\% else \%\}\{\{ 'There are no items to report!' \}\}
```

## Going Live

What follows is a live rendition of all the highlighted example components from above stitched together minus the `\` escape characters, of course ...

{% for tab in site.data.tabs.reps %}

- {{ 'Arizona State Representative' }} {{ tab.lastName }}: {% if tab.vote == true %}{{'Yea'}}{% else if tab.vote == false %}{{'Nay'}}{% else if vote == nil %}{{'Abstain'}}

{% endif %}

{% else %}{{ 'There are no items to report!' }}

{% endfor %}

{% comment %}Finito!{% endcomment %}

Source: [Arizona House of Representatives](http://www.azleg.gov/MemberRoster/?body=H)

**Note.** A traditional unordered line item may be produced in GitHub Flavored Markdown, or GFM by prepending the line with a simple `-` hyphen character as shown above.

## The Sequence of Events

Still befuddled as to how to stitch the above components together in order to render a coherent display?

Well, it goes a-like this ( Remember to remove the `\` characters when going "Live" ) ...

```liquid
\{\% for tab in site.data.tabs.reps \%\}

- \{\{ 'Arizona State Representative' \}\} \{\{ tab.lastName \}\}: \{\% if tab.vote == true \%\}\{\{'Yea'\}\}\{\% else if tab.vote == false \%\}\{\{'Nay'\}\}\{\% else if vote == nil \%\}\{\{'Abstain'\}\}

\{\% endif \%\}

\{\% else \%\}\{\{ 'There are no items to report!' \}\}

\{\% endfor \%\}

\{\% comment \%\}Finito!\{\% endcomment \%\}
```