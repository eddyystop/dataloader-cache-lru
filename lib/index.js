
const lruCache = require('lru-cache');

lruCache.prototype.delete = lruCache.prototype.del;
lruCache.prototype.clear = lruCache.prototype.reset;

module.exports = options => new lruCache(options);
