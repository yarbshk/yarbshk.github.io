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
    return n(n.s = 7);
})([ /* 0 */
/***/
function(t, e) {
    /* globals __VUE_SSR_CONTEXT__ */
    // IMPORTANT: Do NOT use ES2015 features in this file.
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.
    t.exports = function t(e, n, r, i, a, s) {
        var o;
        var u = e = e || {};
        // ES6 modules interop
        var f = typeof e.default;
        if (f === "object" || f === "function") {
            o = e;
            u = e.default;
        }
        // Vue.extend constructor export interop
        var l = typeof u === "function" ? u.options : u;
        // render functions
        if (n) {
            l.render = n.render;
            l.staticRenderFns = n.staticRenderFns;
            l._compiled = true;
        }
        // functional template
        if (r) {
            l.functional = true;
        }
        // scopedId
        if (a) {
            l._scopeId = a;
        }
        var c;
        if (s) {
            // server build
            c = function(t) {
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
                if (i) {
                    i.call(this, t);
                }
                // register component module identifier for async chunk inferrence
                if (t && t._registeredComponents) {
                    t._registeredComponents.add(s);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            l._ssrRegister = c;
        } else if (i) {
            c = i;
        }
        if (c) {
            var h = l.functional;
            var d = h ? l.render : l.beforeCreate;
            if (!h) {
                // inject component registration as beforeCreate hook
                l.beforeCreate = d ? [].concat(d, c) : [ c ];
            } else {
                // for template-only hot-reload because in that case the render fn doesn't
                // go through the normalizer
                l._injectStyles = c;
                // register for functioal component in vue file
                l.render = function t(e, n) {
                    c.call(n);
                    return d(e, n);
                };
            }
        }
        return {
            esModule: o,
            exports: u,
            options: l
        };
    };
}, /* 1 */
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
}, /* 2 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    var r;
    var i = n(13);
    var a = l(i);
    var s = n(15);
    var o = l(s);
    var u = n(17);
    var f = l(u);
    function l(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function c(t, e, n) {
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
    e.default = {
        name: "yarApplication",
        components: (r = {}, c(r, a.default.name, a.default), c(r, f.default.name, f.default), 
        c(r, o.default.name, o.default), r),
        data: function t() {
            return {
                virgin: true
            };
        },
        computed: {
            themeClass: function t() {
                return "t-dark";
            }
        }
    };
}, /* 3 */
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
}, /* 4 */
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
}, /* 5 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    var r = n(18);
    var i = a(r);
    function a(t) {
        return t && t.__esModule ? t : {
            default: t
        };
    }
    function s(t, e, n) {
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
        },
        components: s({}, i.default.name, i.default)
    };
}, /* 6 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    var r = function() {
        function t(t, e) {
            var n = [];
            var r = true;
            var i = false;
            var a = undefined;
            try {
                for (var s = t[Symbol.iterator](), o; !(r = (o = s.next()).done); r = true) {
                    n.push(o.value);
                    if (e && n.length === e) break;
                }
            } catch (t) {
                i = true;
                a = t;
            } finally {
                try {
                    if (!r && s["return"]) s["return"]();
                } finally {
                    if (i) throw a;
                }
            }
            return n;
        }
        return function(e, n) {
            if (Array.isArray(e)) {
                return e;
            } else if (Symbol.iterator in Object(e)) {
                return t(e, n);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();
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
    var i = n(19);
    var a = s(i);
    function s(t) {
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
                return (0, a.default)("logo").size(130, 130).viewbox(105, 80, 800, 800);
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
            getPointCoordinates: function t(e, n, i) {
                var a = r(e, 2), s = a[0], o = a[1];
                var u = n * Math.PI / 180;
                return [ s + Math.cos(u) * i, o + Math.sin(u) * i ];
            },
            getRandomInt: function t(e, n) {
                e = Math.ceil(e);
                n = Math.floor(n);
                return Math.floor(Math.random() * (n - e + 1)) + e;
            },
            paintLogo: function t(e) {
                e ? this.paintLightLogo() : this.paintDarkLogo();
            },
            paintLightLogo: function t() {
                var e = this;
                var n = this.colorPalette;
                a.default.get("#background").select("rect").attr({
                    fill: n.black
                });
                var i = a.default.get("#lampbulb");
                i.select("path").attr({
                    fill: n.white
                });
                // Set beams animation
                var s = [ 15, 330, 305, 270, 235, 210, 165 ];
                i.select('[id^="beam"]').each(function(t, n) {
                    var i = n[t];
                    var a = [ i.cx(), i.cy() ];
                    var o = e.getRandomInt(400, 600);
                    var u = e.getPointCoordinates(a, s[t], 50), f = r(u, 2), l = f[0], c = f[1];
                    i.animate(o, "<>").center(l, c).loop(true, true);
                });
            },
            paintDarkLogo: function t() {
                var e = this.colorPalette;
                a.default.get("#background").select("rect").attr({
                    fill: e.white
                });
                a.default.get("#lampbulb").select("#bulb, #patronTop, #patronBottom").attr({
                    fill: e.black
                });
            }
        }
    };
}, /* 7 */
/***/
function(t, e, n) {
    "use strict";
    var r = n(8);
    var i = o(r);
    var a = n(12);
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
}, /* 8 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* WEBPACK VAR INJECTION */
    (function(t, n) {
        /*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
        /*  */
        var r = Object.freeze({});
        // These helpers produce better VM code in JS engines due to their
        // explicitness and function inlining.
        function i(t) {
            return t === undefined || t === null;
        }
        function a(t) {
            return t !== undefined && t !== null;
        }
        function s(t) {
            return t === true;
        }
        function o(t) {
            return t === false;
        }
        /**
 * Check if value is primitive.
 */
        function u(t) {
            // $flow-disable-line
            return typeof t === "string" || typeof t === "number" || typeof t === "symbol" || typeof t === "boolean";
        }
        /**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
        function f(t) {
            return t !== null && typeof t === "object";
        }
        /**
 * Get the raw type string of a value, e.g., [object Object].
 */
        var l = Object.prototype.toString;
        function c(t) {
            return l.call(t).slice(8, -1);
        }
        /**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
        function h(t) {
            return l.call(t) === "[object Object]";
        }
        function d(t) {
            return l.call(t) === "[object RegExp]";
        }
        /**
 * Check if val is a valid array index.
 */
        function p(t) {
            var e = parseFloat(String(t));
            return e >= 0 && Math.floor(e) === e && isFinite(t);
        }
        function v(t) {
            return a(t) && typeof t.then === "function" && typeof t.catch === "function";
        }
        /**
 * Convert a value to a string that is actually rendered.
 */
        function m(t) {
            return t == null ? "" : Array.isArray(t) || h(t) && t.toString === l ? JSON.stringify(t, null, 2) : String(t);
        }
        /**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
        function y(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e;
        }
        /**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
        function g(t, e) {
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
        var b = g("slot,component", true);
        /**
 * Check if an attribute is a reserved attribute.
 */
        var x = g("key,ref,slot,slot-scope,is");
        /**
 * Remove an item from an array.
 */
        function w(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1) {
                    return t.splice(n, 1);
                }
            }
        }
        /**
 * Check whether an object has the property.
 */
        var _ = Object.prototype.hasOwnProperty;
        function C(t, e) {
            return _.call(t, e);
        }
        /**
 * Create a cached version of a pure function.
 */
        function k(t) {
            var e = Object.create(null);
            return function n(r) {
                var i = e[r];
                return i || (e[r] = t(r));
            };
        }
        /**
 * Camelize a hyphen-delimited string.
 */
        var A = /-(\w)/g;
        var $ = k(function(t) {
            return t.replace(A, function(t, e) {
                return e ? e.toUpperCase() : "";
            });
        });
        /**
 * Capitalize a string.
 */
        var S = k(function(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        });
        /**
 * Hyphenate a camelCase string.
 */
        var M = /\B([A-Z])/g;
        var T = k(function(t) {
            return t.replace(M, "-$1").toLowerCase();
        });
        /**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
        /* istanbul ignore next */
        function N(t, e) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
            }
            n._length = t.length;
            return n;
        }
        function O(t, e) {
            return t.bind(e);
        }
        var P = Function.prototype.bind ? O : N;
        /**
 * Convert an Array-like object to a real Array.
 */
        function E(t, e) {
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
        function j(t, e) {
            for (var n in e) {
                t[n] = e[n];
            }
            return t;
        }
        /**
 * Merge an Array of Objects into a single Object.
 */
        function I(t) {
            var e = {};
            for (var n = 0; n < t.length; n++) {
                if (t[n]) {
                    j(e, t[n]);
                }
            }
            return e;
        }
        /* eslint-disable no-unused-vars */
        /**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
        function L(t, e, n) {}
        /**
 * Always return false.
 */
        var F = function(t, e, n) {
            return false;
        };
        /* eslint-enable no-unused-vars */
        /**
 * Return the same value.
 */
        var D = function(t) {
            return t;
        };
        /**
 * Generate a string containing static keys from compiler modules.
 */
        function R(t) {
            return t.reduce(function(t, e) {
                return t.concat(e.staticKeys || []);
            }, []).join(",");
        }
        /**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
        function B(t, e) {
            if (t === e) {
                return true;
            }
            var n = f(t);
            var r = f(e);
            if (n && r) {
                try {
                    var i = Array.isArray(t);
                    var a = Array.isArray(e);
                    if (i && a) {
                        return t.length === e.length && t.every(function(t, n) {
                            return B(t, e[n]);
                        });
                    } else if (t instanceof Date && e instanceof Date) {
                        return t.getTime() === e.getTime();
                    } else if (!i && !a) {
                        var s = Object.keys(t);
                        var o = Object.keys(e);
                        return s.length === o.length && s.every(function(n) {
                            return B(t[n], e[n]);
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
        /**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
        function V(t, e) {
            for (var n = 0; n < t.length; n++) {
                if (B(t[n], e)) {
                    return n;
                }
            }
            return -1;
        }
        /**
 * Ensure a function is called only once.
 */
        function H(t) {
            var e = false;
            return function() {
                if (!e) {
                    e = true;
                    t.apply(this, arguments);
                }
            };
        }
        var z = "data-server-rendered";
        var U = [ "component", "directive", "filter" ];
        var X = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch" ];
        /*  */
        var q = {
            /**
   * Option merge strategies (used in core/util/options)
   */
            // $flow-disable-line
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
            // $flow-disable-line
            keyCodes: Object.create(null),
            /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
            isReservedTag: F,
            /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
            isReservedAttr: F,
            /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
            isUnknownElement: F,
            /**
   * Get the namespace of an element
   */
            getTagNamespace: L,
            /**
   * Parse the real tag name for the specific platform.
   */
            parsePlatformTagName: D,
            /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
            mustUseProp: F,
            /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
            async: true,
            /**
   * Exposed for legacy reasons
   */
            _lifecycleHooks: X
        };
        /*  */
        /**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
        var Y = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        /**
 * Check if a string starts with $ or _
 */
        function G(t) {
            var e = (t + "").charCodeAt(0);
            return e === 36 || e === 95;
        }
        /**
 * Define a property.
 */
        function J(t, e, n, r) {
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
        var W = new RegExp("[^" + Y.source + ".$_\\d]");
        function K(t) {
            if (W.test(t)) {
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
        // can we use __proto__?
        var Z = "__proto__" in {};
        // Browser environment sniffing
        var Q = typeof window !== "undefined";
        var tt = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;
        var et = tt && WXEnvironment.platform.toLowerCase();
        var nt = Q && window.navigator.userAgent.toLowerCase();
        var rt = nt && /msie|trident/.test(nt);
        var it = nt && nt.indexOf("msie 9.0") > 0;
        var at = nt && nt.indexOf("edge/") > 0;
        var st = nt && nt.indexOf("android") > 0 || et === "android";
        var ot = nt && /iphone|ipad|ipod|ios/.test(nt) || et === "ios";
        var ut = nt && /chrome\/\d+/.test(nt) && !at;
        var ft = nt && /phantomjs/.test(nt);
        var lt = nt && nt.match(/firefox\/(\d+)/);
        // Firefox has a "watch" function on Object.prototype...
        var ct = {}.watch;
        var ht = false;
        if (Q) {
            try {
                var dt = {};
                Object.defineProperty(dt, "passive", {
                    get: function t() {
                        /* istanbul ignore next */
                        ht = true;
                    }
                });
                // https://github.com/facebook/flow/issues/285
                window.addEventListener("test-passive", null, dt);
            } catch (t) {}
        }
        // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV
        var pt;
        var vt = function() {
            if (pt === undefined) {
                /* istanbul ignore if */
                if (!Q && !tt && typeof t !== "undefined") {
                    // detect presence of vue-server-renderer and avoid
                    // Webpack shimming the process
                    pt = t["process"] && t["process"].env.VUE_ENV === "server";
                } else {
                    pt = false;
                }
            }
            return pt;
        };
        // detect devtools
        var mt = Q && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        /* istanbul ignore next */
        function yt(t) {
            return typeof t === "function" && /native code/.test(t.toString());
        }
        var gt = typeof Symbol !== "undefined" && yt(Symbol) && typeof Reflect !== "undefined" && yt(Reflect.ownKeys);
        var bt;
        /* istanbul ignore if */
        // $flow-disable-line
        if (typeof Set !== "undefined" && yt(Set)) {
            // use native Set when available.
            bt = Set;
        } else {
            // a non-standard Set polyfill that only works with primitive keys.
            bt = /*@__PURE__*/ function() {
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
        var xt = L;
        var wt = L;
        var _t = L;
        // work around flow check
        var Ct = L;
        if (true) {
            var kt = typeof console !== "undefined";
            var At = /(?:^|[-_])(\w)/g;
            var $t = function(t) {
                return t.replace(At, function(t) {
                    return t.toUpperCase();
                }).replace(/[-_]/g, "");
            };
            xt = function(t, e) {
                var n = e ? _t(e) : "";
                if (q.warnHandler) {
                    q.warnHandler.call(null, t, e, n);
                } else if (kt && !q.silent) {
                    console.error("[Vue warn]: " + t + n);
                }
            };
            wt = function(t, e) {
                if (kt && !q.silent) {
                    console.warn("[Vue tip]: " + t + (e ? _t(e) : ""));
                }
            };
            Ct = function(t, e) {
                if (t.$root === t) {
                    return "<Root>";
                }
                var n = typeof t === "function" && t.cid != null ? t.options : t._isVue ? t.$options || t.constructor.options : t;
                var r = n.name || n._componentTag;
                var i = n.__file;
                if (!r && i) {
                    var a = i.match(/([^\/\\]+)\.vue$/);
                    r = a && a[1];
                }
                return (r ? "<" + $t(r) + ">" : "<Anonymous>") + (i && e !== false ? " at " + i : "");
            };
            var St = function(t, e) {
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
            _t = function(t) {
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
                        return "" + (e === 0 ? "---\x3e " : St(" ", 5 + e * 2)) + (Array.isArray(t) ? Ct(t[0]) + "... (" + t[1] + " recursive calls)" : Ct(t));
                    }).join("\n");
                } else {
                    return "\n\n(found in " + Ct(t) + ")";
                }
            };
        }
        /*  */
        var Mt = 0;
        /**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
        var Tt = function t() {
            this.id = Mt++;
            this.subs = [];
        };
        Tt.prototype.addSub = function t(e) {
            this.subs.push(e);
        };
        Tt.prototype.removeSub = function t(e) {
            w(this.subs, e);
        };
        Tt.prototype.depend = function t() {
            if (Tt.target) {
                Tt.target.addDep(this);
            }
        };
        Tt.prototype.notify = function t() {
            // stabilize the subscriber list first
            var e = this.subs.slice();
            if ("development" !== "production" && !q.async) {
                // subs aren't sorted in scheduler if not running async
                // we need to sort them now to make sure they fire in correct
                // order
                e.sort(function(t, e) {
                    return t.id - e.id;
                });
            }
            for (var n = 0, r = e.length; n < r; n++) {
                e[n].update();
            }
        };
        // The current target watcher being evaluated.
        // This is globally unique because only one watcher
        // can be evaluated at a time.
        Tt.target = null;
        var Nt = [];
        function Ot(t) {
            Nt.push(t);
            Tt.target = t;
        }
        function Pt() {
            Nt.pop();
            Tt.target = Nt[Nt.length - 1];
        }
        /*  */
        var Et = function t(e, n, r, i, a, s, o, u) {
            this.tag = e;
            this.data = n;
            this.children = r;
            this.text = i;
            this.elm = a;
            this.ns = undefined;
            this.context = s;
            this.fnContext = undefined;
            this.fnOptions = undefined;
            this.fnScopeId = undefined;
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
        var jt = {
            child: {
                configurable: true
            }
        };
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        jt.child.get = function() {
            return this.componentInstance;
        };
        Object.defineProperties(Et.prototype, jt);
        var It = function(t) {
            if (t === void 0) t = "";
            var e = new Et();
            e.text = t;
            e.isComment = true;
            return e;
        };
        function Lt(t) {
            return new Et(undefined, undefined, undefined, String(t));
        }
        // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.
        function Ft(t) {
            var e = new Et(t.tag, t.data, // #7975
            // clone children array to avoid mutating original in case of cloning
            // a child.
            t.children && t.children.slice(), t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
            e.ns = t.ns;
            e.isStatic = t.isStatic;
            e.key = t.key;
            e.isComment = t.isComment;
            e.fnContext = t.fnContext;
            e.fnOptions = t.fnOptions;
            e.fnScopeId = t.fnScopeId;
            e.asyncMeta = t.asyncMeta;
            e.isCloned = true;
            return e;
        }
        /*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */
        var Dt = Array.prototype;
        var Rt = Object.create(Dt);
        var Bt = [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ];
        /**
 * Intercept mutating methods and emit events
 */
        Bt.forEach(function(t) {
            // cache original method
            var e = Dt[t];
            J(Rt, t, function n() {
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
        var Vt = Object.getOwnPropertyNames(Rt);
        /**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
        var Ht = true;
        function zt(t) {
            Ht = t;
        }
        /**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
        var Ut = function t(e) {
            this.value = e;
            this.dep = new Tt();
            this.vmCount = 0;
            J(e, "__ob__", this);
            if (Array.isArray(e)) {
                if (Z) {
                    Xt(e, Rt);
                } else {
                    qt(e, Rt, Vt);
                }
                this.observeArray(e);
            } else {
                this.walk(e);
            }
        };
        /**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
        Ut.prototype.walk = function t(e) {
            var n = Object.keys(e);
            for (var r = 0; r < n.length; r++) {
                Gt(e, n[r]);
            }
        };
        /**
 * Observe a list of Array items.
 */
        Ut.prototype.observeArray = function t(e) {
            for (var n = 0, r = e.length; n < r; n++) {
                Yt(e[n]);
            }
        };
        // helpers
        /**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
        function Xt(t, e) {
            /* eslint-disable no-proto */
            t.__proto__ = e;
        }
        /**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
        /* istanbul ignore next */
        function qt(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                J(t, a, e[a]);
            }
        }
        /**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
        function Yt(t, e) {
            if (!f(t) || t instanceof Et) {
                return;
            }
            var n;
            if (C(t, "__ob__") && t.__ob__ instanceof Ut) {
                n = t.__ob__;
            } else if (Ht && !vt() && (Array.isArray(t) || h(t)) && Object.isExtensible(t) && !t._isVue) {
                n = new Ut(t);
            }
            if (e && n) {
                n.vmCount++;
            }
            return n;
        }
        /**
 * Define a reactive property on an Object.
 */
        function Gt(t, e, n, r, i) {
            var a = new Tt();
            var s = Object.getOwnPropertyDescriptor(t, e);
            if (s && s.configurable === false) {
                return;
            }
            // cater for pre-defined getter/setters
            var o = s && s.get;
            var u = s && s.set;
            if ((!o || u) && arguments.length === 2) {
                n = t[e];
            }
            var f = !i && Yt(n);
            Object.defineProperty(t, e, {
                enumerable: true,
                configurable: true,
                get: function e() {
                    var r = o ? o.call(t) : n;
                    if (Tt.target) {
                        a.depend();
                        if (f) {
                            f.dep.depend();
                            if (Array.isArray(r)) {
                                Kt(r);
                            }
                        }
                    }
                    return r;
                },
                set: function e(s) {
                    var l = o ? o.call(t) : n;
                    /* eslint-disable no-self-compare */
                    if (s === l || s !== s && l !== l) {
                        return;
                    }
                    /* eslint-enable no-self-compare */
                    if ("development" !== "production" && r) {
                        r();
                    }
                    // #7981: for accessor properties without setter
                    if (o && !u) {
                        return;
                    }
                    if (u) {
                        u.call(t, s);
                    } else {
                        n = s;
                    }
                    f = !i && Yt(s);
                    a.notify();
                }
            });
        }
        /**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
        function Jt(t, e, n) {
            if ("development" !== "production" && (i(t) || u(t))) {
                xt("Cannot set reactive property on undefined, null, or primitive value: " + t);
            }
            if (Array.isArray(t) && p(e)) {
                t.length = Math.max(t.length, e);
                t.splice(e, 1, n);
                return n;
            }
            if (e in t && !(e in Object.prototype)) {
                t[e] = n;
                return n;
            }
            var r = t.__ob__;
            if (t._isVue || r && r.vmCount) {
                "development" !== "production" && xt("Avoid adding reactive properties to a Vue instance or its root $data " + "at runtime - declare it upfront in the data option.");
                return n;
            }
            if (!r) {
                t[e] = n;
                return n;
            }
            Gt(r.value, e, n);
            r.dep.notify();
            return n;
        }
        /**
 * Delete a property and trigger change if necessary.
 */
        function Wt(t, e) {
            if ("development" !== "production" && (i(t) || u(t))) {
                xt("Cannot delete reactive property on undefined, null, or primitive value: " + t);
            }
            if (Array.isArray(t) && p(e)) {
                t.splice(e, 1);
                return;
            }
            var n = t.__ob__;
            if (t._isVue || n && n.vmCount) {
                "development" !== "production" && xt("Avoid deleting properties on a Vue instance or its root $data " + "- just set it to null.");
                return;
            }
            if (!C(t, e)) {
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
        function Kt(t) {
            for (var e = void 0, n = 0, r = t.length; n < r; n++) {
                e = t[n];
                e && e.__ob__ && e.__ob__.dep.depend();
                if (Array.isArray(e)) {
                    Kt(e);
                }
            }
        }
        /*  */
        /**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
        var Zt = q.optionMergeStrategies;
        /**
 * Options with restrictions
 */
        if (true) {
            Zt.el = Zt.propsData = function(t, e, n, r) {
                if (!n) {
                    xt('option "' + r + '" can only be used during instance ' + "creation with the `new` keyword.");
                }
                return ie(t, e);
            };
        }
        /**
 * Helper that recursively merges two data objects together.
 */
        function Qt(t, e) {
            if (!e) {
                return t;
            }
            var n, r, i;
            var a = gt ? Reflect.ownKeys(e) : Object.keys(e);
            for (var s = 0; s < a.length; s++) {
                n = a[s];
                // in case the object is already observed...
                if (n === "__ob__") {
                    continue;
                }
                r = t[n];
                i = e[n];
                if (!C(t, n)) {
                    Jt(t, n, i);
                } else if (r !== i && h(r) && h(i)) {
                    Qt(r, i);
                }
            }
            return t;
        }
        /**
 * Data
 */
        function te(t, e, n) {
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
                    return Qt(typeof e === "function" ? e.call(this, this) : e, typeof t === "function" ? t.call(this, this) : t);
                };
            } else {
                return function r() {
                    // instance merge
                    var i = typeof e === "function" ? e.call(n, n) : e;
                    var a = typeof t === "function" ? t.call(n, n) : t;
                    if (i) {
                        return Qt(i, a);
                    } else {
                        return a;
                    }
                };
            }
        }
        Zt.data = function(t, e, n) {
            if (!n) {
                if (e && typeof e !== "function") {
                    "development" !== "production" && xt('The "data" option should be a function ' + "that returns a per-instance value in component " + "definitions.", n);
                    return t;
                }
                return te(t, e);
            }
            return te(t, e, n);
        };
        /**
 * Hooks and props are merged as arrays.
 */
        function ee(t, e) {
            var n = e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
            return n ? ne(n) : n;
        }
        function ne(t) {
            var e = [];
            for (var n = 0; n < t.length; n++) {
                if (e.indexOf(t[n]) === -1) {
                    e.push(t[n]);
                }
            }
            return e;
        }
        X.forEach(function(t) {
            Zt[t] = ee;
        });
        /**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
        function re(t, e, n, r) {
            var i = Object.create(t || null);
            if (e) {
                "development" !== "production" && le(r, e, n);
                return j(i, e);
            } else {
                return i;
            }
        }
        U.forEach(function(t) {
            Zt[t + "s"] = re;
        });
        /**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
        Zt.watch = function(t, e, n, r) {
            // work around Firefox's Object.prototype.watch...
            if (t === ct) {
                t = undefined;
            }
            if (e === ct) {
                e = undefined;
            }
            /* istanbul ignore if */
            if (!e) {
                return Object.create(t || null);
            }
            if (true) {
                le(r, e, n);
            }
            if (!t) {
                return e;
            }
            var i = {};
            j(i, t);
            for (var a in e) {
                var s = i[a];
                var o = e[a];
                if (s && !Array.isArray(s)) {
                    s = [ s ];
                }
                i[a] = s ? s.concat(o) : Array.isArray(o) ? o : [ o ];
            }
            return i;
        };
        /**
 * Other object hashes.
 */
        Zt.props = Zt.methods = Zt.inject = Zt.computed = function(t, e, n, r) {
            if (e && "development" !== "production") {
                le(r, e, n);
            }
            if (!t) {
                return e;
            }
            var i = Object.create(null);
            j(i, t);
            if (e) {
                j(i, e);
            }
            return i;
        };
        Zt.provide = te;
        /**
 * Default strategy.
 */
        var ie = function(t, e) {
            return e === undefined ? t : e;
        };
        /**
 * Validate component names
 */
        function ae(t) {
            for (var e in t.components) {
                se(e);
            }
        }
        function se(t) {
            if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + Y.source + "]*$").test(t)) {
                xt('Invalid component name: "' + t + '". Component names ' + "should conform to valid custom element name in html5 specification.");
            }
            if (b(t) || q.isReservedTag(t)) {
                xt("Do not use built-in or reserved HTML elements as component " + "id: " + t);
            }
        }
        /**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
        function oe(t, e) {
            var n = t.props;
            if (!n) {
                return;
            }
            var r = {};
            var i, a, s;
            if (Array.isArray(n)) {
                i = n.length;
                while (i--) {
                    a = n[i];
                    if (typeof a === "string") {
                        s = $(a);
                        r[s] = {
                            type: null
                        };
                    } else if (true) {
                        xt("props must be strings when using array syntax.");
                    }
                }
            } else if (h(n)) {
                for (var o in n) {
                    a = n[o];
                    s = $(o);
                    r[s] = h(a) ? a : {
                        type: a
                    };
                }
            } else if (true) {
                xt('Invalid value for option "props": expected an Array or an Object, ' + "but got " + c(n) + ".", e);
            }
            t.props = r;
        }
        /**
 * Normalize all injections into Object-based format
 */
        function ue(t, e) {
            var n = t.inject;
            if (!n) {
                return;
            }
            var r = t.inject = {};
            if (Array.isArray(n)) {
                for (var i = 0; i < n.length; i++) {
                    r[n[i]] = {
                        from: n[i]
                    };
                }
            } else if (h(n)) {
                for (var a in n) {
                    var s = n[a];
                    r[a] = h(s) ? j({
                        from: a
                    }, s) : {
                        from: s
                    };
                }
            } else if (true) {
                xt('Invalid value for option "inject": expected an Array or an Object, ' + "but got " + c(n) + ".", e);
            }
        }
        /**
 * Normalize raw function directives into object format.
 */
        function fe(t) {
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
        function le(t, e, n) {
            if (!h(e)) {
                xt('Invalid value for option "' + t + '": expected an Object, ' + "but got " + c(e) + ".", n);
            }
        }
        /**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
        function ce(t, e, n) {
            if (true) {
                ae(e);
            }
            if (typeof e === "function") {
                e = e.options;
            }
            oe(e, n);
            ue(e, n);
            fe(e);
            // Apply extends and mixins on the child options,
            // but only if it is a raw options object that isn't
            // the result of another mergeOptions call.
            // Only merged options has the _base property.
            if (!e._base) {
                if (e.extends) {
                    t = ce(t, e.extends, n);
                }
                if (e.mixins) {
                    for (var r = 0, i = e.mixins.length; r < i; r++) {
                        t = ce(t, e.mixins[r], n);
                    }
                }
            }
            var a = {};
            var s;
            for (s in t) {
                o(s);
            }
            for (s in e) {
                if (!C(t, s)) {
                    o(s);
                }
            }
            function o(r) {
                var i = Zt[r] || ie;
                a[r] = i(t[r], e[r], n, r);
            }
            return a;
        }
        /**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
        function he(t, e, n, r) {
            /* istanbul ignore if */
            if (typeof n !== "string") {
                return;
            }
            var i = t[e];
            // check local registration variations first
            if (C(i, n)) {
                return i[n];
            }
            var a = $(n);
            if (C(i, a)) {
                return i[a];
            }
            var s = S(a);
            if (C(i, s)) {
                return i[s];
            }
            // fallback to prototype chain
            var o = i[n] || i[a] || i[s];
            if ("development" !== "production" && r && !o) {
                xt("Failed to resolve " + e.slice(0, -1) + ": " + n, t);
            }
            return o;
        }
        /*  */
        function de(t, e, n, r) {
            var i = e[t];
            var a = !C(n, t);
            var s = n[t];
            // boolean casting
            var o = xe(Boolean, i.type);
            if (o > -1) {
                if (a && !C(i, "default")) {
                    s = false;
                } else if (s === "" || s === T(t)) {
                    // only cast empty string / same name to boolean if
                    // boolean has higher priority
                    var u = xe(String, i.type);
                    if (u < 0 || o < u) {
                        s = true;
                    }
                }
            }
            // check default value
            if (s === undefined) {
                s = pe(r, i, t);
                // since the default value is a fresh copy,
                // make sure to observe it.
                var f = Ht;
                zt(true);
                Yt(s);
                zt(f);
            }
            if (true) {
                ve(i, t, s, r, a);
            }
            return s;
        }
        /**
 * Get the default value of a prop.
 */
        function pe(t, e, n) {
            // no default, return undefined
            if (!C(e, "default")) {
                return undefined;
            }
            var r = e.default;
            // warn against non-factory defaults for Object & Array
            if ("development" !== "production" && f(r)) {
                xt('Invalid default value for prop "' + n + '": ' + "Props with type Object/Array must use a factory function " + "to return the default value.", t);
            }
            // the raw prop value was also undefined from previous render,
            // return previous default value to avoid unnecessary watcher trigger
            if (t && t.$options.propsData && t.$options.propsData[n] === undefined && t._props[n] !== undefined) {
                return t._props[n];
            }
            // call factory function for non-Function types
            // a value is Function if its prototype is function even across different execution context
            return typeof r === "function" && ge(e.type) !== "Function" ? r.call(t) : r;
        }
        /**
 * Assert whether a prop is valid.
 */
        function ve(t, e, n, r, i) {
            if (t.required && i) {
                xt('Missing required prop: "' + e + '"', r);
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
                    var f = ye(n, a[u]);
                    o.push(f.expectedType || "");
                    s = f.valid;
                }
            }
            if (!s) {
                xt(we(e, n, o), r);
                return;
            }
            var l = t.validator;
            if (l) {
                if (!l(n)) {
                    xt('Invalid prop: custom validator check failed for prop "' + e + '".', r);
                }
            }
        }
        var me = /^(String|Number|Boolean|Function|Symbol)$/;
        function ye(t, e) {
            var n;
            var r = ge(e);
            if (me.test(r)) {
                var i = typeof t;
                n = i === r.toLowerCase();
                // for primitive wrapper objects
                if (!n && i === "object") {
                    n = t instanceof e;
                }
            } else if (r === "Object") {
                n = h(t);
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
        function ge(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e ? e[1] : "";
        }
        function be(t, e) {
            return ge(t) === ge(e);
        }
        function xe(t, e) {
            if (!Array.isArray(e)) {
                return be(e, t) ? 0 : -1;
            }
            for (var n = 0, r = e.length; n < r; n++) {
                if (be(e[n], t)) {
                    return n;
                }
            }
            return -1;
        }
        function we(t, e, n) {
            var r = 'Invalid prop: type check failed for prop "' + t + '".' + " Expected " + n.map(S).join(", ");
            var i = n[0];
            var a = c(e);
            var s = _e(e, i);
            var o = _e(e, a);
            // check if we need to specify expected value
            if (n.length === 1 && Ce(i) && !ke(i, a)) {
                r += " with value " + s;
            }
            r += ", got " + a + " ";
            // check if we need to specify received value
            if (Ce(a)) {
                r += "with value " + o + ".";
            }
            return r;
        }
        function _e(t, e) {
            if (e === "String") {
                return '"' + t + '"';
            } else if (e === "Number") {
                return "" + Number(t);
            } else {
                return "" + t;
            }
        }
        function Ce(t) {
            var e = [ "string", "number", "boolean" ];
            return e.some(function(e) {
                return t.toLowerCase() === e;
            });
        }
        function ke() {
            var t = [], e = arguments.length;
            while (e--) t[e] = arguments[e];
            return t.some(function(t) {
                return t.toLowerCase() === "boolean";
            });
        }
        /*  */
        function Ae(t, e, n) {
            // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
            // See: https://github.com/vuejs/vuex/issues/1505
            Ot();
            try {
                if (e) {
                    var r = e;
                    while (r = r.$parent) {
                        var i = r.$options.errorCaptured;
                        if (i) {
                            for (var a = 0; a < i.length; a++) {
                                try {
                                    var s = i[a].call(r, t, e, n) === false;
                                    if (s) {
                                        return;
                                    }
                                } catch (t) {
                                    Se(t, r, "errorCaptured hook");
                                }
                            }
                        }
                    }
                }
                Se(t, e, n);
            } finally {
                Pt();
            }
        }
        function $e(t, e, n, r, i) {
            var a;
            try {
                a = n ? t.apply(e, n) : t.call(e);
                if (a && !a._isVue && v(a) && !a._handled) {
                    a.catch(function(t) {
                        return Ae(t, r, i + " (Promise/async)");
                    });
                    // issue #9511
                    // avoid catch triggering multiple times when nested calls
                    a._handled = true;
                }
            } catch (t) {
                Ae(t, r, i);
            }
            return a;
        }
        function Se(t, e, n) {
            if (q.errorHandler) {
                try {
                    return q.errorHandler.call(null, t, e, n);
                } catch (e) {
                    // if the user intentionally throws the original error in the handler,
                    // do not log it twice
                    if (e !== t) {
                        Me(e, null, "config.errorHandler");
                    }
                }
            }
            Me(t, e, n);
        }
        function Me(t, e, n) {
            if (true) {
                xt("Error in " + n + ': "' + t.toString() + '"', e);
            }
            /* istanbul ignore else */
            if ((Q || tt) && typeof console !== "undefined") {
                console.error(t);
            } else {
                throw t;
            }
        }
        /*  */
        var Te = false;
        var Ne = [];
        var Oe = false;
        function Pe() {
            Oe = false;
            var t = Ne.slice(0);
            Ne.length = 0;
            for (var e = 0; e < t.length; e++) {
                t[e]();
            }
        }
        // Here we have async deferring wrappers using microtasks.
        // In 2.5 we used (macro) tasks (in combination with microtasks).
        // However, it has subtle problems when state is changed right before repaint
        // (e.g. #6813, out-in transitions).
        // Also, using (macro) tasks in event handler would cause some weird behaviors
        // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
        // So we now use microtasks everywhere, again.
        // A major drawback of this tradeoff is that there are some scenarios
        // where microtasks have too high a priority and fire in between supposedly
        // sequential events (e.g. #4521, #6690, which have workarounds)
        // or even between bubbling of the same event (#6566).
        var Ee;
        // The nextTick behavior leverages the microtask queue, which can be accessed
        // via either native Promise.then or MutationObserver.
        // MutationObserver has wider support, however it is seriously bugged in
        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
        // completely stops working after triggering a few times... so, if native
        // Promise is available, we will use it:
        /* istanbul ignore next, $flow-disable-line */
        if (typeof Promise !== "undefined" && yt(Promise)) {
            var je = Promise.resolve();
            Ee = function() {
                je.then(Pe);
                // In problematic UIWebViews, Promise.then doesn't completely break, but
                // it can get stuck in a weird state where callbacks are pushed into the
                // microtask queue but the queue isn't being flushed, until the browser
                // needs to do some other work, e.g. handle a timer. Therefore we can
                // "force" the microtask queue to be flushed by adding an empty timer.
                if (ot) {
                    setTimeout(L);
                }
            };
            Te = true;
        } else if (!rt && typeof MutationObserver !== "undefined" && (yt(MutationObserver) || // PhantomJS and iOS 7.x
        MutationObserver.toString() === "[object MutationObserverConstructor]")) {
            // Use MutationObserver where native Promise is not available,
            // e.g. PhantomJS, iOS7, Android 4.4
            // (#6466 MutationObserver is unreliable in IE11)
            var Ie = 1;
            var Le = new MutationObserver(Pe);
            var Fe = document.createTextNode(String(Ie));
            Le.observe(Fe, {
                characterData: true
            });
            Ee = function() {
                Ie = (Ie + 1) % 2;
                Fe.data = String(Ie);
            };
            Te = true;
        } else if (typeof n !== "undefined" && yt(n)) {
            // Fallback to setImmediate.
            // Techinically it leverages the (macro) task queue,
            // but it is still a better choice than setTimeout.
            Ee = function() {
                n(Pe);
            };
        } else {
            // Fallback to setTimeout.
            Ee = function() {
                setTimeout(Pe, 0);
            };
        }
        function De(t, e) {
            var n;
            Ne.push(function() {
                if (t) {
                    try {
                        t.call(e);
                    } catch (t) {
                        Ae(t, e, "nextTick");
                    }
                } else if (n) {
                    n(e);
                }
            });
            if (!Oe) {
                Oe = true;
                Ee();
            }
            // $flow-disable-line
            if (!t && typeof Promise !== "undefined") {
                return new Promise(function(t) {
                    n = t;
                });
            }
        }
        /*  */
        var Re;
        var Be;
        if (true) {
            var Ve = Q && window.performance;
            /* istanbul ignore if */
            if (Ve && Ve.mark && Ve.measure && Ve.clearMarks && Ve.clearMeasures) {
                Re = function(t) {
                    return Ve.mark(t);
                };
                Be = function(t, e, n) {
                    Ve.measure(t, e, n);
                    Ve.clearMarks(e);
                    Ve.clearMarks(n);
                };
            }
        }
        /* not type checking this file because flow doesn't play well with Proxy */
        var He;
        if (true) {
            var ze = g("Infinity,undefined,NaN,isFinite,isNaN," + "parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent," + "Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl," + "require");
            var Ue = function(t, e) {
                xt('Property or method "' + e + '" is not defined on the instance but ' + "referenced during render. Make sure that this property is reactive, " + "either in the data option, or for class-based components, by " + "initializing the property. " + "See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", t);
            };
            var Xe = function(t, e) {
                xt('Property "' + e + '" must be accessed with "$data.' + e + '" because ' + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + "prevent conflicts with Vue internals" + "See: https://vuejs.org/v2/api/#data", t);
            };
            var qe = typeof Proxy !== "undefined" && yt(Proxy);
            if (qe) {
                var Ye = g("stop,prevent,self,ctrl,shift,alt,meta,exact");
                q.keyCodes = new Proxy(q.keyCodes, {
                    set: function t(e, n, r) {
                        if (Ye(n)) {
                            xt("Avoid overwriting built-in modifier in config.keyCodes: ." + n);
                            return false;
                        } else {
                            e[n] = r;
                            return true;
                        }
                    }
                });
            }
            var Ge = {
                has: function t(e, n) {
                    var t = n in e;
                    var r = ze(n) || typeof n === "string" && n.charAt(0) === "_" && !(n in e.$data);
                    if (!t && !r) {
                        if (n in e.$data) {
                            Xe(e, n);
                        } else {
                            Ue(e, n);
                        }
                    }
                    return t || !r;
                }
            };
            var Je = {
                get: function t(e, n) {
                    if (typeof n === "string" && !(n in e)) {
                        if (n in e.$data) {
                            Xe(e, n);
                        } else {
                            Ue(e, n);
                        }
                    }
                    return e[n];
                }
            };
            He = function t(e) {
                if (qe) {
                    // determine which proxy handler to use
                    var n = e.$options;
                    var r = n.render && n.render._withStripped ? Je : Ge;
                    e._renderProxy = new Proxy(e, r);
                } else {
                    e._renderProxy = e;
                }
            };
        }
        /*  */
        var We = new bt();
        /**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
        function Ke(t) {
            Ze(t, We);
            We.clear();
        }
        function Ze(t, e) {
            var n, r;
            var i = Array.isArray(t);
            if (!i && !f(t) || Object.isFrozen(t) || t instanceof Et) {
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
                    Ze(t[n], e);
                }
            } else {
                r = Object.keys(t);
                n = r.length;
                while (n--) {
                    Ze(t[r[n]], e);
                }
            }
        }
        /*  */
        var Qe = k(function(t) {
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
        function tn(t, e) {
            function n() {
                var t = arguments;
                var r = n.fns;
                if (Array.isArray(r)) {
                    var i = r.slice();
                    for (var a = 0; a < i.length; a++) {
                        $e(i[a], null, t, e, "v-on handler");
                    }
                } else {
                    // return handler return value for single handlers
                    return $e(r, null, arguments, e, "v-on handler");
                }
            }
            n.fns = t;
            return n;
        }
        function en(t, e, n, r, a, o) {
            var u, f, l, c, h;
            for (u in t) {
                f = l = t[u];
                c = e[u];
                h = Qe(u);
                if (i(l)) {
                    "development" !== "production" && xt('Invalid handler for event "' + h.name + '": got ' + String(l), o);
                } else if (i(c)) {
                    if (i(l.fns)) {
                        l = t[u] = tn(l, o);
                    }
                    if (s(h.once)) {
                        l = t[u] = a(h.name, l, h.capture);
                    }
                    n(h.name, l, h.capture, h.passive, h.params);
                } else if (l !== c) {
                    c.fns = l;
                    t[u] = c;
                }
            }
            for (u in e) {
                if (i(t[u])) {
                    h = Qe(u);
                    r(h.name, e[u], h.capture);
                }
            }
        }
        /*  */
        function nn(t, e, n) {
            if (t instanceof Et) {
                t = t.data.hook || (t.data.hook = {});
            }
            var r;
            var o = t[e];
            function u() {
                n.apply(this, arguments);
                // important: remove merged hook to ensure it's called only once
                // and prevent memory leak
                w(r.fns, u);
            }
            if (i(o)) {
                // no existing hook
                r = tn([ u ]);
            } else {
                /* istanbul ignore if */
                if (a(o.fns) && s(o.merged)) {
                    // already a merged invoker
                    r = o;
                    r.fns.push(u);
                } else {
                    // existing plain hook
                    r = tn([ o, u ]);
                }
            }
            r.merged = true;
            t[e] = r;
        }
        /*  */
        function rn(t, e, n) {
            // we are only extracting raw values here.
            // validation and default values are handled in the child
            // component itself.
            var r = e.options.props;
            if (i(r)) {
                return;
            }
            var s = {};
            var o = t.attrs;
            var u = t.props;
            if (a(o) || a(u)) {
                for (var f in r) {
                    var l = T(f);
                    if (true) {
                        var c = f.toLowerCase();
                        if (f !== c && o && C(o, c)) {
                            wt('Prop "' + c + '" is passed to component ' + Ct(n || e) + ", but the declared prop name is" + ' "' + f + '". ' + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "' + l + '" instead of "' + f + '".');
                        }
                    }
                    an(s, u, f, l, true) || an(s, o, f, l, false);
                }
            }
            return s;
        }
        function an(t, e, n, r, i) {
            if (a(e)) {
                if (C(e, n)) {
                    t[n] = e[n];
                    if (!i) {
                        delete e[n];
                    }
                    return true;
                } else if (C(e, r)) {
                    t[n] = e[r];
                    if (!i) {
                        delete e[r];
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
        function sn(t) {
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
        function on(t) {
            return u(t) ? [ Lt(t) ] : Array.isArray(t) ? fn(t) : undefined;
        }
        function un(t) {
            return a(t) && a(t.text) && o(t.isComment);
        }
        function fn(t, e) {
            var n = [];
            var r, o, f, l;
            for (r = 0; r < t.length; r++) {
                o = t[r];
                if (i(o) || typeof o === "boolean") {
                    continue;
                }
                f = n.length - 1;
                l = n[f];
                //  nested
                if (Array.isArray(o)) {
                    if (o.length > 0) {
                        o = fn(o, (e || "") + "_" + r);
                        // merge adjacent text nodes
                        if (un(o[0]) && un(l)) {
                            n[f] = Lt(l.text + o[0].text);
                            o.shift();
                        }
                        n.push.apply(n, o);
                    }
                } else if (u(o)) {
                    if (un(l)) {
                        // merge adjacent text nodes
                        // this is necessary for SSR hydration because text nodes are
                        // essentially merged when rendered to HTML strings
                        n[f] = Lt(l.text + o);
                    } else if (o !== "") {
                        // convert primitive to vnode
                        n.push(Lt(o));
                    }
                } else {
                    if (un(o) && un(l)) {
                        // merge adjacent text nodes
                        n[f] = Lt(l.text + o.text);
                    } else {
                        // default key for nested array children (likely generated by v-for)
                        if (s(t._isVList) && a(o.tag) && i(o.key) && a(e)) {
                            o.key = "__vlist" + e + "_" + r + "__";
                        }
                        n.push(o);
                    }
                }
            }
            return n;
        }
        /*  */
        function ln(t) {
            var e = t.$options.provide;
            if (e) {
                t._provided = typeof e === "function" ? e.call(t) : e;
            }
        }
        function cn(t) {
            var e = hn(t.$options.inject, t);
            if (e) {
                zt(false);
                Object.keys(e).forEach(function(n) {
                    /* istanbul ignore else */
                    if (true) {
                        Gt(t, n, e[n], function() {
                            xt("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + 'injection being mutated: "' + n + '"', t);
                        });
                    } else {
                        Gt(t, n, e[n]);
                    }
                });
                zt(true);
            }
        }
        function hn(t, e) {
            if (t) {
                // inject is :any because flow is not smart enough to figure out cached
                var n = Object.create(null);
                var r = gt ? Reflect.ownKeys(t) : Object.keys(t);
                for (var i = 0; i < r.length; i++) {
                    var a = r[i];
                    // #6574 in case the inject object is observed...
                    if (a === "__ob__") {
                        continue;
                    }
                    var s = t[a].from;
                    var o = e;
                    while (o) {
                        if (o._provided && C(o._provided, s)) {
                            n[a] = o._provided[s];
                            break;
                        }
                        o = o.$parent;
                    }
                    if (!o) {
                        if ("default" in t[a]) {
                            var u = t[a].default;
                            n[a] = typeof u === "function" ? u.call(e) : u;
                        } else if (true) {
                            xt('Injection "' + a + '" not found', e);
                        }
                    }
                }
                return n;
            }
        }
        /*  */
        /**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
        function dn(t, e) {
            if (!t || !t.length) {
                return {};
            }
            var n = {};
            for (var r = 0, i = t.length; r < i; r++) {
                var a = t[r];
                var s = a.data;
                // remove slot attribute if the node is resolved as a Vue slot node
                if (s && s.attrs && s.attrs.slot) {
                    delete s.attrs.slot;
                }
                // named slots should only be respected if the vnode was rendered in the
                // same context.
                if ((a.context === e || a.fnContext === e) && s && s.slot != null) {
                    var o = s.slot;
                    var u = n[o] || (n[o] = []);
                    if (a.tag === "template") {
                        u.push.apply(u, a.children || []);
                    } else {
                        u.push(a);
                    }
                } else {
                    (n.default || (n.default = [])).push(a);
                }
            }
            // ignore slots that contains only whitespace
            for (var f in n) {
                if (n[f].every(pn)) {
                    delete n[f];
                }
            }
            return n;
        }
        function pn(t) {
            return t.isComment && !t.asyncFactory || t.text === " ";
        }
        /*  */
        function vn(t, e, n) {
            var i;
            var a = Object.keys(e).length > 0;
            var s = t ? !!t.$stable : !a;
            var o = t && t.$key;
            if (!t) {
                i = {};
            } else if (t._normalized) {
                // fast path 1: child component re-render only, parent did not change
                return t._normalized;
            } else if (s && n && n !== r && o === n.$key && !a && !n.$hasNormal) {
                // fast path 2: stable scoped slots w/ no normal slots to proxy,
                // only need to normalize once
                return n;
            } else {
                i = {};
                for (var u in t) {
                    if (t[u] && u[0] !== "$") {
                        i[u] = mn(e, u, t[u]);
                    }
                }
            }
            // expose normal slots on scopedSlots
            for (var f in e) {
                if (!(f in i)) {
                    i[f] = yn(e, f);
                }
            }
            // avoriaz seems to mock a non-extensible $scopedSlots object
            // and when that is passed down this would cause an error
            if (t && Object.isExtensible(t)) {
                t._normalized = i;
            }
            J(i, "$stable", s);
            J(i, "$key", o);
            J(i, "$hasNormal", a);
            return i;
        }
        function mn(t, e, n) {
            var r = function() {
                var t = arguments.length ? n.apply(null, arguments) : n({});
                t = t && typeof t === "object" && !Array.isArray(t) ? [ t ] : on(t);
                return t && (t.length === 0 || t.length === 1 && t[0].isComment) ? undefined : t;
            };
            // this is a slot using the new v-slot syntax without scope. although it is
            // compiled as a scoped slot, render fn users would expect it to be present
            // on this.$slots because the usage is semantically a normal slot.
            if (n.proxy) {
                Object.defineProperty(t, e, {
                    get: r,
                    enumerable: true,
                    configurable: true
                });
            }
            return r;
        }
        function yn(t, e) {
            return function() {
                return t[e];
            };
        }
        /*  */
        /**
 * Runtime helper for rendering v-for lists.
 */
        function gn(t, e) {
            var n, r, i, s, o;
            if (Array.isArray(t) || typeof t === "string") {
                n = new Array(t.length);
                for (r = 0, i = t.length; r < i; r++) {
                    n[r] = e(t[r], r);
                }
            } else if (typeof t === "number") {
                n = new Array(t);
                for (r = 0; r < t; r++) {
                    n[r] = e(r + 1, r);
                }
            } else if (f(t)) {
                if (gt && t[Symbol.iterator]) {
                    n = [];
                    var u = t[Symbol.iterator]();
                    var l = u.next();
                    while (!l.done) {
                        n.push(e(l.value, n.length));
                        l = u.next();
                    }
                } else {
                    s = Object.keys(t);
                    n = new Array(s.length);
                    for (r = 0, i = s.length; r < i; r++) {
                        o = s[r];
                        n[r] = e(t[o], o, r);
                    }
                }
            }
            if (!a(n)) {
                n = [];
            }
            n._isVList = true;
            return n;
        }
        /*  */
        /**
 * Runtime helper for rendering <slot>
 */
        function bn(t, e, n, r) {
            var i = this.$scopedSlots[t];
            var a;
            if (i) {
                // scoped slot
                n = n || {};
                if (r) {
                    if ("development" !== "production" && !f(r)) {
                        xt("slot v-bind without argument expects an Object", this);
                    }
                    n = j(j({}, r), n);
                }
                a = i(n) || e;
            } else {
                a = this.$slots[t] || e;
            }
            var s = n && n.slot;
            if (s) {
                return this.$createElement("template", {
                    slot: s
                }, a);
            } else {
                return a;
            }
        }
        /*  */
        /**
 * Runtime helper for resolving filters
 */
        function xn(t) {
            return he(this.$options, "filters", t, true) || D;
        }
        /*  */
        function wn(t, e) {
            if (Array.isArray(t)) {
                return t.indexOf(e) === -1;
            } else {
                return t !== e;
            }
        }
        /**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
        function _n(t, e, n, r, i) {
            var a = q.keyCodes[e] || n;
            if (i && r && !q.keyCodes[e]) {
                return wn(i, r);
            } else if (a) {
                return wn(a, t);
            } else if (r) {
                return T(r) !== e;
            }
        }
        /*  */
        /**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
        function Cn(t, e, n, r, i) {
            if (n) {
                if (!f(n)) {
                    "development" !== "production" && xt("v-bind without argument expects an Object or Array value", this);
                } else {
                    if (Array.isArray(n)) {
                        n = I(n);
                    }
                    var a;
                    var s = function(s) {
                        if (s === "class" || s === "style" || x(s)) {
                            a = t;
                        } else {
                            var o = t.attrs && t.attrs.type;
                            a = r || q.mustUseProp(e, o, s) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                        }
                        var u = $(s);
                        var f = T(s);
                        if (!(u in a) && !(f in a)) {
                            a[s] = n[s];
                            if (i) {
                                var l = t.on || (t.on = {});
                                l["update:" + s] = function(t) {
                                    n[s] = t;
                                };
                            }
                        }
                    };
                    for (var o in n) s(o);
                }
            }
            return t;
        }
        /*  */
        /**
 * Runtime helper for rendering static trees.
 */
        function kn(t, e) {
            var n = this._staticTrees || (this._staticTrees = []);
            var r = n[t];
            // if has already-rendered static tree and not inside v-for,
            // we can reuse the same tree.
            if (r && !e) {
                return r;
            }
            // otherwise, render a fresh tree.
            r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this);
            $n(r, "__static__" + t, false);
            return r;
        }
        /**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
        function An(t, e, n) {
            $n(t, "__once__" + e + (n ? "_" + n : ""), true);
            return t;
        }
        function $n(t, e, n) {
            if (Array.isArray(t)) {
                for (var r = 0; r < t.length; r++) {
                    if (t[r] && typeof t[r] !== "string") {
                        Sn(t[r], e + "_" + r, n);
                    }
                }
            } else {
                Sn(t, e, n);
            }
        }
        function Sn(t, e, n) {
            t.isStatic = true;
            t.key = e;
            t.isOnce = n;
        }
        /*  */
        function Mn(t, e) {
            if (e) {
                if (!h(e)) {
                    "development" !== "production" && xt("v-on without argument expects an Object value", this);
                } else {
                    var n = t.on = t.on ? j({}, t.on) : {};
                    for (var r in e) {
                        var i = n[r];
                        var a = e[r];
                        n[r] = i ? [].concat(i, a) : a;
                    }
                }
            }
            return t;
        }
        /*  */
        function Tn(t, // see flow/vnode
        e, // the following are added in 2.6
        n, r) {
            e = e || {
                $stable: !n
            };
            for (var i = 0; i < t.length; i++) {
                var a = t[i];
                if (Array.isArray(a)) {
                    Tn(a, e, n);
                } else if (a) {
                    // marker for reverse proxying v-slot without scope on this.$slots
                    if (a.proxy) {
                        a.fn.proxy = true;
                    }
                    e[a.key] = a.fn;
                }
            }
            if (r) {
                e.$key = r;
            }
            return e;
        }
        /*  */
        function Nn(t, e) {
            for (var n = 0; n < e.length; n += 2) {
                var r = e[n];
                if (typeof r === "string" && r) {
                    t[e[n]] = e[n + 1];
                } else if ("development" !== "production" && r !== "" && r !== null) {
                    // null is a speical value for explicitly removing a binding
                    xt("Invalid value for dynamic directive argument (expected string or null): " + r, this);
                }
            }
            return t;
        }
        // helper to dynamically append modifier runtime markers to event names.
        // ensure only append when value is already string, otherwise it will be cast
        // to string and cause the type check to miss.
        function On(t, e) {
            return typeof t === "string" ? e + t : t;
        }
        /*  */
        function Pn(t) {
            t._o = An;
            t._n = y;
            t._s = m;
            t._l = gn;
            t._t = bn;
            t._q = B;
            t._i = V;
            t._m = kn;
            t._f = xn;
            t._k = _n;
            t._b = Cn;
            t._v = Lt;
            t._e = It;
            t._u = Tn;
            t._g = Mn;
            t._d = Nn;
            t._p = On;
        }
        /*  */
        function En(t, e, n, i, a) {
            var o = this;
            var u = a.options;
            // ensure the createElement function in functional components
            // gets a unique context - this is necessary for correct named slot check
            var f;
            if (C(i, "_uid")) {
                f = Object.create(i);
                // $flow-disable-line
                f._original = i;
            } else {
                // the context vm passed in is a functional context as well.
                // in this case we want to make sure we are able to get a hold to the
                // real context instance.
                f = i;
                // $flow-disable-line
                i = i._original;
            }
            var l = s(u._compiled);
            var c = !l;
            this.data = t;
            this.props = e;
            this.children = n;
            this.parent = i;
            this.listeners = t.on || r;
            this.injections = hn(u.inject, i);
            this.slots = function() {
                if (!o.$slots) {
                    vn(t.scopedSlots, o.$slots = dn(n, i));
                }
                return o.$slots;
            };
            Object.defineProperty(this, "scopedSlots", {
                enumerable: true,
                get: function e() {
                    return vn(t.scopedSlots, this.slots());
                }
            });
            // support for compiled functional template
            if (l) {
                // exposing $options for renderStatic()
                this.$options = u;
                // pre-resolve slots for renderSlot()
                this.$slots = this.slots();
                this.$scopedSlots = vn(t.scopedSlots, this.$slots);
            }
            if (u._scopeId) {
                this._c = function(t, e, n, r) {
                    var a = qn(f, t, e, n, r, c);
                    if (a && !Array.isArray(a)) {
                        a.fnScopeId = u._scopeId;
                        a.fnContext = i;
                    }
                    return a;
                };
            } else {
                this._c = function(t, e, n, r) {
                    return qn(f, t, e, n, r, c);
                };
            }
        }
        Pn(En.prototype);
        function jn(t, e, n, i, s) {
            var o = t.options;
            var u = {};
            var f = o.props;
            if (a(f)) {
                for (var l in f) {
                    u[l] = de(l, f, e || r);
                }
            } else {
                if (a(n.attrs)) {
                    Ln(u, n.attrs);
                }
                if (a(n.props)) {
                    Ln(u, n.props);
                }
            }
            var c = new En(n, u, s, i, t);
            var h = o.render.call(null, c._c, c);
            if (h instanceof Et) {
                return In(h, n, c.parent, o, c);
            } else if (Array.isArray(h)) {
                var d = on(h) || [];
                var p = new Array(d.length);
                for (var v = 0; v < d.length; v++) {
                    p[v] = In(d[v], n, c.parent, o, c);
                }
                return p;
            }
        }
        function In(t, e, n, r, i) {
            // #7817 clone node before setting fnContext, otherwise if the node is reused
            // (e.g. it was from a cached normal slot) the fnContext causes named slots
            // that should not be matched to match.
            var a = Ft(t);
            a.fnContext = n;
            a.fnOptions = r;
            if (true) {
                (a.devtoolsMeta = a.devtoolsMeta || {}).renderContext = i;
            }
            if (e.slot) {
                (a.data || (a.data = {})).slot = e.slot;
            }
            return a;
        }
        function Ln(t, e) {
            for (var n in e) {
                t[$(n)] = e[n];
            }
        }
        /*  */
        /*  */
        /*  */
        /*  */
        // inline hooks to be invoked on component VNodes during patch
        var Fn = {
            init: function t(e, n) {
                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                    // kept-alive components, treat as a patch
                    var r = e;
                    // work around flow
                    Fn.prepatch(r, r);
                } else {
                    var i = e.componentInstance = Bn(e, cr);
                    i.$mount(n ? e.elm : undefined, n);
                }
            },
            prepatch: function t(e, n) {
                var r = n.componentOptions;
                var i = n.componentInstance = e.componentInstance;
                yr(i, r.propsData, // updated props
                r.listeners, // updated listeners
                n, // new parent vnode
                r.children);
            },
            insert: function t(e) {
                var n = e.context;
                var r = e.componentInstance;
                if (!r._isMounted) {
                    r._isMounted = true;
                    wr(r, "mounted");
                }
                if (e.data.keepAlive) {
                    if (n._isMounted) {
                        // vue-router#1212
                        // During updates, a kept-alive component's child components may
                        // change, so directly walking the tree here may call activated hooks
                        // on incorrect children. Instead we push them into a queue which will
                        // be processed after the whole patch process ended.
                        Lr(r);
                    } else {
                        br(r, true);
                    }
                }
            },
            destroy: function t(e) {
                var n = e.componentInstance;
                if (!n._isDestroyed) {
                    if (!e.data.keepAlive) {
                        n.$destroy();
                    } else {
                        xr(n, true);
                    }
                }
            }
        };
        var Dn = Object.keys(Fn);
        function Rn(t, e, n, r, o) {
            if (i(t)) {
                return;
            }
            var u = n.$options._base;
            // plain options object: turn it into a constructor
            if (f(t)) {
                t = u.extend(t);
            }
            // if at this stage it's not a constructor or an async component factory,
            // reject.
            if (typeof t !== "function") {
                if (true) {
                    xt("Invalid Component definition: " + String(t), n);
                }
                return;
            }
            // async component
            var l;
            if (i(t.cid)) {
                l = t;
                t = er(l, u);
                if (t === undefined) {
                    // return a placeholder node for async component, which is rendered
                    // as a comment node but preserves all the raw information for the node.
                    // the information will be used for async server-rendering and hydration.
                    return tr(l, e, n, r, o);
                }
            }
            e = e || {};
            // resolve constructor options in case global mixins are applied after
            // component constructor creation
            ai(t);
            // transform component v-model data into props & events
            if (a(e.model)) {
                zn(t.options, e);
            }
            // extract props
            var c = rn(e, t, o);
            // functional component
            if (s(t.options.functional)) {
                return jn(t, c, e, n, r);
            }
            // extract listeners, since these needs to be treated as
            // child component listeners instead of DOM listeners
            var h = e.on;
            // replace with listeners with .native modifier
            // so it gets processed during parent component patch.
            e.on = e.nativeOn;
            if (s(t.options.abstract)) {
                // abstract components do not keep anything
                // other than props & listeners & slot
                // work around flow
                var d = e.slot;
                e = {};
                if (d) {
                    e.slot = d;
                }
            }
            // install component management hooks onto the placeholder node
            Vn(e);
            // return a placeholder vnode
            var p = t.options.name || o;
            var v = new Et("vue-component-" + t.cid + (p ? "-" + p : ""), e, undefined, undefined, undefined, n, {
                Ctor: t,
                propsData: c,
                listeners: h,
                tag: o,
                children: r
            }, l);
            return v;
        }
        function Bn(t, // we know it's MountedComponentVNode but flow doesn't
        e) {
            var n = {
                _isComponent: true,
                _parentVnode: t,
                parent: e
            };
            // check inline-template render functions
            var r = t.data.inlineTemplate;
            if (a(r)) {
                n.render = r.render;
                n.staticRenderFns = r.staticRenderFns;
            }
            return new t.componentOptions.Ctor(n);
        }
        function Vn(t) {
            var e = t.hook || (t.hook = {});
            for (var n = 0; n < Dn.length; n++) {
                var r = Dn[n];
                var i = e[r];
                var a = Fn[r];
                if (i !== a && !(i && i._merged)) {
                    e[r] = i ? Hn(a, i) : a;
                }
            }
        }
        function Hn(t, e) {
            var n = function(n, r) {
                // flow complains about extra args which is why we use any
                t(n, r);
                e(n, r);
            };
            n._merged = true;
            return n;
        }
        // transform component v-model info (value and callback) into
        // prop and event handler respectively.
        function zn(t, e) {
            var n = t.model && t.model.prop || "value";
            var r = t.model && t.model.event || "input";
            (e.attrs || (e.attrs = {}))[n] = e.model.value;
            var i = e.on || (e.on = {});
            var s = i[r];
            var o = e.model.callback;
            if (a(s)) {
                if (Array.isArray(s) ? s.indexOf(o) === -1 : s !== o) {
                    i[r] = [ o ].concat(s);
                }
            } else {
                i[r] = o;
            }
        }
        /*  */
        var Un = 1;
        var Xn = 2;
        // wrapper function for providing a more flexible interface
        // without getting yelled at by flow
        function qn(t, e, n, r, i, a) {
            if (Array.isArray(n) || u(n)) {
                i = r;
                r = n;
                n = undefined;
            }
            if (s(a)) {
                i = Xn;
            }
            return Yn(t, e, n, r, i);
        }
        function Yn(t, e, n, r, i) {
            if (a(n) && a(n.__ob__)) {
                "development" !== "production" && xt("Avoid using observed data object as vnode data: " + JSON.stringify(n) + "\n" + "Always create fresh vnode data objects in each render!", t);
                return It();
            }
            // object syntax in v-bind
            if (a(n) && a(n.is)) {
                e = n.is;
            }
            if (!e) {
                // in case of component :is set to falsy value
                return It();
            }
            // warn against non-primitive key
            if ("development" !== "production" && a(n) && a(n.key) && !u(n.key)) {
                {
                    xt("Avoid using non-primitive value as key, " + "use string/number value instead.", t);
                }
            }
            // support single function children as default scoped slot
            if (Array.isArray(r) && typeof r[0] === "function") {
                n = n || {};
                n.scopedSlots = {
                    default: r[0]
                };
                r.length = 0;
            }
            if (i === Xn) {
                r = on(r);
            } else if (i === Un) {
                r = sn(r);
            }
            var s, o;
            if (typeof e === "string") {
                var f;
                o = t.$vnode && t.$vnode.ns || q.getTagNamespace(e);
                if (q.isReservedTag(e)) {
                    // platform built-in elements
                    s = new Et(q.parsePlatformTagName(e), n, r, undefined, undefined, t);
                } else if ((!n || !n.pre) && a(f = he(t.$options, "components", e))) {
                    // component
                    s = Rn(f, n, t, r, e);
                } else {
                    // unknown or unlisted namespaced elements
                    // check at runtime because it may get assigned a namespace when its
                    // parent normalizes children
                    s = new Et(e, n, r, undefined, undefined, t);
                }
            } else {
                // direct component options / constructor
                s = Rn(e, n, t, r);
            }
            if (Array.isArray(s)) {
                return s;
            } else if (a(s)) {
                if (a(o)) {
                    Gn(s, o);
                }
                if (a(n)) {
                    Jn(n);
                }
                return s;
            } else {
                return It();
            }
        }
        function Gn(t, e, n) {
            t.ns = e;
            if (t.tag === "foreignObject") {
                // use default namespace inside foreignObject
                e = undefined;
                n = true;
            }
            if (a(t.children)) {
                for (var r = 0, o = t.children.length; r < o; r++) {
                    var u = t.children[r];
                    if (a(u.tag) && (i(u.ns) || s(n) && u.tag !== "svg")) {
                        Gn(u, e, n);
                    }
                }
            }
        }
        // ref #5318
        // necessary to ensure parent re-render when deep bindings like :style and
        // :class are used on slot nodes
        function Jn(t) {
            if (f(t.style)) {
                Ke(t.style);
            }
            if (f(t.class)) {
                Ke(t.class);
            }
        }
        /*  */
        function Wn(t) {
            t._vnode = null;
            // the root of the child tree
            t._staticTrees = null;
            // v-once cached trees
            var e = t.$options;
            var n = t.$vnode = e._parentVnode;
            // the placeholder node in parent tree
            var i = n && n.context;
            t.$slots = dn(e._renderChildren, i);
            t.$scopedSlots = r;
            // bind the createElement fn to this instance
            // so that we get proper render context inside it.
            // args order: tag, data, children, normalizationType, alwaysNormalize
            // internal version is used by render functions compiled from templates
            t._c = function(e, n, r, i) {
                return qn(t, e, n, r, i, false);
            };
            // normalization is always applied for the public version, used in
            // user-written render functions.
            t.$createElement = function(e, n, r, i) {
                return qn(t, e, n, r, i, true);
            };
            // $attrs & $listeners are exposed for easier HOC creation.
            // they need to be reactive so that HOCs using them are always updated
            var a = n && n.data;
            /* istanbul ignore else */
            if (true) {
                Gt(t, "$attrs", a && a.attrs || r, function() {
                    !hr && xt("$attrs is readonly.", t);
                }, true);
                Gt(t, "$listeners", e._parentListeners || r, function() {
                    !hr && xt("$listeners is readonly.", t);
                }, true);
            } else {
                Gt(t, "$attrs", a && a.attrs || r, null, true);
                Gt(t, "$listeners", e._parentListeners || r, null, true);
            }
        }
        var Kn = null;
        function Zn(t) {
            // install runtime convenience helpers
            Pn(t.prototype);
            t.prototype.$nextTick = function(t) {
                return De(t, this);
            };
            t.prototype._render = function() {
                var t = this;
                var e = t.$options;
                var n = e.render;
                var r = e._parentVnode;
                if (r) {
                    t.$scopedSlots = vn(r.data.scopedSlots, t.$slots, t.$scopedSlots);
                }
                // set parent vnode. this allows render functions to have access
                // to the data on the placeholder node.
                t.$vnode = r;
                // render self
                var i;
                try {
                    // There's no need to maintain a stack becaues all render fns are called
                    // separately from one another. Nested component's render fns are called
                    // when parent component is patched.
                    Kn = t;
                    i = n.call(t._renderProxy, t.$createElement);
                } catch (e) {
                    Ae(e, t, "render");
                    // return error render result,
                    // or previous vnode to prevent render error causing blank component
                    /* istanbul ignore else */
                    if ("development" !== "production" && t.$options.renderError) {
                        try {
                            i = t.$options.renderError.call(t._renderProxy, t.$createElement, e);
                        } catch (e) {
                            Ae(e, t, "renderError");
                            i = t._vnode;
                        }
                    } else {
                        i = t._vnode;
                    }
                } finally {
                    Kn = null;
                }
                // if the returned array contains only a single node, allow it
                if (Array.isArray(i) && i.length === 1) {
                    i = i[0];
                }
                // return empty vnode in case the render function errored out
                if (!(i instanceof Et)) {
                    if ("development" !== "production" && Array.isArray(i)) {
                        xt("Multiple root nodes returned from render function. Render function " + "should return a single root node.", t);
                    }
                    i = It();
                }
                // set parent
                i.parent = r;
                return i;
            };
        }
        /*  */
        function Qn(t, e) {
            if (t.__esModule || gt && t[Symbol.toStringTag] === "Module") {
                t = t.default;
            }
            return f(t) ? e.extend(t) : t;
        }
        function tr(t, e, n, r, i) {
            var a = It();
            a.asyncFactory = t;
            a.asyncMeta = {
                data: e,
                context: n,
                children: r,
                tag: i
            };
            return a;
        }
        function er(t, e) {
            if (s(t.error) && a(t.errorComp)) {
                return t.errorComp;
            }
            if (a(t.resolved)) {
                return t.resolved;
            }
            var n = Kn;
            if (n && a(t.owners) && t.owners.indexOf(n) === -1) {
                // already pending
                t.owners.push(n);
            }
            if (s(t.loading) && a(t.loadingComp)) {
                return t.loadingComp;
            }
            if (n && !a(t.owners)) {
                var r = t.owners = [ n ];
                var o = true;
                var u = null;
                var l = null;
                n.$on("hook:destroyed", function() {
                    return w(r, n);
                });
                var c = function(t) {
                    for (var e = 0, n = r.length; e < n; e++) {
                        r[e].$forceUpdate();
                    }
                    if (t) {
                        r.length = 0;
                        if (u !== null) {
                            clearTimeout(u);
                            u = null;
                        }
                        if (l !== null) {
                            clearTimeout(l);
                            l = null;
                        }
                    }
                };
                var h = H(function(n) {
                    // cache resolved
                    t.resolved = Qn(n, e);
                    // invoke callbacks only if this is not a synchronous resolve
                    // (async resolves are shimmed as synchronous during SSR)
                    if (!o) {
                        c(true);
                    } else {
                        r.length = 0;
                    }
                });
                var d = H(function(e) {
                    "development" !== "production" && xt("Failed to resolve async component: " + String(t) + (e ? "\nReason: " + e : ""));
                    if (a(t.errorComp)) {
                        t.error = true;
                        c(true);
                    }
                });
                var p = t(h, d);
                if (f(p)) {
                    if (v(p)) {
                        // () => Promise
                        if (i(t.resolved)) {
                            p.then(h, d);
                        }
                    } else if (v(p.component)) {
                        p.component.then(h, d);
                        if (a(p.error)) {
                            t.errorComp = Qn(p.error, e);
                        }
                        if (a(p.loading)) {
                            t.loadingComp = Qn(p.loading, e);
                            if (p.delay === 0) {
                                t.loading = true;
                            } else {
                                u = setTimeout(function() {
                                    u = null;
                                    if (i(t.resolved) && i(t.error)) {
                                        t.loading = true;
                                        c(false);
                                    }
                                }, p.delay || 200);
                            }
                        }
                        if (a(p.timeout)) {
                            l = setTimeout(function() {
                                l = null;
                                if (i(t.resolved)) {
                                    d(true ? "timeout (" + p.timeout + "ms)" : null);
                                }
                            }, p.timeout);
                        }
                    }
                }
                o = false;
                // return in case resolved synchronously
                return t.loading ? t.loadingComp : t.resolved;
            }
        }
        /*  */
        function nr(t) {
            return t.isComment && t.asyncFactory;
        }
        /*  */
        function rr(t) {
            if (Array.isArray(t)) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (a(n) && (a(n.componentOptions) || nr(n))) {
                        return n;
                    }
                }
            }
        }
        /*  */
        /*  */
        function ir(t) {
            t._events = Object.create(null);
            t._hasHookEvent = false;
            // init parent attached events
            var e = t.$options._parentListeners;
            if (e) {
                fr(t, e);
            }
        }
        var ar;
        function sr(t, e) {
            ar.$on(t, e);
        }
        function or(t, e) {
            ar.$off(t, e);
        }
        function ur(t, e) {
            var n = ar;
            return function r() {
                var i = e.apply(null, arguments);
                if (i !== null) {
                    n.$off(t, r);
                }
            };
        }
        function fr(t, e, n) {
            ar = t;
            en(e, n || {}, sr, or, ur, t);
            ar = undefined;
        }
        function lr(t) {
            var e = /^hook:/;
            t.prototype.$on = function(t, n) {
                var r = this;
                if (Array.isArray(t)) {
                    for (var i = 0, a = t.length; i < a; i++) {
                        r.$on(t[i], n);
                    }
                } else {
                    (r._events[t] || (r._events[t] = [])).push(n);
                    // optimize hook:event cost by using a boolean flag marked at registration
                    // instead of a hash lookup
                    if (e.test(t)) {
                        r._hasHookEvent = true;
                    }
                }
                return r;
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
                // all
                if (!arguments.length) {
                    n._events = Object.create(null);
                    return n;
                }
                // array of events
                if (Array.isArray(t)) {
                    for (var r = 0, i = t.length; r < i; r++) {
                        n.$off(t[r], e);
                    }
                    return n;
                }
                // specific event
                var a = n._events[t];
                if (!a) {
                    return n;
                }
                if (!e) {
                    n._events[t] = null;
                    return n;
                }
                // specific handler
                var s;
                var o = a.length;
                while (o--) {
                    s = a[o];
                    if (s === e || s.fn === e) {
                        a.splice(o, 1);
                        break;
                    }
                }
                return n;
            };
            t.prototype.$emit = function(t) {
                var e = this;
                if (true) {
                    var n = t.toLowerCase();
                    if (n !== t && e._events[n]) {
                        wt('Event "' + n + '" is emitted in component ' + Ct(e) + ' but the handler is registered for "' + t + '". ' + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "' + T(t) + '" instead of "' + t + '".');
                    }
                }
                var r = e._events[t];
                if (r) {
                    r = r.length > 1 ? E(r) : r;
                    var i = E(arguments, 1);
                    var a = 'event handler for "' + t + '"';
                    for (var s = 0, o = r.length; s < o; s++) {
                        $e(r[s], e, i, e, a);
                    }
                }
                return e;
            };
        }
        /*  */
        var cr = null;
        var hr = false;
        function dr(t) {
            var e = cr;
            cr = t;
            return function() {
                cr = e;
            };
        }
        function pr(t) {
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
        function vr(t) {
            t.prototype._update = function(t, e) {
                var n = this;
                var r = n.$el;
                var i = n._vnode;
                var a = dr(n);
                n._vnode = t;
                // Vue.prototype.__patch__ is injected in entry points
                // based on the rendering backend used.
                if (!i) {
                    // initial render
                    n.$el = n.__patch__(n.$el, t, e, false);
                } else {
                    // updates
                    n.$el = n.__patch__(i, t);
                }
                a();
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
                wr(t, "beforeDestroy");
                t._isBeingDestroyed = true;
                // remove self from parent
                var e = t.$parent;
                if (e && !e._isBeingDestroyed && !t.$options.abstract) {
                    w(e.$children, t);
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
                wr(t, "destroyed");
                // turn off all instance listeners.
                t.$off();
                // remove __vue__ reference
                if (t.$el) {
                    t.$el.__vue__ = null;
                }
                // release circular reference (#6759)
                if (t.$vnode) {
                    t.$vnode.parent = null;
                }
            };
        }
        function mr(t, e, n) {
            t.$el = e;
            if (!t.$options.render) {
                t.$options.render = It;
                if (true) {
                    /* istanbul ignore if */
                    if (t.$options.template && t.$options.template.charAt(0) !== "#" || t.$options.el || e) {
                        xt("You are using the runtime-only build of Vue where the template " + "compiler is not available. Either pre-compile the templates into " + "render functions, or use the compiler-included build.", t);
                    } else {
                        xt("Failed to mount component: template or render function not defined.", t);
                    }
                }
            }
            wr(t, "beforeMount");
            var r;
            /* istanbul ignore if */
            if ("development" !== "production" && q.performance && Re) {
                r = function() {
                    var e = t._name;
                    var r = t._uid;
                    var i = "vue-perf-start:" + r;
                    var a = "vue-perf-end:" + r;
                    Re(i);
                    var s = t._render();
                    Re(a);
                    Be("vue " + e + " render", i, a);
                    Re(i);
                    t._update(s, n);
                    Re(a);
                    Be("vue " + e + " patch", i, a);
                };
            } else {
                r = function() {
                    t._update(t._render(), n);
                };
            }
            // we set this to vm._watcher inside the watcher's constructor
            // since the watcher's initial patch may call $forceUpdate (e.g. inside child
            // component's mounted hook), which relies on vm._watcher being already defined
            new Br(t, r, L, {
                before: function e() {
                    if (t._isMounted && !t._isDestroyed) {
                        wr(t, "beforeUpdate");
                    }
                }
            }, true);
            n = false;
            // manually mounted instance, call mounted on self
            // mounted is called for render-created child components in its inserted hook
            if (t.$vnode == null) {
                t._isMounted = true;
                wr(t, "mounted");
            }
            return t;
        }
        function yr(t, e, n, i, a) {
            if (true) {
                hr = true;
            }
            // determine whether component has slot children
            // we need to do this before overwriting $options._renderChildren.
            // check if there are dynamic scopedSlots (hand-written or compiled but with
            // dynamic slot names). Static scoped slots compiled from template has the
            // "$stable" marker.
            var s = i.data.scopedSlots;
            var o = t.$scopedSlots;
            var u = !!(s && !s.$stable || o !== r && !o.$stable || s && t.$scopedSlots.$key !== s.$key);
            // Any static slot children from the parent may have changed during parent's
            // update. Dynamic scoped slots may also have changed. In such cases, a forced
            // update is necessary to ensure correctness.
            var f = !!(a || // has new static slots
            t.$options._renderChildren || // has old static slots
            u);
            t.$options._parentVnode = i;
            t.$vnode = i;
            // update vm's placeholder node without re-render
            if (t._vnode) {
                // update child tree's parent
                t._vnode.parent = i;
            }
            t.$options._renderChildren = a;
            // update $attrs and $listeners hash
            // these are also reactive so they may trigger child update if the child
            // used them during render
            t.$attrs = i.data.attrs || r;
            t.$listeners = n || r;
            // update props
            if (e && t.$options.props) {
                zt(false);
                var l = t._props;
                var c = t.$options._propKeys || [];
                for (var h = 0; h < c.length; h++) {
                    var d = c[h];
                    var p = t.$options.props;
                    // wtf flow?
                    l[d] = de(d, p, e, t);
                }
                zt(true);
                // keep a copy of raw propsData
                t.$options.propsData = e;
            }
            // update listeners
            n = n || r;
            var v = t.$options._parentListeners;
            t.$options._parentListeners = n;
            fr(t, n, v);
            // resolve slots + force update if has children
            if (f) {
                t.$slots = dn(a, i.context);
                t.$forceUpdate();
            }
            if (true) {
                hr = false;
            }
        }
        function gr(t) {
            while (t && (t = t.$parent)) {
                if (t._inactive) {
                    return true;
                }
            }
            return false;
        }
        function br(t, e) {
            if (e) {
                t._directInactive = false;
                if (gr(t)) {
                    return;
                }
            } else if (t._directInactive) {
                return;
            }
            if (t._inactive || t._inactive === null) {
                t._inactive = false;
                for (var n = 0; n < t.$children.length; n++) {
                    br(t.$children[n]);
                }
                wr(t, "activated");
            }
        }
        function xr(t, e) {
            if (e) {
                t._directInactive = true;
                if (gr(t)) {
                    return;
                }
            }
            if (!t._inactive) {
                t._inactive = true;
                for (var n = 0; n < t.$children.length; n++) {
                    xr(t.$children[n]);
                }
                wr(t, "deactivated");
            }
        }
        function wr(t, e) {
            // #7573 disable dep collection when invoking lifecycle hooks
            Ot();
            var n = t.$options[e];
            var r = e + " hook";
            if (n) {
                for (var i = 0, a = n.length; i < a; i++) {
                    $e(n[i], t, null, t, r);
                }
            }
            if (t._hasHookEvent) {
                t.$emit("hook:" + e);
            }
            Pt();
        }
        /*  */
        var _r = 100;
        var Cr = [];
        var kr = [];
        var Ar = {};
        var $r = {};
        var Sr = false;
        var Mr = false;
        var Tr = 0;
        /**
 * Reset the scheduler's state.
 */
        function Nr() {
            Tr = Cr.length = kr.length = 0;
            Ar = {};
            if (true) {
                $r = {};
            }
            Sr = Mr = false;
        }
        // Async edge case #6566 requires saving the timestamp when event listeners are
        // attached. However, calling performance.now() has a perf overhead especially
        // if the page has thousands of event listeners. Instead, we take a timestamp
        // every time the scheduler flushes and use that for all event listeners
        // attached during that flush.
        var Or = 0;
        // Async edge case fix requires storing an event listener's attach timestamp.
        var Pr = Date.now;
        // Determine what event timestamp the browser is using. Annoyingly, the
        // timestamp can either be hi-res (relative to page load) or low-res
        // (relative to UNIX epoch), so in order to compare time we have to use the
        // same timestamp type when saving the flush timestamp.
        // All IE versions use low-res event timestamps, and have problematic clock
        // implementations (#9632)
        if (Q && !rt) {
            var Er = window.performance;
            if (Er && typeof Er.now === "function" && Pr() > document.createEvent("Event").timeStamp) {
                // if the event timestamp, although evaluated AFTER the Date.now(), is
                // smaller than it, it means the event is using a hi-res timestamp,
                // and we need to use the hi-res version for event listener timestamps as
                // well.
                Pr = function() {
                    return Er.now();
                };
            }
        }
        /**
 * Flush both queues and run the watchers.
 */
        function jr() {
            Or = Pr();
            Mr = true;
            var t, e;
            // Sort queue before flush.
            // This ensures that:
            // 1. Components are updated from parent to child. (because parent is always
            //    created before the child)
            // 2. A component's user watchers are run before its render watcher (because
            //    user watchers are created before the render watcher)
            // 3. If a component is destroyed during a parent component's watcher run,
            //    its watchers can be skipped.
            Cr.sort(function(t, e) {
                return t.id - e.id;
            });
            // do not cache length because more watchers might be pushed
            // as we run existing watchers
            for (Tr = 0; Tr < Cr.length; Tr++) {
                t = Cr[Tr];
                if (t.before) {
                    t.before();
                }
                e = t.id;
                Ar[e] = null;
                t.run();
                // in dev build, check and stop circular updates.
                if ("development" !== "production" && Ar[e] != null) {
                    $r[e] = ($r[e] || 0) + 1;
                    if ($r[e] > _r) {
                        xt("You may have an infinite update loop " + (t.user ? 'in watcher with expression "' + t.expression + '"' : "in a component render function."), t.vm);
                        break;
                    }
                }
            }
            // keep copies of post queues before resetting state
            var n = kr.slice();
            var r = Cr.slice();
            Nr();
            // call component updated and activated hooks
            Fr(n);
            Ir(r);
            // devtool hook
            /* istanbul ignore if */
            if (mt && q.devtools) {
                mt.emit("flush");
            }
        }
        function Ir(t) {
            var e = t.length;
            while (e--) {
                var n = t[e];
                var r = n.vm;
                if (r._watcher === n && r._isMounted && !r._isDestroyed) {
                    wr(r, "updated");
                }
            }
        }
        /**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
        function Lr(t) {
            // setting _inactive to false here so that a render function can
            // rely on checking whether it's in an inactive tree (e.g. router-view)
            t._inactive = false;
            kr.push(t);
        }
        function Fr(t) {
            for (var e = 0; e < t.length; e++) {
                t[e]._inactive = true;
                br(t[e], true);
            }
        }
        /**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
        function Dr(t) {
            var e = t.id;
            if (Ar[e] == null) {
                Ar[e] = true;
                if (!Mr) {
                    Cr.push(t);
                } else {
                    // if already flushing, splice the watcher based on its id
                    // if already past its id, it will be run next immediately.
                    var n = Cr.length - 1;
                    while (n > Tr && Cr[n].id > t.id) {
                        n--;
                    }
                    Cr.splice(n + 1, 0, t);
                }
                // queue the flush
                if (!Sr) {
                    Sr = true;
                    if ("development" !== "production" && !q.async) {
                        jr();
                        return;
                    }
                    De(jr);
                }
            }
        }
        /*  */
        var Rr = 0;
        /**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
        var Br = function t(e, n, r, i, a) {
            this.vm = e;
            if (a) {
                e._watcher = this;
            }
            e._watchers.push(this);
            // options
            if (i) {
                this.deep = !!i.deep;
                this.user = !!i.user;
                this.lazy = !!i.lazy;
                this.sync = !!i.sync;
                this.before = i.before;
            } else {
                this.deep = this.user = this.lazy = this.sync = false;
            }
            this.cb = r;
            this.id = ++Rr;
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
                this.getter = K(n);
                if (!this.getter) {
                    this.getter = L;
                    "development" !== "production" && xt('Failed watching path: "' + n + '" ' + "Watcher only accepts simple dot-delimited paths. " + "For full control, use a function instead.", e);
                }
            }
            this.value = this.lazy ? undefined : this.get();
        };
        /**
 * Evaluate the getter, and re-collect dependencies.
 */
        Br.prototype.get = function t() {
            Ot(this);
            var e;
            var n = this.vm;
            try {
                e = this.getter.call(n, n);
            } catch (t) {
                if (this.user) {
                    Ae(t, n, 'getter for watcher "' + this.expression + '"');
                } else {
                    throw t;
                }
            } finally {
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) {
                    Ke(e);
                }
                Pt();
                this.cleanupDeps();
            }
            return e;
        };
        /**
 * Add a dependency to this directive.
 */
        Br.prototype.addDep = function t(e) {
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
        Br.prototype.cleanupDeps = function t() {
            var e = this.deps.length;
            while (e--) {
                var n = this.deps[e];
                if (!this.newDepIds.has(n.id)) {
                    n.removeSub(this);
                }
            }
            var r = this.depIds;
            this.depIds = this.newDepIds;
            this.newDepIds = r;
            this.newDepIds.clear();
            r = this.deps;
            this.deps = this.newDeps;
            this.newDeps = r;
            this.newDeps.length = 0;
        };
        /**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
        Br.prototype.update = function t() {
            /* istanbul ignore else */
            if (this.lazy) {
                this.dirty = true;
            } else if (this.sync) {
                this.run();
            } else {
                Dr(this);
            }
        };
        /**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
        Br.prototype.run = function t() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
                // when the value is the same, because the value may
                // have mutated.
                f(e) || this.deep) {
                    // set new value
                    var n = this.value;
                    this.value = e;
                    if (this.user) {
                        try {
                            this.cb.call(this.vm, e, n);
                        } catch (t) {
                            Ae(t, this.vm, 'callback for watcher "' + this.expression + '"');
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
        Br.prototype.evaluate = function t() {
            this.value = this.get();
            this.dirty = false;
        };
        /**
 * Depend on all deps collected by this watcher.
 */
        Br.prototype.depend = function t() {
            var e = this.deps.length;
            while (e--) {
                this.deps[e].depend();
            }
        };
        /**
 * Remove self from all dependencies' subscriber list.
 */
        Br.prototype.teardown = function t() {
            if (this.active) {
                // remove self from vm's watcher list
                // this is a somewhat expensive operation so we skip it
                // if the vm is being destroyed.
                if (!this.vm._isBeingDestroyed) {
                    w(this.vm._watchers, this);
                }
                var e = this.deps.length;
                while (e--) {
                    this.deps[e].removeSub(this);
                }
                this.active = false;
            }
        };
        /*  */
        var Vr = {
            enumerable: true,
            configurable: true,
            get: L,
            set: L
        };
        function Hr(t, e, n) {
            Vr.get = function t() {
                return this[e][n];
            };
            Vr.set = function t(r) {
                this[e][n] = r;
            };
            Object.defineProperty(t, n, Vr);
        }
        function zr(t) {
            t._watchers = [];
            var e = t.$options;
            if (e.props) {
                Ur(t, e.props);
            }
            if (e.methods) {
                Zr(t, e.methods);
            }
            if (e.data) {
                Xr(t);
            } else {
                Yt(t._data = {}, true);
            }
            if (e.computed) {
                Gr(t, e.computed);
            }
            if (e.watch && e.watch !== ct) {
                Qr(t, e.watch);
            }
        }
        function Ur(t, e) {
            var n = t.$options.propsData || {};
            var r = t._props = {};
            // cache prop keys so that future props updates can iterate using Array
            // instead of dynamic object key enumeration.
            var i = t.$options._propKeys = [];
            var a = !t.$parent;
            // root instance props should be converted
            if (!a) {
                zt(false);
            }
            var s = function(s) {
                i.push(s);
                var o = de(s, e, n, t);
                /* istanbul ignore else */
                if (true) {
                    var u = T(s);
                    if (x(u) || q.isReservedAttr(u)) {
                        xt('"' + u + '" is a reserved attribute and cannot be used as component prop.', t);
                    }
                    Gt(r, s, o, function() {
                        if (!a && !hr) {
                            xt("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "' + s + '"', t);
                        }
                    });
                } else {
                    Gt(r, s, o);
                }
                // static props are already proxied on the component's prototype
                // during Vue.extend(). We only need to proxy props defined at
                // instantiation here.
                if (!(s in t)) {
                    Hr(t, "_props", s);
                }
            };
            for (var o in e) s(o);
            zt(true);
        }
        function Xr(t) {
            var e = t.$options.data;
            e = t._data = typeof e === "function" ? qr(e, t) : e || {};
            if (!h(e)) {
                e = {};
                "development" !== "production" && xt("data functions should return an object:\n" + "https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", t);
            }
            // proxy data on instance
            var n = Object.keys(e);
            var r = t.$options.props;
            var i = t.$options.methods;
            var a = n.length;
            while (a--) {
                var s = n[a];
                if (true) {
                    if (i && C(i, s)) {
                        xt('Method "' + s + '" has already been defined as a data property.', t);
                    }
                }
                if (r && C(r, s)) {
                    "development" !== "production" && xt('The data property "' + s + '" is already declared as a prop. ' + "Use prop default value instead.", t);
                } else if (!G(s)) {
                    Hr(t, "_data", s);
                }
            }
            // observe data
            Yt(e, true);
        }
        function qr(t, e) {
            // #7573 disable dep collection when invoking data getters
            Ot();
            try {
                return t.call(e, e);
            } catch (t) {
                Ae(t, e, "data()");
                return {};
            } finally {
                Pt();
            }
        }
        var Yr = {
            lazy: true
        };
        function Gr(t, e) {
            // $flow-disable-line
            var n = t._computedWatchers = Object.create(null);
            // computed properties are just getters during SSR
            var r = vt();
            for (var i in e) {
                var a = e[i];
                var s = typeof a === "function" ? a : a.get;
                if ("development" !== "production" && s == null) {
                    xt('Getter is missing for computed property "' + i + '".', t);
                }
                if (!r) {
                    // create internal watcher for the computed property.
                    n[i] = new Br(t, s || L, L, Yr);
                }
                // component-defined computed properties are already defined on the
                // component prototype. We only need to define computed properties defined
                // at instantiation here.
                if (!(i in t)) {
                    Jr(t, i, a);
                } else if (true) {
                    if (i in t.$data) {
                        xt('The computed property "' + i + '" is already defined in data.', t);
                    } else if (t.$options.props && i in t.$options.props) {
                        xt('The computed property "' + i + '" is already defined as a prop.', t);
                    }
                }
            }
        }
        function Jr(t, e, n) {
            var r = !vt();
            if (typeof n === "function") {
                Vr.get = r ? Wr(e) : Kr(n);
                Vr.set = L;
            } else {
                Vr.get = n.get ? r && n.cache !== false ? Wr(e) : Kr(n.get) : L;
                Vr.set = n.set || L;
            }
            if ("development" !== "production" && Vr.set === L) {
                Vr.set = function() {
                    xt('Computed property "' + e + '" was assigned to but it has no setter.', this);
                };
            }
            Object.defineProperty(t, e, Vr);
        }
        function Wr(t) {
            return function e() {
                var n = this._computedWatchers && this._computedWatchers[t];
                if (n) {
                    if (n.dirty) {
                        n.evaluate();
                    }
                    if (Tt.target) {
                        n.depend();
                    }
                    return n.value;
                }
            };
        }
        function Kr(t) {
            return function e() {
                return t.call(this, this);
            };
        }
        function Zr(t, e) {
            var n = t.$options.props;
            for (var r in e) {
                if (true) {
                    if (typeof e[r] !== "function") {
                        xt('Method "' + r + '" has type "' + typeof e[r] + '" in the component definition. ' + "Did you reference the function correctly?", t);
                    }
                    if (n && C(n, r)) {
                        xt('Method "' + r + '" has already been defined as a prop.', t);
                    }
                    if (r in t && G(r)) {
                        xt('Method "' + r + '" conflicts with an existing Vue instance method. ' + "Avoid defining component methods that start with _ or $.");
                    }
                }
                t[r] = typeof e[r] !== "function" ? L : P(e[r], t);
            }
        }
        function Qr(t, e) {
            for (var n in e) {
                var r = e[n];
                if (Array.isArray(r)) {
                    for (var i = 0; i < r.length; i++) {
                        ti(t, n, r[i]);
                    }
                } else {
                    ti(t, n, r);
                }
            }
        }
        function ti(t, e, n, r) {
            if (h(n)) {
                r = n;
                n = n.handler;
            }
            if (typeof n === "string") {
                n = t[n];
            }
            return t.$watch(e, n, r);
        }
        function ei(t) {
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
                e.set = function() {
                    xt("Avoid replacing instance root $data. " + "Use nested data properties instead.", this);
                };
                n.set = function() {
                    xt("$props is readonly.", this);
                };
            }
            Object.defineProperty(t.prototype, "$data", e);
            Object.defineProperty(t.prototype, "$props", n);
            t.prototype.$set = Jt;
            t.prototype.$delete = Wt;
            t.prototype.$watch = function(t, e, n) {
                var r = this;
                if (h(e)) {
                    return ti(r, t, e, n);
                }
                n = n || {};
                n.user = true;
                var i = new Br(r, t, e, n);
                if (n.immediate) {
                    try {
                        e.call(r, i.value);
                    } catch (t) {
                        Ae(t, r, 'callback for immediate watcher "' + i.expression + '"');
                    }
                }
                return function t() {
                    i.teardown();
                };
            };
        }
        /*  */
        var ni = 0;
        function ri(t) {
            t.prototype._init = function(t) {
                var e = this;
                // a uid
                e._uid = ni++;
                var n, r;
                /* istanbul ignore if */
                if ("development" !== "production" && q.performance && Re) {
                    n = "vue-perf-start:" + e._uid;
                    r = "vue-perf-end:" + e._uid;
                    Re(n);
                }
                // a flag to avoid this being observed
                e._isVue = true;
                // merge options
                if (t && t._isComponent) {
                    // optimize internal component instantiation
                    // since dynamic options merging is pretty slow, and none of the
                    // internal component options needs special treatment.
                    ii(e, t);
                } else {
                    e.$options = ce(ai(e.constructor), t || {}, e);
                }
                /* istanbul ignore else */
                if (true) {
                    He(e);
                } else {
                    e._renderProxy = e;
                }
                // expose real self
                e._self = e;
                pr(e);
                ir(e);
                Wn(e);
                wr(e, "beforeCreate");
                cn(e);
                // resolve injections before data/props
                zr(e);
                ln(e);
                // resolve provide after data/props
                wr(e, "created");
                /* istanbul ignore if */
                if ("development" !== "production" && q.performance && Re) {
                    e._name = Ct(e, false);
                    Re(r);
                    Be("vue " + e._name + " init", n, r);
                }
                if (e.$options.el) {
                    e.$mount(e.$options.el);
                }
            };
        }
        function ii(t, e) {
            var n = t.$options = Object.create(t.constructor.options);
            // doing this because it's faster than dynamic enumeration.
            var r = e._parentVnode;
            n.parent = e.parent;
            n._parentVnode = r;
            var i = r.componentOptions;
            n.propsData = i.propsData;
            n._parentListeners = i.listeners;
            n._renderChildren = i.children;
            n._componentTag = i.tag;
            if (e.render) {
                n.render = e.render;
                n.staticRenderFns = e.staticRenderFns;
            }
        }
        function ai(t) {
            var e = t.options;
            if (t.super) {
                var n = ai(t.super);
                var r = t.superOptions;
                if (n !== r) {
                    // super option changed,
                    // need to resolve new options.
                    t.superOptions = n;
                    // check if there are any late-modified/attached options (#4976)
                    var i = si(t);
                    // update base extend options
                    if (i) {
                        j(t.extendOptions, i);
                    }
                    e = t.options = ce(n, t.extendOptions);
                    if (e.name) {
                        e.components[e.name] = t;
                    }
                }
            }
            return e;
        }
        function si(t) {
            var e;
            var n = t.options;
            var r = t.sealedOptions;
            for (var i in n) {
                if (n[i] !== r[i]) {
                    if (!e) {
                        e = {};
                    }
                    e[i] = n[i];
                }
            }
            return e;
        }
        function oi(t) {
            if ("development" !== "production" && !(this instanceof oi)) {
                xt("Vue is a constructor and should be called with the `new` keyword");
            }
            this._init(t);
        }
        ri(oi);
        ei(oi);
        lr(oi);
        vr(oi);
        Zn(oi);
        /*  */
        function ui(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) {
                    return this;
                }
                // additional parameters
                var n = E(arguments, 1);
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
        function fi(t) {
            t.mixin = function(t) {
                this.options = ce(this.options, t);
                return this;
            };
        }
        /*  */
        function li(t) {
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
                if ("development" !== "production" && a) {
                    se(a);
                }
                var s = function t(e) {
                    this._init(e);
                };
                s.prototype = Object.create(n.prototype);
                s.prototype.constructor = s;
                s.cid = e++;
                s.options = ce(n.options, t);
                s["super"] = n;
                // For props and computed properties, we define the proxy getters on
                // the Vue instances at extension time, on the extended prototype. This
                // avoids Object.defineProperty calls for each instance created.
                if (s.options.props) {
                    ci(s);
                }
                if (s.options.computed) {
                    hi(s);
                }
                // allow further extension/mixin/plugin usage
                s.extend = n.extend;
                s.mixin = n.mixin;
                s.use = n.use;
                // create asset registers, so extended classes
                // can have their private assets too.
                U.forEach(function(t) {
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
                s.sealedOptions = j({}, s.options);
                // cache constructor
                i[r] = s;
                return s;
            };
        }
        function ci(t) {
            var e = t.options.props;
            for (var n in e) {
                Hr(t.prototype, "_props", n);
            }
        }
        function hi(t) {
            var e = t.options.computed;
            for (var n in e) {
                Jr(t.prototype, n, e[n]);
            }
        }
        /*  */
        function di(t) {
            /**
   * Create asset registration methods.
   */
            U.forEach(function(e) {
                t[e] = function(t, n) {
                    if (!n) {
                        return this.options[e + "s"][t];
                    } else {
                        /* istanbul ignore if */
                        if ("development" !== "production" && e === "component") {
                            se(t);
                        }
                        if (e === "component" && h(n)) {
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
        function pi(t) {
            return t && (t.Ctor.options.name || t.tag);
        }
        function vi(t, e) {
            if (Array.isArray(t)) {
                return t.indexOf(e) > -1;
            } else if (typeof t === "string") {
                return t.split(",").indexOf(e) > -1;
            } else if (d(t)) {
                return t.test(e);
            }
            /* istanbul ignore next */
            return false;
        }
        function mi(t, e) {
            var n = t.cache;
            var r = t.keys;
            var i = t._vnode;
            for (var a in n) {
                var s = n[a];
                if (s) {
                    var o = pi(s.componentOptions);
                    if (o && !e(o)) {
                        yi(n, a, r, i);
                    }
                }
            }
        }
        function yi(t, e, n, r) {
            var i = t[e];
            if (i && (!r || i.tag !== r.tag)) {
                i.componentInstance.$destroy();
            }
            t[e] = null;
            w(n, e);
        }
        var gi = [ String, RegExp, Array ];
        var bi = {
            name: "keep-alive",
            abstract: true,
            props: {
                include: gi,
                exclude: gi,
                max: [ String, Number ]
            },
            created: function t() {
                this.cache = Object.create(null);
                this.keys = [];
            },
            destroyed: function t() {
                for (var e in this.cache) {
                    yi(this.cache, e, this.keys);
                }
            },
            mounted: function t() {
                var e = this;
                this.$watch("include", function(t) {
                    mi(e, function(e) {
                        return vi(t, e);
                    });
                });
                this.$watch("exclude", function(t) {
                    mi(e, function(e) {
                        return !vi(t, e);
                    });
                });
            },
            render: function t() {
                var e = this.$slots.default;
                var n = rr(e);
                var r = n && n.componentOptions;
                if (r) {
                    // check pattern
                    var i = pi(r);
                    var a = this;
                    var s = a.include;
                    var o = a.exclude;
                    if (// not included
                    s && (!i || !vi(s, i)) || // excluded
                    o && i && vi(o, i)) {
                        return n;
                    }
                    var u = this;
                    var f = u.cache;
                    var l = u.keys;
                    var c = n.key == null ? r.Ctor.cid + (r.tag ? "::" + r.tag : "") : n.key;
                    if (f[c]) {
                        n.componentInstance = f[c].componentInstance;
                        // make current key freshest
                        w(l, c);
                        l.push(c);
                    } else {
                        f[c] = n;
                        l.push(c);
                        // prune oldest entry
                        if (this.max && l.length > parseInt(this.max)) {
                            yi(f, l[0], l, this._vnode);
                        }
                    }
                    n.data.keepAlive = true;
                }
                return n || e && e[0];
            }
        };
        var xi = {
            KeepAlive: bi
        };
        /*  */
        function wi(t) {
            // config
            var e = {};
            e.get = function() {
                return q;
            };
            if (true) {
                e.set = function() {
                    xt("Do not replace the Vue.config object, set individual fields instead.");
                };
            }
            Object.defineProperty(t, "config", e);
            // exposed util methods.
            // NOTE: these are not considered part of the public API - avoid relying on
            // them unless you are aware of the risk.
            t.util = {
                warn: xt,
                extend: j,
                mergeOptions: ce,
                defineReactive: Gt
            };
            t.set = Jt;
            t.delete = Wt;
            t.nextTick = De;
            // 2.6 explicit observable API
            t.observable = function(t) {
                Yt(t);
                return t;
            };
            t.options = Object.create(null);
            U.forEach(function(e) {
                t.options[e + "s"] = Object.create(null);
            });
            // this is used to identify the "base" constructor to extend all plain-object
            // components with in Weex's multi-instance scenarios.
            t.options._base = t;
            j(t.options.components, xi);
            ui(t);
            fi(t);
            li(t);
            di(t);
        }
        wi(oi);
        Object.defineProperty(oi.prototype, "$isServer", {
            get: vt
        });
        Object.defineProperty(oi.prototype, "$ssrContext", {
            get: function t() {
                /* istanbul ignore next */
                return this.$vnode && this.$vnode.ssrContext;
            }
        });
        // expose FunctionalRenderContext for ssr runtime helper installation
        Object.defineProperty(oi, "FunctionalRenderContext", {
            value: En
        });
        oi.version = "2.6.10";
        /*  */
        // these are reserved for web because they are directly compiled away
        // during template compilation
        var _i = g("style,class");
        // attributes that should be using props for binding
        var Ci = g("input,textarea,option,select,progress");
        var ki = function(t, e, n) {
            return n === "value" && Ci(t) && e !== "button" || n === "selected" && t === "option" || n === "checked" && t === "input" || n === "muted" && t === "video";
        };
        var Ai = g("contenteditable,draggable,spellcheck");
        var $i = g("events,caret,typing,plaintext-only");
        var Si = function(t, e) {
            return Pi(e) || e === "false" ? "false" : t === "contenteditable" && $i(e) ? e : "true";
        };
        var Mi = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare," + "default,defaultchecked,defaultmuted,defaultselected,defer,disabled," + "enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple," + "muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly," + "required,reversed,scoped,seamless,selected,sortable,translate," + "truespeed,typemustmatch,visible");
        var Ti = "http://www.w3.org/1999/xlink";
        var Ni = function(t) {
            return t.charAt(5) === ":" && t.slice(0, 5) === "xlink";
        };
        var Oi = function(t) {
            return Ni(t) ? t.slice(6, t.length) : "";
        };
        var Pi = function(t) {
            return t == null || t === false;
        };
        /*  */
        function Ei(t) {
            var e = t.data;
            var n = t;
            var r = t;
            while (a(r.componentInstance)) {
                r = r.componentInstance._vnode;
                if (r && r.data) {
                    e = ji(r.data, e);
                }
            }
            while (a(n = n.parent)) {
                if (n && n.data) {
                    e = ji(e, n.data);
                }
            }
            return Ii(e.staticClass, e.class);
        }
        function ji(t, e) {
            return {
                staticClass: Li(t.staticClass, e.staticClass),
                class: a(t.class) ? [ t.class, e.class ] : e.class
            };
        }
        function Ii(t, e) {
            if (a(t) || a(e)) {
                return Li(t, Fi(e));
            }
            /* istanbul ignore next */
            return "";
        }
        function Li(t, e) {
            return t ? e ? t + " " + e : t : e || "";
        }
        function Fi(t) {
            if (Array.isArray(t)) {
                return Di(t);
            }
            if (f(t)) {
                return Ri(t);
            }
            if (typeof t === "string") {
                return t;
            }
            /* istanbul ignore next */
            return "";
        }
        function Di(t) {
            var e = "";
            var n;
            for (var r = 0, i = t.length; r < i; r++) {
                if (a(n = Fi(t[r])) && n !== "") {
                    if (e) {
                        e += " ";
                    }
                    e += n;
                }
            }
            return e;
        }
        function Ri(t) {
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
        var Bi = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        };
        var Vi = g("html,body,base,head,link,meta,style,title," + "address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section," + "div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul," + "a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby," + "s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video," + "embed,object,param,source,canvas,script,noscript,del,ins," + "caption,col,colgroup,table,thead,tbody,td,th,tr," + "button,datalist,fieldset,form,input,label,legend,meter,optgroup,option," + "output,progress,select,textarea," + "details,dialog,menu,menuitem,summary," + "content,element,shadow,template,blockquote,iframe,tfoot");
        // this map is intentionally selective, only covering SVG elements that may
        // contain child elements.
        var Hi = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face," + "foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern," + "polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", true);
        var zi = function(t) {
            return t === "pre";
        };
        var Ui = function(t) {
            return Vi(t) || Hi(t);
        };
        function Xi(t) {
            if (Hi(t)) {
                return "svg";
            }
            // basic support for MathML
            // note it doesn't support other MathML elements being component roots
            if (t === "math") {
                return "math";
            }
        }
        var qi = Object.create(null);
        function Yi(t) {
            /* istanbul ignore if */
            if (!Q) {
                return true;
            }
            if (Ui(t)) {
                return false;
            }
            t = t.toLowerCase();
            /* istanbul ignore if */
            if (qi[t] != null) {
                return qi[t];
            }
            var e = document.createElement(t);
            if (t.indexOf("-") > -1) {
                // http://stackoverflow.com/a/28210364/1070244
                return qi[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement;
            } else {
                return qi[t] = /HTMLUnknownElement/.test(e.toString());
            }
        }
        var Gi = g("text,number,password,search,email,tel,url");
        /*  */
        /**
 * Query an element selector if it's not an element already.
 */
        function Ji(t) {
            if (typeof t === "string") {
                var e = document.querySelector(t);
                if (!e) {
                    "development" !== "production" && xt("Cannot find element: " + t);
                    return document.createElement("div");
                }
                return e;
            } else {
                return t;
            }
        }
        /*  */
        function Wi(t, e) {
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
        function Ki(t, e) {
            return document.createElementNS(Bi[t], e);
        }
        function Zi(t) {
            return document.createTextNode(t);
        }
        function Qi(t) {
            return document.createComment(t);
        }
        function ta(t, e, n) {
            t.insertBefore(e, n);
        }
        function ea(t, e) {
            t.removeChild(e);
        }
        function na(t, e) {
            t.appendChild(e);
        }
        function ra(t) {
            return t.parentNode;
        }
        function ia(t) {
            return t.nextSibling;
        }
        function aa(t) {
            return t.tagName;
        }
        function sa(t, e) {
            t.textContent = e;
        }
        function oa(t, e) {
            t.setAttribute(e, "");
        }
        var ua = /*#__PURE__*/ Object.freeze({
            createElement: Wi,
            createElementNS: Ki,
            createTextNode: Zi,
            createComment: Qi,
            insertBefore: ta,
            removeChild: ea,
            appendChild: na,
            parentNode: ra,
            nextSibling: ia,
            tagName: aa,
            setTextContent: sa,
            setStyleScope: oa
        });
        /*  */
        var fa = {
            create: function t(e, n) {
                la(n);
            },
            update: function t(e, n) {
                if (e.data.ref !== n.data.ref) {
                    la(e, true);
                    la(n);
                }
            },
            destroy: function t(e) {
                la(e, true);
            }
        };
        function la(t, e) {
            var n = t.data.ref;
            if (!a(n)) {
                return;
            }
            var r = t.context;
            var i = t.componentInstance || t.elm;
            var s = r.$refs;
            if (e) {
                if (Array.isArray(s[n])) {
                    w(s[n], i);
                } else if (s[n] === i) {
                    s[n] = undefined;
                }
            } else {
                if (t.data.refInFor) {
                    if (!Array.isArray(s[n])) {
                        s[n] = [ i ];
                    } else if (s[n].indexOf(i) < 0) {
                        // $flow-disable-line
                        s[n].push(i);
                    }
                } else {
                    s[n] = i;
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
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */
        var ca = new Et("", {}, []);
        var ha = [ "create", "activate", "update", "remove", "destroy" ];
        function da(t, e) {
            return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && a(t.data) === a(e.data) && pa(t, e) || s(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && i(e.asyncFactory.error));
        }
        function pa(t, e) {
            if (t.tag !== "input") {
                return true;
            }
            var n;
            var r = a(n = t.data) && a(n = n.attrs) && n.type;
            var i = a(n = e.data) && a(n = n.attrs) && n.type;
            return r === i || Gi(r) && Gi(i);
        }
        function va(t, e, n) {
            var r, i;
            var s = {};
            for (r = e; r <= n; ++r) {
                i = t[r].key;
                if (a(i)) {
                    s[i] = r;
                }
            }
            return s;
        }
        function ma(t) {
            var e, n;
            var r = {};
            var o = t.modules;
            var f = t.nodeOps;
            for (e = 0; e < ha.length; ++e) {
                r[ha[e]] = [];
                for (n = 0; n < o.length; ++n) {
                    if (a(o[n][ha[e]])) {
                        r[ha[e]].push(o[n][ha[e]]);
                    }
                }
            }
            function l(t) {
                return new Et(f.tagName(t).toLowerCase(), {}, [], undefined, t);
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
                var e = f.parentNode(t);
                // element may have already been removed due to v-html / v-text
                if (a(e)) {
                    f.removeChild(e, t);
                }
            }
            function p(t, e) {
                return !e && !t.ns && !(q.ignoredElements.length && q.ignoredElements.some(function(e) {
                    return d(e) ? e.test(t.tag) : e === t.tag;
                })) && q.isUnknownElement(t.tag);
            }
            var v = 0;
            function m(t, e, n, r, i, o, u) {
                if (a(t.elm) && a(o)) {
                    // This vnode was used in a previous render!
                    // now it's used as a new node, overwriting its elm would cause
                    // potential patch errors down the road when it's used as an insertion
                    // reference node. Instead, we clone the node on-demand before creating
                    // associated DOM element for it.
                    t = o[u] = Ft(t);
                }
                t.isRootInsert = !i;
                // for transition enter check
                if (y(t, e, n, r)) {
                    return;
                }
                var l = t.data;
                var c = t.children;
                var h = t.tag;
                if (a(h)) {
                    if (true) {
                        if (l && l.pre) {
                            v++;
                        }
                        if (p(t, v)) {
                            xt("Unknown custom element: <" + h + "> - did you " + "register the component correctly? For recursive components, " + 'make sure to provide the "name" option.', t.context);
                        }
                    }
                    t.elm = t.ns ? f.createElementNS(t.ns, h) : f.createElement(h, t);
                    A(t);
                    /* istanbul ignore if */
                    {
                        _(t, c, e);
                        if (a(l)) {
                            k(t, e);
                        }
                        w(n, t.elm, r);
                    }
                    if ("development" !== "production" && l && l.pre) {
                        v--;
                    }
                } else if (s(t.isComment)) {
                    t.elm = f.createComment(t.text);
                    w(n, t.elm, r);
                } else {
                    t.elm = f.createTextNode(t.text);
                    w(n, t.elm, r);
                }
            }
            function y(t, e, n, r) {
                var i = t.data;
                if (a(i)) {
                    var o = a(t.componentInstance) && i.keepAlive;
                    if (a(i = i.hook) && a(i = i.init)) {
                        i(t, false);
                    }
                    // after calling the init hook, if the vnode is a child component
                    // it should've created a child instance and mounted it. the child
                    // component also has set the placeholder vnode's elm.
                    // in that case we can just return the element and be done.
                    if (a(t.componentInstance)) {
                        b(t, e);
                        w(n, t.elm, r);
                        if (s(o)) {
                            x(t, e, n, r);
                        }
                        return true;
                    }
                }
            }
            function b(t, e) {
                if (a(t.data.pendingInsert)) {
                    e.push.apply(e, t.data.pendingInsert);
                    t.data.pendingInsert = null;
                }
                t.elm = t.componentInstance.$el;
                if (C(t)) {
                    k(t, e);
                    A(t);
                } else {
                    // empty component root.
                    // skip all element-related modules except for ref (#3455)
                    la(t);
                    // make sure to invoke the insert hook
                    e.push(t);
                }
            }
            function x(t, e, n, i) {
                var s;
                // hack for #4339: a reactivated component with inner transition
                // does not trigger because the inner node's created hooks are not called
                // again. It's not ideal to involve module-specific logic in here but
                // there doesn't seem to be a better way to do it.
                var o = t;
                while (o.componentInstance) {
                    o = o.componentInstance._vnode;
                    if (a(s = o.data) && a(s = s.transition)) {
                        for (s = 0; s < r.activate.length; ++s) {
                            r.activate[s](ca, o);
                        }
                        e.push(o);
                        break;
                    }
                }
                // unlike a newly created component,
                // a reactivated keep-alive component doesn't insert itself
                w(n, t.elm, i);
            }
            function w(t, e, n) {
                if (a(t)) {
                    if (a(n)) {
                        if (f.parentNode(n) === t) {
                            f.insertBefore(t, e, n);
                        }
                    } else {
                        f.appendChild(t, e);
                    }
                }
            }
            function _(t, e, n) {
                if (Array.isArray(e)) {
                    if (true) {
                        O(e);
                    }
                    for (var r = 0; r < e.length; ++r) {
                        m(e[r], n, t.elm, null, true, e, r);
                    }
                } else if (u(t.text)) {
                    f.appendChild(t.elm, f.createTextNode(String(t.text)));
                }
            }
            function C(t) {
                while (t.componentInstance) {
                    t = t.componentInstance._vnode;
                }
                return a(t.tag);
            }
            function k(t, n) {
                for (var i = 0; i < r.create.length; ++i) {
                    r.create[i](ca, t);
                }
                e = t.data.hook;
                // Reuse variable
                if (a(e)) {
                    if (a(e.create)) {
                        e.create(ca, t);
                    }
                    if (a(e.insert)) {
                        n.push(t);
                    }
                }
            }
            // set scope id attribute for scoped CSS.
            // this is implemented as a special case to avoid the overhead
            // of going through the normal attribute patching process.
            function A(t) {
                var e;
                if (a(e = t.fnScopeId)) {
                    f.setStyleScope(t.elm, e);
                } else {
                    var n = t;
                    while (n) {
                        if (a(e = n.context) && a(e = e.$options._scopeId)) {
                            f.setStyleScope(t.elm, e);
                        }
                        n = n.parent;
                    }
                }
                // for slot content they should also get the scopeId from the host instance.
                if (a(e = cr) && e !== t.context && e !== t.fnContext && a(e = e.$options._scopeId)) {
                    f.setStyleScope(t.elm, e);
                }
            }
            function $(t, e, n, r, i, a) {
                for (;r <= i; ++r) {
                    m(n[r], a, t, e, false, n, r);
                }
            }
            function S(t) {
                var e, n;
                var i = t.data;
                if (a(i)) {
                    if (a(e = i.hook) && a(e = e.destroy)) {
                        e(t);
                    }
                    for (e = 0; e < r.destroy.length; ++e) {
                        r.destroy[e](t);
                    }
                }
                if (a(e = t.children)) {
                    for (n = 0; n < t.children.length; ++n) {
                        S(t.children[n]);
                    }
                }
            }
            function M(t, e, n, r) {
                for (;n <= r; ++n) {
                    var i = e[n];
                    if (a(i)) {
                        if (a(i.tag)) {
                            T(i);
                            S(i);
                        } else {
                            // Text node
                            h(i.elm);
                        }
                    }
                }
            }
            function T(t, e) {
                if (a(e) || a(t.data)) {
                    var n;
                    var i = r.remove.length + 1;
                    if (a(e)) {
                        // we have a recursively passed down rm callback
                        // increase the listeners count
                        e.listeners += i;
                    } else {
                        // directly removing
                        e = c(t.elm, i);
                    }
                    // recursively invoke hooks on child component root node
                    if (a(n = t.componentInstance) && a(n = n._vnode) && a(n.data)) {
                        T(n, e);
                    }
                    for (n = 0; n < r.remove.length; ++n) {
                        r.remove[n](t, e);
                    }
                    if (a(n = t.data.hook) && a(n = n.remove)) {
                        n(t, e);
                    } else {
                        e();
                    }
                } else {
                    h(t.elm);
                }
            }
            function N(t, e, n, r, s) {
                var o = 0;
                var u = 0;
                var l = e.length - 1;
                var c = e[0];
                var h = e[l];
                var d = n.length - 1;
                var p = n[0];
                var v = n[d];
                var y, g, b, x;
                // removeOnly is a special flag used only by <transition-group>
                // to ensure removed elements stay in correct relative positions
                // during leaving transitions
                var w = !s;
                if (true) {
                    O(n);
                }
                while (o <= l && u <= d) {
                    if (i(c)) {
                        c = e[++o];
                    } else if (i(h)) {
                        h = e[--l];
                    } else if (da(c, p)) {
                        E(c, p, r, n, u);
                        c = e[++o];
                        p = n[++u];
                    } else if (da(h, v)) {
                        E(h, v, r, n, d);
                        h = e[--l];
                        v = n[--d];
                    } else if (da(c, v)) {
                        // Vnode moved right
                        E(c, v, r, n, d);
                        w && f.insertBefore(t, c.elm, f.nextSibling(h.elm));
                        c = e[++o];
                        v = n[--d];
                    } else if (da(h, p)) {
                        // Vnode moved left
                        E(h, p, r, n, u);
                        w && f.insertBefore(t, h.elm, c.elm);
                        h = e[--l];
                        p = n[++u];
                    } else {
                        if (i(y)) {
                            y = va(e, o, l);
                        }
                        g = a(p.key) ? y[p.key] : P(p, e, o, l);
                        if (i(g)) {
                            // New element
                            m(p, r, t, c.elm, false, n, u);
                        } else {
                            b = e[g];
                            if (da(b, p)) {
                                E(b, p, r, n, u);
                                e[g] = undefined;
                                w && f.insertBefore(t, b.elm, c.elm);
                            } else {
                                // same key but different element. treat as new element
                                m(p, r, t, c.elm, false, n, u);
                            }
                        }
                        p = n[++u];
                    }
                }
                if (o > l) {
                    x = i(n[d + 1]) ? null : n[d + 1].elm;
                    $(t, x, n, u, d, r);
                } else if (u > d) {
                    M(t, e, o, l);
                }
            }
            function O(t) {
                var e = {};
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    var i = r.key;
                    if (a(i)) {
                        if (e[i]) {
                            xt("Duplicate keys detected: '" + i + "'. This may cause an update error.", r.context);
                        } else {
                            e[i] = true;
                        }
                    }
                }
            }
            function P(t, e, n, r) {
                for (var i = n; i < r; i++) {
                    var s = e[i];
                    if (a(s) && da(t, s)) {
                        return i;
                    }
                }
            }
            function E(t, e, n, o, u, l) {
                if (t === e) {
                    return;
                }
                if (a(e.elm) && a(o)) {
                    // clone reused vnode
                    e = o[u] = Ft(e);
                }
                var c = e.elm = t.elm;
                if (s(t.isAsyncPlaceholder)) {
                    if (a(e.asyncFactory.resolved)) {
                        F(t.elm, e, n);
                    } else {
                        e.isAsyncPlaceholder = true;
                    }
                    return;
                }
                // reuse element for static trees.
                // note we only do this if the vnode is cloned -
                // if the new node is not cloned it means the render functions have been
                // reset by the hot-reload-api and we need to do a proper re-render.
                if (s(e.isStatic) && s(t.isStatic) && e.key === t.key && (s(e.isCloned) || s(e.isOnce))) {
                    e.componentInstance = t.componentInstance;
                    return;
                }
                var h;
                var d = e.data;
                if (a(d) && a(h = d.hook) && a(h = h.prepatch)) {
                    h(t, e);
                }
                var p = t.children;
                var v = e.children;
                if (a(d) && C(e)) {
                    for (h = 0; h < r.update.length; ++h) {
                        r.update[h](t, e);
                    }
                    if (a(h = d.hook) && a(h = h.update)) {
                        h(t, e);
                    }
                }
                if (i(e.text)) {
                    if (a(p) && a(v)) {
                        if (p !== v) {
                            N(c, p, v, n, l);
                        }
                    } else if (a(v)) {
                        if (true) {
                            O(v);
                        }
                        if (a(t.text)) {
                            f.setTextContent(c, "");
                        }
                        $(c, null, v, 0, v.length - 1, n);
                    } else if (a(p)) {
                        M(c, p, 0, p.length - 1);
                    } else if (a(t.text)) {
                        f.setTextContent(c, "");
                    }
                } else if (t.text !== e.text) {
                    f.setTextContent(c, e.text);
                }
                if (a(d)) {
                    if (a(h = d.hook) && a(h = h.postpatch)) {
                        h(t, e);
                    }
                }
            }
            function j(t, e, n) {
                // delay insert hooks for component root nodes, invoke them after the
                // element is really inserted
                if (s(n) && a(t.parent)) {
                    t.parent.data.pendingInsert = e;
                } else {
                    for (var r = 0; r < e.length; ++r) {
                        e[r].data.hook.insert(e[r]);
                    }
                }
            }
            var I = false;
            // list of modules that can skip create hook during hydration because they
            // are already rendered on the client or has no need for initialization
            // Note: style is excluded because it relies on initial clone for future
            // deep updates (#7063).
            var L = g("attrs,class,staticClass,staticStyle,key");
            // Note: this is a browser-only function so we can assume elms are DOM nodes.
            function F(t, e, n, r) {
                var i;
                var o = e.tag;
                var u = e.data;
                var f = e.children;
                r = r || u && u.pre;
                e.elm = t;
                if (s(e.isComment) && a(e.asyncFactory)) {
                    e.isAsyncPlaceholder = true;
                    return true;
                }
                // assert node match
                if (true) {
                    if (!D(t, e, r)) {
                        return false;
                    }
                }
                if (a(u)) {
                    if (a(i = u.hook) && a(i = i.init)) {
                        i(e, true);
                    }
                    if (a(i = e.componentInstance)) {
                        // child component. it should have hydrated its own tree.
                        b(e, n);
                        return true;
                    }
                }
                if (a(o)) {
                    if (a(f)) {
                        // empty element, allow client to pick up and populate children
                        if (!t.hasChildNodes()) {
                            _(e, f, n);
                        } else {
                            // v-html and domProps: innerHTML
                            if (a(i = u) && a(i = i.domProps) && a(i = i.innerHTML)) {
                                if (i !== t.innerHTML) {
                                    /* istanbul ignore if */
                                    if ("development" !== "production" && typeof console !== "undefined" && !I) {
                                        I = true;
                                        console.warn("Parent: ", t);
                                        console.warn("server innerHTML: ", i);
                                        console.warn("client innerHTML: ", t.innerHTML);
                                    }
                                    return false;
                                }
                            } else {
                                // iterate and compare children lists
                                var l = true;
                                var c = t.firstChild;
                                for (var h = 0; h < f.length; h++) {
                                    if (!c || !F(c, f[h], n, r)) {
                                        l = false;
                                        break;
                                    }
                                    c = c.nextSibling;
                                }
                                // if childNode is not null, it means the actual childNodes list is
                                // longer than the virtual children list.
                                if (!l || c) {
                                    /* istanbul ignore if */
                                    if ("development" !== "production" && typeof console !== "undefined" && !I) {
                                        I = true;
                                        console.warn("Parent: ", t);
                                        console.warn("Mismatching childNodes vs. VNodes: ", t.childNodes, f);
                                    }
                                    return false;
                                }
                            }
                        }
                    }
                    if (a(u)) {
                        var d = false;
                        for (var p in u) {
                            if (!L(p)) {
                                d = true;
                                k(e, n);
                                break;
                            }
                        }
                        if (!d && u["class"]) {
                            // ensure collecting deps for deep class bindings for future updates
                            Ke(u["class"]);
                        }
                    }
                } else if (t.data !== e.text) {
                    t.data = e.text;
                }
                return true;
            }
            function D(t, e, n) {
                if (a(e.tag)) {
                    return e.tag.indexOf("vue-component") === 0 || !p(e, n) && e.tag.toLowerCase() === (t.tagName && t.tagName.toLowerCase());
                } else {
                    return t.nodeType === (e.isComment ? 8 : 3);
                }
            }
            return function t(e, n, o, u) {
                if (i(n)) {
                    if (a(e)) {
                        S(e);
                    }
                    return;
                }
                var c = false;
                var h = [];
                if (i(e)) {
                    // empty mount (likely as component), create new root element
                    c = true;
                    m(n, h);
                } else {
                    var d = a(e.nodeType);
                    if (!d && da(e, n)) {
                        // patch existing root node
                        E(e, n, h, null, null, u);
                    } else {
                        if (d) {
                            // mounting to a real element
                            // check if this is server-rendered content and if we can perform
                            // a successful hydration.
                            if (e.nodeType === 1 && e.hasAttribute(z)) {
                                e.removeAttribute(z);
                                o = true;
                            }
                            if (s(o)) {
                                if (F(e, n, h)) {
                                    j(n, h, true);
                                    return e;
                                } else if (true) {
                                    xt("The client-side rendered virtual DOM tree is not matching " + "server-rendered content. This is likely caused by incorrect " + "HTML markup, for example nesting block-level elements inside " + "<p>, or missing <tbody>. Bailing hydration and performing " + "full client-side render.");
                                }
                            }
                            // either not server-rendered, or hydration failed.
                            // create an empty node and replace it
                            e = l(e);
                        }
                        // replacing existing element
                        var p = e.elm;
                        var v = f.parentNode(p);
                        // create new node
                        m(n, h, // extremely rare edge case: do not insert if old element is in a
                        // leaving transition. Only happens when combining transition +
                        // keep-alive + HOCs. (#4590)
                        p._leaveCb ? null : v, f.nextSibling(p));
                        // update parent placeholder node element, recursively
                        if (a(n.parent)) {
                            var y = n.parent;
                            var g = C(n);
                            while (y) {
                                for (var b = 0; b < r.destroy.length; ++b) {
                                    r.destroy[b](y);
                                }
                                y.elm = n.elm;
                                if (g) {
                                    for (var x = 0; x < r.create.length; ++x) {
                                        r.create[x](ca, y);
                                    }
                                    // #6513
                                    // invoke insert hooks that may have been merged by create hooks.
                                    // e.g. for directives that uses the "inserted" hook.
                                    var w = y.data.hook.insert;
                                    if (w.merged) {
                                        // start at index 1 to avoid re-invoking component mounted hook
                                        for (var _ = 1; _ < w.fns.length; _++) {
                                            w.fns[_]();
                                        }
                                    }
                                } else {
                                    la(y);
                                }
                                y = y.parent;
                            }
                        }
                        // destroy old node
                        if (a(v)) {
                            M(v, [ e ], 0, 0);
                        } else if (a(e.tag)) {
                            S(e);
                        }
                    }
                }
                j(n, h, c);
                return n.elm;
            };
        }
        /*  */
        var ya = {
            create: ga,
            update: ga,
            destroy: function t(e) {
                ga(e, ca);
            }
        };
        function ga(t, e) {
            if (t.data.directives || e.data.directives) {
                ba(t, e);
            }
        }
        function ba(t, e) {
            var n = t === ca;
            var r = e === ca;
            var i = wa(t.data.directives, t.context);
            var a = wa(e.data.directives, e.context);
            var s = [];
            var o = [];
            var u, f, l;
            for (u in a) {
                f = i[u];
                l = a[u];
                if (!f) {
                    // new directive, bind
                    Ca(l, "bind", e, t);
                    if (l.def && l.def.inserted) {
                        s.push(l);
                    }
                } else {
                    // existing directive, update
                    l.oldValue = f.value;
                    l.oldArg = f.arg;
                    Ca(l, "update", e, t);
                    if (l.def && l.def.componentUpdated) {
                        o.push(l);
                    }
                }
            }
            if (s.length) {
                var c = function() {
                    for (var n = 0; n < s.length; n++) {
                        Ca(s[n], "inserted", e, t);
                    }
                };
                if (n) {
                    nn(e, "insert", c);
                } else {
                    c();
                }
            }
            if (o.length) {
                nn(e, "postpatch", function() {
                    for (var n = 0; n < o.length; n++) {
                        Ca(o[n], "componentUpdated", e, t);
                    }
                });
            }
            if (!n) {
                for (u in i) {
                    if (!a[u]) {
                        // no longer present, unbind
                        Ca(i[u], "unbind", t, t, r);
                    }
                }
            }
        }
        var xa = Object.create(null);
        function wa(t, e) {
            var n = Object.create(null);
            if (!t) {
                // $flow-disable-line
                return n;
            }
            var r, i;
            for (r = 0; r < t.length; r++) {
                i = t[r];
                if (!i.modifiers) {
                    // $flow-disable-line
                    i.modifiers = xa;
                }
                n[_a(i)] = i;
                i.def = he(e.$options, "directives", i.name, true);
            }
            // $flow-disable-line
            return n;
        }
        function _a(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
        }
        function Ca(t, e, n, r, i) {
            var a = t.def && t.def[e];
            if (a) {
                try {
                    a(n.elm, t, n, r, i);
                } catch (r) {
                    Ae(r, n.context, "directive " + t.name + " " + e + " hook");
                }
            }
        }
        var ka = [ fa, ya ];
        /*  */
        function Aa(t, e) {
            var n = e.componentOptions;
            if (a(n) && n.Ctor.options.inheritAttrs === false) {
                return;
            }
            if (i(t.data.attrs) && i(e.data.attrs)) {
                return;
            }
            var r, s, o;
            var u = e.elm;
            var f = t.data.attrs || {};
            var l = e.data.attrs || {};
            // clone observed objects, as the user probably wants to mutate it
            if (a(l.__ob__)) {
                l = e.data.attrs = j({}, l);
            }
            for (r in l) {
                s = l[r];
                o = f[r];
                if (o !== s) {
                    $a(u, r, s);
                }
            }
            // #4391: in IE9, setting type can reset value for input[type=radio]
            // #6666: IE/Edge forces progress value down to 1 before setting a max
            /* istanbul ignore if */
            if ((rt || at) && l.value !== f.value) {
                $a(u, "value", l.value);
            }
            for (r in f) {
                if (i(l[r])) {
                    if (Ni(r)) {
                        u.removeAttributeNS(Ti, Oi(r));
                    } else if (!Ai(r)) {
                        u.removeAttribute(r);
                    }
                }
            }
        }
        function $a(t, e, n) {
            if (t.tagName.indexOf("-") > -1) {
                Sa(t, e, n);
            } else if (Mi(e)) {
                // set attribute for blank value
                // e.g. <option disabled>Select one</option>
                if (Pi(n)) {
                    t.removeAttribute(e);
                } else {
                    // technically allowfullscreen is a boolean attribute for <iframe>,
                    // but Flash expects a value of "true" when used on <embed> tag
                    n = e === "allowfullscreen" && t.tagName === "EMBED" ? "true" : e;
                    t.setAttribute(e, n);
                }
            } else if (Ai(e)) {
                t.setAttribute(e, Si(e, n));
            } else if (Ni(e)) {
                if (Pi(n)) {
                    t.removeAttributeNS(Ti, Oi(e));
                } else {
                    t.setAttributeNS(Ti, e, n);
                }
            } else {
                Sa(t, e, n);
            }
        }
        function Sa(t, e, n) {
            if (Pi(n)) {
                t.removeAttribute(e);
            } else {
                // #7138: IE10 & 11 fires input event when setting placeholder on
                // <textarea>... block the first input event and remove the blocker
                // immediately.
                /* istanbul ignore if */
                if (rt && !it && t.tagName === "TEXTAREA" && e === "placeholder" && n !== "" && !t.__ieph) {
                    var r = function(e) {
                        e.stopImmediatePropagation();
                        t.removeEventListener("input", r);
                    };
                    t.addEventListener("input", r);
                    // $flow-disable-line
                    t.__ieph = true;
                }
                t.setAttribute(e, n);
            }
        }
        var Ma = {
            create: Aa,
            update: Aa
        };
        /*  */
        function Ta(t, e) {
            var n = e.elm;
            var r = e.data;
            var s = t.data;
            if (i(r.staticClass) && i(r.class) && (i(s) || i(s.staticClass) && i(s.class))) {
                return;
            }
            var o = Ei(e);
            // handle transition classes
            var u = n._transitionClasses;
            if (a(u)) {
                o = Li(o, Fi(u));
            }
            // set the class
            if (o !== n._prevClass) {
                n.setAttribute("class", o);
                n._prevClass = o;
            }
        }
        var Na = {
            create: Ta,
            update: Ta
        };
        /*  */
        var Oa = /[\w).+\-_$\]]/;
        function Pa(t) {
            var e = false;
            var n = false;
            var r = false;
            var i = false;
            var a = 0;
            var s = 0;
            var o = 0;
            var u = 0;
            var f, l, c, h, d;
            for (c = 0; c < t.length; c++) {
                l = f;
                f = t.charCodeAt(c);
                if (e) {
                    if (f === 39 && l !== 92) {
                        e = false;
                    }
                } else if (n) {
                    if (f === 34 && l !== 92) {
                        n = false;
                    }
                } else if (r) {
                    if (f === 96 && l !== 92) {
                        r = false;
                    }
                } else if (i) {
                    if (f === 47 && l !== 92) {
                        i = false;
                    }
                } else if (f === 124 && // pipe
                t.charCodeAt(c + 1) !== 124 && t.charCodeAt(c - 1) !== 124 && !a && !s && !o) {
                    if (h === undefined) {
                        // first filter, end of expression
                        u = c + 1;
                        h = t.slice(0, c).trim();
                    } else {
                        m();
                    }
                } else {
                    switch (f) {
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
                    if (f === 47) {
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
                        if (!v || !Oa.test(v)) {
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
                    h = Ea(h, d[c]);
                }
            }
            return h;
        }
        function Ea(t, e) {
            var n = e.indexOf("(");
            if (n < 0) {
                // _f: resolveFilter
                return '_f("' + e + '")(' + t + ")";
            } else {
                var r = e.slice(0, n);
                var i = e.slice(n + 1);
                return '_f("' + r + '")(' + t + (i !== ")" ? "," + i : i);
            }
        }
        /*  */
        /* eslint-disable no-unused-vars */
        function ja(t, e) {
            console.error("[Vue compiler]: " + t);
        }
        /* eslint-enable no-unused-vars */
        function Ia(t, e) {
            return t ? t.map(function(t) {
                return t[e];
            }).filter(function(t) {
                return t;
            }) : [];
        }
        function La(t, e, n, r, i) {
            (t.props || (t.props = [])).push(qa({
                name: e,
                value: n,
                dynamic: i
            }, r));
            t.plain = false;
        }
        function Fa(t, e, n, r, i) {
            var a = i ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = []);
            a.push(qa({
                name: e,
                value: n,
                dynamic: i
            }, r));
            t.plain = false;
        }
        // add a raw attr (use this in preTransforms)
        function Da(t, e, n, r) {
            t.attrsMap[e] = n;
            t.attrsList.push(qa({
                name: e,
                value: n
            }, r));
        }
        function Ra(t, e, n, r, i, a, s, o) {
            (t.directives || (t.directives = [])).push(qa({
                name: e,
                rawName: n,
                value: r,
                arg: i,
                isDynamicArg: a,
                modifiers: s
            }, o));
            t.plain = false;
        }
        function Ba(t, e, n) {
            return n ? "_p(" + e + ',"' + t + '")' : t + e;
        }
        function Va(t, e, n, i, a, s, o, u) {
            i = i || r;
            // warn prevent and passive modifier
            /* istanbul ignore if */
            if ("development" !== "production" && s && i.prevent && i.passive) {
                s("passive and prevent can't be used together. " + "Passive handler can't prevent default event.", o);
            }
            // normalize click.right and click.middle since they don't actually fire
            // this is technically browser-specific, but at least for now browsers are
            // the only target envs that have right/middle clicks.
            if (i.right) {
                if (u) {
                    e = "(" + e + ")==='click'?'contextmenu':(" + e + ")";
                } else if (e === "click") {
                    e = "contextmenu";
                    delete i.right;
                }
            } else if (i.middle) {
                if (u) {
                    e = "(" + e + ")==='click'?'mouseup':(" + e + ")";
                } else if (e === "click") {
                    e = "mouseup";
                }
            }
            // check capture modifier
            if (i.capture) {
                delete i.capture;
                e = Ba("!", e, u);
            }
            if (i.once) {
                delete i.once;
                e = Ba("~", e, u);
            }
            /* istanbul ignore if */
            if (i.passive) {
                delete i.passive;
                e = Ba("&", e, u);
            }
            var f;
            if (i.native) {
                delete i.native;
                f = t.nativeEvents || (t.nativeEvents = {});
            } else {
                f = t.events || (t.events = {});
            }
            var l = qa({
                value: n.trim(),
                dynamic: u
            }, o);
            if (i !== r) {
                l.modifiers = i;
            }
            var c = f[e];
            /* istanbul ignore if */
            if (Array.isArray(c)) {
                a ? c.unshift(l) : c.push(l);
            } else if (c) {
                f[e] = a ? [ l, c ] : [ c, l ];
            } else {
                f[e] = l;
            }
            t.plain = false;
        }
        function Ha(t, e) {
            return t.rawAttrsMap[":" + e] || t.rawAttrsMap["v-bind:" + e] || t.rawAttrsMap[e];
        }
        function za(t, e, n) {
            var r = Ua(t, ":" + e) || Ua(t, "v-bind:" + e);
            if (r != null) {
                return Pa(r);
            } else if (n !== false) {
                var i = Ua(t, e);
                if (i != null) {
                    return JSON.stringify(i);
                }
            }
        }
        // note: this only removes the attr from the Array (attrsList) so that it
        // doesn't get processed by processAttrs.
        // By default it does NOT remove it from the map (attrsMap) because the map is
        // needed during codegen.
        function Ua(t, e, n) {
            var r;
            if ((r = t.attrsMap[e]) != null) {
                var i = t.attrsList;
                for (var a = 0, s = i.length; a < s; a++) {
                    if (i[a].name === e) {
                        i.splice(a, 1);
                        break;
                    }
                }
            }
            if (n) {
                delete t.attrsMap[e];
            }
            return r;
        }
        function Xa(t, e) {
            var n = t.attrsList;
            for (var r = 0, i = n.length; r < i; r++) {
                var a = n[r];
                if (e.test(a.name)) {
                    n.splice(r, 1);
                    return a;
                }
            }
        }
        function qa(t, e) {
            if (e) {
                if (e.start != null) {
                    t.start = e.start;
                }
                if (e.end != null) {
                    t.end = e.end;
                }
            }
            return t;
        }
        /*  */
        /**
 * Cross-platform code generation for component v-model
 */
        function Ya(t, e, n) {
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
            var u = Ga(e, o);
            t.model = {
                value: "(" + e + ")",
                expression: JSON.stringify(e),
                callback: "function (" + s + ") {" + u + "}"
            };
        }
        /**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
        function Ga(t, e) {
            var n = es(t);
            if (n.key === null) {
                return t + "=" + e;
            } else {
                return "$set(" + n.exp + ", " + n.key + ", " + e + ")";
            }
        }
        /**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */
        var Ja, Wa, Ka, Za, Qa, ts;
        function es(t) {
            // Fix https://github.com/vuejs/vue/pull/7730
            // allow v-model="obj.val " (trailing whitespace)
            t = t.trim();
            Ja = t.length;
            if (t.indexOf("[") < 0 || t.lastIndexOf("]") < Ja - 1) {
                Za = t.lastIndexOf(".");
                if (Za > -1) {
                    return {
                        exp: t.slice(0, Za),
                        key: '"' + t.slice(Za + 1) + '"'
                    };
                } else {
                    return {
                        exp: t,
                        key: null
                    };
                }
            }
            Wa = t;
            Za = Qa = ts = 0;
            while (!rs()) {
                Ka = ns();
                /* istanbul ignore if */
                if (is(Ka)) {
                    ss(Ka);
                } else if (Ka === 91) {
                    as(Ka);
                }
            }
            return {
                exp: t.slice(0, Qa),
                key: t.slice(Qa + 1, ts)
            };
        }
        function ns() {
            return Wa.charCodeAt(++Za);
        }
        function rs() {
            return Za >= Ja;
        }
        function is(t) {
            return t === 34 || t === 39;
        }
        function as(t) {
            var e = 1;
            Qa = Za;
            while (!rs()) {
                t = ns();
                if (is(t)) {
                    ss(t);
                    continue;
                }
                if (t === 91) {
                    e++;
                }
                if (t === 93) {
                    e--;
                }
                if (e === 0) {
                    ts = Za;
                    break;
                }
            }
        }
        function ss(t) {
            var e = t;
            while (!rs()) {
                t = ns();
                if (t === e) {
                    break;
                }
            }
        }
        /*  */
        var os;
        // in some cases, the event used has to be determined at runtime
        // so we used some reserved tokens during compile.
        var us = "__r";
        var fs = "__c";
        function ls(t, e, n) {
            os = n;
            var r = e.value;
            var i = e.modifiers;
            var a = t.tag;
            var s = t.attrsMap.type;
            if (true) {
                // inputs with type="file" are read only and setting the input's
                // value will throw an error.
                if (a === "input" && s === "file") {
                    os("<" + t.tag + ' v-model="' + r + '" type="file">:\n' + "File inputs are read only. Use a v-on:change listener instead.", t.rawAttrsMap["v-model"]);
                }
            }
            if (t.component) {
                Ya(t, r, i);
                // component v-model doesn't need extra runtime
                return false;
            } else if (a === "select") {
                ds(t, r, i);
            } else if (a === "input" && s === "checkbox") {
                cs(t, r, i);
            } else if (a === "input" && s === "radio") {
                hs(t, r, i);
            } else if (a === "input" || a === "textarea") {
                ps(t, r, i);
            } else if (!q.isReservedTag(a)) {
                Ya(t, r, i);
                // component v-model doesn't need extra runtime
                return false;
            } else if (true) {
                os("<" + t.tag + ' v-model="' + r + '">: ' + "v-model is not supported on this element type. " + "If you are working with contenteditable, it's recommended to " + "wrap a library dedicated for that purpose inside a custom component.", t.rawAttrsMap["v-model"]);
            }
            // ensure runtime directive metadata
            return true;
        }
        function cs(t, e, n) {
            var r = n && n.number;
            var i = za(t, "value") || "null";
            var a = za(t, "true-value") || "true";
            var s = za(t, "false-value") || "false";
            La(t, "checked", "Array.isArray(" + e + ")" + "?_i(" + e + "," + i + ")>-1" + (a === "true" ? ":(" + e + ")" : ":_q(" + e + "," + a + ")"));
            Va(t, "change", "var $$a=" + e + "," + "$$el=$event.target," + "$$c=$$el.checked?(" + a + "):(" + s + ");" + "if(Array.isArray($$a)){" + "var $$v=" + (r ? "_n(" + i + ")" : i) + "," + "$$i=_i($$a,$$v);" + "if($$el.checked){$$i<0&&(" + Ga(e, "$$a.concat([$$v])") + ")}" + "else{$$i>-1&&(" + Ga(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}" + "}else{" + Ga(e, "$$c") + "}", null, true);
        }
        function hs(t, e, n) {
            var r = n && n.number;
            var i = za(t, "value") || "null";
            i = r ? "_n(" + i + ")" : i;
            La(t, "checked", "_q(" + e + "," + i + ")");
            Va(t, "change", Ga(e, i), null, true);
        }
        function ds(t, e, n) {
            var r = n && n.number;
            var i = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + '.map(function(o){var val = "_value" in o ? o._value : o.value;' + "return " + (r ? "_n(val)" : "val") + "})";
            var a = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]";
            var s = "var $$selectedVal = " + i + ";";
            s = s + " " + Ga(e, a);
            Va(t, "change", s, null, true);
        }
        function ps(t, e, n) {
            var r = t.attrsMap.type;
            // warn if v-bind:value conflicts with v-model
            // except for inputs with v-bind:type
            if (true) {
                var i = t.attrsMap["v-bind:value"] || t.attrsMap[":value"];
                var a = t.attrsMap["v-bind:type"] || t.attrsMap[":type"];
                if (i && !a) {
                    var s = t.attrsMap["v-bind:value"] ? "v-bind:value" : ":value";
                    os(s + '="' + i + '" conflicts with v-model on the same element ' + "because the latter already expands to a value binding internally", t.rawAttrsMap[s]);
                }
            }
            var o = n || {};
            var u = o.lazy;
            var f = o.number;
            var l = o.trim;
            var c = !u && r !== "range";
            var h = u ? "change" : r === "range" ? us : "input";
            var d = "$event.target.value";
            if (l) {
                d = "$event.target.value.trim()";
            }
            if (f) {
                d = "_n(" + d + ")";
            }
            var p = Ga(e, d);
            if (c) {
                p = "if($event.target.composing)return;" + p;
            }
            La(t, "value", "(" + e + ")");
            Va(t, h, p, null, true);
            if (l || f) {
                Va(t, "blur", "$forceUpdate()");
            }
        }
        /*  */
        // normalize v-model event tokens that can only be determined at runtime.
        // it's important to place the event as the first in the array because
        // the whole point is ensuring the v-model callback gets called before
        // user-attached handlers.
        function vs(t) {
            /* istanbul ignore if */
            if (a(t[us])) {
                // IE input[type=range] only supports `change` event
                var e = rt ? "change" : "input";
                t[e] = [].concat(t[us], t[e] || []);
                delete t[us];
            }
            // This was originally intended to fix #4521 but no longer necessary
            // after 2.5. Keeping it for backwards compat with generated code from < 2.4
            /* istanbul ignore if */
            if (a(t[fs])) {
                t.change = [].concat(t[fs], t.change || []);
                delete t[fs];
            }
        }
        var ms;
        function ys(t, e, n) {
            var r = ms;
            // save current target element in closure
            return function i() {
                var a = e.apply(null, arguments);
                if (a !== null) {
                    xs(t, i, n, r);
                }
            };
        }
        // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
        // implementation and does not fire microtasks in between event propagation, so
        // safe to exclude.
        var gs = Te && !(lt && Number(lt[1]) <= 53);
        function bs(t, e, n, r) {
            // async edge case #6566: inner click event triggers patch, event handler
            // attached to outer element during patch, and triggered again. This
            // happens because browsers fire microtask ticks between event propagation.
            // the solution is simple: we save the timestamp when a handler is attached,
            // and the handler would only fire if the event passed to it was fired
            // AFTER it was attached.
            if (gs) {
                var i = Or;
                var a = e;
                e = a._wrapper = function(t) {
                    if (// no bubbling, should always fire.
                    // this is just a safety net in case event.timeStamp is unreliable in
                    // certain weird environments...
                    t.target === t.currentTarget || // event is fired after handler attachment
                    t.timeStamp >= i || // bail for environments that have buggy event.timeStamp implementations
                    // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
                    // #9681 QtWebEngine event.timeStamp is negative value
                    t.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
                    // electron/nw.js app, since event.timeStamp will be using a different
                    // starting reference
                    t.target.ownerDocument !== document) {
                        return a.apply(this, arguments);
                    }
                };
            }
            ms.addEventListener(t, e, ht ? {
                capture: n,
                passive: r
            } : n);
        }
        function xs(t, e, n, r) {
            (r || ms).removeEventListener(t, e._wrapper || e, n);
        }
        function ws(t, e) {
            if (i(t.data.on) && i(e.data.on)) {
                return;
            }
            var n = e.data.on || {};
            var r = t.data.on || {};
            ms = e.elm;
            vs(n);
            en(n, r, bs, xs, ys, e.context);
            ms = undefined;
        }
        var _s = {
            create: ws,
            update: ws
        };
        /*  */
        var Cs;
        function ks(t, e) {
            if (i(t.data.domProps) && i(e.data.domProps)) {
                return;
            }
            var n, r;
            var s = e.elm;
            var o = t.data.domProps || {};
            var u = e.data.domProps || {};
            // clone observed objects, as the user probably wants to mutate it
            if (a(u.__ob__)) {
                u = e.data.domProps = j({}, u);
            }
            for (n in o) {
                if (!(n in u)) {
                    s[n] = "";
                }
            }
            for (n in u) {
                r = u[n];
                // ignore children if the node has textContent or innerHTML,
                // as these will throw away existing DOM nodes and cause removal errors
                // on subsequent patches (#3360)
                if (n === "textContent" || n === "innerHTML") {
                    if (e.children) {
                        e.children.length = 0;
                    }
                    if (r === o[n]) {
                        continue;
                    }
                    // #6601 work around Chrome version <= 55 bug where single textNode
                    // replaced by innerHTML/textContent retains its parentNode property
                    if (s.childNodes.length === 1) {
                        s.removeChild(s.childNodes[0]);
                    }
                }
                if (n === "value" && s.tagName !== "PROGRESS") {
                    // store value as _value as well since
                    // non-string values will be stringified
                    s._value = r;
                    // avoid resetting cursor position when value is the same
                    var f = i(r) ? "" : String(r);
                    if (As(s, f)) {
                        s.value = f;
                    }
                } else if (n === "innerHTML" && Hi(s.tagName) && i(s.innerHTML)) {
                    // IE doesn't support innerHTML for SVG elements
                    Cs = Cs || document.createElement("div");
                    Cs.innerHTML = "<svg>" + r + "</svg>";
                    var l = Cs.firstChild;
                    while (s.firstChild) {
                        s.removeChild(s.firstChild);
                    }
                    while (l.firstChild) {
                        s.appendChild(l.firstChild);
                    }
                } else if (// skip the update if old and new VDOM state is the same.
                // `value` is handled separately because the DOM value may be temporarily
                // out of sync with VDOM state due to focus, composition and modifiers.
                // This  #4521 by skipping the unnecesarry `checked` update.
                r !== o[n]) {
                    // some property updates can throw
                    // e.g. `value` on <progress> w/ non-finite value
                    try {
                        s[n] = r;
                    } catch (t) {}
                }
            }
        }
        // check platforms/web/util/attrs.js acceptValue
        function As(t, e) {
            return !t.composing && (t.tagName === "OPTION" || $s(t, e) || Ss(t, e));
        }
        function $s(t, e) {
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
        function Ss(t, e) {
            var n = t.value;
            var r = t._vModifiers;
            // injected by v-model runtime
            if (a(r)) {
                if (r.number) {
                    return y(n) !== y(e);
                }
                if (r.trim) {
                    return n.trim() !== e.trim();
                }
            }
            return n !== e;
        }
        var Ms = {
            create: ks,
            update: ks
        };
        /*  */
        var Ts = k(function(t) {
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
        function Ns(t) {
            var e = Os(t.style);
            // static style is pre-processed into an object during compilation
            // and is always a fresh object, so it's safe to merge into it
            return t.staticStyle ? j(t.staticStyle, e) : e;
        }
        // normalize possible array / string values into Object
        function Os(t) {
            if (Array.isArray(t)) {
                return I(t);
            }
            if (typeof t === "string") {
                return Ts(t);
            }
            return t;
        }
        /**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
        function Ps(t, e) {
            var n = {};
            var r;
            if (e) {
                var i = t;
                while (i.componentInstance) {
                    i = i.componentInstance._vnode;
                    if (i && i.data && (r = Ns(i.data))) {
                        j(n, r);
                    }
                }
            }
            if (r = Ns(t.data)) {
                j(n, r);
            }
            var a = t;
            while (a = a.parent) {
                if (a.data && (r = Ns(a.data))) {
                    j(n, r);
                }
            }
            return n;
        }
        /*  */
        var Es = /^--/;
        var js = /\s*!important$/;
        var Is = function(t, e, n) {
            /* istanbul ignore if */
            if (Es.test(e)) {
                t.style.setProperty(e, n);
            } else if (js.test(n)) {
                t.style.setProperty(T(e), n.replace(js, ""), "important");
            } else {
                var r = Ds(e);
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
        var Ls = [ "Webkit", "Moz", "ms" ];
        var Fs;
        var Ds = k(function(t) {
            Fs = Fs || document.createElement("div").style;
            t = $(t);
            if (t !== "filter" && t in Fs) {
                return t;
            }
            var e = t.charAt(0).toUpperCase() + t.slice(1);
            for (var n = 0; n < Ls.length; n++) {
                var r = Ls[n] + e;
                if (r in Fs) {
                    return r;
                }
            }
        });
        function Rs(t, e) {
            var n = e.data;
            var r = t.data;
            if (i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style)) {
                return;
            }
            var s, o;
            var u = e.elm;
            var f = r.staticStyle;
            var l = r.normalizedStyle || r.style || {};
            // if static style exists, stylebinding already merged into it when doing normalizeStyleData
            var c = f || l;
            var h = Os(e.data.style) || {};
            // store normalized style under a different key for next diff
            // make sure to clone it if it's reactive, since the user likely wants
            // to mutate it.
            e.data.normalizedStyle = a(h.__ob__) ? j({}, h) : h;
            var d = Ps(e, true);
            for (o in c) {
                if (i(d[o])) {
                    Is(u, o, "");
                }
            }
            for (o in d) {
                s = d[o];
                if (s !== c[o]) {
                    // ie9 setting to null has no effect, must use empty string
                    Is(u, o, s == null ? "" : s);
                }
            }
        }
        var Bs = {
            create: Rs,
            update: Rs
        };
        /*  */
        var Vs = /\s+/;
        /**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
        function Hs(t, e) {
            /* istanbul ignore if */
            if (!e || !(e = e.trim())) {
                return;
            }
            /* istanbul ignore else */
            if (t.classList) {
                if (e.indexOf(" ") > -1) {
                    e.split(Vs).forEach(function(e) {
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
        function zs(t, e) {
            /* istanbul ignore if */
            if (!e || !(e = e.trim())) {
                return;
            }
            /* istanbul ignore else */
            if (t.classList) {
                if (e.indexOf(" ") > -1) {
                    e.split(Vs).forEach(function(e) {
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
        function Us(t) {
            if (!t) {
                return;
            }
            /* istanbul ignore else */
            if (typeof t === "object") {
                var e = {};
                if (t.css !== false) {
                    j(e, Xs(t.name || "v"));
                }
                j(e, t);
                return e;
            } else if (typeof t === "string") {
                return Xs(t);
            }
        }
        var Xs = k(function(t) {
            return {
                enterClass: t + "-enter",
                enterToClass: t + "-enter-to",
                enterActiveClass: t + "-enter-active",
                leaveClass: t + "-leave",
                leaveToClass: t + "-leave-to",
                leaveActiveClass: t + "-leave-active"
            };
        });
        var qs = Q && !it;
        var Ys = "transition";
        var Gs = "animation";
        // Transition property/event sniffing
        var Js = "transition";
        var Ws = "transitionend";
        var Ks = "animation";
        var Zs = "animationend";
        if (qs) {
            /* istanbul ignore if */
            if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
                Js = "WebkitTransition";
                Ws = "webkitTransitionEnd";
            }
            if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
                Ks = "WebkitAnimation";
                Zs = "webkitAnimationEnd";
            }
        }
        // binding to window is necessary to make hot reload work in IE in strict mode
        var Qs = Q ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : /* istanbul ignore next */ function(t) {
            return t();
        };
        function to(t) {
            Qs(function() {
                Qs(t);
            });
        }
        function eo(t, e) {
            var n = t._transitionClasses || (t._transitionClasses = []);
            if (n.indexOf(e) < 0) {
                n.push(e);
                Hs(t, e);
            }
        }
        function no(t, e) {
            if (t._transitionClasses) {
                w(t._transitionClasses, e);
            }
            zs(t, e);
        }
        function ro(t, e, n) {
            var r = ao(t, e);
            var i = r.type;
            var a = r.timeout;
            var s = r.propCount;
            if (!i) {
                return n();
            }
            var o = i === Ys ? Ws : Zs;
            var u = 0;
            var f = function() {
                t.removeEventListener(o, l);
                n();
            };
            var l = function(e) {
                if (e.target === t) {
                    if (++u >= s) {
                        f();
                    }
                }
            };
            setTimeout(function() {
                if (u < s) {
                    f();
                }
            }, a + 1);
            t.addEventListener(o, l);
        }
        var io = /\b(transform|all)(,|$)/;
        function ao(t, e) {
            var n = window.getComputedStyle(t);
            // JSDOM may return undefined for transition properties
            var r = (n[Js + "Delay"] || "").split(", ");
            var i = (n[Js + "Duration"] || "").split(", ");
            var a = so(r, i);
            var s = (n[Ks + "Delay"] || "").split(", ");
            var o = (n[Ks + "Duration"] || "").split(", ");
            var u = so(s, o);
            var f;
            var l = 0;
            var c = 0;
            /* istanbul ignore if */
            if (e === Ys) {
                if (a > 0) {
                    f = Ys;
                    l = a;
                    c = i.length;
                }
            } else if (e === Gs) {
                if (u > 0) {
                    f = Gs;
                    l = u;
                    c = o.length;
                }
            } else {
                l = Math.max(a, u);
                f = l > 0 ? a > u ? Ys : Gs : null;
                c = f ? f === Ys ? i.length : o.length : 0;
            }
            var h = f === Ys && io.test(n[Js + "Property"]);
            return {
                type: f,
                timeout: l,
                propCount: c,
                hasTransform: h
            };
        }
        function so(t, e) {
            /* istanbul ignore next */
            while (t.length < e.length) {
                t = t.concat(t);
            }
            return Math.max.apply(null, e.map(function(e, n) {
                return oo(e) + oo(t[n]);
            }));
        }
        // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
        // in a locale-dependent way, using a comma instead of a dot.
        // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
        // as a floor function) causing unexpected behaviors
        function oo(t) {
            return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
        }
        /*  */
        function uo(t, e) {
            var n = t.elm;
            // call leave callback now
            if (a(n._leaveCb)) {
                n._leaveCb.cancelled = true;
                n._leaveCb();
            }
            var r = Us(t.data.transition);
            if (i(r)) {
                return;
            }
            /* istanbul ignore if */
            if (a(n._enterCb) || n.nodeType !== 1) {
                return;
            }
            var s = r.css;
            var o = r.type;
            var u = r.enterClass;
            var l = r.enterToClass;
            var c = r.enterActiveClass;
            var h = r.appearClass;
            var d = r.appearToClass;
            var p = r.appearActiveClass;
            var v = r.beforeEnter;
            var m = r.enter;
            var g = r.afterEnter;
            var b = r.enterCancelled;
            var x = r.beforeAppear;
            var w = r.appear;
            var _ = r.afterAppear;
            var C = r.appearCancelled;
            var k = r.duration;
            // activeInstance will always be the <transition> component managing this
            // transition. One edge case to check is when the <transition> is placed
            // as the root node of a child component. In that case we need to check
            // <transition>'s parent for appear check.
            var A = cr;
            var $ = cr.$vnode;
            while ($ && $.parent) {
                A = $.context;
                $ = $.parent;
            }
            var S = !A._isMounted || !t.isRootInsert;
            if (S && !w && w !== "") {
                return;
            }
            var M = S && h ? h : u;
            var T = S && p ? p : c;
            var N = S && d ? d : l;
            var O = S ? x || v : v;
            var P = S ? typeof w === "function" ? w : m : m;
            var E = S ? _ || g : g;
            var j = S ? C || b : b;
            var I = y(f(k) ? k.enter : k);
            if ("development" !== "production" && I != null) {
                lo(I, "enter", t);
            }
            var L = s !== false && !it;
            var F = ho(P);
            var D = n._enterCb = H(function() {
                if (L) {
                    no(n, N);
                    no(n, T);
                }
                if (D.cancelled) {
                    if (L) {
                        no(n, M);
                    }
                    j && j(n);
                } else {
                    E && E(n);
                }
                n._enterCb = null;
            });
            if (!t.data.show) {
                // remove pending leave element on enter by injecting an insert hook
                nn(t, "insert", function() {
                    var e = n.parentNode;
                    var r = e && e._pending && e._pending[t.key];
                    if (r && r.tag === t.tag && r.elm._leaveCb) {
                        r.elm._leaveCb();
                    }
                    P && P(n, D);
                });
            }
            // start enter transition
            O && O(n);
            if (L) {
                eo(n, M);
                eo(n, T);
                to(function() {
                    no(n, M);
                    if (!D.cancelled) {
                        eo(n, N);
                        if (!F) {
                            if (co(I)) {
                                setTimeout(D, I);
                            } else {
                                ro(n, o, D);
                            }
                        }
                    }
                });
            }
            if (t.data.show) {
                e && e();
                P && P(n, D);
            }
            if (!L && !F) {
                D();
            }
        }
        function fo(t, e) {
            var n = t.elm;
            // call enter callback now
            if (a(n._enterCb)) {
                n._enterCb.cancelled = true;
                n._enterCb();
            }
            var r = Us(t.data.transition);
            if (i(r) || n.nodeType !== 1) {
                return e();
            }
            /* istanbul ignore if */
            if (a(n._leaveCb)) {
                return;
            }
            var s = r.css;
            var o = r.type;
            var u = r.leaveClass;
            var l = r.leaveToClass;
            var c = r.leaveActiveClass;
            var h = r.beforeLeave;
            var d = r.leave;
            var p = r.afterLeave;
            var v = r.leaveCancelled;
            var m = r.delayLeave;
            var g = r.duration;
            var b = s !== false && !it;
            var x = ho(d);
            var w = y(f(g) ? g.leave : g);
            if ("development" !== "production" && a(w)) {
                lo(w, "leave", t);
            }
            var _ = n._leaveCb = H(function() {
                if (n.parentNode && n.parentNode._pending) {
                    n.parentNode._pending[t.key] = null;
                }
                if (b) {
                    no(n, l);
                    no(n, c);
                }
                if (_.cancelled) {
                    if (b) {
                        no(n, u);
                    }
                    v && v(n);
                } else {
                    e();
                    p && p(n);
                }
                n._leaveCb = null;
            });
            if (m) {
                m(C);
            } else {
                C();
            }
            function C() {
                // the delayed leave may have already been cancelled
                if (_.cancelled) {
                    return;
                }
                // record leaving element
                if (!t.data.show && n.parentNode) {
                    (n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t;
                }
                h && h(n);
                if (b) {
                    eo(n, u);
                    eo(n, c);
                    to(function() {
                        no(n, u);
                        if (!_.cancelled) {
                            eo(n, l);
                            if (!x) {
                                if (co(w)) {
                                    setTimeout(_, w);
                                } else {
                                    ro(n, o, _);
                                }
                            }
                        }
                    });
                }
                d && d(n, _);
                if (!b && !x) {
                    _();
                }
            }
        }
        // only used in dev mode
        function lo(t, e, n) {
            if (typeof t !== "number") {
                xt("<transition> explicit " + e + " duration is not a valid number - " + "got " + JSON.stringify(t) + ".", n.context);
            } else if (isNaN(t)) {
                xt("<transition> explicit " + e + " duration is NaN - " + "the duration expression might be incorrect.", n.context);
            }
        }
        function co(t) {
            return typeof t === "number" && !isNaN(t);
        }
        /**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
        function ho(t) {
            if (i(t)) {
                return false;
            }
            var e = t.fns;
            if (a(e)) {
                // invoker
                return ho(Array.isArray(e) ? e[0] : e);
            } else {
                return (t._length || t.length) > 1;
            }
        }
        function po(t, e) {
            if (e.data.show !== true) {
                uo(e);
            }
        }
        var vo = Q ? {
            create: po,
            activate: po,
            remove: function t(e, n) {
                /* istanbul ignore else */
                if (e.data.show !== true) {
                    fo(e, n);
                } else {
                    n();
                }
            }
        } : {};
        var mo = [ Ma, Na, _s, Ms, Bs, vo ];
        /*  */
        // the directive module should be applied last, after all
        // built-in modules have been applied.
        var yo = mo.concat(ka);
        var go = ma({
            nodeOps: ua,
            modules: yo
        });
        /**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */
        /* istanbul ignore if */
        if (it) {
            // http://www.matts411.com/post/internet-explorer-9-oninput/
            document.addEventListener("selectionchange", function() {
                var t = document.activeElement;
                if (t && t.vmodel) {
                    $o(t, "input");
                }
            });
        }
        var bo = {
            inserted: function t(e, n, r, i) {
                if (r.tag === "select") {
                    // #6903
                    if (i.elm && !i.elm._vOptions) {
                        nn(r, "postpatch", function() {
                            bo.componentUpdated(e, n, r);
                        });
                    } else {
                        xo(e, n, r.context);
                    }
                    e._vOptions = [].map.call(e.options, Co);
                } else if (r.tag === "textarea" || Gi(e.type)) {
                    e._vModifiers = n.modifiers;
                    if (!n.modifiers.lazy) {
                        e.addEventListener("compositionstart", ko);
                        e.addEventListener("compositionend", Ao);
                        // Safari < 10.2 & UIWebView doesn't fire compositionend when
                        // switching focus before confirming composition choice
                        // this also fixes the issue where some browsers e.g. iOS Chrome
                        // fires "change" instead of "input" on autocomplete.
                        e.addEventListener("change", Ao);
                        /* istanbul ignore if */
                        if (it) {
                            e.vmodel = true;
                        }
                    }
                }
            },
            componentUpdated: function t(e, n, r) {
                if (r.tag === "select") {
                    xo(e, n, r.context);
                    // in case the options rendered by v-for have changed,
                    // it's possible that the value is out-of-sync with the rendered options.
                    // detect such cases and filter out values that no longer has a matching
                    // option in the DOM.
                    var i = e._vOptions;
                    var a = e._vOptions = [].map.call(e.options, Co);
                    if (a.some(function(t, e) {
                        return !B(t, i[e]);
                    })) {
                        // trigger change event if
                        // no matching option found for at least one value
                        var s = e.multiple ? n.value.some(function(t) {
                            return _o(t, a);
                        }) : n.value !== n.oldValue && _o(n.value, a);
                        if (s) {
                            $o(e, "change");
                        }
                    }
                }
            }
        };
        function xo(t, e, n) {
            wo(t, e, n);
            /* istanbul ignore if */
            if (rt || at) {
                setTimeout(function() {
                    wo(t, e, n);
                }, 0);
            }
        }
        function wo(t, e, n) {
            var r = e.value;
            var i = t.multiple;
            if (i && !Array.isArray(r)) {
                "development" !== "production" && xt('<select multiple v-model="' + e.expression + '"> ' + "expects an Array value for its binding, but got " + Object.prototype.toString.call(r).slice(8, -1), n);
                return;
            }
            var a, s;
            for (var o = 0, u = t.options.length; o < u; o++) {
                s = t.options[o];
                if (i) {
                    a = V(r, Co(s)) > -1;
                    if (s.selected !== a) {
                        s.selected = a;
                    }
                } else {
                    if (B(Co(s), r)) {
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
        function _o(t, e) {
            return e.every(function(e) {
                return !B(e, t);
            });
        }
        function Co(t) {
            return "_value" in t ? t._value : t.value;
        }
        function ko(t) {
            t.target.composing = true;
        }
        function Ao(t) {
            // prevent triggering an input event for no reason
            if (!t.target.composing) {
                return;
            }
            t.target.composing = false;
            $o(t.target, "input");
        }
        function $o(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, true, true);
            t.dispatchEvent(n);
        }
        /*  */
        // recursively search for possible transition defined inside the component root
        function So(t) {
            return t.componentInstance && (!t.data || !t.data.transition) ? So(t.componentInstance._vnode) : t;
        }
        var Mo = {
            bind: function t(e, n, r) {
                var i = n.value;
                r = So(r);
                var a = r.data && r.data.transition;
                var s = e.__vOriginalDisplay = e.style.display === "none" ? "" : e.style.display;
                if (i && a) {
                    r.data.show = true;
                    uo(r, function() {
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
                if (!i === !a) {
                    return;
                }
                r = So(r);
                var s = r.data && r.data.transition;
                if (s) {
                    r.data.show = true;
                    if (i) {
                        uo(r, function() {
                            e.style.display = e.__vOriginalDisplay;
                        });
                    } else {
                        fo(r, function() {
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
        var To = {
            model: bo,
            show: Mo
        };
        /*  */
        var No = {
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
        function Oo(t) {
            var e = t && t.componentOptions;
            if (e && e.Ctor.options.abstract) {
                return Oo(rr(e.children));
            } else {
                return t;
            }
        }
        function Po(t) {
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
                e[$(a)] = i[a];
            }
            return e;
        }
        function Eo(t, e) {
            if (/\d-keep-alive$/.test(e.tag)) {
                return t("keep-alive", {
                    props: e.componentOptions.propsData
                });
            }
        }
        function jo(t) {
            while (t = t.parent) {
                if (t.data.transition) {
                    return true;
                }
            }
        }
        function Io(t, e) {
            return e.key === t.key && e.tag === t.tag;
        }
        var Lo = function(t) {
            return t.tag || nr(t);
        };
        var Fo = function(t) {
            return t.name === "show";
        };
        var Do = {
            name: "transition",
            props: No,
            abstract: true,
            render: function t(e) {
                var n = this;
                var r = this.$slots.default;
                if (!r) {
                    return;
                }
                // filter out text nodes (possible whitespaces)
                r = r.filter(Lo);
                /* istanbul ignore if */
                if (!r.length) {
                    return;
                }
                // warn multiple elements
                if ("development" !== "production" && r.length > 1) {
                    xt("<transition> can only be used on a single element. Use " + "<transition-group> for lists.", this.$parent);
                }
                var i = this.mode;
                // warn invalid mode
                if ("development" !== "production" && i && i !== "in-out" && i !== "out-in") {
                    xt("invalid <transition> mode: " + i, this.$parent);
                }
                var a = r[0];
                // if this is a component root node and the component's
                // parent container node also has transition, skip.
                if (jo(this.$vnode)) {
                    return a;
                }
                // apply transition data to child
                // use getRealChild() to ignore abstract components e.g. keep-alive
                var s = Oo(a);
                /* istanbul ignore if */
                if (!s) {
                    return a;
                }
                if (this._leaving) {
                    return Eo(e, a);
                }
                // ensure a key that is unique to the vnode type and to this transition
                // component instance. This key will be used to remove pending leaving nodes
                // during entering.
                var o = "__transition-" + this._uid + "-";
                s.key = s.key == null ? s.isComment ? o + "comment" : o + s.tag : u(s.key) ? String(s.key).indexOf(o) === 0 ? s.key : o + s.key : s.key;
                var f = (s.data || (s.data = {})).transition = Po(this);
                var l = this._vnode;
                var c = Oo(l);
                // mark v-show
                // so that the transition module can hand over the control to the directive
                if (s.data.directives && s.data.directives.some(Fo)) {
                    s.data.show = true;
                }
                if (c && c.data && !Io(s, c) && !nr(c) && // #6687 component root is a comment node
                !(c.componentInstance && c.componentInstance._vnode.isComment)) {
                    // replace old child transition data with fresh one
                    // important for dynamic transitions!
                    var h = c.data.transition = j({}, f);
                    // handle transition mode
                    if (i === "out-in") {
                        // return placeholder node and queue update when leave finishes
                        this._leaving = true;
                        nn(h, "afterLeave", function() {
                            n._leaving = false;
                            n.$forceUpdate();
                        });
                        return Eo(e, a);
                    } else if (i === "in-out") {
                        if (nr(s)) {
                            return l;
                        }
                        var d;
                        var p = function() {
                            d();
                        };
                        nn(f, "afterEnter", p);
                        nn(f, "enterCancelled", p);
                        nn(h, "delayLeave", function(t) {
                            d = t;
                        });
                    }
                }
                return a;
            }
        };
        /*  */
        var Ro = j({
            tag: String,
            moveClass: String
        }, No);
        delete Ro.mode;
        var Bo = {
            props: Ro,
            beforeMount: function t() {
                var e = this;
                var n = this._update;
                this._update = function(t, r) {
                    var i = dr(e);
                    // force removing pass
                    e.__patch__(e._vnode, e.kept, false, // hydrating
                    true);
                    e._vnode = e.kept;
                    i();
                    n.call(e, t, r);
                };
            },
            render: function t(e) {
                var n = this.tag || this.$vnode.data.tag || "span";
                var r = Object.create(null);
                var i = this.prevChildren = this.children;
                var a = this.$slots.default || [];
                var s = this.children = [];
                var o = Po(this);
                for (var u = 0; u < a.length; u++) {
                    var f = a[u];
                    if (f.tag) {
                        if (f.key != null && String(f.key).indexOf("__vlist") !== 0) {
                            s.push(f);
                            r[f.key] = f;
                            (f.data || (f.data = {})).transition = o;
                        } else if (true) {
                            var l = f.componentOptions;
                            var c = l ? l.Ctor.options.name || l.tag || "" : f.tag;
                            xt("<transition-group> children must be keyed: <" + c + ">");
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
            updated: function t() {
                var e = this.prevChildren;
                var n = this.moveClass || (this.name || "v") + "-move";
                if (!e.length || !this.hasMove(e[0].elm, n)) {
                    return;
                }
                // we divide the work into three loops to avoid mixing DOM reads and writes
                // in each iteration - which helps prevent layout thrashing.
                e.forEach(Vo);
                e.forEach(Ho);
                e.forEach(zo);
                // force reflow to put everything in position
                // assign to this to avoid being removed in tree-shaking
                // $flow-disable-line
                this._reflow = document.body.offsetHeight;
                e.forEach(function(t) {
                    if (t.data.moved) {
                        var e = t.elm;
                        var r = e.style;
                        eo(e, n);
                        r.transform = r.WebkitTransform = r.transitionDuration = "";
                        e.addEventListener(Ws, e._moveCb = function t(r) {
                            if (r && r.target !== e) {
                                return;
                            }
                            if (!r || /transform$/.test(r.propertyName)) {
                                e.removeEventListener(Ws, t);
                                e._moveCb = null;
                                no(e, n);
                            }
                        });
                    }
                });
            },
            methods: {
                hasMove: function t(e, n) {
                    /* istanbul ignore if */
                    if (!qs) {
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
                            zs(r, t);
                        });
                    }
                    Hs(r, n);
                    r.style.display = "none";
                    this.$el.appendChild(r);
                    var i = ao(r);
                    this.$el.removeChild(r);
                    return this._hasMove = i.hasTransform;
                }
            }
        };
        function Vo(t) {
            /* istanbul ignore if */
            if (t.elm._moveCb) {
                t.elm._moveCb();
            }
            /* istanbul ignore if */
            if (t.elm._enterCb) {
                t.elm._enterCb();
            }
        }
        function Ho(t) {
            t.data.newPos = t.elm.getBoundingClientRect();
        }
        function zo(t) {
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
        var Uo = {
            Transition: Do,
            TransitionGroup: Bo
        };
        /*  */
        // install platform specific utils
        oi.config.mustUseProp = ki;
        oi.config.isReservedTag = Ui;
        oi.config.isReservedAttr = _i;
        oi.config.getTagNamespace = Xi;
        oi.config.isUnknownElement = Yi;
        // install platform runtime directives & components
        j(oi.options.directives, To);
        j(oi.options.components, Uo);
        // install platform patch function
        oi.prototype.__patch__ = Q ? go : L;
        // public mount method
        oi.prototype.$mount = function(t, e) {
            t = t && Q ? Ji(t) : undefined;
            return mr(this, t, e);
        };
        // devtools global hook
        /* istanbul ignore next */
        if (Q) {
            setTimeout(function() {
                if (q.devtools) {
                    if (mt) {
                        mt.emit("init", oi);
                    } else if (true) {
                        console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\n" + "https://github.com/vuejs/vue-devtools");
                    }
                }
                if ("development" !== "production" && "development" !== "test" && q.productionTip !== false && typeof console !== "undefined") {
                    console[console.info ? "info" : "log"]("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
                }
            }, 0);
        }
        /*  */
        var Xo = /\{\{((?:.|\r?\n)+?)\}\}/g;
        var qo = /[-.*+?^${}()|[\]\/\\]/g;
        var Yo = k(function(t) {
            var e = t[0].replace(qo, "\\$&");
            var n = t[1].replace(qo, "\\$&");
            return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
        });
        function Go(t, e) {
            var n = e ? Yo(e) : Xo;
            if (!n.test(t)) {
                return;
            }
            var r = [];
            var i = [];
            var a = n.lastIndex = 0;
            var s, o, u;
            while (s = n.exec(t)) {
                o = s.index;
                // push text token
                if (o > a) {
                    i.push(u = t.slice(a, o));
                    r.push(JSON.stringify(u));
                }
                // tag token
                var f = Pa(s[1].trim());
                r.push("_s(" + f + ")");
                i.push({
                    "@binding": f
                });
                a = o + s[0].length;
            }
            if (a < t.length) {
                i.push(u = t.slice(a));
                r.push(JSON.stringify(u));
            }
            return {
                expression: r.join("+"),
                tokens: i
            };
        }
        /*  */
        function Jo(t, e) {
            var n = e.warn || ja;
            var r = Ua(t, "class");
            if ("development" !== "production" && r) {
                var i = Go(r, e.delimiters);
                if (i) {
                    n('class="' + r + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div class="{{ val }}">, use <div :class="val">.', t.rawAttrsMap["class"]);
                }
            }
            if (r) {
                t.staticClass = JSON.stringify(r);
            }
            var a = za(t, "class", false);
            if (a) {
                t.classBinding = a;
            }
        }
        function Wo(t) {
            var e = "";
            if (t.staticClass) {
                e += "staticClass:" + t.staticClass + ",";
            }
            if (t.classBinding) {
                e += "class:" + t.classBinding + ",";
            }
            return e;
        }
        var Ko = {
            staticKeys: [ "staticClass" ],
            transformNode: Jo,
            genData: Wo
        };
        /*  */
        function Zo(t, e) {
            var n = e.warn || ja;
            var r = Ua(t, "style");
            if (r) {
                /* istanbul ignore if */
                if (true) {
                    var i = Go(r, e.delimiters);
                    if (i) {
                        n('style="' + r + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div style="{{ val }}">, use <div :style="val">.', t.rawAttrsMap["style"]);
                    }
                }
                t.staticStyle = JSON.stringify(Ts(r));
            }
            var a = za(t, "style", false);
            if (a) {
                t.styleBinding = a;
            }
        }
        function Qo(t) {
            var e = "";
            if (t.staticStyle) {
                e += "staticStyle:" + t.staticStyle + ",";
            }
            if (t.styleBinding) {
                e += "style:(" + t.styleBinding + "),";
            }
            return e;
        }
        var tu = {
            staticKeys: [ "staticStyle" ],
            transformNode: Zo,
            genData: Qo
        };
        /*  */
        var eu;
        var nu = {
            decode: function t(e) {
                eu = eu || document.createElement("div");
                eu.innerHTML = e;
                return eu.textContent;
            }
        };
        /*  */
        var ru = g("area,base,br,col,embed,frame,hr,img,input,isindex,keygen," + "link,meta,param,source,track,wbr");
        // Elements that you can, intentionally, leave open
        // (and which close themselves)
        var iu = g("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source");
        // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
        // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
        var au = g("address,article,aside,base,blockquote,body,caption,col,colgroup,dd," + "details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form," + "h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta," + "optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead," + "title,tr,track");
        /**
 * Not type-checking this file because it's mostly vendor code.
 */
        // Regular Expressions for parsing tags and attributes
        var su = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var ou = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
        var uu = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + Y.source + "]*";
        var fu = "((?:" + uu + "\\:)?" + uu + ")";
        var lu = new RegExp("^<" + fu);
        var cu = /^\s*(\/?)>/;
        var hu = new RegExp("^<\\/" + fu + "[^>]*>");
        var du = /^<!DOCTYPE [^>]+>/i;
        // #7298: escape - to avoid being pased as HTML comment when inlined in page
        var pu = /^<!\--/;
        var vu = /^<!\[/;
        // Special Elements (can contain anything)
        var mu = g("script,style,textarea", true);
        var yu = {};
        var gu = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n",
            "&#9;": "\t",
            "&#39;": "'"
        };
        var bu = /&(?:lt|gt|quot|amp|#39);/g;
        var xu = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;
        // #5992
        var wu = g("pre,textarea", true);
        var _u = function(t, e) {
            return t && wu(t) && e[0] === "\n";
        };
        function Cu(t, e) {
            var n = e ? xu : bu;
            return t.replace(n, function(t) {
                return gu[t];
            });
        }
        function ku(t, e) {
            var n = [];
            var r = e.expectHTML;
            var i = e.isUnaryTag || F;
            var a = e.canBeLeftOpenTag || F;
            var s = 0;
            var o, u;
            while (t) {
                o = t;
                // Make sure we're not in a plaintext content element like script/style
                if (!u || !mu(u)) {
                    var f = t.indexOf("<");
                    if (f === 0) {
                        // Comment:
                        if (pu.test(t)) {
                            var l = t.indexOf("--\x3e");
                            if (l >= 0) {
                                if (e.shouldKeepComment) {
                                    e.comment(t.substring(4, l), s, s + l + 3);
                                }
                                C(l + 3);
                                continue;
                            }
                        }
                        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
                        if (vu.test(t)) {
                            var c = t.indexOf("]>");
                            if (c >= 0) {
                                C(c + 2);
                                continue;
                            }
                        }
                        // Doctype:
                        var h = t.match(du);
                        if (h) {
                            C(h[0].length);
                            continue;
                        }
                        // End tag:
                        var d = t.match(hu);
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
                            if (_u(v.tagName, t)) {
                                C(1);
                            }
                            continue;
                        }
                    }
                    var m = void 0, y = void 0, g = void 0;
                    if (f >= 0) {
                        y = t.slice(f);
                        while (!hu.test(y) && !lu.test(y) && !pu.test(y) && !vu.test(y)) {
                            // < in plain text, be forgiving and treat it as text
                            g = y.indexOf("<", 1);
                            if (g < 0) {
                                break;
                            }
                            f += g;
                            y = t.slice(f);
                        }
                        m = t.substring(0, f);
                    }
                    if (f < 0) {
                        m = t;
                    }
                    if (m) {
                        C(m.length);
                    }
                    if (e.chars && m) {
                        e.chars(m, s - m.length, s);
                    }
                } else {
                    var b = 0;
                    var x = u.toLowerCase();
                    var w = yu[x] || (yu[x] = new RegExp("([\\s\\S]*?)(</" + x + "[^>]*>)", "i"));
                    var _ = t.replace(w, function(t, n, r) {
                        b = r.length;
                        if (!mu(x) && x !== "noscript") {
                            n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1");
                        }
                        if (_u(x, n)) {
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
                        e.warn('Mal-formatted tag at end of template: "' + t + '"', {
                            start: s + t.length
                        });
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
                var e = t.match(lu);
                if (e) {
                    var n = {
                        tagName: e[1],
                        attrs: [],
                        start: s
                    };
                    C(e[0].length);
                    var r, i;
                    while (!(r = t.match(cu)) && (i = t.match(ou) || t.match(su))) {
                        i.start = s;
                        C(i[0].length);
                        i.end = s;
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
                    if (u === "p" && au(s)) {
                        $(u);
                    }
                    if (a(s) && u === s) {
                        $(s);
                    }
                }
                var f = i(s) || !!o;
                var l = t.attrs.length;
                var c = new Array(l);
                for (var h = 0; h < l; h++) {
                    var d = t.attrs[h];
                    var p = d[3] || d[4] || d[5] || "";
                    var v = s === "a" && d[1] === "href" ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
                    c[h] = {
                        name: d[1],
                        value: Cu(p, v)
                    };
                    if ("development" !== "production" && e.outputSourceRange) {
                        c[h].start = d.start + d[0].match(/^\s*/).length;
                        c[h].end = d.end;
                    }
                }
                if (!f) {
                    n.push({
                        tag: s,
                        lowerCasedTag: s.toLowerCase(),
                        attrs: c,
                        start: t.start,
                        end: t.end
                    });
                    u = s;
                }
                if (e.start) {
                    e.start(s, c, f, t.start, t.end);
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
                // Find the closest opened tag of the same type
                if (t) {
                    o = t.toLowerCase();
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
                    for (var f = n.length - 1; f >= a; f--) {
                        if ("development" !== "production" && (f > a || !t) && e.warn) {
                            e.warn("tag <" + n[f].tag + "> has no matching end tag.", {
                                start: n[f].start,
                                end: n[f].end
                            });
                        }
                        if (e.end) {
                            e.end(n[f].tag, r, i);
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
        var Au = /^@|^v-on:/;
        var $u = /^v-|^@|^:/;
        var Su = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
        var Mu = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        var Tu = /^\(|\)$/g;
        var Nu = /^\[.*\]$/;
        var Ou = /:(.*)$/;
        var Pu = /^:|^\.|^v-bind:/;
        var Eu = /\.[^.\]]+(?=[^\]]*$)/g;
        var ju = /^v-slot(:|$)|^#/;
        var Iu = /[\r\n]/;
        var Lu = /\s+/g;
        var Fu = /[\s"'<>\/=]/;
        var Du = k(nu.decode);
        var Ru = "_empty_";
        // configurable state
        var Bu;
        var Vu;
        var Hu;
        var zu;
        var Uu;
        var Xu;
        var qu;
        var Yu;
        var Gu;
        function Ju(t, e, n) {
            return {
                type: 1,
                tag: t,
                attrsList: e,
                attrsMap: yf(e),
                rawAttrsMap: {},
                parent: n,
                children: []
            };
        }
        /**
 * Convert HTML string to AST.
 */
        function Wu(t, e) {
            Bu = e.warn || ja;
            Xu = e.isPreTag || F;
            qu = e.mustUseProp || F;
            Yu = e.getTagNamespace || F;
            var n = e.isReservedTag || F;
            Gu = function(t) {
                return !!t.component || !n(t.tag);
            };
            Hu = Ia(e.modules, "transformNode");
            zu = Ia(e.modules, "preTransformNode");
            Uu = Ia(e.modules, "postTransformNode");
            Vu = e.delimiters;
            var r = [];
            var i = e.preserveWhitespace !== false;
            var a = e.whitespace;
            var s;
            var o;
            var u = false;
            var f = false;
            var l = false;
            function c(t, e) {
                if (!l) {
                    l = true;
                    Bu(t, e);
                }
            }
            function h(t) {
                d(t);
                if (!u && !t.processed) {
                    t = Qu(t, e);
                }
                // tree management
                if (!r.length && t !== s) {
                    // allow root elements with v-if, v-else-if and v-else
                    if (s.if && (t.elseif || t.else)) {
                        if (true) {
                            p(t);
                        }
                        uf(s, {
                            exp: t.elseif,
                            block: t
                        });
                    } else if (true) {
                        c("Component template should contain exactly one root element. " + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.", {
                            start: t.start
                        });
                    }
                }
                if (o && !t.forbidden) {
                    if (t.elseif || t.else) {
                        sf(t, o);
                    } else {
                        if (t.slotScope) {
                            // scoped slot
                            // keep it in the children list so that v-else(-if) conditions can
                            // find it as the prev node.
                            var n = t.slotTarget || '"default"';
                            (o.scopedSlots || (o.scopedSlots = {}))[n] = t;
                        }
                        o.children.push(t);
                        t.parent = o;
                    }
                }
                // final children cleanup
                // filter out scoped slots
                t.children = t.children.filter(function(t) {
                    return !t.slotScope;
                });
                // remove trailing whitespace node again
                d(t);
                // check pre state
                if (t.pre) {
                    u = false;
                }
                if (Xu(t.tag)) {
                    f = false;
                }
                // apply post-transforms
                for (var i = 0; i < Uu.length; i++) {
                    Uu[i](t, e);
                }
            }
            function d(t) {
                // remove trailing whitespace node
                if (!f) {
                    var e;
                    while ((e = t.children[t.children.length - 1]) && e.type === 3 && e.text === " ") {
                        t.children.pop();
                    }
                }
            }
            function p(t) {
                if (t.tag === "slot" || t.tag === "template") {
                    c("Cannot use <" + t.tag + "> as component root element because it may " + "contain multiple nodes.", {
                        start: t.start
                    });
                }
                if (t.attrsMap.hasOwnProperty("v-for")) {
                    c("Cannot use v-for on stateful component root element because " + "it renders multiple elements.", t.rawAttrsMap["v-for"]);
                }
            }
            ku(t, {
                warn: Bu,
                expectHTML: e.expectHTML,
                isUnaryTag: e.isUnaryTag,
                canBeLeftOpenTag: e.canBeLeftOpenTag,
                shouldDecodeNewlines: e.shouldDecodeNewlines,
                shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
                shouldKeepComment: e.comments,
                outputSourceRange: e.outputSourceRange,
                start: function t(n, i, a, l, c) {
                    // check namespace.
                    // inherit parent ns if there is one
                    var d = o && o.ns || Yu(n);
                    // handle IE svg bug
                    /* istanbul ignore if */
                    if (rt && d === "svg") {
                        i = _f(i);
                    }
                    var v = Ju(n, i, o);
                    if (d) {
                        v.ns = d;
                    }
                    if (true) {
                        if (e.outputSourceRange) {
                            v.start = l;
                            v.end = c;
                            v.rawAttrsMap = v.attrsList.reduce(function(t, e) {
                                t[e.name] = e;
                                return t;
                            }, {});
                        }
                        i.forEach(function(t) {
                            if (Fu.test(t.name)) {
                                Bu("Invalid dynamic argument expression: attribute names cannot contain " + "spaces, quotes, <, >, / or =.", {
                                    start: t.start + t.name.indexOf("["),
                                    end: t.start + t.name.length
                                });
                            }
                        });
                    }
                    if (bf(v) && !vt()) {
                        v.forbidden = true;
                        "development" !== "production" && Bu("Templates should only be responsible for mapping the state to the " + "UI. Avoid placing tags with side-effects in your templates, such as " + "<" + n + ">" + ", as they will not be parsed.", {
                            start: v.start
                        });
                    }
                    // apply pre-transforms
                    for (var m = 0; m < zu.length; m++) {
                        v = zu[m](v, e) || v;
                    }
                    if (!u) {
                        Ku(v);
                        if (v.pre) {
                            u = true;
                        }
                    }
                    if (Xu(v.tag)) {
                        f = true;
                    }
                    if (u) {
                        Zu(v);
                    } else if (!v.processed) {
                        // structural directives
                        nf(v);
                        af(v);
                        ff(v);
                    }
                    if (!s) {
                        s = v;
                        if (true) {
                            p(s);
                        }
                    }
                    if (!a) {
                        o = v;
                        r.push(v);
                    } else {
                        h(v);
                    }
                },
                end: function t(n, i, a) {
                    var s = r[r.length - 1];
                    // pop stack
                    r.length -= 1;
                    o = r[r.length - 1];
                    if ("development" !== "production" && e.outputSourceRange) {
                        s.end = a;
                    }
                    h(s);
                },
                chars: function n(r, s, l) {
                    if (!o) {
                        if (true) {
                            if (r === t) {
                                c("Component template requires a root element, rather than just text.", {
                                    start: s
                                });
                            } else if (r = r.trim()) {
                                c('text "' + r + '" outside root element will be ignored.', {
                                    start: s
                                });
                            }
                        }
                        return;
                    }
                    // IE textarea placeholder bug
                    /* istanbul ignore if */
                    if (rt && o.tag === "textarea" && o.attrsMap.placeholder === r) {
                        return;
                    }
                    var h = o.children;
                    if (f || r.trim()) {
                        r = gf(o) ? r : Du(r);
                    } else if (!h.length) {
                        // remove the whitespace-only node right after an opening tag
                        r = "";
                    } else if (a) {
                        if (a === "condense") {
                            // in condense mode, remove the whitespace node if it contains
                            // line break, otherwise condense to a single space
                            r = Iu.test(r) ? "" : " ";
                        } else {
                            r = " ";
                        }
                    } else {
                        r = i ? " " : "";
                    }
                    if (r) {
                        if (!f && a === "condense") {
                            // condense consecutive whitespaces into single space
                            r = r.replace(Lu, " ");
                        }
                        var d;
                        var p;
                        if (!u && r !== " " && (d = Go(r, Vu))) {
                            p = {
                                type: 2,
                                expression: d.expression,
                                tokens: d.tokens,
                                text: r
                            };
                        } else if (r !== " " || !h.length || h[h.length - 1].text !== " ") {
                            p = {
                                type: 3,
                                text: r
                            };
                        }
                        if (p) {
                            if ("development" !== "production" && e.outputSourceRange) {
                                p.start = s;
                                p.end = l;
                            }
                            h.push(p);
                        }
                    }
                },
                comment: function t(n, r, i) {
                    // adding anyting as a sibling to the root node is forbidden
                    // comments should still be allowed, but ignored
                    if (o) {
                        var a = {
                            type: 3,
                            text: n,
                            isComment: true
                        };
                        if ("development" !== "production" && e.outputSourceRange) {
                            a.start = r;
                            a.end = i;
                        }
                        o.children.push(a);
                    }
                }
            });
            return s;
        }
        function Ku(t) {
            if (Ua(t, "v-pre") != null) {
                t.pre = true;
            }
        }
        function Zu(t) {
            var e = t.attrsList;
            var n = e.length;
            if (n) {
                var r = t.attrs = new Array(n);
                for (var i = 0; i < n; i++) {
                    r[i] = {
                        name: e[i].name,
                        value: JSON.stringify(e[i].value)
                    };
                    if (e[i].start != null) {
                        r[i].start = e[i].start;
                        r[i].end = e[i].end;
                    }
                }
            } else if (!t.pre) {
                // non root node in pre blocks with no attributes
                t.plain = true;
            }
        }
        function Qu(t, e) {
            tf(t);
            // determine whether this is a plain element after
            // removing structural attributes
            t.plain = !t.key && !t.scopedSlots && !t.attrsList.length;
            ef(t);
            lf(t);
            hf(t);
            df(t);
            for (var n = 0; n < Hu.length; n++) {
                t = Hu[n](t, e) || t;
            }
            pf(t);
            return t;
        }
        function tf(t) {
            var e = za(t, "key");
            if (e) {
                if (true) {
                    if (t.tag === "template") {
                        Bu("<template> cannot be keyed. Place the key on real elements instead.", Ha(t, "key"));
                    }
                    if (t.for) {
                        var n = t.iterator2 || t.iterator1;
                        var r = t.parent;
                        if (n && n === e && r && r.tag === "transition-group") {
                            Bu("Do not use v-for index as key on <transition-group> children, " + "this is the same as not using keys.", Ha(t, "key"), true);
                        }
                    }
                }
                t.key = e;
            }
        }
        function ef(t) {
            var e = za(t, "ref");
            if (e) {
                t.ref = e;
                t.refInFor = vf(t);
            }
        }
        function nf(t) {
            var e;
            if (e = Ua(t, "v-for")) {
                var n = rf(e);
                if (n) {
                    j(t, n);
                } else if (true) {
                    Bu("Invalid v-for expression: " + e, t.rawAttrsMap["v-for"]);
                }
            }
        }
        function rf(t) {
            var e = t.match(Su);
            if (!e) {
                return;
            }
            var n = {};
            n.for = e[2].trim();
            var r = e[1].trim().replace(Tu, "");
            var i = r.match(Mu);
            if (i) {
                n.alias = r.replace(Mu, "").trim();
                n.iterator1 = i[1].trim();
                if (i[2]) {
                    n.iterator2 = i[2].trim();
                }
            } else {
                n.alias = r;
            }
            return n;
        }
        function af(t) {
            var e = Ua(t, "v-if");
            if (e) {
                t.if = e;
                uf(t, {
                    exp: e,
                    block: t
                });
            } else {
                if (Ua(t, "v-else") != null) {
                    t.else = true;
                }
                var n = Ua(t, "v-else-if");
                if (n) {
                    t.elseif = n;
                }
            }
        }
        function sf(t, e) {
            var n = of(e.children);
            if (n && n.if) {
                uf(n, {
                    exp: t.elseif,
                    block: t
                });
            } else if (true) {
                Bu("v-" + (t.elseif ? 'else-if="' + t.elseif + '"' : "else") + " " + "used on element <" + t.tag + "> without corresponding v-if.", t.rawAttrsMap[t.elseif ? "v-else-if" : "v-else"]);
            }
        }
        function of(t) {
            var e = t.length;
            while (e--) {
                if (t[e].type === 1) {
                    return t[e];
                } else {
                    if ("development" !== "production" && t[e].text !== " ") {
                        Bu('text "' + t[e].text.trim() + '" between v-if and v-else(-if) ' + "will be ignored.", t[e]);
                    }
                    t.pop();
                }
            }
        }
        function uf(t, e) {
            if (!t.ifConditions) {
                t.ifConditions = [];
            }
            t.ifConditions.push(e);
        }
        function ff(t) {
            var e = Ua(t, "v-once");
            if (e != null) {
                t.once = true;
            }
        }
        // handle content being passed to a component as slot,
        // e.g. <template slot="xxx">, <div slot-scope="xxx">
        function lf(t) {
            var e;
            if (t.tag === "template") {
                e = Ua(t, "scope");
                /* istanbul ignore if */
                if ("development" !== "production" && e) {
                    Bu('the "scope" attribute for scoped slots have been deprecated and ' + 'replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ' + "can also be used on plain elements in addition to <template> to " + "denote scoped slots.", t.rawAttrsMap["scope"], true);
                }
                t.slotScope = e || Ua(t, "slot-scope");
            } else if (e = Ua(t, "slot-scope")) {
                /* istanbul ignore if */
                if ("development" !== "production" && t.attrsMap["v-for"]) {
                    Bu("Ambiguous combined usage of slot-scope and v-for on <" + t.tag + "> " + "(v-for takes higher priority). Use a wrapper <template> for the " + "scoped slot to make it clearer.", t.rawAttrsMap["slot-scope"], true);
                }
                t.slotScope = e;
            }
            // slot="xxx"
            var n = za(t, "slot");
            if (n) {
                t.slotTarget = n === '""' ? '"default"' : n;
                t.slotTargetDynamic = !!(t.attrsMap[":slot"] || t.attrsMap["v-bind:slot"]);
                // preserve slot as an attribute for native shadow DOM compat
                // only for non-scoped slots.
                if (t.tag !== "template" && !t.slotScope) {
                    Fa(t, "slot", n, Ha(t, "slot"));
                }
            }
            // 2.6 v-slot syntax
            {
                if (t.tag === "template") {
                    // v-slot on <template>
                    var r = Xa(t, ju);
                    if (r) {
                        if (true) {
                            if (t.slotTarget || t.slotScope) {
                                Bu("Unexpected mixed usage of different slot syntaxes.", t);
                            }
                            if (t.parent && !Gu(t.parent)) {
                                Bu("<template v-slot> can only appear at the root level inside " + "the receiving the component", t);
                            }
                        }
                        var i = cf(r);
                        var a = i.name;
                        var s = i.dynamic;
                        t.slotTarget = a;
                        t.slotTargetDynamic = s;
                        t.slotScope = r.value || Ru;
                    }
                } else {
                    // v-slot on component, denotes default slot
                    var o = Xa(t, ju);
                    if (o) {
                        if (true) {
                            if (!Gu(t)) {
                                Bu("v-slot can only be used on components or <template>.", o);
                            }
                            if (t.slotScope || t.slotTarget) {
                                Bu("Unexpected mixed usage of different slot syntaxes.", t);
                            }
                            if (t.scopedSlots) {
                                Bu("To avoid scope ambiguity, the default slot should also use " + "<template> syntax when there are other named slots.", o);
                            }
                        }
                        // add the component's children to its default slot
                        var u = t.scopedSlots || (t.scopedSlots = {});
                        var f = cf(o);
                        var l = f.name;
                        var c = f.dynamic;
                        var h = u[l] = Ju("template", [], t);
                        h.slotTarget = l;
                        h.slotTargetDynamic = c;
                        h.children = t.children.filter(function(t) {
                            if (!t.slotScope) {
                                t.parent = h;
                                return true;
                            }
                        });
                        h.slotScope = o.value || Ru;
                        // remove children as they are returned from scopedSlots now
                        t.children = [];
                        // mark el non-plain so data gets generated
                        t.plain = false;
                    }
                }
            }
        }
        function cf(t) {
            var e = t.name.replace(ju, "");
            if (!e) {
                if (t.name[0] !== "#") {
                    e = "default";
                } else if (true) {
                    Bu("v-slot shorthand syntax requires a slot name.", t);
                }
            }
            return Nu.test(e) ? {
                name: e.slice(1, -1),
                dynamic: true
            } : {
                name: '"' + e + '"',
                dynamic: false
            };
        }
        // handle <slot/> outlets
        function hf(t) {
            if (t.tag === "slot") {
                t.slotName = za(t, "name");
                if ("development" !== "production" && t.key) {
                    Bu("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.", Ha(t, "key"));
                }
            }
        }
        function df(t) {
            var e;
            if (e = za(t, "is")) {
                t.component = e;
            }
            if (Ua(t, "inline-template") != null) {
                t.inlineTemplate = true;
            }
        }
        function pf(t) {
            var e = t.attrsList;
            var n, r, i, a, s, o, u, f;
            for (n = 0, r = e.length; n < r; n++) {
                i = a = e[n].name;
                s = e[n].value;
                if ($u.test(i)) {
                    // mark element as dynamic
                    t.hasBindings = true;
                    // modifiers
                    o = mf(i.replace($u, ""));
                    // support .foo shorthand syntax for the .prop modifier
                    if (o) {
                        i = i.replace(Eu, "");
                    }
                    if (Pu.test(i)) {
                        // v-bind
                        i = i.replace(Pu, "");
                        s = Pa(s);
                        f = Nu.test(i);
                        if (f) {
                            i = i.slice(1, -1);
                        }
                        if ("development" !== "production" && s.trim().length === 0) {
                            Bu('The value for a v-bind expression cannot be empty. Found in "v-bind:' + i + '"');
                        }
                        if (o) {
                            if (o.prop && !f) {
                                i = $(i);
                                if (i === "innerHtml") {
                                    i = "innerHTML";
                                }
                            }
                            if (o.camel && !f) {
                                i = $(i);
                            }
                            if (o.sync) {
                                u = Ga(s, "$event");
                                if (!f) {
                                    Va(t, "update:" + $(i), u, null, false, Bu, e[n]);
                                    if (T(i) !== $(i)) {
                                        Va(t, "update:" + T(i), u, null, false, Bu, e[n]);
                                    }
                                } else {
                                    // handler w/ dynamic event name
                                    Va(t, '"update:"+(' + i + ")", u, null, false, Bu, e[n], true);
                                }
                            }
                        }
                        if (o && o.prop || !t.component && qu(t.tag, t.attrsMap.type, i)) {
                            La(t, i, s, e[n], f);
                        } else {
                            Fa(t, i, s, e[n], f);
                        }
                    } else if (Au.test(i)) {
                        // v-on
                        i = i.replace(Au, "");
                        f = Nu.test(i);
                        if (f) {
                            i = i.slice(1, -1);
                        }
                        Va(t, i, s, o, false, Bu, e[n], f);
                    } else {
                        // normal directives
                        i = i.replace($u, "");
                        // parse arg
                        var l = i.match(Ou);
                        var c = l && l[1];
                        f = false;
                        if (c) {
                            i = i.slice(0, -(c.length + 1));
                            if (Nu.test(c)) {
                                c = c.slice(1, -1);
                                f = true;
                            }
                        }
                        Ra(t, i, a, s, c, f, o, e[n]);
                        if ("development" !== "production" && i === "model") {
                            Cf(t, s);
                        }
                    }
                } else {
                    // literal attribute
                    if (true) {
                        var h = Go(s, Vu);
                        if (h) {
                            Bu(i + '="' + s + '": ' + "Interpolation inside attributes has been removed. " + "Use v-bind or the colon shorthand instead. For example, " + 'instead of <div id="{{ val }}">, use <div :id="val">.', e[n]);
                        }
                    }
                    Fa(t, i, JSON.stringify(s), e[n]);
                    // #6887 firefox doesn't update muted state if set via attribute
                    // even immediately after element creation
                    if (!t.component && i === "muted" && qu(t.tag, t.attrsMap.type, i)) {
                        La(t, i, "true", e[n]);
                    }
                }
            }
        }
        function vf(t) {
            var e = t;
            while (e) {
                if (e.for !== undefined) {
                    return true;
                }
                e = e.parent;
            }
            return false;
        }
        function mf(t) {
            var e = t.match(Eu);
            if (e) {
                var n = {};
                e.forEach(function(t) {
                    n[t.slice(1)] = true;
                });
                return n;
            }
        }
        function yf(t) {
            var e = {};
            for (var n = 0, r = t.length; n < r; n++) {
                if ("development" !== "production" && e[t[n].name] && !rt && !at) {
                    Bu("duplicate attribute: " + t[n].name, t[n]);
                }
                e[t[n].name] = t[n].value;
            }
            return e;
        }
        // for script (e.g. type="x/template") or style, do not decode content
        function gf(t) {
            return t.tag === "script" || t.tag === "style";
        }
        function bf(t) {
            return t.tag === "style" || t.tag === "script" && (!t.attrsMap.type || t.attrsMap.type === "text/javascript");
        }
        var xf = /^xmlns:NS\d+/;
        var wf = /^NS\d+:/;
        /* istanbul ignore next */
        function _f(t) {
            var e = [];
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (!xf.test(r.name)) {
                    r.name = r.name.replace(wf, "");
                    e.push(r);
                }
            }
            return e;
        }
        function Cf(t, e) {
            var n = t;
            while (n) {
                if (n.for && n.alias === e) {
                    Bu("<" + t.tag + ' v-model="' + e + '">: ' + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.", t.rawAttrsMap["v-model"]);
                }
                n = n.parent;
            }
        }
        /*  */
        function kf(t, e) {
            if (t.tag === "input") {
                var n = t.attrsMap;
                if (!n["v-model"]) {
                    return;
                }
                var r;
                if (n[":type"] || n["v-bind:type"]) {
                    r = za(t, "type");
                }
                if (!n.type && !r && n["v-bind"]) {
                    r = "(" + n["v-bind"] + ").type";
                }
                if (r) {
                    var i = Ua(t, "v-if", true);
                    var a = i ? "&&(" + i + ")" : "";
                    var s = Ua(t, "v-else", true) != null;
                    var o = Ua(t, "v-else-if", true);
                    // 1. checkbox
                    var u = Af(t);
                    // process for on the main node
                    nf(u);
                    Da(u, "type", "checkbox");
                    Qu(u, e);
                    u.processed = true;
                    // prevent it from double-processed
                    u.if = "(" + r + ")==='checkbox'" + a;
                    uf(u, {
                        exp: u.if,
                        block: u
                    });
                    // 2. add radio else-if condition
                    var f = Af(t);
                    Ua(f, "v-for", true);
                    Da(f, "type", "radio");
                    Qu(f, e);
                    uf(u, {
                        exp: "(" + r + ")==='radio'" + a,
                        block: f
                    });
                    // 3. other
                    var l = Af(t);
                    Ua(l, "v-for", true);
                    Da(l, ":type", r);
                    Qu(l, e);
                    uf(u, {
                        exp: i,
                        block: l
                    });
                    if (s) {
                        u.else = true;
                    } else if (o) {
                        u.elseif = o;
                    }
                    return u;
                }
            }
        }
        function Af(t) {
            return Ju(t.tag, t.attrsList.slice(), t.parent);
        }
        var $f = {
            preTransformNode: kf
        };
        var Sf = [ Ko, tu, $f ];
        /*  */
        function Mf(t, e) {
            if (e.value) {
                La(t, "textContent", "_s(" + e.value + ")", e);
            }
        }
        /*  */
        function Tf(t, e) {
            if (e.value) {
                La(t, "innerHTML", "_s(" + e.value + ")", e);
            }
        }
        var Nf = {
            model: ls,
            text: Mf,
            html: Tf
        };
        /*  */
        var Of = {
            expectHTML: true,
            modules: Sf,
            directives: Nf,
            isPreTag: zi,
            isUnaryTag: ru,
            mustUseProp: ki,
            canBeLeftOpenTag: iu,
            isReservedTag: Ui,
            getTagNamespace: Xi,
            staticKeys: R(Sf)
        };
        /*  */
        var Pf;
        var Ef;
        var jf = k(Lf);
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
        function If(t, e) {
            if (!t) {
                return;
            }
            Pf = jf(e.staticKeys || "");
            Ef = e.isReservedTag || F;
            // first pass: mark all non-static nodes.
            Ff(t);
            // second pass: mark static roots.
            Df(t, false);
        }
        function Lf(t) {
            return g("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : ""));
        }
        function Ff(t) {
            t.static = Rf(t);
            if (t.type === 1) {
                // do not make component slot content static. this avoids
                // 1. components not able to mutate slot nodes
                // 2. static slot content fails for hot-reloading
                if (!Ef(t.tag) && t.tag !== "slot" && t.attrsMap["inline-template"] == null) {
                    return;
                }
                for (var e = 0, n = t.children.length; e < n; e++) {
                    var r = t.children[e];
                    Ff(r);
                    if (!r.static) {
                        t.static = false;
                    }
                }
                if (t.ifConditions) {
                    for (var i = 1, a = t.ifConditions.length; i < a; i++) {
                        var s = t.ifConditions[i].block;
                        Ff(s);
                        if (!s.static) {
                            t.static = false;
                        }
                    }
                }
            }
        }
        function Df(t, e) {
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
                        Df(t.children[n], e || !!t.for);
                    }
                }
                if (t.ifConditions) {
                    for (var i = 1, a = t.ifConditions.length; i < a; i++) {
                        Df(t.ifConditions[i].block, e);
                    }
                }
            }
        }
        function Rf(t) {
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
            return !!(t.pre || !t.hasBindings && !t.if && !t.for && !b(t.tag) && Ef(t.tag) && !Bf(t) && Object.keys(t).every(Pf));
        }
        function Bf(t) {
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
        var Vf = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
        var Hf = /\([^)]*?\);*$/;
        var zf = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;
        // KeyboardEvent.keyCode aliases
        var Uf = {
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
        // KeyboardEvent.key aliases
        var Xf = {
            // #7880: IE11 and Edge use `Esc` for Escape key name.
            esc: [ "Esc", "Escape" ],
            tab: "Tab",
            enter: "Enter",
            // #9112: IE11 uses `Spacebar` for Space key name.
            space: [ " ", "Spacebar" ],
            // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
            up: [ "Up", "ArrowUp" ],
            left: [ "Left", "ArrowLeft" ],
            right: [ "Right", "ArrowRight" ],
            down: [ "Down", "ArrowDown" ],
            // #9112: IE11 uses `Del` for Delete key name.
            delete: [ "Backspace", "Delete", "Del" ]
        };
        // #4868: modifiers that prevent the execution of the listener
        // need to explicitly return null so that we can determine whether to remove
        // the listener for .once
        var qf = function(t) {
            return "if(" + t + ")return null;";
        };
        var Yf = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: qf("$event.target !== $event.currentTarget"),
            ctrl: qf("!$event.ctrlKey"),
            shift: qf("!$event.shiftKey"),
            alt: qf("!$event.altKey"),
            meta: qf("!$event.metaKey"),
            left: qf("'button' in $event && $event.button !== 0"),
            middle: qf("'button' in $event && $event.button !== 1"),
            right: qf("'button' in $event && $event.button !== 2")
        };
        function Gf(t, e) {
            var n = e ? "nativeOn:" : "on:";
            var r = "";
            var i = "";
            for (var a in t) {
                var s = Jf(t[a]);
                if (t[a] && t[a].dynamic) {
                    i += a + "," + s + ",";
                } else {
                    r += '"' + a + '":' + s + ",";
                }
            }
            r = "{" + r.slice(0, -1) + "}";
            if (i) {
                return n + "_d(" + r + ",[" + i.slice(0, -1) + "])";
            } else {
                return n + r;
            }
        }
        function Jf(t) {
            if (!t) {
                return "function(){}";
            }
            if (Array.isArray(t)) {
                return "[" + t.map(function(t) {
                    return Jf(t);
                }).join(",") + "]";
            }
            var e = zf.test(t.value);
            var n = Vf.test(t.value);
            var r = zf.test(t.value.replace(Hf, ""));
            if (!t.modifiers) {
                if (e || n) {
                    return t.value;
                }
                return "function($event){" + (r ? "return " + t.value : t.value) + "}";
            } else {
                var i = "";
                var a = "";
                var s = [];
                for (var o in t.modifiers) {
                    if (Yf[o]) {
                        a += Yf[o];
                        // left/right
                        if (Uf[o]) {
                            s.push(o);
                        }
                    } else if (o === "exact") {
                        var u = t.modifiers;
                        a += qf([ "ctrl", "shift", "alt", "meta" ].filter(function(t) {
                            return !u[t];
                        }).map(function(t) {
                            return "$event." + t + "Key";
                        }).join("||"));
                    } else {
                        s.push(o);
                    }
                }
                if (s.length) {
                    i += Wf(s);
                }
                // Make sure modifiers like prevent and stop get executed after key filtering
                if (a) {
                    i += a;
                }
                var f = e ? "return " + t.value + "($event)" : n ? "return (" + t.value + ")($event)" : r ? "return " + t.value : t.value;
                return "function($event){" + i + f + "}";
            }
        }
        function Wf(t) {
            // make sure the key filters only apply to KeyboardEvents
            // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
            // key events that do not have keyCode property...
            return "if(!$event.type.indexOf('key')&&" + t.map(Kf).join("&&") + ")return null;";
        }
        function Kf(t) {
            var e = parseInt(t, 10);
            if (e) {
                return "$event.keyCode!==" + e;
            }
            var n = Uf[t];
            var r = Xf[t];
            return "_k($event.keyCode," + JSON.stringify(t) + "," + JSON.stringify(n) + "," + "$event.key," + "" + JSON.stringify(r) + ")";
        }
        /*  */
        function Zf(t, e) {
            if ("development" !== "production" && e.modifiers) {
                xt("v-on without argument does not support modifiers.");
            }
            t.wrapListeners = function(t) {
                return "_g(" + t + "," + e.value + ")";
            };
        }
        /*  */
        function Qf(t, e) {
            t.wrapData = function(n) {
                return "_b(" + n + ",'" + t.tag + "'," + e.value + "," + (e.modifiers && e.modifiers.prop ? "true" : "false") + (e.modifiers && e.modifiers.sync ? ",true" : "") + ")";
            };
        }
        /*  */
        var tl = {
            on: Zf,
            bind: Qf,
            cloak: L
        };
        /*  */
        var el = function t(e) {
            this.options = e;
            this.warn = e.warn || ja;
            this.transforms = Ia(e.modules, "transformCode");
            this.dataGenFns = Ia(e.modules, "genData");
            this.directives = j(j({}, tl), e.directives);
            var n = e.isReservedTag || F;
            this.maybeComponent = function(t) {
                return !!t.component || !n(t.tag);
            };
            this.onceId = 0;
            this.staticRenderFns = [];
            this.pre = false;
        };
        function nl(t, e) {
            var n = new el(e);
            var r = t ? rl(t, n) : '_c("div")';
            return {
                render: "with(this){return " + r + "}",
                staticRenderFns: n.staticRenderFns
            };
        }
        function rl(t, e) {
            if (t.parent) {
                t.pre = t.pre || t.parent.pre;
            }
            if (t.staticRoot && !t.staticProcessed) {
                return il(t, e);
            } else if (t.once && !t.onceProcessed) {
                return al(t, e);
            } else if (t.for && !t.forProcessed) {
                return ul(t, e);
            } else if (t.if && !t.ifProcessed) {
                return sl(t, e);
            } else if (t.tag === "template" && !t.slotTarget && !e.pre) {
                return ml(t, e) || "void 0";
            } else if (t.tag === "slot") {
                return _l(t, e);
            } else {
                // component or element
                var n;
                if (t.component) {
                    n = Cl(t.component, t, e);
                } else {
                    var r;
                    if (!t.plain || t.pre && e.maybeComponent(t)) {
                        r = fl(t, e);
                    }
                    var i = t.inlineTemplate ? null : ml(t, e, true);
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
        function il(t, e) {
            t.staticProcessed = true;
            // Some elements (templates) need to behave differently inside of a v-pre
            // node.  All pre nodes are static roots, so we can use this as a location to
            // wrap a state change and reset it upon exiting the pre node.
            var n = e.pre;
            if (t.pre) {
                e.pre = t.pre;
            }
            e.staticRenderFns.push("with(this){return " + rl(t, e) + "}");
            e.pre = n;
            return "_m(" + (e.staticRenderFns.length - 1) + (t.staticInFor ? ",true" : "") + ")";
        }
        // v-once
        function al(t, e) {
            t.onceProcessed = true;
            if (t.if && !t.ifProcessed) {
                return sl(t, e);
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
                    "development" !== "production" && e.warn("v-once can only be used inside v-for that is keyed. ", t.rawAttrsMap["v-once"]);
                    return rl(t, e);
                }
                return "_o(" + rl(t, e) + "," + e.onceId++ + "," + n + ")";
            } else {
                return il(t, e);
            }
        }
        function sl(t, e, n, r) {
            t.ifProcessed = true;
            // avoid recursion
            return ol(t.ifConditions.slice(), e, n, r);
        }
        function ol(t, e, n, r) {
            if (!t.length) {
                return r || "_e()";
            }
            var i = t.shift();
            if (i.exp) {
                return "(" + i.exp + ")?" + a(i.block) + ":" + ol(t, e, n, r);
            } else {
                return "" + a(i.block);
            }
            // v-if with v-once should generate code like (a)?_m(0):_m(1)
            function a(t) {
                return n ? n(t, e) : t.once ? al(t, e) : rl(t, e);
            }
        }
        function ul(t, e, n, r) {
            var i = t.for;
            var a = t.alias;
            var s = t.iterator1 ? "," + t.iterator1 : "";
            var o = t.iterator2 ? "," + t.iterator2 : "";
            if ("development" !== "production" && e.maybeComponent(t) && t.tag !== "slot" && t.tag !== "template" && !t.key) {
                e.warn("<" + t.tag + ' v-for="' + a + " in " + i + '">: component lists rendered with ' + "v-for should have explicit keys. " + "See https://vuejs.org/guide/list.html#key for more info.", t.rawAttrsMap["v-for"], true);
            }
            t.forProcessed = true;
            // avoid recursion
            return (r || "_l") + "((" + i + ")," + "function(" + a + s + o + "){" + "return " + (n || rl)(t, e) + "})";
        }
        function fl(t, e) {
            var n = "{";
            // directives first.
            // directives may mutate the el's other properties before they are generated.
            var r = ll(t, e);
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
                n += "attrs:" + kl(t.attrs) + ",";
            }
            // DOM props
            if (t.props) {
                n += "domProps:" + kl(t.props) + ",";
            }
            // event handlers
            if (t.events) {
                n += Gf(t.events, false) + ",";
            }
            if (t.nativeEvents) {
                n += Gf(t.nativeEvents, true) + ",";
            }
            // slot target
            // only for non-scoped slots
            if (t.slotTarget && !t.slotScope) {
                n += "slot:" + t.slotTarget + ",";
            }
            // scoped slots
            if (t.scopedSlots) {
                n += hl(t, t.scopedSlots, e) + ",";
            }
            // component v-model
            if (t.model) {
                n += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},";
            }
            // inline-template
            if (t.inlineTemplate) {
                var a = cl(t, e);
                if (a) {
                    n += a + ",";
                }
            }
            n = n.replace(/,$/, "") + "}";
            // v-bind dynamic argument wrap
            // v-bind with dynamic arguments must be applied using the same v-bind object
            // merge helper so that class/style/mustUseProp attrs are handled correctly.
            if (t.dynamicAttrs) {
                n = "_b(" + n + ',"' + t.tag + '",' + kl(t.dynamicAttrs) + ")";
            }
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
        function ll(t, e) {
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
                var f = e.directives[o.name];
                if (f) {
                    // compile-time directive that manipulates AST.
                    // returns true if it also needs a runtime counterpart.
                    u = !!f(t, o, e.warn);
                }
                if (u) {
                    i = true;
                    r += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},";
                }
            }
            if (i) {
                return r.slice(0, -1) + "]";
            }
        }
        function cl(t, e) {
            var n = t.children[0];
            if ("development" !== "production" && (t.children.length !== 1 || n.type !== 1)) {
                e.warn("Inline-template components must have exactly one child element.", {
                    start: t.start
                });
            }
            if (n && n.type === 1) {
                var r = nl(n, e.options);
                return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function(t) {
                    return "function(){" + t + "}";
                }).join(",") + "]}";
            }
        }
        function hl(t, e, n) {
            // by default scoped slots are considered "stable", this allows child
            // components with only scoped slots to skip forced updates from parent.
            // but in some cases we have to bail-out of this optimization
            // for example if the slot contains dynamic names, has v-if or v-for on them...
            var r = t.for || Object.keys(e).some(function(t) {
                var n = e[t];
                return n.slotTargetDynamic || n.if || n.for || pl(n);
            });
            // #9534: if a component with scoped slots is inside a conditional branch,
            // it's possible for the same component to be reused but with different
            // compiled slot content. To avoid that, we generate a unique key based on
            // the generated code of all the slot contents.
            var i = !!t.if;
            // OR when it is inside another scoped slot or v-for (the reactivity may be
            // disconnected due to the intermediate scope variable)
            // #9438, #9506
            // TODO: this can be further optimized by properly analyzing in-scope bindings
            // and skip force updating ones that do not actually use scope variables.
            if (!r) {
                var a = t.parent;
                while (a) {
                    if (a.slotScope && a.slotScope !== Ru || a.for) {
                        r = true;
                        break;
                    }
                    if (a.if) {
                        i = true;
                    }
                    a = a.parent;
                }
            }
            var s = Object.keys(e).map(function(t) {
                return vl(e[t], n);
            }).join(",");
            return "scopedSlots:_u([" + s + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + dl(s) : "") + ")";
        }
        function dl(t) {
            var e = 5381;
            var n = t.length;
            while (n) {
                e = e * 33 ^ t.charCodeAt(--n);
            }
            return e >>> 0;
        }
        function pl(t) {
            if (t.type === 1) {
                if (t.tag === "slot") {
                    return true;
                }
                return t.children.some(pl);
            }
            return false;
        }
        function vl(t, e) {
            var n = t.attrsMap["slot-scope"];
            if (t.if && !t.ifProcessed && !n) {
                return sl(t, e, vl, "null");
            }
            if (t.for && !t.forProcessed) {
                return ul(t, e, vl);
            }
            var r = t.slotScope === Ru ? "" : String(t.slotScope);
            var i = "function(" + r + "){" + "return " + (t.tag === "template" ? t.if && n ? "(" + t.if + ")?" + (ml(t, e) || "undefined") + ":undefined" : ml(t, e) || "undefined" : rl(t, e)) + "}";
            // reverse proxy v-slot without scope on this.$slots
            var a = r ? "" : ",proxy:true";
            return "{key:" + (t.slotTarget || '"default"') + ",fn:" + i + a + "}";
        }
        function ml(t, e, n, r, i) {
            var a = t.children;
            if (a.length) {
                var s = a[0];
                // optimize single v-for
                if (a.length === 1 && s.for && s.tag !== "template" && s.tag !== "slot") {
                    var o = n ? e.maybeComponent(s) ? ",1" : ",0" : "";
                    return "" + (r || rl)(s, e) + o;
                }
                var u = n ? yl(a, e.maybeComponent) : 0;
                var f = i || bl;
                return "[" + a.map(function(t) {
                    return f(t, e);
                }).join(",") + "]" + (u ? "," + u : "");
            }
        }
        // determine the normalization needed for the children array.
        // 0: no normalization needed
        // 1: simple normalization needed (possible 1-level deep nested array)
        // 2: full normalization needed
        function yl(t, e) {
            var n = 0;
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.type !== 1) {
                    continue;
                }
                if (gl(i) || i.ifConditions && i.ifConditions.some(function(t) {
                    return gl(t.block);
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
        function gl(t) {
            return t.for !== undefined || t.tag === "template" || t.tag === "slot";
        }
        function bl(t, e) {
            if (t.type === 1) {
                return rl(t, e);
            } else if (t.type === 3 && t.isComment) {
                return wl(t);
            } else {
                return xl(t);
            }
        }
        function xl(t) {
            return "_v(" + (t.type === 2 ? t.expression : Al(JSON.stringify(t.text))) + ")";
        }
        function wl(t) {
            return "_e(" + JSON.stringify(t.text) + ")";
        }
        function _l(t, e) {
            var n = t.slotName || '"default"';
            var r = ml(t, e);
            var i = "_t(" + n + (r ? "," + r : "");
            var a = t.attrs || t.dynamicAttrs ? kl((t.attrs || []).concat(t.dynamicAttrs || []).map(function(t) {
                return {
                    // slot props are camelized
                    name: $(t.name),
                    value: t.value,
                    dynamic: t.dynamic
                };
            })) : null;
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
        function Cl(t, e, n) {
            var r = e.inlineTemplate ? null : ml(e, n, true);
            return "_c(" + t + "," + fl(e, n) + (r ? "," + r : "") + ")";
        }
        function kl(t) {
            var e = "";
            var n = "";
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                var a = Al(i.value);
                if (i.dynamic) {
                    n += i.name + "," + a + ",";
                } else {
                    e += '"' + i.name + '":' + a + ",";
                }
            }
            e = "{" + e.slice(0, -1) + "}";
            if (n) {
                return "_d(" + e + ",[" + n.slice(0, -1) + "])";
            } else {
                return e;
            }
        }
        // #3895, #4268
        function Al(t) {
            return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        /*  */
        // these keywords should not appear inside expressions, but operators like
        // typeof, instanceof and in are allowed
        var $l = new RegExp("\\b" + ("do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const," + "super,throw,while,yield,delete,export,import,return,switch,default," + "extends,finally,continue,debugger,function,arguments").split(",").join("\\b|\\b") + "\\b");
        // these unary operators should not be used as property/method names
        var Sl = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        // strip strings in expressions
        var Ml = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
        // detect problematic expressions in a template
        function Tl(t, e) {
            if (t) {
                Nl(t, e);
            }
        }
        function Nl(t, e) {
            if (t.type === 1) {
                for (var n in t.attrsMap) {
                    if ($u.test(n)) {
                        var r = t.attrsMap[n];
                        if (r) {
                            var i = t.rawAttrsMap[n];
                            if (n === "v-for") {
                                Pl(t, 'v-for="' + r + '"', e, i);
                            } else if (Au.test(n)) {
                                Ol(r, n + '="' + r + '"', e, i);
                            } else {
                                jl(r, n + '="' + r + '"', e, i);
                            }
                        }
                    }
                }
                if (t.children) {
                    for (var a = 0; a < t.children.length; a++) {
                        Nl(t.children[a], e);
                    }
                }
            } else if (t.type === 2) {
                jl(t.expression, t.text, e, t);
            }
        }
        function Ol(t, e, n, r) {
            var i = t.replace(Ml, "");
            var a = i.match(Sl);
            if (a && i.charAt(a.index - 1) !== "$") {
                n("avoid using JavaScript unary operator as property name: " + '"' + a[0] + '" in expression ' + e.trim(), r);
            }
            jl(t, e, n, r);
        }
        function Pl(t, e, n, r) {
            jl(t.for || "", e, n, r);
            El(t.alias, "v-for alias", e, n, r);
            El(t.iterator1, "v-for iterator", e, n, r);
            El(t.iterator2, "v-for iterator", e, n, r);
        }
        function El(t, e, n, r, i) {
            if (typeof t === "string") {
                try {
                    new Function("var " + t + "=_");
                } catch (a) {
                    r("invalid " + e + ' "' + t + '" in expression: ' + n.trim(), i);
                }
            }
        }
        function jl(t, e, n, r) {
            try {
                new Function("return " + t);
            } catch (a) {
                var i = t.replace(Ml, "").match($l);
                if (i) {
                    n("avoid using JavaScript keyword as property name: " + '"' + i[0] + '"\n  Raw expression: ' + e.trim(), r);
                } else {
                    n("invalid expression: " + a.message + " in\n\n" + "    " + t + "\n\n" + "  Raw expression: " + e.trim() + "\n", r);
                }
            }
        }
        /*  */
        var Il = 2;
        function Ll(t, e, n) {
            if (e === void 0) e = 0;
            if (n === void 0) n = t.length;
            var r = t.split(/\r?\n/);
            var i = 0;
            var a = [];
            for (var s = 0; s < r.length; s++) {
                i += r[s].length + 1;
                if (i >= e) {
                    for (var o = s - Il; o <= s + Il || n > i; o++) {
                        if (o < 0 || o >= r.length) {
                            continue;
                        }
                        a.push("" + (o + 1) + Fl(" ", 3 - String(o + 1).length) + "|  " + r[o]);
                        var u = r[o].length;
                        if (o === s) {
                            // push underline
                            var f = e - (i - u) + 1;
                            var l = n > i ? u - f : n - e;
                            a.push("   |  " + Fl(" ", f) + Fl("^", l));
                        } else if (o > s) {
                            if (n > i) {
                                var c = Math.min(n - i, u);
                                a.push("   |  " + Fl("^", c));
                            }
                            i += u + 1;
                        }
                    }
                    break;
                }
            }
            return a.join("\n");
        }
        function Fl(t, e) {
            var n = "";
            if (e > 0) {
                while (true) {
                    // eslint-disable-line
                    if (e & 1) {
                        n += t;
                    }
                    e >>>= 1;
                    if (e <= 0) {
                        break;
                    }
                    t += t;
                }
            }
            return n;
        }
        /*  */
        function Dl(t, e) {
            try {
                return new Function(t);
            } catch (n) {
                e.push({
                    err: n,
                    code: t
                });
                return L;
            }
        }
        function Rl(t) {
            var e = Object.create(null);
            return function n(r, i, a) {
                i = j({}, i);
                var s = i.warn || xt;
                delete i.warn;
                /* istanbul ignore if */
                if (true) {
                    // detect possible CSP restriction
                    try {
                        new Function("return 1");
                    } catch (t) {
                        if (t.toString().match(/unsafe-eval|CSP/)) {
                            s("It seems you are using the standalone build of Vue.js in an " + "environment with Content Security Policy that prohibits unsafe-eval. " + "The template compiler cannot work in this environment. Consider " + "relaxing the policy to allow unsafe-eval or pre-compiling your " + "templates into render functions.");
                        }
                    }
                }
                // check cache
                var o = i.delimiters ? String(i.delimiters) + r : r;
                if (e[o]) {
                    return e[o];
                }
                // compile
                var u = t(r, i);
                // check compilation errors/tips
                if (true) {
                    if (u.errors && u.errors.length) {
                        if (i.outputSourceRange) {
                            u.errors.forEach(function(t) {
                                s("Error compiling template:\n\n" + t.msg + "\n\n" + Ll(r, t.start, t.end), a);
                            });
                        } else {
                            s("Error compiling template:\n\n" + r + "\n\n" + u.errors.map(function(t) {
                                return "- " + t;
                            }).join("\n") + "\n", a);
                        }
                    }
                    if (u.tips && u.tips.length) {
                        if (i.outputSourceRange) {
                            u.tips.forEach(function(t) {
                                return wt(t.msg, a);
                            });
                        } else {
                            u.tips.forEach(function(t) {
                                return wt(t, a);
                            });
                        }
                    }
                }
                // turn code into functions
                var f = {};
                var l = [];
                f.render = Dl(u.render, l);
                f.staticRenderFns = u.staticRenderFns.map(function(t) {
                    return Dl(t, l);
                });
                // check function generation errors.
                // this should only happen if there is a bug in the compiler itself.
                // mostly for codegen development use
                /* istanbul ignore if */
                if (true) {
                    if ((!u.errors || !u.errors.length) && l.length) {
                        s("Failed to generate render function:\n\n" + l.map(function(t) {
                            var e = t.err;
                            var n = t.code;
                            return e.toString() + " in\n\n" + n + "\n";
                        }).join("\n"), a);
                    }
                }
                return e[o] = f;
            };
        }
        /*  */
        function Bl(t) {
            return function e(n) {
                function r(e, r) {
                    var i = Object.create(n);
                    var a = [];
                    var s = [];
                    var o = function(t, e, n) {
                        (n ? s : a).push(t);
                    };
                    if (r) {
                        if ("development" !== "production" && r.outputSourceRange) {
                            // $flow-disable-line
                            var u = e.match(/^\s*/)[0].length;
                            o = function(t, e, n) {
                                var r = {
                                    msg: t
                                };
                                if (e) {
                                    if (e.start != null) {
                                        r.start = e.start + u;
                                    }
                                    if (e.end != null) {
                                        r.end = e.end + u;
                                    }
                                }
                                (n ? s : a).push(r);
                            };
                        }
                        // merge custom modules
                        if (r.modules) {
                            i.modules = (n.modules || []).concat(r.modules);
                        }
                        // merge custom directives
                        if (r.directives) {
                            i.directives = j(Object.create(n.directives || null), r.directives);
                        }
                        // copy other options
                        for (var f in r) {
                            if (f !== "modules" && f !== "directives") {
                                i[f] = r[f];
                            }
                        }
                    }
                    i.warn = o;
                    var l = t(e.trim(), i);
                    if (true) {
                        Tl(l.ast, o);
                    }
                    l.errors = a;
                    l.tips = s;
                    return l;
                }
                return {
                    compile: r,
                    compileToFunctions: Rl(r)
                };
            };
        }
        /*  */
        // `createCompilerCreator` allows creating compilers that use alternative
        // parser/optimizer/codegen, e.g the SSR optimizing compiler.
        // Here we just export a default compiler using the default parts.
        var Vl = Bl(function t(e, n) {
            var r = Wu(e.trim(), n);
            if (n.optimize !== false) {
                If(r, n);
            }
            var i = nl(r, n);
            return {
                ast: r,
                render: i.render,
                staticRenderFns: i.staticRenderFns
            };
        });
        /*  */
        var Hl = Vl(Of);
        var zl = Hl.compile;
        var Ul = Hl.compileToFunctions;
        /*  */
        // check whether current browser encodes a char inside attribute values
        var Xl;
        function ql(t) {
            Xl = Xl || document.createElement("div");
            Xl.innerHTML = t ? '<a href="\n"/>' : '<div a="\n"/>';
            return Xl.innerHTML.indexOf("&#10;") > 0;
        }
        // #3663: IE encodes newlines inside attribute values while other browsers don't
        var Yl = Q ? ql(false) : false;
        // #6828: chrome encodes content in a[href]
        var Gl = Q ? ql(true) : false;
        /*  */
        var Jl = k(function(t) {
            var e = Ji(t);
            return e && e.innerHTML;
        });
        var Wl = oi.prototype.$mount;
        oi.prototype.$mount = function(t, e) {
            t = t && Ji(t);
            /* istanbul ignore if */
            if (t === document.body || t === document.documentElement) {
                "development" !== "production" && xt("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
                return this;
            }
            var n = this.$options;
            // resolve template/el and convert to render function
            if (!n.render) {
                var r = n.template;
                if (r) {
                    if (typeof r === "string") {
                        if (r.charAt(0) === "#") {
                            r = Jl(r);
                            /* istanbul ignore if */
                            if ("development" !== "production" && !r) {
                                xt("Template element not found or is empty: " + n.template, this);
                            }
                        }
                    } else if (r.nodeType) {
                        r = r.innerHTML;
                    } else {
                        if (true) {
                            xt("invalid template option:" + r, this);
                        }
                        return this;
                    }
                } else if (t) {
                    r = Kl(t);
                }
                if (r) {
                    /* istanbul ignore if */
                    if ("development" !== "production" && q.performance && Re) {
                        Re("compile");
                    }
                    var i = Ul(r, {
                        outputSourceRange: "development" !== "production",
                        shouldDecodeNewlines: Yl,
                        shouldDecodeNewlinesForHref: Gl,
                        delimiters: n.delimiters,
                        comments: n.comments
                    }, this);
                    var a = i.render;
                    var s = i.staticRenderFns;
                    n.render = a;
                    n.staticRenderFns = s;
                    /* istanbul ignore if */
                    if ("development" !== "production" && q.performance && Re) {
                        Re("compile end");
                        Be("vue " + this._name + " compile", "compile", "compile end");
                    }
                }
            }
            return Wl.call(this, t, e);
        };
        /**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
        function Kl(t) {
            if (t.outerHTML) {
                return t.outerHTML;
            } else {
                var e = document.createElement("div");
                e.appendChild(t.cloneNode(true));
                return e.innerHTML;
            }
        }
        oi.compile = Ul;
        /* harmony default export */
        e["default"] = oi;
    }).call(e, n(1), n(9).setImmediate);
}, /* 9 */
/***/
function(t, e, n) {
    /* WEBPACK VAR INJECTION */
    (function(t) {
        var r = typeof t !== "undefined" && t || typeof self !== "undefined" && self || window;
        var i = Function.prototype.apply;
        // DOM APIs, for completeness
        e.setTimeout = function() {
            return new a(i.call(setTimeout, r, arguments), clearTimeout);
        };
        e.setInterval = function() {
            return new a(i.call(setInterval, r, arguments), clearInterval);
        };
        e.clearTimeout = e.clearInterval = function(t) {
            if (t) {
                t.close();
            }
        };
        function a(t, e) {
            this._id = t;
            this._clearFn = e;
        }
        a.prototype.unref = a.prototype.ref = function() {};
        a.prototype.close = function() {
            this._clearFn.call(r, this._id);
        };
        // Does not start the time, just sets up the members needed.
        e.enroll = function(t, e) {
            clearTimeout(t._idleTimeoutId);
            t._idleTimeout = e;
        };
        e.unenroll = function(t) {
            clearTimeout(t._idleTimeoutId);
            t._idleTimeout = -1;
        };
        e._unrefActive = e.active = function(t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            if (e >= 0) {
                t._idleTimeoutId = setTimeout(function e() {
                    if (t._onTimeout) t._onTimeout();
                }, e);
            }
        };
        // setimmediate attaches itself to the global object
        n(10);
        // On some exotic environments, it's not clear which object `setimmediate` was
        // able to install onto.  Search each possibility in the same order as the
        // `setimmediate` library.
        e.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof t !== "undefined" && t.setImmediate || this && this.setImmediate;
        e.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof t !== "undefined" && t.clearImmediate || this && this.clearImmediate;
    }).call(e, n(1));
}, /* 10 */
/***/
function(t, e, n) {
    /* WEBPACK VAR INJECTION */
    (function(t, e) {
        (function(t, n) {
            "use strict";
            if (t.setImmediate) {
                return;
            }
            var r = 1;
            // Spec says greater than zero
            var i = {};
            var a = false;
            var s = t.document;
            var o;
            function u(t) {
                // Callback can either be a function or a string
                if (typeof t !== "function") {
                    t = new Function("" + t);
                }
                // Copy function arguments
                var e = new Array(arguments.length - 1);
                for (var n = 0; n < e.length; n++) {
                    e[n] = arguments[n + 1];
                }
                // Store and register the task
                var a = {
                    callback: t,
                    args: e
                };
                i[r] = a;
                o(r);
                return r++;
            }
            function f(t) {
                delete i[t];
            }
            function l(t) {
                var e = t.callback;
                var r = t.args;
                switch (r.length) {
                  case 0:
                    e();
                    break;

                  case 1:
                    e(r[0]);
                    break;

                  case 2:
                    e(r[0], r[1]);
                    break;

                  case 3:
                    e(r[0], r[1], r[2]);
                    break;

                  default:
                    e.apply(n, r);
                    break;
                }
            }
            function c(t) {
                // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                // So if we're currently running a task, we'll need to delay this invocation.
                if (a) {
                    // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                    // "too much recursion" error.
                    setTimeout(c, 0, t);
                } else {
                    var e = i[t];
                    if (e) {
                        a = true;
                        try {
                            l(e);
                        } finally {
                            f(t);
                            a = false;
                        }
                    }
                }
            }
            function h() {
                o = function(t) {
                    e.nextTick(function() {
                        c(t);
                    });
                };
            }
            function d() {
                // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                // where `global.postMessage` means something completely different and can't be used for this purpose.
                if (t.postMessage && !t.importScripts) {
                    var e = true;
                    var n = t.onmessage;
                    t.onmessage = function() {
                        e = false;
                    };
                    t.postMessage("", "*");
                    t.onmessage = n;
                    return e;
                }
            }
            function p() {
                // Installs an event handler on `global` for the `message` event: see
                // * https://developer.mozilla.org/en/DOM/window.postMessage
                // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
                var e = "setImmediate$" + Math.random() + "$";
                var n = function(n) {
                    if (n.source === t && typeof n.data === "string" && n.data.indexOf(e) === 0) {
                        c(+n.data.slice(e.length));
                    }
                };
                if (t.addEventListener) {
                    t.addEventListener("message", n, false);
                } else {
                    t.attachEvent("onmessage", n);
                }
                o = function(n) {
                    t.postMessage(e + n, "*");
                };
            }
            function v() {
                var t = new MessageChannel();
                t.port1.onmessage = function(t) {
                    var e = t.data;
                    c(e);
                };
                o = function(e) {
                    t.port2.postMessage(e);
                };
            }
            function m() {
                var t = s.documentElement;
                o = function(e) {
                    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                    var n = s.createElement("script");
                    n.onreadystatechange = function() {
                        c(e);
                        n.onreadystatechange = null;
                        t.removeChild(n);
                        n = null;
                    };
                    t.appendChild(n);
                };
            }
            function y() {
                o = function(t) {
                    setTimeout(c, 0, t);
                };
            }
            // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
            var g = Object.getPrototypeOf && Object.getPrototypeOf(t);
            g = g && g.setTimeout ? g : t;
            // Don't get fooled by e.g. browserify environments.
            if ({}.toString.call(t.process) === "[object process]") {
                // For Node.js before 0.9
                h();
            } else if (d()) {
                // For non-IE10 modern browsers
                p();
            } else if (t.MessageChannel) {
                // For web workers, where supported
                v();
            } else if (s && "onreadystatechange" in s.createElement("script")) {
                // For IE 6–8
                m();
            } else {
                // For older browsers
                y();
            }
            g.setImmediate = u;
            g.clearImmediate = f;
        })(typeof self === "undefined" ? typeof t === "undefined" ? this : t : self);
    }).call(e, n(1), n(11));
}, /* 11 */
/***/
function(t, e) {
    // shim for using process in browser
    var n = t.exports = {};
    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.
    var r;
    var i;
    function a() {
        throw new Error("setTimeout has not been defined");
    }
    function s() {
        throw new Error("clearTimeout has not been defined");
    }
    (function() {
        try {
            if (typeof setTimeout === "function") {
                r = setTimeout;
            } else {
                r = a;
            }
        } catch (t) {
            r = a;
        }
        try {
            if (typeof clearTimeout === "function") {
                i = clearTimeout;
            } else {
                i = s;
            }
        } catch (t) {
            i = s;
        }
    })();
    function o(t) {
        if (r === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(t, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((r === a || !r) && setTimeout) {
            r = setTimeout;
            return setTimeout(t, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return r(t, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return r.call(null, t, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return r.call(this, t, 0);
            }
        }
    }
    function u(t) {
        if (i === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(t);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((i === s || !i) && clearTimeout) {
            i = clearTimeout;
            return clearTimeout(t);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return i(t);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return i.call(null, t);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return i.call(this, t);
            }
        }
    }
    var f = [];
    var l = false;
    var c;
    var h = -1;
    function d() {
        if (!l || !c) {
            return;
        }
        l = false;
        if (c.length) {
            f = c.concat(f);
        } else {
            h = -1;
        }
        if (f.length) {
            p();
        }
    }
    function p() {
        if (l) {
            return;
        }
        var t = o(d);
        l = true;
        var e = f.length;
        while (e) {
            c = f;
            f = [];
            while (++h < e) {
                if (c) {
                    c[h].run();
                }
            }
            h = -1;
            e = f.length;
        }
        c = null;
        l = false;
        u(t);
    }
    n.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var n = 1; n < arguments.length; n++) {
                e[n - 1] = arguments[n];
            }
        }
        f.push(new v(t, e));
        if (f.length === 1 && !l) {
            o(p);
        }
    };
    // v8 likes predictible objects
    function v(t, e) {
        this.fun = t;
        this.array = e;
    }
    v.prototype.run = function() {
        this.fun.apply(null, this.array);
    };
    n.title = "browser";
    n.browser = true;
    n.env = {};
    n.argv = [];
    n.version = "";
    // empty string to avoid regexp issues
    n.versions = {};
    function m() {}
    n.on = m;
    n.addListener = m;
    n.once = m;
    n.off = m;
    n.removeListener = m;
    n.removeAllListeners = m;
    n.emit = m;
    n.prependListener = m;
    n.prependOnceListener = m;
    n.listeners = function(t) {
        return [];
    };
    n.binding = function(t) {
        throw new Error("process.binding is not supported");
    };
    n.cwd = function() {
        return "/";
    };
    n.chdir = function(t) {
        throw new Error("process.chdir is not supported");
    };
    n.umask = function() {
        return 0;
    };
}, /* 12 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(2);
    /* harmony import */
    var i = n.n(r);
    /* harmony namespace reexport (unknown) */
    for (var a in r) if (a !== "default") (function(t) {
        n.d(e, t, function() {
            return r[t];
        });
    })(a);
    /* harmony import */
    var s = n(22);
    var o = false;
    var u = n(0);
    /* script */
    /* template */
    /* template functional */
    var f = false;
    /* styles */
    var l = null;
    /* scopeId */
    var c = null;
    /* moduleIdentifier (server only) */
    var h = null;
    var d = u(i.a, s["a"], f, l, c, h);
    d.options.__file = "src/components/Application.vue";
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-b02fc960", d.options);
            } else {
                e.reload("data-v-b02fc960", d.options);
            }
            t.hot.dispose(function(t) {
                o = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = d.exports;
}, /* 13 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(3);
    /* harmony import */
    var i = n.n(r);
    /* harmony namespace reexport (unknown) */
    for (var a in r) if (a !== "default") (function(t) {
        n.d(e, t, function() {
            return r[t];
        });
    })(a);
    /* harmony import */
    var s = n(14);
    var o = false;
    var u = n(0);
    /* script */
    /* template */
    /* template functional */
    var f = false;
    /* styles */
    var l = null;
    /* scopeId */
    var c = null;
    /* moduleIdentifier (server only) */
    var h = null;
    var d = u(i.a, s["a"], f, l, c, h);
    d.options.__file = "src/components/Article.vue";
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-72bad814", d.options);
            } else {
                e.reload("data-v-72bad814", d.options);
            }
            t.hot.dispose(function(t) {
                o = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = d.exports;
}, /* 14 */
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
        }, [ t._v("Yurii Rabeshko") ]), t._v(" "), n("h2", {
            staticClass: "subtitle is-3"
        }, [ t._v("Java/Python Software Engineer") ]) ]) ]) ]), t._v(" "), n("section", {
            staticClass: "content"
        }, [ n("p", [ t._v("You're reading about the man that boundlessly love self-development and not afraid of tricky challenges that appear on the way. I code in Java, Python and TypeScript prefer the quality and readability of the code. I’m an object bigot!") ]) ]), t._v(" "), n("a", {
            staticClass: "button is-primary is-outlined is-medium",
            attrs: {
                href: "mailto:yurii.rabeshko@mail.com"
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
            require("vue-hot-reload-api").rerender("data-v-72bad814", a);
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
    var r = n(4);
    /* harmony import */
    var i = n.n(r);
    /* harmony namespace reexport (unknown) */
    for (var a in r) if (a !== "default") (function(t) {
        n.d(e, t, function() {
            return r[t];
        });
    })(a);
    /* harmony import */
    var s = n(16);
    var o = false;
    var u = n(0);
    /* script */
    /* template */
    /* template functional */
    var f = false;
    /* styles */
    var l = null;
    /* scopeId */
    var c = null;
    /* moduleIdentifier (server only) */
    var h = null;
    var d = u(i.a, s["a"], f, l, c, h);
    d.options.__file = "src/components/Footer.vue";
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-40ab164b", d.options);
            } else {
                e.reload("data-v-40ab164b", d.options);
            }
            t.hot.dispose(function(t) {
                o = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = d.exports;
}, /* 16 */
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
        }, [ n("small", [ t._v("Copyright © 2014-" + t._s(t.year) + " Yurii Rabeshko.") ]) ]) ]);
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
            require("vue-hot-reload-api").rerender("data-v-40ab164b", a);
        }
    }
}, /* 17 */
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
    /* harmony namespace reexport (unknown) */
    for (var a in r) if (a !== "default") (function(t) {
        n.d(e, t, function() {
            return r[t];
        });
    })(a);
    /* harmony import */
    var s = n(21);
    var o = false;
    var u = n(0);
    /* script */
    /* template */
    /* template functional */
    var f = false;
    /* styles */
    var l = null;
    /* scopeId */
    var c = null;
    /* moduleIdentifier (server only) */
    var h = null;
    var d = u(i.a, s["a"], f, l, c, h);
    d.options.__file = "src/components/Header.vue";
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-61dd7a3d", d.options);
            } else {
                e.reload("data-v-61dd7a3d", d.options);
            }
            t.hot.dispose(function(t) {
                o = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = d.exports;
}, /* 18 */
/***/
function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    /* harmony import */
    var r = n(6);
    /* harmony import */
    var i = n.n(r);
    /* harmony namespace reexport (unknown) */
    for (var a in r) if (a !== "default") (function(t) {
        n.d(e, t, function() {
            return r[t];
        });
    })(a);
    /* harmony import */
    var s = n(20);
    var o = false;
    var u = n(0);
    /* script */
    /* template */
    /* template functional */
    var f = false;
    /* styles */
    var l = null;
    /* scopeId */
    var c = null;
    /* moduleIdentifier (server only) */
    var h = null;
    var d = u(i.a, s["a"], f, l, c, h);
    d.options.__file = "src/components/Lightbulb.vue";
    /* hot reload */
    if (false) {
        (function() {
            var e = require("vue-hot-reload-api");
            e.install(require("vue"), false);
            if (!e.compatible) return;
            t.hot.accept();
            if (!t.hot.data) {
                e.createRecord("data-v-c10148c2", d.options);
            } else {
                e.reload("data-v-c10148c2", d.options);
            }
            t.hot.dispose(function(t) {
                o = true;
            });
        })();
    }
    /* harmony default export */
    e["default"] = d.exports;
}, /* 19 */
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
        // Find global reference - uses 'this' by default when available,
        // falls back to 'window' otherwise (for bundlers like Webpack)
        var n = typeof this !== "undefined" ? this : t;
        // The main wrapping element
        var r = n.SVG = function(t) {
            if (r.supported) {
                t = new r.Doc(t);
                if (!r.parser.draw) r.prepare();
                return t;
            }
        };
        // Default namespaces
        r.ns = "http://www.w3.org/2000/svg";
        r.xmlns = "http://www.w3.org/2000/xmlns/";
        r.xlink = "http://www.w3.org/1999/xlink";
        r.svgjs = "http://svgjs.com/svgjs";
        // Svg support test
        r.supported = function() {
            return !!e.createElementNS && !!e.createElementNS(r.ns, "svg").createSVGRect;
        }();
        // Don't bother to continue if SVG is not supported
        if (!r.supported) return false;
        // Element id sequence
        r.did = 1e3;
        // Get next named element id
        r.eid = function(t) {
            return "Svgjs" + p(t) + r.did++;
        };
        // Method for element creation
        r.create = function(t) {
            // create element
            var n = e.createElementNS(this.ns, t);
            // apply unique id
            n.setAttribute("id", this.eid(t));
            return n;
        };
        // Method for extending objects
        r.extend = function() {
            var t, e, n, i;
            // Get list of modules
            t = [].slice.call(arguments);
            // Get object with extensions
            e = t.pop();
            for (i = t.length - 1; i >= 0; i--) if (t[i]) for (n in e) t[i].prototype[n] = e[n];
            // Make sure SVG.Set inherits any newly added methods
            if (r.Set && r.Set.inherit) r.Set.inherit();
        };
        // Invent new element
        r.invent = function(t) {
            // Create element initializer
            var e = typeof t.create == "function" ? t.create : function() {
                this.constructor.call(this, r.create(t.create));
            };
            // Inherit prototype
            if (t.inherit) e.prototype = new t.inherit();
            // Extend with methods
            if (t.extend) r.extend(e, t.extend);
            // Attach construct method to parent
            if (t.construct) r.extend(t.parent || r.Container, t.construct);
            return e;
        };
        // Adopt existing svg elements
        r.adopt = function(e) {
            // check for presence of node
            if (!e) return null;
            // make sure a node isn't already adopted
            if (e.instance) return e.instance;
            // initialize variables
            var n;
            // adopt with element-specific settings
            if (e.nodeName == "svg") n = e.parentNode instanceof t.SVGElement ? new r.Nested() : new r.Doc(); else if (e.nodeName == "linearGradient") n = new r.Gradient("linear"); else if (e.nodeName == "radialGradient") n = new r.Gradient("radial"); else if (r[p(e.nodeName)]) n = new (r[p(e.nodeName)])(); else n = new r.Element(e);
            // ensure references
            n.type = e.nodeName;
            n.node = e;
            e.instance = n;
            // SVG.Class specific preparations
            if (n instanceof r.Doc) n.namespace().defs();
            // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
            n.setData(JSON.parse(e.getAttribute("svgjs:data")) || {});
            return n;
        };
        // Initialize parsing element
        r.prepare = function() {
            // Select document body and create invisible svg element
            var t = e.getElementsByTagName("body")[0], n = (t ? new r.Doc(t) : r.adopt(e.documentElement).nested()).size(2, 0);
            // Create parser object
            r.parser = {
                body: t || e.documentElement,
                draw: n.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").attr("focusable", "false").node,
                poly: n.polyline().node,
                path: n.path().node,
                native: r.create("svg")
            };
        };
        r.parser = {
            native: r.create("svg")
        };
        e.addEventListener("DOMContentLoaded", function() {
            if (!r.parser.draw) r.prepare();
        }, false);
        // Storage for regular expressions
        r.regex = {
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
        r.utils = {
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
        r.defaults = {
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
        r.Color = function(t) {
            var e;
            // initialize defaults
            this.r = 0;
            this.g = 0;
            this.b = 0;
            if (!t) return;
            // parse color
            if (typeof t === "string") {
                if (r.regex.isRgb.test(t)) {
                    // get rgb values
                    e = r.regex.rgb.exec(t.replace(r.regex.whitespace, ""));
                    // parse numeric values
                    this.r = parseInt(e[1]);
                    this.g = parseInt(e[2]);
                    this.b = parseInt(e[3]);
                } else if (r.regex.isHex.test(t)) {
                    // get hex values
                    e = r.regex.hex.exec(v(t));
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
        r.extend(r.Color, {
            // Default to hex conversion
            toString: function() {
                return this.toHex();
            },
            toHex: function() {
                return "#" + m(this.r) + m(this.g) + m(this.b);
            },
            toRgb: function() {
                return "rgb(" + [ this.r, this.g, this.b ].join() + ")";
            },
            brightness: function() {
                return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11;
            },
            morph: function(t) {
                this.destination = new r.Color(t);
                return this;
            },
            at: function(t) {
                // make sure a destination is defined
                if (!this.destination) return this;
                // normalise pos
                t = t < 0 ? 0 : t > 1 ? 1 : t;
                // generate morphed color
                return new r.Color({
                    r: ~~(this.r + (this.destination.r - this.r) * t),
                    g: ~~(this.g + (this.destination.g - this.g) * t),
                    b: ~~(this.b + (this.destination.b - this.b) * t)
                });
            }
        });
        // Testers
        // Test if given value is a color string
        r.Color.test = function(t) {
            t += "";
            return r.regex.isHex.test(t) || r.regex.isRgb.test(t);
        };
        // Test if given value is a rgb object
        r.Color.isRgb = function(t) {
            return t && typeof t.r == "number" && typeof t.g == "number" && typeof t.b == "number";
        };
        // Test if given value is a color
        r.Color.isColor = function(t) {
            return r.Color.isRgb(t) || r.Color.test(t);
        };
        // Module for array conversion
        r.Array = function(t, e) {
            t = (t || []).valueOf();
            // if array is empty and fallback is provided, use fallback
            if (t.length == 0 && e) t = e.valueOf();
            // parse array
            this.value = this.parse(t);
        };
        r.extend(r.Array, {
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
                for (var e = 0, n = this.value.length, i = []; e < n; e++) i.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                return new r.Array(i);
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
                return t.trim().split(r.regex.delimiter).map(parseFloat);
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
        r.PointArray = function(t, e) {
            r.Array.call(this, t, e || [ [ 0, 0 ] ]);
        };
        // Inherit from SVG.Array
        r.PointArray.prototype = new r.Array();
        r.PointArray.prototype.constructor = r.PointArray;
        r.extend(r.PointArray, {
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
                for (var e = 0, n = this.value.length, i = []; e < n; e++) i.push([ this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t ]);
                return new r.PointArray(i);
            },
            parse: function(t) {
                var e = [];
                t = t.valueOf();
                // if it is an array
                if (Array.isArray(t)) {
                    // and it is not flat, there is no need to parse it
                    if (Array.isArray(t[0])) {
                        // make sure to use a clone
                        return t.map(function(t) {
                            return t.slice();
                        });
                    } else if (t[0].x != null) {
                        // allow point objects to be passed
                        return t.map(function(t) {
                            return [ t.x, t.y ];
                        });
                    }
                } else {
                    // Else, it is considered as a string
                    // parse points
                    t = t.trim().split(r.regex.delimiter).map(parseFloat);
                }
                // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
                // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.
                if (t.length % 2 !== 0) t.pop();
                // wrap points in two-tuples and parse points as floats
                for (var n = 0, i = t.length; n < i; n = n + 2) e.push([ t[n], t[n + 1] ]);
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
                r.parser.poly.setAttribute("points", this.toString());
                return r.parser.poly.getBBox();
            }
        });
        var i = {
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
        var a = "mlhvqtcsaz".split("");
        for (var s = 0, o = a.length; s < o; ++s) {
            i[a[s]] = function(t) {
                return function(e, n, r) {
                    if (t == "H") e[0] = e[0] + n.x; else if (t == "V") e[0] = e[0] + n.y; else if (t == "A") {
                        e[5] = e[5] + n.x, e[6] = e[6] + n.y;
                    } else for (var a = 0, s = e.length; a < s; ++a) {
                        e[a] = e[a] + (a % 2 ? n.y : n.x);
                    }
                    return i[t](e, n, r);
                };
            }(a[s].toUpperCase());
        }
        // Path points array
        r.PathArray = function(t, e) {
            r.Array.call(this, t, e || [ [ "M", 0, 0 ] ]);
        };
        // Inherit from SVG.Array
        r.PathArray.prototype = new r.Array();
        r.PathArray.prototype.constructor = r.PathArray;
        r.extend(r.PathArray, {
            // Convert array to string
            toString: function() {
                return _(this.value);
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
                var e, n, i;
                t = new r.PathArray(t);
                i = this.value.length === t.value.length;
                for (e = 0, n = this.value.length; i && e < n; e++) {
                    i = this.value[e][0] === t.value[e][0];
                }
                return i;
            },
            morph: function(t) {
                t = new r.PathArray(t);
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
                var e = this.value, n = this.destination.value, i = [], a = new r.PathArray(), s, o, u, f;
                // Animate has specified in the SVG spec
                // See: https://www.w3.org/TR/SVG11/paths.html#PathElement
                for (s = 0, o = e.length; s < o; s++) {
                    i[s] = [ e[s][0] ];
                    for (u = 1, f = e[s].length; u < f; u++) {
                        i[s][u] = e[s][u] + (n[s][u] - e[s][u]) * t;
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
                if (t instanceof r.PathArray) return t.valueOf();
                // prepare for parsing
                var e, n, a, s, o, u, l = 0, c = 0, h = {
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
                    t = t.replace(r.regex.numbersWithDots, f).replace(r.regex.pathLetters, " $& ").replace(r.regex.hyphen, "$1 -").trim().split(r.regex.delimiter);
                } else {
                    t = t.reduce(function(t, e) {
                        return [].concat.call(t, e);
                    }, []);
                }
                // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
                var u = [], d = new r.Point(), p = new r.Point(), v = 0, m = t.length;
                do {
                    // Test if we have a path letter
                    if (r.regex.isPathLetter.test(t[v])) {
                        s = t[v];
                        ++v;
                    } else if (s == "M") {
                        s = "L";
                    } else if (s == "m") {
                        s = "l";
                    }
                    u.push(i[s].call(null, t.slice(v, v = v + h[s.toUpperCase()]).map(parseFloat), d, p));
                } while (m > v);
                return u;
            },
            bbox: function() {
                r.parser.path.setAttribute("d", this.toString());
                return r.parser.path.getBBox();
            }
        });
        // Module for unit convertions
        r.Number = r.invent({
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
                    e = t.match(r.regex.numberAndUnit);
                    if (e) {
                        // make value numeric
                        this.value = parseFloat(e[1]);
                        // normalize
                        if (e[5] == "%") this.value /= 100; else if (e[5] == "s") this.value *= 1e3;
                        // store unit
                        this.unit = e[5];
                    }
                } else {
                    if (t instanceof r.Number) {
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
                    t = new r.Number(t);
                    return new r.Number(this + t, this.unit || t.unit);
                },
                minus: function(t) {
                    t = new r.Number(t);
                    return new r.Number(this - t, this.unit || t.unit);
                },
                times: function(t) {
                    t = new r.Number(t);
                    return new r.Number(this * t, this.unit || t.unit);
                },
                divide: function(t) {
                    t = new r.Number(t);
                    return new r.Number(this / t, this.unit || t.unit);
                },
                to: function(t) {
                    var e = new r.Number(this);
                    if (typeof t === "string") e.unit = t;
                    return e;
                },
                morph: function(t) {
                    this.destination = new r.Number(t);
                    if (t.relative) {
                        this.destination.value += this.value;
                    }
                    return this;
                },
                at: function(t) {
                    // Make sure a destination is defined
                    if (!this.destination) return this;
                    // Generate new morphed number
                    return new r.Number(this.destination).minus(this).times(t).plus(this);
                }
            }
        });
        r.Element = r.invent({
            // Initialize node
            create: function(t) {
                // make stroke value accessible dynamically
                this._stroke = r.defaults.attrs.stroke;
                this._event = null;
                this._events = {};
                // initialize data object
                this.dom = {};
                // create circular reference
                if (this.node = t) {
                    this.type = t.nodeName;
                    this.node.instance = this;
                    this._events = t._events || {};
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
                    var n = y(this, t, e);
                    return this.width(new r.Number(n.width)).height(new r.Number(n.height));
                },
                clone: function(t) {
                    // write dom data to the dom so the clone can pickup the data
                    this.writeDataToDom();
                    // clone element and assign new id
                    var e = C(this.node.cloneNode(true));
                    // insert the clone in the given parent or after myself
                    if (t) t.add(e); else this.after(e);
                    return e;
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
                    return t == null ? [] : t.trim().split(r.regex.delimiter);
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
                    return r.get(this.attr(t));
                },
                parent: function(e) {
                    var n = this;
                    // check for parent
                    if (!n.node.parentNode) return null;
                    // get parent element
                    n = r.adopt(n.node.parentNode);
                    if (!e) return n;
                    // loop trough ancestors if type is given
                    while (n && n.node instanceof t.SVGElement) {
                        if (typeof e === "string" ? n.matches(e) : n instanceof e) return n;
                        if (!n.node.parentNode || n.node.parentNode.nodeName == "#document" || n.node.parentNode.nodeName == "#document-fragment") return null;
                        // #759, #720
                        n = r.adopt(n.node.parentNode);
                    }
                },
                doc: function() {
                    return this instanceof r.Doc ? this : this.parent(r.Doc);
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
                    return h(this.node, t);
                },
                native: function() {
                    return this.node;
                },
                svg: function(t) {
                    // create temporary holder
                    var n = e.createElement("svg");
                    // act as a setter if svg is given
                    if (t && this instanceof r.Parent) {
                        // dump raw svg
                        n.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                        // transplant nodes
                        for (var i = 0, a = n.firstChild.childNodes.length; i < a; i++) this.node.appendChild(n.firstChild.firstChild);
                    } else {
                        // create a wrapping svg element in case of partial content
                        n.appendChild(t = e.createElement("svg"));
                        // write svgjs data to the dom
                        this.writeDataToDom();
                        // insert a copy of this node
                        t.appendChild(this.node.cloneNode(true));
                        // return target element
                        return n.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
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
                    return c(this, t);
                }
            }
        });
        r.easing = {
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
        r.morph = function(t) {
            return function(e, n) {
                return new r.MorphObj(e, n).at(t);
            };
        };
        r.Situation = r.invent({
            create: function(t) {
                this.init = false;
                this.reversed = false;
                this.reversing = false;
                this.duration = new r.Number(t.duration).valueOf();
                this.delay = new r.Number(t.delay).valueOf();
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
        r.FX = r.invent({
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
                animate: function(t, e, n) {
                    if (typeof t == "object") {
                        e = t.ease;
                        n = t.delay;
                        t = t.duration;
                    }
                    var i = new r.Situation({
                        duration: t || 1e3,
                        delay: n || 0,
                        ease: r.easing[e || "-"] || e
                    });
                    this.queue(i);
                    return this;
                },
                delay: function(t) {
                    // The delay is performed by an empty situation with its duration
                    // attribute set to the duration of the delay
                    var e = new r.Situation({
                        duration: t,
                        delay: 0,
                        ease: r.easing["-"]
                    });
                    return this.queue(e);
                },
                target: function(t) {
                    if (t && t instanceof r.Element) {
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
                    if (typeof t == "function" || t instanceof r.Situation) this.situations.push(t);
                    if (!this.situation) this.situation = this.situations.shift();
                    return this;
                },
                dequeue: function() {
                    // stop current animation
                    this.stop();
                    // get next animation from queue
                    this.situation = this.situations.shift();
                    if (this.situation) {
                        if (this.situation instanceof r.Situation) {
                            this.start();
                        } else {
                            // If it is not a SVG.Situation, then it is a function, we execute it
                            this.situation.call(this);
                        }
                    }
                    return this;
                },
                initAnimations: function() {
                    var t, e, n;
                    var i = this.situation;
                    if (i.init) return this;
                    for (t in i.animations) {
                        n = this.target()[t]();
                        if (!Array.isArray(n)) {
                            n = [ n ];
                        }
                        if (!Array.isArray(i.animations[t])) {
                            i.animations[t] = [ i.animations[t] ];
                        }
                        //if(s.animations[i].length > source.length) {
                        //  source.concat = source.concat(s.animations[i].slice(source.length, s.animations[i].length))
                        //}
                        for (e = n.length; e--; ) {
                            // The condition is because some methods return a normal number instead
                            // of a SVG.Number
                            if (i.animations[t][e] instanceof r.Number) n[e] = new r.Number(n[e]);
                            i.animations[t][e] = n[e].morph(i.animations[t][e]);
                        }
                    }
                    for (t in i.attrs) {
                        i.attrs[t] = new r.MorphObj(this.target().attr(t), i.attrs[t]);
                    }
                    for (t in i.styles) {
                        i.styles[t] = new r.MorphObj(this.target().style(t), i.styles[t]);
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
                    var e = this.last(), n = function(n) {
                        if (n.detail.situation == e) {
                            t.call(this, n.detail.pos, r.morph(n.detail.pos), n.detail.eased, e);
                        }
                    };
                    // see above
                    this.target().off("during.fx", n).on("during.fx", n);
                    this.after(function() {
                        this.off("during.fx", n);
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
                        t.call(this, e.detail.pos, r.morph(e.detail.pos), e.detail.eased, e.detail.situation);
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
                    var t, e, n, i = this, a = this.target(), s = this.situation;
                    // apply animations which can be called trough a method
                    for (t in s.animations) {
                        n = [].concat(s.animations[t]).map(function(t) {
                            return typeof t !== "string" && t.at ? t.at(s.ease(i.pos), i.pos) : t;
                        });
                        a[t].apply(a, n);
                    }
                    // apply animation which has to be applied with attr()
                    for (t in s.attrs) {
                        n = [ t ].concat(s.attrs[t]).map(function(t) {
                            return typeof t !== "string" && t.at ? t.at(s.ease(i.pos), i.pos) : t;
                        });
                        a.attr.apply(a, n);
                    }
                    // apply animation which has to be applied with style()
                    for (t in s.styles) {
                        n = [ t ].concat(s.styles[t]).map(function(t) {
                            return typeof t !== "string" && t.at ? t.at(s.ease(i.pos), i.pos) : t;
                        });
                        a.style.apply(a, n);
                    }
                    // animate initialTransformation which has to be chained
                    if (s.transforms.length) {
                        // get initial initialTransformation
                        n = s.initialTransformation;
                        for (t = 0, e = s.transforms.length; t < e; t++) {
                            // get next transformation in chain
                            var o = s.transforms[t];
                            // multiply matrix directly
                            if (o instanceof r.Matrix) {
                                if (o.relative) {
                                    n = n.multiply(new r.Matrix().morph(o).at(s.ease(this.pos)));
                                } else {
                                    n = n.morph(o).at(s.ease(this.pos));
                                }
                                continue;
                            }
                            // when transformation is absolute we have to reset the needed transformation first
                            if (!o.relative) o.undo(n.extract());
                            // and reapply it after
                            n = n.multiply(o.at(s.ease(this.pos)));
                        }
                        // set new matrix on element
                        a.matrix(n);
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
            parent: r.Element,
            construct: {
                // Get fx module or create a new one, then animate with given duration and ease
                animate: function(t, e, n) {
                    return (this.fx || (this.fx = new r.FX(this))).animate(t, e, n);
                },
                delay: function(t) {
                    return (this.fx || (this.fx = new r.FX(this))).delay(t);
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
        r.MorphObj = r.invent({
            create: function(t, e) {
                // prepare color for morphing
                if (r.Color.isColor(e)) return new r.Color(t).morph(e);
                // check if we have a list of values
                if (r.regex.delimiter.test(t)) {
                    // prepare path for morphing
                    if (r.regex.pathLetters.test(t)) return new r.PathArray(t).morph(e); else return new r.Array(t).morph(e);
                }
                // prepare number for morphing
                if (r.regex.numberAndUnit.test(e)) return new r.Number(t).morph(e);
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
        r.extend(r.FX, {
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
                if (this.target() instanceof r.G) {
                    this.transform({
                        x: t
                    }, e);
                    return this;
                }
                var n = new r.Number(t);
                n.relative = e;
                return this.add("x", n);
            },
            y: function(t, e) {
                if (this.target() instanceof r.G) {
                    this.transform({
                        y: t
                    }, e);
                    return this;
                }
                var n = new r.Number(t);
                n.relative = e;
                return this.add("y", n);
            },
            cx: function(t) {
                return this.add("cx", new r.Number(t));
            },
            cy: function(t) {
                return this.add("cy", new r.Number(t));
            },
            move: function(t, e) {
                return this.x(t).y(e);
            },
            center: function(t, e) {
                return this.cx(t).cy(e);
            },
            size: function(t, e) {
                if (this.target() instanceof r.Text) {
                    // animate font size for Text elements
                    this.attr("font-size", t);
                } else {
                    // animate bbox based size for all other elements
                    var n;
                    if (!t || !e) {
                        n = this.target().bbox();
                    }
                    if (!t) {
                        t = n.width / n.height * e;
                    }
                    if (!e) {
                        e = n.height / n.width * t;
                    }
                    this.add("width", new r.Number(t)).add("height", new r.Number(e));
                }
                return this;
            },
            width: function(t) {
                return this.add("width", new r.Number(t));
            },
            height: function(t) {
                return this.add("height", new r.Number(t));
            },
            plot: function(t, e, n, r) {
                // Lines can be plotted with 4 arguments
                if (arguments.length == 4) {
                    return this.plot([ t, e, n, r ]);
                }
                return this.add("plot", new (this.target().morphArray)(t));
            },
            leading: function(t) {
                return this.target().leading ? this.add("leading", new r.Number(t)) : this;
            },
            viewbox: function(t, e, n, i) {
                if (this.target() instanceof r.Container) {
                    this.add("viewbox", new r.ViewBox(t, e, n, i));
                }
                return this;
            },
            update: function(t) {
                if (this.target() instanceof r.Stop) {
                    if (typeof t == "number" || t instanceof r.Number) {
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
        r.Box = r.invent({
            create: function(t, e, n, i) {
                if (typeof t == "object" && !(t instanceof r.Element)) {
                    // chromes getBoundingClientRect has no x and y property
                    return r.Box.call(this, t.left != null ? t.left : t.x, t.top != null ? t.top : t.y, t.width, t.height);
                } else if (arguments.length == 4) {
                    this.x = t;
                    this.y = e;
                    this.width = n;
                    this.height = i;
                }
                // add center, right, bottom...
                k(this);
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
                    return k(e);
                },
                transform: function(t) {
                    var e = Infinity, n = -Infinity, i = Infinity, a = -Infinity, s, o;
                    var u = [ new r.Point(this.x, this.y), new r.Point(this.x2, this.y), new r.Point(this.x, this.y2), new r.Point(this.x2, this.y2) ];
                    u.forEach(function(r) {
                        r = r.transform(t);
                        e = Math.min(e, r.x);
                        n = Math.max(n, r.x);
                        i = Math.min(i, r.y);
                        a = Math.max(a, r.y);
                    });
                    o = new this.constructor();
                    o.x = e;
                    o.width = n - e;
                    o.y = i;
                    o.height = a - i;
                    k(o);
                    return o;
                }
            }
        });
        r.BBox = r.invent({
            // Initialize
            create: function(t) {
                r.Box.apply(this, [].slice.call(arguments));
                // get values if element is given
                if (t instanceof r.Element) {
                    var n;
                    // yes this is ugly, but Firefox can be a pain when it comes to elements that are not yet rendered
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
                        n = t.node.getBBox();
                    } catch (e) {
                        if (t instanceof r.Shape) {
                            var a = t.clone(r.parser.draw.instance).show();
                            n = a.node.getBBox();
                            a.remove();
                        } else {
                            n = {
                                x: t.node.clientLeft,
                                y: t.node.clientTop,
                                width: t.node.clientWidth,
                                height: t.node.clientHeight
                            };
                        }
                    }
                    r.Box.call(this, n);
                }
            },
            inherit: r.Box,
            parent: r.Element,
            construct: {
                // Get bounding box
                bbox: function() {
                    return new r.BBox(this);
                }
            }
        });
        r.BBox.prototype.constructor = r.BBox;
        r.extend(r.Element, {
            tbox: function() {
                console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead.");
                return this.rbox(this.doc());
            }
        });
        r.RBox = r.invent({
            // Initialize
            create: function(t) {
                r.Box.apply(this, [].slice.call(arguments));
                if (t instanceof r.Element) {
                    r.Box.call(this, t.node.getBoundingClientRect());
                }
            },
            inherit: r.Box,
            parent: r.Element,
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
                    if (t) return new r.RBox(this).transform(t.screenCTM().inverse());
                    return new r.RBox(this).addOffset();
                }
            }
        });
        r.RBox.prototype.constructor = r.RBox;
        r.Matrix = r.invent({
            // Initialize
            create: function(t) {
                var e, n = b([ 1, 0, 0, 1, 0, 0 ]);
                // ensure source as object
                t = t instanceof r.Element ? t.matrixify() : typeof t === "string" ? b(t.split(r.regex.delimiter).map(parseFloat)) : arguments.length == 6 ? b([].slice.call(arguments)) : Array.isArray(t) ? b(t) : typeof t === "object" ? t : n;
                // merge source
                for (e = S.length - 1; e >= 0; --e) this[S[e]] = t[S[e]] != null ? t[S[e]] : n[S[e]];
            },
            extend: {
                // Extract individual transformations
                extract: function() {
                    // find delta transform points
                    var t = g(this, 0, 1), e = g(this, 1, 0), n = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
                    return {
                        // translation
                        x: this.e,
                        y: this.f,
                        transformedX: (this.e * Math.cos(n * Math.PI / 180) + this.f * Math.sin(n * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                        transformedY: (this.f * Math.cos(n * Math.PI / 180) + this.e * Math.sin(-n * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                        skewX: -n,
                        skewY: 180 / Math.PI * Math.atan2(e.y, e.x),
                        scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
                        scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
                        rotation: n,
                        a: this.a,
                        b: this.b,
                        c: this.c,
                        d: this.d,
                        e: this.e,
                        f: this.f,
                        matrix: new r.Matrix(this)
                    };
                },
                clone: function() {
                    return new r.Matrix(this);
                },
                morph: function(t) {
                    // store new destination
                    this.destination = new r.Matrix(t);
                    return this;
                },
                at: function(t) {
                    // make sure a destination is defined
                    if (!this.destination) return this;
                    // calculate morphed matrix at a given position
                    var e = new r.Matrix({
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
                    return new r.Matrix(this.native().multiply(x(t).native()));
                },
                inverse: function() {
                    return new r.Matrix(this.native().inverse());
                },
                translate: function(t, e) {
                    return new r.Matrix(this.native().translate(t || 0, e || 0));
                },
                scale: function(t, e, n, i) {
                    // support uniformal scale
                    if (arguments.length == 1) {
                        e = t;
                    } else if (arguments.length == 3) {
                        i = n;
                        n = e;
                        e = t;
                    }
                    return this.around(n, i, new r.Matrix(t, 0, 0, e, 0, 0));
                },
                rotate: function(t, e, n) {
                    // convert degrees to radians
                    t = r.utils.radians(t);
                    return this.around(e, n, new r.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0));
                },
                flip: function(t, e) {
                    return t == "x" ? this.scale(-1, 1, e, 0) : t == "y" ? this.scale(1, -1, 0, e) : this.scale(-1, -1, t, e != null ? e : t);
                },
                skew: function(t, e, n, i) {
                    // support uniformal skew
                    if (arguments.length == 1) {
                        e = t;
                    } else if (arguments.length == 3) {
                        i = n;
                        n = e;
                        e = t;
                    }
                    // convert degrees to radians
                    t = r.utils.radians(t);
                    e = r.utils.radians(e);
                    return this.around(n, i, new r.Matrix(1, Math.tan(e), Math.tan(t), 1, 0, 0));
                },
                skewX: function(t, e, n) {
                    return this.skew(t, 0, e, n);
                },
                skewY: function(t, e, n) {
                    return this.skew(0, t, e, n);
                },
                around: function(t, e, n) {
                    return this.multiply(new r.Matrix(1, 0, 0, 1, t || 0, e || 0)).multiply(n).multiply(new r.Matrix(1, 0, 0, 1, -t || 0, -e || 0));
                },
                native: function() {
                    // create new matrix
                    var t = r.parser.native.createSVGMatrix();
                    // update with current values
                    for (var e = S.length - 1; e >= 0; e--) t[S[e]] = this[S[e]];
                    return t;
                },
                toString: function() {
                    // Construct the matrix directly, avoid values that are too small
                    return "matrix(" + $(this.a) + "," + $(this.b) + "," + $(this.c) + "," + $(this.d) + "," + $(this.e) + "," + $(this.f) + ")";
                }
            },
            parent: r.Element,
            construct: {
                // Get current matrix
                ctm: function() {
                    return new r.Matrix(this.node.getCTM());
                },
                // Get current screen matrix
                screenCTM: function() {
                    /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
         This is needed because FF does not return the transformation matrix
         for the inner coordinate system when getScreenCTM() is called on nested svgs.
         However all other Browsers do that */
                    if (this instanceof r.Nested) {
                        var t = this.rect(1, 1);
                        var e = t.node.getScreenCTM();
                        t.remove();
                        return new r.Matrix(e);
                    }
                    return new r.Matrix(this.node.getScreenCTM());
                }
            }
        });
        r.Point = r.invent({
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
                    return new r.Point(this);
                },
                morph: function(t, e) {
                    // store new destination
                    this.destination = new r.Point(t, e);
                    return this;
                },
                at: function(t) {
                    // make sure a destination is defined
                    if (!this.destination) return this;
                    // calculate morphed matrix at a given position
                    var e = new r.Point({
                        x: this.x + (this.destination.x - this.x) * t,
                        y: this.y + (this.destination.y - this.y) * t
                    });
                    return e;
                },
                native: function() {
                    // create new point
                    var t = r.parser.native.createSVGPoint();
                    // update with current values
                    t.x = this.x;
                    t.y = this.y;
                    return t;
                },
                transform: function(t) {
                    return new r.Point(this.native().matrixTransform(t.native()));
                }
            }
        });
        r.extend(r.Element, {
            // Get point
            point: function(t, e) {
                return new r.Point(t, e).transform(this.screenCTM().inverse());
            }
        });
        r.extend(r.Element, {
            // Set svg element attribute
            attr: function(t, e, n) {
                // act as full getter
                if (t == null) {
                    // get an object of attributes
                    t = {};
                    e = this.node.attributes;
                    for (n = e.length - 1; n >= 0; n--) t[e[n].nodeName] = r.regex.isNumber.test(e[n].nodeValue) ? parseFloat(e[n].nodeValue) : e[n].nodeValue;
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
                    return e == null ? r.defaults.attrs[t] : r.regex.isNumber.test(e) ? parseFloat(e) : e;
                } else {
                    // BUG FIX: some browsers will render a stroke if a color is given even though stroke width is 0
                    if (t == "stroke-width") this.attr("stroke", parseFloat(e) > 0 ? this._stroke : null); else if (t == "stroke") this._stroke = e;
                    // convert image fill and stroke to patterns
                    if (t == "fill" || t == "stroke") {
                        if (r.regex.isImage.test(e)) e = this.doc().defs().image(e, 0, 0);
                        if (e instanceof r.Image) e = this.doc().defs().pattern(0, 0, function() {
                            this.add(e);
                        });
                    }
                    // ensure correct numeric values (also accepts NaN and Infinity)
                    if (typeof e === "number") e = new r.Number(e); else if (r.Color.isColor(e)) e = new r.Color(e); else if (Array.isArray(e)) e = new r.Array(e);
                    // if the passed attribute is leading...
                    if (t == "leading") {
                        // ... call the leading method instead
                        if (this.leading) this.leading(e);
                    } else {
                        // set given attribute on node
                        typeof n === "string" ? this.node.setAttributeNS(n, t, e.toString()) : this.node.setAttribute(t, e.toString());
                    }
                    // rebuild if required
                    if (this.rebuild && (t == "font-size" || t == "x")) this.rebuild(t, e);
                }
                return this;
            }
        });
        r.extend(r.Element, {
            // Add transformations
            transform: function(t, e) {
                // get target in case of the fx module, otherwise reference this
                var n = this, i, a;
                // act as a getter
                if (typeof t !== "object") {
                    // get current matrix
                    i = new r.Matrix(n).extract();
                    return typeof t === "string" ? i[t] : i;
                }
                // get current matrix
                i = new r.Matrix(n);
                // ensure relative flag
                e = !!e || !!t.relative;
                // act on matrix
                if (t.a != null) {
                    i = e ? // relative
                    i.multiply(new r.Matrix(t)) : // absolute
                    new r.Matrix(t);
                } else if (t.rotation != null) {
                    // ensure centre point
                    w(t, n);
                    // apply transformation
                    i = e ? // relative
                    i.rotate(t.rotation, t.cx, t.cy) : // absolute
                    i.rotate(t.rotation - i.extract().rotation, t.cx, t.cy);
                } else if (t.scale != null || t.scaleX != null || t.scaleY != null) {
                    // ensure centre point
                    w(t, n);
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
                    w(t, n);
                    // ensure skew values on both axes
                    t.skewX = t.skew != null ? t.skew : t.skewX != null ? t.skewX : 0;
                    t.skewY = t.skew != null ? t.skew : t.skewY != null ? t.skewY : 0;
                    if (!e) {
                        // absolute; reset skew values
                        var s = i.extract();
                        i = i.multiply(new r.Matrix().skew(s.skewX, s.skewY, t.cx, t.cy).inverse());
                    }
                    i = i.skew(t.skewX, t.skewY, t.cx, t.cy);
                } else if (t.flip) {
                    if (t.flip == "x" || t.flip == "y") {
                        t.offset = t.offset == null ? n.bbox()["c" + t.flip] : t.offset;
                    } else {
                        if (t.offset == null) {
                            a = n.bbox();
                            t.flip = a.cx;
                            t.offset = a.cy;
                        } else {
                            t.flip = t.offset;
                        }
                    }
                    i = new r.Matrix().flip(t.flip, t.offset);
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
        r.extend(r.FX, {
            transform: function(t, e) {
                // get target in case of the fx module, otherwise reference this
                var n = this.target(), i, a;
                // act as a getter
                if (typeof t !== "object") {
                    // get current matrix
                    i = new r.Matrix(n).extract();
                    return typeof t === "string" ? i[t] : i;
                }
                // ensure relative flag
                e = !!e || !!t.relative;
                // act on matrix
                if (t.a != null) {
                    i = new r.Matrix(t);
                } else if (t.rotation != null) {
                    // ensure centre point
                    w(t, n);
                    // apply transformation
                    i = new r.Rotate(t.rotation, t.cx, t.cy);
                } else if (t.scale != null || t.scaleX != null || t.scaleY != null) {
                    // ensure centre point
                    w(t, n);
                    // ensure scale values on both axes
                    t.scaleX = t.scale != null ? t.scale : t.scaleX != null ? t.scaleX : 1;
                    t.scaleY = t.scale != null ? t.scale : t.scaleY != null ? t.scaleY : 1;
                    i = new r.Scale(t.scaleX, t.scaleY, t.cx, t.cy);
                } else if (t.skewX != null || t.skewY != null) {
                    // ensure centre point
                    w(t, n);
                    // ensure skew values on both axes
                    t.skewX = t.skewX != null ? t.skewX : 0;
                    t.skewY = t.skewY != null ? t.skewY : 0;
                    i = new r.Skew(t.skewX, t.skewY, t.cx, t.cy);
                } else if (t.flip) {
                    if (t.flip == "x" || t.flip == "y") {
                        t.offset = t.offset == null ? n.bbox()["c" + t.flip] : t.offset;
                    } else {
                        if (t.offset == null) {
                            a = n.bbox();
                            t.flip = a.cx;
                            t.offset = a.cy;
                        } else {
                            t.flip = t.offset;
                        }
                    }
                    i = new r.Matrix().flip(t.flip, t.offset);
                } else if (t.x != null || t.y != null) {
                    i = new r.Translate(t.x, t.y);
                }
                if (!i) return this;
                i.relative = e;
                this.last().transforms.push(i);
                return this._callStart();
            }
        });
        r.extend(r.Element, {
            // Reset all transformations
            untransform: function() {
                return this.attr("transform", null);
            },
            // merge the whole transformation chain into one matrix and returns it
            matrixify: function() {
                var t = (this.attr("transform") || "").split(r.regex.transforms).slice(0, -1).map(function(t) {
                    // generate key => value pairs
                    var e = t.trim().split("(");
                    return [ e[0], e[1].split(r.regex.delimiter).map(function(t) {
                        return parseFloat(t);
                    }) ];
                }).reduce(function(t, e) {
                    if (e[0] == "matrix") return t.multiply(b(e[1]));
                    return t[e[0]].apply(t, e[1]);
                }, new r.Matrix());
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
        r.Transformation = r.invent({
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
                    for (var n = 0, i = this.arguments.length; n < i; ++n) {
                        e.push(this[this.arguments[n]]);
                    }
                    var a = this._undo || new r.Matrix();
                    a = new r.Matrix().morph(r.Matrix.prototype[this.method].apply(a, e)).at(t);
                    return this.inversed ? a.inverse() : a;
                },
                undo: function(t) {
                    for (var e = 0, n = this.arguments.length; e < n; ++e) {
                        t[this.arguments[e]] = typeof this[this.arguments[e]] == "undefined" ? 0 : t[this.arguments[e]];
                    }
                    // The method SVG.Matrix.extract which was used before calling this
                    // method to obtain a value for the parameter o doesn't return a cx and
                    // a cy so we use the ones that were provided to this object at its creation
                    t.cx = this.cx;
                    t.cy = this.cy;
                    this._undo = new (r[p(this.method)])(t, true).at(1);
                    return this;
                }
            }
        });
        r.Translate = r.invent({
            parent: r.Matrix,
            inherit: r.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "transformedX", "transformedY" ],
                method: "translate"
            }
        });
        r.Rotate = r.invent({
            parent: r.Matrix,
            inherit: r.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "rotation", "cx", "cy" ],
                method: "rotate",
                at: function(t) {
                    var e = new r.Matrix().rotate(new r.Number().morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(t), this.cx, this.cy);
                    return this.inversed ? e.inverse() : e;
                },
                undo: function(t) {
                    this._undo = t;
                    return this;
                }
            }
        });
        r.Scale = r.invent({
            parent: r.Matrix,
            inherit: r.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "scaleX", "scaleY", "cx", "cy" ],
                method: "scale"
            }
        });
        r.Skew = r.invent({
            parent: r.Matrix,
            inherit: r.Transformation,
            create: function(t, e) {
                this.constructor.apply(this, [].slice.call(arguments));
            },
            extend: {
                arguments: [ "skewX", "skewY", "cx", "cy" ],
                method: "skew"
            }
        });
        r.extend(r.Element, {
            // Dynamic style generator
            style: function(t, e) {
                if (arguments.length == 0) {
                    // get full style
                    return this.node.style.cssText || "";
                } else if (arguments.length < 2) {
                    // apply every style individually if an object is passed
                    if (typeof t == "object") {
                        for (e in t) this.style(e, t[e]);
                    } else if (r.regex.isCss.test(t)) {
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
                        return this.node.style[d(t)];
                    }
                } else {
                    this.node.style[d(t)] = e === null || r.regex.isBlank.test(e) ? "" : e;
                }
                return this;
            }
        });
        r.Parent = r.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, t);
            },
            inherit: r.Element,
            extend: {
                // Returns all child elements
                children: function() {
                    return r.utils.map(r.utils.filterSVGElements(this.node.childNodes), function(t) {
                        return r.adopt(t);
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
                    return r.adopt(this.node.childNodes[t]);
                },
                first: function() {
                    return this.get(0);
                },
                last: function() {
                    return this.get(this.node.childNodes.length - 1);
                },
                each: function(t, e) {
                    var n, i, a = this.children();
                    for (n = 0, i = a.length; n < i; n++) {
                        if (a[n] instanceof r.Element) t.apply(a[n], [ n, a ]);
                        if (e && a[n] instanceof r.Container) a[n].each(t, e);
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
        r.extend(r.Parent, {
            ungroup: function(t, e) {
                if (e === 0 || this instanceof r.Defs || this.node == r.parser.draw) return this;
                t = t || (this instanceof r.Doc ? this : this.parent(r.Parent));
                e = e || Infinity;
                this.each(function() {
                    if (this instanceof r.Defs) return this;
                    if (this instanceof r.Parent) return this.ungroup(t, e - 1);
                    return this.toParent(t);
                });
                this.node.firstChild || this.remove();
                return this;
            },
            flatten: function(t, e) {
                return this.ungroup(t, e);
            }
        });
        r.Container = r.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, t);
            },
            inherit: r.Parent
        });
        r.ViewBox = r.invent({
            create: function(t) {
                var e, n = [ 0, 0, 0, 0 ];
                var i, a, s, o, u, f, l, c, h = 1, d = 1, p = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
                if (t instanceof r.Element) {
                    l = t;
                    c = t;
                    f = (t.attr("viewBox") || "").match(p);
                    u = t.bbox;
                    // get dimensions of current node
                    s = new r.Number(t.width());
                    o = new r.Number(t.height());
                    // find nearest non-percentual dimensions
                    while (s.unit == "%") {
                        h *= s.value;
                        s = new r.Number(l instanceof r.Doc ? l.parent().offsetWidth : l.parent().width());
                        l = l.parent();
                    }
                    while (o.unit == "%") {
                        d *= o.value;
                        o = new r.Number(c instanceof r.Doc ? c.parent().offsetHeight : c.parent().height());
                        c = c.parent();
                    }
                    // ensure defaults
                    this.x = 0;
                    this.y = 0;
                    this.width = s * h;
                    this.height = o * d;
                    this.zoom = 1;
                    if (f) {
                        // get width and height from viewbox
                        i = parseFloat(f[0]);
                        a = parseFloat(f[1]);
                        s = parseFloat(f[2]);
                        o = parseFloat(f[3]);
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
                    }) : Array.isArray(t) ? t : typeof t == "object" ? [ t.x, t.y, t.width, t.height ] : arguments.length == 4 ? [].slice.call(arguments) : n;
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
                morph: function(t, e, n, i) {
                    this.destination = new r.ViewBox(t, e, n, i);
                    return this;
                },
                at: function(t) {
                    if (!this.destination) return this;
                    return new r.ViewBox([ this.x + (this.destination.x - this.x) * t, this.y + (this.destination.y - this.y) * t, this.width + (this.destination.width - this.width) * t, this.height + (this.destination.height - this.height) * t ]);
                }
            },
            parent: r.Container,
            construct: {
                // get/set viewbox
                viewbox: function(t, e, n, i) {
                    if (arguments.length == 0) // act as a getter if there are no arguments
                    return new r.ViewBox(this);
                    // otherwise act as a setter
                    return this.attr("viewBox", new r.ViewBox(t, e, n, i));
                }
            }
        });
        [ "click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel" ].forEach(function(t) {
            // add event to SVG.Element
            r.Element.prototype[t] = function(e) {
                // bind event to element rather than element node
                if (e == null) {
                    r.off(this, t);
                } else {
                    r.on(this, t, e);
                }
                return this;
            };
        });
        r.listenerId = 0;
        // Add event binder in the SVG namespace
        r.on = function(t, e, n, i, a) {
            var s = n.bind(i || t);
            var o = t instanceof r.Element ? t.node : t;
            // ensure instance object for nodes which are not adopted
            o.instance = o.instance || {
                _events: {}
            };
            var u = o.instance._events;
            // add id to listener
            if (!n._svgjsListenerId) {
                n._svgjsListenerId = ++r.listenerId;
            }
            e.split(r.regex.delimiter).forEach(function(t) {
                var e = t.split(".")[0];
                var r = t.split(".")[1] || "*";
                // ensure valid object
                u[e] = u[e] || {};
                u[e][r] = u[e][r] || {};
                // reference listener
                u[e][r][n._svgjsListenerId] = s;
                // add listener
                o.addEventListener(e, s, a || false);
            });
        };
        // Add event unbinder in the SVG namespace
        r.off = function(t, e, n, i) {
            var a = t instanceof r.Element ? t.node : t;
            if (!a.instance) return;
            // listener can be a function or a number
            if (typeof n === "function") {
                n = n._svgjsListenerId;
                if (!n) return;
            }
            var s = a.instance._events;
            (e || "").split(r.regex.delimiter).forEach(function(t) {
                var e = t && t.split(".")[0];
                var o = t && t.split(".")[1];
                var u, f;
                if (n) {
                    // remove listener reference
                    if (s[e] && s[e][o || "*"]) {
                        // removeListener
                        a.removeEventListener(e, s[e][o || "*"][n], i || false);
                        delete s[e][o || "*"][n];
                    }
                } else if (e && o) {
                    // remove all listeners for a namespaced event
                    if (s[e] && s[e][o]) {
                        for (f in s[e][o]) {
                            r.off(a, [ e, o ].join("."), f);
                        }
                        delete s[e][o];
                    }
                } else if (o) {
                    // remove all listeners for a specific namespace
                    for (t in s) {
                        for (u in s[t]) {
                            if (o === u) {
                                r.off(a, [ t, o ].join("."));
                            }
                        }
                    }
                } else if (e) {
                    // remove all listeners for the event
                    if (s[e]) {
                        for (u in s[e]) {
                            r.off(a, [ e, u ].join("."));
                        }
                        delete s[e];
                    }
                } else {
                    // remove all listeners on a given node
                    for (t in s) {
                        r.off(a, t);
                    }
                    a.instance._events = {};
                }
            });
        };
        r.extend(r.Element, {
            // Bind given event to listener
            on: function(t, e, n, i) {
                r.on(this, t, e, n, i);
                return this;
            },
            // Unbind event from listener
            off: function(t, e) {
                r.off(this.node, t, e);
                return this;
            },
            fire: function(e, n) {
                // Dispatch event
                if (e instanceof t.Event) {
                    this.node.dispatchEvent(e);
                } else {
                    this.node.dispatchEvent(e = new r.CustomEvent(e, {
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
        r.Defs = r.invent({
            // Initialize node
            create: "defs",
            inherit: r.Container
        });
        r.G = r.invent({
            // Initialize node
            create: "g",
            inherit: r.Container,
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
                    return this.put(new r.G());
                }
            }
        });
        r.Doc = r.invent({
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
                        this.constructor.call(this, r.create("svg"));
                        t.appendChild(this.node);
                        this.size("100%", "100%");
                    }
                    // set svg element attributes and ensure defs node
                    this.namespace().defs();
                }
            },
            inherit: r.Container,
            extend: {
                // Add namespaces
                namespace: function() {
                    return this.attr({
                        xmlns: r.ns,
                        version: "1.1"
                    }).attr("xmlns:xlink", r.xlink, r.xmlns).attr("xmlns:svgjs", r.svgjs, r.xmlns);
                },
                defs: function() {
                    if (!this._defs) {
                        var t;
                        // Find or create a defs element in this instance
                        if (t = this.node.getElementsByTagName("defs")[0]) this._defs = r.adopt(t); else this._defs = new r.Defs();
                        // Make sure the defs node is at the end of the stack
                        this.node.appendChild(this._defs.node);
                    }
                    return this._defs;
                },
                parent: function() {
                    if (!this.node.parentNode || this.node.parentNode.nodeName == "#document" || this.node.parentNode.nodeName == "#document-fragment") return null;
                    return this.node.parentNode;
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
                    if (!r.parser.draw.parentNode) this.node.appendChild(r.parser.draw);
                    return this;
                },
                clone: function(t) {
                    // write dom data to the dom so the clone can pickup the data
                    this.writeDataToDom();
                    // get reference to node
                    var e = this.node;
                    // clone element and assign new id
                    var n = C(e.cloneNode(true));
                    // insert the clone in the given parent or after myself
                    if (t) {
                        (t.node || t).appendChild(n.node);
                    } else {
                        e.parentNode.insertBefore(n.node, e.nextSibling);
                    }
                    return n;
                }
            }
        });
        // ### This module adds backward / forward functionality to elements.
        //
        r.extend(r.Element, {
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
                if (e instanceof r.Doc) e.node.appendChild(e.defs().node);
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
                if (t instanceof r.Doc) t.node.appendChild(t.defs().node);
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
        r.Mask = r.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, r.create("mask"));
                // keep references to masked elements
                this.targets = [];
            },
            inherit: r.Container,
            extend: {
                // Unmask all masked elements and remove itself
                remove: function() {
                    // unmask all targets
                    for (var t = this.targets.length - 1; t >= 0; t--) if (this.targets[t]) this.targets[t].unmask();
                    this.targets = [];
                    // remove mask from parent
                    r.Element.prototype.remove.call(this);
                    return this;
                }
            },
            construct: {
                // Create masking element
                mask: function() {
                    return this.defs().put(new r.Mask());
                }
            }
        });
        r.extend(r.Element, {
            // Distribute mask to svg element
            maskWith: function(t) {
                // use given mask or create a new one
                this.masker = t instanceof r.Mask ? t : this.parent().mask().add(t);
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
        r.ClipPath = r.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, r.create("clipPath"));
                // keep references to clipped elements
                this.targets = [];
            },
            inherit: r.Container,
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
                    return this.defs().put(new r.ClipPath());
                }
            }
        });
        //
        r.extend(r.Element, {
            // Distribute clipPath to svg element
            clipWith: function(t) {
                // use given clip or create a new one
                this.clipper = t instanceof r.ClipPath ? t : this.parent().clip().add(t);
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
        r.Gradient = r.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, r.create(t + "Gradient"));
                // store type
                this.type = t;
            },
            inherit: r.Container,
            extend: {
                // Add a color stop
                at: function(t, e, n) {
                    return this.put(new r.Stop()).update(t, e, n);
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
                attr: function(t, e, n) {
                    if (t == "transform") t = "gradientTransform";
                    return r.Container.prototype.attr.call(this, t, e, n);
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
        r.extend(r.Gradient, r.FX, {
            // From position
            from: function(t, e) {
                return (this._target || this).type == "radial" ? this.attr({
                    fx: new r.Number(t),
                    fy: new r.Number(e)
                }) : this.attr({
                    x1: new r.Number(t),
                    y1: new r.Number(e)
                });
            },
            to: function(t, e) {
                return (this._target || this).type == "radial" ? this.attr({
                    cx: new r.Number(t),
                    cy: new r.Number(e)
                }) : this.attr({
                    x2: new r.Number(t),
                    y2: new r.Number(e)
                });
            }
        });
        // Base gradient generation
        r.extend(r.Defs, {
            // define gradient
            gradient: function(t, e) {
                return this.put(new r.Gradient(t)).update(e);
            }
        });
        r.Stop = r.invent({
            // Initialize node
            create: "stop",
            inherit: r.Element,
            extend: {
                // add color stops
                update: function(t) {
                    if (typeof t == "number" || t instanceof r.Number) {
                        t = {
                            offset: arguments[0],
                            color: arguments[1],
                            opacity: arguments[2]
                        };
                    }
                    // set attributes
                    if (t.opacity != null) this.attr("stop-opacity", t.opacity);
                    if (t.color != null) this.attr("stop-color", t.color);
                    if (t.offset != null) this.attr("offset", new r.Number(t.offset));
                    return this;
                }
            }
        });
        r.Pattern = r.invent({
            // Initialize node
            create: "pattern",
            inherit: r.Container,
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
                attr: function(t, e, n) {
                    if (t == "transform") t = "patternTransform";
                    return r.Container.prototype.attr.call(this, t, e, n);
                }
            },
            construct: {
                // Create pattern element in defs
                pattern: function(t, e, n) {
                    return this.defs().pattern(t, e, n);
                }
            }
        });
        r.extend(r.Defs, {
            // Define gradient
            pattern: function(t, e, n) {
                return this.put(new r.Pattern()).update(n).attr({
                    x: 0,
                    y: 0,
                    width: t,
                    height: e,
                    patternUnits: "userSpaceOnUse"
                });
            }
        });
        r.Shape = r.invent({
            // Initialize node
            create: function(t) {
                this.constructor.call(this, t);
            },
            inherit: r.Element
        });
        r.Bare = r.invent({
            // Initialize
            create: function(t, e) {
                // construct element
                this.constructor.call(this, r.create(t));
                // inherit custom methods
                if (e) for (var n in e.prototype) if (typeof e.prototype[n] === "function") this[n] = e.prototype[n];
            },
            inherit: r.Element,
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
        r.extend(r.Parent, {
            // Create an element that is not described by SVG.js
            element: function(t, e) {
                return this.put(new r.Bare(t, e));
            }
        });
        r.Symbol = r.invent({
            // Initialize node
            create: "symbol",
            inherit: r.Container,
            construct: {
                // create symbol
                symbol: function() {
                    return this.put(new r.Symbol());
                }
            }
        });
        r.Use = r.invent({
            // Initialize node
            create: "use",
            inherit: r.Shape,
            extend: {
                // Use element as a reference
                element: function(t, e) {
                    // Set lined element
                    return this.attr("href", (e || "") + "#" + t, r.xlink);
                }
            },
            construct: {
                // Create a use element
                use: function(t, e) {
                    return this.put(new r.Use()).element(t, e);
                }
            }
        });
        r.Rect = r.invent({
            // Initialize node
            create: "rect",
            inherit: r.Shape,
            construct: {
                // Create a rect element
                rect: function(t, e) {
                    return this.put(new r.Rect()).size(t, e);
                }
            }
        });
        r.Circle = r.invent({
            // Initialize node
            create: "circle",
            inherit: r.Shape,
            construct: {
                // Create circle element, based on ellipse
                circle: function(t) {
                    return this.put(new r.Circle()).rx(new r.Number(t).divide(2)).move(0, 0);
                }
            }
        });
        r.extend(r.Circle, r.FX, {
            // Radius x value
            rx: function(t) {
                return this.attr("r", t);
            },
            ry: function(t) {
                return this.rx(t);
            }
        });
        r.Ellipse = r.invent({
            // Initialize node
            create: "ellipse",
            inherit: r.Shape,
            construct: {
                // Create an ellipse
                ellipse: function(t, e) {
                    return this.put(new r.Ellipse()).size(t, e).move(0, 0);
                }
            }
        });
        r.extend(r.Ellipse, r.Rect, r.FX, {
            // Radius x value
            rx: function(t) {
                return this.attr("rx", t);
            },
            ry: function(t) {
                return this.attr("ry", t);
            }
        });
        // Add common method
        r.extend(r.Circle, r.Ellipse, {
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
                return t == null ? this.rx() * 2 : this.rx(new r.Number(t).divide(2));
            },
            height: function(t) {
                return t == null ? this.ry() * 2 : this.ry(new r.Number(t).divide(2));
            },
            size: function(t, e) {
                var n = y(this, t, e);
                return this.rx(new r.Number(n.width).divide(2)).ry(new r.Number(n.height).divide(2));
            }
        });
        r.Line = r.invent({
            // Initialize node
            create: "line",
            inherit: r.Shape,
            extend: {
                // Get array
                array: function() {
                    return new r.PointArray([ [ this.attr("x1"), this.attr("y1") ], [ this.attr("x2"), this.attr("y2") ] ]);
                },
                plot: function(t, e, n, i) {
                    if (t == null) return this.array(); else if (typeof e !== "undefined") t = {
                        x1: t,
                        y1: e,
                        x2: n,
                        y2: i
                    }; else t = new r.PointArray(t).toLine();
                    return this.attr(t);
                },
                move: function(t, e) {
                    return this.attr(this.array().move(t, e).toLine());
                },
                size: function(t, e) {
                    var n = y(this, t, e);
                    return this.attr(this.array().size(n.width, n.height).toLine());
                }
            },
            construct: {
                // Create a line element
                line: function(t, e, n, i) {
                    // make sure plot is called as a setter
                    // x1 is not necessarily a number, it can also be an array, a string and a SVG.PointArray
                    return r.Line.prototype.plot.apply(this.put(new r.Line()), t != null ? [ t, e, n, i ] : [ 0, 0, 0, 0 ]);
                }
            }
        });
        r.Polyline = r.invent({
            // Initialize node
            create: "polyline",
            inherit: r.Shape,
            construct: {
                // Create a wrapped polyline element
                polyline: function(t) {
                    // make sure plot is called as a setter
                    return this.put(new r.Polyline()).plot(t || new r.PointArray());
                }
            }
        });
        r.Polygon = r.invent({
            // Initialize node
            create: "polygon",
            inherit: r.Shape,
            construct: {
                // Create a wrapped polygon element
                polygon: function(t) {
                    // make sure plot is called as a setter
                    return this.put(new r.Polygon()).plot(t || new r.PointArray());
                }
            }
        });
        // Add polygon-specific functions
        r.extend(r.Polyline, r.Polygon, {
            // Get array
            array: function() {
                return this._array || (this._array = new r.PointArray(this.attr("points")));
            },
            plot: function(t) {
                return t == null ? this.array() : this.clear().attr("points", typeof t == "string" ? t : this._array = new r.PointArray(t));
            },
            clear: function() {
                delete this._array;
                return this;
            },
            move: function(t, e) {
                return this.attr("points", this.array().move(t, e));
            },
            size: function(t, e) {
                var n = y(this, t, e);
                return this.attr("points", this.array().size(n.width, n.height));
            }
        });
        // unify all point to point elements
        r.extend(r.Line, r.Polyline, r.Polygon, {
            // Define morphable array
            morphArray: r.PointArray,
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
        r.Path = r.invent({
            // Initialize node
            create: "path",
            inherit: r.Shape,
            extend: {
                // Define morphable array
                morphArray: r.PathArray,
                array: function() {
                    return this._array || (this._array = new r.PathArray(this.attr("d")));
                },
                plot: function(t) {
                    return t == null ? this.array() : this.clear().attr("d", typeof t == "string" ? t : this._array = new r.PathArray(t));
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
                    var n = y(this, t, e);
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
                    return this.put(new r.Path()).plot(t || new r.PathArray());
                }
            }
        });
        r.Image = r.invent({
            // Initialize node
            create: "image",
            inherit: r.Shape,
            extend: {
                // (re)load image
                load: function(e) {
                    if (!e) return this;
                    var n = this, i = new t.Image();
                    // preload image
                    r.on(i, "load", function() {
                        r.off(i);
                        var t = n.parent(r.Pattern);
                        if (t === null) return;
                        // ensure image size
                        if (n.width() == 0 && n.height() == 0) n.size(i.width, i.height);
                        // ensure pattern size if not set
                        if (t && t.width() == 0 && t.height() == 0) t.size(n.width(), n.height());
                        // callback
                        if (typeof n._loaded === "function") n._loaded.call(n, {
                            width: i.width,
                            height: i.height,
                            ratio: i.width / i.height,
                            url: e
                        });
                    });
                    r.on(i, "error", function(t) {
                        r.off(i);
                        if (typeof n._error === "function") {
                            n._error.call(n, t);
                        }
                    });
                    return this.attr("href", i.src = this.src = e, r.xlink);
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
                image: function(t, e, n) {
                    return this.put(new r.Image()).load(t).size(e || 0, n || e || 0);
                }
            }
        });
        r.Text = r.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, r.create("text"));
                this.dom.leading = new r.Number(1.3);
                // store leading value for rebuilding
                this._rebuild = true;
                // enable automatic updating of dy values
                this._build = false;
                // disable build mode for adding multiple lines
                // set default font
                this.attr("font-family", r.defaults.attrs["font-family"]);
            },
            inherit: r.Shape,
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
                    return this.attr("y", typeof t.valueOf() === "number" ? t + n : t);
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
                        for (var n = 0, i = e.length; n < i; ++n) {
                            // add newline if its not the first child and newLined is set to true
                            if (n != 0 && e[n].nodeType != 3 && r.adopt(e[n]).dom.newLined == true) {
                                t += "\n";
                            }
                            // add content of this node
                            t += e[n].textContent;
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
                        for (var n = 0, a = t.length; n < a; n++) this.tspan(t[n]).newLine();
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
                    this.dom.leading = new r.Number(t);
                    return this.rebuild();
                },
                lines: function() {
                    var t = (this.textPath && this.textPath() || this).node;
                    // filter tspans and map them to SVG.js instances
                    var e = r.utils.map(r.utils.filterSVGElements(t.childNodes), function(t) {
                        return r.adopt(t);
                    });
                    // return an instance of SVG.set
                    return new r.Set(e);
                },
                rebuild: function(t) {
                    // store new rebuild flag if given
                    if (typeof t == "boolean") this._rebuild = t;
                    // define position of all lines
                    if (this._rebuild) {
                        var e = this, n = 0, i = this.dom.leading * new r.Number(this.attr("font-size"));
                        this.lines().each(function() {
                            if (this.dom.newLined) {
                                if (!e.textPath()) this.attr("x", e.attr("x"));
                                if (this.text() == "\n") {
                                    n += i;
                                } else {
                                    this.attr("dy", i + n);
                                    n = 0;
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
                    this.dom.leading = new r.Number(t.leading || 1.3);
                    return this;
                }
            },
            construct: {
                // Create text element
                text: function(t) {
                    return this.put(new r.Text()).text(t);
                },
                plain: function(t) {
                    return this.put(new r.Text()).plain(t);
                }
            }
        });
        r.Tspan = r.invent({
            // Initialize node
            create: "tspan",
            inherit: r.Shape,
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
                    var t = this.parent(r.Text);
                    // mark new line
                    this.dom.newLined = true;
                    // apply new hy¡n
                    return this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x());
                }
            }
        });
        r.extend(r.Text, r.Tspan, {
            // Create plain text node
            plain: function(t) {
                // clear if build mode is disabled
                if (this._build === false) this.clear();
                // create text node
                this.node.appendChild(e.createTextNode(t));
                return this;
            },
            tspan: function(t) {
                var e = (this.textPath && this.textPath() || this).node, n = new r.Tspan();
                // clear if build mode is disabled
                if (this._build === false) this.clear();
                // add new tspan
                e.appendChild(n.node);
                return n.text(t);
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
        r.TextPath = r.invent({
            // Initialize node
            create: "textPath",
            inherit: r.Parent,
            parent: r.Text,
            construct: {
                morphArray: r.PathArray,
                path: function(t) {
                    // create textPath element
                    var e = new r.TextPath(), n = this.doc().defs().path(t);
                    // move lines to textpath
                    while (this.node.hasChildNodes()) e.node.appendChild(this.node.firstChild);
                    // add textPath element as child node
                    this.node.appendChild(e.node);
                    // link textPath to path and add content
                    e.attr("href", "#" + n, r.xlink);
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
                    if (this.node.firstChild && this.node.firstChild.nodeName == "textPath") return r.adopt(this.node.firstChild);
                }
            }
        });
        r.Nested = r.invent({
            // Initialize node
            create: function() {
                this.constructor.call(this, r.create("svg"));
                this.style("overflow", "visible");
            },
            inherit: r.Container,
            construct: {
                // Create nested svg document
                nested: function() {
                    return this.put(new r.Nested());
                }
            }
        });
        r.A = r.invent({
            // Initialize node
            create: "a",
            inherit: r.Container,
            extend: {
                // Link url
                to: function(t) {
                    return this.attr("href", t, r.xlink);
                },
                show: function(t) {
                    return this.attr("show", t, r.xlink);
                },
                target: function(t) {
                    return this.attr("target", t);
                }
            },
            construct: {
                // Create a hyperlink element
                link: function(t) {
                    return this.put(new r.A()).to(t);
                }
            }
        });
        r.extend(r.Element, {
            // Create a hyperlink element
            linkTo: function(t) {
                var e = new r.A();
                if (typeof t == "function") t.call(e, e); else e.to(t);
                return this.parent().put(e).put(this);
            }
        });
        r.Marker = r.invent({
            // Initialize node
            create: "marker",
            inherit: r.Container,
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
        r.extend(r.Defs, {
            // Create marker
            marker: function(t, e, n) {
                // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
                return this.put(new r.Marker()).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(n);
            }
        });
        r.extend(r.Line, r.Polyline, r.Polygon, r.Path, {
            // Create and attach markers
            marker: function(t, e, n, i) {
                var a = [ "marker" ];
                // Build attribute name
                if (t != "all") a.push(t);
                a = a.join("-");
                // Set marker attribute
                t = arguments[1] instanceof r.Marker ? arguments[1] : this.doc().marker(e, n, i);
                return this.attr(a, t);
            }
        });
        // Define list of available attributes for stroke and fill
        var u = {
            stroke: [ "color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset" ],
            fill: [ "color", "opacity", "rule" ],
            prefix: function(t, e) {
                return e == "color" ? t : t + "-" + e;
            }
        };
        [ "fill", "stroke" ].forEach(function(t) {
            var e, n = {};
            n[t] = function(n) {
                if (typeof n == "undefined") return this;
                if (typeof n == "string" || r.Color.isRgb(n) || n && typeof n.fill === "function") this.attr(t, n); else // set all attributes from sugar.fill and sugar.stroke list
                for (e = u[t].length - 1; e >= 0; e--) if (n[u[t][e]] != null) this.attr(u.prefix(t, u[t][e]), n[u[t][e]]);
                return this;
            };
            r.extend(r.Element, r.FX, n);
        });
        r.extend(r.Element, r.FX, {
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
                return this.attr("transform", new r.Matrix(arguments.length == 6 ? [].slice.call(arguments) : t));
            },
            opacity: function(t) {
                return this.attr("opacity", t);
            },
            dx: function(t) {
                return this.x(new r.Number(t).plus(this instanceof r.FX ? 0 : this.x()), true);
            },
            dy: function(t) {
                return this.y(new r.Number(t).plus(this instanceof r.FX ? 0 : this.y()), true);
            },
            dmove: function(t, e) {
                return this.dx(t).dy(e);
            }
        });
        r.extend(r.Rect, r.Ellipse, r.Circle, r.Gradient, r.FX, {
            // Add x and y radius
            radius: function(t, e) {
                var n = (this._target || this).type;
                return n == "radial" || n == "circle" ? this.attr("r", new r.Number(t)) : this.rx(t).ry(e == null ? t : e);
            }
        });
        r.extend(r.Path, {
            // Get path length
            length: function() {
                return this.node.getTotalLength();
            },
            pointAt: function(t) {
                return this.node.getPointAtLength(t);
            }
        });
        r.extend(r.Parent, r.Text, r.Tspan, r.FX, {
            // Set font
            font: function(t, e) {
                if (typeof t == "object") {
                    for (e in t) this.font(e, t[e]);
                }
                return t == "leading" ? this.leading(e) : t == "anchor" ? this.attr("text-anchor", e) : t == "size" || t == "family" || t == "weight" || t == "stretch" || t == "variant" || t == "style" ? this.attr("font-" + t, e) : this.attr(t, e);
            }
        });
        r.Set = r.invent({
            // Initialize
            create: function(t) {
                if (t instanceof r.Set) {
                    this.members = t.members.slice();
                } else {
                    Array.isArray(t) ? this.members = t : this.clear();
                }
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
                    if (this.members.length == 0) return new r.RBox();
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
                    return new r.Set(t);
                }
            }
        });
        r.FX.Set = r.invent({
            // Initialize node
            create: function(t) {
                // store reference to set
                this.set = t;
            }
        });
        // Alias methods
        r.Set.inherit = function() {
            var t, e = [];
            // gather shape methods
            for (var t in r.Shape.prototype) if (typeof r.Shape.prototype[t] == "function" && typeof r.Set.prototype[t] != "function") e.push(t);
            // apply shape aliasses
            e.forEach(function(t) {
                r.Set.prototype[t] = function() {
                    for (var e = 0, n = this.members.length; e < n; e++) if (this.members[e] && typeof this.members[e][t] == "function") this.members[e][t].apply(this.members[e], arguments);
                    return t == "animate" ? this.fx || (this.fx = new r.FX.Set(this)) : this;
                };
            });
            // clear methods for the next round
            e = [];
            // gather fx methods
            for (var t in r.FX.prototype) if (typeof r.FX.prototype[t] == "function" && typeof r.FX.Set.prototype[t] != "function") e.push(t);
            // apply fx aliasses
            e.forEach(function(t) {
                r.FX.Set.prototype[t] = function() {
                    for (var e = 0, n = this.set.members.length; e < n; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
                    return this;
                };
            });
        };
        r.extend(r.Element, {
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
        r.extend(r.Element, {
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
        r.get = function(t) {
            var n = e.getElementById(A(t) || t);
            return r.adopt(n);
        };
        // Select elements by query string
        r.select = function(t, n) {
            return new r.Set(r.utils.map((n || e).querySelectorAll(t), function(t) {
                return r.adopt(t);
            }));
        };
        r.extend(r.Parent, {
            // Scoped select method
            select: function(t) {
                return r.select(t, this.node);
            }
        });
        function f(t, e, n, i) {
            return n + i.replace(r.regex.dots, " .");
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
        function c(t, e) {
            return t instanceof e;
        }
        // tests if a given selector matches an element
        function h(t, e) {
            return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e);
        }
        // Convert dash-separated-string to camelCase
        function d(t) {
            return t.toLowerCase().replace(/-(.)/g, function(t, e) {
                return e.toUpperCase();
            });
        }
        // Capitalize first letter of a string
        function p(t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
        }
        // Ensure to six-based hex
        function v(t) {
            return t.length == 4 ? [ "#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4) ].join("") : t;
        }
        // Component to hex value
        function m(t) {
            var e = t.toString(16);
            return e.length == 1 ? "0" + e : e;
        }
        // Calculate proportional width and height values when necessary
        function y(t, e, n) {
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
        function g(t, e, n) {
            return {
                x: e * t.a + n * t.c + 0,
                y: e * t.b + n * t.d + 0
            };
        }
        // Map matrix array to object
        function b(t) {
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
        function x(t) {
            if (!(t instanceof r.Matrix)) t = new r.Matrix(t);
            return t;
        }
        // Add centre point to transform object
        function w(t, e) {
            t.cx = t.cx == null ? e.bbox().cx : t.cx;
            t.cy = t.cy == null ? e.bbox().cy : t.cy;
        }
        // PathArray Helpers
        function _(t) {
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
        function C(e) {
            // do the same for SVG child nodes as well
            for (var n = e.childNodes.length - 1; n >= 0; n--) if (e.childNodes[n] instanceof t.SVGElement) C(e.childNodes[n]);
            return r.adopt(e).id(r.eid(e.nodeName));
        }
        // Add more bounding box properties
        function k(t) {
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
        function A(t) {
            var e = (t || "").toString().match(r.regex.reference);
            if (e) return e[1];
        }
        // If values like 1e-88 are passed, this is not a valid 32 bit float,
        // but in those cases, we are so close to 0 that 0 works well!
        function $(t) {
            return Math.abs(t) > 1e-37 ? t : 0;
        }
        // Create matrix array for looping
        var S = "abcdef".split("");
        // Add CustomEvent to IE9 and IE10
        if (typeof t.CustomEvent !== "function") {
            // Code from: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
            var M = function(t, n) {
                n = n || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var r = e.createEvent("CustomEvent");
                r.initCustomEvent(t, n.bubbles, n.cancelable, n.detail);
                return r;
            };
            M.prototype = t.Event.prototype;
            r.CustomEvent = M;
        } else {
            r.CustomEvent = t.CustomEvent;
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
        return r;
    });
}, /* 20 */
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
            require("vue-hot-reload-api").rerender("data-v-c10148c2", a);
        }
    }
}, /* 21 */
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
            staticClass: "navbar is-vcentered"
        }, [ n("div", {
            staticClass: "navbar-brand is-vcentered"
        }, [ n("yar-lightbulb", {
            attrs: {
                indicator: true
            }
        }), t._v(" "), n("div", {
            class: [ "navbar-burger", {
                "is-active": t.isNavbarActive
            } ],
            on: {
                click: function(e) {
                    t.isNavbarActive = !t.isNavbarActive;
                }
            }
        }, [ n("span"), t._v(" "), n("span"), t._v(" "), n("span") ]) ], 1), t._v(" "), n("div", {
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
                href: "https://twitter.com/yarbshk",
                title: "Twitter profile",
                target: "_blank"
            }
        }, [ n("span", {
            staticClass: "icon"
        }, [ n("i", {
            staticClass: "fa fa-twitter"
        }) ]), t._v(" "), n("span", {
            staticClass: "is-hidden-desktop"
        }, [ t._v("Twitter profile") ]) ]) ]);
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
            require("vue-hot-reload-api").rerender("data-v-61dd7a3d", a);
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
        return n("div", {
            class: [ "section", t.themeClass ],
            staticStyle: {
                height: "100%",
                "min-height": "100vh"
            }
        }, [ n("div", {
            staticClass: "columns"
        }, [ n("div", {
            staticClass: "column is-6-desktop is-offset-3-desktop"
        }, [ n("yar-header"), t._v(" "), n("yar-article"), t._v(" "), n("yar-footer") ], 1) ]) ]);
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
            require("vue-hot-reload-api").rerender("data-v-b02fc960", a);
        }
    }
}, /* 23 */
/***/
function(t, e) {} ]);