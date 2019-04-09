(function () {
  const verifyAddParams = params => {
    if (params.length !== 2) throw Error("You must provide 2 arguments. 1. Options Object or selector String. 2. Callback Function.");  
    const firstParamIsString = typeof params[0] === 'string';
    if (!firstParamIsString && typeof params[0] !== 'object') throw Error("Arugment 1 must be of type String or Object");
    if (typeof params[1] !== 'function') throw Error("Argument 2 must be of type Function. You need to specify a callback function.");
    
    return {
      selector: (firstParamIsString ? params[0] : (params[0].selector || '')),
      interval: (firstParamIsString ? 100 : (params[0].interval || 100)),
      cb: params[1]
    };
  };
  const _intervals = {};
  window.ElementCatcher = {
    _cleanup: function () {
      Object.keys(_intervals).forEach(clearInterval);
    },
    add: function () {
      const {selector, interval, cb} = verifyAddParams(arguments);

      _intervals[selector] = setInterval(_ => {
        const el = document.querySelector(selector);
        if (!el) return;

        clearInterval(_intervals[selector]);
        delete _intervals[selector];

        if (!cb || typeof cb !== 'function') return;
        cb(el);
      }, interval);
    }
  };
  window.addEventListener('unload', function () {
    window.ElementCatcher._cleanup();
  });
})();