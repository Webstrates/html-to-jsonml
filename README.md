# html-to-jsonml

A simple [`parse5`](https://github.com/inikulin/parse5)-based library for converting HTML text to
[JsonML](http://www.jsonml.org/). Developed for [Webstrates](https://webstrates.net/), but can be
used for anything JsonML-related.

This replaces the [`htmlparser2`](https://github.com/fb55/htmlparser2)-based
[`jsonml-parse`](https://github.com/CMTegner/jsonml-parse) module we previously used, because  of
its issues parsing `<script>` tags with `<`. For instance, `htmlparser2` would turn

```html
<script>var x, y, z = x < y;</script>
```

Into

```json
["script","var x, y, z = x ","< y;"]
```

Whereas this library gives you

```json
["script",{},"var x, y, z = x < y;"]
```

With more complicated script code, this gets even worse with `jsonml-parse`, resulting in odd and
complicated objects, rather than plain text as it should be.

To be fair to `jsonml-parse`, this is not an issue with the module itself, but with the the
underlying `htmlparser2`.

Additionally, it's worth noting that `html-to-jsonml` (at the time of writing) takes up 459 KB: 29
KB of which is this library itself, and 430 KB on parse5. In comparison, `jsonml-parse` uses a
total 2.6 MB.

Very brief and initial testing shows that `jsonmlParse` appears to be slightly faster than
`html-to-jsonml`, though.