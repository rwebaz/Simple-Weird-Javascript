---
title: Construct Function
layout: default
excerpt: Place the introducing line of text ie.) the 'tagline' here ...
hint: Place the intro paragraph ie.) the 'hypothesis' here ...
repo: Javascript-Lessons-Project
ver_date: 11-26-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## First Subtitle

> **Hint**. {{ page.hint }}

More to come ...

## Import Code

```html
<h4>Mongo Command - Function Template</h4>
<p>
<span>Intro to the MongoDB 'template()' function ...</span>
</p>

<p>
<span>Intro to the MongoDB 'Template' command</span>
</p>
<!--
<pre>
<span>Highlighting MongoDB code w Rouge via liquid</span>
<code> -->
{% highlight javascript linenos %}
// where db is the wake-up command to the Mongo Server (MS) to provide general help
db.help();
{% endhighlight %}
<!--
</code>
</pre>
-->
<h5>For Example ( <span lang="es" title="For Example">Por Ejemplo</span> ) ...</h5>
<p>
<span>(MS) will provide specific 'help', too ...</span>
<span>Whenever a collection is specified within the 'help' function.</span>
</p>
<!--
<pre>
<span>Highlighting MongoDB code w Rouge via liquid</span>
<code> -->
{% highlight javascript linenos %}
// where 'frame' is the name of a collection of documents within the current working database
db.frame.help();
{% endhighlight %}
<!--
</code>
</pre>
-->
```

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Blank Author [[1](#BLANKAUTHOR){:.red}].

1. {:#BLANKAUTHOR}[A Narrative of Psychology by Blank Author, Jan #1999](http://cowles.yale.edu/sites/default/files/files/pub/d20/d2069.pdf){:title="Click to Review ..."}{:target="_blank"}

***

{% include patreon-link.md %}
