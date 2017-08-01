/******/ (function(t) {
    // webpackBootstrap
    /******/
    // The module cache
    /******/
    var e = {};
    /******/
    /******/
    // The require function
    /******/
    function n(r) {
        /******/
        /******/
        // Check if module is in cache
        /******/
        if (e[r]) {
            /******/
            return e[r].exports;
        }
        /******/
        // Create a new module (and put it into the cache)
        /******/
        var i = e[r] = {
            /******/
            i: r,
            /******/
            l: false,
            /******/
            exports: {}
        };
        /******/
        /******/
        // Execute the module function
        /******/
        t[r].call(i.exports, i, i.exports, n);
        /******/
        /******/
        // Flag the module as loaded
        /******/
        i.l = true;
        /******/
        /******/
        // Return the exports of the module
        /******/
        return i.exports;
    }
    /******/
    /******/
    /******/
    // expose the modules object (__webpack_modules__)
    /******/
    n.m = t;
    /******/
    /******/
    // expose the module cache
    /******/
    n.c = e;
    /******/
    /******/
    // define getter function for harmony exports
    /******/
    n.d = function(t, e, r) {
        /******/
        if (!n.o(t, e)) {
            /******/
            Object.defineProperty(t, e, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: r
            });
        }
    };
    /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    n.n = function(t) {
        /******/
        var e = t && t.__esModule ? /******/
        function e() {
            return t["default"];
        } : /******/
        function e() {
            return t;
        };
        /******/
        n.d(e, "a", e);
        /******/
        return e;
    };
    /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    };
    /******/
    /******/
    // __webpack_public_path__
    /******/
    n.p = "/dist/";
    /******/
    /******/
    // Load entry module and return exports
    /******/
    return n(n.s = 1);
})([ /* 0 */
/***/
function(t, e) {
    /* globals __VUE_SSR_CONTEXT__ */
    // this module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle
    t.exports = function t(e, n, r, i, a) {
        var s;
        var o = e = e || {};
        // ES6 modules interop
        var u = typeof e.default;
        if (u === "object" || u === "function") {
            s = e;
            o = e.default;
        }
        // Vue.extend constructor export interop
        var l = typeof o === "function" ? o.options : o;
        // render functions
        if (n) {
            l.render = n.render;
            l.staticRenderFns = n.staticRenderFns;
        }
        // scopedId
        if (i) {
            l._scopeId = i;
        }
        var f;
        if (a) {
            // server build
            f = function(t) {
                // 2.3 injection
                t = t || // cached call
                this.$vnode && this.$vnode.ssrContext || // stateful
                this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
                // functional
                // 2.2 with runInNewContext: true
                if (!t && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
                    t = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (r) {
                    r.call(this, t);
                }
                // register component module identifier for async chunk inferrence
                if (t && t._registeredComponents) {
                    t._registeredComponents.add(a);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            l._ssrRegister = f;
        } else if (r) {
            f = r;
        }
        if (f) {
            var c = l.functional;
            var h = c ? l.render : l.beforeCreate;
            if (!c) {
                // inject component registration as beforeCreate hook
                l.beforeCreate = h ? [].concat(h, f) : [ f ];
            } else {
                // register for functioal component in vue file
                l.render = function t(e, n) {
                    f.call(n);
                    return h(e, n);
                };
            }
        }
        return {
            esModule: s,
            exports: o,
            options: l
        };
    };
}, /* 1 */
/***/
function(t, e, n) {
    "use strict";
    var r = n(2);
    var i = o(r);
    var a = n(4);
    var s = o(a);
    n(23);
    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function u(t, e, n) {
        if (e in t) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            t[e] = n;
        }
        return t;
    }
    new i.default({
        el: "#v-root",
        components: u({}, s.default.name, s.default)
    });
}, /* 2 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* WEBPACK VAR INJECTION */
    (function(t) {
        /*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
        /*  */
        // these helpers produces better vm code in JS engines due to their
        // explicitness and function inlining
        function n(t) {
            return t === undefined || t === null;
        }
        function r(t) {
            return t !== undefined && t !== null;
        }
        function i(t) {
            return t === true;
        }
        function a(t) {
            return t === false;
        }
        /**
 * Check if value is primitive
 */
        function s(t) {
            return typeof t === "string" || typeof t === "number" || typeof t === "boolean";
        }
        /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
        function o(t) {
            return t !== null && typeof t === "object";
        }
        var u = Object.prototype.toString;
        /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
        function l(t) {
            return u.call(t) === "[object Object]";
        }
        function f(t) {
            return u.call(t) === "[object RegExp]";
        }
        /**
 * Check if val is a valid array index.
 */
        function c(t) {
            var e = parseFloat(t);
            return e >= 0 && Math.floor(e) === e && isFinite(t);
        }
        /**
 * Convert a value to a string that is actually rendered.
 */
        function h(t) {
            return t == null ? "" : typeof t === "object" ? JSON.stringify(t, null, 2) : String(t);
        }
        /**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
        function d(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e;
        }
        /**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
        function p(t, e) {
            var n = Object.create(null);
            var r = t.split(",");
            for (var i = 0; i < r.length; i++) {
                n[r[i]] = true;
            }
            return e ? function(t) {
                return n[t.toLowerCase()];
            } : function(t) {
                return n[t];
            };
        }
        /**
 * Check if a tag is a built-in tag.
 */
        var v = p("slot,component", true);
        /**
 * Check if a attribute is a reserved attribute.
 */
        var m = p("key,ref,slot,is");
        /**
 * Remove an item from an array
 */
        function y(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1) {
                    return t.splice(n, 1);
                }
            }
        }
        /**
 * Check whether the object has the property.
 */
        var g = Object.prototype.hasOwnProperty;
        function b(t, e) {
            return g.call(t, e);
        }
        /**
 * Create a cached version of a pure function.
 */
        function x(t) {
            var e = Object.create(null);
            return function n(r) {
                var i = e[r];
                return i || (e[r] = t(r));
            };
        }
        /**
 * Camelize a hyphen-delimited string.
 */
        var w = /-(\w)/g;
        var _ = x(function(t) {
            return t.replace(w, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        });
        /**
 * Capitalize a string.
 */
        var C = x(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        });
        /**
 * Hyphenate a camelCase string.
 */
        var k = /([^-])([A-Z])/g;
        var A = x(function(t) {
            return t.replace(k, "$1-$2").replace(k, "$1-$2").toLowerCase();
        });
        /**
 * Simple bind, faster than native
 */
        function $(t, e) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
            }
            // record original fn length
            n._length = t.length;
            return n;
        }
        /**
 * Convert an Array-like object to a real Array.
 */
        function S(t, e) {
            e = e || 0;
            var n = t.length - e;
            var r = new Array(n);
            while (n--) {
                r[n] = t[n + e];
            }
            return r;
        }
        /**
 * Mix properties into target object.
 */
        function M(t, e) {
            for (var n in e) {
                t[n] = e[n];
            }
            return t;
        }
        /**
 * Merge an Array of Objects into a single Object.
 */
        function O(t) {
            var e = {};
            for (var n = 0; n < t.length; n++) {
                if (t[n]) {
                    M(e, t[n]);
                }
            }
            return e;
        }
        /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
        function N(t, e, n) {}
        /**
 * Always return false.
 */
        var P = function(t, e, n) {
            return false;
        };
        /**
 * Return same value
 */
        var T = function(t) {
            return t;
        };
        /**
 * Generate a static keys string from compiler modules.
 */
        function E(t) {
            return t.reduce(function(t, e) {
                return t.concat(e.staticKeys || []);
            }, []).join(",");
        }
        /**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
        function j(t, e) {
            if (t === e) {
                return true;
            }
            var n = o(t);
            var r = o(e);
            if (n && r) {
                try {
                    var i = Array.isArray(t);
                    var a = Array.isArray(e);
                    if (i && a) {
                        return t.length === e.length && t.every(function(t, n) {
                            return j(t, e[n]);
                        });
                    } else if (!i && !a) {
                        var s = Object.keys(t);
                        var u = Object.keys(e);
                        return s.length === u.length && s.every(function(n) {
                            return j(t[n], e[n]);
                        });
                    } else {
                        /* istanbul ignore next */
                        return false;
                    }
                } catch (t) {
                    /* istanbul ignore next */
                    return false;
                }
            } else if (!n && !r) {
                return String(t) === String(e);
            } else {
                return false;
            }
        }
        function L(t, e) {
            for (var n = 0; n < t.length; n++) {
                if (j(t[n], e)) {
                    return n;
                }
            }
            return -1;
        }
        /**
 * Ensure a function is called only once.
 */
        function F(t) {
            var e = false;
            return function() {
                if (!e) {
                    e = true;
                    t.apply(this, arguments);
                }
            };
        }
        var I = "data-server-rendered";
        var D = [ "component", "directive", "filter" ];
        var R = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated" ];
        /*  */
        var B = {
            /**
   * Option merge strategies (used in core/util/options)
   */
            optionMergeStrategies: Object.create(null),
            /**
   * Whether to suppress warnings.
   */
            silent: false,
            /**
   * Show production mode tip message on boot?
   */
            productionTip: "development" !== "production",
            /**
   * Whether to enable devtools
   */
            devtools: "development" !== "production",
            /**
   * Whether to record perf
   */
            performance: false,
            /**
   * Error handler for watcher errors
   */
            errorHandler: null,
            /**
   * Warn handler for watcher warns
   */
            warnHandler: null,
            /**
   * Ignore certain custom elements
   */
            ignoredElements: [],
            /**
   * Custom user key aliases for v-on
   */
            keyCodes: Object.create(null),
            /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
            isReservedTag: P,
            /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
            isReservedAttr: P,
            /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
            isUnknownElement: P,
            /**
   * Get the namespace of an element
   */
            getTagNamespace: N,
            /**
   * Parse the real tag name for the specific platform.
   */
            parsePlatformTagName: T,
            /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
            mustUseProp: P,
            /**
   * Exposed for legacy reasons
   */
            _lifecycleHooks: R
        };
        /*  */
        var V = Object.freeze({});
        /**
 * Check if a string starts with $ or _
 */
        function U(t) {
            var e = (t + "").charCodeAt(0);
            return e === 36 || e === 95;
        }
        /**
 * Define a property.
 */
        function q(t, e, n, r) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: !!r,
                writable: true,
                configurable: true
            });
        }
        /**
 * Parse simple path.
 */
        var z = /[^\w.$]/;
        function H(t) {
            if (z.test(t)) {
                return;
            }
            var e = t.split(".");
            return function(t) {
                for (var n = 0; n < e.length; n++) {
                    if (!t) {
                        return;
                    }
                    t = t[e[n]];
                }
                return t;
            };
        }
        /*  */
        var X = N;
        var Y = N;
        var G = null;
        // work around flow check
        if (true) {
            var J = typeof console !== "undefined";
            var W = /(?:^|[-_])(\w)/g;
            var K = function(t) {
                return t.replace(W, function(t) {
                    return t.toUpperCase();
                }).replace(/[-_]/g, "");
            };
            X = function(t, e) {
                var n = e ? Q(e) : "";
                if (B.warnHandler) {
                    B.warnHandler.call(null, t, e, n);
                } else if (J && !B.silent) {
                    console.error("[Vue warn]: " + t + n);
                }
            };
            Y = function(t, e) {
                if (J && !B.silent) {
                    console.warn("[Vue tip]: " + t + (e ? Q(e) : ""));
                }
            };
            G = function(t, e) {
                if (t.$root === t) {
                    return "<Root>";
                }
                var n = typeof t === "string" ? t : typeof t === "function" && t.options ? t.options.name : t._isVue ? t.$options.name || t.$options._componentTag : t.name;
                var r = t._isVue && t.$options.__file;
                if (!n && r) {
                    var i = r.match(/([^\/\\]+)\.vue$/);
                    n = i && i[1];
                }
                return (n ? "<" + K(n) + ">" : "<Anonymous>") + (r && e !== false ? " at " + r : "");
            };
            var Z = function(t, e) {
                var n = "";
                while (e) {
                    if (e % 2 === 1) {
                        n += t;
                    }
                    if (e > 1) {
                        t += t;
                    }
                    e >>= 1;
                }
                return n;
            };
            var Q = function(t) {
                if (t._isVue && t.$parent) {
                    var e = [];
                    var n = 0;
                    while (t) {
                        if (e.length > 0) {
                            var r = e[e.length - 1];
                            if (r.constructor === t.constructor) {
                                n++;
                                t = t.$parent;
                                continue;
                            } else if (n > 0) {
                                e[e.length - 1] = [ r, n ];
                                n = 0;
                            }
                        }
                        e.push(t);
                        t = t.$parent;
                    }
                    return "\n\nfound in\n\n" + e.map(function(t, e) {
                        return "" + (e === 0 ? "---\x3e " : Z(" ", 5 + e * 2)) + (Array.isArray(t) ? G(t[0]) + "... (" + t[1] + " recursive calls)" : G(t));
                    }).join("\n");
                } else {
                    return "\n\n(found in " + G(t) + ")";
                }
            };
        }
        /*  */
        function tt(t, e, n) {
            if (B.errorHandler) {
                B.errorHandler.call(null, t, e, n);
            } else {
                if (true) {
                    X("Error in " + n + ': "' + t.toString() + '"', e);
                }
                /* istanbul ignore else */
                if (nt && typeof console !== "undefined") {
                    console.error(t);
                } else {
                    throw t;
                }
            }
        }
        /*  */
        /* globals MutationObserver */
        // can we use __proto__?
        var et = "__proto__" in {};
        // Browser environment sniffing
        var nt = typeof window !== "undefined";
        var rt = nt && window.navigator.userAgent.toLowerCase();
        var it = rt && /msie|trident/.test(rt);
        var at = rt && rt.indexOf("msie 9.0") > 0;
        var st = rt && rt.indexOf("edge/") > 0;
        var ot = rt && rt.indexOf("android") > 0;
        var ut = rt && /iphone|ipad|ipod|ios/.test(rt);
        var lt = rt && /chrome\/\d+/.test(rt) && !st;
        // Firefix has a "watch" function on Object.prototype...
        var ft = {}.watch;
        var ct = false;
        if (nt) {
            try {
                var ht = {};
                Object.defineProperty(ht, "passive", {
                    get: function t() {
                        /* istanbul ignore next */
                        ct = true;
                    }
                });
                // https://github.com/facebook/flow/issues/285
                window.addEventListener("test-passive", null, ht);
            } catch (t) {}
        }
        // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV
        var dt;
        var pt = function() {
            if (dt === undefined) {
                /* istanbul ignore if */
                if (!nt && typeof t !== "undefined") {
                    // detect presence of vue-server-renderer and avoid
                    // Webpack shimming the process
                    dt = t["process"].env.VUE_ENV === "server";
                } else {
                    dt = false;
                }
            }
            return dt;
        };
        // detect devtools
        var vt = nt && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        /* istanbul ignore next */
        function mt(t) {
            return typeof t === "function" && /native code/.test(t.toString());
        }
        var yt = typeof Symbol !== "undefined" && mt(Symbol) && typeof Reflect !== "undefined" && mt(Reflect.ownKeys);
        /**
 * Defer a task to execute it asynchronously.
 */
        var gt = function() {
            var t = [];
            var e = false;
            var n;
            function r() {
                e = false;
                var n = t.slice(0);
                t.length = 0;
                for (var r = 0; r < n.length; r++) {
                    n[r]();
                }
            }
            // the nextTick behavior leverages the microtask queue, which can be accessed
            // via either native Promise.then or MutationObserver.
            // MutationObserver has wider support, however it is seriously bugged in
            // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
            // completely stops working after triggering a few times... so, if native
            // Promise is available, we will use it:
            /* istanbul ignore if */
            if (typeof Promise !== "undefined" && mt(Promise)) {
                var i = Promise.resolve();
                var a = function(t) {
                    console.error(t);
                };
                n = function() {
                    i.then(r).catch(a);
                    // in problematic UIWebViews, Promise.then doesn't completely break, but
                    // it can get stuck in a weird state where callbacks are pushed into the
                    // microtask queue but the queue isn't being flushed, until the browser
                    // needs to do some other work, e.g. handle a timer. Therefore we can
                    // "force" the microtask queue to be flushed by adding an empty timer.
                    if (ut) {
                        setTimeout(N);
                    }
                };
            } else if (typeof MutationObserver !== "undefined" && (mt(MutationObserver) || // PhantomJS and iOS 7.x
            MutationObserver.toString() === "[object MutationObserverConstructor]")) {
                // use MutationObserver where native Promise is not available,
                // e.g. PhantomJS IE11, iOS7, Android 4.4
                var s = 1;
                var o = new MutationObserver(r);
                var u = document.createTextNode(String(s));
                o.observe(u, {
                    characterData: true
                });
                n = function() {
                    s = (s + 1) % 2;
                    u.data = String(s);
                };
            } else {
                // fallback to setTimeout
                /* istanbul ignore next */
                n = function() {
                    setTimeout(r, 0);
                };
            }
            return function r(i, a) {
                var s;
                t.push(function() {
                    if (i) {
                        try {
                            i.call(a);
                        } catch (t) {
                            tt(t, a, "nextTick");
                        }
                    } else if (s) {
                        s(a);
                    }
                });
                if (!e) {
                    e = true;
                    n();
                }
                if (!i && typeof Promise !== "undefined") {
                    return new Promise(function(t, e) {
                        s = t;
                    });
                }
            };
        }();
        var bt;
        /* istanbul ignore if */
        if (typeof Set !== "undefined" && mt(Set)) {
            // use native Set when available.
            bt = Set;
        } else {
            // a non-standard Set polyfill that only works with primitive keys.
            bt = function() {
                function t() {
                    this.set = Object.create(null);
                }
                t.prototype.has = function t(e) {
                    return this.set[e] === true;
                };
                t.prototype.add = function t(e) {
                    this.set[e] = true;
                };
                t.prototype.clear = function t() {
                    this.set = Object.create(null);
                };
                return t;
            }();
        }
        /*  */
        var xt = 0;
        /**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
        var wt = function t() {
            this.id = xt++;
            this.subs = [];
        };
        wt.prototype.addSub = function t(e) {
            this.subs.push(e);
        };
        wt.prototype.removeSub = function t(e) {
            y(this.subs, e);
        };
        wt.prototype.depend = function t() {
            if (wt.target) {
                wt.target.addDep(this);
            }
        };
        wt.prototype.notify = function t() {
            // stabilize the subscriber list first
            var e = this.subs.slice();
            for (var n = 0, r = e.length; n < r; n++) {
                e[n].update();
            }
        };
        // the current target watcher being evaluated.
        // this is globally unique because there could be only one
        // watcher being evaluated at any time.
        wt.target = null;
        var _t = [];
        function Ct(t) {
            if (wt.target) {
                _t.push(wt.target);
            }
            wt.target = t;
        }
        function kt() {
            wt.target = _t.pop();
        }
        /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
        var At = Array.prototype;
        var $t = Object.create(At);
        [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
            // cache original method
            var e = At[t];
            q($t, t, function n() {
                var r = [], i = arguments.length;
                while (i--) r[i] = arguments[i];
                var a = e.apply(this, r);
                var s = this.__ob__;
                var o;
                switch (t) {
                  case "push":
                  case "unshift":
                    o = r;
                    break;

                  case "splice":
                    o = r.slice(2);
                    break;
                }
                if (o) {
                    s.observeArray(o);
                }
                // notify change
                s.dep.notify();
                return a;
            });
        });
        /*  */
        var St = Object.getOwnPropertyNames($t);
        /**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
        var Mt = {
            shouldConvert: true
        };
        /**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
        var Ot = function t(e) {
            this.value = e;
            this.dep = new wt();
            this.vmCount = 0;
            q(e, "__ob__", this);
            if (Array.isArray(e)) {
                var n = et ? Nt : Pt;
                n(e, $t, St);
                this.observeArray(e);
            } else {
                this.walk(e);
            }
        };
        /**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
        Ot.prototype.walk = function t(e) {
            var n = Object.keys(e);
            for (var r = 0; r < n.length; r++) {
                Et(e, n[r], e[n[r]]);
            }
        };
        /**
 * Observe a list of Array items.
 */
        Ot.prototype.observeArray = function t(e) {
            for (var n = 0, r = e.length; n < r; n++) {
                Tt(e[n]);
            }
        };
        // helpers
        /**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
        function Nt(t, e, n) {
            /* eslint-disable no-proto */
            t.__proto__ = e;
        }
        /**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
        /* istanbul ignore next */
        function Pt(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                q(t, a, e[a]);
            }
        }
        /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
        function Tt(t, e) {
            if (!o(t)) {
                return;
            }
            var n;
            if (b(t, "__ob__") && t.__ob__ instanceof Ot) {
                n = t.__ob__;
            } else if (Mt.shouldConvert && !pt() && (Array.isArray(t) || l(t)) && Object.isExtensible(t) && !t._isVue) {
                n = new Ot(t);
            }
            if (e && n) {
                n.vmCount++;
            }
            return n;
        }
        /**
 * Define a reactive property on an Object.
 */
        function Et(t, e, n, r, i) {
            var a = new wt();
            var s = Object.getOwnPropertyDescriptor(t, e);
            if (s && s.configurable === false) {
                return;
            }
            // cater for pre-defined getter/setters
            var o = s && s.get;
            var u = s && s.set;
            var l = !i && Tt(n);
            Object.defineProperty(t, e, {
                enumerable: true,
                configurable: true,
                get: function e() {
                    var r = o ? o.call(t) : n;
                    if (wt.target) {
                        a.depend();
                        if (l) {
                            l.dep.depend();
                        }
                        if (Array.isArray(r)) {
                            Ft(r);
                        }
                    }
                    return r;
                },
                set: function e(s) {
                    var f = o ? o.call(t) : n;
                    /* eslint-disable no-self-compare */
                    if (s === f || s !== s && f !== f) {
                        return;
                    }
                    /* eslint-enable no-self-compare */
                    if ("development" !== "production" && r) {
                        r();
                    }
                    if (u) {
                        u.call(t, s);
                    } else {
                        n = s;
                    }
                    l = !i && Tt(s);
                    a.notify();
                }
            });
        }
        /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
        function jt(t, e, n) {
            if (Array.isArray(t) && c(e)) {
                t.length = Math.max(t.length, e);
                t.splice(e, 1, n);
                return n;
            }
            if (b(t, e)) {
                t[e] = n;
                return n;
            }
            var r = t.__ob__;
            if (t._isVue || r && r.vmCount) {
                "development" !== "production" && X("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
                return n;
            }
            if (!r) {
                t[e] = n;
                return n;
            }
            Et(r.value, e, n);
            r.dep.notify();
            return n;
        }
        /**
 * Delete a property and trigger change if necessary.
 */
        function Lt(t, e) {
            if (Array.isArray(t) && c(e)) {
                t.splice(e, 1);
                return;
            }
            var n = t.__ob__;
            if (t._isVue || n && n.vmCount) {
                "development" !== "production" && X("Avoid deleting properties on a Vue instance or its root $data " + "- just set it to null.");
                return;
            }
            if (!b(t, e)) {
                return;
            }
            delete t[e];
            if (!n) {
                return;
            }
            n.dep.notify();
        }
        /**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
        function Ft(t) {
            for (var e = void 0, n = 0, r = t.length; n < r; n++) {
                e = t[n];
                e && e.__ob__ && e.__ob__.dep.depend();
                if (Array.isArray(e)) {
                    Ft(e);
                }
            }
        }
        /*  */
        /**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
        var It = B.optionMergeStrategies;
        /**
 * Options with restrictions
 */
        if (true) {
            It.el = It.propsData = function(t, e, n, r) {
                if (!n) {
                    X('option "' + r + '" can only be used during instance ' + "creation with the `new` keyword.");
                }
                return Ut(t, e);
            };
        }
        /**
 * Helper that recursively merges two data objects together.
 */
        function Dt(t, e) {
            if (!e) {
                return t;
            }
            var n, r, i;
            var a = Object.keys(e);
            for (var s = 0; s < a.length; s++) {
                n = a[s];
                r = t[n];
                i = e[n];
                if (!b(t, n)) {
                    jt(t, n, i);
                } else if (l(r) && l(i)) {
                    Dt(r, i);
                }
            }
            return t;
        }
        /**
 * Data
 */
        function Rt(t, e, n) {
            if (!n) {
                // in a Vue.extend merge, both should be functions
                if (!e) {
                    return t;
                }
                if (!t) {
                    return e;
                }
                // when parentVal & childVal are both present,
                // we need to return a function that returns the
                // merged result of both functions... no need to
                // check if parentVal is a function here because
                // it has to be a function to pass previous merges.
                return function n() {
                    return Dt(typeof e === "function" ? e.call(this) : e, typeof t === "function" ? t.call(this) : t);
                };
            } else if (t || e) {
                return function r() {
                    // instance merge
                    var i = typeof e === "function" ? e.call(n) : e;
                    var a = typeof t === "function" ? t.call(n) : undefined;
                    if (i) {
                        return Dt(i, a);
                    } else {
                        return a;
                    }
                };
            }
        }
        It.data = function(t, e, n) {
            if (!n) {
                if (e && typeof e !== "function") {
                    "development" !== "production" && X('The "data" option should be a function ' + "that returns a per-instance value in component " + "definitions.", n);
                    return t;
                }
                return Rt.call(this, t, e);
            }
            return Rt(t, e, n);
        };
        /**
 * Hooks and props are merged as arrays.
 */
        function Bt(t, e) {
            return e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
        }
        R.forEach(function(t) {
            It[t] = Bt;
        });
        /**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
        function Vt(t, e) {
            var n = Object.create(t || null);
            return e ? M(n, e) : n;
        }
        D.forEach(function(t) {
            It[t + "s"] = Vt;
        });
        /**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
        It.watch = function(t, e) {
            // work around Firefox's Object.prototype.watch...
            if (t === ft) {
                t = undefined;
            }
            if (e === ft) {
                e = undefined;
            }
            /* istanbul ignore if */
            if (!e) {
                return Object.create(t || null);
            }
            if (!t) {
                return e;
            }
            var n = {};
            M(n, t);
            for (var r in e) {
                var i = n[r];
                var a = e[r];
                if (i && !Array.isArray(i)) {
                    i = [ i ];
                }
                n[r] = i ? i.concat(a) : Array.isArray(a) ? a : [ a ];
            }
            return n;
        };
        /**
 * Other object hashes.
 */
        It.props = It.methods = It.inject = It.computed = function(t, e) {
            if (!t) {
                return e;
            }
            var n = Object.create(null);
            M(n, t);
            if (e) {
                M(n, e);
            }
            return n;
        };
        It.provide = Rt;
        /**
 * Default strategy.
 */
        var Ut = function(t, e) {
            return e === undefined ? t : e;
        };
        /**
 * Validate component names
 */
        function qt(t) {
            for (var e in t.components) {
                var n = e.toLowerCase();
                if (v(n) || B.isReservedTag(n)) {
                    X("Do not use built-in or reserved HTML elements as component " + "id: " + e);
                }
            }
        }
        /**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
        function zt(t) {
            var e = t.props;
            if (!e) {
                return;
            }
            var n = {};
            var r, i, a;
            if (Array.isArray(e)) {
                r = e.length;
                while (r--) {
                    i = e[r];
                    if (typeof i === "string") {
                        a = _(i);
                        n[a] = {
                            type: null
                        };
                    } else if (true) {
                        X("props must be strings when using array syntax.");
                    }
                }
            } else if (l(e)) {
                for (var s in e) {
                    i = e[s];
                    a = _(s);
                    n[a] = l(i) ? i : {
                        type: i
                    };
                }
            }
            t.props = n;
        }
        /**
 * Normalize all injections into Object-based format
 */
        function Ht(t) {
            var e = t.inject;
            if (Array.isArray(e)) {
                var n = t.inject = {};
                for (var r = 0; r < e.length; r++) {
                    n[e[r]] = e[r];
                }
            }
        }
        /**
 * Normalize raw function directives into object format.
 */
        function Xt(t) {
            var e = t.directives;
            if (e) {
                for (var n in e) {
                    var r = e[n];
                    if (typeof r === "function") {
                        e[n] = {
                            bind: r,
                            update: r
                        };
                    }
                }
            }
        }
        /**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
        function Yt(t, e, n) {
            if (true) {
                qt(e);
            }
            if (typeof e === "function") {
                e = e.options;
            }
            zt(e);
            Ht(e);
            Xt(e);
            var r = e.extends;
            if (r) {
                t = Yt(t, r, n);
            }
            if (e.mixins) {
                for (var i = 0, a = e.mixins.length; i < a; i++) {
                    t = Yt(t, e.mixins[i], n);
                }
            }
            var s = {};
            var o;
            for (o in t) {
                u(o);
            }
            for (o in e) {
                if (!b(t, o)) {
                    u(o);
                }
            }
            function u(r) {
                var i = It[r] || Ut;
                s[r] = i(t[r], e[r], n, r);
            }
            return s;
        }
        /**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
        function Gt(t, e, n, r) {
            /* istanbul ignore if */
            if (typeof n !== "string") {
                return;
            }
            var i = t[e];
            // check local registration variations first
            if (b(i, n)) {
                return i[n];
            }
            var a = _(n);
            if (b(i, a)) {
                return i[a];
            }
            var s = C(a);
            if (b(i, s)) {
                return i[s];
            }
            // fallback to prototype chain
            var o = i[n] || i[a] || i[s];
            if ("development" !== "production" && r && !o) {
                X("Failed to resolve " + e.slice(0, -1) + ": " + n, t);
            }
            return o;
        }
        /*  */
        function Jt(t, e, n, r) {
            var i = e[t];
            var a = !b(n, t);
            var s = n[t];
            // handle boolean props
            if (ee(Boolean, i.type)) {
                if (a && !b(i, "default")) {
                    s = false;
                } else if (!ee(String, i.type) && (s === "" || s === A(t))) {
                    s = true;
                }
            }
            // check default value
            if (s === undefined) {
                s = Wt(r, i, t);
                // since the default value is a fresh copy,
                // make sure to observe it.
                var o = Mt.shouldConvert;
                Mt.shouldConvert = true;
                Tt(s);
                Mt.shouldConvert = o;
            }
            if (true) {
                Kt(i, t, s, r, a);
            }
            return s;
        }
        /**
 * Get the default value of a prop.
 */
        function Wt(t, e, n) {
            // no default, return undefined
            if (!b(e, "default")) {
                return undefined;
            }
            var r = e.default;
            // warn against non-factory defaults for Object & Array
            if ("development" !== "production" && o(r)) {
                X('Invalid default value for prop "' + n + '": ' + "Props with type Object/Array must use a factory function " + "to return the default value.", t);
            }
            // the raw prop value was also undefined from previous render,
            // return previous default value to avoid unnecessary watcher trigger
            if (t && t.$options.propsData && t.$options.propsData[n] === undefined && t._props[n] !== undefined) {
                return t._props[n];
            }
            // call factory function for non-Function types
            // a value is Function if its prototype is function even across different execution context
            return typeof r === "function" && te(e.type) !== "Function" ? r.call(t) : r;
        }
        /**
 * Assert whether a prop is valid.
 */
        function Kt(t, e, n, r, i) {
            if (t.required && i) {
                X('Missing required prop: "' + e + '"', r);
                return;
            }
            if (n == null && !t.required) {
                return;
            }
            var a = t.type;
            var s = !a || a === true;
            var o = [];
            if (a) {
                if (!Array.isArray(a)) {
                    a = [ a ];
                }
                for (var u = 0; u < a.length && !s; u++) {
                    var l = Qt(n, a[u]);
                    o.push(l.expectedType || "");
                    s = l.valid;
                }
            }
            if (!s) {
                X('Invalid prop: type check failed for prop "' + e + '".' + " Expected " + o.map(C).join(", ") + ", got " + Object.prototype.toString.call(n).slice(8, -1) + ".", r);
                return;
            }
            var f = t.validator;
            if (f) {
                if (!f(n)) {
                    X('Invalid prop: custom validator check failed for prop "' + e + '".', r);
                }
            }
        }
        var Zt = /^(String|Number|Boolean|Function|Symbol)$/;
        function Qt(t, e) {
            var n;
            var r = te(e);
            if (Zt.test(r)) {
                n = typeof t === r.toLowerCase();
            } else if (r === "Object") {
                n = l(t);
            } else if (r === "Array") {
                n = Array.isArray(t);
            } else {
                n = t instanceof e;
            }
            return {
                valid: n,
                expectedType: r
            };
        }
        /**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
        function te(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : "";
        }
        function ee(t, e) {
            if (!Array.isArray(e)) {
                return te(e) === te(t);
            }
            for (var n = 0, r = e.length; n < r; n++) {
                if (te(e[n]) === te(t)) {
                    return true;
                }
            }
            /* istanbul ignore next */
            return false;
        }
        /*  */
        var ne;
        var re;
        if (true) {
            var ie = nt && window.performance;
            /* istanbul ignore if */
            if (ie && ie.mark && ie.measure && ie.clearMarks && ie.clearMeasures) {
                ne = function(t) {
                    return ie.mark(t);
                };
                re = function(t, e, n) {
                    ie.measure(t, e, n);
                    ie.clearMarks(e);
                    ie.clearMarks(n);
                    ie.clearMeasures(t);
                };
            }
        }
        /* not type checking this file because flow doesn't play well with Proxy */
        var ae;
        if (true) {
            var se = p("Infinity,undefined,NaN,isFinite,isNaN," + "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," + "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl," + "require");
            var oe = function(t, e) {
                X('Property or method "' + e + '" is not defined on the instance but ' + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", t);
            };
            var ue = typeof Proxy !== "undefined" && Proxy.toString().match(/native code/);
            if (ue) {
                var le = p("stop,prevent,self,ctrl,shift,alt,meta");
                B.keyCodes = new Proxy(B.keyCodes, {
                    set: function t(e, n, r) {
                        if (le(n)) {
                            X("Avoid overwriting built-in modifier in config.keyCodes: ." + n);
                            return false;
                        } else {
                            e[n] = r;
                            return true;
                        }
                    }
                });
            }
            var fe = {
                has: function t(e, n) {
                    var t = n in e;
                    var r = se(n) || n.charAt(0) === "_";
                    if (!t && !r) {
                        oe(e, n);
                    }
                    return t || !r;
                }
            };
            var ce = {
                get: function t(e, n) {
                    if (typeof n === "string" && !(n in e)) {
                        oe(e, n);
                    }
                    return e[n];
                }
            };
            ae = function t(e) {
                if (ue) {
                    // determine which proxy handler to use
                    var n = e.$options;
                    var r = n.render && n.render._withStripped ? ce : fe;
                    e._renderProxy = new Proxy(e, r);
                } else {
                    e._renderProxy = e;
                }
            };
        }
        /*  */
        var he = function t(e, n, r, i, a, s, o, u) {
            this.tag = e;
            this.data = n;
            this.children = r;
            this.text = i;
            this.elm = a;
            this.ns = undefined;
            this.context = s;
            this.functionalContext = undefined;
            this.key = n && n.key;
            this.componentOptions = o;
            this.componentInstance = undefined;
            this.parent = undefined;
            this.raw = false;
            this.isStatic = false;
            this.isRootInsert = true;
            this.isComment = false;
            this.isCloned = false;
            this.isOnce = false;
            this.asyncFactory = u;
            this.asyncMeta = undefined;
            this.isAsyncPlaceholder = false;
        };
        var de = {
            child: {}
        };
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        de.child.get = function() {
            return this.componentInstance;
        };
        Object.defineProperties(he.prototype, de);
        var pe = function(t) {
            if (t === void 0) t = "";
            var e = new he();
            e.text = t;
            e.isComment = true;
            return e;
        };
        function ve(t) {
            return new he(undefined, undefined, undefined, String(t));
        }
        // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.
        function me(t) {
            var e = new he(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            e.ns = t.ns;
            e.isStatic = t.isStatic;
            e.key = t.key;
            e.isComment = t.isComment;
            e.isCloned = true;
            return e;
        }
        function ye(t) {
            var e = t.length;
            var n = new Array(e);
            for (var r = 0; r < e; r++) {
                n[r] = me(t[r]);
            }
            return n;
        }
        /*  */
        var ge = x(function(t) {
            var e = t.charAt(0) === "&";
            t = e ? t.slice(1) : t;
            var n = t.charAt(0) === "~";
            // Prefixed last, checked first
            t = n ? t.slice(1) : t;
            var r = t.charAt(0) === "!";
            t = r ? t.slice(1) : t;
            return {
                name: t,
                once: n,
                capture: r,
                passive: e
            };
        });
        function be(t) {
            function e() {
                var t = arguments;
                var n = e.fns;
                if (Array.isArray(n)) {
                    var r = n.slice();
                    for (var i = 0; i < r.length; i++) {
                        r[i].apply(null, t);
                    }
                } else {
                    // return handler return value for single handlers
                    return n.apply(null, arguments);
                }
            }
            e.fns = t;
            return e;
        }
        function xe(t, e, r, i, a) {
            var s, o, u, l;
            for (s in t) {
                o = t[s];
                u = e[s];
                l = ge(s);
                if (n(o)) {
                    "development" !== "production" && X('Invalid handler for event "' + l.name + '": got ' + String(o), a);
                } else if (n(u)) {
                    if (n(o.fns)) {
                        o = t[s] = be(o);
                    }
                    r(l.name, o, l.once, l.capture, l.passive);
                } else if (o !== u) {
                    u.fns = o;
                    t[s] = u;
                }
            }
            for (s in e) {
                if (n(t[s])) {
                    l = ge(s);
                    i(l.name, e[s], l.capture);
                }
            }
        }
        /*  */
        function we(t, e, a) {
            var s;
            var o = t[e];
            function u() {
                a.apply(this, arguments);
                // important: remove merged hook to ensure it's called only once
                // and prevent memory leak
                y(s.fns, u);
            }
            if (n(o)) {
                // no existing hook
                s = be([ u ]);
            } else {
                /* istanbul ignore if */
                if (r(o.fns) && i(o.merged)) {
                    // already a merged invoker
                    s = o;
                    s.fns.push(u);
                } else {
                    // existing plain hook
                    s = be([ o, u ]);
                }
            }
            s.merged = true;
            t[e] = s;
        }
        /*  */
        function _e(t, e, i) {
            // we are only extracting raw values here.
            // validation and default values are handled in the child
            // component itself.
            var a = e.options.props;
            if (n(a)) {
                return;
            }
            var s = {};
            var o = t.attrs;
            var u = t.props;
            if (r(o) || r(u)) {
                for (var l in a) {
                    var f = A(l);
                    if (true) {
                        var c = l.toLowerCase();
                        if (l !== c && o && b(o, c)) {
                            Y('Prop "' + c + '" is passed to component ' + G(i || e) + ", but the declared prop name is" + ' "' + l + '". ' + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "' + f + '" instead of "' + l + '".');
                        }
                    }
                    Ce(s, u, l, f, true) || Ce(s, o, l, f, false);
                }
            }
            return s;
        }
        function Ce(t, e, n, i, a) {
            if (r(e)) {
                if (b(e, n)) {
                    t[n] = e[n];
                    if (!a) {
                        delete e[n];
                    }
                    return true;
                } else if (b(e, i)) {
                    t[n] = e[i];
                    if (!a) {
                        delete e[i];
                    }
                    return true;
                }
            }
            return false;
        }
        /*  */
        // The template compiler attempts to minimize the need for normalization by
        // statically analyzing the template at compile time.
        //
        // For plain HTML markup, normalization can be completely skipped because the
        // generated render function is guaranteed to return Array<VNode>. There are
        // two cases where extra normalization is needed:
        // 1. When the children contains components - because a functional component
        // may return an Array instead of a single root. In this case, just a simple
        // normalization is needed - if any child is an Array, we flatten the whole
        // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
        // because functional components already normalize their own children.
        function ke(t) {
            for (var e = 0; e < t.length; e++) {
                if (Array.isArray(t[e])) {
                    return Array.prototype.concat.apply([], t);
                }
            }
            return t;
        }
        // 2. When the children contains constructs that always generated nested Arrays,
        // e.g. <template>, <slot>, v-for, or when the children is provided by user
        // with hand-written render functions / JSX. In such cases a full normalization
        // is needed to cater to all possible types of children values.
        function Ae(t) {
            return s(t) ? [ ve(t) ] : Array.isArray(t) ? Se(t) : undefined;
        }
        function $e(t) {
            return r(t) && r(t.text) && a(t.isComment);
        }
        function Se(t, e) {
            var a = [];
            var o, u, l;
            for (o = 0; o < t.length; o++) {
                u = t[o];
                if (n(u) || typeof u === "boolean") {
                    continue;
                }
                l = a[a.length - 1];
                //  nested
                if (Array.isArray(u)) {
                    a.push.apply(a, Se(u, (e || "") + "_" + o));
                } else if (s(u)) {
                    if ($e(l)) {
                        // merge adjacent text nodes
                        // this is necessary for SSR hydration because text nodes are
                        // essentially merged when rendered to HTML strings
                        l.text += String(u);
                    } else if (u !== "") {
                        // convert primitive to vnode
                        a.push(ve(u));
                    }
                } else {
                    if ($e(u) && $e(l)) {
                        // merge adjacent text nodes
                        a[a.length - 1] = ve(l.text + u.text);
                    } else {
                        // default key for nested array children (likely generated by v-for)
                        if (i(t._isVList) && r(u.tag) && n(u.key) && r(e)) {
                            u.key = "__vlist" + e + "_" + o + "__";
                        }
                        a.push(u);
                    }
                }
            }
            return a;
        }
        /*  */
        function Me(t, e) {
            if (t.__esModule && t.default) {
                t = t.default;
            }
            return o(t) ? e.extend(t) : t;
        }
        function Oe(t, e, n, r, i) {
            var a = pe();
            a.asyncFactory = t;
            a.asyncMeta = {
                data: e,
                context: n,
                children: r,
                tag: i
            };
            return a;
        }
        function Ne(t, e, a) {
            if (i(t.error) && r(t.errorComp)) {
                return t.errorComp;
            }
            if (r(t.resolved)) {
                return t.resolved;
            }
            if (i(t.loading) && r(t.loadingComp)) {
                return t.loadingComp;
            }
            if (r(t.contexts)) {
                // already pending
                t.contexts.push(a);
            } else {
                var s = t.contexts = [ a ];
                var u = true;
                var l = function() {
                    for (var t = 0, e = s.length; t < e; t++) {
                        s[t].$forceUpdate();
                    }
                };
                var f = F(function(n) {
                    // cache resolved
                    t.resolved = Me(n, e);
                    // invoke callbacks only if this is not a synchronous resolve
                    // (async resolves are shimmed as synchronous during SSR)
                    if (!u) {
                        l();
                    }
                });
                var c = F(function(e) {
                    "development" !== "production" && X("Failed to resolve async component: " + String(t) + (e ? "\nReason: " + e : ""));
                    if (r(t.errorComp)) {
                        t.error = true;
                        l();
                    }
                });
                var h = t(f, c);
                if (o(h)) {
                    if (typeof h.then === "function") {
                        // () => Promise
                        if (n(t.resolved)) {
                            h.then(f, c);
                        }
                    } else if (r(h.component) && typeof h.component.then === "function") {
                        h.component.then(f, c);
                        if (r(h.error)) {
                            t.errorComp = Me(h.error, e);
                        }
                        if (r(h.loading)) {
                            t.loadingComp = Me(h.loading, e);
                            if (h.delay === 0) {
                                t.loading = true;
                            } else {
                                setTimeout(function() {
                                    if (n(t.resolved) && n(t.error)) {
                                        t.loading = true;
                                        l();
                                    }
                                }, h.delay || 200);
                            }
                        }
                        if (r(h.timeout)) {
                            setTimeout(function() {
                                if (n(t.resolved)) {
                                    c(true ? "timeout (" + h.timeout + "ms)" : null);
                                }
                            }, h.timeout);
                        }
                    }
                }
                u = false;
                // return in case resolved synchronously
                return t.loading ? t.loadingComp : t.resolved;
            }
        }
        /*  */
        function Pe(t) {
            if (Array.isArray(t)) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (r(n) && r(n.componentOptions)) {
                        return n;
                    }
                }
            }
        }
        /*  */
        /*  */
        function Te(t) {
            t._events = Object.create(null);
            t._hasHookEvent = false;
            // init parent attached events
            var e = t.$options._parentListeners;
            if (e) {
                Fe(t, e);
            }
        }
        var Ee;
        function je(t, e, n) {
            if (n) {
                Ee.$once(t, e);
            } else {
                Ee.$on(t, e);
            }
        }
        function Le(t, e) {
            Ee.$off(t, e);
        }
        function Fe(t, e, n) {
            Ee = t;
            xe(e, n || {}, je, Le, t);
        }
        function Ie(t) {
            var e = /^hook:/;
            t.prototype.$on = function(t, n) {
                var r = this;
                var i = this;
                if (Array.isArray(t)) {
                    for (var a = 0, s = t.length; a < s; a++) {
                        r.$on(t[a], n);
                    }
                } else {
                    (i._events[t] || (i._events[t] = [])).push(n);
                    // optimize hook:event cost by using a boolean flag marked at registration
                    // instead of a hash lookup
                    if (e.test(t)) {
                        i._hasHookEvent = true;
                    }
                }
                return i;
            };
            t.prototype.$once = function(t, e) {
                var n = this;
                function r() {
                    n.$off(t, r);
                    e.apply(n, arguments);
                }
                r.fn = e;
                n.$on(t, r);
                return n;
            };
            t.prototype.$off = function(t, e) {
                var n = this;
                var r = this;
                // all
                if (!arguments.length) {
                    r._events = Object.create(null);
                    return r;
                }
                // array of events
                if (Array.isArray(t)) {
                    for (var i = 0, a = t.length; i < a; i++) {
                        n.$off(t[i], e);
                    }
                    return r;
                }
                // specific event
                var s = r._events[t];
                if (!s) {
                    return r;
                }
                if (arguments.length === 1) {
                    r._events[t] = null;
                    return r;
                }
                // specific handler
                var o;
                var u = s.length;
                while (u--) {
                    o = s[u];
                    if (o === e || o.fn === e) {
                        s.splice(u, 1);
                        break;
                    }
                }
                return r;
            };
            t.prototype.$emit = function(t) {
                var e = this;
                if (true) {
                    var n = t.toLowerCase();
                    if (n !== t && e._events[n]) {
                        Y('Event "' + n + '" is emitted in component ' + G(e) + ' but the handler is registered for "' + t + '". ' + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "' + A(t) + '" instead of "' + t + '".');
                    }
                }
                var r = e._events[t];
                if (r) {
                    r = r.length > 1 ? S(r) : r;
                    var i = S(arguments, 1);
                    for (var a = 0, s = r.length; a < s; a++) {
                        try {
                            r[a].apply(e, i);
                        } catch (n) {
                            tt(n, e, 'event handler for "' + t + '"');
                        }
                    }
                }
                return e;
            };
        }
        /*  */
        /**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
        function De(t, e) {
            var n = {};
            if (!t) {
                return n;
            }
            var r = [];
            for (var i = 0, a = t.length; i < a; i++) {
                var s = t[i];
                // named slots should only be respected if the vnode was rendered in the
                // same context.
                if ((s.context === e || s.functionalContext === e) && s.data && s.data.slot != null) {
                    var o = s.data.slot;
                    var u = n[o] || (n[o] = []);
                    if (s.tag === "template") {
                        u.push.apply(u, s.children);
                    } else {
                        u.push(s);
                    }
                } else {
                    r.push(s);
                }
            }
            // ignore whitespace
            if (!r.every(Re)) {
                n.default = r;
            }
            return n;
        }
        function Re(t) {
            return t.isComment || t.text === " ";
        }
        function Be(t, // see flow/vnode
        e) {
            e = e || {};
            for (var n = 0; n < t.length; n++) {
                if (Array.isArray(t[n])) {
                    Be(t[n], e);
                } else {
                    e[t[n].key] = t[n].fn;
                }
            }
            return e;
        }
        /*  */
        var Ve = null;
        var Ue = false;
        function qe(t) {
            var e = t.$options;
            // locate first non-abstract parent
            var n = e.parent;
            if (n && !e.abstract) {
                while (n.$options.abstract && n.$parent) {
                    n = n.$parent;
                }
                n.$children.push(t);
            }
            t.$parent = n;
            t.$root = n ? n.$root : t;
            t.$children = [];
            t.$refs = {};
            t._watcher = null;
            t._inactive = null;
            t._directInactive = false;
            t._isMounted = false;
            t._isDestroyed = false;
            t._isBeingDestroyed = false;
        }
        function ze(t) {
            t.prototype._update = function(t, e) {
                var n = this;
                if (n._isMounted) {
                    We(n, "beforeUpdate");
                }
                var r = n.$el;
                var i = n._vnode;
                var a = Ve;
                Ve = n;
                n._vnode = t;
                // Vue.prototype.__patch__ is injected in entry points
                // based on the rendering backend used.
                if (!i) {
                    // initial render
                    n.$el = n.__patch__(n.$el, t, e, false, n.$options._parentElm, n.$options._refElm);
                    // no need for the ref nodes after initial patch
                    // this prevents keeping a detached DOM tree in memory (#5851)
                    n.$options._parentElm = n.$options._refElm = null;
                } else {
                    // updates
                    n.$el = n.__patch__(i, t);
                }
                Ve = a;
                // update __vue__ reference
                if (r) {
                    r.__vue__ = null;
                }
                if (n.$el) {
                    n.$el.__vue__ = n;
                }
                // if parent is an HOC, update its $el as well
                if (n.$vnode && n.$parent && n.$vnode === n.$parent._vnode) {
                    n.$parent.$el = n.$el;
                }
            };
            t.prototype.$forceUpdate = function() {
                var t = this;
                if (t._watcher) {
                    t._watcher.update();
                }
            };
            t.prototype.$destroy = function() {
                var t = this;
                if (t._isBeingDestroyed) {
                    return;
                }
                We(t, "beforeDestroy");
                t._isBeingDestroyed = true;
                // remove self from parent
                var e = t.$parent;
                if (e && !e._isBeingDestroyed && !t.$options.abstract) {
                    y(e.$children, t);
                }
                // teardown watchers
                if (t._watcher) {
                    t._watcher.teardown();
                }
                var n = t._watchers.length;
                while (n--) {
                    t._watchers[n].teardown();
                }
                // remove reference from data ob
                // frozen object may not have observer.
                if (t._data.__ob__) {
                    t._data.__ob__.vmCount--;
                }
                // call the last hook...
                t._isDestroyed = true;
                // invoke destroy hooks on current rendered tree
                t.__patch__(t._vnode, null);
                // fire destroyed hook
                We(t, "destroyed");
                // turn off all instance listeners.
                t.$off();
                // remove __vue__ reference
                if (t.$el) {
                    t.$el.__vue__ = null;
                }
            };
        }
        function He(t, e, n) {
            t.$el = e;
            if (!t.$options.render) {
                t.$options.render = pe;
                if (true) {
                    /* istanbul ignore if */
                    if (t.$options.template && t.$options.template.charAt(0) !== "#" || t.$options.el || e) {
                        X("You are using the runtime-only build of Vue where the template " + "compiler is not available. Either pre-compile the templates into " + "render functions, or use the compiler-included build.", t);
                    } else {
                        X("Failed to mount component: template or render function not defined.", t);
                    }
                }
            }
            We(t, "beforeMount");
            var r;
            /* istanbul ignore if */
            if ("development" !== "production" && B.performance && ne) {
                r = function() {
                    var e = t._name;
                    var r = t._uid;
                    var i = "vue-perf-start:" + r;
                    var a = "vue-perf-end:" + r;
                    ne(i);
                    var s = t._render();
                    ne(a);
                    re(e + " render", i, a);
                    ne(i);
                    t._update(s, n);
                    ne(a);
                    re(e + " patch", i, a);
                };
            } else {
                r = function() {
                    t._update(t._render(), n);
                };
            }
            t._watcher = new dn(t, r, N);
            n = false;
            // manually mounted instance, call mounted on self
            // mounted is called for render-created child components in its inserted hook
            if (t.$vnode == null) {
                t._isMounted = true;
                We(t, "mounted");
            }
            return t;
        }
        function Xe(t, e, n, r, i) {
            if (true) {
                Ue = true;
            }
            // determine whether component has slot children
            // we need to do this before overwriting $options._renderChildren
            var a = !!(i || // has new static slots
            t.$options._renderChildren || // has old static slots
            r.data.scopedSlots || // has new scoped slots
            t.$scopedSlots !== V);
            t.$options._parentVnode = r;
            t.$vnode = r;
            // update vm's placeholder node without re-render
            if (t._vnode) {
                // update child tree's parent
                t._vnode.parent = r;
            }
            t.$options._renderChildren = i;
            // update $attrs and $listensers hash
            // these are also reactive so they may trigger child update if the child
            // used them during render
            t.$attrs = r.data && r.data.attrs;
            t.$listeners = n;
            // update props
            if (e && t.$options.props) {
                Mt.shouldConvert = false;
                var s = t._props;
                var o = t.$options._propKeys || [];
                for (var u = 0; u < o.length; u++) {
                    var l = o[u];
                    s[l] = Jt(l, t.$options.props, e, t);
                }
                Mt.shouldConvert = true;
                // keep a copy of raw propsData
                t.$options.propsData = e;
            }
            // update listeners
            if (n) {
                var f = t.$options._parentListeners;
                t.$options._parentListeners = n;
                Fe(t, n, f);
            }
            // resolve slots + force update if has children
            if (a) {
                t.$slots = De(i, r.context);
                t.$forceUpdate();
            }
            if (true) {
                Ue = false;
            }
        }
        function Ye(t) {
            while (t && (t = t.$parent)) {
                if (t._inactive) {
                    return true;
                }
            }
            return false;
        }
        function Ge(t, e) {
            if (e) {
                t._directInactive = false;
                if (Ye(t)) {
                    return;
                }
            } else if (t._directInactive) {
                return;
            }
            if (t._inactive || t._inactive === null) {
                t._inactive = false;
                for (var n = 0; n < t.$children.length; n++) {
                    Ge(t.$children[n]);
                }
                We(t, "activated");
            }
        }
        function Je(t, e) {
            if (e) {
                t._directInactive = true;
                if (Ye(t)) {
                    return;
                }
            }
            if (!t._inactive) {
                t._inactive = true;
                for (var n = 0; n < t.$children.length; n++) {
                    Je(t.$children[n]);
                }
                We(t, "deactivated");
            }
        }
        function We(t, e) {
            var n = t.$options[e];
            if (n) {
                for (var r = 0, i = n.length; r < i; r++) {
                    try {
                        n[r].call(t);
                    } catch (n) {
                        tt(n, t, e + " hook");
                    }
                }
            }
            if (t._hasHookEvent) {
                t.$emit("hook:" + e);
            }
        }
        /*  */
        var Ke = 100;
        var Ze = [];
        var Qe = [];
        var tn = {};
        var en = {};
        var nn = false;
        var rn = false;
        var an = 0;
        /**
 * Reset the scheduler's state.
 */
        function sn() {
            an = Ze.length = Qe.length = 0;
            tn = {};
            if (true) {
                en = {};
            }
            nn = rn = false;
        }
        /**
 * Flush both queues and run the watchers.
 */
        function on() {
            rn = true;
            var t, e;
            // Sort queue before flush.
            // This ensures that:
            // 1. Components are updated from parent to child. (because parent is always
            //    created before the child)
            // 2. A component's user watchers are run before its render watcher (because
            //    user watchers are created before the render watcher)
            // 3. If a component is destroyed during a parent component's watcher run,
            //    its watchers can be skipped.
            Ze.sort(function(t, e) {
                return t.id - e.id;
            });
            // do not cache length because more watchers might be pushed
            // as we run existing watchers
            for (an = 0; an < Ze.length; an++) {
                t = Ze[an];
                e = t.id;
                tn[e] = null;
                t.run();
                // in dev build, check and stop circular updates.
                if ("development" !== "production" && tn[e] != null) {
                    en[e] = (en[e] || 0) + 1;
                    if (en[e] > Ke) {
                        X("You may have an infinite update loop " + (t.user ? 'in watcher with expression "' + t.expression + '"' : "in a component render function."), t.vm);
                        break;
                    }
                }
            }
            // keep copies of post queues before resetting state
            var n = Qe.slice();
            var r = Ze.slice();
            sn();
            // call component updated and activated hooks
            fn(n);
            un(r);
            // devtool hook
            /* istanbul ignore if */
            if (vt && B.devtools) {
                vt.emit("flush");
            }
        }
        function un(t) {
            var e = t.length;
            while (e--) {
                var n = t[e];
                var r = n.vm;
                if (r._watcher === n && r._isMounted) {
                    We(r, "updated");
                }
            }
        }
        /**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
        function ln(t) {
            // setting _inactive to false here so that a render function can
            // rely on checking whether it's in an inactive tree (e.g. router-view)
            t._inactive = false;
            Qe.push(t);
        }
        function fn(t) {
            for (var e = 0; e < t.length; e++) {
                t[e]._inactive = true;
                Ge(t[e], true);
            }
        }
        /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
        function cn(t) {
            var e = t.id;
            if (tn[e] == null) {
                tn[e] = true;
                if (!rn) {
                    Ze.push(t);
                } else {
                    // if already flushing, splice the watcher based on its id
                    // if already past its id, it will be run next immediately.
                    var n = Ze.length - 1;
                    while (n > an && Ze[n].id > t.id) {
                        n--;
                    }
                    Ze.splice(n + 1, 0, t);
                }
                // queue the flush
                if (!nn) {
                    nn = true;
                    gt(on);
                }
            }
        }
        /*  */
        var hn = 0;
        /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
        var dn = function t(e, n, r, i) {
            this.vm = e;
            e._watchers.push(this);
            // options
            if (i) {
                this.deep = !!i.deep;
                this.user = !!i.user;
                this.lazy = !!i.lazy;
                this.sync = !!i.sync;
            } else {
                this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = r;
            this.id = ++hn;
            // uid for batching
            this.active = true;
            this.dirty = this.lazy;
            // for lazy watchers
            this.deps = [];
            this.newDeps = [];
            this.depIds = new bt();
            this.newDepIds = new bt();
            this.expression = true ? n.toString() : "";
            // parse expression for getter
            if (typeof n === "function") {
                this.getter = n;
            } else {
                this.getter = H(n);
                if (!this.getter) {
                    this.getter = function() {};
                    "development" !== "production" && X('Failed watching path: "' + n + '" ' + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", e);
                }
            }
            this.value = this.lazy ? undefined : this.get();
        };
        /**
 * Evaluate the getter, and re-collect dependencies.
 */
        dn.prototype.get = function t() {
            Ct(this);
            var e;
            var n = this.vm;
            try {
                e = this.getter.call(n, n);
            } catch (t) {
                if (this.user) {
                    tt(t, n, 'getter for watcher "' + this.expression + '"');
                } else {
                    throw t;
                }
            } finally {
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) {
                    vn(e);
                }
                kt();
                this.cleanupDeps();
            }
            return e;
        };
        /**
 * Add a dependency to this directive.
 */
        dn.prototype.addDep = function t(e) {
            var n = e.id;
            if (!this.newDepIds.has(n)) {
                this.newDepIds.add(n);
                this.newDeps.push(e);
                if (!this.depIds.has(n)) {
                    e.addSub(this);
                }
            }
        };
        /**
 * Clean up for dependency collection.
 */
        dn.prototype.cleanupDeps = function t() {
            var e = this;
            var n = this.deps.length;
            while (n--) {
                var r = e.deps[n];
                if (!e.newDepIds.has(r.id)) {
                    r.removeSub(e);
                }
            }
            var i = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = i;
            this.newDepIds.clear();
            i = this.deps;
            this.deps = this.newDeps;
            this.newDeps = i;
            this.newDeps.length = 0;
        };
        /**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
        dn.prototype.update = function t() {
            /* istanbul ignore else */
            if (this.lazy) {
                this.dirty = true;
            } else if (this.sync) {
                this.run();
            } else {
                cn(this);
            }
        };
        /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
        dn.prototype.run = function t() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                o(e) || this.deep) {
                    // set new value
                    var n = this.value;
                    this.value = e;
                    if (this.user) {
                        try {
                            this.cb.call(this.vm, e, n);
                        } catch (t) {
                            tt(t, this.vm, 'callback for watcher "' + this.expression + '"');
                        }
                    } else {
                        this.cb.call(this.vm, e, n);
                    }
                }
            }
        };
        /**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
        dn.prototype.evaluate = function t() {
            this.value = this.get();
            this.dirty = false;
        };
        /**
 * Depend on all deps collected by this watcher.
 */
        dn.prototype.depend = function t() {
            var e = this;
            var n = this.deps.length;
            while (n--) {
                e.deps[n].depend();
            }
        };
        /**
 * Remove self from all dependencies' subscriber list.
 */
        dn.prototype.teardown = function t() {
            var e = this;
            if (this.active) {
                // remove self from vm's watcher list
                // this is a somewhat expensive operation so we skip it
                // if the vm is being destroyed.
                if (!this.vm._isBeingDestroyed) {
                    y(this.vm._watchers, this);
                }
                var n = this.deps.length;
                while (n--) {
                    e.deps[n].removeSub(e);
                }
                this.active = false;
            }
        };
        /**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
        var pn = new bt();
        function vn(t) {
            pn.clear();
            mn(t, pn);
        }
        function mn(t, e) {
            var n, r;
            var i = Array.isArray(t);
            if (!i && !o(t) || !Object.isExtensible(t)) {
                return;
            }
            if (t.__ob__) {
                var a = t.__ob__.dep.id;
                if (e.has(a)) {
                    return;
                }
                e.add(a);
            }
            if (i) {
                n = t.length;
                while (n--) {
                    mn(t[n], e);
                }
            } else {
                r = Object.keys(t);
                n = r.length;
                while (n--) {
                    mn(t[r[n]], e);
                }
            }
        }
        /*  */
        var yn = {
            enumerable: true,
            configurable: true,
            get: N,
            set: N
        };
        function gn(t, e, n) {
            yn.get = function t() {
                return this[e][n];
            };
            yn.set = function t(r) {
                this[e][n] = r;
            };
            Object.defineProperty(t, n, yn);
        }
        function bn(t) {
            t._watchers = [];
            var e = t.$options;
            if (e.props) {
                wn(t, e.props);
            }
            if (e.methods) {
                Mn(t, e.methods);
            }
            if (e.data) {
                _n(t);
            } else {
                Tt(t._data = {}, true);
            }
            if (e.computed) {
                An(t, e.computed);
            }
            if (e.watch && e.watch !== ft) {
                On(t, e.watch);
            }
        }
        function xn(t, e) {
            var n = t.$options[e];
            if (!l(n)) {
                X('component option "' + e + '" should be an object.', t);
            }
        }
        function wn(t, e) {
            var n = t.$options.propsData || {};
            var r = t._props = {};
            // cache prop keys so that future props updates can iterate using Array
            // instead of dynamic object key enumeration.
            var i = t.$options._propKeys = [];
            var a = !t.$parent;
            // root instance props should be converted
            Mt.shouldConvert = a;
            var s = function(a) {
                i.push(a);
                var s = Jt(a, e, n, t);
                /* istanbul ignore else */
                if (true) {
                    if (m(a) || B.isReservedAttr(a)) {
                        X('"' + a + '" is a reserved attribute and cannot be used as component prop.', t);
                    }
                    Et(r, a, s, function() {
                        if (t.$parent && !Ue) {
                            X("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "' + a + '"', t);
                        }
                    });
                } else {
                    Et(r, a, s);
                }
                // static props are already proxied on the component's prototype
                // during Vue.extend(). We only need to proxy props defined at
                // instantiation here.
                if (!(a in t)) {
                    gn(t, "_props", a);
                }
            };
            for (var o in e) s(o);
            Mt.shouldConvert = true;
        }
        function _n(t) {
            var e = t.$options.data;
            e = t._data = typeof e === "function" ? Cn(e, t) : e || {};
            if (!l(e)) {
                e = {};
                "development" !== "production" && X("data functions should return an object:\n" + "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", t);
            }
            // proxy data on instance
            var n = Object.keys(e);
            var r = t.$options.props;
            var i = t.$options.methods;
            var a = n.length;
            while (a--) {
                var s = n[a];
                if (true) {
                    if (i && b(i, s)) {
                        X('method "' + s + '" has already been defined as a data property.', t);
                    }
                }
                if (r && b(r, s)) {
                    "development" !== "production" && X('The data property "' + s + '" is already declared as a prop. ' + "Use prop default value instead.", t);
                } else if (!U(s)) {
                    gn(t, "_data", s);
                }
            }
            // observe data
            Tt(e, true);
        }
        function Cn(t, e) {
            try {
                return t.call(e);
            } catch (t) {
                tt(t, e, "data()");
                return {};
            }
        }
        var kn = {
            lazy: true
        };
        function An(t, e) {
            "development" !== "production" && xn(t, "computed");
            var n = t._computedWatchers = Object.create(null);
            for (var r in e) {
                var i = e[r];
                var a = typeof i === "function" ? i : i.get;
                if ("development" !== "production" && a == null) {
                    X('Getter is missing for computed property "' + r + '".', t);
                }
                // create internal watcher for the computed property.
                n[r] = new dn(t, a || N, N, kn);
                // component-defined computed properties are already defined on the
                // component prototype. We only need to define computed properties defined
                // at instantiation here.
                if (!(r in t)) {
                    $n(t, r, i);
                } else if (true) {
                    if (r in t.$data) {
                        X('The computed property "' + r + '" is already defined in data.', t);
                    } else if (t.$options.props && r in t.$options.props) {
                        X('The computed property "' + r + '" is already defined as a prop.', t);
                    }
                }
            }
        }
        function $n(t, e, n) {
            if (typeof n === "function") {
                yn.get = Sn(e);
                yn.set = N;
            } else {
                yn.get = n.get ? n.cache !== false ? Sn(e) : n.get : N;
                yn.set = n.set ? n.set : N;
            }
            if ("development" !== "production" && yn.set === N) {
                yn.set = function() {
                    X('Computed property "' + e + '" was assigned to but it has no setter.', this);
                };
            }
            Object.defineProperty(t, e, yn);
        }
        function Sn(t) {
            return function e() {
                var n = this._computedWatchers && this._computedWatchers[t];
                if (n) {
                    if (n.dirty) {
                        n.evaluate();
                    }
                    if (wt.target) {
                        n.depend();
                    }
                    return n.value;
                }
            };
        }
        function Mn(t, e) {
            "development" !== "production" && xn(t, "methods");
            var n = t.$options.props;
            for (var r in e) {
                t[r] = e[r] == null ? N : $(e[r], t);
                if (true) {
                    if (e[r] == null) {
                        X('method "' + r + '" has an undefined value in the component definition. ' + "Did you reference the function correctly?", t);
                    }
                    if (n && b(n, r)) {
                        X('method "' + r + '" has already been defined as a prop.', t);
                    }
                }
            }
        }
        function On(t, e) {
            "development" !== "production" && xn(t, "watch");
            for (var n in e) {
                var r = e[n];
                if (Array.isArray(r)) {
                    for (var i = 0; i < r.length; i++) {
                        Nn(t, n, r[i]);
                    }
                } else {
                    Nn(t, n, r);
                }
            }
        }
        function Nn(t, e, n, r) {
            if (l(n)) {
                r = n;
                n = n.handler;
            }
            if (typeof n === "string") {
                n = t[n];
            }
            return t.$watch(e, n, r);
        }
        function Pn(t) {
            // flow somehow has problems with directly declared definition object
            // when using Object.defineProperty, so we have to procedurally build up
            // the object here.
            var e = {};
            e.get = function() {
                return this._data;
            };
            var n = {};
            n.get = function() {
                return this._props;
            };
            if (true) {
                e.set = function(t) {
                    X("Avoid replacing instance root $data. " + "Use nested data properties instead.", this);
                };
                n.set = function() {
                    X("$props is readonly.", this);
                };
            }
            Object.defineProperty(t.prototype, "$data", e);
            Object.defineProperty(t.prototype, "$props", n);
            t.prototype.$set = jt;
            t.prototype.$delete = Lt;
            t.prototype.$watch = function(t, e, n) {
                var r = this;
                if (l(e)) {
                    return Nn(r, t, e, n);
                }
                n = n || {};
                n.user = true;
                var i = new dn(r, t, e, n);
                if (n.immediate) {
                    e.call(r, i.value);
                }
                return function t() {
                    i.teardown();
                };
            };
        }
        /*  */
        function Tn(t) {
            var e = t.$options.provide;
            if (e) {
                t._provided = typeof e === "function" ? e.call(t) : e;
            }
        }
        function En(t) {
            var e = jn(t.$options.inject, t);
            if (e) {
                Mt.shouldConvert = false;
                Object.keys(e).forEach(function(n) {
                    /* istanbul ignore else */
                    if (true) {
                        Et(t, n, e[n], function() {
                            X("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + 'injection being mutated: "' + n + '"', t);
                        });
                    } else {
                        Et(t, n, e[n]);
                    }
                });
                Mt.shouldConvert = true;
            }
        }
        function jn(t, e) {
            if (t) {
                // inject is :any because flow is not smart enough to figure out cached
                var n = Object.create(null);
                var r = yt ? Reflect.ownKeys(t) : Object.keys(t);
                for (var i = 0; i < r.length; i++) {
                    var a = r[i];
                    var s = t[a];
                    var o = e;
                    while (o) {
                        if (o._provided && s in o._provided) {
                            n[a] = o._provided[s];
                            break;
                        }
                        o = o.$parent;
                    }
                    if ("development" !== "production" && !o) {
                        X('Injection "' + a + '" not found', e);
                    }
                }
                return n;
            }
        }
        /*  */
        function Ln(t, e, n, i, a) {
            var s = {};
            var o = t.options.props;
            if (r(o)) {
                for (var u in o) {
                    s[u] = Jt(u, o, e || {});
                }
            } else {
                if (r(n.attrs)) {
                    Fn(s, n.attrs);
                }
                if (r(n.props)) {
                    Fn(s, n.props);
                }
            }
            // ensure the createElement function in functional components
            // gets a unique context - this is necessary for correct named slot check
            var l = Object.create(i);
            var f = function(t, e, n, r) {
                return Xn(l, t, e, n, r, true);
            };
            var c = t.options.render.call(null, f, {
                data: n,
                props: s,
                children: a,
                parent: i,
                listeners: n.on || {},
                injections: jn(t.options.inject, i),
                slots: function() {
                    return De(a, i);
                }
            });
            if (c instanceof he) {
                c.functionalContext = i;
                c.functionalOptions = t.options;
                if (n.slot) {
                    (c.data || (c.data = {})).slot = n.slot;
                }
            }
            return c;
        }
        function Fn(t, e) {
            for (var n in e) {
                t[_(n)] = e[n];
            }
        }
        /*  */
        // hooks to be invoked on component VNodes during patch
        var In = {
            init: function t(e, n, r, i) {
                if (!e.componentInstance || e.componentInstance._isDestroyed) {
                    var a = e.componentInstance = Bn(e, Ve, r, i);
                    a.$mount(n ? e.elm : undefined, n);
                } else if (e.data.keepAlive) {
                    // kept-alive components, treat as a patch
                    var s = e;
                    // work around flow
                    In.prepatch(s, s);
                }
            },
            prepatch: function t(e, n) {
                var r = n.componentOptions;
                var i = n.componentInstance = e.componentInstance;
                Xe(i, r.propsData, // updated props
                r.listeners, // updated listeners
                n, // new parent vnode
                r.children);
            },
            insert: function t(e) {
                var n = e.context;
                var r = e.componentInstance;
                if (!r._isMounted) {
                    r._isMounted = true;
                    We(r, "mounted");
                }
                if (e.data.keepAlive) {
                    if (n._isMounted) {
                        // vue-router#1212
                        // During updates, a kept-alive component's child components may
                        // change, so directly walking the tree here may call activated hooks
                        // on incorrect children. Instead we push them into a queue which will
                        // be processed after the whole patch process ended.
                        ln(r);
                    } else {
                        Ge(r, true);
                    }
                }
            },
            destroy: function t(e) {
                var n = e.componentInstance;
                if (!n._isDestroyed) {
                    if (!e.data.keepAlive) {
                        n.$destroy();
                    } else {
                        Je(n, true);
                    }
                }
            }
        };
        var Dn = Object.keys(In);
        function Rn(t, e, a, s, u) {
            if (n(t)) {
                return;
            }
            var l = a.$options._base;
            // plain options object: turn it into a constructor
            if (o(t)) {
                t = l.extend(t);
            }
            // if at this stage it's not a constructor or an async component factory,
            // reject.
            if (typeof t !== "function") {
                if (true) {
                    X("Invalid Component definition: " + String(t), a);
                }
                return;
            }
            // async component
            var f;
            if (n(t.cid)) {
                f = t;
                t = Ne(f, l, a);
                if (t === undefined) {
                    // return a placeholder node for async component, which is rendered
                    // as a comment node but preserves all the raw information for the node.
                    // the information will be used for async server-rendering and hydration.
                    return Oe(f, e, a, s, u);
                }
            }
            e = e || {};
            // resolve constructor options in case global mixins are applied after
            // component constructor creation
            fr(t);
            // transform component v-model data into props & events
            if (r(e.model)) {
                qn(t.options, e);
            }
            // extract props
            var c = _e(e, t, u);
            // functional component
            if (i(t.options.functional)) {
                return Ln(t, c, e, a, s);
            }
            // extract listeners, since these needs to be treated as
            // child component listeners instead of DOM listeners
            var h = e.on;
            // replace with listeners with .native modifier
            // so it gets processed during parent component patch.
            e.on = e.nativeOn;
            if (i(t.options.abstract)) {
                // abstract components do not keep anything
                // other than props & listeners & slot
                // work around flow
                var d = e.slot;
                e = {};
                if (d) {
                    e.slot = d;
                }
            }
            // merge component management hooks onto the placeholder node
            Vn(e);
            // return a placeholder vnode
            var p = t.options.name || u;
            var v = new he("vue-component-" + t.cid + (p ? "-" + p : ""), e, undefined, undefined, undefined, a, {
                Ctor: t,
                propsData: c,
                listeners: h,
                tag: u,
                children: s
            }, f);
            return v;
        }
        function Bn(t, // we know it's MountedComponentVNode but flow doesn't
        e, // activeInstance in lifecycle state
        n, i) {
            var a = t.componentOptions;
            var s = {
                _isComponent: true,
                parent: e,
                propsData: a.propsData,
                _componentTag: a.tag,
                _parentVnode: t,
                _parentListeners: a.listeners,
                _renderChildren: a.children,
                _parentElm: n || null,
                _refElm: i || null
            };
            // check inline-template render functions
            var o = t.data.inlineTemplate;
            if (r(o)) {
                s.render = o.render;
                s.staticRenderFns = o.staticRenderFns;
            }
            return new a.Ctor(s);
        }
        function Vn(t) {
            if (!t.hook) {
                t.hook = {};
            }
            for (var e = 0; e < Dn.length; e++) {
                var n = Dn[e];
                var r = t.hook[n];
                var i = In[n];
                t.hook[n] = r ? Un(i, r) : i;
            }
        }
        function Un(t, e) {
            return function(n, r, i, a) {
                t(n, r, i, a);
                e(n, r, i, a);
            };
        }
        // transform component v-model info (value and callback) into
        // prop and event handler respectively.
        function qn(t, e) {
            var n = t.model && t.model.prop || "value";
            var i = t.model && t.model.event || "input";
            (e.props || (e.props = {}))[n] = e.model.value;
            var a = e.on || (e.on = {});
            if (r(a[i])) {
                a[i] = [ e.model.callback ].concat(a[i]);
            } else {
                a[i] = e.model.callback;
            }
        }
        /*  */
        var zn = 1;
        var Hn = 2;
        // wrapper function for providing a more flexible interface
        // without getting yelled at by flow
        function Xn(t, e, n, r, a, o) {
            if (Array.isArray(n) || s(n)) {
                a = r;
                r = n;
                n = undefined;
            }
            if (i(o)) {
                a = Hn;
            }
            return Yn(t, e, n, r, a);
        }
        function Yn(t, e, n, i, a) {
            if (r(n) && r(n.__ob__)) {
                "development" !== "production" && X("Avoid using observed data object as vnode data: " + JSON.stringify(n) + "\n" + "Always create fresh vnode data objects in each render!", t);
                return pe();
            }
            // object syntax in v-bind
            if (r(n) && r(n.is)) {
                e = n.is;
            }
            if (!e) {
                // in case of component :is set to falsy value
                return pe();
            }
            // warn against non-primitive key
            if ("development" !== "production" && r(n) && r(n.key) && !s(n.key)) {
                X("Avoid using non-primitive value as key, " + "use string/number value instead.", t);
            }
            // support single function children as default scoped slot
            if (Array.isArray(i) && typeof i[0] === "function") {
                n = n || {};
                n.scopedSlots = {
                    default: i[0]
                };
                i.length = 0;
            }
            if (a === Hn) {
                i = Ae(i);
            } else if (a === zn) {
                i = ke(i);
            }
            var o, u;
            if (typeof e === "string") {
                var l;
                u = B.getTagNamespace(e);
                if (B.isReservedTag(e)) {
                    // platform built-in elements
                    o = new he(B.parsePlatformTagName(e), n, i, undefined, undefined, t);
                } else if (r(l = Gt(t.$options, "components", e))) {
                    // component
                    o = Rn(l, n, t, i, e);
                } else {
                    // unknown or unlisted namespaced elements
                    // check at runtime because it may get assigned a namespace when its
                    // parent normalizes children
                    o = new he(e, n, i, undefined, undefined, t);
                }
            } else {
                // direct component options / constructor
                o = Rn(e, n, t, i);
            }
            if (r(o)) {
                if (u) {
                    Gn(o, u);
                }
                return o;
            } else {
                return pe();
            }
        }
        function Gn(t, e) {
            t.ns = e;
            if (t.tag === "foreignObject") {
                // use default namespace inside foreignObject
                return;
            }
            if (r(t.children)) {
                for (var i = 0, a = t.children.length; i < a; i++) {
                    var s = t.children[i];
                    if (r(s.tag) && n(s.ns)) {
                        Gn(s, e);
                    }
                }
            }
        }
        /*  */
        /**
 * Runtime helper for rendering v-for lists.
 */
        function Jn(t, e) {
            var n, i, a, s, u;
            if (Array.isArray(t) || typeof t === "string") {
                n = new Array(t.length);
                for (i = 0, a = t.length; i < a; i++) {
                    n[i] = e(t[i], i);
                }
            } else if (typeof t === "number") {
                n = new Array(t);
                for (i = 0; i < t; i++) {
                    n[i] = e(i + 1, i);
                }
            } else if (o(t)) {
                s = Object.keys(t);
                n = new Array(s.length);
                for (i = 0, a = s.length; i < a; i++) {
                    u = s[i];
                    n[i] = e(t[u], u, i);
                }
            }
            if (r(n)) {
                n._isVList = true;
            }
            return n;
        }
        /*  */
        /**
 * Runtime helper for rendering <slot>
 */
        function Wn(t, e, n, r) {
            var i = this.$scopedSlots[t];
            if (i) {
                // scoped slot
                n = n || {};
                if (r) {
                    n = M(M({}, r), n);
                }
                return i(n) || e;
            } else {
                var a = this.$slots[t];
                // warn duplicate slot usage
                if (a && "development" !== "production") {
                    a._rendered && X('Duplicate presence of slot "' + t + '" found in the same render tree ' + "- this will likely cause render errors.", this);
                    a._rendered = true;
                }
                return a || e;
            }
        }
        /*  */
        /**
 * Runtime helper for resolving filters
 */
        function Kn(t) {
            return Gt(this.$options, "filters", t, true) || T;
        }
        /*  */
        /**
 * Runtime helper for checking keyCodes from config.
 */
        function Zn(t, e, n) {
            var r = B.keyCodes[e] || n;
            if (Array.isArray(r)) {
                return r.indexOf(t) === -1;
            } else {
                return r !== t;
            }
        }
        /*  */
        /**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
        function Qn(t, e, n, r, i) {
            if (n) {
                if (!o(n)) {
                    "development" !== "production" && X("v-bind without argument expects an Object or Array value", this);
                } else {
                    if (Array.isArray(n)) {
                        n = O(n);
                    }
                    var a;
                    var s = function(s) {
                        if (s === "class" || s === "style" || m(s)) {
                            a = t;
                        } else {
                            var o = t.attrs && t.attrs.type;
                            a = r || B.mustUseProp(e, o, s) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                        }
                        if (!(s in a)) {
                            a[s] = n[s];
                            if (i) {
                                var u = t.on || (t.on = {});
                                u["update:" + s] = function(t) {
                                    n[s] = t;
                                };
                            }
                        }
                    };
                    for (var u in n) s(u);
                }
            }
            return t;
        }
        /*  */
        /**
 * Runtime helper for rendering static trees.
 */
        function tr(t, e) {
            var n = this._staticTrees[t];
            // if has already-rendered static tree and not inside v-for,
            // we can reuse the same tree by doing a shallow clone.
            if (n && !e) {
                return Array.isArray(n) ? ye(n) : me(n);
            }
            // otherwise, render a fresh tree.
            n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy);
            nr(n, "__static__" + t, false);
            return n;
        }
        /**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
        function er(t, e, n) {
            nr(t, "__once__" + e + (n ? "_" + n : ""), true);
            return t;
        }
        function nr(t, e, n) {
            if (Array.isArray(t)) {
                for (var r = 0; r < t.length; r++) {
                    if (t[r] && typeof t[r] !== "string") {
                        rr(t[r], e + "_" + r, n);
                    }
                }
            } else {
                rr(t, e, n);
            }
        }
        function rr(t, e, n) {
            t.isStatic = true;
            t.key = e;
            t.isOnce = n;
        }
        /*  */
        function ir(t, e) {
            if (e) {
                if (!l(e)) {
                    "development" !== "production" && X("v-on without argument expects an Object value", this);
                } else {
                    var n = t.on = t.on ? M({}, t.on) : {};
                    for (var r in e) {
                        var i = n[r];
                        var a = e[r];
                        n[r] = i ? [].concat(a, i) : a;
                    }
                }
            }
            return t;
        }
        /*  */
        function ar(t) {
            t._vnode = null;
            // the root of the child tree
            t._staticTrees = null;
            var e = t.$vnode = t.$options._parentVnode;
            // the placeholder node in parent tree
            var n = e && e.context;
            t.$slots = De(t.$options._renderChildren, n);
            t.$scopedSlots = V;
            // bind the createElement fn to this instance
            // so that we get proper render context inside it.
            // args order: tag, data, children, normalizationType, alwaysNormalize
            // internal version is used by render functions compiled from templates
            t._c = function(e, n, r, i) {
                return Xn(t, e, n, r, i, false);
            };
            // normalization is always applied for the public version, used in
            // user-written render functions.
            t.$createElement = function(e, n, r, i) {
                return Xn(t, e, n, r, i, true);
            };
            // $attrs & $listeners are exposed for easier HOC creation.
            // they need to be reactive so that HOCs using them are always updated
            var r = e && e.data;
            /* istanbul ignore else */
            if (true) {
                Et(t, "$attrs", r && r.attrs, function() {
                    !Ue && X("$attrs is readonly.", t);
                }, true);
                Et(t, "$listeners", t.$options._parentListeners, function() {
                    !Ue && X("$listeners is readonly.", t);
                }, true);
            } else {
                Et(t, "$attrs", r && r.attrs, null, true);
                Et(t, "$listeners", t.$options._parentListeners, null, true);
            }
        }
        function sr(t) {
            t.prototype.$nextTick = function(t) {
                return gt(t, this);
            };
            t.prototype._render = function() {
                var t = this;
                var e = t.$options;
                var n = e.render;
                var r = e.staticRenderFns;
                var i = e._parentVnode;
                if (t._isMounted) {
                    // clone slot nodes on re-renders
                    for (var a in t.$slots) {
                        t.$slots[a] = ye(t.$slots[a]);
                    }
                }
                t.$scopedSlots = i && i.data.scopedSlots || V;
                if (r && !t._staticTrees) {
                    t._staticTrees = [];
                }
                // set parent vnode. this allows render functions to have access
                // to the data on the placeholder node.
                t.$vnode = i;
                // render self
                var s;
                try {
                    s = n.call(t._renderProxy, t.$createElement);
                } catch (e) {
                    tt(e, t, "render function");
                    // return error render result,
                    // or previous vnode to prevent render error causing blank component
                    /* istanbul ignore else */
                    if (true) {
                        s = t.$options.renderError ? t.$options.renderError.call(t._renderProxy, t.$createElement, e) : t._vnode;
                    } else {
                        s = t._vnode;
                    }
                }
                // return empty vnode in case the render function errored out
                if (!(s instanceof he)) {
                    if ("development" !== "production" && Array.isArray(s)) {
                        X("Multiple root nodes returned from render function. Render function " + "should return a single root node.", t);
                    }
                    s = pe();
                }
                // set parent
                s.parent = i;
                return s;
            };
            // internal render helpers.
            // these are exposed on the instance prototype to reduce generated render
            // code size.
            t.prototype._o = er;
            t.prototype._n = d;
            t.prototype._s = h;
            t.prototype._l = Jn;
            t.prototype._t = Wn;
            t.prototype._q = j;
            t.prototype._i = L;
            t.prototype._m = tr;
            t.prototype._f = Kn;
            t.prototype._k = Zn;
            t.prototype._b = Qn;
            t.prototype._v = ve;
            t.prototype._e = pe;
            t.prototype._u = Be;
            t.prototype._g = ir;
        }
        /*  */
        var or = 0;
        function ur(t) {
            t.prototype._init = function(t) {
                var e = this;
                // a uid
                e._uid = or++;
                var n, r;
                /* istanbul ignore if */
                if ("development" !== "production" && B.performance && ne) {
                    n = "vue-perf-init:" + e._uid;
                    r = "vue-perf-end:" + e._uid;
                    ne(n);
                }
                // a flag to avoid this being observed
                e._isVue = true;
                // merge options
                if (t && t._isComponent) {
                    // optimize internal component instantiation
                    // since dynamic options merging is pretty slow, and none of the
                    // internal component options needs special treatment.
                    lr(e, t);
                } else {
                    e.$options = Yt(fr(e.constructor), t || {}, e);
                }
                /* istanbul ignore else */
                if (true) {
                    ae(e);
                } else {
                    e._renderProxy = e;
                }
                // expose real self
                e._self = e;
                qe(e);
                Te(e);
                ar(e);
                We(e, "beforeCreate");
                En(e);
                // resolve injections before data/props
                bn(e);
                Tn(e);
                // resolve provide after data/props
                We(e, "created");
                /* istanbul ignore if */
                if ("development" !== "production" && B.performance && ne) {
                    e._name = G(e, false);
                    ne(r);
                    re(e._name + " init", n, r);
                }
                if (e.$options.el) {
                    e.$mount(e.$options.el);
                }
            };
        }
        function lr(t, e) {
            var n = t.$options = Object.create(t.constructor.options);
            // doing this because it's faster than dynamic enumeration.
            n.parent = e.parent;
            n.propsData = e.propsData;
            n._parentVnode = e._parentVnode;
            n._parentListeners = e._parentListeners;
            n._renderChildren = e._renderChildren;
            n._componentTag = e._componentTag;
            n._parentElm = e._parentElm;
            n._refElm = e._refElm;
            if (e.render) {
                n.render = e.render;
                n.staticRenderFns = e.staticRenderFns;
            }
        }
        function fr(t) {
            var e = t.options;
            if (t.super) {
                var n = fr(t.super);
                var r = t.superOptions;
                if (n !== r) {
                    // super option changed,
                    // need to resolve new options.
                    t.superOptions = n;
                    // check if there are any late-modified/attached options (#4976)
                    var i = cr(t);
                    // update base extend options
                    if (i) {
                        M(t.extendOptions, i);
                    }
                    e = t.options = Yt(n, t.extendOptions);
                    if (e.name) {
                        e.components[e.name] = t;
                    }
                }
            }
            return e;
        }
        function cr(t) {
            var e;
            var n = t.options;
            var r = t.extendOptions;
            var i = t.sealedOptions;
            for (var a in n) {
                if (n[a] !== i[a]) {
                    if (!e) {
                        e = {};
                    }
                    e[a] = hr(n[a], r[a], i[a]);
                }
            }
            return e;
        }
        function hr(t, e, n) {
            // compare latest and sealed to ensure lifecycle hooks won't be duplicated
            // between merges
            if (Array.isArray(t)) {
                var r = [];
                n = Array.isArray(n) ? n : [ n ];
                e = Array.isArray(e) ? e : [ e ];
                for (var i = 0; i < t.length; i++) {
                    // push original options and not sealed options to exclude duplicated options
                    if (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) {
                        r.push(t[i]);
                    }
                }
                return r;
            } else {
                return t;
            }
        }
        function dr(t) {
            if ("development" !== "production" && !(this instanceof dr)) {
                X("Vue is a constructor and should be called with the `new` keyword");
            }
            this._init(t);
        }
        ur(dr);
        Pn(dr);
        Ie(dr);
        ze(dr);
        sr(dr);
        /*  */
        function pr(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) {
                    return this;
                }
                // additional parameters
                var n = S(arguments, 1);
                n.unshift(this);
                if (typeof t.install === "function") {
                    t.install.apply(t, n);
                } else if (typeof t === "function") {
                    t.apply(null, n);
                }
                e.push(t);
                return this;
            };
        }
        /*  */
        function vr(t) {
            t.mixin = function(t) {
                this.options = Yt(this.options, t);
                return this;
            };
        }
        /*  */
        function mr(t) {
            /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
            t.cid = 0;
            var e = 1;
            /**
   * Class inheritance
   */
            t.extend = function(t) {
                t = t || {};
                var n = this;
                var r = n.cid;
                var i = t._Ctor || (t._Ctor = {});
                if (i[r]) {
                    return i[r];
                }
                var a = t.name || n.options.name;
                if (true) {
                    if (!/^[a-zA-Z][\w-]*$/.test(a)) {
                        X('Invalid component name: "' + a + '". Component names ' + "can only contain alphanumeric characters and the hyphen, " + "and must start with a letter.");
                    }
                }
                var s = function t(e) {
                    this._init(e);
                };
                s.prototype = Object.create(n.prototype);
                s.prototype.constructor = s;
                s.cid = e++;
                s.options = Yt(n.options, t);
                s["super"] = n;
                // For props and computed properties, we define the proxy getters on
                // the Vue instances at extension time, on the extended prototype. This
                // avoids Object.defineProperty calls for each instance created.
                if (s.options.props) {
                    yr(s);
                }
                if (s.options.computed) {
                    gr(s);
                }
                // allow further extension/mixin/plugin usage
                s.extend = n.extend;
                s.mixin = n.mixin;
                s.use = n.use;
                // create asset registers, so extended classes
                // can have their private assets too.
                D.forEach(function(t) {
                    s[t] = n[t];
                });
                // enable recursive self-lookup
                if (a) {
                    s.options.components[a] = s;
                }
                // keep a reference to the super options at extension time.
                // later at instantiation we can check if Super's options have
                // been updated.
                s.superOptions = n.options;
                s.extendOptions = t;
                s.sealedOptions = M({}, s.options);
                // cache constructor
                i[r] = s;
                return s;
            };
        }
        function yr(t) {
            var e = t.options.props;
            for (var n in e) {
                gn(t.prototype, "_props", n);
            }
        }
        function gr(t) {
            var e = t.options.computed;
            for (var n in e) {
                $n(t.prototype, n, e[n]);
            }
        }
        /*  */
        function br(t) {
            /**
   * Create asset registration methods.
   */
            D.forEach(function(e) {
                t[e] = function(t, n) {
                    if (!n) {
                        return this.options[e + "s"][t];
                    } else {
                        /* istanbul ignore if */
                        if (true) {
                            if (e === "component" && B.isReservedTag(t)) {
                                X("Do not use built-in or reserved HTML elements as component " + "id: " + t);
                            }
                        }
                        if (e === "component" && l(n)) {
                            n.name = n.name || t;
                            n = this.options._base.extend(n);
                        }
                        if (e === "directive" && typeof n === "function") {
                            n = {
                                bind: n,
                                update: n
                            };
                        }
                        this.options[e + "s"][t] = n;
                        return n;
                    }
                };
            });
        }
        /*  */
        var xr = [ String, RegExp, Array ];
        function wr(t) {
            return t && (t.Ctor.options.name || t.tag);
        }
        function _r(t, e) {
            if (Array.isArray(t)) {
                return t.indexOf(e) > -1;
            } else if (typeof t === "string") {
                return t.split(",").indexOf(e) > -1;
            } else if (f(t)) {
                return t.test(e);
            }
            /* istanbul ignore next */
            return false;
        }
        function Cr(t, e, n) {
            for (var r in t) {
                var i = t[r];
                if (i) {
                    var a = wr(i.componentOptions);
                    if (a && !n(a)) {
                        if (i !== e) {
                            kr(i);
                        }
                        t[r] = null;
                    }
                }
            }
        }
        function kr(t) {
            if (t) {
                t.componentInstance.$destroy();
            }
        }
        var Ar = {
            name: "keep-alive",
            abstract: true,
            props: {
                include: xr,
                exclude: xr
            },
            created: function t() {
                this.cache = Object.create(null);
            },
            destroyed: function t() {
                var e = this;
                for (var n in e.cache) {
                    kr(e.cache[n]);
                }
            },
            watch: {
                include: function t(e) {
                    Cr(this.cache, this._vnode, function(t) {
                        return _r(e, t);
                    });
                },
                exclude: function t(e) {
                    Cr(this.cache, this._vnode, function(t) {
                        return !_r(e, t);
                    });
                }
            },
            render: function t() {
                var e = Pe(this.$slots.default);
                var n = e && e.componentOptions;
                if (n) {
                    // check pattern
                    var r = wr(n);
                    if (r && (this.include && !_r(this.include, r) || this.exclude && _r(this.exclude, r))) {
                        return e;
                    }
                    var i = e.key == null ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    if (this.cache[i]) {
                        e.componentInstance = this.cache[i].componentInstance;
                    } else {
                        this.cache[i] = e;
                    }
                    e.data.keepAlive = true;
                }
                return e;
            }
        };
        var $r = {
            KeepAlive: Ar
        };
        /*  */
        function Sr(t) {
            // config
            var e = {};
            e.get = function() {
                return B;
            };
            if (true) {
                e.set = function() {
                    X("Do not replace the Vue.config object, set individual fields instead.");
                };
            }
            Object.defineProperty(t, "config", e);
            // exposed util methods.
            // NOTE: these are not considered part of the public API - avoid relying on
            // them unless you are aware of the risk.
            t.util = {
                warn: X,
                extend: M,
                mergeOptions: Yt,
                defineReactive: Et
            };
            t.set = jt;
            t.delete = Lt;
            t.nextTick = gt;
            t.options = Object.create(null);
            D.forEach(function(e) {
                t.options[e + "s"] = Object.create(null);
            });
            // this is used to identify the "base" constructor to extend all plain-object
            // components with in Weex's multi-instance scenarios.
            t.options._base = t;
            M(t.options.components, $r);
            pr(t);
            vr(t);
            mr(t);
            br(t);
        }
        Sr(dr);
        Object.defineProperty(dr.prototype, "$isServer", {
            get: pt
        });
        Object.defineProperty(dr.prototype, "$ssrContext", {
            get: function t() {
                /* istanbul ignore next */
                return this.$vnode && this.$vnode.ssrContext;
            }
        });
        dr.version = "2.4.2";
        /*  */
        // these are reserved for web because they are directly compiled away
        // during template compilation
        var Mr = p("style,class");
        // attributes that should be using props for binding
        var Or = p("input,textarea,option,select");
        var Nr = function(t, e, n) {
            return n === "value" && Or(t) && e !== "button" || n === "selected" && t === "option" || n === "checked" && t === "input" || n === "muted" && t === "video";
        };
        var Pr = p("contenteditable,draggable,spellcheck");
        var Tr = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," + "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," + "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," + "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," + "required,reversed,scoped,seamless,selected,sortable,translate," + "truespeed,typemustmatch,visible");
        var Er = "http://www.w3.org/1999/xlink";
        var jr = function(t) {
            return t.charAt(5) === ":" && t.slice(0, 5) === "xlink";
        };
        var Lr = function(t) {
            return jr(t) ? t.slice(6, t.length) : "";
        };
        var Fr = function(t) {
            return t == null || t === false;
        };
        /*  */
        function Ir(t) {
            var e = t.data;
            var n = t;
            var i = t;
            while (r(i.componentInstance)) {
                i = i.componentInstance._vnode;
                if (i.data) {
                    e = Dr(i.data, e);
                }
            }
            while (r(n = n.parent)) {
                if (n.data) {
                    e = Dr(e, n.data);
                }
            }
            return Rr(e.staticClass, e.class);
        }
        function Dr(t, e) {
            return {
                staticClass: Br(t.staticClass, e.staticClass),
                class: r(t.class) ? [ t.class, e.class ] : e.class
            };
        }
        function Rr(t, e) {
            if (r(t) || r(e)) {
                return Br(t, Vr(e));
            }
            /* istanbul ignore next */
            return "";
        }
        function Br(t, e) {
            return t ? e ? t + " " + e : t : e || "";
        }
        function Vr(t) {
            if (Array.isArray(t)) {
                return Ur(t);
            }
            if (o(t)) {
                return qr(t);
            }
            if (typeof t === "string") {
                return t;
            }
            /* istanbul ignore next */
            return "";
        }
        function Ur(t) {
            var e = "";
            var n;
            for (var i = 0, a = t.length; i < a; i++) {
                if (r(n = Vr(t[i])) && n !== "") {
                    if (e) {
                        e += " ";
                    }
                    e += n;
                }
            }
            return e;
        }
        function qr(t) {
            var e = "";
            for (var n in t) {
                if (t[n]) {
                    if (e) {
                        e += " ";
                    }
                    e += n;
                }
            }
            return e;
        }
        /*  */
        var zr = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        };
        var Hr = p("html,body,base,head,link,meta,style,title," + "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," + "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," + "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," + "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," + "embed,object,param,source,canvas,script,noscript,del,ins," + "caption,col,colgroup,table,thead,tbody,td,th,tr," + "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," + "output,progress,select,textarea," + "details,dialog,menu,menuitem,summary," + "content,element,shadow,template,blockquote,iframe,tfoot");
        // this map is intentionally selective, only covering SVG elements that may
        // contain child elements.
        var Xr = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," + "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," + "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var Yr = function(t) {
            return t === "pre";
        };
        var Gr = function(t) {
            return Hr(t) || Xr(t);
        };
        function Jr(t) {
            if (Xr(t)) {
                return "svg";
            }
            // basic support for MathML
            // note it doesn't support other MathML elements being component roots
            if (t === "math") {
                return "math";
            }
        }
        var Wr = Object.create(null);
        function Kr(t) {
            /* istanbul ignore if */
            if (!nt) {
                return true;
            }
            if (Gr(t)) {
                return false;
            }
            t = t.toLowerCase();
            /* istanbul ignore if */
            if (Wr[t] != null) {
                return Wr[t];
            }
            var e = document.createElement(t);
            if (t.indexOf("-") > -1) {
                // http://stackoverflow.com/a/28210364/1070244
                return Wr[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement;
            } else {
                return Wr[t] = /HTMLUnknownElement/.test(e.toString());
            }
        }
        /*  */
        /**
 * Query an element selector if it's not an element already.
 */
        function Zr(t) {
            if (typeof t === "string") {
                var e = document.querySelector(t);
                if (!e) {
                    "development" !== "production" && X("Cannot find element: " + t);
                    return document.createElement("div");
                }
                return e;
            } else {
                return t;
            }
        }
        /*  */
        function Qr(t, e) {
            var n = document.createElement(t);
            if (t !== "select") {
                return n;
            }
            // false or null will remove the attribute but undefined will not
            if (e.data && e.data.attrs && e.data.attrs.multiple !== undefined) {
                n.setAttribute("multiple", "multiple");
            }
            return n;
        }
        function ti(t, e) {
            return document.createElementNS(zr[t], e);
        }
        function ei(t) {
            return document.createTextNode(t);
        }
        function ni(t) {
            return document.createComment(t);
        }
        function ri(t, e, n) {
            t.insertBefore(e, n);
        }
        function ii(t, e) {
            t.removeChild(e);
        }
        function ai(t, e) {
            t.appendChild(e);
        }
        function si(t) {
            return t.parentNode;
        }
        function oi(t) {
            return t.nextSibling;
        }
        function ui(t) {
            return t.tagName;
        }
        function li(t, e) {
            t.textContent = e;
        }
        function fi(t, e, n) {
            t.setAttribute(e, n);
        }
        var ci = Object.freeze({
            createElement: Qr,
            createElementNS: ti,
            createTextNode: ei,
            createComment: ni,
            insertBefore: ri,
            removeChild: ii,
            appendChild: ai,
            parentNode: si,
            nextSibling: oi,
            tagName: ui,
            setTextContent: li,
            setAttribute: fi
        });
        /*  */
        var hi = {
            create: function t(e, n) {
                di(n);
            },
            update: function t(e, n) {
                if (e.data.ref !== n.data.ref) {
                    di(e, true);
                    di(n);
                }
            },
            destroy: function t(e) {
                di(e, true);
            }
        };
        function di(t, e) {
            var n = t.data.ref;
            if (!n) {
                return;
            }
            var r = t.context;
            var i = t.componentInstance || t.elm;
            var a = r.$refs;
            if (e) {
                if (Array.isArray(a[n])) {
                    y(a[n], i);
                } else if (a[n] === i) {
                    a[n] = undefined;
                }
            } else {
                if (t.data.refInFor) {
                    if (!Array.isArray(a[n])) {
                        a[n] = [ i ];
                    } else if (a[n].indexOf(i) < 0) {
                        // $flow-disable-line
                        a[n].push(i);
                    }
                } else {
                    a[n] = i;
                }
            }
        }
        /**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
        var pi = new he("", {}, []);
        var vi = [ "create", "activate", "update", "remove", "destroy" ];
        function mi(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && r(t.data) === r(e.data) && yi(t, e) || i(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && n(e.asyncFactory.error));
        }
        // Some browsers do not support dynamically changing type for <input>
        // so they need to be treated as different nodes
        function yi(t, e) {
            if (t.tag !== "input") {
                return true;
            }
            var n;
            var i = r(n = t.data) && r(n = n.attrs) && n.type;
            var a = r(n = e.data) && r(n = n.attrs) && n.type;
            return i === a;
        }
        function gi(t, e, n) {
            var i, a;
            var s = {};
            for (i = e; i <= n; ++i) {
                a = t[i].key;
                if (r(a)) {
                    s[a] = i;
                }
            }
            return s;
        }
        function bi(t) {
            var e, a;
            var o = {};
            var u = t.modules;
            var l = t.nodeOps;
            for (e = 0; e < vi.length; ++e) {
                o[vi[e]] = [];
                for (a = 0; a < u.length; ++a) {
                    if (r(u[a][vi[e]])) {
                        o[vi[e]].push(u[a][vi[e]]);
                    }
                }
            }
            function f(t) {
                return new he(l.tagName(t).toLowerCase(), {}, [], undefined, t);
            }
            function c(t, e) {
                function n() {
                    if (--n.listeners === 0) {
                        h(t);
                    }
                }
                n.listeners = e;
                return n;
            }
            function h(t) {
                var e = l.parentNode(t);
                // element may have already been removed due to v-html / v-text
                if (r(e)) {
                    l.removeChild(e, t);
                }
            }
            var d = 0;
            function v(t, e, n, a, s) {
                t.isRootInsert = !s;
                // for transition enter check
                if (m(t, e, n, a)) {
                    return;
                }
                var o = t.data;
                var u = t.children;
                var f = t.tag;
                if (r(f)) {
                    if (true) {
                        if (o && o.pre) {
                            d++;
                        }
                        if (!d && !t.ns && !(B.ignoredElements.length && B.ignoredElements.indexOf(f) > -1) && B.isUnknownElement(f)) {
                            X("Unknown custom element: <" + f + "> - did you " + "register the component correctly? For recursive components, " + 'make sure to provide the "name" option.', t.context);
                        }
                    }
                    t.elm = t.ns ? l.createElementNS(t.ns, f) : l.createElement(f, t);
                    C(t);
                    /* istanbul ignore if */
                    {
                        x(t, u, e);
                        if (r(o)) {
                            _(t, e);
                        }
                        b(n, t.elm, a);
                    }
                    if ("development" !== "production" && o && o.pre) {
                        d--;
                    }
                } else if (i(t.isComment)) {
                    t.elm = l.createComment(t.text);
                    b(n, t.elm, a);
                } else {
                    t.elm = l.createTextNode(t.text);
                    b(n, t.elm, a);
                }
            }
            function m(t, e, n, a) {
                var s = t.data;
                if (r(s)) {
                    var o = r(t.componentInstance) && s.keepAlive;
                    if (r(s = s.hook) && r(s = s.init)) {
                        s(t, false, n, a);
                    }
                    // after calling the init hook, if the vnode is a child component
                    // it should've created a child instance and mounted it. the child
                    // component also has set the placeholder vnode's elm.
                    // in that case we can just return the element and be done.
                    if (r(t.componentInstance)) {
                        y(t, e);
                        if (i(o)) {
                            g(t, e, n, a);
                        }
                        return true;
                    }
                }
            }
            function y(t, e) {
                if (r(t.data.pendingInsert)) {
                    e.push.apply(e, t.data.pendingInsert);
                    t.data.pendingInsert = null;
                }
                t.elm = t.componentInstance.$el;
                if (w(t)) {
                    _(t, e);
                    C(t);
                } else {
                    // empty component root.
                    // skip all element-related modules except for ref (#3455)
                    di(t);
                    // make sure to invoke the insert hook
                    e.push(t);
                }
            }
            function g(t, e, n, i) {
                var a;
                // hack for #4339: a reactivated component with inner transition
                // does not trigger because the inner node's created hooks are not called
                // again. It's not ideal to involve module-specific logic in here but
                // there doesn't seem to be a better way to do it.
                var s = t;
                while (s.componentInstance) {
                    s = s.componentInstance._vnode;
                    if (r(a = s.data) && r(a = a.transition)) {
                        for (a = 0; a < o.activate.length; ++a) {
                            o.activate[a](pi, s);
                        }
                        e.push(s);
                        break;
                    }
                }
                // unlike a newly created component,
                // a reactivated keep-alive component doesn't insert itself
                b(n, t.elm, i);
            }
            function b(t, e, n) {
                if (r(t)) {
                    if (r(n)) {
                        if (n.parentNode === t) {
                            l.insertBefore(t, e, n);
                        }
                    } else {
                        l.appendChild(t, e);
                    }
                }
            }
            function x(t, e, n) {
                if (Array.isArray(e)) {
                    for (var r = 0; r < e.length; ++r) {
                        v(e[r], n, t.elm, null, true);
                    }
                } else if (s(t.text)) {
                    l.appendChild(t.elm, l.createTextNode(t.text));
                }
            }
            function w(t) {
                while (t.componentInstance) {
                    t = t.componentInstance._vnode;
                }
                return r(t.tag);
            }
            function _(t, n) {
                for (var i = 0; i < o.create.length; ++i) {
                    o.create[i](pi, t);
                }
                e = t.data.hook;
                // Reuse variable
                if (r(e)) {
                    if (r(e.create)) {
                        e.create(pi, t);
                    }
                    if (r(e.insert)) {
                        n.push(t);
                    }
                }
            }
            // set scope id attribute for scoped CSS.
            // this is implemented as a special case to avoid the overhead
            // of going through the normal attribute patching process.
            function C(t) {
                var e;
                var n = t;
                while (n) {
                    if (r(e = n.context) && r(e = e.$options._scopeId)) {
                        l.setAttribute(t.elm, e, "");
                    }
                    n = n.parent;
                }
                // for slot content they should also get the scopeId from the host instance.
                if (r(e = Ve) && e !== t.context && r(e = e.$options._scopeId)) {
                    l.setAttribute(t.elm, e, "");
                }
            }
            function k(t, e, n, r, i, a) {
                for (;r <= i; ++r) {
                    v(n[r], a, t, e);
                }
            }
            function A(t) {
                var e, n;
                var i = t.data;
                if (r(i)) {
                    if (r(e = i.hook) && r(e = e.destroy)) {
                        e(t);
                    }
                    for (e = 0; e < o.destroy.length; ++e) {
                        o.destroy[e](t);
                    }
                }
                if (r(e = t.children)) {
                    for (n = 0; n < t.children.length; ++n) {
                        A(t.children[n]);
                    }
                }
            }
            function $(t, e, n, i) {
                for (;n <= i; ++n) {
                    var a = e[n];
                    if (r(a)) {
                        if (r(a.tag)) {
                            S(a);
                            A(a);
                        } else {
                            // Text node
                            h(a.elm);
                        }
                    }
                }
            }
            function S(t, e) {
                if (r(e) || r(t.data)) {
                    var n;
                    var i = o.remove.length + 1;
                    if (r(e)) {
                        // we have a recursively passed down rm callback
                        // increase the listeners count
                        e.listeners += i;
                    } else {
                        // directly removing
                        e = c(t.elm, i);
                    }
                    // recursively invoke hooks on child component root node
                    if (r(n = t.componentInstance) && r(n = n._vnode) && r(n.data)) {
                        S(n, e);
                    }
                    for (n = 0; n < o.remove.length; ++n) {
                        o.remove[n](t, e);
                    }
                    if (r(n = t.data.hook) && r(n = n.remove)) {
                        n(t, e);
                    } else {
                        e();
                    }
                } else {
                    h(t.elm);
                }
            }
            function M(t, e, i, a, s) {
                var o = 0;
                var u = 0;
                var f = e.length - 1;
                var c = e[0];
                var h = e[f];
                var d = i.length - 1;
                var p = i[0];
                var m = i[d];
                var y, g, b, x;
                // removeOnly is a special flag used only by <transition-group>
                // to ensure removed elements stay in correct relative positions
                // during leaving transitions
                var w = !s;
                while (o <= f && u <= d) {
                    if (n(c)) {
                        c = e[++o];
                    } else if (n(h)) {
                        h = e[--f];
                    } else if (mi(c, p)) {
                        O(c, p, a);
                        c = e[++o];
                        p = i[++u];
                    } else if (mi(h, m)) {
                        O(h, m, a);
                        h = e[--f];
                        m = i[--d];
                    } else if (mi(c, m)) {
                        // Vnode moved right
                        O(c, m, a);
                        w && l.insertBefore(t, c.elm, l.nextSibling(h.elm));
                        c = e[++o];
                        m = i[--d];
                    } else if (mi(h, p)) {
                        // Vnode moved left
                        O(h, p, a);
                        w && l.insertBefore(t, h.elm, c.elm);
                        h = e[--f];
                        p = i[++u];
                    } else {
                        if (n(y)) {
                            y = gi(e, o, f);
                        }
                        g = r(p.key) ? y[p.key] : null;
                        if (n(g)) {
                            // New element
                            v(p, a, t, c.elm);
                            p = i[++u];
                        } else {
                            b = e[g];
                            /* istanbul ignore if */
                            if ("development" !== "production" && !b) {
                                X("It seems there are duplicate keys that is causing an update error. " + "Make sure each v-for item has a unique key.");
                            }
                            if (mi(b, p)) {
                                O(b, p, a);
                                e[g] = undefined;
                                w && l.insertBefore(t, b.elm, c.elm);
                                p = i[++u];
                            } else {
                                // same key but different element. treat as new element
                                v(p, a, t, c.elm);
                                p = i[++u];
                            }
                        }
                    }
                }
                if (o > f) {
                    x = n(i[d + 1]) ? null : i[d + 1].elm;
                    k(t, x, i, u, d, a);
                } else if (u > d) {
                    $(t, e, o, f);
                }
            }
            function O(t, e, a, s) {
                if (t === e) {
                    return;
                }
                var u = e.elm = t.elm;
                if (i(t.isAsyncPlaceholder)) {
                    if (r(e.asyncFactory.resolved)) {
                        E(t.elm, e, a);
                    } else {
                        e.isAsyncPlaceholder = true;
                    }
                    return;
                }
                // reuse element for static trees.
                // note we only do this if the vnode is cloned -
                // if the new node is not cloned it means the render functions have been
                // reset by the hot-reload-api and we need to do a proper re-render.
                if (i(e.isStatic) && i(t.isStatic) && e.key === t.key && (i(e.isCloned) || i(e.isOnce))) {
                    e.componentInstance = t.componentInstance;
                    return;
                }
                var f;
                var c = e.data;
                if (r(c) && r(f = c.hook) && r(f = f.prepatch)) {
                    f(t, e);
                }
                var h = t.children;
                var d = e.children;
                if (r(c) && w(e)) {
                    for (f = 0; f < o.update.length; ++f) {
                        o.update[f](t, e);
                    }
                    if (r(f = c.hook) && r(f = f.update)) {
                        f(t, e);
                    }
                }
                if (n(e.text)) {
                    if (r(h) && r(d)) {
                        if (h !== d) {
                            M(u, h, d, a, s);
                        }
                    } else if (r(d)) {
                        if (r(t.text)) {
                            l.setTextContent(u, "");
                        }
                        k(u, null, d, 0, d.length - 1, a);
                    } else if (r(h)) {
                        $(u, h, 0, h.length - 1);
                    } else if (r(t.text)) {
                        l.setTextContent(u, "");
                    }
                } else if (t.text !== e.text) {
                    l.setTextContent(u, e.text);
                }
                if (r(c)) {
                    if (r(f = c.hook) && r(f = f.postpatch)) {
                        f(t, e);
                    }
                }
            }
            function N(t, e, n) {
                // delay insert hooks for component root nodes, invoke them after the
                // element is really inserted
                if (i(n) && r(t.parent)) {
                    t.parent.data.pendingInsert = e;
                } else {
                    for (var a = 0; a < e.length; ++a) {
                        e[a].data.hook.insert(e[a]);
                    }
                }
            }
            var P = false;
            // list of modules that can skip create hook during hydration because they
            // are already rendered on the client or has no need for initialization
            var T = p("attrs,style,class,staticClass,staticStyle,key");
            // Note: this is a browser-only function so we can assume elms are DOM nodes.
            function E(t, n, a) {
                if (i(n.isComment) && r(n.asyncFactory)) {
                    n.elm = t;
                    n.isAsyncPlaceholder = true;
                    return true;
                }
                if (true) {
                    if (!j(t, n)) {
                        return false;
                    }
                }
                n.elm = t;
                var s = n.tag;
                var o = n.data;
                var u = n.children;
                if (r(o)) {
                    if (r(e = o.hook) && r(e = e.init)) {
                        e(n, true);
                    }
                    if (r(e = n.componentInstance)) {
                        // child component. it should have hydrated its own tree.
                        y(n, a);
                        return true;
                    }
                }
                if (r(s)) {
                    if (r(u)) {
                        // empty element, allow client to pick up and populate children
                        if (!t.hasChildNodes()) {
                            x(n, u, a);
                        } else {
                            var l = true;
                            var f = t.firstChild;
                            for (var c = 0; c < u.length; c++) {
                                if (!f || !E(f, u[c], a)) {
                                    l = false;
                                    break;
                                }
                                f = f.nextSibling;
                            }
                            // if childNode is not null, it means the actual childNodes list is
                            // longer than the virtual children list.
                            if (!l || f) {
                                if ("development" !== "production" && typeof console !== "undefined" && !P) {
                                    P = true;
                                    console.warn("Parent: ", t);
                                    console.warn("Mismatching childNodes vs. VNodes: ", t.childNodes, u);
                                }
                                return false;
                            }
                        }
                    }
                    if (r(o)) {
                        for (var h in o) {
                            if (!T(h)) {
                                _(n, a);
                                break;
                            }
                        }
                    }
                } else if (t.data !== n.text) {
                    t.data = n.text;
                }
                return true;
            }
            function j(t, e) {
                if (r(e.tag)) {
                    return e.tag.indexOf("vue-component") === 0 || e.tag.toLowerCase() === (t.tagName && t.tagName.toLowerCase());
                } else {
                    return t.nodeType === (e.isComment ? 8 : 3);
                }
            }
            return function t(e, a, s, u, c, h) {
                if (n(a)) {
                    if (r(e)) {
                        A(e);
                    }
                    return;
                }
                var d = false;
                var p = [];
                if (n(e)) {
                    // empty mount (likely as component), create new root element
                    d = true;
                    v(a, p, c, h);
                } else {
                    var m = r(e.nodeType);
                    if (!m && mi(e, a)) {
                        // patch existing root node
                        O(e, a, p, u);
                    } else {
                        if (m) {
                            // mounting to a real element
                            // check if this is server-rendered content and if we can perform
                            // a successful hydration.
                            if (e.nodeType === 1 && e.hasAttribute(I)) {
                                e.removeAttribute(I);
                                s = true;
                            }
                            if (i(s)) {
                                if (E(e, a, p)) {
                                    N(a, p, true);
                                    return e;
                                } else if (true) {
                                    X("The client-side rendered virtual DOM tree is not matching " + "server-rendered content. This is likely caused by incorrect " + "HTML markup, for example nesting block-level elements inside " + "<p>, or missing <tbody>. Bailing hydration and performing " + "full client-side render.");
                                }
                            }
                            // either not server-rendered, or hydration failed.
                            // create an empty node and replace it
                            e = f(e);
                        }
                        // replacing existing element
                        var y = e.elm;
                        var g = l.parentNode(y);
                        v(a, p, // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        y._leaveCb ? null : g, l.nextSibling(y));
                        if (r(a.parent)) {
                            // component root element replaced.
                            // update parent placeholder node element, recursively
                            var b = a.parent;
                            while (b) {
                                b.elm = a.elm;
                                b = b.parent;
                            }
                            if (w(a)) {
                                for (var x = 0; x < o.create.length; ++x) {
                                    o.create[x](pi, a.parent);
                                }
                            }
                        }
                        if (r(g)) {
                            $(g, [ e ], 0, 0);
                        } else if (r(e.tag)) {
                            A(e);
                        }
                    }
                }
                N(a, p, d);
                return a.elm;
            };
        }
        /*  */
        var xi = {
            create: wi,
            update: wi,
            destroy: function t(e) {
                wi(e, pi);
            }
        };
        function wi(t, e) {
            if (t.data.directives || e.data.directives) {
                _i(t, e);
            }
        }
        function _i(t, e) {
            var n = t === pi;
            var r = e === pi;
            var i = ki(t.data.directives, t.context);
            var a = ki(e.data.directives, e.context);
            var s = [];
            var o = [];
            var u, l, f;
            for (u in a) {
                l = i[u];
                f = a[u];
                if (!l) {
                    // new directive, bind
                    $i(f, "bind", e, t);
                    if (f.def && f.def.inserted) {
                        s.push(f);
                    }
                } else {
                    // existing directive, update
                    f.oldValue = l.value;
                    $i(f, "update", e, t);
                    if (f.def && f.def.componentUpdated) {
                        o.push(f);
                    }
                }
            }
            if (s.length) {
                var c = function() {
                    for (var n = 0; n < s.length; n++) {
                        $i(s[n], "inserted", e, t);
                    }
                };
                if (n) {
                    we(e.data.hook || (e.data.hook = {}), "insert", c);
                } else {
                    c();
                }
            }
            if (o.length) {
                we(e.data.hook || (e.data.hook = {}), "postpatch", function() {
                    for (var n = 0; n < o.length; n++) {
                        $i(o[n], "componentUpdated", e, t);
                    }
                });
            }
            if (!n) {
                for (u in i) {
                    if (!a[u]) {
                        // no longer present, unbind
                        $i(i[u], "unbind", t, t, r);
                    }
                }
            }
        }
        var Ci = Object.create(null);
        function ki(t, e) {
            var n = Object.create(null);
            if (!t) {
                return n;
            }
            var r, i;
            for (r = 0; r < t.length; r++) {
                i = t[r];
                if (!i.modifiers) {
                    i.modifiers = Ci;
                }
                n[Ai(i)] = i;
                i.def = Gt(e.$options, "directives", i.name, true);
            }
            return n;
        }
        function Ai(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
        }
        function $i(t, e, n, r, i) {
            var a = t.def && t.def[e];
            if (a) {
                try {
                    a(n.elm, t, n, r, i);
                } catch (r) {
                    tt(r, n.context, "directive " + t.name + " " + e + " hook");
                }
            }
        }
        var Si = [ hi, xi ];
        /*  */
        function Mi(t, e) {
            var i = e.componentOptions;
            if (r(i) && i.Ctor.options.inheritAttrs === false) {
                return;
            }
            if (n(t.data.attrs) && n(e.data.attrs)) {
                return;
            }
            var a, s, o;
            var u = e.elm;
            var l = t.data.attrs || {};
            var f = e.data.attrs || {};
            // clone observed objects, as the user probably wants to mutate it
            if (r(f.__ob__)) {
                f = e.data.attrs = M({}, f);
            }
            for (a in f) {
                s = f[a];
                o = l[a];
                if (o !== s) {
                    Oi(u, a, s);
                }
            }
            // #4391: in IE9, setting type can reset value for input[type=radio]
            /* istanbul ignore if */
            if (at && f.value !== l.value) {
                Oi(u, "value", f.value);
            }
            for (a in l) {
                if (n(f[a])) {
                    if (jr(a)) {
                        u.removeAttributeNS(Er, Lr(a));
                    } else if (!Pr(a)) {
                        u.removeAttribute(a);
                    }
                }
            }
        }
        function Oi(t, e, n) {
            if (Tr(e)) {
                // set attribute for blank value
                // e.g. <option disabled>Select one</option>
                if (Fr(n)) {
                    t.removeAttribute(e);
                } else {
                    t.setAttribute(e, e);
                }
            } else if (Pr(e)) {
                t.setAttribute(e, Fr(n) || n === "false" ? "false" : "true");
            } else if (jr(e)) {
                if (Fr(n)) {
                    t.removeAttributeNS(Er, Lr(e));
                } else {
                    t.setAttributeNS(Er, e, n);
                }
            } else {
                if (Fr(n)) {
                    t.removeAttribute(e);
                } else {
                    t.setAttribute(e, n);
                }
            }
        }
        var Ni = {
            create: Mi,
            update: Mi
        };
        /*  */
        function Pi(t, e) {
            var i = e.elm;
            var a = e.data;
            var s = t.data;
            if (n(a.staticClass) && n(a.class) && (n(s) || n(s.staticClass) && n(s.class))) {
                return;
            }
            var o = Ir(e);
            // handle transition classes
            var u = i._transitionClasses;
            if (r(u)) {
                o = Br(o, Vr(u));
            }
            // set the class
            if (o !== i._prevClass) {
                i.setAttribute("class", o);
                i._prevClass = o;
            }
        }
        var Ti = {
            create: Pi,
            update: Pi
        };
        /*  */
        var Ei = /[\w).+\-_$\]]/;
        function ji(t) {
            var e = false;
            var n = false;
            var r = false;
            var i = false;
            var a = 0;
            var s = 0;
            var o = 0;
            var u = 0;
            var l, f, c, h, d;
            for (c = 0; c < t.length; c++) {
                f = l;
                l = t.charCodeAt(c);
                if (e) {
                    if (l === 39 && f !== 92) {
                        e = false;
                    }
                } else if (n) {
                    if (l === 34 && f !== 92) {
                        n = false;
                    }
                } else if (r) {
                    if (l === 96 && f !== 92) {
                        r = false;
                    }
                } else if (i) {
                    if (l === 47 && f !== 92) {
                        i = false;
                    }
                } else if (l === 124 && // pipe
                t.charCodeAt(c + 1) !== 124 && t.charCodeAt(c - 1) !== 124 && !a && !s && !o) {
                    if (h === undefined) {
                        // first filter, end of expression
                        u = c + 1;
                        h = t.slice(0, c).trim();
                    } else {
                        m();
                    }
                } else {
                    switch (l) {
                      case 34:
                        n = true;
                        break;

                      // "
                        case 39:
                        e = true;
                        break;

                      // '
                        case 96:
                        r = true;
                        break;

                      // `
                        case 40:
                        o++;
                        break;

                      // (
                        case 41:
                        o--;
                        break;

                      // )
                        case 91:
                        s++;
                        break;

                      // [
                        case 93:
                        s--;
                        break;

                      // ]
                        case 123:
                        a++;
                        break;

                      // {
                        case 125:
                        a--;
                        break;
                    }
                    if (l === 47) {
                        // /
                        var p = c - 1;
                        var v = void 0;
                        // find first non-whitespace prev char
                        for (;p >= 0; p--) {
                            v = t.charAt(p);
                            if (v !== " ") {
                                break;
                            }
                        }
                        if (!v || !Ei.test(v)) {
                            i = true;
                        }
                    }
                }
            }
            if (h === undefined) {
                h = t.slice(0, c).trim();
            } else if (u !== 0) {
                m();
            }
            function m() {
                (d || (d = [])).push(t.slice(u, c).trim());
                u = c + 1;
            }
            if (d) {
                for (c = 0; c < d.length; c++) {
                    h = Li(h, d[c]);
                }
            }
            return h;
        }
        function Li(t, e) {
            var n = e.indexOf("(");
            if (n < 0) {
                // _f: resolveFilter
                return '_f("' + e + '")(' + t + ")";
            } else {
                var r = e.slice(0, n);
                var i = e.slice(n + 1);
                return '_f("' + r + '")(' + t + "," + i;
            }
        }
        /*  */
        function Fi(t) {
            console.error("[Vue compiler]: " + t);
        }
        function Ii(t, e) {
            return t ? t.map(function(t) {
                return t[e];
            }).filter(function(t) {
                return t;
            }) : [];
        }
        function Di(t, e, n) {
            (t.props || (t.props = [])).push({
                name: e,
                value: n
            });
        }
        function Ri(t, e, n) {
            (t.attrs || (t.attrs = [])).push({
                name: e,
                value: n
            });
        }
        function Bi(t, e, n, r, i, a) {
            (t.directives || (t.directives = [])).push({
                name: e,
                rawName: n,
                value: r,
                arg: i,
                modifiers: a
            });
        }
        function Vi(t, e, n, r, i, a) {
            // warn prevent and passive modifier
            /* istanbul ignore if */
            if ("development" !== "production" && a && r && r.prevent && r.passive) {
                a("passive and prevent can't be used together. " + "Passive handler can't prevent default event.");
            }
            // check capture modifier
            if (r && r.capture) {
                delete r.capture;
                e = "!" + e;
            }
            if (r && r.once) {
                delete r.once;
                e = "~" + e;
            }
            /* istanbul ignore if */
            if (r && r.passive) {
                delete r.passive;
                e = "&" + e;
            }
            var s;
            if (r && r.native) {
                delete r.native;
                s = t.nativeEvents || (t.nativeEvents = {});
            } else {
                s = t.events || (t.events = {});
            }
            var o = {
                value: n,
                modifiers: r
            };
            var u = s[e];
            /* istanbul ignore if */
            if (Array.isArray(u)) {
                i ? u.unshift(o) : u.push(o);
            } else if (u) {
                s[e] = i ? [ o, u ] : [ u, o ];
            } else {
                s[e] = o;
            }
        }
        function Ui(t, e, n) {
            var r = qi(t, ":" + e) || qi(t, "v-bind:" + e);
            if (r != null) {
                return ji(r);
            } else if (n !== false) {
                var i = qi(t, e);
                if (i != null) {
                    return JSON.stringify(i);
                }
            }
        }
        function qi(t, e) {
            var n;
            if ((n = t.attrsMap[e]) != null) {
                var r = t.attrsList;
                for (var i = 0, a = r.length; i < a; i++) {
                    if (r[i].name === e) {
                        r.splice(i, 1);
                        break;
                    }
                }
            }
            return n;
        }
        /*  */
        /**
 * Cross-platform code generation for component v-model
 */
        function zi(t, e, n) {
            var r = n || {};
            var i = r.number;
            var a = r.trim;
            var s = "$$v";
            var o = s;
            if (a) {
                o = "(typeof " + s + " === 'string'" + "? " + s + ".trim()" + ": " + s + ")";
            }
            if (i) {
                o = "_n(" + o + ")";
            }
            var u = Hi(e, o);
            t.model = {
                value: "(" + e + ")",
                expression: '"' + e + '"',
                callback: "function (" + s + ") {" + u + "}"
            };
        }
        /**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
        function Hi(t, e) {
            var n = Zi(t);
            if (n.idx === null) {
                return t + "=" + e;
            } else {
                return "$set(" + n.exp + ", " + n.idx + ", " + e + ")";
            }
        }
        /**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */
        var Xi;
        var Yi;
        var Gi;
        var Ji;
        var Wi;
        var Ki;
        function Zi(t) {
            Yi = t;
            Xi = Yi.length;
            Ji = Wi = Ki = 0;
            if (t.indexOf("[") < 0 || t.lastIndexOf("]") < Xi - 1) {
                return {
                    exp: t,
                    idx: null
                };
            }
            while (!ta()) {
                Gi = Qi();
                /* istanbul ignore if */
                if (ea(Gi)) {
                    ra(Gi);
                } else if (Gi === 91) {
                    na(Gi);
                }
            }
            return {
                exp: t.substring(0, Wi),
                idx: t.substring(Wi + 1, Ki)
            };
        }
        function Qi() {
            return Yi.charCodeAt(++Ji);
        }
        function ta() {
            return Ji >= Xi;
        }
        function ea(t) {
            return t === 34 || t === 39;
        }
        function na(t) {
            var e = 1;
            Wi = Ji;
            while (!ta()) {
                t = Qi();
                if (ea(t)) {
                    ra(t);
                    continue;
                }
                if (t === 91) {
                    e++;
                }
                if (t === 93) {
                    e--;
                }
                if (e === 0) {
                    Ki = Ji;
                    break;
                }
            }
        }
        function ra(t) {
            var e = t;
            while (!ta()) {
                t = Qi();
                if (t === e) {
                    break;
                }
            }
        }
        /*  */
        var ia;
        // in some cases, the event used has to be determined at runtime
        // so we used some reserved tokens during compile.
        var aa = "__r";
        var sa = "__c";
        function oa(t, e, n) {
            ia = n;
            var r = e.value;
            var i = e.modifiers;
            var a = t.tag;
            var s = t.attrsMap.type;
            if (true) {
                var o = t.attrsMap["v-bind:type"] || t.attrsMap[":type"];
                if (a === "input" && o) {
                    ia('<input :type="' + o + '" v-model="' + r + '">:\n' + "v-model does not support dynamic input types. Use v-if branches instead.");
                }
                // inputs with type="file" are read only and setting the input's
                // value will throw an error.
                if (a === "input" && s === "file") {
                    ia("<" + t.tag + ' v-model="' + r + '" type="file">:\n' + "File inputs are read only. Use a v-on:change listener instead.");
                }
            }
            if (t.component) {
                zi(t, r, i);
                // component v-model doesn't need extra runtime
                return false;
            } else if (a === "select") {
                fa(t, r, i);
            } else if (a === "input" && s === "checkbox") {
                ua(t, r, i);
            } else if (a === "input" && s === "radio") {
                la(t, r, i);
            } else if (a === "input" || a === "textarea") {
                ca(t, r, i);
            } else if (!B.isReservedTag(a)) {
                zi(t, r, i);
                // component v-model doesn't need extra runtime
                return false;
            } else if (true) {
                ia("<" + t.tag + ' v-model="' + r + '">: ' + "v-model is not supported on this element type. " + "If you are working with contenteditable, it's recommended to " + "wrap a library dedicated for that purpose inside a custom component.");
            }
            // ensure runtime directive metadata
            return true;
        }
        function ua(t, e, n) {
            var r = n && n.number;
            var i = Ui(t, "value") || "null";
            var a = Ui(t, "true-value") || "true";
            var s = Ui(t, "false-value") || "false";
            Di(t, "checked", "Array.isArray(" + e + ")" + "?_i(" + e + "," + i + ")>-1" + (a === "true" ? ":(" + e + ")" : ":_q(" + e + "," + a + ")"));
            Vi(t, sa, "var $$a=" + e + "," + "$$el=$event.target," + "$$c=$$el.checked?(" + a + "):(" + s + ");" + "if(Array.isArray($$a)){" + "var $$v=" + (r ? "_n(" + i + ")" : i) + "," + "$$i=_i($$a,$$v);" + "if($$el.checked){$$i<0&&(" + e + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + Hi(e, "$$c") + "}", null, true);
        }
        function la(t, e, n) {
            var r = n && n.number;
            var i = Ui(t, "value") || "null";
            i = r ? "_n(" + i + ")" : i;
            Di(t, "checked", "_q(" + e + "," + i + ")");
            Vi(t, sa, Hi(e, i), null, true);
        }
        function fa(t, e, n) {
            var r = n && n.number;
            var i = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + '.map(function(o){var val = "_value" in o ? o._value : o.value;' + "return " + (r ? "_n(val)" : "val") + "})";
            var a = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
            var s = "var $$selectedVal = " + i + ";";
            s = s + " " + Hi(e, a);
            Vi(t, "change", s, null, true);
        }
        function ca(t, e, n) {
            var r = t.attrsMap.type;
            var i = n || {};
            var a = i.lazy;
            var s = i.number;
            var o = i.trim;
            var u = !a && r !== "range";
            var l = a ? "change" : r === "range" ? aa : "input";
            var f = "$event.target.value";
            if (o) {
                f = "$event.target.value.trim()";
            }
            if (s) {
                f = "_n(" + f + ")";
            }
            var c = Hi(e, f);
            if (u) {
                c = "if($event.target.composing)return;" + c;
            }
            Di(t, "value", "(" + e + ")");
            Vi(t, l, c, null, true);
            if (o || s) {
                Vi(t, "blur", "$forceUpdate()");
            }
        }
        /*  */
        // normalize v-model event tokens that can only be determined at runtime.
        // it's important to place the event as the first in the array because
        // the whole point is ensuring the v-model callback gets called before
        // user-attached handlers.
        function ha(t) {
            var e;
            /* istanbul ignore if */
            if (r(t[aa])) {
                // IE input[type=range] only supports `change` event
                e = it ? "change" : "input";
                t[e] = [].concat(t[aa], t[e] || []);
                delete t[aa];
            }
            if (r(t[sa])) {
                // Chrome fires microtasks in between click/change, leads to #4521
                e = lt ? "click" : "change";
                t[e] = [].concat(t[sa], t[e] || []);
                delete t[sa];
            }
        }
        var da;
        function pa(t, e, n, r, i) {
            if (n) {
                var a = e;
                var s = da;
                // save current target element in closure
                e = function(n) {
                    var i = arguments.length === 1 ? a(n) : a.apply(null, arguments);
                    if (i !== null) {
                        va(t, e, r, s);
                    }
                };
            }
            da.addEventListener(t, e, ct ? {
                capture: r,
                passive: i
            } : r);
        }
        function va(t, e, n, r) {
            (r || da).removeEventListener(t, e, n);
        }
        function ma(t, e) {
            if (n(t.data.on) && n(e.data.on)) {
                return;
            }
            var r = e.data.on || {};
            var i = t.data.on || {};
            da = e.elm;
            ha(r);
            xe(r, i, pa, va, e.context);
        }
        var ya = {
            create: ma,
            update: ma
        };
        /*  */
        function ga(t, e) {
            if (n(t.data.domProps) && n(e.data.domProps)) {
                return;
            }
            var i, a;
            var s = e.elm;
            var o = t.data.domProps || {};
            var u = e.data.domProps || {};
            // clone observed objects, as the user probably wants to mutate it
            if (r(u.__ob__)) {
                u = e.data.domProps = M({}, u);
            }
            for (i in o) {
                if (n(u[i])) {
                    s[i] = "";
                }
            }
            for (i in u) {
                a = u[i];
                // ignore children if the node has textContent or innerHTML,
                // as these will throw away existing DOM nodes and cause removal errors
                // on subsequent patches (#3360)
                if (i === "textContent" || i === "innerHTML") {
                    if (e.children) {
                        e.children.length = 0;
                    }
                    if (a === o[i]) {
                        continue;
                    }
                }
                if (i === "value") {
                    // store value as _value as well since
                    // non-string values will be stringified
                    s._value = a;
                    // avoid resetting cursor position when value is the same
                    var l = n(a) ? "" : String(a);
                    if (ba(s, e, l)) {
                        s.value = l;
                    }
                } else {
                    s[i] = a;
                }
            }
        }
        // check platforms/web/util/attrs.js acceptValue
        function ba(t, e, n) {
            return !t.composing && (e.tag === "option" || xa(t, n) || wa(t, n));
        }
        function xa(t, e) {
            // return true when textbox (.number and .trim) loses focus and its value is
            // not equal to the updated value
            var n = true;
            // #6157
            // work around IE bug when accessing document.activeElement in an iframe
            try {
                n = document.activeElement !== t;
            } catch (t) {}
            return n && t.value !== e;
        }
        function wa(t, e) {
            var n = t.value;
            var i = t._vModifiers;
            // injected by v-model runtime
            if (r(i) && i.number) {
                return d(n) !== d(e);
            }
            if (r(i) && i.trim) {
                return n.trim() !== e.trim();
            }
            return n !== e;
        }
        var _a = {
            create: ga,
            update: ga
        };
        /*  */
        var Ca = x(function(t) {
            var e = {};
            var n = /;(?![^(]*\))/g;
            var r = /:(.+)/;
            t.split(n).forEach(function(t) {
                if (t) {
                    var n = t.split(r);
                    n.length > 1 && (e[n[0].trim()] = n[1].trim());
                }
            });
            return e;
        });
        // merge static and dynamic style data on the same vnode
        function ka(t) {
            var e = Aa(t.style);
            // static style is pre-processed into an object during compilation
            // and is always a fresh object, so it's safe to merge into it
            return t.staticStyle ? M(t.staticStyle, e) : e;
        }
        // normalize possible array / string values into Object
        function Aa(t) {
            if (Array.isArray(t)) {
                return O(t);
            }
            if (typeof t === "string") {
                return Ca(t);
            }
            return t;
        }
        /**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
        function $a(t, e) {
            var n = {};
            var r;
            if (e) {
                var i = t;
                while (i.componentInstance) {
                    i = i.componentInstance._vnode;
                    if (i.data && (r = ka(i.data))) {
                        M(n, r);
                    }
                }
            }
            if (r = ka(t.data)) {
                M(n, r);
            }
            var a = t;
            while (a = a.parent) {
                if (a.data && (r = ka(a.data))) {
                    M(n, r);
                }
            }
            return n;
        }
        /*  */
        var Sa = /^--/;
        var Ma = /\s*!important$/;
        var Oa = function(t, e, n) {
            /* istanbul ignore if */
            if (Sa.test(e)) {
                t.style.setProperty(e, n);
            } else if (Ma.test(n)) {
                t.style.setProperty(e, n.replace(Ma, ""), "important");
            } else {
                var r = Ta(e);
                if (Array.isArray(n)) {
                    // Support values array created by autoprefixer, e.g.
                    // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                    // Set them one by one, and the browser will only set those it can recognize
                    for (var i = 0, a = n.length; i < a; i++) {
                        t.style[r] = n[i];
                    }
                } else {
                    t.style[r] = n;
                }
            }
        };
        var Na = [ "Webkit", "Moz", "ms" ];
        var Pa;
        var Ta = x(function(t) {
            Pa = Pa || document.createElement("div").style;
            t = _(t);
            if (t !== "filter" && t in Pa) {
                return t;
            }
            var e = t.charAt(0).toUpperCase() + t.slice(1);
            for (var n = 0; n < Na.length; n++) {
                var r = Na[n] + e;
                if (r in Pa) {
                    return r;
                }
            }
        });
        function Ea(t, e) {
            var i = e.data;
            var a = t.data;
            if (n(i.staticStyle) && n(i.style) && n(a.staticStyle) && n(a.style)) {
                return;
            }
            var s, o;
            var u = e.elm;
            var l = a.staticStyle;
            var f = a.normalizedStyle || a.style || {};
            // if static style exists, stylebinding already merged into it when doing normalizeStyleData
            var c = l || f;
            var h = Aa(e.data.style) || {};
            // store normalized style under a different key for next diff
            // make sure to clone it if it's reactive, since the user likley wants
            // to mutate it.
            e.data.normalizedStyle = r(h.__ob__) ? M({}, h) : h;
            var d = $a(e, true);
            for (o in c) {
                if (n(d[o])) {
                    Oa(u, o, "");
                }
            }
            for (o in d) {
                s = d[o];
                if (s !== c[o]) {
                    // ie9 setting to null has no effect, must use empty string
                    Oa(u, o, s == null ? "" : s);
                }
            }
        }
        var ja = {
            create: Ea,
            update: Ea
        };
        /*  */
        /**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
        function La(t, e) {
            /* istanbul ignore if */
            if (!e || !(e = e.trim())) {
                return;
            }
            /* istanbul ignore else */
            if (t.classList) {
                if (e.indexOf(" ") > -1) {
                    e.split(/\s+/).forEach(function(e) {
                        return t.classList.add(e);
                    });
                } else {
                    t.classList.add(e);
                }
            } else {
                var n = " " + (t.getAttribute("class") || "") + " ";
                if (n.indexOf(" " + e + " ") < 0) {
                    t.setAttribute("class", (n + e).trim());
                }
            }
        }
        /**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
        function Fa(t, e) {
            /* istanbul ignore if */
            if (!e || !(e = e.trim())) {
                return;
            }
            /* istanbul ignore else */
            if (t.classList) {
                if (e.indexOf(" ") > -1) {
                    e.split(/\s+/).forEach(function(e) {
                        return t.classList.remove(e);
                    });
                } else {
                    t.classList.remove(e);
                }
                if (!t.classList.length) {
                    t.removeAttribute("class");
                }
            } else {
                var n = " " + (t.getAttribute("class") || "") + " ";
                var r = " " + e + " ";
                while (n.indexOf(r) >= 0) {
                    n = n.replace(r, " ");
                }
                n = n.trim();
                if (n) {
                    t.setAttribute("class", n);
                } else {
                    t.removeAttribute("class");
                }
            }
        }
        /*  */
        function Ia(t) {
            if (!t) {
                return;
            }
            /* istanbul ignore else */
            if (typeof t === "object") {
                var e = {};
                if (t.css !== false) {
                    M(e, Da(t.name || "v"));
                }
                M(e, t);
                return e;
            } else if (typeof t === "string") {
                return Da(t);
            }
        }
        var Da = x(function(t) {
            return {
                enterClass: t + "-enter",
                enterToClass: t + "-enter-to",
                enterActiveClass: t + "-enter-active",
                leaveClass: t + "-leave",
                leaveToClass: t + "-leave-to",
                leaveActiveClass: t + "-leave-active"
            };
        });
        var Ra = nt && !at;
        var Ba = "transition";
        var Va = "animation";
        // Transition property/event sniffing
        var Ua = "transition";
        var qa = "transitionend";
        var za = "animation";
        var Ha = "animationend";
        if (Ra) {
            /* istanbul ignore if */
            if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
                Ua = "WebkitTransition";
                qa = "webkitTransitionEnd";
            }
            if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
                za = "WebkitAnimation";
                Ha = "webkitAnimationEnd";
            }
        }
        // binding to window is necessary to make hot reload work in IE in strict mode
        var Xa = nt && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout;
        function Ya(t) {
            Xa(function() {
                Xa(t);
            });
        }
        function Ga(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = []);
            if (n.indexOf(e) < 0) {
                n.push(e);
                La(t, e);
            }
        }
        function Ja(t, e) {
            if (t._transitionClasses) {
                y(t._transitionClasses, e);
            }
            Fa(t, e);
        }
        function Wa(t, e, n) {
            var r = Za(t, e);
            var i = r.type;
            var a = r.timeout;
            var s = r.propCount;
            if (!i) {
                return n();
            }
            var o = i === Ba ? qa : Ha;
            var u = 0;
            var l = function() {
                t.removeEventListener(o, f);
                n();
            };
            var f = function(e) {
                if (e.target === t) {
                    if (++u >= s) {
                        l();
                    }
                }
            };
            setTimeout(function() {
                if (u < s) {
                    l();
                }
            }, a + 1);
            t.addEventListener(o, f);
        }
        var Ka = /\b(transform|all)(,|$)/;
        function Za(t, e) {
            var n = window.getComputedStyle(t);
            var r = n[Ua + "Delay"].split(", ");
            var i = n[Ua + "Duration"].split(", ");
            var a = Qa(r, i);
            var s = n[za + "Delay"].split(", ");
            var o = n[za + "Duration"].split(", ");
            var u = Qa(s, o);
            var l;
            var f = 0;
            var c = 0;
            /* istanbul ignore if */
            if (e === Ba) {
                if (a > 0) {
                    l = Ba;
                    f = a;
                    c = i.length;
                }
            } else if (e === Va) {
                if (u > 0) {
                    l = Va;
                    f = u;
                    c = o.length;
                }
            } else {
                f = Math.max(a, u);
                l = f > 0 ? a > u ? Ba : Va : null;
                c = l ? l === Ba ? i.length : o.length : 0;
            }
            var h = l === Ba && Ka.test(n[Ua + "Property"]);
            return {
                type: l,
                timeout: f,
                propCount: c,
                hasTransform: h
            };
        }
        function Qa(t, e) {
            /* istanbul ignore next */
            while (t.length < e.length) {
                t = t.concat(t);
            }
            return Math.max.apply(null, e.map(function(e, n) {
                return ts(e) + ts(t[n]);
            }));
        }
        function ts(t) {
            return Number(t.slice(0, -1)) * 1e3;
        }
        /*  */
        function es(t, e) {
            var i = t.elm;
            // call leave callback now
            if (r(i._leaveCb)) {
                i._leaveCb.cancelled = true;
                i._leaveCb();
            }
            var a = Ia(t.data.transition);
            if (n(a)) {
                return;
            }
            /* istanbul ignore if */
            if (r(i._enterCb) || i.nodeType !== 1) {
                return;
            }
            var s = a.css;
            var u = a.type;
            var l = a.enterClass;
            var f = a.enterToClass;
            var c = a.enterActiveClass;
            var h = a.appearClass;
            var p = a.appearToClass;
            var v = a.appearActiveClass;
            var m = a.beforeEnter;
            var y = a.enter;
            var g = a.afterEnter;
            var b = a.enterCancelled;
            var x = a.beforeAppear;
            var w = a.appear;
            var _ = a.afterAppear;
            var C = a.appearCancelled;
            var k = a.duration;
            // activeInstance will always be the <transition> component managing this
            // transition. One edge case to check is when the <transition> is placed
            // as the root node of a child component. In that case we need to check
            // <transition>'s parent for appear check.
            var A = Ve;
            var $ = Ve.$vnode;
            while ($ && $.parent) {
                $ = $.parent;
                A = $.context;
            }
            var S = !A._isMounted || !t.isRootInsert;
            if (S && !w && w !== "") {
                return;
            }
            var M = S && h ? h : l;
            var O = S && v ? v : c;
            var N = S && p ? p : f;
            var P = S ? x || m : m;
            var T = S ? typeof w === "function" ? w : y : y;
            var E = S ? _ || g : g;
            var j = S ? C || b : b;
            var L = d(o(k) ? k.enter : k);
            if ("development" !== "production" && L != null) {
                rs(L, "enter", t);
            }
            var I = s !== false && !at;
            var D = as(T);
            var R = i._enterCb = F(function() {
                if (I) {
                    Ja(i, N);
                    Ja(i, O);
                }
                if (R.cancelled) {
                    if (I) {
                        Ja(i, M);
                    }
                    j && j(i);
                } else {
                    E && E(i);
                }
                i._enterCb = null;
            });
            if (!t.data.show) {
                // remove pending leave element on enter by injecting an insert hook
                we(t.data.hook || (t.data.hook = {}), "insert", function() {
                    var e = i.parentNode;
                    var n = e && e._pending && e._pending[t.key];
                    if (n && n.tag === t.tag && n.elm._leaveCb) {
                        n.elm._leaveCb();
                    }
                    T && T(i, R);
                });
            }
            // start enter transition
            P && P(i);
            if (I) {
                Ga(i, M);
                Ga(i, O);
                Ya(function() {
                    Ga(i, N);
                    Ja(i, M);
                    if (!R.cancelled && !D) {
                        if (is(L)) {
                            setTimeout(R, L);
                        } else {
                            Wa(i, u, R);
                        }
                    }
                });
            }
            if (t.data.show) {
                e && e();
                T && T(i, R);
            }
            if (!I && !D) {
                R();
            }
        }
        function ns(t, e) {
            var i = t.elm;
            // call enter callback now
            if (r(i._enterCb)) {
                i._enterCb.cancelled = true;
                i._enterCb();
            }
            var a = Ia(t.data.transition);
            if (n(a)) {
                return e();
            }
            /* istanbul ignore if */
            if (r(i._leaveCb) || i.nodeType !== 1) {
                return;
            }
            var s = a.css;
            var u = a.type;
            var l = a.leaveClass;
            var f = a.leaveToClass;
            var c = a.leaveActiveClass;
            var h = a.beforeLeave;
            var p = a.leave;
            var v = a.afterLeave;
            var m = a.leaveCancelled;
            var y = a.delayLeave;
            var g = a.duration;
            var b = s !== false && !at;
            var x = as(p);
            var w = d(o(g) ? g.leave : g);
            if ("development" !== "production" && r(w)) {
                rs(w, "leave", t);
            }
            var _ = i._leaveCb = F(function() {
                if (i.parentNode && i.parentNode._pending) {
                    i.parentNode._pending[t.key] = null;
                }
                if (b) {
                    Ja(i, f);
                    Ja(i, c);
                }
                if (_.cancelled) {
                    if (b) {
                        Ja(i, l);
                    }
                    m && m(i);
                } else {
                    e();
                    v && v(i);
                }
                i._leaveCb = null;
            });
            if (y) {
                y(C);
            } else {
                C();
            }
            function C() {
                // the delayed leave may have already been cancelled
                if (_.cancelled) {
                    return;
                }
                // record leaving element
                if (!t.data.show) {
                    (i.parentNode._pending || (i.parentNode._pending = {}))[t.key] = t;
                }
                h && h(i);
                if (b) {
                    Ga(i, l);
                    Ga(i, c);
                    Ya(function() {
                        Ga(i, f);
                        Ja(i, l);
                        if (!_.cancelled && !x) {
                            if (is(w)) {
                                setTimeout(_, w);
                            } else {
                                Wa(i, u, _);
                            }
                        }
                    });
                }
                p && p(i, _);
                if (!b && !x) {
                    _();
                }
            }
        }
        // only used in dev mode
        function rs(t, e, n) {
            if (typeof t !== "number") {
                X("<transition> explicit " + e + " duration is not a valid number - " + "got " + JSON.stringify(t) + ".", n.context);
            } else if (isNaN(t)) {
                X("<transition> explicit " + e + " duration is NaN - " + "the duration expression might be incorrect.", n.context);
            }
        }
        function is(t) {
            return typeof t === "number" && !isNaN(t);
        }
        /**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
        function as(t) {
            if (n(t)) {
                return false;
            }
            var e = t.fns;
            if (r(e)) {
                // invoker
                return as(Array.isArray(e) ? e[0] : e);
            } else {
                return (t._length || t.length) > 1;
            }
        }
        function ss(t, e) {
            if (e.data.show !== true) {
                es(e);
            }
        }
        var os = nt ? {
            create: ss,
            activate: ss,
            remove: function t(e, n) {
                /* istanbul ignore else */
                if (e.data.show !== true) {
                    ns(e, n);
                } else {
                    n();
                }
            }
        } : {};
        var us = [ Ni, Ti, ya, _a, ja, os ];
        /*  */
        // the directive module should be applied last, after all
        // built-in modules have been applied.
        var ls = us.concat(Si);
        var fs = bi({
            nodeOps: ci,
            modules: ls
        });
        /**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
        var cs = p("text,number,password,search,email,tel,url");
        /* istanbul ignore if */
        if (at) {
            // http://www.matts411.com/post/internet-explorer-9-oninput/
            document.addEventListener("selectionchange", function() {
                var t = document.activeElement;
                if (t && t.vmodel) {
                    ys(t, "input");
                }
            });
        }
        var hs = {
            inserted: function t(e, n, r) {
                if (r.tag === "select") {
                    var i = function() {
                        ds(e, n, r.context);
                    };
                    i();
                    /* istanbul ignore if */
                    if (it || st) {
                        setTimeout(i, 0);
                    }
                    e._vOptions = [].map.call(e.options, ps);
                } else if (r.tag === "textarea" || cs(e.type)) {
                    e._vModifiers = n.modifiers;
                    if (!n.modifiers.lazy) {
                        // Safari < 10.2 & UIWebView doesn't fire compositionend when
                        // switching focus before confirming composition choice
                        // this also fixes the issue where some browsers e.g. iOS Chrome
                        // fires "change" instead of "input" on autocomplete.
                        e.addEventListener("change", ms);
                        if (!ot) {
                            e.addEventListener("compositionstart", vs);
                            e.addEventListener("compositionend", ms);
                        }
                        /* istanbul ignore if */
                        if (at) {
                            e.vmodel = true;
                        }
                    }
                }
            },
            componentUpdated: function t(e, n, r) {
                if (r.tag === "select") {
                    ds(e, n, r.context);
                    // in case the options rendered by v-for have changed,
                    // it's possible that the value is out-of-sync with the rendered options.
                    // detect such cases and filter out values that no longer has a matching
                    // option in the DOM.
                    var i = e._vOptions;
                    var a = e._vOptions = [].map.call(e.options, ps);
                    if (a.some(function(t, e) {
                        return !j(t, i[e]);
                    })) {
                        ys(e, "change");
                    }
                }
            }
        };
        function ds(t, e, n) {
            var r = e.value;
            var i = t.multiple;
            if (i && !Array.isArray(r)) {
                "development" !== "production" && X('<select multiple v-model="' + e.expression + '"> ' + "expects an Array value for its binding, but got " + Object.prototype.toString.call(r).slice(8, -1), n);
                return;
            }
            var a, s;
            for (var o = 0, u = t.options.length; o < u; o++) {
                s = t.options[o];
                if (i) {
                    a = L(r, ps(s)) > -1;
                    if (s.selected !== a) {
                        s.selected = a;
                    }
                } else {
                    if (j(ps(s), r)) {
                        if (t.selectedIndex !== o) {
                            t.selectedIndex = o;
                        }
                        return;
                    }
                }
            }
            if (!i) {
                t.selectedIndex = -1;
            }
        }
        function ps(t) {
            return "_value" in t ? t._value : t.value;
        }
        function vs(t) {
            t.target.composing = true;
        }
        function ms(t) {
            // prevent triggering an input event for no reason
            if (!t.target.composing) {
                return;
            }
            t.target.composing = false;
            ys(t.target, "input");
        }
        function ys(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, true, true);
            t.dispatchEvent(n);
        }
        /*  */
        // recursively search for possible transition defined inside the component root
        function gs(t) {
            return t.componentInstance && (!t.data || !t.data.transition) ? gs(t.componentInstance._vnode) : t;
        }
        var bs = {
            bind: function t(e, n, r) {
                var i = n.value;
                r = gs(r);
                var a = r.data && r.data.transition;
                var s = e.__vOriginalDisplay = e.style.display === "none" ? "" : e.style.display;
                if (i && a) {
                    r.data.show = true;
                    es(r, function() {
                        e.style.display = s;
                    });
                } else {
                    e.style.display = i ? s : "none";
                }
            },
            update: function t(e, n, r) {
                var i = n.value;
                var a = n.oldValue;
                /* istanbul ignore if */
                if (i === a) {
                    return;
                }
                r = gs(r);
                var s = r.data && r.data.transition;
                if (s) {
                    r.data.show = true;
                    if (i) {
                        es(r, function() {
                            e.style.display = e.__vOriginalDisplay;
                        });
                    } else {
                        ns(r, function() {
                            e.style.display = "none";
                        });
                    }
                } else {
                    e.style.display = i ? e.__vOriginalDisplay : "none";
                }
            },
            unbind: function t(e, n, r, i, a) {
                if (!a) {
                    e.style.display = e.__vOriginalDisplay;
                }
            }
        };
        var xs = {
            model: hs,
            show: bs
        };
        /*  */
        // Provides transition support for a single element/component.
        // supports transition mode (out-in / in-out)
        var ws = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [ Number, String, Object ]
        };
        // in case the child is also an abstract component, e.g. <keep-alive>
        // we want to recursively retrieve the real component to be rendered
        function _s(t) {
            var e = t && t.componentOptions;
            if (e && e.Ctor.options.abstract) {
                return _s(Pe(e.children));
            } else {
                return t;
            }
        }
        function Cs(t) {
            var e = {};
            var n = t.$options;
            // props
            for (var r in n.propsData) {
                e[r] = t[r];
            }
            // events.
            // extract listeners and pass them directly to the transition methods
            var i = n._parentListeners;
            for (var a in i) {
                e[_(a)] = i[a];
            }
            return e;
        }
        function ks(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) {
                return t("keep-alive", {
                    props: e.componentOptions.propsData
                });
            }
        }
        function As(t) {
            while (t = t.parent) {
                if (t.data.transition) {
                    return true;
                }
            }
        }
        function $s(t, e) {
            return e.key === t.key && e.tag === t.tag;
        }
        function Ss(t) {
            return t.isComment && t.asyncFactory;
        }
        var Ms = {
            name: "transition",
            props: ws,
            abstract: true,
            render: function t(e) {
                var n = this;
                var r = this.$options._renderChildren;
                if (!r) {
                    return;
                }
                // filter out text nodes (possible whitespaces)
                r = r.filter(function(t) {
                    return t.tag || Ss(t);
                });
                /* istanbul ignore if */
                if (!r.length) {
                    return;
                }
                // warn multiple elements
                if ("development" !== "production" && r.length > 1) {
                    X("<transition> can only be used on a single element. Use " + "<transition-group> for lists.", this.$parent);
                }
                var i = this.mode;
                // warn invalid mode
                if ("development" !== "production" && i && i !== "in-out" && i !== "out-in") {
                    X("invalid <transition> mode: " + i, this.$parent);
                }
                var a = r[0];
                // if this is a component root node and the component's
                // parent container node also has transition, skip.
                if (As(this.$vnode)) {
                    return a;
                }
                // apply transition data to child
                // use getRealChild() to ignore abstract components e.g. keep-alive
                var o = _s(a);
                /* istanbul ignore if */
                if (!o) {
                    return a;
                }
                if (this._leaving) {
                    return ks(e, a);
                }
                // ensure a key that is unique to the vnode type and to this transition
                // component instance. This key will be used to remove pending leaving nodes
                // during entering.
                var u = "__transition-" + this._uid + "-";
                o.key = o.key == null ? o.isComment ? u + "comment" : u + o.tag : s(o.key) ? String(o.key).indexOf(u) === 0 ? o.key : u + o.key : o.key;
                var l = (o.data || (o.data = {})).transition = Cs(this);
                var f = this._vnode;
                var c = _s(f);
                // mark v-show
                // so that the transition module can hand over the control to the directive
                if (o.data.directives && o.data.directives.some(function(t) {
                    return t.name === "show";
                })) {
                    o.data.show = true;
                }
                if (c && c.data && !$s(o, c) && !Ss(c)) {
                    // replace old child transition data with fresh one
                    // important for dynamic transitions!
                    var h = c && (c.data.transition = M({}, l));
                    // handle transition mode
                    if (i === "out-in") {
                        // return placeholder node and queue update when leave finishes
                        this._leaving = true;
                        we(h, "afterLeave", function() {
                            n._leaving = false;
                            n.$forceUpdate();
                        });
                        return ks(e, a);
                    } else if (i === "in-out") {
                        if (Ss(o)) {
                            return f;
                        }
                        var d;
                        var p = function() {
                            d();
                        };
                        we(l, "afterEnter", p);
                        we(l, "enterCancelled", p);
                        we(h, "delayLeave", function(t) {
                            d = t;
                        });
                    }
                }
                return a;
            }
        };
        /*  */
        // Provides transition support for list items.
        // supports move transitions using the FLIP technique.
        // Because the vdom's children update algorithm is "unstable" - i.e.
        // it doesn't guarantee the relative positioning of removed elements,
        // we force transition-group to update its children into two passes:
        // in the first pass, we remove all nodes that need to be removed,
        // triggering their leaving transition; in the second pass, we insert/move
        // into the final desired state. This way in the second pass removed
        // nodes will remain where they should be.
        var Os = M({
            tag: String,
            moveClass: String
        }, ws);
        delete Os.mode;
        var Ns = {
            props: Os,
            render: function t(e) {
                var n = this.tag || this.$vnode.data.tag || "span";
                var r = Object.create(null);
                var i = this.prevChildren = this.children;
                var a = this.$slots.default || [];
                var s = this.children = [];
                var o = Cs(this);
                for (var u = 0; u < a.length; u++) {
                    var l = a[u];
                    if (l.tag) {
                        if (l.key != null && String(l.key).indexOf("__vlist") !== 0) {
                            s.push(l);
                            r[l.key] = l;
                            (l.data || (l.data = {})).transition = o;
                        } else if (true) {
                            var f = l.componentOptions;
                            var c = f ? f.Ctor.options.name || f.tag || "" : l.tag;
                            X("<transition-group> children must be keyed: <" + c + ">");
                        }
                    }
                }
                if (i) {
                    var h = [];
                    var d = [];
                    for (var p = 0; p < i.length; p++) {
                        var v = i[p];
                        v.data.transition = o;
                        v.data.pos = v.elm.getBoundingClientRect();
                        if (r[v.key]) {
                            h.push(v);
                        } else {
                            d.push(v);
                        }
                    }
                    this.kept = e(n, null, h);
                    this.removed = d;
                }
                return e(n, null, s);
            },
            beforeUpdate: function t() {
                // force removing pass
                this.__patch__(this._vnode, this.kept, false, // hydrating
                true);
                this._vnode = this.kept;
            },
            updated: function t() {
                var e = this.prevChildren;
                var n = this.moveClass || (this.name || "v") + "-move";
                if (!e.length || !this.hasMove(e[0].elm, n)) {
                    return;
                }
                // we divide the work into three loops to avoid mixing DOM reads and writes
                // in each iteration - which helps prevent layout thrashing.
                e.forEach(Ps);
                e.forEach(Ts);
                e.forEach(Es);
                // force reflow to put everything in position
                var r = document.body;
                var i = r.offsetHeight;
                // eslint-disable-line
                e.forEach(function(t) {
                    if (t.data.moved) {
                        var e = t.elm;
                        var r = e.style;
                        Ga(e, n);
                        r.transform = r.WebkitTransform = r.transitionDuration = "";
                        e.addEventListener(qa, e._moveCb = function t(r) {
                            if (!r || /transform$/.test(r.propertyName)) {
                                e.removeEventListener(qa, t);
                                e._moveCb = null;
                                Ja(e, n);
                            }
                        });
                    }
                });
            },
            methods: {
                hasMove: function t(e, n) {
                    /* istanbul ignore if */
                    if (!Ra) {
                        return false;
                    }
                    /* istanbul ignore if */
                    if (this._hasMove) {
                        return this._hasMove;
                    }
                    // Detect whether an element with the move class applied has
                    // CSS transitions. Since the element may be inside an entering
                    // transition at this very moment, we make a clone of it and remove
                    // all other transition classes applied to ensure only the move class
                    // is applied.
                    var r = e.cloneNode();
                    if (e._transitionClasses) {
                        e._transitionClasses.forEach(function(t) {
                            Fa(r, t);
                        });
                    }
                    La(r, n);
                    r.style.display = "none";
                    this.$el.appendChild(r);
                    var i = Za(r);
                    this.$el.removeChild(r);
                    return this._hasMove = i.hasTransform;
                }
            }
        };
        function Ps(t) {
            /* istanbul ignore if */
            if (t.elm._moveCb) {
                t.elm._moveCb();
            }
            /* istanbul ignore if */
            if (t.elm._enterCb) {
                t.elm._enterCb();
            }
        }
        function Ts(t) {
            t.data.newPos = t.elm.getBoundingClientRect();
        }
        function Es(t) {
            var e = t.data.pos;
            var n = t.data.newPos;
            var r = e.left - n.left;
            var i = e.top - n.top;
            if (r || i) {
                t.data.moved = true;
                var a = t.elm.style;
                a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)";
                a.transitionDuration = "0s";
            }
        }
        var js = {
            Transition: Ms,
            TransitionGroup: Ns
        };
        /*  */
        // install platform specific utils
        dr.config.mustUseProp = Nr;
        dr.config.isReservedTag = Gr;
        dr.config.isReservedAttr = Mr;
        dr.config.getTagNamespace = Jr;
        dr.config.isUnknownElement = Kr;
        // install platform runtime directives & components
        M(dr.options.directives, xs);
        M(dr.options.components, js);
        // install platform patch function
        dr.prototype.__patch__ = nt ? fs : N;
        // public mount method
        dr.prototype.$mount = function(t, e) {
            t = t && nt ? Zr(t) : undefined;
            return He(this, t, e);
        };
        // devtools global hook
        /* istanbul ignore next */
        setTimeout(function() {
            if (B.devtools) {
                if (vt) {
                    vt.emit("init", dr);
                } else if ("development" !== "production" && lt) {
                    console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\n" + "https://github.com/vuejs/vue-devtools");
                }
            }
            if ("development" !== "production" && B.productionTip !== false && nt && typeof console !== "undefined") {
                console[console.info ? "info" : "log"]("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
            }
        }, 0);
        /*  */
        // check whether current browser encodes a char inside attribute values
        function Ls(t, e) {
            var n = document.createElement("div");
            n.innerHTML = '<div a="' + t + '"/>';
            return n.innerHTML.indexOf(e) > 0;
        }
        // #3663
        // IE encodes newlines inside attribute values while other browsers don't
        var Fs = nt ? Ls("\n", "&#10;") : false;
        /*  */
        var Is = /\{\{((?:.|\n)+?)\}\}/g;
        var Ds = /[-.*+?^${}()|[\]\/\\]/g;
        var Rs = x(function(t) {
            var e = t[0].replace(Ds, "\\$&");
            var n = t[1].replace(Ds, "\\$&");
            return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
        });
        function Bs(t, e) {
            var n = e ? Rs(e) : Is;
            if (!n.test(t)) {
                return;
            }
            var r = [];
            var i = n.lastIndex = 0;
            var a, s;
            while (a = n.exec(t)) {
                s = a.index;
                // push text token
                if (s > i) {
                    r.push(JSON.stringify(t.slice(i, s)));
                }
                // tag token
                var o = ji(a[1].trim());
                r.push("_s(" + o + ")");
                i = s + a[0].length;
            }
            if (i < t.length) {
                r.push(JSON.stringify(t.slice(i)));
            }
            return r.join("+");
        }
        /*  */
        function Vs(t, e) {
            var n = e.warn || Fi;
            var r = qi(t, "class");
            if ("development" !== "production" && r) {
                var i = Bs(r, e.delimiters);
                if (i) {
                    n('class="' + r + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div class="{{ val }}">, use <div :class="val">.');
                }
            }
            if (r) {
                t.staticClass = JSON.stringify(r);
            }
            var a = Ui(t, "class", false);
            if (a) {
                t.classBinding = a;
            }
        }
        function Us(t) {
            var e = "";
            if (t.staticClass) {
                e += "staticClass:" + t.staticClass + ",";
            }
            if (t.classBinding) {
                e += "class:" + t.classBinding + ",";
            }
            return e;
        }
        var qs = {
            staticKeys: [ "staticClass" ],
            transformNode: Vs,
            genData: Us
        };
        /*  */
        function zs(t, e) {
            var n = e.warn || Fi;
            var r = qi(t, "style");
            if (r) {
                /* istanbul ignore if */
                if (true) {
                    var i = Bs(r, e.delimiters);
                    if (i) {
                        n('style="' + r + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div style="{{ val }}">, use <div :style="val">.');
                    }
                }
                t.staticStyle = JSON.stringify(Ca(r));
            }
            var a = Ui(t, "style", false);
            if (a) {
                t.styleBinding = a;
            }
        }
        function Hs(t) {
            var e = "";
            if (t.staticStyle) {
                e += "staticStyle:" + t.staticStyle + ",";
            }
            if (t.styleBinding) {
                e += "style:(" + t.styleBinding + "),";
            }
            return e;
        }
        var Xs = {
            staticKeys: [ "staticStyle" ],
            transformNode: zs,
            genData: Hs
        };
        var Ys = [ qs, Xs ];
        /*  */
        function Gs(t, e) {
            if (e.value) {
                Di(t, "textContent", "_s(" + e.value + ")");
            }
        }
        /*  */
        function Js(t, e) {
            if (e.value) {
                Di(t, "innerHTML", "_s(" + e.value + ")");
            }
        }
        var Ws = {
            model: oa,
            text: Gs,
            html: Js
        };
        /*  */
        var Ks = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen," + "link,meta,param,source,track,wbr");
        // Elements that you can, intentionally, leave open
        // (and which close themselves)
        var Zs = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
        // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
        var Qs = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd," + "details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form," + "h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta," + "optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead," + "title,tr,track");
        /*  */
        var to = {
            expectHTML: true,
            modules: Ys,
            directives: Ws,
            isPreTag: Yr,
            isUnaryTag: Ks,
            mustUseProp: Nr,
            canBeLeftOpenTag: Zs,
            isReservedTag: Gr,
            getTagNamespace: Jr,
            staticKeys: E(Ys)
        };
        /*  */
        var eo;
        var no = {
            decode: function t(e) {
                eo = eo || document.createElement("div");
                eo.innerHTML = e;
                return eo.textContent;
            }
        };
        /**
 * Not type-checking this file because it's mostly vendor code.
 */
        /*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */
        // Regular Expressions for parsing tags and attributes
        var ro = /([^\s"'<>\/=]+)/;
        var io = /(?:=)/;
        var ao = [ // attr value double quotes
        /"([^"]*)"+/.source, // attr value, single quotes
        /'([^']*)'+/.source, // attr value, no quotes
        /([^\s"'=<>`]+)/.source ];
        var so = new RegExp("^\\s*" + ro.source + "(?:\\s*(" + io.source + ")" + "\\s*(?:" + ao.join("|") + "))?");
        // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
        // but for Vue templates we can enforce a simple charset
        var oo = "[a-zA-Z_][\\w\\-\\.]*";
        var uo = "((?:" + oo + "\\:)?" + oo + ")";
        var lo = new RegExp("^<" + uo);
        var fo = /^\s*(\/?)>/;
        var co = new RegExp("^<\\/" + uo + "[^>]*>");
        var ho = /^<!DOCTYPE [^>]+>/i;
        var po = /^<!--/;
        var vo = /^<!\[/;
        var mo = false;
        "x".replace(/x(.)?/g, function(t, e) {
            mo = e === "";
        });
        // Special Elements (can contain anything)
        var yo = p("script,style,textarea", true);
        var go = {};
        var bo = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n"
        };
        var xo = /&(?:lt|gt|quot|amp);/g;
        var wo = /&(?:lt|gt|quot|amp|#10);/g;
        // #5992
        var _o = p("pre,textarea", true);
        var Co = function(t, e) {
            return t && _o(t) && e[0] === "\n";
        };
        function ko(t, e) {
            var n = e ? wo : xo;
            return t.replace(n, function(t) {
                return bo[t];
            });
        }
        function Ao(t, e) {
            var n = [];
            var r = e.expectHTML;
            var i = e.isUnaryTag || P;
            var a = e.canBeLeftOpenTag || P;
            var s = 0;
            var o, u;
            while (t) {
                o = t;
                // Make sure we're not in a plaintext content element like script/style
                if (!u || !yo(u)) {
                    var l = t.indexOf("<");
                    if (l === 0) {
                        // Comment:
                        if (po.test(t)) {
                            var f = t.indexOf("--\x3e");
                            if (f >= 0) {
                                if (e.shouldKeepComment) {
                                    e.comment(t.substring(4, f));
                                }
                                C(f + 3);
                                continue;
                            }
                        }
                        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                        if (vo.test(t)) {
                            var c = t.indexOf("]>");
                            if (c >= 0) {
                                C(c + 2);
                                continue;
                            }
                        }
                        // Doctype:
                        var h = t.match(ho);
                        if (h) {
                            C(h[0].length);
                            continue;
                        }
                        // End tag:
                        var d = t.match(co);
                        if (d) {
                            var p = s;
                            C(d[0].length);
                            $(d[1], p, s);
                            continue;
                        }
                        // Start tag:
                        var v = k();
                        if (v) {
                            A(v);
                            if (Co(u, t)) {
                                C(1);
                            }
                            continue;
                        }
                    }
                    var m = void 0, y = void 0, g = void 0;
                    if (l >= 0) {
                        y = t.slice(l);
                        while (!co.test(y) && !lo.test(y) && !po.test(y) && !vo.test(y)) {
                            // < in plain text, be forgiving and treat it as text
                            g = y.indexOf("<", 1);
                            if (g < 0) {
                                break;
                            }
                            l += g;
                            y = t.slice(l);
                        }
                        m = t.substring(0, l);
                        C(l);
                    }
                    if (l < 0) {
                        m = t;
                        t = "";
                    }
                    if (e.chars && m) {
                        e.chars(m);
                    }
                } else {
                    var b = 0;
                    var x = u.toLowerCase();
                    var w = go[x] || (go[x] = new RegExp("([\\s\\S]*?)(</" + x + "[^>]*>)", "i"));
                    var _ = t.replace(w, function(t, n, r) {
                        b = r.length;
                        if (!yo(x) && x !== "noscript") {
                            n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                        }
                        if (Co(x, n)) {
                            n = n.slice(1);
                        }
                        if (e.chars) {
                            e.chars(n);
                        }
                        return "";
                    });
                    s += t.length - _.length;
                    t = _;
                    $(x, s - b, s);
                }
                if (t === o) {
                    e.chars && e.chars(t);
                    if ("development" !== "production" && !n.length && e.warn) {
                        e.warn('Mal-formatted tag at end of template: "' + t + '"');
                    }
                    break;
                }
            }
            // Clean up any remaining tags
            $();
            function C(e) {
                s += e;
                t = t.substring(e);
            }
            function k() {
                var e = t.match(lo);
                if (e) {
                    var n = {
                        tagName: e[1],
                        attrs: [],
                        start: s
                    };
                    C(e[0].length);
                    var r, i;
                    while (!(r = t.match(fo)) && (i = t.match(so))) {
                        C(i[0].length);
                        n.attrs.push(i);
                    }
                    if (r) {
                        n.unarySlash = r[1];
                        C(r[0].length);
                        n.end = s;
                        return n;
                    }
                }
            }
            function A(t) {
                var s = t.tagName;
                var o = t.unarySlash;
                if (r) {
                    if (u === "p" && Qs(s)) {
                        $(u);
                    }
                    if (a(s) && u === s) {
                        $(s);
                    }
                }
                var l = i(s) || !!o;
                var f = t.attrs.length;
                var c = new Array(f);
                for (var h = 0; h < f; h++) {
                    var d = t.attrs[h];
                    // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
                    if (mo && d[0].indexOf('""') === -1) {
                        if (d[3] === "") {
                            delete d[3];
                        }
                        if (d[4] === "") {
                            delete d[4];
                        }
                        if (d[5] === "") {
                            delete d[5];
                        }
                    }
                    var p = d[3] || d[4] || d[5] || "";
                    c[h] = {
                        name: d[1],
                        value: ko(p, e.shouldDecodeNewlines)
                    };
                }
                if (!l) {
                    n.push({
                        tag: s,
                        lowerCasedTag: s.toLowerCase(),
                        attrs: c
                    });
                    u = s;
                }
                if (e.start) {
                    e.start(s, c, l, t.start, t.end);
                }
            }
            function $(t, r, i) {
                var a, o;
                if (r == null) {
                    r = s;
                }
                if (i == null) {
                    i = s;
                }
                if (t) {
                    o = t.toLowerCase();
                }
                // Find the closest opened tag of the same type
                if (t) {
                    for (a = n.length - 1; a >= 0; a--) {
                        if (n[a].lowerCasedTag === o) {
                            break;
                        }
                    }
                } else {
                    // If no tag name is provided, clean shop
                    a = 0;
                }
                if (a >= 0) {
                    // Close all the open elements, up the stack
                    for (var l = n.length - 1; l >= a; l--) {
                        if ("development" !== "production" && (l > a || !t) && e.warn) {
                            e.warn("tag <" + n[l].tag + "> has no matching end tag.");
                        }
                        if (e.end) {
                            e.end(n[l].tag, r, i);
                        }
                    }
                    // Remove the open elements from the stack
                    n.length = a;
                    u = a && n[a - 1].tag;
                } else if (o === "br") {
                    if (e.start) {
                        e.start(t, [], true, r, i);
                    }
                } else if (o === "p") {
                    if (e.start) {
                        e.start(t, [], false, r, i);
                    }
                    if (e.end) {
                        e.end(t, r, i);
                    }
                }
            }
        }
        /*  */
        var $o = /^@|^v-on:/;
        var So = /^v-|^@|^:/;
        var Mo = /(.*?)\s+(?:in|of)\s+(.*)/;
        var Oo = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
        var No = /:(.*)$/;
        var Po = /^:|^v-bind:/;
        var To = /\.[^.]+/g;
        var Eo = x(no.decode);
        // configurable state
        var jo;
        var Lo;
        var Fo;
        var Io;
        var Do;
        var Ro;
        var Bo;
        var Vo;
        /**
 * Convert HTML string to AST.
 */
        function Uo(t, e) {
            jo = e.warn || Fi;
            Ro = e.isPreTag || P;
            Bo = e.mustUseProp || P;
            Vo = e.getTagNamespace || P;
            Fo = Ii(e.modules, "transformNode");
            Io = Ii(e.modules, "preTransformNode");
            Do = Ii(e.modules, "postTransformNode");
            Lo = e.delimiters;
            var n = [];
            var r = e.preserveWhitespace !== false;
            var i;
            var a;
            var s = false;
            var o = false;
            var u = false;
            function l(t) {
                if (!u) {
                    u = true;
                    jo(t);
                }
            }
            function f(t) {
                // check pre state
                if (t.pre) {
                    s = false;
                }
                if (Ro(t.tag)) {
                    o = false;
                }
            }
            Ao(t, {
                warn: jo,
                expectHTML: e.expectHTML,
                isUnaryTag: e.isUnaryTag,
                canBeLeftOpenTag: e.canBeLeftOpenTag,
                shouldDecodeNewlines: e.shouldDecodeNewlines,
                shouldKeepComment: e.comments,
                start: function t(r, u, c) {
                    // check namespace.
                    // inherit parent ns if there is one
                    var h = a && a.ns || Vo(r);
                    // handle IE svg bug
                    /* istanbul ignore if */
                    if (it && h === "svg") {
                        u = lu(u);
                    }
                    var d = {
                        type: 1,
                        tag: r,
                        attrsList: u,
                        attrsMap: iu(u),
                        parent: a,
                        children: []
                    };
                    if (h) {
                        d.ns = h;
                    }
                    if (su(d) && !pt()) {
                        d.forbidden = true;
                        "development" !== "production" && jo("Templates should only be responsible for mapping the state to the " + "UI. Avoid placing tags with side-effects in your templates, such as " + "<" + r + ">" + ", as they will not be parsed.");
                    }
                    // apply pre-transforms
                    for (var p = 0; p < Io.length; p++) {
                        Io[p](d, e);
                    }
                    if (!s) {
                        qo(d);
                        if (d.pre) {
                            s = true;
                        }
                    }
                    if (Ro(d.tag)) {
                        o = true;
                    }
                    if (s) {
                        zo(d);
                    } else {
                        Yo(d);
                        Go(d);
                        Zo(d);
                        Ho(d);
                        // determine whether this is a plain element after
                        // removing structural attributes
                        d.plain = !d.key && !u.length;
                        Xo(d);
                        Qo(d);
                        tu(d);
                        for (var v = 0; v < Fo.length; v++) {
                            Fo[v](d, e);
                        }
                        eu(d);
                    }
                    function m(t) {
                        if (true) {
                            if (t.tag === "slot" || t.tag === "template") {
                                l("Cannot use <" + t.tag + "> as component root element because it may " + "contain multiple nodes.");
                            }
                            if (t.attrsMap.hasOwnProperty("v-for")) {
                                l("Cannot use v-for on stateful component root element because " + "it renders multiple elements.");
                            }
                        }
                    }
                    // tree management
                    if (!i) {
                        i = d;
                        m(i);
                    } else if (!n.length) {
                        // allow root elements with v-if, v-else-if and v-else
                        if (i.if && (d.elseif || d.else)) {
                            m(d);
                            Ko(i, {
                                exp: d.elseif,
                                block: d
                            });
                        } else if (true) {
                            l("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
                        }
                    }
                    if (a && !d.forbidden) {
                        if (d.elseif || d.else) {
                            Jo(d, a);
                        } else if (d.slotScope) {
                            // scoped slot
                            a.plain = false;
                            var y = d.slotTarget || '"default"';
                            (a.scopedSlots || (a.scopedSlots = {}))[y] = d;
                        } else {
                            a.children.push(d);
                            d.parent = a;
                        }
                    }
                    if (!c) {
                        a = d;
                        n.push(d);
                    } else {
                        f(d);
                    }
                    // apply post-transforms
                    for (var g = 0; g < Do.length; g++) {
                        Do[g](d, e);
                    }
                },
                end: function t() {
                    // remove trailing whitespace
                    var e = n[n.length - 1];
                    var r = e.children[e.children.length - 1];
                    if (r && r.type === 3 && r.text === " " && !o) {
                        e.children.pop();
                    }
                    // pop stack
                    n.length -= 1;
                    a = n[n.length - 1];
                    f(e);
                },
                chars: function e(n) {
                    if (!a) {
                        if (true) {
                            if (n === t) {
                                l("Component template requires a root element, rather than just text.");
                            } else if (n = n.trim()) {
                                l('text "' + n + '" outside root element will be ignored.');
                            }
                        }
                        return;
                    }
                    // IE textarea placeholder bug
                    /* istanbul ignore if */
                    if (it && a.tag === "textarea" && a.attrsMap.placeholder === n) {
                        return;
                    }
                    var i = a.children;
                    n = o || n.trim() ? au(a) ? n : Eo(n) : r && i.length ? " " : "";
                    if (n) {
                        var u;
                        if (!s && n !== " " && (u = Bs(n, Lo))) {
                            i.push({
                                type: 2,
                                expression: u,
                                text: n
                            });
                        } else if (n !== " " || !i.length || i[i.length - 1].text !== " ") {
                            i.push({
                                type: 3,
                                text: n
                            });
                        }
                    }
                },
                comment: function t(e) {
                    a.children.push({
                        type: 3,
                        text: e,
                        isComment: true
                    });
                }
            });
            return i;
        }
        function qo(t) {
            if (qi(t, "v-pre") != null) {
                t.pre = true;
            }
        }
        function zo(t) {
            var e = t.attrsList.length;
            if (e) {
                var n = t.attrs = new Array(e);
                for (var r = 0; r < e; r++) {
                    n[r] = {
                        name: t.attrsList[r].name,
                        value: JSON.stringify(t.attrsList[r].value)
                    };
                }
            } else if (!t.pre) {
                // non root node in pre blocks with no attributes
                t.plain = true;
            }
        }
        function Ho(t) {
            var e = Ui(t, "key");
            if (e) {
                if ("development" !== "production" && t.tag === "template") {
                    jo("<template> cannot be keyed. Place the key on real elements instead.");
                }
                t.key = e;
            }
        }
        function Xo(t) {
            var e = Ui(t, "ref");
            if (e) {
                t.ref = e;
                t.refInFor = nu(t);
            }
        }
        function Yo(t) {
            var e;
            if (e = qi(t, "v-for")) {
                var n = e.match(Mo);
                if (!n) {
                    "development" !== "production" && jo("Invalid v-for expression: " + e);
                    return;
                }
                t.for = n[2].trim();
                var r = n[1].trim();
                var i = r.match(Oo);
                if (i) {
                    t.alias = i[1].trim();
                    t.iterator1 = i[2].trim();
                    if (i[3]) {
                        t.iterator2 = i[3].trim();
                    }
                } else {
                    t.alias = r;
                }
            }
        }
        function Go(t) {
            var e = qi(t, "v-if");
            if (e) {
                t.if = e;
                Ko(t, {
                    exp: e,
                    block: t
                });
            } else {
                if (qi(t, "v-else") != null) {
                    t.else = true;
                }
                var n = qi(t, "v-else-if");
                if (n) {
                    t.elseif = n;
                }
            }
        }
        function Jo(t, e) {
            var n = Wo(e.children);
            if (n && n.if) {
                Ko(n, {
                    exp: t.elseif,
                    block: t
                });
            } else if (true) {
                jo("v-" + (t.elseif ? 'else-if="' + t.elseif + '"' : "else") + " " + "used on element <" + t.tag + "> without corresponding v-if.");
            }
        }
        function Wo(t) {
            var e = t.length;
            while (e--) {
                if (t[e].type === 1) {
                    return t[e];
                } else {
                    if ("development" !== "production" && t[e].text !== " ") {
                        jo('text "' + t[e].text.trim() + '" between v-if and v-else(-if) ' + "will be ignored.");
                    }
                    t.pop();
                }
            }
        }
        function Ko(t, e) {
            if (!t.ifConditions) {
                t.ifConditions = [];
            }
            t.ifConditions.push(e);
        }
        function Zo(t) {
            var e = qi(t, "v-once");
            if (e != null) {
                t.once = true;
            }
        }
        function Qo(t) {
            if (t.tag === "slot") {
                t.slotName = Ui(t, "name");
                if ("development" !== "production" && t.key) {
                    jo("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
                }
            } else {
                var e = Ui(t, "slot");
                if (e) {
                    t.slotTarget = e === '""' ? '"default"' : e;
                }
                if (t.tag === "template") {
                    t.slotScope = qi(t, "scope");
                }
            }
        }
        function tu(t) {
            var e;
            if (e = Ui(t, "is")) {
                t.component = e;
            }
            if (qi(t, "inline-template") != null) {
                t.inlineTemplate = true;
            }
        }
        function eu(t) {
            var e = t.attrsList;
            var n, r, i, a, s, o, u;
            for (n = 0, r = e.length; n < r; n++) {
                i = a = e[n].name;
                s = e[n].value;
                if (So.test(i)) {
                    // mark element as dynamic
                    t.hasBindings = true;
                    // modifiers
                    o = ru(i);
                    if (o) {
                        i = i.replace(To, "");
                    }
                    if (Po.test(i)) {
                        // v-bind
                        i = i.replace(Po, "");
                        s = ji(s);
                        u = false;
                        if (o) {
                            if (o.prop) {
                                u = true;
                                i = _(i);
                                if (i === "innerHtml") {
                                    i = "innerHTML";
                                }
                            }
                            if (o.camel) {
                                i = _(i);
                            }
                            if (o.sync) {
                                Vi(t, "update:" + _(i), Hi(s, "$event"));
                            }
                        }
                        if (u || !t.component && Bo(t.tag, t.attrsMap.type, i)) {
                            Di(t, i, s);
                        } else {
                            Ri(t, i, s);
                        }
                    } else if ($o.test(i)) {
                        // v-on
                        i = i.replace($o, "");
                        Vi(t, i, s, o, false, jo);
                    } else {
                        // normal directives
                        i = i.replace(So, "");
                        // parse arg
                        var l = i.match(No);
                        var f = l && l[1];
                        if (f) {
                            i = i.slice(0, -(f.length + 1));
                        }
                        Bi(t, i, a, s, f, o);
                        if ("development" !== "production" && i === "model") {
                            fu(t, s);
                        }
                    }
                } else {
                    // literal attribute
                    if (true) {
                        var c = Bs(s, Lo);
                        if (c) {
                            jo(i + '="' + s + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div id="{{ val }}">, use <div :id="val">.');
                        }
                    }
                    Ri(t, i, JSON.stringify(s));
                }
            }
        }
        function nu(t) {
            var e = t;
            while (e) {
                if (e.for !== undefined) {
                    return true;
                }
                e = e.parent;
            }
            return false;
        }
        function ru(t) {
            var e = t.match(To);
            if (e) {
                var n = {};
                e.forEach(function(t) {
                    n[t.slice(1)] = true;
                });
                return n;
            }
        }
        function iu(t) {
            var e = {};
            for (var n = 0, r = t.length; n < r; n++) {
                if ("development" !== "production" && e[t[n].name] && !it && !st) {
                    jo("duplicate attribute: " + t[n].name);
                }
                e[t[n].name] = t[n].value;
            }
            return e;
        }
        // for script (e.g. type="x/template") or style, do not decode content
        function au(t) {
            return t.tag === "script" || t.tag === "style";
        }
        function su(t) {
            return t.tag === "style" || t.tag === "script" && (!t.attrsMap.type || t.attrsMap.type === "text/javascript");
        }
        var ou = /^xmlns:NS\d+/;
        var uu = /^NS\d+:/;
        /* istanbul ignore next */
        function lu(t) {
            var e = [];
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (!ou.test(r.name)) {
                    r.name = r.name.replace(uu, "");
                    e.push(r);
                }
            }
            return e;
        }
        function fu(t, e) {
            var n = t;
            while (n) {
                if (n.for && n.alias === e) {
                    jo("<" + t.tag + ' v-model="' + e + '">: ' + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
                }
                n = n.parent;
            }
        }
        /*  */
        var cu;
        var hu;
        var du = x(vu);
        /**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
        function pu(t, e) {
            if (!t) {
                return;
            }
            cu = du(e.staticKeys || "");
            hu = e.isReservedTag || P;
            // first pass: mark all non-static nodes.
            mu(t);
            // second pass: mark static roots.
            yu(t, false);
        }
        function vu(t) {
            return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""));
        }
        function mu(t) {
            t.static = gu(t);
            if (t.type === 1) {
                // do not make component slot content static. this avoids
                // 1. components not able to mutate slot nodes
                // 2. static slot content fails for hot-reloading
                if (!hu(t.tag) && t.tag !== "slot" && t.attrsMap["inline-template"] == null) {
                    return;
                }
                for (var e = 0, n = t.children.length; e < n; e++) {
                    var r = t.children[e];
                    mu(r);
                    if (!r.static) {
                        t.static = false;
                    }
                }
                if (t.ifConditions) {
                    for (var i = 1, a = t.ifConditions.length; i < a; i++) {
                        var s = t.ifConditions[i].block;
                        mu(s);
                        if (!s.static) {
                            t.static = false;
                        }
                    }
                }
            }
        }
        function yu(t, e) {
            if (t.type === 1) {
                if (t.static || t.once) {
                    t.staticInFor = e;
                }
                // For a node to qualify as a static root, it should have children that
                // are not just static text. Otherwise the cost of hoisting out will
                // outweigh the benefits and it's better off to just always render it fresh.
                if (t.static && t.children.length && !(t.children.length === 1 && t.children[0].type === 3)) {
                    t.staticRoot = true;
                    return;
                } else {
                    t.staticRoot = false;
                }
                if (t.children) {
                    for (var n = 0, r = t.children.length; n < r; n++) {
                        yu(t.children[n], e || !!t.for);
                    }
                }
                if (t.ifConditions) {
                    for (var i = 1, a = t.ifConditions.length; i < a; i++) {
                        yu(t.ifConditions[i].block, e);
                    }
                }
            }
        }
        function gu(t) {
            if (t.type === 2) {
                // expression
                return false;
            }
            if (t.type === 3) {
                // text
                return true;
            }
            // no dynamic bindings
            // not v-if or v-for or v-else
            // not a built-in
            // not a component
            return !!(t.pre || !t.hasBindings && !t.if && !t.for && !v(t.tag) && hu(t.tag) && !bu(t) && Object.keys(t).every(cu));
        }
        function bu(t) {
            while (t.parent) {
                t = t.parent;
                if (t.tag !== "template") {
                    return false;
                }
                if (t.for) {
                    return true;
                }
            }
            return false;
        }
        /*  */
        var xu = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
        var wu = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;
        // keyCode aliases
        var _u = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [ 8, 46 ]
        };
        // #4868: modifiers that prevent the execution of the listener
        // need to explicitly return null so that we can determine whether to remove
        // the listener for .once
        var Cu = function(t) {
            return "if(" + t + ")return null;";
        };
        var ku = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: Cu("$event.target !== $event.currentTarget"),
            ctrl: Cu("!$event.ctrlKey"),
            shift: Cu("!$event.shiftKey"),
            alt: Cu("!$event.altKey"),
            meta: Cu("!$event.metaKey"),
            left: Cu("'button' in $event && $event.button !== 0"),
            middle: Cu("'button' in $event && $event.button !== 1"),
            right: Cu("'button' in $event && $event.button !== 2")
        };
        function Au(t, e, n) {
            var r = e ? "nativeOn:{" : "on:{";
            for (var i in t) {
                var a = t[i];
                // #5330: warn click.right, since right clicks do not actually fire click events.
                if ("development" !== "production" && i === "click" && a && a.modifiers && a.modifiers.right) {
                    n('Use "contextmenu" instead of "click.right" since right clicks ' + 'do not actually fire "click" events.');
                }
                r += '"' + i + '":' + $u(i, a) + ",";
            }
            return r.slice(0, -1) + "}";
        }
        function $u(t, e) {
            if (!e) {
                return "function(){}";
            }
            if (Array.isArray(e)) {
                return "[" + e.map(function(e) {
                    return $u(t, e);
                }).join(",") + "]";
            }
            var n = wu.test(e.value);
            var r = xu.test(e.value);
            if (!e.modifiers) {
                return n || r ? e.value : "function($event){" + e.value + "}";
            } else {
                var i = "";
                var a = "";
                var s = [];
                for (var o in e.modifiers) {
                    if (ku[o]) {
                        a += ku[o];
                        // left/right
                        if (_u[o]) {
                            s.push(o);
                        }
                    } else {
                        s.push(o);
                    }
                }
                if (s.length) {
                    i += Su(s);
                }
                // Make sure modifiers like prevent and stop get executed after key filtering
                if (a) {
                    i += a;
                }
                var u = n ? e.value + "($event)" : r ? "(" + e.value + ")($event)" : e.value;
                return "function($event){" + i + u + "}";
            }
        }
        function Su(t) {
            return "if(!('button' in $event)&&" + t.map(Mu).join("&&") + ")return null;";
        }
        function Mu(t) {
            var e = parseInt(t, 10);
            if (e) {
                return "$event.keyCode!==" + e;
            }
            var n = _u[t];
            return "_k($event.keyCode," + JSON.stringify(t) + (n ? "," + JSON.stringify(n) : "") + ")";
        }
        /*  */
        function Ou(t, e) {
            if ("development" !== "production" && e.modifiers) {
                X("v-on without argument does not support modifiers.");
            }
            t.wrapListeners = function(t) {
                return "_g(" + t + "," + e.value + ")";
            };
        }
        /*  */
        function Nu(t, e) {
            t.wrapData = function(n) {
                return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")";
            };
        }
        /*  */
        var Pu = {
            on: Ou,
            bind: Nu,
            cloak: N
        };
        /*  */
        var Tu = function t(e) {
            this.options = e;
            this.warn = e.warn || Fi;
            this.transforms = Ii(e.modules, "transformCode");
            this.dataGenFns = Ii(e.modules, "genData");
            this.directives = M(M({}, Pu), e.directives);
            var n = e.isReservedTag || P;
            this.maybeComponent = function(t) {
                return !n(t.tag);
            };
            this.onceId = 0;
            this.staticRenderFns = [];
        };
        function Eu(t, e) {
            var n = new Tu(e);
            var r = t ? ju(t, n) : '_c("div")';
            return {
                render: "with(this){return " + r + "}",
                staticRenderFns: n.staticRenderFns
            };
        }
        function ju(t, e) {
            if (t.staticRoot && !t.staticProcessed) {
                return Lu(t, e);
            } else if (t.once && !t.onceProcessed) {
                return Fu(t, e);
            } else if (t.for && !t.forProcessed) {
                return Ru(t, e);
            } else if (t.if && !t.ifProcessed) {
                return Iu(t, e);
            } else if (t.tag === "template" && !t.slotTarget) {
                return Xu(t, e) || "void 0";
            } else if (t.tag === "slot") {
                return Zu(t, e);
            } else {
                // component or element
                var n;
                if (t.component) {
                    n = Qu(t.component, t, e);
                } else {
                    var r = t.plain ? undefined : Bu(t, e);
                    var i = t.inlineTemplate ? null : Xu(t, e, true);
                    n = "_c('" + t.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
                }
                // module transforms
                for (var a = 0; a < e.transforms.length; a++) {
                    n = e.transforms[a](t, n);
                }
                return n;
            }
        }
        // hoist static sub-trees out
        function Lu(t, e) {
            t.staticProcessed = true;
            e.staticRenderFns.push("with(this){return " + ju(t, e) + "}");
            return "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")";
        }
        // v-once
        function Fu(t, e) {
            t.onceProcessed = true;
            if (t.if && !t.ifProcessed) {
                return Iu(t, e);
            } else if (t.staticInFor) {
                var n = "";
                var r = t.parent;
                while (r) {
                    if (r.for) {
                        n = r.key;
                        break;
                    }
                    r = r.parent;
                }
                if (!n) {
                    "development" !== "production" && e.warn("v-once can only be used inside v-for that is keyed. ");
                    return ju(t, e);
                }
                return "_o(" + ju(t, e) + "," + e.onceId++ + (n ? "," + n : "") + ")";
            } else {
                return Lu(t, e);
            }
        }
        function Iu(t, e, n, r) {
            t.ifProcessed = true;
            // avoid recursion
            return Du(t.ifConditions.slice(), e, n, r);
        }
        function Du(t, e, n, r) {
            if (!t.length) {
                return r || "_e()";
            }
            var i = t.shift();
            if (i.exp) {
                return "(" + i.exp + ")?" + a(i.block) + ":" + Du(t, e, n, r);
            } else {
                return "" + a(i.block);
            }
            // v-if with v-once should generate code like (a)?_m(0):_m(1)
            function a(t) {
                return n ? n(t, e) : t.once ? Fu(t, e) : ju(t, e);
            }
        }
        function Ru(t, e, n, r) {
            var i = t.for;
            var a = t.alias;
            var s = t.iterator1 ? "," + t.iterator1 : "";
            var o = t.iterator2 ? "," + t.iterator2 : "";
            if ("development" !== "production" && e.maybeComponent(t) && t.tag !== "slot" && t.tag !== "template" && !t.key) {
                e.warn("<" + t.tag + ' v-for="' + a + " in " + i + '">: component lists rendered with ' + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", true);
            }
            t.forProcessed = true;
            // avoid recursion
            return (r || "_l") + "((" + i + ")," + "function(" + a + s + o + "){" + "return " + (n || ju)(t, e) + "})";
        }
        function Bu(t, e) {
            var n = "{";
            // directives first.
            // directives may mutate the el's other properties before they are generated.
            var r = Vu(t, e);
            if (r) {
                n += r + ",";
            }
            // key
            if (t.key) {
                n += "key:" + t.key + ",";
            }
            // ref
            if (t.ref) {
                n += "ref:" + t.ref + ",";
            }
            if (t.refInFor) {
                n += "refInFor:true,";
            }
            // pre
            if (t.pre) {
                n += "pre:true,";
            }
            // record original tag name for components using "is" attribute
            if (t.component) {
                n += 'tag:"' + t.tag + '",';
            }
            // module data generation functions
            for (var i = 0; i < e.dataGenFns.length; i++) {
                n += e.dataGenFns[i](t);
            }
            // attributes
            if (t.attrs) {
                n += "attrs:{" + tl(t.attrs) + "},";
            }
            // DOM props
            if (t.props) {
                n += "domProps:{" + tl(t.props) + "},";
            }
            // event handlers
            if (t.events) {
                n += Au(t.events, false, e.warn) + ",";
            }
            if (t.nativeEvents) {
                n += Au(t.nativeEvents, true, e.warn) + ",";
            }
            // slot target
            if (t.slotTarget) {
                n += "slot:" + t.slotTarget + ",";
            }
            // scoped slots
            if (t.scopedSlots) {
                n += qu(t.scopedSlots, e) + ",";
            }
            // component v-model
            if (t.model) {
                n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},";
            }
            // inline-template
            if (t.inlineTemplate) {
                var a = Uu(t, e);
                if (a) {
                    n += a + ",";
                }
            }
            n = n.replace(/,$/, "") + "}";
            // v-bind data wrap
            if (t.wrapData) {
                n = t.wrapData(n);
            }
            // v-on data wrap
            if (t.wrapListeners) {
                n = t.wrapListeners(n);
            }
            return n;
        }
        function Vu(t, e) {
            var n = t.directives;
            if (!n) {
                return;
            }
            var r = "directives:[";
            var i = false;
            var a, s, o, u;
            for (a = 0, s = n.length; a < s; a++) {
                o = n[a];
                u = true;
                var l = e.directives[o.name];
                if (l) {
                    // compile-time directive that manipulates AST.
                    // returns true if it also needs a runtime counterpart.
                    u = !!l(t, o, e.warn);
                }
                if (u) {
                    i = true;
                    r += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},";
                }
            }
            if (i) {
                return r.slice(0, -1) + "]";
            }
        }
        function Uu(t, e) {
            var n = t.children[0];
            if ("development" !== "production" && (t.children.length > 1 || n.type !== 1)) {
                e.warn("Inline-template components must have exactly one child element.");
            }
            if (n.type === 1) {
                var r = Eu(n, e.options);
                return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(t) {
                    return "function(){" + t + "}";
                }).join(",") + "]}";
            }
        }
        function qu(t, e) {
            return "scopedSlots:_u([" + Object.keys(t).map(function(n) {
                return zu(n, t[n], e);
            }).join(",") + "])";
        }
        function zu(t, e, n) {
            if (e.for && !e.forProcessed) {
                return Hu(t, e, n);
            }
            return "{key:" + t + ",fn:function(" + String(e.attrsMap.scope) + "){" + "return " + (e.tag === "template" ? Xu(e, n) || "void 0" : ju(e, n)) + "}}";
        }
        function Hu(t, e, n) {
            var r = e.for;
            var i = e.alias;
            var a = e.iterator1 ? "," + e.iterator1 : "";
            var s = e.iterator2 ? "," + e.iterator2 : "";
            e.forProcessed = true;
            // avoid recursion
            return "_l((" + r + ")," + "function(" + i + a + s + "){" + "return " + zu(t, e, n) + "})";
        }
        function Xu(t, e, n, r, i) {
            var a = t.children;
            if (a.length) {
                var s = a[0];
                // optimize single v-for
                if (a.length === 1 && s.for && s.tag !== "template" && s.tag !== "slot") {
                    return (r || ju)(s, e);
                }
                var o = n ? Yu(a, e.maybeComponent) : 0;
                var u = i || Ju;
                return "[" + a.map(function(t) {
                    return u(t, e);
                }).join(",") + "]" + (o ? "," + o : "");
            }
        }
        // determine the normalization needed for the children array.
        // 0: no normalization needed
        // 1: simple normalization needed (possible 1-level deep nested array)
        // 2: full normalization needed
        function Yu(t, e) {
            var n = 0;
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.type !== 1) {
                    continue;
                }
                if (Gu(i) || i.ifConditions && i.ifConditions.some(function(t) {
                    return Gu(t.block);
                })) {
                    n = 2;
                    break;
                }
                if (e(i) || i.ifConditions && i.ifConditions.some(function(t) {
                    return e(t.block);
                })) {
                    n = 1;
                }
            }
            return n;
        }
        function Gu(t) {
            return t.for !== undefined || t.tag === "template" || t.tag === "slot";
        }
        function Ju(t, e) {
            if (t.type === 1) {
                return ju(t, e);
            }
            if (t.type === 3 && t.isComment) {
                return Ku(t);
            } else {
                return Wu(t);
            }
        }
        function Wu(t) {
            return "_v(" + (t.type === 2 ? t.expression : el(JSON.stringify(t.text))) + ")";
        }
        function Ku(t) {
            return "_e(" + JSON.stringify(t.text) + ")";
        }
        function Zu(t, e) {
            var n = t.slotName || '"default"';
            var r = Xu(t, e);
            var i = "_t(" + n + (r ? "," + r : "");
            var a = t.attrs && "{" + t.attrs.map(function(t) {
                return _(t.name) + ":" + t.value;
            }).join(",") + "}";
            var s = t.attrsMap["v-bind"];
            if ((a || s) && !r) {
                i += ",null";
            }
            if (a) {
                i += "," + a;
            }
            if (s) {
                i += (a ? "" : ",null") + "," + s;
            }
            return i + ")";
        }
        // componentName is el.component, take it as argument to shun flow's pessimistic refinement
        function Qu(t, e, n) {
            var r = e.inlineTemplate ? null : Xu(e, n, true);
            return "_c(" + t + "," + Bu(e, n) + (r ? "," + r : "") + ")";
        }
        function tl(t) {
            var e = "";
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                e += '"' + r.name + '":' + el(r.value) + ",";
            }
            return e.slice(0, -1);
        }
        // #3895, #4268
        function el(t) {
            return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        /*  */
        // these keywords should not appear inside expressions, but operators like
        // typeof, instanceof and in are allowed
        var nl = new RegExp("\\b" + ("do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," + "super,throw,while,yield,delete,export,import,return,switch,default," + "extends,finally,continue,debugger,function,arguments").split(",").join("\\b|\\b") + "\\b");
        // these unary operators should not be used as property/method names
        var rl = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        // check valid identifier for v-for
        var il = /[A-Za-z_$][\w$]*/;
        // strip strings in expressions
        var al = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        // detect problematic expressions in a template
        function sl(t) {
            var e = [];
            if (t) {
                ol(t, e);
            }
            return e;
        }
        function ol(t, e) {
            if (t.type === 1) {
                for (var n in t.attrsMap) {
                    if (So.test(n)) {
                        var r = t.attrsMap[n];
                        if (r) {
                            if (n === "v-for") {
                                ll(t, 'v-for="' + r + '"', e);
                            } else if ($o.test(n)) {
                                ul(r, n + '="' + r + '"', e);
                            } else {
                                cl(r, n + '="' + r + '"', e);
                            }
                        }
                    }
                }
                if (t.children) {
                    for (var i = 0; i < t.children.length; i++) {
                        ol(t.children[i], e);
                    }
                }
            } else if (t.type === 2) {
                cl(t.expression, t.text, e);
            }
        }
        function ul(t, e, n) {
            var r = t.replace(al, "");
            var i = r.match(rl);
            if (i && r.charAt(i.index - 1) !== "$") {
                n.push("avoid using JavaScript unary operator as property name: " + '"' + i[0] + '" in expression ' + e.trim());
            }
            cl(t, e, n);
        }
        function ll(t, e, n) {
            cl(t.for || "", e, n);
            fl(t.alias, "v-for alias", e, n);
            fl(t.iterator1, "v-for iterator", e, n);
            fl(t.iterator2, "v-for iterator", e, n);
        }
        function fl(t, e, n, r) {
            if (typeof t === "string" && !il.test(t)) {
                r.push("invalid " + e + ' "' + t + '" in expression: ' + n.trim());
            }
        }
        function cl(t, e, n) {
            try {
                new Function("return " + t);
            } catch (i) {
                var r = t.replace(al, "").match(nl);
                if (r) {
                    n.push("avoid using JavaScript keyword as property name: " + '"' + r[0] + '" in expression ' + e.trim());
                } else {
                    n.push("invalid expression: " + e.trim());
                }
            }
        }
        /*  */
        function hl(t, e) {
            try {
                return new Function(t);
            } catch (n) {
                e.push({
                    err: n,
                    code: t
                });
                return N;
            }
        }
        function dl(t) {
            var e = Object.create(null);
            return function n(r, i, a) {
                i = i || {};
                /* istanbul ignore if */
                if (true) {
                    // detect possible CSP restriction
                    try {
                        new Function("return 1");
                    } catch (t) {
                        if (t.toString().match(/unsafe-eval|CSP/)) {
                            X("It seems you are using the standalone build of Vue.js in an " + "environment with Content Security Policy that prohibits unsafe-eval. " + "The template compiler cannot work in this environment. Consider " + "relaxing the policy to allow unsafe-eval or pre-compiling your " + "templates into render functions.");
                        }
                    }
                }
                // check cache
                var s = i.delimiters ? String(i.delimiters) + r : r;
                if (e[s]) {
                    return e[s];
                }
                // compile
                var o = t(r, i);
                // check compilation errors/tips
                if (true) {
                    if (o.errors && o.errors.length) {
                        X("Error compiling template:\n\n" + r + "\n\n" + o.errors.map(function(t) {
                            return "- " + t;
                        }).join("\n") + "\n", a);
                    }
                    if (o.tips && o.tips.length) {
                        o.tips.forEach(function(t) {
                            return Y(t, a);
                        });
                    }
                }
                // turn code into functions
                var u = {};
                var l = [];
                u.render = hl(o.render, l);
                u.staticRenderFns = o.staticRenderFns.map(function(t) {
                    return hl(t, l);
                });
                // check function generation errors.
                // this should only happen if there is a bug in the compiler itself.
                // mostly for codegen development use
                /* istanbul ignore if */
                if (true) {
                    if ((!o.errors || !o.errors.length) && l.length) {
                        X("Failed to generate render function:\n\n" + l.map(function(t) {
                            var e = t.err;
                            var n = t.code;
                            return e.toString() + " in\n\n" + n + "\n";
                        }).join("\n"), a);
                    }
                }
                return e[s] = u;
            };
        }
        /*  */
        function pl(t) {
            return function e(n) {
                function r(e, r) {
                    var i = Object.create(n);
                    var a = [];
                    var s = [];
                    i.warn = function(t, e) {
                        (e ? s : a).push(t);
                    };
                    if (r) {
                        // merge custom modules
                        if (r.modules) {
                            i.modules = (n.modules || []).concat(r.modules);
                        }
                        // merge custom directives
                        if (r.directives) {
                            i.directives = M(Object.create(n.directives), r.directives);
                        }
                        // copy other options
                        for (var o in r) {
                            if (o !== "modules" && o !== "directives") {
                                i[o] = r[o];
                            }
                        }
                    }
                    var u = t(e, i);
                    if (true) {
                        a.push.apply(a, sl(u.ast));
                    }
                    u.errors = a;
                    u.tips = s;
                    return u;
                }
                return {
                    compile: r,
                    compileToFunctions: dl(r)
                };
            };
        }
        /*  */
        // `createCompilerCreator` allows creating compilers that use alternative
        // parser/optimizer/codegen, e.g the SSR optimizing compiler.
        // Here we just export a default compiler using the default parts.
        var vl = pl(function t(e, n) {
            var r = Uo(e.trim(), n);
            pu(r, n);
            var i = Eu(r, n);
            return {
                ast: r,
                render: i.render,
                staticRenderFns: i.staticRenderFns
            };
        });
        /*  */
        var ml = vl(to);
        var yl = ml.compileToFunctions;
        /*  */
        var gl = x(function(t) {
            var e = Zr(t);
            return e && e.innerHTML;
        });
        var bl = dr.prototype.$mount;
        dr.prototype.$mount = function(t, e) {
            t = t && Zr(t);
            /* istanbul ignore if */
            if (t === document.body || t === document.documentElement) {
                "development" !== "production" && X("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
                return this;
            }
            var n = this.$options;
            // resolve template/el and convert to render function
            if (!n.render) {
                var r = n.template;
                if (r) {
                    if (typeof r === "string") {
                        if (r.charAt(0) === "#") {
                            r = gl(r);
                            /* istanbul ignore if */
                            if ("development" !== "production" && !r) {
                                X("Template element not found or is empty: " + n.template, this);
                            }
                        }
                    } else if (r.nodeType) {
                        r = r.innerHTML;
                    } else {
                        if (true) {
                            X("invalid template option:" + r, this);
                        }
                        return this;
                    }
                } else if (t) {
                    r = xl(t);
                }
                if (r) {
                    /* istanbul ignore if */
                    if ("development" !== "production" && B.performance && ne) {
                        ne("compile");
                    }
                    var i = yl(r, {
                        shouldDecodeNewlines: Fs,
                        delimiters: n.delimiters,
                        comments: n.comments
                    }, this);
                    var a = i.render;
                    var s = i.staticRenderFns;
                    n.render = a;
                    n.staticRenderFns = s;
                    /* istanbul ignore if */
                    if ("development" !== "production" && B.performance && ne) {
                        ne("compile end");
                        re(this._name + " compile", "compile", "compile end");
                    }
                }
            }
            return bl.call(this, t, e);
        };
        /**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
        function xl(t) {
            if (t.outerHTML) {
                return t.outerHTML;
            } else {
                var e = document.createElement("div");
                e.appendChild(t.cloneNode(true));
                return e.innerHTML;
            }
        }
        dr.compile = yl;
        /* harmony default export */
        e["default"] = dr;
    }).call(e, n(3));
}, /* 3 */
/***/
function(t, e) {
    var n;
    // This works in non-strict mode
    n = function() {
        return this;
    }();
    try {
        // This works if eval is allowed (see CSP)
        n = n || Function("return this")() || (1, eval)("this");
    } catch (t) {
        // This works if the window reference is available
        if (typeof window === "object") n = window;
    }
    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}
    t.exports = n;
}, /* 4 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(5);
    /* harmony import */
    var i = n.n(r);
    /* harmony import */
    var a = n(22);
    var s = false;
    var o = n(0);
    /* script */
    /* template */
    /* styles */
    var u = null;
    /* scopeId */
    var l = null;
    /* moduleIdentifier (server only) */
    var f = null;
    var c = o(i.a, a["a"], u, l, f);
    c.options.__file = "src/components/Application.vue";
    if (c.esModule && Object.keys(c.esModule).some(function(t) {
        return t !== "default" && t.substr(0, 2) !== "__";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (c.options.functional) {
        console.error("[vue-loader] Application.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-5026b5fe", c.options);
            } else {
                e.reload("data-v-5026b5fe", c.options);
            }
            t.hot.dispose(function(t) {
                s = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = c.exports;
}, /* 5 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    var r;
    var i = n(6);
    var a = p(i);
    var s = n(9);
    var o = p(s);
    var u = n(12);
    var l = p(u);
    var f = n(15);
    var c = p(f);
    var h = n(19);
    var d = p(h);
    function p(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function v(t, e, n) {
        if (e in t) {
            Object.defineProperty(t, e, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            t[e] = n;
        }
        return t;
    }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    e.default = {
        name: "yarApplication",
        components: (r = {}, v(r, a.default.name, a.default), v(r, l.default.name, l.default), 
        v(r, o.default.name, o.default), v(r, c.default.name, c.default), v(r, d.default.name, d.default), 
        r),
        data: function t() {
            return {
                loading: true,
                indicator: true,
                virgin: true
            };
        },
        computed: {
            themeClass: function t() {
                return this.indicator ? "t-light" : "t-dark";
            }
        },
        methods: {
            showApplication: function t() {
                this.loading = false;
            },
            toggleIndicator: function t(e) {
                this.indicator = e;
            }
        }
    };
}, /* 6 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(7);
    /* harmony import */
    var i = n.n(r);
    /* harmony import */
    var a = n(8);
    var s = false;
    var o = n(0);
    /* script */
    /* template */
    /* styles */
    var u = null;
    /* scopeId */
    var l = null;
    /* moduleIdentifier (server only) */
    var f = null;
    var c = o(i.a, a["a"], u, l, f);
    c.options.__file = "src/components/Article.vue";
    if (c.esModule && Object.keys(c.esModule).some(function(t) {
        return t !== "default" && t.substr(0, 2) !== "__";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (c.options.functional) {
        console.error("[vue-loader] Article.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-447494b8", c.options);
            } else {
                e.reload("data-v-447494b8", c.options);
            }
            t.hot.dispose(function(t) {
                s = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = c.exports;
}, /* 7 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    e.default = {
        name: "yarArticle"
    };
}, /* 8 */
/***/
function(t, e, n) {
    "use strict";
    var r = function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return t._m(0);
    };
    var i = [ function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return n("article", {
            staticClass: "l-article"
        }, [ n("section", {
            staticClass: "hero"
        }, [ n("div", {
            staticClass: "hero-body"
        }, [ n("div", {
            staticClass: "container"
        }, [ n("h1", {
            staticClass: "title is-1"
        }, [ t._v("Yuriy Rabeshko") ]), t._v(" "), n("h2", {
            staticClass: "subtitle is-3"
        }, [ t._v("Full-stack Web Developer") ]) ]) ]) ]), t._v(" "), n("section", {
            staticClass: "content"
        }, [ n("p", [ t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquid, aspernatur atque deleniti dignissimos dolores earum labore maiores minus nemo officia omnis optio saepe sed sint sit, temporibus voluptate!") ]) ]), t._v(" "), n("a", {
            staticClass: "button is-primary is-outlined is-medium",
            attrs: {
                href: "mailto:george.rabeshko@gmail.com"
            }
        }, [ t._v("Contact me now") ]) ]);
    } ];
    r._withStripped = true;
    var a = {
        render: r,
        staticRenderFns: i
    };
    /* harmony default export */
    e["a"] = a;
    if (false) {
        t.hot.accept();
        if (t.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-447494b8", a);
        }
    }
}, /* 9 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(10);
    /* harmony import */
    var i = n.n(r);
    /* harmony import */
    var a = n(11);
    var s = false;
    var o = n(0);
    /* script */
    /* template */
    /* styles */
    var u = null;
    /* scopeId */
    var l = null;
    /* moduleIdentifier (server only) */
    var f = null;
    var c = o(i.a, a["a"], u, l, f);
    c.options.__file = "src/components/Footer.vue";
    if (c.esModule && Object.keys(c.esModule).some(function(t) {
        return t !== "default" && t.substr(0, 2) !== "__";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (c.options.functional) {
        console.error("[vue-loader] Footer.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-30e606dd", c.options);
            } else {
                e.reload("data-v-30e606dd", c.options);
            }
            t.hot.dispose(function(t) {
                s = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = c.exports;
}, /* 10 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    //
    //
    //
    //
    //
    //
    //
    //
    e.default = {
        name: "yarFooter",
        data: function t() {
            return {
                year: new Date().getFullYear()
            };
        }
    };
}, /* 11 */
/***/
function(t, e, n) {
    "use strict";
    var r = function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return n("footer", {
            staticClass: "l-footer"
        }, [ n("div", {
            staticClass: "content"
        }, [ n("small", [ t._v("Copyright © " + t._s(t.year) + " Yuriy Rabeshko.") ]) ]) ]);
    };
    var i = [];
    r._withStripped = true;
    var a = {
        render: r,
        staticRenderFns: i
    };
    /* harmony default export */
    e["a"] = a;
    if (false) {
        t.hot.accept();
        if (t.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-30e606dd", a);
        }
    }
}, /* 12 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(13);
    /* harmony import */
    var i = n.n(r);
    /* harmony import */
    var a = n(14);
    var s = false;
    var o = n(0);
    /* script */
    /* template */
    /* styles */
    var u = null;
    /* scopeId */
    var l = null;
    /* moduleIdentifier (server only) */
    var f = null;
    var c = o(i.a, a["a"], u, l, f);
    c.options.__file = "src/components/Header.vue";
    if (c.esModule && Object.keys(c.esModule).some(function(t) {
        return t !== "default" && t.substr(0, 2) !== "__";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (c.options.functional) {
        console.error("[vue-loader] Header.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-52186acf", c.options);
            } else {
                e.reload("data-v-52186acf", c.options);
            }
            t.hot.dispose(function(t) {
                s = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = c.exports;
}, /* 13 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    e.default = {
        name: "yarHeader",
        data: function t() {
            return {
                isNavbarActive: false
            };
        }
    };
}, /* 14 */
/***/
function(t, e, n) {
    "use strict";
    var r = function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return n("header", {
            staticClass: "l-header"
        }, [ n("nav", {
            staticClass: "navbar"
        }, [ n("div", {
            staticClass: "navbar-brand"
        }, [ n("div", {
            class: [ "navbar-burger", {
                "is-active": t.isNavbarActive
            } ],
            on: {
                click: function(e) {
                    t.isNavbarActive = !t.isNavbarActive;
                }
            }
        }, [ n("span"), t._v(" "), n("span"), t._v(" "), n("span") ]) ]), t._v(" "), n("div", {
            class: [ "navbar-menu", {
                "is-active": t.isNavbarActive
            } ]
        }, [ t._m(0) ]) ]) ]);
    };
    var i = [ function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return n("div", {
            staticClass: "navbar-end"
        }, [ n("a", {
            staticClass: "navbar-item",
            attrs: {
                href: "https://stackoverflow.com/story/yarbshk",
                title: "Developer story",
                target: "_blank"
            }
        }, [ n("span", {
            staticClass: "icon"
        }, [ n("i", {
            staticClass: "fa fa-stack-overflow"
        }) ]), t._v(" "), n("span", {
            staticClass: "is-hidden-desktop"
        }, [ t._v("Developer story") ]) ]), t._v(" "), n("a", {
            staticClass: "navbar-item",
            attrs: {
                href: "https://github.com/yarbshk",
                title: "OpenSource works",
                target: "_blank"
            }
        }, [ n("span", {
            staticClass: "icon"
        }, [ n("i", {
            staticClass: "fa fa-github"
        }) ]), t._v(" "), n("span", {
            staticClass: "is-hidden-desktop"
        }, [ t._v("OpenSource works") ]) ]), t._v(" "), n("a", {
            staticClass: "navbar-item",
            attrs: {
                href: "https://www.facebook.com/profile.php?id=100008383685619",
                title: "Facebook profile",
                target: "_blank"
            }
        }, [ n("span", {
            staticClass: "icon"
        }, [ n("i", {
            staticClass: "fa fa-facebook"
        }) ]), t._v(" "), n("span", {
            staticClass: "is-hidden-desktop"
        }, [ t._v("Facebook profile") ]) ]) ]);
    } ];
    r._withStripped = true;
    var a = {
        render: r,
        staticRenderFns: i
    };
    /* harmony default export */
    e["a"] = a;
    if (false) {
        t.hot.accept();
        if (t.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-52186acf", a);
        }
    }
}, /* 15 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(16);
    /* harmony import */
    var i = n.n(r);
    /* harmony import */
    var a = n(18);
    var s = false;
    var o = n(0);
    /* script */
    /* template */
    /* styles */
    var u = null;
    /* scopeId */
    var l = null;
    /* moduleIdentifier (server only) */
    var f = null;
    var c = o(i.a, a["a"], u, l, f);
    c.options.__file = "src/components/Lightbulb.vue";
    if (c.esModule && Object.keys(c.esModule).some(function(t) {
        return t !== "default" && t.substr(0, 2) !== "__";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (c.options.functional) {
        console.error("[vue-loader] Lightbulb.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-7a60c9cd", c.options);
            } else {
                e.reload("data-v-7a60c9cd", c.options);
            }
            t.hot.dispose(function(t) {
                s = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = c.exports;
}, /* 16 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    var r = n(17);
    var i = a(r);
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    e.default = {
        name: "yarLightbulb",
        props: {
            indicator: {
                type: Boolean,
                default: true
            }
        },
        data: function t() {
            return {
                loading: true,
                colorPalette: {
                    white: "#fff",
                    black: "#000"
                }
            };
        },
        computed: {
            draw: function t() {
                return (0, i.default)("logo").size(150, 150).viewbox(0, 0, 1e3, 1e3);
            },
            svg: function t() {
                var e = this.$refs.logoSvg.contentDocument;
                return e.getElementsByTagName("svg")[0];
            }
        },
        watch: {
            loading: function t(e) {
                if (!e) {
                    this.paintLogo(this.indicator);
                    this.$watch("indicator", this.paintLogo);
                }
            }
        },
        methods: {
            importSvg: function t(e) {
                this.draw.svg(this.svg.innerHTML);
                this.loading = false;
                this.$emit("load", this.loading, e);
            },
            paintLogo: function t(e) {
                e ? this.paintLightLogo() : this.paintDarkLogo();
            },
            paintLightLogo: function t() {
                var e = this.colorPalette;
                i.default.get("#background").select("rect").attr({
                    fill: e.black
                });
                i.default.get("#lampbulb").select("path").attr({
                    fill: e.white
                });
            },
            paintDarkLogo: function t() {
                var e = this.colorPalette;
                i.default.get("#background").select("rect").attr({
                    fill: e.white
                });
                i.default.get("#lampbulb").select("#bulb, #patronTop, #patronBottom").attr({
                    fill: e.black
                });
            }
        }
    };
}, /* 17 */
/***/
function(t, e, n) {
    var r;
    (function(i, a) {
        /* istanbul ignore next */
        if (true) {
            !(r = function() {
                return a(i, i.document);
            }.call(e, n, e, t), r !== undefined && (t.exports = r));
        } else if (typeof e === "object") {
            t.exports = i.document ? a(i, i.document) : function(t) {
                return a(t, t.document);
            };
        } else {
            i.SVG = a(i, i.document);
        }
    })(typeof window !== "undefined" ? window : this, function(t, e) {
        // The main wrapping element
        var n = this.SVG = function(t) {
            if (n.supported) {
                t = new n.Doc(t);
                if (!n.parser.draw) n.prepare();
                return t;
            }
        };
        // Default namespaces
        n.ns = "http://www.w3.org/2000/svg";
        n.xmlns = "http://www.w3.org/2000/xmlns/";
        n.xlink = "http://www.w3.org/1999/xlink";
        n.svgjs = "http://svgjs.com/svgjs";
        // Svg support test
        n.supported = function() {
            return !!e.createElementNS && !!e.createElementNS(n.ns, "svg").createSVGRect;
        }();
        // Don't bother to continue if SVG is not supported
        if (!n.supported) return false;
        // Element id sequence
        n.did = 1e3;
        // Get next named element id
        n.eid = function(t) {
            return "Svgjs" + d(t) + n.did++;
        };
        // Method for element creation
        n.create = function(t) {
            // create element
            var n = e.createElementNS(this.ns, t);
            // apply unique id
            n.setAttribute("id", this.eid(t));
            return n;
        };
        // Method for extending objects
        n.extend = function() {
            var t, e, r, i;
            // Get list of modules
            t = [].slice.call(arguments);
            // Get object with extensions
            e = t.pop();
            for (i = t.length - 1; i >= 0; i--) if (t[i]) for (r in e) t[i].prototype[r] = e[r];
            // Make sure SVG.Set inherits any newly added methods
            if (n.Set && n.Set.inherit) n.Set.inherit();
        };
        // Invent new element
        n.invent = function(t) {
            // Create element initializer
            var e = typeof t.create == "function" ? t.create : function() {
                this.constructor.call(this, n.create(t.create));
            };
            // Inherit prototype
            if (t.inherit) e.prototype = new t.inherit();
            // Extend with methods
            if (t.extend) n.extend(e, t.extend);
            // Attach construct method to parent
            if (t.construct) n.extend(t.parent || n.Container, t.construct);
            return e;
        };
        // Adopt existing svg elements
        n.adopt = function(e) {
            // check for presence of node
            if (!e) return null;
            // make sure a node isn't already adopted
            if (e.instance) return e.instance;
            // initialize variables
            var r;
            // adopt with element-specific settings
            if (e.nodeName == "svg") r = e.parentNode instanceof t.SVGElement ? new n.Nested() : new n.Doc(); else if (e.nodeName == "linearGradient") r = new n.Gradient("linear"); else if (e.nodeName == "radialGradient") r = new n.Gradient("radial"); else if (n[d(e.nodeName)]) r = new (n[d(e.nodeName)])(); else r = new n.Element(e);
            // ensure references
            r.type = e.nodeName;
            r.node = e;
            e.instance = r;
            // SVG.Class specific preparations
            if (r instanceof n.Doc) r.namespace().defs();
            // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
            r.setData(JSON.parse(e.getAttribute("svgjs:data")) || {});
            return r;
        };
        // Initialize parsing element
        n.prepare = function() {
            // Select document body and create invisible svg element
            var t = e.getElementsByTagName("body")[0], r = (t ? new n.Doc(t) : n.adopt(e.documentElement).nested()).size(2, 0);
            // Create parser object
            n.parser = {
                body: t || e.documentElement,
                draw: r.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
                poly: r.polyline().node,
                path: r.path().node,
                native: n.create("svg")
            };
        };
        n.parser = {
            native: n.create("svg")
        };
        e.addEventListener("DOMContentLoaded", function() {
            if (!n.parser.draw) n.prepare();
        }, false);
        // Storage for regular expressions
        n.regex = {
            // Parse unit value
            numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
            hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
            rgb: /rgb\((\d+),(\d+),(\d+)\)/,
            reference: /#([a-z0-9\-_]+)/i,
            transforms: /\)\s*,?\s*/,
            whitespace: /\s/g,
            isHex: /^#[a-f0-9]{3,6}$/i,
            isRgb: /^rgb\(/,
            isCss: /[^:]+:[^;]+;?/,
            isBlank: /^(\s+)?$/,
            isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            isPercent: /^-?[\d\.]+%$/,
            isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
            delimiter: /[\s,]+/,
            hyphen: /([^e])\-/gi,
            pathLetters: /[MLHVCSQTAZ]/gi,
            isPathLetter: /[MLHVCSQTAZ]/i,
            numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
            dots: /\./g
        };
        n.utils = {
            // Map function
            map: function(t, e) {
                var n, r = t.length, i = [];
                for (n = 0; n < r; n++) i.push(e(t[n]));
                return i;
            },
            filter: function(t, e) {
                var n, r = t.length, i = [];
                for (n = 0; n < r; n++) if (e(t[n])) i.push(t[n]);
                return i;
            },
            radians: function(t) {
                return t % 360 * Math.PI / 180;
            },
            degrees: function(t) {
                return t * 180 / Math.PI % 360;
            },
            filterSVGElements: function(e) {
                return this.filter(e, function(e) {
                    return e instanceof t.SVGElement;
                });
            }
        };
        n.defaults = {
            // Default attribute values
            attrs: {
                // fill and stroke
                "fill-opacity": 1,
                "stroke-opacity": 1,
                "stroke-width": 0,
                "stroke-linejoin": "miter",
                "stroke-linecap": "butt",
                fill: "#000000",
                stroke: "#000000",
                opacity: 1,
                x: 0,
                y: 0,
                cx: 0,
                cy: 0,
                width: 0,
                height: 0,
                r: 0,
                rx: 0,
                ry: 0,
                offset: 0,
                "stop-opacity": 1,
                "stop-color": "#000000",
                "font-size": 16,
                "font-family": "Helvetica, Arial, sans-serif",
                "text-anchor": "start"
            }
        };
        // Module for color convertions
        n.Color = function(t) {
            var e;
            // initialize defaults
            this.r = 0;
            this.g = 0;
            this.b = 0;
            if (!t) return;
            // parse color
            if (typeof t === "string") {
                if (n.regex.isRgb.test(t)) {
                    // get rgb values
                    e = n.regex.rgb.exec(t.replace(n.regex.whitespace, ""));
                    // parse numeric values
                    this.r = parseInt(e[1]);
                    this.g = parseInt(e[2]);
                    this.b = parseInt(e[3]);
                } else if (n.regex.isHex.test(t)) {
                    // get hex values
                    e = n.regex.hex.exec(p(t));
                    // parse numeric values
                    this.r = parseInt(e[1], 16);
                    this.g = parseInt(e[2], 16);
                    this.b = parseInt(e[3], 16);
                }
            } else if (typeof t === "object") {
                this.r = t.r;
                this.g = t.g;
                this.b = t.b;
            }
        };
        n.extend(n.Color, {
            // Default to hex conversion
            toString: function() {
                return this.toHex();
            },
            toHex: function() {
                return "#" + v(this.r) + v(this.g) + v(this.b);
            },
            toRgb: function() {
                return "rgb(" + [ this.r, this.g, this.b ].join() + ")";
            },
            brightness: function() {
                return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11;
            },
            morph: function(t) {
                this.destination = new n.Color(t);
                return this;
            },
            at: function(t) {
                // make sure a destination is defined
                if (!this.destination) return this;
                // normalise pos
                t = t < 0 ? 0 : t > 1 ? 1 : t;
                // generate morphed color
                return new n.Color({
                    r: ~~(this.r + (this.destination.r - this.r) * t),
                    g: ~~(this.g + (this.destination.g - this.g) * t),
                    b: ~~(this.b + (this.destination.b - this.b) * t)
                });
            }
        });
        // Testers
        // Test if given value is a color string
        n.Color.test = function(t) {
            t += "";
            return n.regex.isHex.test(t) || n.regex.isRgb.test(t);
        };
        // Test if given value is a rgb object
        n.Color.isRgb = function(t) {
            return t && typeof t.r == "number" && typeof t.g == "number" && typeof t.b == "number";
        };
        // Test if given value is a color
        n.Color.isColor = function(t) {
            return n.Color.isRgb(t) || n.Color.test(t);
        };
        // Module for array conversion
        n.Array = function(t, e) {
            t = (t || []).valueOf();
            // if array is empty and fallback is provided, use fallback
            if (t.length == 0 && e) t = e.valueOf();
            // parse array
            this.value = this.parse(t);
        };
        n.extend(n.Array, {
            // Make array morphable
            morph: function(t) {
                this.destination = this.parse(t);
                // normalize length of arrays
                if (this.value.length != this.destination.length) {
                    var e = this.value[this.value.length - 1], n = this.destination[this.destination.length - 1];
                    while (this.value.length > this.destination.length) this.destination.push(n);
                    while (this.value.length < this.destination.length) this.value.push(e);
                }
                return this;
            },
            settle: function() {
                // find all unique values
                for (var t = 0, e = this.value.length, n = []; t < e; t++) if (n.indexOf(this.value[t]) == -1) n.push(this.value[t]);
                // set new value
                return this.value = n;
            },
            at: function(t) {
                // make sure a destination is defined
                if (!this.destination) return this;
                // generate morphed array
                for (var e = 0, r = this.value.length, i = []; e < r; e++) i.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                return new n.Array(i);
            },
            toString: function() {
                return this.value.join(" ");
            },
            valueOf: function() {
                return this.value;
            },
            parse: function(t) {
                t = t.valueOf();
                // if already is an array, no need to parse it
                if (Array.isArray(t)) return t;
                return this.split(t);
            },
            split: function(t) {
                return t.trim().split(n.regex.delimiter).map(parseFloat);
            },
            reverse: function() {
                this.value.reverse();
                return this;
            },
            clone: function() {
                var t = new this.constructor();
                t.value = l(this.value);
                return t;
            }
        });
        // Poly points array
        n.PointArray = function(t, e) {
            n.Array.call(this, t, e || [ [ 0, 0 ] ]);
        };
        // Inherit from SVG.Array
        n.PointArray.prototype = new n.Array();
        n.PointArray.prototype.constructor = n.PointArray;
        n.extend(n.PointArray, {
            // Convert array to string
            toString: function() {
                // convert to a poly point string
                for (var t = 0, e = this.value.length, n = []; t < e; t++) n.push(this.value[t].join(","));
                return n.join(" ");
            },
            toLine: function() {
                return {
                    x1: this.value[0][0],
                    y1: this.value[0][1],
                    x2: this.value[1][0],
                    y2: this.value[1][1]
                };
            },
            at: function(t) {
                // make sure a destination is defined
                if (!this.destination) return this;
                // generate morphed point string
                for (var e = 0, r = this.value.length, i = []; e < r; e++) i.push([ this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t ]);
                return new n.PointArray(i);
            },
            parse: function(t) {
                var e = [];
                t = t.valueOf();
                // if it is an array
                if (Array.isArray(t)) {
                    // and it is not flat, there is no need to parse it
                    if (Array.isArray(t[0])) {
                        return t;
                    }
                } else {
                    // Else, it is considered as a string
                    // parse points
                    t = t.trim().split(n.regex.delimiter).map(parseFloat);
                }
                // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
                // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
                if (t.length % 2 !== 0) t.pop();
                // wrap points in two-tuples and parse points as floats
                for (var r = 0, i = t.length; r < i; r = r + 2) e.push([ t[r], t[r + 1] ]);
                return e;
            },
            move: function(t, e) {
                var n = this.bbox();
                // get relative offset
                t -= n.x;
                e -= n.y;
                // move every point
                if (!isNaN(t) && !isNaN(e)) for (var r = this.value.length - 1; r >= 0; r--) this.value[r] = [ this.value[r][0] + t, this.value[r][1] + e ];
                return this;
            },
            size: function(t, e) {
                var n, r = this.bbox();
                // recalculate position of all points according to new size
                for (n = this.value.length - 1; n >= 0; n--) {
                    if (r.width) this.value[n][0] = (this.value[n][0] - r.x) * t / r.width + r.x;
                    if (r.height) this.value[n][1] = (this.value[n][1] - r.y) * e / r.height + r.y;
                }
                return this;
            },
            bbox: function() {
                n.parser.poly.setAttribute("points", this.toString());
                return n.parser.poly.getBBox();
            }
        });
        var r = {
            M: function(t, e, n) {
                e.x = n.x = t[0];
                e.y = n.y = t[1];
                return [ "M", e.x, e.y ];
            },
            L: function(t, e) {
                e.x = t[0];
                e.y = t[1];
                return [ "L", t[0], t[1] ];
            },
            H: function(t, e) {
                e.x = t[0];
                return [ "H", t[0] ];
            },
            V: function(t, e) {
                e.y = t[0];
                return [ "V", t[0] ];
            },
            C: function(t, e) {
                e.x = t[4];
                e.y = t[5];
                return [ "C", t[0], t[1], t[2], t[3], t[4], t[5] ];
            },
            S: function(t, e) {
                e.x = t[2];
                e.y = t[3];
                return [ "S", t[0], t[1], t[2], t[3] ];
            },
            Q: function(t, e) {
                e.x = t[2];
                e.y = t[3];
                return [ "Q", t[0], t[1], t[2], t[3] ];
            },
            T: function(t, e) {
                e.x = t[0];
                e.y = t[1];
                return [ "T", t[0], t[1] ];
            },
            Z: function(t, e, n) {
                e.x = n.x;
                e.y = n.y;
                return [ "Z" ];
            },
            A: function(t, e) {
                e.x = t[5];
                e.y = t[6];
                return [ "A", t[0], t[1], t[2], t[3], t[4], t[5], t[6] ];
            }
        };
        var i = "mlhvqtcsaz".split("");
        for (var a = 0, s = i.length; a < s; ++a) {
            r[i[a]] = function(t) {
                return function(e, n, i) {
                    if (t == "H") e[0] = e[0] + n.x; else if (t == "V") e[0] = e[0] + n.y; else if (t == "A") {
                        e[5] = e[5] + n.x, e[6] = e[6] + n.y;
                    } else for (var a = 0, s = e.length; a < s; ++a) {
                        e[a] = e[a] + (a % 2 ? n.y : n.x);
                    }
                    return r[t](e, n, i);
                };
            }(i[a].toUpperCase());
        }
        // Path points array
        n.PathArray = function(t, e) {
            n.Array.call(this, t, e || [ [ "M", 0, 0 ] ]);
        };
        // Inherit from SVG.Array
        n.PathArray.prototype = new n.Array();
        n.PathArray.prototype.constructor = n.PathArray;
        n.extend(n.PathArray, {
            // Convert array to string
            toString: function() {
                return w(this.value);
            },
            move: function(t, e) {
                // get bounding box of current situation
                var n = this.bbox();
                // get relative offset
                t -= n.x;
                e -= n.y;
                if (!isNaN(t) && !isNaN(e)) {
                    // move every point
                    for (var r, i = this.value.length - 1; i >= 0; i--) {
                        r = this.value[i][0];
                        if (r == "M" || r == "L" || r == "T") {
                            this.value[i][1] += t;
                            this.value[i][2] += e;
                        } else if (r == "H") {
                            this.value[i][1] += t;
                        } else if (r == "V") {
                            this.value[i][1] += e;
                        } else if (r == "C" || r == "S" || r == "Q") {
                            this.value[i][1] += t;
                            this.value[i][2] += e;
                            this.value[i][3] += t;
                            this.value[i][4] += e;
                            if (r == "C") {
                                this.value[i][5] += t;
                                this.value[i][6] += e;
                            }
                        } else if (r == "A") {
                            this.value[i][6] += t;
                            this.value[i][7] += e;
                        }
                    }
                }
                return this;
            },
            size: function(t, e) {
                // get bounding box of current situation
                var n, r, i = this.bbox();
                // recalculate position of all points according to new size
                for (n = this.value.length - 1; n >= 0; n--) {
                    r = this.value[n][0];
                    if (r == "M" || r == "L" || r == "T") {
                        this.value[n][1] = (this.value[n][1] - i.x) * t / i.width + i.x;
                        this.value[n][2] = (this.value[n][2] - i.y) * e / i.height + i.y;
                    } else if (r == "H") {
                        this.value[n][1] = (this.value[n][1] - i.x) * t / i.width + i.x;
                    } else if (r == "V") {
                        this.value[n][1] = (this.value[n][1] - i.y) * e / i.height + i.y;
                    } else if (r == "C" || r == "S" || r == "Q") {
                        this.value[n][1] = (this.value[n][1] - i.x) * t / i.width + i.x;
                        this.value[n][2] = (this.value[n][2] - i.y) * e / i.height + i.y;
                        this.value[n][3] = (this.value[n][3] - i.x) * t / i.width + i.x;
                        this.value[n][4] = (this.value[n][4] - i.y) * e / i.height + i.y;
                        if (r == "C") {
                            this.value[n][5] = (this.value[n][5] - i.x) * t / i.width + i.x;
                            this.value[n][6] = (this.value[n][6] - i.y) * e / i.height + i.y;
                        }
                    } else if (r == "A") {
                        // resize radii
                        this.value[n][1] = this.value[n][1] * t / i.width;
                        this.value[n][2] = this.value[n][2] * e / i.height;
                        // move position values
                        this.value[n][6] = (this.value[n][6] - i.x) * t / i.width + i.x;
                        this.value[n][7] = (this.value[n][7] - i.y) * e / i.height + i.y;
                    }
                }
                return this;
            },
            equalCommands: function(t) {
                var e, r, i;
                t = new n.PathArray(t);
                i = this.value.length === t.value.length;
                for (e = 0, r = this.value.length; i && e < r; e++) {
                    i = this.value[e][0] === t.value[e][0];
                }
                return i;
            },
            morph: function(t) {
                t = new n.PathArray(t);
                if (this.equalCommands(t)) {
                    this.destination = t;
                } else {
                    this.destination = null;
                }
                return this;
            },
            at: function(t) {
                // make sure a destination is defined
                if (!this.destination) return this;
                var e = this.value, r = this.destination.value, i = [], a = new n.PathArray(), s, o, u, l;
                // Animate has specified in the SVG spec
                // See: https://www.w3.org/TR/SVG11/paths.html#PathElement
                for (s = 0, o = e.length; s < o; s++) {
                    i[s] = [ e[s][0] ];
                    for (u = 1, l = e[s].length; u < l; u++) {
                        i[s][u] = e[s][u] + (r[s][u] - e[s][u]) * t;
                    }
                    // For the two flags of the elliptical arc command, the SVG spec say:
                    // Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
                    // Elliptical arc command as an array followed by corresponding indexes:
                    // ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
                    //   0    1   2        3                 4             5      6  7
                    if (i[s][0] === "A") {
                        i[s][4] = +(i[s][4] != 0);
                        i[s][5] = +(i[s][5] != 0);
                    }
                }
                // Directly modify the value of a path array, this is done this way for performance
                a.value = i;
                return a;
            },
            parse: function(t) {
                // if it's already a patharray, no need to parse it
                if (t instanceof n.PathArray) return t.valueOf();
                // prepare for parsing
                var e, i, a, s, o, l, f = 0, c = 0, h = {
                    M: 2,
                    L: 2,
                    H: 1,
                    V: 1,
                    C: 6,
                    S: 4,
                    Q: 4,
                    T: 2,
                    A: 7,
                    Z: 0
                };
                if (typeof t == "string") {
                    t = t.replace(n.regex.numbersWithDots, u).replace(n.regex.pathLetters, " $& ").replace(n.regex.hyphen, "$1 -").trim().split(n.regex.delimiter);
                } else {
                    t = t.reduce(function(t, e) {
                        return [].concat.call(t, e);
                    }, []);
                }
                // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
                var l = [], d = new n.Point(), p = new n.Point(), v = 0, m = t.length;
                do {
                    // Test if we have a path letter
                    if (n.regex.isPathLetter.test(t[v])) {
                        s = t[v];
                        ++v;
                    } else if (s == "M") {
                        s = "L";
                    } else if (s == "m") {
                        s = "l";
                    }
                    l.push(r[s].call(null, t.slice(v, v = v + h[s.toUpperCase()]).map(parseFloat), d, p));
                } while (m > v);
                return l;
            },
            bbox: function() {
                n.parser.path.setAttribute("d", this.toString());
                return n.parser.path.getBBox();
            }
        });
        // Module for unit convertions
        n.Number = n.invent({
            // Initialize
            create: function(t, e) {
                // initialize defaults
                this.value = 0;
                this.unit = e || "";
                // parse value
                if (typeof t === "number") {
                    // ensure a valid numeric value
                    this.value = isNaN(t) ? 0 : !isFinite(t) ? t < 0 ? -3.4e38 : +3.4e38 : t;
                } else if (typeof t === "string") {
                    e = t.match(n.regex.numberAndUnit);
                    if (e) {
                        // make value numeric
                        this.value = parseFloat(e[1]);
                        // normalize
                        if (e[5] == "%") this.value /= 100; else if (e[5] == "s") this.value *= 1e3;
                        // store unit
                        this.unit = e[5];
                    }
                } else {
                    if (t instanceof n.Number) {
                        this.value = t.valueOf();
                        this.unit = t.unit;
                    }
                }
            },
            extend: {
                // Stringalize
                toString: function() {
                    return (this.unit == "%" ? ~~(this.value * 1e8) / 1e6 : this.unit == "s" ? this.value / 1e3 : this.value) + this.unit;
                },
                toJSON: function() {
                    return this.toString();
                },
                // Convert to primitive
                valueOf: function() {
                    return this.value;
                },
                plus: function(t) {
                    t = new n.Number(t);
                    return new n.Number(this + t, this.unit || t.unit);
                },
                minus: function(t) {
                    t = new n.Number(t);
                    return new n.Number(this - t, this.unit || t.unit);
                },
                times: function(t) {
                    t = new n.Number(t);
                    return new n.Number(this * t, this.unit || t.unit);
                },
                divide: function(t) {
                    t = new n.Number(t);
                    return new n.Number(this / t, this.unit || t.unit);
                },
                to: function(t) {
                    var e = new n.Number(this);
                    if (typeof t === "string") e.unit = t;
                    return e;
                },
                morph: function(t) {
                    this.destination = new n.Number(t);
                    if (t.relative) {
                        this.destination.value += this.value;
                    }
                    return this;
                },
                at: function(t) {
                    // Make sure a destination is defined
                    if (!this.destination) return this;
                    // Generate new morphed number
                    return new n.Number(this.destination).minus(this).times(t).plus(this);
                }
            }
        });
        n.Element = n.invent({
            // Initialize node
            create: function(t) {
                // make stroke value accessible dynamically
                this._stroke = n.defaults.attrs.stroke;
                this._event = null;
                // initialize data object
                this.dom = {};
                // create circular reference
                if (this.node = t) {
                    this.type = t.nodeName;
                    this.node.instance = this;
                    // store current attribute value
                    this._stroke = t.getAttribute("stroke") || this._stroke;
                }
            },
            extend: {
                // Move over x-axis
                x: function(t) {
                    return this.attr("x", t);
                },
                y: function(t) {
                    return this.attr("y", t);
                },
                cx: function(t) {
                    return t == null ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
                },
                cy: function(t) {
                    return t == null ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
                },
                move: function(t, e) {
                    return this.x(t).y(e);
                },
                center: function(t, e) {
                    return this.cx(t).cy(e);
                },
                width: function(t) {
                    return this.attr("width", t);
                },
                height: function(t) {
                    return this.attr("height", t);
                },
                size: function(t, e) {
                    var r = m(this, t, e);
                    return this.width(new n.Number(r.width)).height(new n.Number(r.height));
                },
                clone: function(t, e) {
                    // write dom data to the dom so the clone can pickup the data
                    this.writeDataToDom();
                    // clone element and assign new id
                    var n = _(this.node.cloneNode(true));
                    // insert the clone in the given parent or after myself
                    if (t) t.add(n); else this.after(n);
                    return n;
                },
                remove: function() {
                    if (this.parent()) this.parent().removeElement(this);
                    return this;
                },
                replace: function(t) {
                    this.after(t).remove();
                    return t;
                },
                addTo: function(t) {
                    return t.put(this);
                },
                putIn: function(t) {
                    return t.add(this);
                },
                id: function(t) {
                    return this.attr("id", t);
                },
                inside: function(t, e) {
                    var n = this.bbox();
                    return t > n.x && e > n.y && t < n.x + n.width && e < n.y + n.height;
                },
                show: function() {
                    return this.style("display", "");
                },
                hide: function() {
                    return this.style("display", "none");
                },
                visible: function() {
                    return this.style("display") != "none";
                },
                toString: function() {
                    return this.attr("id");
                },
                classes: function() {
                    var t = this.attr("class");
                    return t == null ? [] : t.trim().split(n.regex.delimiter);
                },
                hasClass: function(t) {
                    return this.classes().indexOf(t) != -1;
                },
                addClass: function(t) {
                    if (!this.hasClass(t)) {
                        var e = this.classes();
                        e.push(t);
                        this.attr("class", e.join(" "));
                    }
                    return this;
                },
                removeClass: function(t) {
                    if (this.hasClass(t)) {
                        this.attr("class", this.classes().filter(function(e) {
                            return e != t;
                        }).join(" "));
                    }
                    return this;
                },
                toggleClass: function(t) {
                    return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
                },
                reference: function(t) {
                    return n.get(this.attr(t));
                },
                parent: function(e) {
                    var r = this;
                    // check for parent
                    if (!r.node.parentNode) return null;
                    // get parent element
                    r = n.adopt(r.node.parentNode);
                    if (!e) return r;
                    // loop trough ancestors if type is given
                    while (r && r.node instanceof t.SVGElement) {
                        if (typeof e === "string" ? r.matches(e) : r instanceof e) return r;
                        if (r.node.parentNode.nodeName == "#document") return null;
                        // #720
                        r = n.adopt(r.node.parentNode);
                    }
                },
                doc: function() {
                    return this instanceof n.Doc ? this : this.parent(n.Doc);
                },
                parents: function(t) {
                    var e = [], n = this;
                    do {
                        n = n.parent(t);
                        if (!n || !n.node) break;
                        e.push(n);
                    } while (n.parent);
                    return e;
                },
                matches: function(t) {
                    return c(this.node, t);
                },
                native: function() {
                    return this.node;
                },
                svg: function(t) {
                    // create temporary holder
                    var r = e.createElement("svg");
                    // act as a setter if svg is given
                    if (t && this instanceof n.Parent) {
                        // dump raw svg
                        r.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<(\w+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                        // transplant nodes
                        for (var i = 0, a = r.firstChild.childNodes.length; i < a; i++) this.node.appendChild(r.firstChild.firstChild);
                    } else {
                        // create a wrapping svg element in case of partial content
                        r.appendChild(t = e.createElement("svg"));
                        // write svgjs data to the dom
                        this.writeDataToDom();
                        // insert a copy of this node
                        t.appendChild(this.node.cloneNode(true));
                        // return target element
                        return r.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                    }
                    return this;
                },
                writeDataToDom: function() {
                    // dump variables recursively
                    if (this.each || this.lines) {
                        var t = this.each ? this : this.lines();
                        t.each(function() {
                            this.writeDataToDom();
                        });
                    }
                    // remove previously set data
                    this.node.removeAttribute("svgjs:data");
                    if (Object.keys(this.dom).length) this.node.setAttribute("svgjs:data", JSON.stringify(this.dom));
                    // see #428
                    return this;
                },
                setData: function(t) {
                    this.dom = t;
                    return this;
                },
                is: function(t) {
                    return f(this, t);
                }
            }
        });
        n.easing = {
            "-": function(t) {
                return t;
            },
            "<>": function(t) {
                return -Math.cos(t * Math.PI) / 2 + .5;
            },
            ">": function(t) {
                return Math.sin(t * Math.PI / 2);
            },
            "<": function(t) {
                return -Math.cos(t * Math.PI / 2) + 1;
            }
        };
        n.morph = function(t) {
            return function(e, r) {
                return new n.MorphObj(e, r).at(t);
            };
        };
        n.Situation = n.invent({
            create: function(t) {
                this.init = false;
                this.reversed = false;
                this.reversing = false;
                this.duration = new n.Number(t.duration).valueOf();
                this.delay = new n.Number(t.delay).valueOf();
                this.start = +new Date() + this.delay;
                this.finish = this.start + this.duration;
                this.ease = t.ease;
                // this.loop is incremented from 0 to this.loops
                // it is also incremented when in an infinite loop (when this.loops is true)
                this.loop = 0;
                this.loops = false;
                this.animations = {};
                this.attrs = {};
                this.styles = {};
                this.transforms = [];
                this.once = {};
            }
        });
        n.FX = n.invent({
            create: function(t) {
                this._target = t;
                this.situations = [];
                this.active = false;
                this.situation = null;
                this.paused = false;
                this.lastPos = 0;
                this.pos = 0;
                // The absolute position of an animation is its position in the context of its complete duration (including delay and loops)
                // When performing a delay, absPos is below 0 and when performing a loop, its value is above 1
                this.absPos = 0;
                this._speed = 1;
            },
            extend: {
                /**
     * sets or returns the target of this animation
     * @param o object || number In case of Object it holds all parameters. In case of number its the duration of the animation
     * @param ease function || string Function which should be used for easing or easing keyword
     * @param delay Number indicating the delay before the animation starts
     * @return target || this
     */
                animate: function(t, e, r) {
                    if (typeof t == "object") {
                        e = t.ease;
                        r = t.delay;
                        t = t.duration;
                    }
                    var i = new n.Situation({
                        duration: t || 1e3,
                        delay: r || 0,
                        ease: n.easing[e || "-"] || e
                    });
                    this.queue(i);
                    return this;
                },
                delay: function(t) {
                    // The delay is performed by an empty situation with its duration
                    // attribute set to the duration of the delay
                    var e = new n.Situation({
                        duration: t,
                        delay: 0,
                        ease: n.easing["-"]
                    });
                    return this.queue(e);
                },
                target: function(t) {
                    if (t && t instanceof n.Element) {
                        this._target = t;
                        return this;
                    }
                    return this._target;
                },
                timeToAbsPos: function(t) {
                    return (t - this.situation.start) / (this.situation.duration / this._speed);
                },
                absPosToTime: function(t) {
                    return this.situation.duration / this._speed * t + this.situation.start;
                },
                startAnimFrame: function() {
                    this.stopAnimFrame();
                    this.animationFrame = t.requestAnimationFrame(function() {
                        this.step();
                    }.bind(this));
                },
                stopAnimFrame: function() {
                    t.cancelAnimationFrame(this.animationFrame);
                },
                start: function() {
                    // dont start if already started
                    if (!this.active && this.situation) {
                        this.active = true;
                        this.startCurrent();
                    }
                    return this;
                },
                startCurrent: function() {
                    this.situation.start = +new Date() + this.situation.delay / this._speed;
                    this.situation.finish = this.situation.start + this.situation.duration / this._speed;
                    return this.initAnimations().step();
                },
                queue: function(t) {
                    if (typeof t == "function" || t instanceof n.Situation) this.situations.push(t);
                    if (!this.situation) this.situation = this.situations.shift();
                    return this;
                },
                dequeue: function() {
                    // stop current animation
                    this.stop();
                    // get next animation from queue
                    this.situation = this.situations.shift();
                    if (this.situation) {
                        if (this.situation instanceof n.Situation) {
                            this.start();
                        } else {
                            // If it is not a SVG.Situation, then it is a function, we execute it
                            this.situation.call(this);
                        }
                    }
                    return this;
                },
                initAnimations: function() {
                    var t, e, r;
                    var i = this.situation;
                    if (i.init) return this;
                    for (t in i.animations) {
                        r = this.target()[t]();
                        if (!Array.isArray(r)) {
                            r = [ r ];
                        }
                        if (!Array.isArray(i.animations[t])) {
                            i.animations[t] = [ i.animations[t] ];
                        }
                        //if(s.animations[i].length > source.length) {
                        //  source.concat = source.concat(s.animations[i].slice(source.length, s.animations[i].length))
                        //}
                        for (e = r.length; e--; ) {
                            // The condition is because some methods return a normal number instead
                            // of a SVG.Number
                            if (i.animations[t][e] instanceof n.Number) r[e] = new n.Number(r[e]);
                            i.animations[t][e] = r[e].morph(i.animations[t][e]);
                        }
                    }
                    for (t in i.attrs) {
                        i.attrs[t] = new n.MorphObj(this.target().attr(t), i.attrs[t]);
                    }
                    for (t in i.styles) {
                        i.styles[t] = new n.MorphObj(this.target().style(t), i.styles[t]);
                    }
                    i.initialTransformation = this.target().matrixify();
                    i.init = true;
                    return this;
                },
                clearQueue: function() {
                    this.situations = [];
                    return this;
                },
                clearCurrent: function() {
                    this.situation = null;
                    return this;
                },
                stop: function(t, e) {
                    var n = this.active;
                    this.active = false;
                    if (e) {
                        this.clearQueue();
                    }
                    if (t && this.situation) {
                        // initialize the situation if it was not
                        !n && this.startCurrent();
                        this.atEnd();
                    }
                    this.stopAnimFrame();
                    return this.clearCurrent();
                },
                reset: function() {
                    if (this.situation) {
                        var t = this.situation;
                        this.stop();
                        this.situation = t;
                        this.atStart();
                    }
                    return this;
                },
                finish: function() {
                    this.stop(true, false);
                    while (this.dequeue().situation && this.stop(true, false)) ;
                    this.clearQueue().clearCurrent();
                    return this;
                },
                atStart: function() {
                    return this.at(0, true);
                },
                atEnd: function() {
                    if (this.situation.loops === true) {
                        // If in a infinite loop, we end the current iteration
                        this.situation.loops = this.situation.loop + 1;
                    }
                    if (typeof this.situation.loops == "number") {
                        // If performing a finite number of loops, we go after all the loops
                        return this.at(this.situation.loops, true);
                    } else {
                        // If no loops, we just go at the end
                        return this.at(1, true);
                    }
                },
                at: function(t, e) {
                    var n = this.situation.duration / this._speed;
                    this.absPos = t;
                    // If pos is not an absolute position, we convert it into one
                    if (!e) {
                        if (this.situation.reversed) this.absPos = 1 - this.absPos;
                        this.absPos += this.situation.loop;
                    }
                    this.situation.start = +new Date() - this.absPos * n;
                    this.situation.finish = this.situation.start + n;
                    return this.step(true);
                },
                speed: function(t) {
                    if (t === 0) return this.pause();
                    if (t) {
                        this._speed = t;
                        // We use an absolute position here so that speed can affect the delay before the animation
                        return this.at(this.absPos, true);
                    } else return this._speed;
                },
                loop: function(t, e) {
                    var n = this.last();
                    // store total loops
                    n.loops = t != null ? t : true;
                    n.loop = 0;
                    if (e) n.reversing = true;
                    return this;
                },
                pause: function() {
                    this.paused = true;
                    this.stopAnimFrame();
                    return this;
                },
                play: function() {
                    if (!this.paused) return this;
                    this.paused = false;
                    // We use an absolute position here so that the delay before the animation can be paused
                    return this.at(this.absPos, true);
                },
                reverse: function(t) {
                    var e = this.last();
                    if (typeof t == "undefined") e.reversed = !e.reversed; else e.reversed = t;
                    return this;
                },
                progress: function(t) {
                    return t ? this.situation.ease(this.pos) : this.pos;
                },
                after: function(t) {
                    var e = this.last(), n = function n(r) {
                        if (r.detail.situation == e) {
                            t.call(this, e);
                            this.off("finished.fx", n);
                        }
                    };
                    this.target().on("finished.fx", n);
                    return this._callStart();
                },
                during: function(t) {
                    var e = this.last(), r = function(r) {
                        if (r.detail.situation == e) {
                            t.call(this, r.detail.pos, n.morph(r.detail.pos), r.detail.eased, e);
                        }
                    };
                    // see above
                    this.target().off("during.fx", r).on("during.fx", r);
                    this.after(function() {
                        this.off("during.fx", r);
                    });
                    return this._callStart();
                },
                afterAll: function(t) {
                    var e = function e(n) {
                        t.call(this);
                        this.off("allfinished.fx", e);
                    };
                    // see above
                    this.target().off("allfinished.fx", e).on("allfinished.fx", e);
                    return this._callStart();
                },
                duringAll: function(t) {
                    var e = function(e) {
                        t.call(this, e.detail.pos, n.morph(e.detail.pos), e.detail.eased, e.detail.situation);
                    };
                    this.target().off("during.fx", e).on("during.fx", e);
                    this.afterAll(function() {
                        this.off("during.fx", e);
                    });
                    return this._callStart();
                },
                last: function() {
                    return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
                },
                add: function(t, e, n) {
                    this.last()[n || "animations"][t] = e;
                    return this._callStart();
                },
                step: function(t) {
                    // convert current time to an absolute position
                    if (!t) this.absPos = this.timeToAbsPos(+new Date());
                    // This part convert an absolute position to a position
                    if (this.situation.loops !== false) {
                        var e, n, r;
                        // If the absolute position is below 0, we just treat it as if it was 0
                        e = Math.max(this.absPos, 0);
                        n = Math.floor(e);
                        if (this.situation.loops === true || n < this.situation.loops) {
                            this.pos = e - n;
                            r = this.situation.loop;
                            this.situation.loop = n;
                        } else {
                            this.absPos = this.situation.loops;
                            this.pos = 1;
                            // The -1 here is because we don't want to toggle reversed when all the loops have been completed
                            r = this.situation.loop - 1;
                            this.situation.loop = this.situation.loops;
                        }
                        if (this.situation.reversing) {
                            // Toggle reversed if an odd number of loops as occured since the last call of step
                            this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - r) % 2);
                        }
                    } else {
                        // If there are no loop, the absolute position must not be above 1
                        this.absPos = Math.min(this.absPos, 1);
                        this.pos = this.absPos;
                    }
                    // while the absolute position can be below 0, the position must not be below 0
                    if (this.pos < 0) this.pos = 0;
                    if (this.situation.reversed) this.pos = 1 - this.pos;
                    // apply easing
                    var i = this.situation.ease(this.pos);
                    // call once-callbacks
                    for (var a in this.situation.once) {
                        if (a > this.lastPos && a <= i) {
                            this.situation.once[a].call(this.target(), this.pos, i);
                            delete this.situation.once[a];
                        }
                    }
                    // fire during callback with position, eased position and current situation as parameter
                    if (this.active) this.target().fire("during", {
                        pos: this.pos,
                        eased: i,
                        fx: this,
                        situation: this.situation
                    });
                    // the user may call stop or finish in the during callback
                    // so make sure that we still have a valid situation
                    if (!this.situation) {
                        return this;
                    }
                    // apply the actual animation to every property
                    this.eachAt();
                    // do final code when situation is finished
                    if (this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0) {
                        // stop animation callback
                        this.stopAnimFrame();
                        // fire finished callback with current situation as parameter
                        this.target().fire("finished", {
                            fx: this,
                            situation: this.situation
                        });
                        if (!this.situations.length) {
                            this.target().fire("allfinished");
                            // Recheck the length since the user may call animate in the afterAll callback
                            if (!this.situations.length) {
                                this.target().off(".fx");
                                // there shouldnt be any binding left, but to make sure...
                                this.active = false;
                            }
                        }
                        // start next animation
                        if (this.active) this.dequeue(); else this.clearCurrent();
                    } else if (!this.paused && this.active) {
                        // we continue animating when we are not at the end
                        this.startAnimFrame();
                    }
                    // save last eased position for once callback triggering
                    this.lastPos = i;
                    return this;
                },
                eachAt: function() {
                    var t, e, r, i = this, a = this.target(), s = this.situation;
                    // apply animations which can be called trough a method
                    for (t in s.animations) {
                        r = [].concat(s.animations[t]).map(function(t) {
                            return typeof t !== "string" && t.at ? t.at(s.ease(i.pos), i.pos) : t;
                        });
                        a[t].apply(a, r);
                    }
                    // apply animation which has to be applied with attr()
                    for (t in s.attrs) {
                        r = [ t ].concat(s.attrs[t]).map(function(t) {
                            return typeof t !== "string" && t.at ? t.at(s.ease(i.pos), i.pos) : t;
                        });
                        a.attr.apply(a, r);
                    }
                    // apply animation which has to be applied with style()
                    for (t in s.styles) {
                        r = [ t ].concat(s.styles[t]).map(function(t) {
                            return typeof t !== "string" && t.at ? t.at(s.ease(i.pos), i.pos) : t;
                        });
                        a.style.apply(a, r);
                    }
                    // animate initialTransformation which has to be chained
                    if (s.transforms.length) {
                        // get initial initialTransformation
                        r = s.initialTransformation;
                        for (t = 0, e = s.transforms.length; t < e; t++) {
                            // get next transformation in chain
                            var o = s.transforms[t];
                            // multiply matrix directly
                            if (o instanceof n.Matrix) {
                                if (o.relative) {
                                    r = r.multiply(new n.Matrix().morph(o).at(s.ease(this.pos)));
                                } else {
                                    r = r.morph(o).at(s.ease(this.pos));
                                }
                                continue;
                            }
                            // when transformation is absolute we have to reset the needed transformation first
                            if (!o.relative) o.undo(r.extract());
                            // and reapply it after
                            r = r.multiply(o.at(s.ease(this.pos)));
                        }
                        // set new matrix on element
                        a.matrix(r);
                    }
                    return this;
                },
                once: function(t, e, n) {
                    var r = this.last();
                    if (!n) t = r.ease(t);
                    r.once[t] = e;
                    return this;
                },
                _callStart: function() {
                    setTimeout(function() {
                        this.start();
                    }.bind(this), 0);
                    return this;
                }
            },
            parent: n.Element,
            construct: {
                // Get fx module or create a new one, then animate with given duration and ease
                animate: function(t, e, r) {
                    return (this.fx || (this.fx = new n.FX(this))).animate(t, e, r);
                },
                delay: function(t) {
                    return (this.fx || (this.fx = new n.FX(this))).delay(t);
                },
                stop: function(t, e) {
                    if (this.fx) this.fx.stop(t, e);
                    return this;
                },
                finish: function() {
                    if (this.fx) this.fx.finish();
                    return this;
                },
                pause: function() {
                    if (this.fx) this.fx.pause();
                    return this;
                },
                play: function() {
                    if (this.fx) this.fx.play();
                    return this;
                },
                speed: function(t) {
                    if (this.fx) if (t == null) return this.fx.speed(); else this.fx.speed(t);
                    return this;
                }
            }
        });
        // MorphObj is used whenever no morphable object is given
        n.MorphObj = n.invent({
            create: function(t, e) {
                // prepare color for morphing
                if (n.Color.isColor(e)) return new n.Color(t).morph(e);
                // prepare value list for morphing
                if (n.regex.delimiter.test(t)) return new n.Array(t).morph(e);
                // prepare number for morphing
                if (n.regex.numberAndUnit.test(e)) return new n.Number(t).morph(e);
                // prepare for plain morphing
                this.value = t;
                this.destination = e;
            },
            extend: {
                at: function(t, e) {
                    return e < 1 ? this.value : this.destination;
                },
                valueOf: function() {
                    return this.value;
                }
            }
        });
        n.extend(n.FX, {
            // Add animatable attributes
            attr: function(t, e, n) {
                // apply attributes individually
                if (typeof t == "object") {
                    for (var r in t) this.attr(r, t[r]);
                } else {
                    this.add(t, e, "attrs");
                }
                return this;
            },
            style: function(t, e) {
                if (typeof t == "object") for (var n in t) this.style(n, t[n]); else this.add(t, e, "styles");
                return this;
            },
            x: function(t, e) {
                if (this.target() instanceof n.G) {
                    this.transform({
                        x: t
                    }, e);
                    return this;
                }
                var r = new n.Number(t);
                r.relative = e;
                return this.add("x", r);
            },
            y: function(t, e) {
                if (this.target() instanceof n.G) {
                    this.transform({
                        y: t
                    }, e);
                    return this;
                }
                var r = new n.Number(t);
                r.relative = e;
                return this.add("y", r);
            },
            cx: function(t) {
                return this.add("cx", new n.Number(t));
            },
            cy: function(t) {
                return this.add("cy", new n.Number(t));
            },
            move: function(t, e) {
                return this.x(t).y(e);
            },
            center: function(t, e) {
                return this.cx(t).cy(e);
            },
            size: function(t, e) {
                if (this.target() instanceof n.Text) {
                    // animate font size for Text elements
                    this.attr("font-size", t);
                } else {
                    // animate bbox based size for all other elements
                    var r;
                    if (!t || !e) {
                        r = this.target().bbox();
                    }
                    if (!t) {
                        t = r.width / r.height * e;
                    }
                    if (!e) {
                        e = r.height / r.width * t;
                    }
                    this.add("width", new n.Number(t)).add("height", new n.Number(e));
                }
                return this;
            },
            width: function(t) {
                return this.add("width", new n.Number(t));
            },
            height: function(t) {
                return this.add("height", new n.Number(t));
            },
            plot: function(t, e, n, r) {
                // Lines can be plotted with 4 arguments
                if (arguments.length == 4) {
                    return this.plot([ t, e, n, r ]);
                }
                return this.add("plot", new (this.target().morphArray)(t));
            },
            leading: function(t) {
                return this.target().leading ? this.add("leading", new n.Number(t)) : this;
            },
            viewbox: function(t, e, r, i) {
                if (this.target() instanceof n.Container) {
                    this.add("viewbox", new n.ViewBox(t, e, r, i));
                }
                return this;
            },
            update: function(t) {
                if (this.target() instanceof n.Stop) {
                    if (typeof t == "number" || t instanceof n.Number) {
                        return this.update({
                            offset: arguments[0],
                            color: arguments[1],
                            opacity: arguments[2]
                        });
                    }
                    if (t.opacity != null) this.attr("stop-opacity", t.opacity);
                    if (t.color != null) this.attr("stop-color", t.color);
                    if (t.offset != null) this.attr("offset", t.offset);
                }
                return this;
            }
        });
        n.Box = n.invent({
            create: function(t, e, r, i) {
                if (typeof t == "object" && !(t instanceof n.Element)) {
                    // chromes getBoundingClientRect has no x and y property
                    return n.Box.call(this, t.left != null ? t.left : t.x, t.top != null ? t.top : t.y, t.width, t.height);
                } else if (arguments.length == 4) {
                    this.x = t;
                    this.y = e;
                    this.width = r;
                    this.height = i;
                }
                // add center, right, bottom...
                C(this);
            },
            extend: {
                // Merge rect box with another, return a new instance
                merge: function(t) {
                    var e = new this.constructor();
                    // merge boxes
                    e.x = Math.min(this.x, t.x);
                    e.y = Math.min(this.y, t.y);
                    e.width = Math.max(this.x + this.width, t.x + t.width) - e.x;
                    e.height = Math.max(this.y + this.height, t.y + t.height) - e.y;
                    return C(e);
                },
                transform: function(t) {
                    var e = Infinity, r = -Infinity, i = Infinity, a = -Infinity, s, o;
                    var u = [ new n.Point(this.x, this.y), new n.Point(this.x2, this.y), new n.Point(this.x, this.y2), new n.Point(this.x2, this.y2) ];
                    u.forEach(function(n) {
                        n = n.transform(t);
                        e = Math.min(e, n.x);
                        r = Math.max(r, n.x);
                        i = Math.min(i, n.y);
                        a = Math.max(a, n.y);
                    });
                    o = new this.constructor();
                    o.x = e;
                    o.width = r - e;
                    o.y = i;
                    o.height = a - i;
                    C(o);
                    return o;
                }
            }
        });
        n.BBox = n.invent({
            // Initialize
            create: function(t) {
                n.Box.apply(this, [].slice.call(arguments));
                // get values if element is given
                if (t instanceof n.Element) {
                    var r;
                    // yes this is ugly, but Firefox can be a bitch when it comes to elements that are not yet rendered
                    try {
                        if (!e.documentElement.contains) {
                            // This is IE - it does not support contains() for top-level SVGs
                            var i = t.node;
                            while (i.parentNode) {
                                i = i.parentNode;
                            }
                            if (i != e) throw new Exception("Element not in the dom");
                        } else {
                            // the element is NOT in the dom, throw error
                            if (!e.documentElement.contains(t.node)) throw new Exception("Element not in the dom");
                        }
                        // find native bbox
                        r = t.node.getBBox();
                    } catch (e) {
                        if (t instanceof n.Shape) {
                            var a = t.clone(n.parser.draw.instance).show();
                            r = a.node.getBBox();
                            a.remove();
                        } else {
                            r = {
                                x: t.node.clientLeft,
                                y: t.node.clientTop,
                                width: t.node.clientWidth,
                                height: t.node.clientHeight
                            };
                        }
                    }
                    n.Box.call(this, r);
                }
            },
            inherit: n.Box,
            parent: n.Element,
            construct: {
                // Get bounding box
                bbox: function() {
                    return new n.BBox(this);
                }
            }
        });
        n.BBox.prototype.constructor = n.BBox;
        n.extend(n.Element, {
            tbox: function() {
                console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead.");
                return this.rbox(this.doc());
            }
        });
        n.RBox = n.invent({
            // Initialize
            create: function(t) {
                n.Box.apply(this, [].slice.call(arguments));
                if (t instanceof n.Element) {
                    n.Box.call(this, t.node.getBoundingClientRect());
                }
            },
            inherit: n.Box,
            parent: n.Element,
            extend: {
                addOffset: function() {
                    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
                    this.x += t.pageXOffset;
                    this.y += t.pageYOffset;
                    return this;
                }
            },
            construct: {
                // Get rect box
                rbox: function(t) {
                    if (t) return new n.RBox(this).transform(t.screenCTM().inverse());
                    return new n.RBox(this).addOffset();
                }
            }
        });
        n.RBox.prototype.constructor = n.RBox;
        n.Matrix = n.invent({
            // Initialize
            create: function(t) {
                var e, r = g([ 1, 0, 0, 1, 0, 0 ]);
                // ensure source as object
                t = t instanceof n.Element ? t.matrixify() : typeof t === "string" ? g(t.split(n.regex.delimiter).map(parseFloat)) : arguments.length == 6 ? g([].slice.call(arguments)) : Array.isArray(t) ? g(t) : typeof t === "object" ? t : r;
                // merge source
                for (e = A.length - 1; e >= 0; --e) this[A[e]] = t[A[e]] != null ? t[A[e]] : r[A[e]];
            },
            extend: {
                // Extract individual transformations
                extract: function() {
                    // find delta transform points
                    var t = y(this, 0, 1), e = y(this, 1, 0), r = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
                    return {
                        // translation
                        x: this.e,
                        y: this.f,
                        transformedX: (this.e * Math.cos(r * Math.PI / 180) + this.f * Math.sin(r * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                        transformedY: (this.f * Math.cos(r * Math.PI / 180) + this.e * Math.sin(-r * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                        skewX: -r,
                        skewY: 180 / Math.PI * Math.atan2(e.y, e.x),
                        scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
                        scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
                        rotation: r,
                        a: this.a,
                        b: this.b,
                        c: this.c,
                        d: this.d,
                        e: this.e,
                        f: this.f,
                        matrix: new n.Matrix(this)
                    };
                },
                clone: function() {
                    return new n.Matrix(this);
                },
                morph: function(t) {
                    // store new destination
                    this.destination = new n.Matrix(t);
                    return this;
                },
                at: function(t) {
                    // make sure a destination is defined
                    if (!this.destination) return this;
                    // calculate morphed matrix at a given position
                    var e = new n.Matrix({
                        a: this.a + (this.destination.a - this.a) * t,
                        b: this.b + (this.destination.b - this.b) * t,
                        c: this.c + (this.destination.c - this.c) * t,
                        d: this.d + (this.destination.d - this.d) * t,
                        e: this.e + (this.destination.e - this.e) * t,
                        f: this.f + (this.destination.f - this.f) * t
                    });
                    return e;
                },
                multiply: function(t) {
                    return new n.Matrix(this.native().multiply(b(t).native()));
                },
                inverse: function() {
                    return new n.Matrix(this.native().inverse());
                },
                translate: function(t, e) {
                    return new n.Matrix(this.native().translate(t || 0, e || 0));
                },
                scale: function(t, e, r, i) {
                    // support uniformal scale
                    if (arguments.length == 1) {
                        e = t;
                    } else if (arguments.length == 3) {
                        i = r;
                        r = e;
                        e = t;
                    }
                    return this.around(r, i, new n.Matrix(t, 0, 0, e, 0, 0));
                },
                rotate: function(t, e, r) {
                    // convert degrees to radians
                    t = n.utils.radians(t);
                    return this.around(e, r, new n.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0));
                },
                flip: function(t, e) {
                    return t == "x" ? this.scale(-1, 1, e, 0) : t == "y" ? this.scale(1, -1, 0, e) : this.scale(-1, -1, t, e != null ? e : t);
                },
                skew: function(t, e, r, i) {
                    // support uniformal skew
                    if (arguments.length == 1) {
                        e = t;
                    } else if (arguments.length == 3) {
                        i = r;
                        r = e;
                        e = t;
                    }
                    // convert degrees to radians
                    t = n.utils.radians(t);
                    e = n.utils.radians(e);
                    return this.around(r, i, new n.Matrix(1, Math.tan(e), Math.tan(t), 1, 0, 0));
                },
                skewX: function(t, e, n) {
                    return this.skew(t, 0, e, n);
                },
                skewY: function(t, e, n) {
                    return this.skew(0, t, e, n);
                },
                around: function(t, e, r) {
                    return this.multiply(new n.Matrix(1, 0, 0, 1, t || 0, e || 0)).multiply(r).multiply(new n.Matrix(1, 0, 0, 1, -t || 0, -e || 0));
                },
                native: function() {
                    // create new matrix
                    var t = n.parser.native.createSVGMatrix();
                    // update with current values
                    for (var e = A.length - 1; e >= 0; e--) t[A[e]] = this[A[e]];
                    return t;
                },
                toString: function() {
                    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
                }
            },
            parent: n.Element,
            construct: {
                // Get current matrix
                ctm: function() {
                    return new n.Matrix(this.node.getCTM());
                },
                // Get current screen matrix
                screenCTM: function() {
                    /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
         This is needed because FF does not return the transformation matrix
         for the inner coordinate system when getScreenCTM() is called on nested svgs.
         However all other Browsers do that */
                    if (this instanceof n.Nested) {
                        var t = this.rect(1, 1);
                        var e = t.node.getScreenCTM();
                        t.remove();
                        return new n.Matrix(e);
                    }
                    return new n.Matrix(this.node.getScreenCTM());
                }
            }
        });
        n.Point = n.invent({
            // Initialize
            create: function(t, e) {
                var n, r, i = {
                    x: 0,
                    y: 0
                };
                // ensure source as object
                r = Array.isArray(t) ? {
                    x: t[0],
                    y: t[1]
                } : typeof t === "object" ? {
                    x: t.x,
                    y: t.y
                } : t != null ? {
                    x: t,
                    y: e != null ? e : t
                } : i;
                // If y has no value, then x is used has its value
                // merge source
                this.x = r.x;
                this.y = r.y;
            },
            extend: {
                // Clone point
                clone: function() {
                    return new n.Point(this);
                },
                morph: function(t, e) {
                    // store new destination
                    this.destination = new n.Point(t, e);
                    return this;
                },
                at: function(t) {
                    // make sure a destination is defined
                    if (!this.destination) return this;
                    // calculate morphed matrix at a given position
                    var e = new n.Point({
                        x: this.x + (this.destination.x - this.x) * t,
                        y: this.y + (this.destination.y - this.y) * t
                    });
                    return e;
                },
                native: function() {
                    // create new point
                    var t = n.parser.native.createSVGPoint();
                    // update with current values
                    t.x = this.x;
                    t.y = this.y;
                    return t;
                },
                transform: function(t) {
                    return new n.Point(this.native().matrixTransform(t.native()));
                }
            }
        });
        n.extend(n.Element, {
            // Get point
            point: function(t, e) {
                return new n.Point(t, e).transform(this.screenCTM().inverse());
            }
        });
        n.extend(n.Element, {
            // Set svg element attribute
            attr: function(t, e, r) {
                // act as full getter
                if (t == null) {
                    // get an object of attributes
                    t = {};
                    e = this.node.attributes;
                    for (r = e.length - 1; r >= 0; r--) t[e[r].nodeName] = n.regex.isNumber.test(e[r].nodeValue) ? parseFloat(e[r].nodeValue) : e[r].nodeValue;
                    return t;
                } else if (typeof t == "object") {
                    // apply every attribute individually if an object is passed
                    for (e in t) this.attr(e, t[e]);
                } else if (e === null) {
                    // remove value
                    this.node.removeAttribute(t);
                } else if (e == null) {
                    // act as a getter if the first and only argument is not an object
                    e = this.node.getAttribute(t);
                    return e == null ? n.defaults.attrs[t] : n.regex.isNumber.test(e) ? parseFloat(e) : e;
                } else {
                    // BUG FIX: some browsers will render a stroke if a color is given even though stroke width is 0
                    if (t == "stroke-width") this.attr("stroke", parseFloat(e) > 0 ? this._stroke : null); else if (t == "stroke") this._stroke = e;
                    // convert image fill and stroke to patterns
                    if (t == "fill" || t == "stroke") {
                        if (n.regex.isImage.test(e)) e = this.doc().defs().image(e, 0, 0);
                        if (e instanceof n.Image) e = this.doc().defs().pattern(0, 0, function() {
                            this.add(e);
                        });
                    }
                    // ensure correct numeric values (also accepts NaN and Infinity)
                    if (typeof e === "number") e = new n.Number(e); else if (n.Color.isColor(e)) e = new n.Color(e); else if (Array.isArray(e)) e = new n.Array(e);
                    // if the passed attribute is leading...
                    if (t == "leading") {
                        // ... call the leading method instead
                        if (this.leading) this.leading(e);
                    } else {
                        // set given attribute on node
                        typeof r === "string" ? this.node.setAttributeNS(r, t, e.toString()) : this.node.setAttribute(t, e.toString());
                    }
                    // rebuild if required
                    if (this.rebuild && (t == "font-size" || t == "x")) this.rebuild(t, e);
                }
                return this;
            }
        });
        n.extend(n.Element, {
            // Add transformations
            transform: function(t, e) {
                // get target in case of the fx module, otherwise reference this
                var r = this, i, a;
                // act as a getter
                if (typeof t !== "object") {
                    // get current matrix
                    i = new n.Matrix(r).extract();
                    return typeof t === "string" ? i[t] : i;
                }
                // get current matrix
                i = new n.Matrix(r);
                // ensure relative flag
                e = !!e || !!t.relative;
                // act on matrix
                if (t.a != null) {
                    i = e ? // relative
                    i.multiply(new n.Matrix(t)) : // absolute
                    new n.Matrix(t);
                } else if (t.rotation != null) {
                    // ensure centre point
                    x(t, r);
                    // apply transformation
                    i = e ? // relative
                    i.rotate(t.rotation, t.cx, t.cy) : // absolute
                    i.rotate(t.rotation - i.extract().rotation, t.cx, t.cy);
                } else if (t.scale != null || t.scaleX != null || t.scaleY != null) {
                    // ensure centre point
                    x(t, r);
                    // ensure scale values on both axes
                    t.scaleX = t.scale != null ? t.scale : t.scaleX != null ? t.scaleX : 1;
                    t.scaleY = t.scale != null ? t.scale : t.scaleY != null ? t.scaleY : 1;
                    if (!e) {
                        // absolute; multiply inversed values
                        var s = i.extract();
                        t.scaleX = t.scaleX * 1 / s.scaleX;
                        t.scaleY = t.scaleY * 1 / s.scaleY;
                    }
                    i = i.scale(t.scaleX, t.scaleY, t.cx, t.cy);
                } else if (t.skew != null || t.skewX != null || t.skewY != null) {
                    // ensure centre point
                    x(t, r);
                    // ensure skew values on both axes
                    t.skewX = t.skew != null ? t.skew : t.skewX != null ? t.skewX : 0;
                    t.skewY = t.skew != null ? t.skew : t.skewY != null ? t.skewY : 0;
                    if (!e) {
                        // absolute; reset skew values
                        var s = i.extract();
                        i = i.multiply(new n.Matrix().skew(s.skewX, s.skewY, t.cx, t.cy).inverse());
                    }
                    i = i.skew(t.skewX, t.skewY, t.cx, t.cy);
                } else if (t.flip) {
                    if (t.flip == "x" || t.flip == "y") {
                        t.offset = t.offset == null ? r.bbox()["c" + t.flip] : t.offset;
                    } else {
                        if (t.offset == null) {
                            a = r.bbox();
                            t.flip = a.cx;
                            t.offset = a.cy;
                        } else {
                            t.flip = t.offset;
                        }
                    }
                    i = new n.Matrix().flip(t.flip, t.offset);
                } else if (t.x != null || t.y != null) {
                    if (e) {
                        // relative
                        i = i.translate(t.x, t.y);
                    } else {
                        // absolute
                        if (t.x != null) i.e = t.x;
                        if (t.y != null) i.f = t.y;
                    }
                }
                return this.attr("transform", i);
            }
        });
        n.extend(n.FX, {
            transform: function(t, e) {
                // get target in case of the fx module, otherwise reference this
                var r = this.target(), i, a;
                // act as a getter
                if (typeof t !== "object") {
                    // get current matrix
                    i = new n.Matrix(r).extract();
                    return typeof t === "string" ? i[t] : i;
                }
                // ensure relative flag
                e = !!e || !!t.relative;
                // act on matrix
                if (t.a != null) {
                    i = new n.Matrix(t);
                } else if (t.rotation != null) {
                    // ensure centre point
                    x(t, r);
                    // apply transformation
                    i = new n.Rotate(t.rotation, t.cx, t.cy);
                } else if (t.scale != null || t.scaleX != null || t.scaleY != null) {
                    // ensure centre point
                    x(t, r);
                    // ensure scale values on both axes
                    t.scaleX = t.scale != null ? t.scale : t.scaleX != null ? t.scaleX : 1;
                    t.scaleY = t.scale != null ? t.scale : t.scaleY != null ? t.scaleY : 1;
                    i = new n.Scale(t.scaleX, t.scaleY, t.cx, t.cy);
                } else if (t.skewX != null || t.skewY != null) {
                    // ensure centre point
                    x(t, r);
                    // ensure skew values on both axes
                    t.skewX = t.skewX != null ? t.skewX : 0;
                    t.skewY = t.skewY != null ? t.skewY : 0;
                    i = new n.Skew(t.skewX, t.skewY, t.cx, t.cy);
                } else if (t.flip) {
                    if (t.flip == "x" || t.flip == "y") {
                        t.offset = t.offset == null ? r.bbox()["c" + t.flip] : t.offset;
                    } else {
                        if (t.offset == null) {
                            a = r.bbox();
                            t.flip = a.cx;
                            t.offset = a.cy;
                        } else {
                            t.flip = t.offset;
                        }
                    }
                    i = new n.Matrix().flip(t.flip, t.offset);
                } else if (t.x != null || t.y != null) {
                    i = new n.Translate(t.x, t.y);
                }
                if (!i) return this;
                i.relative = e;
                this.last().transforms.push(i);
                return this._callStart();
            }
        });
        n.extend(n.Element, {
            // Reset all transformations
            untransform: function() {
                return this.attr("transform", null);
            },
            // merge the whole transformation chain into one matrix and returns it
            matrixify: function() {
                var t = (this.attr("transform") || "").split(n.regex.transforms).slice(0, -1).map(function(t) {
                    // generate key => value pairs
                    var e = t.trim().split("(");
                    return [ e[0], e[1].split(n.regex.delimiter).map(function(t) {
                        return parseFloat(t);
                    }) ];
                }).reduce(function(t, e) {
                    if (e[0] == "matrix") return t.multiply(g(e[1]));
                    return t[e[0]].apply(t, e[1]);
                }, new n.Matrix());
                return t;
            },
            // add an element to another parent without changing the visual representation on the screen
            toParent: function(t) {
                if (this == t) return this;
                var e = this.screenCTM();
                var n = t.screenCTM().inverse();
                this.addTo(t).untransform().transform(n.multiply(e));
                return this;
            },
            // same as above with parent equals root-svg
            toDoc: function() {
                return this.toParent(this.doc());
            }
        });
        n.Transformation = n.invent({
            create: function(t, e) {
                if (arguments.length > 1 && typeof e != "boolean") {
                    return this.constructor.call(this, [].slice.call(arguments));
                }
                if (Array.isArray(t)) {
                    for (var n = 0, r = this.arguments.length; n < r; ++n) {
                        this[this.arguments[n]] = t[n];
                    }
                } else if (typeof t == "object") {
                    for (var n = 0, r = this.arguments.length; n < r; ++n) {
                        this[this.arguments[n]] = t[this.arguments[n]];
                    }
                }
                this.inversed = false;
                if (e === true) {
                    this.inversed = true;
                }
            },
            extend: {
                arguments: [],
                method: "",
                at: function(t) {
                    var e = [];
                    for (var r = 0, i = this.arguments.length; r < i; ++r) {
                        e.push(this[this.arguments[r]]);
                    }
                    var a = this._undo || new n.Matrix();
                    a = new n.Matrix().morph(n.Matrix.prototype[this.method].apply(a, e)).at(t);
                    return this.inversed ? a.inverse() : a;
                },
                undo: function(t) {
                    for (var e = 0, r = this.arguments.length; e < r; ++e) {
                        t[this.arguments[e]] = typeof this[this.arguments[e]] == "undefined" ? 0 : t[this.arguments[e]];
                    }
                    // The method SVG.Matrix.extract which was used before calling this
                    // method to obtain a value for the parameter o doesn't return a cx and
                    // a cy so we use the ones that were provided to this object at its creation
                    t.cx = this.cx;
                    t.cy = this.cy;
                    this._undo = new (n[d(this.method)])(t, true).at(1);
                    return this;
                }
            }
        });
        n.Translate = n.invent({
            parent: n.Matrix,
            inherit: n.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "transformedX", "transformedY" ],
                method: "translate"
            }
        });
        n.Rotate = n.invent({
            parent: n.Matrix,
            inherit: n.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "rotation", "cx", "cy" ],
                method: "rotate",
                at: function(t) {
                    var e = new n.Matrix().rotate(new n.Number().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(t), this.cx, this.cy);
                    return this.inversed ? e.inverse() : e;
                },
                undo: function(t) {
                    this._undo = t;
                    return this;
                }
            }
        });
        n.Scale = n.invent({
            parent: n.Matrix,
            inherit: n.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "scaleX", "scaleY", "cx", "cy" ],
                method: "scale"
            }
        });
        n.Skew = n.invent({
            parent: n.Matrix,
            inherit: n.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "skewX", "skewY", "cx", "cy" ],
                method: "skew"
            }
        });
        n.extend(n.Element, {
            // Dynamic style generator
            style: function(t, e) {
                if (arguments.length == 0) {
                    // get full style
                    return this.node.style.cssText || "";
                } else if (arguments.length < 2) {
                    // apply every style individually if an object is passed
                    if (typeof t == "object") {
                        for (e in t) this.style(e, t[e]);
                    } else if (n.regex.isCss.test(t)) {
                        // parse css string
                        t = t.split(/\s*;\s*/).filter(function(t) {
                            return !!t;
                        }).map(function(t) {
                            return t.split(/\s*:\s*/);
                        });
                        // apply every definition individually
                        while (e = t.pop()) {
                            this.style(e[0], e[1]);
                        }
                    } else {
                        // act as a getter if the first and only argument is not an object
                        return this.node.style[h(t)];
                    }
                } else {
                    this.node.style[h(t)] = e === null || n.regex.isBlank.test(e) ? "" : e;
                }
                return this;
            }
        });
        n.Parent = n.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, t);
            },
            inherit: n.Element,
            extend: {
                // Returns all child elements
                children: function() {
                    return n.utils.map(n.utils.filterSVGElements(this.node.childNodes), function(t) {
                        return n.adopt(t);
                    });
                },
                add: function(t, e) {
                    if (e == null) this.node.appendChild(t.node); else if (t.node != this.node.childNodes[e]) this.node.insertBefore(t.node, this.node.childNodes[e]);
                    return this;
                },
                put: function(t, e) {
                    this.add(t, e);
                    return t;
                },
                has: function(t) {
                    return this.index(t) >= 0;
                },
                index: function(t) {
                    return [].slice.call(this.node.childNodes).indexOf(t.node);
                },
                get: function(t) {
                    return n.adopt(this.node.childNodes[t]);
                },
                first: function() {
                    return this.get(0);
                },
                last: function() {
                    return this.get(this.node.childNodes.length - 1);
                },
                each: function(t, e) {
                    var r, i, a = this.children();
                    for (r = 0, i = a.length; r < i; r++) {
                        if (a[r] instanceof n.Element) t.apply(a[r], [ r, a ]);
                        if (e && a[r] instanceof n.Container) a[r].each(t, e);
                    }
                    return this;
                },
                removeElement: function(t) {
                    this.node.removeChild(t.node);
                    return this;
                },
                clear: function() {
                    // remove children
                    while (this.node.hasChildNodes()) this.node.removeChild(this.node.lastChild);
                    // remove defs reference
                    delete this._defs;
                    return this;
                },
                // Get defs
                defs: function() {
                    return this.doc().defs();
                }
            }
        });
        n.extend(n.Parent, {
            ungroup: function(t, e) {
                if (e === 0 || this instanceof n.Defs || this.node == n.parser.draw) return this;
                t = t || (this instanceof n.Doc ? this : this.parent(n.Parent));
                e = e || Infinity;
                this.each(function() {
                    if (this instanceof n.Defs) return this;
                    if (this instanceof n.Parent) return this.ungroup(t, e - 1);
                    return this.toParent(t);
                });
                this.node.firstChild || this.remove();
                return this;
            },
            flatten: function(t, e) {
                return this.ungroup(t, e);
            }
        });
        n.Container = n.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, t);
            },
            inherit: n.Parent
        });
        n.ViewBox = n.invent({
            create: function(t) {
                var e, r = [ 0, 0, 0, 0 ];
                var i, a, s, o, u, l, f, c, h = 1, d = 1, p = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
                if (t instanceof n.Element) {
                    f = t;
                    c = t;
                    l = (t.attr("viewBox") || "").match(p);
                    u = t.bbox;
                    // get dimensions of current node
                    s = new n.Number(t.width());
                    o = new n.Number(t.height());
                    // find nearest non-percentual dimensions
                    while (s.unit == "%") {
                        h *= s.value;
                        s = new n.Number(f instanceof n.Doc ? f.parent().offsetWidth : f.parent().width());
                        f = f.parent();
                    }
                    while (o.unit == "%") {
                        d *= o.value;
                        o = new n.Number(c instanceof n.Doc ? c.parent().offsetHeight : c.parent().height());
                        c = c.parent();
                    }
                    // ensure defaults
                    this.x = 0;
                    this.y = 0;
                    this.width = s * h;
                    this.height = o * d;
                    this.zoom = 1;
                    if (l) {
                        // get width and height from viewbox
                        i = parseFloat(l[0]);
                        a = parseFloat(l[1]);
                        s = parseFloat(l[2]);
                        o = parseFloat(l[3]);
                        // calculate zoom accoring to viewbox
                        this.zoom = this.width / this.height > s / o ? this.height / o : this.width / s;
                        // calculate real pixel dimensions on parent SVG.Doc element
                        this.x = i;
                        this.y = a;
                        this.width = s;
                        this.height = o;
                    }
                } else {
                    // ensure source as object
                    t = typeof t === "string" ? t.match(p).map(function(t) {
                        return parseFloat(t);
                    }) : Array.isArray(t) ? t : typeof t == "object" ? [ t.x, t.y, t.width, t.height ] : arguments.length == 4 ? [].slice.call(arguments) : r;
                    this.x = t[0];
                    this.y = t[1];
                    this.width = t[2];
                    this.height = t[3];
                }
            },
            extend: {
                toString: function() {
                    return this.x + " " + this.y + " " + this.width + " " + this.height;
                },
                morph: function(t, e, r, i) {
                    this.destination = new n.ViewBox(t, e, r, i);
                    return this;
                },
                at: function(t) {
                    if (!this.destination) return this;
                    return new n.ViewBox([ this.x + (this.destination.x - this.x) * t, this.y + (this.destination.y - this.y) * t, this.width + (this.destination.width - this.width) * t, this.height + (this.destination.height - this.height) * t ]);
                }
            },
            parent: n.Container,
            construct: {
                // get/set viewbox
                viewbox: function(t, e, r, i) {
                    if (arguments.length == 0) // act as a getter if there are no arguments
                    return new n.ViewBox(this);
                    // otherwise act as a setter
                    return this.attr("viewBox", new n.ViewBox(t, e, r, i));
                }
            }
        });
        [ "click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel" ].forEach(function(t) {
            // add event to SVG.Element
            n.Element.prototype[t] = function(e) {
                // bind event to element rather than element node
                n.on(this.node, t, e);
                return this;
            };
        });
        // Initialize listeners stack
        n.listeners = [];
        n.handlerMap = [];
        n.listenerId = 0;
        // Add event binder in the SVG namespace
        n.on = function(t, e, r, i, a) {
            // create listener, get object-index
            var s = r.bind(i || t.instance || t), o = (n.handlerMap.indexOf(t) + 1 || n.handlerMap.push(t)) - 1, u = e.split(".")[0], l = e.split(".")[1] || "*";
            // ensure valid object
            n.listeners[o] = n.listeners[o] || {};
            n.listeners[o][u] = n.listeners[o][u] || {};
            n.listeners[o][u][l] = n.listeners[o][u][l] || {};
            if (!r._svgjsListenerId) r._svgjsListenerId = ++n.listenerId;
            // reference listener
            n.listeners[o][u][l][r._svgjsListenerId] = s;
            // add listener
            t.addEventListener(u, s, a || false);
        };
        // Add event unbinder in the SVG namespace
        n.off = function(t, e, r) {
            var i = n.handlerMap.indexOf(t), a = e && e.split(".")[0], s = e && e.split(".")[1], o = "";
            if (i == -1) return;
            if (r) {
                if (typeof r == "function") r = r._svgjsListenerId;
                if (!r) return;
                // remove listener reference
                if (n.listeners[i][a] && n.listeners[i][a][s || "*"]) {
                    // remove listener
                    t.removeEventListener(a, n.listeners[i][a][s || "*"][r], false);
                    delete n.listeners[i][a][s || "*"][r];
                }
            } else if (s && a) {
                // remove all listeners for a namespaced event
                if (n.listeners[i][a] && n.listeners[i][a][s]) {
                    for (r in n.listeners[i][a][s]) n.off(t, [ a, s ].join("."), r);
                    delete n.listeners[i][a][s];
                }
            } else if (s) {
                // remove all listeners for a specific namespace
                for (e in n.listeners[i]) {
                    for (o in n.listeners[i][e]) {
                        if (s === o) {
                            n.off(t, [ e, s ].join("."));
                        }
                    }
                }
            } else if (a) {
                // remove all listeners for the event
                if (n.listeners[i][a]) {
                    for (o in n.listeners[i][a]) n.off(t, [ a, o ].join("."));
                    delete n.listeners[i][a];
                }
            } else {
                // remove all listeners on a given node
                for (e in n.listeners[i]) n.off(t, e);
                delete n.listeners[i];
                delete n.handlerMap[i];
            }
        };
        //
        n.extend(n.Element, {
            // Bind given event to listener
            on: function(t, e, r, i) {
                n.on(this.node, t, e, r, i);
                return this;
            },
            off: function(t, e) {
                n.off(this.node, t, e);
                return this;
            },
            fire: function(e, n) {
                // Dispatch event
                if (e instanceof t.Event) {
                    this.node.dispatchEvent(e);
                } else {
                    this.node.dispatchEvent(e = new t.CustomEvent(e, {
                        detail: n,
                        cancelable: true
                    }));
                }
                this._event = e;
                return this;
            },
            event: function() {
                return this._event;
            }
        });
        n.Defs = n.invent({
            // Initialize node
            create: "defs",
            inherit: n.Container
        });
        n.G = n.invent({
            // Initialize node
            create: "g",
            inherit: n.Container,
            extend: {
                // Move over x-axis
                x: function(t) {
                    return t == null ? this.transform("x") : this.transform({
                        x: t - this.x()
                    }, true);
                },
                y: function(t) {
                    return t == null ? this.transform("y") : this.transform({
                        y: t - this.y()
                    }, true);
                },
                cx: function(t) {
                    return t == null ? this.gbox().cx : this.x(t - this.gbox().width / 2);
                },
                cy: function(t) {
                    return t == null ? this.gbox().cy : this.y(t - this.gbox().height / 2);
                },
                gbox: function() {
                    var t = this.bbox(), e = this.transform();
                    t.x += e.x;
                    t.x2 += e.x;
                    t.cx += e.x;
                    t.y += e.y;
                    t.y2 += e.y;
                    t.cy += e.y;
                    return t;
                }
            },
            construct: {
                // Create a group element
                group: function() {
                    return this.put(new n.G());
                }
            }
        });
        // ### This module adds backward / forward functionality to elements.
        //
        n.extend(n.Element, {
            // Get all siblings, including myself
            siblings: function() {
                return this.parent().children();
            },
            position: function() {
                return this.parent().index(this);
            },
            next: function() {
                return this.siblings()[this.position() + 1];
            },
            previous: function() {
                return this.siblings()[this.position() - 1];
            },
            forward: function() {
                var t = this.position() + 1, e = this.parent();
                // move node one step forward
                e.removeElement(this).add(this, t);
                // make sure defs node is always at the top
                if (e instanceof n.Doc) e.node.appendChild(e.defs().node);
                return this;
            },
            backward: function() {
                var t = this.position();
                if (t > 0) this.parent().removeElement(this).add(this, t - 1);
                return this;
            },
            front: function() {
                var t = this.parent();
                // Move node forward
                t.node.appendChild(this.node);
                // Make sure defs node is always at the top
                if (t instanceof n.Doc) t.node.appendChild(t.defs().node);
                return this;
            },
            back: function() {
                if (this.position() > 0) this.parent().removeElement(this).add(this, 0);
                return this;
            },
            before: function(t) {
                t.remove();
                var e = this.position();
                this.parent().add(t, e);
                return this;
            },
            after: function(t) {
                t.remove();
                var e = this.position();
                this.parent().add(t, e + 1);
                return this;
            }
        });
        n.Mask = n.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, n.create("mask"));
                // keep references to masked elements
                this.targets = [];
            },
            inherit: n.Container,
            extend: {
                // Unmask all masked elements and remove itself
                remove: function() {
                    // unmask all targets
                    for (var t = this.targets.length - 1; t >= 0; t--) if (this.targets[t]) this.targets[t].unmask();
                    this.targets = [];
                    // remove mask from parent
                    this.parent().removeElement(this);
                    return this;
                }
            },
            construct: {
                // Create masking element
                mask: function() {
                    return this.defs().put(new n.Mask());
                }
            }
        });
        n.extend(n.Element, {
            // Distribute mask to svg element
            maskWith: function(t) {
                // use given mask or create a new one
                this.masker = t instanceof n.Mask ? t : this.parent().mask().add(t);
                // store reverence on self in mask
                this.masker.targets.push(this);
                // apply mask
                return this.attr("mask", 'url("#' + this.masker.attr("id") + '")');
            },
            unmask: function() {
                delete this.masker;
                return this.attr("mask", null);
            }
        });
        n.ClipPath = n.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, n.create("clipPath"));
                // keep references to clipped elements
                this.targets = [];
            },
            inherit: n.Container,
            extend: {
                // Unclip all clipped elements and remove itself
                remove: function() {
                    // unclip all targets
                    for (var t = this.targets.length - 1; t >= 0; t--) if (this.targets[t]) this.targets[t].unclip();
                    this.targets = [];
                    // remove clipPath from parent
                    this.parent().removeElement(this);
                    return this;
                }
            },
            construct: {
                // Create clipping element
                clip: function() {
                    return this.defs().put(new n.ClipPath());
                }
            }
        });
        //
        n.extend(n.Element, {
            // Distribute clipPath to svg element
            clipWith: function(t) {
                // use given clip or create a new one
                this.clipper = t instanceof n.ClipPath ? t : this.parent().clip().add(t);
                // store reverence on self in mask
                this.clipper.targets.push(this);
                // apply mask
                return this.attr("clip-path", 'url("#' + this.clipper.attr("id") + '")');
            },
            unclip: function() {
                delete this.clipper;
                return this.attr("clip-path", null);
            }
        });
        n.Gradient = n.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, n.create(t + "Gradient"));
                // store type
                this.type = t;
            },
            inherit: n.Container,
            extend: {
                // Add a color stop
                at: function(t, e, r) {
                    return this.put(new n.Stop()).update(t, e, r);
                },
                update: function(t) {
                    // remove all stops
                    this.clear();
                    // invoke passed block
                    if (typeof t == "function") t.call(this, this);
                    return this;
                },
                fill: function() {
                    return "url(#" + this.id() + ")";
                },
                toString: function() {
                    return this.fill();
                },
                attr: function(t, e, r) {
                    if (t == "transform") t = "gradientTransform";
                    return n.Container.prototype.attr.call(this, t, e, r);
                }
            },
            construct: {
                // Create gradient element in defs
                gradient: function(t, e) {
                    return this.defs().gradient(t, e);
                }
            }
        });
        // Add animatable methods to both gradient and fx module
        n.extend(n.Gradient, n.FX, {
            // From position
            from: function(t, e) {
                return (this._target || this).type == "radial" ? this.attr({
                    fx: new n.Number(t),
                    fy: new n.Number(e)
                }) : this.attr({
                    x1: new n.Number(t),
                    y1: new n.Number(e)
                });
            },
            to: function(t, e) {
                return (this._target || this).type == "radial" ? this.attr({
                    cx: new n.Number(t),
                    cy: new n.Number(e)
                }) : this.attr({
                    x2: new n.Number(t),
                    y2: new n.Number(e)
                });
            }
        });
        // Base gradient generation
        n.extend(n.Defs, {
            // define gradient
            gradient: function(t, e) {
                return this.put(new n.Gradient(t)).update(e);
            }
        });
        n.Stop = n.invent({
            // Initialize node
            create: "stop",
            inherit: n.Element,
            extend: {
                // add color stops
                update: function(t) {
                    if (typeof t == "number" || t instanceof n.Number) {
                        t = {
                            offset: arguments[0],
                            color: arguments[1],
                            opacity: arguments[2]
                        };
                    }
                    // set attributes
                    if (t.opacity != null) this.attr("stop-opacity", t.opacity);
                    if (t.color != null) this.attr("stop-color", t.color);
                    if (t.offset != null) this.attr("offset", new n.Number(t.offset));
                    return this;
                }
            }
        });
        n.Pattern = n.invent({
            // Initialize node
            create: "pattern",
            inherit: n.Container,
            extend: {
                // Return the fill id
                fill: function() {
                    return "url(#" + this.id() + ")";
                },
                update: function(t) {
                    // remove content
                    this.clear();
                    // invoke passed block
                    if (typeof t == "function") t.call(this, this);
                    return this;
                },
                toString: function() {
                    return this.fill();
                },
                attr: function(t, e, r) {
                    if (t == "transform") t = "patternTransform";
                    return n.Container.prototype.attr.call(this, t, e, r);
                }
            },
            construct: {
                // Create pattern element in defs
                pattern: function(t, e, n) {
                    return this.defs().pattern(t, e, n);
                }
            }
        });
        n.extend(n.Defs, {
            // Define gradient
            pattern: function(t, e, r) {
                return this.put(new n.Pattern()).update(r).attr({
                    x: 0,
                    y: 0,
                    width: t,
                    height: e,
                    patternUnits: "userSpaceOnUse"
                });
            }
        });
        n.Doc = n.invent({
            // Initialize node
            create: function(t) {
                if (t) {
                    // ensure the presence of a dom element
                    t = typeof t == "string" ? e.getElementById(t) : t;
                    // If the target is an svg element, use that element as the main wrapper.
                    // This allows svg.js to work with svg documents as well.
                    if (t.nodeName == "svg") {
                        this.constructor.call(this, t);
                    } else {
                        this.constructor.call(this, n.create("svg"));
                        t.appendChild(this.node);
                        this.size("100%", "100%");
                    }
                    // set svg element attributes and ensure defs node
                    this.namespace().defs();
                }
            },
            inherit: n.Container,
            extend: {
                // Add namespaces
                namespace: function() {
                    return this.attr({
                        xmlns: n.ns,
                        version: "1.1"
                    }).attr("xmlns:xlink", n.xlink, n.xmlns).attr("xmlns:svgjs", n.svgjs, n.xmlns);
                },
                defs: function() {
                    if (!this._defs) {
                        var t;
                        // Find or create a defs element in this instance
                        if (t = this.node.getElementsByTagName("defs")[0]) this._defs = n.adopt(t); else this._defs = new n.Defs();
                        // Make sure the defs node is at the end of the stack
                        this.node.appendChild(this._defs.node);
                    }
                    return this._defs;
                },
                parent: function() {
                    return this.node.parentNode.nodeName == "#document" ? null : this.node.parentNode;
                },
                spof: function() {
                    var t = this.node.getScreenCTM();
                    if (t) this.style("left", -t.e % 1 + "px").style("top", -t.f % 1 + "px");
                    return this;
                },
                remove: function() {
                    if (this.parent()) {
                        this.parent().removeChild(this.node);
                    }
                    return this;
                },
                clear: function() {
                    // remove children
                    while (this.node.hasChildNodes()) this.node.removeChild(this.node.lastChild);
                    // remove defs reference
                    delete this._defs;
                    // add back parser
                    if (!n.parser.draw.parentNode) this.node.appendChild(n.parser.draw);
                    return this;
                }
            }
        });
        n.Shape = n.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, t);
            },
            inherit: n.Element
        });
        n.Bare = n.invent({
            // Initialize
            create: function(t, e) {
                // construct element
                this.constructor.call(this, n.create(t));
                // inherit custom methods
                if (e) for (var r in e.prototype) if (typeof e.prototype[r] === "function") this[r] = e.prototype[r];
            },
            inherit: n.Element,
            extend: {
                // Insert some plain text
                words: function(t) {
                    // remove contents
                    while (this.node.hasChildNodes()) this.node.removeChild(this.node.lastChild);
                    // create text node
                    this.node.appendChild(e.createTextNode(t));
                    return this;
                }
            }
        });
        n.extend(n.Parent, {
            // Create an element that is not described by SVG.js
            element: function(t, e) {
                return this.put(new n.Bare(t, e));
            }
        });
        n.Symbol = n.invent({
            // Initialize node
            create: "symbol",
            inherit: n.Container,
            construct: {
                // create symbol
                symbol: function() {
                    return this.put(new n.Symbol());
                }
            }
        });
        n.Use = n.invent({
            // Initialize node
            create: "use",
            inherit: n.Shape,
            extend: {
                // Use element as a reference
                element: function(t, e) {
                    // Set lined element
                    return this.attr("href", (e || "") + "#" + t, n.xlink);
                }
            },
            construct: {
                // Create a use element
                use: function(t, e) {
                    return this.put(new n.Use()).element(t, e);
                }
            }
        });
        n.Rect = n.invent({
            // Initialize node
            create: "rect",
            inherit: n.Shape,
            construct: {
                // Create a rect element
                rect: function(t, e) {
                    return this.put(new n.Rect()).size(t, e);
                }
            }
        });
        n.Circle = n.invent({
            // Initialize node
            create: "circle",
            inherit: n.Shape,
            construct: {
                // Create circle element, based on ellipse
                circle: function(t) {
                    return this.put(new n.Circle()).rx(new n.Number(t).divide(2)).move(0, 0);
                }
            }
        });
        n.extend(n.Circle, n.FX, {
            // Radius x value
            rx: function(t) {
                return this.attr("r", t);
            },
            ry: function(t) {
                return this.rx(t);
            }
        });
        n.Ellipse = n.invent({
            // Initialize node
            create: "ellipse",
            inherit: n.Shape,
            construct: {
                // Create an ellipse
                ellipse: function(t, e) {
                    return this.put(new n.Ellipse()).size(t, e).move(0, 0);
                }
            }
        });
        n.extend(n.Ellipse, n.Rect, n.FX, {
            // Radius x value
            rx: function(t) {
                return this.attr("rx", t);
            },
            ry: function(t) {
                return this.attr("ry", t);
            }
        });
        // Add common method
        n.extend(n.Circle, n.Ellipse, {
            // Move over x-axis
            x: function(t) {
                return t == null ? this.cx() - this.rx() : this.cx(t + this.rx());
            },
            y: function(t) {
                return t == null ? this.cy() - this.ry() : this.cy(t + this.ry());
            },
            cx: function(t) {
                return t == null ? this.attr("cx") : this.attr("cx", t);
            },
            cy: function(t) {
                return t == null ? this.attr("cy") : this.attr("cy", t);
            },
            width: function(t) {
                return t == null ? this.rx() * 2 : this.rx(new n.Number(t).divide(2));
            },
            height: function(t) {
                return t == null ? this.ry() * 2 : this.ry(new n.Number(t).divide(2));
            },
            size: function(t, e) {
                var r = m(this, t, e);
                return this.rx(new n.Number(r.width).divide(2)).ry(new n.Number(r.height).divide(2));
            }
        });
        n.Line = n.invent({
            // Initialize node
            create: "line",
            inherit: n.Shape,
            extend: {
                // Get array
                array: function() {
                    return new n.PointArray([ [ this.attr("x1"), this.attr("y1") ], [ this.attr("x2"), this.attr("y2") ] ]);
                },
                plot: function(t, e, r, i) {
                    if (t == null) return this.array(); else if (typeof e !== "undefined") t = {
                        x1: t,
                        y1: e,
                        x2: r,
                        y2: i
                    }; else t = new n.PointArray(t).toLine();
                    return this.attr(t);
                },
                move: function(t, e) {
                    return this.attr(this.array().move(t, e).toLine());
                },
                size: function(t, e) {
                    var n = m(this, t, e);
                    return this.attr(this.array().size(n.width, n.height).toLine());
                }
            },
            construct: {
                // Create a line element
                line: function(t, e, r, i) {
                    // make sure plot is called as a setter
                    // x1 is not necessarily a number, it can also be an array, a string and a SVG.PointArray
                    return n.Line.prototype.plot.apply(this.put(new n.Line()), t != null ? [ t, e, r, i ] : [ 0, 0, 0, 0 ]);
                }
            }
        });
        n.Polyline = n.invent({
            // Initialize node
            create: "polyline",
            inherit: n.Shape,
            construct: {
                // Create a wrapped polyline element
                polyline: function(t) {
                    // make sure plot is called as a setter
                    return this.put(new n.Polyline()).plot(t || new n.PointArray());
                }
            }
        });
        n.Polygon = n.invent({
            // Initialize node
            create: "polygon",
            inherit: n.Shape,
            construct: {
                // Create a wrapped polygon element
                polygon: function(t) {
                    // make sure plot is called as a setter
                    return this.put(new n.Polygon()).plot(t || new n.PointArray());
                }
            }
        });
        // Add polygon-specific functions
        n.extend(n.Polyline, n.Polygon, {
            // Get array
            array: function() {
                return this._array || (this._array = new n.PointArray(this.attr("points")));
            },
            plot: function(t) {
                return t == null ? this.array() : this.clear().attr("points", typeof t == "string" ? t : this._array = new n.PointArray(t));
            },
            clear: function() {
                delete this._array;
                return this;
            },
            move: function(t, e) {
                return this.attr("points", this.array().move(t, e));
            },
            size: function(t, e) {
                var n = m(this, t, e);
                return this.attr("points", this.array().size(n.width, n.height));
            }
        });
        // unify all point to point elements
        n.extend(n.Line, n.Polyline, n.Polygon, {
            // Define morphable array
            morphArray: n.PointArray,
            x: function(t) {
                return t == null ? this.bbox().x : this.move(t, this.bbox().y);
            },
            y: function(t) {
                return t == null ? this.bbox().y : this.move(this.bbox().x, t);
            },
            width: function(t) {
                var e = this.bbox();
                return t == null ? e.width : this.size(t, e.height);
            },
            height: function(t) {
                var e = this.bbox();
                return t == null ? e.height : this.size(e.width, t);
            }
        });
        n.Path = n.invent({
            // Initialize node
            create: "path",
            inherit: n.Shape,
            extend: {
                // Define morphable array
                morphArray: n.PathArray,
                array: function() {
                    return this._array || (this._array = new n.PathArray(this.attr("d")));
                },
                plot: function(t) {
                    return t == null ? this.array() : this.clear().attr("d", typeof t == "string" ? t : this._array = new n.PathArray(t));
                },
                clear: function() {
                    delete this._array;
                    return this;
                },
                move: function(t, e) {
                    return this.attr("d", this.array().move(t, e));
                },
                x: function(t) {
                    return t == null ? this.bbox().x : this.move(t, this.bbox().y);
                },
                y: function(t) {
                    return t == null ? this.bbox().y : this.move(this.bbox().x, t);
                },
                size: function(t, e) {
                    var n = m(this, t, e);
                    return this.attr("d", this.array().size(n.width, n.height));
                },
                width: function(t) {
                    return t == null ? this.bbox().width : this.size(t, this.bbox().height);
                },
                height: function(t) {
                    return t == null ? this.bbox().height : this.size(this.bbox().width, t);
                }
            },
            construct: {
                // Create a wrapped path element
                path: function(t) {
                    // make sure plot is called as a setter
                    return this.put(new n.Path()).plot(t || new n.PathArray());
                }
            }
        });
        n.Image = n.invent({
            // Initialize node
            create: "image",
            inherit: n.Shape,
            extend: {
                // (re)load image
                load: function(e) {
                    if (!e) return this;
                    var r = this, i = new t.Image();
                    // preload image
                    n.on(i, "load", function() {
                        var t = r.parent(n.Pattern);
                        if (t === null) return;
                        // ensure image size
                        if (r.width() == 0 && r.height() == 0) r.size(i.width, i.height);
                        // ensure pattern size if not set
                        if (t && t.width() == 0 && t.height() == 0) t.size(r.width(), r.height());
                        // callback
                        if (typeof r._loaded === "function") r._loaded.call(r, {
                            width: i.width,
                            height: i.height,
                            ratio: i.width / i.height,
                            url: e
                        });
                    });
                    n.on(i, "error", function(t) {
                        if (typeof r._error === "function") {
                            r._error.call(r, t);
                        }
                    });
                    return this.attr("href", i.src = this.src = e, n.xlink);
                },
                loaded: function(t) {
                    this._loaded = t;
                    return this;
                },
                error: function(t) {
                    this._error = t;
                    return this;
                }
            },
            construct: {
                // create image element, load image and set its size
                image: function(t, e, r) {
                    return this.put(new n.Image()).load(t).size(e || 0, r || e || 0);
                }
            }
        });
        n.Text = n.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, n.create("text"));
                this.dom.leading = new n.Number(1.3);
                // store leading value for rebuilding
                this._rebuild = true;
                // enable automatic updating of dy values
                this._build = false;
                // disable build mode for adding multiple lines
                // set default font
                this.attr("font-family", n.defaults.attrs["font-family"]);
            },
            inherit: n.Shape,
            extend: {
                // Move over x-axis
                x: function(t) {
                    // act as getter
                    if (t == null) return this.attr("x");
                    return this.attr("x", t);
                },
                y: function(t) {
                    var e = this.attr("y"), n = typeof e === "number" ? e - this.bbox().y : 0;
                    // act as getter
                    if (t == null) return typeof e === "number" ? e - n : e;
                    return this.attr("y", typeof t === "number" ? t + n : t);
                },
                cx: function(t) {
                    return t == null ? this.bbox().cx : this.x(t - this.bbox().width / 2);
                },
                cy: function(t) {
                    return t == null ? this.bbox().cy : this.y(t - this.bbox().height / 2);
                },
                text: function(t) {
                    // act as getter
                    if (typeof t === "undefined") {
                        var t = "";
                        var e = this.node.childNodes;
                        for (var r = 0, i = e.length; r < i; ++r) {
                            // add newline if its not the first child and newLined is set to true
                            if (r != 0 && e[r].nodeType != 3 && n.adopt(e[r]).dom.newLined == true) {
                                t += "\n";
                            }
                            // add content of this node
                            t += e[r].textContent;
                        }
                        return t;
                    }
                    // remove existing content
                    this.clear().build(true);
                    if (typeof t === "function") {
                        // call block
                        t.call(this, this);
                    } else {
                        // store text and make sure text is not blank
                        t = t.split("\n");
                        // build new lines
                        for (var r = 0, a = t.length; r < a; r++) this.tspan(t[r]).newLine();
                    }
                    // disable build mode and rebuild lines
                    return this.build(false).rebuild();
                },
                size: function(t) {
                    return this.attr("font-size", t).rebuild();
                },
                leading: function(t) {
                    // act as getter
                    if (t == null) return this.dom.leading;
                    // act as setter
                    this.dom.leading = new n.Number(t);
                    return this.rebuild();
                },
                lines: function() {
                    var t = (this.textPath && this.textPath() || this).node;
                    // filter tspans and map them to SVG.js instances
                    var e = n.utils.map(n.utils.filterSVGElements(t.childNodes), function(t) {
                        return n.adopt(t);
                    });
                    // return an instance of SVG.set
                    return new n.Set(e);
                },
                rebuild: function(t) {
                    // store new rebuild flag if given
                    if (typeof t == "boolean") this._rebuild = t;
                    // define position of all lines
                    if (this._rebuild) {
                        var e = this, r = 0, i = this.dom.leading * new n.Number(this.attr("font-size"));
                        this.lines().each(function() {
                            if (this.dom.newLined) {
                                if (!e.textPath()) this.attr("x", e.attr("x"));
                                if (this.text() == "\n") {
                                    r += i;
                                } else {
                                    this.attr("dy", i + r);
                                    r = 0;
                                }
                            }
                        });
                        this.fire("rebuild");
                    }
                    return this;
                },
                build: function(t) {
                    this._build = !!t;
                    return this;
                },
                setData: function(t) {
                    this.dom = t;
                    this.dom.leading = new n.Number(t.leading || 1.3);
                    return this;
                }
            },
            construct: {
                // Create text element
                text: function(t) {
                    return this.put(new n.Text()).text(t);
                },
                plain: function(t) {
                    return this.put(new n.Text()).plain(t);
                }
            }
        });
        n.Tspan = n.invent({
            // Initialize node
            create: "tspan",
            inherit: n.Shape,
            extend: {
                // Set text content
                text: function(t) {
                    if (t == null) return this.node.textContent + (this.dom.newLined ? "\n" : "");
                    typeof t === "function" ? t.call(this, this) : this.plain(t);
                    return this;
                },
                dx: function(t) {
                    return this.attr("dx", t);
                },
                dy: function(t) {
                    return this.attr("dy", t);
                },
                newLine: function() {
                    // fetch text parent
                    var t = this.parent(n.Text);
                    // mark new line
                    this.dom.newLined = true;
                    // apply new hy¡n
                    return this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x());
                }
            }
        });
        n.extend(n.Text, n.Tspan, {
            // Create plain text node
            plain: function(t) {
                // clear if build mode is disabled
                if (this._build === false) this.clear();
                // create text node
                this.node.appendChild(e.createTextNode(t));
                return this;
            },
            tspan: function(t) {
                var e = (this.textPath && this.textPath() || this).node, r = new n.Tspan();
                // clear if build mode is disabled
                if (this._build === false) this.clear();
                // add new tspan
                e.appendChild(r.node);
                return r.text(t);
            },
            clear: function() {
                var t = (this.textPath && this.textPath() || this).node;
                // remove existing child nodes
                while (t.hasChildNodes()) t.removeChild(t.lastChild);
                return this;
            },
            length: function() {
                return this.node.getComputedTextLength();
            }
        });
        n.TextPath = n.invent({
            // Initialize node
            create: "textPath",
            inherit: n.Parent,
            parent: n.Text,
            construct: {
                morphArray: n.PathArray,
                path: function(t) {
                    // create textPath element
                    var e = new n.TextPath(), r = this.doc().defs().path(t);
                    // move lines to textpath
                    while (this.node.hasChildNodes()) e.node.appendChild(this.node.firstChild);
                    // add textPath element as child node
                    this.node.appendChild(e.node);
                    // link textPath to path and add content
                    e.attr("href", "#" + r, n.xlink);
                    return this;
                },
                array: function() {
                    var t = this.track();
                    return t ? t.array() : null;
                },
                plot: function(t) {
                    var e = this.track(), n = null;
                    if (e) {
                        n = e.plot(t);
                    }
                    return t == null ? n : this;
                },
                track: function() {
                    var t = this.textPath();
                    if (t) return t.reference("href");
                },
                textPath: function() {
                    if (this.node.firstChild && this.node.firstChild.nodeName == "textPath") return n.adopt(this.node.firstChild);
                }
            }
        });
        n.Nested = n.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, n.create("svg"));
                this.style("overflow", "visible");
            },
            inherit: n.Container,
            construct: {
                // Create nested svg document
                nested: function() {
                    return this.put(new n.Nested());
                }
            }
        });
        n.A = n.invent({
            // Initialize node
            create: "a",
            inherit: n.Container,
            extend: {
                // Link url
                to: function(t) {
                    return this.attr("href", t, n.xlink);
                },
                show: function(t) {
                    return this.attr("show", t, n.xlink);
                },
                target: function(t) {
                    return this.attr("target", t);
                }
            },
            construct: {
                // Create a hyperlink element
                link: function(t) {
                    return this.put(new n.A()).to(t);
                }
            }
        });
        n.extend(n.Element, {
            // Create a hyperlink element
            linkTo: function(t) {
                var e = new n.A();
                if (typeof t == "function") t.call(e, e); else e.to(t);
                return this.parent().put(e).put(this);
            }
        });
        n.Marker = n.invent({
            // Initialize node
            create: "marker",
            inherit: n.Container,
            extend: {
                // Set width of element
                width: function(t) {
                    return this.attr("markerWidth", t);
                },
                height: function(t) {
                    return this.attr("markerHeight", t);
                },
                ref: function(t, e) {
                    return this.attr("refX", t).attr("refY", e);
                },
                update: function(t) {
                    // remove all content
                    this.clear();
                    // invoke passed block
                    if (typeof t == "function") t.call(this, this);
                    return this;
                },
                toString: function() {
                    return "url(#" + this.id() + ")";
                }
            },
            construct: {
                marker: function(t, e, n) {
                    // Create marker element in defs
                    return this.defs().marker(t, e, n);
                }
            }
        });
        n.extend(n.Defs, {
            // Create marker
            marker: function(t, e, r) {
                // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
                return this.put(new n.Marker()).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(r);
            }
        });
        n.extend(n.Line, n.Polyline, n.Polygon, n.Path, {
            // Create and attach markers
            marker: function(t, e, r, i) {
                var a = [ "marker" ];
                // Build attribute name
                if (t != "all") a.push(t);
                a = a.join("-");
                // Set marker attribute
                t = arguments[1] instanceof n.Marker ? arguments[1] : this.doc().marker(e, r, i);
                return this.attr(a, t);
            }
        });
        // Define list of available attributes for stroke and fill
        var o = {
            stroke: [ "color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset" ],
            fill: [ "color", "opacity", "rule" ],
            prefix: function(t, e) {
                return e == "color" ? t : t + "-" + e;
            }
        };
        [ "fill", "stroke" ].forEach(function(t) {
            var e, r = {};
            r[t] = function(r) {
                if (typeof r == "undefined") return this;
                if (typeof r == "string" || n.Color.isRgb(r) || r && typeof r.fill === "function") this.attr(t, r); else // set all attributes from sugar.fill and sugar.stroke list
                for (e = o[t].length - 1; e >= 0; e--) if (r[o[t][e]] != null) this.attr(o.prefix(t, o[t][e]), r[o[t][e]]);
                return this;
            };
            n.extend(n.Element, n.FX, r);
        });
        n.extend(n.Element, n.FX, {
            // Map rotation to transform
            rotate: function(t, e, n) {
                return this.transform({
                    rotation: t,
                    cx: e,
                    cy: n
                });
            },
            skew: function(t, e, n, r) {
                return arguments.length == 1 || arguments.length == 3 ? this.transform({
                    skew: t,
                    cx: e,
                    cy: n
                }) : this.transform({
                    skewX: t,
                    skewY: e,
                    cx: n,
                    cy: r
                });
            },
            scale: function(t, e, n, r) {
                return arguments.length == 1 || arguments.length == 3 ? this.transform({
                    scale: t,
                    cx: e,
                    cy: n
                }) : this.transform({
                    scaleX: t,
                    scaleY: e,
                    cx: n,
                    cy: r
                });
            },
            translate: function(t, e) {
                return this.transform({
                    x: t,
                    y: e
                });
            },
            flip: function(t, e) {
                e = typeof t == "number" ? t : e;
                return this.transform({
                    flip: t || "both",
                    offset: e
                });
            },
            matrix: function(t) {
                return this.attr("transform", new n.Matrix(arguments.length == 6 ? [].slice.call(arguments) : t));
            },
            opacity: function(t) {
                return this.attr("opacity", t);
            },
            dx: function(t) {
                return this.x(new n.Number(t).plus(this instanceof n.FX ? 0 : this.x()), true);
            },
            dy: function(t) {
                return this.y(new n.Number(t).plus(this instanceof n.FX ? 0 : this.y()), true);
            },
            dmove: function(t, e) {
                return this.dx(t).dy(e);
            }
        });
        n.extend(n.Rect, n.Ellipse, n.Circle, n.Gradient, n.FX, {
            // Add x and y radius
            radius: function(t, e) {
                var r = (this._target || this).type;
                return r == "radial" || r == "circle" ? this.attr("r", new n.Number(t)) : this.rx(t).ry(e == null ? t : e);
            }
        });
        n.extend(n.Path, {
            // Get path length
            length: function() {
                return this.node.getTotalLength();
            },
            pointAt: function(t) {
                return this.node.getPointAtLength(t);
            }
        });
        n.extend(n.Parent, n.Text, n.Tspan, n.FX, {
            // Set font
            font: function(t, e) {
                if (typeof t == "object") {
                    for (e in t) this.font(e, t[e]);
                }
                return t == "leading" ? this.leading(e) : t == "anchor" ? this.attr("text-anchor", e) : t == "size" || t == "family" || t == "weight" || t == "stretch" || t == "variant" || t == "style" ? this.attr("font-" + t, e) : this.attr(t, e);
            }
        });
        n.Set = n.invent({
            // Initialize
            create: function(t) {
                // Set initial state
                Array.isArray(t) ? this.members = t : this.clear();
            },
            extend: {
                // Add element to set
                add: function() {
                    var t, e, n = [].slice.call(arguments);
                    for (t = 0, e = n.length; t < e; t++) this.members.push(n[t]);
                    return this;
                },
                remove: function(t) {
                    var e = this.index(t);
                    // remove given child
                    if (e > -1) this.members.splice(e, 1);
                    return this;
                },
                each: function(t) {
                    for (var e = 0, n = this.members.length; e < n; e++) t.apply(this.members[e], [ e, this.members ]);
                    return this;
                },
                clear: function() {
                    // initialize store
                    this.members = [];
                    return this;
                },
                length: function() {
                    return this.members.length;
                },
                has: function(t) {
                    return this.index(t) >= 0;
                },
                index: function(t) {
                    return this.members.indexOf(t);
                },
                get: function(t) {
                    return this.members[t];
                },
                first: function() {
                    return this.get(0);
                },
                last: function() {
                    return this.get(this.members.length - 1);
                },
                valueOf: function() {
                    return this.members;
                },
                bbox: function() {
                    // return an empty box of there are no members
                    if (this.members.length == 0) return new n.RBox();
                    // get the first rbox and update the target bbox
                    var t = this.members[0].rbox(this.members[0].doc());
                    this.each(function() {
                        // user rbox for correct position and visual representation
                        t = t.merge(this.rbox(this.doc()));
                    });
                    return t;
                }
            },
            construct: {
                // Create a new set
                set: function(t) {
                    return new n.Set(t);
                }
            }
        });
        n.FX.Set = n.invent({
            // Initialize node
            create: function(t) {
                // store reference to set
                this.set = t;
            }
        });
        // Alias methods
        n.Set.inherit = function() {
            var t, e = [];
            // gather shape methods
            for (var t in n.Shape.prototype) if (typeof n.Shape.prototype[t] == "function" && typeof n.Set.prototype[t] != "function") e.push(t);
            // apply shape aliasses
            e.forEach(function(t) {
                n.Set.prototype[t] = function() {
                    for (var e = 0, r = this.members.length; e < r; e++) if (this.members[e] && typeof this.members[e][t] == "function") this.members[e][t].apply(this.members[e], arguments);
                    return t == "animate" ? this.fx || (this.fx = new n.FX.Set(this)) : this;
                };
            });
            // clear methods for the next round
            e = [];
            // gather fx methods
            for (var t in n.FX.prototype) if (typeof n.FX.prototype[t] == "function" && typeof n.FX.Set.prototype[t] != "function") e.push(t);
            // apply fx aliasses
            e.forEach(function(t) {
                n.FX.Set.prototype[t] = function() {
                    for (var e = 0, n = this.set.members.length; e < n; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
                    return this;
                };
            });
        };
        n.extend(n.Element, {
            // Store data values on svg nodes
            data: function(t, e, n) {
                if (typeof t == "object") {
                    for (e in t) this.data(e, t[e]);
                } else if (arguments.length < 2) {
                    try {
                        return JSON.parse(this.attr("data-" + t));
                    } catch (e) {
                        return this.attr("data-" + t);
                    }
                } else {
                    this.attr("data-" + t, e === null ? null : n === true || typeof e === "string" || typeof e === "number" ? e : JSON.stringify(e));
                }
                return this;
            }
        });
        n.extend(n.Element, {
            // Remember arbitrary data
            remember: function(t, e) {
                // remember every item in an object individually
                if (typeof arguments[0] == "object") for (var e in t) this.remember(e, t[e]); else if (arguments.length == 1) return this.memory()[t]; else this.memory()[t] = e;
                return this;
            },
            forget: function() {
                if (arguments.length == 0) this._memory = {}; else for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
                return this;
            },
            memory: function() {
                return this._memory || (this._memory = {});
            }
        });
        // Method for getting an element by id
        n.get = function(t) {
            var r = e.getElementById(k(t) || t);
            return n.adopt(r);
        };
        // Select elements by query string
        n.select = function(t, r) {
            return new n.Set(n.utils.map((r || e).querySelectorAll(t), function(t) {
                return n.adopt(t);
            }));
        };
        n.extend(n.Parent, {
            // Scoped select method
            select: function(t) {
                return n.select(t, this.node);
            }
        });
        function u(t, e, r, i) {
            return r + i.replace(n.regex.dots, " .");
        }
        // creates deep clone of array
        function l(t) {
            var e = t.slice(0);
            for (var n = e.length; n--; ) {
                if (Array.isArray(e[n])) {
                    e[n] = l(e[n]);
                }
            }
            return e;
        }
        // tests if a given element is instance of an object
        function f(t, e) {
            return t instanceof e;
        }
        // tests if a given selector matches an element
        function c(t, e) {
            return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e);
        }
        // Convert dash-separated-string to camelCase
        function h(t) {
            return t.toLowerCase().replace(/-(.)/g, function(t, e) {
                return e.toUpperCase();
            });
        }
        // Capitalize first letter of a string
        function d(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        }
        // Ensure to six-based hex
        function p(t) {
            return t.length == 4 ? [ "#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4) ].join("") : t;
        }
        // Component to hex value
        function v(t) {
            var e = t.toString(16);
            return e.length == 1 ? "0" + e : e;
        }
        // Calculate proportional width and height values when necessary
        function m(t, e, n) {
            if (e == null || n == null) {
                var r = t.bbox();
                if (e == null) e = r.width / r.height * n; else if (n == null) n = r.height / r.width * e;
            }
            return {
                width: e,
                height: n
            };
        }
        // Delta transform point
        function y(t, e, n) {
            return {
                x: e * t.a + n * t.c + 0,
                y: e * t.b + n * t.d + 0
            };
        }
        // Map matrix array to object
        function g(t) {
            return {
                a: t[0],
                b: t[1],
                c: t[2],
                d: t[3],
                e: t[4],
                f: t[5]
            };
        }
        // Parse matrix if required
        function b(t) {
            if (!(t instanceof n.Matrix)) t = new n.Matrix(t);
            return t;
        }
        // Add centre point to transform object
        function x(t, e) {
            t.cx = t.cx == null ? e.bbox().cx : t.cx;
            t.cy = t.cy == null ? e.bbox().cy : t.cy;
        }
        // PathArray Helpers
        function w(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) {
                r += t[e][0];
                if (t[e][1] != null) {
                    r += t[e][1];
                    if (t[e][2] != null) {
                        r += " ";
                        r += t[e][2];
                        if (t[e][3] != null) {
                            r += " ";
                            r += t[e][3];
                            r += " ";
                            r += t[e][4];
                            if (t[e][5] != null) {
                                r += " ";
                                r += t[e][5];
                                r += " ";
                                r += t[e][6];
                                if (t[e][7] != null) {
                                    r += " ";
                                    r += t[e][7];
                                }
                            }
                        }
                    }
                }
            }
            return r + " ";
        }
        // Deep new id assignment
        function _(e) {
            // do the same for SVG child nodes as well
            for (var r = e.childNodes.length - 1; r >= 0; r--) if (e.childNodes[r] instanceof t.SVGElement) _(e.childNodes[r]);
            return n.adopt(e).id(n.eid(e.nodeName));
        }
        // Add more bounding box properties
        function C(t) {
            if (t.x == null) {
                t.x = 0;
                t.y = 0;
                t.width = 0;
                t.height = 0;
            }
            t.w = t.width;
            t.h = t.height;
            t.x2 = t.x + t.width;
            t.y2 = t.y + t.height;
            t.cx = t.x + t.width / 2;
            t.cy = t.y + t.height / 2;
            return t;
        }
        // Get id from reference string
        function k(t) {
            var e = t.toString().match(n.regex.reference);
            if (e) return e[1];
        }
        // Create matrix array for looping
        var A = "abcdef".split("");
        // Add CustomEvent to IE9 and IE10
        if (typeof t.CustomEvent !== "function") {
            // Code from: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
            var $ = function(t, n) {
                n = n || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var r = e.createEvent("CustomEvent");
                r.initCustomEvent(t, n.bubbles, n.cancelable, n.detail);
                return r;
            };
            $.prototype = t.Event.prototype;
            t.CustomEvent = $;
        }
        // requestAnimationFrame / cancelAnimationFrame Polyfill with fallback based on Paul Irish
        (function(e) {
            var n = 0;
            var r = [ "moz", "webkit" ];
            for (var i = 0; i < r.length && !t.requestAnimationFrame; ++i) {
                e.requestAnimationFrame = e[r[i] + "RequestAnimationFrame"];
                e.cancelAnimationFrame = e[r[i] + "CancelAnimationFrame"] || e[r[i] + "CancelRequestAnimationFrame"];
            }
            e.requestAnimationFrame = e.requestAnimationFrame || function(t) {
                var r = new Date().getTime();
                var i = Math.max(0, 16 - (r - n));
                var a = e.setTimeout(function() {
                    t(r + i);
                }, i);
                n = r + i;
                return a;
            };
            e.cancelAnimationFrame = e.cancelAnimationFrame || e.clearTimeout;
        })(t);
        return n;
    });
}, /* 18 */
/***/
function(t, e, n) {
    "use strict";
    var r = function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return n("div", {
            attrs: {
                id: "logo"
            }
        }, [ n("object", {
            ref: "logoSvg",
            attrs: {
                data: "/assets/logo.svg",
                type: "image/svg+xml"
            },
            on: {
                load: t.importSvg
            }
        }) ]);
    };
    var i = [];
    r._withStripped = true;
    var a = {
        render: r,
        staticRenderFns: i
    };
    /* harmony default export */
    e["a"] = a;
    if (false) {
        t.hot.accept();
        if (t.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-7a60c9cd", a);
        }
    }
}, /* 19 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(20);
    /* harmony import */
    var i = n.n(r);
    /* harmony import */
    var a = n(21);
    var s = false;
    var o = n(0);
    /* script */
    /* template */
    /* styles */
    var u = null;
    /* scopeId */
    var l = null;
    /* moduleIdentifier (server only) */
    var f = null;
    var c = o(i.a, a["a"], u, l, f);
    c.options.__file = "src/components/Switcher.vue";
    if (c.esModule && Object.keys(c.esModule).some(function(t) {
        return t !== "default" && t.substr(0, 2) !== "__";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (c.options.functional) {
        console.error("[vue-loader] Switcher.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-5db3a2a3", c.options);
            } else {
                e.reload("data-v-5db3a2a3", c.options);
            }
            t.hot.dispose(function(t) {
                s = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = c.exports;
}, /* 20 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    //
    //
    //
    //
    //
    //
    e.default = {
        name: "yarSwitcher",
        props: {
            value: {
                type: Boolean,
                default: true
            }
        },
        data: function t() {
            return {
                indicator: this.value
            };
        },
        methods: {
            toggleIndicator: function t(e) {
                this.indicator = !this.indicator;
                this.$emit("change", this.indicator, e);
            }
        }
    };
}, /* 21 */
/***/
function(t, e, n) {
    "use strict";
    var r = function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return n("div", {
            class: [ "m-switcher", {
                "is-active": t.indicator
            } ]
        }, [ n("span", {
            staticClass: "m-switcher-knob",
            on: {
                click: t.toggleIndicator
            }
        }) ]);
    };
    var i = [];
    r._withStripped = true;
    var a = {
        render: r,
        staticRenderFns: i
    };
    /* harmony default export */
    e["a"] = a;
    if (false) {
        t.hot.accept();
        if (t.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-5db3a2a3", a);
        }
    }
}, /* 22 */
/***/
function(t, e, n) {
    "use strict";
    var r = function() {
        var t = this;
        var e = t.$createElement;
        var n = t._self._c || e;
        return n("section", {
            class: [ "section", t.themeClass, {
                "is-invisible": t.loading
            } ]
        }, [ n("div", {
            staticClass: "container"
        }, [ n("div", {
            staticClass: "columns"
        }, [ n("div", {
            staticClass: "column"
        }, [ n("yar-header") ], 1) ]), t._v(" "), n("div", {
            staticClass: "columns"
        }, [ n("div", {
            staticClass: "column is-half-desktop is-offset-2-desktop"
        }, [ n("section", {
            staticClass: "section"
        }, [ n("yar-lightbulb", {
            attrs: {
                indicator: t.indicator
            },
            on: {
                load: t.showApplication
            }
        }), t._v(" "), n("yar-article") ], 1) ]), t._v(" "), n("div", {
            staticClass: "column is-4-desktop is-hidden-touch"
        }, [ n("yar-switcher", {
            attrs: {
                value: t.indicator
            },
            on: {
                change: t.toggleIndicator
            }
        }) ], 1) ]), t._v(" "), n("div", {
            staticClass: "columns"
        }, [ n("div", {
            staticClass: "column is-offset-2-desktop"
        }, [ n("yar-footer") ], 1) ]) ]) ]);
    };
    var i = [];
    r._withStripped = true;
    var a = {
        render: r,
        staticRenderFns: i
    };
    /* harmony default export */
    e["a"] = a;
    if (false) {
        t.hot.accept();
        if (t.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-5026b5fe", a);
        }
    }
}, /* 23 */
/***/
function(t, e) {} ]);