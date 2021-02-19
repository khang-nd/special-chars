# Special Characters

[![npm](https://img.shields.io/npm/v/special-chars)](http://npm.im/special-chars)
[![gzip size](https://img.shields.io/bundlephobia/minzip/special-chars)](https://unpkg.com/special-chars)

> A ready-made package to include special characters in your project, categorized.

## Installation

### Browser global

```html
<script src="https://unpkg.com/special-chars"></script>

<script>
  console.log(spc);
  /* {
    Arrows: [],
    Latin: [],
    Math: [],
    Misc: [],
  } */
</script>
```

### Node

```
npm install special-chars
```

```js
// CJS
var spc = require("special-chars");

// or ESM
import spc from "special-chars";
```

## Credits

The data of special characters is derived directly from this [react-character-map](https://github.com/Dayjo/react-character-map) repo. Special thanks to its author and contributors.
