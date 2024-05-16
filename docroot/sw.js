(() => {
  // node_modules/workbox-core/_version.js
  try {
    self["workbox:core:7.0.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-core/models/messages/messages.js
  var messages = {
    "invalid-value": ({ paramName, validValueDescription, value }) => {
      if (!paramName || !validValueDescription) {
        throw new Error(`Unexpected input to 'invalid-value' error.`);
      }
      return `The '${paramName}' parameter was given a value with an unexpected value. ${validValueDescription} Received a value of ${JSON.stringify(value)}.`;
    },
    "not-an-array": ({ moduleName, className, funcName, paramName }) => {
      if (!moduleName || !className || !funcName || !paramName) {
        throw new Error(`Unexpected input to 'not-an-array' error.`);
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    "incorrect-type": ({ expectedType, paramName, moduleName, className, funcName }) => {
      if (!expectedType || !paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-type' error.`);
      }
      const classNameStr = className ? `${className}.` : "";
      return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be of type ${expectedType}.`;
    },
    "incorrect-class": ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
      if (!expectedClassName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'incorrect-class' error.`);
      }
      const classNameStr = className ? `${className}.` : "";
      if (isReturnValueProblem) {
        return `The return value from '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
      }
      return `The parameter '${paramName}' passed into '${moduleName}.${classNameStr}${funcName}()' must be an instance of class ${expectedClassName}.`;
    },
    "missing-a-method": ({ expectedMethod, paramName, moduleName, className, funcName }) => {
      if (!expectedMethod || !paramName || !moduleName || !className || !funcName) {
        throw new Error(`Unexpected input to 'missing-a-method' error.`);
      }
      return `${moduleName}.${className}.${funcName}() expected the '${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    "add-to-cache-list-unexpected-type": ({ entry }) => {
      return `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(entry)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`;
    },
    "add-to-cache-list-conflicting-entries": ({ firstEntry, secondEntry }) => {
      if (!firstEntry || !secondEntry) {
        throw new Error(`Unexpected input to 'add-to-cache-list-duplicate-entries' error.`);
      }
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${firstEntry} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
    },
    "plugin-error-request-will-fetch": ({ thrownErrorMessage }) => {
      if (!thrownErrorMessage) {
        throw new Error(`Unexpected input to 'plugin-error-request-will-fetch', error.`);
      }
      return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${thrownErrorMessage}'.`;
    },
    "invalid-cache-name": ({ cacheNameId, value }) => {
      if (!cacheNameId) {
        throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
      }
      return `You must provide a name containing at least one character for setCacheDetails({${cacheNameId}: '...'}). Received a value of '${JSON.stringify(value)}'`;
    },
    "unregister-route-but-not-found-with-method": ({ method }) => {
      if (!method) {
        throw new Error(`Unexpected input to 'unregister-route-but-not-found-with-method' error.`);
      }
      return `The route you're trying to unregister was not  previously registered for the method type '${method}'.`;
    },
    "unregister-route-route-not-registered": () => {
      return `The route you're trying to unregister was not previously registered.`;
    },
    "queue-replay-failed": ({ name }) => {
      return `Replaying the background sync queue '${name}' failed.`;
    },
    "duplicate-queue-name": ({ name }) => {
      return `The Queue name '${name}' is already being used. All instances of backgroundSync.Queue must be given unique names.`;
    },
    "expired-test-without-max-age": ({ methodName, paramName }) => {
      return `The '${methodName}()' method can only be used when the '${paramName}' is used in the constructor.`;
    },
    "unsupported-route-type": ({ moduleName, className, funcName, paramName }) => {
      return `The supplied '${paramName}' parameter was an unsupported type. Please check the docs for ${moduleName}.${className}.${funcName} for valid input types.`;
    },
    "not-array-of-class": ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
      return `The supplied '${paramName}' parameter must be an array of '${expectedClass}' objects. Received '${JSON.stringify(value)},'. Please check the call to ${moduleName}.${className}.${funcName}() to fix the issue.`;
    },
    "max-entries-or-age-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.maxEntries or config.maxAgeSecondsin ${moduleName}.${className}.${funcName}`;
    },
    "statuses-or-headers-required": ({ moduleName, className, funcName }) => {
      return `You must define either config.statuses or config.headersin ${moduleName}.${className}.${funcName}`;
    },
    "invalid-string": ({ moduleName, funcName, paramName }) => {
      if (!paramName || !moduleName || !funcName) {
        throw new Error(`Unexpected input to 'invalid-string' error.`);
      }
      return `When using strings, the '${paramName}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${moduleName}.${funcName}() for more info.`;
    },
    "channel-name-required": () => {
      return `You must provide a channelName to construct a BroadcastCacheUpdate instance.`;
    },
    "invalid-responses-are-same-args": () => {
      return `The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.`;
    },
    "expire-custom-caches-only": () => {
      return `You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.`;
    },
    "unit-must-be-bytes": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
      }
      return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "single-range-only": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'single-range-only' error.`);
      }
      return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "invalid-range-values": ({ normalizedRangeHeader }) => {
      if (!normalizedRangeHeader) {
        throw new Error(`Unexpected input to 'invalid-range-values' error.`);
      }
      return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${normalizedRangeHeader}"`;
    },
    "no-range-header": () => {
      return `No Range header was found in the Request provided.`;
    },
    "range-not-satisfiable": ({ size, start, end }) => {
      return `The start (${start}) and end (${end}) values in the Range are not satisfiable by the cached response, which is ${size} bytes.`;
    },
    "attempt-to-cache-non-get-request": ({ url, method }) => {
      return `Unable to cache '${url}' because it is a '${method}' request and only 'GET' requests can be cached.`;
    },
    "cache-put-with-no-response": ({ url }) => {
      return `There was an attempt to cache '${url}' but the response was not defined.`;
    },
    "no-response": ({ url, error }) => {
      let message = `The strategy could not generate a response for '${url}'.`;
      if (error) {
        message += ` The underlying error is ${error}.`;
      }
      return message;
    },
    "bad-precaching-response": ({ url, status }) => {
      return `The precaching request for '${url}' failed` + (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    "non-precached-url": ({ url }) => {
      return `createHandlerBoundToURL('${url}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`;
    },
    "add-to-cache-list-conflicting-integrities": ({ url }) => {
      return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${url} with different integrity values. Please remove one of them.`;
    },
    "missing-precache-entry": ({ cacheName, url }) => {
      return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    "cross-origin-copy-response": ({ origin }) => {
      return `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${origin}.`;
    },
    "opaque-streams-source": ({ type }) => {
      const message = `One of the workbox-streams sources resulted in an '${type}' response.`;
      if (type === "opaqueredirect") {
        return `${message} Please do not use a navigation request that results in a redirect as a source.`;
      }
      return `${message} Please ensure your sources are CORS-enabled.`;
    }
  };

  // node_modules/workbox-core/models/messages/messageGenerator.js
  var generatorFunction = (code, details = {}) => {
    const message = messages[code];
    if (!message) {
      throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
  };
  var messageGenerator = false ? fallback : generatorFunction;

  // node_modules/workbox-core/_private/WorkboxError.js
  var WorkboxError = class extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
      const message = messageGenerator(errorCode, details);
      super(message);
      this.name = errorCode;
      this.details = details;
    }
  };

  // node_modules/workbox-core/_private/assert.js
  var isArray = (value, details) => {
    if (!Array.isArray(value)) {
      throw new WorkboxError("not-an-array", details);
    }
  };
  var hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== "function") {
      details["expectedMethod"] = expectedMethod;
      throw new WorkboxError("missing-a-method", details);
    }
  };
  var isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
      details["expectedType"] = expectedType;
      throw new WorkboxError("incorrect-type", details);
    }
  };
  var isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
      details["expectedClassName"] = expectedClass.name;
      throw new WorkboxError("incorrect-class", details);
    }
  };
  var isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
      details["validValueDescription"] = `Valid values are ${JSON.stringify(validValues)}.`;
      throw new WorkboxError("invalid-value", details);
    }
  };
  var isArrayOfClass = (value, expectedClass, details) => {
    const error = new WorkboxError("not-array-of-class", details);
    if (!Array.isArray(value)) {
      throw error;
    }
    for (const item of value) {
      if (!(item instanceof expectedClass)) {
        throw error;
      }
    }
  };
  var finalAssertExports = false ? null : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass
  };

  // node_modules/workbox-core/_private/cacheNames.js
  var _cacheNameDetails = {
    googleAnalytics: "googleAnalytics",
    precache: "precache-v2",
    prefix: "workbox",
    runtime: "runtime",
    suffix: typeof registration !== "undefined" ? registration.scope : ""
  };
  var _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix].filter((value) => value && value.length > 0).join("-");
  };
  var eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
      fn(key);
    }
  };
  var cacheNames = {
    updateDetails: (details) => {
      eachCacheNameDetail((key) => {
        if (typeof details[key] === "string") {
          _cacheNameDetails[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
      return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
      return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
      return _cacheNameDetails.suffix;
    }
  };

  // node_modules/workbox-core/_private/logger.js
  var logger = false ? null : (() => {
    if (!("__WB_DISABLE_DEV_LOGS" in globalThis)) {
      self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
      debug: `#7f8c8d`,
      log: `#2ecc71`,
      warn: `#f39c12`,
      error: `#c0392b`,
      groupCollapsed: `#3498db`,
      groupEnd: null
      // No colored prefix on groupEnd
    };
    const print = function(method, args) {
      if (self.__WB_DISABLE_DEV_LOGS) {
        return;
      }
      if (method === "groupCollapsed") {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          console[method](...args);
          return;
        }
      }
      const styles = [
        `background: ${methodToColorMap[method]}`,
        `border-radius: 0.5em`,
        `color: white`,
        `font-weight: bold`,
        `padding: 2px 0.5em`
      ];
      const logPrefix = inGroup ? [] : ["%cworkbox", styles.join(";")];
      console[method](...logPrefix, ...args);
      if (method === "groupCollapsed") {
        inGroup = true;
      }
      if (method === "groupEnd") {
        inGroup = false;
      }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
      const method = key;
      api[method] = (...args) => {
        print(method, args);
      };
    }
    return api;
  })();

  // node_modules/workbox-core/_private/waitUntil.js
  function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
  }

  // node_modules/workbox-precaching/_version.js
  try {
    self["workbox:precaching:7.0.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-precaching/utils/createCacheKey.js
  var REVISION_SEARCH_PARAM = "__WB_REVISION__";
  function createCacheKey(entry) {
    if (!entry) {
      throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
    }
    if (typeof entry === "string") {
      const urlObject = new URL(entry, location.href);
      return {
        cacheKey: urlObject.href,
        url: urlObject.href
      };
    }
    const { revision, url } = entry;
    if (!url) {
      throw new WorkboxError("add-to-cache-list-unexpected-type", { entry });
    }
    if (!revision) {
      const urlObject = new URL(url, location.href);
      return {
        cacheKey: urlObject.href,
        url: urlObject.href
      };
    }
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
      cacheKey: cacheKeyURL.href,
      url: originalURL.href
    };
  }

  // node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
  var PrecacheInstallReportPlugin = class {
    constructor() {
      this.updatedURLs = [];
      this.notUpdatedURLs = [];
      this.handlerWillStart = async ({ request, state }) => {
        if (state) {
          state.originalRequest = request;
        }
      };
      this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse }) => {
        if (event.type === "install") {
          if (state && state.originalRequest && state.originalRequest instanceof Request) {
            const url = state.originalRequest.url;
            if (cachedResponse) {
              this.notUpdatedURLs.push(url);
            } else {
              this.updatedURLs.push(url);
            }
          }
        }
        return cachedResponse;
      };
    }
  };

  // node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
  var PrecacheCacheKeyPlugin = class {
    constructor({ precacheController: precacheController2 }) {
      this.cacheKeyWillBeUsed = async ({ request, params }) => {
        const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) || this._precacheController.getCacheKeyForURL(request.url);
        return cacheKey ? new Request(cacheKey, { headers: request.headers }) : request;
      };
      this._precacheController = precacheController2;
    }
  };

  // node_modules/workbox-precaching/utils/printCleanupDetails.js
  var logGroup = (groupTitle, deletedURLs) => {
    logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
      logger.log(url);
    }
    logger.groupEnd();
  };
  function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
      logger.groupCollapsed(`During precaching cleanup, ${deletionCount} cached request${deletionCount === 1 ? " was" : "s were"} deleted.`);
      logGroup("Deleted Cache Requests", deletedURLs);
      logger.groupEnd();
    }
  }

  // node_modules/workbox-precaching/utils/printInstallDetails.js
  function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
      return;
    }
    logger.groupCollapsed(groupTitle);
    for (const url of urls) {
      logger.log(url);
    }
    logger.groupEnd();
  }
  function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
      let message = `Precaching ${precachedCount} file${precachedCount === 1 ? "" : "s"}.`;
      if (alreadyPrecachedCount > 0) {
        message += ` ${alreadyPrecachedCount} file${alreadyPrecachedCount === 1 ? " is" : "s are"} already cached.`;
      }
      logger.groupCollapsed(message);
      _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
      _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
      logger.groupEnd();
    }
  }

  // node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
  var supportStatus;
  function canConstructResponseFromBodyStream() {
    if (supportStatus === void 0) {
      const testResponse = new Response("");
      if ("body" in testResponse) {
        try {
          new Response(testResponse.body);
          supportStatus = true;
        } catch (error) {
          supportStatus = false;
        }
      }
      supportStatus = false;
    }
    return supportStatus;
  }

  // node_modules/workbox-core/copyResponse.js
  async function copyResponse(response, modifier) {
    let origin = null;
    if (response.url) {
      const responseURL = new URL(response.url);
      origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
      throw new WorkboxError("cross-origin-copy-response", { origin });
    }
    const clonedResponse = response.clone();
    const responseInit = {
      headers: new Headers(clonedResponse.headers),
      status: clonedResponse.status,
      statusText: clonedResponse.statusText
    };
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    const body = canConstructResponseFromBodyStream() ? clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
  }

  // node_modules/workbox-core/_private/getFriendlyURL.js
  var getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    return urlObj.href.replace(new RegExp(`^${location.origin}`), "");
  };

  // node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
  function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
      strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
  }
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    if (request.url === strippedRequestURL) {
      return cache.match(request, matchOptions);
    }
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
      const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
      if (strippedRequestURL === strippedCacheKeyURL) {
        return cache.match(cacheKey, matchOptions);
      }
    }
    return;
  }

  // node_modules/workbox-core/_private/Deferred.js
  var Deferred = class {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
  };

  // node_modules/workbox-core/models/quotaErrorCallbacks.js
  var quotaErrorCallbacks = /* @__PURE__ */ new Set();

  // node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  async function executeQuotaErrorCallbacks() {
    if (true) {
      logger.log(`About to run ${quotaErrorCallbacks.size} callbacks to clean up caches.`);
    }
    for (const callback of quotaErrorCallbacks) {
      await callback();
      if (true) {
        logger.log(callback, "is complete.");
      }
    }
    if (true) {
      logger.log("Finished running callbacks.");
    }
  }

  // node_modules/workbox-core/_private/timeout.js
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // node_modules/workbox-strategies/_version.js
  try {
    self["workbox:strategies:7.0.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-strategies/StrategyHandler.js
  function toRequest(input) {
    return typeof input === "string" ? new Request(input) : input;
  }
  var StrategyHandler = class {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
      this._cacheKeys = {};
      if (true) {
        finalAssertExports.isInstance(options.event, ExtendableEvent, {
          moduleName: "workbox-strategies",
          className: "StrategyHandler",
          funcName: "constructor",
          paramName: "options.event"
        });
      }
      Object.assign(this, options);
      this.event = options.event;
      this._strategy = strategy;
      this._handlerDeferred = new Deferred();
      this._extendLifetimePromises = [];
      this._plugins = [...strategy.plugins];
      this._pluginStateMap = /* @__PURE__ */ new Map();
      for (const plugin of this._plugins) {
        this._pluginStateMap.set(plugin, {});
      }
      this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
      const { event } = this;
      let request = toRequest(input);
      if (request.mode === "navigate" && event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
          if (true) {
            logger.log(`Using a preloaded navigation response for '${getFriendlyURL(request.url)}'`);
          }
          return possiblePreloadResponse;
        }
      }
      const originalRequest = this.hasCallback("fetchDidFail") ? request.clone() : null;
      try {
        for (const cb of this.iterateCallbacks("requestWillFetch")) {
          request = await cb({ request: request.clone(), event });
        }
      } catch (err) {
        if (err instanceof Error) {
          throw new WorkboxError("plugin-error-request-will-fetch", {
            thrownErrorMessage: err.message
          });
        }
      }
      const pluginFilteredRequest = request.clone();
      try {
        let fetchResponse;
        fetchResponse = await fetch(request, request.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
        if (true) {
          logger.debug(`Network request for '${getFriendlyURL(request.url)}' returned a response with status '${fetchResponse.status}'.`);
        }
        for (const callback of this.iterateCallbacks("fetchDidSucceed")) {
          fetchResponse = await callback({
            event,
            request: pluginFilteredRequest,
            response: fetchResponse
          });
        }
        return fetchResponse;
      } catch (error) {
        if (true) {
          logger.log(`Network request for '${getFriendlyURL(request.url)}' threw an error.`, error);
        }
        if (originalRequest) {
          await this.runCallbacks("fetchDidFail", {
            error,
            event,
            originalRequest: originalRequest.clone(),
            request: pluginFilteredRequest.clone()
          });
        }
        throw error;
      }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
      const response = await this.fetch(input);
      const responseClone = response.clone();
      void this.waitUntil(this.cachePut(input, responseClone));
      return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
      const request = toRequest(key);
      let cachedResponse;
      const { cacheName, matchOptions } = this._strategy;
      const effectiveRequest = await this.getCacheKey(request, "read");
      const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
      cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
      if (true) {
        if (cachedResponse) {
          logger.debug(`Found a cached response in '${cacheName}'.`);
        } else {
          logger.debug(`No cached response found in '${cacheName}'.`);
        }
      }
      for (const callback of this.iterateCallbacks("cachedResponseWillBeUsed")) {
        cachedResponse = await callback({
          cacheName,
          matchOptions,
          cachedResponse,
          request: effectiveRequest,
          event: this.event
        }) || void 0;
      }
      return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
      const request = toRequest(key);
      await timeout(0);
      const effectiveRequest = await this.getCacheKey(request, "write");
      if (true) {
        if (effectiveRequest.method && effectiveRequest.method !== "GET") {
          throw new WorkboxError("attempt-to-cache-non-get-request", {
            url: getFriendlyURL(effectiveRequest.url),
            method: effectiveRequest.method
          });
        }
        const vary = response.headers.get("Vary");
        if (vary) {
          logger.debug(`The response for ${getFriendlyURL(effectiveRequest.url)} has a 'Vary: ${vary}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
        }
      }
      if (!response) {
        if (true) {
          logger.error(`Cannot cache non-existent response for '${getFriendlyURL(effectiveRequest.url)}'.`);
        }
        throw new WorkboxError("cache-put-with-no-response", {
          url: getFriendlyURL(effectiveRequest.url)
        });
      }
      const responseToCache = await this._ensureResponseSafeToCache(response);
      if (!responseToCache) {
        if (true) {
          logger.debug(`Response '${getFriendlyURL(effectiveRequest.url)}' will not be cached.`, responseToCache);
        }
        return false;
      }
      const { cacheName, matchOptions } = this._strategy;
      const cache = await self.caches.open(cacheName);
      const hasCacheUpdateCallback = this.hasCallback("cacheDidUpdate");
      const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache,
        effectiveRequest.clone(),
        ["__WB_REVISION__"],
        matchOptions
      ) : null;
      if (true) {
        logger.debug(`Updating the '${cacheName}' cache with a new Response for ${getFriendlyURL(effectiveRequest.url)}.`);
      }
      try {
        await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "QuotaExceededError") {
            await executeQuotaErrorCallbacks();
          }
          throw error;
        }
      }
      for (const callback of this.iterateCallbacks("cacheDidUpdate")) {
        await callback({
          cacheName,
          oldResponse,
          newResponse: responseToCache.clone(),
          request: effectiveRequest,
          event: this.event
        });
      }
      return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
      const key = `${request.url} | ${mode}`;
      if (!this._cacheKeys[key]) {
        let effectiveRequest = request;
        for (const callback of this.iterateCallbacks("cacheKeyWillBeUsed")) {
          effectiveRequest = toRequest(await callback({
            mode,
            request: effectiveRequest,
            event: this.event,
            // params has a type any can't change right now.
            params: this.params
            // eslint-disable-line
          }));
        }
        this._cacheKeys[key] = effectiveRequest;
      }
      return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
      for (const plugin of this._strategy.plugins) {
        if (name in plugin) {
          return true;
        }
      }
      return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
      for (const callback of this.iterateCallbacks(name)) {
        await callback(param);
      }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
      for (const plugin of this._strategy.plugins) {
        if (typeof plugin[name] === "function") {
          const state = this._pluginStateMap.get(plugin);
          const statefulCallback = (param) => {
            const statefulParam = Object.assign(Object.assign({}, param), { state });
            return plugin[name](statefulParam);
          };
          yield statefulCallback;
        }
      }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
      this._extendLifetimePromises.push(promise);
      return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
      let promise;
      while (promise = this._extendLifetimePromises.shift()) {
        await promise;
      }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
      this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
      let responseToCache = response;
      let pluginsUsed = false;
      for (const callback of this.iterateCallbacks("cacheWillUpdate")) {
        responseToCache = await callback({
          request: this.request,
          response: responseToCache,
          event: this.event
        }) || void 0;
        pluginsUsed = true;
        if (!responseToCache) {
          break;
        }
      }
      if (!pluginsUsed) {
        if (responseToCache && responseToCache.status !== 200) {
          responseToCache = void 0;
        }
        if (true) {
          if (responseToCache) {
            if (responseToCache.status !== 200) {
              if (responseToCache.status === 0) {
                logger.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`);
              } else {
                logger.debug(`The response for '${this.request.url}' returned a status code of '${response.status}' and won't be cached as a result.`);
              }
            }
          }
        }
      }
      return responseToCache;
    }
  };

  // node_modules/workbox-strategies/Strategy.js
  var Strategy = class {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
      this.cacheName = cacheNames.getRuntimeName(options.cacheName);
      this.plugins = options.plugins || [];
      this.fetchOptions = options.fetchOptions;
      this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
      const [responseDone] = this.handleAll(options);
      return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
      if (options instanceof FetchEvent) {
        options = {
          event: options,
          request: options.request
        };
      }
      const event = options.event;
      const request = typeof options.request === "string" ? new Request(options.request) : options.request;
      const params = "params" in options ? options.params : void 0;
      const handler = new StrategyHandler(this, { event, request, params });
      const responseDone = this._getResponse(handler, request, event);
      const handlerDone = this._awaitComplete(responseDone, handler, request, event);
      return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
      await handler.runCallbacks("handlerWillStart", { event, request });
      let response = void 0;
      try {
        response = await this._handle(request, handler);
        if (!response || response.type === "error") {
          throw new WorkboxError("no-response", { url: request.url });
        }
      } catch (error) {
        if (error instanceof Error) {
          for (const callback of handler.iterateCallbacks("handlerDidError")) {
            response = await callback({ error, event, request });
            if (response) {
              break;
            }
          }
        }
        if (!response) {
          throw error;
        } else if (true) {
          logger.log(`While responding to '${getFriendlyURL(request.url)}', an ${error instanceof Error ? error.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
        }
      }
      for (const callback of handler.iterateCallbacks("handlerWillRespond")) {
        response = await callback({ event, request, response });
      }
      return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
      let response;
      let error;
      try {
        response = await responseDone;
      } catch (error2) {
      }
      try {
        await handler.runCallbacks("handlerDidRespond", {
          event,
          request,
          response
        });
        await handler.doneWaiting();
      } catch (waitUntilError) {
        if (waitUntilError instanceof Error) {
          error = waitUntilError;
        }
      }
      await handler.runCallbacks("handlerDidComplete", {
        event,
        request,
        response,
        error
      });
      handler.destroy();
      if (error) {
        throw error;
      }
    }
  };

  // node_modules/workbox-precaching/PrecacheStrategy.js
  var PrecacheStrategy = class _PrecacheStrategy extends Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
      options.cacheName = cacheNames.getPrecacheName(options.cacheName);
      super(options);
      this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
      this.plugins.push(_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
      const response = await handler.cacheMatch(request);
      if (response) {
        return response;
      }
      if (handler.event && handler.event.type === "install") {
        return await this._handleInstall(request, handler);
      }
      return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
      let response;
      const params = handler.params || {};
      if (this._fallbackToNetwork) {
        if (true) {
          logger.warn(`The precached response for ${getFriendlyURL(request.url)} in ${this.cacheName} was not found. Falling back to the network.`);
        }
        const integrityInManifest = params.integrity;
        const integrityInRequest = request.integrity;
        const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
        response = await handler.fetch(new Request(request, {
          integrity: request.mode !== "no-cors" ? integrityInRequest || integrityInManifest : void 0
        }));
        if (integrityInManifest && noIntegrityConflict && request.mode !== "no-cors") {
          this._useDefaultCacheabilityPluginIfNeeded();
          const wasCached = await handler.cachePut(request, response.clone());
          if (true) {
            if (wasCached) {
              logger.log(`A response for ${getFriendlyURL(request.url)} was used to "repair" the precache.`);
            }
          }
        }
      } else {
        throw new WorkboxError("missing-precache-entry", {
          cacheName: this.cacheName,
          url: request.url
        });
      }
      if (true) {
        const cacheKey = params.cacheKey || await handler.getCacheKey(request, "read");
        logger.groupCollapsed(`Precaching is responding to: ` + getFriendlyURL(request.url));
        logger.log(`Serving the precached url: ${getFriendlyURL(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
        logger.groupCollapsed(`View request details here.`);
        logger.log(request);
        logger.groupEnd();
        logger.groupCollapsed(`View response details here.`);
        logger.log(response);
        logger.groupEnd();
        logger.groupEnd();
      }
      return response;
    }
    async _handleInstall(request, handler) {
      this._useDefaultCacheabilityPluginIfNeeded();
      const response = await handler.fetch(request);
      const wasCached = await handler.cachePut(request, response.clone());
      if (!wasCached) {
        throw new WorkboxError("bad-precaching-response", {
          url: request.url,
          status: response.status
        });
      }
      return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
      let defaultPluginIndex = null;
      let cacheWillUpdatePluginCount = 0;
      for (const [index, plugin] of this.plugins.entries()) {
        if (plugin === _PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
          continue;
        }
        if (plugin === _PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
          defaultPluginIndex = index;
        }
        if (plugin.cacheWillUpdate) {
          cacheWillUpdatePluginCount++;
        }
      }
      if (cacheWillUpdatePluginCount === 0) {
        this.plugins.push(_PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
      } else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
        this.plugins.splice(defaultPluginIndex, 1);
      }
    }
  };
  PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
      if (!response || response.status >= 400) {
        return null;
      }
      return response;
    }
  };
  PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
      return response.redirected ? await copyResponse(response) : response;
    }
  };

  // node_modules/workbox-precaching/PrecacheController.js
  var PrecacheController = class {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
      this._urlsToCacheKeys = /* @__PURE__ */ new Map();
      this._urlsToCacheModes = /* @__PURE__ */ new Map();
      this._cacheKeysToIntegrities = /* @__PURE__ */ new Map();
      this._strategy = new PrecacheStrategy({
        cacheName: cacheNames.getPrecacheName(cacheName),
        plugins: [
          ...plugins,
          new PrecacheCacheKeyPlugin({ precacheController: this })
        ],
        fallbackToNetwork
      });
      this.install = this.install.bind(this);
      this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
      return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
      this.addToCacheList(entries);
      if (!this._installAndActiveListenersAdded) {
        self.addEventListener("install", this.install);
        self.addEventListener("activate", this.activate);
        this._installAndActiveListenersAdded = true;
      }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
      if (true) {
        finalAssertExports.isArray(entries, {
          moduleName: "workbox-precaching",
          className: "PrecacheController",
          funcName: "addToCacheList",
          paramName: "entries"
        });
      }
      const urlsToWarnAbout = [];
      for (const entry of entries) {
        if (typeof entry === "string") {
          urlsToWarnAbout.push(entry);
        } else if (entry && entry.revision === void 0) {
          urlsToWarnAbout.push(entry.url);
        }
        const { cacheKey, url } = createCacheKey(entry);
        const cacheMode = typeof entry !== "string" && entry.revision ? "reload" : "default";
        if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
          throw new WorkboxError("add-to-cache-list-conflicting-entries", {
            firstEntry: this._urlsToCacheKeys.get(url),
            secondEntry: cacheKey
          });
        }
        if (typeof entry !== "string" && entry.integrity) {
          if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
            throw new WorkboxError("add-to-cache-list-conflicting-integrities", {
              url
            });
          }
          this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
        }
        this._urlsToCacheKeys.set(url, cacheKey);
        this._urlsToCacheModes.set(url, cacheMode);
        if (urlsToWarnAbout.length > 0) {
          const warningMessage = `Workbox is precaching URLs without revision info: ${urlsToWarnAbout.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
          if (false) {
            console.warn(warningMessage);
          } else {
            logger.warn(warningMessage);
          }
        }
      }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
      return waitUntil(event, async () => {
        const installReportPlugin = new PrecacheInstallReportPlugin();
        this.strategy.plugins.push(installReportPlugin);
        for (const [url, cacheKey] of this._urlsToCacheKeys) {
          const integrity = this._cacheKeysToIntegrities.get(cacheKey);
          const cacheMode = this._urlsToCacheModes.get(url);
          const request = new Request(url, {
            integrity,
            cache: cacheMode,
            credentials: "same-origin"
          });
          await Promise.all(this.strategy.handleAll({
            params: { cacheKey },
            request,
            event
          }));
        }
        const { updatedURLs, notUpdatedURLs } = installReportPlugin;
        if (true) {
          printInstallDetails(updatedURLs, notUpdatedURLs);
        }
        return { updatedURLs, notUpdatedURLs };
      });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
      return waitUntil(event, async () => {
        const cache = await self.caches.open(this.strategy.cacheName);
        const currentlyCachedRequests = await cache.keys();
        const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
        const deletedURLs = [];
        for (const request of currentlyCachedRequests) {
          if (!expectedCacheKeys.has(request.url)) {
            await cache.delete(request);
            deletedURLs.push(request.url);
          }
        }
        if (true) {
          printCleanupDetails(deletedURLs);
        }
        return { deletedURLs };
      });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
      return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
      return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
      const urlObject = new URL(url, location.href);
      return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
      return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
      const url = request instanceof Request ? request.url : request;
      const cacheKey = this.getCacheKeyForURL(url);
      if (cacheKey) {
        const cache = await self.caches.open(this.strategy.cacheName);
        return cache.match(cacheKey);
      }
      return void 0;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
      const cacheKey = this.getCacheKeyForURL(url);
      if (!cacheKey) {
        throw new WorkboxError("non-precached-url", { url });
      }
      return (options) => {
        options.request = new Request(url);
        options.params = Object.assign({ cacheKey }, options.params);
        return this.strategy.handle(options);
      };
    }
  };

  // node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
  var precacheController;
  var getOrCreatePrecacheController = () => {
    if (!precacheController) {
      precacheController = new PrecacheController();
    }
    return precacheController;
  };

  // node_modules/workbox-routing/_version.js
  try {
    self["workbox:routing:7.0.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-routing/utils/constants.js
  var defaultMethod = "GET";
  var validMethods = [
    "DELETE",
    "GET",
    "HEAD",
    "PATCH",
    "POST",
    "PUT"
  ];

  // node_modules/workbox-routing/utils/normalizeHandler.js
  var normalizeHandler = (handler) => {
    if (handler && typeof handler === "object") {
      if (true) {
        finalAssertExports.hasMethod(handler, "handle", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return handler;
    } else {
      if (true) {
        finalAssertExports.isType(handler, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "handler"
        });
      }
      return { handle: handler };
    }
  };

  // node_modules/workbox-routing/Route.js
  var Route = class {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = defaultMethod) {
      if (true) {
        finalAssertExports.isType(match, "function", {
          moduleName: "workbox-routing",
          className: "Route",
          funcName: "constructor",
          paramName: "match"
        });
        if (method) {
          finalAssertExports.isOneOf(method, validMethods, { paramName: "method" });
        }
      }
      this.handler = normalizeHandler(handler);
      this.match = match;
      this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
      this.catchHandler = normalizeHandler(handler);
    }
  };

  // node_modules/workbox-routing/RegExpRoute.js
  var RegExpRoute = class extends Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
      if (true) {
        finalAssertExports.isInstance(regExp, RegExp, {
          moduleName: "workbox-routing",
          className: "RegExpRoute",
          funcName: "constructor",
          paramName: "pattern"
        });
      }
      const match = ({ url }) => {
        const result = regExp.exec(url.href);
        if (!result) {
          return;
        }
        if (url.origin !== location.origin && result.index !== 0) {
          if (true) {
            logger.debug(`The regular expression '${regExp.toString()}' only partially matched against the cross-origin URL '${url.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          }
          return;
        }
        return result.slice(1);
      };
      super(match, handler, method);
    }
  };

  // node_modules/workbox-routing/Router.js
  var Router = class {
    /**
     * Initializes a new Router.
     */
    constructor() {
      this._routes = /* @__PURE__ */ new Map();
      this._defaultHandlerMap = /* @__PURE__ */ new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
      return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
      self.addEventListener("fetch", (event) => {
        const { request } = event;
        const responsePromise = this.handleRequest({ request, event });
        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
      self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "CACHE_URLS") {
          const { payload } = event.data;
          if (true) {
            logger.debug(`Caching URLs from the window`, payload.urlsToCache);
          }
          const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
            if (typeof entry === "string") {
              entry = [entry];
            }
            const request = new Request(...entry);
            return this.handleRequest({ request, event });
          }));
          event.waitUntil(requestPromises);
          if (event.ports && event.ports[0]) {
            void requestPromises.then(() => event.ports[0].postMessage(true));
          }
        }
      });
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "handleRequest",
          paramName: "options.request"
        });
      }
      const url = new URL(request.url, location.href);
      if (!url.protocol.startsWith("http")) {
        if (true) {
          logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
        }
        return;
      }
      const sameOrigin = url.origin === location.origin;
      const { params, route } = this.findMatchingRoute({
        event,
        request,
        sameOrigin,
        url
      });
      let handler = route && route.handler;
      const debugMessages = [];
      if (true) {
        if (handler) {
          debugMessages.push([`Found a route to handle this request:`, route]);
          if (params) {
            debugMessages.push([
              `Passing the following params to the route's handler:`,
              params
            ]);
          }
        }
      }
      const method = request.method;
      if (!handler && this._defaultHandlerMap.has(method)) {
        if (true) {
          debugMessages.push(`Failed to find a matching route. Falling back to the default handler for ${method}.`);
        }
        handler = this._defaultHandlerMap.get(method);
      }
      if (!handler) {
        if (true) {
          logger.debug(`No route found for: ${getFriendlyURL(url)}`);
        }
        return;
      }
      if (true) {
        logger.groupCollapsed(`Router is responding to: ${getFriendlyURL(url)}`);
        debugMessages.forEach((msg) => {
          if (Array.isArray(msg)) {
            logger.log(...msg);
          } else {
            logger.log(msg);
          }
        });
        logger.groupEnd();
      }
      let responsePromise;
      try {
        responsePromise = handler.handle({ url, request, event, params });
      } catch (err) {
        responsePromise = Promise.reject(err);
      }
      const catchHandler = route && route.catchHandler;
      if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
        responsePromise = responsePromise.catch(async (err) => {
          if (catchHandler) {
            if (true) {
              logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to route's Catch Handler.`);
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            try {
              return await catchHandler.handle({ url, request, event, params });
            } catch (catchErr) {
              if (catchErr instanceof Error) {
                err = catchErr;
              }
            }
          }
          if (this._catchHandler) {
            if (true) {
              logger.groupCollapsed(`Error thrown when responding to:  ${getFriendlyURL(url)}. Falling back to global Catch Handler.`);
              logger.error(`Error thrown by:`, route);
              logger.error(err);
              logger.groupEnd();
            }
            return this._catchHandler.handle({ url, request, event });
          }
          throw err;
        });
      }
      return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event }) {
      const routes = this._routes.get(request.method) || [];
      for (const route of routes) {
        let params;
        const matchResult = route.match({ url, sameOrigin, request, event });
        if (matchResult) {
          if (true) {
            if (matchResult instanceof Promise) {
              logger.warn(`While routing ${getFriendlyURL(url)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, route);
            }
          }
          params = matchResult;
          if (Array.isArray(params) && params.length === 0) {
            params = void 0;
          } else if (matchResult.constructor === Object && // eslint-disable-line
          Object.keys(matchResult).length === 0) {
            params = void 0;
          } else if (typeof matchResult === "boolean") {
            params = void 0;
          }
          return { route, params };
        }
      }
      return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = defaultMethod) {
      this._defaultHandlerMap.set(method, normalizeHandler(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
      this._catchHandler = normalizeHandler(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
      if (true) {
        finalAssertExports.isType(route, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route, "match", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.isType(route.handler, "object", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route"
        });
        finalAssertExports.hasMethod(route.handler, "handle", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.handler"
        });
        finalAssertExports.isType(route.method, "string", {
          moduleName: "workbox-routing",
          className: "Router",
          funcName: "registerRoute",
          paramName: "route.method"
        });
      }
      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      }
      this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new WorkboxError("unregister-route-but-not-found-with-method", {
          method: route.method
        });
      }
      const routeIndex = this._routes.get(route.method).indexOf(route);
      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new WorkboxError("unregister-route-route-not-registered");
      }
    }
  };

  // node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  var defaultRouter;
  var getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
      defaultRouter = new Router();
      defaultRouter.addFetchListener();
      defaultRouter.addCacheListener();
    }
    return defaultRouter;
  };

  // node_modules/workbox-routing/registerRoute.js
  function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === "string") {
      const captureUrl = new URL(capture, location.href);
      if (true) {
        if (!(capture.startsWith("/") || capture.startsWith("http"))) {
          throw new WorkboxError("invalid-string", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture"
          });
        }
        const valueToCheck = capture.startsWith("http") ? captureUrl.pathname : capture;
        const wildcards = "[*:?+]";
        if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
          logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${wildcards}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
        }
      }
      const matchCallback = ({ url }) => {
        if (true) {
          if (url.pathname === captureUrl.pathname && url.origin !== captureUrl.origin) {
            logger.debug(`${capture} only partially matches the cross-origin URL ${url.toString()}. This route will only handle cross-origin requests if they match the entire URL.`);
          }
        }
        return url.href === captureUrl.href;
      };
      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === "function") {
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError("unsupported-route-type", {
        moduleName: "workbox-routing",
        funcName: "registerRoute",
        paramName: "capture"
      });
    }
    const defaultRouter2 = getOrCreateDefaultRouter();
    defaultRouter2.registerRoute(route);
    return route;
  }

  // node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
  function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    for (const paramName of [...urlObject.searchParams.keys()]) {
      if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
        urlObject.searchParams.delete(paramName);
      }
    }
    return urlObject;
  }

  // node_modules/workbox-precaching/utils/generateURLVariations.js
  function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = "index.html", cleanURLs = true, urlManipulation } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = "";
    yield urlObject.href;
    const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith("/")) {
      const directoryURL = new URL(urlWithoutIgnoredParams.href);
      directoryURL.pathname += directoryIndex;
      yield directoryURL.href;
    }
    if (cleanURLs) {
      const cleanURL = new URL(urlWithoutIgnoredParams.href);
      cleanURL.pathname += ".html";
      yield cleanURL.href;
    }
    if (urlManipulation) {
      const additionalURLs = urlManipulation({ url: urlObject });
      for (const urlToAttempt of additionalURLs) {
        yield urlToAttempt.href;
      }
    }
  }

  // node_modules/workbox-precaching/PrecacheRoute.js
  var PrecacheRoute = class extends Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController2, options) {
      const match = ({ request }) => {
        const urlsToCacheKeys = precacheController2.getURLsToCacheKeys();
        for (const possibleURL of generateURLVariations(request.url, options)) {
          const cacheKey = urlsToCacheKeys.get(possibleURL);
          if (cacheKey) {
            const integrity = precacheController2.getIntegrityForCacheKey(cacheKey);
            return { cacheKey, integrity };
          }
        }
        if (true) {
          logger.debug(`Precaching did not find a match for ` + getFriendlyURL(request.url));
        }
        return;
      };
      super(match, precacheController2.strategy);
    }
  };

  // node_modules/workbox-precaching/addRoute.js
  function addRoute(options) {
    const precacheController2 = getOrCreatePrecacheController();
    const precacheRoute = new PrecacheRoute(precacheController2, options);
    registerRoute(precacheRoute);
  }

  // node_modules/workbox-precaching/precache.js
  function precache(entries) {
    const precacheController2 = getOrCreatePrecacheController();
    precacheController2.precache(entries);
  }

  // node_modules/workbox-precaching/precacheAndRoute.js
  function precacheAndRoute(entries, options) {
    precache(entries);
    addRoute(options);
  }

  // node_modules/workbox-strategies/utils/messages.js
  var messages2 = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
    printFinalResponse: (response) => {
      if (response) {
        logger.groupCollapsed(`View the final response here.`);
        logger.log(response || "[No response returned]");
        logger.groupEnd();
      }
    }
  };

  // node_modules/workbox-strategies/CacheFirst.js
  var CacheFirst = class extends Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "makeRequest",
          paramName: "request"
        });
      }
      let response = await handler.cacheMatch(request);
      let error = void 0;
      if (!response) {
        if (true) {
          logs.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`);
        }
        try {
          response = await handler.fetchAndCachePut(request);
        } catch (err) {
          if (err instanceof Error) {
            error = err;
          }
        }
        if (true) {
          if (response) {
            logs.push(`Got response from network.`);
          } else {
            logs.push(`Unable to get a response from the network.`);
          }
        }
      } else {
        if (true) {
          logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
        }
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
  };

  // node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  var cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
      if (response.status === 200 || response.status === 0) {
        return response;
      }
      return null;
    }
  };

  // node_modules/workbox-strategies/StaleWhileRevalidate.js
  var StaleWhileRevalidate = class extends Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
      super(options);
      if (!this.plugins.some((p) => "cacheWillUpdate" in p)) {
        this.plugins.unshift(cacheOkAndOpaquePlugin);
      }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
      const logs = [];
      if (true) {
        finalAssertExports.isInstance(request, Request, {
          moduleName: "workbox-strategies",
          className: this.constructor.name,
          funcName: "handle",
          paramName: "request"
        });
      }
      const fetchAndCachePromise = handler.fetchAndCachePut(request).catch(() => {
      });
      void handler.waitUntil(fetchAndCachePromise);
      let response = await handler.cacheMatch(request);
      let error;
      if (response) {
        if (true) {
          logs.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);
        }
      } else {
        if (true) {
          logs.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);
        }
        try {
          response = await fetchAndCachePromise;
        } catch (err) {
          if (err instanceof Error) {
            error = err;
          }
        }
      }
      if (true) {
        logger.groupCollapsed(messages2.strategyStart(this.constructor.name, request));
        for (const log of logs) {
          logger.log(log);
        }
        messages2.printFinalResponse(response);
        logger.groupEnd();
      }
      if (!response) {
        throw new WorkboxError("no-response", { url: request.url, error });
      }
      return response;
    }
  };

  // node_modules/workbox-cacheable-response/_version.js
  try {
    self["workbox:cacheable-response:7.0.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-cacheable-response/CacheableResponse.js
  var CacheableResponse = class {
    /**
     * To construct a new CacheableResponse instance you must provide at least
     * one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config = {}) {
      if (true) {
        if (!(config.statuses || config.headers)) {
          throw new WorkboxError("statuses-or-headers-required", {
            moduleName: "workbox-cacheable-response",
            className: "CacheableResponse",
            funcName: "constructor"
          });
        }
        if (config.statuses) {
          finalAssertExports.isArray(config.statuses, {
            moduleName: "workbox-cacheable-response",
            className: "CacheableResponse",
            funcName: "constructor",
            paramName: "config.statuses"
          });
        }
        if (config.headers) {
          finalAssertExports.isType(config.headers, "object", {
            moduleName: "workbox-cacheable-response",
            className: "CacheableResponse",
            funcName: "constructor",
            paramName: "config.headers"
          });
        }
      }
      this._statuses = config.statuses;
      this._headers = config.headers;
    }
    /**
     * Checks a response to see whether it's cacheable or not, based on this
     * object's configuration.
     *
     * @param {Response} response The response whose cacheability is being
     * checked.
     * @return {boolean} `true` if the `Response` is cacheable, and `false`
     * otherwise.
     */
    isResponseCacheable(response) {
      if (true) {
        finalAssertExports.isInstance(response, Response, {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "isResponseCacheable",
          paramName: "response"
        });
      }
      let cacheable = true;
      if (this._statuses) {
        cacheable = this._statuses.includes(response.status);
      }
      if (this._headers && cacheable) {
        cacheable = Object.keys(this._headers).some((headerName) => {
          return response.headers.get(headerName) === this._headers[headerName];
        });
      }
      if (true) {
        if (!cacheable) {
          logger.groupCollapsed(`The request for '${getFriendlyURL(response.url)}' returned a response that does not meet the criteria for being cached.`);
          logger.groupCollapsed(`View cacheability criteria here.`);
          logger.log(`Cacheable statuses: ` + JSON.stringify(this._statuses));
          logger.log(`Cacheable headers: ` + JSON.stringify(this._headers, null, 2));
          logger.groupEnd();
          const logFriendlyHeaders = {};
          response.headers.forEach((value, key) => {
            logFriendlyHeaders[key] = value;
          });
          logger.groupCollapsed(`View response status and headers here.`);
          logger.log(`Response status: ${response.status}`);
          logger.log(`Response headers: ` + JSON.stringify(logFriendlyHeaders, null, 2));
          logger.groupEnd();
          logger.groupCollapsed(`View full response details here.`);
          logger.log(response.headers);
          logger.log(response);
          logger.groupEnd();
          logger.groupEnd();
        }
      }
      return cacheable;
    }
  };

  // node_modules/workbox-cacheable-response/CacheableResponsePlugin.js
  var CacheableResponsePlugin = class {
    /**
     * To construct a new CacheableResponsePlugin instance you must provide at
     * least one of the `config` properties.
     *
     * If both `statuses` and `headers` are specified, then both conditions must
     * be met for the `Response` to be considered cacheable.
     *
     * @param {Object} config
     * @param {Array<number>} [config.statuses] One or more status codes that a
     * `Response` can have and be considered cacheable.
     * @param {Object<string,string>} [config.headers] A mapping of header names
     * and expected values that a `Response` can have and be considered cacheable.
     * If multiple headers are provided, only one needs to be present.
     */
    constructor(config) {
      this.cacheWillUpdate = async ({ response }) => {
        if (this._cacheableResponse.isResponseCacheable(response)) {
          return response;
        }
        return null;
      };
      this._cacheableResponse = new CacheableResponse(config);
    }
  };

  // node_modules/workbox-core/_private/dontWaitFor.js
  function dontWaitFor(promise) {
    void promise.then(() => {
    });
  }

  // node_modules/workbox-core/registerQuotaErrorCallback.js
  function registerQuotaErrorCallback(callback) {
    if (true) {
      finalAssertExports.isType(callback, "function", {
        moduleName: "workbox-core",
        funcName: "register",
        paramName: "callback"
      });
    }
    quotaErrorCallbacks.add(callback);
    if (true) {
      logger.log("Registered a callback to respond to quota errors.", callback);
    }
  }

  // node_modules/idb/build/wrap-idb-value.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // node_modules/idb/build/index.js
  function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event
      ));
    }
    return wrap(request).then(() => void 0);
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // node_modules/workbox-expiration/_version.js
  try {
    self["workbox:expiration:7.0.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-expiration/models/CacheTimestampsModel.js
  var DB_NAME = "workbox-expiration";
  var CACHE_OBJECT_STORE = "cache-entries";
  var normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = "";
    return url.href;
  };
  var CacheTimestampsModel = class {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
      this._db = null;
      this._cacheName = cacheName;
    }
    /**
     * Performs an upgrade of indexedDB.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDb(db) {
      const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: "id" });
      objStore.createIndex("cacheName", "cacheName", { unique: false });
      objStore.createIndex("timestamp", "timestamp", { unique: false });
    }
    /**
     * Performs an upgrade of indexedDB and deletes deprecated DBs.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDbAndDeleteOldDbs(db) {
      this._upgradeDb(db);
      if (this._cacheName) {
        void deleteDB(this._cacheName);
      }
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
      url = normalizeURL(url);
      const entry = {
        url,
        timestamp,
        cacheName: this._cacheName,
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        id: this._getId(url)
      };
      const db = await this.getDb();
      const tx = db.transaction(CACHE_OBJECT_STORE, "readwrite", {
        durability: "relaxed"
      });
      await tx.store.put(entry);
      await tx.done;
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number | undefined}
     *
     * @private
     */
    async getTimestamp(url) {
      const db = await this.getDb();
      const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
      return entry === null || entry === void 0 ? void 0 : entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
      const db = await this.getDb();
      let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index("timestamp").openCursor(null, "prev");
      const entriesToDelete = [];
      let entriesNotDeletedCount = 0;
      while (cursor) {
        const result = cursor.value;
        if (result.cacheName === this._cacheName) {
          if (minTimestamp && result.timestamp < minTimestamp || maxCount && entriesNotDeletedCount >= maxCount) {
            entriesToDelete.push(cursor.value);
          } else {
            entriesNotDeletedCount++;
          }
        }
        cursor = await cursor.continue();
      }
      const urlsDeleted = [];
      for (const entry of entriesToDelete) {
        await db.delete(CACHE_OBJECT_STORE, entry.id);
        urlsDeleted.push(entry.url);
      }
      return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
      return this._cacheName + "|" + normalizeURL(url);
    }
    /**
     * Returns an open connection to the database.
     *
     * @private
     */
    async getDb() {
      if (!this._db) {
        this._db = await openDB(DB_NAME, 1, {
          upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
        });
      }
      return this._db;
    }
  };

  // node_modules/workbox-expiration/CacheExpiration.js
  var CacheExpiration = class {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     */
    constructor(cacheName, config = {}) {
      this._isRunning = false;
      this._rerunRequested = false;
      if (true) {
        finalAssertExports.isType(cacheName, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor",
          paramName: "cacheName"
        });
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "CacheExpiration",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._maxEntries = config.maxEntries;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._matchOptions = config.matchOptions;
      this._cacheName = cacheName;
      this._timestampModel = new CacheTimestampsModel(cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
      if (this._isRunning) {
        this._rerunRequested = true;
        return;
      }
      this._isRunning = true;
      const minTimestamp = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0;
      const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
      const cache = await self.caches.open(this._cacheName);
      for (const url of urlsExpired) {
        await cache.delete(url, this._matchOptions);
      }
      if (true) {
        if (urlsExpired.length > 0) {
          logger.groupCollapsed(`Expired ${urlsExpired.length} ${urlsExpired.length === 1 ? "entry" : "entries"} and removed ${urlsExpired.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`);
          logger.log(`Expired the following ${urlsExpired.length === 1 ? "URL" : "URLs"}:`);
          urlsExpired.forEach((url) => logger.log(`    ${url}`));
          logger.groupEnd();
        } else {
          logger.debug(`Cache expiration ran and found no entries to remove.`);
        }
      }
      this._isRunning = false;
      if (this._rerunRequested) {
        this._rerunRequested = false;
        dontWaitFor(this.expireEntries());
      }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
      if (true) {
        finalAssertExports.isType(url, "string", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "updateTimestamp",
          paramName: "url"
        });
      }
      await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
      if (!this._maxAgeSeconds) {
        if (true) {
          throw new WorkboxError(`expired-test-without-max-age`, {
            methodName: "isURLExpired",
            paramName: "maxAgeSeconds"
          });
        }
        return false;
      } else {
        const timestamp = await this._timestampModel.getTimestamp(url);
        const expireOlderThan = Date.now() - this._maxAgeSeconds * 1e3;
        return timestamp !== void 0 ? timestamp < expireOlderThan : true;
      }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
      this._rerunRequested = false;
      await this._timestampModel.expireEntries(Infinity);
    }
  };

  // node_modules/workbox-expiration/ExpirationPlugin.js
  var ExpirationPlugin = class {
    /**
     * @param {ExpirationPluginOptions} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
      this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
        if (!cachedResponse) {
          return null;
        }
        const isFresh = this._isResponseDateFresh(cachedResponse);
        const cacheExpiration = this._getCacheExpiration(cacheName);
        dontWaitFor(cacheExpiration.expireEntries());
        const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
        if (event) {
          try {
            event.waitUntil(updateTimestampDone);
          } catch (error) {
            if (true) {
              if ("request" in event) {
                logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${getFriendlyURL(event.request.url)}'.`);
              }
            }
          }
        }
        return isFresh ? cachedResponse : null;
      };
      this.cacheDidUpdate = async ({ cacheName, request }) => {
        if (true) {
          finalAssertExports.isType(cacheName, "string", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "cacheName"
          });
          finalAssertExports.isInstance(request, Request, {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "cacheDidUpdate",
            paramName: "request"
          });
        }
        const cacheExpiration = this._getCacheExpiration(cacheName);
        await cacheExpiration.updateTimestamp(request.url);
        await cacheExpiration.expireEntries();
      };
      if (true) {
        if (!(config.maxEntries || config.maxAgeSeconds)) {
          throw new WorkboxError("max-entries-or-age-required", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor"
          });
        }
        if (config.maxEntries) {
          finalAssertExports.isType(config.maxEntries, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxEntries"
          });
        }
        if (config.maxAgeSeconds) {
          finalAssertExports.isType(config.maxAgeSeconds, "number", {
            moduleName: "workbox-expiration",
            className: "Plugin",
            funcName: "constructor",
            paramName: "config.maxAgeSeconds"
          });
        }
      }
      this._config = config;
      this._maxAgeSeconds = config.maxAgeSeconds;
      this._cacheExpirations = /* @__PURE__ */ new Map();
      if (config.purgeOnQuotaError) {
        registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
      }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
      if (cacheName === cacheNames.getRuntimeName()) {
        throw new WorkboxError("expire-custom-caches-only");
      }
      let cacheExpiration = this._cacheExpirations.get(cacheName);
      if (!cacheExpiration) {
        cacheExpiration = new CacheExpiration(cacheName, this._config);
        this._cacheExpirations.set(cacheName, cacheExpiration);
      }
      return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
      if (!this._maxAgeSeconds) {
        return true;
      }
      const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
      if (dateHeaderTimestamp === null) {
        return true;
      }
      const now = Date.now();
      return dateHeaderTimestamp >= now - this._maxAgeSeconds * 1e3;
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
      if (!cachedResponse.headers.has("date")) {
        return null;
      }
      const dateHeader = cachedResponse.headers.get("date");
      const parsedDate = new Date(dateHeader);
      const headerTime = parsedDate.getTime();
      if (isNaN(headerTime)) {
        return null;
      }
      return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
      for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
        await self.caches.delete(cacheName);
        await cacheExpiration.delete();
      }
      this._cacheExpirations = /* @__PURE__ */ new Map();
    }
  };

  // node_modules/workbox-recipes/_version.js
  try {
    self["workbox:recipes:7.0.0"] && _();
  } catch (e) {
  }

  // node_modules/workbox-recipes/warmStrategyCache.js
  function warmStrategyCache(options) {
    self.addEventListener("install", (event) => {
      const done = options.urls.map((path) => options.strategy.handleAll({
        event,
        request: new Request(path)
      })[1]);
      event.waitUntil(Promise.all(done));
    });
  }

  // node_modules/workbox-recipes/imageCache.js
  function imageCache(options = {}) {
    const defaultMatchCallback = ({ request }) => request.destination === "image";
    const cacheName = options.cacheName || "images";
    const matchCallback = options.matchCallback || defaultMatchCallback;
    const maxAgeSeconds = options.maxAgeSeconds || 30 * 24 * 60 * 60;
    const maxEntries = options.maxEntries || 60;
    const plugins = options.plugins || [];
    plugins.push(new CacheableResponsePlugin({
      statuses: [0, 200]
    }));
    plugins.push(new ExpirationPlugin({
      maxEntries,
      maxAgeSeconds
    }));
    const strategy = new CacheFirst({
      cacheName,
      plugins
    });
    registerRoute(matchCallback, strategy);
    if (options.warmCache) {
      warmStrategyCache({ urls: options.warmCache, strategy });
    }
  }

  // node_modules/workbox-recipes/staticResourceCache.js
  function staticResourceCache(options = {}) {
    const defaultMatchCallback = ({ request }) => request.destination === "style" || request.destination === "script" || request.destination === "worker";
    const cacheName = options.cacheName || "static-resources";
    const matchCallback = options.matchCallback || defaultMatchCallback;
    const plugins = options.plugins || [];
    plugins.push(new CacheableResponsePlugin({
      statuses: [0, 200]
    }));
    const strategy = new StaleWhileRevalidate({
      cacheName,
      plugins
    });
    registerRoute(matchCallback, strategy);
    if (options.warmCache) {
      warmStrategyCache({ urls: options.warmCache, strategy });
    }
  }

  // sw.ts
  precacheAndRoute([{"revision":"2600c8bb82cc068afceeb62cb451561a","url":"themes/custom/oecd/dist/app-drupal/accordion-with-image.css"},{"revision":"3b34bf7a1af7cd55419870e10cfeac8e","url":"themes/custom/oecd/dist/app-drupal/accordion.css"},{"revision":"c310e9d2cd4c1d7a412177c8bb8117f3","url":"themes/custom/oecd/dist/app-drupal/avatar-group.css"},{"revision":"9b8926dcb746dcf7c67d6ff793b38fe9","url":"themes/custom/oecd/dist/app-drupal/avatar.css"},{"revision":"53aafb556b707beb3804c6ce602baf08","url":"themes/custom/oecd/dist/app-drupal/badge.css"},{"revision":"4ee8f52864b6b3ffd2759a53607adb5d","url":"themes/custom/oecd/dist/app-drupal/block-app.css"},{"revision":"a5ab8e83d2e6cb7ccb1c5b4f70a22e83","url":"themes/custom/oecd/dist/app-drupal/block-banner-info.css"},{"revision":"94dda68309a03d371b29a099f9a56dad","url":"themes/custom/oecd/dist/app-drupal/block-footer-text.css"},{"revision":"f262bcb909a45033c0fae3b2e199db71","url":"themes/custom/oecd/dist/app-drupal/breadcrumb.css"},{"revision":"cdd93a6d12dc36fb62e4a1d6b4dc6913","url":"themes/custom/oecd/dist/app-drupal/button.css"},{"revision":"b057959451415a07e875b221c7b6a1b5","url":"themes/custom/oecd/dist/app-drupal/card-carousel.css"},{"revision":"9fc81493be14ff76e648e821912a2ee2","url":"themes/custom/oecd/dist/app-drupal/card-storybook.css"},{"revision":"5c1ae1caf81efca5e19294b7740f35b0","url":"themes/custom/oecd/dist/app-drupal/card.css"},{"revision":"cf097fcad12c63efa0619e6499c097a1","url":"themes/custom/oecd/dist/app-drupal/carousel-item.css"},{"revision":"fc3c8dc6d8cbbf6c59d5a3db3878d046","url":"themes/custom/oecd/dist/app-drupal/carousel.css"},{"revision":"dcef60016148b8219f97334357f3d4e4","url":"themes/custom/oecd/dist/app-drupal/checkbox.css"},{"revision":"2a8114b88458fd55d7750d81f8d22613","url":"themes/custom/oecd/dist/app-drupal/contact-menu-link.css"},{"revision":"1301ca2607b6e419635cda77dad940e6","url":"themes/custom/oecd/dist/app-drupal/cta-banner.css"},{"revision":"3c8d335193983bd8662278049035cbcc","url":"themes/custom/oecd/dist/app-drupal/dropdown-item.css"},{"revision":"630150e702b5df1f9f35dcc28770a6f6","url":"themes/custom/oecd/dist/app-drupal/dropdown.css"},{"revision":"1740cc4baba1ca7e382ab49438eae62d","url":"themes/custom/oecd/dist/app-drupal/email-form.css"},{"revision":"9a6d402b25bc772ab5c3d82f0529b894","url":"themes/custom/oecd/dist/app-drupal/footer-end-logo.css"},{"revision":"54224a586bb80f62b3bb82b7dc6ca452","url":"themes/custom/oecd/dist/app-drupal/footer-logo-content.css"},{"revision":"3f5db1ead97851db8459ddfb31b8fc04","url":"themes/custom/oecd/dist/app-drupal/footer.css"},{"revision":"86ac3ad69e940cb40a14ad7f02d4e0dc","url":"themes/custom/oecd/dist/app-drupal/form-newsletter.css"},{"revision":"0962fd8b0619e384cb9c8a33db0b0a41","url":"themes/custom/oecd/dist/app-drupal/forms.css"},{"revision":"657a9d348fb3b24ba676bbffc3a30179","url":"themes/custom/oecd/dist/app-drupal/hamburger.css"},{"revision":"36d6c9fe51329159245557da037eb914","url":"themes/custom/oecd/dist/app-drupal/header-hamburger-menu-search.css"},{"revision":"78b28610642a490241fd135e00adc2c8","url":"themes/custom/oecd/dist/app-drupal/header.css"},{"revision":"c9564fb15a6c9224b125ae1df87d25a4","url":"themes/custom/oecd/dist/app-drupal/hero-banner.css"},{"revision":"9f02947bf258086ecba6bc0ea844d2b4","url":"themes/custom/oecd/dist/app-drupal/input.css"},{"revision":"40803094b66540cbb4da9d1e08183d17","url":"themes/custom/oecd/dist/app-drupal/layout-builder.css"},{"revision":"8d28f1ecbc75b698f9a6f1849a0d435d","url":"themes/custom/oecd/dist/app-drupal/logo-grid.css"},{"revision":"f5f9ed3461a15fe4950cd92a8120bd43","url":"themes/custom/oecd/dist/app-drupal/logo.css"},{"revision":"37ceea470ef6b782adc23c8bdb2db961","url":"themes/custom/oecd/dist/app-drupal/mega-menu.css"},{"revision":"7ee1379bd48b499e39b95959391b472a","url":"themes/custom/oecd/dist/app-drupal/menu-item.css"},{"revision":"a186024f5bcb020794eb86b45021a86c","url":"themes/custom/oecd/dist/app-drupal/modal.css"},{"revision":"df7f62e08ab91237effbbf4310f10df2","url":"themes/custom/oecd/dist/app-drupal/n-level-menu.css"},{"revision":"11bd4ff3fd86373a0a1d1685f478c4ad","url":"themes/custom/oecd/dist/app-drupal/navigation.css"},{"revision":"c0c20c84fc5b58a84f5417654f106c8b","url":"themes/custom/oecd/dist/app-drupal/notification-banner.css"},{"revision":"2942873d18a9d920980ba19d385ef06f","url":"themes/custom/oecd/dist/app-drupal/pagination.css"},{"revision":"7fce7a75ab120c6b82460439e589cbfd","url":"themes/custom/oecd/dist/app-drupal/progress_base.css"},{"revision":"172642efcab4f3be939cd7994329c347","url":"themes/custom/oecd/dist/app-drupal/progress.css"},{"revision":"5c2b71f8821e395af9706e53e50d9061","url":"themes/custom/oecd/dist/app-drupal/radio.css"},{"revision":"f96b5ebf00f0d8d7cb754eba151e5796","url":"themes/custom/oecd/dist/app-drupal/search.css"},{"revision":"26a0c5f517ed69b5743d61bb9db446f0","url":"themes/custom/oecd/dist/app-drupal/section-heading.css"},{"revision":"a3068ba18ebadc58de26af0d79b1bcc1","url":"themes/custom/oecd/dist/app-drupal/sidebar.css"},{"revision":"1862e4d935e8688dfc5db315c09821a7","url":"themes/custom/oecd/dist/app-drupal/signup-and-login-form.css"},{"revision":"1ebaccce4daeddfc91d668aeb6b470f5","url":"themes/custom/oecd/dist/app-drupal/slider.css"},{"revision":"ec765670eaa8b755fe63b10b504fdc06","url":"themes/custom/oecd/dist/app-drupal/social-button.css"},{"revision":"12946b69c77b213a713ffb5bd03b6beb","url":"themes/custom/oecd/dist/app-drupal/stats-kpi.css"},{"revision":"7969215f284ab84fb29bd4d6f27a83da","url":"themes/custom/oecd/dist/app-drupal/sticky-content.css"},{"revision":"87bee601d38c9f2b967968e09c15563f","url":"themes/custom/oecd/dist/app-drupal/sticky-jump-link.css"},{"revision":"afa418bab6bfa0a6e8c71ebfd107f8de","url":"themes/custom/oecd/dist/app-drupal/sticky-slider.css"},{"revision":"b2d351e037ff11ee24310b39d13ce929","url":"themes/custom/oecd/dist/app-drupal/sticky.css"},{"revision":"f38d66981ea7724b2bf598905c6c5158","url":"themes/custom/oecd/dist/app-drupal/sub-header.css"},{"revision":"9b193e47dd1dc1fa184a038c2fc1138b","url":"themes/custom/oecd/dist/app-drupal/subscribe.css"},{"revision":"7b554dcf19b01bcf8c944d45b3c3a66f","url":"themes/custom/oecd/dist/app-drupal/tab-title.css"},{"revision":"d9f357fcf2d0a3ff695bcfcea7cfdd28","url":"themes/custom/oecd/dist/app-drupal/table.css"},{"revision":"e02f70f33014d437091f69896dfc882e","url":"themes/custom/oecd/dist/app-drupal/tabs.css"},{"revision":"05b2e9ba3bd9009e3c4c3539762f0c59","url":"themes/custom/oecd/dist/app-drupal/team-section.css"},{"revision":"9bb9233da6fa9d86a0438444c03eb0e9","url":"themes/custom/oecd/dist/app-drupal/testimonial-carousel.css"},{"revision":"5fce12bfeb2849efa0dfcaa2fe316796","url":"themes/custom/oecd/dist/app-drupal/text-media.css"},{"revision":"4d19a1b5c9dd8446edca83fff8708871","url":"themes/custom/oecd/dist/app-drupal/text.css"},{"revision":"2c384bad750aada9ba09ad8ed4052f81","url":"themes/custom/oecd/dist/app-drupal/timeline.css"},{"revision":"5d7fad4101b60efafbdeef0ddb9ff165","url":"themes/custom/oecd/dist/app-drupal/toggles.css"},{"revision":"1e19b95c30eeb964b6bd73aebbc63cb0","url":"themes/custom/oecd/dist/app-drupal/tokens.css"},{"revision":"0fb66440c5196053a7c5961f8d1114f1","url":"themes/custom/oecd/dist/app-drupal/tooltip.css"},{"revision":"51be09fce934a57c6b55df3435332443","url":"themes/custom/oecd/dist/app-drupal/typo.css"},{"revision":"7cd6feca6812d5623ee55ed56e5d5b5a","url":"themes/custom/oecd/dist/app-drupal/behaviors/accordion-with-image.js"},{"revision":"24afaf73f9b3104a97cde7336fa6ed3a","url":"themes/custom/oecd/dist/app-drupal/behaviors/accordion.js"},{"revision":"e2c9dda79ff81616947a5daa03b3f772","url":"themes/custom/oecd/dist/app-drupal/behaviors/breadcrumb.js"},{"revision":"39a28e301986290c84cd49342f431f02","url":"themes/custom/oecd/dist/app-drupal/behaviors/card.js"},{"revision":"1f1e1730e8a471c17e3befc1d294515b","url":"themes/custom/oecd/dist/app-drupal/behaviors/carousel-animation.js"},{"revision":"99c3284abbde8bc2d2a6d9aa6b14ce9c","url":"themes/custom/oecd/dist/app-drupal/behaviors/footer-logo-content.js"},{"revision":"10c15c7f940bd68782138c74d03d7e2e","url":"themes/custom/oecd/dist/app-drupal/behaviors/header.js"},{"revision":"01ed40ccecc724635a25440b7218cab8","url":"themes/custom/oecd/dist/app-drupal/behaviors/mega-menu-primary.js"},{"revision":"5eb716dda091640d6ea890e6cf048176","url":"themes/custom/oecd/dist/app-drupal/behaviors/modal.js"},{"revision":"50a06b6a9aa254f664ea7a1882f922d6","url":"themes/custom/oecd/dist/app-drupal/behaviors/n-level-menu.js"},{"revision":"f6cfdc78ea5498a6ffd8f6cb7a2338bb","url":"themes/custom/oecd/dist/app-drupal/behaviors/notification-banner.js"},{"revision":"807e2d194e97453c04284f324cb6b101","url":"themes/custom/oecd/dist/app-drupal/behaviors/search.js"},{"revision":"fcc49245ace7f6d4ebe8635ab2773f85","url":"themes/custom/oecd/dist/app-drupal/behaviors/section-heading.js"},{"revision":"286ab660c7e17671134cd4e7d5b90789","url":"themes/custom/oecd/dist/app-drupal/behaviors/sidebar.js"},{"revision":"8cd319569eb1e2ab758969b46da6e82e","url":"themes/custom/oecd/dist/app-drupal/behaviors/signup-and-login-form.js"},{"revision":"d6b1979cb17ca9ee181fc9438045f365","url":"themes/custom/oecd/dist/app-drupal/behaviors/slider.js"},{"revision":"1aeef7d617852d26db198a1961cffe8e","url":"themes/custom/oecd/dist/app-drupal/behaviors/social-button.js"},{"revision":"2f086769b54749f65074cb82fa13a91c","url":"themes/custom/oecd/dist/app-drupal/behaviors/stats-kpi.js"},{"revision":"617341a6b20d45af5480c59441745a00","url":"themes/custom/oecd/dist/app-drupal/behaviors/sticky-jump-link.js"},{"revision":"ba26d27297fc6bb9049272d8cf006e0a","url":"themes/custom/oecd/dist/app-drupal/behaviors/sticky.js"},{"revision":"1144879c5c27b1b56c3e4f988d406077","url":"themes/custom/oecd/dist/app-drupal/behaviors/sub-header.js"},{"revision":"0765d688e692d1c47df02c6dcd2baa68","url":"themes/custom/oecd/dist/app-drupal/behaviors/tabs.js"},{"revision":"dfece7d1d82ed3501f7f2d85968b4f13","url":"themes/custom/oecd/dist/app-drupal/behaviors/timeline.js"},{"revision":"35e4b36f255ca7f64d09e06295eba231","url":"themes/custom/oecd/dist/app-drupal/font/HelveticaNowDisplay-Regular.eot"},{"revision":"9632144b89660f0f032a3a0a01e533c7","url":"themes/custom/oecd/dist/app-drupal/font/HelveticaNowDisplay-Regular.ttf"},{"revision":"05963f11158ac2cb57bfd5d79f0acfeb","url":"themes/custom/oecd/dist/app-drupal/font/HelveticaNowDisplay-Regular.woff"},{"revision":"01db325a7f899fa2d4ada84bf479b288","url":"themes/custom/oecd/dist/app-drupal/font/HelveticaNowDisplay-Regular.woff2"},{"revision":"60fa3c0614b8fb2f394fa29944c21540","url":"themes/custom/oecd/dist/app-drupal/font/roboto-v20-latin-regular.woff"},{"revision":"479970ffb74f2117317f9d24d9e317fe","url":"themes/custom/oecd/dist/app-drupal/font/roboto-v20-latin-regular.woff2"},{"revision":"b4f8c65016bd0b18e7ba2e9d23b65717","url":"themes/custom/oecd/dist/app-drupal/font/SourceSerifPro-Bold.woff"},{"revision":"40fdf1d332cde144814743291b2a42f8","url":"themes/custom/oecd/dist/app-drupal/font/SourceSerifPro-Bold.woff2"},{"revision":"f5a78893450aa440a37ed93c19e0fcab","url":"themes/custom/oecd/dist/app-drupal/font/SourceSerifPro-Regular.woff"},{"revision":"94c55fb8c78c425cb2bcacfd76e41835","url":"themes/custom/oecd/dist/app-drupal/font/SourceSerifPro-Regular.woff2"},{"revision":"1fa87cfe0fa0c1d8e05d146c694d70dc","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Bold.eot"},{"revision":"ff7cc358afba9c9f9dbfe590da86fdc4","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Bold.ttf"},{"revision":"7b9e40f6db710fa59344e5dc8cc34539","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Bold.woff"},{"revision":"788e7c705c377d9e08875341f0e860cb","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Bold.woff2"},{"revision":"3afeac3ec5d41edbd9393d0b349198a9","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Regular.eot"},{"revision":"982323eb635ecc1f9fc8d20e6bbd9316","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Regular.ttf"},{"revision":"fbbf6d98bfb9f3410a0de34728e9250e","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Regular.woff"},{"revision":"5529b729a77573fc6130f2db44a19c77","url":"themes/custom/oecd/dist/app-drupal/font/SpaceGrotesk-Regular.woff2"},{"revision":"e956043aadad7fbc4b5e998be308ed10","url":"themes/custom/oecd/dist/app-drupal/images/2x_1024x768.png"},{"revision":"81ea7ac3d437f3e5c32117942a34b8c9","url":"themes/custom/oecd/dist/app-drupal/images/2x_1216x608.png"},{"revision":"9aa2aae0871738c04760fd6c80e79acf","url":"themes/custom/oecd/dist/app-drupal/images/2x_1440x720.png"},{"revision":"51b38b969ccfbf8e535736d88b01ab31","url":"themes/custom/oecd/dist/app-drupal/images/2x_1440x900.png"},{"revision":"af6283fa736d4dd1b3a849d84ead0a19","url":"themes/custom/oecd/dist/app-drupal/images/2x_280x140.png"},{"revision":"2a5c5594191949421486c2af81aee922","url":"themes/custom/oecd/dist/app-drupal/images/2x_280x280.png"},{"revision":"f73624a1a42484602487e278529d23d0","url":"themes/custom/oecd/dist/app-drupal/images/2x_280x560.png"},{"revision":"31918d6154aa82ca467b09d072bb36e7","url":"themes/custom/oecd/dist/app-drupal/images/2x_384x508.png"},{"revision":"0063f8bf213e95360f75779158577f0d","url":"themes/custom/oecd/dist/app-drupal/images/2x_480x480.png"},{"revision":"70354a796f5178950bef416477944f10","url":"themes/custom/oecd/dist/app-drupal/images/2x_488x488.png"},{"revision":"70463c125283d161090c2cc2432881ad","url":"themes/custom/oecd/dist/app-drupal/images/2x_592x444.png"},{"revision":"bc3f11215ad1ec626a0c3facf4ff486b","url":"themes/custom/oecd/dist/app-drupal/images/2x_592x592_4.png"},{"revision":"85f426be13e6b23dbeab57634b391e36","url":"themes/custom/oecd/dist/app-drupal/images/2x_592x592.png"},{"revision":"04602ad9f9d69d5d0374ef8182ba3359","url":"themes/custom/oecd/dist/app-drupal/images/2x_768x1016.png"},{"revision":"7303b220bdb2c0bfe76497c24cda3e3c","url":"themes/custom/oecd/dist/app-drupal/images/2x_800x400.png"},{"revision":"9f0e75233dcf3f3cb58fa05cecf8cd51","url":"themes/custom/oecd/dist/app-drupal/images/2x_800x448.png"},{"revision":"e3508fadabed718b1789da009a965cff","url":"themes/custom/oecd/dist/app-drupal/images/2x_800x450.png"},{"revision":"59e02fc7029bcd1b3500fd00de52173f","url":"themes/custom/oecd/dist/app-drupal/images/2x_800x600.png"},{"revision":"02ddf40069a657ab604f3f2efb2fc174","url":"themes/custom/oecd/dist/app-drupal/images/560*280.png"},{"revision":"12844df24d60fddb62adc239ab0eaa41","url":"themes/custom/oecd/dist/app-drupal/images/accordion_c_anatomy.png"},{"revision":"d740681fcc99360b70b12153cb6765e4","url":"themes/custom/oecd/dist/app-drupal/images/Acquia.svg"},{"revision":"a7b996b9b8c45ac4802072b0d2cf9795","url":"themes/custom/oecd/dist/app-drupal/images/airways.png"},{"revision":"ca32a1eb52b808d0323fd081824b6aac","url":"themes/custom/oecd/dist/app-drupal/images/api-development.png"},{"revision":"a685171437d35e0d1bb3904c17b55da8","url":"themes/custom/oecd/dist/app-drupal/images/Ashoka.svg"},{"revision":"21ad77cd43d3b1a085f9f186c278d527","url":"themes/custom/oecd/dist/app-drupal/images/attach.svg"},{"revision":"7fa6487fc7ec6d72069c07e156e9a6ec","url":"themes/custom/oecd/dist/app-drupal/images/automation-testing.png"},{"revision":"4b7fdc6475afb27d838e1330079560fd","url":"themes/custom/oecd/dist/app-drupal/images/avatar_anatomy.png"},{"revision":"e7dd94c63fa04c6d52fdb82d9071416e","url":"themes/custom/oecd/dist/app-drupal/images/avatar-1.jpg"},{"revision":"b76226c1f2e80b095a7211c434422567","url":"themes/custom/oecd/dist/app-drupal/images/avatar-10.jpg"},{"revision":"0a07f05ecea8ec8708b823be8c4cb227","url":"themes/custom/oecd/dist/app-drupal/images/avatar-11.jpg"},{"revision":"0a07f05ecea8ec8708b823be8c4cb227","url":"themes/custom/oecd/dist/app-drupal/images/avatar-111.jpg"},{"revision":"124ab8285ae00afe5366b51fd865819e","url":"themes/custom/oecd/dist/app-drupal/images/avatar-12.jpg"},{"revision":"edbebcf9f552d3f8207f855ec6257386","url":"themes/custom/oecd/dist/app-drupal/images/avatar-13.jpg"},{"revision":"0cd50375cbcd5d68d491163d01b98386","url":"themes/custom/oecd/dist/app-drupal/images/avatar-14.jpg"},{"revision":"c6443ce1476d2fd1194e2bb58380edb2","url":"themes/custom/oecd/dist/app-drupal/images/avatar-15.jpg"},{"revision":"28cb1dc00f60c1a96654a9ee7e53f6e5","url":"themes/custom/oecd/dist/app-drupal/images/avatar-16.jpg"},{"revision":"e1284b17750d460393ca954c1cc91327","url":"themes/custom/oecd/dist/app-drupal/images/avatar-17.jpg"},{"revision":"c27eebcd254be70d92a76977136cd5c9","url":"themes/custom/oecd/dist/app-drupal/images/avatar-18.jpg"},{"revision":"a0c1057c2644630de709d8e267b74075","url":"themes/custom/oecd/dist/app-drupal/images/avatar-19.jpg"},{"revision":"c6c0e2b4b3410a10841b6a68c53f6713","url":"themes/custom/oecd/dist/app-drupal/images/avatar-2.jpg"},{"revision":"153ab3257e3d9d763d17e64fbe7764dd","url":"themes/custom/oecd/dist/app-drupal/images/avatar-20.jpg"},{"revision":"d0e0abda70641da41f4ee5b689071b90","url":"themes/custom/oecd/dist/app-drupal/images/avatar-21.jpg"},{"revision":"7e4fafa413f1b6b80a2385395558e3ad","url":"themes/custom/oecd/dist/app-drupal/images/avatar-22.jpg"},{"revision":"15f11fdbf376c36615a0e5c1a4c7849d","url":"themes/custom/oecd/dist/app-drupal/images/avatar-24.jpg"},{"revision":"ea2dd935a28b0e408417566ca7e997c0","url":"themes/custom/oecd/dist/app-drupal/images/avatar-25.jpg"},{"revision":"cbce5e2989f5f25a4cde7b4542c37a21","url":"themes/custom/oecd/dist/app-drupal/images/avatar-26.jpg"},{"revision":"53862adc6ef8da7df06986b126816f4d","url":"themes/custom/oecd/dist/app-drupal/images/avatar-27.jpg"},{"revision":"aba80ef89fd34482a060076d379f9e39","url":"themes/custom/oecd/dist/app-drupal/images/avatar-28.jpg"},{"revision":"6bfe59b4b2adb67c6c7f8efb8de64d7e","url":"themes/custom/oecd/dist/app-drupal/images/avatar-29.jpg"},{"revision":"58643e7f18ab2a3a21317e1184264ff0","url":"themes/custom/oecd/dist/app-drupal/images/avatar-3.jpg"},{"revision":"1d8e8f9a1a6aa4fd8ac115d647459a5d","url":"themes/custom/oecd/dist/app-drupal/images/avatar-30.jpg"},{"revision":"fb238f7e0c7eb6b00c8413f4364e2ca7","url":"themes/custom/oecd/dist/app-drupal/images/avatar-31.jpg"},{"revision":"598f1474bdcaee2b0c3787c3afcc784f","url":"themes/custom/oecd/dist/app-drupal/images/avatar-32.jpg"},{"revision":"b405108484571637516d53fa3f179507","url":"themes/custom/oecd/dist/app-drupal/images/avatar-33.jpg"},{"revision":"dfdbb0f60f4a49999b72474702ed5763","url":"themes/custom/oecd/dist/app-drupal/images/avatar-34.jpg"},{"revision":"68511b50e7aebf16b2a5b878ff7dfc54","url":"themes/custom/oecd/dist/app-drupal/images/avatar-35.jpg"},{"revision":"933078199266a6438096368b98539822","url":"themes/custom/oecd/dist/app-drupal/images/avatar-36.jpg"},{"revision":"2252f179ebff5f4953cd409be55e64be","url":"themes/custom/oecd/dist/app-drupal/images/avatar-4.jpg"},{"revision":"8043f38adee204b79e95c0b0761ea8ba","url":"themes/custom/oecd/dist/app-drupal/images/avatar-5.jpg"},{"revision":"65e59d9bafe44b5446d7959b4f9e9348","url":"themes/custom/oecd/dist/app-drupal/images/avatar-6.jpg"},{"revision":"51f24d9ffd014248f7c9c45154a0a307","url":"themes/custom/oecd/dist/app-drupal/images/avatar-7.jpg"},{"revision":"7f5a009768de8dddfcf15574fd3b2aa4","url":"themes/custom/oecd/dist/app-drupal/images/avatar-8.jpg"},{"revision":"c32e30a5af5784ecf2a77f4f25a24689","url":"themes/custom/oecd/dist/app-drupal/images/avatar-9.jpg"},{"revision":"4e63207eb340db436a99696ce1828628","url":"themes/custom/oecd/dist/app-drupal/images/avatar-new.png"},{"revision":"06982b709a31a5846f56a87045341aec","url":"themes/custom/oecd/dist/app-drupal/images/avatar.png"},{"revision":"6638fe0d6c991f9c74484e02a45b9770","url":"themes/custom/oecd/dist/app-drupal/images/banner_1_2x_1440x900.png"},{"revision":"e277d4a17527e702e508665c02254962","url":"themes/custom/oecd/dist/app-drupal/images/banner_10_1_2x_384x508.png"},{"revision":"4ce38e16b69faf77f85a07247a586c1d","url":"themes/custom/oecd/dist/app-drupal/images/banner_10_2_2x_384x508.png"},{"revision":"9d485ae10dca6028fd8700c535930554","url":"themes/custom/oecd/dist/app-drupal/images/banner_11_2x_488x488.png"},{"revision":"924dd0247b99f4dfc846ded7965e054b","url":"themes/custom/oecd/dist/app-drupal/images/banner_3_2x_592x444.png"},{"revision":"42f981a4d3e3690050dc137f7cdb1903","url":"themes/custom/oecd/dist/app-drupal/images/banner_4_2x_800x450.png"},{"revision":"4be4f15a2ab7e53ba33dc7c9f102a8ff","url":"themes/custom/oecd/dist/app-drupal/images/banner_5_2x_592x592.png"},{"revision":"3e41968cd5a2bd358c225ea164057200","url":"themes/custom/oecd/dist/app-drupal/images/banner_6_2x_384x508.png"},{"revision":"d75a4000dd88bf2832dfc5a58b8e2767","url":"themes/custom/oecd/dist/app-drupal/images/banner_7_2x_1024x768.png"},{"revision":"cab73bc44f1827e7c6f901a8514913cf","url":"themes/custom/oecd/dist/app-drupal/images/banner_8_2x_280x280.png"},{"revision":"8c14a738f31f4a2b7d3a0f5863ca40fe","url":"themes/custom/oecd/dist/app-drupal/images/banner-3.png"},{"revision":"cd98ae5681ab2334e533ad1966f27a3a","url":"themes/custom/oecd/dist/app-drupal/images/big-leaf.png"},{"revision":"3704c60ac79fdebda89d46bd07206d10","url":"themes/custom/oecd/dist/app-drupal/images/breadcrumb_anatomy.png"},{"revision":"e902f48e137706fb6a5e958c82186d5d","url":"themes/custom/oecd/dist/app-drupal/images/build.png"},{"revision":"5c71900eeb4226a625c0a58dbd459528","url":"themes/custom/oecd/dist/app-drupal/images/button_anatomy.png"},{"revision":"6d442c33a289e1298393e2625f2a6986","url":"themes/custom/oecd/dist/app-drupal/images/carousel-asymetric.png"},{"revision":"d368608a56ded79c4ddcbe847c3eba3e","url":"themes/custom/oecd/dist/app-drupal/images/carousel-image-video-main.png"},{"revision":"3db4f80ab1ffe076cafc71cc2dfb76a3","url":"themes/custom/oecd/dist/app-drupal/images/carousel-image-video.png"},{"revision":"e0a62cfad1f7577c14e13314d7d4abda","url":"themes/custom/oecd/dist/app-drupal/images/check.svg"},{"revision":"310bbb26d4e10ab03a2ae1747d0e9151","url":"themes/custom/oecd/dist/app-drupal/images/checkbox_anatomy.png"},{"revision":"651756f00b286da5532dec9497e47ad8","url":"themes/custom/oecd/dist/app-drupal/images/checkbox-checked.svg"},{"revision":"ed0d8b26c20d59b31fb4b051590cfa81","url":"themes/custom/oecd/dist/app-drupal/images/checkbox-disabled.svg"},{"revision":"28018a0afd81b5854017267fe884dc4e","url":"themes/custom/oecd/dist/app-drupal/images/checkbox-indeterminate.svg"},{"revision":"dd60a9b65676e91dab093e1507669108","url":"themes/custom/oecd/dist/app-drupal/images/city.png"},{"revision":"7725280d3c7e87a37e544574e8db8f5a","url":"themes/custom/oecd/dist/app-drupal/images/client-logos.png"},{"revision":"cc4b3d7b34a96a35ce9a38502b8cdac0","url":"themes/custom/oecd/dist/app-drupal/images/cta_banner_anatomy.png"},{"revision":"212b42c5cd99e17fe26e4d02707270e0","url":"themes/custom/oecd/dist/app-drupal/images/decoupled-drupal.png"},{"revision":"55ac5c49743bbd92da08ab313796b18d","url":"themes/custom/oecd/dist/app-drupal/images/design-system.png"},{"revision":"554d35acbec5729c22e29e8e6a97ee5e","url":"themes/custom/oecd/dist/app-drupal/images/design.png"},{"revision":"0ad22fb9b52a28323667df3c3b1a5361","url":"themes/custom/oecd/dist/app-drupal/images/digital.png"},{"revision":"7e773411fb7befb1448bbb291dacde61","url":"themes/custom/oecd/dist/app-drupal/images/dropdown_anatomy.png"},{"revision":"a37250656dedf417c2d8c4889054d065","url":"themes/custom/oecd/dist/app-drupal/images/dropdown-arrow.svg"},{"revision":"807bdfc9ebeaaa036d857c1c31ec7023","url":"themes/custom/oecd/dist/app-drupal/images/drupal-9.png"},{"revision":"3df6fb2227c1cc1b69f1bcf0f31d90a0","url":"themes/custom/oecd/dist/app-drupal/images/drupal-development.png"},{"revision":"1cad120ca3d1d54f217a851c9bc0ff87","url":"themes/custom/oecd/dist/app-drupal/images/drupal-migration.png"},{"revision":"1666a417629fa27a6fb3d575a7780c3e","url":"themes/custom/oecd/dist/app-drupal/images/drupal-staff-augmentation.png"},{"revision":"cc28c8551f938ec6fd27510fac780366","url":"themes/custom/oecd/dist/app-drupal/images/drupal-support-maintenance.png"},{"revision":"5c384b2bd0ea1b3c6f083adf29c90101","url":"themes/custom/oecd/dist/app-drupal/images/featured_card_anatomy.png"},{"revision":"e09bd68a5da1fbe0c4141211e4331b1b","url":"themes/custom/oecd/dist/app-drupal/images/flower-bg.png"},{"revision":"bafa679c390159fd494b8f5d8ae7852c","url":"themes/custom/oecd/dist/app-drupal/images/footer_anatomy.png"},{"revision":"71e46241d775d634c72ac6b68f000ba2","url":"themes/custom/oecd/dist/app-drupal/images/forgotpass.svg"},{"revision":"7571d9f6108753ee0322a8112554f7d8","url":"themes/custom/oecd/dist/app-drupal/images/forms_anatomy.png"},{"revision":"3aadd2e9c0201458424f10075a2d354f","url":"themes/custom/oecd/dist/app-drupal/images/frame.png"},{"revision":"cb2e4cffbe02156aac14be2b231269a7","url":"themes/custom/oecd/dist/app-drupal/images/gatsby-js.png"},{"revision":"ee3be2ff3d6ee3502c8bc5bd3f71b873","url":"themes/custom/oecd/dist/app-drupal/images/GSB.svg"},{"revision":"96a93b5da2a1b565809f4e365a449274","url":"themes/custom/oecd/dist/app-drupal/images/header_anatomy.png"},{"revision":"3386b1a9e28a0a23bfb7e0c58a552f4e","url":"themes/custom/oecd/dist/app-drupal/images/headless-cms.png"},{"revision":"33d4a56dca666f811bcedc825f1decaa","url":"themes/custom/oecd/dist/app-drupal/images/Here.svg"},{"revision":"e53cc4ac6f6efefb6a4619b99cc82a0d","url":"themes/custom/oecd/dist/app-drupal/images/hero_banner_1_anatomy.png"},{"revision":"16e7ef12d155a550e72a55b2920286a8","url":"themes/custom/oecd/dist/app-drupal/images/hero.png"},{"revision":"211228e83c8919397bec567690ee11a5","url":"themes/custom/oecd/dist/app-drupal/images/hey-library-logo.svg"},{"revision":"394b41c2d66e54860d11defe2baf3164","url":"themes/custom/oecd/dist/app-drupal/images/hybrid-mobile-app -development.png"},{"revision":"4a689c828aadb87700d6aff542812f5c","url":"themes/custom/oecd/dist/app-drupal/images/icon_card_anatomy.png"},{"revision":"139cb892ea7378cf3394ba67177f5f4a","url":"themes/custom/oecd/dist/app-drupal/images/Icon-1.png"},{"revision":"38264898fe4424ded9960c92b2c48f02","url":"themes/custom/oecd/dist/app-drupal/images/icon-warning-light-circle-4x.png"},{"revision":"6b196fd95f1bd6f517768ebb44dd4edc","url":"themes/custom/oecd/dist/app-drupal/images/Icon.jpg"},{"revision":"857257cb1e57335b539276ae0af34e99","url":"themes/custom/oecd/dist/app-drupal/images/image_card_anatomy.png"},{"revision":"7eea1fca4942859f5a185e9b92c91135","url":"themes/custom/oecd/dist/app-drupal/images/image_colour_bg_1.png"},{"revision":"b4bcabb2e9dbe11604b61388a65311cd","url":"themes/custom/oecd/dist/app-drupal/images/image_colour_bg_2.png"},{"revision":"d73464aba01af0d66c5b006fd3f711b3","url":"themes/custom/oecd/dist/app-drupal/images/image_colour_bg_3.png"},{"revision":"02d75beea42559f80a115382fa9a836b","url":"themes/custom/oecd/dist/app-drupal/images/image_colour_bg.png"},{"revision":"c5f24ec4b36f1b0c3532be823761a828","url":"themes/custom/oecd/dist/app-drupal/images/image_title_800x600.png"},{"revision":"2b8b2e1383b36d028e059bbc6ae7ec04","url":"themes/custom/oecd/dist/app-drupal/images/image.png"},{"revision":"ac68dab338bc18e25c6c434f1b82e587","url":"themes/custom/oecd/dist/app-drupal/images/info-icon.svg"},{"revision":"85993d657e93af207ee28807fb387bbb","url":"themes/custom/oecd/dist/app-drupal/images/info.svg"},{"revision":"c48d6a99018a2afa2b046a3652a7d294","url":"themes/custom/oecd/dist/app-drupal/images/input_anatomy.png"},{"revision":"2fbdf72ecff52d5ead0796a2a798c51d","url":"themes/custom/oecd/dist/app-drupal/images/input.svg"},{"revision":"7080fd545c6e82a5052674425418ec2c","url":"themes/custom/oecd/dist/app-drupal/images/Javascript.png"},{"revision":"bb81a175c342a9c8e0931cb82f1e63ed","url":"themes/custom/oecd/dist/app-drupal/images/label_anatomy.png"},{"revision":"2493ba531b4572a7e0b068102596c78e","url":"themes/custom/oecd/dist/app-drupal/images/label.png"},{"revision":"ab1ddc7ce97da588575c0339e2444b13","url":"themes/custom/oecd/dist/app-drupal/images/living.png"},{"revision":"dbceae324fd3f8ddfdbdb6ea6029d270","url":"themes/custom/oecd/dist/app-drupal/images/logo_grid_anatomy.png"},{"revision":"b7b2cac11b6a25aff9d7be27b24dbd50","url":"themes/custom/oecd/dist/app-drupal/images/logo-dark.svg"},{"revision":"667c73c80baa5107b1c0b0807f9a0f79","url":"themes/custom/oecd/dist/app-drupal/images/logo-light.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/dist/app-drupal/images/logo.png"},{"revision":"5bf8d6b5e9b0f7c92b66cdf77e721351","url":"themes/custom/oecd/dist/app-drupal/images/logo.svg"},{"revision":"a0ce928f9fc4cec130d3e4466ff53d61","url":"themes/custom/oecd/dist/app-drupal/images/macbook.png"},{"revision":"0978294c47da480083d736c2dc323871","url":"themes/custom/oecd/dist/app-drupal/images/modal_anatomy.png"},{"revision":"c0ca5e71a76a2e9d5f174831abddfd26","url":"themes/custom/oecd/dist/app-drupal/images/modal.png"},{"revision":"d54a0ef69288ffa417e63503a75f7e4a","url":"themes/custom/oecd/dist/app-drupal/images/modal.svg"},{"revision":"27d06043695904cdcda0030b5a9676b8","url":"themes/custom/oecd/dist/app-drupal/images/mountain-bg.png"},{"revision":"03e30901e41cbb4b434d90b7c6142468","url":"themes/custom/oecd/dist/app-drupal/images/Nestle.svg"},{"revision":"719caf9f41c2ab5ebbbd2b90c2f770ca","url":"themes/custom/oecd/dist/app-drupal/images/non-functional-testing.png"},{"revision":"9e837ead71772a24a9544f84fc53e5f0","url":"themes/custom/oecd/dist/app-drupal/images/notification_anatomy.png"},{"revision":"eb0943dc80cc63897168b1369dd2cb75","url":"themes/custom/oecd/dist/app-drupal/images/only-logo.svg"},{"revision":"d49ddf8baf38165d2ea1990b27c7921b","url":"themes/custom/oecd/dist/app-drupal/images/option02-bg.png"},{"revision":"1e545230c9ac0af7a686711f2378895a","url":"themes/custom/oecd/dist/app-drupal/images/pagination_anatomy.png"},{"revision":"6f44eb4449b860128634d286114ca6cd","url":"themes/custom/oecd/dist/app-drupal/images/pen_sketch.png"},{"revision":"81dbe6ea1357fe8affb96d97a458b1ce","url":"themes/custom/oecd/dist/app-drupal/images/people_card_anatomy.png"},{"revision":"4f207a556c7397b6e766a12c937ef5b1","url":"themes/custom/oecd/dist/app-drupal/images/perfume.png"},{"revision":"9e620a2bb9e56fba785880462bb0d3b0","url":"themes/custom/oecd/dist/app-drupal/images/pricing_card_anatomy.png"},{"revision":"1a4d25b9532cd031d162b8d07defb556","url":"themes/custom/oecd/dist/app-drupal/images/product-engineering.png"},{"revision":"8277a3f2a49606847e36817d257146ff","url":"themes/custom/oecd/dist/app-drupal/images/progess_anatomy.png"},{"revision":"22058ec314507a4c46bc713ac8b64c53","url":"themes/custom/oecd/dist/app-drupal/images/progress_base_anatomy.png"},{"revision":"f5b5c879adcdf577f827ecb95efd3771","url":"themes/custom/oecd/dist/app-drupal/images/progressive-web-application 4.png"},{"revision":"d80752d8bdcce17e2a3d50aaf7e4cf5d","url":"themes/custom/oecd/dist/app-drupal/images/PWC.svg"},{"revision":"9104dc88f8f120bc62d1886ff15c9eb7","url":"themes/custom/oecd/dist/app-drupal/images/qed42-design.svg"},{"revision":"81567f73824b3b96422abda141bd186a","url":"themes/custom/oecd/dist/app-drupal/images/quality-assurance.png"},{"revision":"1f53e3b1b23f17429ff27fd439d2c62a","url":"themes/custom/oecd/dist/app-drupal/images/quicklink_card_anatomy.png"},{"revision":"6421e3c222c2c1b7fe021429304915ec","url":"themes/custom/oecd/dist/app-drupal/images/radio_anatomy.png"},{"revision":"78b0ada0c6ee1e4fcccd74de4de5ca9f","url":"themes/custom/oecd/dist/app-drupal/images/radio-disabled.svg"},{"revision":"e0a62cfad1f7577c14e13314d7d4abda","url":"themes/custom/oecd/dist/app-drupal/images/radio.svg"},{"revision":"79dc2bd31ea2f48e88f722ffb4193a3c","url":"themes/custom/oecd/dist/app-drupal/images/random.png"},{"revision":"1423ae0825f9d872585eb962230cd9d4","url":"themes/custom/oecd/dist/app-drupal/images/react.png"},{"revision":"5d92fd19f41e78824d8422a2277d9a59","url":"themes/custom/oecd/dist/app-drupal/images/search_anatomy.png"},{"revision":"395dd569e588d69d68c341f48495c834","url":"themes/custom/oecd/dist/app-drupal/images/search.svg"},{"revision":"0c193ddf67575cb5780b910bbfd97631","url":"themes/custom/oecd/dist/app-drupal/images/section_c_heading_anatomy.png"},{"revision":"1d4690235433a95df775037677876b00","url":"themes/custom/oecd/dist/app-drupal/images/section-icon.svg"},{"revision":"80266de8dfbd7449f1ca320717a05b33","url":"themes/custom/oecd/dist/app-drupal/images/section.jpg"},{"revision":"4e157f2f96a4743f31edcc9c041c389f","url":"themes/custom/oecd/dist/app-drupal/images/sidebar_anatomy.png"},{"revision":"b0f7ce483c1eb61f3dd771f1f76bcef6","url":"themes/custom/oecd/dist/app-drupal/images/signup-image.jpg"},{"revision":"167debb232f9a24a23557d5f6b7b42ab","url":"themes/custom/oecd/dist/app-drupal/images/slideshow.svg"},{"revision":"272260bfbb66efd8a20593872ea4ce51","url":"themes/custom/oecd/dist/app-drupal/images/slim_thumb.png"},{"revision":"9295549127870a3ec9fcf400dddb81d6","url":"themes/custom/oecd/dist/app-drupal/images/social_button_anatomy.png"},{"revision":"3460a77e6ec09cfaad4fe484e7b039d7","url":"themes/custom/oecd/dist/app-drupal/images/Sony.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/dist/app-drupal/images/space-logo-inline.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/dist/app-drupal/images/space-logo-inline.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/dist/app-drupal/images/space-logo-stacked.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/dist/app-drupal/images/space-logo-stacked.svg"},{"revision":"3678592f911d42f9124ce1e6fbae5513","url":"themes/custom/oecd/dist/app-drupal/images/space-logo.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/dist/app-drupal/images/space-type.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/dist/app-drupal/images/space-type.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/dist/app-drupal/images/space-winnie.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/dist/app-drupal/images/space-winnie.svg"},{"revision":"c36dcd93a7188a80b94256b29c22c3b6","url":"themes/custom/oecd/dist/app-drupal/images/space.svg"},{"revision":"7fc787fc80ebfdb7a6768391e60f3dec","url":"themes/custom/oecd/dist/app-drupal/images/splitimage_anatomy.png"},{"revision":"f73bd3f73d766e117e89ec733d8890e8","url":"themes/custom/oecd/dist/app-drupal/images/spotify-podcast-badge.svg"},{"revision":"45348267c53abe40e560e2f42ddb84e2","url":"themes/custom/oecd/dist/app-drupal/images/spritemap.svg"},{"revision":"15cfab702034303f5b8acc9ad01f841a","url":"themes/custom/oecd/dist/app-drupal/images/stats_kpi_anatomy.png"},{"revision":"42f981a4d3e3690050dc137f7cdb1903","url":"themes/custom/oecd/dist/app-drupal/images/sticky_2x_800x448.png"},{"revision":"1115603676eb1a4a002031b6b95d305b","url":"themes/custom/oecd/dist/app-drupal/images/table_anatomy.png"},{"revision":"38afdcb7614a9fd55a4856fd329f0273","url":"themes/custom/oecd/dist/app-drupal/images/tabs_anatomy.png"},{"revision":"06e54108b8c447f1714e1e97a4c3e7b2","url":"themes/custom/oecd/dist/app-drupal/images/team-collaboration.png"},{"revision":"97bd7332cc91bbc36a0b2b5e49c6276f","url":"themes/custom/oecd/dist/app-drupal/images/team.png"},{"revision":"394b2fc61b0c0aa9695b4d3d10e07b40","url":"themes/custom/oecd/dist/app-drupal/images/testimonial_card_carousel_anatomy.png"},{"revision":"296204365b9d0fe44a4b5abd51b303e3","url":"themes/custom/oecd/dist/app-drupal/images/testimony_card_anatomy.png"},{"revision":"000a3618b14b8fe39bad7a777de5bfcb","url":"themes/custom/oecd/dist/app-drupal/images/text_media_anatomy.png"},{"revision":"d7b5f94a03daf61c98dfd1cd2c8051c9","url":"themes/custom/oecd/dist/app-drupal/images/timeline_anatomy.png"},{"revision":"eeab3ea23023909e5fa03692fa63990e","url":"themes/custom/oecd/dist/app-drupal/images/tooltip_anatomy.png"},{"revision":"3450f49245ade31aeb90192fccf729ee","url":"themes/custom/oecd/dist/app-drupal/images/ui-design.png"},{"revision":"b1a7bbd981a6dc6d0b54f72ce32ce712","url":"themes/custom/oecd/dist/app-drupal/images/variation4.png"},{"revision":"cc0846a52fd453028fdf5c5562611131","url":"themes/custom/oecd/dist/app-drupal/images/visual-design.png"},{"revision":"a4994d3a429032722c7c3a6b9904aeb3","url":"themes/custom/oecd/dist/app-drupal/images/where-to-use.png"},{"revision":"b523211cd8b1a704254385513d9eb316","url":"themes/custom/oecd/dist/app-drupal/images/white-arrow.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/images/logo.png"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/images/space-logo-inline.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/images/space-logo-inline.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/images/space-logo-stacked.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/images/space-logo-stacked.svg"},{"revision":"3678592f911d42f9124ce1e6fbae5513","url":"themes/custom/oecd/images/space-logo.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/images/space-type.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/images/space-type.svg"},{"revision":"ab4f5e3b85e8f031f2e7ec8eb525e1e3","url":"themes/custom/oecd/images/space-winnie.png"},{"revision":"7f3a3b00e82bcbc1b4aef6f2e2c576f6","url":"themes/custom/oecd/images/space-winnie.svg"}]);
  imageCache();
  staticResourceCache();
  registerRoute(
    ({ url }) => url.origin === "https://cdnjs.cloudflare.com",
    new StaleWhileRevalidate({ cacheName: "cdn-api-responses" })
  );
  registerRoute(
    ({ url }) => url.origin === "https://www.googletagmanager.com",
    new StaleWhileRevalidate({ cacheName: "gtm-api-responses" })
  );
  registerRoute(
    ({ url }) => url.origin === "https://cdn.jsdelivr.net/",
    new StaleWhileRevalidate({ cacheName: "selection-sharer-responses" })
  );
})();
