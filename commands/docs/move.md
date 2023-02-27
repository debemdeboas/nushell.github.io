---
title: move
categories: |
  filters
version: 0.76.0
filters: |
  Move columns before or after other columns
usage: |
  Move columns before or after other columns
---

# <code>{{ $frontmatter.title }}</code> for filters

<div class='command-title'>{{ $frontmatter.filters }}</div>

## Signature

```> move ...rest --after --before```

## Parameters

 -  `...rest`: the columns to move
 -  `--after {string}`: the column that will precede the columns moved
 -  `--before {string}`: the column that will be the next after the columns moved

## Examples

Move a column before the first column
```shell
> [[name value index]; [foo a 1] [bar b 2] [baz c 3]] | move index --before name
```

Move multiple columns after the last column and reorder them
```shell
> [[name value index]; [foo a 1] [bar b 2] [baz c 3]] | move value name --after index
```

Move columns of a record
```shell
> { name: foo, value: a, index: 1 } | move name --before index
```