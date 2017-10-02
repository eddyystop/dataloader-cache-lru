# dataloader-cache-lru

[![Build Status](https://travis-ci.org/eddyystop/dataloader-cache-lru.png?branch=master)](https://travis-ci.org/eddyystop/dataloader-cache-lru)
[![Code Climate](https://codeclimate.com/github/eddyystop/dataloader-cache-lru/badges/gpa.svg)](https://codeclimate.com/github/eddyystop/dataloader-cache-lru)
[![Test Coverage](https://codeclimate.com/github/eddyystop/dataloader-cache-lru/badges/coverage.svg)](https://codeclimate.com/github/eddyystop/dataloader-cache-lru/coverage)
[![Dependency Status](https://img.shields.io/david/eddyystop/dataloader-cache-lru.svg?style=flat-square)](https://david-dm.org/eddyystop/dataloader-cache-lru)
[![Download Status](https://img.shields.io/npm/dm/dataloader-cache-lru.svg?style=flat-square)](https://www.npmjs.com/package/dataloader-cache-lru)

> LRU (least recently used) cache for Facebook&#39;s DataLoader.

## Installation

```
npm install dataloader-cache-lru --save
```

## Documentation

Please refer to the [dataloader-cache-lru documentation](http://docs.feathersjs.com/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `dataloader-cache-lru`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const plugin = require('dataloader-cache-lru');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
