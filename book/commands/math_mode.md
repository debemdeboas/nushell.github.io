---
title: math mode
layout: command
version: 0.60.0
usage: |
  Gets the most frequent element(s) from a list of numbers or tables
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> math mode ```

## Examples

Get the mode(s) of a list of numbers
```shell
> [3 3 9 12 12 15] | math mode
```