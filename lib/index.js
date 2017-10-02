
/*
 LRU (least recently used) cache for facebook/dataloader.
 
 DataLoader, by default, uses the standard Map which simply grows until the DataLoader is released.
 The default is appropriate when requests to your application are short-lived.
 Longer lived DataLoaders, such as ones which persist between GraphQL queries, will build up memory
 pressure unless the size of the cache is controlled.
 
 This DataLoader-compatible cache implements a LRU (least recently used) cache, it deletes the
 least recently used items when the cache size is exceeded
 
 DataLoader expects   node-lru-cache provides
 ==================   =======================
 get(key)             get(key) => value
 set(key, value)      set(key, value, maxAge)
 delete(key)          del(key)
 clear()              reset()
 */

const lruCache = require('lru-cache');

lruCache.prototype.delete = lruCache.prototype.del;
lruCache.prototype.clear = lruCache.prototype.reset;

module.exports = options => new lruCache(options);
