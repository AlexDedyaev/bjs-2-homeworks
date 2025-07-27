//Задача № 1
function cachingDecoratorNew(func) {
	const cache = {};

	return function(...args) {
		const hash = md5(args);
		if (hash in cache) {
			console.log("Из кеша: " + cache[hash]);
			return "Из кеша: " + cache[hash];
		}
		const result = func(...args);
		cache[hash] = result;
		if (Object.keys(cache).length > 5) {
			const firstKey = Object.keys(cache)[0];
			delete cache[firstKey];
		}

		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
}
/*
// через массив
function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...arg) {
     const hash = md5(arg);
        if (cache.some(arr => arr.hash === hash) === true) {
            let hashIndex = cache.findIndex(arr => arr.hash === hash);
            console.log("Из кеша: " + cache[hashIndex].value);
            return "Из кеша: " + cache[hashIndex].value
        }

     const result = func(...arg);
     cache.push({
     hash: hash,
     value: result
     });
         if (cache.length > 5) {
           cache.shift();
         }
     console.log("Вычисляем: " + result);
     return "Вычисляем: " + result;
  }
  return wrapper;
*/

//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	wrapper.count = 0;
	wrapper.allCount = 0

	function wrapper(...args) {
		wrapper.allCount++;

		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (!timeoutId) {
			func(...args);
			wrapper.count++;
		}
		timeoutId = setTimeout(() => {
			func(...args);
			wrapper.count++;
		}, delay);
	}

	return wrapper;
}
