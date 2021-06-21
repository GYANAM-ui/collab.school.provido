! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase) }(this, function(Zd) {
    "use strict";
    try {
        (function() {
            Zd = Zd && Zd.hasOwnProperty("default") ? Zd.default : Zd;
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || { __proto__: [] }
                    instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e)
            };

            function t(t, e) {
                function n() { this.constructor = t }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var o, e, l = function() {
                return (l = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function p(o, a, s, u) {
                return new(s = s || Promise)(function(t, e) {
                    function n(t) { try { i(u.next(t)) } catch (t) { e(t) } }

                    function r(t) { try { i(u.throw(t)) } catch (t) { e(t) } }

                    function i(e) { e.done ? t(e.value) : new s(function(t) { t(e.value) }).then(n, r) }
                    i((u = u.apply(o, a || [])).next())
                })
            }

            function m(n, r) {
                var i, o, a, t, s = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] };
                return t = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (t[Symbol.iterator] = function() { return this }), t;

                function e(e) {
                    return function(t) {
                        return function(e) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (i = 1, o && (a = 2 & e[0] ? o.return : e[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, e[1])).done) return a;
                                switch (o = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        a = e;
                                        break;
                                    case 4:
                                        return s.label++, { value: e[1], done: !1 };
                                    case 5:
                                        s.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) { s = 0; continue }
                                        if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) { s.label = e[1]; break }
                                        if (6 === e[0] && s.label < a[1]) { s.label = a[1], a = e; break }
                                        if (a && s.label < a[2]) { s.label = a[2], s.ops.push(e); break }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                e = r.call(n, s)
                            } catch (t) { e = [6, t], o = 0 } finally { i = a = 0 }
                            if (5 & e[0]) throw e[1];
                            return { value: e[0] ? e[1] : void 0, done: !0 }
                        }([e, t])
                    }
                }
            }

            function a() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }

            function s() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            }(e = o = o || {})[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT";

            function n(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (!(e < t.logLevel)) {
                    var i = (new Date).toISOString();
                    switch (e) {
                        case o.DEBUG:
                        case o.VERBOSE:
                            console.log.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        case o.INFO:
                            console.info.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        case o.WARN:
                            console.warn.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        case o.ERROR:
                            console.error.apply(console, s(["[" + i + "]  " + t.name + ":"], n));
                            break;
                        default:
                            throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")")
                    }
                }
            }
            var i = o.INFO,
                u = (Object.defineProperty(c.prototype, "logLevel", {
                    get: function() { return this._logLevel },
                    set: function(t) {
                        if (!(t in o)) throw new TypeError("Invalid value assigned to `logLevel`");
                        this._logLevel = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(c.prototype, "logHandler", {
                    get: function() { return this._logHandler },
                    set: function(t) {
                        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), c.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.DEBUG], t))
                }, c.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.VERBOSE], t))
                }, c.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.INFO], t))
                }, c.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.WARN], t))
                }, c.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, s([this, o.ERROR], t))
                }, c);

            function c(t) { this.name = t, this._logLevel = i, this._logHandler = n }

            function f() { return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "" }
            var h, d = (t(y, h = Error), y);

            function y(t, e) { var n = h.call(this, e) || this; return n.code = t, n.name = "FirebaseError", Object.setPrototypeOf(n, y.prototype), Error.captureStackTrace && Error.captureStackTrace(n, g.prototype.create), n }
            var g = (v.prototype.create = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; for (var r = e[0] || {}, i = this.service + "/" + t, o = this.errors[t], a = o ? function(t, r) { return t.replace(b, function(t, e) { var n = r[e]; return null != n ? n.toString() : "<" + e + "?>" }) }(o, r) : "Error", s = this.serviceName + ": " + a + " (" + i + ").", u = new d(i, s), c = 0, h = Object.keys(r); c < h.length; c++) { var l = h[c]; "_" !== l.slice(-1) && (l in u && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'), u[l] = r[l]) } return u }, v);

            function v(t, e, n) { this.service = t, this.serviceName = e, this.errors = n }
            var b = /\{\$([^}]+)}/g,
                w = (T.prototype.setInstantiationMode = function(t) { return this.instantiationMode = t, this }, T.prototype.setMultipleInstances = function(t) { return this.multipleInstances = t, this }, T.prototype.setServiceProps = function(t) { return this.serviceProps = t, this }, T);

            function T(t, e, n) { this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY" }
            var S, E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                I = I || {},
                C = E;

            function D(t) { return "string" == typeof t }

            function N(t) { return "number" == typeof t }

            function A(t, e) {
                t = t.split("."), e = e || C;
                for (var n = 0; n < t.length; n++)
                    if (null == (e = e[t[n]])) return null;
                return e
            }

            function k() {}

            function R(t) { var e = typeof t; if ("object" == e) { if (!t) return "null"; if (t instanceof Array) return "array"; if (t instanceof Object) return e; var n = Object.prototype.toString.call(t); if ("[object Window]" == n) return "object"; if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function" } else if ("function" == e && void 0 === t.call) return "object"; return e }

            function M(t) { return "array" == R(t) }

            function _(t) { var e = R(t); return "array" == e || "object" == e && "number" == typeof t.length }

            function O(t) { var e = typeof t; return "object" == e && null != t || "function" == e }
            var L = "closure_uid_" + (1e9 * Math.random() >>> 0),
                P = 0;

            function x(t, e, n) { return t.call.apply(t.bind, arguments) }

            function F(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var r = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, r), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

            function q(t, e, n) { return (q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x : F).apply(null, arguments) }

            function V(e, t) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } }
            var B = Date.now || function() { return +new Date };

            function U(t, o) {
                function e() {}
                e.prototype = o.prototype, t.N = o.prototype, t.prototype = new e, (t.prototype.constructor = t).xb = function(t, e, n) { for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return o.prototype[e].apply(t, r) }
            }

            function K() { this.j = this.j, this.i = this.i }
            K.prototype.j = !1, K.prototype.la = function() { if (!this.j && (this.j = !0, this.G(), 0)) this[L] || (this[L] = ++P) }, K.prototype.G = function() {
                if (this.i)
                    for (; this.i.length;) this.i.shift()()
            };
            var Q = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) {
                    if (D(t)) return D(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                    for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e) return n;
                    return -1
                },
                j = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var r = t.length, i = D(t) ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t) };

            function G(t) { return Array.prototype.concat.apply([], arguments) }

            function W(t) { var e = t.length; if (0 < e) { for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r]; return n } return [] }

            function z(t) { return /^[\s\xa0]*$/.test(t) }
            var H, Y = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] };

            function J(t, e) { return -1 != t.indexOf(e) }

            function X(t, e) { return t < e ? -1 : e < t ? 1 : 0 }
            t: {
                var Z = C.navigator;
                if (Z) { var $ = Z.userAgent; if ($) { H = $; break t } }
                H = ""
            }

            function tt(t, e, n) { for (var r in t) e.call(n, t[r], r, t) }

            function et(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n }
            var nt = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function rt(t, e) { for (var n, r, i = 1; i < arguments.length; i++) { for (n in r = arguments[i]) t[n] = r[n]; for (var o = 0; o < nt.length; o++) n = nt[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]) } }

            function it(t) { return it[" "](t), t }
            it[" "] = k;
            var ot, at, st = J(H, "Opera"),
                ut = J(H, "Trident") || J(H, "MSIE"),
                ct = J(H, "Edge"),
                ht = ct || ut,
                lt = J(H, "Gecko") && !(J(H.toLowerCase(), "webkit") && !J(H, "Edge")) && !(J(H, "Trident") || J(H, "MSIE")) && !J(H, "Edge"),
                ft = J(H.toLowerCase(), "webkit") && !J(H, "Edge");

            function pt() { var t = C.document; return t ? t.documentMode : void 0 }
            t: {
                var dt = "",
                    mt = (at = H, lt ? /rv:([^\);]+)(\)|;)/.exec(at) : ct ? /Edge\/([\d\.]+)/.exec(at) : ut ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(at) : ft ? /WebKit\/(\S+)/.exec(at) : st ? /(?:Version)[ \/]?(\S+)/.exec(at) : void 0);
                if (mt && (dt = mt ? mt[1] : ""), ut) { var yt = pt(); if (null != yt && yt > parseFloat(dt)) { ot = String(yt); break t } }
                ot = dt
            }
            var gt, vt = {};

            function bt(s) {
                return function(t, e) { var n = vt; return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t) }(s, function() {
                    for (var t = 0, e = Y(String(ot)).split("."), n = Y(String(s)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) {
                        var o = e[i] || "",
                            a = n[i] || "";
                        do {
                            if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                            t = X(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || X(0 == o[2].length, 0 == a[2].length) || X(o[2], a[2]), o = o[3], a = a[3]
                        } while (0 == t)
                    }
                    return 0 <= t
                })
            }
            var wt = C.document;
            gt = wt && ut ? pt() || ("CSS1Compat" == wt.compatMode ? parseInt(ot, 10) : 5) : void 0;
            var Tt = !ut || 9 <= Number(gt),
                St = ut && !bt("9"),
                Et = function() {
                    if (!C.addEventListener || !Object.defineProperty) return !1;
                    var t = !1,
                        e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                    try { C.addEventListener("test", k, e), C.removeEventListener("test", k, e) } catch (t) {}
                    return t
                }();

            function It(t, e) { this.type = t, this.a = this.target = e, this.Ia = !0 }

            function Ct(t, e) {
                if (It.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) {
                    var n = this.type = t.type,
                        r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                    if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) {
                        if (lt) {
                            t: {
                                try { it(e.nodeName); var i = !0; break t } catch (t) {}
                                i = !1
                            }
                            i || (e = null)
                        }
                    } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                    this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = D(t.pointerType) ? t.pointerType : Dt[t.pointerType] || "", (this.c = t).defaultPrevented && this.b()
                }
            }
            It.prototype.b = function() { this.Ia = !1 }, U(Ct, It);
            var Dt = { 2: "touch", 3: "pen", 4: "mouse" };
            Ct.prototype.b = function() {
                Ct.N.b.call(this);
                var t = this.c;
                if (t.preventDefault) t.preventDefault();
                else if (t.returnValue = !1, St) try {
                    (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1)
                } catch (t) {}
            };
            var Nt = "closure_listenable_" + (1e6 * Math.random() | 0),
                At = 0;

            function kt(t, e, n, r, i) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.da = i, this.key = ++At, this.X = this.Z = !1 }

            function Rt(t) { t.X = !0, t.listener = null, t.proxy = null, t.src = null, t.da = null }

            function Mt(t) { this.src = t, this.a = {}, this.b = 0 }

            function _t(t, e) {
                var n = e.type;
                if (n in t.a) {
                    var r, i = t.a[n],
                        o = Q(i, e);
                    (r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (Rt(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                }
            }

            function Ot(t, e, n, r) { for (var i = 0; i < t.length; ++i) { var o = t[i]; if (!o.X && o.listener == e && o.capture == !!n && o.da == r) return i } return -1 }
            Mt.prototype.add = function(t, e, n, r, i) {
                var o = t.toString();
                (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                var a = Ot(t, e, r, i);
                return -1 < a ? (e = t[a], n || (e.Z = !1)) : ((e = new kt(e, this.src, o, !!r, i)).Z = n, t.push(e)), e
            };
            var Lt = "closure_lm_" + (1e6 * Math.random() | 0),
                Pt = {};

            function xt(t, e, n, r, i) {
                if (r && r.once) return function t(e, n, r, i, o) {
                    if (M(n)) { for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o); return null }
                    r = jt(r);
                    return e && e[Nt] ? e.Aa(n, r, O(i) ? !!i.capture : !!i, o) : Ft(e, n, r, !0, i, o)
                }(t, e, n, r, i);
                if (M(e)) { for (var o = 0; o < e.length; o++) xt(t, e[o], n, r, i); return null }
                return n = jt(n), t && t[Nt] ? t.za(e, n, O(r) ? !!r.capture : !!r, i) : Ft(t, e, n, !1, r, i)
            }

            function Ft(t, e, n, r, i, o) {
                if (!e) throw Error("Invalid event type");
                var a = O(i) ? !!i.capture : !!i;
                if (a && !Tt) return null;
                var s = Kt(t);
                if (s || (t[Lt] = s = new Mt(t)), (n = s.add(e, n, r, a, o)).proxy) return n;
                if (r = function() {
                        var e = Ut,
                            n = Tt ? function(t) { return e.call(n.src, n.listener, t) } : function(t) { if (!(t = e.call(n.src, n.listener, t))) return t };
                        return n
                    }(), (n.proxy = r).src = t, r.listener = n, t.addEventListener) Et || (i = a), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(Vt(e.toString()), r);
                else {
                    if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    t.addListener(r)
                }
                return n
            }

            function qt(t) {
                if (!N(t) && t && !t.X) {
                    var e = t.src;
                    if (e && e[Nt]) _t(e.c, t);
                    else {
                        var n = t.type,
                            r = t.proxy;
                        e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(Vt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Kt(e)) ? (_t(n, t), 0 == n.b && (n.src = null, e[Lt] = null)) : Rt(t)
                    }
                }
            }

            function Vt(t) { return t in Pt ? Pt[t] : Pt[t] = "on" + t }

            function Bt(t, e) {
                var n = t.listener,
                    r = t.da || t.src;
                return t.Z && qt(t), n.call(r, e)
            }

            function Ut(t, e) { return !!t.X || (Tt ? Bt(t, new Ct(e, this)) : Bt(t, e = new Ct(e || A("window.event"), this))) }

            function Kt(t) { return (t = t[Lt]) instanceof Mt ? t : null }
            var Qt = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function jt(e) { return "function" == R(e) ? e : (e[Qt] || (e[Qt] = function(t) { return e.handleEvent(t) }), e[Qt]) }

            function Gt() { K.call(this), this.c = new Mt(this), (this.J = this).B = null }

            function Wt(t, e, n, r) {
                if (!(e = t.c.a[String(e)])) return !0;
                e = e.concat();
                for (var i = !0, o = 0; o < e.length; ++o) {
                    var a = e[o];
                    if (a && !a.X && a.capture == n) {
                        var s = a.listener,
                            u = a.da || a.src;
                        a.Z && _t(t.c, a), i = !1 !== s.call(u, r) && i
                    }
                }
                return i && 0 != r.Ia
            }
            U(Gt, K), Gt.prototype[Nt] = !0, (S = Gt.prototype).addEventListener = function(t, e, n, r) { xt(this, t, e, n, r) }, S.removeEventListener = function(t, e, n, r) {
                ! function t(e, n, r, i, o) {
                    if (M(n))
                        for (var a = 0; a < n.length; a++) t(e, n[a], r, i, o);
                    else i = O(i) ? !!i.capture : !!i, r = jt(r), e && e[Nt] ? (e = e.c, (n = String(n).toString()) in e.a && -1 < (r = Ot(a = e.a[n], r, i, o)) && (Rt(a[r]), Array.prototype.splice.call(a, r, 1), 0 == a.length && (delete e.a[n], e.b--))) : (e = e && Kt(e)) && (n = e.a[n.toString()], e = -1, n && (e = Ot(n, r, i, o)), (r = -1 < e ? n[e] : null) && qt(r))
                }(this, t, e, n, r)
            }, S.dispatchEvent = function(t) {
                var e, n = this.B;
                if (n)
                    for (e = []; n; n = n.B) e.push(n);
                n = this.J;
                var r = t.type || t;
                if (D(t)) t = new It(t, n);
                else if (t instanceof It) t.target = t.target || n;
                else {
                    var i = t;
                    rt(t = new It(r, n), i)
                }
                if (i = !0, e)
                    for (var o = e.length - 1; 0 <= o; o--) {
                        var a = t.a = e[o];
                        i = Wt(a, r, !0, t) && i
                    }
                if (i = Wt(a = t.a = n, r, !0, t) && i, i = Wt(a, r, !1, t) && i, e)
                    for (o = 0; o < e.length; o++) i = Wt(a = t.a = e[o], r, !1, t) && i;
                return i
            }, S.G = function() {
                if (Gt.N.G.call(this), this.c) {
                    var t, e = this.c;
                    for (t in e.a) {
                        for (var n = e.a[t], r = 0; r < n.length; r++) Rt(n[r]);
                        delete e.a[t], e.b--
                    }
                }
                this.B = null
            }, S.za = function(t, e, n, r) { return this.c.add(String(t), e, !1, n, r) }, S.Aa = function(t, e, n, r) { return this.c.add(String(t), e, !0, n, r) };
            var zt = C.JSON.stringify;

            function Ht(t, e) { this.c = t, this.f = e, this.b = 0, this.a = null }

            function Yt() { this.b = this.a = null }
            Ht.prototype.get = function() {
                if (0 < this.b) {
                    this.b--;
                    var t = this.a;
                    this.a = t.next, t.next = null
                } else t = this.c();
                return t
            };
            var Jt, Xt = new Ht(function() { return new Zt }, function(t) { t.reset() });

            function Zt() { this.next = this.b = this.a = null }

            function $t(t) { C.setTimeout(function() { throw t }, 0) }

            function te(t, e) {
                Jt || function() {
                    var t = C.Promise.resolve(void 0);
                    Jt = function() { t.then(re) }
                }(), ee || (Jt(), ee = !0), ne.add(t, e)
            }
            Yt.prototype.add = function(t, e) {
                var n = Xt.get();
                n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
            }, Zt.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null };
            var ee = !(Zt.prototype.reset = function() { this.next = this.b = this.a = null }),
                ne = new Yt;

            function re() {
                for (var t; r = n = void 0, r = null, (n = ne).a && (r = n.a, n.a = n.a.next, n.a || (n.b = null), r.next = null), t = r;) {
                    try { t.a.call(t.b) } catch (t) { $t(t) }
                    var e = Xt;
                    e.f(t), e.b < 100 && (e.b++, t.next = e.a, e.a = t)
                }
                var n, r;
                ee = !1
            }

            function ie(t, e) { Gt.call(this), this.b = t || 1, this.a = e || C, this.f = q(this.fb, this), this.g = B() }

            function oe(t) { t.ba = !1, t.L && (t.a.clearTimeout(t.L), t.L = null) }

            function ae(t, e, n) {
                if ("function" == R(t)) n && (t = q(t, n));
                else {
                    if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                    t = q(t.handleEvent, t)
                }
                return 2147483647 < Number(e) ? -1 : C.setTimeout(t, e || 0)
            }

            function se(t, e, n) { K.call(this), this.f = null != n ? q(t, n) : t, this.c = e, this.b = q(this.$a, this), this.a = [] }

            function ue(t) { t.U = ae(t.b, t.c), t.f.apply(null, t.a) }

            function ce(t) { K.call(this), this.b = t, this.a = {} }
            U(ie, Gt), (S = ie.prototype).ba = !1, S.L = null, S.fb = function() {
                if (this.ba) {
                    var t = B() - this.g;
                    0 < t && t < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - t) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.ba && (oe(this), this.start()))
                }
            }, S.start = function() { this.ba = !0, this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = B()) }, S.G = function() { ie.N.G.call(this), oe(this), delete this.a }, U(se, K), (S = se.prototype).ea = !1, S.U = null, S.Ta = function(t) { this.a = arguments, this.U ? this.ea = !0 : ue(this) }, S.G = function() { se.N.G.call(this), this.U && (C.clearTimeout(this.U), this.U = null, this.ea = !1, this.a = []) }, S.$a = function() { this.U = null, this.ea && (this.ea = !1, ue(this)) }, U(ce, K);
            var he = [];

            function le(t, e, n, r) {
                M(n) || (n && (he[0] = n.toString()), n = he);
                for (var i = 0; i < n.length; i++) {
                    var o = xt(e, n[i], r || t.handleEvent, !1, t.b || t);
                    if (!o) break;
                    t.a[o.key] = o
                }
            }

            function fe(t) { tt(t.a, function(t, e) { this.a.hasOwnProperty(e) && qt(t) }, t), t.a = {} }

            function pe() {}
            ce.prototype.G = function() { ce.N.G.call(this), fe(this) }, ce.prototype.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented") };
            var de = new Gt;

            function me(t) { It.call(this, "serverreachability", t) }

            function ye(t) { de.dispatchEvent(new me(de, t)) }

            function ge(t) { It.call(this, "statevent", t) }

            function ve(t) { de.dispatchEvent(new ge(de, t)) }

            function be(t) { It.call(this, "timingevent", t) }

            function we(t, e) { if ("function" != R(t)) throw Error("Fn must not be null and must be a function"); return C.setTimeout(function() { t() }, e) }
            U(me, It), U(ge, It), U(be, It);
            var Te = { NO_ERROR: 0, gb: 1, nb: 2, mb: 3, jb: 4, lb: 5, ob: 6, La: 7, TIMEOUT: 8, rb: 9 },
                Se = { ib: "complete", vb: "success", Ma: "error", La: "abort", tb: "ready", ub: "readystatechange", TIMEOUT: "timeout", pb: "incrementaldata", sb: "progress", kb: "downloadprogress", wb: "uploadprogress" };

            function Ee() {}

            function Ie(t) { var e; return (e = t.a) || (e = t.a = {}), e }

            function Ce() {}
            Ee.prototype.a = null;
            var De, Ne = { OPEN: "a", hb: "b", Ma: "c", qb: "d" };

            function Ae() { It.call(this, "d") }

            function ke() { It.call(this, "c") }

            function Re() {}

            function Me(t, e, n) { this.g = t, this.W = e, this.V = n || 1, this.I = new ce(this), this.O = _e, t = ht ? 125 : void 0, this.P = new ie(t), this.h = null, this.b = !1, this.l = this.D = this.f = this.F = this.v = this.R = this.i = null, this.j = [], this.a = null, this.A = 0, this.c = this.w = null, this.o = -1, this.m = !1, this.J = 0, this.B = null, this.s = this.S = this.H = !1 }
            U(Ae, It), U(ke, It), U(Re, Ee), De = new Re;
            var _e = 45e3,
                Oe = {},
                Le = {};

            function Pe(t, e, n) { t.F = 1, t.f = sn($e(e)), t.l = n, t.H = !0, Fe(t, null) }

            function xe(t, e, n, r) { t.F = 1, t.f = sn($e(e)), t.l = null, t.H = n, Fe(t, r) }

            function Fe(t, e) { t.v = B(), Be(t), t.D = $e(t.f), an(t.D, "t", t.V), t.A = 0, t.a = t.g.$(t.g.Y() ? e : null), 0 < t.J && (t.B = new se(q(t.Ja, t, t.a), t.J)), le(t.I, t.a, "readystatechange", t.cb), e = t.h ? et(t.h) : {}, t.l ? (t.w || (t.w = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.a.ca(t.D, t.w, t.l, e)) : (t.w = "GET", t.a.ca(t.D, t.w, null, e)), ye(1) }

            function qe(t, e, n) {
                for (var r = !0; !t.m && t.A < n.length;) {
                    var i = Ve(t, n);
                    if (i == Le) { 4 == e && (t.c = 4, ve(14), r = !1); break }
                    if (i == Oe) { t.c = 4, ve(15), r = !1; break }
                    Ge(t, i)
                }
                4 == e && 0 == n.length && (t.c = 1, ve(16), r = !1), t.b = t.b && r, r || (je(t), Qe(t))
            }

            function Ve(t, e) {
                var n = t.A,
                    r = e.indexOf("\n", n);
                return -1 == r ? Le : (n = Number(e.substring(n, r)), isNaN(n) ? Oe : (r += 1) + n > e.length ? Le : (e = e.substr(r, n), t.A = r + n, e))
            }

            function Be(t) { t.R = B() + t.O, Ue(t, t.O) }

            function Ue(t, e) {
                if (null != t.i) throw Error("WatchDog timer not null");
                t.i = we(q(t.ab, t), e)
            }

            function Ke(t) { t.i && (C.clearTimeout(t.i), t.i = null) }

            function Qe(t) { t.g.Ca() || t.m || t.g.na(t) }

            function je(t) {
                Ke(t);
                var e = t.B;
                e && "function" == typeof e.la && e.la(), t.B = null, oe(t.P), fe(t.I), t.a && (e = t.a, t.a = null, e.abort(), e.la())
            }

            function Ge(t, e) { try { t.g.Fa(t, e), ye(4) } catch (t) {} }

            function We(t, e) {
                if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                else if (_(t) || D(t)) j(t, e, void 0);
                else {
                    if (t.K && "function" == typeof t.K) var n = t.K();
                    else if (t.C && "function" == typeof t.C) n = void 0;
                    else if (_(t) || D(t)) { n = []; for (var r = t.length, i = 0; i < r; i++) n.push(i) } else
                        for (i in n = [], r = 0, t) n[r++] = i;
                    i = (r = function(t) { if (t.C && "function" == typeof t.C) return t.C(); if (D(t)) return t.split(""); if (_(t)) { for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]); return e } for (r in e = [], n = 0, t) e[n++] = t[r]; return e }(t)).length;
                    for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
                }
            }

            function ze(t, e) {
                this.b = {}, this.a = [], this.c = 0;
                var n = arguments.length;
                if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]) } else if (t)
                    if (t instanceof ze)
                        for (n = t.K(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                    else
                        for (r in t) this.set(r, t[r])
            }

            function He(t, e) { Je(t.b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Ye(t)) }

            function Ye(t) {
                if (t.c != t.a.length) {
                    for (var e = 0, n = 0; e < t.a.length;) {
                        var r = t.a[e];
                        Je(t.b, r) && (t.a[n++] = r), e++
                    }
                    t.a.length = n
                }
                if (t.c != t.a.length) {
                    var i = {};
                    for (n = e = 0; e < t.a.length;) Je(i, r = t.a[e]) || (i[t.a[n++] = r] = 1), e++;
                    t.a.length = n
                }
            }

            function Je(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }(S = Me.prototype).setTimeout = function(t) { this.O = t }, S.cb = function(t) {
                t = t.target;
                var e = this.B;
                e && 3 == $n(t) ? e.Ta() : this.Ja(t)
            }, S.Ja = function(t) {
                try {
                    if (t == this.a) t: {
                        var e = $n(this.a),
                            n = this.a.ya(),
                            r = this.a.T();
                        if (!(e < 3 || 3 == e && !ht && !this.a.aa())) {
                            this.m || 4 != e || 7 == n || ye(8 == n || r <= 0 ? 3 : 2), Ke(this);
                            var i = this.a.T();
                            this.o = i;
                            var o = this.a.aa();
                            if (this.b = 200 == i) {
                                if (this.S && !this.s) {
                                    e: {
                                        if (this.a) { var a = tr(this.a, "X-HTTP-Initial-Response"); if (a && !z(a)) { var s = a; break e } }
                                        s = null
                                    }
                                    if (!s) { this.b = !1, this.c = 3, ve(12), je(this), Qe(this); break t }
                                    this.s = !0,
                                    Ge(this, s)
                                }
                                this.H ? (qe(this, e, o), ht && this.b && 3 == e && (le(this.I, this.P, "tick", this.bb), this.P.start())) : Ge(this, o), 4 == e && je(this), this.b && !this.m && (4 == e ? this.g.na(this) : (this.b = !1, Be(this)))
                            } else 400 == i && 0 < o.indexOf("Unknown SID") ? (this.c = 3, ve(12)) : (this.c = 0, ve(13)), je(this), Qe(this)
                        }
                    }
                } catch (t) {}
            }, S.bb = function() {
                if (this.a) {
                    var t = $n(this.a),
                        e = this.a.aa();
                    this.A < e.length && (Ke(this), qe(this, t, e), this.b && 4 != t && Be(this))
                }
            }, S.cancel = function() { this.m = !0, je(this) }, S.ab = function() {
                this.i = null;
                var t = B();
                0 <= t - this.R ? (2 != this.F && (ye(3), ve(17)), je(this), this.c = 2, Qe(this)) : Ue(this, this.R - t)
            }, (S = ze.prototype).C = function() { Ye(this); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, S.K = function() { return Ye(this), this.a.concat() }, S.get = function(t, e) { return Je(this.b, t) ? this.b[t] : e }, S.set = function(t, e) { Je(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, S.forEach = function(t, e) {
                for (var n = this.K(), r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = this.get(i);
                    t.call(e, o, i, this)
                }
            };
            var Xe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function Ze(t, e) {
                var n;
                this.b = this.j = this.f = "", this.i = null, this.g = this.a = "", this.h = !1, t instanceof Ze ? (this.h = void 0 !== e ? e : t.h, tn(this, t.f), this.j = t.j, en(this, t.b), nn(this, t.i), this.a = t.a, rn(this, Tn(t.c)), this.g = t.g) : t && (n = String(t).match(Xe)) ? (this.h = !!e, tn(this, n[1] || "", !0), this.j = un(n[2] || ""), en(this, n[3] || "", !0), nn(this, n[4]), this.a = un(n[5] || "", !0), rn(this, n[6] || "", !0), this.g = un(n[7] || "")) : (this.h = !!e, this.c = new yn(null, this.h))
            }

            function $e(t) { return new Ze(t) }

            function tn(t, e, n) { t.f = n ? un(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, "")) }

            function en(t, e, n) { t.b = n ? un(e, !0) : e }

            function nn(t, e) {
                if (e) {
                    if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                    t.i = e
                } else t.i = null
            }

            function rn(t, e, n) {
                e instanceof yn ? (t.c = e, function(t, e) {
                    e && !t.f && (gn(t), t.c = null, t.a.forEach(function(t, e) {
                        var n = e.toLowerCase();
                        e != n && (vn(this, e), wn(this, n, t))
                    }, t)), t.f = e
                }(t.c, t.h)) : (n || (e = cn(e, dn)), t.c = new yn(e, t.h))
            }

            function on(t, e, n) { t.c.set(e, n) }

            function an(t, e, n) { M(n) || (n = [String(n)]), wn(t.c, e, n) }

            function sn(t) { return on(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)), t }

            function un(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

            function cn(t, e, n) { return D(t) ? (t = encodeURI(t).replace(e, hn), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null }

            function hn(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) }
            Ze.prototype.toString = function() {
                var t = [],
                    e = this.f;
                e && t.push(cn(e, ln, !0), ":");
                var n = this.b;
                return !n && "file" != e || (t.push("//"), (e = this.j) && t.push(cn(e, ln, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && t.push(":", String(n))), (n = this.a) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(cn(n, "/" == n.charAt(0) ? pn : fn, !0))), (n = this.c.toString()) && t.push("?", n), (n = this.g) && t.push("#", cn(n, mn)), t.join("")
            }, Ze.prototype.resolve = function(t) {
                var e = $e(this),
                    n = !!t.f;
                n ? tn(e, t.f) : n = !!t.j, n ? e.j = t.j : n = !!t.b, n ? en(e, t.b) : n = null != t.i;
                var r = t.a;
                if (n) nn(e, t.i);
                else if (n = !!t.a) {
                    if ("/" != r.charAt(0))
                        if (this.b && !this.a) r = "/" + r;
                        else { var i = e.a.lastIndexOf("/"); - 1 != i && (r = e.a.substr(0, i + 1) + r) }
                    if (".." == (i = r) || "." == i) r = "";
                    else if (J(i, "./") || J(i, "/.")) {
                        r = 0 == i.lastIndexOf("/", 0), i = i.split("/");
                        for (var o = [], a = 0; a < i.length;) { var s = i[a++]; "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(s), r = !0) }
                        r = o.join("/")
                    } else r = i
                }
                return n ? e.a = r : n = "" !== t.c.toString(), n ? rn(e, Tn(t.c)) : n = !!t.g, n && (e.g = t.g), e
            };
            var ln = /[#\/\?@]/g,
                fn = /[#\?:]/g,
                pn = /[#\?]/g,
                dn = /[#\?@]/g,
                mn = /#/g;

            function yn(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

            function gn(n) {
                n.a || (n.a = new ze, n.b = 0, n.c && function(t, e) {
                    if (t) {
                        t = t.split("&");
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n].indexOf("="),
                                i = null;
                            if (0 <= r) {
                                var o = t[n].substring(0, r);
                                i = t[n].substring(r + 1)
                            } else o = t[n];
                            e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                        }
                    }
                }(n.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) }))
            }

            function vn(t, e) { gn(t), e = Sn(t, e), Je(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, He(t.a, e)) }

            function bn(t, e) { return gn(t), e = Sn(t, e), Je(t.a.b, e) }

            function wn(t, e, n) { vn(t, e), 0 < n.length && (t.c = null, t.a.set(Sn(t, e), W(n)), t.b += n.length) }

            function Tn(t) { var e = new yn; return e.c = t.c, t.a && (e.a = new ze(t.a), e.b = t.b), e }

            function Sn(t, e) { return e = String(e), t.f && (e = e.toLowerCase()), e }

            function En(t) { this.a = t, this.b = this.h = null, this.g = !1, this.i = null, this.c = -1, this.l = this.f = null }

            function In(t) {
                var e = t.a.F.a;
                if (null != e) ve(4), e ? (ve(10), fr(t.a, t, !1)) : (ve(11), fr(t.a, t, !0));
                else {
                    t.b = new Me(t, void 0, void 0), t.b.h = t.h, e = gr(e = t.a, e.Y() ? t.f : null, t.i), ve(4), an(e, "TYPE", "xmlhttp");
                    var n = t.a.j,
                        r = t.a.I;
                    n && r && on(e, n, r), xe(t.b, e, !1, t.f)
                }
            }

            function Cn() { this.a = this.b = null }

            function Dn() { this.a = new ze }

            function Nn(t) { var e = typeof t; return "object" == e && t || "function" == e ? "o" + (t[L] || (t[L] = ++P)) : e.charAt(0) + t }

            function An(t, e) { this.b = t, this.a = e }

            function kn(t) { this.g = t || Rn, t = C.PerformanceNavigationTiming ? 0 < (t = C.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(C.ka && C.ka.Da && C.ka.Da() && C.ka.Da().yb), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Dn), this.b = null, this.c = [] }(S = yn.prototype).add = function(t, e) { gn(this), this.c = null, t = Sn(this, t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, S.forEach = function(n, r) { gn(this), this.a.forEach(function(t, e) { j(t, function(t) { n.call(r, t, e, this) }, this) }, this) }, S.K = function() {
                gn(this);
                for (var t = this.a.C(), e = this.a.K(), n = [], r = 0; r < e.length; r++)
                    for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                return n
            }, S.C = function(t) {
                gn(this);
                var e = [];
                if (D(t)) bn(this, t) && (e = G(e, this.a.get(Sn(this, t))));
                else { t = this.a.C(); for (var n = 0; n < t.length; n++) e = G(e, t[n]) }
                return e
            }, S.set = function(t, e) { return gn(this), this.c = null, bn(this, t = Sn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, S.get = function(t, e) { return t && 0 < (t = this.C(t)).length ? String(t[0]) : e }, S.toString = function() {
                if (this.c) return this.c;
                if (!this.a) return "";
                for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = encodeURIComponent(String(r));
                    r = this.C(r);
                    for (var o = 0; o < r.length; o++) { var a = i; "" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))), t.push(a) }
                }
                return this.c = t.join("&")
            }, U(function() {}, function() {}), (S = En.prototype).M = null, S.$ = function(t) { return this.a.$(t) }, S.abort = function() { this.b && (this.b.cancel(), this.b = null), this.c = -1 }, S.Ca = function() { return !1 }, S.Fa = function(t, e) {
                if (this.c = t.o, 0 == this.M) {
                    if (!this.a.o && (t = t.a)) {
                        var n = tr(t, "X-Client-Wire-Protocol");
                        this.l = n || null, this.a.j && (t = tr(t, "X-HTTP-Session-Id")) && (this.a.I = t)
                    }
                    if (e) {
                        try { var r = this.a.ja.a.parse(e) } catch (t) { return (e = this.a).m = this.c, void mr(e, 2) }
                        this.f = r[0]
                    } else(e = this.a).m = this.c, mr(e, 2)
                } else 1 == this.M && (this.g ? ve(6) : "11111" == e ? (ve(5), this.g = !0, (!ut || 10 <= Number(gt)) && (this.c = 200, this.b.cancel(), ve(11), fr(this.a, this, !0))) : (ve(7), this.g = !1))
            }, S.na = function() {
                if (this.c = this.b.o, this.b.b) 0 == this.M ? (this.M = 1, In(this)) : 1 == this.M && (this.g ? (ve(11), fr(this.a, this, !0)) : (ve(10), fr(this.a, this, !1)));
                else {
                    0 == this.M ? ve(8) : 1 == this.M && ve(9);
                    var t = this.a;
                    t.m = this.c, mr(t, 2)
                }
            }, S.Y = function() { return this.a.Y() }, S.ma = function() { return this.a.ma() }, Dn.prototype.add = function(t) { this.a.set(Nn(t), t) }, Dn.prototype.C = function() { return this.a.C() };
            var Rn = 10;

            function Mn(t, e) {!t.a && (J(e, "spdy") || J(e, "quic") || J(e, "h2")) && (t.f = t.g, t.a = new Dn, t.b && (Pn(t, t.b), t.b = null)) }

            function _n(t) { return !!t.b || !!t.a && t.a.a.c >= t.f }

            function On(t) { return t.b ? 1 : t.a ? t.a.a.c : 0 }

            function Ln(t, e) { return t = t.b ? t.b == e : !!t.a && (e = Nn(e), Je(t.a.a.b, e)) }

            function Pn(t, e) { t.a ? t.a.add(e) : t.b = e }

            function xn(t, e) {
                var n;
                t.b && t.b == e ? t.b = null : ((n = t.a) && (n = Nn(e), n = Je(t.a.a.b, n)), n && He(t.a.a, Nn(e)))
            }

            function Fn(t) { if (null != t.b) return t.c.concat(t.b.j); if (null == t.a || 0 == t.a.a.c) return W(t.c); var e = t.c; return j(t.a.C(), function(t) { e = e.concat(t.j) }), e }

            function qn() {}

            function Vn() { this.a = new qn }

            function Bn(t, r, e) {
                var i = e || "";
                try {
                    We(t, function(t, e) {
                        var n = t;
                        O(t) && (n = zt(t)), r.push(i + e + "=" + encodeURIComponent(n))
                    })
                } catch (t) { throw r.push(i + "type=" + encodeURIComponent("_badmap")), t }
            }

            function Un(t, e, n, r, i) { try { e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r) } catch (t) {} }
            kn.prototype.cancel = function() { this.c = Fn(this), this.b ? (this.b.cancel(), this.b = null) : this.a && 0 != this.a.a.c && (j(this.a.C(), function(t) { t.cancel() }), function(t) { t.b = {}, t.a.length = 0, t.c = 0 }(this.a.a)) }, qn.prototype.stringify = function(t) { return C.JSON.stringify(t, void 0) }, qn.prototype.parse = function(t) { return C.JSON.parse(t, void 0) };
            var Kn = C.JSON.parse;

            function Qn(t) { Gt.call(this), this.headers = new ze, this.H = t || null, this.b = !1, this.s = this.a = null, this.A = "", this.h = 0, this.f = "", this.g = this.w = this.l = this.v = !1, this.o = 0, this.m = null, this.I = jn, this.D = this.F = !1 }
            U(Qn, Gt);
            var jn = "",
                Gn = /^https?$/i,
                Wn = ["POST", "PUT"];

            function zn(t) { return "content-type" == t.toLowerCase() }

            function Hn(t, e) { t.b = !1, t.a && (t.g = !0, t.a.abort(), t.g = !1), t.f = e, t.h = 5, Yn(t), Xn(t) }

            function Yn(t) { t.v || (t.v = !0, t.dispatchEvent("complete"), t.dispatchEvent("error")) }

            function Jn(t) {
                if (t.b && void 0 !== I && (!t.s[1] || 4 != $n(t) || 2 != t.T()))
                    if (t.l && 4 == $n(t)) ae(t.Ea, 0, t);
                    else if (t.dispatchEvent("readystatechange"), 4 == $n(t)) {
                    t.b = !1;
                    try {
                        var e, n = t.T();
                        t: switch (n) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var r = !0;
                                break t;
                            default:
                                r = !1
                        }
                        if (!(e = r)) {
                            var i;
                            if (i = 0 === n) {
                                var o = String(t.A).match(Xe)[1] || null;
                                if (!o && C.self && C.self.location) {
                                    var a = C.self.location.protocol;
                                    o = a.substr(0, a.length - 1)
                                }
                                i = !Gn.test(o ? o.toLowerCase() : "")
                            }
                            e = i
                        }
                        if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
                        else {
                            t.h = 6;
                            try { var s = 2 < $n(t) ? t.a.statusText : "" } catch (t) { s = "" }
                            t.f = s + " [" + t.T() + "]", Yn(t)
                        }
                    } finally { Xn(t) }
                }
            }

            function Xn(t, e) {
                if (t.a) {
                    Zn(t);
                    var n = t.a,
                        r = t.s[0] ? k : null;
                    t.a = null, t.s = null, e || t.dispatchEvent("ready");
                    try { n.onreadystatechange = r } catch (t) {}
                }
            }

            function Zn(t) { t.a && t.D && (t.a.ontimeout = null), t.m && (C.clearTimeout(t.m), t.m = null) }

            function $n(t) { return t.a ? t.a.readyState : 0 }

            function tr(t, e) { return t.a ? t.a.getResponseHeader(e) : null }

            function er(t, e, n) {
                t: {
                    for (r in n) { var r = !1; break t }
                    r = !0
                }
                if (r) return t;
                if (n = function(t) { var n = ""; return tt(t, function(t, e) { n += e, n += ":", n += t, n += "\r\n" }), n }(n), D(t)) {
                    if (e = encodeURIComponent(String(e)), e += n = null != n ? "=" + encodeURIComponent(String(n)) : "") {
                        if ((n = t.indexOf("#")) < 0 && (n = t.length), (r = t.indexOf("?")) < 0 || n < r) { r = n; var i = "" } else i = t.substring(r + 1, n);
                        n = (t = [t.substr(0, r), i, t.substr(n)])[1], t[1] = e ? n ? n + "&" + e : e : n, t = t[0] + (t[1] ? "?" + t[1] : "") + t[2]
                    }
                    return t
                }
                return on(t, e, n),
                t
            }

            function nr(t) { this.f = [], this.F = new Cn, this.ga = this.pa = this.B = this.ha = this.a = this.I = this.j = this.V = this.g = this.J = this.i = null, this.Qa = this.P = 0, this.Oa = !!A("internalChannelParams.failFast", t), this.ia = this.w = this.s = this.l = this.h = this.c = null, this.oa = !0, this.m = this.ra = this.O = -1, this.S = this.v = this.A = 0, this.Na = A("internalChannelParams.baseRetryDelayMs", t) || 5e3, this.Ra = A("internalChannelParams.retryDelaySeedMs", t) || 1e4, this.Pa = A("internalChannelParams.forwardChannelMaxRetries", t) || 2, this.qa = A("internalChannelParams.forwardChannelRequestTimeoutMs", t) || 2e4, this.Ka = t && t.zb || void 0, this.D = void 0, this.R = t && t.supportsCrossDomainXhr || !1, this.H = "", this.b = new kn(t && t.concurrentRequestLimit), this.ja = new Vn, this.o = !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest, (this.W = t && t.fastHandshake || !1) && !this.o && (this.o = !0), t && t.forceLongPolling && (this.oa = !1), this.fa = void 0 }

            function rr(t) {
                if (ir(t), 3 == t.u) {
                    var e = t.P++,
                        n = $e(t.B);
                    on(n, "SID", t.H), on(n, "RID", e), on(n, "TYPE", "terminate"), ur(t, n), (e = new Me(t, e, void 0)).F = 2, e.f = sn($e(n)), n = !1, C.navigator && C.navigator.sendBeacon && (n = C.navigator.sendBeacon(e.f.toString(), "")), !n && C.Image && ((new Image).src = e.f, n = !0), n || (e.a = e.g.$(null), e.a.ca(e.f)), e.v = B(), Be(e)
                }
                yr(t)
            }

            function ir(t) { t.w && (t.w.abort(), t.w = null), t.a && (t.a.cancel(), t.a = null), t.l && (C.clearTimeout(t.l), t.l = null), pr(t), t.b.cancel(), t.h && (N(t.h) && C.clearTimeout(t.h), t.h = null) }

            function or(t, e) { t.f.push(new An(t.Qa++, e)), 3 == t.u && ar(t) }

            function ar(t) { _n(t.b) || t.h || (t.h = !0, te(t.Ha, t), t.A = 0) }

            function sr(t, e) {
                var n;
                n = e ? e.W : t.P++;
                var r = $e(t.B);
                on(r, "SID", t.H), on(r, "RID", n), on(r, "AID", t.O), ur(t, r), t.g && t.i && er(r, t.g, t.i), n = new Me(t, n, t.A + 1), null === t.g && (n.h = t.i), e && (t.f = e.j.concat(t.f)), e = cr(t, n, 1e3), n.setTimeout(Math.round(.5 * t.qa) + Math.round(.5 * t.qa * Math.random())), Pn(t.b, n), Pe(n, r, e)
            }

            function ur(t, n) { t.c && We({}, function(t, e) { on(n, e, t) }) }

            function cr(t, e, n) {
                n = Math.min(t.f.length, n);
                var r = t.c ? q(t.c.Sa, t.c, t) : null;
                t: for (var i = t.f, o = -1;;) {
                    var a = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].b, a.push("ofs=" + o)) : o = 0 : a.push("ofs=" + o);
                    for (var s = !0, u = 0; u < n; u++) {
                        var c = i[u].b,
                            h = i[u].a;
                        if ((c -= o) < 0) o = Math.max(0, i[u].b - 100), s = !1;
                        else try { Bn(h, a, "req" + c + "_") } catch (t) { r && r(h) }
                    }
                    if (s) { r = a.join("&"); break t }
                }
                return t = t.f.splice(0, n), e.j = t, r
            }

            function hr(t) { t.a || t.l || (t.S = 1, te(t.Ga, t), t.v = 0) }

            function lr(t) { return !(t.a || t.l || 3 <= t.v) && (t.S++, t.l = we(q(t.Ga, t), dr(t, t.v)), t.v++, !0) }

            function fr(t, e, n) {
                var r = e.l;
                r && Mn(t.b, r), t.ia = t.oa && n, t.m = e.c, t.B = gr(t, null, t.ha), ar(t)
            }

            function pr(t) { null != t.s && (C.clearTimeout(t.s), t.s = null) }

            function dr(t, e) { var n = t.Na + Math.floor(Math.random() * t.Ra); return t.ma() || (n *= 2), n * e }

            function mr(t, e) {
                if (2 == e) {
                    var n = null;
                    t.c && (n = null);
                    var r = q(t.eb, t);
                    n || (n = new Ze("//www.google.com/images/cleardot.gif"), C.location && "http" == C.location.protocol || tn(n, "https"), sn(n)),
                        function(t, e) {
                            var n = new pe;
                            if (C.Image) {
                                var r = new Image;
                                r.onload = V(Un, n, r, "TestLoadImage: loaded", !0, e), r.onerror = V(Un, n, r, "TestLoadImage: error", !1, e), r.onabort = V(Un, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = V(Un, n, r, "TestLoadImage: timeout", !1, e), C.setTimeout(function() { r.ontimeout && r.ontimeout() }, 1e4), r.src = t
                            } else e(!1)
                        }(n.toString(), r)
                } else ve(2);
                t.u = 0, t.c && t.c.ta(e), yr(t), ir(t)
            }

            function yr(t) { t.u = 0, t.m = -1, t.c && (0 == Fn(t.b).length && 0 == t.f.length || (t.b.c.length = 0, W(t.f), t.f.length = 0), t.c.sa()) }

            function gr(t, e, n) {
                var r = function(t) { return t instanceof Ze ? $e(t) : new Ze(t, void 0) }(n);
                if ("" != r.b) e && en(r, e + "." + r.b), nn(r, r.i);
                else {
                    var i, o = C.location;
                    i = e ? e + "." + o.hostname : o.hostname, r = function(t, e, n, r) { var i = new Ze(null, void 0); return t && tn(i, t), e && en(i, e), n && nn(i, n), r && (i.a = r), i }(o.protocol, i, +o.port, n)
                }
                return t.V && tt(t.V, function(t, e) { on(r, e, t) }), e = t.j, n = t.I, e && n && on(r, e, n), on(r, "VER", t.wa), ur(t, r), r
            }

            function vr() {}

            function br() { if (ut && !(10 <= Number(gt))) throw Error("Environmental error: no available transport.") }

            function wr(t, e) {
                Gt.call(this), this.a = new nr(e), this.g = t, this.m = e && e.testUrl ? e.testUrl : function(t) {
                    for (var e = t, n = 1; n < arguments.length; n++) {
                        var r, i = arguments[n];
                        if (0 == i.lastIndexOf("/", 0)) e = i;
                        else(r = "" == e) || (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r), e += r ? i : "/" + i
                    }
                    return e
                }(this.g, "test"), this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = { "X-Client-Protocol": "webchannel" }), this.a.i = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = { "X-WebChannel-Content-Type": e.messageContentType }), e && e.xa && (t ? t["X-WebChannel-Client-Profile"] = e.xa : t = { "X-WebChannel-Client-Profile": e.xa }), this.a.J = t, (t = e && e.httpHeadersOverwriteParam) && !z(t) && (this.a.g = t), this.l = e && e.supportsCrossDomainXhr || !1, this.h = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !z(e) && (this.a.j = e, null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new Er(this)
            }

            function Tr(t) {
                Ae.call(this);
                var e = t.__sm__;
                if (e) {
                    t: {
                        for (var n in e) { t = n; break t }
                        t = void 0
                    }(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e
                }
                else this.data = t
            }

            function Sr() { ke.call(this), this.status = 1 }

            function Er(t) { this.a = t }(S = Qn.prototype).ca = function(t, e, n, r) {
                if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.A + "; newUri=" + t);
                e = e ? e.toUpperCase() : "GET", this.A = t, this.f = "", this.h = 0, this.v = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.H ? Ie(this.H) : Ie(De), this.a.onreadystatechange = q(this.Ea, this);
                try { this.w = !0, this.a.open(e, String(t), !0), this.w = !1 } catch (t) { return void Hn(this, t) }
                t = n || "";
                var i = new ze(this.headers);
                r && We(r, function(t, e) { i.set(e, t) }), r = function(t) {
                    t: {
                        for (var e = zn, n = t.length, r = D(t) ? t.split("") : t, i = 0; i < n; i++)
                            if (i in r && e.call(void 0, r[i], i, t)) { e = i; break t }
                        e = -1
                    }
                    return e < 0 ? null : D(t) ? t.charAt(e) : t[e]
                }(i.K()), n = C.FormData && t instanceof C.FormData, 0 <= Q(Wn, e) && !r && !n && i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), i.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, this), this.I && (this.a.responseType = this.I), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
                try { Zn(this), 0 < this.o && ((this.D = function(t) { return ut && bt(9) && N(t.timeout) && void 0 !== t.ontimeout }(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = q(this.Ba, this)) : this.m = ae(this.Ba, this.o, this)), this.l = !0, this.a.send(t), this.l = !1 } catch (t) { Hn(this, t) }
            }, S.Ba = function() { void 0 !== I && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)) }, S.abort = function(t) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Xn(this)) }, S.G = function() { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), Xn(this, !0)), Qn.N.G.call(this) }, S.Ea = function() { this.j || (this.w || this.l || this.g ? Jn(this) : this.Za()) }, S.Za = function() { Jn(this) }, S.T = function() { try { return 2 < $n(this) ? this.a.status : -1 } catch (t) { return -1 } }, S.aa = function() { try { return this.a ? this.a.responseText : "" } catch (t) { return "" } }, S.Ua = function(t) { if (this.a) { var e = this.a.responseText; return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Kn(e) } }, S.ya = function() { return this.h }, S.Xa = function() { return D(this.f) ? this.f : String(this.f) }, (S = nr.prototype).wa = 8, S.u = 1, S.Ca = function() { return 0 == this.u }, S.Ha = function(t) {
                if (this.h)
                    if (this.h = null, 1 == this.u) {
                        if (!t) {
                            this.P = Math.floor(1e5 * Math.random()), t = this.P++;
                            var e, n = new Me(this, t, void 0),
                                r = this.i;
                            if (this.J && (r ? rt(r = et(r), this.J) : r = this.J), null === this.g && (n.h = r), this.W) t: {
                                for (var i = e = 0; i < this.f.length; i++) { var o = this.f[i]; if (void 0 === (o = "__data__" in o.a && D(o = o.a.__data__) ? o.length : void 0)) break; if (4096 < (e += o)) { e = i; break t } if (4096 === e || i === this.f.length - 1) { e = i + 1; break t } }
                                e = 1e3
                            }
                            else e = 1e3;
                            e = cr(this, n, e), on(i = $e(this.B), "RID", t), on(i, "CVER", 22), this.o && this.j && on(i, "X-HTTP-Session-Id", this.j), ur(this, i), this.g && r && er(i, this.g, r), Pn(this.b, n), this.W ? (on(i, "$req", e), on(i, "SID", "null"), n.S = !0, Pe(n, i, null)) : Pe(n, i, e), this.u = 2
                        }
                    } else 3 == this.u && (t ? sr(this, t) : 0 == this.f.length || _n(this.b) || sr(this))
            }, S.Ga = function() {
                this.l = null, this.a = new Me(this, "rpc", this.S), null === this.g && (this.a.h = this.i), this.a.J = 0;
                var t = $e(this.pa);
                on(t, "RID", "rpc"), on(t, "SID", this.H), on(t, "CI", this.ia ? "0" : "1"), on(t, "AID", this.O), ur(this, t), on(t, "TYPE", "xmlhttp"), this.g && this.i && er(t, this.g, this.i), this.D && this.a.setTimeout(this.D), xe(this.a, t, !0, this.ga)
            }, S.Fa = function(t, e) {
                if (0 != this.u && (this.a == t || Ln(this.b, t)))
                    if (this.m = t.o, !t.s && Ln(this.b, t) && 3 == this.u) {
                        try { var n = this.ja.a.parse(e) } catch (t) { n = null }
                        if (M(n) && 3 == n.length) {
                            if (0 == (e = n)[0]) {
                                t: if (!this.l) {
                                    if (this.a) {
                                        if (!(this.a.v + 3e3 < t.v)) break t;
                                        pr(this), this.a.cancel(), this.a = null
                                    }
                                    lr(this), ve(18)
                                }
                            }
                            else this.ra = e[1], 0 < this.ra - this.O && e[2] < 37500 && this.ia && 0 == this.v && !this.s && (this.s = we(q(this.Ya, this), 6e3));
                            if (On(this.b) <= 1 && this.fa) {
                                try { this.fa() } catch (t) {}
                                this.fa = void 0
                            }
                        } else mr(this, 11)
                    } else if (!t.s && this.a != t || pr(this), !z(e))
                    for (e = n = this.ja.a.parse(e), n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (this.O = r[0], r = r[1], 2 == this.u)
                            if ("c" == r[0]) {
                                this.H = r[1], this.ga = r[2];
                                var i = r[3];
                                null != i && (this.wa = i), null != (r = r[5]) && N(r) && 0 < r && (this.D = 1.5 * r), this.o && (r = t.a) && ((i = tr(r, "X-Client-Wire-Protocol")) && Mn(this.b, i), this.j && (r = tr(r, "X-HTTP-Session-Id"))) && (this.I = r, on(this.B, this.j, r)), this.u = 3, this.c && this.c.va(), r = t, this.pa = gr(this, this.Y() ? this.ga : null, this.ha), r.s ? (xn(this.b, r), (i = this.D) && r.setTimeout(i), r.i && (Ke(r), Be(r)), this.a = r) : hr(this), 0 < this.f.length && ar(this)
                            } else "stop" != r[0] && "close" != r[0] || mr(this, 7);
                        else 3 == this.u && ("stop" == r[0] || "close" == r[0] ? "stop" == r[0] ? mr(this, 7) : rr(this) : "noop" != r[0] && this.c && this.c.ua(r), this.v = 0)
                    }
            }, S.Ya = function() { null != this.s && (this.s = null, this.a.cancel(), this.a = null, lr(this), ve(19)) }, S.na = function(t) {
                var e = null;
                if (this.a == t) { pr(this), this.a = null; var n = 2 } else {
                    if (!Ln(this.b, t)) return;
                    e = t.j, xn(this.b, t), n = 1
                }
                if (this.m = t.o, 0 != this.u)
                    if (t.b) 1 == n ? (e = B() - t.v, de.dispatchEvent(new be(de, t.l ? t.l.length : 0, e, this.A)), ar(this)) : hr(this);
                    else {
                        var r = t.c;
                        if (3 == r || 0 == r && 0 < this.m || !(1 == n && function(t, e) { return !(On(t.b) >= t.b.f - (t.h ? 1 : 0)) && (t.h ? (t.f = e.j.concat(t.f), !0) : !(1 == t.u || 2 == t.u || t.A >= (t.Oa ? 0 : t.Pa)) && (t.h = we(q(t.Ha, t, e), dr(t, t.A)), t.A++, !0)) }(this, t) || 2 == n && lr(this))) switch (e && 0 < e.length && (t = this.b, t.c = t.c.concat(e)), r) {
                            case 1:
                                mr(this, 5);
                                break;
                            case 4:
                                mr(this, 10);
                                break;
                            case 3:
                                mr(this, 6);
                                break;
                            default:
                                mr(this, 2)
                        }
                    }
            }, S.eb = function(t) { ve(t ? 2 : 1) }, S.$ = function(t) { if (t && !this.R) throw Error("Can't create secondary domain capable XhrIo object."); return (t = new Qn(this.Ka)).F = this.R, t }, S.ma = function() { return !!this.c && !0 }, S.Y = function() { return this.R }, (S = vr.prototype).va = function() {}, S.ua = function() {}, S.ta = function() {}, S.sa = function() {}, S.Sa = function() {}, br.prototype.a = function(t, e) { return new wr(t, e) }, U(wr, Gt), (S = wr.prototype).addEventListener = function(t, e, n, r) { wr.N.addEventListener.call(this, t, e, n, r) }, S.removeEventListener = function(t, e, n, r) { wr.N.removeEventListener.call(this, t, e, n, r) }, S.Va = function() {
                this.a.c = this.f, this.l && (this.a.R = !0);
                var t = this.a,
                    e = this.m,
                    n = this.g,
                    r = this.b || void 0;
                ve(0), t.ha = n, t.V = r || {}, t.o && (t.F.b = [], t.F.a = !1), t.w = new En(t), null === t.g && (t.w.h = t.i), n = e, t.g && t.i && (n = er(e, t.g, t.i)), (t = t.w).i = n, e = gr(t.a, null, t.i), ve(3), null != (n = t.a.F.b) ? (t.f = n[0], t.M = 1, In(t)) : (an(e, "MODE", "init"), !t.a.o && t.a.j && an(e, "X-HTTP-Session-Id", t.a.j), t.b = new Me(t, void 0, void 0), t.b.h = t.h, xe(t.b, e, !1, null), t.M = 0)
            }, S.close = function() { rr(this.a) }, S.Wa = function(t) {
                if (D(t)) {
                    var e = {};
                    e.__data__ = t, or(this.a, e)
                } else this.h ? ((e = {}).__data__ = zt(t), or(this.a, e)) : or(this.a, t)
            }, S.G = function() { this.a.c = null, delete this.f, rr(this.a), delete this.a, wr.N.G.call(this) }, U(Tr, Ae), U(Sr, ke), U(Er, vr), Er.prototype.va = function() { this.a.dispatchEvent("a") }, Er.prototype.ua = function(t) { this.a.dispatchEvent(new Tr(t)) }, Er.prototype.ta = function(t) { this.a.dispatchEvent(new Sr(t)) }, Er.prototype.sa = function() { this.a.dispatchEvent("b") };
            var Ir = V(function(t, e) {
                function n() {}
                n.prototype = t.prototype;
                var r = new n;
                return t.apply(r, Array.prototype.slice.call(arguments, 1)), r
            }, br);
            br.prototype.createWebChannel = br.prototype.a, wr.prototype.send = wr.prototype.Wa, wr.prototype.open = wr.prototype.Va, wr.prototype.close = wr.prototype.close, Te.NO_ERROR = 0, Te.TIMEOUT = 8, Te.HTTP_ERROR = 6, Se.COMPLETE = "complete", (Ce.EventType = Ne).OPEN = "a", Ne.CLOSE = "b", Ne.ERROR = "c", Ne.MESSAGE = "d", Gt.prototype.listen = Gt.prototype.za, Qn.prototype.listenOnce = Qn.prototype.Aa, Qn.prototype.getLastError = Qn.prototype.Xa, Qn.prototype.getLastErrorCode = Qn.prototype.ya, Qn.prototype.getStatus = Qn.prototype.T, Qn.prototype.getResponseJson = Qn.prototype.Ua, Qn.prototype.getResponseText = Qn.prototype.aa, Qn.prototype.send = Qn.prototype.ca;
            var Cr, Dr, Nr = { createWebChannelTransport: Ir, ErrorCode: Te, EventType: Se, WebChannel: Ce, XhrIo: Qn },
                Ar = Nr.createWebChannelTransport,
                kr = Nr.ErrorCode,
                Rr = Nr.EventType,
                Mr = Nr.WebChannel,
                _r = Nr.XhrIo,
                Or = Zd.SDK_VERSION,
                Lr = new u("@firebase/firestore");

            function Pr() { return Lr.logLevel === o.DEBUG ? Cr.DEBUG : Lr.logLevel === o.SILENT ? Cr.SILENT : Cr.ERROR }

            function xr(t) {
                switch (t) {
                    case Cr.DEBUG:
                        Lr.logLevel = o.DEBUG;
                        break;
                    case Cr.ERROR:
                        Lr.logLevel = o.ERROR;
                        break;
                    case Cr.SILENT:
                        Lr.logLevel = o.SILENT;
                        break;
                    default:
                        Lr.error("Firestore (" + Or + "): Invalid value passed to `setLogLevel`")
                }
            }

            function Fr(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (Lr.logLevel <= o.DEBUG) {
                    var i = n.map(Vr);
                    Lr.debug.apply(Lr, a(["Firestore (" + Or + ") [" + t + "]: " + e], i))
                }
            }

            function qr(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Lr.logLevel <= o.ERROR) {
                    var r = e.map(Vr);
                    Lr.error.apply(Lr, a(["Firestore (" + Or + "): " + t], r))
                }
            }

            function Vr(e) { if ("string" == typeof e) return e; var t = Kr.getPlatform(); try { return t.formatJSON(e) } catch (t) { return e } }

            function Br(t) { var e = "FIRESTORE (" + Or + ") INTERNAL ASSERTION FAILED: " + t; throw qr(e), new Error(e) }

            function Ur(t, e) { t || Br(e) }(Dr = Cr = Cr || {})[Dr.DEBUG = 0] = "DEBUG", Dr[Dr.ERROR = 1] = "ERROR", Dr[Dr.SILENT = 2] = "SILENT";
            var Kr = (Qr.setPlatform = function(t) { Qr.platform && Br("Platform already defined"), Qr.platform = t }, Qr.getPlatform = function() { return Qr.platform || Br("Platform not set"), Qr.platform }, Qr);

            function Qr() {}

            function jr() { return Kr.getPlatform().emptyByteString }
            var Gr, Wr = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" },
                zr = (t(Hr, Gr = Error), Hr);

            function Hr(t, e) { var n = Gr.call(this, e) || this; return n.code = t, n.message = e, n.name = "FirebaseError", n.toString = function() { return n.name + ": [code=" + n.code + "]: " + n.message }, n }

            function Yr(t, e) {
                function n() { var t = "This constructor is private."; throw e && (t += " ", t += e), new zr(Wr.INVALID_ARGUMENT, t) }
                for (var r in n.prototype = t.prototype, t) t.hasOwnProperty(r) && (n[r] = t[r]);
                return n
            }

            function Jr(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

            function Xr(t, e) { return void 0 !== t ? t : e }

            function Zr(t, e) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Number(n);
                        isNaN(r) || e(r, t[n])
                    }
            }

            function $r(t, e) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]) }

            function ti(t) {
                for (var e in Ur(null != t && "object" == typeof t, "isEmpty() expects object parameter."), t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }

            function ei(t, e) { if (0 !== e.length) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + bi(e.length, "argument") + ".") }

            function ni(t, e, n) { if (e.length !== n) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires " + bi(n, "argument") + ", but was called with " + bi(e.length, "argument") + ".") }

            function ri(t, e, n) { if (e.length < n) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires at least " + bi(n, "argument") + ", but was called with " + bi(e.length, "argument") + ".") }

            function ii(t, e, n, r) { if (e.length < n || e.length > r) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + bi(e.length, "argument") + ".") }

            function oi(t, e, n, r) { li(t, e, vi(n) + " argument", r) }

            function ai(t, e, n, r) { void 0 !== r && oi(t, e, n, r) }

            function si(t, e, n, r) { li(t, e, n + " option", r) }

            function ui(t, e, n, r) { void 0 !== r && si(t, e, n, r) }

            function ci(t, e, n, r, i) {
                void 0 !== r && function(t, e, n, r, i) {
                    if (!(r instanceof Array)) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + pi(r));
                    for (var o = 0; o < r.length; ++o)
                        if (!i(r[o])) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + pi(r[o]))
                }(t, e, n, r, i)
            }

            function hi(t, e, n, r, i) {
                void 0 !== r && function(t, e, n, r, i) {
                    for (var o = [], a = 0, s = i; a < s.length; a++) {
                        var u = s[a];
                        if (u === r) return;
                        o.push(pi(u))
                    }
                    var c = pi(r);
                    throw new zr(Wr.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "))
                }(t, 0, n, r, i)
            }

            function li(t, e, n, r) { if (!("object" === e ? fi(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) { var i = pi(r); throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i) } }

            function fi(t) { return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t)) }

            function pi(t) { if (void 0 === t) return "undefined"; if (null === t) return "null"; if ("string" == typeof t) return 20 < t.length && (t = t.substring(0, 20) + "..."), JSON.stringify(t); if ("number" == typeof t || "boolean" == typeof t) return "" + t; if ("object" != typeof t) return "function" == typeof t ? "a function" : Br("Unknown wrong type: " + typeof t); if (t instanceof Array) return "an array"; var e = function(t) { if (t.constructor) { var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString()); if (e && 1 < e.length) return e[1] } return null }(t); return e ? "a custom " + e + " object" : "an object" }

            function di(t, e, n) { if (void 0 === n) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + vi(e) + " argument, but it was undefined.") }

            function mi(n, t, r) { $r(t, function(t, e) { if (r.indexOf(t) < 0) throw new zr(Wr.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + n + "(). Available options: " + r.join(", ")) }) }

            function yi(t, e, n, r) { var i = pi(r); return new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires its " + vi(n) + " argument to be a " + e + ", but it was: " + i) }

            function gi(t, e, n) { if (n <= 0) throw new zr(Wr.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + vi(e) + " argument to be a positive number, but it was: " + n + ".") }

            function vi(t) {
                switch (t) {
                    case 1:
                        return "first";
                    case 2:
                        return "second";
                    case 3:
                        return "third";
                    default:
                        return t + "th"
                }
            }

            function bi(t, e) { return t + " " + e + (1 === t ? "" : "s") }
            var wi = (Ti.newId = function() { for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length)); return Ur(20 === e.length, "Invalid auto ID: " + e), e }, Ti);

            function Ti() {}

            function Si(t, e) { return t < e ? -1 : e < t ? 1 : 0 }

            function Ei(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (!t[n].isEqual(e[n])) return !1;
                return !0
            }

            function Ii(t) { return t + "\0" }

            function Ci() { if ("undefined" == typeof Uint8Array) throw new zr(Wr.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.") }

            function Di() { if (!Kr.getPlatform().base64Available) throw new zr(Wr.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.") }
            var Ni = (Ai.fromBase64String = function(t) { ni("Blob.fromBase64String", arguments, 1), oi("Blob.fromBase64String", "string", 1, t), Di(); try { return new Ai(Kr.getPlatform().atob(t)) } catch (t) { throw new zr(Wr.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t) } }, Ai.fromUint8Array = function(t) { if (ni("Blob.fromUint8Array", arguments, 1), Ci(), !(t instanceof Uint8Array)) throw yi("Blob.fromUint8Array", "Uint8Array", 1, t); return new Ai(Array.prototype.map.call(t, function(t) { return String.fromCharCode(t) }).join("")) }, Ai.prototype.toBase64 = function() { return ni("Blob.toBase64", arguments, 0), Di(), Kr.getPlatform().btoa(this._binaryString) }, Ai.prototype.toUint8Array = function() { ni("Blob.toUint8Array", arguments, 0), Ci(); for (var t = new Uint8Array(this._binaryString.length), e = 0; e < this._binaryString.length; e++) t[e] = this._binaryString.charCodeAt(e); return t }, Ai.prototype.toString = function() { return "Blob(base64: " + this.toBase64() + ")" }, Ai.prototype.isEqual = function(t) { return this._binaryString === t._binaryString }, Ai.prototype._compareTo = function(t) { return Si(this._binaryString, t._binaryString) }, Ai);

            function Ai(t) { Di(), this._binaryString = t }
            var ki = Yr(Ni, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
                Ri = function(t, e, n, r, i) { this.databaseId = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i },
                Mi = "(default)",
                _i = (Object.defineProperty(Oi.prototype, "isDefaultDatabase", { get: function() { return this.database === Mi }, enumerable: !0, configurable: !0 }), Oi.prototype.isEqual = function(t) { return t instanceof Oi && t.projectId === this.projectId && t.database === this.database }, Oi.prototype.compareTo = function(t) { return Si(this.projectId, t.projectId) || Si(this.database, t.database) }, Oi);

            function Oi(t, e) { this.projectId = t, this.database = e || Mi }
            var Li = (Pi.prototype.setPreviousValue = function(t) { return this.previousValue = Math.max(t, this.previousValue), this.previousValue }, Pi.prototype.next = function() { var t = ++this.previousValue; return this.writeNewSequenceNumber && this.writeNewSequenceNumber(t), t }, Pi.INVALID = -1, Pi);

            function Pi(t, e) {
                var n = this;
                this.previousValue = t, e && (e.sequenceNumberHandler = function(t) { return n.setPreviousValue(t) }, this.writeNewSequenceNumber = function(t) { return e.writeSequenceNumber(t) })
            }
            var xi = "__name__",
                Fi = (Object.defineProperty(qi.prototype, "length", { get: function() { return this.len }, enumerable: !0, configurable: !0 }), qi.prototype.isEqual = function(t) { return 0 === qi.comparator(this, t) }, qi.prototype.child = function(t) { var e = this.segments.slice(this.offset, this.limit()); return t instanceof qi ? t.forEach(function(t) { e.push(t) }) : e.push(t), this.construct(e) }, qi.prototype.limit = function() { return this.offset + this.length }, qi.prototype.popFirst = function(t) { return t = void 0 === t ? 1 : t, Ur(this.length >= t, "Can't call popFirst() with less segments"), this.construct(this.segments, this.offset + t, this.length - t) }, qi.prototype.popLast = function() { return Ur(!this.isEmpty(), "Can't call popLast() on empty path"), this.construct(this.segments, this.offset, this.length - 1) }, qi.prototype.firstSegment = function() { return Ur(!this.isEmpty(), "Can't call firstSegment() on empty path"), this.segments[this.offset] }, qi.prototype.lastSegment = function() { return this.get(this.length - 1) }, qi.prototype.get = function(t) { return Ur(t < this.length, "Index out of range"), this.segments[this.offset + t] }, qi.prototype.isEmpty = function() { return 0 === this.length }, qi.prototype.isPrefixOf = function(t) {
                    if (t.length < this.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, qi.prototype.isImmediateParentOf = function(t) {
                    if (this.length + 1 !== t.length) return !1;
                    for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1;
                    return !0
                }, qi.prototype.forEach = function(t) { for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]) }, qi.prototype.toArray = function() { return this.segments.slice(this.offset, this.limit()) }, qi.comparator = function(t, e) {
                    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                        var i = t.get(r),
                            o = e.get(r);
                        if (i < o) return -1;
                        if (o < i) return 1
                    }
                    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                }, qi);

            function qi(t, e, n) { void 0 === e ? e = 0 : e > t.length && Br("offset " + e + " out of range " + t.length), void 0 === n ? n = t.length - e : n > t.length - e && Br("length " + n + " out of range " + (t.length - e)), this.segments = t, this.offset = e, this.len = n }
            var Vi, Bi = (t(Ui, Vi = Fi), Ui.prototype.construct = function(t, e, n) { return new Ui(t, e, n) }, Ui.prototype.canonicalString = function() { return this.toArray().join("/") }, Ui.prototype.toString = function() { return this.canonicalString() }, Ui.fromString = function(t) { if (0 <= t.indexOf("//")) throw new zr(Wr.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them."); return new Ui(t.split("/").filter(function(t) { return 0 < t.length })) }, Ui.EMPTY_PATH = new Ui([]), Ui);

            function Ui() { return null !== Vi && Vi.apply(this, arguments) || this }
            var Ki, Qi = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                ji = (t(Gi, Ki = Fi), Gi.prototype.construct = function(t, e, n) { return new Gi(t, e, n) }, Gi.isValidIdentifier = function(t) { return Qi.test(t) }, Gi.prototype.canonicalString = function() { return this.toArray().map(function(t) { return t = t.replace("\\", "\\\\").replace("`", "\\`"), Gi.isValidIdentifier(t) || (t = "`" + t + "`"), t }).join(".") }, Gi.prototype.toString = function() { return this.canonicalString() }, Gi.prototype.isKeyField = function() { return 1 === this.length && this.get(0) === xi }, Gi.keyField = function() { return new Gi([xi]) }, Gi.fromServerFormat = function(t) {
                    for (var e = [], n = "", r = 0, i = function() {
                            if (0 === n.length) throw new zr(Wr.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                            e.push(n), n = ""
                        }, o = !1; r < t.length;) {
                        var a = t[r];
                        if ("\\" === a) {
                            if (r + 1 === t.length) throw new zr(Wr.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                            var s = t[r + 1];
                            if ("\\" !== s && "." !== s && "`" !== s) throw new zr(Wr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                            n += s, r += 2
                        } else "`" === a ? o = !o : "." !== a || o ? n += a : i(), r++
                    }
                    if (i(), o) throw new zr(Wr.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                    return new Gi(e)
                }, Gi.EMPTY_PATH = new Gi([]), Gi);

            function Gi() { return null !== Ki && Ki.apply(this, arguments) || this }
            var Wi = (zi.prototype.hasCollectionId = function(t) { return 2 <= this.path.length && this.path.get(this.path.length - 2) === t }, zi.prototype.isEqual = function(t) { return null !== t && 0 === Bi.comparator(this.path, t.path) }, zi.prototype.toString = function() { return this.path.toString() }, zi.comparator = function(t, e) { return Bi.comparator(t.path, e.path) }, zi.isDocumentKey = function(t) { return t.length % 2 == 0 }, zi.fromSegments = function(t) { return new zi(new Bi(t.slice())) }, zi.fromPathString = function(t) { return new zi(Bi.fromString(t)) }, zi.EMPTY = new zi(new Bi([])), zi);

            function zi(t) { this.path = t, Ur(zi.isDocumentKey(t), "Invalid DocumentKey with an odd number of segments: " + t.toArray().join("/")) }
            var Hi, Yi, Ji = function() {
                var n = this;
                this.promise = new Promise(function(t, e) { n.resolve = t, n.reject = e })
            };
            (Yi = Hi = Hi || {}).All = "all", Yi.ListenStreamIdle = "listen_stream_idle", Yi.ListenStreamConnectionBackoff = "listen_stream_connection_backoff", Yi.WriteStreamIdle = "write_stream_idle", Yi.WriteStreamConnectionBackoff = "write_stream_connection_backoff", Yi.OnlineStateTimeout = "online_state_timeout", Yi.ClientMetadataRefresh = "client_metadata_refresh", Yi.LruGarbageCollection = "lru_garbage_collection", Yi.RetryTransaction = "retry_transaction";
            var Xi = (Zi.createAndSchedule = function(t, e, n, r, i) { var o = new Zi(t, e, Date.now() + n, r, i); return o.start(n), o }, Zi.prototype.start = function(t) {
                var e = this;
                this.timerHandle = setTimeout(function() { return e.handleDelayElapsed() }, t)
            }, Zi.prototype.skipDelay = function() { return this.handleDelayElapsed() }, Zi.prototype.cancel = function(t) { null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new zr(Wr.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")))) }, Zi.prototype.handleDelayElapsed = function() {
                var e = this;
                this.asyncQueue.enqueueAndForget(function() { return null !== e.timerHandle ? (e.clearTimeout(), e.op().then(function(t) { return e.deferred.resolve(t) })) : Promise.resolve() })
            }, Zi.prototype.clearTimeout = function() { null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null) }, Zi);

            function Zi(t, e, n, r, i) { this.asyncQueue = t, this.timerId = e, this.targetTimeMs = n, this.op = r, this.removalCallback = i, this.deferred = new Ji, this.then = this.deferred.promise.then.bind(this.deferred.promise), this.catch = this.deferred.promise.catch.bind(this.deferred.promise), this.deferred.promise.catch(function(t) {}) }
            var $i = (Object.defineProperty(to.prototype, "isShuttingDown", { get: function() { return this._isShuttingDown }, enumerable: !0, configurable: !0 }), to.prototype.enqueueAndForget = function(t) { this.enqueue(t) }, to.prototype.enqueueAndForgetEvenAfterShutdown = function(t) { this.verifyNotFailed(), this.enqueueInternal(t) }, to.prototype.enqueueEvenAfterShutdown = function(t) { return this.verifyNotFailed(), this.enqueueInternal(t) }, to.prototype.enqueueAndInitiateShutdown = function(e) {
                return p(this, void 0, void 0, function() {
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.verifyNotFailed(), this._isShuttingDown ? [3, 2] : (this._isShuttingDown = !0, [4, this.enqueueEvenAfterShutdown(e)]);
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, to.prototype.enqueue = function(t) { return this.verifyNotFailed(), this._isShuttingDown ? new Promise(function(t) {}) : this.enqueueInternal(t) }, to.prototype.enqueueInternal = function(t) {
                var n = this,
                    e = this.tail.then(function() { return n.operationInProgress = !0, t().catch(function(t) { n.failure = t, n.operationInProgress = !1; var e = t.stack || t.message || ""; throw qr("INTERNAL UNHANDLED ERROR: ", e), e.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function() { throw t }, 0), t }).then(function(t) { return n.operationInProgress = !1, t }) });
                return this.tail = e
            }, to.prototype.enqueueAfterDelay = function(t, e, n) {
                var r = this;
                this.verifyNotFailed(), Ur(0 <= e, "Attempted to schedule an operation with a negative delay of " + e), -1 < this.timerIdsToSkip.indexOf(t) && (e = 0);
                var i = Xi.createAndSchedule(this, t, e, n, function(t) { return r.removeDelayedOperation(t) });
                return this.delayedOperations.push(i), i
            }, to.prototype.verifyNotFailed = function() { this.failure && Br("AsyncQueue is already failed: " + (this.failure.stack || this.failure.message)) }, to.prototype.verifyOperationInProgress = function() { Ur(this.operationInProgress, "verifyOpInProgress() called when no op in progress on this queue.") }, to.prototype.drain = function() { return this.enqueueEvenAfterShutdown(function() { return Promise.resolve() }) }, to.prototype.containsDelayedOperation = function(t) {
                for (var e = 0, n = this.delayedOperations; e < n.length; e++)
                    if (n[e].timerId === t) return !0;
                return !1
            }, to.prototype.runDelayedOperationsEarly = function(r) { var i = this; return this.drain().then(function() { Ur(r === Hi.All || i.containsDelayedOperation(r), "Attempted to drain to missing operation " + r), i.delayedOperations.sort(function(t, e) { return t.targetTimeMs - e.targetTimeMs }); for (var t = 0, e = i.delayedOperations; t < e.length; t++) { var n = e[t]; if (n.skipDelay(), r !== Hi.All && n.timerId === r) break } return i.drain() }) }, to.prototype.skipDelaysForTimerId = function(t) { this.timerIdsToSkip.push(t) }, to.prototype.removeDelayedOperation = function(t) {
                var e = this.delayedOperations.indexOf(t);
                Ur(0 <= e, "Delayed operation not found."), this.delayedOperations.splice(e, 1)
            }, to);

            function to() { this.tail = Promise.resolve(), this._isShuttingDown = !1, this.delayedOperations = [], this.failure = null, this.operationInProgress = !1, this.timerIdsToSkip = [] }
            var eo = "",
                no = "",
                ro = "",
                io = "";

            function oo(t) { for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = so(e)), e = ao(t.get(n), e); return so(e) }

            function ao(t, e) {
                for (var n = e, r = t.length, i = 0; i < r; i++) {
                    var o = t.charAt(i);
                    switch (o) {
                        case "\0":
                            n += eo + ro;
                            break;
                        case eo:
                            n += eo + io;
                            break;
                        default:
                            n += o
                    }
                }
                return n
            }

            function so(t) { return t + eo + no }

            function uo(t) {
                var e = t.length;
                if (Ur(2 <= e, "Invalid path " + t), 2 === e) return Ur(t.charAt(0) === eo && t.charAt(1) === no, "Non-empty path " + t + " had length 2"), Bi.EMPTY_PATH;
                for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
                    var a = t.indexOf(eo, o);
                    switch ((a < 0 || n < a) && Br('Invalid encoded resource path: "' + t + '"'), t.charAt(a + 1)) {
                        case no:
                            var s = t.substring(o, a),
                                u = void 0;
                            0 === i.length ? u = s : (u = i += s, i = ""), r.push(u);
                            break;
                        case ro:
                            i += t.substring(o, a), i += "\0";
                            break;
                        case io:
                            i += t.substring(o, a + 1);
                            break;
                        default:
                            Br('Invalid encoded resource path: "' + t + '"')
                    }
                    o = a + 2
                }
                return new Bi(r)
            }
            var co = (ho.now = function() { return ho.fromMillis(Date.now()) }, ho.fromDate = function(t) { return ho.fromMillis(t.getTime()) }, ho.fromMillis = function(t) { var e = Math.floor(t / 1e3); return new ho(e, 1e6 * (t - 1e3 * e)) }, ho.prototype.toDate = function() { return new Date(this.toMillis()) }, ho.prototype.toMillis = function() { return 1e3 * this.seconds + this.nanoseconds / 1e6 }, ho.prototype._compareTo = function(t) { return this.seconds === t.seconds ? Si(this.nanoseconds, t.nanoseconds) : Si(this.seconds, t.seconds) }, ho.prototype.isEqual = function(t) { return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds }, ho.prototype.toString = function() { return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")" }, ho);

            function ho(t, e) { if (this.seconds = t, (this.nanoseconds = e) < 0) throw new zr(Wr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (1e9 <= e) throw new zr(Wr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (t < -62135596800) throw new zr(Wr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); if (253402300800 <= t) throw new zr(Wr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t) }
            var lo = (fo.fromMicroseconds = function(t) { var e = Math.floor(t / 1e6); return new fo(new co(e, t % 1e6 * 1e3)) }, fo.fromTimestamp = function(t) { return new fo(t) }, fo.forDeletedDoc = function() { return fo.MIN }, fo.prototype.compareTo = function(t) { return this.timestamp._compareTo(t.timestamp) }, fo.prototype.isEqual = function(t) { return this.timestamp.isEqual(t.timestamp) }, fo.prototype.toMicroseconds = function() { return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3 }, fo.prototype.toString = function() { return "SnapshotVersion(" + this.timestamp.toString() + ")" }, fo.prototype.toTimestamp = function() { return this.timestamp }, fo.MIN = new fo(new co(0, 0)), fo);

            function fo(t) { this.timestamp = t }
            var po = (mo.prototype.insert = function(t, e) { return new mo(this.comparator, this.root.insert(t, e, this.comparator).copy(null, null, vo.BLACK, null, null)) }, mo.prototype.remove = function(t) { return new mo(this.comparator, this.root.remove(t, this.comparator).copy(null, null, vo.BLACK, null, null)) }, mo.prototype.get = function(t) {
                for (var e = this.root; !e.isEmpty();) {
                    var n = this.comparator(t, e.key);
                    if (0 === n) return e.value;
                    n < 0 ? e = e.left : 0 < n && (e = e.right)
                }
                return null
            }, mo.prototype.indexOf = function(t) {
                for (var e = 0, n = this.root; !n.isEmpty();) {
                    var r = this.comparator(t, n.key);
                    if (0 === r) return e + n.left.size;
                    n = r < 0 ? n.left : (e += n.left.size + 1, n.right)
                }
                return -1
            }, mo.prototype.isEmpty = function() { return this.root.isEmpty() }, Object.defineProperty(mo.prototype, "size", { get: function() { return this.root.size }, enumerable: !0, configurable: !0 }), mo.prototype.minKey = function() { return this.root.minKey() }, mo.prototype.maxKey = function() { return this.root.maxKey() }, mo.prototype.inorderTraversal = function(t) { return this.root.inorderTraversal(t) }, mo.prototype.forEach = function(n) { this.inorderTraversal(function(t, e) { return n(t, e), !1 }) }, mo.prototype.toString = function() { var n = []; return this.inorderTraversal(function(t, e) { return n.push(t + ":" + e), !1 }), "{" + n.join(", ") + "}" }, mo.prototype.reverseTraversal = function(t) { return this.root.reverseTraversal(t) }, mo.prototype.getIterator = function() { return new yo(this.root, null, this.comparator, !1) }, mo.prototype.getIteratorFrom = function(t) { return new yo(this.root, t, this.comparator, !1) }, mo.prototype.getReverseIterator = function() { return new yo(this.root, null, this.comparator, !0) }, mo.prototype.getReverseIteratorFrom = function(t) { return new yo(this.root, t, this.comparator, !0) }, mo);

            function mo(t, e) { this.comparator = t, this.root = e || vo.EMPTY }
            var yo = (go.prototype.getNext = function() {
                Ur(0 < this.nodeStack.length, "getNext() called on iterator when hasNext() is false.");
                var t = this.nodeStack.pop(),
                    e = { key: t.key, value: t.value };
                if (this.isReverse)
                    for (t = t.left; !t.isEmpty();) this.nodeStack.push(t), t = t.right;
                else
                    for (t = t.right; !t.isEmpty();) this.nodeStack.push(t), t = t.left;
                return e
            }, go.prototype.hasNext = function() { return 0 < this.nodeStack.length }, go.prototype.peek = function() { if (0 === this.nodeStack.length) return null; var t = this.nodeStack[this.nodeStack.length - 1]; return { key: t.key, value: t.value } }, go);

            function go(t, e, n, r) {
                this.isReverse = r, this.nodeStack = [];
                for (var i = 1; !t.isEmpty();)
                    if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                    else {
                        if (0 === i) { this.nodeStack.push(t); break }
                        this.nodeStack.push(t), t = this.isReverse ? t.right : t.left
                    }
            }
            var vo = (bo.prototype.copy = function(t, e, n, r, i) { return new bo(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right) }, bo.prototype.isEmpty = function() { return !1 }, bo.prototype.inorderTraversal = function(t) { return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t) }, bo.prototype.reverseTraversal = function(t) { return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t) }, bo.prototype.min = function() { return this.left.isEmpty() ? this : this.left.min() }, bo.prototype.minKey = function() { return this.min().key }, bo.prototype.maxKey = function() { return this.right.isEmpty() ? this.key : this.right.maxKey() }, bo.prototype.insert = function(t, e, n) {
                var r = this,
                    i = n(t, r.key);
                return (r = i < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n))).fixUp()
            }, bo.prototype.removeMin = function() { if (this.left.isEmpty()) return bo.EMPTY; var t = this; return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()), (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp() }, bo.prototype.remove = function(t, e) {
                var n, r = this;
                if (e(t, r.key) < 0) r.left.isEmpty() || r.left.isRed() || r.left.left.isRed() || (r = r.moveRedLeft()), r = r.copy(null, null, null, r.left.remove(t, e), null);
                else {
                    if (r.left.isRed() && (r = r.rotateRight()), r.right.isEmpty() || r.right.isRed() || r.right.left.isRed() || (r = r.moveRedRight()), 0 === e(t, r.key)) {
                        if (r.right.isEmpty()) return bo.EMPTY;
                        n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.removeMin())
                    }
                    r = r.copy(null, null, null, null, r.right.remove(t, e))
                }
                return r.fixUp()
            }, bo.prototype.isRed = function() { return this.color }, bo.prototype.fixUp = function() { var t = this; return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t }, bo.prototype.moveRedLeft = function() { var t = this.colorFlip(); return t.right.left.isRed() && (t = (t = (t = t.copy(null, null, null, null, t.right.rotateRight())).rotateLeft()).colorFlip()), t }, bo.prototype.moveRedRight = function() { var t = this.colorFlip(); return t.left.left.isRed() && (t = (t = t.rotateRight()).colorFlip()), t }, bo.prototype.rotateLeft = function() { var t = this.copy(null, null, bo.RED, null, this.right.left); return this.right.copy(null, null, this.color, t, null) }, bo.prototype.rotateRight = function() { var t = this.copy(null, null, bo.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, t) }, bo.prototype.colorFlip = function() {
                var t = this.left.copy(null, null, !this.left.color, null, null),
                    e = this.right.copy(null, null, !this.right.color, null, null);
                return this.copy(null, null, !this.color, t, e)
            }, bo.prototype.checkMaxDepth = function() { var t = this.check(); return Math.pow(2, t) <= this.size + 1 }, bo.prototype.check = function() { if (this.isRed() && this.left.isRed()) throw Br("Red node has red child(" + this.key + "," + this.value + ")"); if (this.right.isRed()) throw Br("Right child of (" + this.key + "," + this.value + ") is red"); var t = this.left.check(); if (t !== this.right.check()) throw Br("Black depths differ"); return t + (this.isRed() ? 0 : 1) }, bo.EMPTY = null, bo.RED = !0, bo.BLACK = !1, bo);

            function bo(t, e, n, r, i) { this.key = t, this.value = e, this.color = null != n ? n : bo.RED, this.left = null != r ? r : bo.EMPTY, this.right = null != i ? i : bo.EMPTY, this.size = this.left.size + 1 + this.right.size }
            var wo = (Object.defineProperty(To.prototype, "key", { get: function() { throw Br("LLRBEmptyNode has no key.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(To.prototype, "value", { get: function() { throw Br("LLRBEmptyNode has no value.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(To.prototype, "color", { get: function() { throw Br("LLRBEmptyNode has no color.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(To.prototype, "left", { get: function() { throw Br("LLRBEmptyNode has no left child.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(To.prototype, "right", { get: function() { throw Br("LLRBEmptyNode has no right child.") }, enumerable: !0, configurable: !0 }), To.prototype.copy = function(t, e, n, r, i) { return this }, To.prototype.insert = function(t, e, n) { return new vo(t, e) }, To.prototype.remove = function(t, e) { return this }, To.prototype.isEmpty = function() { return !0 }, To.prototype.inorderTraversal = function(t) { return !1 }, To.prototype.reverseTraversal = function(t) { return !1 }, To.prototype.minKey = function() { return null }, To.prototype.maxKey = function() { return null }, To.prototype.isRed = function() { return !1 }, To.prototype.checkMaxDepth = function() { return !0 }, To.prototype.check = function() { return 0 }, To);

            function To() { this.size = 0 }
            vo.EMPTY = new wo;
            var So = (Eo.fromMapKeys = function(t) { var e = new Eo(t.comparator); return t.forEach(function(t) { e = e.add(t) }), e }, Eo.prototype.has = function(t) { return null !== this.data.get(t) }, Eo.prototype.first = function() { return this.data.minKey() }, Eo.prototype.last = function() { return this.data.maxKey() }, Object.defineProperty(Eo.prototype, "size", { get: function() { return this.data.size }, enumerable: !0, configurable: !0 }), Eo.prototype.indexOf = function(t) { return this.data.indexOf(t) }, Eo.prototype.forEach = function(n) { this.data.inorderTraversal(function(t, e) { return n(t), !1 }) }, Eo.prototype.forEachInRange = function(t, e) {
                for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) {
                    var r = n.getNext();
                    if (0 <= this.comparator(r.key, t[1])) return;
                    e(r.key)
                }
            }, Eo.prototype.forEachWhile = function(t, e) {
                var n;
                for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();)
                    if (!t(n.getNext().key)) return
            }, Eo.prototype.firstAfterOrEqual = function(t) { var e = this.data.getIteratorFrom(t); return e.hasNext() ? e.getNext().key : null }, Eo.prototype.getIterator = function() { return new Io(this.data.getIterator()) }, Eo.prototype.getIteratorFrom = function(t) { return new Io(this.data.getIteratorFrom(t)) }, Eo.prototype.add = function(t) { return this.copy(this.data.remove(t).insert(t, !0)) }, Eo.prototype.delete = function(t) { return this.has(t) ? this.copy(this.data.remove(t)) : this }, Eo.prototype.isEmpty = function() { return this.data.isEmpty() }, Eo.prototype.unionWith = function(t) { var e = this; return t.forEach(function(t) { e = e.add(t) }), e }, Eo.prototype.isEqual = function(t) {
                if (!(t instanceof Eo)) return !1;
                if (this.size !== t.size) return !1;
                for (var e = this.data.getIterator(), n = t.data.getIterator(); e.hasNext();) {
                    var r = e.getNext().key,
                        i = n.getNext().key;
                    if (0 !== this.comparator(r, i)) return !1
                }
                return !0
            }, Eo.prototype.toArray = function() { var e = []; return this.forEach(function(t) { e.push(t) }), e }, Eo.prototype.toString = function() { var e = []; return this.forEach(function(t) { return e.push(t) }), "SortedSet(" + e.toString() + ")" }, Eo.prototype.copy = function(t) { var e = new Eo(this.comparator); return e.data = t, e }, Eo);

            function Eo(t) { this.comparator = t, this.data = new po(this.comparator) }
            var Io = (Co.prototype.getNext = function() { return this.iter.getNext().key }, Co.prototype.hasNext = function() { return this.iter.hasNext() }, Co);

            function Co(t) { this.iter = t }
            var Do = new po(Wi.comparator);

            function No() { return Do }

            function Ao() { return No() }
            var ko = new po(Wi.comparator);

            function Ro() { return ko }
            var Mo = new po(Wi.comparator);

            function _o() { return Mo }
            var Oo = new So(Wi.comparator);

            function Lo() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = Oo, r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    n = n.add(o)
                }
                return n
            }
            var Po = new So(Si);

            function xo() { return Po }
            var Fo = (qo.prototype.applyToRemoteDocument = function(t, e, n) {
                e && Ur(e.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                var r = n.mutationResults;
                Ur(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ").");
                for (var i = 0; i < this.mutations.length; i++) {
                    var o = this.mutations[i];
                    if (o.key.isEqual(t)) {
                        var a = r[i];
                        e = o.applyToRemoteDocument(e, a)
                    }
                }
                return e
            }, qo.prototype.applyToLocalView = function(t, e) {
                e && Ur(e.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                for (var n = 0, r = this.baseMutations; n < r.length; n++)(s = r[n]).key.isEqual(t) && (e = s.applyToLocalView(e, e, this.localWriteTime));
                for (var i = e, o = 0, a = this.mutations; o < a.length; o++) {
                    var s;
                    (s = a[o]).key.isEqual(t) && (e = s.applyToLocalView(e, i, this.localWriteTime))
                }
                return e
            }, qo.prototype.applyToLocalDocumentSet = function(n) {
                var r = this,
                    i = n;
                return this.mutations.forEach(function(t) {
                    var e = r.applyToLocalView(t.key, n.get(t.key));
                    e && (i = i.insert(t.key, e))
                }), i
            }, qo.prototype.keys = function() { return this.mutations.reduce(function(t, e) { return t.add(e.key) }, Lo()) }, qo.prototype.isEqual = function(t) { return this.batchId === t.batchId && Ei(this.mutations, t.mutations) && Ei(this.baseMutations, t.baseMutations) }, qo);

            function qo(t, e, n, r) { this.batchId = t, this.localWriteTime = e, this.baseMutations = n, Ur(0 < (this.mutations = r).length, "Cannot create an empty mutation batch") }
            var Vo = (Bo.from = function(t, e, n, r) { Ur(t.mutations.length === n.length, "Mutations sent " + t.mutations.length + " must equal results received " + n.length); for (var i = _o(), o = t.mutations, a = 0; a < o.length; a++) i = i.insert(o[a].key, n[a].version); return new Bo(t, e, n, r, i) }, Bo);

            function Bo(t, e, n, r, i) { this.batch = t, this.commitVersion = e, this.mutationResults = n, this.streamToken = r, this.docVersions = i }
            var Uo = (Ko.prototype.catch = function(t) { return this.next(void 0, t) }, Ko.prototype.next = function(r, i) { var o = this; return this.callbackAttached && Br("Called next() or catch() twice for PersistencePromise"), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(i, this.error) : this.wrapSuccess(r, this.result) : new Ko(function(e, n) { o.nextCallback = function(t) { o.wrapSuccess(r, t).next(e, n) }, o.catchCallback = function(t) { o.wrapFailure(i, t).next(e, n) } }) }, Ko.prototype.toPromise = function() { var n = this; return new Promise(function(t, e) { n.next(t, e) }) }, Ko.prototype.wrapUserFunction = function(t) { try { var e = t(); return e instanceof Ko ? e : Ko.resolve(e) } catch (t) { return Ko.reject(t) } }, Ko.prototype.wrapSuccess = function(t, e) { return t ? this.wrapUserFunction(function() { return t(e) }) : Ko.resolve(e) }, Ko.prototype.wrapFailure = function(t, e) { return t ? this.wrapUserFunction(function() { return t(e) }) : Ko.reject(e) }, Ko.resolve = function(n) { return new Ko(function(t, e) { t(n) }) }, Ko.reject = function(n) { return new Ko(function(t, e) { e(n) }) }, Ko.waitFor = function(t) {
                return new Ko(function(e, n) {
                    var r = 0,
                        i = 0,
                        o = !1;
                    t.forEach(function(t) {++r, t.next(function() {++i, o && i === r && e() }, function(t) { return n(t) }) }), o = !0, i === r && e()
                })
            }, Ko.or = function(t) { for (var n = Ko.resolve(!1), e = function(e) { n = n.next(function(t) { return t ? Ko.resolve(t) : e() }) }, r = 0, i = t; r < i.length; r++) e(i[r]); return n }, Ko.forEach = function(t, n) {
                var r = this,
                    i = [];
                return t.forEach(function(t, e) { i.push(n.call(r, t, e)) }), this.waitFor(i)
            }, Ko);

            function Ko(t) {
                var e = this;
                this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = void 0, this.isDone = !1, this.callbackAttached = !1, t(function(t) { e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t) }, function(t) { e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t) })
            }
            var Qo = "SimpleDb",
                jo = (Go.openOrCreate = function(o, t, a) {
                    return Ur(Go.isAvailable(), "IndexedDB not supported in current environment."), Fr(Qo, "Opening database:", o), new Uo(function(n, r) {
                        var i = window.indexedDB.open(o, t);
                        i.onsuccess = function(t) {
                            var e = t.target.result;
                            n(new Go(e))
                        }, i.onblocked = function() { r(new zr(Wr.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.")) }, i.onerror = function(t) { var e = t.target.error; "VersionError" === e.name ? r(new zr(Wr.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(e) }, i.onupgradeneeded = function(t) {
                            Fr(Qo, 'Database "' + o + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            a.createOrUpgrade(e, i.transaction, t.oldVersion, cu).next(function() { Fr(Qo, "Database upgrade to version " + cu + " complete") })
                        }
                    }).toPromise()
                }, Go.delete = function(t) { return Fr(Qo, "Removing database:", t), Zo(window.indexedDB.deleteDatabase(t)).toPromise() }, Go.isAvailable = function() {
                    if ("undefined" == typeof window || null == window.indexedDB) return !1;
                    if (Go.isMockPersistence()) return !0;
                    if (void 0 === window.navigator) return !1;
                    var t = f(),
                        e = Go.getIOSVersion(t),
                        n = 0 < e && e < 10,
                        r = Go.getAndroidVersion(t),
                        i = 0 < r && r < 4.5;
                    return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/") || n || i)
                }, Go.isMockPersistence = function() { var t; return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.USE_MOCK_PERSISTENCE) }, Go.getStore = function(t, e) { return t.store(e) }, Go.getIOSVersion = function(t) {
                    var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                        n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }, Go.getAndroidVersion = function(t) {
                    var e = t.match(/Android ([\d.]+)/i),
                        n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }, Go.prototype.setVersionChangeListener = function(e) { this.db.onversionchange = function(t) { return e(t) } }, Go.prototype.runTransaction = function(r, c, h) {
                    return p(this, void 0, void 0, function() {
                        var o, a, s, e, u, n;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    o = r.startsWith("readonly"), a = r.endsWith("idempotent"), s = 0, e = function() {
                                        var e, n, r, i;
                                        return m(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    ++s, e = Ho.open(u.db, o ? "readonly" : "readwrite", c), t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]), (n = h(e).catch(function(t) { return e.abort(t), Uo.reject(t) }).toPromise()).catch(function() {}), [4, e.completionPromise];
                                                case 2:
                                                    return t.sent(), [2, { value: n }];
                                                case 3:
                                                    return r = t.sent(), i = a && "FirebaseError" !== r.name && s < 3, Fr(Qo, "Transaction failed with error: %s. Retrying: %s.", r.message, i), i ? [3, 4] : [2, { value: Promise.reject(r) }];
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    }, u = this, t.label = 1;
                                case 1:
                                    return [5, e()];
                                case 2:
                                    return "object" == typeof(n = t.sent()) ? [2, n.value] : [3, 1];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, Go.prototype.close = function() { this.db.close() }, Go);

            function Go(t) { this.db = t, 12.2 === Go.getIOSVersion(f()) && qr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.") }
            var Wo = (Object.defineProperty(zo.prototype, "isDone", { get: function() { return this.shouldStop }, enumerable: !0, configurable: !0 }), Object.defineProperty(zo.prototype, "skipToKey", { get: function() { return this.nextKey }, enumerable: !0, configurable: !0 }), Object.defineProperty(zo.prototype, "cursor", { set: function(t) { this.dbCursor = t }, enumerable: !0, configurable: !0 }), zo.prototype.done = function() { this.shouldStop = !0 }, zo.prototype.skip = function(t) { this.nextKey = t }, zo.prototype.delete = function() { return Zo(this.dbCursor.delete()) }, zo);

            function zo(t) { this.dbCursor = t, this.shouldStop = !1, this.nextKey = null }
            var Ho = (Yo.open = function(t, e, n) { return new Yo(t.transaction(n, e)) }, Object.defineProperty(Yo.prototype, "completionPromise", { get: function() { return this.completionDeferred.promise }, enumerable: !0, configurable: !0 }), Yo.prototype.abort = function(t) { t && this.completionDeferred.reject(t), this.aborted || (Fr(Qo, "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort()) }, Yo.prototype.store = function(t) { var e = this.transaction.objectStore(t); return Ur(!!e, "Object store not part of transaction: " + t), new Jo(e) }, Yo);

            function Yo(t) {
                var n = this;
                this.transaction = t, this.aborted = !1, this.completionDeferred = new Ji, this.transaction.oncomplete = function() { n.completionDeferred.resolve() }, this.transaction.onabort = function() { t.error ? n.completionDeferred.reject(t.error) : n.completionDeferred.resolve() }, this.transaction.onerror = function(t) {
                    var e = ta(t.target.error);
                    n.completionDeferred.reject(e)
                }
            }
            var Jo = (Xo.prototype.put = function(t, e) { return Zo(void 0 !== e ? (Fr(Qo, "PUT", this.store.name, t, e), this.store.put(e, t)) : (Fr(Qo, "PUT", this.store.name, "<auto-key>", t), this.store.put(t))) }, Xo.prototype.add = function(t) { return Fr(Qo, "ADD", this.store.name, t, t), Zo(this.store.add(t)) }, Xo.prototype.get = function(e) { var n = this; return Zo(this.store.get(e)).next(function(t) { return void 0 === t && (t = null), Fr(Qo, "GET", n.store.name, e, t), t }) }, Xo.prototype.delete = function(t) { return Fr(Qo, "DELETE", this.store.name, t), Zo(this.store.delete(t)) }, Xo.prototype.count = function() { return Fr(Qo, "COUNT", this.store.name), Zo(this.store.count()) }, Xo.prototype.loadAll = function(t, e) {
                var n = this.cursor(this.options(t, e)),
                    r = [];
                return this.iterateCursor(n, function(t, e) { r.push(e) }).next(function() { return r })
            }, Xo.prototype.deleteAll = function(t, e) {
                Fr(Qo, "DELETE ALL", this.store.name);
                var n = this.options(t, e);
                n.keysOnly = !1;
                var r = this.cursor(n);
                return this.iterateCursor(r, function(t, e, n) { return n.delete() })
            }, Xo.prototype.iterate = function(t, e) {
                var n;
                e ? n = t : (n = {}, e = t);
                var r = this.cursor(n);
                return this.iterateCursor(r, e)
            }, Xo.prototype.iterateSerial = function(i) {
                var t = this.cursor({});
                return new Uo(function(n, r) {
                    t.onerror = function(t) {
                        var e = ta(t.target.error);
                        r(e)
                    }, t.onsuccess = function(t) {
                        var e = t.target.result;
                        e ? i(e.primaryKey, e.value).next(function(t) { t ? e.continue() : n() }) : n()
                    }
                })
            }, Xo.prototype.iterateCursor = function(t, a) {
                var s = [];
                return new Uo(function(o, e) {
                    t.onerror = function(t) { e(t.target.error) }, t.onsuccess = function(t) {
                        var e = t.target.result;
                        if (e) {
                            var n = new Wo(e),
                                r = a(e.primaryKey, e.value, n);
                            if (r instanceof Uo) {
                                var i = r.catch(function(t) { return n.done(), Uo.reject(t) });
                                s.push(i)
                            }
                            n.isDone ? o() : null === n.skipToKey ? e.continue() : e.continue(n.skipToKey)
                        } else o()
                    }
                }).next(function() { return Uo.waitFor(s) })
            }, Xo.prototype.options = function(t, e) { var n = void 0; return void 0 !== t && ("string" == typeof t ? n = t : (Ur(void 0 === e, "3rd argument must not be defined if 2nd is a range."), e = t)), { index: n, range: e } }, Xo.prototype.cursor = function(t) { var e = "next"; if (t.reverse && (e = "prev"), t.index) { var n = this.store.index(t.index); return t.keysOnly ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e) } return this.store.openCursor(t.range, e) }, Xo);

            function Xo(t) { this.store = t }

            function Zo(t) {
                return new Uo(function(n, r) {
                    t.onsuccess = function(t) {
                        var e = t.target.result;
                        n(e)
                    }, t.onerror = function(t) {
                        var e = ta(t.target.error);
                        r(e)
                    }
                })
            }
            var $o = !1;

            function ta(t) { var e = jo.getIOSVersion(f()); if (12.2 <= e && e < 13) { var n = "An internal error was encountered in the Indexed Database server"; if (0 <= t.message.indexOf(n)) { var r = new zr("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."); return $o || ($o = !0, setTimeout(function() { throw r }, 0)), r } } return t }
            var ea = (na.forUser = function(t, e, n, r) { return Ur("" !== t.uid, "UserID must not be an empty string."), new na(t.isAuthenticated() ? t.uid : "", e, n, r) }, na.prototype.checkEmpty = function(t) {
                var r = !0,
                    e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                return aa(t).iterate({ index: gu.userMutationsIndex, range: e }, function(t, e, n) { r = !1, n.done() }).next(function() { return r })
            }, na.prototype.acknowledgeBatch = function(e, t, n) { return this.getMutationQueueMetadata(e).next(function(t) { return t.lastStreamToken = oa(n), ua(e).put(t) }) }, na.prototype.getLastStreamToken = function(t) { return this.getMutationQueueMetadata(t).next(function(t) { return t.lastStreamToken }) }, na.prototype.setLastStreamToken = function(e, n) { return this.getMutationQueueMetadata(e).next(function(t) { return t.lastStreamToken = oa(n), ua(e).put(t) }) }, na.prototype.addMutationBatch = function(c, h, l, f) {
                var p = this,
                    d = sa(c),
                    m = aa(c);
                return m.add({}).next(function(t) {
                    Ur("number" == typeof t, "Auto-generated key is not a number");
                    for (var e = new Fo(t, h, l, f), n = p.serializer.toDbMutationBatch(p.userId, e), r = [], i = new So(function(t, e) { return Si(t.canonicalString(), e.canonicalString()) }), o = 0, a = f; o < a.length; o++) {
                        var s = a[o],
                            u = bu.key(p.userId, s.key.path, t);
                        i = i.add(s.key.path.popLast()), r.push(m.put(n)), r.push(d.put(u, bu.PLACEHOLDER))
                    }
                    return i.forEach(function(t) { r.push(p.indexManager.addToCollectionParentIndex(c, t)) }), c.addOnCommittedListener(function() { p.documentKeysByBatchId[t] = e.keys() }), Uo.waitFor(r).next(function() { return e })
                })
            }, na.prototype.lookupMutationBatch = function(t, e) { var n = this; return aa(t).get(e).next(function(t) { return t ? (Ur(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), n.serializer.fromDbMutationBatch(t)) : null }) }, na.prototype.lookupMutationKeys = function(t, n) { var r = this; return this.documentKeysByBatchId[n] ? Uo.resolve(this.documentKeysByBatchId[n]) : this.lookupMutationBatch(t, n).next(function(t) { if (t) { var e = t.keys(); return r.documentKeysByBatchId[n] = e } return null }) }, na.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
                var r = this,
                    i = e + 1,
                    n = IDBKeyRange.lowerBound([this.userId, i]),
                    o = null;
                return aa(t).iterate({ index: gu.userMutationsIndex, range: n }, function(t, e, n) { e.userId === r.userId && (Ur(e.batchId >= i, "Should have found mutation after " + i), o = r.serializer.fromDbMutationBatch(e)), n.done() }).next(function() { return o })
            }, na.prototype.getHighestUnacknowledgedBatchId = function(t) {
                var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                    r = -1;
                return aa(t).iterate({ index: gu.userMutationsIndex, range: e, reverse: !0 }, function(t, e, n) { r = e.batchId, n.done() }).next(function() { return r })
            }, na.prototype.getAllMutationBatches = function(t) {
                var e = this,
                    n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                return aa(t).loadAll(gu.userMutationsIndex, n).next(function(t) { return t.map(function(t) { return e.serializer.fromDbMutationBatch(t) }) })
            }, na.prototype.getAllMutationBatchesAffectingDocumentKey = function(s, u) {
                var c = this,
                    t = bu.prefixForPath(this.userId, u.path),
                    e = IDBKeyRange.lowerBound(t),
                    h = [];
                return sa(s).iterate({ range: e }, function(e, t, n) {
                    var r = e[0],
                        i = e[1],
                        o = e[2],
                        a = uo(i);
                    if (r === c.userId && u.path.isEqual(a)) return aa(s).get(o).next(function(t) {
                        if (!t) throw Br("Dangling document-mutation reference found: " + e + " which points to " + o);
                        Ur(t.userId === c.userId, "Unexpected user '" + t.userId + "' for mutation batch " + o), h.push(c.serializer.fromDbMutationBatch(t))
                    });
                    n.done()
                }).next(function() { return h })
            }, na.prototype.getAllMutationBatchesAffectingDocumentKeys = function(r, t) {
                var u = this,
                    c = new So(Si),
                    i = [];
                return t.forEach(function(s) {
                    var t = bu.prefixForPath(u.userId, s.path),
                        e = IDBKeyRange.lowerBound(t),
                        n = sa(r).iterate({ range: e }, function(t, e, n) {
                            var r = t[0],
                                i = t[1],
                                o = t[2],
                                a = uo(i);
                            r === u.userId && s.path.isEqual(a) ? c = c.add(o) : n.done()
                        });
                    i.push(n)
                }), Uo.waitFor(i).next(function() { return u.lookupMutationBatches(r, c) })
            }, na.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                var s = this;
                Ur(!e.isDocumentQuery(), "Document queries shouldn't go down this path"), Ur(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                var u = e.path,
                    c = u.length + 1,
                    n = bu.prefixForPath(this.userId, u),
                    r = IDBKeyRange.lowerBound(n),
                    h = new So(Si);
                return sa(t).iterate({ range: r }, function(t, e, n) {
                    var r = t[0],
                        i = t[1],
                        o = t[2],
                        a = uo(i);
                    r === s.userId && u.isPrefixOf(a) ? a.length === c && (h = h.add(o)) : n.done()
                }).next(function() { return s.lookupMutationBatches(t, h) })
            }, na.prototype.lookupMutationBatches = function(t, e) {
                var n = this,
                    r = [],
                    i = [];
                return e.forEach(function(e) {
                    i.push(aa(t).get(e).next(function(t) {
                        if (null === t) throw Br("Dangling document-mutation reference found, which points to " + e);
                        Ur(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), r.push(n.serializer.fromDbMutationBatch(t))
                    }))
                }), Uo.waitFor(i).next(function() { return r })
            }, na.prototype.removeMutationBatch = function(e, n) { var r = this; return ia(e.simpleDbTransaction, this.userId, n).next(function(t) { return e.addOnCommittedListener(function() { r.removeCachedMutationKeys(n.batchId) }), Uo.forEach(t, function(t) { return r.referenceDelegate.removeMutationReference(e, t) }) }) }, na.prototype.removeCachedMutationKeys = function(t) { delete this.documentKeysByBatchId[t] }, na.prototype.performConsistencyCheck = function(n) {
                var o = this;
                return this.checkEmpty(n).next(function(t) {
                    if (!t) return Uo.resolve();
                    var e = IDBKeyRange.lowerBound(bu.prefixForUser(o.userId)),
                        i = [];
                    return sa(n).iterate({ range: e }, function(t, e, n) {
                        if (t[0] === o.userId) {
                            var r = uo(t[1]);
                            i.push(r)
                        } else n.done()
                    }).next(function() { Ur(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map(function(t) { return t.canonicalString() })) })
                })
            }, na.prototype.containsKey = function(t, e) { return ra(t, this.userId, e) }, na.prototype.getMutationQueueMetadata = function(t) { var e = this; return ua(t).get(this.userId).next(function(t) { return t || new mu(e.userId, -1, "") }) }, na);

            function na(t, e, n, r) { this.userId = t, this.serializer = e, this.indexManager = n, this.referenceDelegate = r, this.documentKeysByBatchId = {} }

            function ra(t, o, e) {
                var n = bu.prefixForPath(o, e.path),
                    a = n[1],
                    r = IDBKeyRange.lowerBound(n),
                    s = !1;
                return sa(t).iterate({ range: r, keysOnly: !0 }, function(t, e, n) {
                    var r = t[0],
                        i = t[1];
                    t[2];
                    r === o && i === a && (s = !0), n.done()
                }).next(function() { return s })
            }

            function ia(t, e, n) {
                var r = t.store(gu.store),
                    i = t.store(bu.store),
                    o = [],
                    a = IDBKeyRange.only(n.batchId),
                    s = 0,
                    u = r.iterate({ range: a }, function(t, e, n) { return s++, n.delete() });
                o.push(u.next(function() { Ur(1 === s, "Dangling document-mutation reference found: Missing batch " + n.batchId) }));
                for (var c = [], h = 0, l = n.mutations; h < l.length; h++) {
                    var f = l[h],
                        p = bu.key(e, f.key.path, n.batchId);
                    o.push(i.delete(p)), c.push(f.key)
                }
                return Uo.waitFor(o).next(function() { return c })
            }

            function oa(t) { return t instanceof Uint8Array ? (Ur(jo.isMockPersistence(), "Persisting non-string stream tokens is only supported with mock persistence."), t.toString()) : t }

            function aa(t) { return fc.getStore(t, gu.store) }

            function sa(t) { return fc.getStore(t, bu.store) }

            function ua(t) { return fc.getStore(t, mu.store) }
            var ca, ha;
            (ha = ca = ca || {})[ha.QueryCache = 0] = "QueryCache", ha[ha.SyncEngine = 1] = "SyncEngine";
            var la = (fa.prototype.next = function() { var t = this.nextId; return this.nextId += 2, t }, fa.prototype.after = function(t) { return this.seek(t + 2), this.next() }, fa.prototype.seek = function(t) { Ur((1 & t) === this.generatorId, "Cannot supply target ID from different generator ID"), this.nextId = t }, fa.forTargetCache = function() { return new fa(ca.QueryCache, 2) }, fa.forSyncEngine = function() { return new fa(ca.SyncEngine) }, fa);

            function fa(t, e) { Ur((1 & (this.generatorId = t)) === t, "Generator ID " + t + " contains more than 1 reserved bits"), this.seek(void 0 !== e ? e : this.generatorId) }
            var pa = (da.prototype.allocateTargetId = function(e) { var n = this; return this.retrieveMetadata(e).next(function(t) { return t.highestTargetId = n.targetIdGenerator.after(t.highestTargetId), n.saveMetadata(e, t).next(function() { return t.highestTargetId }) }) }, da.prototype.getLastRemoteSnapshotVersion = function(t) { return this.retrieveMetadata(t).next(function(t) { return lo.fromTimestamp(new co(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds)) }) }, da.prototype.getHighestSequenceNumber = function(t) { return ga(t.simpleDbTransaction) }, da.prototype.setTargetsMetadata = function(e, n, r) { var i = this; return this.retrieveMetadata(e).next(function(t) { return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.toTimestamp()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.saveMetadata(e, t) }) }, da.prototype.addTargetData = function(e, n) { var r = this; return this.saveTargetData(e, n).next(function() { return r.retrieveMetadata(e).next(function(t) { return t.targetCount += 1, r.updateMetadataFromTargetData(n, t), r.saveMetadata(e, t) }) }) }, da.prototype.updateTargetData = function(t, e) { return this.saveTargetData(t, e) }, da.prototype.removeTargetData = function(e, t) { var n = this; return this.removeMatchingKeysForTargetId(e, t.targetId).next(function() { return ma(e).delete(t.targetId) }).next(function() { return n.retrieveMetadata(e) }).next(function(t) { return Ur(0 < t.targetCount, "Removing from an empty target cache"), t.targetCount -= 1, n.saveMetadata(e, t) }) }, da.prototype.removeTargets = function(r, i, o) {
                var a = this,
                    s = 0,
                    u = [];
                return ma(r).iterate(function(t, e) {
                    var n = a.serializer.fromDbTarget(e);
                    n.sequenceNumber <= i && null === o.get(n.targetId) && (s++, u.push(a.removeTargetData(r, n)))
                }).next(function() { return Uo.waitFor(u) }).next(function() { return s })
            }, da.prototype.forEachTarget = function(t, r) {
                var i = this;
                return ma(t).iterate(function(t, e) {
                    var n = i.serializer.fromDbTarget(e);
                    r(n)
                })
            }, da.prototype.retrieveMetadata = function(t) { return ya(t.simpleDbTransaction) }, da.prototype.saveMetadata = function(t, e) { return function(t) { return fc.getStore(t, Mu.store) }(t).put(Mu.key, e) }, da.prototype.saveTargetData = function(t, e) { return ma(t).put(this.serializer.toDbTarget(e)) }, da.prototype.updateMetadataFromTargetData = function(t, e) { var n = !1; return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n }, da.prototype.getTargetCount = function(t) { return this.retrieveMetadata(t).next(function(t) { return t.targetCount }) }, da.prototype.getTargetData = function(t, i) {
                var o = this,
                    e = i.canonicalId(),
                    n = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                    a = null;
                return ma(t).iterate({ range: n, index: Nu.queryTargetsIndexName }, function(t, e, n) {
                    var r = o.serializer.fromDbTarget(e);
                    i.isEqual(r.target) && (a = r, n.done())
                }).next(function() { return a })
            }, da.prototype.addMatchingKeys = function(n, t, r) {
                var i = this,
                    o = [],
                    a = va(n);
                return t.forEach(function(t) {
                    var e = oo(t.path);
                    o.push(a.put(new ku(r, e))), o.push(i.referenceDelegate.addReference(n, t))
                }), Uo.waitFor(o)
            }, da.prototype.removeMatchingKeys = function(n, t, r) {
                var i = this,
                    o = va(n);
                return Uo.forEach(t, function(t) { var e = oo(t.path); return Uo.waitFor([o.delete([r, e]), i.referenceDelegate.removeReference(n, t)]) })
            }, da.prototype.removeMatchingKeysForTargetId = function(t, e) {
                var n = va(t),
                    r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                return n.delete(r)
            }, da.prototype.getMatchingKeysForTargetId = function(t, e) {
                var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                    r = va(t),
                    o = Lo();
                return r.iterate({ range: n, keysOnly: !0 }, function(t, e, n) {
                    var r = uo(t[1]),
                        i = new Wi(r);
                    o = o.add(i)
                }).next(function() { return o })
            }, da.prototype.containsKey = function(t, e) {
                var n = oo(e.path),
                    r = IDBKeyRange.bound([n], [Ii(n)], !1, !0),
                    i = 0;
                return va(t).iterate({ index: ku.documentTargetsIndex, keysOnly: !0, range: r }, function(t, e, n) {
                    var r = t[0];
                    t[1], 0 !== r && (i++, n.done())
                }).next(function() { return 0 < i })
            }, da.prototype.getTargetDataForTarget = function(t, e) { var n = this; return ma(t).get(e).next(function(t) { return t ? n.serializer.fromDbTarget(t) : null }) }, da);

            function da(t, e) { this.referenceDelegate = t, this.serializer = e, this.targetIdGenerator = la.forTargetCache() }

            function ma(t) { return fc.getStore(t, Nu.store) }

            function ya(t) { return jo.getStore(t, Mu.store).get(Mu.key).next(function(t) { return Ur(null !== t, "Missing metadata row."), t }) }

            function ga(t) { return ya(t).next(function(t) { return t.highestListenSequenceNumber }) }

            function va(t) { return fc.getStore(t, ku.store) }
            var ba = (wa.fromSet = function(t) { return new wa(t) }, wa.fromArray = function(t) { var e = new So(ji.comparator); return t.forEach(function(t) { return e = e.add(t) }), new wa(e) }, wa.prototype.covers = function(e) { var n = !1; return this.fields.forEach(function(t) { t.isPrefixOf(e) && (n = !0) }), n }, wa.prototype.isEqual = function(t) { return this.fields.isEqual(t.fields) }, wa);

            function wa(t) { this.fields = t }
            var Ta = (Sa.prototype.isEqual = function(t) { return this.field.isEqual(t.field) && this.transform.isEqual(t.transform) }, Sa);

            function Sa(t, e) { this.field = t, this.transform = e }
            var Ea, Ia, Ca = function(t, e) { this.version = t, this.transformResults = e };
            (Ia = Ea = Ea || {})[Ia.Set = 0] = "Set", Ia[Ia.Patch = 1] = "Patch", Ia[Ia.Transform = 2] = "Transform", Ia[Ia.Delete = 3] = "Delete";
            var Da = (Na.exists = function(t) { return new Na(void 0, t) }, Na.updateTime = function(t) { return new Na(t) }, Object.defineProperty(Na.prototype, "isNone", { get: function() { return void 0 === this.updateTime && void 0 === this.exists }, enumerable: !0, configurable: !0 }), Na.prototype.isValidFor = function(t) { return void 0 !== this.updateTime ? t instanceof Vs && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof Vs : (Ur(this.isNone, "Precondition should be empty"), !0) }, Na.prototype.isEqual = function(t) { return function(t, e) { return null != t ? !(!e || !t.isEqual(e)) : t === e }(this.updateTime, t.updateTime) && this.exists === t.exists }, Na.NONE = new Na, Na);

            function Na(t, e) { this.updateTime = t, this.exists = e, Ur(void 0 === t || void 0 === e, 'Precondition can specify "exists" or "updateTime" but not both') }
            var Aa = (ka.prototype.verifyKeyMatches = function(t) { null != t && Ur(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key") }, ka.getPostMutationVersion = function(t) { return t instanceof Vs ? t.version : lo.MIN }, ka);

            function ka() {}
            var Ra, Ma = (t(_a, Ra = Aa), _a.prototype.applyToRemoteDocument = function(t, e) { this.verifyKeyMatches(t), Ur(null == e.transformResults, "Transform results received by SetMutation."); var n = e.version; return new Vs(this.key, n, { hasCommittedMutations: !0 }, this.value) }, _a.prototype.applyToLocalView = function(t, e, n) { if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t; var r = Aa.getPostMutationVersion(t); return new Vs(this.key, r, { hasLocalMutations: !0 }, this.value) }, _a.prototype.extractBaseValue = function(t) { return null }, _a.prototype.isEqual = function(t) { return t instanceof _a && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.precondition.isEqual(t.precondition) }, _a);

            function _a(t, e, n) { var r = Ra.call(this) || this; return r.key = t, r.value = e, r.precondition = n, r.type = Ea.Set, r }
            var Oa, La = (t(Pa, Oa = Aa), Pa.prototype.applyToRemoteDocument = function(t, e) { if (this.verifyKeyMatches(t), Ur(null == e.transformResults, "Transform results received by PatchMutation."), !this.precondition.isValidFor(t)) return new Gs(this.key, e.version); var n = this.patchDocument(t); return new Vs(this.key, e.version, { hasCommittedMutations: !0 }, n) }, Pa.prototype.applyToLocalView = function(t, e, n) {
                if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                var r = Aa.getPostMutationVersion(t),
                    i = this.patchDocument(t);
                return new Vs(this.key, r, { hasLocalMutations: !0 }, i)
            }, Pa.prototype.extractBaseValue = function(t) { return null }, Pa.prototype.isEqual = function(t) { return t instanceof Pa && this.key.isEqual(t.key) && this.fieldMask.isEqual(t.fieldMask) && this.precondition.isEqual(t.precondition) }, Pa.prototype.patchDocument = function(t) { var e; return e = t instanceof Vs ? t.data() : Ms.EMPTY, this.patchObject(e) }, Pa.prototype.patchObject = function(n) {
                var r = this;
                return this.fieldMask.fields.forEach(function(t) {
                    if (!t.isEmpty()) {
                        var e = r.data.field(t);
                        n = null !== e ? n.set(t, e) : n.delete(t)
                    }
                }), n
            }, Pa);

            function Pa(t, e, n, r) { var i = Oa.call(this) || this; return i.key = t, i.data = e, i.fieldMask = n, i.precondition = r, i.type = Ea.Patch, i }
            var xa, Fa = (t(qa, xa = Aa), qa.prototype.applyToRemoteDocument = function(t, e) {
                if (this.verifyKeyMatches(t), Ur(null != e.transformResults, "Transform results missing for TransformMutation."), !this.precondition.isValidFor(t)) return new Gs(this.key, e.version);
                var n = this.requireDocument(t),
                    r = this.serverTransformResults(t, e.transformResults),
                    i = e.version,
                    o = this.transformObject(n.data(), r);
                return new Vs(this.key, i, { hasCommittedMutations: !0 }, o)
            }, qa.prototype.applyToLocalView = function(t, e, n) {
                if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                var r = this.requireDocument(t),
                    i = this.localTransformResults(n, t, e),
                    o = this.transformObject(r.data(), i);
                return new Vs(this.key, r.version, { hasLocalMutations: !0 }, o)
            }, qa.prototype.extractBaseValue = function(t) {
                for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
                    var i = r[n],
                        o = t instanceof Vs ? t.field(i.field) : void 0,
                        a = i.transform.computeBaseValue(o || null);
                    null != a && (e = null == e ? Ms.EMPTY.set(i.field, a) : e.set(i.field, a))
                }
                return e
            }, qa.prototype.isEqual = function(t) { return t instanceof qa && this.key.isEqual(t.key) && Ei(this.fieldTransforms, t.fieldTransforms) && this.precondition.isEqual(t.precondition) }, qa.prototype.requireDocument = function(t) { return Ur(t instanceof Vs, "Unknown MaybeDocument type " + t), Ur(t.key.isEqual(this.key), "Can only transform a document with the same key"), t }, qa.prototype.serverTransformResults = function(t, e) {
                var n = [];
                Ur(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")");
                for (var r = 0; r < e.length; r++) {
                    var i = this.fieldTransforms[r],
                        o = i.transform,
                        a = null;
                    t instanceof Vs && (a = t.field(i.field)), n.push(o.applyToRemoteDocument(a, e[r]))
                }
                return n
            }, qa.prototype.localTransformResults = function(t, e, n) {
                for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
                    var a = o[i],
                        s = a.transform,
                        u = null;
                    e instanceof Vs && (u = e.field(a.field)), null === u && n instanceof Vs && (u = n.field(a.field)), r.push(s.applyToLocalView(u, t))
                }
                return r
            }, qa.prototype.transformObject = function(t, e) {
                Ur(e.length === this.fieldTransforms.length, "TransformResults length mismatch.");
                for (var n = 0; n < this.fieldTransforms.length; n++) {
                    var r = this.fieldTransforms[n].field;
                    t = t.set(r, e[n])
                }
                return t
            }, qa);

            function qa(t, e) { var n = xa.call(this) || this; return n.key = t, n.fieldTransforms = e, n.type = Ea.Transform, n.precondition = Da.exists(!0), n }
            var Va, Ba, Ua, Ka, Qa, ja = (t(Ga, Va = Aa), Ga.prototype.applyToRemoteDocument = function(t, e) { return this.verifyKeyMatches(t), Ur(null == e.transformResults, "Transform results received by DeleteMutation."), new Ks(this.key, e.version, { hasCommittedMutations: !0 }) }, Ga.prototype.applyToLocalView = function(t, e, n) { return this.verifyKeyMatches(t), this.precondition.isValidFor(t) ? (t && Ur(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), new Ks(this.key, lo.forDeletedDoc())) : t }, Ga.prototype.extractBaseValue = function(t) { return null }, Ga.prototype.isEqual = function(t) { return t instanceof Ga && this.key.isEqual(t.key) && this.precondition.isEqual(t.precondition) }, Ga);

            function Ga(t, e) { var n = Va.call(this) || this; return n.key = t, n.precondition = e, n.type = Ea.Delete, n }(Ua = Ba = Ba || {})[Ua.NullValue = 0] = "NullValue", Ua[Ua.BooleanValue = 1] = "BooleanValue", Ua[Ua.NumberValue = 2] = "NumberValue", Ua[Ua.TimestampValue = 3] = "TimestampValue", Ua[Ua.StringValue = 4] = "StringValue", Ua[Ua.BlobValue = 5] = "BlobValue", Ua[Ua.RefValue = 6] = "RefValue", Ua[Ua.GeoPointValue = 7] = "GeoPointValue", Ua[Ua.ArrayValue = 8] = "ArrayValue", Ua[Ua.ObjectValue = 9] = "ObjectValue", (Qa = Ka = Ka || {})[Qa.Default = 0] = "Default", Qa[Qa.Estimate = 1] = "Estimate", Qa[Qa.Previous = 2] = "Previous";
            var Wa = (za.fromSnapshotOptions = function(t, e) {
                switch (t.serverTimestamps) {
                    case "estimate":
                        return new za(Ka.Estimate, e);
                    case "previous":
                        return new za(Ka.Previous, e);
                    case "none":
                    case void 0:
                        return new za(Ka.Default, e);
                    default:
                        return Br("fromSnapshotOptions() called with invalid options.")
                }
            }, za);

            function za(t, e) { this.serverTimestampBehavior = t, this.timestampsInSnapshots = e }
            var Ha = (Ya.prototype.toString = function() { var t = this.value(); return null === t ? "null" : t.toString() }, Ya.prototype.defaultCompareTo = function(t) { return Ur(this.typeOrder !== t.typeOrder, "Default compareTo should not be used for values of same type."), Si(this.typeOrder, t.typeOrder) }, Ya);

            function Ya() {}
            var Ja, Xa = (t(Za, Ja = Ha), Za.prototype.value = function(t) { return null }, Za.prototype.isEqual = function(t) { return t instanceof Za }, Za.prototype.compareTo = function(t) { return t instanceof Za ? 0 : this.defaultCompareTo(t) }, Za.INSTANCE = new Za, Za);

            function Za() { var t = Ja.call(this) || this; return t.typeOrder = Ba.NullValue, t.internalValue = null, t }
            var $a, ts = (t(es, $a = Ha), es.prototype.value = function(t) { return this.internalValue }, es.prototype.isEqual = function(t) { return t instanceof es && this.internalValue === t.internalValue }, es.prototype.compareTo = function(t) { return t instanceof es ? Si(this, t) : this.defaultCompareTo(t) }, es.of = function(t) { return t ? es.TRUE : es.FALSE }, es.TRUE = new es(!0), es.FALSE = new es(!1), es);

            function es(t) { var e = $a.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.BooleanValue, e }
            var ns, rs = (t(is, ns = Ha), is.prototype.value = function(t) { return this.internalValue }, is.prototype.compareTo = function(t) { return t instanceof is ? function(t, e) { return t < e ? -1 : e < t ? 1 : t === e ? 0 : isNaN(t) ? isNaN(e) ? 0 : -1 : 1 }(this.internalValue, t.internalValue) : this.defaultCompareTo(t) }, is);

            function is(t) { var e = ns.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.NumberValue, e }

            function os(t, e) { return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e }
            var as, ss = (t(us, as = rs), us.prototype.isEqual = function(t) { return t instanceof us && os(this.internalValue, t.internalValue) }, us);

            function us() { return null !== as && as.apply(this, arguments) || this }
            var cs, hs = (t(ls, cs = rs), ls.prototype.isEqual = function(t) { return t instanceof ls && os(this.internalValue, t.internalValue) }, ls.NAN = new ls(NaN), ls.POSITIVE_INFINITY = new ls(1 / 0), ls.NEGATIVE_INFINITY = new ls(-1 / 0), ls);

            function ls() { return null !== cs && cs.apply(this, arguments) || this }
            var fs, ps = (t(ds, fs = Ha), ds.prototype.value = function(t) { return this.internalValue }, ds.prototype.isEqual = function(t) { return t instanceof ds && this.internalValue === t.internalValue }, ds.prototype.compareTo = function(t) { return t instanceof ds ? Si(this.internalValue, t.internalValue) : this.defaultCompareTo(t) }, ds);

            function ds(t) { var e = fs.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.StringValue, e }
            var ms, ys = (t(gs, ms = Ha), gs.prototype.value = function(t) { return !t || t.timestampsInSnapshots ? this.internalValue : this.internalValue.toDate() }, gs.prototype.isEqual = function(t) { return t instanceof gs && this.internalValue.isEqual(t.internalValue) }, gs.prototype.compareTo = function(t) { return t instanceof gs ? this.internalValue._compareTo(t.internalValue) : t instanceof bs ? -1 : this.defaultCompareTo(t) }, gs);

            function gs(t) { var e = ms.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.TimestampValue, e }
            var vs, bs = (t(ws, vs = Ha), ws.prototype.value = function(t) { return t && t.serverTimestampBehavior === Ka.Estimate ? new ys(this.localWriteTime).value(t) : t && t.serverTimestampBehavior === Ka.Previous && this.previousValue ? this.previousValue.value(t) : null }, ws.prototype.isEqual = function(t) { return t instanceof ws && this.localWriteTime.isEqual(t.localWriteTime) }, ws.prototype.compareTo = function(t) { return t instanceof ws ? this.localWriteTime._compareTo(t.localWriteTime) : t instanceof ys ? 1 : this.defaultCompareTo(t) }, ws.prototype.toString = function() { return "<ServerTimestamp localTime=" + this.localWriteTime.toString() + ">" }, ws);

            function ws(t, e) { var n = vs.call(this) || this; return n.localWriteTime = t, n.previousValue = e, n.typeOrder = Ba.TimestampValue, n }
            var Ts, Ss = (t(Es, Ts = Ha), Es.prototype.value = function(t) { return this.internalValue }, Es.prototype.isEqual = function(t) { return t instanceof Es && this.internalValue.isEqual(t.internalValue) }, Es.prototype.compareTo = function(t) { return t instanceof Es ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t) }, Es);

            function Es(t) { var e = Ts.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.BlobValue, e }
            var Is, Cs = (t(Ds, Is = Ha), Ds.prototype.value = function(t) { return this.key }, Ds.prototype.isEqual = function(t) { return t instanceof Ds && this.key.isEqual(t.key) && this.databaseId.isEqual(t.databaseId) }, Ds.prototype.compareTo = function(t) { if (t instanceof Ds) { var e = this.databaseId.compareTo(t.databaseId); return 0 !== e ? e : Wi.comparator(this.key, t.key) } return this.defaultCompareTo(t) }, Ds);

            function Ds(t, e) { var n = Is.call(this) || this; return n.databaseId = t, n.key = e, n.typeOrder = Ba.RefValue, n }
            var Ns, As = (t(ks, Ns = Ha), ks.prototype.value = function(t) { return this.internalValue }, ks.prototype.isEqual = function(t) { return t instanceof ks && this.internalValue.isEqual(t.internalValue) }, ks.prototype.compareTo = function(t) { return t instanceof ks ? this.internalValue._compareTo(t.internalValue) : this.defaultCompareTo(t) }, ks);

            function ks(t) { var e = Ns.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.GeoPointValue, e }
            var Rs, Ms = (t(_s, Rs = Ha), _s.prototype.value = function(n) { var r = {}; return this.internalValue.inorderTraversal(function(t, e) { r[t] = e.value(n) }), r }, _s.prototype.forEach = function(t) { this.internalValue.inorderTraversal(t) }, _s.prototype.isEqual = function(t) {
                if (t instanceof _s) {
                    for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) {
                        var r = e.getNext(),
                            i = n.getNext();
                        if (r.key !== i.key || !r.value.isEqual(i.value)) return !1
                    }
                    return !e.hasNext() && !n.hasNext()
                }
                return !1
            }, _s.prototype.compareTo = function(t) {
                if (t instanceof _s) {
                    for (var e = this.internalValue.getIterator(), n = t.internalValue.getIterator(); e.hasNext() && n.hasNext();) {
                        var r = e.getNext(),
                            i = n.getNext(),
                            o = Si(r.key, i.key) || r.value.compareTo(i.value);
                        if (o) return o
                    }
                    return Si(e.hasNext(), n.hasNext())
                }
                return this.defaultCompareTo(t)
            }, _s.prototype.set = function(t, e) {
                if (Ur(!t.isEmpty(), "Cannot set field for empty path on ObjectValue"), 1 === t.length) return this.setChild(t.firstSegment(), e);
                var n = this.child(t.firstSegment());
                n instanceof _s || (n = _s.EMPTY);
                var r = n.set(t.popFirst(), e);
                return this.setChild(t.firstSegment(), r)
            }, _s.prototype.delete = function(t) { if (Ur(!t.isEmpty(), "Cannot delete field for empty path on ObjectValue"), 1 === t.length) return new _s(this.internalValue.remove(t.firstSegment())); var e = this.child(t.firstSegment()); if (e instanceof _s) { var n = e.delete(t.popFirst()); return new _s(this.internalValue.insert(t.firstSegment(), n)) } return this }, _s.prototype.contains = function(t) { return null !== this.field(t) }, _s.prototype.field = function(t) { Ur(!t.isEmpty(), "Can't get field of empty path"); var e = this; return t.forEach(function(t) { e = e instanceof _s ? e.internalValue.get(t) : null }), e }, _s.prototype.fieldMask = function() {
                var i = new So(ji.comparator);
                return this.internalValue.forEach(function(t, e) {
                    var n = new ji([t]);
                    if (e instanceof _s) {
                        var r = e.fieldMask().fields;
                        r.isEmpty() ? i = i.add(n) : r.forEach(function(t) { i = i.add(n.child(t)) })
                    } else i = i.add(n)
                }), ba.fromSet(i)
            }, _s.prototype.toString = function() { return this.internalValue.toString() }, _s.prototype.child = function(t) { return this.internalValue.get(t) || void 0 }, _s.prototype.setChild = function(t, e) { return new _s(this.internalValue.insert(t, e)) }, _s.EMPTY = new _s(new po(Si)), _s);

            function _s(t) { var e = Rs.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.ObjectValue, e }
            var Os, Ls = (t(Ps, Os = Ha), Ps.prototype.value = function(e) { return this.internalValue.map(function(t) { return t.value(e) }) }, Ps.prototype.contains = function(t) {
                for (var e = 0, n = this.internalValue; e < n.length; e++)
                    if (n[e].isEqual(t)) return !0;
                return !1
            }, Ps.prototype.forEach = function(t) { this.internalValue.forEach(t) }, Ps.prototype.isEqual = function(t) {
                if (t instanceof Ps) {
                    if (this.internalValue.length !== t.internalValue.length) return !1;
                    for (var e = 0; e < this.internalValue.length; e++)
                        if (!this.internalValue[e].isEqual(t.internalValue[e])) return !1;
                    return !0
                }
                return !1
            }, Ps.prototype.compareTo = function(t) { if (t instanceof Ps) { for (var e = Math.min(this.internalValue.length, t.internalValue.length), n = 0; n < e; n++) { var r = this.internalValue[n].compareTo(t.internalValue[n]); if (r) return r } return Si(this.internalValue.length, t.internalValue.length) } return this.defaultCompareTo(t) }, Ps.prototype.toString = function() { return "[" + this.internalValue.map(function(t) { return t.toString() }).join(",") + "]" }, Ps);

            function Ps(t) { var e = Os.call(this) || this; return e.internalValue = t, e.typeOrder = Ba.ArrayValue, e }
            var xs = (Fs.compareByKey = function(t, e) { return Wi.comparator(t.key, e.key) }, Fs);

            function Fs(t, e) { this.key = t, this.version = e }
            var qs, Vs = (t(Bs, qs = xs), Bs.prototype.field = function(t) {
                if (this.objectValue) return this.objectValue.field(t);
                this.fieldValueCache || (this.fieldValueCache = new Map);
                var e = t.canonicalString(),
                    n = this.fieldValueCache.get(e);
                if (void 0 === n) {
                    var r = this.getProtoField(t);
                    n = void 0 === r ? null : this.converter(r), this.fieldValueCache.set(e, n)
                }
                return n
            }, Bs.prototype.data = function() {
                var n = this;
                if (!this.objectValue) {
                    var r = Ms.EMPTY;
                    $r(this.proto.fields || {}, function(t, e) { r = r.set(new ji([t]), n.converter(e)) }), this.objectValue = r, this.fieldValueCache = void 0
                }
                return this.objectValue
            }, Bs.prototype.value = function() { return this.data().value() }, Bs.prototype.isEqual = function(t) { return t instanceof Bs && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.hasLocalMutations === t.hasLocalMutations && this.hasCommittedMutations === t.hasCommittedMutations && this.data().isEqual(t.data()) }, Bs.prototype.toString = function() { return "Document(" + this.key + ", " + this.version + ", " + this.data().toString() + ", {hasLocalMutations: " + this.hasLocalMutations + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})" }, Object.defineProperty(Bs.prototype, "hasPendingWrites", { get: function() { return this.hasLocalMutations || this.hasCommittedMutations }, enumerable: !0, configurable: !0 }), Bs.prototype.getProtoField = function(t) {
                Ur(void 0 !== this.proto, "Can only call getProtoField() when proto is defined");
                for (var e = this.proto.fields ? this.proto.fields[t.firstSegment()] : void 0, n = 1; n < t.length; ++n) {
                    if (!e || !e.mapValue || !e.mapValue.fields) return;
                    e = e.mapValue.fields[t.get(n)]
                }
                return e
            }, Bs.compareByField = function(t, e, n) {
                var r = e.field(t),
                    i = n.field(t);
                return null !== r && null !== i ? r.compareTo(i) : Br("Trying to compare documents on fields that don't exist")
            }, Bs);

            function Bs(t, e, n, r, i, o) { var a = qs.call(this, t, e) || this; return a.objectValue = r, a.proto = i, a.converter = o, Ur(void 0 !== a.objectValue || void 0 !== a.proto && void 0 !== a.converter, "If objectValue is not defined, proto and converter need to be set."), a.hasLocalMutations = !!n.hasLocalMutations, a.hasCommittedMutations = !!n.hasCommittedMutations, a }
            var Us, Ks = (t(Qs, Us = xs), Qs.prototype.toString = function() { return "NoDocument(" + this.key + ", " + this.version + ")" }, Object.defineProperty(Qs.prototype, "hasPendingWrites", { get: function() { return this.hasCommittedMutations }, enumerable: !0, configurable: !0 }), Qs.prototype.isEqual = function(t) { return t instanceof Qs && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key) }, Qs);

            function Qs(t, e, n) { var r = Us.call(this, t, e) || this; return r.hasCommittedMutations = !(!n || !n.hasCommittedMutations), r }
            var js, Gs = (t(Ws, js = xs), Ws.prototype.toString = function() { return "UnknownDocument(" + this.key + ", " + this.version + ")" }, Object.defineProperty(Ws.prototype, "hasPendingWrites", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), Ws.prototype.isEqual = function(t) { return t instanceof Ws && t.version.isEqual(this.version) && t.key.isEqual(this.key) }, Ws);

            function Ws() { return null !== js && js.apply(this, arguments) || this }
            var zs = (Hs.prototype.get = function(t) {
                var e = this.mapKeyFn(t),
                    n = this.inner[e];
                if (void 0 !== n)
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r],
                            a = o[0],
                            s = o[1];
                        if (a.isEqual(t)) return s
                    }
            }, Hs.prototype.has = function(t) { return void 0 !== this.get(t) }, Hs.prototype.set = function(t, e) {
                var n = this.mapKeyFn(t),
                    r = this.inner[n];
                if (void 0 !== r) {
                    for (var i = 0; i < r.length; i++)
                        if (r[i][0].isEqual(t)) return void(r[i] = [t, e]);
                    r.push([t, e])
                } else this.inner[n] = [
                    [t, e]
                ]
            }, Hs.prototype.delete = function(t) {
                var e = this.mapKeyFn(t),
                    n = this.inner[e];
                if (void 0 === n) return !1;
                for (var r = 0; r < n.length; r++)
                    if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                return !1
            }, Hs.prototype.forEach = function(s) {
                $r(this.inner, function(t, e) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var i = r[n],
                            o = i[0],
                            a = i[1];
                        s(o, a)
                    }
                })
            }, Hs.prototype.isEmpty = function() { return ti(this.inner) }, Hs);

            function Hs(t) { this.mapKeyFn = t, this.inner = {} }
            var Ys = (Object.defineProperty(Js.prototype, "readTime", { get: function() { return Ur(void 0 !== this._readTime, "Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."), this._readTime }, set: function(t) { Ur(void 0 === this._readTime || this._readTime.isEqual(t), "All changes in a RemoteDocumentChangeBuffer must have the same read time"), this._readTime = t }, enumerable: !0, configurable: !0 }), Js.prototype.addEntry = function(t, e) { this.assertNotApplied(), this.readTime = e, this.changes.set(t.key, t) }, Js.prototype.removeEntry = function(t, e) { this.assertNotApplied(), e && (this.readTime = e), this.changes.set(t, null) }, Js.prototype.getEntry = function(t, e) { this.assertNotApplied(); var n = this.changes.get(e); return void 0 !== n ? Uo.resolve(n) : this.getFromCache(t, e) }, Js.prototype.getEntries = function(t, e) { return this.getAllFromCache(t, e) }, Js.prototype.apply = function(t) { return this.assertNotApplied(), this.changesApplied = !0, this.applyChanges(t) }, Js.prototype.assertNotApplied = function() { Ur(!this.changesApplied, "Changes have already been applied.") }, Js);

            function Js() { this.changes = new zs(function(t) { return t.toString() }), this.changesApplied = !1 }
            var Xs, Zs = ($s.prototype.addEntry = function(t, e, n) { return nu(t).put(ru(e), n) }, $s.prototype.removeEntry = function(t, e) {
                var n = nu(t),
                    r = ru(e);
                return n.delete(r)
            }, $s.prototype.updateMetadata = function(e, n) { var r = this; return this.getMetadata(e).next(function(t) { return t.byteSize += n, r.setMetadata(e, t) }) }, $s.prototype.getEntry = function(t, e) { var n = this; return nu(t).get(ru(e)).next(function(t) { return n.maybeDecodeDocument(t) }) }, $s.prototype.getSizedEntry = function(t, e) { var n = this; return nu(t).get(ru(e)).next(function(t) { var e = n.maybeDecodeDocument(t); return e ? { maybeDocument: e, size: iu(t) } : null }) }, $s.prototype.getEntries = function(t, e) {
                var r = this,
                    i = Ao();
                return this.forEachDbEntry(t, e, function(t, e) {
                    var n = r.maybeDecodeDocument(e);
                    i = i.insert(t, n)
                }).next(function() { return i })
            }, $s.prototype.getSizedEntries = function(t, e) {
                var r = this,
                    i = Ao(),
                    o = new po(Wi.comparator);
                return this.forEachDbEntry(t, e, function(t, e) {
                    var n = r.maybeDecodeDocument(e);
                    o = n ? (i = i.insert(t, n), o.insert(t, iu(e))) : (i = i.insert(t, null), o.insert(t, 0))
                }).next(function() { return { maybeDocuments: i, sizeMap: o } })
            }, $s.prototype.forEachDbEntry = function(t, e, i) {
                if (e.isEmpty()) return Uo.resolve();
                var n = IDBKeyRange.bound(e.first().path.toArray(), e.last().path.toArray()),
                    o = e.getIterator(),
                    a = o.getNext();
                return nu(t).iterate({ range: n }, function(t, e, n) {
                    for (var r = Wi.fromSegments(t); a && Wi.comparator(a, r) < 0;) i(a, null), a = o.getNext();
                    a && a.isEqual(r) && (i(a, e), a = o.hasNext() ? o.getNext() : null), a ? n.skip(a.path.toArray()) : n.done()
                }).next(function() { for (; a;) i(a, null), a = o.hasNext() ? o.getNext() : null })
            }, $s.prototype.getDocumentsMatchingQuery = function(t, i, e) {
                var o = this;
                Ur(!i.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                var a = Ro(),
                    s = i.path.length + 1,
                    n = {};
                if (e.isEqual(lo.MIN)) {
                    var r = i.path.toArray();
                    n.range = IDBKeyRange.lowerBound(r)
                } else {
                    var u = i.path.toArray(),
                        c = this.serializer.toDbTimestampKey(e);
                    n.range = IDBKeyRange.lowerBound([u, c], !0), n.index = Eu.collectionReadTimeIndex
                }
                return nu(t).iterate(n, function(t, e, n) {
                    if (t.length === s) {
                        var r = o.serializer.fromDbRemoteDocument(e);
                        i.path.isPrefixOf(r.key.path) ? r instanceof Vs && i.matches(r) && (a = a.insert(r.key, r)) : n.done()
                    }
                }).next(function() { return a })
            }, $s.prototype.getNewDocumentChanges = function(t, e) {
                var r = this,
                    i = No(),
                    o = this.serializer.toDbTimestampKey(e),
                    n = nu(t),
                    a = IDBKeyRange.lowerBound(o, !0);
                return n.iterate({ index: Eu.readTimeIndex, range: a }, function(t, e) {
                    var n = r.serializer.fromDbRemoteDocument(e);
                    i = i.insert(n.key, n), o = e.readTime
                }).next(function() { return { changedDocs: i, readTime: r.serializer.fromDbTimestampKey(o) } })
            }, $s.prototype.getLastDocumentChange = function(t) {
                var r, i = this,
                    e = nu(t),
                    o = lo.MIN;
                return e.iterate({ index: Eu.readTimeIndex, reverse: !0 }, function(t, e, n) { r = i.serializer.fromDbRemoteDocument(e), e.readTime && (o = i.serializer.fromDbTimestampKey(e.readTime)), n.done() }).next(function() { return { changedDoc: r, readTime: o } })
            }, $s.prototype.newChangeBuffer = function(t) { return new $s.RemoteDocumentChangeBuffer(this, !!t && t.trackRemovals) }, $s.prototype.getSize = function(t) { return this.getMetadata(t).next(function(t) { return t.byteSize }) }, $s.prototype.getMetadata = function(t) { return eu(t).get(Cu.key).next(function(t) { return Ur(!!t, "Missing document cache metadata"), t }) }, $s.prototype.setMetadata = function(t, e) { return eu(t).put(Cu.key, e) }, $s.prototype.maybeDecodeDocument = function(t) { if (t) { var e = this.serializer.fromDbRemoteDocument(t); return e instanceof Ks && e.version.isEqual(lo.forDeletedDoc()) ? null : e } return null }, $s.RemoteDocumentChangeBuffer = (t(tu, Xs = Ys), tu.prototype.applyChanges = function(a) {
                var s = this,
                    u = [],
                    c = 0,
                    h = new So(function(t, e) { return Si(t.canonicalString(), e.canonicalString()) });
                return this.changes.forEach(function(t, e) {
                    var n = s.documentSizes.get(t);
                    if (Ur(void 0 !== n, "Cannot modify a document that wasn't read (for " + t + ")"), e) {
                        Ur(!s.readTime.isEqual(lo.MIN), "Cannot add a document with a read time of zero");
                        var r = s.documentCache.serializer.toDbRemoteDocument(e, s.readTime);
                        h = h.add(t.path.popLast());
                        var i = iu(r);
                        c += i - n, u.push(s.documentCache.addEntry(a, t, r))
                    } else if (c -= n, s.trackRemovals) {
                        var o = s.documentCache.serializer.toDbRemoteDocument(new Ks(t, lo.forDeletedDoc()), s.readTime);
                        u.push(s.documentCache.addEntry(a, t, o))
                    } else u.push(s.documentCache.removeEntry(a, t))
                }), h.forEach(function(t) { u.push(s.documentCache.indexManager.addToCollectionParentIndex(a, t)) }), u.push(this.documentCache.updateMetadata(a, c)), Uo.waitFor(u)
            }, tu.prototype.getFromCache = function(t, e) { var n = this; return this.documentCache.getSizedEntry(t, e).next(function(t) { return null === t ? (n.documentSizes.set(e, 0), null) : (n.documentSizes.set(e, t.size), t.maybeDocument) }) }, tu.prototype.getAllFromCache = function(t, e) { var n = this; return this.documentCache.getSizedEntries(t, e).next(function(t) { var e = t.maybeDocuments; return t.sizeMap.forEach(function(t, e) { n.documentSizes.set(t, e) }), e }) }, tu), $s);

            function $s(t, e) { this.serializer = t, this.indexManager = e }

            function tu(t, e) { var n = Xs.call(this) || this; return n.documentCache = t, n.trackRemovals = e, n.documentSizes = new zs(function(t) { return t.toString() }), n }

            function eu(t) { return fc.getStore(t, Cu.store) }

            function nu(t) { return fc.getStore(t, Eu.store) }

            function ru(t) { return t.path.toArray() }

            function iu(t) {
                var e;
                if (t.document) e = t.document;
                else if (t.unknownDocument) e = t.unknownDocument;
                else {
                    if (!t.noDocument) throw Br("Unknown remote document type");
                    e = t.noDocument
                }
                return JSON.stringify(e).length
            }
            var ou = (au.prototype.addToCollectionParentIndex = function(t, e) { return this.collectionParentIndex.add(e), Uo.resolve() }, au.prototype.getCollectionParents = function(t, e) { return Uo.resolve(this.collectionParentIndex.getEntries(e)) }, au);

            function au() { this.collectionParentIndex = new su }
            var su = (uu.prototype.add = function(t) {
                Ur(t.length % 2 == 1, "Expected a collection path.");
                var e = t.lastSegment(),
                    n = t.popLast(),
                    r = this.index[e] || new So(Bi.comparator),
                    i = !r.has(n);
                return this.index[e] = r.add(n), i
            }, uu.prototype.has = function(t) {
                var e = t.lastSegment(),
                    n = t.popLast(),
                    r = this.index[e];
                return r && r.has(n)
            }, uu.prototype.getEntries = function(t) { return (this.index[t] || new So(Bi.comparator)).toArray() }, uu);

            function uu() { this.index = {} }
            var cu = 9,
                hu = (lu.prototype.createOrUpgrade = function(t, e, n, r) {
                    var i = this;
                    Ur(n < r && 0 <= n && r <= cu, "Unexpected schema upgrade from v" + n + " to v{toVersion}.");
                    var o = new Ho(e);
                    n < 1 && 1 <= r && (function(t) { t.createObjectStore(pu.store) }(t), function(t) { t.createObjectStore(mu.store, { keyPath: mu.keyPath }), t.createObjectStore(gu.store, { keyPath: gu.keyPath, autoIncrement: !0 }).createIndex(gu.userMutationsIndex, gu.userMutationsKeyPath, { unique: !0 }), t.createObjectStore(bu.store) }(t), Pu(t), function(t) { t.createObjectStore(Eu.store) }(t));
                    var a = Uo.resolve();
                    return n < 3 && 3 <= r && (0 !== n && (function(t) { t.deleteObjectStore(ku.store), t.deleteObjectStore(Nu.store), t.deleteObjectStore(Mu.store) }(t), Pu(t)), a = a.next(function() {
                        return function(t) {
                            var e = t.store(Mu.store),
                                n = new Mu(0, 0, lo.MIN.toTimestamp(), 0);
                            return e.put(Mu.key, n)
                        }(o)
                    })), n < 4 && 4 <= r && (0 !== n && (a = a.next(function() {
                        return function(r, i) {
                            return i.store(gu.store).loadAll().next(function(t) {
                                r.deleteObjectStore(gu.store), r.createObjectStore(gu.store, { keyPath: gu.keyPath, autoIncrement: !0 }).createIndex(gu.userMutationsIndex, gu.userMutationsKeyPath, { unique: !0 });
                                var e = i.store(gu.store),
                                    n = t.map(function(t) { return e.put(t) });
                                return Uo.waitFor(n)
                            })
                        }(t, o)
                    })), a = a.next(function() {! function(t) { t.createObjectStore(xu.store, { keyPath: xu.keyPath }) }(t) })), n < 5 && 5 <= r && (a = a.next(function() { return i.removeAcknowledgedMutations(o) })), n < 6 && 6 <= r && (a = a.next(function() { return function(t) { t.createObjectStore(Cu.store) }(t), i.addDocumentGlobal(o) })), n < 7 && 7 <= r && (a = a.next(function() { return i.ensureSequenceNumbers(o) })), n < 8 && 8 <= r && (a = a.next(function() { return i.createCollectionParentIndex(t, o) })), n < 9 && 9 <= r && (a = a.next(function() {
                        ! function(t) { t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges") }(t),
                        function(t) {
                            var e = t.objectStore(Eu.store);
                            e.createIndex(Eu.readTimeIndex, Eu.readTimeIndexPath, { unique: !1 }), e.createIndex(Eu.collectionReadTimeIndex, Eu.collectionReadTimeIndexPath, { unique: !1 })
                        }(e)
                    })), a
                }, lu.prototype.addDocumentGlobal = function(e) { var n = 0; return e.store(Eu.store).iterate(function(t, e) { n += iu(e) }).next(function() { var t = new Cu(n); return e.store(Cu.store).put(Cu.key, t) }) }, lu.prototype.removeAcknowledgedMutations = function(r) {
                    var i = this,
                        t = r.store(mu.store),
                        e = r.store(gu.store);
                    return t.loadAll().next(function(t) { return Uo.forEach(t, function(n) { var t = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]); return e.loadAll(gu.userMutationsIndex, t).next(function(t) { return Uo.forEach(t, function(t) { Ur(t.userId === n.userId, "Cannot process batch " + t.batchId + " from unexpected user"); var e = i.serializer.fromDbMutationBatch(t); return ia(r, n.userId, e).next(function() {}) }) }) }) })
                }, lu.prototype.ensureSequenceNumbers = function(t) {
                    var a = t.store(ku.store),
                        e = t.store(Eu.store);
                    return ga(t).next(function(i) {
                        var o = [];
                        return e.iterate(function(t, e) {
                            var n = new Bi(t),
                                r = function(t) { return [0, oo(t)] }(n);
                            o.push(a.get(r).next(function(t) { return t ? Uo.resolve() : function(t) { return a.put(new ku(0, oo(t), i)) }(n) }))
                        }).next(function() { return Uo.waitFor(o) })
                    })
                }, lu.prototype.createCollectionParentIndex = function(t, e) {
                    function i(t) {
                        if (o.add(t)) {
                            var e = t.lastSegment(),
                                n = t.popLast();
                            return r.put({ collectionId: e, parent: oo(n) })
                        }
                    }
                    t.createObjectStore(Ou.store, { keyPath: Ou.keyPath });
                    var r = e.store(Ou.store),
                        o = new su;
                    return e.store(Eu.store).iterate({ keysOnly: !0 }, function(t, e) { var n = new Bi(t); return i(n.popLast()) }).next(function() {
                        return e.store(bu.store).iterate({ keysOnly: !0 }, function(t, e) {
                            t[0];
                            var n = t[1],
                                r = (t[2], uo(n));
                            return i(r.popLast())
                        })
                    })
                }, lu);

            function lu(t) { this.serializer = t }
            var fu = function(t, e) { this.seconds = t, this.nanoseconds = e },
                pu = (du.store = "owner", du.key = "owner", du);

            function du(t, e, n) { this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n }
            var mu = (yu.store = "mutationQueues", yu.keyPath = "userId", yu);

            function yu(t, e, n) { this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n }
            var gu = (vu.store = "mutations", vu.keyPath = "batchId", vu.userMutationsIndex = "userMutationsIndex", vu.userMutationsKeyPath = ["userId", "batchId"], vu);

            function vu(t, e, n, r, i) { this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i }
            var bu = (wu.prefixForUser = function(t) { return [t] }, wu.prefixForPath = function(t, e) { return [t, oo(e)] }, wu.key = function(t, e, n) { return [t, oo(e), n] }, wu.store = "documentMutations", wu.PLACEHOLDER = new wu, wu);

            function wu() {}
            var Tu = function(t, e) { this.path = t, this.readTime = e },
                Su = function(t, e) { this.path = t, this.version = e },
                Eu = (Iu.store = "remoteDocuments", Iu.readTimeIndex = "readTimeIndex", Iu.readTimeIndexPath = "readTime", Iu.collectionReadTimeIndex = "collectionReadTimeIndex", Iu.collectionReadTimeIndexPath = ["parentPath", "readTime"], Iu);

            function Iu(t, e, n, r, i, o) { this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o }
            var Cu = (Du.store = "remoteDocumentGlobal", Du.key = "remoteDocumentGlobalKey", Du);

            function Du(t) { this.byteSize = t }
            var Nu = (Au.store = "targets", Au.keyPath = "targetId", Au.queryTargetsIndexName = "queryTargetsIndex", Au.queryTargetsKeyPath = ["canonicalId", "targetId"], Au);

            function Au(t, e, n, r, i, o, a) { this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = a }
            var ku = (Ru.store = "targetDocuments", Ru.keyPath = ["targetId", "path"], Ru.documentTargetsIndex = "documentTargetsIndex", Ru.documentTargetsKeyPath = ["path", "targetId"], Ru);

            function Ru(t, e, n) { this.targetId = t, this.path = e, Ur(0 === t == (void 0 !== (this.sequenceNumber = n)), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number") }
            var Mu = (_u.key = "targetGlobalKey", _u.store = "targetGlobal", _u);

            function _u(t, e, n, r) { this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r }
            var Ou = (Lu.store = "collectionParents", Lu.keyPath = ["collectionId", "parent"], Lu);

            function Lu(t, e) { this.collectionId = t, this.parent = e }

            function Pu(t) { t.createObjectStore(ku.store, { keyPath: ku.keyPath }).createIndex(ku.documentTargetsIndex, ku.documentTargetsKeyPath, { unique: !0 }), t.createObjectStore(Nu.store, { keyPath: Nu.keyPath }).createIndex(Nu.queryTargetsIndexName, Nu.queryTargetsKeyPath, { unique: !0 }), t.createObjectStore(Mu.store) }
            var xu = (Fu.store = "clientMetadata", Fu.keyPath = "clientId", Fu);

            function Fu(t, e, n, r) { this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r }
            var qu, Vu, Bu = a(a(a([mu.store, gu.store, bu.store, Eu.store, Nu.store, pu.store, Mu.store, ku.store], [xu.store]), [Cu.store]), [Ou.store]),
                Uu = (Ku.prototype.addToCollectionParentIndex = function(t, e) {
                    var n = this;
                    if (Ur(e.length % 2 == 1, "Expected a collection path."), this.collectionParentsCache.has(e)) return Uo.resolve();
                    var r = e.lastSegment(),
                        i = e.popLast();
                    t.addOnCommittedListener(function() { n.collectionParentsCache.add(e) });
                    var o = { collectionId: r, parent: oo(i) };
                    return Qu(t).put(o)
                }, Ku.prototype.getCollectionParents = function(t, i) {
                    var o = [],
                        e = IDBKeyRange.bound([i, ""], [Ii(i), ""], !1, !0);
                    return Qu(t).loadAll(e).next(function(t) {
                        for (var e = 0, n = t; e < n.length; e++) {
                            var r = n[e];
                            if (r.collectionId !== i) break;
                            o.push(uo(r.parent))
                        }
                        return o
                    })
                }, Ku);

            function Ku() { this.collectionParentsCache = new su }

            function Qu(t) { return fc.getStore(t, Ou.store) }(Vu = qu = qu || {})[Vu.Listen = 0] = "Listen", Vu[Vu.ExistenceFilterMismatch = 1] = "ExistenceFilterMismatch", Vu[Vu.LimboResolution = 2] = "LimboResolution";
            var ju = (Gu.prototype.withSequenceNumber = function(t) { return new Gu(this.target, this.targetId, this.purpose, t, this.snapshotVersion, this.lastLimboFreeSnapshotVersion, this.resumeToken) }, Gu.prototype.withResumeToken = function(t, e) { return new Gu(this.target, this.targetId, this.purpose, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t) }, Gu.prototype.withLastLimboFreeSnapshotVersion = function(t) { return new Gu(this.target, this.targetId, this.purpose, this.sequenceNumber, this.snapshotVersion, t, this.resumeToken) }, Gu.prototype.isEqual = function(t) { return this.targetId === t.targetId && this.purpose === t.purpose && this.sequenceNumber === t.sequenceNumber && this.snapshotVersion.isEqual(t.snapshotVersion) && this.lastLimboFreeSnapshotVersion.isEqual(t.lastLimboFreeSnapshotVersion) && this.resumeToken === t.resumeToken && this.target.isEqual(t.target) }, Gu);

            function Gu(t, e, n, r, i, o, a) { void 0 === i && (i = lo.MIN), void 0 === o && (o = lo.MIN), void 0 === a && (a = jr()), this.target = t, this.targetId = e, this.purpose = n, this.sequenceNumber = r, this.snapshotVersion = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = a }
            var Wu = (zu.prototype.fromDbRemoteDocument = function(t) {
                if (t.document) return this.remoteSerializer.fromDocument(t.document, !!t.hasCommittedMutations);
                if (t.noDocument) {
                    var e = Wi.fromSegments(t.noDocument.path),
                        n = this.fromDbTimestamp(t.noDocument.readTime);
                    return new Ks(e, n, { hasCommittedMutations: !!t.hasCommittedMutations })
                }
                return t.unknownDocument ? (e = Wi.fromSegments(t.unknownDocument.path), n = this.fromDbTimestamp(t.unknownDocument.version), new Gs(e, n)) : Br("Unexpected DbRemoteDocument")
            }, zu.prototype.toDbRemoteDocument = function(t, e) {
                var n = this.toDbTimestampKey(e),
                    r = t.key.path.popLast().toArray();
                if (t instanceof Vs) {
                    var i = t.proto ? t.proto : this.remoteSerializer.toDocument(t),
                        o = t.hasCommittedMutations;
                    return new Eu(null, null, i, o, n, r)
                }
                if (t instanceof Ks) {
                    var a = t.key.path.toArray(),
                        s = this.toDbTimestamp(t.version);
                    return o = t.hasCommittedMutations, new Eu(null, new Tu(a, s), null, o, n, r)
                }
                if (t instanceof Gs) { a = t.key.path.toArray(); var u = this.toDbTimestamp(t.version); return new Eu(new Su(a, u), null, null, !0, n, r) }
                return Br("Unexpected MaybeDocument")
            }, zu.prototype.toDbTimestampKey = function(t) { var e = t.toTimestamp(); return [e.seconds, e.nanoseconds] }, zu.prototype.fromDbTimestampKey = function(t) { var e = new co(t[0], t[1]); return lo.fromTimestamp(e) }, zu.prototype.toDbTimestamp = function(t) { var e = t.toTimestamp(); return new fu(e.seconds, e.nanoseconds) }, zu.prototype.fromDbTimestamp = function(t) { var e = new co(t.seconds, t.nanoseconds); return lo.fromTimestamp(e) }, zu.prototype.toDbMutationBatch = function(t, e) {
                var n = this,
                    r = e.baseMutations.map(function(t) { return n.remoteSerializer.toMutation(t) }),
                    i = e.mutations.map(function(t) { return n.remoteSerializer.toMutation(t) });
                return new gu(t, e.batchId, e.localWriteTime.toMillis(), r, i)
            }, zu.prototype.fromDbMutationBatch = function(t) {
                var e = this,
                    n = (t.baseMutations || []).map(function(t) { return e.remoteSerializer.fromMutation(t) }),
                    r = t.mutations.map(function(t) { return e.remoteSerializer.fromMutation(t) }),
                    i = co.fromMillis(t.localWriteTimeMs);
                return new Fo(t.batchId, i, n, r)
            }, zu.prototype.toDbResourcePaths = function(t) { var e = []; return t.forEach(function(t) { e.push(oo(t.path)) }), e }, zu.prototype.fromDbResourcePaths = function(t) {
                for (var e = Lo(), n = 0, r = t; n < r.length; n++) {
                    var i = r[n];
                    e = e.add(new Wi(uo(i)))
                }
                return e
            }, zu.prototype.fromDbTarget = function(t) {
                var e, n = this.fromDbTimestamp(t.readTime),
                    r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.fromDbTimestamp(t.lastLimboFreeSnapshotVersion) : lo.MIN,
                    i = t.resumeToken;
                return e = function(t) { return void 0 !== t.documents }(t.query) ? this.remoteSerializer.fromDocumentsTarget(t.query) : this.remoteSerializer.fromQueryTarget(t.query), new ju(e, t.targetId, qu.Listen, t.lastListenSequenceNumber, n, r, i)
            }, zu.prototype.toDbTarget = function(t) {
                Ur(qu.Listen === t.purpose, "Only queries with purpose " + qu.Listen + " may be stored, got " + t.purpose);
                var e, n, r = this.toDbTimestamp(t.snapshotVersion),
                    i = this.toDbTimestamp(t.lastLimboFreeSnapshotVersion);
                return e = t.target.isDocumentQuery() ? this.remoteSerializer.toDocumentsTarget(t.target) : this.remoteSerializer.toQueryTarget(t.target), n = t.resumeToken instanceof Uint8Array ? (Ur(jo.isMockPersistence(), "Persisting non-string stream tokens is only supported with mock persistence ."), t.resumeToken.toString()) : t.resumeToken, new Nu(t.targetId, t.target.canonicalId(), r, n, t.sequenceNumber, i, e)
            }, zu);

            function zu(t) { this.remoteSerializer = t }

            function Hu(t, e) {
                var n = t[0],
                    r = t[1],
                    i = e[0],
                    o = e[1],
                    a = Si(n, i);
                return 0 === a ? Si(r, o) : a
            }
            var Yu = (Ju.prototype.nextIndex = function() { return ++this.previousIndex }, Ju.prototype.addElement = function(t) {
                var e = [t, this.nextIndex()];
                if (this.buffer.size < this.maxElements) this.buffer = this.buffer.add(e);
                else {
                    var n = this.buffer.last();
                    Hu(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                }
            }, Object.defineProperty(Ju.prototype, "maxValue", { get: function() { return this.buffer.last()[0] }, enumerable: !0, configurable: !0 }), Ju);

            function Ju(t) { this.maxElements = t, this.buffer = new So(Hu), this.previousIndex = 0 }
            var Xu = { didRun: !1, sequenceNumbersCollected: 0, targetsRemoved: 0, documentsRemoved: 0 },
                Zu = ($u.withCacheSize = function(t) { return new $u(t, $u.DEFAULT_COLLECTION_PERCENTILE, $u.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT) }, $u.COLLECTION_DISABLED = -1, $u.MINIMUM_CACHE_SIZE_BYTES = 1048576, $u.DEFAULT = new $u($u.DEFAULT_CACHE_SIZE_BYTES = 41943040, $u.DEFAULT_COLLECTION_PERCENTILE = 10, $u.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3), $u.DISABLED = new $u($u.COLLECTION_DISABLED, 0, 0), $u);

            function $u(t, e, n) { this.cacheSizeCollectionThreshold = t, this.percentileToCollect = e, this.maximumSequenceNumbersToCollect = n }
            var tc = (ec.prototype.start = function() { Ur(null === this.gcTask, "Cannot start an already started LruScheduler"), this.garbageCollector.params.cacheSizeCollectionThreshold !== Zu.COLLECTION_DISABLED && this.scheduleGC() }, ec.prototype.stop = function() { this.gcTask && (this.gcTask.cancel(), this.gcTask = null) }, Object.defineProperty(ec.prototype, "started", { get: function() { return null !== this.gcTask }, enumerable: !0, configurable: !0 }), ec.prototype.scheduleGC = function() {
                var t = this;
                Ur(null === this.gcTask, "Cannot schedule GC while a task is pending");
                var e = this.hasRun ? 3e5 : 6e4;
                Fr("LruGarbageCollector", "Garbage collection scheduled in " + e + "ms"), this.gcTask = this.asyncQueue.enqueueAfterDelay(Hi.LruGarbageCollection, e, function() { return t.gcTask = null, t.hasRun = !0, t.localStore.collectGarbage(t.garbageCollector).then(function() { return t.scheduleGC() }).catch(dc) })
            }, ec);

            function ec(t, e, n) { this.garbageCollector = t, this.asyncQueue = e, this.localStore = n, this.hasRun = !1, this.gcTask = null }
            var nc = (rc.prototype.calculateTargetCount = function(t, e) { return this.delegate.getSequenceNumberCount(t).next(function(t) { return Math.floor(e / 100 * t) }) }, rc.prototype.nthSequenceNumber = function(t, e) { var n = this; if (0 === e) return Uo.resolve(Li.INVALID); var r = new Yu(e); return this.delegate.forEachTarget(t, function(t) { return r.addElement(t.sequenceNumber) }).next(function() { return n.delegate.forEachOrphanedDocumentSequenceNumber(t, function(t) { return r.addElement(t) }) }).next(function() { return r.maxValue }) }, rc.prototype.removeTargets = function(t, e, n) { return this.delegate.removeTargets(t, e, n) }, rc.prototype.removeOrphanedDocuments = function(t, e) { return this.delegate.removeOrphanedDocuments(t, e) }, rc.prototype.collect = function(e, n) { var r = this; return this.params.cacheSizeCollectionThreshold === Zu.COLLECTION_DISABLED ? (Fr("LruGarbageCollector", "Garbage collection skipped; disabled"), Uo.resolve(Xu)) : this.getCacheSize(e).next(function(t) { return t < r.params.cacheSizeCollectionThreshold ? (Fr("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.params.cacheSizeCollectionThreshold), Xu) : r.runGarbageCollection(e, n) }) }, rc.prototype.getCacheSize = function(t) { return this.delegate.getCacheSize(t) }, rc.prototype.runGarbageCollection = function(e, n) {
                var r, i, o, a, s, u, c, h = this,
                    l = Date.now();
                return this.calculateTargetCount(e, this.params.percentileToCollect).next(function(t) { return i = t > h.params.maximumSequenceNumbersToCollect ? (Fr("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.maximumSequenceNumbersToCollect + " from " + t), h.params.maximumSequenceNumbersToCollect) : t, a = Date.now(), h.nthSequenceNumber(e, i) }).next(function(t) { return r = t, s = Date.now(), h.removeTargets(e, r, n) }).next(function(t) { return o = t, u = Date.now(), h.removeOrphanedDocuments(e, r) }).next(function(t) { return c = Date.now(), Pr() <= Cr.DEBUG && Fr("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (a - l) + "ms\n\tDetermined least recently used " + i + " in " + (s - a) + "ms\n\tRemoved " + o + " targets in " + (u - s) + "ms\n\tRemoved " + t + " documents in " + (c - u) + "ms\nTotal Duration: " + (c - l) + "ms"), Uo.resolve({ didRun: !0, sequenceNumbersCollected: i, targetsRemoved: o, documentsRemoved: t }) })
            }, rc);

            function rc(t, e) { this.delegate = t, this.params = e }
            var ic = (oc.prototype.addOnCommittedListener = function(t) { this.onCommittedListeners.push(t) }, oc.prototype.raiseOnCommittedEvent = function() { this.onCommittedListeners.forEach(function(t) { return t() }) }, oc);

            function oc() { this.onCommittedListeners = [] }
            var ac, sc = "IndexedDbPersistence",
                uc = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                cc = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",
                hc = (t(lc, ac = ic), lc);

            function lc(t, e) { var n = ac.call(this) || this; return n.simpleDbTransaction = t, n.currentSequenceNumber = e, n }
            var fc = (pc.getStore = function(t, e) { if (t instanceof hc) return jo.getStore(t.simpleDbTransaction, e); throw Br("IndexedDbPersistence must use instances of IndexedDbTransaction") }, pc.createIndexedDbPersistence = function(n) {
                return p(this, void 0, void 0, function() {
                    var e;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!pc.isAvailable()) throw new zr(Wr.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                                return [4, (e = new pc(n.allowTabSynchronization, n.persistenceKey, n.clientId, n.platform, n.lruParams, n.queue, n.serializer, n.sequenceNumberSyncer)).start()];
                            case 1:
                                return t.sent(), [2, e]
                        }
                    })
                })
            }, pc.prototype.start = function() { var e = this; return Ur(!this.started, "IndexedDbPersistence double-started!"), Ur(null !== this.window, "Expected 'window' to be defined"), jo.openOrCreate(this.dbName, cu, new hu(this.serializer)).then(function(t) { return e.simpleDb = t, e.updateClientMetadataAndTryBecomePrimary() }).then(function() { return e.attachVisibilityHandler(), e.attachWindowUnloadHook(), e.scheduleClientMetadataAndPrimaryLeaseRefreshes(), e.simpleDb.runTransaction("readonly-idempotent", [Mu.store], function(t) { return ga(t) }) }).then(function(t) { e.listenSequence = new Li(t, e.sequenceNumberSyncer) }).then(function() { e._started = !0 }).catch(function(t) { return e.simpleDb && e.simpleDb.close(), Promise.reject(t) }) }, pc.prototype.setPrimaryStateListener = function(n) { var t = this; return this.primaryStateListener = function(e) { return p(t, void 0, void 0, function() { return m(this, function(t) { return this.started ? [2, n(e)] : [2] }) }) }, n(this.isPrimary) }, pc.prototype.setDatabaseDeletedListener = function(n) {
                var t = this;
                this.simpleDb.setVersionChangeListener(function(e) {
                    return p(t, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return null !== e.newVersion ? [3, 2] : [4, n()];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                })
            }, pc.prototype.setNetworkEnabled = function(t) {
                var e = this;
                this.networkEnabled !== t && (this.networkEnabled = t, this.queue.enqueueAndForget(function() {
                    return p(e, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.started ? [4, this.updateClientMetadataAndTryBecomePrimary()] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }))
            }, pc.prototype.updateClientMetadataAndTryBecomePrimary = function() { var n = this; return this.simpleDb.runTransaction("readwrite-idempotent", Bu, function(e) { return yc(e).put(new xu(n.clientId, Date.now(), n.networkEnabled, n.inForeground)).next(function() { if (n.isPrimary) return n.verifyPrimaryLease(e).next(function(t) { t || (n.isPrimary = !1, n.queue.enqueueAndForget(function() { return n.primaryStateListener(!1) })) }) }).next(function() { return n.canActAsPrimary(e) }).next(function(t) { return n.isPrimary && !t ? n.releasePrimaryLeaseIfHeld(e).next(function() { return !1 }) : !!t && n.acquireOrExtendPrimaryLease(e).next(function() { return !0 }) }) }).catch(function(t) { if (!n.allowTabSynchronization) throw t; return Fr(sc, "Releasing owner lease after error during lease refresh", t), !1 }).then(function(t) { n.isPrimary !== t && n.queue.enqueueAndForget(function() { return n.primaryStateListener(t) }), n.isPrimary = t }) }, pc.prototype.verifyPrimaryLease = function(t) { var e = this; return mc(t).get(pu.key).next(function(t) { return Uo.resolve(e.isLocalClient(t)) }) }, pc.prototype.removeClientMetadata = function(t) { return yc(t).delete(this.clientId) }, pc.prototype.maybeGarbageCollectMultiClientState = function() {
                return p(this, void 0, void 0, function() {
                    var i = this;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return !this.isPrimary || this.isWithinAge(this.lastGarbageCollectionTime, 18e5) ? [3, 2] : (this.lastGarbageCollectionTime = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary-idempotent", function(t) {
                                    var r = pc.getStore(t, xu.store);
                                    return r.loadAll().next(function(t) {
                                        var e = i.filterActiveClients(t, 18e5),
                                            n = t.filter(function(t) { return -1 === e.indexOf(t) });
                                        return Uo.forEach(n, function(t) { return r.delete(t.clientId) }).next(function() { return n })
                                    })
                                })]);
                            case 1:
                                t.sent().forEach(function(t) { i.window.localStorage.removeItem(i.zombiedClientLocalStorageKey(t.clientId)) }), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, pc.prototype.scheduleClientMetadataAndPrimaryLeaseRefreshes = function() {
                var t = this;
                this.clientMetadataRefresher = this.queue.enqueueAfterDelay(Hi.ClientMetadataRefresh, 4e3, function() { return t.updateClientMetadataAndTryBecomePrimary().then(function() { return t.maybeGarbageCollectMultiClientState() }).then(function() { return t.scheduleClientMetadataAndPrimaryLeaseRefreshes() }) })
            }, pc.prototype.isLocalClient = function(t) { return !!t && t.ownerId === this.clientId }, pc.prototype.canActAsPrimary = function(e) {
                var i = this;
                return mc(e).get(pu.key).next(function(t) {
                    if (null !== t && i.isWithinAge(t.leaseTimestampMs, 5e3) && !i.isClientZombied(t.ownerId)) { if (i.isLocalClient(t) && i.networkEnabled) return !0; if (!i.isLocalClient(t)) { if (!t.allowTabSynchronization) throw new zr(Wr.FAILED_PRECONDITION, cc); return !1 } }
                    return !(!i.networkEnabled || !i.inForeground) || yc(e).loadAll().next(function(t) {
                        return void 0 === i.filterActiveClients(t, 5e3).find(function(t) {
                            if (i.clientId !== t.clientId) {
                                var e = !i.networkEnabled && t.networkEnabled,
                                    n = !i.inForeground && t.inForeground,
                                    r = i.networkEnabled === t.networkEnabled;
                                if (e || n && r) return !0
                            }
                            return !1
                        })
                    })
                }).next(function(t) { return i.isPrimary !== t && Fr(sc, "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t })
            }, pc.prototype.shutdown = function() {
                return p(this, void 0, void 0, function() {
                    var e = this;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this._started = !1, this.markClientZombied(), this.clientMetadataRefresher && (this.clientMetadataRefresher.cancel(), this.clientMetadataRefresher = null), this.detachVisibilityHandler(), this.detachWindowUnloadHook(), [4, this.simpleDb.runTransaction("readwrite-idempotent", [pu.store, xu.store], function(t) { return e.releasePrimaryLeaseIfHeld(t).next(function() { return e.removeClientMetadata(t) }) })];
                            case 1:
                                return t.sent(), this.simpleDb.close(), this.removeClientZombiedEntry(), [2]
                        }
                    })
                })
            }, pc.prototype.filterActiveClients = function(t, e) { var n = this; return t.filter(function(t) { return n.isWithinAge(t.updateTimeMs, e) && !n.isClientZombied(t.clientId) }) }, pc.prototype.getActiveClients = function() { var e = this; return this.simpleDb.runTransaction("readonly-idempotent", [xu.store], function(t) { return yc(t).loadAll().next(function(t) { return e.filterActiveClients(t, 18e5).map(function(t) { return t.clientId }) }) }) }, pc.clearPersistence = function(n) {
                return p(this, void 0, void 0, function() {
                    var e;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return pc.isAvailable() ? (e = n + pc.MAIN_DATABASE, [4, jo.delete(e)]) : [2, Promise.resolve()];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, Object.defineProperty(pc.prototype, "started", { get: function() { return this._started }, enumerable: !0, configurable: !0 }), pc.prototype.getMutationQueue = function(t) { return Ur(this.started, "Cannot initialize MutationQueue before persistence is started."), ea.forUser(t, this.serializer, this.indexManager, this.referenceDelegate) }, pc.prototype.getTargetCache = function() { return Ur(this.started, "Cannot initialize TargetCache before persistence is started."), this.targetCache }, pc.prototype.getRemoteDocumentCache = function() { return Ur(this.started, "Cannot initialize RemoteDocumentCache before persistence is started."), this.remoteDocumentCache }, pc.prototype.getIndexManager = function() { return Ur(this.started, "Cannot initialize IndexManager before persistence is started."), this.indexManager }, pc.prototype.runTransaction = function(n, t, r) {
                var i = this;
                Fr(sc, "Starting transaction:", n);
                var o, e = t.endsWith("idempotent"),
                    a = t.startsWith("readonly") ? e ? "readonly-idempotent" : "readonly" : e ? "readwrite-idempotent" : "readwrite";
                return this.simpleDb.runTransaction(a, Bu, function(e) { return o = new hc(e, i.listenSequence.next()), "readwrite-primary" === t || "readwrite-primary-idempotent" === t ? i.verifyPrimaryLease(e).next(function(t) { return !!t || i.canActAsPrimary(e) }).next(function(t) { if (!t) throw qr("Failed to obtain primary lease for action '" + n + "'."), i.isPrimary = !1, i.queue.enqueueAndForget(function() { return i.primaryStateListener(!1) }), new zr(Wr.FAILED_PRECONDITION, uc); return r(o) }).next(function(t) { return i.acquireOrExtendPrimaryLease(e).next(function() { return t }) }) : i.verifyAllowTabSynchronization(e).next(function() { return r(o) }) }).then(function(t) { return o.raiseOnCommittedEvent(), t })
            }, pc.prototype.verifyAllowTabSynchronization = function(t) { var e = this; return mc(t).get(pu.key).next(function(t) { if (null !== t && e.isWithinAge(t.leaseTimestampMs, 5e3) && !e.isClientZombied(t.ownerId) && !e.isLocalClient(t) && !t.allowTabSynchronization) throw new zr(Wr.FAILED_PRECONDITION, cc) }) }, pc.prototype.acquireOrExtendPrimaryLease = function(t) { var e = new pu(this.clientId, this.allowTabSynchronization, Date.now()); return mc(t).put(pu.key, e) }, pc.isAvailable = function() { return jo.isAvailable() }, pc.buildStoragePrefix = function(t) { var e = t.databaseId.projectId; return t.databaseId.isDefaultDatabase || (e += "." + t.databaseId.database), "firestore/" + t.persistenceKey + "/" + e + "/" }, pc.prototype.releasePrimaryLeaseIfHeld = function(t) {
                var e = this,
                    n = mc(t);
                return n.get(pu.key).next(function(t) { return e.isLocalClient(t) ? (Fr(sc, "Releasing primary lease."), n.delete(pu.key)) : Uo.resolve() })
            }, pc.prototype.isWithinAge = function(t, e) { var n = Date.now(); return !(t < n - e || n < t && (qr("Detected an update time that is in the future: " + t + " > " + n), 1)) }, pc.prototype.attachVisibilityHandler = function() {
                var t = this;
                null !== this.document && "function" == typeof this.document.addEventListener && (this.documentVisibilityHandler = function() { t.queue.enqueueAndForget(function() { return t.inForeground = "visible" === t.document.visibilityState, t.updateClientMetadataAndTryBecomePrimary() }) }, this.document.addEventListener("visibilitychange", this.documentVisibilityHandler), this.inForeground = "visible" === this.document.visibilityState)
            }, pc.prototype.detachVisibilityHandler = function() { this.documentVisibilityHandler && (Ur(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), this.document.removeEventListener("visibilitychange", this.documentVisibilityHandler), this.documentVisibilityHandler = null) }, pc.prototype.attachWindowUnloadHook = function() { var t = this; "function" == typeof this.window.addEventListener && (this.windowUnloadHandler = function() { t.markClientZombied(), t.queue.enqueueAndForget(function() { return t.shutdown() }) }, this.window.addEventListener("unload", this.windowUnloadHandler)) }, pc.prototype.detachWindowUnloadHook = function() { this.windowUnloadHandler && (Ur("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), this.window.removeEventListener("unload", this.windowUnloadHandler), this.windowUnloadHandler = null) }, pc.prototype.isClientZombied = function(t) { try { var e = null !== this.webStorage.getItem(this.zombiedClientLocalStorageKey(t)); return Fr(sc, "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e } catch (t) { return qr(sc, "Failed to get zombied client id.", t), !1 } }, pc.prototype.markClientZombied = function() { try { this.webStorage.setItem(this.zombiedClientLocalStorageKey(this.clientId), String(Date.now())) } catch (t) { qr("Failed to set zombie client id.", t) } }, pc.prototype.removeClientZombiedEntry = function() { try { this.webStorage.removeItem(this.zombiedClientLocalStorageKey(this.clientId)) } catch (t) {} }, pc.prototype.zombiedClientLocalStorageKey = function(t) { return "firestore_zombie_" + this.persistenceKey + "_" + t }, pc.MAIN_DATABASE = "main", pc);

            function pc(t, e, n, r, i, o, a, s) {
                if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.queue = o, this.sequenceNumberSyncer = s, this._started = !1, this.isPrimary = !1, this.networkEnabled = !0, this.windowUnloadHandler = null, this.inForeground = !1, this.documentVisibilityHandler = null, this.clientMetadataRefresher = null, this.lastGarbageCollectionTime = Number.NEGATIVE_INFINITY, this.primaryStateListener = function(t) { return Promise.resolve() }, this.referenceDelegate = new gc(this, i), this.dbName = e + pc.MAIN_DATABASE, this.serializer = new Wu(a), this.document = r.document, this.targetCache = new pa(this.referenceDelegate, this.serializer), this.indexManager = new Uu, this.remoteDocumentCache = new Zs(this.serializer, this.indexManager), !r.window || !r.window.localStorage) throw new zr(Wr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                this.window = r.window, this.webStorage = this.window.localStorage
            }

            function dc(e) { return p(this, void 0, void 0, function() { return m(this, function(t) { if (! function(t) { return t.code === Wr.FAILED_PRECONDITION && t.message === uc }(e)) throw e; return Fr(sc, "Unexpectedly lost primary lease"), [2] }) }) }

            function mc(t) { return t.store(pu.store) }

            function yc(t) { return t.store(xu.store) }
            var gc = (vc.prototype.getSequenceNumberCount = function(t) { var n = this.orphanedDocmentCount(t); return this.db.getTargetCache().getTargetCount(t).next(function(e) { return n.next(function(t) { return e + t }) }) }, vc.prototype.orphanedDocmentCount = function(t) { var e = 0; return this.forEachOrphanedDocumentSequenceNumber(t, function(t) { e++ }).next(function() { return e }) }, vc.prototype.forEachTarget = function(t, e) { return this.db.getTargetCache().forEachTarget(t, e) }, vc.prototype.forEachOrphanedDocumentSequenceNumber = function(t, n) { return this.forEachOrphanedDocument(t, function(t, e) { return n(e) }) }, vc.prototype.setInMemoryPins = function(t) { this.inMemoryPins = t }, vc.prototype.addReference = function(t, e) { return bc(t, e) }, vc.prototype.removeReference = function(t, e) { return bc(t, e) }, vc.prototype.removeTargets = function(t, e, n) { return this.db.getTargetCache().removeTargets(t, e, n) }, vc.prototype.removeMutationReference = function(t, e) { return bc(t, e) }, vc.prototype.isPinned = function(t, e) { return this.inMemoryPins.containsKey(e) ? Uo.resolve(!0) : function(e, n) { var r = !1; return ua(e).iterateSerial(function(t) { return ra(e, t, n).next(function(t) { return t && (r = !0), Uo.resolve(!t) }) }).next(function() { return r }) }(t, e) }, vc.prototype.removeOrphanedDocuments = function(r, i) {
                var o = this,
                    a = this.db.getRemoteDocumentCache().newChangeBuffer(),
                    s = [],
                    u = 0;
                return this.forEachOrphanedDocument(r, function(e, t) {
                    if (t <= i) {
                        var n = o.isPinned(r, e).next(function(t) { if (!t) return u++, a.getEntry(r, e).next(function() { return a.removeEntry(e), va(r).delete(function(t) { return [0, oo(t.path)] }(e)) }) });
                        s.push(n)
                    }
                }).next(function() { return Uo.waitFor(s) }).next(function() { return a.apply(r) }).next(function() { return u })
            }, vc.prototype.removeTarget = function(t, e) { var n = e.withSequenceNumber(t.currentSequenceNumber); return this.db.getTargetCache().updateTargetData(t, n) }, vc.prototype.updateLimboDocument = function(t, e) { return bc(t, e) }, vc.prototype.forEachOrphanedDocument = function(t, o) {
                var a, e = va(t),
                    s = Li.INVALID;
                return e.iterate({ index: ku.documentTargetsIndex }, function(t, e) {
                    var n = t[0],
                        r = (t[1], e.path),
                        i = e.sequenceNumber;
                    0 === n ? (s !== Li.INVALID && o(new Wi(uo(a)), s), s = i, a = r) : s = Li.INVALID
                }).next(function() { s !== Li.INVALID && o(new Wi(uo(a)), s) })
            }, vc.prototype.getCacheSize = function(t) { return this.db.getRemoteDocumentCache().getSize(t) }, vc);

            function vc(t, e) { this.db = t, this.inMemoryPins = null, this.garbageCollector = new nc(this, e) }

            function bc(t, e) { return va(t).put(function(t, e) { return new ku(0, oo(t.path), e) }(e, t.currentSequenceNumber)) }
            var wc = Number,
                Tc = wc.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1),
                Sc = wc.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
                Ec = wc.isInteger || function(t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t };

            function Ic(t) { return null == t }

            function Cc(t) { return Ec(t) && t <= Sc && Tc <= t }
            var Dc, Nc, Ac = (kc.prototype.canonicalId = function() {
                if (null === this.memoizedCanonicalId) {
                    var t = this.path.canonicalString();
                    null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:";
                    for (var e = 0, n = this.filters; e < n.length; e++) t += n[e].canonicalId(), t += ",";
                    t += "|ob:";
                    for (var r = 0, i = this.orderBy; r < i.length; r++) t += i[r].canonicalId(), t += ",";
                    Ic(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.memoizedCanonicalId = t
                }
                return this.memoizedCanonicalId
            }, kc.prototype.toString = function() { var t = this.path.canonicalString(); return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 0 < this.filters.length && (t += ", filters: [" + this.filters.join(", ") + "]"), Ic(this.limit) || (t += ", limit: " + this.limit), 0 < this.orderBy.length && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), "Target(" + t + ")" }, kc.prototype.isEqual = function(t) {
                if (this.limit !== t.limit) return !1;
                if (this.orderBy.length !== t.orderBy.length) return !1;
                for (var e = 0; e < this.orderBy.length; e++)
                    if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
                if (this.filters.length !== t.filters.length) return !1;
                for (e = 0; e < this.filters.length; e++)
                    if (!this.filters[e].isEqual(t.filters[e])) return !1;
                return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !(null !== this.startAt ? !this.startAt.isEqual(t.startAt) : null !== t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt)
            }, kc.prototype.isDocumentQuery = function() { return Wi.isDocumentKey(this.path) && null === this.collectionGroup && 0 === this.filters.length }, kc);

            function kc(t, e, n, r, i, o, a) { void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === a && (a = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = a, this.memoizedCanonicalId = null }(Nc = Dc = Dc || {}).First = "F", Nc.Last = "L";
            var Rc = (Mc.atPath = function(t) { return new Mc(t) }, Object.defineProperty(Mc.prototype, "orderBy", {
                get: function() {
                    if (null === this.memoizedOrderBy) {
                        var t = this.getInequalityFilterField(),
                            e = this.getFirstOrderByField();
                        if (null !== t && null === e) t.isKeyField() ? this.memoizedOrderBy = [oh] : this.memoizedOrderBy = [new rh(t), oh];
                        else {
                            Ur(null === t || null !== e && t.isEqual(e), "First orderBy should match inequality field.");
                            for (var n = !(this.memoizedOrderBy = []), r = 0, i = this.explicitOrderBy; r < i.length; r++) {
                                var o = i[r];
                                this.memoizedOrderBy.push(o), o.field.isKeyField() && (n = !0)
                            }
                            if (!n) {
                                var a = 0 < this.explicitOrderBy.length ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir : $c.ASCENDING;
                                this.memoizedOrderBy.push(a === $c.ASCENDING ? oh : ah)
                            }
                        }
                    }
                    return this.memoizedOrderBy
                },
                enumerable: !0,
                configurable: !0
            }), Mc.prototype.addFilter = function(t) { Ur(null == this.getInequalityFilterField() || !(t instanceof xc) || !t.isInequality() || t.field.isEqual(this.getInequalityFilterField()), "Query must only have one inequality field."), Ur(!this.isDocumentQuery(), "No filtering allowed for document query"); var e = this.filters.concat([t]); return new Mc(this.path, this.collectionGroup, this.explicitOrderBy.slice(), e, this.limit, this.limitType, this.startAt, this.endAt) }, Mc.prototype.addOrderBy = function(t) { Ur(!this.startAt && !this.endAt, "Bounds must be set after orderBy"); var e = this.explicitOrderBy.concat([t]); return new Mc(this.path, this.collectionGroup, e, this.filters.slice(), this.limit, this.limitType, this.startAt, this.endAt) }, Mc.prototype.withLimitToFirst = function(t) { return new Mc(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), t, Dc.First, this.startAt, this.endAt) }, Mc.prototype.withLimitToLast = function(t) { return new Mc(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), t, Dc.Last, this.startAt, this.endAt) }, Mc.prototype.withStartAt = function(t) { return new Mc(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.limitType, t, this.endAt) }, Mc.prototype.withEndAt = function(t) { return new Mc(this.path, this.collectionGroup, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.limitType, this.startAt, t) }, Mc.prototype.asCollectionQueryAtPath = function(t) { return new Mc(t, null, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.limitType, this.startAt, this.endAt) }, Mc.prototype.matchesAllDocuments = function() { return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.explicitOrderBy.length || 1 === this.explicitOrderBy.length && this.explicitOrderBy[0].field.isKeyField()) }, Mc.prototype.canonicalId = function() { return this.toTarget().canonicalId() + "|lt:" + this.limitType }, Mc.prototype.toString = function() { return "Query(target=" + this.toTarget().toString() + "; limitType=" + this.limitType + ")" }, Mc.prototype.isEqual = function(t) { return this.toTarget().isEqual(t.toTarget()) && this.limitType === t.limitType }, Mc.prototype.docComparator = function(t, e) {
                for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
                    var o = i[r],
                        a = o.compare(t, e);
                    if (0 !== a) return a;
                    n = n || o.field.isKeyField()
                }
                return Ur(n, "orderBy used that doesn't compare on key field"), 0
            }, Mc.prototype.matches = function(t) { return this.matchesPathAndCollectionGroup(t) && this.matchesOrderBy(t) && this.matchesFilters(t) && this.matchesBounds(t) }, Mc.prototype.hasLimitToFirst = function() { return !Ic(this.limit) && this.limitType === Dc.First }, Mc.prototype.hasLimitToLast = function() { return !Ic(this.limit) && this.limitType === Dc.Last }, Mc.prototype.getFirstOrderByField = function() { return 0 < this.explicitOrderBy.length ? this.explicitOrderBy[0].field : null }, Mc.prototype.getInequalityFilterField = function() { for (var t = 0, e = this.filters; t < e.length; t++) { var n = e[t]; if (n instanceof xc && n.isInequality()) return n.field } return null }, Mc.prototype.findFilterOperator = function(t) { for (var e = 0, n = this.filters; e < n.length; e++) { var r = n[e]; if (r instanceof xc && 0 <= t.indexOf(r.op)) return r.op } return null }, Mc.prototype.isDocumentQuery = function() { return this.toTarget().isDocumentQuery() }, Mc.prototype.isCollectionGroupQuery = function() { return null !== this.collectionGroup }, Mc.prototype.toTarget = function() {
                if (!this.memoizedTarget)
                    if (this.limitType === Dc.First) this.memoizedTarget = new Ac(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt);
                    else {
                        for (var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                            var r = n[e],
                                i = r.dir === $c.DESCENDING ? $c.ASCENDING : $c.DESCENDING;
                            t.push(new rh(r.field, i))
                        }
                        var o = this.endAt ? new eh(this.endAt.position, !this.endAt.before) : null,
                            a = this.startAt ? new eh(this.startAt.position, !this.startAt.before) : null;
                        this.memoizedTarget = new Ac(this.path, this.collectionGroup, t, this.filters, this.limit, o, a)
                    }
                return this.memoizedTarget
            }, Mc.prototype.matchesPathAndCollectionGroup = function(t) { var e = t.key.path; return null !== this.collectionGroup ? t.key.hasCollectionId(this.collectionGroup) && this.path.isPrefixOf(e) : Wi.isDocumentKey(this.path) ? this.path.isEqual(e) : this.path.isImmediateParentOf(e) }, Mc.prototype.matchesOrderBy = function(t) { for (var e = 0, n = this.explicitOrderBy; e < n.length; e++) { var r = n[e]; if (!r.field.isKeyField() && null === t.field(r.field)) return !1 } return !0 }, Mc.prototype.matchesFilters = function(t) {
                for (var e = 0, n = this.filters; e < n.length; e++)
                    if (!n[e].matches(t)) return !1;
                return !0
            }, Mc.prototype.matchesBounds = function(t) { return !(this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, t) || this.endAt && this.endAt.sortsBeforeDocument(this.orderBy, t)) }, Mc.prototype.assertValidBound = function(t) { Ur(t.position.length <= this.orderBy.length, "Bound is longer than orderBy") }, Mc);

            function Mc(t, e, n, r, i, o, a, s) { void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = Dc.First), void 0 === a && (a = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.explicitOrderBy = n, this.filters = r, this.limit = i, this.limitType = o, this.startAt = a, this.endAt = s, this.memoizedOrderBy = null, this.memoizedTarget = null, this.startAt && this.assertValidBound(this.startAt), this.endAt && this.assertValidBound(this.endAt) }

            function _c() {}
            var Oc = (Lc.fromString = function(t) {
                switch (t) {
                    case "<":
                        return Lc.LESS_THAN;
                    case "<=":
                        return Lc.LESS_THAN_OR_EQUAL;
                    case "==":
                        return Lc.EQUAL;
                    case ">=":
                        return Lc.GREATER_THAN_OR_EQUAL;
                    case ">":
                        return Lc.GREATER_THAN;
                    case "array-contains":
                        return Lc.ARRAY_CONTAINS;
                    case "in":
                        return Lc.IN;
                    case "array-contains-any":
                        return Lc.ARRAY_CONTAINS_ANY;
                    default:
                        return Br("Unknown FieldFilter operator: " + t)
                }
            }, Lc.prototype.toString = function() { return this.name }, Lc.prototype.isEqual = function(t) { return this.name === t.name }, Lc.LESS_THAN = new Lc("<"), Lc.LESS_THAN_OR_EQUAL = new Lc("<="), Lc.EQUAL = new Lc("=="), Lc.GREATER_THAN = new Lc(">"), Lc.GREATER_THAN_OR_EQUAL = new Lc(">="), Lc.ARRAY_CONTAINS = new Lc("array-contains"), Lc.IN = new Lc("in"), Lc.ARRAY_CONTAINS_ANY = new Lc("array-contains-any"), Lc);

            function Lc(t) { this.name = t }
            var Pc, xc = (t(Fc, Pc = _c), Fc.create = function(t, e, n) { if (t.isKeyField()) return e === Oc.IN ? (Ur(n instanceof Ls, "Comparing on key with IN, but filter value not an ArrayValue"), Ur(n.internalValue.every(function(t) { return t instanceof Cs }), "Comparing on key with IN, but an array value was not a RefValue"), new Kc(t, n)) : (Ur(n instanceof Cs, "Comparing on key, but filter value not a RefValue"), Ur(e !== Oc.ARRAY_CONTAINS && e !== Oc.ARRAY_CONTAINS_ANY, "'" + e.toString() + "' queries don't make sense on document keys."), new Vc(t, e, n)); if (n.isEqual(Xa.INSTANCE)) { if (e !== Oc.EQUAL) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons."); return new Fc(t, e, n) } if (n.isEqual(hs.NAN)) { if (e !== Oc.EQUAL) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons."); return new Fc(t, e, n) } return e === Oc.ARRAY_CONTAINS ? new Gc(t, n) : e === Oc.IN ? (Ur(n instanceof Ls, "IN filter has invalid value: " + n.toString()), new Hc(t, n)) : e === Oc.ARRAY_CONTAINS_ANY ? (Ur(n instanceof Ls, "ARRAY_CONTAINS_ANY filter has invalid value: " + n.toString()), new Xc(t, n)) : new Fc(t, e, n) }, Fc.prototype.matches = function(t) { var e = t.field(this.field); return null !== e && this.value.typeOrder === e.typeOrder && this.matchesComparison(e.compareTo(this.value)) }, Fc.prototype.matchesComparison = function(t) {
                switch (this.op) {
                    case Oc.LESS_THAN:
                        return t < 0;
                    case Oc.LESS_THAN_OR_EQUAL:
                        return t <= 0;
                    case Oc.EQUAL:
                        return 0 === t;
                    case Oc.GREATER_THAN:
                        return 0 < t;
                    case Oc.GREATER_THAN_OR_EQUAL:
                        return 0 <= t;
                    default:
                        return Br("Unknown FieldFilter operator: " + this.op)
                }
            }, Fc.prototype.isInequality = function() { return 0 <= [Oc.LESS_THAN, Oc.LESS_THAN_OR_EQUAL, Oc.GREATER_THAN, Oc.GREATER_THAN_OR_EQUAL].indexOf(this.op) }, Fc.prototype.canonicalId = function() { return this.field.canonicalString() + this.op.toString() + this.value.toString() }, Fc.prototype.isEqual = function(t) { return t instanceof Fc && this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value) }, Fc.prototype.toString = function() { return this.field.canonicalString() + " " + this.op + " " + this.value.value() }, Fc);

            function Fc(t, e, n) { var r = Pc.call(this) || this; return r.field = t, r.op = e, r.value = n, r }
            var qc, Vc = (t(Bc, qc = xc), Bc.prototype.matches = function(t) {
                var e = this.value,
                    n = Wi.comparator(t.key, e.key);
                return this.matchesComparison(n)
            }, Bc);

            function Bc() { return null !== qc && qc.apply(this, arguments) || this }
            var Uc, Kc = (t(Qc, Uc = xc), Qc.prototype.matches = function(e) { return this.value.internalValue.some(function(t) { return e.key.isEqual(t.key) }) }, Qc);

            function Qc(t, e) { var n = Uc.call(this, t, Oc.IN, e) || this; return n.value = e, n }
            var jc, Gc = (t(Wc, jc = xc), Wc.prototype.matches = function(t) { var e = t.field(this.field); return e instanceof Ls && e.contains(this.value) }, Wc);

            function Wc(t, e) { return jc.call(this, t, Oc.ARRAY_CONTAINS, e) || this }
            var zc, Hc = (t(Yc, zc = xc), Yc.prototype.matches = function(t) {
                var e = this.value,
                    n = t.field(this.field);
                return null !== n && e.contains(n)
            }, Yc);

            function Yc(t, e) { var n = zc.call(this, t, Oc.IN, e) || this; return n.value = e, n }
            var Jc, Xc = (t(Zc, Jc = xc), Zc.prototype.matches = function(t) {
                var e = this,
                    n = t.field(this.field);
                return n instanceof Ls && n.internalValue.some(function(t) { return e.value.contains(t) })
            }, Zc);

            function Zc(t, e) { var n = Jc.call(this, t, Oc.ARRAY_CONTAINS_ANY, e) || this; return n.value = e, n }
            var $c = (th.prototype.toString = function() { return this.name }, th.ASCENDING = new th("asc"), th.DESCENDING = new th("desc"), th);

            function th(t) { this.name = t }
            var eh = (nh.prototype.canonicalId = function() { for (var t = this.before ? "b:" : "a:", e = 0, n = this.position; e < n.length; e++) t += n[e].toString(); return t }, nh.prototype.sortsBeforeDocument = function(t, e) {
                Ur(this.position.length <= t.length, "Bound has more components than query's orderBy");
                for (var n = 0, r = 0; r < this.position.length; r++) {
                    var i = t[r],
                        o = this.position[r];
                    if (i.field.isKeyField()) Ur(o instanceof Cs, "Bound has a non-key value where the key path is being used."), n = Wi.comparator(o.key, e.key);
                    else {
                        var a = e.field(i.field);
                        Ur(null !== a, "Field should exist since document matched the orderBy already."), n = o.compareTo(a)
                    }
                    if (i.dir === $c.DESCENDING && (n *= -1), 0 !== n) break
                }
                return this.before ? n <= 0 : n < 0
            }, nh.prototype.isEqual = function(t) {
                if (null === t) return !1;
                if (this.before !== t.before || this.position.length !== t.position.length) return !1;
                for (var e = 0; e < this.position.length; e++) {
                    var n = this.position[e],
                        r = t.position[e];
                    if (!n.isEqual(r)) return !1
                }
                return !0
            }, nh);

            function nh(t, e) { this.position = t, this.before = e }
            var rh = (ih.prototype.compare = function(t, e) {
                var n = this.isKeyOrderBy ? Vs.compareByKey(t, e) : Vs.compareByField(this.field, t, e);
                switch (this.dir) {
                    case $c.ASCENDING:
                        return n;
                    case $c.DESCENDING:
                        return -1 * n;
                    default:
                        return Br("Unknown direction: " + this.dir)
                }
            }, ih.prototype.canonicalId = function() { return this.field.canonicalString() + this.dir.toString() }, ih.prototype.toString = function() { return this.field.canonicalString() + " (" + this.dir + ")" }, ih.prototype.isEqual = function(t) { return this.dir === t.dir && this.field.isEqual(t.field) }, ih);

            function ih(t, e) { this.field = t, void 0 === e && (e = $c.ASCENDING), this.dir = e, this.isKeyOrderBy = t.isKeyField() }
            var oh = new rh(ji.keyField(), $c.ASCENDING),
                ah = new rh(ji.keyField(), $c.DESCENDING),
                sh = (uh.prototype.setLocalDocumentsView = function(t) { this.localDocumentsView = t }, uh.prototype.getDocumentsMatchingQuery = function(e, r, i, o) { var a = this; return Ur(void 0 !== this.localDocumentsView, "setLocalDocumentsView() not called"), r.matchesAllDocuments() ? this.executeFullCollectionScan(e, r) : i.isEqual(lo.MIN) ? this.executeFullCollectionScan(e, r) : this.localDocumentsView.getDocuments(e, o).next(function(t) { var n = a.applyQuery(r, t); return (r.hasLimitToFirst() || r.hasLimitToLast()) && a.needsRefill(r.limitType, n, o, i) ? a.executeFullCollectionScan(e, r) : (Pr() <= Cr.DEBUG && Fr("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), r.toString()), a.localDocumentsView.getDocumentsMatchingQuery(e, r, i).next(function(e) { return n.forEach(function(t) { e = e.insert(t.key, t) }), e })) }) }, uh.prototype.applyQuery = function(n, t) { var r = new So(function(t, e) { return n.docComparator(t, e) }); return t.forEach(function(t, e) { e instanceof Vs && n.matches(e) && (r = r.add(e)) }), r }, uh.prototype.needsRefill = function(t, e, n, r) { if (n.size !== e.size) return !0; var i = t === Dc.First ? e.last() : e.first(); return !!i && (i.hasPendingWrites || 0 < i.version.compareTo(r)) }, uh.prototype.executeFullCollectionScan = function(t, e) { return Pr() <= Cr.DEBUG && Fr("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", e.toString()), this.localDocumentsView.getDocumentsMatchingQuery(t, e, lo.MIN) }, uh);

            function uh() {}
            var ch = (hh.prototype.getDocument = function(e, n) { var r = this; return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(e, n).next(function(t) { return r.getDocumentInternal(e, n, t) }) }, hh.prototype.getDocumentInternal = function(t, r, i) { return this.remoteDocumentCache.getEntry(t, r).next(function(t) { for (var e = 0, n = i; e < n.length; e++) t = n[e].applyToLocalView(r, t); return t }) }, hh.prototype.applyLocalMutationsToDocuments = function(t, e, i) {
                var o = Ao();
                return e.forEach(function(t, e) {
                    for (var n = 0, r = i; n < r.length; n++) e = r[n].applyToLocalView(t, e);
                    o = o.insert(t, e)
                }), o
            }, hh.prototype.getDocuments = function(e, t) { var n = this; return this.remoteDocumentCache.getEntries(e, t).next(function(t) { return n.getLocalViewOfDocuments(e, t) }) }, hh.prototype.getLocalViewOfDocuments = function(r, i) {
                var o = this;
                return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(r, i).next(function(t) {
                    var e = o.applyLocalMutationsToDocuments(r, i, t),
                        n = No();
                    return e.forEach(function(t, e) { e = e || new Ks(t, lo.forDeletedDoc()), n = n.insert(t, e) }), n
                })
            }, hh.prototype.getDocumentsMatchingQuery = function(t, e, n) { return e.isDocumentQuery() ? this.getDocumentsMatchingDocumentQuery(t, e.path) : e.isCollectionGroupQuery() ? this.getDocumentsMatchingCollectionGroupQuery(t, e, n) : this.getDocumentsMatchingCollectionQuery(t, e, n) }, hh.prototype.getDocumentsMatchingDocumentQuery = function(t, e) { return this.getDocument(t, new Wi(e)).next(function(t) { var e = Ro(); return t instanceof Vs && (e = e.insert(t.key, t)), e }) }, hh.prototype.getDocumentsMatchingCollectionGroupQuery = function(n, r, i) {
                var o = this;
                Ur(r.path.isEmpty(), "Currently we only support collection group queries at the root.");
                var a = r.collectionGroup,
                    s = Ro();
                return this.indexManager.getCollectionParents(n, a).next(function(t) { return Uo.forEach(t, function(t) { var e = r.asCollectionQueryAtPath(t.child(a)); return o.getDocumentsMatchingCollectionQuery(n, e, i).next(function(t) { t.forEach(function(t, e) { s = s.insert(t, e) }) }) }).next(function() { return s }) })
            }, hh.prototype.getDocumentsMatchingCollectionQuery = function(e, n, t) {
                var h, l, r = this;
                return this.remoteDocumentCache.getDocumentsMatchingQuery(e, n, t).next(function(t) { return h = t, r.mutationQueue.getAllMutationBatchesAffectingQuery(e, n) }).next(function(t) {
                    return l = t, r.addMissingBaseDocuments(e, l, h).next(function(t) {
                        h = t;
                        for (var e = 0, n = l; e < n.length; e++)
                            for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) {
                                var a = o[i],
                                    s = a.key,
                                    u = h.get(s),
                                    c = a.applyToLocalView(u, u, r.localWriteTime);
                                h = c instanceof Vs ? h.insert(s, c) : h.remove(s)
                            }
                    })
                }).next(function() { return h.forEach(function(t, e) { n.matches(e) || (h = h.remove(t)) }), h })
            }, hh.prototype.addMissingBaseDocuments = function(t, e, n) {
                for (var r = Lo(), i = 0, o = e; i < o.length; i++)
                    for (var a = 0, s = o[i].mutations; a < s.length; a++) {
                        var u = s[a];
                        u instanceof La && null === n.get(u.key) && (r = r.add(u.key))
                    }
                var c = n;
                return this.remoteDocumentCache.getEntries(t, r).next(function(t) { return t.forEach(function(t, e) { null !== e && e instanceof Vs && (c = c.insert(t, e)) }), c })
            }, hh);

            function hh(t, e, n) { this.remoteDocumentCache = t, this.mutationQueue = e, this.indexManager = n }
            var lh = (fh.prototype.isEmpty = function() { return this.refsByKey.isEmpty() }, fh.prototype.addReference = function(t, e) {
                var n = new ph(t, e);
                this.refsByKey = this.refsByKey.add(n), this.refsByTarget = this.refsByTarget.add(n)
            }, fh.prototype.addReferences = function(t, e) {
                var n = this;
                t.forEach(function(t) { return n.addReference(t, e) })
            }, fh.prototype.removeReference = function(t, e) { this.removeRef(new ph(t, e)) }, fh.prototype.removeReferences = function(t, e) {
                var n = this;
                t.forEach(function(t) { return n.removeReference(t, e) })
            }, fh.prototype.removeReferencesForId = function(t) {
                var e = this,
                    n = Wi.EMPTY,
                    r = new ph(n, t),
                    i = new ph(n, t + 1),
                    o = [];
                return this.refsByTarget.forEachInRange([r, i], function(t) { e.removeRef(t), o.push(t.key) }), o
            }, fh.prototype.removeAllReferences = function() {
                var e = this;
                this.refsByKey.forEach(function(t) { return e.removeRef(t) })
            }, fh.prototype.removeRef = function(t) { this.refsByKey = this.refsByKey.delete(t), this.refsByTarget = this.refsByTarget.delete(t) }, fh.prototype.referencesForId = function(t) {
                var e = Wi.EMPTY,
                    n = new ph(e, t),
                    r = new ph(e, t + 1),
                    i = Lo();
                return this.refsByTarget.forEachInRange([n, r], function(t) { i = i.add(t.key) }), i
            }, fh.prototype.containsKey = function(t) {
                var e = new ph(t, 0),
                    n = this.refsByKey.firstAfterOrEqual(e);
                return null !== n && t.isEqual(n.key)
            }, fh);

            function fh() { this.refsByKey = new So(ph.compareByKey), this.refsByTarget = new So(ph.compareByTargetId) }
            var ph = (dh.compareByKey = function(t, e) { return Wi.comparator(t.key, e.key) || Si(t.targetOrBatchId, e.targetOrBatchId) }, dh.compareByTargetId = function(t, e) { return Si(t.targetOrBatchId, e.targetOrBatchId) || Wi.comparator(t.key, e.key) }, dh);

            function dh(t, e) { this.key = t, this.targetOrBatchId = e }
            var mh = (yh.prototype.start = function() { return this.synchronizeLastDocumentChangeReadTime() }, yh.prototype.handleUserChange = function(i) {
                return p(this, void 0, void 0, function() {
                    var e, y, n, r = this;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.mutationQueue, y = this.localDocuments, [4, this.persistence.runTransaction("Handle user change", "readonly-idempotent", function(d) {
                                    var m;
                                    return r.mutationQueue.getAllMutationBatches(d).next(function(t) { return m = t, e = r.persistence.getMutationQueue(i), y = new ch(r.remoteDocuments, e, r.persistence.getIndexManager()), e.getAllMutationBatches(d) }).next(function(t) {
                                        for (var e = [], n = [], r = Lo(), i = 0, o = m; i < o.length; i++) {
                                            var a = o[i];
                                            e.push(a.batchId);
                                            for (var s = 0, u = a.mutations; s < u.length; s++) {
                                                var c = u[s];
                                                r = r.add(c.key)
                                            }
                                        }
                                        for (var h = 0, l = t; h < l.length; h++) { a = l[h], n.push(a.batchId); for (var f = 0, p = a.mutations; f < p.length; f++) c = p[f], r = r.add(c.key) }
                                        return y.getDocuments(d, r).next(function(t) { return { affectedDocuments: t, removedBatchIds: e, addedBatchIds: n } })
                                    })
                                })];
                            case 1:
                                return n = t.sent(), this.mutationQueue = e, this.localDocuments = y, this.queryEngine.setLocalDocumentsView(this.localDocuments), [2, n]
                        }
                    })
                })
            }, yh.prototype.localWrite = function(s) {
                var u, c = this,
                    h = co.now(),
                    t = s.reduce(function(t, e) { return t.add(e.key) }, Lo());
                return this.persistence.runTransaction("Locally write mutations", "readwrite-idempotent", function(a) {
                    return c.localDocuments.getDocuments(a, t).next(function(t) {
                        u = t;
                        for (var e = [], n = 0, r = s; n < r.length; n++) {
                            var i = r[n],
                                o = i.extractBaseValue(u.get(i.key));
                            null != o && e.push(new La(i.key, o, o.fieldMask(), Da.exists(!0)))
                        }
                        return c.mutationQueue.addMutationBatch(a, h, e, s)
                    })
                }).then(function(t) { var e = t.applyToLocalDocumentSet(u); return { batchId: t.batchId, changes: e } })
            }, yh.prototype.lookupMutationDocuments = function(t) { var n = this; return this.persistence.runTransaction("Lookup mutation documents", "readonly-idempotent", function(e) { return n.mutationQueue.lookupMutationKeys(e, t).next(function(t) { return t ? n.localDocuments.getDocuments(e, t) : Uo.resolve(null) }) }) }, yh.prototype.acknowledgeBatch = function(r) {
                var i = this;
                return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary-idempotent", function(t) {
                    var e = r.batch.keys(),
                        n = i.remoteDocuments.newChangeBuffer({ trackRemovals: !0 });
                    return i.mutationQueue.acknowledgeBatch(t, r.batch, r.streamToken).next(function() { return i.applyWriteToRemoteDocuments(t, r, n) }).next(function() { return n.apply(t) }).next(function() { return i.mutationQueue.performConsistencyCheck(t) }).next(function() { return i.localDocuments.getDocuments(t, e) })
                })
            }, yh.prototype.rejectBatch = function(t) { var r = this; return this.persistence.runTransaction("Reject batch", "readwrite-primary-idempotent", function(e) { var n; return r.mutationQueue.lookupMutationBatch(e, t).next(function(t) { return Ur(null !== t, "Attempt to reject nonexistent batch!"), n = t.keys(), r.mutationQueue.removeMutationBatch(e, t) }).next(function() { return r.mutationQueue.performConsistencyCheck(e) }).next(function() { return r.localDocuments.getDocuments(e, n) }) }) }, yh.prototype.getHighestUnacknowledgedBatchId = function() { var e = this; return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly-idempotent", function(t) { return e.mutationQueue.getHighestUnacknowledgedBatchId(t) }) }, yh.prototype.getLastStreamToken = function() { var e = this; return this.persistence.runTransaction("Get last stream token", "readonly-idempotent", function(t) { return e.mutationQueue.getLastStreamToken(t) }) }, yh.prototype.setLastStreamToken = function(e) { var n = this; return this.persistence.runTransaction("Set last stream token", "readwrite-primary-idempotent", function(t) { return n.mutationQueue.setLastStreamToken(t, e) }) }, yh.prototype.getLastRemoteSnapshotVersion = function() { var e = this; return this.persistence.runTransaction("Get last remote snapshot version", "readonly-idempotent", function(t) { return e.targetCache.getLastRemoteSnapshotVersion(t) }) }, yh.prototype.applyRemoteEvent = function(u) {
                var c = this,
                    h = u.snapshotVersion,
                    l = this.targetDataByTarget;
                return this.persistence.runTransaction("Apply remote event", "readwrite-primary-idempotent", function(o) {
                    var i = c.remoteDocuments.newChangeBuffer({ trackRemovals: !0 });
                    l = c.targetDataByTarget;
                    var a = [];
                    Zr(u.targetChanges, function(t, e) {
                        var n = l.get(t);
                        if (n) {
                            a.push(c.targetCache.removeMatchingKeys(o, e.removedDocuments, t).next(function() { return c.targetCache.addMatchingKeys(o, e.addedDocuments, t) }));
                            var r = e.resumeToken;
                            if (0 < r.length) {
                                var i = n.withResumeToken(r, h).withSequenceNumber(o.currentSequenceNumber);
                                l = l.insert(t, i), yh.shouldPersistTargetData(n, i, e) && a.push(c.targetCache.updateTargetData(o, i))
                            }
                        }
                    });
                    var s = No(),
                        n = Lo();
                    if (u.documentUpdates.forEach(function(t, e) { n = n.add(t) }), a.push(i.getEntries(o, n).next(function(r) {
                            u.documentUpdates.forEach(function(t, e) {
                                var n = r.get(t);
                                e instanceof Ks && e.version.isEqual(lo.MIN) ? (i.removeEntry(t, h), s = s.insert(t, e)) : null == n || 0 < e.version.compareTo(n.version) || 0 === e.version.compareTo(n.version) && n.hasPendingWrites ? (Ur(!lo.MIN.isEqual(h), "Cannot add a document when the remote version is zero"), i.addEntry(e, h), s = s.insert(t, e)) : Fr("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version), u.resolvedLimboDocuments.has(t) && a.push(c.persistence.referenceDelegate.updateLimboDocument(o, t))
                            })
                        })), !h.isEqual(lo.MIN)) {
                        var t = c.targetCache.getLastRemoteSnapshotVersion(o).next(function(t) { return Ur(0 <= h.compareTo(t), "Watch stream reverted to previous snapshot?? " + h + " < " + t), c.targetCache.setTargetsMetadata(o, o.currentSequenceNumber, h) });
                        a.push(t)
                    }
                    return Uo.waitFor(a).next(function() { return i.apply(o) }).next(function() { return c.localDocuments.getLocalViewOfDocuments(o, s) })
                }).then(function(t) { return c.targetDataByTarget = l, t })
            }, yh.shouldPersistTargetData = function(t, e, n) { return Ur(0 < e.resumeToken.length, "Attempted to persist target data with no resume token"), 0 === t.resumeToken.length || e.snapshotVersion.toMicroseconds() - t.snapshotVersion.toMicroseconds() >= this.RESUME_TOKEN_MAX_AGE_MICROS || 0 < n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size }, yh.prototype.notifyLocalViewChanges = function(t) {
                for (var n = this, e = 0, r = t; e < r.length; e++) {
                    var i = r[e],
                        o = i.targetId;
                    if (this.localViewReferences.addReferences(i.addedKeys, o), this.localViewReferences.removeReferences(i.removedKeys, o), !i.fromCache) {
                        var a = this.targetDataByTarget.get(o);
                        Ur(null !== a, "Can't set limbo-free snapshot version for unknown target: " + o);
                        var s = a.snapshotVersion,
                            u = a.withLastLimboFreeSnapshotVersion(s);
                        this.targetDataByTarget = this.targetDataByTarget.insert(o, u)
                    }
                }
                return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite-idempotent", function(e) { return Uo.forEach(t, function(t) { return Uo.forEach(t.removedKeys, function(t) { return n.persistence.referenceDelegate.removeReference(e, t) }) }) })
            }, yh.prototype.nextMutationBatch = function(e) { var n = this; return this.persistence.runTransaction("Get next mutation batch", "readonly-idempotent", function(t) { return void 0 === e && (e = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(t, e) }) }, yh.prototype.readDocument = function(e) { var n = this; return this.persistence.runTransaction("read document", "readonly-idempotent", function(t) { return n.localDocuments.getDocument(t, e) }) }, yh.prototype.allocateTarget = function(r) { var i = this; return this.persistence.runTransaction("Allocate target", "readwrite-idempotent", function(e) { var n; return i.targetCache.getTargetData(e, r).next(function(t) { return t ? (n = t, Uo.resolve(n)) : i.targetCache.allocateTargetId(e).next(function(t) { return n = new ju(r, t, qu.Listen, e.currentSequenceNumber), i.targetCache.addTargetData(e, n).next(function() { return n }) }) }) }).then(function(t) { return null === i.targetDataByTarget.get(t.targetId) && (i.targetDataByTarget = i.targetDataByTarget.insert(t.targetId, t), i.targetIdByTarget.set(r, t.targetId)), t }) }, yh.prototype.getTargetData = function(t, e) { var n = this.targetIdByTarget.get(e); return void 0 !== n ? Uo.resolve(this.targetDataByTarget.get(n)) : this.targetCache.getTargetData(t, e) }, yh.prototype.releaseTarget = function(n, r) {
                var i = this,
                    o = this.targetDataByTarget.get(n);
                Ur(null !== o, "Tried to release nonexistent target: " + n);
                var t = r ? "readwrite-idempotent" : "readwrite-primary-idempotent";
                return this.persistence.runTransaction("Release target", t, function(e) { var t = i.localViewReferences.removeReferencesForId(n); return r ? Uo.resolve() : Uo.forEach(t, function(t) { return i.persistence.referenceDelegate.removeReference(e, t) }).next(function() { i.persistence.referenceDelegate.removeTarget(e, o) }) }).then(function() { i.targetDataByTarget = i.targetDataByTarget.remove(n), i.targetIdByTarget.delete(o.target) })
            }, yh.prototype.executeQuery = function(t, n) {
                var r = this,
                    i = lo.MIN,
                    o = Lo();
                return this.persistence.runTransaction("Execute query", "readonly-idempotent", function(e) { return r.getTargetData(e, t.toTarget()).next(function(t) { if (t) return i = t.lastLimboFreeSnapshotVersion, r.targetCache.getMatchingKeysForTargetId(e, t.targetId).next(function(t) { o = t }) }).next(function() { return r.queryEngine.getDocumentsMatchingQuery(e, t, n ? i : lo.MIN, n ? o : Lo()) }).next(function(t) { return { documents: t, remoteKeys: o } }) })
            }, yh.prototype.remoteDocumentKeys = function(e) { var n = this; return this.persistence.runTransaction("Remote document keys", "readonly-idempotent", function(t) { return n.targetCache.getMatchingKeysForTargetId(t, e) }) }, yh.prototype.getActiveClients = function() { return this.persistence.getActiveClients() }, yh.prototype.removeCachedMutationBatchMetadata = function(t) { this.mutationQueue.removeCachedMutationKeys(t) }, yh.prototype.setNetworkEnabled = function(t) { this.persistence.setNetworkEnabled(t) }, yh.prototype.applyWriteToRemoteDocuments = function(t, i, o) {
                var e = this,
                    a = i.batch,
                    n = a.keys(),
                    s = Uo.resolve();
                return n.forEach(function(r) {
                    s = s.next(function() { return o.getEntry(t, r) }).next(function(t) {
                        var e = t,
                            n = i.docVersions.get(r);
                        Ur(null !== n, "ackVersions should contain every doc in the write."), (!e || e.version.compareTo(n) < 0) && ((e = a.applyToRemoteDocument(r, e, i)) ? o.addEntry(e, i.commitVersion) : Ur(!t, "Mutation batch " + a + " applied to document " + t + " resulted in null"))
                    })
                }), s.next(function() { return e.mutationQueue.removeMutationBatch(t, a) })
            }, yh.prototype.collectGarbage = function(e) { var n = this; return this.persistence.runTransaction("Collect garbage", "readwrite-primary-idempotent", function(t) { return e.collect(t, n.targetDataByTarget) }) }, yh.prototype.getTarget = function(e) {
                var n = this,
                    t = this.targetDataByTarget.get(e);
                return t ? Promise.resolve(t.target) : this.persistence.runTransaction("Get target data", "readonly-idempotent", function(t) { return n.targetCache.getTargetDataForTarget(t, e).next(function(t) { return t ? t.target : null }) })
            }, yh.prototype.getNewDocumentChanges = function() {
                var r = this;
                return this.persistence.runTransaction("Get new document changes", "readonly-idempotent", function(t) { return r.remoteDocuments.getNewDocumentChanges(t, r.lastDocumentChangeReadTime) }).then(function(t) {
                    var e = t.changedDocs,
                        n = t.readTime;
                    return r.lastDocumentChangeReadTime = n, e
                })
            }, yh.prototype.synchronizeLastDocumentChangeReadTime = function() {
                return p(this, void 0, void 0, function() {
                    var e, n = this;
                    return m(this, function(t) {
                        return this.remoteDocuments instanceof Zs ? (e = this.remoteDocuments, [2, this.persistence.runTransaction("Synchronize last document change read time", "readonly-idempotent", function(t) { return e.getLastDocumentChange(t) }).then(function(t) {
                            var e = t.readTime;
                            n.lastDocumentChangeReadTime = e
                        })]) : [2]
                    })
                })
            }, yh.RESUME_TOKEN_MAX_AGE_MICROS = 3e8, yh);

            function yh(t, e, n) { this.persistence = t, this.queryEngine = e, this.localViewReferences = new lh, this.targetDataByTarget = new po(Si), this.targetIdByTarget = new zs(function(t) { return t.canonicalId() }), this.lastDocumentChangeReadTime = lo.MIN, Ur(t.started, "LocalStore was passed an unstarted persistence implementation"), this.persistence.referenceDelegate.setInMemoryPins(this.localViewReferences), this.mutationQueue = t.getMutationQueue(n), this.remoteDocuments = t.getRemoteDocumentCache(), this.targetCache = t.getTargetCache(), this.localDocuments = new ch(this.remoteDocuments, this.mutationQueue, this.persistence.getIndexManager()), this.queryEngine.setLocalDocumentsView(this.localDocuments) }
            var gh = (vh.prototype.checkEmpty = function(t) { return Uo.resolve(0 === this.mutationQueue.length) }, vh.prototype.acknowledgeBatch = function(t, e, n) {
                var r = e.batchId,
                    i = this.indexOfExistingBatchId(r, "acknowledged");
                Ur(0 === i, "Can only acknowledge the first batch in the mutation queue");
                var o = this.mutationQueue[i];
                return Ur(r === o.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + o.batchId), this.lastStreamToken = n, Uo.resolve()
            }, vh.prototype.getLastStreamToken = function(t) { return Uo.resolve(this.lastStreamToken) }, vh.prototype.setLastStreamToken = function(t, e) { return this.lastStreamToken = e, Uo.resolve() }, vh.prototype.addMutationBatch = function(t, e, n, r) {
                Ur(0 !== r.length, "Mutation batches should not be empty");
                var i = this.nextBatchId;
                this.nextBatchId++, 0 < this.mutationQueue.length && Ur(this.mutationQueue[this.mutationQueue.length - 1].batchId < i, "Mutation batchIDs must be monotonically increasing order");
                var o = new Fo(i, e, n, r);
                this.mutationQueue.push(o);
                for (var a = 0, s = r; a < s.length; a++) {
                    var u = s[a];
                    this.batchesByDocumentKey = this.batchesByDocumentKey.add(new ph(u.key, i)), this.indexManager.addToCollectionParentIndex(t, u.key.path.popLast())
                }
                return Uo.resolve(o)
            }, vh.prototype.lookupMutationBatch = function(t, e) { return Uo.resolve(this.findMutationBatch(e)) }, vh.prototype.lookupMutationKeys = function(t, e) { var n = this.findMutationBatch(e); return Ur(null != n, "Failed to find local mutation batch."), Uo.resolve(n.keys()) }, vh.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
                var n = e + 1,
                    r = this.indexOfBatchId(n),
                    i = r < 0 ? 0 : r;
                return Uo.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null)
            }, vh.prototype.getHighestUnacknowledgedBatchId = function() { return Uo.resolve(0 === this.mutationQueue.length ? -1 : this.nextBatchId - 1) }, vh.prototype.getAllMutationBatches = function(t) { return Uo.resolve(this.mutationQueue.slice()) }, vh.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, n) {
                var r = this,
                    e = new ph(n, 0),
                    i = new ph(n, Number.POSITIVE_INFINITY),
                    o = [];
                return this.batchesByDocumentKey.forEachInRange([e, i], function(t) {
                    Ur(n.isEqual(t.key), "Should only iterate over a single key's batches");
                    var e = r.findMutationBatch(t.targetOrBatchId);
                    Ur(null !== e, "Batches in the index must exist in the main table"), o.push(e)
                }), Uo.resolve(o)
            }, vh.prototype.getAllMutationBatchesAffectingDocumentKeys = function(t, e) {
                var r = this,
                    i = new So(Si);
                return e.forEach(function(e) {
                    var t = new ph(e, 0),
                        n = new ph(e, Number.POSITIVE_INFINITY);
                    r.batchesByDocumentKey.forEachInRange([t, n], function(t) { Ur(e.isEqual(t.key), "For each key, should only iterate over a single key's batches"), i = i.add(t.targetOrBatchId) })
                }), Uo.resolve(this.findMutationBatches(i))
            }, vh.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                Ur(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                var n = e.path,
                    r = n.length + 1,
                    i = n;
                Wi.isDocumentKey(i) || (i = i.child(""));
                var o = new ph(new Wi(i), 0),
                    a = new So(Si);
                return this.batchesByDocumentKey.forEachWhile(function(t) { var e = t.key.path; return !!n.isPrefixOf(e) && (e.length === r && (a = a.add(t.targetOrBatchId)), !0) }, o), Uo.resolve(this.findMutationBatches(a))
            }, vh.prototype.findMutationBatches = function(t) {
                var n = this,
                    r = [];
                return t.forEach(function(t) {
                    var e = n.findMutationBatch(t);
                    null !== e && r.push(e)
                }), r
            }, vh.prototype.removeMutationBatch = function(n, r) {
                var i = this;
                Ur(0 === this.indexOfExistingBatchId(r.batchId, "removed"), "Can only remove the first entry of the mutation queue"), this.mutationQueue.shift();
                var o = this.batchesByDocumentKey;
                return Uo.forEach(r.mutations, function(t) { var e = new ph(t.key, r.batchId); return o = o.delete(e), i.referenceDelegate.removeMutationReference(n, t.key) }).next(function() { i.batchesByDocumentKey = o })
            }, vh.prototype.removeCachedMutationKeys = function(t) {}, vh.prototype.containsKey = function(t, e) {
                var n = new ph(e, 0),
                    r = this.batchesByDocumentKey.firstAfterOrEqual(n);
                return Uo.resolve(e.isEqual(r && r.key))
            }, vh.prototype.performConsistencyCheck = function(t) { return 0 === this.mutationQueue.length && Ur(this.batchesByDocumentKey.isEmpty(), "Document leak -- detected dangling mutation references when queue is empty."), Uo.resolve() }, vh.prototype.indexOfExistingBatchId = function(t, e) { var n = this.indexOfBatchId(t); return Ur(0 <= n && n < this.mutationQueue.length, "Batches must exist to be " + e), n }, vh.prototype.indexOfBatchId = function(t) { return 0 === this.mutationQueue.length ? 0 : t - this.mutationQueue[0].batchId }, vh.prototype.findMutationBatch = function(t) { var e = this.indexOfBatchId(t); if (e < 0 || e >= this.mutationQueue.length) return null; var n = this.mutationQueue[e]; return Ur(n.batchId === t, "If found batch must match"), n }, vh);

            function vh(t, e) { this.indexManager = t, this.referenceDelegate = e, this.mutationQueue = [], this.nextBatchId = 1, this.lastStreamToken = jr(), this.batchesByDocumentKey = new So(ph.compareByKey) }
            var bh, wh = (Th.prototype.addEntry = function(t, e, n) {
                Ur(!n.isEqual(lo.MIN), "Cannot add a document with a read time of zero");
                var r = e.key,
                    i = this.docs.get(r),
                    o = i ? i.size : 0,
                    a = this.sizer(e);
                return this.docs = this.docs.insert(r, { maybeDocument: e, size: a, readTime: n }), this.size += a - o, this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
            }, Th.prototype.removeEntry = function(t) {
                var e = this.docs.get(t);
                e && (this.docs = this.docs.remove(t), this.size -= e.size)
            }, Th.prototype.getEntry = function(t, e) { var n = this.docs.get(e); return Uo.resolve(n ? n.maybeDocument : null) }, Th.prototype.getEntries = function(t, e) {
                var n = this,
                    r = Ao();
                return e.forEach(function(t) {
                    var e = n.docs.get(t);
                    r = r.insert(t, e ? e.maybeDocument : null)
                }), Uo.resolve(r)
            }, Th.prototype.getDocumentsMatchingQuery = function(t, e, n) {
                Ur(!e.isCollectionGroupQuery(), "CollectionGroup queries should be handled in LocalDocumentsView");
                for (var r = Ro(), i = new Wi(e.path.child("")), o = this.docs.getIteratorFrom(i); o.hasNext();) {
                    var a = o.getNext(),
                        s = a.key,
                        u = a.value,
                        c = u.maybeDocument,
                        h = u.readTime;
                    if (!e.path.isPrefixOf(s.path)) break;
                    h.compareTo(n) <= 0 || c instanceof Vs && e.matches(c) && (r = r.insert(c.key, c))
                }
                return Uo.resolve(r)
            }, Th.prototype.forEachDocumentKey = function(t, e) { return Uo.forEach(this.docs, function(t) { return e(t) }) }, Th.prototype.getNewDocumentChanges = function(t, e) { throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence") }, Th.prototype.newChangeBuffer = function(t) { return new Th.RemoteDocumentChangeBuffer(this) }, Th.prototype.getSize = function(t) { return Uo.resolve(this.size) }, Th.RemoteDocumentChangeBuffer = (t(Sh, bh = Ys), Sh.prototype.applyChanges = function(n) {
                var r = this,
                    i = [];
                return this.changes.forEach(function(t, e) { e ? i.push(r.documentCache.addEntry(n, e, r.readTime)) : r.documentCache.removeEntry(t) }), Uo.waitFor(i)
            }, Sh.prototype.getFromCache = function(t, e) { return this.documentCache.getEntry(t, e) }, Sh.prototype.getAllFromCache = function(t, e) { return this.documentCache.getEntries(t, e) }, Sh), Th);

            function Th(t, e) { this.indexManager = t, this.sizer = e, this.docs = new po(Wi.comparator), this.size = 0 }

            function Sh(t) { var e = bh.call(this) || this; return e.documentCache = t, e }
            var Eh = (Ih.prototype.forEachTarget = function(t, n) { return this.targets.forEach(function(t, e) { return n(e) }), Uo.resolve() }, Ih.prototype.getLastRemoteSnapshotVersion = function(t) { return Uo.resolve(this.lastRemoteSnapshotVersion) }, Ih.prototype.getHighestSequenceNumber = function(t) { return Uo.resolve(this.highestSequenceNumber) }, Ih.prototype.allocateTargetId = function(t) { var e = this.targetIdGenerator.after(this.highestTargetId); return this.highestTargetId = e, Uo.resolve(e) }, Ih.prototype.setTargetsMetadata = function(t, e, n) { return n && (this.lastRemoteSnapshotVersion = n), e > this.highestSequenceNumber && (this.highestSequenceNumber = e), Uo.resolve() }, Ih.prototype.saveTargetData = function(t) {
                this.targets.set(t.target, t);
                var e = t.targetId;
                e > this.highestTargetId && (this.highestTargetId = e), t.sequenceNumber > this.highestSequenceNumber && (this.highestSequenceNumber = t.sequenceNumber)
            }, Ih.prototype.addTargetData = function(t, e) { return Ur(!this.targets.has(e.target), "Adding a target that already exists"), this.saveTargetData(e), this.targetCount += 1, Uo.resolve() }, Ih.prototype.updateTargetData = function(t, e) { return Ur(this.targets.has(e.target), "Updating a non-existent target"), this.saveTargetData(e), Uo.resolve() }, Ih.prototype.removeTargetData = function(t, e) { return Ur(0 < this.targetCount, "Removing a target from an empty cache"), Ur(this.targets.has(e.target), "Removing a non-existent target from the cache"), this.targets.delete(e.target), this.references.removeReferencesForId(e.targetId), this.targetCount -= 1, Uo.resolve() }, Ih.prototype.removeTargets = function(n, r, i) {
                var o = this,
                    a = 0,
                    s = [];
                return this.targets.forEach(function(t, e) { e.sequenceNumber <= r && null === i.get(e.targetId) && (o.targets.delete(t), s.push(o.removeMatchingKeysForTargetId(n, e.targetId)), a++) }), Uo.waitFor(s).next(function() { return a })
            }, Ih.prototype.getTargetCount = function(t) { return Uo.resolve(this.targetCount) }, Ih.prototype.getTargetData = function(t, e) { var n = this.targets.get(e) || null; return Uo.resolve(n) }, Ih.prototype.getTargetDataForTarget = function(t, e) { return Br("Not yet implemented.") }, Ih.prototype.addMatchingKeys = function(e, t, n) {
                this.references.addReferences(t, n);
                var r = this.persistence.referenceDelegate,
                    i = [];
                return r && t.forEach(function(t) { i.push(r.addReference(e, t)) }), Uo.waitFor(i)
            }, Ih.prototype.removeMatchingKeys = function(e, t, n) {
                this.references.removeReferences(t, n);
                var r = this.persistence.referenceDelegate,
                    i = [];
                return r && t.forEach(function(t) { i.push(r.removeReference(e, t)) }), Uo.waitFor(i)
            }, Ih.prototype.removeMatchingKeysForTargetId = function(t, e) { return this.references.removeReferencesForId(e), Uo.resolve() }, Ih.prototype.getMatchingKeysForTargetId = function(t, e) { var n = this.references.referencesForId(e); return Uo.resolve(n) }, Ih.prototype.containsKey = function(t, e) { return Uo.resolve(this.references.containsKey(e)) }, Ih);

            function Ih(t) { this.persistence = t, this.targets = new zs(function(t) { return t.canonicalId() }), this.lastRemoteSnapshotVersion = lo.MIN, this.highestTargetId = 0, this.highestSequenceNumber = 0, this.references = new lh, this.targetCount = 0, this.targetIdGenerator = la.forTargetCache() }
            var Ch = (Dh.createLruPersistence = function(t, e, n) { return new Dh(t, function(t) { return new _h(t, new Wu(e), n) }) }, Dh.createEagerPersistence = function(t) { return new Dh(t, function(t) { return new Rh(t) }) }, Dh.prototype.shutdown = function() { return this._started = !1, Promise.resolve() }, Object.defineProperty(Dh.prototype, "started", { get: function() { return this._started }, enumerable: !0, configurable: !0 }), Dh.prototype.getActiveClients = function() { return p(this, void 0, void 0, function() { return m(this, function(t) { return [2, [this.clientId]] }) }) }, Dh.prototype.setPrimaryStateListener = function(t) { return t(!0) }, Dh.prototype.setDatabaseDeletedListener = function() {}, Dh.prototype.setNetworkEnabled = function(t) {}, Dh.prototype.getIndexManager = function() { return this.indexManager }, Dh.prototype.getMutationQueue = function(t) { var e = this.mutationQueues[t.toKey()]; return e || (e = new gh(this.indexManager, this.referenceDelegate), this.mutationQueues[t.toKey()] = e), e }, Dh.prototype.getTargetCache = function() { return this.targetCache }, Dh.prototype.getRemoteDocumentCache = function() { return this.remoteDocumentCache }, Dh.prototype.runTransaction = function(t, e, n) {
                var r = this;
                Fr("MemoryPersistence", "Starting transaction:", t);
                var i = new Ah(this.listenSequence.next());
                return this.referenceDelegate.onTransactionStarted(), n(i).next(function(t) { return r.referenceDelegate.onTransactionCommitted(i).next(function() { return t }) }).toPromise().then(function(t) { return i.raiseOnCommittedEvent(), t })
            }, Dh.prototype.mutationQueuesContainKey = function(e, n) { return Uo.or(function(t) { var n = []; return $r(t, function(t, e) { return n.push(e) }), n }(this.mutationQueues).map(function(t) { return function() { return t.containsKey(e, n) } })) }, Dh);

            function Dh(t, e) {
                var n = this;
                this.clientId = t, this.mutationQueues = {}, this.listenSequence = new Li(0), this._started = !1, this._started = !0, this.referenceDelegate = e(this), this.targetCache = new Eh(this);
                this.indexManager = new ou, this.remoteDocumentCache = new wh(this.indexManager, function(t) { return n.referenceDelegate.documentSize(t) })
            }
            var Nh, Ah = (t(kh, Nh = ic), kh);

            function kh(t) { var e = Nh.call(this) || this; return e.currentSequenceNumber = t, e }
            var Rh = (Object.defineProperty(Mh.prototype, "orphanedDocuments", { get: function() { if (this._orphanedDocuments) return this._orphanedDocuments; throw Br("orphanedDocuments is only valid during a transaction.") }, enumerable: !0, configurable: !0 }), Mh.prototype.setInMemoryPins = function(t) { this.inMemoryPins = t }, Mh.prototype.addReference = function(t, e) { return this.orphanedDocuments.delete(e), Uo.resolve() }, Mh.prototype.removeReference = function(t, e) { return this.orphanedDocuments.add(e), Uo.resolve() }, Mh.prototype.removeMutationReference = function(t, e) { return this.orphanedDocuments.add(e), Uo.resolve() }, Mh.prototype.removeTarget = function(t, e) {
                var n = this,
                    r = this.persistence.getTargetCache();
                return r.getMatchingKeysForTargetId(t, e.targetId).next(function(t) { t.forEach(function(t) { return n.orphanedDocuments.add(t) }) }).next(function() { return r.removeTargetData(t, e) })
            }, Mh.prototype.onTransactionStarted = function() { this._orphanedDocuments = new Set }, Mh.prototype.onTransactionCommitted = function(t) {
                var n = this,
                    r = this.persistence.getRemoteDocumentCache().newChangeBuffer();
                return Uo.forEach(this.orphanedDocuments, function(e) { return n.isReferenced(t, e).next(function(t) { t || r.removeEntry(e) }) }).next(function() { return n._orphanedDocuments = null, r.apply(t) })
            }, Mh.prototype.updateLimboDocument = function(t, e) { var n = this; return this.isReferenced(t, e).next(function(t) { t ? n.orphanedDocuments.delete(e) : n.orphanedDocuments.add(e) }) }, Mh.prototype.documentSize = function(t) { return 0 }, Mh.prototype.isReferenced = function(t, e) { var n = this; return Uo.or([function() { return n.persistence.getTargetCache().containsKey(t, e) }, function() { return n.persistence.mutationQueuesContainKey(t, e) }, function() { return Uo.resolve(n.inMemoryPins.containsKey(e)) }]) }, Mh);

            function Mh(t) { this.persistence = t, this.inMemoryPins = null, this._orphanedDocuments = null }
            var _h = (Oh.prototype.onTransactionStarted = function() {}, Oh.prototype.onTransactionCommitted = function(t) { return Uo.resolve() }, Oh.prototype.forEachTarget = function(t, e) { return this.persistence.getTargetCache().forEachTarget(t, e) }, Oh.prototype.getSequenceNumberCount = function(t) { var n = this.orphanedDocumentCount(t); return this.persistence.getTargetCache().getTargetCount(t).next(function(e) { return n.next(function(t) { return e + t }) }) }, Oh.prototype.orphanedDocumentCount = function(t) { var e = 0; return this.forEachOrphanedDocumentSequenceNumber(t, function(t) { e++ }).next(function() { return e }) }, Oh.prototype.forEachOrphanedDocumentSequenceNumber = function(n, r) { var i = this; return Uo.forEach(this.orphanedSequenceNumbers, function(t, e) { return i.isPinned(n, t, e).next(function(t) { return t ? Uo.resolve() : r(e) }) }) }, Oh.prototype.setInMemoryPins = function(t) { this.inMemoryPins = t }, Oh.prototype.removeTargets = function(t, e, n) { return this.persistence.getTargetCache().removeTargets(t, e, n) }, Oh.prototype.removeOrphanedDocuments = function(t, n) {
                var r = this,
                    i = 0,
                    e = this.persistence.getRemoteDocumentCache(),
                    o = e.newChangeBuffer();
                return e.forEachDocumentKey(t, function(e) { return r.isPinned(t, e, n).next(function(t) { t || (i++, o.removeEntry(e)) }) }).next(function() { return o.apply(t) }).next(function() { return i })
            }, Oh.prototype.removeMutationReference = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Uo.resolve() }, Oh.prototype.removeTarget = function(t, e) { var n = e.withSequenceNumber(t.currentSequenceNumber); return this.persistence.getTargetCache().updateTargetData(t, n) }, Oh.prototype.addReference = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Uo.resolve() }, Oh.prototype.removeReference = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Uo.resolve() }, Oh.prototype.updateLimboDocument = function(t, e) { return this.orphanedSequenceNumbers.set(e, t.currentSequenceNumber), Uo.resolve() }, Oh.prototype.documentSize = function(t) {
                var e, n = this.serializer.toDbRemoteDocument(t, t.version);
                if (n.document) e = n.document;
                else if (n.unknownDocument) e = n.unknownDocument;
                else {
                    if (!n.noDocument) throw Br("Unknown remote document type");
                    e = n.noDocument
                }
                return JSON.stringify(e).length
            }, Oh.prototype.isPinned = function(t, e, n) { var r = this; return Uo.or([function() { return r.persistence.mutationQueuesContainKey(t, e) }, function() { return Uo.resolve(r.inMemoryPins.containsKey(e)) }, function() { return r.persistence.getTargetCache().containsKey(t, e) }, function() { var t = r.orphanedSequenceNumbers.get(e); return Uo.resolve(void 0 !== t && n < t) }]) }, Oh.prototype.getCacheSize = function(t) { return this.persistence.getRemoteDocumentCache().getSize(t) }, Oh);

            function Oh(t, e, n) { this.persistence = t, this.serializer = e, this.inMemoryPins = null, this.orphanedSequenceNumbers = new zs(function(t) { return oo(t.path) }), this.garbageCollector = new nc(this, n) }
            var Lh = (Ph.prototype.reset = function() { this.currentBaseMs = 0 }, Ph.prototype.resetToMax = function() { this.currentBaseMs = this.maxDelayMs }, Ph.prototype.backoffAndRun = function(t) {
                var e = this;
                this.cancel();
                var n = Math.floor(this.currentBaseMs + this.jitterDelayMs()),
                    r = Math.max(0, Date.now() - this.lastAttemptTime),
                    i = Math.max(0, n - r);
                0 < this.currentBaseMs && Fr("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.currentBaseMs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.timerPromise = this.queue.enqueueAfterDelay(this.timerId, i, function() { return e.lastAttemptTime = Date.now(), t() }), this.currentBaseMs *= this.backoffFactor, this.currentBaseMs < this.initialDelayMs && (this.currentBaseMs = this.initialDelayMs), this.currentBaseMs > this.maxDelayMs && (this.currentBaseMs = this.maxDelayMs)
            }, Ph.prototype.cancel = function() { null !== this.timerPromise && (this.timerPromise.cancel(), this.timerPromise = null) }, Ph.prototype.jitterDelayMs = function() { return (Math.random() - .5) * this.currentBaseMs }, Ph);

            function Ph(t, e, n, r, i) { void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.queue = t, this.timerId = e, this.initialDelayMs = n, this.backoffFactor = r, this.maxDelayMs = i, this.currentBaseMs = 0, this.timerPromise = null, this.lastAttemptTime = Date.now(), this.reset() }
            var xh, Fh, qh = "PersistentStream";
            (Fh = xh = xh || {})[Fh.Initial = 0] = "Initial", Fh[Fh.Starting = 1] = "Starting", Fh[Fh.Open = 2] = "Open", Fh[Fh.Error = 3] = "Error", Fh[Fh.Backoff = 4] = "Backoff";
            var Vh = (Bh.prototype.isStarted = function() { return this.state === xh.Starting || this.state === xh.Open || this.state === xh.Backoff }, Bh.prototype.isOpen = function() { return this.state === xh.Open }, Bh.prototype.start = function() { this.state !== xh.Error ? (Ur(this.state === xh.Initial, "Already started"), this.auth()) : this.performBackoff() }, Bh.prototype.stop = function() {
                return p(this, void 0, void 0, function() {
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return this.isStarted() ? [4, this.close(xh.Initial)] : [3, 2];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, Bh.prototype.inhibitBackoff = function() { Ur(!this.isStarted(), "Can only inhibit backoff in a stopped state"), this.state = xh.Initial, this.backoff.reset() }, Bh.prototype.markIdle = function() {
                var t = this;
                this.isOpen() && null === this.idleTimer && (this.idleTimer = this.queue.enqueueAfterDelay(this.idleTimerId, 6e4, function() { return t.handleIdleCloseTimer() }))
            }, Bh.prototype.sendRequest = function(t) { this.cancelIdleCheck(), this.stream.send(t) }, Bh.prototype.handleIdleCloseTimer = function() { return p(this, void 0, void 0, function() { return m(this, function(t) { return this.isOpen() ? [2, this.close(xh.Initial)] : [2] }) }) }, Bh.prototype.cancelIdleCheck = function() { this.idleTimer && (this.idleTimer.cancel(), this.idleTimer = null) }, Bh.prototype.close = function(e, n) {
                return p(this, void 0, void 0, function() {
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return Ur(this.isStarted(), "Only started streams should be closed."), Ur(e === xh.Error || Ic(n), "Can't provide an error when not in an error state."), this.cancelIdleCheck(), this.backoff.cancel(), this.closeCount++, e !== xh.Error ? this.backoff.reset() : n && n.code === Wr.RESOURCE_EXHAUSTED ? (qr(n.toString()), qr("Using maximum backoff delay to prevent overloading the backend."), this.backoff.resetToMax()) : n && n.code === Wr.UNAUTHENTICATED && this.credentialsProvider.invalidateToken(), null !== this.stream && (this.tearDown(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.onClose(n)];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }, Bh.prototype.tearDown = function() {}, Bh.prototype.auth = function() {
                var n = this;
                Ur(this.state === xh.Initial, "Must be in initial state to auth"), this.state = xh.Starting;
                var t = this.getCloseGuardedDispatcher(this.closeCount),
                    e = this.closeCount;
                this.credentialsProvider.getToken().then(function(t) { n.closeCount === e && n.startStream(t) }, function(e) { t(function() { var t = new zr(Wr.UNKNOWN, "Fetching auth token failed: " + e.message); return n.handleStreamClose(t) }) })
            }, Bh.prototype.startStream = function(t) {
                var e = this;
                Ur(this.state === xh.Starting, "Trying to start stream in a non-starting state");
                var n = this.getCloseGuardedDispatcher(this.closeCount);
                this.stream = this.startRpc(t), this.stream.onOpen(function() { n(function() { return Ur(e.state === xh.Starting, "Expected stream to be in state Starting, but was " + e.state), e.state = xh.Open, e.listener.onOpen() }) }), this.stream.onClose(function(t) { n(function() { return e.handleStreamClose(t) }) }), this.stream.onMessage(function(t) { n(function() { return e.onMessage(t) }) })
            }, Bh.prototype.performBackoff = function() {
                var t = this;
                Ur(this.state === xh.Error, "Should only perform backoff when in Error state"), this.state = xh.Backoff, this.backoff.backoffAndRun(function() { return p(t, void 0, void 0, function() { return m(this, function(t) { return Ur(this.state === xh.Backoff, "Backoff elapsed but state is now: " + this.state), this.state = xh.Initial, this.start(), Ur(this.isStarted(), "PersistentStream should have started"), [2] }) }) })
            }, Bh.prototype.handleStreamClose = function(t) { return Ur(this.isStarted(), "Can't handle server close on non-started stream"), Fr(qh, "close with error: " + t), this.stream = null, this.close(xh.Error, t) }, Bh.prototype.getCloseGuardedDispatcher = function(e) { var n = this; return function(t) { n.queue.enqueueAndForget(function() { return n.closeCount === e ? t() : (Fr(qh, "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()) }) } }, Bh);

            function Bh(t, e, n, r, i, o) { this.queue = t, this.idleTimerId = n, this.connection = r, this.credentialsProvider = i, this.listener = o, this.state = xh.Initial, this.closeCount = 0, this.idleTimer = null, this.stream = null, this.backoff = new Lh(t, e) }
            var Uh, Kh = (t(Qh, Uh = Vh), Qh.prototype.startRpc = function(t) { return this.connection.openStream("Listen", t) }, Qh.prototype.onMessage = function(t) {
                this.backoff.reset();
                var e = this.serializer.fromWatchChange(t),
                    n = this.serializer.versionFromListenResponse(t);
                return this.listener.onWatchChange(e, n)
            }, Qh.prototype.watch = function(t) {
                var e = {};
                e.database = this.serializer.encodedDatabaseId, e.addTarget = this.serializer.toTarget(t);
                var n = this.serializer.toListenRequestLabels(t);
                n && (e.labels = n), this.sendRequest(e)
            }, Qh.prototype.unwatch = function(t) {
                var e = {};
                e.database = this.serializer.encodedDatabaseId, e.removeTarget = t, this.sendRequest(e)
            }, Qh);

            function Qh(t, e, n, r, i) { var o = Uh.call(this, t, Hi.ListenStreamConnectionBackoff, Hi.ListenStreamIdle, e, n, i) || this; return o.serializer = r, o }
            var jh, Gh = (t(Wh, jh = Vh), Object.defineProperty(Wh.prototype, "handshakeComplete", { get: function() { return this.handshakeComplete_ }, enumerable: !0, configurable: !0 }), Wh.prototype.start = function() { this.handshakeComplete_ = !1, jh.prototype.start.call(this) }, Wh.prototype.tearDown = function() { this.handshakeComplete_ && this.writeMutations([]) }, Wh.prototype.startRpc = function(t) { return this.connection.openStream("Write", t) }, Wh.prototype.onMessage = function(t) {
                if (Ur(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = t.streamToken, this.handshakeComplete_) {
                    this.backoff.reset();
                    var e = this.serializer.fromWriteResults(t.writeResults, t.commitTime),
                        n = this.serializer.fromVersion(t.commitTime);
                    return this.listener.onMutationResult(n, e)
                }
                return Ur(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), this.handshakeComplete_ = !0, this.listener.onHandshakeComplete()
            }, Wh.prototype.writeHandshake = function() {
                Ur(this.isOpen(), "Writing handshake requires an opened stream"), Ur(!this.handshakeComplete_, "Handshake already completed");
                var t = {};
                t.database = this.serializer.encodedDatabaseId, this.sendRequest(t)
            }, Wh.prototype.writeMutations = function(t) {
                var e = this;
                Ur(this.isOpen(), "Writing mutations requires an opened stream"), Ur(this.handshakeComplete_, "Handshake must be complete before writing mutations"), Ur(0 < this.lastStreamToken.length, "Trying to write mutation without a token");
                var n = { streamToken: this.lastStreamToken, writes: t.map(function(t) { return e.serializer.toMutation(t) }) };
                this.sendRequest(n)
            }, Wh);

            function Wh(t, e, n, r, i) { var o = jh.call(this, t, Hi.WriteStreamConnectionBackoff, Hi.WriteStreamIdle, e, n, i) || this; return o.serializer = r, o.handshakeComplete_ = !1, o.lastStreamToken = jr(), o }
            var zh = (Hh.prototype.newPersistentWriteStream = function(t) { return new Gh(this.queue, this.connection, this.credentials, this.serializer, t) }, Hh.prototype.newPersistentWatchStream = function(t) { return new Kh(this.queue, this.connection, this.credentials, this.serializer, t) }, Hh.prototype.commit = function(t) {
                var e = this,
                    n = { database: this.serializer.encodedDatabaseId, writes: t.map(function(t) { return e.serializer.toMutation(t) }) };
                return this.invokeRPC("Commit", n).then(function(t) { return e.serializer.fromWriteResults(t.writeResults, t.commitTime) })
            }, Hh.prototype.lookup = function(e) {
                var i = this,
                    t = { database: this.serializer.encodedDatabaseId, documents: e.map(function(t) { return i.serializer.toName(t) }) };
                return this.invokeStreamingRPC("BatchGetDocuments", t).then(function(t) {
                    var n = No();
                    t.forEach(function(t) {
                        var e = i.serializer.fromMaybeDocument(t);
                        n = n.insert(e.key, e)
                    });
                    var r = [];
                    return e.forEach(function(t) {
                        var e = n.get(t);
                        Ur(!!e, "Missing entity in write response for " + t), r.push(e)
                    }), r
                })
            }, Hh.prototype.invokeRPC = function(e, n) { var r = this; return this.credentials.getToken().then(function(t) { return r.connection.invokeRPC(e, n, t) }).catch(function(t) { throw t.code === Wr.UNAUTHENTICATED && r.credentials.invalidateToken(), t }) }, Hh.prototype.invokeStreamingRPC = function(e, n) { var r = this; return this.credentials.getToken().then(function(t) { return r.connection.invokeStreamingRPC(e, n, t) }).catch(function(t) { throw t.code === Wr.UNAUTHENTICATED && r.credentials.invalidateToken(), t }) }, Hh);

            function Hh(t, e, n, r) { this.queue = t, this.connection = e, this.credentials = n, this.serializer = r }
            var Yh, Jh, Xh, Zh, $h = (tl.prototype.lookup = function(r) {
                return p(this, void 0, void 0, function() {
                    var e, n = this;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (this.ensureCommitNotCalled(), 0 < this.mutations.length) throw new zr(Wr.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                                return [4, this.datastore.lookup(r)];
                            case 1:
                                return (e = t.sent()).forEach(function(t) { t instanceof Ks || t instanceof Vs ? n.recordVersion(t) : Br("Document in a transaction was a " + t.constructor.name) }), [2, e]
                        }
                    })
                })
            }, tl.prototype.set = function(t, e) { this.write(e.toMutations(t, this.precondition(t))), this.writtenDocs.add(t) }, tl.prototype.update = function(t, e) {
                try { this.write(e.toMutations(t, this.preconditionForUpdate(t))) } catch (t) { this.lastWriteError = t }
                this.writtenDocs.add(t)
            }, tl.prototype.delete = function(t) { this.write([new ja(t, this.precondition(t))]), this.writtenDocs.add(t) }, tl.prototype.commit = function() {
                return p(this, void 0, void 0, function() {
                    var e;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (this.ensureCommitNotCalled(), this.lastWriteError) throw this.lastWriteError;
                                if (e = this.readVersions, this.mutations.forEach(function(t) { e = e.remove(t.key) }), !e.isEmpty()) throw new zr(Wr.INVALID_ARGUMENT, "Every document read in a transaction must also be written.");
                                return [4, this.datastore.commit(this.mutations)];
                            case 1:
                                return t.sent(), this.committed = !0, [2]
                        }
                    })
                })
            }, tl.prototype.recordVersion = function(t) {
                var e;
                if (t instanceof Vs) e = t.version;
                else {
                    if (!(t instanceof Ks)) throw Br("Document in a transaction was a " + t.constructor.name);
                    e = lo.forDeletedDoc()
                }
                var n = this.readVersions.get(t.key);
                if (null !== n) { if (!e.isEqual(n)) throw new zr(Wr.ABORTED, "Document version changed between two reads.") } else this.readVersions = this.readVersions.insert(t.key, e)
            }, tl.prototype.precondition = function(t) { var e = this.readVersions.get(t); return !this.writtenDocs.has(t) && e ? Da.updateTime(e) : Da.NONE }, tl.prototype.preconditionForUpdate = function(t) { var e = this.readVersions.get(t); if (this.writtenDocs.has(t) || !e) return Da.exists(!0); if (e.isEqual(lo.forDeletedDoc())) throw new zr(Wr.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); return Da.updateTime(e) }, tl.prototype.write = function(t) { this.ensureCommitNotCalled(), this.mutations = this.mutations.concat(t) }, tl.prototype.ensureCommitNotCalled = function() { Ur(!this.committed, "A transaction object cannot be used after its update callback has been invoked.") }, tl);

            function tl(t) { this.datastore = t, this.readVersions = _o(), this.mutations = [], this.committed = !1, this.lastWriteError = null, this.writtenDocs = new Set }(Jh = Yh = Yh || {})[Jh.Unknown = 0] = "Unknown", Jh[Jh.Online = 1] = "Online", Jh[Jh.Offline = 2] = "Offline", (Zh = Xh = Xh || {})[Zh.RemoteStore = 0] = "RemoteStore", Zh[Zh.SharedClientState = 1] = "SharedClientState";
            var el, nl, rl = (il.prototype.handleWatchStreamStart = function() {
                var t = this;
                0 === this.watchStreamFailures && (this.setAndBroadcast(Yh.Unknown), Ur(null === this.onlineStateTimer, "onlineStateTimer shouldn't be started yet"), this.onlineStateTimer = this.asyncQueue.enqueueAfterDelay(Hi.OnlineStateTimeout, 1e4, function() { return t.onlineStateTimer = null, Ur(t.state === Yh.Unknown, "Timer should be canceled if we transitioned to a different state."), t.logClientOfflineWarningIfNecessary("Backend didn't respond within 10 seconds."), t.setAndBroadcast(Yh.Offline), Promise.resolve() }))
            }, il.prototype.handleWatchStreamFailure = function(t) { this.state === Yh.Online ? (this.setAndBroadcast(Yh.Unknown), Ur(0 === this.watchStreamFailures, "watchStreamFailures must be 0"), Ur(null === this.onlineStateTimer, "onlineStateTimer must be null")) : (this.watchStreamFailures++, 1 <= this.watchStreamFailures && (this.clearOnlineStateTimer(), this.logClientOfflineWarningIfNecessary("Connection failed 1 times. Most recent error: " + t.toString()), this.setAndBroadcast(Yh.Offline))) }, il.prototype.set = function(t) { this.clearOnlineStateTimer(), this.watchStreamFailures = 0, t === Yh.Online && (this.shouldWarnClientIsOffline = !1), this.setAndBroadcast(t) }, il.prototype.setAndBroadcast = function(t) { t !== this.state && (this.state = t, this.onlineStateHandler(t)) }, il.prototype.logClientOfflineWarningIfNecessary = function(t) {
                var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                this.shouldWarnClientIsOffline ? (qr(e), this.shouldWarnClientIsOffline = !1) : Fr("OnlineStateTracker", e)
            }, il.prototype.clearOnlineStateTimer = function() { null !== this.onlineStateTimer && (this.onlineStateTimer.cancel(), this.onlineStateTimer = null) }, il);

            function il(t, e) { this.asyncQueue = t, this.onlineStateHandler = e, this.state = Yh.Unknown, this.watchStreamFailures = 0, this.onlineStateTimer = null, this.shouldWarnClientIsOffline = !0 }

            function ol(t) {
                switch (t) {
                    case Wr.OK:
                        return Br("Treated status OK as error");
                    case Wr.CANCELLED:
                    case Wr.UNKNOWN:
                    case Wr.DEADLINE_EXCEEDED:
                    case Wr.RESOURCE_EXHAUSTED:
                    case Wr.INTERNAL:
                    case Wr.UNAVAILABLE:
                    case Wr.UNAUTHENTICATED:
                        return !1;
                    case Wr.INVALID_ARGUMENT:
                    case Wr.NOT_FOUND:
                    case Wr.ALREADY_EXISTS:
                    case Wr.PERMISSION_DENIED:
                    case Wr.FAILED_PRECONDITION:
                    case Wr.ABORTED:
                    case Wr.OUT_OF_RANGE:
                    case Wr.UNIMPLEMENTED:
                    case Wr.DATA_LOSS:
                        return !0;
                    default:
                        return Br("Unknown status code: " + t)
                }
            }

            function al(t) {
                if (void 0 === t) return qr("GRPC error has no .code"), Wr.UNKNOWN;
                switch (t) {
                    case el.OK:
                        return Wr.OK;
                    case el.CANCELLED:
                        return Wr.CANCELLED;
                    case el.UNKNOWN:
                        return Wr.UNKNOWN;
                    case el.DEADLINE_EXCEEDED:
                        return Wr.DEADLINE_EXCEEDED;
                    case el.RESOURCE_EXHAUSTED:
                        return Wr.RESOURCE_EXHAUSTED;
                    case el.INTERNAL:
                        return Wr.INTERNAL;
                    case el.UNAVAILABLE:
                        return Wr.UNAVAILABLE;
                    case el.UNAUTHENTICATED:
                        return Wr.UNAUTHENTICATED;
                    case el.INVALID_ARGUMENT:
                        return Wr.INVALID_ARGUMENT;
                    case el.NOT_FOUND:
                        return Wr.NOT_FOUND;
                    case el.ALREADY_EXISTS:
                        return Wr.ALREADY_EXISTS;
                    case el.PERMISSION_DENIED:
                        return Wr.PERMISSION_DENIED;
                    case el.FAILED_PRECONDITION:
                        return Wr.FAILED_PRECONDITION;
                    case el.ABORTED:
                        return Wr.ABORTED;
                    case el.OUT_OF_RANGE:
                        return Wr.OUT_OF_RANGE;
                    case el.UNIMPLEMENTED:
                        return Wr.UNIMPLEMENTED;
                    case el.DATA_LOSS:
                        return Wr.DATA_LOSS;
                    default:
                        return Br("Unknown status code: " + t)
                }
            }(nl = el = el || {})[nl.OK = 0] = "OK", nl[nl.CANCELLED = 1] = "CANCELLED", nl[nl.UNKNOWN = 2] = "UNKNOWN", nl[nl.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", nl[nl.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", nl[nl.NOT_FOUND = 5] = "NOT_FOUND", nl[nl.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", nl[nl.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", nl[nl.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", nl[nl.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", nl[nl.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", nl[nl.ABORTED = 10] = "ABORTED", nl[nl.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", nl[nl.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", nl[nl.INTERNAL = 13] = "INTERNAL", nl[nl.UNAVAILABLE = 14] = "UNAVAILABLE", nl[nl.DATA_LOSS = 15] = "DATA_LOSS";
            var sl, ul, cl, hl, ll = (fl.emptySet = function(t) { return new fl(t.comparator) }, fl.prototype.has = function(t) { return null != this.keyedMap.get(t) }, fl.prototype.get = function(t) { return this.keyedMap.get(t) }, fl.prototype.first = function() { return this.sortedSet.minKey() }, fl.prototype.last = function() { return this.sortedSet.maxKey() }, fl.prototype.isEmpty = function() { return this.sortedSet.isEmpty() }, fl.prototype.indexOf = function(t) { var e = this.keyedMap.get(t); return e ? this.sortedSet.indexOf(e) : -1 }, Object.defineProperty(fl.prototype, "size", { get: function() { return this.sortedSet.size }, enumerable: !0, configurable: !0 }), fl.prototype.forEach = function(n) { this.sortedSet.inorderTraversal(function(t, e) { return n(t), !1 }) }, fl.prototype.add = function(t) { var e = this.delete(t.key); return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null)) }, fl.prototype.delete = function(t) { var e = this.get(t); return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this }, fl.prototype.isEqual = function(t) {
                if (!(t instanceof fl)) return !1;
                if (this.size !== t.size) return !1;
                for (var e = this.sortedSet.getIterator(), n = t.sortedSet.getIterator(); e.hasNext();) {
                    var r = e.getNext().key,
                        i = n.getNext().key;
                    if (!r.isEqual(i)) return !1
                }
                return !0
            }, fl.prototype.toString = function() { var e = []; return this.forEach(function(t) { e.push(t.toString()) }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)" }, fl.prototype.copy = function(t, e) { var n = new fl; return n.comparator = this.comparator, n.keyedMap = t, n.sortedSet = e, n }, fl);

            function fl(n) { this.comparator = n ? function(t, e) { return n(t, e) || Wi.comparator(t.key, e.key) } : function(t, e) { return Wi.comparator(t.key, e.key) }, this.keyedMap = Ro(), this.sortedSet = new po(this.comparator) }(ul = sl = sl || {})[ul.Added = 0] = "Added", ul[ul.Removed = 1] = "Removed", ul[ul.Modified = 2] = "Modified", ul[ul.Metadata = 3] = "Metadata", (hl = cl = cl || {})[hl.Local = 0] = "Local", hl[hl.Synced = 1] = "Synced";
            var pl = (dl.prototype.track = function(t) {
                var e = t.doc.key,
                    n = this.changeMap.get(e);
                n ? t.type !== sl.Added && n.type === sl.Metadata ? this.changeMap = this.changeMap.insert(e, t) : t.type === sl.Metadata && n.type !== sl.Removed ? this.changeMap = this.changeMap.insert(e, { type: n.type, doc: t.doc }) : t.type === sl.Modified && n.type === sl.Modified ? this.changeMap = this.changeMap.insert(e, { type: sl.Modified, doc: t.doc }) : t.type === sl.Modified && n.type === sl.Added ? this.changeMap = this.changeMap.insert(e, { type: sl.Added, doc: t.doc }) : t.type === sl.Removed && n.type === sl.Added ? this.changeMap = this.changeMap.remove(e) : t.type === sl.Removed && n.type === sl.Modified ? this.changeMap = this.changeMap.insert(e, { type: sl.Removed, doc: n.doc }) : t.type === sl.Added && n.type === sl.Removed ? this.changeMap = this.changeMap.insert(e, { type: sl.Modified, doc: t.doc }) : Br("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.changeMap = this.changeMap.insert(e, t)
            }, dl.prototype.getChanges = function() { var n = []; return this.changeMap.inorderTraversal(function(t, e) { n.push(e) }), n }, dl);

            function dl() { this.changeMap = new po(Wi.comparator) }
            var ml = (yl.fromInitialDocuments = function(t, e, n, r) { var i = []; return e.forEach(function(t) { i.push({ type: sl.Added, doc: t }) }), new yl(t, e, ll.emptySet(e), i, n, r, !0, !1) }, Object.defineProperty(yl.prototype, "hasPendingWrites", { get: function() { return !this.mutatedKeys.isEmpty() }, enumerable: !0, configurable: !0 }), yl.prototype.isEqual = function(t) {
                if (!(this.fromCache === t.fromCache && this.syncStateChanged === t.syncStateChanged && this.mutatedKeys.isEqual(t.mutatedKeys) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.oldDocs.isEqual(t.oldDocs))) return !1;
                var e = this.docChanges,
                    n = t.docChanges;
                if (e.length !== n.length) return !1;
                for (var r = 0; r < e.length; r++)
                    if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                return !0
            }, yl);

            function yl(t, e, n, r, i, o, a, s) { this.query = t, this.docs = e, this.oldDocs = n, this.docChanges = r, this.mutatedKeys = i, this.fromCache = o, this.syncStateChanged = a, this.excludesMetadataChanges = s }
            var gl = (vl.createSynthesizedRemoteEventForCurrentChange = function(t, e) { var n, r = ((n = {})[t] = bl.createSynthesizedTargetChangeForCurrentChange(t, e), n); return new vl(lo.MIN, r, xo(), No(), Lo()) }, vl);

            function vl(t, e, n, r, i) { this.snapshotVersion = t, this.targetChanges = e, this.targetMismatches = n, this.documentUpdates = r, this.resolvedLimboDocuments = i }
            var bl = (wl.createSynthesizedTargetChangeForCurrentChange = function(t, e) { return new wl(jr(), e, Lo(), Lo(), Lo()) }, wl);

            function wl(t, e, n, r, i) { this.resumeToken = t, this.current = e, this.addedDocuments = n, this.modifiedDocuments = r, this.removedDocuments = i }
            var Tl, Sl, El = function(t, e, n, r) { this.updatedTargetIds = t, this.removedTargetIds = e, this.key = n, this.newDoc = r },
                Il = function(t, e) { this.targetId = t, this.existenceFilter = e };
            (Sl = Tl = Tl || {})[Sl.NoChange = 0] = "NoChange", Sl[Sl.Added = 1] = "Added", Sl[Sl.Removed = 2] = "Removed", Sl[Sl.Current = 3] = "Current", Sl[Sl.Reset = 4] = "Reset";
            var Cl = function(t, e, n, r) { void 0 === n && (n = jr()), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r },
                Dl = (Object.defineProperty(Nl.prototype, "current", { get: function() { return this._current }, enumerable: !0, configurable: !0 }), Object.defineProperty(Nl.prototype, "resumeToken", { get: function() { return this._resumeToken }, enumerable: !0, configurable: !0 }), Object.defineProperty(Nl.prototype, "isPending", { get: function() { return 0 !== this.pendingResponses }, enumerable: !0, configurable: !0 }), Object.defineProperty(Nl.prototype, "hasPendingChanges", { get: function() { return this._hasPendingChanges }, enumerable: !0, configurable: !0 }), Nl.prototype.updateResumeToken = function(t) { 0 < t.length && (this._hasPendingChanges = !0, this._resumeToken = t) }, Nl.prototype.toTargetChange = function() {
                    var n = Lo(),
                        r = Lo(),
                        i = Lo();
                    return this.documentChanges.forEach(function(t, e) {
                        switch (e) {
                            case sl.Added:
                                n = n.add(t);
                                break;
                            case sl.Modified:
                                r = r.add(t);
                                break;
                            case sl.Removed:
                                i = i.add(t);
                                break;
                            default:
                                Br("Encountered invalid change type: " + e)
                        }
                    }), new bl(this._resumeToken, this._current, n, r, i)
                }, Nl.prototype.clearPendingChanges = function() { this._hasPendingChanges = !1, this.documentChanges = Ml() }, Nl.prototype.addDocumentChange = function(t, e) { this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.insert(t, e) }, Nl.prototype.removeDocumentChange = function(t) { this._hasPendingChanges = !0, this.documentChanges = this.documentChanges.remove(t) }, Nl.prototype.recordPendingTargetRequest = function() { this.pendingResponses += 1 }, Nl.prototype.recordTargetResponse = function() { this.pendingResponses -= 1 }, Nl.prototype.markCurrent = function() { this._hasPendingChanges = !0, this._current = !0 }, Nl);

            function Nl() { this.pendingResponses = 0, this.documentChanges = Ml(), this._resumeToken = jr(), this._current = !1, this._hasPendingChanges = !0 }
            var Al = (kl.prototype.handleDocumentChange = function(t) {
                for (var e = 0, n = t.updatedTargetIds; e < n.length; e++) {
                    var r = n[e];
                    t.newDoc instanceof Vs ? this.addDocumentToTarget(r, t.newDoc) : t.newDoc instanceof Ks && this.removeDocumentFromTarget(r, t.key, t.newDoc)
                }
                for (var i = 0, o = t.removedTargetIds; i < o.length; i++) r = o[i], this.removeDocumentFromTarget(r, t.key, t.newDoc)
            }, kl.prototype.handleTargetChange = function(n) {
                var r = this;
                this.forEachTarget(n, function(t) {
                    var e = r.ensureTargetState(t);
                    switch (n.state) {
                        case Tl.NoChange:
                            r.isActiveTarget(t) && e.updateResumeToken(n.resumeToken);
                            break;
                        case Tl.Added:
                            e.recordTargetResponse(), e.isPending || e.clearPendingChanges(), e.updateResumeToken(n.resumeToken);
                            break;
                        case Tl.Removed:
                            e.recordTargetResponse(), e.isPending || r.removeTarget(t), Ur(!n.cause, "WatchChangeAggregator does not handle errored targets");
                            break;
                        case Tl.Current:
                            r.isActiveTarget(t) && (e.markCurrent(), e.updateResumeToken(n.resumeToken));
                            break;
                        case Tl.Reset:
                            r.isActiveTarget(t) && (r.resetTarget(t), e.updateResumeToken(n.resumeToken));
                            break;
                        default:
                            Br("Unknown target watch change state: " + n.state)
                    }
                })
            }, kl.prototype.forEachTarget = function(t, e) { 0 < t.targetIds.length ? t.targetIds.forEach(e) : Zr(this.targetStates, e) }, kl.prototype.handleExistenceFilter = function(t) {
                var e = t.targetId,
                    n = t.existenceFilter.count,
                    r = this.targetDataForActiveTarget(e);
                if (r) {
                    var i = r.target;
                    if (i.isDocumentQuery())
                        if (0 === n) {
                            var o = new Wi(i.path);
                            this.removeDocumentFromTarget(e, o, new Ks(o, lo.forDeletedDoc()))
                        } else Ur(1 === n, "Single document existence filter with count: " + n);
                    else this.getCurrentDocumentCountForTarget(e) !== n && (this.resetTarget(e), this.pendingTargetResets = this.pendingTargetResets.add(e))
                }
            }, kl.prototype.createRemoteEvent = function(i) {
                var o = this,
                    a = {};
                Zr(this.targetStates, function(t, e) {
                    var n = o.targetDataForActiveTarget(t);
                    if (n) {
                        if (e.current && n.target.isDocumentQuery()) {
                            var r = new Wi(n.target.path);
                            null !== o.pendingDocumentUpdates.get(r) || o.targetContainsDocument(t, r) || o.removeDocumentFromTarget(t, r, new Ks(r, i))
                        }
                        e.hasPendingChanges && (a[t] = e.toTargetChange(), e.clearPendingChanges())
                    }
                });
                var r = Lo();
                this.pendingDocumentTargetMapping.forEach(function(t, e) {
                    var n = !0;
                    e.forEachWhile(function(t) { var e = o.targetDataForActiveTarget(t); return !e || e.purpose === qu.LimboResolution || (n = !1) }), n && (r = r.add(t))
                });
                var t = new gl(i, a, this.pendingTargetResets, this.pendingDocumentUpdates, r);
                return this.pendingDocumentUpdates = No(), this.pendingDocumentTargetMapping = Rl(), this.pendingTargetResets = new So(Si), t
            }, kl.prototype.addDocumentToTarget = function(t, e) {
                if (this.isActiveTarget(t)) {
                    var n = this.targetContainsDocument(t, e.key) ? sl.Modified : sl.Added;
                    this.ensureTargetState(t).addDocumentChange(e.key, n), this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e.key, e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e.key, this.ensureDocumentTargetMapping(e.key).add(t))
                }
            }, kl.prototype.removeDocumentFromTarget = function(t, e, n) {
                if (this.isActiveTarget(t)) {
                    var r = this.ensureTargetState(t);
                    this.targetContainsDocument(t, e) ? r.addDocumentChange(e, sl.Removed) : r.removeDocumentChange(e), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(e, this.ensureDocumentTargetMapping(e).delete(t)), n && (this.pendingDocumentUpdates = this.pendingDocumentUpdates.insert(e, n))
                }
            }, kl.prototype.removeTarget = function(t) { delete this.targetStates[t] }, kl.prototype.getCurrentDocumentCountForTarget = function(t) { var e = this.ensureTargetState(t).toTargetChange(); return this.metadataProvider.getRemoteKeysForTarget(t).size + e.addedDocuments.size - e.removedDocuments.size }, kl.prototype.recordPendingTargetRequest = function(t) { this.ensureTargetState(t).recordPendingTargetRequest() }, kl.prototype.ensureTargetState = function(t) { return this.targetStates[t] || (this.targetStates[t] = new Dl), this.targetStates[t] }, kl.prototype.ensureDocumentTargetMapping = function(t) { var e = this.pendingDocumentTargetMapping.get(t); return e || (e = new So(Si), this.pendingDocumentTargetMapping = this.pendingDocumentTargetMapping.insert(t, e)), e }, kl.prototype.isActiveTarget = function(t) { var e = null !== this.targetDataForActiveTarget(t); return e || Fr("WatchChangeAggregator", "Detected inactive target", t), e }, kl.prototype.targetDataForActiveTarget = function(t) { var e = this.targetStates[t]; return e && e.isPending ? null : this.metadataProvider.getTargetDataForTarget(t) }, kl.prototype.resetTarget = function(e) {
                var n = this;
                Ur(!this.targetStates[e].isPending, "Should only reset active targets"), this.targetStates[e] = new Dl, this.metadataProvider.getRemoteKeysForTarget(e).forEach(function(t) { n.removeDocumentFromTarget(e, t, null) })
            }, kl.prototype.targetContainsDocument = function(t, e) { return this.metadataProvider.getRemoteKeysForTarget(t).has(e) }, kl);

            function kl(t) { this.metadataProvider = t, this.targetStates = {}, this.pendingDocumentUpdates = No(), this.pendingDocumentTargetMapping = Rl(), this.pendingTargetResets = new So(Si) }

            function Rl() { return new po(Wi.comparator) }

            function Ml() { return new po(Wi.comparator) }
            var _l = "RemoteStore",
                Ol = (Ll.prototype.start = function() { return this.enableNetwork() }, Ll.prototype.enableNetwork = function() {
                    return p(this, void 0, void 0, function() {
                        var e;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !0, this.canUseNetwork() ? (e = this.writeStream, [4, this.localStore.getLastStreamToken()]) : [3, 3];
                                case 1:
                                    return e.lastStreamToken = t.sent(), this.shouldStartWatchStream() ? this.startWatchStream() : this.onlineStateTracker.set(Yh.Unknown), [4, this.fillWritePipeline()];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, Ll.prototype.disableNetwork = function() {
                    return p(this, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                case 1:
                                    return t.sent(), this.onlineStateTracker.set(Yh.Offline), [2]
                            }
                        })
                    })
                }, Ll.prototype.disableNetworkInternal = function() {
                    return p(this, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.writeStream.stop()];
                                case 1:
                                    return t.sent(), [4, this.watchStream.stop()];
                                case 2:
                                    return t.sent(), 0 < this.writePipeline.length && (Fr(_l, "Stopping write stream with " + this.writePipeline.length + " pending writes"), this.writePipeline = []), this.cleanUpWatchStreamState(), [2]
                            }
                        })
                    })
                }, Ll.prototype.shutdown = function() {
                    return p(this, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return Fr(_l, "RemoteStore shutting down."), this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                case 1:
                                    return t.sent(), this.connectivityMonitor.shutdown(), this.onlineStateTracker.set(Yh.Unknown), [2]
                            }
                        })
                    })
                }, Ll.prototype.listen = function(t) { Jr(this.listenTargets, t.targetId) || (this.listenTargets[t.targetId] = t, this.shouldStartWatchStream() ? this.startWatchStream() : this.watchStream.isOpen() && this.sendWatchRequest(t)) }, Ll.prototype.unlisten = function(t) { Ur(Jr(this.listenTargets, t), "unlisten called on target no currently watched: " + t), delete this.listenTargets[t], this.watchStream.isOpen() && this.sendUnwatchRequest(t), ti(this.listenTargets) && (this.watchStream.isOpen() ? this.watchStream.markIdle() : this.canUseNetwork() && this.onlineStateTracker.set(Yh.Unknown)) }, Ll.prototype.getTargetDataForTarget = function(t) { return this.listenTargets[t] || null }, Ll.prototype.getRemoteKeysForTarget = function(t) { return this.syncEngine.getRemoteKeysForTarget(t) }, Ll.prototype.sendWatchRequest = function(t) { this.watchChangeAggregator.recordPendingTargetRequest(t.targetId), this.watchStream.watch(t) }, Ll.prototype.sendUnwatchRequest = function(t) { this.watchChangeAggregator.recordPendingTargetRequest(t), this.watchStream.unwatch(t) }, Ll.prototype.startWatchStream = function() { Ur(this.shouldStartWatchStream(), "startWatchStream() called when shouldStartWatchStream() is false."), this.watchChangeAggregator = new Al(this), this.watchStream.start(), this.onlineStateTracker.handleWatchStreamStart() }, Ll.prototype.shouldStartWatchStream = function() { return this.canUseNetwork() && !this.watchStream.isStarted() && !ti(this.listenTargets) }, Ll.prototype.canUseNetwork = function() { return this.isPrimary && this.networkEnabled }, Ll.prototype.cleanUpWatchStreamState = function() { this.watchChangeAggregator = null }, Ll.prototype.onWatchStreamOpen = function() { return p(this, void 0, void 0, function() { var n = this; return m(this, function(t) { return Zr(this.listenTargets, function(t, e) { n.sendWatchRequest(e) }), [2] }) }) }, Ll.prototype.onWatchStreamClose = function(e) { return p(this, void 0, void 0, function() { return m(this, function(t) { return void 0 === e && Ur(!this.shouldStartWatchStream(), "Watch stream was stopped gracefully while still needed."), this.cleanUpWatchStreamState(), this.shouldStartWatchStream() ? (this.onlineStateTracker.handleWatchStreamFailure(e), this.startWatchStream()) : this.onlineStateTracker.set(Yh.Unknown), [2] }) }) }, Ll.prototype.onWatchStreamChange = function(n, r) {
                    return p(this, void 0, void 0, function() {
                        var e;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.onlineStateTracker.set(Yh.Online), n instanceof Cl && n.state === Tl.Removed && n.cause ? [2, this.handleTargetError(n)] : (n instanceof El ? this.watchChangeAggregator.handleDocumentChange(n) : n instanceof Il ? this.watchChangeAggregator.handleExistenceFilter(n) : (Ur(n instanceof Cl, "Expected watchChange to be an instance of WatchTargetChange"), this.watchChangeAggregator.handleTargetChange(n)), r.isEqual(lo.MIN) ? [3, 3] : [4, this.localStore.getLastRemoteSnapshotVersion()]);
                                case 1:
                                    return e = t.sent(), 0 <= r.compareTo(e) ? [4, this.raiseWatchSnapshot(r)] : [3, 3];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, Ll.prototype.raiseWatchSnapshot = function(r) {
                    var i = this;
                    Ur(!r.isEqual(lo.MIN), "Can't raise event for unknown SnapshotVersion");
                    var t = this.watchChangeAggregator.createRemoteEvent(r);
                    return Zr(t.targetChanges, function(t, e) {
                        if (0 < e.resumeToken.length) {
                            var n = i.listenTargets[t];
                            n && (i.listenTargets[t] = n.withResumeToken(e.resumeToken, r))
                        }
                    }), t.targetMismatches.forEach(function(t) {
                        var e = i.listenTargets[t];
                        if (e) {
                            i.listenTargets[t] = e.withResumeToken(jr(), e.snapshotVersion), i.sendUnwatchRequest(t);
                            var n = new ju(e.target, t, qu.ExistenceFilterMismatch, e.sequenceNumber);
                            i.sendWatchRequest(n)
                        }
                    }), this.syncEngine.applyRemoteEvent(t)
                }, Ll.prototype.handleTargetError = function(t) {
                    var n = this;
                    Ur(!!t.cause, "Handling target error without a cause");
                    var r = t.cause,
                        i = Promise.resolve();
                    return t.targetIds.forEach(function(e) { i = i.then(function() { return p(n, void 0, void 0, function() { return m(this, function(t) { return Jr(this.listenTargets, e) ? (delete this.listenTargets[e], this.watchChangeAggregator.removeTarget(e), [2, this.syncEngine.rejectListen(e, r)]) : [2] }) }) }) }), i
                }, Ll.prototype.fillWritePipeline = function() {
                    return p(this, void 0, void 0, function() {
                        var e, n;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.canAddToWritePipeline() ? (e = 0 < this.writePipeline.length ? this.writePipeline[this.writePipeline.length - 1].batchId : -1, [4, this.localStore.nextMutationBatch(e)]) : [3, 4];
                                case 1:
                                    return null !== (n = t.sent()) ? [3, 2] : (0 === this.writePipeline.length && this.writeStream.markIdle(), [3, 4]);
                                case 2:
                                    return this.addToWritePipeline(n), [4, this.fillWritePipeline()];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return this.shouldStartWriteStream() && this.startWriteStream(), [2]
                            }
                        })
                    })
                }, Ll.prototype.canAddToWritePipeline = function() { return this.canUseNetwork() && this.writePipeline.length < 10 }, Ll.prototype.outstandingWrites = function() { return this.writePipeline.length }, Ll.prototype.addToWritePipeline = function(t) { Ur(this.canAddToWritePipeline(), "addToWritePipeline called when pipeline is full"), this.writePipeline.push(t), this.writeStream.isOpen() && this.writeStream.handshakeComplete && this.writeStream.writeMutations(t.mutations) }, Ll.prototype.shouldStartWriteStream = function() { return this.canUseNetwork() && !this.writeStream.isStarted() && 0 < this.writePipeline.length }, Ll.prototype.startWriteStream = function() { Ur(this.shouldStartWriteStream(), "startWriteStream() called when shouldStartWriteStream() is false."), this.writeStream.start() }, Ll.prototype.onWriteStreamOpen = function() { return p(this, void 0, void 0, function() { return m(this, function(t) { return this.writeStream.writeHandshake(), [2] }) }) }, Ll.prototype.onWriteHandshakeComplete = function() {
                    var r = this;
                    return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function() {
                        for (var t = 0, e = r.writePipeline; t < e.length; t++) {
                            var n = e[t];
                            r.writeStream.writeMutations(n.mutations)
                        }
                    }).catch(dc)
                }, Ll.prototype.onMutationResult = function(t, e) {
                    var n = this;
                    Ur(0 < this.writePipeline.length, "Got result for empty write pipeline");
                    var r = this.writePipeline.shift(),
                        i = Vo.from(r, t, e, this.writeStream.lastStreamToken);
                    return this.syncEngine.applySuccessfulWrite(i).then(function() { return n.fillWritePipeline() })
                }, Ll.prototype.onWriteStreamClose = function(n) { return p(this, void 0, void 0, function() { var e = this; return m(this, function(t) { return void 0 === n && Ur(!this.shouldStartWriteStream(), "Write stream was stopped gracefully while still needed."), n && 0 < this.writePipeline.length ? [2, (this.writeStream.handshakeComplete ? this.handleWriteError(n) : this.handleHandshakeError(n)).then(function() { e.shouldStartWriteStream() && e.startWriteStream() })] : [2] }) }) }, Ll.prototype.handleHandshakeError = function(e) { return p(this, void 0, void 0, function() { return m(this, function(t) { return ol(e.code) ? (Fr(_l, "RemoteStore error before completed handshake; resetting stream token: ", this.writeStream.lastStreamToken), this.writeStream.lastStreamToken = jr(), [2, this.localStore.setLastStreamToken(jr()).catch(dc)]) : [2] }) }) }, Ll.prototype.handleWriteError = function(r) { return p(this, void 0, void 0, function() { var e, n = this; return m(this, function(t) { return function(t) { return ol(t) && t !== Wr.ABORTED }(r.code) ? (e = this.writePipeline.shift(), this.writeStream.inhibitBackoff(), [2, this.syncEngine.rejectFailedWrite(e.batchId, r).then(function() { return n.fillWritePipeline() })]) : [2] }) }) }, Ll.prototype.createTransaction = function() { return new $h(this.datastore) }, Ll.prototype.restartNetwork = function() {
                    return p(this, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.disableNetworkInternal()];
                                case 1:
                                    return t.sent(), this.onlineStateTracker.set(Yh.Unknown), [4, this.enableNetwork()];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Ll.prototype.handleCredentialChange = function() {
                    return p(this, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.canUseNetwork() ? (Fr(_l, "RemoteStore restarting streams for new credential"), [4, this.restartNetwork()]) : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }, Ll.prototype.applyPrimaryState = function(e) {
                    return p(this, void 0, void 0, function() {
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return (this.isPrimary = e) && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                                case 1:
                                    return t.sent(), [3, 4];
                                case 2:
                                    return e ? [3, 4] : [4, this.disableNetworkInternal()];
                                case 3:
                                    t.sent(), this.onlineStateTracker.set(Yh.Unknown), t.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, Ll);

            function Ll(t, e, n, r, i) {
                var o = this;
                this.localStore = t, this.datastore = e, this.writePipeline = [], this.listenTargets = {}, this.watchChangeAggregator = null, this.networkEnabled = !1, this.isPrimary = !1, this.connectivityMonitor = i, this.connectivityMonitor.addCallback(function(t) {
                    n.enqueueAndForget(function() {
                        return p(o, void 0, void 0, function() {
                            return m(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.canUseNetwork() ? (Fr(_l, "Restarting streams for network reachability change."), [4, this.restartNetwork()]) : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    })
                }), this.onlineStateTracker = new rl(n, r), this.watchStream = this.datastore.newPersistentWatchStream({ onOpen: this.onWatchStreamOpen.bind(this), onClose: this.onWatchStreamClose.bind(this), onWatchChange: this.onWatchStreamChange.bind(this) }), this.writeStream = this.datastore.newPersistentWriteStream({ onOpen: this.onWriteStreamOpen.bind(this), onClose: this.onWriteStreamClose.bind(this), onHandshakeComplete: this.onWriteHandshakeComplete.bind(this), onMutationResult: this.onMutationResult.bind(this) })
            }
            var Pl = (Object.defineProperty(xl.prototype, "latitude", { get: function() { return this._lat }, enumerable: !0, configurable: !0 }), Object.defineProperty(xl.prototype, "longitude", { get: function() { return this._long }, enumerable: !0, configurable: !0 }), xl.prototype.isEqual = function(t) { return this._lat === t._lat && this._long === t._long }, xl.prototype._compareTo = function(t) { return Si(this._lat, t._lat) || Si(this._long, t._long) }, xl);

            function xl(t, e) {
                if (ni("GeoPoint", arguments, 2), oi("GeoPoint", "number", 1, t), oi("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || 90 < t) throw new zr(Wr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                if (!isFinite(e) || e < -180 || 180 < e) throw new zr(Wr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                this._lat = t, this._long = e
            }
            var Fl = (ql.prototype.applyToLocalView = function(t, e) { return new bs(e, t) }, ql.prototype.applyToRemoteDocument = function(t, e) { return e }, ql.prototype.computeBaseValue = function(t) { return null }, ql.prototype.isEqual = function(t) { return t instanceof ql }, ql.instance = new ql, ql);

            function ql() {}
            var Vl = (Bl.prototype.applyToLocalView = function(t, e) { return this.apply(t) }, Bl.prototype.applyToRemoteDocument = function(t, e) { return this.apply(t) }, Bl.prototype.apply = function(t) { for (var n = Gl(t), e = function(e) { n.find(function(t) { return t.isEqual(e) }) || n.push(e) }, r = 0, i = this.elements; r < i.length; r++) e(i[r]); return new Ls(n) }, Bl.prototype.computeBaseValue = function(t) { return null }, Bl.prototype.isEqual = function(t) { return t instanceof Bl && Ei(t.elements, this.elements) }, Bl);

            function Bl(t) { this.elements = t }
            var Ul = (Kl.prototype.applyToLocalView = function(t, e) { return this.apply(t) }, Kl.prototype.applyToRemoteDocument = function(t, e) { return this.apply(t) }, Kl.prototype.apply = function(t) { for (var n = Gl(t), e = function(e) { n = n.filter(function(t) { return !t.isEqual(e) }) }, r = 0, i = this.elements; r < i.length; r++) e(i[r]); return new Ls(n) }, Kl.prototype.computeBaseValue = function(t) { return null }, Kl.prototype.isEqual = function(t) { return t instanceof Kl && Ei(t.elements, this.elements) }, Kl);

            function Kl(t) { this.elements = t }
            var Ql = (jl.prototype.applyToLocalView = function(t, e) { var n = this.computeBaseValue(t); if (n instanceof ss && this.operand instanceof ss) { var r = n.internalValue + this.operand.internalValue; return new ss(r) } return r = n.internalValue + this.operand.internalValue, new hs(r) }, jl.prototype.applyToRemoteDocument = function(t, e) { return Ur(null !== e, "Didn't receive transformResult for NUMERIC_ADD transform"), e }, jl.prototype.computeBaseValue = function(t) { return t instanceof rs ? t : new ss(0) }, jl.prototype.isEqual = function(t) { return t instanceof jl && this.operand.isEqual(t.operand) }, jl);

            function jl(t) { this.operand = t }

            function Gl(t) { return t instanceof Ls ? t.internalValue.slice() : [] }
            var Wl = (zl.prototype.isEqual = function(t) { return t && t.count === this.count }, zl);

            function zl(t) { this.count = t }
            var Hl, Yl, Jl = ((Hl = {})[$c.ASCENDING.name] = "ASCENDING", Hl[$c.DESCENDING.name] = "DESCENDING", Hl),
                Xl = ((Yl = {})[Oc.LESS_THAN.name] = "LESS_THAN", Yl[Oc.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", Yl[Oc.GREATER_THAN.name] = "GREATER_THAN", Yl[Oc.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", Yl[Oc.EQUAL.name] = "EQUAL", Yl[Oc.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", Yl[Oc.IN.name] = "IN", Yl[Oc.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", Yl),
                Zl = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function $l(t, e) { Ur(!Ic(t), e + " is missing") }

            function tf(t) { return "number" == typeof t ? t : "string" == typeof t ? Number(t) : Br("can't parse " + t) }
            var ef = (nf.prototype.emptyByteString = function() { return this.options.useProto3Json ? "" : new Uint8Array(0) }, nf.prototype.unsafeCastProtoByteString = function(t) { return t }, nf.prototype.fromRpcStatus = function(t) { var e = void 0 === t.code ? Wr.UNKNOWN : al(t.code); return new zr(e, t.message || "") }, nf.prototype.toInt32Value = function(t) { return this.options.useProto3Json || Ic(t) ? t : { value: t } }, nf.prototype.fromInt32Value = function(t) { var e; return Ic(e = "object" == typeof t ? t.value : t) ? null : e }, nf.prototype.toTimestamp = function(t) { return this.options.useProto3Json ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : { seconds: "" + t.seconds, nanos: t.nanoseconds } }, nf.prototype.fromTimestamp = function(t) {
                if ("string" == typeof t) return this.fromIso8601String(t);
                Ur(!!t, "Cannot deserialize null or undefined timestamp.");
                var e = tf(t.seconds || "0"),
                    n = t.nanos || 0;
                return new co(e, n)
            }, nf.prototype.fromIso8601String = function(t) {
                var e = 0,
                    n = Zl.exec(t);
                if (Ur(!!n, "invalid timestamp: " + t), n[1]) {
                    var r = n[1];
                    r = (r + "000000000").substr(0, 9), e = Number(r)
                }
                var i = new Date(t),
                    o = Math.floor(i.getTime() / 1e3);
                return new co(o, e)
            }, nf.prototype.toBytes = function(t) { return this.options.useProto3Json ? t.toBase64() : this.unsafeCastProtoByteString(t.toUint8Array()) }, nf.prototype.fromBlob = function(t) { return "string" == typeof t ? (Ur(this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), Ni.fromBase64String(t)) : (Ur(!this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), Ni.fromUint8Array(t)) }, nf.prototype.toVersion = function(t) { return this.toTimestamp(t.toTimestamp()) }, nf.prototype.fromVersion = function(t) { return Ur(!!t, "Trying to deserialize version that isn't set"), lo.fromTimestamp(this.fromTimestamp(t)) }, nf.prototype.toResourceName = function(t, e) { return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString() }, nf.prototype.fromResourceName = function(t) { var e = Bi.fromString(t); return Ur(this.isValidResourceName(e), "Tried to deserialize invalid key " + e.toString()), e }, nf.prototype.toName = function(t) { return this.toResourceName(this.databaseId, t.path) }, nf.prototype.fromName = function(t) { var e = this.fromResourceName(t); return Ur(e.get(1) === this.databaseId.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.databaseId.projectId), Ur(!e.get(3) && !this.databaseId.database || e.get(3) === this.databaseId.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.databaseId.database), new Wi(this.extractLocalPathFromResourceName(e)) }, nf.prototype.toQueryPath = function(t) { return this.toResourceName(this.databaseId, t) }, nf.prototype.fromQueryPath = function(t) { var e = this.fromResourceName(t); return 4 === e.length ? Bi.EMPTY_PATH : this.extractLocalPathFromResourceName(e) }, Object.defineProperty(nf.prototype, "encodedDatabaseId", { get: function() { return new Bi(["projects", this.databaseId.projectId, "databases", this.databaseId.database]).canonicalString() }, enumerable: !0, configurable: !0 }), nf.prototype.fullyQualifiedPrefixPath = function(t) { return new Bi(["projects", t.projectId, "databases", t.database]) }, nf.prototype.extractLocalPathFromResourceName = function(t) { return Ur(4 < t.length && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), t.popFirst(5) }, nf.prototype.isValidResourceName = function(t) { return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2) }, nf.prototype.toValue = function(t) { if (t instanceof Xa) return { nullValue: "NULL_VALUE" }; if (t instanceof ts) return { booleanValue: t.value() }; if (t instanceof ss) return { integerValue: "" + t.value() }; if (t instanceof hs) { var e = t.value(); if (this.options.useProto3Json) { if (isNaN(e)) return { doubleValue: "NaN" }; if (e === 1 / 0) return { doubleValue: "Infinity" }; if (e === -1 / 0) return { doubleValue: "-Infinity" } } return { doubleValue: t.value() } } return t instanceof ps ? { stringValue: t.value() } : t instanceof Ms ? { mapValue: this.toMapValue(t) } : t instanceof Ls ? { arrayValue: this.toArrayValue(t) } : t instanceof ys ? { timestampValue: this.toTimestamp(t.internalValue) } : t instanceof As ? { geoPointValue: { latitude: t.value().latitude, longitude: t.value().longitude } } : t instanceof Ss ? { bytesValue: this.toBytes(t.value()) } : t instanceof Cs ? { referenceValue: this.toResourceName(t.databaseId, t.key.path) } : Br("Unknown FieldValue " + JSON.stringify(t)) }, nf.prototype.fromValue = function(t) {
                var e = this;
                if ("nullValue" in t) return Xa.INSTANCE;
                if ("booleanValue" in t) return ts.of(t.booleanValue);
                if ("integerValue" in t) return new ss(tf(t.integerValue));
                if ("doubleValue" in t) { if (this.options.useProto3Json) { if ("NaN" === t.doubleValue) return hs.NAN; if ("Infinity" === t.doubleValue) return hs.POSITIVE_INFINITY; if ("-Infinity" === t.doubleValue) return hs.NEGATIVE_INFINITY } return new hs(t.doubleValue) }
                if ("stringValue" in t) return new ps(t.stringValue);
                if ("mapValue" in t) return this.fromFields(t.mapValue.fields || {});
                if ("arrayValue" in t) { $l(t.arrayValue, "arrayValue"); var n = t.arrayValue.values || []; return new Ls(n.map(function(t) { return e.fromValue(t) })) }
                if ("timestampValue" in t) return $l(t.timestampValue, "timestampValue"), new ys(this.fromTimestamp(t.timestampValue));
                if ("geoPointValue" in t) {
                    $l(t.geoPointValue, "geoPointValue");
                    var r = t.geoPointValue.latitude || 0,
                        i = t.geoPointValue.longitude || 0;
                    return new As(new Pl(r, i))
                }
                if ("bytesValue" in t) { $l(t.bytesValue, "bytesValue"); var o = this.fromBlob(t.bytesValue); return new Ss(o) }
                if ("referenceValue" in t) {
                    $l(t.referenceValue, "referenceValue");
                    var a = this.fromResourceName(t.referenceValue),
                        s = new _i(a.get(1), a.get(3)),
                        u = new Wi(this.extractLocalPathFromResourceName(a));
                    return new Cs(s, u)
                }
                return Br("Unknown Value proto " + JSON.stringify(t))
            }, nf.prototype.toMutationDocument = function(t, e) { return { name: this.toName(t), fields: this.toFields(e) } }, nf.prototype.toDocument = function(t) { return Ur(!t.hasLocalMutations, "Can't serialize documents with mutations."), { name: this.toName(t.key), fields: this.toFields(t.data()), updateTime: this.toTimestamp(t.version.toTimestamp()) } }, nf.prototype.fromDocument = function(t, e) {
                var n = this,
                    r = this.fromName(t.name),
                    i = this.fromVersion(t.updateTime);
                return new Vs(r, i, { hasCommittedMutations: !!e }, void 0, t, function(t) { return n.fromValue(t) })
            }, nf.prototype.toFields = function(t) {
                var n = this,
                    r = {};
                return t.forEach(function(t, e) { r[t] = n.toValue(e) }), r
            }, nf.prototype.fromFields = function(t) {
                var n = this,
                    e = t,
                    r = Ms.EMPTY;
                return $r(e, function(t, e) { r = r.set(new ji([t]), n.fromValue(e)) }), r
            }, nf.prototype.toMapValue = function(t) { return { fields: this.toFields(t) } }, nf.prototype.toArrayValue = function(t) {
                var e = this,
                    n = [];
                return t.forEach(function(t) { n.push(e.toValue(t)) }), { values: n }
            }, nf.prototype.fromFound = function(t) {
                var e = this;
                Ur(!!t.found, "Tried to deserialize a found document from a missing document."), $l(t.found.name, "doc.found.name"), $l(t.found.updateTime, "doc.found.updateTime");
                var n = this.fromName(t.found.name),
                    r = this.fromVersion(t.found.updateTime);
                return new Vs(n, r, {}, void 0, t.found, function(t) { return e.fromValue(t) })
            }, nf.prototype.fromMissing = function(t) {
                Ur(!!t.missing, "Tried to deserialize a missing document from a found document."), Ur(!!t.readTime, "Tried to deserialize a missing document without a read time.");
                var e = this.fromName(t.missing),
                    n = this.fromVersion(t.readTime);
                return new Ks(e, n)
            }, nf.prototype.fromMaybeDocument = function(t) { return "found" in t ? this.fromFound(t) : "missing" in t ? this.fromMissing(t) : Br("invalid batch get response: " + JSON.stringify(t)) }, nf.prototype.toWatchTargetChangeState = function(t) {
                switch (t) {
                    case Tl.Added:
                        return "ADD";
                    case Tl.Current:
                        return "CURRENT";
                    case Tl.NoChange:
                        return "NO_CHANGE";
                    case Tl.Removed:
                        return "REMOVE";
                    case Tl.Reset:
                        return "RESET";
                    default:
                        return Br("Unknown WatchTargetChangeState: " + t)
                }
            }, nf.prototype.toTestWatchChange = function(t) {
                if (t instanceof Il) return { filter: { count: t.existenceFilter.count, targetId: t.targetId } };
                if (t instanceof El) { if (t.newDoc instanceof Vs) { var e = t.newDoc; return { documentChange: { document: { name: this.toName(e.key), fields: this.toFields(e.data()), updateTime: this.toVersion(e.version) }, targetIds: t.updatedTargetIds, removedTargetIds: t.removedTargetIds } } } if (t.newDoc instanceof Ks) return e = t.newDoc, { documentDelete: { document: this.toName(e.key), readTime: this.toVersion(e.version), removedTargetIds: t.removedTargetIds } }; if (null === t.newDoc) return { documentRemove: { document: this.toName(t.key), removedTargetIds: t.removedTargetIds } } }
                if (t instanceof Cl) {
                    var n = void 0;
                    return t.cause && (n = {
                        code: function(t) {
                            if (void 0 === t) return el.OK;
                            switch (t) {
                                case Wr.OK:
                                    return el.OK;
                                case Wr.CANCELLED:
                                    return el.CANCELLED;
                                case Wr.UNKNOWN:
                                    return el.UNKNOWN;
                                case Wr.DEADLINE_EXCEEDED:
                                    return el.DEADLINE_EXCEEDED;
                                case Wr.RESOURCE_EXHAUSTED:
                                    return el.RESOURCE_EXHAUSTED;
                                case Wr.INTERNAL:
                                    return el.INTERNAL;
                                case Wr.UNAVAILABLE:
                                    return el.UNAVAILABLE;
                                case Wr.UNAUTHENTICATED:
                                    return el.UNAUTHENTICATED;
                                case Wr.INVALID_ARGUMENT:
                                    return el.INVALID_ARGUMENT;
                                case Wr.NOT_FOUND:
                                    return el.NOT_FOUND;
                                case Wr.ALREADY_EXISTS:
                                    return el.ALREADY_EXISTS;
                                case Wr.PERMISSION_DENIED:
                                    return el.PERMISSION_DENIED;
                                case Wr.FAILED_PRECONDITION:
                                    return el.FAILED_PRECONDITION;
                                case Wr.ABORTED:
                                    return el.ABORTED;
                                case Wr.OUT_OF_RANGE:
                                    return el.OUT_OF_RANGE;
                                case Wr.UNIMPLEMENTED:
                                    return el.UNIMPLEMENTED;
                                case Wr.DATA_LOSS:
                                    return el.DATA_LOSS;
                                default:
                                    return Br("Unknown status code: " + t)
                            }
                        }(t.cause.code),
                        message: t.cause.message
                    }), { targetChange: { targetChangeType: this.toWatchTargetChangeState(t.state), targetIds: t.targetIds, resumeToken: this.unsafeCastProtoByteString(t.resumeToken), cause: n } }
                }
                return Br("Unrecognized watch change: " + JSON.stringify(t))
            }, nf.prototype.fromWatchChange = function(t) {
                var e, n = this;
                if ("targetChange" in t) {
                    $l(t.targetChange, "targetChange");
                    var r = this.fromWatchTargetChangeState(t.targetChange.targetChangeType || "NO_CHANGE"),
                        i = t.targetChange.targetIds || [],
                        o = t.targetChange.resumeToken || this.emptyByteString(),
                        a = t.targetChange.cause,
                        s = a && this.fromRpcStatus(a);
                    e = new Cl(r, i, o, s || null)
                } else if ("documentChange" in t) {
                    $l(t.documentChange, "documentChange");
                    var u = t.documentChange;
                    $l(u.document, "documentChange.name"), $l(u.document.name, "documentChange.document.name"), $l(u.document.updateTime, "documentChange.document.updateTime");
                    var c = this.fromName(u.document.name),
                        h = this.fromVersion(u.document.updateTime),
                        l = new Vs(c, h, {}, void 0, u.document, function(t) { return n.fromValue(t) }),
                        f = u.targetIds || [],
                        p = u.removedTargetIds || [];
                    e = new El(f, p, l.key, l)
                } else if ("documentDelete" in t) {
                    $l(t.documentDelete, "documentDelete");
                    var d = t.documentDelete;
                    $l(d.document, "documentDelete.document"), c = this.fromName(d.document), h = d.readTime ? this.fromVersion(d.readTime) : lo.forDeletedDoc(), l = new Ks(c, h), p = d.removedTargetIds || [], e = new El([], p, l.key, l)
                } else if ("documentRemove" in t) {
                    $l(t.documentRemove, "documentRemove");
                    var m = t.documentRemove;
                    $l(m.document, "documentRemove"), c = this.fromName(m.document), p = m.removedTargetIds || [], e = new El([], p, c, null)
                } else {
                    if (!("filter" in t)) return Br("Unknown change type " + JSON.stringify(t));
                    $l(t.filter, "filter");
                    var y = t.filter;
                    $l(y.targetId, "filter.targetId");
                    var g = y.count || 0,
                        v = new Wl(g),
                        b = y.targetId;
                    e = new Il(b, v)
                }
                return e
            }, nf.prototype.fromWatchTargetChangeState = function(t) { return "NO_CHANGE" === t ? Tl.NoChange : "ADD" === t ? Tl.Added : "REMOVE" === t ? Tl.Removed : "CURRENT" === t ? Tl.Current : "RESET" === t ? Tl.Reset : Br("Got unexpected TargetChange.state: " + t) }, nf.prototype.versionFromListenResponse = function(t) { if (!("targetChange" in t)) return lo.MIN; var e = t.targetChange; return e.targetIds && e.targetIds.length ? lo.MIN : e.readTime ? this.fromVersion(e.readTime) : lo.MIN }, nf.prototype.toMutation = function(t) {
                var e, n = this;
                if (t instanceof Ma) e = { update: this.toMutationDocument(t.key, t.value) };
                else if (t instanceof ja) e = { delete: this.toName(t.key) };
                else if (t instanceof La) e = { update: this.toMutationDocument(t.key, t.data), updateMask: this.toDocumentMask(t.fieldMask) };
                else {
                    if (!(t instanceof Fa)) return Br("Unknown mutation type " + t.type);
                    e = { transform: { document: this.toName(t.key), fieldTransforms: t.fieldTransforms.map(function(t) { return n.toFieldTransform(t) }) } }
                }
                return t.precondition.isNone || (e.currentDocument = this.toPrecondition(t.precondition)), e
            }, nf.prototype.fromMutation = function(t) {
                var e = this,
                    n = t.currentDocument ? this.fromPrecondition(t.currentDocument) : Da.NONE;
                if (t.update) {
                    $l(t.update.name, "name");
                    var r = this.fromName(t.update.name),
                        i = this.fromFields(t.update.fields || {});
                    if (t.updateMask) { var o = this.fromDocumentMask(t.updateMask); return new La(r, i, o, n) }
                    return new Ma(r, i, n)
                }
                if (t.delete) return r = this.fromName(t.delete), new ja(r, n);
                if (t.transform) { r = this.fromName(t.transform.document); var a = t.transform.fieldTransforms.map(function(t) { return e.fromFieldTransform(t) }); return Ur(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new Fa(r, a) }
                return Br("unknown mutation proto: " + JSON.stringify(t))
            }, nf.prototype.toPrecondition = function(t) { return Ur(!t.isNone, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? { updateTime: this.toVersion(t.updateTime) } : void 0 !== t.exists ? { exists: t.exists } : Br("Unknown precondition") }, nf.prototype.fromPrecondition = function(t) { return void 0 !== t.updateTime ? Da.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? Da.exists(t.exists) : Da.NONE }, nf.prototype.fromWriteResult = function(t, e) {
                var n = this,
                    r = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
                r.isEqual(lo.MIN) && (r = this.fromVersion(e));
                var i = null;
                return t.transformResults && 0 < t.transformResults.length && (i = t.transformResults.map(function(t) { return n.fromValue(t) })), new Ca(r, i)
            }, nf.prototype.fromWriteResults = function(t, e) { var n = this; return t && 0 < t.length ? (Ur(void 0 !== e, "Received a write result without a commit time"), t.map(function(t) { return n.fromWriteResult(t, e) })) : [] }, nf.prototype.toFieldTransform = function(t) {
                var e = this,
                    n = t.transform;
                if (n instanceof Fl) return { fieldPath: t.field.canonicalString(), setToServerValue: "REQUEST_TIME" };
                if (n instanceof Vl) return { fieldPath: t.field.canonicalString(), appendMissingElements: { values: n.elements.map(function(t) { return e.toValue(t) }) } };
                if (n instanceof Ul) return { fieldPath: t.field.canonicalString(), removeAllFromArray: { values: n.elements.map(function(t) { return e.toValue(t) }) } };
                if (n instanceof Ql) return { fieldPath: t.field.canonicalString(), increment: this.toValue(n.operand) };
                throw Br("Unknown transform: " + t.transform)
            }, nf.prototype.fromFieldTransform = function(t) {
                var e = this,
                    n = null;
                if ("setToServerValue" in t) Ur("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), n = Fl.instance;
                else if ("appendMissingElements" in t) {
                    var r = t.appendMissingElements.values || [];
                    n = new Vl(r.map(function(t) { return e.fromValue(t) }))
                } else if ("removeAllFromArray" in t) r = t.removeAllFromArray.values || [], n = new Ul(r.map(function(t) { return e.fromValue(t) }));
                else if ("increment" in t) {
                    var i = this.fromValue(t.increment);
                    Ur(i instanceof rs, "NUMERIC_ADD transform requires a NumberValue"), n = new Ql(i)
                } else Br("Unknown transform proto: " + JSON.stringify(t));
                var o = ji.fromServerFormat(t.fieldPath);
                return new Ta(o, n)
            }, nf.prototype.toDocumentsTarget = function(t) { return { documents: [this.toQueryPath(t.path)] } }, nf.prototype.fromDocumentsTarget = function(t) {
                var e = t.documents.length;
                Ur(1 === e, "DocumentsTarget contained other than 1 document: " + e);
                var n = t.documents[0];
                return Rc.atPath(this.fromQueryPath(n)).toTarget()
            }, nf.prototype.toQueryTarget = function(t) {
                var e = { structuredQuery: {} },
                    n = t.path;
                null !== t.collectionGroup ? (Ur(n.length % 2 == 0, "Collection Group queries should be within a document path or root."), e.parent = this.toQueryPath(n), e.structuredQuery.from = [{ collectionId: t.collectionGroup, allDescendants: !0 }]) : (Ur(n.length % 2 != 0, "Document queries with filters are not supported."), e.parent = this.toQueryPath(n.popLast()), e.structuredQuery.from = [{ collectionId: n.lastSegment() }]);
                var r = this.toFilter(t.filters);
                r && (e.structuredQuery.where = r);
                var i = this.toOrder(t.orderBy);
                i && (e.structuredQuery.orderBy = i);
                var o = this.toInt32Value(t.limit);
                return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.toCursor(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.toCursor(t.endAt)), e
            }, nf.prototype.fromQueryTarget = function(t) {
                var e = this.fromQueryPath(t.parent),
                    n = t.structuredQuery,
                    r = n.from ? n.from.length : 0,
                    i = null;
                if (0 < r) {
                    Ur(1 === r, "StructuredQuery.from with more than one collection is not supported.");
                    var o = n.from[0];
                    o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
                }
                var a = [];
                n.where && (a = this.fromFilter(n.where));
                var s = [];
                n.orderBy && (s = this.fromOrder(n.orderBy));
                var u = null;
                n.limit && (u = this.fromInt32Value(n.limit));
                var c = null;
                n.startAt && (c = this.fromCursor(n.startAt));
                var h = null;
                return n.endAt && (h = this.fromCursor(n.endAt)), new Rc(e, i, s, a, u, Dc.First, c, h).toTarget()
            }, nf.prototype.toListenRequestLabels = function(t) { var e = this.toLabel(t.purpose); return null == e ? null : { "goog-listen-tags": e } }, nf.prototype.toLabel = function(t) {
                switch (t) {
                    case qu.Listen:
                        return null;
                    case qu.ExistenceFilterMismatch:
                        return "existence-filter-mismatch";
                    case qu.LimboResolution:
                        return "limbo-document";
                    default:
                        return Br("Unrecognized query purpose: " + t)
                }
            }, nf.prototype.toTarget = function(t) { var e, n = t.target; return (e = n.isDocumentQuery() ? { documents: this.toDocumentsTarget(n) } : { query: this.toQueryTarget(n) }).targetId = t.targetId, 0 < t.resumeToken.length && (e.resumeToken = this.unsafeCastProtoByteString(t.resumeToken)), e }, nf.prototype.toFilter = function(t) { var e = this; if (0 !== t.length) { var n = t.map(function(t) { return t instanceof xc ? e.toUnaryOrFieldFilter(t) : Br("Unrecognized filter: " + JSON.stringify(t)) }); return 1 === n.length ? n[0] : { compositeFilter: { op: "AND", filters: n } } } }, nf.prototype.fromFilter = function(t) { var e = this; return t ? void 0 !== t.unaryFilter ? [this.fromUnaryFilter(t)] : void 0 !== t.fieldFilter ? [this.fromFieldFilter(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) { return e.fromFilter(t) }).reduce(function(t, e) { return t.concat(e) }) : Br("Unknown filter: " + JSON.stringify(t)) : [] }, nf.prototype.toOrder = function(t) { var e = this; if (0 !== t.length) return t.map(function(t) { return e.toPropertyOrder(t) }) }, nf.prototype.fromOrder = function(t) { var e = this; return t.map(function(t) { return e.fromPropertyOrder(t) }) }, nf.prototype.toCursor = function(t) { var e = this; return { before: t.before, values: t.position.map(function(t) { return e.toValue(t) }) } }, nf.prototype.fromCursor = function(t) {
                var e = this,
                    n = !!t.before,
                    r = t.values.map(function(t) { return e.fromValue(t) });
                return new eh(r, n)
            }, nf.prototype.toDirection = function(t) { return Jl[t.name] }, nf.prototype.fromDirection = function(t) {
                switch (t) {
                    case "ASCENDING":
                        return $c.ASCENDING;
                    case "DESCENDING":
                        return $c.DESCENDING;
                    default:
                        return
                }
            }, nf.prototype.toOperatorName = function(t) { return Xl[t.name] }, nf.prototype.fromOperatorName = function(t) {
                switch (t) {
                    case "EQUAL":
                        return Oc.EQUAL;
                    case "GREATER_THAN":
                        return Oc.GREATER_THAN;
                    case "GREATER_THAN_OR_EQUAL":
                        return Oc.GREATER_THAN_OR_EQUAL;
                    case "LESS_THAN":
                        return Oc.LESS_THAN;
                    case "LESS_THAN_OR_EQUAL":
                        return Oc.LESS_THAN_OR_EQUAL;
                    case "ARRAY_CONTAINS":
                        return Oc.ARRAY_CONTAINS;
                    case "IN":
                        return Oc.IN;
                    case "ARRAY_CONTAINS_ANY":
                        return Oc.ARRAY_CONTAINS_ANY;
                    case "OPERATOR_UNSPECIFIED":
                        return Br("Unspecified operator");
                    default:
                        return Br("Unknown operator")
                }
            }, nf.prototype.toFieldPathReference = function(t) { return { fieldPath: t.canonicalString() } }, nf.prototype.fromFieldPathReference = function(t) { return ji.fromServerFormat(t.fieldPath) }, nf.prototype.toPropertyOrder = function(t) { return { field: this.toFieldPathReference(t.field), direction: this.toDirection(t.dir) } }, nf.prototype.fromPropertyOrder = function(t) { return new rh(this.fromFieldPathReference(t.field), this.fromDirection(t.direction)) }, nf.prototype.fromFieldFilter = function(t) { return xc.create(this.fromFieldPathReference(t.fieldFilter.field), this.fromOperatorName(t.fieldFilter.op), this.fromValue(t.fieldFilter.value)) }, nf.prototype.toUnaryOrFieldFilter = function(t) { if (t.op === Oc.EQUAL) { if (t.value.isEqual(hs.NAN)) return { unaryFilter: { field: this.toFieldPathReference(t.field), op: "IS_NAN" } }; if (t.value.isEqual(Xa.INSTANCE)) return { unaryFilter: { field: this.toFieldPathReference(t.field), op: "IS_NULL" } } } return { fieldFilter: { field: this.toFieldPathReference(t.field), op: this.toOperatorName(t.op), value: this.toValue(t.value) } } }, nf.prototype.fromUnaryFilter = function(t) {
                switch (t.unaryFilter.op) {
                    case "IS_NAN":
                        var e = this.fromFieldPathReference(t.unaryFilter.field);
                        return xc.create(e, Oc.EQUAL, hs.NAN);
                    case "IS_NULL":
                        var n = this.fromFieldPathReference(t.unaryFilter.field);
                        return xc.create(n, Oc.EQUAL, Xa.INSTANCE);
                    case "OPERATOR_UNSPECIFIED":
                        return Br("Unspecified filter");
                    default:
                        return Br("Unknown filter")
                }
            }, nf.prototype.toDocumentMask = function(t) { var e = []; return t.fields.forEach(function(t) { return e.push(t.canonicalString()) }), { fieldPaths: e } }, nf.prototype.fromDocumentMask = function(t) { var e = (t.fieldPaths || []).map(function(t) { return ji.fromServerFormat(t) }); return ba.fromArray(e) }, nf);

            function nf(t, e) { this.databaseId = t, this.options = e }
            var rf = function() { this.viewSnap = null, this.targetId = 0, this.listeners = [] },
                of = (af.prototype.listen = function(t) {
                    var e = t.query,
                        n = !1,
                        r = this.queries.get(e);
                    return r || (n = !0, r = new rf, this.queries.set(e, r)), r.listeners.push(t), Ur(!t.applyOnlineStateChange(this.onlineState), "applyOnlineStateChange() shouldn't raise an event for brand-new listeners."), !r.viewSnap || t.onViewSnapshot(r.viewSnap) && this.raiseSnapshotsInSyncEvent(), n ? this.syncEngine.listen(e).then(function(t) { return r.targetId = t }) : Promise.resolve(r.targetId)
                }, af.prototype.unlisten = function(o) { return p(this, void 0, void 0, function() { var e, n, r, i; return m(this, function(t) { return e = o.query, n = !1, (r = this.queries.get(e)) && 0 <= (i = r.listeners.indexOf(o)) && (r.listeners.splice(i, 1), n = 0 === r.listeners.length), n ? (this.queries.delete(e), [2, this.syncEngine.unlisten(e)]) : [2] }) }) }, af.prototype.onWatchChange = function(t) {
                    for (var e = !1, n = 0, r = t; n < r.length; n++) {
                        var i = r[n],
                            o = i.query,
                            a = this.queries.get(o);
                        if (a) {
                            for (var s = 0, u = a.listeners; s < u.length; s++) u[s].onViewSnapshot(i) && (e = !0);
                            a.viewSnap = i
                        }
                    }
                    e && this.raiseSnapshotsInSyncEvent()
                }, af.prototype.onWatchError = function(t, e) {
                    var n = this.queries.get(t);
                    if (n)
                        for (var r = 0, i = n.listeners; r < i.length; r++) i[r].onError(e);
                    this.queries.delete(t)
                }, af.prototype.onOnlineStateChange = function(i) {
                    this.onlineState = i;
                    var o = !1;
                    this.queries.forEach(function(t, e) { for (var n = 0, r = e.listeners; n < r.length; n++) r[n].applyOnlineStateChange(i) && (o = !0) }), o && this.raiseSnapshotsInSyncEvent()
                }, af.prototype.addSnapshotsInSyncListener = function(t) { this.snapshotsInSyncListeners.add(t), t.next() }, af.prototype.removeSnapshotsInSyncListener = function(t) { this.snapshotsInSyncListeners.delete(t) }, af.prototype.raiseSnapshotsInSyncEvent = function() { this.snapshotsInSyncListeners.forEach(function(t) { t.next() }) }, af);

            function af(t) { this.syncEngine = t, this.queries = new zs(function(t) { return t.canonicalId() }), this.onlineState = Yh.Unknown, this.snapshotsInSyncListeners = new Set, this.syncEngine.subscribe(this) }
            var sf = (uf.prototype.onViewSnapshot = function(t) {
                if (Ur(0 < t.docChanges.length || t.syncStateChanged, "We got a new snapshot with no changes?"), !this.options.includeMetadataChanges) {
                    for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                        var i = r[n];
                        i.type !== sl.Metadata && e.push(i)
                    }
                    t = new ml(t.query, t.docs, t.oldDocs, e, t.mutatedKeys, t.fromCache, t.syncStateChanged, !0)
                }
                var o = !1;
                return this.raisedInitialEvent ? this.shouldRaiseEvent(t) && (this.queryObserver.next(t), o = !0) : this.shouldRaiseInitialEvent(t, this.onlineState) && (this.raiseInitialEvent(t), o = !0), this.snap = t, o
            }, uf.prototype.onError = function(t) { this.queryObserver.error(t) }, uf.prototype.applyOnlineStateChange = function(t) { this.onlineState = t; var e = !1; return this.snap && !this.raisedInitialEvent && this.shouldRaiseInitialEvent(this.snap, t) && (this.raiseInitialEvent(this.snap), e = !0), e }, uf.prototype.shouldRaiseInitialEvent = function(t, e) { if (Ur(!this.raisedInitialEvent, "Determining whether to raise first event but already had first event"), !t.fromCache) return !0; var n = e !== Yh.Offline; return this.options.waitForSyncWhenOnline && n ? (Ur(t.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !t.docs.isEmpty() || e === Yh.Offline }, uf.prototype.shouldRaiseEvent = function(t) { if (0 < t.docChanges.length) return !0; var e = this.snap && this.snap.hasPendingWrites !== t.hasPendingWrites; return !(!t.syncStateChanged && !e) && !0 === this.options.includeMetadataChanges }, uf.prototype.raiseInitialEvent = function(t) { Ur(!this.raisedInitialEvent, "Trying to raise initial events for second time"), t = ml.fromInitialDocuments(t.query, t.docs, t.mutatedKeys, t.fromCache), this.raisedInitialEvent = !0, this.queryObserver.next(t) }, uf);

            function uf(t, e, n) { this.query = t, this.queryObserver = e, this.raisedInitialEvent = !1, this.snap = null, this.onlineState = Yh.Unknown, this.options = n || {} }
            var cf = (hf.fromSnapshot = function(t, e) {
                for (var n = Lo(), r = Lo(), i = 0, o = e.docChanges; i < o.length; i++) {
                    var a = o[i];
                    switch (a.type) {
                        case sl.Added:
                            n = n.add(a.doc.key);
                            break;
                        case sl.Removed:
                            r = r.add(a.doc.key)
                    }
                }
                return new hf(t, e.fromCache, n, r)
            }, hf);

            function hf(t, e, n, r) { this.targetId = t, this.fromCache = e, this.addedKeys = n, this.removedKeys = r }
            var lf = function(t) { this.key = t },
                ff = function(t) { this.key = t },
                pf = (Object.defineProperty(df.prototype, "syncedDocuments", { get: function() { return this._syncedDocuments }, enumerable: !0, configurable: !0 }), df.prototype.computeDocChanges = function(t, e) {
                    var s = this,
                        u = e ? e.changeSet : new pl,
                        c = e ? e.documentSet : this.documentSet,
                        h = e ? e.mutatedKeys : this.mutatedKeys,
                        l = c,
                        f = !1,
                        p = this.query.hasLimitToFirst() && c.size === this.query.limit ? c.last() : null,
                        d = this.query.hasLimitToLast() && c.size === this.query.limit ? c.first() : null;
                    if (t.inorderTraversal(function(t, e) {
                            var n = c.get(t),
                                r = e instanceof Vs ? e : null;
                            r && (Ur(t.isEqual(r.key), "Mismatching keys found in document changes: " + t + " != " + r.key), r = s.query.matches(r) ? r : null);
                            var i = !!n && s.mutatedKeys.has(n.key),
                                o = !!r && (r.hasLocalMutations || s.mutatedKeys.has(r.key) && r.hasCommittedMutations),
                                a = !1;
                            n && r ? n.data().isEqual(r.data()) ? i !== o && (u.track({ type: sl.Metadata, doc: r }), a = !0) : s.shouldWaitForSyncedDocument(n, r) || (u.track({ type: sl.Modified, doc: r }), a = !0, (p && 0 < s.query.docComparator(r, p) || d && s.query.docComparator(r, d) < 0) && (f = !0)) : !n && r ? (u.track({ type: sl.Added, doc: r }), a = !0) : n && !r && (u.track({ type: sl.Removed, doc: n }), a = !0, (p || d) && (f = !0)), a && (h = r ? (l = l.add(r), o ? h.add(t) : h.delete(t)) : (l = l.delete(t), h.delete(t)))
                        }), this.query.hasLimitToFirst() || this.query.hasLimitToLast())
                        for (; l.size > this.query.limit;) {
                            var n = this.query.hasLimitToFirst() ? l.last() : l.first();
                            l = l.delete(n.key), h = h.delete(n.key), u.track({ type: sl.Removed, doc: n })
                        }
                    return Ur(!f || !e, "View was refilled using docs that themselves needed refilling."), { documentSet: l, changeSet: u, needsRefill: f, mutatedKeys: h }
                }, df.prototype.shouldWaitForSyncedDocument = function(t, e) { return t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations }, df.prototype.applyChanges = function(t, e, n) {
                    var r = this;
                    Ur(!t.needsRefill, "Cannot apply changes that need a refill");
                    var i = this.documentSet;
                    this.documentSet = t.documentSet, this.mutatedKeys = t.mutatedKeys;
                    var o = t.changeSet.getChanges();
                    o.sort(function(t, e) {
                        return function(t, e) {
                            function n(t) {
                                switch (t) {
                                    case sl.Added:
                                        return 1;
                                    case sl.Modified:
                                    case sl.Metadata:
                                        return 2;
                                    case sl.Removed:
                                        return 0;
                                    default:
                                        return Br("Unknown ChangeType: " + t)
                                }
                            }
                            return n(t) - n(e)
                        }(t.type, e.type) || r.query.docComparator(t.doc, e.doc)
                    }), this.applyTargetChange(n);
                    var a = e ? this.updateLimboDocuments() : [],
                        s = 0 === this.limboDocuments.size && this.current ? cl.Synced : cl.Local,
                        u = s !== this.syncState;
                    return this.syncState = s, 0 !== o.length || u ? { snapshot: new ml(this.query, t.documentSet, i, o, t.mutatedKeys, s === cl.Local, u, !1), limboChanges: a } : { limboChanges: a }
                }, df.prototype.applyOnlineStateChange = function(t) { return this.current && t === Yh.Offline ? (this.current = !1, this.applyChanges({ documentSet: this.documentSet, changeSet: new pl, mutatedKeys: this.mutatedKeys, needsRefill: !1 }, !1)) : { limboChanges: [] } }, df.prototype.shouldBeInLimbo = function(t) { return !this._syncedDocuments.has(t) && !!this.documentSet.has(t) && !this.documentSet.get(t).hasLocalMutations }, df.prototype.applyTargetChange = function(t) {
                    var e = this;
                    t && (t.addedDocuments.forEach(function(t) { return e._syncedDocuments = e._syncedDocuments.add(t) }), t.modifiedDocuments.forEach(function(t) { return Ur(e._syncedDocuments.has(t), "Modified document " + t + " not found in view.") }), t.removedDocuments.forEach(function(t) { return e._syncedDocuments = e._syncedDocuments.delete(t) }), this.current = t.current)
                }, df.prototype.updateLimboDocuments = function() {
                    var e = this;
                    if (!this.current) return [];
                    var n = this.limboDocuments;
                    this.limboDocuments = Lo(), this.documentSet.forEach(function(t) { e.shouldBeInLimbo(t.key) && (e.limboDocuments = e.limboDocuments.add(t.key)) });
                    var r = [];
                    return n.forEach(function(t) { e.limboDocuments.has(t) || r.push(new ff(t)) }), this.limboDocuments.forEach(function(t) { n.has(t) || r.push(new lf(t)) }), r
                }, df.prototype.synchronizeWithPersistedState = function(t) { this._syncedDocuments = t.remoteKeys, this.limboDocuments = Lo(); var e = this.computeDocChanges(t.documents); return this.applyChanges(e, !0) }, df.prototype.computeInitialSnapshot = function() { return ml.fromInitialDocuments(this.query, this.documentSet, this.mutatedKeys, this.syncState === cl.Local) }, df);

            function df(t, e) { this.query = t, this._syncedDocuments = e, this.syncState = null, this.current = !1, this.limboDocuments = Lo(), this.mutatedKeys = Lo(), this.documentSet = new ll(t.docComparator.bind(t)) }
            var mf = (yf.prototype.run = function() { this.runWithBackOff() }, yf.prototype.runWithBackOff = function() {
                var t = this;
                this.backoff.backoffAndRun(function() { return p(t, void 0, void 0, function() { var e, n, r = this; return m(this, function(t) { return e = this.remoteStore.createTransaction(), (n = this.tryRunUpdateFunction(e)) && n.then(function(t) { r.asyncQueue.enqueueAndForget(function() { return e.commit().then(function() { r.deferred.resolve(t) }).catch(function(t) { r.handleTransactionError(t) }) }) }).catch(function(t) { r.handleTransactionError(t) }), [2] }) }) })
            }, yf.prototype.tryRunUpdateFunction = function(t) { try { var e = this.updateFunction(t); return !Ic(e) && e.catch && e.then ? e : (this.deferred.reject(Error("Transaction callback must return a Promise")), null) } catch (t) { return this.deferred.reject(t), null } }, yf.prototype.handleTransactionError = function(t) {
                var e = this;
                0 < this.retries && this.isRetryableTransactionError(t) ? (this.retries -= 1, this.asyncQueue.enqueueAndForget(function() { return e.runWithBackOff(), Promise.resolve() })) : this.deferred.reject(t)
            }, yf.prototype.isRetryableTransactionError = function(t) { if ("FirebaseError" !== t.name) return !1; var e = t.code; return "aborted" === e || "failed-precondition" === e || !ol(e) }, yf);

            function yf(t, e, n, r) { this.asyncQueue = t, this.remoteStore = e, this.updateFunction = n, this.deferred = r, this.retries = 5, this.backoff = new Lh(this.asyncQueue, Hi.RetryTransaction) }
            var gf = "SyncEngine",
                vf = function(t, e, n) { this.query = t, this.targetId = e, this.view = n },
                bf = function(t) { this.key = t, this.receivedDocument = !1 },
                wf = (Object.defineProperty(Tf.prototype, "isPrimaryClient", { get: function() { return !0 === this.isPrimary }, enumerable: !0, configurable: !0 }), Tf.prototype.subscribe = function(t) { Ur(null !== t, "SyncEngine listener cannot be null"), Ur(null === this.syncEngineListener, "SyncEngine already has a subscriber."), this.syncEngineListener = t }, Tf.prototype.listen = function(a) {
                    return p(this, void 0, void 0, function() {
                        var e, n, r, i, o;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("listen()"), (r = this.queryViewsByQuery.get(a)) ? (e = r.targetId, this.sharedClientState.addLocalQueryTarget(e), n = r.view.computeInitialSnapshot(), [3, 4]) : [3, 1];
                                case 1:
                                    return [4, this.localStore.allocateTarget(a.toTarget())];
                                case 2:
                                    return i = t.sent(), o = this.sharedClientState.addLocalQueryTarget(i.targetId), e = i.targetId, [4, this.initializeViewAndComputeSnapshot(a, e, "current" === o)];
                                case 3:
                                    n = t.sent(), this.isPrimary && this.remoteStore.listen(i), t.label = 4;
                                case 4:
                                    return this.syncEngineListener.onWatchChange([n]), [2, e]
                            }
                        })
                    })
                }, Tf.prototype.initializeViewAndComputeSnapshot = function(s, u, c) {
                    return p(this, void 0, void 0, function() {
                        var e, n, r, i, o, a;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.localStore.executeQuery(s, !0)];
                                case 1:
                                    return e = t.sent(), n = new pf(s, e.remoteKeys), r = n.computeDocChanges(e.documents), i = bl.createSynthesizedTargetChangeForCurrentChange(u, c && this.onlineState !== Yh.Offline), Ur(0 === (o = n.applyChanges(r, !0 === this.isPrimary, i)).limboChanges.length, "View returned limbo docs before target ack from the server."), Ur(!!o.snapshot, "applyChanges for new view should always return a snapshot"), a = new vf(s, u, n), this.queryViewsByQuery.set(s, a), this.queriesByTarget[u] || (this.queriesByTarget[u] = []), this.queriesByTarget[u].push(s), [2, o.snapshot]
                            }
                        })
                    })
                }, Tf.prototype.synchronizeViewAndComputeSnapshot = function(r) {
                    return p(this, void 0, void 0, function() {
                        var e, n;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.localStore.executeQuery(r.query, !0)];
                                case 1:
                                    return e = t.sent(), n = r.view.synchronizeWithPersistedState(e), this.isPrimary && this.updateTrackedLimbos(r.targetId, n.limboChanges), [2, n]
                            }
                        })
                    })
                }, Tf.prototype.unlisten = function(i) {
                    return p(this, void 0, void 0, function() {
                        var e, n, r = this;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("unlisten()"), Ur(!!(e = this.queryViewsByQuery.get(i)), "Trying to unlisten on query not found:" + i), 1 < (n = this.queriesByTarget[e.targetId]).length ? (this.queriesByTarget[e.targetId] = n.filter(function(t) { return !t.isEqual(i) }), this.queryViewsByQuery.delete(i), [2]) : this.isPrimary ? (this.sharedClientState.removeLocalQueryTarget(e.targetId), this.sharedClientState.isActiveQueryTarget(e.targetId) ? [3, 2] : [4, this.localStore.releaseTarget(e.targetId, !1).then(function() { r.sharedClientState.clearQueryState(e.targetId), r.remoteStore.unlisten(e.targetId), r.removeAndCleanupTarget(e.targetId) }).catch(dc)]) : [3, 3];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [3, 5];
                                case 3:
                                    return this.removeAndCleanupTarget(e.targetId), [4, this.localStore.releaseTarget(e.targetId, !0)];
                                case 4:
                                    t.sent(), t.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.write = function(n, r) {
                    return p(this, void 0, void 0, function() {
                        var e;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("write()"), [4, this.localStore.localWrite(n)];
                                case 1:
                                    return e = t.sent(), this.sharedClientState.addPendingMutation(e.batchId), this.addMutationCallback(e.batchId, r), [4, this.emitNewSnapsAndNotifyLocalStore(e.changes)];
                                case 2:
                                    return t.sent(), [4, this.remoteStore.fillWritePipeline()];
                                case 3:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Tf.prototype.runTransaction = function(t, e, n) { new mf(t, this.remoteStore, e, n).run() }, Tf.prototype.applyRemoteEvent = function(n) {
                    return p(this, void 0, void 0, function() {
                        var e, r = this;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.assertSubscribed("applyRemoteEvent()"), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.localStore.applyRemoteEvent(n)];
                                case 2:
                                    return e = t.sent(), $r(n.targetChanges, function(t, e) {
                                        var n = r.limboResolutionsByTarget[Number(t)];
                                        n && (Ur(e.addedDocuments.size + e.modifiedDocuments.size + e.removedDocuments.size <= 1, "Limbo resolution for single document contains multiple changes."), 0 < e.addedDocuments.size ? n.receivedDocument = !0 : 0 < e.modifiedDocuments.size ? Ur(n.receivedDocument, "Received change for limbo target document without add.") : 0 < e.removedDocuments.size && (Ur(n.receivedDocument, "Received remove for limbo target document without add."), n.receivedDocument = !1))
                                    }), [4, this.emitNewSnapsAndNotifyLocalStore(e, n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, dc(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.applyOnlineStateChange = function(r, t) {
                    if (this.isPrimary && t === Xh.RemoteStore || !this.isPrimary && t === Xh.SharedClientState) {
                        this.assertSubscribed("applyOnlineStateChange()");
                        var i = [];
                        this.queryViewsByQuery.forEach(function(t, e) {
                            var n = e.view.applyOnlineStateChange(r);
                            Ur(0 === n.limboChanges.length, "OnlineState should not affect limbo documents."), n.snapshot && i.push(n.snapshot)
                        }), this.syncEngineListener.onOnlineStateChange(r), this.syncEngineListener.onWatchChange(i), this.onlineState = r, this.isPrimary && this.sharedClientState.setOnlineState(r)
                    }
                }, Tf.prototype.rejectListen = function(s, u) {
                    return p(this, void 0, void 0, function() {
                        var e, n, r, i, o, a = this;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("rejectListens()"), this.sharedClientState.updateQueryState(s, "rejected", u), e = this.limboResolutionsByTarget[s], (n = e && e.key) ? (this.limboTargetsByKey = this.limboTargetsByKey.remove(n), delete this.limboResolutionsByTarget[s], r = (r = new po(Wi.comparator)).insert(n, new Ks(n, lo.forDeletedDoc())), i = Lo().add(n), o = new gl(lo.MIN, {}, new So(Si), r, i), [2, this.applyRemoteEvent(o)]) : [3, 1];
                                case 1:
                                    return [4, this.localStore.releaseTarget(s, !1).then(function() { return a.removeAndCleanupTarget(s, u) }).catch(dc)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.applyBatchState = function(n, r, i) {
                    return p(this, void 0, void 0, function() {
                        var e;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.assertSubscribed("applyBatchState()"), [4, this.localStore.lookupMutationDocuments(n)];
                                case 1:
                                    return null === (e = t.sent()) ? (Fr(gf, "Cannot apply mutation batch with id: " + n), [2]) : "pending" !== r ? [3, 3] : [4, this.remoteStore.fillWritePipeline()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    "acknowledged" === r || "rejected" === r ? (this.processUserCallback(n, i || null), this.localStore.removeCachedMutationBatchMetadata(n)) : Br("Unknown batchState: " + r), t.label = 4;
                                case 4:
                                    return [4, this.emitNewSnapsAndNotifyLocalStore(e)];
                                case 5:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Tf.prototype.applySuccessfulWrite = function(r) {
                    return p(this, void 0, void 0, function() {
                        var e, n;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.assertSubscribed("applySuccessfulWrite()"), e = r.batch.batchId, this.processUserCallback(e, null), this.triggerPendingWritesCallbacks(e), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.localStore.acknowledgeBatch(r)];
                                case 2:
                                    return n = t.sent(), this.sharedClientState.updateMutationState(e, "acknowledged"), [4, this.emitNewSnapsAndNotifyLocalStore(n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, dc(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.rejectFailedWrite = function(n, r) {
                    return p(this, void 0, void 0, function() {
                        var e;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.assertSubscribed("rejectFailedWrite()"), this.processUserCallback(n, r), this.triggerPendingWritesCallbacks(n), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.localStore.rejectBatch(n)];
                                case 2:
                                    return e = t.sent(), this.sharedClientState.updateMutationState(n, "rejected", r), [4, this.emitNewSnapsAndNotifyLocalStore(e)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, dc(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.registerPendingWritesCallback = function(r) {
                    return p(this, void 0, void 0, function() {
                        var e, n;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.remoteStore.canUseNetwork() || Fr(gf, "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), [4, this.localStore.getHighestUnacknowledgedBatchId()];
                                case 1:
                                    return -1 === (e = t.sent()) ? r.resolve() : ((n = this.pendingWritesCallbacks.get(e) || []).push(r), this.pendingWritesCallbacks.set(e, n)), [2]
                            }
                        })
                    })
                }, Tf.prototype.triggerPendingWritesCallbacks = function(t) {
                    (this.pendingWritesCallbacks.get(t) || []).forEach(function(t) { t.resolve() }), this.pendingWritesCallbacks.delete(t)
                }, Tf.prototype.rejectOutstandingPendingWritesCallbacks = function(e) { this.pendingWritesCallbacks.forEach(function(t) { t.forEach(function(t) { t.reject(new zr(Wr.CANCELLED, e)) }) }), this.pendingWritesCallbacks.clear() }, Tf.prototype.addMutationCallback = function(t, e) {
                    var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                    n = (n = n || new po(Si)).insert(t, e), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                }, Tf.prototype.processUserCallback = function(t, e) {
                    var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                    if (n) {
                        var r = n.get(t);
                        r && (Ur(t === n.minKey(), "Mutation callbacks processed out-of-order?"), e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                    }
                }, Tf.prototype.removeAndCleanupTarget = function(t, e) {
                    var n = this;
                    void 0 === e && (e = null), this.sharedClientState.removeLocalQueryTarget(t), Ur(this.queriesByTarget[t] && 0 !== this.queriesByTarget[t].length, "There are no queries mapped to target id " + t);
                    for (var r = 0, i = this.queriesByTarget[t]; r < i.length; r++) {
                        var o = i[r];
                        this.queryViewsByQuery.delete(o), e && this.syncEngineListener.onWatchError(o, e)
                    }
                    if (delete this.queriesByTarget[t], this.isPrimary) {
                        var a = this.limboDocumentRefs.referencesForId(t);
                        this.limboDocumentRefs.removeReferencesForId(t), a.forEach(function(t) { n.limboDocumentRefs.containsKey(t) || n.removeLimboTarget(t) })
                    }
                }, Tf.prototype.removeLimboTarget = function(t) {
                    var e = this.limboTargetsByKey.get(t);
                    null !== e && (this.remoteStore.unlisten(e), this.limboTargetsByKey = this.limboTargetsByKey.remove(t), delete this.limboResolutionsByTarget[e])
                }, Tf.prototype.updateTrackedLimbos = function(t, e) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var i = r[n];
                        i instanceof lf ? (this.limboDocumentRefs.addReference(i.key, t), this.trackLimboChange(i)) : i instanceof ff ? (Fr(gf, "Document no longer in limbo: " + i.key), this.limboDocumentRefs.removeReference(i.key, t), this.limboDocumentRefs.containsKey(i.key) || this.removeLimboTarget(i.key)) : Br("Unknown limbo change: " + JSON.stringify(i))
                    }
                }, Tf.prototype.trackLimboChange = function(t) {
                    var e = t.key;
                    if (!this.limboTargetsByKey.get(e)) {
                        Fr(gf, "New document in limbo: " + e);
                        var n = this.limboTargetIdGenerator.next(),
                            r = Rc.atPath(e.path);
                        this.limboResolutionsByTarget[n] = new bf(e), this.remoteStore.listen(new ju(r.toTarget(), n, qu.LimboResolution, Li.INVALID)), this.limboTargetsByKey = this.limboTargetsByKey.insert(e, n)
                    }
                }, Tf.prototype.currentLimboDocs = function() { return this.limboTargetsByKey }, Tf.prototype.emitNewSnapsAndNotifyLocalStore = function(r, u) {
                    return p(this, void 0, void 0, function() {
                        var o, a, e, s = this;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return o = [], a = [], e = [], this.queryViewsByQuery.forEach(function(t, i) {
                                        e.push(Promise.resolve().then(function() { var n = i.view.computeDocChanges(r); return n.needsRefill ? s.localStore.executeQuery(i.query, !1).then(function(t) { var e = t.documents; return i.view.computeDocChanges(e, n) }) : n }).then(function(t) {
                                            var e = u && u.targetChanges[i.targetId],
                                                n = i.view.applyChanges(t, !0 === s.isPrimary, e);
                                            if (s.updateTrackedLimbos(i.targetId, n.limboChanges), n.snapshot) {
                                                s.isPrimary && s.sharedClientState.updateQueryState(i.targetId, n.snapshot.fromCache ? "not-current" : "current"), o.push(n.snapshot);
                                                var r = cf.fromSnapshot(i.targetId, n.snapshot);
                                                a.push(r)
                                            }
                                        }))
                                    }), [4, Promise.all(e)];
                                case 1:
                                    return t.sent(), this.syncEngineListener.onWatchChange(o), [4, this.localStore.notifyLocalViewChanges(a)];
                                case 2:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Tf.prototype.assertSubscribed = function(t) { Ur(null !== this.syncEngineListener, "Trying to call " + t + " before calling subscribe().") }, Tf.prototype.handleCredentialChange = function(r) {
                    return p(this, void 0, void 0, function() {
                        var e, n;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = !this.currentUser.isEqual(r), this.currentUser = r, e ? (this.rejectOutstandingPendingWritesCallbacks("'waitForPendingWrites' promise is rejected due to a user change."), [4, this.localStore.handleUserChange(r)]) : [3, 3];
                                case 1:
                                    return n = t.sent(), this.sharedClientState.handleUserChange(r, n.removedBatchIds, n.addedBatchIds), [4, this.emitNewSnapsAndNotifyLocalStore(n.affectedDocuments)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [4, this.remoteStore.handleCredentialChange()];
                                case 4:
                                    return t.sent(), [2]
                            }
                        })
                    })
                }, Tf.prototype.applyPrimaryState = function(c) {
                    return p(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s, u = this;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return !0 !== c || !0 === this.isPrimary ? [3, 3] : (this.isPrimary = !0, [4, this.remoteStore.applyPrimaryState(!0)]);
                                case 1:
                                    return t.sent(), e = this.sharedClientState.getAllActiveQueryTargets(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(e.toArray())];
                                case 2:
                                    for (n = t.sent(), r = 0, i = n; r < i.length; r++) o = i[r], this.remoteStore.listen(o);
                                    return [3, 7];
                                case 3:
                                    return !1 !== c || !1 === this.isPrimary ? [3, 7] : (this.isPrimary = !1, a = [], s = Promise.resolve(), Zr(this.queriesByTarget, function(t, e) { u.sharedClientState.isLocalQueryTarget(t) ? a.push(t) : s = s.then(function() { return u.removeAndCleanupTarget(t), u.localStore.releaseTarget(t, !0) }), u.remoteStore.unlisten(t) }), [4, s]);
                                case 4:
                                    return t.sent(), [4, this.synchronizeQueryViewsAndRaiseSnapshots(a)];
                                case 5:
                                    return t.sent(), this.resetLimboDocuments(), [4, this.remoteStore.applyPrimaryState(!1)];
                                case 6:
                                    t.sent(), t.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.resetLimboDocuments = function() {
                    var e = this;
                    Zr(this.limboResolutionsByTarget, function(t) { e.remoteStore.unlisten(t) }), this.limboDocumentRefs.removeAllReferences(), this.limboResolutionsByTarget = [], this.limboTargetsByKey = new po(Wi.comparator)
                }, Tf.prototype.synchronizeQueryViewsAndRaiseSnapshots = function(d) {
                    return p(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s, u, c, h, l, f, p;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    e = [], n = [], r = 0, i = d, t.label = 1;
                                case 1:
                                    return r < i.length ? (o = i[r], a = void 0, (s = this.queriesByTarget[o]) && 0 !== s.length ? [4, this.localStore.releaseTarget(o, !0)] : [3, 8]) : [3, 14];
                                case 2:
                                    return t.sent(), [4, this.localStore.allocateTarget(s[0].toTarget())];
                                case 3:
                                    a = t.sent(), u = 0, c = s, t.label = 4;
                                case 4:
                                    return u < c.length ? (h = c[u], Ur(!!(l = this.queryViewsByQuery.get(h)), "No query view found for " + h), [4, this.synchronizeViewAndComputeSnapshot(l)]) : [3, 7];
                                case 5:
                                    (f = t.sent()).snapshot && n.push(f.snapshot), t.label = 6;
                                case 6:
                                    return u++, [3, 4];
                                case 7:
                                    return [3, 12];
                                case 8:
                                    return Ur(!0 === this.isPrimary, "A secondary tab should never have an active target without an active query."), [4, this.localStore.getTarget(o)];
                                case 9:
                                    return Ur(!!(p = t.sent()), "Target for id " + o + " not found"), [4, this.localStore.allocateTarget(p)];
                                case 10:
                                    return a = t.sent(), [4, this.initializeViewAndComputeSnapshot(this.synthesizeTargetToQuery(p), o, !1)];
                                case 11:
                                    t.sent(), t.label = 12;
                                case 12:
                                    e.push(a), t.label = 13;
                                case 13:
                                    return r++, [3, 1];
                                case 14:
                                    return this.syncEngineListener.onWatchChange(n), [2, e]
                            }
                        })
                    })
                }, Tf.prototype.synthesizeTargetToQuery = function(t) { return new Rc(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, Dc.First, t.startAt, t.endAt) }, Tf.prototype.getActiveClients = function() { return this.localStore.getActiveClients() }, Tf.prototype.applyTargetState = function(r, i, o) {
                    return p(this, void 0, void 0, function() {
                        var e, n;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (this.isPrimary) return Fr(gf, "Ignoring unexpected query state notification."), [2];
                                    if (!this.queriesByTarget[r]) return [3, 7];
                                    switch (i) {
                                        case "current":
                                        case "not-current":
                                            return [3, 1];
                                        case "rejected":
                                            return [3, 4]
                                    }
                                    return [3, 6];
                                case 1:
                                    return [4, this.localStore.getNewDocumentChanges()];
                                case 2:
                                    return e = t.sent(), n = gl.createSynthesizedRemoteEventForCurrentChange(r, "current" === i), [4, this.emitNewSnapsAndNotifyLocalStore(e, n)];
                                case 3:
                                    return t.sent(), [3, 7];
                                case 4:
                                    return [4, this.localStore.releaseTarget(r, !0)];
                                case 5:
                                    return t.sent(), this.removeAndCleanupTarget(r, o), [3, 7];
                                case 6:
                                    Br("Unexpected target state: " + i), t.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.applyActiveTargetsChange = function(l, f) {
                    return p(this, void 0, void 0, function() {
                        var e, n, r, i, o, a, s, u, c, h = this;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!this.isPrimary) return [2];
                                    e = 0, n = l, t.label = 1;
                                case 1:
                                    return e < n.length ? (c = n[e], Ur(!this.queriesByTarget[c], "Trying to add an already active target"), [4, this.localStore.getTarget(c)]) : [3, 6];
                                case 2:
                                    return Ur(!!(r = t.sent()), "Query data for active target " + c + " not found"), [4, this.localStore.allocateTarget(r)];
                                case 3:
                                    return i = t.sent(), [4, this.initializeViewAndComputeSnapshot(this.synthesizeTargetToQuery(r), i.targetId, !1)];
                                case 4:
                                    t.sent(), this.remoteStore.listen(i), t.label = 5;
                                case 5:
                                    return e++, [3, 1];
                                case 6:
                                    o = function(e) {
                                        return m(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return a.queriesByTarget[e] ? [4, a.localStore.releaseTarget(e, !1).then(function() { h.remoteStore.unlisten(e), h.removeAndCleanupTarget(e) }).catch(dc)] : [2, "continue"];
                                                case 1:
                                                    return t.sent(), [2]
                                            }
                                        })
                                    }, a = this, s = 0, u = f, t.label = 7;
                                case 7:
                                    return s < u.length ? (c = u[s], [5, o(c)]) : [3, 10];
                                case 8:
                                    t.sent(), t.label = 9;
                                case 9:
                                    return s++, [3, 7];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, Tf.prototype.enableNetwork = function() { return this.localStore.setNetworkEnabled(!0), this.remoteStore.enableNetwork() }, Tf.prototype.disableNetwork = function() { return this.localStore.setNetworkEnabled(!1), this.remoteStore.disableNetwork() }, Tf.prototype.getRemoteKeysForTarget = function(t) {
                    var e = this.limboResolutionsByTarget[t];
                    if (e && e.receivedDocument) return Lo().add(e.key);
                    var n = Lo(),
                        r = this.queriesByTarget[t];
                    if (!r) return n;
                    for (var i = 0, o = r; i < o.length; i++) {
                        var a = o[i],
                            s = this.queryViewsByQuery.get(a);
                        Ur(!!s, "No query view found for " + a), n = n.unionWith(s.view.syncedDocuments)
                    }
                    return n
                }, Tf);

            function Tf(t, e, n, r) { this.localStore = t, this.remoteStore = e, this.sharedClientState = n, this.currentUser = r, this.syncEngineListener = null, this.queryViewsByQuery = new zs(function(t) { return t.canonicalId() }), this.queriesByTarget = {}, this.limboTargetsByKey = new po(Wi.comparator), this.limboResolutionsByTarget = {}, this.limboDocumentRefs = new lh, this.mutationUserCallbacks = {}, this.pendingWritesCallbacks = new Map, this.limboTargetIdGenerator = la.forSyncEngine(), this.isPrimary = void 0, this.onlineState = Yh.Unknown }
            var Sf = (Ef.prototype.isAuthenticated = function() { return null != this.uid }, Ef.prototype.toKey = function() { return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user" }, Ef.prototype.isEqual = function(t) { return t.uid === this.uid }, Ef.UNAUTHENTICATED = new Ef(null), Ef.GOOGLE_CREDENTIALS = new Ef("google-credentials-uid"), Ef.FIRST_PARTY = new Ef("first-party-uid"), Ef);

            function Ef(t) { this.uid = t }
            var If = "firestore_clients";

            function Cf(t, e) { return Ur(-1 === e.indexOf("_"), "Client key cannot contain '_', but was '" + e + "'"), If + "_" + t + "_" + e }
            var Df = "firestore_mutations";

            function Nf(t, e, n) { var r = Df + "_" + t + "_" + n; return e.isAuthenticated() && (r += "_" + e.uid), r }
            var Af = "firestore_targets";

            function kf(t, e) { return Af + "_" + t + "_" + e }
            var Rf = "firestore_online_state";
            var Mf = "firestore_sequence_number";
            var _f = "SharedClientState",
                Of = (Lf.fromWebStorageEntry = function(t, e, n) {
                    var r = JSON.parse(n),
                        i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                        o = void 0;
                    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new zr(r.error.code, r.error.message)), i ? new Lf(t, e, r.state, o) : (qr(_f, "Failed to parse mutation state for ID '" + e + "': " + n), null)
                }, Lf.prototype.toWebStorageJSON = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, Lf);

            function Lf(t, e, n, r) { this.user = t, this.batchId = e, this.state = n, Ur(void 0 !== (this.error = r) == ("rejected" === n), "MutationMetadata must contain an error iff state is 'rejected'") }
            var Pf = (xf.fromWebStorageEntry = function(t, e) {
                var n = JSON.parse(e),
                    r = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error),
                    i = void 0;
                return r && n.error && (r = "string" == typeof n.error.message && "string" == typeof n.error.code) && (i = new zr(n.error.code, n.error.message)), r ? new xf(t, n.state, i) : (qr(_f, "Failed to parse target state for ID '" + t + "': " + e), null)
            }, xf.prototype.toWebStorageJSON = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, xf);

            function xf(t, e, n) { this.targetId = t, this.state = e, Ur(void 0 !== (this.error = n) == ("rejected" === e), "QueryTargetMetadata must contain an error iff state is 'rejected'") }
            var Ff = (qf.fromWebStorageEntry = function(t, e) { for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = xo(), o = 0; r && o < n.activeTargetIds.length; ++o) r = Cc(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]); return r ? new qf(t, i) : (qr(_f, "Failed to parse client data for instance '" + t + "': " + e), null) }, qf);

            function qf(t, e) { this.clientId = t, this.activeTargetIds = e }
            var Vf = (Bf.fromWebStorageEntry = function(t) { var e = JSON.parse(t); return "object" == typeof e && e.onlineState in Yh && "string" == typeof e.clientId ? new Bf(e.clientId, Yh[e.onlineState]) : (qr(_f, "Failed to parse online state: " + t), null) }, Bf);

            function Bf(t, e) { this.clientId = t, this.onlineState = e }
            var Uf = (Kf.prototype.addQueryTarget = function(t) { this.activeTargetIds = this.activeTargetIds.add(t) }, Kf.prototype.removeQueryTarget = function(t) { this.activeTargetIds = this.activeTargetIds.delete(t) }, Kf.prototype.toWebStorageJSON = function() { var t = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() }; return JSON.stringify(t) }, Kf);

            function Kf() { this.activeTargetIds = xo() }
            var Qf = (jf.isAvailable = function(t) { return !(!t.window || null == t.window.localStorage) }, jf.prototype.start = function() {
                return p(this, void 0, void 0, function() {
                    var e, n, r, i, o, a, s, u, c, h, l, f = this;
                    return m(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return Ur(!this.started, "WebStorageSharedClientState already started"), Ur(null !== this.syncEngine, "syncEngine property must be set before calling start()"), Ur(null !== this.onlineStateHandler, "onlineStateHandler property must be set before calling start()"), [4, this.syncEngine.getActiveClients()];
                            case 1:
                                for (e = t.sent(), n = 0, r = e; n < r.length; n++)(i = r[n]) !== this.localClientId && (o = this.getItem(Cf(this.persistenceKey, i))) && (a = Ff.fromWebStorageEntry(i, o)) && (this.activeClients[a.clientId] = a);
                                for (this.persistClientState(), (s = this.storage.getItem(this.onlineStateKey)) && (u = this.fromWebStorageOnlineState(s)) && this.handleOnlineStateEvent(u), c = 0, h = this.earlyEvents; c < h.length; c++) l = h[c], this.handleWebStorageEvent(l);
                                return this.earlyEvents = [], this.platform.window.addEventListener("unload", function() { return f.shutdown() }), this.started = !0, [2]
                        }
                    })
                })
            }, jf.prototype.writeSequenceNumber = function(t) { this.setItem(this.sequenceNumberKey, JSON.stringify(t)) }, jf.prototype.getAllActiveQueryTargets = function() { var n = xo(); return $r(this.activeClients, function(t, e) { n = n.unionWith(e.activeTargetIds) }), n }, jf.prototype.isActiveQueryTarget = function(t) {
                for (var e in this.activeClients)
                    if (this.activeClients.hasOwnProperty(e) && this.activeClients[e].activeTargetIds.has(t)) return !0;
                return !1
            }, jf.prototype.addPendingMutation = function(t) { this.persistMutationState(t, "pending") }, jf.prototype.updateMutationState = function(t, e, n) { this.persistMutationState(t, e, n), this.removeMutationState(t) }, jf.prototype.addLocalQueryTarget = function(t) {
                var e = "not-current";
                if (this.isActiveQueryTarget(t)) {
                    var n = this.storage.getItem(kf(this.persistenceKey, t));
                    if (n) {
                        var r = Pf.fromWebStorageEntry(t, n);
                        r && (e = r.state)
                    }
                }
                return this.localClientState.addQueryTarget(t), this.persistClientState(), e
            }, jf.prototype.removeLocalQueryTarget = function(t) { this.localClientState.removeQueryTarget(t), this.persistClientState() }, jf.prototype.isLocalQueryTarget = function(t) { return this.localClientState.activeTargetIds.has(t) }, jf.prototype.clearQueryState = function(t) { this.removeItem(kf(this.persistenceKey, t)) }, jf.prototype.updateQueryState = function(t, e, n) { this.persistQueryTargetState(t, e, n) }, jf.prototype.handleUserChange = function(t, e, n) {
                var r = this;
                e.forEach(function(t) { r.removeMutationState(t) }), this.currentUser = t, n.forEach(function(t) { r.addPendingMutation(t) })
            }, jf.prototype.setOnlineState = function(t) { this.persistOnlineState(t) }, jf.prototype.shutdown = function() { this.started && (this.platform.window.removeEventListener("storage", this.storageListener), this.removeItem(this.localClientStorageKey), this.started = !1) }, jf.prototype.getItem = function(t) { var e = this.storage.getItem(t); return Fr(_f, "READ", t, e), e }, jf.prototype.setItem = function(t, e) { Fr(_f, "SET", t, e), this.storage.setItem(t, e) }, jf.prototype.removeItem = function(t) { Fr(_f, "REMOVE", t), this.storage.removeItem(t) }, jf.prototype.handleWebStorageEvent = function(s) {
                var t = this;
                if (s.storageArea === this.storage) {
                    if (Fr(_f, "EVENT", s.key, s.newValue), s.key === this.localClientStorageKey) return void qr("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                    this.queue.enqueueAndForget(function() {
                        return p(t, void 0, void 0, function() {
                            var e, n, r, i, o, a;
                            return m(this, function(t) {
                                if (!this.started) return this.earlyEvents.push(s), [2];
                                if (null === s.key) return [2];
                                if (this.clientStateKeyRe.test(s.key)) { if (null == s.newValue) return n = this.fromWebStorageClientStateKey(s.key), [2, this.handleClientStateEvent(n, null)]; if (e = this.fromWebStorageClientState(s.key, s.newValue)) return [2, this.handleClientStateEvent(e.clientId, e)] } else if (this.mutationBatchKeyRe.test(s.key)) { if (null !== s.newValue && (r = this.fromWebStorageMutationMetadata(s.key, s.newValue))) return [2, this.handleMutationBatchEvent(r)] } else if (this.queryTargetKeyRe.test(s.key)) { if (null !== s.newValue && (i = this.fromWebStorageQueryTargetMetadata(s.key, s.newValue))) return [2, this.handleQueryTargetEvent(i)] } else if (s.key === this.onlineStateKey) { if (null !== s.newValue && (o = this.fromWebStorageOnlineState(s.newValue))) return [2, this.handleOnlineStateEvent(o)] } else s.key === this.sequenceNumberKey && (Ur(!!this.sequenceNumberHandler, "Missing sequenceNumberHandler"), (a = function(t) {
                                    var e = Li.INVALID;
                                    if (null != t) try {
                                        var n = JSON.parse(t);
                                        Ur("number" == typeof n, "Found non-numeric sequence number"), e = n
                                    } catch (t) { qr(_f, "Failed to read sequence number from WebStorage", t) }
                                    return e
                                }(s.newValue)) !== Li.INVALID && this.sequenceNumberHandler(a));
                                return [2]
                            })
                        })
                    })
                }
            }, Object.defineProperty(jf.prototype, "localClientState", { get: function() { return this.activeClients[this.localClientId] }, enumerable: !0, configurable: !0 }), jf.prototype.persistClientState = function() { this.setItem(this.localClientStorageKey, this.localClientState.toWebStorageJSON()) }, jf.prototype.persistMutationState = function(t, e, n) {
                var r = new Of(this.currentUser, t, e, n),
                    i = Nf(this.persistenceKey, this.currentUser, t);
                this.setItem(i, r.toWebStorageJSON())
            }, jf.prototype.removeMutationState = function(t) {
                var e = Nf(this.persistenceKey, this.currentUser, t);
                this.removeItem(e)
            }, jf.prototype.persistOnlineState = function(t) {
                var e = { clientId: this.localClientId, onlineState: Yh[t] };
                this.storage.setItem(this.onlineStateKey, JSON.stringify(e))
            }, jf.prototype.persistQueryTargetState = function(t, e, n) {
                var r = kf(this.persistenceKey, t),
                    i = new Pf(t, e, n);
                this.setItem(r, i.toWebStorageJSON())
            }, jf.prototype.fromWebStorageClientStateKey = function(t) { var e = this.clientStateKeyRe.exec(t); return e ? e[1] : null }, jf.prototype.fromWebStorageClientState = function(t, e) { var n = this.fromWebStorageClientStateKey(t); return Ur(null !== n, "Cannot parse client state key '" + t + "'"), Ff.fromWebStorageEntry(n, e) }, jf.prototype.fromWebStorageMutationMetadata = function(t, e) {
                var n = this.mutationBatchKeyRe.exec(t);
                Ur(null !== n, "Cannot parse mutation batch key '" + t + "'");
                var r = Number(n[1]),
                    i = void 0 !== n[2] ? n[2] : null;
                return Of.fromWebStorageEntry(new Sf(i), r, e)
            }, jf.prototype.fromWebStorageQueryTargetMetadata = function(t, e) {
                var n = this.queryTargetKeyRe.exec(t);
                Ur(null !== n, "Cannot parse query target key '" + t + "'");
                var r = Number(n[1]);
                return Pf.fromWebStorageEntry(r, e)
            }, jf.prototype.fromWebStorageOnlineState = function(t) { return Vf.fromWebStorageEntry(t) }, jf.prototype.handleMutationBatchEvent = function(e) { return p(this, void 0, void 0, function() { return m(this, function(t) { return e.user.uid !== this.currentUser.uid ? (Fr(_f, "Ignoring mutation for non-active user " + e.user.uid), [2]) : [2, this.syncEngine.applyBatchState(e.batchId, e.state, e.error)] }) }) }, jf.prototype.handleQueryTargetEvent = function(t) { return this.syncEngine.applyTargetState(t.targetId, t.state, t.error) }, jf.prototype.handleClientStateEvent = function(t, e) {
                var n = this,
                    r = this.getAllActiveQueryTargets();
                e ? this.activeClients[t] = e : delete this.activeClients[t];
                var i = this.getAllActiveQueryTargets(),
                    o = [],
                    a = [];
                return i.forEach(function(e) { return p(n, void 0, void 0, function() { return m(this, function(t) { return r.has(e) || o.push(e), [2] }) }) }), r.forEach(function(e) { return p(n, void 0, void 0, function() { return m(this, function(t) { return i.has(e) || a.push(e), [2] }) }) }), this.syncEngine.applyActiveTargetsChange(o, a)
            }, jf.prototype.handleOnlineStateEvent = function(t) { this.activeClients[t.clientId] && this.onlineStateHandler(t.onlineState) }, jf);

            function jf(t, e, n, r, i) {
                if (this.queue = t, this.platform = e, this.persistenceKey = n, this.localClientId = r, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null, this.activeClients = {}, this.storageListener = this.handleWebStorageEvent.bind(this), this.started = !1, this.earlyEvents = [], !jf.isAvailable(this.platform)) throw new zr(Wr.UNIMPLEMENTED, "LocalStorage is not available on this platform.");
                var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                this.storage = this.platform.window.localStorage, this.currentUser = i, this.localClientStorageKey = Cf(this.persistenceKey, this.localClientId), this.sequenceNumberKey = function(t) { return Mf + "_" + t }(this.persistenceKey), this.activeClients[this.localClientId] = new Uf, this.clientStateKeyRe = new RegExp("^" + If + "_" + o + "_([^_]*)$"), this.mutationBatchKeyRe = new RegExp("^" + Df + "_" + o + "_(\\d+)(?:_(.*))?$"), this.queryTargetKeyRe = new RegExp("^" + Af + "_" + o + "_(\\d+)$"), this.onlineStateKey = function(t) { return Rf + "_" + t }(this.persistenceKey), this.platform.window.addEventListener("storage", this.storageListener)
            }
            var Gf = (Wf.prototype.addPendingMutation = function(t) {}, Wf.prototype.updateMutationState = function(t, e, n) {}, Wf.prototype.addLocalQueryTarget = function(t) { return this.localState.addQueryTarget(t), this.queryState[t] || "not-current" }, Wf.prototype.updateQueryState = function(t, e, n) { this.queryState[t] = e }, Wf.prototype.removeLocalQueryTarget = function(t) { this.localState.removeQueryTarget(t) }, Wf.prototype.isLocalQueryTarget = function(t) { return this.localState.activeTargetIds.has(t) }, Wf.prototype.clearQueryState = function(t) { delete this.queryState[t] }, Wf.prototype.getAllActiveQueryTargets = function() { return this.localState.activeTargetIds }, Wf.prototype.isActiveQueryTarget = function(t) { return this.localState.activeTargetIds.has(t) }, Wf.prototype.start = function() { return this.localState = new Uf, Promise.resolve() }, Wf.prototype.handleUserChange = function(t, e, n) {}, Wf.prototype.setOnlineState = function(t) {}, Wf.prototype.shutdown = function() {}, Wf.prototype.writeSequenceNumber = function(t) {}, Wf);

            function Wf() { this.localState = new Uf, this.queryState = {}, this.syncEngine = null, this.onlineStateHandler = null, this.sequenceNumberHandler = null }
            var zf = "FirestoreClient",
                Hf = (Yf.prototype.lruParams = function() { return Zu.withCacheSize(this.cacheSizeBytes) }, Yf);

            function Yf(t, e) { this.cacheSizeBytes = t, this.synchronizeTabs = e }
            var Jf = function() {},
                Xf = (Zf.prototype.start = function(t) {
                    var n = this;
                    this.verifyNotTerminated();
                    var r = new Ji,
                        i = new Ji,
                        o = !1;
                    return this.credentials.setChangeListener(function(e) { o ? n.asyncQueue.enqueueAndForget(function() { return n.handleCredentialChange(e) }) : (o = !0, n.initializePersistence(t, i, e).then(function(t) { return n.initializeRest(e, t) }).then(r.resolve, r.reject)) }), this.asyncQueue.enqueueAndForget(function() { return r.promise }), i.promise
                }, Zf.prototype.enableNetwork = function() { var t = this; return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() { return t.syncEngine.enableNetwork() }) }, Zf.prototype.initializePersistence = function(t, e, n) { var r = this; return t instanceof Hf ? this.startIndexedDbPersistence(n, t).then(function(t) { return e.resolve(), t }).catch(function(t) { if (e.reject(t), !r.canFallback(t)) throw t; return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + t), r.startMemoryPersistence() }) : (e.resolve(), this.startMemoryPersistence()) }, Zf.prototype.canFallback = function(t) { return t instanceof zr ? t.code === Wr.FAILED_PRECONDITION || t.code === Wr.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code }, Zf.prototype.verifyNotTerminated = function() { if (this.asyncQueue.isShuttingDown) throw new zr(Wr.FAILED_PRECONDITION, "The client has already been terminated.") }, Zf.prototype.startIndexedDbPersistence = function(r, i) {
                    var t = this,
                        o = fc.buildStoragePrefix(this.databaseInfo),
                        a = new ef(this.databaseInfo.databaseId, { useProto3Json: !0 });
                    return Promise.resolve().then(function() {
                        return p(t, void 0, void 0, function() {
                            var e, n;
                            return m(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (i.synchronizeTabs && !Qf.isAvailable(this.platform)) throw new zr(Wr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                                        return e = i.lruParams(), this.sharedClientState = i.synchronizeTabs ? new Qf(this.asyncQueue, this.platform, o, this.clientId, r) : new Gf, [4, fc.createIndexedDbPersistence({ allowTabSynchronization: i.synchronizeTabs, persistenceKey: o, clientId: this.clientId, platform: this.platform, queue: this.asyncQueue, serializer: a, lruParams: e, sequenceNumberSyncer: this.sharedClientState })];
                                    case 1:
                                        return n = t.sent(), [2, (this.persistence = n).referenceDelegate.garbageCollector]
                                }
                            })
                        })
                    })
                }, Zf.prototype.startMemoryPersistence = function() { return this.persistence = Ch.createEagerPersistence(this.clientId), this.sharedClientState = new Gf, Promise.resolve(null) }, Zf.prototype.initializeRest = function(c, h) {
                    var t = this;
                    return Fr(zf, "Initializing. user=", c.uid), this.platform.loadConnection(this.databaseInfo).then(function(u) {
                        return p(t, void 0, void 0, function() {
                            var e, n, r, i, o, a, s = this;
                            return m(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = new sh, this.localStore = new mh(this.persistence, e, c), [4, this.localStore.start()];
                                    case 1:
                                        return t.sent(), h && (this.lruScheduler = new tc(h, this.asyncQueue, this.localStore)), n = this.platform.newConnectivityMonitor(), r = this.platform.newSerializer(this.databaseInfo.databaseId), i = new zh(this.asyncQueue, u, this.credentials, r), o = function(t) { return s.syncEngine.applyOnlineStateChange(t, Xh.RemoteStore) }, a = function(t) { return s.syncEngine.applyOnlineStateChange(t, Xh.SharedClientState) }, this.remoteStore = new Ol(this.localStore, i, this.asyncQueue, o, n), this.syncEngine = new wf(this.localStore, this.remoteStore, this.sharedClientState, c), this.sharedClientState.onlineStateHandler = a, this.remoteStore.syncEngine = this.syncEngine, this.sharedClientState.syncEngine = this.syncEngine, this.eventMgr = new of(this.syncEngine), [4, this.sharedClientState.start()];
                                    case 2:
                                        return t.sent(), [4, this.remoteStore.start()];
                                    case 3:
                                        return t.sent(), [4, this.persistence.setPrimaryStateListener(function(e) {
                                            return p(s, void 0, void 0, function() {
                                                return m(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this.syncEngine.applyPrimaryState(e)];
                                                        case 1:
                                                            return t.sent(), this.lruScheduler && (e && !this.lruScheduler.started ? this.lruScheduler.start() : e || this.lruScheduler.stop()), [2]
                                                    }
                                                })
                                            })
                                        })];
                                    case 4:
                                        return t.sent(), [4, this.persistence.setDatabaseDeletedListener(function() {
                                            return p(s, void 0, void 0, function() {
                                                return m(this, function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, this.terminate()];
                                                        case 1:
                                                            return t.sent(), [2]
                                                    }
                                                })
                                            })
                                        })];
                                    case 5:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    })
                }, Zf.prototype.handleCredentialChange = function(t) { return this.asyncQueue.verifyOperationInProgress(), Fr(zf, "Credential Changed. Current user: " + t.uid), this.syncEngine.handleCredentialChange(t) }, Zf.prototype.disableNetwork = function() { var t = this; return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() { return t.syncEngine.disableNetwork() }) }, Zf.prototype.terminate = function() {
                    var t = this;
                    return this.asyncQueue.enqueueAndInitiateShutdown(function() {
                        return p(t, void 0, void 0, function() {
                            return m(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.lruScheduler && this.lruScheduler.stop(), [4, this.remoteStore.shutdown()];
                                    case 1:
                                        return t.sent(), [4, this.sharedClientState.shutdown()];
                                    case 2:
                                        return t.sent(), [4, this.persistence.shutdown()];
                                    case 3:
                                        return t.sent(), this.credentials.removeChangeListener(), [2]
                                }
                            })
                        })
                    })
                }, Zf.prototype.waitForPendingWrites = function() {
                    var t = this;
                    this.verifyNotTerminated();
                    var e = new Ji;
                    return this.asyncQueue.enqueueAndForget(function() { return t.syncEngine.registerPendingWritesCallback(e) }), e.promise
                }, Zf.prototype.listen = function(t, e, n) {
                    var r = this;
                    this.verifyNotTerminated();
                    var i = new sf(t, e, n);
                    return this.asyncQueue.enqueueAndForget(function() { return r.eventMgr.listen(i) }), i
                }, Zf.prototype.unlisten = function(t) {
                    var e = this;
                    this.clientTerminated || this.asyncQueue.enqueueAndForget(function() { return e.eventMgr.unlisten(t) })
                }, Zf.prototype.getDocumentFromLocalCache = function(t) { var e = this; return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() { return e.localStore.readDocument(t) }).then(function(t) { if (t instanceof Vs) return t; if (t instanceof Ks) return null; throw new zr(Wr.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)") }) }, Zf.prototype.getDocumentsFromLocalCache = function(i) {
                    var t = this;
                    return this.verifyNotTerminated(), this.asyncQueue.enqueue(function() {
                        return p(t, void 0, void 0, function() {
                            var e, n, r;
                            return m(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.localStore.executeQuery(i, !0)];
                                    case 1:
                                        return e = t.sent(), n = new pf(i, e.remoteKeys), r = n.computeDocChanges(e.documents), [2, n.applyChanges(r, !1).snapshot]
                                }
                            })
                        })
                    })
                }, Zf.prototype.write = function(t) {
                    var e = this;
                    this.verifyNotTerminated();
                    var n = new Ji;
                    return this.asyncQueue.enqueueAndForget(function() { return e.syncEngine.write(t, n) }), n.promise
                }, Zf.prototype.databaseId = function() { return this.databaseInfo.databaseId }, Zf.prototype.addSnapshotsInSyncListener = function(t) {
                    var e = this;
                    this.verifyNotTerminated(), this.asyncQueue.enqueueAndForget(function() { return e.eventMgr.addSnapshotsInSyncListener(t), Promise.resolve() })
                }, Zf.prototype.removeSnapshotsInSyncListener = function(t) { this.clientTerminated || this.eventMgr.removeSnapshotsInSyncListener(t) }, Object.defineProperty(Zf.prototype, "clientTerminated", { get: function() { return this.asyncQueue.isShuttingDown }, enumerable: !0, configurable: !0 }), Zf.prototype.transaction = function(t) {
                    var e = this;
                    this.verifyNotTerminated();
                    var n = new Ji;
                    return this.asyncQueue.enqueueAndForget(function() { return e.syncEngine.runTransaction(e.asyncQueue, t, n), Promise.resolve() }), n.promise
                }, Zf);

            function Zf(t, e, n, r) { this.platform = t, this.databaseInfo = e, this.credentials = n, this.asyncQueue = r, this.clientId = wi.newId() }
            var $f = (tp.prototype.next = function(t) { this.scheduleEvent(this.observer.next, t) }, tp.prototype.error = function(t) { this.scheduleEvent(this.observer.error, t) }, tp.prototype.mute = function() { this.muted = !0 }, tp.prototype.scheduleEvent = function(t, e) {
                var n = this;
                this.muted || setTimeout(function() { n.muted || t(e) }, 0)
            }, tp);

            function tp(t) { this.observer = t, this.muted = !1 }
            var ep = (np.documentId = function() { return np._DOCUMENT_ID }, np.prototype.isEqual = function(t) { if (!(t instanceof np)) throw yi("isEqual", "FieldPath", 1, t); return this._internalPath.isEqual(t._internalPath) }, np._DOCUMENT_ID = new np(ji.keyField().canonicalString()), np);

            function np() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                ! function(t, e, n, r) { if (!(e instanceof Array) || e.length < r) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " argument to be an array with at least " + bi(r, "element") + ".") }("FieldPath", t, "fieldNames", 1);
                for (var n = 0; n < t.length; ++n)
                    if (oi("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new zr(Wr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                this._internalPath = new ji(t)
            }
            var rp = new RegExp("[~\\*/\\[\\]]");
            var ip = function(t, e) { this.user = e, this.type = "OAuth", this.authHeaders = {}, this.authHeaders.Authorization = "Bearer " + t },
                op = (ap.prototype.getToken = function() { return Promise.resolve(null) }, ap.prototype.invalidateToken = function() {}, ap.prototype.setChangeListener = function(t) { Ur(!this.changeListener, "Can only call setChangeListener() once."), (this.changeListener = t)(Sf.UNAUTHENTICATED) }, ap.prototype.removeChangeListener = function() { Ur(null !== this.changeListener, "removeChangeListener() when no listener registered"), this.changeListener = null }, ap);

            function ap() { this.changeListener = null }
            var sp = (up.prototype.getToken = function() {
                var e = this;
                Ur(null != this.tokenListener, "getToken cannot be called after listener removed.");
                var n = this.tokenCounter,
                    t = this.forceRefresh;
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then(function(t) { if (e.tokenCounter !== n) throw new zr(Wr.ABORTED, "getToken aborted due to token change."); return t ? (Ur("string" == typeof t.accessToken, "Invalid tokenData returned from getToken():" + t), new ip(t.accessToken, e.currentUser)) : null }) : Promise.resolve(null)
            }, up.prototype.invalidateToken = function() { this.forceRefresh = !0 }, up.prototype.setChangeListener = function(t) { Ur(!this.changeListener, "Can only call setChangeListener() once."), this.changeListener = t, this.receivedInitialUser && t(this.currentUser) }, up.prototype.removeChangeListener = function() { Ur(null != this.tokenListener, "removeChangeListener() called twice"), Ur(null !== this.changeListener, "removeChangeListener() called when no listener registered"), this.auth && this.auth.removeAuthTokenListener(this.tokenListener), this.tokenListener = null, this.changeListener = null }, up.prototype.getUser = function() { var t = this.auth && this.auth.getUid(); return Ur(null === t || "string" == typeof t, "Received invalid UID: " + t), new Sf(t) }, up);

            function up(t) {
                var e = this;
                this.tokenListener = null, this.currentUser = Sf.UNAUTHENTICATED, this.receivedInitialUser = !1, this.tokenCounter = 0, this.changeListener = null, this.forceRefresh = !1, this.tokenListener = function() { e.tokenCounter++, e.currentUser = e.getUser(), e.receivedInitialUser = !0, e.changeListener && e.changeListener(e.currentUser) }, this.tokenCounter = 0, this.auth = t.getImmediate({ optional: !0 }), this.auth ? this.auth.addAuthTokenListener(this.tokenListener) : (this.tokenListener(null), t.get().then(function(t) { e.auth = t, e.tokenListener && e.auth.addAuthTokenListener(e.tokenListener) }, function() {}))
            }
            var cp = (Object.defineProperty(hp.prototype, "authHeaders", {
                get: function() {
                    var t = { "X-Goog-AuthUser": this.sessionIndex },
                        e = this.gapi.auth.getAuthHeaderValueForFirstParty([]);
                    return e && (t.Authorization = e), t
                },
                enumerable: !0,
                configurable: !0
            }), hp);

            function hp(t, e) { this.gapi = t, this.sessionIndex = e, this.type = "FirstParty", this.user = Sf.FIRST_PARTY }
            var lp = (fp.prototype.getToken = function() { return Promise.resolve(new cp(this.gapi, this.sessionIndex)) }, fp.prototype.setChangeListener = function(t) { t(Sf.FIRST_PARTY) }, fp.prototype.removeChangeListener = function() {}, fp.prototype.invalidateToken = function() {}, fp);

            function fp(t, e) { this.gapi = t, this.sessionIndex = e }

            function pp(t) { return function(t, e) { if ("object" != typeof t || null === t) return !1; for (var n = t, r = 0, i = e; r < i.length; r++) { var o = i[r]; if (o in n && "function" == typeof n[o]) return !0 } return !1 }(t, ["next", "error", "complete"]) }
            var dp = (mp.delete = function() { return ei("FieldValue.delete", arguments), gp.instance }, mp.serverTimestamp = function() { return ei("FieldValue.serverTimestamp", arguments), wp.instance }, mp.arrayUnion = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return ri("FieldValue.arrayUnion", arguments, 1), new Ep(t) }, mp.arrayRemove = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return ri("FieldValue.arrayRemove", arguments, 1), new Dp(t) }, mp.increment = function(t) { return oi("FieldValue.increment", "number", 1, t), ni("FieldValue.increment", arguments, 1), new kp(t) }, mp.prototype.isEqual = function(t) { return this === t }, mp);

            function mp(t) { this._methodName = t }
            var yp, gp = (t(vp, yp = dp), vp.instance = new vp, vp);

            function vp() { return yp.call(this, "FieldValue.delete") || this }
            var bp, wp = (t(Tp, bp = dp), Tp.instance = new Tp, Tp);

            function Tp() { return bp.call(this, "FieldValue.serverTimestamp") || this }
            var Sp, Ep = (t(Ip, Sp = dp), Ip);

            function Ip(t) { var e = Sp.call(this, "FieldValue.arrayUnion") || this; return e._elements = t, e }
            var Cp, Dp = (t(Np, Cp = dp), Np);

            function Np(t) { var e = Cp.call(this, "FieldValue.arrayRemove") || this; return e._elements = t, e }
            var Ap, kp = (t(Rp, Ap = dp), Rp);

            function Rp(t) { var e = Ap.call(this, "FieldValue.increment") || this; return e._operand = t, e }
            var Mp = Yr(dp, "Use FieldValue.<field>() instead."),
                _p = /^__.*__$/,
                Op = (Lp.prototype.toMutations = function(t, e) { var n = []; return null !== this.fieldMask ? n.push(new La(t, this.data, this.fieldMask, e)) : n.push(new Ma(t, this.data, e)), 0 < this.fieldTransforms.length && n.push(new Fa(t, this.fieldTransforms)), n }, Lp);

            function Lp(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n }
            var Pp, xp, Fp = (qp.prototype.toMutations = function(t, e) { var n = [new La(t, this.data, this.fieldMask, e)]; return 0 < this.fieldTransforms.length && n.push(new Fa(t, this.fieldTransforms)), n }, qp);

            function qp(t, e, n) { this.data = t, this.fieldMask = e, this.fieldTransforms = n }

            function Vp(t) {
                switch (t) {
                    case Pp.Set:
                    case Pp.MergeSet:
                    case Pp.Update:
                        return !0;
                    case Pp.Argument:
                    case Pp.ArrayArgument:
                        return !1;
                    default:
                        throw Br("Unexpected case for UserDataSource: " + t)
                }
            }(xp = Pp = Pp || {})[xp.Set = 0] = "Set", xp[xp.Update = 1] = "Update", xp[xp.MergeSet = 2] = "MergeSet", xp[xp.Argument = 3] = "Argument", xp[xp.ArrayArgument = 4] = "ArrayArgument";
            var Bp = (Up.prototype.childContextForField = function(t) {
                var e = null == this.path ? null : this.path.child(t),
                    n = new Up(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask);
                return n.validatePathSegment(t), n
            }, Up.prototype.childContextForFieldPath = function(t) {
                var e = null == this.path ? null : this.path.child(t),
                    n = new Up(this.dataSource, this.methodName, e, !1, this.fieldTransforms, this.fieldMask);
                return n.validatePath(), n
            }, Up.prototype.childContextForArray = function(t) { return new Up(this.dataSource, this.methodName, null, !0, this.fieldTransforms, this.fieldMask) }, Up.prototype.createError = function(t) { var e = null === this.path || this.path.isEmpty() ? "" : " (found in field " + this.path.toString() + ")"; return new zr(Wr.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e) }, Up.prototype.contains = function(e) { return void 0 !== this.fieldMask.find(function(t) { return e.isPrefixOf(t) }) || void 0 !== this.fieldTransforms.find(function(t) { return e.isPrefixOf(t.field) }) }, Up.prototype.validatePath = function() {
                if (null !== this.path)
                    for (var t = 0; t < this.path.length; t++) this.validatePathSegment(this.path.get(t))
            }, Up.prototype.validatePathSegment = function(t) { if (0 === t.length) throw this.createError("Document fields must not be empty"); if (Vp(this.dataSource) && _p.test(t)) throw this.createError('Document fields cannot begin and end with "__"') }, Up);

            function Up(t, e, n, r, i, o) { this.dataSource = t, this.methodName = e, this.path = n, this.arrayElement = r, void 0 === i && this.validatePath(), this.arrayElement = void 0 !== r && r, this.fieldTransforms = i || [], this.fieldMask = o || [] }
            var Kp = function(t, e) { this.databaseId = t, this.key = e },
                Qp = (jp.prototype.parseSetData = function(t, e) {
                    var n = new Bp(Pp.Set, t, ji.EMPTY_PATH);
                    Wp("Data must be an object, but it was:", n, e);
                    var r = this.parseData(e, n);
                    return new Op(r, null, n.fieldTransforms)
                }, jp.prototype.parseMergeData = function(t, e, n) {
                    var r = new Bp(Pp.MergeSet, t, ji.EMPTY_PATH);
                    Wp("Data must be an object, but it was:", r, e);
                    var i, o, a = this.parseData(e, r);
                    if (n) {
                        for (var s = new So(ji.comparator), u = 0, c = n; u < c.length; u++) {
                            var h = c[u],
                                l = void 0;
                            if (h instanceof ep) l = h._internalPath;
                            else {
                                if ("string" != typeof h) throw Br("Expected stringOrFieldPath to be a string or a FieldPath");
                                l = Hp(t, h)
                            }
                            if (!r.contains(l)) throw new zr(Wr.INVALID_ARGUMENT, "Field '" + l + "' is specified in your field mask but missing from your input data.");
                            s = s.add(l)
                        }
                        i = ba.fromSet(s), o = r.fieldTransforms.filter(function(t) { return i.covers(t.field) })
                    } else i = ba.fromArray(r.fieldMask), o = r.fieldTransforms;
                    return new Op(a, i, o)
                }, jp.prototype.parseUpdateData = function(o, t) {
                    var a = this,
                        s = new Bp(Pp.Update, o, ji.EMPTY_PATH);
                    Wp("Data must be an object, but it was:", s, t);
                    var u = new So(ji.comparator),
                        c = Ms.EMPTY;
                    $r(t, function(t, e) {
                        var n = Hp(o, t),
                            r = s.childContextForFieldPath(n);
                        if ((e = a.runPreConverter(e, r)) instanceof gp) u = u.add(n);
                        else {
                            var i = a.parseData(e, r);
                            null != i && (u = u.add(n), c = c.set(n, i))
                        }
                    });
                    var e = ba.fromSet(u);
                    return new Fp(c, e, s.fieldTransforms)
                }, jp.prototype.parseUpdateVarargs = function(t, e, n, r) {
                    var i = new Bp(Pp.Update, t, ji.EMPTY_PATH),
                        o = [zp(t, e)],
                        a = [n];
                    if (r.length % 2 != 0) throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
                    for (var s = 0; s < r.length; s += 2) o.push(zp(t, r[s])), a.push(r[s + 1]);
                    var u = new So(ji.comparator),
                        c = Ms.EMPTY;
                    for (s = 0; s < o.length; ++s) {
                        var h = o[s],
                            l = i.childContextForFieldPath(h),
                            f = this.runPreConverter(a[s], l);
                        if (f instanceof gp) u = u.add(h);
                        else {
                            var p = this.parseData(f, l);
                            null != p && (u = u.add(h), c = c.set(h, p))
                        }
                    }
                    var d = ba.fromSet(u);
                    return new Fp(c, d, i.fieldTransforms)
                }, jp.prototype.parseQueryValue = function(t, e, n) {
                    void 0 === n && (n = !1);
                    var r = new Bp(n ? Pp.ArrayArgument : Pp.Argument, t, ji.EMPTY_PATH),
                        i = this.parseData(e, r);
                    return Ur(null != i, "Parsed data should not be null."), Ur(0 === r.fieldTransforms.length, "Field transforms should have been disallowed."), i
                }, jp.prototype.runPreConverter = function(t, e) { try { return this.preConverter(t) } catch (t) { var n = Yp(t); throw e.createError(n) } }, jp.prototype.parseData = function(t, e) { if (Gp(t = this.runPreConverter(t, e))) return Wp("Unsupported field value:", e, t), this.parseObject(t, e); if (t instanceof dp) return this.parseSentinelFieldValue(t, e), null; if (e.path && e.fieldMask.push(e.path), t instanceof Array) { if (e.arrayElement && e.dataSource !== Pp.ArrayArgument) throw e.createError("Nested arrays are not supported"); return this.parseArray(t, e) } return this.parseScalarValue(t, e) }, jp.prototype.parseObject = function(t, r) {
                    var i = this,
                        o = new po(Si);
                    return ti(t) ? r.path && 0 < r.path.length && r.fieldMask.push(r.path) : $r(t, function(t, e) {
                        var n = i.parseData(e, r.childContextForField(t));
                        null != n && (o = o.insert(t, n))
                    }), new Ms(o)
                }, jp.prototype.parseArray = function(t, e) {
                    for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                        var a = o[i],
                            s = this.parseData(a, e.childContextForArray(r));
                        null == s && (s = Xa.INSTANCE), n.push(s), r++
                    }
                    return new Ls(n)
                }, jp.prototype.parseSentinelFieldValue = function(t, e) {
                    if (!Vp(e.dataSource)) throw e.createError(t._methodName + "() can only be used with update() and set()");
                    if (null === e.path) throw e.createError(t._methodName + "() is not currently supported inside arrays");
                    if (t instanceof gp) {
                        if (e.dataSource !== Pp.MergeSet) throw e.dataSource === Pp.Update ? (Ur(0 < e.path.length, "FieldValue.delete() at the top level should have already been handled."), e.createError("FieldValue.delete() can only appear at the top level of your update data")) : e.createError("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                        e.fieldMask.push(e.path)
                    } else if (t instanceof wp) e.fieldTransforms.push(new Ta(e.path, Fl.instance));
                    else if (t instanceof Ep) {
                        var n = this.parseArrayTransformElements(t._methodName, t._elements),
                            r = new Vl(n);
                        e.fieldTransforms.push(new Ta(e.path, r))
                    } else if (t instanceof Dp) {
                        n = this.parseArrayTransformElements(t._methodName, t._elements);
                        var i = new Ul(n);
                        e.fieldTransforms.push(new Ta(e.path, i))
                    } else if (t instanceof kp) {
                        var o = this.parseQueryValue("FieldValue.increment", t._operand),
                            a = new Ql(o);
                        e.fieldTransforms.push(new Ta(e.path, a))
                    } else Br("Unknown FieldValue type: " + t)
                }, jp.prototype.parseScalarValue = function(t, e) { if (null === t) return Xa.INSTANCE; if ("number" == typeof t) return Cc(t) ? new ss(t) : new hs(t); if ("boolean" == typeof t) return ts.of(t); if ("string" == typeof t) return new ps(t); if (t instanceof Date) return new ys(co.fromDate(t)); if (t instanceof co) return new ys(new co(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))); if (t instanceof Pl) return new As(t); if (t instanceof Ni) return new Ss(t); if (t instanceof Kp) return new Cs(t.databaseId, t.key); throw e.createError("Unsupported field value: " + pi(t)) }, jp.prototype.parseArrayTransformElements = function(r, t) { var i = this; return t.map(function(t, e) { var n = new Bp(Pp.Argument, r, ji.EMPTY_PATH); return i.parseData(t, n.childContextForArray(e)) }) }, jp);

            function jp(t) { this.preConverter = t }

            function Gp(t) { return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof co || t instanceof Pl || t instanceof Ni || t instanceof Kp || t instanceof dp) }

            function Wp(t, e, n) { if (!Gp(n) || !fi(n)) { var r = pi(n); throw "an object" === r ? e.createError(t + " a custom object") : e.createError(t + " " + r) } }

            function zp(t, e) { if (e instanceof ep) return e._internalPath; if ("string" == typeof e) return Hp(t, e); throw new zr(Wr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.") }

            function Hp(e, t) { try { return function(e) { if (0 <= e.search(rp)) throw new zr(Wr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'"); try { return new(ep.bind.apply(ep, a([void 0], e.split(".")))) } catch (t) { throw new zr(Wr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'") } }(t)._internalPath } catch (t) { var n = Yp(t); throw new zr(Wr.INVALID_ARGUMENT, "Function " + e + "() called with invalid data. " + n) } }

            function Yp(t) { return t instanceof Error ? t.message : t.toString() }
            var Jp = Zu.COLLECTION_DISABLED,
                Xp = (Zp.prototype.isEqual = function(t) { return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling }, Zp);

            function Zp(t) {
                if (void 0 === t.host) {
                    if (void 0 !== t.ssl) throw new zr(Wr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                    this.host = "firestore.googleapis.com", this.ssl = !0
                } else si("settings", "non-empty string", "host", t.host), this.host = t.host, ui("settings", "boolean", "ssl", t.ssl), this.ssl = Xr(t.ssl, !0);
                if (mi("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling"]), ui("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, ui("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), !0 === t.timestampsInSnapshots ? qr("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && qr("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), this.timestampsInSnapshots = Xr(t.timestampsInSnapshots, !0), ui("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Zu.DEFAULT_CACHE_SIZE_BYTES;
                else {
                    if (t.cacheSizeBytes !== Jp && t.cacheSizeBytes < Zu.MINIMUM_CACHE_SIZE_BYTES) throw new zr(Wr.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Zu.MINIMUM_CACHE_SIZE_BYTES);
                    this.cacheSizeBytes = t.cacheSizeBytes
                }
                ui("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling
            }
            var $p = (td.prototype.settings = function(t) {
                if (ni("Firestore.settings", arguments, 1), oi("Firestore.settings", "object", 1, t), Jr(t, "persistence")) throw new zr(Wr.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
                var e = new Xp(t);
                if (this._firestoreClient && !this._settings.isEqual(e)) throw new zr(Wr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                void 0 !== (this._settings = e).credentials && (this._credentials = function(t) {
                    if (!t) return new op;
                    switch (t.type) {
                        case "gapi":
                            var e = t.client;
                            return Ur(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), new lp(e, t.sessionIndex || "0");
                        case "provider":
                            return t.client;
                        default:
                            throw new zr(Wr.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                    }
                }(e.credentials))
            }, td.prototype.enableNetwork = function() { return this.ensureClientConfigured(), this._firestoreClient.enableNetwork() }, td.prototype.disableNetwork = function() { return this.ensureClientConfigured(), this._firestoreClient.disableNetwork() }, td.prototype.enablePersistence = function(t) { if (this._firestoreClient) throw new zr(Wr.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object."); var e = !1; return t && (void 0 !== t.experimentalTabSynchronization && qr("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."), e = Xr(void 0 !== t.synchronizeTabs ? t.synchronizeTabs : t.experimentalTabSynchronization, !1)), this.configureClient(new Hf(this._settings.cacheSizeBytes, e)) }, td.prototype.clearPersistence = function() {
                var t = this,
                    n = fc.buildStoragePrefix(this.makeDatabaseInfo()),
                    r = new Ji;
                return this._queue.enqueueAndForgetEvenAfterShutdown(function() {
                    return p(t, void 0, void 0, function() {
                        var e;
                        return m(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (t.trys.push([0, 2, , 3]), void 0 !== this._firestoreClient && !this._firestoreClient.clientTerminated) throw new zr(Wr.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                                    return [4, fc.clearPersistence(n)];
                                case 1:
                                    return t.sent(), r.resolve(), [3, 3];
                                case 2:
                                    return e = t.sent(), r.reject(e), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }), r.promise
            }, td.prototype.terminate = function() { return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete() }, Object.defineProperty(td.prototype, "_isTerminated", { get: function() { return this.ensureClientConfigured(), this._firestoreClient.clientTerminated }, enumerable: !0, configurable: !0 }), td.prototype.waitForPendingWrites = function() { return this.ensureClientConfigured(), this._firestoreClient.waitForPendingWrites() }, td.prototype.onSnapshotsInSync = function(t) {
                if (this.ensureClientConfigured(), pp(t)) return this.onSnapshotsInSyncInternal(t);
                oi("Firestore.onSnapshotsInSync", "function", 1, t);
                var e = { next: t };
                return this.onSnapshotsInSyncInternal(e)
            }, td.prototype.onSnapshotsInSyncInternal = function(t) {
                var e = this,
                    n = new $f({ next: function() { t.next && t.next() }, error: function(t) { throw Br("Uncaught Error in onSnapshotsInSync") } });
                return this._firestoreClient.addSnapshotsInSyncListener(n),
                    function() { n.mute(), e._firestoreClient.removeSnapshotsInSyncListener(n) }
            }, td.prototype.ensureClientConfigured = function() { return this._firestoreClient || this.configureClient(new Jf), this._firestoreClient }, td.prototype.makeDatabaseInfo = function() { return new Ri(this._databaseId, this._persistenceKey, this._settings.host, this._settings.ssl, this._settings.forceLongPolling) }, td.prototype.configureClient = function(t) { Ur(!!this._settings.host, "FirestoreSettings.host is not set"), Ur(!this._firestoreClient, "configureClient() called multiple times"); var e = this.makeDatabaseInfo(); return this._firestoreClient = new Xf(Kr.getPlatform(), e, this._credentials, this._queue), this._firestoreClient.start(t) }, td.prototype.createDataConverter = function(r) {
                return new Qp(function(t) {
                    if (t instanceof od) {
                        var e = r,
                            n = t.firestore._databaseId;
                        if (!n.isEqual(e)) throw new zr(Wr.INVALID_ARGUMENT, "Document reference is for database " + n.projectId + "/" + n.database + " but should be for database " + e.projectId + "/" + e.database);
                        return new Kp(r, t._key)
                    }
                    return t
                })
            }, td.databaseIdFromApp = function(t) { var e = t.options; if (!Jr(e, "projectId")) throw new zr(Wr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.'); var n = e.projectId; if (!n || "string" != typeof n) throw new zr(Wr.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options"); return new _i(n) }, Object.defineProperty(td.prototype, "app", { get: function() { if (!this._firebaseApp) throw new zr(Wr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available"); return this._firebaseApp }, enumerable: !0, configurable: !0 }), td.prototype.collection = function(t) { return ni("Firestore.collection", arguments, 1), oi("Firestore.collection", "non-empty string", 1, t), this.ensureClientConfigured(), new bd(Bi.fromString(t), this) }, td.prototype.doc = function(t) { return ni("Firestore.doc", arguments, 1), oi("Firestore.doc", "non-empty string", 1, t), this.ensureClientConfigured(), od.forPath(Bi.fromString(t), this) }, td.prototype.collectionGroup = function(t) { if (ni("Firestore.collectionGroup", arguments, 1), oi("Firestore.collectionGroup", "non-empty string", 1, t), 0 <= t.indexOf("/")) throw new zr(Wr.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'."); return this.ensureClientConfigured(), new dd(new Rc(Bi.EMPTY_PATH, t), this) }, td.prototype.runTransaction = function(e) { var n = this; return ni("Firestore.runTransaction", arguments, 1), oi("Firestore.runTransaction", "function", 1, e), this.ensureClientConfigured().transaction(function(t) { return e(new ed(n, t)) }) }, td.prototype.batch = function() { return this.ensureClientConfigured(), new rd(this) }, Object.defineProperty(td, "logLevel", {
                get: function() {
                    switch (Pr()) {
                        case Cr.DEBUG:
                            return "debug";
                        case Cr.ERROR:
                            return "error";
                        case Cr.SILENT:
                            return "silent";
                        default:
                            return Br("Unknown log level: " + Pr())
                    }
                },
                enumerable: !0,
                configurable: !0
            }), td.setLogLevel = function(t) {
                switch (ni("Firestore.setLogLevel", arguments, 1), oi("Firestore.setLogLevel", "non-empty string", 1, t), t) {
                    case "debug":
                        xr(Cr.DEBUG);
                        break;
                    case "error":
                        xr(Cr.ERROR);
                        break;
                    case "silent":
                        xr(Cr.SILENT);
                        break;
                    default:
                        throw new zr(Wr.INVALID_ARGUMENT, "Invalid log level: " + t)
                }
            }, td.prototype._areTimestampsInSnapshotsEnabled = function() { return this._settings.timestampsInSnapshots }, td);

            function td(t, e) {
                var n = this;
                if (this._firebaseApp = null, this._queue = new $i, this.INTERNAL = {
                        delete: function() {
                            return p(n, void 0, void 0, function() {
                                return m(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.ensureClientConfigured(), [4, this._firestoreClient.terminate()];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }
                    }, "object" == typeof t.options) {
                    var r = t;
                    this._firebaseApp = r, this._databaseId = td.databaseIdFromApp(r), this._persistenceKey = r.name, this._credentials = new sp(e)
                } else {
                    var i = t;
                    if (!i.projectId) throw new zr(Wr.INVALID_ARGUMENT, "Must provide projectId");
                    this._databaseId = new _i(i.projectId, i.database), this._persistenceKey = "[DEFAULT]", this._credentials = new op
                }
                this._settings = new Xp({}), this._dataConverter = this.createDataConverter(this._databaseId)
            }
            var ed = (nd.prototype.get = function(t) {
                var n = this;
                ni("Transaction.get", arguments, 1);
                var r = Id("Transaction.get", t, this._firestore);
                return this._transaction.lookup([r._key]).then(function(t) { if (!t || 1 !== t.length) return Br("Mismatch in docs returned from document lookup."); var e = t[0]; if (e instanceof Ks) return new cd(n._firestore, r._key, null, !1, !1, r._converter); if (e instanceof Vs) return new cd(n._firestore, r._key, e, !1, !1, r._converter); throw Br("BatchGetDocumentsRequest returned unexpected document type: " + e.constructor.name) })
            }, nd.prototype.set = function(t, e, n) {
                ii("Transaction.set", arguments, 2, 3);
                var r = Id("Transaction.set", t, this._firestore);
                n = Td("Transaction.set", n);
                var i = Cd(r._converter, e, "Transaction.set"),
                    o = i[0],
                    a = i[1],
                    s = n.merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData(a, o, n.mergeFields) : this._firestore._dataConverter.parseSetData(a, o);
                return this._transaction.set(r._key, s), this
            }, nd.prototype.update = function(t, e, n) { for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a]; return i = "string" == typeof e || e instanceof ep ? (ri("Transaction.update", arguments, 3), r = Id("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("Transaction.update", e, n, o)) : (ni("Transaction.update", arguments, 2), r = Id("Transaction.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("Transaction.update", e)), this._transaction.update(r._key, i), this }, nd.prototype.delete = function(t) { ni("Transaction.delete", arguments, 1); var e = Id("Transaction.delete", t, this._firestore); return this._transaction.delete(e._key), this }, nd);

            function nd(t, e) { this._firestore = t, this._transaction = e }
            var rd = (id.prototype.set = function(t, e, n) {
                ii("WriteBatch.set", arguments, 2, 3), this.verifyNotCommitted();
                var r = Id("WriteBatch.set", t, this._firestore);
                n = Td("WriteBatch.set", n);
                var i = Cd(r._converter, e, "WriteBatch.set"),
                    o = i[0],
                    a = i[1],
                    s = n.merge || n.mergeFields ? this._firestore._dataConverter.parseMergeData(a, o, n.mergeFields) : this._firestore._dataConverter.parseSetData(a, o);
                return this._mutations = this._mutations.concat(s.toMutations(r._key, Da.NONE)), this
            }, id.prototype.update = function(t, e, n) { for (var r, i, o = [], a = 3; a < arguments.length; a++) o[a - 3] = arguments[a]; return this.verifyNotCommitted(), i = "string" == typeof e || e instanceof ep ? (ri("WriteBatch.update", arguments, 3), r = Id("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateVarargs("WriteBatch.update", e, n, o)) : (ni("WriteBatch.update", arguments, 2), r = Id("WriteBatch.update", t, this._firestore), this._firestore._dataConverter.parseUpdateData("WriteBatch.update", e)), this._mutations = this._mutations.concat(i.toMutations(r._key, Da.exists(!0))), this }, id.prototype.delete = function(t) { ni("WriteBatch.delete", arguments, 1), this.verifyNotCommitted(); var e = Id("WriteBatch.delete", t, this._firestore); return this._mutations = this._mutations.concat(new ja(e._key, Da.NONE)), this }, id.prototype.commit = function() { return p(this, void 0, void 0, function() { return m(this, function(t) { return this.verifyNotCommitted(), this._committed = !0, 0 < this._mutations.length ? [2, this._firestore.ensureClientConfigured().write(this._mutations)] : [2] }) }) }, id.prototype.verifyNotCommitted = function() { if (this._committed) throw new zr(Wr.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.") }, id);

            function id(t) { this._firestore = t, this._mutations = [], this._committed = !1 }
            var od = (ad.forPath = function(t, e, n) { if (t.length % 2 != 0) throw new zr(Wr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.canonicalString() + " has " + t.length); return new ad(new Wi(t), e, n) }, Object.defineProperty(ad.prototype, "id", { get: function() { return this._key.path.lastSegment() }, enumerable: !0, configurable: !0 }), Object.defineProperty(ad.prototype, "parent", { get: function() { return new bd(this._key.path.popLast(), this.firestore, this._converter) }, enumerable: !0, configurable: !0 }), Object.defineProperty(ad.prototype, "path", { get: function() { return this._key.path.canonicalString() }, enumerable: !0, configurable: !0 }), ad.prototype.collection = function(t) { if (ni("DocumentReference.collection", arguments, 1), oi("DocumentReference.collection", "non-empty string", 1, t), !t) throw new zr(Wr.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()"); var e = Bi.fromString(t); return new bd(this._key.path.child(e), this.firestore) }, ad.prototype.isEqual = function(t) { if (!(t instanceof ad)) throw yi("isEqual", "DocumentReference", 1, t); return this.firestore === t.firestore && this._key.isEqual(t._key) && this._converter === t._converter }, ad.prototype.set = function(t, e) {
                ii("DocumentReference.set", arguments, 1, 2), e = Td("DocumentReference.set", e);
                var n = Cd(this._converter, t, "DocumentReference.set"),
                    r = n[0],
                    i = n[1],
                    o = e.merge || e.mergeFields ? this.firestore._dataConverter.parseMergeData(i, r, e.mergeFields) : this.firestore._dataConverter.parseSetData(i, r);
                return this._firestoreClient.write(o.toMutations(this._key, Da.NONE))
            }, ad.prototype.update = function(t, e) { for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return n = "string" == typeof t || t instanceof ep ? (ri("DocumentReference.update", arguments, 2), this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update", t, e, r)) : (ni("DocumentReference.update", arguments, 1), this.firestore._dataConverter.parseUpdateData("DocumentReference.update", t)), this._firestoreClient.write(n.toMutations(this._key, Da.exists(!0))) }, ad.prototype.delete = function() { return ni("DocumentReference.delete", arguments, 0), this._firestoreClient.write([new ja(this._key, Da.NONE)]) }, ad.prototype.onSnapshot = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                ii("DocumentReference.onSnapshot", arguments, 1, 4);
                var n, r = { includeMetadataChanges: !1 },
                    i = 0;
                "object" != typeof t[i] || pp(t[i]) || (mi("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), ui("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++);
                var o = { includeMetadataChanges: r.includeMetadataChanges };
                return n = pp(t[i]) ? t[i] : (oi("DocumentReference.onSnapshot", "function", i, t[i]), ai("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), ai("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), { next: t[i], error: t[i + 1], complete: t[i + 2] }), this.onSnapshotInternal(o, n)
            }, ad.prototype.onSnapshotInternal = function(t, n) {
                var r = this,
                    e = function(t) { console.error("Uncaught Error in onSnapshot:", t) };
                n.error && (e = n.error.bind(n));
                var i = new $f({
                        next: function(t) {
                            if (n.next) {
                                Ur(t.docs.size <= 1, "Too many documents returned on a document query");
                                var e = t.docs.get(r._key);
                                n.next(new cd(r.firestore, r._key, e, t.fromCache, t.hasPendingWrites, r._converter))
                            }
                        },
                        error: e
                    }),
                    o = this._firestoreClient.listen(Rc.atPath(this._key.path), i, t);
                return function() { i.mute(), r._firestoreClient.unlisten(o) }
            }, ad.prototype.get = function(n) { var r = this; return ii("DocumentReference.get", arguments, 0, 1), Ed("DocumentReference.get", n), new Promise(function(e, t) { n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentFromLocalCache(r._key).then(function(t) { e(new cd(r.firestore, r._key, t, !0, t instanceof Vs && t.hasLocalMutations, r._converter)) }, t) : r.getViaSnapshotListener(e, t, n) }) }, ad.prototype.getViaSnapshotListener = function(e, n, r) { var i = this.onSnapshotInternal({ includeMetadataChanges: !0, waitForSyncWhenOnline: !0 }, { next: function(t) { i(), !t.exists && t.metadata.fromCache ? n(new zr(Wr.UNAVAILABLE, "Failed to get document because the client is offline.")) : t.exists && t.metadata.fromCache && r && "server" === r.source ? n(new zr(Wr.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : e(t) }, error: n }) }, ad.prototype.withConverter = function(t) { return new ad(this._key, this.firestore, t) }, ad);

            function ad(t, e, n) { this._key = t, this.firestore = e, this._converter = n, this._firestoreClient = this.firestore.ensureClientConfigured() }
            var sd = (ud.prototype.isEqual = function(t) { return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache }, ud);

            function ud(t, e) { this.hasPendingWrites = t, this.fromCache = e }
            var cd = (hd.prototype.data = function(t) { if (ii("DocumentSnapshot.data", arguments, 0, 1), t = Sd("DocumentSnapshot.data", t), this._document) { if (this._converter) { var e = new fd(this._firestore, this._key, this._document, this._fromCache, this._hasPendingWrites); return this._converter.fromFirestore(e, t) } return this.toJSObject(this._document.data(), Wa.fromSnapshotOptions(t, this._firestore._areTimestampsInSnapshotsEnabled())) } }, hd.prototype.get = function(t, e) { if (ii("DocumentSnapshot.get", arguments, 1, 2), e = Sd("DocumentSnapshot.get", e), this._document) { var n = this._document.data().field(zp("DocumentSnapshot.get", t)); if (null !== n) return this.toJSValue(n, Wa.fromSnapshotOptions(e, this._firestore._areTimestampsInSnapshotsEnabled())) } }, Object.defineProperty(hd.prototype, "id", { get: function() { return this._key.path.lastSegment() }, enumerable: !0, configurable: !0 }), Object.defineProperty(hd.prototype, "ref", { get: function() { return new od(this._key, this._firestore, this._converter) }, enumerable: !0, configurable: !0 }), Object.defineProperty(hd.prototype, "exists", { get: function() { return null !== this._document }, enumerable: !0, configurable: !0 }), Object.defineProperty(hd.prototype, "metadata", { get: function() { return new sd(this._hasPendingWrites, this._fromCache) }, enumerable: !0, configurable: !0 }), hd.prototype.isEqual = function(t) { if (!(t instanceof hd)) throw yi("isEqual", "DocumentSnapshot", 1, t); return this._firestore === t._firestore && this._fromCache === t._fromCache && this._key.isEqual(t._key) && (null === this._document ? null === t._document : this._document.isEqual(t._document)) && this._converter === t._converter }, hd.prototype.toJSObject = function(t, n) {
                var r = this,
                    i = {};
                return t.forEach(function(t, e) { i[t] = r.toJSValue(e, n) }), i
            }, hd.prototype.toJSValue = function(t, e) {
                if (t instanceof Ms) return this.toJSObject(t, e);
                if (t instanceof Ls) return this.toJSArray(t, e);
                if (t instanceof Cs) {
                    var n = t.value(e),
                        r = this._firestore.ensureClientConfigured().databaseId();
                    return t.databaseId.isEqual(r) || qr("Document " + this._key.path + " contains a document reference within a different database (" + t.databaseId.projectId + "/" + t.databaseId.database + ") which is not supported. It will be treated as a reference in the current database (" + r.projectId + "/" + r.database + ") instead."), new od(n, this._firestore, this._converter)
                }
                return t.value(e)
            }, hd.prototype.toJSArray = function(t, e) { var n = this; return t.internalValue.map(function(t) { return n.toJSValue(t, e) }) }, hd);

            function hd(t, e, n, r, i, o) { this._firestore = t, this._key = e, this._document = n, this._fromCache = r, this._hasPendingWrites = i, this._converter = o }
            var ld, fd = (t(pd, ld = cd), pd.prototype.data = function(t) { var e = ld.prototype.data.call(this, t); return Ur(void 0 !== e, "Document in a QueryDocumentSnapshot should exist"), e }, pd);

            function pd() { return null !== ld && ld.apply(this, arguments) || this }
            var dd = (md.prototype.where = function(t, e, n) {
                var r;
                ni("Query.where", arguments, 3), di("Query.where", 3, n),
                    function(t, e, n, r) { if (!e.some(function(t) { return t === r })) throw new zr(Wr.INVALID_ARGUMENT, "Invalid value " + pi(r) + " provided to function " + t + "() for its " + vi(n) + " argument. Acceptable values: " + e.join(", ")) }("Query.where", ["<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any"], 2, e);
                var i = zp("Query.where", t),
                    o = Oc.fromString(e);
                if (i.isKeyField()) {
                    if (o === Oc.ARRAY_CONTAINS || o === Oc.ARRAY_CONTAINS_ANY) throw new zr(Wr.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o.toString() + "' queries on FieldPath.documentId().");
                    if (o === Oc.IN) {
                        this.validateDisjunctiveFilterElements(n, o);
                        for (var a = [], s = 0, u = n; s < u.length; s++) {
                            var c = u[s];
                            a.push(this.parseDocumentIdValue(c))
                        }
                        r = new Ls(a)
                    } else r = this.parseDocumentIdValue(n)
                } else o !== Oc.IN && o !== Oc.ARRAY_CONTAINS_ANY || this.validateDisjunctiveFilterElements(n, o), r = this.firestore._dataConverter.parseQueryValue("Query.where", n, o === Oc.IN);
                var h = xc.create(i, o, r);
                return this.validateNewFilter(h), new md(this._query.addFilter(h), this.firestore, this._converter)
            }, md.prototype.orderBy = function(t, e) {
                var n;
                if (ii("Query.orderBy", arguments, 1, 2), ai("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e) n = $c.ASCENDING;
                else {
                    if ("desc" !== e) throw new zr(Wr.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
                    n = $c.DESCENDING
                }
                if (null !== this._query.startAt) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                if (null !== this._query.endAt) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                var r = zp("Query.orderBy", t),
                    i = new rh(r, n);
                return this.validateNewOrderBy(i), new md(this._query.addOrderBy(i), this.firestore, this._converter)
            }, md.prototype.limit = function(t) { return ni("Query.limit", arguments, 1), oi("Query.limit", "number", 1, t), gi("Query.limit", 1, t), new md(this._query.withLimitToFirst(t), this.firestore, this._converter) }, md.prototype.limitToLast = function(t) { return ni("Query.limitToLast", arguments, 1), oi("Query.limitToLast", "number", 1, t), gi("Query.limitToLast", 1, t), new md(this._query.withLimitToLast(t), this.firestore, this._converter) }, md.prototype.startAt = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ri("Query.startAt", arguments, 1);
                var r = this.boundFromDocOrFields("Query.startAt", t, e, !0);
                return new md(this._query.withStartAt(r), this.firestore, this._converter)
            }, md.prototype.startAfter = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ri("Query.startAfter", arguments, 1);
                var r = this.boundFromDocOrFields("Query.startAfter", t, e, !1);
                return new md(this._query.withStartAt(r), this.firestore, this._converter)
            }, md.prototype.endBefore = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ri("Query.endBefore", arguments, 1);
                var r = this.boundFromDocOrFields("Query.endBefore", t, e, !0);
                return new md(this._query.withEndAt(r), this.firestore, this._converter)
            }, md.prototype.endAt = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                ri("Query.endAt", arguments, 1);
                var r = this.boundFromDocOrFields("Query.endAt", t, e, !1);
                return new md(this._query.withEndAt(r), this.firestore, this._converter)
            }, md.prototype.isEqual = function(t) { if (!(t instanceof md)) throw yi("isEqual", "Query", 1, t); return this.firestore === t.firestore && this._query.isEqual(t._query) }, md.prototype.withConverter = function(t) { return new md(this._query, this.firestore, t) }, md.prototype.boundFromDocOrFields = function(t, e, n, r) { if (di(t, 1, e), e instanceof cd) { if (0 < n.length) throw new zr(Wr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "()."); var i = e; if (!i.exists) throw new zr(Wr.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "()."); return this.boundFromDocument(t, i._document, r) } var o = [e].concat(n); return this.boundFromFields(t, o, r) }, md.prototype.boundFromDocument = function(t, e, n) {
                for (var r = [], i = 0, o = this._query.orderBy; i < o.length; i++) {
                    var a = o[i];
                    if (a.field.isKeyField()) r.push(new Cs(this.firestore._databaseId, e.key));
                    else {
                        var s = e.field(a.field);
                        if (s instanceof bs) throw new zr(Wr.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                        if (null === s) { var u = a.field.canonicalString(); throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.") }
                        r.push(s)
                    }
                }
                return new eh(r, n)
            }, md.prototype.boundFromFields = function(t, e, n) {
                var r = this._query.explicitOrderBy;
                if (e.length > r.length) throw new zr(Wr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                for (var i = [], o = 0; o < e.length; o++) {
                    var a = e[o];
                    if (r[o].field.isKeyField()) {
                        if ("string" != typeof a) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof a);
                        if (!this._query.isCollectionGroupQuery() && -1 !== a.indexOf("/")) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + a + "' contains a slash.");
                        var s = this._query.path.child(Bi.fromString(a));
                        if (!Wi.isDocumentKey(s)) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + s + "' is not because it contains an odd number of segments.");
                        var u = new Wi(s);
                        i.push(new Cs(this.firestore._databaseId, u))
                    } else {
                        var c = this.firestore._dataConverter.parseQueryValue(t, a);
                        i.push(c)
                    }
                }
                return new eh(i, n)
            }, md.prototype.onSnapshot = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                ii("Query.onSnapshot", arguments, 1, 4);
                var n, r = {},
                    i = 0;
                return "object" != typeof t[i] || pp(t[i]) || (mi("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), ui("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), n = pp(t[i]) ? t[i] : (oi("Query.onSnapshot", "function", i, t[i]), ai("Query.onSnapshot", "function", i + 1, t[i + 1]), ai("Query.onSnapshot", "function", i + 2, t[i + 2]), { next: t[i], error: t[i + 1], complete: t[i + 2] }), this.validateHasExplicitOrderByForLimitToLast(this._query), this.onSnapshotInternal(r, n)
            }, md.prototype.onSnapshotInternal = function(t, e) {
                var n = this,
                    r = function(t) { console.error("Uncaught Error in onSnapshot:", t) };
                e.error && (r = e.error.bind(e));
                var i = new $f({ next: function(t) { e.next && e.next(new yd(n.firestore, n._query, t, n._converter)) }, error: r }),
                    o = this.firestore.ensureClientConfigured(),
                    a = o.listen(this._query, i, t);
                return function() { i.mute(), o.unlisten(a) }
            }, md.prototype.validateHasExplicitOrderByForLimitToLast = function(t) { if (t.hasLimitToLast() && 0 === t.explicitOrderBy.length) throw new zr(Wr.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause") }, md.prototype.get = function(n) { var r = this; return ii("Query.get", arguments, 0, 1), Ed("Query.get", n), this.validateHasExplicitOrderByForLimitToLast(this._query), new Promise(function(e, t) { n && "cache" === n.source ? r.firestore.ensureClientConfigured().getDocumentsFromLocalCache(r._query).then(function(t) { e(new yd(r.firestore, r._query, t, r._converter)) }, t) : r.getViaSnapshotListener(e, t, n) }) }, md.prototype.getViaSnapshotListener = function(e, n, r) { var i = this.onSnapshotInternal({ includeMetadataChanges: !0, waitForSyncWhenOnline: !0 }, { next: function(t) { i(), t.metadata.fromCache && r && "server" === r.source ? n(new zr(Wr.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : e(t) }, error: n }) }, md.prototype.parseDocumentIdValue = function(t) { if ("string" == typeof t) { if ("" === t) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."); if (!this._query.isCollectionGroupQuery() && -1 !== t.indexOf("/")) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character."); var e = this._query.path.child(Bi.fromString(t)); if (!Wi.isDocumentKey(e)) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ")."); return new Cs(this.firestore._databaseId, new Wi(e)) } if (t instanceof od) { var n = t; return new Cs(this.firestore._databaseId, n._key) } throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + pi(t) + ".") }, md.prototype.validateDisjunctiveFilterElements = function(t, e) { if (!Array.isArray(t) || 0 === t.length) throw new zr(Wr.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters."); if (10 < t.length) throw new zr(Wr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array."); if (0 <= t.indexOf(null)) throw new zr(Wr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array."); if (0 < t.filter(function(t) { return Number.isNaN(t) }).length) throw new zr(Wr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.") }, md.prototype.validateNewFilter = function(t) {
                if (t instanceof xc) {
                    var e = [Oc.ARRAY_CONTAINS, Oc.ARRAY_CONTAINS_ANY],
                        n = [Oc.IN, Oc.ARRAY_CONTAINS_ANY],
                        r = 0 <= e.indexOf(t.op),
                        i = 0 <= n.indexOf(t.op);
                    if (t.isInequality()) {
                        var o = this._query.getInequalityFilterField();
                        if (null !== o && !o.isEqual(t.field)) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                        var a = this._query.getFirstOrderByField();
                        null !== a && this.validateOrderByAndInequalityMatch(t.field, a)
                    } else if (i || r) { var s = null; if (i && (s = this._query.findFilterOperator(n)), null === s && r && (s = this._query.findFilterOperator(e)), null != s) throw s === t.op ? new zr(Wr.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new zr(Wr.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + s.toString() + "' filters.") }
                }
            }, md.prototype.validateNewOrderBy = function(t) {
                if (null === this._query.getFirstOrderByField()) {
                    var e = this._query.getInequalityFilterField();
                    null !== e && this.validateOrderByAndInequalityMatch(e, t.field)
                }
            }, md.prototype.validateOrderByAndInequalityMatch = function(t, e) { if (!e.isEqual(t)) throw new zr(Wr.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.") }, md);

            function md(t, e, n) { this._query = t, this.firestore = e, this._converter = n }
            var yd = (Object.defineProperty(gd.prototype, "docs", { get: function() { var e = []; return this.forEach(function(t) { return e.push(t) }), e }, enumerable: !0, configurable: !0 }), Object.defineProperty(gd.prototype, "empty", { get: function() { return this._snapshot.docs.isEmpty() }, enumerable: !0, configurable: !0 }), Object.defineProperty(gd.prototype, "size", { get: function() { return this._snapshot.docs.size }, enumerable: !0, configurable: !0 }), gd.prototype.forEach = function(e, n) {
                var r = this;
                ii("QuerySnapshot.forEach", arguments, 1, 2), oi("QuerySnapshot.forEach", "function", 1, e), this._snapshot.docs.forEach(function(t) { e.call(n, r.convertToDocumentImpl(t)) })
            }, Object.defineProperty(gd.prototype, "query", { get: function() { return new dd(this._originalQuery, this._firestore, this._converter) }, enumerable: !0, configurable: !0 }), gd.prototype.docChanges = function(t) {
                t && (mi("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), ui("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
                var e = !(!t || !t.includeMetadataChanges);
                if (e && this._snapshot.excludesMetadataChanges) throw new zr(Wr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                return this._cachedChanges && this._cachedChangesIncludeMetadataChanges === e || (this._cachedChanges = function(i, e, o, a) {
                    if (o.oldDocs.isEmpty()) { var n, r = 0; return o.docChanges.map(function(t) { var e = new fd(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key), a); return Ur(t.type === sl.Added, "Invalid event type for first snapshot"), Ur(!n || o.query.docComparator(n, t.doc) < 0, "Got added events in wrong order"), n = t.doc, { type: "added", doc: e, oldIndex: -1, newIndex: r++ } }) }
                    var s = o.oldDocs;
                    return o.docChanges.filter(function(t) { return e || t.type !== sl.Metadata }).map(function(t) {
                        var e = new fd(i, t.doc.key, t.doc, o.fromCache, o.mutatedKeys.has(t.doc.key), a),
                            n = -1,
                            r = -1;
                        return t.type !== sl.Added && (Ur(0 <= (n = s.indexOf(t.doc.key)), "Index for document not found"), s = s.delete(t.doc.key)), t.type !== sl.Removed && (r = (s = s.add(t.doc)).indexOf(t.doc.key)), {
                            type: function(t) {
                                switch (t) {
                                    case sl.Added:
                                        return "added";
                                    case sl.Modified:
                                    case sl.Metadata:
                                        return "modified";
                                    case sl.Removed:
                                        return "removed";
                                    default:
                                        return Br("Unknown change type: " + t)
                                }
                            }(t.type),
                            doc: e,
                            oldIndex: n,
                            newIndex: r
                        }
                    })
                }(this._firestore, e, this._snapshot, this._converter), this._cachedChangesIncludeMetadataChanges = e), this._cachedChanges
            }, gd.prototype.isEqual = function(t) { if (!(t instanceof gd)) throw yi("isEqual", "QuerySnapshot", 1, t); return this._firestore === t._firestore && this._originalQuery.isEqual(t._originalQuery) && this._snapshot.isEqual(t._snapshot) && this._converter === t._converter }, gd.prototype.convertToDocumentImpl = function(t) { return new fd(this._firestore, t.key, t, this.metadata.fromCache, this._snapshot.mutatedKeys.has(t.key), this._converter) }, gd);

            function gd(t, e, n, r) { this._firestore = t, this._originalQuery = e, this._snapshot = n, this._converter = r, this._cachedChanges = null, this._cachedChangesIncludeMetadataChanges = null, this.metadata = new sd(n.hasPendingWrites, n.fromCache) }
            a(["length", "forEach", "map"], "undefined" != typeof Symbol ? [Symbol.iterator] : []).forEach(function(t) { try { Object.defineProperty(yd.prototype.docChanges, t, { get: function() { return function() { throw new zr(Wr.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"') }() } }) } catch (t) {} });
            var vd, bd = (t(wd, vd = dd), Object.defineProperty(wd.prototype, "id", { get: function() { return this._query.path.lastSegment() }, enumerable: !0, configurable: !0 }), Object.defineProperty(wd.prototype, "parent", { get: function() { var t = this._query.path.popLast(); return t.isEmpty() ? null : new od(new Wi(t), this.firestore) }, enumerable: !0, configurable: !0 }), Object.defineProperty(wd.prototype, "path", { get: function() { return this._query.path.canonicalString() }, enumerable: !0, configurable: !0 }), wd.prototype.doc = function(t) { if (ii("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = wi.newId()), oi("CollectionReference.doc", "non-empty string", 1, t), "" === t) throw new zr(Wr.INVALID_ARGUMENT, "Document path must be a non-empty string"); var e = Bi.fromString(t); return od.forPath(this._query.path.child(e), this.firestore, this._converter) }, wd.prototype.add = function(t) { ni("CollectionReference.add", arguments, 1), oi("CollectionReference.add", "object", 1, t); var e = this.doc(); return e.set(t).then(function() { return e }) }, wd.prototype.withConverter = function(t) { return new wd(this._path, this.firestore, t) }, wd);

            function wd(t, e, n) { var r = vd.call(this, Rc.atPath(t), e, n) || this; if ((r._path = t).length % 2 != 1) throw new zr(Wr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.canonicalString() + " has " + t.length); return r }

            function Td(t, e) { if (void 0 === e) return { merge: !1 }; if (mi(t, e, ["merge", "mergeFields"]), ui(t, "boolean", "merge", e.merge), ci(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function(t) { return "string" == typeof t || t instanceof ep }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new zr(Wr.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".'); return e }

            function Sd(t, e) { return void 0 === e ? {} : (mi(t, e, ["serverTimestamps"]), hi(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e) }

            function Ed(t, e) { ai(t, "object", 1, e), e && (mi(t, e, ["source"]), hi(t, 0, "source", e.source, ["default", "server", "cache"])) }

            function Id(t, e, n) { if (e instanceof od) { if (e.firestore !== n) throw new zr(Wr.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance."); return e } throw yi(t, "DocumentReference", 1, e) }

            function Cd(t, e, n) { var r; return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [r, n] }
            var Dd = Yr($p, "Use firebase.firestore() instead."),
                Nd = Yr(ed, "Use firebase.firestore().runTransaction() instead."),
                Ad = Yr(rd, "Use firebase.firestore().batch() instead."),
                kd = Yr(od, "Use firebase.firestore().doc() instead."),
                Rd = Yr(cd),
                Md = Yr(fd),
                _d = Yr(dd),
                Od = Yr(yd),
                Ld = Yr(bd, "Use firebase.firestore().collection() instead."),
                Pd = { Firestore: Dd, GeoPoint: Pl, Timestamp: co, Blob: ki, Transaction: Nd, WriteBatch: Ad, DocumentReference: kd, DocumentSnapshot: Rd, Query: _d, QueryDocumentSnapshot: Md, QuerySnapshot: Od, CollectionReference: Ld, FieldPath: ep, FieldValue: Mp, setLogLevel: $p.setLogLevel, CACHE_SIZE_UNLIMITED: Jp };

            function xd(t) { t.INTERNAL.registerComponent(new w("firestore", function(t) { var e = t.getProvider("app").getImmediate(); return new $p(e, t.getProvider("auth-internal")) }, "PUBLIC").setServiceProps(function(t) { Ur(t && "object" == typeof t, "shallowCopy() expects object parameter."); var e = {}; for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e }(Pd))) }
            var Fd = (qd.prototype.addCallback = function(t) {}, qd.prototype.shutdown = function() {}, qd);

            function qd() {}
            var Vd = "ConnectivityMonitor",
                Bd = (Ud.prototype.addCallback = function(t) { this.callbacks.push(t) }, Ud.prototype.shutdown = function() { window.removeEventListener("online", this.networkAvailableListener), window.removeEventListener("offline", this.networkUnavailableListener) }, Ud.prototype.configureNetworkMonitoring = function() { window.addEventListener("online", this.networkAvailableListener), window.addEventListener("offline", this.networkUnavailableListener) }, Ud.prototype.onNetworkAvailable = function() { Fr(Vd, "Network connectivity changed: AVAILABLE"); for (var t = 0, e = this.callbacks; t < e.length; t++)(0, e[t])(0) }, Ud.prototype.onNetworkUnavailable = function() { Fr(Vd, "Network connectivity changed: UNAVAILABLE"); for (var t = 0, e = this.callbacks; t < e.length; t++)(0, e[t])(1) }, Ud.isAvailable = function() { return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener }, Ud);

            function Ud() {
                var t = this;
                this.networkAvailableListener = function() { return t.onNetworkAvailable() }, this.networkUnavailableListener = function() { return t.onNetworkUnavailable() }, this.callbacks = [], this.configureNetworkMonitoring()
            }
            var Kd = (Qd.prototype.onOpen = function(t) { Ur(!this.wrappedOnOpen, "Called onOpen on stream twice!"), this.wrappedOnOpen = t }, Qd.prototype.onClose = function(t) { Ur(!this.wrappedOnClose, "Called onClose on stream twice!"), this.wrappedOnClose = t }, Qd.prototype.onMessage = function(t) { Ur(!this.wrappedOnMessage, "Called onMessage on stream twice!"), this.wrappedOnMessage = t }, Qd.prototype.close = function() { this.closeFn() }, Qd.prototype.send = function(t) { this.sendFn(t) }, Qd.prototype.callOnOpen = function() { Ur(void 0 !== this.wrappedOnOpen, "Cannot call onOpen because no callback was set"), this.wrappedOnOpen() }, Qd.prototype.callOnClose = function(t) { Ur(void 0 !== this.wrappedOnClose, "Cannot call onClose because no callback was set"), this.wrappedOnClose(t) }, Qd.prototype.callOnMessage = function(t) { Ur(void 0 !== this.wrappedOnMessage, "Cannot call onMessage because no callback was set"), this.wrappedOnMessage(t) }, Qd);

            function Qd(t) { this.sendFn = t.sendFn, this.closeFn = t.closeFn }
            var jd = "Connection",
                Gd = { BatchGetDocuments: "batchGet", Commit: "commit" },
                Wd = "gl-js/ fire/" + Or,
                zd = (Hd.prototype.modifyHeadersForRequest = function(t, e) {
                    if (e)
                        for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
                    t["X-Goog-Api-Client"] = Wd
                }, Hd.prototype.invokeRPC = function(s, r, u) {
                    var c = this,
                        h = this.makeUrl(s);
                    return new Promise(function(i, o) {
                        var a = new _r;
                        a.listenOnce(Rr.COMPLETE, function() {
                            try {
                                switch (a.getLastErrorCode()) {
                                    case kr.NO_ERROR:
                                        var t = a.getResponseJson();
                                        Fr(jd, "XHR received:", JSON.stringify(t)), i(t);
                                        break;
                                    case kr.TIMEOUT:
                                        Fr(jd, 'RPC "' + s + '" timed out'), o(new zr(Wr.DEADLINE_EXCEEDED, "Request time out"));
                                        break;
                                    case kr.HTTP_ERROR:
                                        var e = a.getStatus();
                                        if (Fr(jd, 'RPC "' + s + '" failed with status:', e, "response text:", a.getResponseText()), 0 < e) {
                                            var n = a.getResponseJson().error;
                                            if (n && n.status && n.message) {
                                                var r = function(t) { var e = t.toLowerCase().replace("_", "-"); return 0 <= Object.values(Wr).indexOf(e) ? e : Wr.UNKNOWN }(n.status);
                                                o(new zr(r, n.message))
                                            } else o(new zr(Wr.UNKNOWN, "Server responded with status " + a.getStatus()))
                                        } else Fr(jd, 'RPC "' + s + '" failed'), o(new zr(Wr.UNAVAILABLE, "Connection failed."));
                                        break;
                                    default:
                                        Br('RPC "' + s + '" failed with unanticipated webchannel error ' + a.getLastErrorCode() + ": " + a.getLastError() + ", giving up.")
                                }
                            } finally { Fr(jd, 'RPC "' + s + '" completed.') }
                        });
                        var t = l({}, r);
                        delete t.database;
                        var e = JSON.stringify(t);
                        Fr(jd, "XHR sending: ", h + " " + e);
                        var n = { "Content-Type": "text/plain" };
                        c.modifyHeadersForRequest(n, u), a.send(h, "POST", e, n, 15)
                    })
                }, Hd.prototype.invokeStreamingRPC = function(t, e, n) { return this.invokeRPC(t, e, n) }, Hd.prototype.openStream = function(t, e) {
                    var n = [this.baseUrl, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                        r = Ar(),
                        i = { backgroundChannelTest: !0, httpSessionIdParam: "gsessionid", initMessageHeaders: {}, messageUrlParams: { database: "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database }, sendRawJson: !0, supportsCrossDomainXhr: !0, internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 }, forceLongPolling: this.forceLongPolling };
                    this.modifyHeadersForRequest(i.initMessageHeaders, e), "object" == typeof navigator && "ReactNative" === navigator.product || 0 <= f().indexOf("Electron/") || function() { var t = f(); return 0 <= t.indexOf("MSIE ") || 0 <= t.indexOf("Trident/") }() || 0 <= f().indexOf("MSAppHost/") || (i.httpHeadersOverwriteParam = "$httpHeaders");
                    var o = n.join("");

                    function a(t, e) { u.listen(t, function(t) { try { e(t) } catch (t) { setTimeout(function() { throw t }, 0) } }) }
                    Fr(jd, "Creating WebChannel: " + o + " " + i);
                    var u = r.createWebChannel(o, i),
                        s = !1,
                        c = !1,
                        h = new Kd({ sendFn: function(t) { c ? Fr(jd, "Not sending because WebChannel is closed:", t) : (s || (Fr(jd, "Opening WebChannel transport."), u.open(), s = !0), Fr(jd, "WebChannel sending:", t), u.send(t)) }, closeFn: function() { return u.close() } });
                    return a(Mr.EventType.OPEN, function() { c || Fr(jd, "WebChannel transport opened.") }), a(Mr.EventType.CLOSE, function() { c || (c = !0, Fr(jd, "WebChannel transport closed"), h.callOnClose()) }), a(Mr.EventType.ERROR, function(t) { c || (c = !0, Fr(jd, "WebChannel transport errored:", t), h.callOnClose(new zr(Wr.UNAVAILABLE, "The operation could not be completed"))) }), a(Mr.EventType.MESSAGE, function(t) {
                        var e;
                        if (!c) {
                            var n = t.data[0];
                            Ur(!!n, "Got a webchannel message without data.");
                            var r = n,
                                i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                            if (i) {
                                Fr(jd, "WebChannel received error:", i);
                                var o = i.status,
                                    a = function(t) { var e = el[t]; if (void 0 !== e) return al(e) }(o),
                                    s = i.message;
                                void 0 === a && (a = Wr.INTERNAL, s = "Unknown error status: " + o + " with message " + i.message), c = !0, h.callOnClose(new zr(a, s)), u.close()
                            } else Fr(jd, "WebChannel received:", n), h.callOnMessage(n)
                        }
                    }), setTimeout(function() { h.callOnOpen() }, 0), h
                }, Hd.prototype.makeUrl = function(t) { var e = Gd[t]; return Ur(void 0 !== e, "Unknown REST mapping for: " + t), this.baseUrl + "/v1/projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database + "/documents:" + e }, Hd);

            function Hd(t) {
                this.databaseId = t.databaseId;
                var e = t.ssl ? "https" : "http";
                this.baseUrl = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling
            }
            var Yd = (Object.defineProperty(Jd.prototype, "document", { get: function() { return "undefined" != typeof document ? document : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(Jd.prototype, "window", { get: function() { return "undefined" != typeof window ? window : null }, enumerable: !0, configurable: !0 }), Jd.prototype.loadConnection = function(t) { return Promise.resolve(new zd(t)) }, Jd.prototype.newConnectivityMonitor = function() { return Bd.isAvailable() ? new Bd : new Fd }, Jd.prototype.newSerializer = function(t) { return new ef(t, { useProto3Json: !0 }) }, Jd.prototype.formatJSON = function(t) { return JSON.stringify(t) }, Jd.prototype.atob = function(t) { return atob(t) }, Jd.prototype.btoa = function(t) { return btoa(t) }, Jd);

            function Jd() { this.emptyByteString = "", this.base64Available = "undefined" != typeof atob }
            Kr.setPlatform(new Yd);
            var Xd;
            xd(Xd = Zd), Xd.registerVersion("@firebase/firestore", "1.9.2")
        }).apply(this, arguments)
    } catch (t) { throw console.error(t), new Error("Cannot instantiate firebase-firestore - be sure to load firebase-app.js first.") }
});
//# sourceMappingURL=firebase-firestore.js.map