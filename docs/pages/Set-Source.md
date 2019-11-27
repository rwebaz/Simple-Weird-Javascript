---
title: Set Source
layout: default
excerpt: Place the introducing line of text ie.) the 'tagline' here ...
hint: The src folder of your Javascript project holds the many and various Javascript programs your team may develop.
repo: Javascript-Lessons-Project
ver_date: 11-26-19
navigation_weight: 8
categories: page
---
{% include toc.md %}

## Folder Src

> **Hint**. {{ page.hint }}

More to come ...

### How to Set the Source src folder

More to come ...

#### File Name

The **File Name** of each program should reflect the underlying Javascript code (.js) file.

For example, if you name your program `Alterconstant`, then the reader of your program will expect some type of Javascript code in the accompanying (.js) file that works with methods designed to alter constants.

And, the name of the accompanying (.js) file may reflect the same expectation, as well.

As follows,

```liquid
{% raw %}
alter-constant.js
{% endraw %}
```

**Note**. The placement of the (.js) file should be within the working `js` folder of the program.

### Folder js

The folder `js` holds the accompanying Javascript code file for each program ...

While the (.html) index page of the program resides directly in the program `root` folder.

**Note**. You may place a `<script>` reference to the underlying Javascript code at the bottom of your (.html) index page, as follows:

```html
{% raw %}
<!-- Place all scripts above the closing body tag -->
<script src="../js/alter-constant.js"></script> -->
</body>
</html>
{% endraw %}
```

### Program Root

In the `root` folder of the Javascript program, in addition to the `js` sub-folder, the `index` file and the `favicon` file reside.

**Note**. These are the only files required to interface with the **Brackets IDE**.

### Open Folder

From the main menu of the **Brackets IDE**, the end-user selects `File`, `Open Folder` to select the program to expose.

**Note**. Remember, the program files are stored within the `src` folder of your Javascript project.

### Live Preview

After successfully loading the target program folder into the **Brackets IDE**, the *Live Preview* feature ie.) the `lightening bolt symbol` of the **Brackets IDE** may be clicked and engaged.

Instantly, the **Brackets IDE** raises a Chrome browser window and displays the rendered (.html) output from the now generated *DOM Tree*.

If you have placed a `<script>` reference to the underlying Javascript code at the bottom of your (.html) index page, but before the closing `</body>` tag, then your script page (.js) will execute, as well.

Thus, altering the *DOM Tree* as you have planned.

**Note**. At the *browser address line* you will see the random, temporary URL that the Brackets IDE program has invoked for your rendition, as follows:

```liquid
{% raw %}
http://127.0.0.1:54818/index.html
{% endraw %}
```

Not yet secure, but sufficient for testing your Javascript code blocks back-and-forth from Chrome browser window to (.js) file.

### Css

Can you toss some `css` into the mix?

Sure, if you place the appropriate link in the `head` section of your (.html) index page to the `css` folder that houses your local (.css) file.

**Note**. Preferably as a Sub-folder of your program's `root` directory under the `assets` folder.

### Script Reference

The placement of the *Script Reference* is important.

You, as developer, wish to have your Javascript code engage the flow of the program after all of the accompanying assets have been loaded into the *DOM Tree*.

This way, you are assured of manipulating the *DOM Tree* from its *first finalized* view.

**Note**. The view you have programmed will replace the *first finalized* view of the *DOM Tree* after the result of your Javascript code is rendered.

## Last Subtitle

More to come ...

***

**Note**. The above synopsis was derived from an article written by Blank Author [[1](#BLANKAUTHOR){:.red}].

1. {:#BLANKAUTHOR}[A Narrative of Psychology by Blank Author, Jan #1999](http://cowles.yale.edu/sites/default/files/files/pub/d20/d2069.pdf){:title="Click to Review ..."}{:target="_blank"}

***

{% include patreon-link.md %}
