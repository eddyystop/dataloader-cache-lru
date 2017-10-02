# dataloader-cache-lru

[![Dependency Status](https://img.shields.io/david/eddyystop/dataloader-cache-lru.svg?style=flat-square)](https://david-dm.org/eddyystop/dataloader-cache-lru)
[![Download Status](https://img.shields.io/npm/dm/dataloader-cache-lru.svg?style=flat-square)](https://www.npmjs.com/package/dataloader-cache-lru)

> LRU (least recently used) cache for Facebook's DataLoader.

## Installation

```
npm install dataloader-cache-lru --save
```

## Documentation

DataLoader, by default, uses the standard Map which simply grows until the DataLoader is released.
The default is appropriate when requests to your application are short-lived.
Longer lived DataLoaders, such as ones which persist between GraphQL queries, will build up memory
pressure unless the size of the cache is controlled.

This DataLoader-compatible cache implements a LRU (least recently used) cache, it deletes the
least recently used items when the cache size is exceeded.
 
 
## Complete Example

```js
const DataLoader = require('dataloader');
const dataLoaderCacheLru = require('dataloader-cache-lru');

const options = { max: 3 };
const dataloader = new DataLoader(batchLoadFn, { cacheMap: dataLoaderCacheLru(options) });

Promise.all(
  ['a', 'b', 'c', 'd', 'e'].map(key => dataloader.load(key))
)
  .then(data => {
    console.log(data); // [{ key: 'a', data: 'a' ), ..., { key: 'e', data: 'e' }]
    console.log(cacheMap.keys().sort()); // ['c', 'd', 'e']
  });

function batchLoadFn (keys) {
  return Promise.all(
    keys.map(key => ({ key, data: key }))
  );
}
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
