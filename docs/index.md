---
title: Home Page
layout: default
---
# GFM GitHub Flavored Markdown Tips

See: [Jekyll Themes] <https://jekyllrb.com/docs/themes/#overriding-theme-defaults>

Here, enveloping the URL in a standard set of angle brackets `<...>` creates a 'Non-bare URL', as follows:

```yaml
<https://jekyllrb.com/docs/themes/#overriding-theme-defaults>
```

Notice, however, the preceding text though enveloped in a set of standard brackets `[...]` is not enabled ( clickable ).

**Issue**. How do we enable the preceding text in a **GFM** GitHub Flavored Markdown `(.md)` file and thereby make the 'Non-bare URL' clickable via the preceding text only?

**Solution**. Wrap the URL in a set of standard parenthesis `(...)`, as follows:

```yaml
See: [Jekyll Themes](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)
```

**Live**:

See: [Jekyll Themes](https://jekyllrb.com/docs/themes/#overriding-theme-defaults)

**Issue**. How do we force a new target blank when clicking on a **GFM** hyperlink?

**Solution**. More to come ...

