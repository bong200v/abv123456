! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var s in n)("object" == typeof exports ? exports : e)[s] = n[s];
    }
}(self, () => (() => {
    var e = {
            8075: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    componentsToDebugString: () => Pe,
                    default: () => xe,
                    getFullscreenElement: () => H,
                    getUnstableAudioFingerprint: () => q,
                    getUnstableCanvasFingerprint: () => K,
                    getUnstableScreenFrame: () => re,
                    getUnstableScreenResolution: () => ee,
                    getWebGLContext: () => Le,
                    hashComponents: () => Ue,
                    isAndroid: () => V,
                    isChromium: () => B,
                    isDesktopWebKit: () => G,
                    isEdgeHTML: () => N,
                    isGecko: () => $,
                    isTrident: () => D,
                    isWebKit: () => x,
                    load: () => Be,
                    loadSources: () => P,
                    murmurX64Hash128: () => Ge,
                    prepareForSources: () => De,
                    sources: () => Ae,
                    transformSource: () => U,
                    withIframe: () => z
                });
                var s = function() {
                    return s = Object.assign || function(e) {
                        for (var t, n = 1, s = arguments.length; n < s; n++)
                            for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e;
                    }, s.apply(this, arguments);
                };

                function r(e, t, n, s) {
                    return new(n || (n = Promise))(function(r, i) {
                        function o(e) {
                            try {
                                c(s.next(e));
                            } catch (e) {
                                i(e);
                            }
                        }

                        function a(e) {
                            try {
                                c(s.throw(e));
                            } catch (e) {
                                i(e);
                            }
                        }

                        function c(e) {
                            var t;
                            e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                                e(t);
                            })).then(o, a);
                        }
                        c((s = s.apply(e, t || [])).next());
                    });
                }

                function i(e, t) {
                    var n, s, r, i = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1];
                            },
                            trys: [],
                            ops: []
                        },
                        o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
                    return o.next = a(0), o.throw = a(1), o.return = a(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this;
                    }), o;

                    function a(a) {
                        return function(c) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; o && (o = 0, a[0] && (i = 0)), i;) try {
                                    if (n = 1, s && (r = 2 & a[0] ? s.return : a[0] ? s.throw || ((r = s.return) && r.call(s), 0) : s.next) && !(r = r.call(s, a[1])).done) return r;
                                    switch (s = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            r = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: false
                                            };
                                        case 5:
                                            i.label++, s = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = i.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                                i = 0;
                                                continue;
                                            }
                                            if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                                i.label = a[1];
                                                break;
                                            }
                                            if (6 === a[0] && i.label < r[1]) {
                                                i.label = r[1], r = a;
                                                break;
                                            }
                                            if (r && i.label < r[2]) {
                                                i.label = r[2], i.ops.push(a);
                                                break;
                                            }
                                            r[2] && i.ops.pop(), i.trys.pop();
                                            continue;
                                    }
                                    a = t.call(e, i);
                                } catch (e) {
                                    a = [6, e], s = 0;
                                } finally {
                                    n = r = 0;
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : undefined,
                                    done: true
                                };
                            }([a, c]);
                        };
                    }
                }
                Object.create;

                function o(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var s, r = 0, i = t.length; r < i; r++) !s && r in t || (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
                    return e.concat(s || Array.prototype.slice.call(t));
                }
                Object.create;
                "function" == typeof SuppressedError && SuppressedError;
                var a = "4.5.0";

                function c(e, t) {
                    return new Promise(function(n) {
                        return setTimeout(n, e, t);
                    });
                }

                function u(e, t) {
                    try {
                        var n = e();
                        !!n && "function" == typeof n.then ? n.then(function(e) {
                            return t(true, e);
                        }, function(e) {
                            return t(false, e);
                        }) : t(true, n);
                    } catch (e) {
                        t(false, e);
                    }
                }

                function h(e, t, n) {
                    return undefined === n && (n = 16), r(this, undefined, undefined, function() {
                        var s, r, o, a;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    s = Array(e.length), r = Date.now(), o = 0, i.label = 1;
                                case 1:
                                    return o < e.length ? (s[o] = t(e[o], o), (a = Date.now()) >= r + n ? (r = a, [4, new Promise(function(e) {
                                        var t = new MessageChannel;
                                        t.port1.onmessage = function() {
                                            return e();
                                        }, t.port2.postMessage(null);
                                    })]) : [3, 3]) : [3, 4];
                                case 2:
                                    i.sent(), i.label = 3;
                                case 3:
                                    return ++o, [3, 1];
                                case 4:
                                    return [2, s];
                            }
                        });
                    });
                }

                function d(e) {
                    return e.then(undefined, function() {}), e;
                }

                function g(e, t) {
                    return "number" == typeof e && isNaN(e) ? t : e;
                }

                function m(e) {
                    return e.reduce(function(e, t) {
                        return e + (t ? 1 : 0);
                    }, 0);
                }

                function y(e, t) {
                    if (undefined === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
                    var n = 1 / t;
                    return Math.round(e * n) / n;
                }

                function b(e, t) {
                    var n = e[0] >>> 16,
                        s = 65535 & e[0],
                        r = e[1] >>> 16,
                        i = 65535 & e[1],
                        o = t[0] >>> 16,
                        a = 65535 & t[0],
                        c = t[1] >>> 16,
                        l = 0,
                        u = 0,
                        h = 0,
                        d = 0;
                    h += (d += i + (65535 & t[1])) >>> 16, d &= 65535, u += (h += r + c) >>> 16, h &= 65535, l += (u += s + a) >>> 16, u &= 65535, l += n + o, l &= 65535, e[0] = l << 16 | u, e[1] = h << 16 | d;
                }

                function v(e, t) {
                    var n = e[0] >>> 16,
                        s = 65535 & e[0],
                        r = e[1] >>> 16,
                        i = 65535 & e[1],
                        o = t[0] >>> 16,
                        a = 65535 & t[0],
                        c = t[1] >>> 16,
                        l = 65535 & t[1],
                        u = 0,
                        h = 0,
                        d = 0,
                        f = 0;
                    d += (f += i * l) >>> 16, f &= 65535, h += (d += r * l) >>> 16, d &= 65535, h += (d += i * c) >>> 16, d &= 65535, u += (h += s * l) >>> 16, h &= 65535, u += (h += r * c) >>> 16, h &= 65535, u += (h += i * a) >>> 16, h &= 65535, u += n * l + s * c + r * a + i * o, u &= 65535, e[0] = u << 16 | h, e[1] = d << 16 | f;
                }

                function w(e, t) {
                    var n = e[0];
                    32 === (t %= 64) ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t);
                }

                function R(e, t) {
                    0 !== (t %= 64) && (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0));
                }

                function C(e, t) {
                    e[0] ^= t[0], e[1] ^= t[1];
                }
                var T = [4283543511, 3981806797],
                    L = [3301882366, 444984403];

                function O(e) {
                    var t = [0, e[0] >>> 1];
                    C(e, t), v(e, T), t[1] = e[0] >>> 1, C(e, t), v(e, L), t[1] = e[0] >>> 1, C(e, t);
                }
                var _ = [2277735313, 289559509],
                    S = [1291169091, 658871167],
                    k = [0, 5],
                    I = [0, 1390208809],
                    A = [0, 944331445];

                function E(e, t) {
                    var n = function(e) {
                        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) {
                            var s = e.charCodeAt(n);
                            if (s > 127) return (new TextEncoder).encode(e);
                            t[n] = s;
                        }
                        return t;
                    }(e);
                    t = t || 0;
                    var s, r = [0, n.length],
                        i = r[1] % 16,
                        o = r[1] - i,
                        a = [0, t],
                        c = [0, t],
                        l = [0, 0],
                        u = [0, 0];
                    for (s = 0; s < o; s += 16) l[0] = n[s + 4] | n[s + 5] << 8 | n[s + 6] << 16 | n[s + 7] << 24, l[1] = n[s] | n[s + 1] << 8 | n[s + 2] << 16 | n[s + 3] << 24, u[0] = n[s + 12] | n[s + 13] << 8 | n[s + 14] << 16 | n[s + 15] << 24, u[1] = n[s + 8] | n[s + 9] << 8 | n[s + 10] << 16 | n[s + 11] << 24, v(l, _), w(l, 31), v(l, S), C(a, l), w(a, 27), b(a, c), v(a, k), b(a, I), v(u, S), w(u, 33), v(u, _), C(c, u), w(c, 31), b(c, a), v(c, k), b(c, A);
                    l[0] = 0, l[1] = 0, u[0] = 0, u[1] = 0;
                    var h = [0, 0];
                    switch (i) {
                        case 15:
                            h[1] = n[s + 14], R(h, 48), C(u, h);
                        case 14:
                            h[1] = n[s + 13], R(h, 40), C(u, h);
                        case 13:
                            h[1] = n[s + 12], R(h, 32), C(u, h);
                        case 12:
                            h[1] = n[s + 11], R(h, 24), C(u, h);
                        case 11:
                            h[1] = n[s + 10], R(h, 16), C(u, h);
                        case 10:
                            h[1] = n[s + 9], R(h, 8), C(u, h);
                        case 9:
                            h[1] = n[s + 8], C(u, h), v(u, S), w(u, 33), v(u, _), C(c, u);
                        case 8:
                            h[1] = n[s + 7], R(h, 56), C(l, h);
                        case 7:
                            h[1] = n[s + 6], R(h, 48), C(l, h);
                        case 6:
                            h[1] = n[s + 5], R(h, 40), C(l, h);
                        case 5:
                            h[1] = n[s + 4], R(h, 32), C(l, h);
                        case 4:
                            h[1] = n[s + 3], R(h, 24), C(l, h);
                        case 3:
                            h[1] = n[s + 2], R(h, 16), C(l, h);
                        case 2:
                            h[1] = n[s + 1], R(h, 8), C(l, h);
                        case 1:
                            h[1] = n[s], C(l, h), v(l, _), w(l, 31), v(l, S), C(a, l);
                    }
                    return C(a, r), C(c, r), b(a, c), b(c, a), O(a), O(c), b(a, c), b(c, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8);
                }

                function P(e, t, n, s) {
                    var o = Object.keys(e).filter(function(e) {
                            return ! function(e, t) {
                                for (var n = 0, s = e.length; n < s; ++n)
                                    if (e[n] === t) return true;
                                return false;
                            }(n, e);
                        }),
                        a = d(h(o, function(n) {
                            return function(e, t) {
                                var n = d(new Promise(function(n) {
                                    var s = Date.now();
                                    u(e.bind(null, t), function() {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        var r = Date.now() - s;
                                        if (!e[0]) return n(function() {
                                            return {
                                                error: e[1],
                                                duration: r
                                            };
                                        });
                                        var i = e[1];
                                        if ("function" != typeof i) return n(function() {
                                            return {
                                                value: i,
                                                duration: r
                                            };
                                        });
                                        n(function() {
                                            return new Promise(function(e) {
                                                var t = Date.now();
                                                u(i, function() {
                                                    for (var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                                                    var i = r + Date.now() - t;
                                                    if (!n[0]) return e({
                                                        error: n[1],
                                                        duration: i
                                                    });
                                                    e({
                                                        value: n[1],
                                                        duration: i
                                                    });
                                                });
                                            });
                                        });
                                    });
                                }));
                                return function() {
                                    return n.then(function(e) {
                                        return e();
                                    });
                                };
                            }(e[n], t);
                        }, s));
                    return function() {
                        return r(this, undefined, undefined, function() {
                            var e, t, n, r;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, a];
                                    case 1:
                                        return [4, h(i.sent(), function(e) {
                                            return d(e());
                                        }, s)];
                                    case 2:
                                        return e = i.sent(), [4, Promise.all(e)];
                                    case 3:
                                        for (t = i.sent(), n = {}, r = 0; r < o.length; ++r) n[o[r]] = t[r];
                                        return [2, n];
                                }
                            });
                        });
                    };
                }

                function U(e, t) {
                    var n = function(e) {
                        return "function" != typeof e ? t(e) : function() {
                            var n = e();
                            return !!n && "function" == typeof n.then ? n.then(t) : t(n);
                        };
                    };
                    return function(t) {
                        var s = e(t);
                        return !!s && "function" == typeof s.then ? s.then(n) : n(s);
                    };
                }

                function D() {
                    var e = window,
                        t = navigator;
                    return m(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4;
                }

                function N() {
                    var e = window,
                        t = navigator;
                    return m(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !D();
                }

                function B() {
                    var e = window,
                        t = navigator;
                    return m(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5;
                }

                function x() {
                    var e = window;
                    return m(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === navigator.vendor.indexOf("Apple"), "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4;
                }

                function G() {
                    var e = window,
                        t = e.HTMLElement,
                        n = e.Document;
                    return m(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4;
                }

                function j() {
                    var e, t = window;
                    return e = t.print, /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e)) && "[object WebPageNamespace]" === String(t.browser);
                }

                function $() {
                    var e, t, n = window;
                    return m(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || undefined === e ? undefined : e.style) && undefined !== t ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4;
                }

                function F() {
                    var e = window,
                        t = navigator,
                        n = e.CSS,
                        s = e.HTMLButtonElement;
                    return m([!("getStorageUpdates" in t), s && "popover" in s.prototype, "CSSCounterStyleRule" in e, n.supports("font-size-adjust: ex-height 0.5"), n.supports("text-transform: full-width")]) >= 4;
                }

                function H() {
                    var e = document;
                    return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null;
                }

                function V() {
                    var e = B(),
                        t = $(),
                        n = window,
                        s = navigator,
                        r = "connection";
                    return e ? m([!("SharedWorker" in n), s[r] && "ontypechange" in s[r], !("sinkId" in new window.Audio)]) >= 2 : !!t && m(["onorientationchange" in n, "orientation" in n, /android/i.test(navigator.appVersion)]) >= 2;
                }

                function q() {
                    var e = window,
                        t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                    if (!t) return -2;
                    if (x() && !G() && ! function() {
                            var e = window;
                            return m(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3;
                        }()) return -1;
                    var n = new t(1, 5e3, 44100),
                        s = n.createOscillator();
                    s.type = "triangle", s.frequency.value = 1e4;
                    var r = n.createDynamicsCompressor();
                    r.threshold.value = -50, r.knee.value = 40, r.ratio.value = 12, r.attack.value = 0, r.release.value = 0.25, s.connect(r), r.connect(n.destination), s.start(0);
                    var i = function(e) {
                            var t = 3,
                                n = 500,
                                s = 500,
                                r = 5e3,
                                i = function() {},
                                o = new Promise(function(o, a) {
                                    var c = false,
                                        u = 0,
                                        h = 0;
                                    e.oncomplete = function(e) {
                                        return o(e.renderedBuffer);
                                    };
                                    var f = function() {
                                            setTimeout(function() {
                                                return a(W("timeout"));
                                            }, Math.min(s, h + r - Date.now()));
                                        },
                                        p = function() {
                                            try {
                                                var s = e.startRendering();
                                                switch (!!s && "function" == typeof s.then && d(s), e.state) {
                                                    case "running":
                                                        h = Date.now(), c && parseInt(e);
                                                        break;
                                                    case "suspended":
                                                        document.hidden || u++, c && u >= t ? a(W("suspended")) : setTimeout(p, n);
                                                }
                                            } catch (e) {
                                                a(e);
                                            }
                                        };
                                    parseFloat(e), i = function() {
                                        c || (c = true, h > 0 && parseInt(e));
                                    };
                                });
                            return [o, i];
                        }(n),
                        o = i[0],
                        a = i[1],
                        c = d(o.then(function(e) {
                            return function(e) {
                                for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                                return t;
                            }(e.getChannelData(0).subarray(4500));
                        }, function(e) {
                            if ("timeout" === e.name || "suspended" === e.name) return -3;
                            throw e;
                        }));
                    return function() {
                        return a(), c;
                    };
                }

                function W(e) {
                    var t = new Error(e);
                    return t.name = e, t;
                }

                function z(e, t, n) {
                    var s, o, a;
                    return undefined === n && (n = 50), r(this, undefined, undefined, function() {
                        var r, l;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    r = document, i.label = 1;
                                case 1:
                                    return r.body ? [3, 3] : [4, c(n)];
                                case 2:
                                    return i.sent(), [3, 1];
                                case 3:
                                    l = r.createElement("iframe"), i.label = 4;
                                case 4:
                                    return i.trys.push([4, , 10, 11]), [4, new Promise(function(e, n) {
                                        var s = false,
                                            i = function() {
                                                s = true, e();
                                            };
                                        l.onload = i, l.onerror = function(e) {
                                            s = true, n(e);
                                        };
                                        var o = l.style;
                                        o.setProperty("display", "block", "important"), o.position = "absolute", o.top = "0", o.left = "0", o.visibility = "hidden", t && "srcdoc" in l ? l.srcdoc = t : l.src = "about:blank", r.body.appendChild(l);
                                        var a = function() {
                                            var e, t;
                                            s || ("complete" === (null === (t = null === (e = l.contentWindow) || undefined === e ? undefined : e.document) || undefined === t ? undefined : t.readyState) ? i() : setTimeout(a, 10));
                                        };
                                        a();
                                    })];
                                case 5:
                                    i.sent(), i.label = 6;
                                case 6:
                                    return (null === (o = null === (s = l.contentWindow) || undefined === s ? undefined : s.document) || undefined === o ? undefined : o.body) ? [3, 8] : [4, c(n)];
                                case 7:
                                    return i.sent(), [3, 6];
                                case 8:
                                    return [4, e(l, l.contentWindow)];
                                case 9:
                                    return [2, i.sent()];
                                case 10:
                                    return null === (a = l.parentNode) || undefined === a || a.removeChild(l), [7];
                                case 11:
                                    return [2];
                            }
                        });
                    });
                }

                function X(e) {
                    for (var t = function(e) {
                            for (var t, n, s = "Unexpected syntax '".concat(e, "'"), r = /^\s*([a-z-]*)(.*)$/i.exec(e), i = r[1] || undefined, o = {}, a = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, t) {
                                    o[e] = o[e] || [], o[e].push(t);
                                };;) {
                                var l = a.exec(r[2]);
                                if (!l) break;
                                var u = l[0];
                                switch (u[0]) {
                                    case ".":
                                        c("class", u.slice(1));
                                        break;
                                    case "#":
                                        c("id", u.slice(1));
                                        break;
                                    case "[":
                                        var h = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(u);
                                        if (!h) throw new Error(s);
                                        c(h[1], null !== (n = null !== (t = h[4]) && undefined !== t ? t : h[5]) && undefined !== n ? n : "");
                                        break;
                                    default:
                                        throw new Error(s);
                                }
                            }
                            return [i, o];
                        }(e), n = t[0], s = t[1], r = document.createElement(null != n ? n : "div"), i = 0, o = Object.keys(s); i < o.length; i++) {
                        var a = o[i],
                            c = s[a].join(" ");
                        "style" === a ? J(r.style, c) : r.setAttribute(a, c);
                    }
                    return r;
                }

                function J(e, t) {
                    for (var n = 0, s = t.split(";"); n < s.length; n++) {
                        var r = s[n],
                            i = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(r);
                        if (i) {
                            var o = i[1],
                                a = i[2],
                                c = i[4];
                            e.setProperty(o, a, c || "");
                        }
                    }
                }
                var Y = ["monospace", "sans-serif", "serif"],
                    Z = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

                function K(e) {
                    var t, n, s, r = false,
                        i = function() {
                            var e = document.createElement("canvas");
                            return e.width = 1, e.height = 1, [e, e.getContext("2d")];
                        }(),
                        o = i[0],
                        a = i[1];
                    return ! function(e, t) {
                        return !(!t || !e.toDataURL);
                    }(o, a) ? n = s = "unsupported" : (r = function(e) {
                        return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd");
                    }(a), e ? n = s = "skipped" : (t = function(e, t) {
                        ! function(e, t) {
                            e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                            var n = "Cwm fjordbank gly ".concat("😃");
                            t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45);
                        }(e, t);
                        var n = e.toDataURL(),
                            s = e.toDataURL();
                        if (n !== s) return ["unstable", "unstable"];
                        ! function(e, t) {
                            e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                            for (var n = 0, s = [
                                    ["#f2f", 40, 40],
                                    ["#2ff", 80, 40],
                                    ["#ff2", 60, 80]
                                ]; n < s.length; n++) {
                                var r = s[n],
                                    i = r[0],
                                    o = r[1],
                                    a = r[2];
                                t.fillStyle = i, t.beginPath(), t.arc(o, a, 40, 0, 2 * Math.PI, true), t.closePath(), t.fill();
                            }
                            t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, true), t.arc(60, 60, 20, 0, 2 * Math.PI, true), t.fill("evenodd");
                        }(e, t);
                        var r = e.toDataURL();
                        return [r, n];
                    }(o, a), n = t[0], s = t[1])), {
                        winding: r,
                        geometry: n,
                        text: s
                    };
                }

                function ee() {
                    var e = screen,
                        n = [g(parseInt(e.width), null), g(parseInt(e.height), null)];
                    return n.sort().reverse(), n;
                }
                var te, ne, se = 2500;

                function re() {
                    var e = this;
                    return function() {
                            if (undefined === ne) {
                                var e = function() {
                                    var t = ie();
                                    oe(t) ? ne = setTimeout(e, se) : (te = t, ne = undefined);
                                };
                                e();
                            }
                        }(),
                        function() {
                            return r(e, undefined, undefined, function() {
                                var e;
                                return i(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return oe(e = ie()) ? te ? [2, o([], te, true)] : H() ? [4, (n = document, (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n))] : [3, 2] : [3, 2];
                                        case 1:
                                            t.sent(), e = ie(), t.label = 2;
                                        case 2:
                                            return oe(e) || (te = e), [2, e];
                                    }
                                    var n;
                                });
                            });
                        };
                }

                function ie() {
                    var e = screen;
                    return [g(parseFloat(e.availTop), null), g(parseFloat(e.width) - parseFloat(e.availWidth) - g(parseFloat(e.availLeft), 0), null), g(parseFloat(e.height) - parseFloat(e.availHeight) - g(parseFloat(e.availTop), 0), null), g(parseFloat(e.availLeft), null)];
                }

                function oe(e) {
                    for (var t = 0; t < 4; ++t)
                        if (e[t]) return false;
                    return true;
                }

                function ae(e) {
                    var t;
                    return r(this, undefined, undefined, function() {
                        var n, s, r, o, a, l, u;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    for (n = document, s = n.createElement("div"), r = new Array(e.length), o = {}, ce(s), u = 0; u < e.length; ++u) "DIALOG" === (a = X(e[u])).tagName && a.show(), ce(l = n.createElement("div")), l.appendChild(a), s.appendChild(l), r[u] = a;
                                    i.label = 1;
                                case 1:
                                    return n.body ? [3, 3] : [4, c(50)];
                                case 2:
                                    return i.sent(), [3, 1];
                                case 3:
                                    n.body.appendChild(s);
                                    try {
                                        for (u = 0; u < e.length; ++u) r[u].offsetParent || (o[e[u]] = true);
                                    } finally {
                                        null === (t = s.parentNode) || undefined === t || t.removeChild(s);
                                    }
                                    return [2, o];
                            }
                        });
                    });
                }

                function ce(e) {
                    e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important");
                }

                function le(e) {
                    return matchMedia("(inverted-colors: ".concat(e, ")")).matches;
                }

                function ue(e) {
                    return matchMedia("(forced-colors: ".concat(e, ")")).matches;
                }

                function he(e) {
                    return matchMedia("(prefers-contrast: ".concat(e, ")")).matches;
                }

                function de(e) {
                    return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches;
                }

                function fe(e) {
                    return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches;
                }

                function pe(e) {
                    return matchMedia("(dynamic-range: ".concat(e, ")")).matches;
                }
                var ge = Math;
                var ye = {
                    default: [],
                    apple: [{
                        font: "-apple-system-body"
                    }],
                    serif: [{
                        fontFamily: "serif"
                    }],
                    sans: [{
                        fontFamily: "sans-serif"
                    }],
                    mono: [{
                        fontFamily: "monospace"
                    }],
                    min: [{
                        fontSize: "1px"
                    }],
                    system: [{
                        fontFamily: "system-ui"
                    }]
                };
                var be = function() {
                    for (var e = window;;) {
                        var t = e.parent;
                        if (!t || t === e) return false;
                        try {
                            if (t.location.origin !== e.location.origin) return true;
                        } catch (e) {
                            if (e instanceof Error && "SecurityError" === e.name) return true;
                            throw e;
                        }
                        e = t;
                    }
                };
                var ve = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
                    we = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
                    Re = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
                    Ce = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
                    Te = "WEBGL_debug_renderer_info";

                function Le(e) {
                    if (e.webgl) return e.webgl.context;
                    var t, n = document.createElement("canvas");
                    n.addEventListener("webglCreateContextError", function() {
                        return t = undefined;
                    });
                    for (var s = 0, r = ["webgl", "experimental-webgl"]; s < r.length; s++) {
                        var i = r[s];
                        try {
                            t = n.getContext(i);
                        } catch (e) {}
                        if (t) break;
                    }
                    return e.webgl = {
                        context: t
                    }, t;
                }

                function Oe(e, t, n) {
                    var s = e.getShaderPrecisionFormat(e[t], e[n]);
                    return s ? [s.rangeMin, s.rangeMax, s.precision] : [];
                }
                var Ae = {
                    fonts: function() {
                        var e = this;
                        return z(function(t, n) {
                            var s = n.document;
                            return r(e, undefined, undefined, function() {
                                var e, t, n, r, o, a, c, l, u, h, d;
                                return i(this, function(i) {
                                    for ((e = s.body).style.fontSize = "48px", (t = s.createElement("div")).style.setProperty("visibility", "hidden", "important"), n = {}, r = {}, o = function(e) {
                                            var n = s.createElement("span"),
                                                r = n.style;
                                            return r.position = "absolute", r.top = "0", r.left = "0", r.fontFamily = e, n.textContent = "mmMwWLliI0O&1", t.appendChild(n), n;
                                        }, a = function(e, t) {
                                            return o("'".concat(e, "',").concat(t));
                                        }, c = function() {
                                            for (var e = {}, t = function(t) {
                                                    e[t] = Y.map(function(e) {
                                                        return a(t, e);
                                                    });
                                                }, n = 0, s = Z; n < s.length; n++) {
                                                t(s[n]);
                                            }
                                            return e;
                                        }, l = function(e) {
                                            return Y.some(function(t, s) {
                                                return e[s].offsetWidth !== n[t] || e[s].offsetHeight !== r[t];
                                            });
                                        }, u = function() {
                                            return Y.map(o);
                                        }(), h = c(), e.appendChild(t), d = 0; d < Y.length; d++) n[Y[d]] = u[d].offsetWidth, r[Y[d]] = u[d].offsetHeight;
                                    return [2, Z.filter(function(e) {
                                        return !!h[e] && "function" == typeof h[e].then;
                                    })];
                                });
                            });
                        });
                    },
                    domBlockers: function(e) {
                        var t = (undefined === e ? {} : e).debug;
                        return r(this, undefined, undefined, function() {
                            var e, n, s, r, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return x() || V() ? (a = atob, e = {
                                            abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', a("I0JveC1CYW5uZXItYWRz")],
                                            abpvn: [".quangcao", "#mobileCatfish", a("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                                            adBlockFinland: [".mainostila", a("LnNwb25zb3JpdA=="), ".ylamainos", a("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), a("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                            adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", a("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                                            adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", a("LmhlYWRlci1ibG9ja2VkLWFk"), a("I2FkX2Jsb2NrZXI=")],
                                            adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                                            adGuardBase: [".BetterJsPopOverlay", a("I2FkXzMwMFgyNTA="), a("I2Jhbm5lcmZsb2F0MjI="), a("I2NhbXBhaWduLWJhbm5lcg=="), a("I0FkLUNvbnRlbnQ=")],
                                            adGuardChinese: [a("LlppX2FkX2FfSA=="), a("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", a("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), a("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                                            adGuardFrench: ["#pavePub", a("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", a("LmFkc19iYW4=")],
                                            adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                                            adGuardJapanese: ["#kauli_yad_1", a("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), a("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), a("LmFkZ29vZ2xl"), a("Ll9faXNib29zdFJldHVybkFk")],
                                            adGuardMobile: [a("YW1wLWF1dG8tYWRz"), a("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", a("I2FkX2ludmlld19hcmVh")],
                                            adGuardRussian: [a("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), a("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', a("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                                            adGuardSocial: [a("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), a("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                            adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                                            adGuardTrackingProtection: ["#qoo-counter", a("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), a("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), a("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                            adGuardTurkish: ["#backkapat", a("I3Jla2xhbWk="), a("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), a("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), a("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                            bulgarian: [a("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                                            easyList: [".yb-floorad", a("LndpZGdldF9wb19hZHNfd2lkZ2V0"), a("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", a("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                                            easyListChina: [a("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), a("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                                            easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", a("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                                            easyListCzechSlovak: ["#onlajny-stickers", a("I3Jla2xhbW5pLWJveA=="), a("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", a("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                            easyListDutch: [a("I2FkdmVydGVudGll"), a("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", a("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                            easyListGermany: ["#SSpotIMPopSlider", a("LnNwb25zb3JsaW5rZ3J1ZW4="), a("I3dlcmJ1bmdza3k="), a("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), a("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                                            easyListItaly: [a("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", a("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), a("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), a("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                            easyListLithuania: [a("LnJla2xhbW9zX3RhcnBhcw=="), a("LnJla2xhbW9zX251b3JvZG9z"), a("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), a("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), a("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                            estonian: [a("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                            fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                                            fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                            fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                            fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                                            frellwitSwedish: [a("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), a("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", a("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                            greekAdBlock: [a("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), a("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), a("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                            hungarian: ["#cemp_doboz", ".optimonk-iframe-container", a("LmFkX19tYWlu"), a("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                            iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                                            icelandicAbp: [a("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                            latvian: [a("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), a("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                            listKr: [a("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), a("I2xpdmVyZUFkV3JhcHBlcg=="), a("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), a("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                            listeAr: [a("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", a("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), a("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), a("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                            listeFr: [a("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), a("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), a("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                            officialPolish: ["#ceneo-placeholder-ceneo-12", a("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), a("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), a("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), a("ZGl2I3NrYXBpZWNfYWQ=")],
                                            ro: [a("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), a("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), a("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), a("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                                            ruAd: [a("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), a("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), a("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                            thaiAds: ["a[href*=macau-uta-popup]", a("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), a("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                            webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", a("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                                        }, n = Object.keys(e), [4, ae((o = []).concat.apply(o, n.map(function(t) {
                                            return e[t];
                                        })))]) : [2, undefined];
                                    case 1:
                                        return s = i.sent(), t && function(e, t) {
                                            for (var n = "DOM blockers debug:\n```", s = 0, r = Object.keys(e); s < r.length; s++) {
                                                var i = r[s];
                                                n += "\n".concat(i, ":");
                                                for (var o = 0, a = e[i]; o < a.length; o++) {
                                                    var c = a[o];
                                                    n += "\n  ".concat(t[c] ? "🚫" : "➡️", " ").concat(c);
                                                }
                                            }
                                            console.log("".concat(n, "\n```"));
                                        }(e, s), (r = n.filter(function(t) {
                                            var n = e[t];
                                            return m(n.map(function(e) {
                                                return s[e];
                                            })) > 0.6 * n.length;
                                        })).sort(), [2, r];
                                }
                                var a;
                            });
                        });
                    },
                    fontPreferences: function() {
                        return function(e, t) {
                            undefined === t && (t = 4e3);
                            return z(function(n, s) {
                                var r = s.document,
                                    i = r.body,
                                    a = i.style;
                                a.width = "".concat(t, "px"), a.webkitTextSizeAdjust = a.textSizeAdjust = "none", B() ? i.style.zoom = "".concat(1 / s.devicePixelRatio) : x() && (i.style.zoom = "reset");
                                var c = r.createElement("div");
                                return c.textContent = o([], Array(t / 20 << 0), true).map(function() {
                                    return "word";
                                }).join(" "), i.appendChild(c), e(r, i);
                            }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
                        }(function(e, t) {
                            for (var n = {}, s = {}, r = 0, i = Object.keys(ye); r < i.length; r++) {
                                var o = i[r],
                                    a = ye[o],
                                    c = a[0],
                                    l = undefined === c ? {} : c,
                                    u = a[1],
                                    h = undefined === u ? "mmMwWLliI0fiflO&1" : u,
                                    d = e.createElement("span");
                                d.textContent = h, d.style.whiteSpace = "nowrap";
                                for (var f = 0, p = Object.keys(l); f < p.length; f++) {
                                    var g = p[f],
                                        m = l[g];
                                    undefined !== m && (d.style[g] = m);
                                }
                                n[o] = d, t.append(e.createElement("br"), d);
                            }
                            for (var y = 0, b = Object.keys(ye); y < b.length; y++) {
                                s[o = b[y]] = n[o].getBoundingClientRect().width;
                            }
                            return s;
                        });
                    },
                    audio: function() {
                        return x() && F() && j() ? -4 : q();
                    },
                    screenFrame: function() {
                        var e = this;
                        if (x() && F() && j()) return function() {
                            return Promise.resolve(undefined);
                        };
                        var t = re();
                        return function() {
                            return r(e, undefined, undefined, function() {
                                var e, n;
                                return i(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return [4, t()];
                                        case 1:
                                            return e = s.sent(), [2, [(n = function(e) {
                                                return null === e ? null : y(e, 10);
                                            })(e[0]), n(e[1]), n(e[2]), n(e[3])]];
                                    }
                                });
                            });
                        };
                    },
                    canvas: function() {
                        return K(x() && F() && j());
                    },
                    osCpu: function() {
                        return navigator.oscpu;
                    },
                    languages: function() {
                        var e, t = navigator,
                            n = [],
                            s = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
                        if (undefined !== s && n.push([s]), Array.isArray(t.languages)) B() && m([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
                        else if ("string" == typeof t.languages) {
                            var r = t.languages;
                            r && n.push(r.split(","));
                        }
                        return n;
                    },
                    colorDepth: function() {
                        return window.screen.colorDepth;
                    },
                    deviceMemory: function() {
                        return g(parseFloat(navigator.deviceMemory), undefined);
                    },
                    screenResolution: function() {
                        if (!(x() && F() && j())) return ee();
                    },
                    hardwareConcurrency: function() {
                        return g(parseInt(navigator.hardwareConcurrency), undefined);
                    },
                    timezone: function() {
                        var e, t = null === (e = window.Intl) || undefined === e ? undefined : e.DateTimeFormat;
                        if (t) {
                            var n = (new t).resolvedOptions().timeZone;
                            if (n) return n;
                        }
                        var s, r = (s = (new Date).getFullYear(), -Math.max(parseFloat(new Date(s, 0, 1).getTimezoneOffset()), parseFloat(new Date(s, 6, 1).getTimezoneOffset())));
                        return "UTC".concat(r >= 0 ? "+" : "").concat(r);
                    },
                    sessionStorage: function() {
                        try {
                            return !!window.sessionStorage;
                        } catch (e) {
                            return true;
                        }
                    },
                    localStorage: function() {
                        try {
                            return !!window.localStorage;
                        } catch (e) {
                            return true;
                        }
                    },
                    indexedDB: function() {
                        if (!D() && !N()) try {
                            return !!window.indexedDB;
                        } catch (e) {
                            return true;
                        }
                    },
                    openDatabase: function() {
                        return !!window.openDatabase;
                    },
                    cpuClass: function() {
                        return navigator.cpuClass;
                    },
                    platform: function() {
                        var e = navigator.platform;
                        return "MacIntel" === e && x() && !G() ? function() {
                            if ("iPad" === navigator.platform) return true;
                            var e = screen,
                                t = e.width / e.height;
                            return m(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > 0.65 && t < 1.53]) >= 2;
                        }() ? "iPad" : "iPhone" : e;
                    },
                    plugins: function() {
                        var e = navigator.plugins;
                        if (e) {
                            for (var t = [], n = 0; n < e.length; ++n) {
                                var s = e[n];
                                if (s) {
                                    for (var r = [], i = 0; i < s.length; ++i) {
                                        var o = s[i];
                                        r.push({
                                            type: o.type,
                                            suffixes: o.suffixes
                                        });
                                    }
                                    t.push({
                                        name: s.name,
                                        description: s.description,
                                        mimeTypes: r
                                    });
                                }
                            }
                            return t;
                        }
                    },
                    touchSupport: function() {
                        var e, t = navigator,
                            n = 0;
                        undefined !== t.maxTouchPoints ? n = parseInt(t.maxTouchPoints) : undefined !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
                        try {
                            document.createEvent("TouchEvent"), e = true;
                        } catch (t) {
                            e = false;
                        }
                        return {
                            maxTouchPoints: n,
                            touchEvent: e,
                            touchStart: "ontouchstart" in window
                        };
                    },
                    vendor: function() {
                        return navigator.vendor || "";
                    },
                    vendorFlavors: function() {
                        for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
                            var s = n[t],
                                r = window[s];
                            r && "object" == typeof r && e.push(s);
                        }
                        return e.sort();
                    },
                    cookiesEnabled: function() {
                        var e = document;
                        try {
                            e.cookie = "cookietest=1; SameSite=Strict;";
                            var t = -1 !== e.cookie.indexOf("cookietest=");
                            return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t;
                        } catch (e) {
                            return false;
                        }
                    },
                    colorGamut: function() {
                        for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
                            var n = t[e];
                            if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n;
                        }
                    },
                    invertedColors: function() {
                        return !!le("inverted") || !le("none") && undefined;
                    },
                    forcedColors: function() {
                        return !!ue("active") || !ue("none") && undefined;
                    },
                    monochrome: function() {
                        if (matchMedia("(min-monochrome: 0)").matches) {
                            for (var e = 0; e <= 100; ++e)
                                if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
                            throw new Error("Too high value");
                        }
                    },
                    contrast: function() {
                        return he("no-preference") ? 0 : he("high") || he("more") ? 1 : he("low") || he("less") ? -1 : he("forced") ? 10 : undefined;
                    },
                    reducedMotion: function() {
                        return !!de("reduce") || !de("no-preference") && undefined;
                    },
                    reducedTransparency: function() {
                        return !!fe("reduce") || !fe("no-preference") && undefined;
                    },
                    hdr: function() {
                        return !!pe("high") || !pe("standard") && undefined;
                    },
                    math: function() {
                        var e, t = ge.acos || me,
                            n = ge.acosh || me,
                            s = ge.asin || me,
                            r = ge.asinh || me,
                            i = ge.atanh || me,
                            o = ge.atan || me,
                            a = ge.sin || me,
                            c = ge.sinh || me,
                            l = ge.cos || me,
                            u = ge.cosh || me,
                            h = ge.tan || me,
                            d = ge.tanh || me,
                            f = ge.exp || me,
                            p = ge.expm1 || me,
                            g = ge.log1p || me;
                        return {
                            acos: t(0.12312423423423424),
                            acosh: n(1e308),
                            acoshPf: (e = 1e154, ge.log(e + ge.sqrt(e * e - 1))),
                            asin: s(0.12312423423423424),
                            asinh: r(1),
                            asinhPf: function(e) {
                                return ge.log(e + ge.sqrt(e * e + 1));
                            }(1),
                            atanh: i(0.5),
                            atanhPf: function(e) {
                                return ge.log((1 + e) / (1 - e)) / 2;
                            }(0.5),
                            atan: o(0.5),
                            sin: a(-1e300),
                            sinh: c(1),
                            sinhPf: function(e) {
                                return ge.exp(e) - 1 / ge.exp(e) / 2;
                            }(1),
                            cos: true && "function" == typeof 10.000000000123.then,
                            cosh: u(1),
                            coshPf: function(e) {
                                return (ge.exp(e) + 1 / ge.exp(e)) / 2;
                            }(1),
                            tan: h(-1e300),
                            tanh: d(1),
                            tanhPf: function(e) {
                                return (ge.exp(2 * e) - 1) / (ge.exp(2 * e) + 1);
                            }(1),
                            exp: parseInt(1),
                            expm1: parseFloat(1),
                            expm1Pf: function(e) {
                                return ge.exp(e) - 1;
                            }(1),
                            log1p: g(10),
                            log1pPf: function(e) {
                                return ge.log(1 + e);
                            }(10),
                            powPI: function(e) {
                                return ge.pow(ge.PI, e);
                            }(-100)
                        };
                    },
                    pdfViewerEnabled: function() {
                        return navigator.pdfViewerEnabled;
                    },
                    architecture: function() {
                        var e = new Float32Array(1),
                            t = new Uint8Array(e.buffer);
                        return e[0] = Infinity, e[0] = e[0] - e[0], t[3];
                    },
                    applePay: function() {
                        var e = window.ApplePaySession;
                        if ("function" != typeof(null == e ? undefined : e.canMakePayments)) return -1;
                        if (be()) return -3;
                        try {
                            return e.canMakePayments() ? 1 : 0;
                        } catch (e) {
                            return function(e) {
                                if (e instanceof Error && "InvalidAccessError" === e.name && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
                                throw e;
                            }(e);
                        }
                    },
                    privateClickMeasurement: function() {
                        var e, t = document.createElement("a"),
                            n = null !== (e = t.attributionSourceId) && undefined !== e ? e : t.attributionsourceid;
                        return undefined === n ? undefined : String(n);
                    },
                    audioBaseLatency: function() {
                        var e;
                        return V() || x() ? window.AudioContext && null !== (e = (new AudioContext).baseLatency) && undefined !== e ? e : -1 : -2;
                    },
                    webGlBasics: function(e) {
                        var t, n, s, r, i, o, a = Le(e.cache);
                        if (!a) return -1;
                        if (!("function" == typeof a.getParameter)) return -2;
                        var c = $() ? null : a.getExtension(Te);
                        return {
                            version: (null === (t = a.getParameter(a.VERSION)) || undefined === t ? undefined : t.toString()) || "",
                            vendor: (null === (n = a.getParameter(a.VENDOR)) || undefined === n ? undefined : n.toString()) || "",
                            vendorUnmasked: c ? null === (s = a.getParameter(c.UNMASKED_VENDOR_WEBGL)) || undefined === s ? undefined : s.toString() : "",
                            renderer: (null === (r = a.getParameter(a.RENDERER)) || undefined === r ? undefined : r.toString()) || "",
                            rendererUnmasked: c ? null === (i = a.getParameter(c.UNMASKED_RENDERER_WEBGL)) || undefined === i ? undefined : i.toString() : "",
                            shadingLanguageVersion: (null === (o = a.getParameter(a.SHADING_LANGUAGE_VERSION)) || undefined === o ? undefined : o.toString()) || ""
                        };
                    },
                    webGlExtensions: function(e) {
                        var t = Le(e.cache);
                        if (!t) return -1;
                        if (!("function" == typeof t.getParameter)) return -2;
                        var n = t.getSupportedExtensions(),
                            s = t.getContextAttributes(),
                            r = [],
                            i = [],
                            o = [],
                            a = [],
                            c = [];
                        if (s)
                            for (var l = 0, u = Object.keys(s); l < u.length; l++) {
                                var h = u[l];
                                i.push("".concat(h, "=").concat(s[h]));
                            }
                        for (var d = 0, f = Object.keys(t.__proto__).filter(Se); d < f.length; d++) {
                            var p = t[R = f[d]];
                            o.push("".concat(R, "=").concat(p).concat(ve.has(p) ? "=".concat(t.getParameter(p)) : ""));
                        }
                        if (n)
                            for (var g = 0, m = n; g < m.length; g++) {
                                var y = m[g];
                                if (!(y === Te && $() || "WEBGL_polygon_mode" === y && (B() || x()))) {
                                    var b = t.getExtension(y);
                                    if (b)
                                        for (var v = 0, w = Object.keys(b.__proto__).filter(Se); v < w.length; v++) {
                                            var R;
                                            p = b[R = w[v]];
                                            a.push("".concat(R, "=").concat(p).concat(we.has(p) ? "=".concat(t.getParameter(p)) : ""));
                                        } else r.push(y);
                                }
                            }
                        for (var C = 0, T = Re; C < T.length; C++)
                            for (var L = T[C], O = 0, _ = Ce; O < _.length; O++) {
                                var S = _[O],
                                    k = Oe(t, L, S);
                                c.push("".concat(L, ".").concat(S, "=").concat(k.join(",")));
                            }
                        return a.sort(), o.sort(), {
                            contextAttributes: i,
                            parameters: o,
                            shaderPrecisions: c,
                            extensions: n,
                            extensionParameters: a,
                            unsupportedExtensions: r
                        };
                    }
                };
                var Ee = "$ if upgrade to Pro: https://fpjs.dev/pro";

                function Me(e) {
                    var t = function(e) {
                            if (V()) return 0.4;
                            if (x()) return !G() || F() && j() ? 0.3 : 0.5;
                            var t = "value" in e.platform ? e.platform.value : "";
                            if (/^Win/.test(t)) return 0.6;
                            if (/^Mac/.test(t)) return 0.5;
                            return 0.7;
                        }(e),
                        n = function(e) {
                            return y(0.99 + 0.01 * e, 0.0001);
                        }(t);
                    return {
                        score: t,
                        comment: Ee.replace(/\$/g, "".concat(n))
                    };
                }

                function Pe(e) {
                    return JSON.stringify(e, function(e, t) {
                        return t instanceof Error ? s({
                            name: (n = t).name,
                            message: n.message,
                            stack: null === (r = n.stack) || undefined === r ? undefined : r.split("\n")
                        }, n) : t;
                        var n, r;
                    }, 2);
                }

                function Ue(e) {
                    return E(function(e) {
                        for (var t = "", n = 0, s = Object.keys(e).sort(); n < s.length; n++) {
                            var r = s[n],
                                i = e[r],
                                o = "error" in i ? "error" : JSON.stringify(i.value);
                            t += "".concat(t ? "|" : "").concat(r.replace(/([:|\\])/g, "\\$1"), ":").concat(o);
                        }
                        return t;
                    }(e));
                }

                function De(e) {
                    return undefined === e && (e = 50),
                        function(e, t) {
                            undefined === t && (t = Infinity);
                            var n = window.requestIdleCallback;
                            return n ? new Promise(function(e) {
                                return n.call(window, function() {
                                    return e();
                                }, {
                                    timeout: t
                                });
                            }) : c(Math.min(e, t));
                        }(e, 2 * e);
                }

                function Ne(e, t) {
                    var n = Date.now();
                    return {
                        get: function(s) {
                            return r(this, undefined, undefined, function() {
                                var r, o, c;
                                return i(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return r = Date.now(), [4, e()];
                                        case 1:
                                            return o = i.sent(), c = function(e) {
                                                var t;
                                                return {
                                                    get visitorId() {
                                                        return undefined === t && (t = Ue(this.components)), t;
                                                    },
                                                    set visitorId(e) {
                                                        t = e;
                                                    },
                                                    confidence: Me(e),
                                                    components: e,
                                                    version: a
                                                };
                                            }(o), (t || (null == s ? undefined : s.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(r - n, "\nvisitorId: ").concat(c.visitorId, "\ncomponents: ").concat(Pe(o), "\n```")), [2, c];
                                    }
                                });
                            });
                        }
                    };
                }

                function Be(e) {
                    var t;
                    return undefined === e && (e = {}), r(this, undefined, undefined, function() {
                        var n, s, r;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return (null === (t = e.monitoring) || undefined === t || t) && function() {
                                        if (!(window.__fpjs_d_m || Math.random() >= 0.001)) try {
                                            var e = new XMLHttpRequest;
                                            e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(a, "/npm-monitoring"), true), e.send();
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }(), n = e.delayFallback, s = e.debug, [4, De(n)];
                                case 1:
                                    return i.sent(), r = function(e) {
                                        return P(Ae, e, []);
                                    }({
                                        cache: {},
                                        debug: s
                                    }), [2, Ne(r, s)];
                            }
                        });
                    });
                }
                var xe = {
                        load: Be,
                        hashComponents: Ue,
                        componentsToDebugString: Pe
                    },
                    Ge = E;
            },
            3660: function(e, t, n) {
                var s;
                s = () => {
                    var e, t = {},
                        s = {
                            exports: t
                        },
                        r = Object.defineProperty,
                        i = Object.defineProperties,
                        o = Object.getOwnPropertyDescriptor,
                        a = Object.getOwnPropertyDescriptors,
                        c = Object.getOwnPropertyNames,
                        l = Object.getOwnPropertySymbols,
                        u = Object.prototype.hasOwnProperty,
                        h = Object.prototype.propertyIsEnumerable,
                        d = (e, t, n) => t in e ? r(e, t, {
                            enumerable: true,
                            configurable: true,
                            writable: true,
                            value: n
                        }) : e[t] = n,
                        f = (e, t) => {
                            for (var n in t || (t = {})) u.call(t, n) && d(e, n, t[n]);
                            if (l)
                                for (var n of l(t)) h.call(t, n) && d(e, n, t[n]);
                            return e;
                        },
                        p = (e, t) => i(e, a(t)),
                        g = (e, t) => {
                            for (var n in t) r(e, n, {
                                get: t[n],
                                enumerable: true
                            });
                        },
                        m = {};
                    g(m, {
                        ErrorInfo: () => O,
                        Realtime: () => Nn,
                        Rest: () => xt,
                        default: () => Us,
                        msgpack: () => Es,
                        protocolMessageFromDeserialized: () => Jt
                    }), s.exports = (e = m, ((e, t, n, s) => {
                        if (t && "object" == typeof t || "function" == typeof t)
                            for (let i of c(t)) u.call(e, i) || i === n || r(e, i, {
                                get: () => t[i],
                                enumerable: !(s = o(t, i)) || s.enumerable
                            });
                        return e;
                    })(r({}, "__esModule", {
                        value: true
                    }), e));
                    var y = class {},
                        b = undefined !== n.g ? n.g : "undefined" != typeof window ? window : self;

                    function w(e) {
                        return y.Config.logTimestamps ? function(t) {
                            const n = new Date;
                            e(`${n.getHours()}`.padStart(t ? 3 : 2, "0") + ":" + `${n.getMinutes()}`.padStart(t ? 3 : 2, "0") + ":" + `${n.getSeconds()}`.padStart(t ? 3 : 2, "0") + "." + `${n.getMilliseconds()}`.padStart(1 ? 3 : 2, "0") + " " + t);
                        } : e;
                    }
                    var R = class e {
                        constructor() {
                            e.logLevel = e.LOG_DEFAULT;
                        }
                        static initLogHandlers() {
                            const [e, t] = (() => {
                                var e;
                                let t, n;
                                return "function" == typeof(null == (e = null == b ? undefined : b.console) ? undefined : e.log) ? (t = function(...e) {
                                    console.log.apply(console, e);
                                }, n = console.warn ? function(...e) {
                                    console.warn.apply(console, e);
                                } : t) : t = n = function() {}, [t, n].map(w);
                            })();
                            this.logHandler = e, this.logErrorHandler = t;
                        }
                        static logActionNoStrip(t, n, s) {
                            e.shouldLog(t) && (1 === t ? e.logErrorHandler : e.logHandler)("Ably: " + n + ": " + s);
                        }
                        static renamedClientOption(t, n) {
                            e.deprecationWarning(`The \`${t}\` client option has been renamed to \`${n}\`. Please update your code to use \`${n}\` instead. \`${t}\` will be removed in a future version.`);
                        }
                        static renamedMethod(t, n, s) {
                            e.deprecationWarning(`\`${t}\`’s \`${n}\` method has been renamed to \`${s}\`. Please update your code to use \`${s}\` instead. \`${n}\` will be removed in a future version.`);
                        }
                        static deprecationWarning(t) {
                            e.shouldLog(1) && e.logErrorHandler(`Ably: Deprecation warning - ${t}`);
                        }
                    };
                    R.logLevel = 1, R.LOG_NONE = 0, R.LOG_ERROR = 1, R.LOG_MAJOR = 2, R.LOG_MINOR = 3, R.LOG_MICRO = 4, R.LOG_DEFAULT = 1, R.LOG_DEBUG = 4, R.logAction = (e, t, n) => {
                        R.logActionNoStrip(e, t, n);
                    }, R.deprecated = (e, t) => {
                        R.deprecationWarning(`${e} is deprecated and will be removed in a future version. ${t}`);
                    }, R.shouldLog = e => e <= R.logLevel, R.setLog = (e, t) => {
                        undefined !== e && (R.logLevel = e), undefined !== t && (R.logHandler = R.logErrorHandler = t);
                    };
                    var C = R,
                        T = {};

                    function L(e) {
                        let t = "[" + e.constructor.name;
                        return e.message && (t += ": " + e.message), e.statusCode && (t += "; statusCode=" + e.statusCode), e.code && (t += "; code=" + e.code), e.cause && (t += "; cause=" + K(e.cause)), !e.href || e.message && e.message.indexOf("help.ably.io") > -1 || (t += "; see " + e.href + " "), t += "]", t;
                    }
                    g(T, {
                        Format: () => z,
                        allSame: () => W,
                        allToLowerCase: () => ae,
                        allToUpperCase: () => ce,
                        arrChooseN: () => se,
                        arrDeleteValue: () => $,
                        arrEquals: () => me,
                        arrIntersect: () => x,
                        arrIntersectOb: () => G,
                        arrPopRandomElement: () => X,
                        arrSubtract: () => j,
                        arrWithoutValue: () => F,
                        cheapRandStr: () => te,
                        containsValue: () => N,
                        copy: () => k,
                        createMissingPluginError: () => ye,
                        dataSizeBytes: () => ee,
                        decodeBody: () => ie,
                        encodeBody: () => oe,
                        ensureArray: () => I,
                        forInOwnNonNullProperties: () => q,
                        getBackoffCoefficient: () => le,
                        getGlobalObject: () => de,
                        getJitterCoefficient: () => ue,
                        getRetryTime: () => he,
                        inherits: () => D,
                        inspectBody: () => Q,
                        inspectError: () => K,
                        intersect: () => B,
                        isEmpty: () => E,
                        isErrorInfoOrPartialErrorInfo: () => Z,
                        isNil: () => M,
                        isObject: () => A,
                        keysArray: () => H,
                        matchDerivedChannel: () => pe,
                        mixin: () => S,
                        parseQueryString: () => Y,
                        prototypicalClone: () => U,
                        randomString: () => ne,
                        shallowClone: () => P,
                        shallowEquals: () => fe,
                        throwMissingPluginError: () => be,
                        toBase64: () => ge,
                        toQueryString: () => J,
                        valuesArray: () => V,
                        whenPromiseSettles: () => re
                    });
                    var O = class e extends Error {
                            constructor(t, n, s, r) {
                                super(t), undefined !== Object.setPrototypeOf && Object.setPrototypeOf(this, e.prototype), this.code = n, this.statusCode = s, this.cause = r;
                            }
                            toString() {
                                return L(this);
                            }
                            static fromValues(t) {
                                const {
                                    message: n,
                                    code: s,
                                    statusCode: r
                                } = t;
                                if ("string" != typeof n || "number" != typeof s || "number" != typeof r) throw new Error("ErrorInfo.fromValues(): invalid values: " + y.Config.inspect(t));
                                const i = Object.assign(new e(n, s, r), t);
                                return i.code && !i.href && (i.href = "https://help.ably.io/error/" + i.code), i;
                            }
                        },
                        _ = class e extends Error {
                            constructor(t, n, s, r) {
                                super(t), undefined !== Object.setPrototypeOf && Object.setPrototypeOf(this, e.prototype), this.code = n, this.statusCode = s, this.cause = r;
                            }
                            toString() {
                                return L(this);
                            }
                        };

                    function S(e, ...t) {
                        for (let n = 0; n < t.length; n++) {
                            const s = t[n];
                            if (!s) break;
                            for (const t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t]);
                        }
                        return e;
                    }

                    function I(e) {
                        return null == e ? [] : Array.isArray(e) ? e : [e];
                    }

                    function E(e) {
                        for (const t in e) return false;
                        return true;
                    }

                    function P(e) {
                        const t = new Object;
                        for (const n in e) t[n] = e[n];
                        return t;
                    }

                    function U(e, t) {
                        class n {}
                        n.prototype = e;
                        const s = new n;
                        return t && S(s, t), s;
                    }
                    var D = function(e, t) {
                        y.Config.inherits ? y.Config.inherits(e, t) : (e.super_ = t, e.prototype = U(t.prototype, {
                            constructor: e
                        }));
                    };

                    function N(e, t) {
                        for (const n in e)
                            if (e[n] == t) return true;
                        return false;
                    }

                    function B(e, t) {
                        return Array.isArray(t) ? x(e, t) : G(e, t);
                    }

                    function x(e, t) {
                        const n = [];
                        for (let s = 0; s < e.length; s++) {
                            const r = e[s]; -
                            1 != t.indexOf(r) && n.push(r);
                        }
                        return n;
                    }

                    function G(e, t) {
                        const n = [];
                        for (let s = 0; s < e.length; s++) {
                            const r = e[s];
                            r in t && n.push(r);
                        }
                        return n;
                    }

                    function j(e, t) {
                        const n = [];
                        for (let s = 0; s < e.length; s++) {
                            const r = e[s]; -
                            1 == t.indexOf(r) && n.push(r);
                        }
                        return n;
                    }

                    function $(e, t) {
                        const n = e.indexOf(t),
                            s = -1 != n;
                        return s && e.splice(n, 1), s;
                    }

                    function F(e, t) {
                        const n = e.slice();
                        return $(n, t), n;
                    }

                    function H(e, t) {
                        const n = [];
                        for (const s in e) t && !Object.prototype.hasOwnProperty.call(e, s) || n.push(s);
                        return n;
                    }

                    function V(e, t) {
                        const n = [];
                        for (const s in e) t && !Object.prototype.hasOwnProperty.call(e, s) || n.push(e[s]);
                        return n;
                    }

                    function q(e, t) {
                        for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && t(n);
                    }

                    function W(e, t) {
                        if (0 === e.length) return true;
                        const n = e[0][t];
                        return e.every(function(e) {
                            return e[t] === n;
                        });
                    }
                    var z = (e => (e.msgpack = "msgpack", e.json = "json", e))(z || {});

                    function X(e) {
                        return e.splice((t = e, Math.floor(Math.random() * t.length)), 1)[0];
                        var t;
                    }

                    function J(e) {
                        const t = [];
                        if (e)
                            for (const n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                        return t.length ? "?" + t.join("&") : "";
                    }

                    function Y(e) {
                        let t;
                        const n = /([^?&=]+)=?([^&]*)/g,
                            s = {};
                        for (; t = n.exec(e);) s[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
                        return s;
                    }

                    function K(e) {
                        var t, n;
                        return e instanceof Error || "ErrorInfo" === (null == (t = null == e ? undefined : e.constructor) ? undefined : t.name) || "PartialErrorInfo" === (null == (n = null == e ? undefined : e.constructor) ? undefined : n.name) ? e.toString() : y.Config.inspect(e);
                    }

                    function Q(e) {
                        return y.BufferUtils.isBuffer(e) ? e.toString() : "string" == typeof e ? e : y.Config.inspect(e);
                    }

                    function ee(e) {
                        if (y.BufferUtils.isBuffer(e)) return y.BufferUtils.byteLength(e);
                        if ("string" == typeof e) return y.Config.stringByteSize(e);
                        throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof e);
                    }
                    var ne = async e => {
                        const t = await y.Config.getRandomArrayBuffer(e);
                        return y.BufferUtils.base64Encode(t);
                    };

                    function se(e, t) {
                        const n = Math.min(t, e.length),
                            s = e.slice(),
                            r = [];
                        for (let e = 0; e < n; e++) r.push(X(s));
                        return r;
                    }

                    function re(e, t) {
                        e.then(e => {
                            null == t || t(null, e);
                        }).catch(e => {
                            null == t || t(e);
                        });
                    }

                    function ie(e, t, n) {
                        return "msgpack" == n ? (t || be("MsgPack"), t.decode(e)) : JSON.parse(String(e));
                    }

                    function oe(e, t, n) {
                        return "msgpack" == n ? (t || be("MsgPack"), t.encode(e, true)) : JSON.stringify(e);
                    }

                    function ae(e) {
                        return e.map(function(e) {
                            return e && e.toLowerCase();
                        });
                    }

                    function ce(e) {
                        return e.map(function(e) {
                            return e && e.toUpperCase();
                        });
                    }

                    function de() {
                        return undefined !== n.g ? n.g : "undefined" != typeof window ? window : self;
                    }

                    function pe(e) {
                        const t = e.match(/^(\[([^?]*)(?:(.*))\])?(.+)$/);
                        if (!t || !t.length || t.length < 5) throw new O("regex match failed", 400, 40010);
                        if (t[2]) throw new O(`cannot use a derived option with a ${t[2]} channel`, 400, 40010);
                        return {
                            qualifierParam: t[3] || "",
                            channelName: t[4]
                        };
                    }

                    function ge(e) {
                        const t = y.BufferUtils,
                            n = t.utf8Encode(e);
                        return t.base64Encode(n);
                    }

                    function me(e, t) {
                        return e.length === t.length && e.every(function(e, n) {
                            return e === t[n];
                        });
                    }

                    function ye(e) {
                        return new O(`${e} plugin not provided`, 40019, 400);
                    }

                    function be(e) {
                        throw ye(e);
                    }
                    var ve = "2.0.3",
                        we = {
                            ENVIRONMENT: "",
                            REST_HOST: "rest.ably.io",
                            REALTIME_HOST: "realtime.ably.io",
                            FALLBACK_HOSTS: ["A.ably-realtime.com", "B.ably-realtime.com", "C.ably-realtime.com", "D.ably-realtime.com", "E.ably-realtime.com"],
                            PORT: 80,
                            TLS_PORT: 443,
                            TIMEOUTS: {
                                disconnectedRetryTimeout: 15e3,
                                suspendedRetryTimeout: 3e4,
                                httpRequestTimeout: 1e4,
                                httpMaxRetryDuration: 15e3,
                                channelRetryTimeout: 15e3,
                                fallbackRetryTimeout: 6e5,
                                connectionStateTtl: 12e4,
                                realtimeRequestTimeout: 1e4,
                                recvTimeout: 9e4,
                                webSocketConnectTimeout: 1e4,
                                webSocketSlowTimeout: 4e3
                            },
                            httpMaxRetryCount: 3,
                            maxMessageSize: 65536,
                            version: ve,
                            protocolVersion: 3,
                            agent: "ably-js/" + ve,
                            getHost: Re,
                            getPort: function(e, t) {
                                return t || e.tls ? e.tlsPort : e.port;
                            },
                            getHttpScheme: function(e) {
                                return e.tls ? "https://" : "http://";
                            },
                            environmentFallbackHosts: Ce,
                            getFallbackHosts: Te,
                            getHosts: function(e, t) {
                                const n = [e.restHost].concat(Te(e));
                                return t ? n.map(t => Re(e, t, true)) : n;
                            },
                            checkHost: Le,
                            objectifyOptions: function(e, t, n, s) {
                                if (undefined === e) {
                                    const e = t ? `${n} must be initialized with either a client options object, an Ably API key, or an Ably Token` : `${n} must be initialized with a client options object`;
                                    throw C.logAction(C.LOG_ERROR, `${n}()`, e), new Error(e);
                                }
                                let r;
                                if ("string" == typeof e)
                                    if (-1 == e.indexOf(":")) {
                                        if (!t) {
                                            const e = `${n} cannot be initialized with just an Ably Token; you must provide a client options object with a \`plugins\` property. (Set this Ably Token as the object’s \`token\` property.)`;
                                            throw C.logAction(C.LOG_ERROR, `${n}()`, e), new Error(e);
                                        }
                                        r = {
                                            token: e
                                        };
                                    } else {
                                        if (!t) {
                                            const e = `${n} cannot be initialized with just an Ably API key; you must provide a client options object with a \`plugins\` property. (Set this Ably API key as the object’s \`key\` property.)`;
                                            throw C.logAction(C.LOG_ERROR, `${n}()`, e), new Error(e);
                                        }
                                        r = {
                                            key: e
                                        };
                                    }
                                else r = e;
                                return s && (r = p(f({}, r), {
                                    plugins: f(f({}, s), r.plugins)
                                })), r;
                            },
                            normaliseOptions: function(e, t) {
                                "function" == typeof e.recover && true === e.closeOnUnload && (C.logAction(C.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), e.recover = undefined), "closeOnUnload" in e || (e.closeOnUnload = !e.recover), "queueMessages" in e || (e.queueMessages = true);
                                const n = e.environment && String(e.environment).toLowerCase() || we.ENVIRONMENT,
                                    s = !n || "production" === n;
                                e.fallbackHosts || e.restHost || e.realtimeHost || e.port || e.tlsPort || (e.fallbackHosts = s ? we.FALLBACK_HOSTS : Ce(n));
                                const r = e.restHost || (s ? we.REST_HOST : n + "-" + we.REST_HOST),
                                    i = function(e, t, n) {
                                        return e.realtimeHost ? e.realtimeHost : e.restHost ? (C.logAction(C.LOG_MINOR, "Defaults.normaliseOptions", 'restHost is set to "' + e.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + e.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.'), e.restHost) : t ? we.REALTIME_HOST : n + "-" + we.REALTIME_HOST;
                                    }(e, s, n);
                                (e.fallbackHosts || []).concat(r, i).forEach(Le), e.port = e.port || we.PORT, e.tlsPort = e.tlsPort || we.TLS_PORT, "tls" in e || (e.tls = true);
                                const o = function(e) {
                                    const t = {};
                                    for (const n in we.TIMEOUTS) t[n] = e[n] || we.TIMEOUTS[n];
                                    return t;
                                }(e);
                                e.useBinaryProtocol = !!t && ("useBinaryProtocol" in e ? y.Config.supportsBinary && e.useBinaryProtocol : y.Config.preferBinary);
                                const a = {};
                                e.clientId && (a["X-Ably-ClientId"] = y.BufferUtils.base64Encode(y.BufferUtils.utf8Encode(e.clientId))), "idempotentRestPublishing" in e || (e.idempotentRestPublishing = true);
                                let c = null,
                                    l = e.connectivityCheckUrl;
                                if (e.connectivityCheckUrl) {
                                    let [t, n] = e.connectivityCheckUrl.split("?");
                                    c = n ? Y(n) : {}, -1 === t.indexOf("://") && (t = "https://" + t), l = t;
                                }
                                return p(f({}, e), {
                                    realtimeHost: i,
                                    restHost: r,
                                    maxMessageSize: e.maxMessageSize || we.maxMessageSize,
                                    timeouts: o,
                                    connectivityCheckParams: c,
                                    connectivityCheckUrl: l,
                                    headers: a
                                });
                            },
                            defaultGetHeaders: function(e, {
                                format: t = ke.format,
                                protocolVersion: n = ke.protocolVersion
                            } = {}) {
                                return {
                                    accept: Se[t],
                                    "X-Ably-Version": n.toString(),
                                    "Ably-Agent": Oe(e)
                                };
                            },
                            defaultPostHeaders: function(e, {
                                format: t = ke.format,
                                protocolVersion: n = ke.protocolVersion
                            } = {}) {
                                let s;
                                return {
                                    accept: s = Se[t],
                                    "content-type": s,
                                    "X-Ably-Version": n.toString(),
                                    "Ably-Agent": Oe(e)
                                };
                            }
                        };

                    function Re(e, t, n) {
                        return t = n ? t == e.restHost && e.realtimeHost || t || e.realtimeHost : t || e.restHost;
                    }

                    function Ce(e) {
                        return [e + "-a-fallback.ably-realtime.com", e + "-b-fallback.ably-realtime.com", e + "-c-fallback.ably-realtime.com", e + "-d-fallback.ably-realtime.com", e + "-e-fallback.ably-realtime.com"];
                    }

                    function Te(e) {
                        const t = e.fallbackHosts,
                            n = undefined !== e.httpMaxRetryCount ? e.httpMaxRetryCount : we.httpMaxRetryCount;
                        return t ? se(t, n) : [];
                    }

                    function Le(e) {
                        if ("string" != typeof e) throw new O("host must be a string; was a " + typeof e, 4e4, 400);
                        if (!e.length) throw new O("host must not be zero-length", 4e4, 400);
                    }

                    function Oe(e) {
                        let t = we.agent;
                        if (e.agents)
                            for (var n in e.agents) t += " " + n + "/" + e.agents[n];
                        return t;
                    }

                    function _e(e, t) {
                        const n = t || {};
                        if (n.cipher) {
                            e || be("Crypto");
                            const t = e.getCipher(n.cipher);
                            n.cipher = t.cipherParams, n.channelCipher = t.cipher;
                        } else "cipher" in n && (n.cipher = undefined, n.channelCipher = null);
                        return n;
                    }
                    var Se = {
                            json: "application/json",
                            xml: "application/xml",
                            html: "text/html",
                            msgpack: "application/x-msgpack"
                        },
                        ke = {
                            format: "json",
                            protocolVersion: we.protocolVersion
                        },
                        Ie = we,
                        Ae = class e {
                            constructor(e) {
                                this.members = e || [];
                            }
                            call(e, t) {
                                for (const n of this.members)
                                    if (n) try {
                                        n(e, t);
                                    } catch (e) {
                                        C.logAction(C.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + e + "; stack = " + e.stack);
                                    }
                            }
                            push(...e) {
                                this.members.push(...e);
                            }
                            createPromise() {
                                return new Promise((e, t) => {
                                    this.push((n, s) => {
                                        n ? t(n) : e(s);
                                    });
                                });
                            }
                            resolveAll(e) {
                                this.call(null, e);
                            }
                            rejectAll(e) {
                                this.call(e);
                            }
                            static create(t) {
                                const n = new e(t);
                                return Object.assign((e, t) => n.call(e, t), {
                                    push: e => n.push(e),
                                    createPromise: () => n.createPromise(),
                                    resolveAll: e => n.resolveAll(e),
                                    rejectAll: e => n.rejectAll(e)
                                });
                            }
                        },
                        Ee = (e => (e.Get = "get", e.Delete = "delete", e.Post = "post", e.Put = "put", e.Patch = "patch", e))(Ee || {}),
                        Me = Ee,
                        Pe = (e => (e[e.Success = 200] = "Success", e[e.NoContent = 204] = "NoContent", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.Forbidden = 403] = "Forbidden", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.InternalServerError = 500] = "InternalServerError", e))(Pe || {}),
                        Ue = Pe,
                        De = Math.pow(2, 17);

                    function Ne(e) {
                        return "object" == typeof e && null !== e && (e instanceof O || e instanceof _) ? (e.code || (403 === e.statusCode ? e.code = 40300 : (e.code = 40170, e.statusCode = 401)), e) : new O(K(e), e.code || 40170, e.statusCode || 401);
                    }

                    function Be(e) {
                        if (!e) return "";
                        "string" == typeof e && (e = JSON.parse(e));
                        const t = Object.create(null),
                            n = H(e, true);
                        if (!n) return "";
                        n.sort();
                        for (let s = 0; s < n.length; s++) t[n[s]] = e[n[s]].sort();
                        return JSON.stringify(t);
                    }

                    function xe(e) {
                        if (e.authCallback) C.logAction(C.LOG_MINOR, "Auth()", "using token auth with authCallback");
                        else if (e.authUrl) C.logAction(C.LOG_MINOR, "Auth()", "using token auth with authUrl");
                        else if (e.key) C.logAction(C.LOG_MINOR, "Auth()", "using token auth with client-side signing");
                        else {
                            if (!e.tokenDetails) {
                                const e = "authOptions must include valid authentication parameters";
                                throw C.logAction(C.LOG_ERROR, "Auth()", e), new Error(e);
                            }
                            C.logAction(C.LOG_MINOR, "Auth()", "using token auth with supplied token only");
                        }
                    }

                    function Ge(e) {
                        return e.useTokenAuth || ! function(e) {
                            return "useTokenAuth" in e && !e.useTokenAuth;
                        }(e) && (e.authCallback || e.authUrl || e.token || e.tokenDetails);
                    }
                    var je = 0,
                        $e = class {
                            constructor(e, t) {
                                if (this.authOptions = {}, this.client = e, this.tokenParams = t.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, Ge(t))(function(e) {
                                    return !e.key && !e.authCallback && !e.authUrl;
                                }(t) && C.logAction(C.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(t.defaultTokenParams, t), xe(this.authOptions));
                                else {
                                    if (!t.key) {
                                        const e = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";
                                        throw C.logAction(C.LOG_ERROR, "Auth()", e), new O(e, 40160, 401);
                                    }
                                    C.logAction(C.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(t);
                                }
                            }
                            async authorize(e, t) {
                                if (t && t.key && this.authOptions.key !== t.key) throw new O("Unable to update auth options with incompatible key", 40102, 401);
                                try {
                                    let n = await this._forceNewToken(null != e ? e : null, null != t ? t : null);
                                    return this.client.connection ? new Promise((e, t) => {
                                        this.client.connection.connectionManager.onAuthUpdated(n, (n, s) => n ? t(n) : e(s));
                                    }) : n;
                                } catch (e) {
                                    throw this.client.connection && e.statusCode === Ue.Forbidden && this.client.connection.connectionManager.actOnErrorFromAuthorize(e), e;
                                }
                            }
                            async _forceNewToken(e, t) {
                                this.tokenDetails = null, this._saveTokenOptions(e, t), xe(this.authOptions);
                                try {
                                    return this._ensureValidAuthCredentials(true);
                                } finally {
                                    delete this.tokenParams.timestamp, delete this.authOptions.queryTime;
                                }
                            }
                            async requestToken(e, t) {
                                const n = t || this.authOptions,
                                    s = e || S({}, this.tokenParams);
                                let r, i = this.client;
                                if (n.authCallback) C.logAction(C.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), r = n.authCallback;
                                else if (n.authUrl) C.logAction(C.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), r = (e, t) => {
                                    const s = S({
                                            accept: "application/json, text/plain"
                                        }, n.authHeaders),
                                        r = n.authMethod && "post" === n.authMethod.toLowerCase();
                                    let i;
                                    const o = n.authUrl.indexOf("?");
                                    o > -1 && (i = Y(n.authUrl.slice(o)), n.authUrl = n.authUrl.slice(0, o), r || (n.authParams = S(i, n.authParams)));
                                    const a = S({}, n.authParams || {}, e),
                                        c = function(e) {
                                            var n, s;
                                            let r = null != (n = e.body) ? n : null,
                                                i = null;
                                            if (e.error) C.logAction(C.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + K(e.error));
                                            else {
                                                const t = null != (s = e.headers["content-type"]) ? s : null;
                                                i = Array.isArray(t) ? t.join(", ") : t, C.logAction(C.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + i + "; body: " + Q(r));
                                            }
                                            if (e.error) return void t(e.error, null);
                                            if (e.unpacked) return void t(null, r);
                                            if (y.BufferUtils.isBuffer(r) && (r = r.toString()), !i) return void t(new O("authUrl response is missing a content-type header", 40170, 401), null);
                                            const o = i.indexOf("application/json") > -1,
                                                a = i.indexOf("text/plain") > -1 || i.indexOf("application/jwt") > -1;
                                            if (o || a) {
                                                if (o) {
                                                    if (r.length > De) return void t(new O("authUrl response exceeded max permitted length", 40170, 401), null);
                                                    try {
                                                        r = JSON.parse(r);
                                                    } catch (e) {
                                                        return void t(new O("Unexpected error processing authURL response; err = " + e.message, 40170, 401), null);
                                                    }
                                                }
                                                t(null, r, i);
                                            } else t(new O("authUrl responded with unacceptable content-type " + i + ", should be either text/plain, application/jwt or application/json", 40170, 401), null);
                                        };
                                    if (C.logAction(C.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + n.authUrl + "; Params: " + JSON.stringify(a) + "; method: " + (r ? "POST" : "GET")), r) {
                                        const e = s || {};
                                        e["content-type"] = "application/x-www-form-urlencoded";
                                        const t = J(a).slice(1);
                                        re(this.client.http.doUri(Me.Post, n.authUrl, e, t, i), (e, t) => c(e || t));
                                    } else re(this.client.http.doUri(Me.Get, n.authUrl, s || {}, null, a), (e, t) => c(e || t));
                                };
                                else {
                                    if (!n.key) {
                                        const e = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
                                        throw C.logAction(C.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), new O(e, 40171, 403);
                                    }
                                    C.logAction(C.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), r = (e, t) => {
                                        re(this.createTokenRequest(e, n), (e, n) => t(e, null != n ? n : null));
                                    };
                                }
                                "capability" in s && (s.capability = Be(s.capability));
                                const o = (e, t) => {
                                    const s = "/keys/" + e.keyName + "/requestToken",
                                        r = Ie.defaultPostHeaders(this.client.options);
                                    n.requestHeaders && S(r, n.requestHeaders), C.logAction(C.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + s + "; Token params: " + JSON.stringify(e)), re(this.client.http.do(Me.Post, function(e) {
                                        return i.baseUri(e) + s;
                                    }, r, JSON.stringify(e), null), (e, n) => e ? t(e) : t(n.error, n.body, n.unpacked));
                                };
                                return new Promise((e, t) => {
                                    let i = false,
                                        a = this.client.options.timeouts.realtimeRequestTimeout,
                                        c = setTimeout(function() {
                                            i = true;
                                            const e = "Token request callback timed out after " + a / 1e3 + " seconds";
                                            C.logAction(C.LOG_ERROR, "Auth.requestToken()", e), t(new O(e, 40170, 401));
                                        }, a);
                                    r(s, function(s, r, a) {
                                        if (i) return;
                                        if (clearTimeout(c), s) return C.logAction(C.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + K(s)), void t(Ne(s));
                                        if ("string" == typeof r) return void(0 === r.length ? t(new O("Token string is empty", 40170, 401)) : r.length > De ? t(new O("Token string exceeded max permitted length (was " + r.length + " bytes)", 40170, 401)) : "undefined" === r || "null" === r ? t(new O("Token string was literal null/undefined", 40170, 401)) : "{" !== r[0] || a && a.indexOf("application/jwt") > -1 ? e({
                                            token: r
                                        }) : t(new O("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401)));
                                        if ("object" != typeof r || null === r) {
                                            const e = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof r;
                                            return C.logAction(C.LOG_ERROR, "Auth.requestToken()", e), void t(new O(e, 40170, 401));
                                        }
                                        const l = JSON.stringify(r).length;
                                        if (l > De && !n.suppressMaxLengthCheck) t(new O("Token request/details object exceeded max permitted stringified size (was " + l + " bytes)", 40170, 401));
                                        else if ("issued" in r) e(r);
                                        else {
                                            if (!("keyName" in r)) {
                                                const e = "Expected token request callback to call back with a token string, token request object, or token details object";
                                                return C.logAction(C.LOG_ERROR, "Auth.requestToken()", e), void t(new O(e, 40170, 401));
                                            }
                                            o(r, function(n, s, r) {
                                                if (n) return C.logAction(C.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + K(n)), void t(Ne(n));
                                                r || (s = JSON.parse(s)), C.logAction(C.LOG_MINOR, "Auth.getToken()", "token received"), e(s);
                                            });
                                        }
                                    });
                                });
                            }
                            async createTokenRequest(e, t) {
                                t = t || this.authOptions, e = e || S({}, this.tokenParams);
                                const n = t.key;
                                if (!n) throw new O("No key specified", 40101, 403);
                                const s = n.split(":"),
                                    r = s[0],
                                    i = s[1];
                                if (!i) throw new O("Invalid key specified", 40101, 403);
                                if ("" === e.clientId) throw new O("clientId can’t be an empty string", 40012, 400);
                                "capability" in e && (e.capability = Be(e.capability));
                                const o = S({
                                        keyName: r
                                    }, e),
                                    a = e.clientId || "",
                                    c = e.ttl || "",
                                    l = e.capability || "";
                                o.timestamp || (o.timestamp = await this.getTimestamp(t && t.queryTime));
                                const u = o.nonce || (o.nonce = ("000000" + Math.floor(1e16 * Math.random())).slice(-16)),
                                    h = o.timestamp,
                                    d = o.keyName + "\n" + c + "\n" + l + "\n" + a + "\n" + h + "\n" + u + "\n";
                                return o.mac = o.mac || ((e, t) => {
                                    const n = y.BufferUtils,
                                        s = n.utf8Encode(e),
                                        r = n.utf8Encode(t),
                                        i = n.hmacSha256(s, r);
                                    return n.base64Encode(i);
                                })(d, i), C.logAction(C.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), o;
                            }
                            async getAuthParams() {
                                if ("basic" == this.method) return {
                                    key: this.key
                                };
                                {
                                    let e = await this._ensureValidAuthCredentials(false);
                                    if (!e) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                                    return {
                                        access_token: e.token
                                    };
                                }
                            }
                            async getAuthHeaders() {
                                if ("basic" == this.method) return {
                                    authorization: "Basic " + this.basicKey
                                };
                                {
                                    const e = await this._ensureValidAuthCredentials(false);
                                    if (!e) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                                    return {
                                        authorization: "Bearer " + ge(e.token)
                                    };
                                }
                            }
                            async getTimestamp(e) {
                                return this.isTimeOffsetSet() || !e && !this.authOptions.queryTime ? this.getTimestampUsingOffset() : this.client.time();
                            }
                            getTimestampUsingOffset() {
                                return Date.now() + (this.client.serverTimeOffset || 0);
                            }
                            isTimeOffsetSet() {
                                return null !== this.client.serverTimeOffset;
                            }
                            _saveBasicOptions(e) {
                                this.method = "basic", this.key = e.key, this.basicKey = ge(e.key), this.authOptions = e || {}, "clientId" in e && this._userSetClientId(e.clientId);
                            }
                            _saveTokenOptions(e, t) {
                                this.method = "token", e && (this.tokenParams = e), t && (t.token && (t.tokenDetails = "string" == typeof t.token ? {
                                    token: t.token
                                } : t.token), t.tokenDetails && (this.tokenDetails = t.tokenDetails), "clientId" in t && this._userSetClientId(t.clientId), this.authOptions = t);
                            }
                            async _ensureValidAuthCredentials(e) {
                                const t = this.tokenDetails;
                                if (t) {
                                    if (this._tokenClientIdMismatch(t.clientId)) throw new O("Mismatch between clientId in token (" + t.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403);
                                    if (!this.isTimeOffsetSet() || !t.expires || t.expires >= this.getTimestampUsingOffset()) return C.logAction(C.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + t.expires), t;
                                    C.logAction(C.LOG_MINOR, "Auth.getToken()", "deleting expired token"), this.tokenDetails = null;
                                }
                                const n = (this.waitingForTokenRequest || (this.waitingForTokenRequest = Ae.create())).createPromise();
                                if (null !== this.currentTokenRequestId && !e) return n;
                                const s = this.currentTokenRequestId = je++;
                                let r, i = null;
                                try {
                                    r = await this.requestToken(this.tokenParams, this.authOptions);
                                } catch (e) {
                                    i = e;
                                }
                                if (this.currentTokenRequestId > s) return C.logAction(C.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one"), n;
                                this.currentTokenRequestId = null;
                                const o = this.waitingForTokenRequest;
                                return this.waitingForTokenRequest = null, i ? (null == o || o.rejectAll(i), n) : (null == o || o.resolveAll(this.tokenDetails = r), n);
                            }
                            _userSetClientId(e) {
                                if ("string" != typeof e && null !== e) throw new O("clientId must be either a string or null", 40012, 400);
                                if ("*" === e) throw new O('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
                                {
                                    const t = this._uncheckedSetClientId(e);
                                    if (t) throw t;
                                }
                            }
                            _uncheckedSetClientId(e) {
                                if (this._tokenClientIdMismatch(e)) {
                                    const t = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + e,
                                        n = new O(t, 40102, 401);
                                    return C.logAction(C.LOG_ERROR, "Auth._uncheckedSetClientId()", t), n;
                                }
                                return this.clientId = this.tokenParams.clientId = e, null;
                            }
                            _tokenClientIdMismatch(e) {
                                return !(!this.clientId || "*" === this.clientId || !e || "*" === e || this.clientId === e);
                            }
                            static isTokenErr(e) {
                                return e.code && e.code >= 40140 && e.code < 40150;
                            }
                            revokeTokens(e, t) {
                                return this.client.rest.revokeTokens(e, t);
                            }
                        };

                    function Fe(e) {
                        const t = [];
                        if (e)
                            for (const n in e) t.push(n + "=" + e[n]);
                        return t.join("&");
                    }
                    var Ve = class {
                            constructor(e) {
                                this.client = e, this.platformHttp = new y.Http(e), this.checkConnectivity = this.platformHttp.checkConnectivity ? () => this.platformHttp.checkConnectivity() : undefined;
                            }
                            get supportsAuthHeaders() {
                                return this.platformHttp.supportsAuthHeaders;
                            }
                            get supportsLinkHeaders() {
                                return this.platformHttp.supportsLinkHeaders;
                            }
                            _getHosts(e) {
                                const t = e.connection,
                                    n = t && t.connectionManager.host;
                                return n ? [n].concat(Ie.getFallbackHosts(e.options)) : Ie.getHosts(e.options);
                            }
                            async
                                do(e, t, n, s, r) {
                                    try {
                                        const i = this.client;
                                        if (!i) return {
                                            error: new O("http.do called without client", 5e4, 500)
                                        };
                                        const o = "function" == typeof t ? t : function(e) {
                                                return i.baseUri(e) + t;
                                            },
                                            a = i._currentFallback;
                                        if (a) {
                                            if (a.validUntil > Date.now()) {
                                                const c = await this.doUri(e, o(a.host), n, s, r);
                                                return c.error && this.platformHttp.shouldFallback(c.error) ? (i._currentFallback = null, this.do(e, t, n, s, r)) : c;
                                            }
                                            i._currentFallback = null;
                                        }
                                        const c = this._getHosts(i);
                                        if (1 === c.length) return this.doUri(e, o(c[0]), n, s, r);
                                        let l = null;
                                        const u = async (t, a) => {
                                            const c = t.shift();
                                            l = null != l ? l : new Date;
                                            const h = await this.doUri(e, o(c), n, s, r);
                                            return h.error && this.platformHttp.shouldFallback(h.error) && t.length ? Date.now() - l.getTime() > i.options.timeouts.httpMaxRetryDuration ? {
                                                error: new O(`Timeout for trying fallback hosts retries. Total elapsed time exceeded the ${i.options.timeouts.httpMaxRetryDuration}ms limit`, 50003, 500)
                                            } : u(t, true) : (a && (i._currentFallback = {
                                                host: c,
                                                validUntil: Date.now() + i.options.timeouts.fallbackRetryTimeout
                                            }), h);
                                        };
                                        return u(c);
                                    } catch (e) {
                                        return {
                                            error: new O(`Unexpected error in Http.do: ${K(e)}`, 500, 5e4)
                                        };
                                    }
                                }
                                async doUri(e, t, n, s, r) {
                                    try {
                                        ! function(e, t, n, s) {
                                            C.shouldLog(C.LOG_MICRO) && C.logActionNoStrip(C.LOG_MICRO, "Http." + e + "()", "Sending; " + (t + (s ? "?" : "") + Fe(s)) + "; Body" + (y.BufferUtils.isBuffer(n) ? " (Base64): " + y.BufferUtils.base64Encode(n) : ": " + n));
                                        }(e, t, s, r);
                                        const i = await this.platformHttp.doUri(e, t, n, s, r);
                                        return C.shouldLog(C.LOG_MICRO) && function(e, t, n, s) {
                                            e.error ? C.logActionNoStrip(C.LOG_MICRO, "Http." + t + "()", "Received Error; " + (n + (s ? "?" : "") + Fe(s)) + "; Error: " + K(e.error)) : C.logActionNoStrip(C.LOG_MICRO, "Http." + t + "()", "Received; " + (n + (s ? "?" : "") + Fe(s)) + "; Headers: " + Fe(e.headers) + "; StatusCode: " + e.statusCode + "; Body" + (y.BufferUtils.isBuffer(e.body) ? " (Base64): " + y.BufferUtils.base64Encode(e.body) : ": " + e.body));
                                        }(i, e, t, r), i;
                                    } catch (e) {
                                        return {
                                            error: new O(`Unexpected error in Http.doUri: ${K(e)}`, 500, 5e4)
                                        };
                                    }
                                }
                        },
                        qe = class {
                            constructor(e) {
                                var t, n, s, r, i, o, a, c;
                                this._additionalHTTPRequestImplementations = null != (t = e.plugins) ? t : null, C.setLog(e.logLevel, e.logHandler), C.logAction(C.LOG_MICRO, "BaseClient()", "initialized with clientOptions " + y.Config.inspect(e)), this._MsgPack = null != (s = null == (n = e.plugins) ? undefined : n.MsgPack) ? s : null;
                                const l = this.options = Ie.normaliseOptions(e, this._MsgPack);
                                if (l.key) {
                                    const e = l.key.match(/^([^:\s]+):([^:.\s]+)$/);
                                    if (!e) {
                                        const e = "invalid key parameter";
                                        throw C.logAction(C.LOG_ERROR, "BaseClient()", e), new O(e, 40400, 404);
                                    }
                                    l.keyName = e[1], l.keySecret = e[2];
                                }
                                if ("clientId" in l) {
                                    if ("string" != typeof l.clientId && null !== l.clientId) throw new O("clientId must be either a string or null", 40012, 400);
                                    if ("*" === l.clientId) throw new O('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400);
                                }
                                C.logAction(C.LOG_MINOR, "BaseClient()", "started; version = " + Ie.version), this._currentFallback = null, this.serverTimeOffset = null, this.http = new Ve(this), this.auth = new $e(this, l), this._rest = (null == (r = e.plugins) ? undefined : r.Rest) ? new e.plugins.Rest(this) : null, this._Crypto = null != (o = null == (i = e.plugins) ? undefined : i.Crypto) ? o : null, this.__FilteredSubscriptions = null != (c = null == (a = e.plugins) ? undefined : a.MessageInteractions) ? c : null;
                            }
                            get rest() {
                                return this._rest || be("Rest"), this._rest;
                            }
                            get _FilteredSubscriptions() {
                                return this.__FilteredSubscriptions || be("MessageInteractions"), this.__FilteredSubscriptions;
                            }
                            get channels() {
                                return this.rest.channels;
                            }
                            get push() {
                                return this.rest.push;
                            }
                            baseUri(e) {
                                return Ie.getHttpScheme(this.options) + e + ":" + Ie.getPort(this.options, false);
                            }
                            async stats(e) {
                                return this.rest.stats(e);
                            }
                            async time(e) {
                                return this.rest.time(e);
                            }
                            async request(e, t, n, s, r, i) {
                                return this.rest.request(e, t, n, s, r, i);
                            }
                            batchPublish(e) {
                                return this.rest.batchPublish(e);
                            }
                            batchPresence(e) {
                                return this.rest.batchPresence(e);
                            }
                            setLog(e) {
                                C.setLog(e.level, e.handler);
                            }
                        };
                    qe.Platform = y;
                    var We = qe,
                        ze = class e {
                            toJSON() {
                                var e, t, n;
                                return {
                                    id: this.id,
                                    deviceSecret: this.deviceSecret,
                                    platform: this.platform,
                                    formFactor: this.formFactor,
                                    clientId: this.clientId,
                                    metadata: this.metadata,
                                    deviceIdentityToken: this.deviceIdentityToken,
                                    push: {
                                        recipient: null == (e = this.push) ? undefined : e.recipient,
                                        state: null == (t = this.push) ? undefined : t.state,
                                        error: null == (n = this.push) ? undefined : n.error
                                    }
                                };
                            }
                            toString() {
                                var e, t, n, s;
                                let r = "[DeviceDetails";
                                return this.id && (r += "; id=" + this.id), this.platform && (r += "; platform=" + this.platform), this.formFactor && (r += "; formFactor=" + this.formFactor), this.clientId && (r += "; clientId=" + this.clientId), this.metadata && (r += "; metadata=" + this.metadata), this.deviceIdentityToken && (r += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), (null == (e = this.push) ? undefined : e.recipient) && (r += "; push.recipient=" + JSON.stringify(this.push.recipient)), (null == (t = this.push) ? undefined : t.state) && (r += "; push.state=" + this.push.state), (null == (n = this.push) ? undefined : n.error) && (r += "; push.error=" + JSON.stringify(this.push.error)), (null == (s = this.push) ? undefined : s.metadata) && (r += "; push.metadata=" + this.push.metadata), r += "]", r;
                            }
                            static toRequestBody(e, t, n) {
                                return oe(e, t, n);
                            }
                            static fromResponseBody(t, n, s) {
                                return s && (t = ie(t, n, s)), Array.isArray(t) ? e.fromValuesArray(t) : e.fromValues(t);
                            }
                            static fromValues(t) {
                                return t.error = t.error && O.fromValues(t.error), Object.assign(new e, t);
                            }
                            static fromValuesArray(t) {
                                const n = t.length,
                                    s = new Array(n);
                                for (let r = 0; r < n; r++) s[r] = e.fromValues(t[r]);
                                return s;
                            }
                        };
                    async function Xe(e, t, n, s) {
                        return e.http.supportsAuthHeaders ? s(S(await e.auth.getAuthHeaders(), t), n) : s(t, S(await e.auth.getAuthParams(), n));
                    }
                    var Je = class e {
                        static async get(t, n, s, r, i, o) {
                            return e.do(Me.Get, t, n, null, s, r, i, null != o && o);
                        }
                        static async delete(t, n, s, r, i, o) {
                            return e.do(Me.Delete, t, n, null, s, r, i, o);
                        }
                        static async post(t, n, s, r, i, o, a) {
                            return e.do(Me.Post, t, n, s, r, i, o, a);
                        }
                        static async patch(t, n, s, r, i, o, a) {
                            return e.do(Me.Patch, t, n, s, r, i, o, a);
                        }
                        static async put(t, n, s, r, i, o, a) {
                            return e.do(Me.Put, t, n, s, r, i, o, a);
                        }
                        static async
                            do(e, t, n, s, r, i, o, a) {
                                o && ((i = i || {}).envelope = o);
                                let c = await Xe(t, r, i, async function r(i, o) {
                                    var a;
                                    if (C.shouldLog(C.LOG_MICRO)) {
                                        let r = s;
                                        if ((null == (a = i["content-type"]) ? undefined : a.indexOf("msgpack")) > 0) try {
                                            t._MsgPack || be("MsgPack"), r = t._MsgPack.decode(s);
                                        } catch (t) {
                                            C.logAction(C.LOG_MICRO, "Resource." + e + "()", "Sending MsgPack Decoding Error: " + K(t));
                                        }
                                        C.logAction(C.LOG_MICRO, "Resource." + e + "()", "Sending; " + (n + (o ? "?" : "") + Fe(o)) + "; Body: " + r);
                                    }
                                    const c = await t.http.do(e, n, i, s, o);
                                    return c.error && $e.isTokenErr(c.error) ? (await t.auth.authorize(null, null), Xe(t, i, o, r)) : {
                                        err: c.error,
                                        body: c.body,
                                        headers: c.headers,
                                        unpacked: c.unpacked,
                                        statusCode: c.statusCode
                                    };
                                });
                                if (o && (c = function(e, t, n) {
                                        if (e.err && !e.body) return {
                                            err: e.err
                                        };
                                        if (e.statusCode === Ue.NoContent) return p(f({}, e), {
                                            body: [],
                                            unpacked: true
                                        });
                                        let s = e.body;
                                        if (!e.unpacked) try {
                                            s = ie(s, t, n);
                                        } catch (e) {
                                            return "object" == typeof e && null !== e && (e instanceof O || e instanceof _) ? {
                                                err: e
                                            } : {
                                                err: new _(K(e), null)
                                            };
                                        }
                                        if (!s) return {
                                            err: new _("unenvelope(): Response body is missing", null)
                                        };
                                        const {
                                            statusCode: r,
                                            response: i,
                                            headers: o
                                        } = s;
                                        if (undefined === r) return p(f({}, e), {
                                            body: s,
                                            unpacked: true
                                        });
                                        if (r < 200 || r >= 300) {
                                            let t = i && i.error || e.err;
                                            return t || (t = new Error("Error in unenveloping " + s), t.statusCode = r), {
                                                err: t,
                                                body: i,
                                                headers: o,
                                                unpacked: true,
                                                statusCode: r
                                            };
                                        }
                                        return {
                                            err: e.err,
                                            body: i,
                                            headers: o,
                                            unpacked: true,
                                            statusCode: r
                                        };
                                    }(c, t._MsgPack, o)), C.shouldLog(C.LOG_MICRO) && function(e, t, n, s) {
                                        e.err ? C.logAction(C.LOG_MICRO, "Resource." + t + "()", "Received Error; " + (n + (s ? "?" : "") + Fe(s)) + "; Error: " + K(e.err)) : C.logAction(C.LOG_MICRO, "Resource." + t + "()", "Received; " + (n + (s ? "?" : "") + Fe(s)) + "; Headers: " + Fe(e.headers) + "; StatusCode: " + e.statusCode + "; Body: " + (y.BufferUtils.isBuffer(e.body) ? " (Base64): " + y.BufferUtils.base64Encode(e.body) : ": " + y.Config.inspect(e.body)));
                                    }(c, e, n, i), a) {
                                    if (c.err) throw c.err;
                                    {
                                        const e = f({}, c);
                                        return delete e.err, e;
                                    }
                                }
                                return c;
                            }
                    };

                    function Ye(e) {
                        const t = e.match(/^\.\/(\w+)\?(.*)$/);
                        return t && t[2] && Y(t[2]);
                    }
                    var Ze = class {
                            constructor(e, t, n) {
                                this.resource = e, this.items = t;
                                const s = this;
                                n && ("first" in n && (this.first = async function() {
                                    return s.get(n.first);
                                }), "current" in n && (this.current = async function() {
                                    return s.get(n.current);
                                }), this.next = async function() {
                                    return "next" in n ? s.get(n.next) : null;
                                }, this.hasNext = function() {
                                    return "next" in n;
                                }, this.isLast = () => {
                                    var e;
                                    return !(null == (e = this.hasNext) ? undefined : e.call(this));
                                });
                            }
                            async get(e) {
                                const t = this.resource,
                                    n = await Je.get(t.client, t.path, t.headers, e, t.envelope, false);
                                return t.handlePage(n);
                            }
                        },
                        Ke = class extends Ze {
                            constructor(e, t, n, s, r, i) {
                                super(e, t, r), this.statusCode = s, this.success = s < 300 && s >= 200, this.headers = n, this.errorCode = i && i.code, this.errorMessage = i && i.message;
                            }
                            toJSON() {
                                return {
                                    items: this.items,
                                    statusCode: this.statusCode,
                                    success: this.success,
                                    headers: this.headers,
                                    errorCode: this.errorCode,
                                    errorMessage: this.errorMessage
                                };
                            }
                        },
                        Qe = class {
                            constructor(e, t, n, s, r, i) {
                                this.client = e, this.path = t, this.headers = n, this.envelope = null != s ? s : null, this.bodyHandler = r, this.useHttpPaginatedResponse = i || false;
                            }
                            async get(e) {
                                const t = await Je.get(this.client, this.path, this.headers, e, this.envelope, false);
                                return this.handlePage(t);
                            }
                            async delete(e) {
                                const t = await Je.delete(this.client, this.path, this.headers, e, this.envelope, false);
                                return this.handlePage(t);
                            }
                            async post(e, t) {
                                const n = await Je.post(this.client, this.path, t, this.headers, e, this.envelope, false);
                                return this.handlePage(n);
                            }
                            async put(e, t) {
                                const n = await Je.put(this.client, this.path, t, this.headers, e, this.envelope, false);
                                return this.handlePage(n);
                            }
                            async patch(e, t) {
                                const n = await Je.patch(this.client, this.path, t, this.headers, e, this.envelope, false);
                                return this.handlePage(n);
                            }
                            async handlePage(e) {
                                if (e.err && (t = e.err, n = e.body, !this.useHttpPaginatedResponse || !n && "number" != typeof t.code)) throw C.logAction(C.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + K(e.err)), e.err;
                                var t, n;
                                let s, r, i;
                                try {
                                    s = e.statusCode == Ue.NoContent ? [] : await this.bodyHandler(e.body, e.headers || {}, e.unpacked);
                                } catch (t) {
                                    throw e.err || t;
                                }
                                return e.headers && (r = e.headers.Link || e.headers.link) && (i = function(e) {
                                    "string" == typeof e && (e = e.split(","));
                                    const t = {};
                                    for (let n = 0; n < e.length; n++) {
                                        const s = e[n].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
                                        if (s) {
                                            const e = Ye(s[1]);
                                            e && (t[s[2]] = e);
                                        }
                                    }
                                    return t;
                                }(r)), this.useHttpPaginatedResponse ? new Ke(this, s, e.headers || {}, e.statusCode, i, e.err) : new Ze(this, s, i);
                            }
                        },
                        et = class e {
                            toJSON() {
                                return {
                                    channel: this.channel,
                                    deviceId: this.deviceId,
                                    clientId: this.clientId
                                };
                            }
                            toString() {
                                let e = "[PushChannelSubscription";
                                return this.channel && (e += "; channel=" + this.channel), this.deviceId && (e += "; deviceId=" + this.deviceId), this.clientId && (e += "; clientId=" + this.clientId), e += "]", e;
                            }
                            static fromResponseBody(t, n, s) {
                                return s && (t = ie(t, n, s)), Array.isArray(t) ? e.fromValuesArray(t) : e.fromValues(t);
                            }
                            static fromValues(t) {
                                return Object.assign(new e, t);
                            }
                            static fromValuesArray(t) {
                                const n = t.length,
                                    s = new Array(n);
                                for (let r = 0; r < n; r++) s[r] = e.fromValues(t[r]);
                                return s;
                            }
                        };
                    et.toRequestBody = oe;
                    var tt = et,
                        nt = class {
                            constructor(e) {
                                this.client = e, this.deviceRegistrations = new st(e), this.channelSubscriptions = new rt(e);
                            }
                            async publish(e, t) {
                                const n = this.client,
                                    s = n.options.useBinaryProtocol ? "msgpack" : "json",
                                    r = Ie.defaultPostHeaders(n.options, {
                                        format: s
                                    }),
                                    i = {},
                                    o = S({
                                        recipient: e
                                    }, t);
                                S(r, n.options.headers), n.options.pushFullWait && S(i, {
                                    fullWait: "true"
                                });
                                const a = oe(o, n._MsgPack, s);
                                await Je.post(n, "/push/publish", a, r, i, null, true);
                            }
                        },
                        st = class {
                            constructor(e) {
                                this.client = e;
                            }
                            async save(e) {
                                const t = this.client,
                                    n = ze.fromValues(e),
                                    s = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    r = Ie.defaultPostHeaders(t.options, {
                                        format: s
                                    }),
                                    i = {};
                                S(r, t.options.headers), t.options.pushFullWait && S(i, {
                                    fullWait: "true"
                                });
                                const o = oe(n, t._MsgPack, s),
                                    a = await Je.put(t, "/push/deviceRegistrations/" + encodeURIComponent(e.id), o, r, i, null, true);
                                return ze.fromResponseBody(a.body, t._MsgPack, a.unpacked ? undefined : s);
                            }
                            async get(e) {
                                const t = this.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    }),
                                    r = e.id || e;
                                if ("string" != typeof r || !r.length) throw new O("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400);
                                S(s, t.options.headers);
                                const i = await Je.get(t, "/push/deviceRegistrations/" + encodeURIComponent(r), s, {}, null, true);
                                return ze.fromResponseBody(i.body, t._MsgPack, i.unpacked ? undefined : n);
                            }
                            async list(e) {
                                const t = this.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = this.client.http.supportsLinkHeaders ? undefined : n,
                                    r = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    });
                                return S(r, t.options.headers), new Qe(t, "/push/deviceRegistrations", r, s, async function(e, s, r) {
                                    return ze.fromResponseBody(e, t._MsgPack, r ? undefined : n);
                                }).get(e);
                            }
                            async remove(e) {
                                const t = this.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    }),
                                    r = {},
                                    i = e.id || e;
                                if ("string" != typeof i || !i.length) throw new O("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400);
                                S(s, t.options.headers), t.options.pushFullWait && S(r, {
                                    fullWait: "true"
                                }), await Je.delete(t, "/push/deviceRegistrations/" + encodeURIComponent(i), s, r, null, true);
                            }
                            async removeWhere(e) {
                                const t = this.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    });
                                S(s, t.options.headers), t.options.pushFullWait && S(e, {
                                    fullWait: "true"
                                }), await Je.delete(t, "/push/deviceRegistrations", s, e, null, true);
                            }
                        },
                        rt = class e {
                            constructor(t) {
                                this.remove = e.prototype.removeWhere, this.client = t;
                            }
                            async save(e) {
                                const t = this.client,
                                    n = tt.fromValues(e),
                                    s = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    r = Ie.defaultPostHeaders(t.options, {
                                        format: s
                                    }),
                                    i = {};
                                S(r, t.options.headers), t.options.pushFullWait && S(i, {
                                    fullWait: "true"
                                });
                                const o = oe(n, t._MsgPack, s),
                                    a = await Je.post(t, "/push/channelSubscriptions", o, r, i, null, true);
                                return tt.fromResponseBody(a.body, t._MsgPack, a.unpacked ? undefined : s);
                            }
                            async list(e) {
                                const t = this.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = this.client.http.supportsLinkHeaders ? undefined : n,
                                    r = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    });
                                return S(r, t.options.headers), new Qe(t, "/push/channelSubscriptions", r, s, async function(e, s, r) {
                                    return tt.fromResponseBody(e, t._MsgPack, r ? undefined : n);
                                }).get(e);
                            }
                            async removeWhere(e) {
                                const t = this.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    });
                                S(s, t.options.headers), t.options.pushFullWait && S(e, {
                                    fullWait: "true"
                                }), await Je.delete(t, "/push/channelSubscriptions", s, e, null, true);
                            }
                            async listChannels(e) {
                                const t = this.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = this.client.http.supportsLinkHeaders ? undefined : n,
                                    r = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    });
                                return S(r, t.options.headers), t.options.pushFullWait && S(e, {
                                    fullWait: "true"
                                }), new Qe(t, "/push/channels", r, s, async function(e, s, r) {
                                    const i = !r && n ? ie(e, t._MsgPack, n) : e;
                                    for (let e = 0; e < i.length; e++) i[e] = String(i[e]);
                                    return i;
                                }).get(e);
                            }
                        },
                        it = class {
                            constructor(e) {
                                this.client = e, this.admin = new nt(e);
                            }
                        };

                    function ot(e) {
                        let t = 0;
                        return e.name && (t += e.name.length), e.clientId && (t += e.clientId.length), e.extras && (t += JSON.stringify(e.extras).length), e.data && (t += ee(e.data)), t;
                    }
                    async function at(e, t, n) {
                        const s = Object.assign(new gt, t),
                            r = function(e, t) {
                                if (t && t.cipher) {
                                    e || be("Crypto");
                                    const n = e.getCipher(t.cipher);
                                    return {
                                        cipher: n.cipherParams,
                                        channelCipher: n.cipher
                                    };
                                }
                                return null != t ? t : {};
                            }(e, null != n ? n : null);
                        try {
                            await ht(s, r);
                        } catch (e) {
                            C.logAction(C.LOG_ERROR, "Message.fromEncoded()", e.toString());
                        }
                        return s;
                    }
                    async function ct(e, t) {
                        const n = e.data;
                        if ("string" != typeof n && !y.BufferUtils.isBuffer(n) && null != n) {
                            if (!("[object Object]" == Object.prototype.toString.call(n)) && !Array.isArray(n)) throw new O("Data type is unsupported", 40013, 400);
                            e.data = JSON.stringify(n), e.encoding = e.encoding ? e.encoding + "/json" : "json";
                        }
                        return null != t && t.cipher ? async function(e, t) {
                            let n = e.data,
                                s = e.encoding,
                                r = t.channelCipher;
                            s = s ? s + "/" : "", y.BufferUtils.isBuffer(n) || (n = y.BufferUtils.utf8Encode(String(n)), s += "utf-8/");
                            const i = await r.encrypt(n);
                            return e.data = i, e.encoding = s + "cipher+" + r.algorithm, e;
                        }(e, t): e;
                    }
                    var ut = oe;
                    async function ht(e, t) {
                        const n = function(e) {
                            return e && e.channelOptions ? e : {
                                channelOptions: e,
                                plugins: {},
                                baseEncodedPreviousPayload: undefined
                            };
                        }(t);
                        let s = e.data;
                        const r = e.encoding;
                        if (r) {
                            const t = r.split("/");
                            let i, o = t.length,
                                a = e.data,
                                c = "";
                            try {
                                for (;
                                    (i = o) > 0;) {
                                    const e = t[--o].match(/([-\w]+)(\+([\w-]+))?/);
                                    if (!e) break;
                                    switch (c = e[1], c) {
                                        case "base64":
                                            a = y.BufferUtils.base64Decode(String(a)), i == t.length && (s = a);
                                            continue;
                                        case "utf-8":
                                            a = y.BufferUtils.utf8Decode(a);
                                            continue;
                                        case "json":
                                            a = JSON.parse(a);
                                            continue;
                                        case "cipher":
                                            if (null != n.channelOptions && n.channelOptions.cipher && n.channelOptions.channelCipher) {
                                                const t = e[3],
                                                    s = n.channelOptions.channelCipher;
                                                if (t != s.algorithm) throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                                                a = await s.decrypt(a);
                                                continue;
                                            }
                                            throw new Error("Unable to decrypt message; not an encrypted channel");
                                        case "vcdiff":
                                            if (!n.plugins || !n.plugins.vcdiff) throw new O("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
                                            if ("undefined" == typeof Uint8Array) throw new O("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
                                            try {
                                                let e = n.baseEncodedPreviousPayload;
                                                "string" == typeof e && (e = y.BufferUtils.utf8Encode(e));
                                                const t = y.BufferUtils.toBuffer(e);
                                                a = y.BufferUtils.toBuffer(a), a = y.BufferUtils.arrayBufferViewToBuffer(n.plugins.vcdiff.decode(a, t)), s = a;
                                            } catch (e) {
                                                throw new O("Vcdiff delta decode failed with " + e, 40018, 400);
                                            }
                                            continue;
                                        default:
                                            throw new Error("Unknown encoding");
                                    }
                                }
                            } catch (e) {
                                const t = e;
                                throw new O("Error processing the " + c + " encoding, decoder returned ‘" + t.message + "’", t.code || 40013, 400);
                            } finally {
                                e.encoding = i <= 0 ? null : t.slice(0, i).join("/"), e.data = a;
                            }
                        }
                        n.baseEncodedPreviousPayload = s;
                    }

                    function ft(e) {
                        const t = e.length,
                            n = new Array(t);
                        for (let s = 0; s < t; s++) n[s] = Object.assign(new gt, e[s]);
                        return n;
                    }

                    function pt(e) {
                        let t, n = 0;
                        for (let s = 0; s < e.length; s++) t = e[s], n += t.size || (t.size = ot(t));
                        return n;
                    }
                    var gt = class {
                            toJSON() {
                                let e = this.encoding,
                                    t = this.data;
                                return t && y.BufferUtils.isBuffer(t) && (arguments.length > 0 ? (e = e ? e + "/base64" : "base64", t = y.BufferUtils.base64Encode(t)) : t = y.BufferUtils.toBuffer(t)), {
                                    name: this.name,
                                    id: this.id,
                                    clientId: this.clientId,
                                    connectionId: this.connectionId,
                                    connectionKey: this.connectionKey,
                                    extras: this.extras,
                                    encoding: e,
                                    data: t
                                };
                            }
                            toString() {
                                let e = "[Message";
                                return this.name && (e += "; name=" + this.name), this.id && (e += "; id=" + this.id), this.timestamp && (e += "; timestamp=" + this.timestamp), this.clientId && (e += "; clientId=" + this.clientId), this.connectionId && (e += "; connectionId=" + this.connectionId), this.encoding && (e += "; encoding=" + this.encoding), this.extras && (e += "; extras =" + JSON.stringify(this.extras)), this.data && ("string" == typeof this.data ? e += "; data=" + this.data : y.BufferUtils.isBuffer(this.data) ? e += "; data (buffer)=" + y.BufferUtils.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data)), this.extras && (e += "; extras=" + JSON.stringify(this.extras)), e += "]", e;
                            }
                        },
                        mt = gt,
                        yt = ["absent", "present", "enter", "leave", "update"];
                    async function bt(e, t) {
                        const n = (true && (e.action = yt[e.action]), Object.assign(new Lt, e));
                        try {
                            await wt(n, null != t ? t : {});
                        } catch (e) {
                            C.logAction(C.LOG_ERROR, "PresenceMessage.fromEncoded()", e.toString());
                        }
                        return n;
                    }
                    var wt = ht;
                    async function Rt(e, t, n, s) {
                        const r = [];
                        s && (e = ie(e, n, s));
                        for (let n = 0; n < e.length; n++) {
                            const s = r[n] = (true && (e[n].action = yt[e[n].action]), Object.assign(new Lt, e[n]));
                            try {
                                await wt(s, t);
                            } catch (e) {
                                C.logAction(C.LOG_ERROR, "PresenceMessage.fromResponseBody()", e.toString());
                            }
                        }
                        return r;
                    }

                    function Ct(e) {
                        const t = e.length,
                            n = new Array(t);
                        for (let s = 0; s < t; s++) n[s] = (t && (e[s].action = yt[e[s].action]), Object.assign(new Lt, e[s]));
                        return n;
                    }

                    function Tt(e) {
                        return e instanceof Lt ? e : (t && ({
                            data: e
                        }.action = yt[{
                            data: e
                        }.action]), Object.assign(new Lt, {
                            data: e
                        }));
                    }
                    var Lt = class {
                            isSynthesized() {
                                return !this.id || !this.connectionId || this.id.substring(this.connectionId.length, 0) !== this.connectionId;
                            }
                            parseId() {
                                if (!this.id) throw new Error("parseId(): Presence message does not contain an id");
                                const e = this.id.split(":");
                                return {
                                    connectionId: e[0],
                                    msgSerial: parseInt(e[1], 10),
                                    index: parseInt(e[2], 10)
                                };
                            }
                            toJSON() {
                                let e = this.data,
                                    t = this.encoding;
                                return e && y.BufferUtils.isBuffer(e) && (arguments.length > 0 ? (t = t ? t + "/base64" : "base64", e = y.BufferUtils.base64Encode(e)) : e = y.BufferUtils.toBuffer(e)), {
                                    id: this.id,
                                    clientId: this.clientId,
                                    action: (n = this.action, yt.indexOf(n)),
                                    data: e,
                                    encoding: t,
                                    extras: this.extras
                                };
                                var n;
                            }
                            toString() {
                                let e = "[PresenceMessage";
                                return e += "; action=" + this.action, this.id && (e += "; id=" + this.id), this.timestamp && (e += "; timestamp=" + this.timestamp), this.clientId && (e += "; clientId=" + this.clientId), this.connectionId && (e += "; connectionId=" + this.connectionId), this.encoding && (e += "; encoding=" + this.encoding), this.data && ("string" == typeof this.data ? e += "; data=" + this.data : y.BufferUtils.isBuffer(this.data) ? e += "; data (buffer)=" + y.BufferUtils.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data)), this.extras && (e += "; extras=" + JSON.stringify(this.extras)), e += "]", e;
                            }
                        },
                        Ot = Lt,
                        _t = class {
                            constructor(e) {
                                this.channel = e;
                            }
                            async get(e) {
                                C.logAction(C.LOG_MICRO, "RestPresence.get()", "channel = " + this.channel.name);
                                const t = this.channel.client,
                                    n = t.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = this.channel.client.http.supportsLinkHeaders ? undefined : n,
                                    r = Ie.defaultGetHeaders(t.options, {
                                        format: n
                                    });
                                S(r, t.options.headers);
                                const i = this.channel.channelOptions;
                                return new Qe(t, this.channel.client.rest.presenceMixin.basePath(this), r, s, async function(e, s, r) {
                                    return await Rt(e, i, t._MsgPack, r ? undefined : n);
                                }).get(e);
                            }
                            async history(e) {
                                return C.logAction(C.LOG_MICRO, "RestPresence.history()", "channel = " + this.channel.name), this.channel.client.rest.presenceMixin.history(this, e);
                            }
                        },
                        St = class {
                            constructor(e, t, n) {
                                var s;
                                C.logAction(C.LOG_MINOR, "RestChannel()", "started; name = " + t), this.name = t, this.client = e, this.presence = new _t(this), this.channelOptions = _e(null != (s = e._Crypto) ? s : null, n);
                            }
                            setOptions(e) {
                                var t;
                                this.channelOptions = _e(null != (t = this.client._Crypto) ? t : null, e);
                            }
                            async history(e) {
                                return C.logAction(C.LOG_MICRO, "RestChannel.history()", "channel = " + this.name), this.client.rest.channelMixin.history(this, e);
                            }
                            async publish(...e) {
                                const t = e[0],
                                    n = e[1];
                                let s, r;
                                if ("string" == typeof t || null === t) s = [Object.assign(new gt, {
                                    name: t,
                                    data: n
                                })], r = e[2];
                                else if ("[object Object]" == Object.prototype.toString.call(t)) s = [Object.assign(new gt, t)], r = e[1];
                                else {
                                    if (!Array.isArray(t)) throw new O("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                                    s = ft(t), r = e[1];
                                }
                                r || (r = {});
                                const i = this.client,
                                    o = i.options,
                                    a = o.useBinaryProtocol ? "msgpack" : "json",
                                    c = i.options.idempotentRestPublishing,
                                    l = Ie.defaultPostHeaders(i.options, {
                                        format: a
                                    });
                                if (S(l, o.headers), c && function(e) {
                                        return e.every(function(e) {
                                            return !e.id;
                                        });
                                    }(s)) {
                                    const e = await ne(9);
                                    s.forEach(function(t, n) {
                                        t.id = e + ":" + n.toString();
                                    });
                                }
                                await Promise.all(s.map(e => ct(s, this.channelOptions)));
                                const u = pt(s),
                                    h = o.maxMessageSize;
                                if (u > h) throw new O("Maximum size of messages that can be published at once exceeded ( was " + u + " bytes; limit is " + h + " bytes)", 40009, 400);
                                await this._publish(ut(s, i._MsgPack, a), l, r);
                            }
                            async _publish(e, t, n) {
                                await Je.post(this.client, this.client.rest.channelMixin.basePath(this) + "/messages", e, t, n, null, true);
                            }
                            async status() {
                                return this.client.rest.channelMixin.status(this);
                            }
                        },
                        kt = class e {
                            constructor(e) {
                                this.entries = e && e.entries || undefined, this.schema = e && e.schema || undefined, this.appId = e && e.appId || undefined, this.inProgress = e && e.inProgress || undefined, this.unit = e && e.unit || undefined, this.intervalId = e && e.intervalId || undefined;
                            }
                            static fromValues(t) {
                                return new e(t);
                            }
                        },
                        It = class {
                            static basePath(e) {
                                return "/channels/" + encodeURIComponent(e.name);
                            }
                            static history(e, t) {
                                const n = e.client,
                                    s = n.options.useBinaryProtocol ? "msgpack" : "json",
                                    r = e.client.http.supportsLinkHeaders ? undefined : s,
                                    i = Ie.defaultGetHeaders(n.options, {
                                        format: s
                                    });
                                S(i, n.options.headers);
                                const o = e.channelOptions;
                                return new Qe(n, this.basePath(e) + "/messages", i, r, async function(e, t, r) {
                                    return await async function(e, t, n, s) {
                                        s && (e = ie(e, n, s));
                                        for (let n = 0; n < e.length; n++) {
                                            const s = e[n] = Object.assign(new gt, e[n]);
                                            try {
                                                await ht(s, t);
                                            } catch (e) {
                                                C.logAction(C.LOG_ERROR, "Message.fromResponseBody()", e.toString());
                                            }
                                        }
                                        return e;
                                    }(e, o, n._MsgPack, r ? undefined : s);
                                }).get(t);
                            }
                            static async status(e) {
                                const t = e.client.options.useBinaryProtocol ? "msgpack" : "json",
                                    n = Ie.defaultPostHeaders(e.client.options, {
                                        format: t
                                    });
                                return (await Je.get(e.client, this.basePath(e), n, {}, t, true)).body;
                            }
                        },
                        At = class {
                            static basePath(e) {
                                return It.basePath(e.channel) + "/presence";
                            }
                            static async history(e, t) {
                                const n = e.channel.client,
                                    s = n.options.useBinaryProtocol ? "msgpack" : "json",
                                    r = e.channel.client.http.supportsLinkHeaders ? undefined : s,
                                    i = Ie.defaultGetHeaders(n.options, {
                                        format: s
                                    });
                                S(i, n.options.headers);
                                const o = e.channel.channelOptions;
                                return new Qe(n, this.basePath(e) + "/history", i, r, async function(e, t, r) {
                                    return await Rt(e, o, n._MsgPack, r ? undefined : s);
                                }).get(t);
                            }
                        },
                        Et = class {
                            constructor(e) {
                                this.channelMixin = It, this.presenceMixin = At, this.client = e, this.channels = new Mt(this.client), this.push = new it(this.client);
                            }
                            async stats(e) {
                                const t = Ie.defaultGetHeaders(this.client.options),
                                    n = this.client.options.useBinaryProtocol ? "msgpack" : "json",
                                    s = this.client.http.supportsLinkHeaders ? undefined : n;
                                return S(t, this.client.options.headers), new Qe(this.client, "/stats", t, s, function(e, t, n) {
                                    const s = n ? e : JSON.parse(e);
                                    for (let e = 0; e < s.length; e++) s[e] = kt.fromValues(s[e]);
                                    return s;
                                }).get(e);
                            }
                            async time(e) {
                                const t = Ie.defaultGetHeaders(this.client.options);
                                this.client.options.headers && S(t, this.client.options.headers);
                                let {
                                    error: n,
                                    body: s,
                                    unpacked: r
                                } = await this.client.http.do(Me.Get, e => this.client.baseUri(e) + "/time", t, null, e);
                                if (n) throw n;
                                r || (s = JSON.parse(s));
                                const i = s[0];
                                if (!i) throw new O("Internal error (unexpected result type from GET /time)", 5e4, 500);
                                return this.client.serverTimeOffset = i - Date.now(), i;
                            }
                            async request(e, t, n, s, r, i) {
                                var o;
                                const [a, c, l] = (() => this.client.options.useBinaryProtocol ? (this.client._MsgPack || be("MsgPack"), [this.client._MsgPack.encode, this.client._MsgPack.decode, "msgpack"]) : [JSON.stringify, JSON.parse, "json"])(), u = this.client.http.supportsLinkHeaders ? undefined : l;
                                s = s || {};
                                const h = e.toLowerCase(),
                                    d = "get" == h ? Ie.defaultGetHeaders(this.client.options, {
                                        format: l,
                                        protocolVersion: n
                                    }) : Ie.defaultPostHeaders(this.client.options, {
                                        format: l,
                                        protocolVersion: n
                                    });
                                "string" != typeof r && (r = null != (o = a(r)) ? o : null), S(d, this.client.options.headers), i && S(d, i);
                                const f = new Qe(this.client, t, d, u, async function(e, t, n) {
                                    return I(n ? e : c(e));
                                }, true);
                                if (!y.Http.methods.includes(h)) throw new O("Unsupported method " + h, 40500, 405);
                                return y.Http.methodsWithBody.includes(h) ? f[h](s, r) : f[h](s);
                            }
                            async batchPublish(e) {
                                let t, n;
                                Array.isArray(e) ? (t = e, n = false) : (t = [e], n = true);
                                const s = this.client.options.useBinaryProtocol ? "msgpack" : "json",
                                    r = Ie.defaultPostHeaders(this.client.options, {
                                        format: s
                                    });
                                this.client.options.headers && S(r, this.client.options.headers);
                                const i = oe(t, this.client._MsgPack, s),
                                    o = await Je.post(this.client, "/messages", i, r, {}, null, true),
                                    a = o.unpacked ? o.body : ie(o.body, this.client._MsgPack, s);
                                return n ? a[0] : a;
                            }
                            async batchPresence(e) {
                                const t = this.client.options.useBinaryProtocol ? "msgpack" : "json",
                                    n = Ie.defaultPostHeaders(this.client.options, {
                                        format: t
                                    });
                                this.client.options.headers && S(n, this.client.options.headers);
                                const s = e.join(","),
                                    r = await Je.get(this.client, "/presence", n, {
                                        channels: s
                                    }, null, true);
                                return r.unpacked ? r.body : ie(r.body, this.client._MsgPack, t);
                            }
                            async revokeTokens(e, t) {
                                if (Ge(this.client.options)) throw new O("Cannot revoke tokens when using token auth", 40162, 401);
                                const n = this.client.options.keyName;
                                let s = null != t ? t : {};
                                const r = f({
                                        targets: e.map(e => `${e.type}:${e.value}`)
                                    }, s),
                                    i = this.client.options.useBinaryProtocol ? "msgpack" : "json",
                                    o = Ie.defaultPostHeaders(this.client.options, {
                                        format: i
                                    });
                                this.client.options.headers && S(o, this.client.options.headers);
                                const a = oe(r, this.client._MsgPack, i),
                                    c = await Je.post(this.client, `/keys/${n}/revokeTokens`, a, o, {}, null, true);
                                return c.unpacked ? c.body : ie(c.body, this.client._MsgPack, i);
                            }
                            setLog(e) {
                                C.setLog(e.level, e.handler);
                            }
                        },
                        Mt = class {
                            constructor(e) {
                                this.client = e, this.all = Object.create(null);
                            }
                            get(e, t) {
                                e = String(e);
                                let n = this.all[e];
                                return n ? t && n.setOptions(t) : this.all[e] = n = new St(this.client, e, t), n;
                            }
                            release(e) {
                                delete this.all[String(e)];
                            }
                        },
                        Pt = class extends We {
                            constructor(e) {
                                super(Ie.objectifyOptions(e, false, "BaseRest", {
                                    Rest: Et
                                }));
                            }
                        },
                        Ut = {
                            Rest: Et
                        },
                        Dt = class extends mt {
                            static async fromEncoded(e, t) {
                                return at(y.Crypto, e, t);
                            }
                            static async fromEncodedArray(e, t) {
                                return async function(e, t, n) {
                                    return Promise.all(t.map(function(t) {
                                        return at(e, t, n);
                                    }));
                                }(y.Crypto, e, t);
                            }
                            static fromValues(e) {
                                return Object.assign(new mt, e);
                            }
                            static async encode(e, t) {
                                return ct(e, t);
                            }
                            static async decode(e, t) {
                                return ht(e, t);
                            }
                        },
                        Nt = class extends Ot {
                            static async fromEncoded(e, t) {
                                return bt(e, t);
                            }
                            static async fromEncodedArray(e, t) {
                                return async function(e, t) {
                                    return Promise.all(e.map(function(e) {
                                        return bt(e, t);
                                    }));
                                }(e, t);
                            }
                            static fromValues(e, t) {
                                return t && (e.action = yt[e.action]), Object.assign(new Lt, e);
                            }
                        },
                        Bt = class e extends Pt {
                            constructor(t) {
                                var n, s;
                                if (!e._MsgPack) throw new Error("Expected DefaultRest._MsgPack to have been set");
                                super(Ie.objectifyOptions(t, true, "Rest", p(f({}, Ut), {
                                    Crypto: null != (n = e.Crypto) ? n : undefined,
                                    MsgPack: null != (s = e._MsgPack) ? s : undefined
                                })));
                            }
                            static get Crypto() {
                                if (null === this._Crypto) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                                return this._Crypto;
                            }
                            static set Crypto(e) {
                                this._Crypto = e;
                            }
                        };
                    Bt._Crypto = null, Bt.Message = Dt, Bt.PresenceMessage = Nt, Bt._MsgPack = null, Bt._Http = Ve;
                    var xt = Bt;

                    function Gt(e, t, n) {
                        let s, r, i;
                        for (let o = 0; o < e.length; o++)
                            if (s = e[o], n && (s = s[n]), Array.isArray(s)) {
                                for (; - 1 !== (r = s.indexOf(t));) s.splice(r, 1);
                                n && 0 === s.length && delete e[o][n];
                            } else if ("[object Object]" == Object.prototype.toString.call(s))
                            for (i in s) Object.prototype.hasOwnProperty.call(s, i) && Array.isArray(s[i]) && Gt([s], t, i);
                    }
                    var jt = class {
                            constructor() {
                                this.any = [], this.events = Object.create(null), this.anyOnce = [], this.eventsOnce = Object.create(null);
                            }
                            on(...e) {
                                if (1 === e.length) {
                                    const t = e[0];
                                    if ("function" != typeof t) throw new Error("EventListener.on(): Invalid arguments: " + y.Config.inspect(e));
                                    this.any.push(t);
                                }
                                if (2 === e.length) {
                                    const [t, n] = e;
                                    if ("function" != typeof n) throw new Error("EventListener.on(): Invalid arguments: " + y.Config.inspect(e));
                                    if (null == t) this.any.push(n);
                                    else if (Array.isArray(t)) t.forEach(e => {
                                        this.on(e, n);
                                    });
                                    else {
                                        if ("string" != typeof t) throw new Error("EventListener.on(): Invalid arguments: " + y.Config.inspect(e));
                                        (this.events[t] || (this.events[t] = [])).push(n);
                                    }
                                }
                            }
                            off(...e) {
                                if (0 == e.length || null == e[0] && null == e[1]) return this.any = [], this.events = Object.create(null), this.anyOnce = [], void(this.eventsOnce = Object.create(null));
                                const [t, n] = e;
                                let s = null,
                                    r = null;
                                if (1 !== e.length && n) {
                                    if ("function" != typeof n) throw new Error("EventEmitter.off(): invalid arguments:" + y.Config.inspect(e));
                                    [r, s] = [t, n];
                                } else "function" == typeof t ? s = t : r = t;
                                if (s && null == r) Gt([this.any, this.events, this.anyOnce, this.eventsOnce], s);
                                else if (Array.isArray(r)) r.forEach(e => {
                                    this.off(e, s);
                                });
                                else {
                                    if ("string" != typeof r) throw new Error("EventEmitter.off(): invalid arguments:" + y.Config.inspect(e));
                                    s ? Gt([this.events, this.eventsOnce], s, r) : (delete this.events[r], delete this.eventsOnce[r]);
                                }
                            }
                            listeners(e) {
                                if (e) {
                                    const t = this.events[e] || [];
                                    return this.eventsOnce[e] && Array.prototype.push.apply(t, this.eventsOnce[e]), t.length ? t : null;
                                }
                                return this.any.length ? this.any : null;
                            }
                            emit(e, ...t) {
                                const n = {
                                        event: e
                                    },
                                    s = [];
                                this.anyOnce.length && (Array.prototype.push.apply(s, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(s, this.any);
                                const r = this.eventsOnce[e];
                                r && (Array.prototype.push.apply(s, r), delete this.eventsOnce[e]);
                                const i = this.events[e];
                                i && Array.prototype.push.apply(s, i), s.forEach(function(e) {
                                    ! function(e, t, n) {
                                        try {
                                            t.apply(e, n);
                                        } catch (e) {
                                            C.logAction(C.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + e + "; stack = " + (e && e.stack));
                                        }
                                    }(n, e, t);
                                });
                            }
                            once(...e) {
                                const t = e.length;
                                if (0 === t || 1 === t && "function" != typeof e[0]) {
                                    const t = e[0];
                                    return new Promise(e => {
                                        this.once(t, e);
                                    });
                                }
                                const [n, s] = e;
                                if (1 === e.length && "function" == typeof n) this.anyOnce.push(n);
                                else if (null == n) {
                                    if ("function" != typeof s) throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
                                    this.anyOnce.push(s);
                                } else if (Array.isArray(n)) {
                                    const t = this,
                                        r = function() {
                                            const i = Array.prototype.slice.call(arguments);
                                            if (n.forEach(function(e) {
                                                    t.off(e, r);
                                                }), "function" != typeof s) throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
                                            s.apply(this, i);
                                        };
                                    n.forEach(function(e) {
                                        t.on(e, r);
                                    });
                                } else {
                                    if ("string" != typeof n) throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
                                    const t = this.eventsOnce[n] || (this.eventsOnce[n] = []);
                                    if (s) {
                                        if ("function" != typeof s) throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
                                        t.push(s);
                                    }
                                }
                            }
                            async whenState(e, t) {
                                if ("string" != typeof e || "string" != typeof t) throw new Error("whenState requires a valid state String argument");
                                return e === t ? null : this.once(e);
                            }
                        },
                        $t = {
                            HEARTBEAT: 0,
                            ACK: 1,
                            NACK: 2,
                            CONNECT: 3,
                            CONNECTED: 4,
                            DISCONNECT: 5,
                            DISCONNECTED: 6,
                            CLOSE: 7,
                            CLOSED: 8,
                            ERROR: 9,
                            ATTACH: 10,
                            ATTACHED: 11,
                            DETACH: 12,
                            DETACHED: 13,
                            PRESENCE: 14,
                            MESSAGE: 15,
                            SYNC: 16,
                            AUTH: 17,
                            ACTIVATE: 18
                        },
                        Ft = [];
                    Object.keys($t).forEach(function(e) {
                        Ft[$t[e]] = e;
                    });
                    var Ht = {
                            HAS_PRESENCE: 1,
                            HAS_BACKLOG: 2,
                            RESUMED: 4,
                            TRANSIENT: 16,
                            ATTACH_RESUME: 32,
                            PRESENCE: 65536,
                            PUBLISH: 131072,
                            SUBSCRIBE: 262144,
                            PRESENCE_SUBSCRIBE: 524288
                        },
                        Vt = Object.keys(Ht);

                    function qt(e) {
                        const t = [];
                        if (e)
                            for (let n = 0; n < e.length; n++) t.push(e[n].toString());
                        return "[ " + t.join(", ") + " ]";
                    }
                    Ht.MODE_ALL = Ht.PRESENCE | Ht.PUBLISH | Ht.SUBSCRIBE | Ht.PRESENCE_SUBSCRIBE;
                    var Wt = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE"],
                        zt = oe;

                    function Xt(e, t) {
                        const n = e.error;
                        n && (e.error = O.fromValues(n));
                        const s = e.messages;
                        if (s)
                            for (let e = 0; e < s.length; e++) s[e] = Object.assign(new gt, s[e]);
                        const r = t ? e.presence : undefined;
                        if (t && r && t)
                            for (let e = 0; e < r.length; e++) r[e] = t.presenceMessageFromValues(r[e], true);
                        return Object.assign(new en, p(f({}, e), {
                            presence: r
                        }));
                    }

                    function Zt(e, t) {
                        let n = "[ProtocolMessage";
                        undefined !== e.action && (n += "; action=" + Ft[e.action] || 0);
                        const s = ["id", "channel", "channelSerial", "connectionId", "count", "msgSerial", "timestamp"];
                        let r;
                        for (let t = 0; t < s.length; t++) r = s[t], undefined !== e[r] && (n += "; " + r + "=" + e[r]);
                        if (e.messages && (n += "; messages=" + qt(ft(e.messages))), e.presence && t && (n += "; presence=" + qt(t.presenceMessagesFromValuesArray(e.presence))), e.error && (n += "; error=" + O.fromValues(e.error).toString()), e.auth && e.auth.accessToken && (n += "; token=" + e.auth.accessToken), e.flags && (n += "; flags=" + Vt.filter(e.hasFlag).join(",")), e.params) {
                            let t = "";
                            q(e.params, function(n) {
                                t.length > 0 && (t += "; "), t += n + "=" + e.params[n];
                            }), t.length > 0 && (n += "; params=[" + t + "]");
                        }
                        return n += "]", n;
                    }
                    var Kt, Qt, en = class {
                            constructor() {
                                this.hasFlag = e => (this.flags & Ht[e]) > 0;
                            }
                            setFlag(e) {
                                return this.flags = this.flags | Ht[e];
                            }
                            getMode() {
                                return this.flags && this.flags & Ht.MODE_ALL;
                            }
                            encodeModesToFlags(e) {
                                e.forEach(e => this.setFlag(e));
                            }
                            decodeModesFromFlags() {
                                const e = [];
                                return Wt.forEach(t => {
                                    this.hasFlag(t) && e.push(t);
                                }), e.length > 0 ? e : undefined;
                            }
                        },
                        tn = en,
                        nn = class extends jt {
                            constructor() {
                                super(), this.messages = [];
                            }
                            count() {
                                return this.messages.length;
                            }
                            push(e) {
                                this.messages.push(e);
                            }
                            shift() {
                                return this.messages.shift();
                            }
                            last() {
                                return this.messages[this.messages.length - 1];
                            }
                            copyAll() {
                                return this.messages.slice();
                            }
                            append(e) {
                                this.messages.push.apply(this.messages, e);
                            }
                            prepend(e) {
                                this.messages.unshift.apply(this.messages, e);
                            }
                            completeMessages(e, t, n) {
                                C.logAction(C.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + e + "; count = " + t), n = n || null;
                                const s = this.messages;
                                if (0 === s.length) throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
                                const r = s[0];
                                if (r) {
                                    const i = r.message.msgSerial,
                                        o = e + t;
                                    if (o > i) {
                                        const e = s.splice(0, o - i);
                                        for (const t of e) t.callback(n);
                                    }
                                    0 == s.length && this.emit("idle");
                                }
                            }
                            completeAllMessages(e) {
                                this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, e);
                            }
                            resetSendAttempted() {
                                for (let e of this.messages) e.sendAttempted = false;
                            }
                            clear() {
                                C.logAction(C.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), this.messages = [], this.emit("idle");
                            }
                        },
                        sn = class {
                            constructor(e, t) {
                                this.message = e, this.callback = t, this.merged = false;
                                const n = e.action;
                                this.sendAttempted = false, this.ackRequired = n == $t.MESSAGE || n == $t.PRESENCE;
                            }
                        },
                        rn = class extends jt {
                            constructor(e) {
                                super(), this.transport = e, this.messageQueue = new nn, e.on("ack", (e, t) => {
                                    this.onAck(e, t);
                                }), e.on("nack", (e, t, n) => {
                                    this.onNack(e, t, n);
                                });
                            }
                            onAck(e, t) {
                                C.logAction(C.LOG_MICRO, "Protocol.onAck()", "serial = " + e + "; count = " + t), this.messageQueue.completeMessages(e, t);
                            }
                            onNack(e, t, n) {
                                C.logAction(C.LOG_ERROR, "Protocol.onNack()", "serial = " + e + "; count = " + t + "; err = " + K(n)), n || (n = new O("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages(e, t, n);
                            }
                            onceIdle(e) {
                                const t = this.messageQueue;
                                0 !== t.count() ? t.once("idle", e) : e();
                            }
                            send(e) {
                                e.ackRequired && this.messageQueue.push(e), C.shouldLog(C.LOG_MICRO) && C.logActionNoStrip(C.LOG_MICRO, "Protocol.send()", "sending msg; " + Zt(e.message, this.transport.connectionManager.realtime._RealtimePresence)), e.sendAttempted = true, this.transport.send(e.message);
                            }
                            getTransport() {
                                return this.transport;
                            }
                            getPendingMessages() {
                                return this.messageQueue.copyAll();
                            }
                            clearPendingMessages() {
                                return this.messageQueue.clear();
                            }
                            finish() {
                                const e = this.transport;
                                this.onceIdle(function() {
                                    e.disconnect();
                                });
                            }
                        },
                        on = class {
                            constructor(e, t, n, s) {
                                this.previous = e, this.current = t, n && (this.retryIn = n), s && (this.reason = s);
                            }
                        },
                        an = {
                            DISCONNECTED: 80003,
                            SUSPENDED: 80002,
                            FAILED: 8e4,
                            CLOSING: 80017,
                            CLOSED: 80017,
                            UNKNOWN_CONNECTION_ERR: 50002,
                            UNKNOWN_CHANNEL_ERR: 50001
                        },
                        cn = {
                            disconnected: () => O.fromValues({
                                statusCode: 400,
                                code: an.DISCONNECTED,
                                message: "Connection to server temporarily unavailable"
                            }),
                            suspended: () => O.fromValues({
                                statusCode: 400,
                                code: an.SUSPENDED,
                                message: "Connection to server unavailable"
                            }),
                            failed: () => O.fromValues({
                                statusCode: 400,
                                code: an.FAILED,
                                message: "Connection failed or disconnected by server"
                            }),
                            closing: () => O.fromValues({
                                statusCode: 400,
                                code: an.CLOSING,
                                message: "Connection closing"
                            }),
                            closed: () => O.fromValues({
                                statusCode: 400,
                                code: an.CLOSED,
                                message: "Connection closed"
                            }),
                            unknownConnectionErr: () => O.fromValues({
                                statusCode: 500,
                                code: an.UNKNOWN_CONNECTION_ERR,
                                message: "Internal connection error"
                            }),
                            unknownChannelErr: () => O.fromValues({
                                statusCode: 500,
                                code: an.UNKNOWN_CONNECTION_ERR,
                                message: "Internal channel error"
                            })
                        },
                        ln = Object.assign(new en, {
                            action: $t.CLOSE
                        }),
                        un = Object.assign(new en, {
                            action: $t.DISCONNECT
                        }),
                        hn = class extends jt {
                            constructor(e, t, n, s) {
                                super(), s && (n.format = undefined, n.heartbeats = true), this.connectionManager = e, this.auth = t, this.params = n, this.timeouts = n.options.timeouts, this.format = n.format, this.isConnected = false, this.isFinished = false, this.isDisposed = false, this.maxIdleInterval = null, this.idleTimer = null, this.lastActivity = null;
                            }
                            connect() {}
                            close() {
                                this.isConnected && this.requestClose(), this.finish("closed", cn.closed());
                            }
                            disconnect(e) {
                                this.isConnected && this.requestDisconnect(), this.finish("disconnected", e || cn.disconnected());
                            }
                            fail(e) {
                                this.isConnected && this.requestDisconnect(), this.finish("failed", e || cn.failed());
                            }
                            finish(e, t) {
                                var n;
                                this.isFinished || (this.isFinished = true, this.isConnected = false, this.maxIdleInterval = null, clearTimeout(null != (n = this.idleTimer) ? n : undefined), this.idleTimer = null, this.emit(e, t), this.dispose());
                            }
                            onProtocolMessage(e) {
                                switch (C.shouldLog(C.LOG_MICRO) && C.logActionNoStrip(C.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + Zt(e, this.connectionManager.realtime._RealtimePresence) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), e.action) {
                                    case $t.HEARTBEAT:
                                        C.logActionNoStrip(C.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", e.id);
                                        break;
                                    case $t.CONNECTED:
                                        this.onConnect(e), this.emit("connected", e.error, e.connectionId, e.connectionDetails, e);
                                        break;
                                    case $t.CLOSED:
                                        this.onClose(e);
                                        break;
                                    case $t.DISCONNECTED:
                                        this.onDisconnect(e);
                                        break;
                                    case $t.ACK:
                                        this.emit("ack", e.msgSerial, e.count);
                                        break;
                                    case $t.NACK:
                                        this.emit("nack", e.msgSerial, e.count, e.error);
                                        break;
                                    case $t.SYNC:
                                        this.connectionManager.onChannelMessage(e, this);
                                        break;
                                    case $t.ACTIVATE:
                                        break;
                                    case $t.AUTH:
                                        re(this.auth.authorize(), function(e) {
                                            e && C.logAction(C.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + K(e));
                                        });
                                        break;
                                    case $t.ERROR:
                                        if (C.logAction(C.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + y.Config.inspect(e.error) + (e.channel ? ", channel: " + e.channel : "")), undefined === e.channel) {
                                            this.onFatalError(e);
                                            break;
                                        }
                                        this.connectionManager.onChannelMessage(e, this);
                                        break;
                                    default:
                                        this.connectionManager.onChannelMessage(e, this);
                                }
                            }
                            onConnect(e) {
                                if (this.isConnected = true, !e.connectionDetails) throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");
                                const t = e.connectionDetails.maxIdleInterval;
                                t && (this.maxIdleInterval = t + this.timeouts.realtimeRequestTimeout, this.onActivity());
                            }
                            onDisconnect(e) {
                                const t = e && e.error;
                                C.logAction(C.LOG_MINOR, "Transport.onDisconnect()", "err = " + K(t)), this.finish("disconnected", t);
                            }
                            onFatalError(e) {
                                const t = e && e.error;
                                C.logAction(C.LOG_MINOR, "Transport.onFatalError()", "err = " + K(t)), this.finish("failed", t);
                            }
                            onClose(e) {
                                const t = e && e.error;
                                C.logAction(C.LOG_MINOR, "Transport.onClose()", "err = " + K(t)), this.finish("closed", t);
                            }
                            requestClose() {
                                C.logAction(C.LOG_MINOR, "Transport.requestClose()", ""), this.send(ln);
                            }
                            requestDisconnect() {
                                C.logAction(C.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(un);
                            }
                            ping(e) {
                                const t = {
                                    action: $t.HEARTBEAT
                                };
                                e && (t.id = e), this.send(Object.assign(new en, t));
                            }
                            dispose() {
                                C.logAction(C.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = true, this.off();
                            }
                            onActivity() {
                                this.maxIdleInterval && (this.lastActivity = this.connectionManager.lastActivity = Date.now(), this.setIdleTimer(this.maxIdleInterval + 100));
                            }
                            setIdleTimer(e) {
                                this.idleTimer || (this.idleTimer = setTimeout(() => {
                                    this.onIdleTimerExpire();
                                }, e));
                            }
                            onIdleTimerExpire() {
                                if (!this.lastActivity || !this.maxIdleInterval) throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
                                this.idleTimer = null;
                                const e = Date.now() - this.lastActivity,
                                    t = this.maxIdleInterval - e;
                                if (t <= 0) {
                                    const t = "No activity seen from realtime in " + e + "ms; assuming connection has dropped";
                                    C.logAction(C.LOG_ERROR, "Transport.onIdleTimerExpire()", t), this.disconnect(new O(t, 80003, 408));
                                } else this.setIdleTimer(t + 100);
                            }
                            static tryConnect(e, t, n, s, r) {
                                const i = new e(t, n, s);
                                let o;
                                const a = function(e) {
                                        clearTimeout(o), r({
                                            event: this.event,
                                            error: e
                                        });
                                    },
                                    c = t.options.timeouts.realtimeRequestTimeout;
                                return o = setTimeout(() => {
                                    i.off(["preconnect", "disconnected", "failed"]), i.dispose(), a.call({
                                        event: "disconnected"
                                    }, new O("Timeout waiting for transport to indicate itself viable", 5e4, 500));
                                }, c), i.on(["failed", "disconnected"], a), i.on("preconnect", function() {
                                    C.logAction(C.LOG_MINOR, "Transport.tryConnect()", "viable transport " + i), clearTimeout(o), i.off(["failed", "disconnected"], a), r(null, i);
                                }), i.connect(), i;
                            }
                            static isAvailable() {
                                throw new O("isAvailable not implemented for transport", 5e4, 500);
                            }
                        };
                    (Qt = Kt || (Kt = {})).WebSocket = "web_socket", Qt.Comet = "comet", Qt.XhrPolling = "xhr_polling";
                    var dn = undefined !== n.g ? n.g : "undefined" != typeof window ? window : self,
                        fn = () => {
                            var e;
                            return undefined !== y.WebStorage && (null == (e = y.WebStorage) ? undefined : e.localSupported);
                        },
                        pn = () => {
                            var e;
                            return undefined !== y.WebStorage && (null == (e = y.WebStorage) ? undefined : e.sessionSupported);
                        },
                        gn = function() {},
                        mn = "ably-transport-preference",
                        yn = "ably-connection-recovery";

                    function bn(e) {
                        try {
                            return JSON.parse(e);
                        } catch (e) {
                            return null;
                        }
                    }
                    var vn = class {
                            constructor(e, t, n, s) {
                                this.options = e, this.host = t, this.mode = n, this.connectionKey = s, this.format = e.useBinaryProtocol ? "msgpack" : "json";
                            }
                            getConnectParams(e) {
                                const t = e ? S({}, e) : {},
                                    n = this.options;
                                switch (this.mode) {
                                    case "resume":
                                        t.resume = this.connectionKey;
                                        break;
                                    case "recover": {
                                        const e = bn(n.recover);
                                        e && (t.recover = e.connectionKey);
                                        break;
                                    }
                                }
                                return undefined !== n.clientId && (t.clientId = n.clientId), false === n.echoMessages && (t.echo = "false"), undefined !== this.format && (t.format = this.format), undefined !== this.stream && (t.stream = this.stream), undefined !== this.heartbeats && (t.heartbeats = this.heartbeats), t.v = Ie.protocolVersion, t.agent = Oe(this.options), undefined !== n.transportParams && S(t, n.transportParams), t;
                            }
                            toString() {
                                let e = "[mode=" + this.mode;
                                return this.host && (e += ",host=" + this.host), this.connectionKey && (e += ",connectionKey=" + this.connectionKey), this.format && (e += ",format=" + this.format), e += "]", e;
                            }
                        },
                        wn = class e extends jt {
                            constructor(e, t) {
                                super(), this.supportedTransports = {}, this.disconnectedRetryCount = 0, this.pendingChannelMessagesState = {
                                    isProcessing: false,
                                    queue: []
                                }, this.realtime = e, this.initTransports(), this.options = t;
                                const n = t.timeouts,
                                    s = n.webSocketConnectTimeout + n.realtimeRequestTimeout;
                                if (this.states = {
                                        initialized: {
                                            state: "initialized",
                                            terminal: false,
                                            queueEvents: true,
                                            sendEvents: false,
                                            failState: "disconnected"
                                        },
                                        connecting: {
                                            state: "connecting",
                                            terminal: false,
                                            queueEvents: true,
                                            sendEvents: false,
                                            retryDelay: s,
                                            failState: "disconnected"
                                        },
                                        connected: {
                                            state: "connected",
                                            terminal: false,
                                            queueEvents: false,
                                            sendEvents: true,
                                            failState: "disconnected"
                                        },
                                        disconnected: {
                                            state: "disconnected",
                                            terminal: false,
                                            queueEvents: true,
                                            sendEvents: false,
                                            retryDelay: n.disconnectedRetryTimeout,
                                            failState: "disconnected"
                                        },
                                        suspended: {
                                            state: "suspended",
                                            terminal: false,
                                            queueEvents: false,
                                            sendEvents: false,
                                            retryDelay: n.suspendedRetryTimeout,
                                            failState: "suspended"
                                        },
                                        closing: {
                                            state: "closing",
                                            terminal: false,
                                            queueEvents: false,
                                            sendEvents: false,
                                            retryDelay: n.realtimeRequestTimeout,
                                            failState: "closed"
                                        },
                                        closed: {
                                            state: "closed",
                                            terminal: true,
                                            queueEvents: false,
                                            sendEvents: false,
                                            failState: "closed"
                                        },
                                        failed: {
                                            state: "failed",
                                            terminal: true,
                                            queueEvents: false,
                                            sendEvents: false,
                                            failState: "failed"
                                        }
                                    }, this.state = this.states.initialized, this.errorReason = null, this.queuedMessages = new nn, this.msgSerial = 0, this.connectionDetails = undefined, this.connectionId = undefined, this.connectionKey = undefined, this.connectionStateTtl = n.connectionStateTtl, this.maxIdleInterval = null, this.transports = B(t.transports || Ie.defaultTransports, this.supportedTransports), this.transportPreference = null, this.transports.includes(Kt.WebSocket) && (this.webSocketTransportAvailable = true), this.transports.includes(Kt.XhrPolling) ? this.baseTransport = Kt.XhrPolling : this.transports.includes(Kt.Comet) && (this.baseTransport = Kt.Comet), this.httpHosts = Ie.getHosts(t), this.wsHosts = Ie.getHosts(t, true), this.activeProtocol = null, this.host = null, this.lastAutoReconnectAttempt = null, this.lastActivity = null, this.forceFallbackHost = false, this.connectCounter = 0, this.wsCheckResult = null, this.webSocketSlowTimer = null, this.webSocketGiveUpTimer = null, this.abandonedWebSocket = false, C.logAction(C.LOG_MINOR, "Realtime.ConnectionManager()", "started"), C.logAction(C.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (t.transports || Ie.defaultTransports) + "]"), C.logAction(C.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + this.transports + "]"), C.logAction(C.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + this.httpHosts + "]"), !this.transports.length) {
                                    const e = "no requested transports available";
                                    throw C.logAction(C.LOG_ERROR, "realtime.ConnectionManager()", e), new Error(e);
                                }
                                const r = y.Config.addEventListener;
                                r && (pn() && "function" == typeof t.recover && r("beforeunload", this.persistConnection.bind(this)), true === t.closeOnUnload && r("beforeunload", () => {
                                    C.logAction(C.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), this.requestState({
                                        state: "closing"
                                    });
                                }), r("online", () => {
                                    var e;
                                    this.state == this.states.disconnected || this.state == this.states.suspended ? (C.logAction(C.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection"), this.requestState({
                                        state: "connecting"
                                    })) : this.state == this.states.connecting && (null == (e = this.pendingTransport) || e.off(), this.disconnectAllTransports(), this.startConnect());
                                }), r("offline", () => {
                                    this.state == this.states.connected && (C.logAction(C.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport"), this.disconnectAllTransports());
                                }));
                            }
                            static supportedTransports(e) {
                                const t = {
                                    supportedTransports: {}
                                };
                                return this.initTransports(e, t), t.supportedTransports;
                            }
                            static initTransports(e, t) {
                                const n = f(f({}, y.Transports.bundledImplementations), e);
                                [Kt.WebSocket, ...y.Transports.order].forEach(e => {
                                    const s = n[e];
                                    s && s.isAvailable() && (t.supportedTransports[e] = s);
                                });
                            }
                            initTransports() {
                                e.initTransports(this.realtime._additionalTransportImplementations, this);
                            }
                            createTransportParams(e, t) {
                                return new vn(this.options, e, t, this.connectionKey);
                            }
                            getTransportParams(e) {
                                (e => {
                                    if (this.connectionKey) return void e("resume");
                                    if ("string" == typeof this.options.recover) return void e("recover");
                                    const t = this.options.recover,
                                        n = pn() && (null == (r = null == (s = y.WebStorage) ? undefined : s.getSession) ? undefined : r.call(s, yn));
                                    var s, r;
                                    if (n && "function" == typeof t) return C.logAction(C.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data"), void t(n, t => {
                                        t ? (this.options.recover = n.recoveryKey, e("recover")) : e("clean");
                                    });
                                    e("clean");
                                })(t => {
                                    const n = this.createTransportParams(null, t);
                                    if ("recover" === t) {
                                        C.logAction(C.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + this.options.recover);
                                        const e = bn(this.options.recover);
                                        e && (this.msgSerial = e.msgSerial);
                                    } else C.logAction(C.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + n.toString());
                                    e(n);
                                });
                            }
                            tryATransport(e, t, n) {
                                C.logAction(C.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + t), this.proposedTransport = hn.tryConnect(this.supportedTransports[t], this, this.realtime.auth, e, (s, r) => {
                                    const i = this.state;
                                    return i == this.states.closing || i == this.states.closed || i == this.states.failed ? (r && (C.logAction(C.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + i.state + " while we were attempting the transport; closing " + r), r.close()), void n(true)) : s ? (C.logAction(C.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + t + " " + s.event + ", err: " + s.error.toString()), void(!$e.isTokenErr(s.error) || this.errorReason && $e.isTokenErr(this.errorReason) ? "failed" === s.event ? (this.notifyState({
                                        state: "failed",
                                        error: s.error
                                    }), n(true)) : "disconnected" === s.event && (!(o = s.error).statusCode || !o.code || o.statusCode >= 500 || Object.values(an).includes(o.code) ? n(false) : (this.notifyState({
                                        state: this.states.connecting.failState,
                                        error: s.error
                                    }), n(true))) : (this.errorReason = s.error, re(this.realtime.auth._forceNewToken(null, null), s => {
                                        s ? this.actOnErrorFromAuthorize(s) : this.tryATransport(e, t, n);
                                    })))) : (C.logAction(C.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + t + "; setting pending"), this.setTransportPending(r, e), void n(null, r));
                                    var o;
                                });
                            }
                            setTransportPending(e, t) {
                                const n = t.mode;
                                C.logAction(C.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + e + "; mode = " + n), this.pendingTransport = e, this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), e.once("connected", (t, s, r) => {
                                    this.activateTransport(t, e, s, r), "recover" === n && this.options.recover && (delete this.options.recover, this.unpersistConnection());
                                });
                                const s = this;
                                e.on(["disconnected", "closed", "failed"], function(t) {
                                    s.deactivateTransport(e, this.event, t);
                                }), this.emit("transport.pending", e);
                            }
                            activateTransport(e, t, n, s) {
                                C.logAction(C.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + t), e && C.logAction(C.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + e), n && C.logAction(C.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + n), s && C.logAction(C.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(s)), this.persistTransportPreference(t);
                                const r = this.state,
                                    i = this.states.connected.state;
                                if (C.logAction(C.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + r.state), r.state == this.states.closing.state || r.state == this.states.closed.state || r.state == this.states.failed.state) return C.logAction(C.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), t.disconnect(), false;
                                if (delete this.pendingTransport, !t.isConnected) return C.logAction(C.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + t + " since it appears to no longer be connected"), false;
                                const o = this.activeProtocol;
                                this.activeProtocol = new rn(t), this.host = t.params.host;
                                const a = s.connectionKey;
                                if (a && this.connectionKey != a && this.setConnection(n, s, !!e), this.onConnectionDetailsUpdate(s, t), y.Config.nextTick(() => {
                                        t.on("connected", (e, n, s) => {
                                            this.onConnectionDetailsUpdate(s, t), this.emit("update", new on(i, i, null, e));
                                        });
                                    }), r.state === this.states.connected.state ? e && (this.errorReason = this.realtime.connection.errorReason = e, this.emit("update", new on(i, i, null, e))) : (this.notifyState({
                                        state: "connected",
                                        error: e
                                    }), this.errorReason = this.realtime.connection.errorReason = e || null), this.emit("transport.active", t), o)
                                    if (o.messageQueue.count() > 0 && C.logAction(C.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + o.transport.shortName + ", new one is " + t.shortName + ") finishing with " + o.messageQueue.count() + " messages still pending"), o.transport === t) {
                                        const e = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + t.shortName + "; stack = " + (new Error).stack;
                                        C.logAction(C.LOG_ERROR, "ConnectionManager.activateTransport()", e);
                                    } else o.finish();
                                return true;
                            }
                            deactivateTransport(e, t, n) {
                                const s = this.activeProtocol,
                                    r = s && s.getTransport() === e,
                                    i = e === this.pendingTransport,
                                    o = this.noTransportsScheduledForActivation();
                                if (C.logAction(C.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + e), C.logAction(C.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + t + (r ? "; was active" : i ? "; was pending" : "") + (o ? "" : "; another transport is scheduled for activation")), n && n.message && C.logAction(C.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + n.message), r && (C.logAction(C.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(s.getPendingMessages()), s.clearPendingMessages(), this.activeProtocol = this.host = null), this.emit("transport.inactive", e), r && o || r && "failed" === t || "closed" === t || null === s && i) {
                                    if ("disconnected" === t && n && n.statusCode > 500 && this.httpHosts.length > 1) return this.unpersistTransportPreference(), this.forceFallbackHost = true, void this.notifyState({
                                        state: t,
                                        error: n,
                                        retryImmediately: true
                                    });
                                    const e = "failed" === t && $e.isTokenErr(n) ? "disconnected" : t;
                                    this.notifyState({
                                        state: e,
                                        error: n
                                    });
                                }
                            }
                            noTransportsScheduledForActivation() {
                                return !this.pendingTransport || !this.pendingTransport.isConnected;
                            }
                            setConnection(e, t, n) {
                                const s = this.connectionId;
                                (s && s !== e || !s && n) && (C.logAction(C.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0, this.queuedMessages.resetSendAttempted()), this.connectionId !== e && C.logAction(C.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), this.realtime.connection.id = this.connectionId = e, this.realtime.connection.key = this.connectionKey = t.connectionKey;
                            }
                            clearConnection() {
                                this.realtime.connection.id = this.connectionId = undefined, this.realtime.connection.key = this.connectionKey = undefined, this.msgSerial = 0, this.unpersistConnection();
                            }
                            createRecoveryKey() {
                                return this.connectionKey ? JSON.stringify({
                                    connectionKey: this.connectionKey,
                                    msgSerial: this.msgSerial,
                                    channelSerials: this.realtime.channels.channelSerials()
                                }) : null;
                            }
                            checkConnectionStateFreshness() {
                                if (!this.lastActivity || !this.connectionId) return;
                                const e = Date.now() - this.lastActivity;
                                e > this.connectionStateTtl + this.maxIdleInterval && (C.logAction(C.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + e + "ms ago; discarding connection state"), this.clearConnection(), this.states.connecting.failState = "suspended");
                            }
                            persistConnection() {
                                if (pn()) {
                                    const s = this.createRecoveryKey();
                                    s && (e = {
                                        recoveryKey: s,
                                        disconnectedAt: Date.now(),
                                        location: dn.location,
                                        clientId: this.realtime.auth.clientId
                                    }, pn() && (null == (n = null == (t = y.WebStorage) ? undefined : t.setSession) || n.call(t, yn, e)));
                                }
                                var e, t, n;
                            }
                            unpersistConnection() {
                                var e, t;
                                pn() && (null == (t = null == (e = y.WebStorage) ? undefined : e.removeSession) || t.call(e, yn));
                            }
                            getError() {
                                return this.errorReason || this.getStateError();
                            }
                            getStateError() {
                                var e, t;
                                return null == (t = (e = cn)[this.state.state]) ? undefined : t.call(e);
                            }
                            activeState() {
                                return this.state.queueEvents || this.state.sendEvents;
                            }
                            enactStateChange(e) {
                                const t = "Connection state",
                                    n = e.current + (e.reason ? "; reason: " + e.reason : "");
                                "failed" === e.current ? C.logAction(C.LOG_ERROR, t, n) : C.logAction(C.LOG_MAJOR, t, n), C.logAction(C.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + e.current + "; reason = " + (e.reason && e.reason.message));
                                const s = this.state = this.states[e.current];
                                e.reason && (this.errorReason = e.reason, this.realtime.connection.errorReason = e.reason), (s.terminal || "suspended" === s.state) && this.clearConnection(), this.emit("connectionstate", e);
                            }
                            startTransitionTimer(e) {
                                C.logAction(C.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + e.state), this.transitionTimer && (C.logAction(C.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), clearTimeout(this.transitionTimer)), this.transitionTimer = setTimeout(() => {
                                    this.transitionTimer && (this.transitionTimer = null, C.logAction(C.LOG_MINOR, "ConnectionManager " + e.state + " timer expired", "requesting new state: " + e.failState), this.notifyState({
                                        state: e.failState
                                    }));
                                }, e.retryDelay);
                            }
                            cancelTransitionTimer() {
                                C.logAction(C.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (clearTimeout(this.transitionTimer), this.transitionTimer = null);
                            }
                            startSuspendTimer() {
                                this.suspendTimer || (this.suspendTimer = setTimeout(() => {
                                    this.suspendTimer && (this.suspendTimer = null, C.logAction(C.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"), this.states.connecting.failState = "suspended", this.notifyState({
                                        state: "suspended"
                                    }));
                                }, this.connectionStateTtl));
                            }
                            checkSuspendTimer(e) {
                                "disconnected" !== e && "suspended" !== e && "connecting" !== e && this.cancelSuspendTimer();
                            }
                            cancelSuspendTimer() {
                                this.states.connecting.failState = "disconnected", this.suspendTimer && (clearTimeout(this.suspendTimer), this.suspendTimer = null);
                            }
                            startRetryTimer(e) {
                                this.retryTimer = setTimeout(() => {
                                    C.logAction(C.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), this.retryTimer = null, this.requestState({
                                        state: "connecting"
                                    });
                                }, e);
                            }
                            cancelRetryTimer() {
                                this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
                            }
                            startWebSocketSlowTimer() {
                                this.webSocketSlowTimer = setTimeout(() => {
                                    C.logAction(C.LOG_MINOR, "ConnectionManager WebSocket slow timer", "checking connectivity"), null === this.wsCheckResult && this.checkWsConnectivity().then(() => {
                                        C.logAction(C.LOG_MINOR, "ConnectionManager WebSocket slow timer", "ws connectivity check succeeded"), this.wsCheckResult = true;
                                    }).catch(() => {
                                        C.logAction(C.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "ws connectivity check failed"), this.wsCheckResult = false;
                                    }), this.realtime.http.checkConnectivity && re(this.realtime.http.checkConnectivity(), (e, t) => {
                                        e || !t ? (C.logAction(C.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "http connectivity check failed"), this.cancelWebSocketGiveUpTimer(), this.notifyState({
                                            state: "disconnected",
                                            error: new O("new ErrorInfo('Unable to connect (network unreachable)'", 80003, 404)
                                        })) : C.logAction(C.LOG_MINOR, "ConnectionManager WebSocket slow timer", "http connectivity check succeeded");
                                    });
                                }, this.options.timeouts.webSocketSlowTimeout);
                            }
                            cancelWebSocketSlowTimer() {
                                this.webSocketSlowTimer && (clearTimeout(this.webSocketSlowTimer), this.webSocketSlowTimer = null);
                            }
                            startWebSocketGiveUpTimer(e) {
                                this.webSocketGiveUpTimer = setTimeout(() => {
                                    var t, n;
                                    this.wsCheckResult || (C.logAction(C.LOG_MINOR, "ConnectionManager WebSocket give up timer", "websocket connection took more than 10s; " + (this.baseTransport ? "trying base transport" : "")), this.baseTransport ? (this.abandonedWebSocket = true, null == (t = this.proposedTransport) || t.dispose(), null == (n = this.pendingTransport) || n.dispose(), this.connectBase(e, ++this.connectCounter)) : C.logAction(C.LOG_MAJOR, "ConnectionManager WebSocket give up timer", "websocket connectivity appears to be unavailable but no other transports to try"));
                                }, this.options.timeouts.webSocketConnectTimeout);
                            }
                            cancelWebSocketGiveUpTimer() {
                                this.webSocketGiveUpTimer && (clearTimeout(this.webSocketGiveUpTimer), this.webSocketGiveUpTimer = null);
                            }
                            notifyState(e) {
                                var t, n;
                                const s = e.state,
                                    r = "disconnected" === s && (this.state === this.states.connected || e.retryImmediately || this.state === this.states.connecting && e.error && $e.isTokenErr(e.error) && !(this.errorReason && $e.isTokenErr(this.errorReason)));
                                if (C.logAction(C.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + s + (r ? "; will retry connection immediately" : "")), s == this.state.state) return;
                                if (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), this.checkSuspendTimer(e.state), "suspended" !== s && "connected" !== s || (this.disconnectedRetryCount = 0), this.state.terminal) return;
                                const i = this.states[e.state];
                                let o = i.retryDelay;
                                "disconnected" === i.state && (this.disconnectedRetryCount++, o = i.retryDelay * Math.min((this.disconnectedRetryCount + 2) / 3, 2) * (1 - 0.2 * Math.random()));
                                const a = new on(this.state.state, i.state, o, e.error || (null == (n = (t = cn)[i.state]) ? undefined : n.call(t)));
                                if (r) {
                                    const e = () => {
                                            this.state === this.states.disconnected && (this.lastAutoReconnectAttempt = Date.now(), this.requestState({
                                                state: "connecting"
                                            }));
                                        },
                                        t = this.lastAutoReconnectAttempt && Date.now() - this.lastAutoReconnectAttempt + 1;
                                    t && t < 1e3 ? (C.logAction(C.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + t + "ms ago, waiting another " + (1e3 - t) + "ms before trying again"), setTimeout(e, 1e3 - t)) : y.Config.nextTick(e);
                                } else "disconnected" !== s && "suspended" !== s || this.startRetryTimer(o);
                                ("disconnected" === s && !r || "suspended" === s || i.terminal) && y.Config.nextTick(() => {
                                    this.disconnectAllTransports();
                                }), "connected" != s || this.activeProtocol || C.logAction(C.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange(a), this.state.sendEvents ? this.sendQueuedMessages() : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(s, a.reason), this.failQueuedMessages(a.reason));
                            }
                            requestState(e) {
                                var t, n;
                                const s = e.state;
                                if (C.logAction(C.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + s + "; current state: " + this.state.state), s == this.state.state) return;
                                if (this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(s), "connecting" == s && "connected" == this.state.state) return;
                                if ("closing" == s && "closed" == this.state.state) return;
                                const r = this.states[s],
                                    i = new on(this.state.state, r.state, null, e.error || (null == (n = (t = cn)[r.state]) ? undefined : n.call(t)));
                                this.enactStateChange(i), "connecting" == s && y.Config.nextTick(() => {
                                    this.startConnect();
                                }), "closing" == s && this.closeImpl();
                            }
                            startConnect() {
                                if (this.state !== this.states.connecting) return void C.logAction(C.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
                                const e = this.realtime.auth,
                                    t = ++this.connectCounter,
                                    n = () => {
                                        this.checkConnectionStateFreshness(), this.getTransportParams(e => {
                                            if ("recover" === e.mode && e.options.recover) {
                                                const t = bn(e.options.recover);
                                                t && this.realtime.channels.recoverChannels(t.channelSerials);
                                            }
                                            t === this.connectCounter && this.connectImpl(e, t);
                                        });
                                    };
                                if (C.logAction(C.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), "basic" === e.method) n();
                                else {
                                    const s = e => {
                                        t === this.connectCounter && (e ? this.actOnErrorFromAuthorize(e) : n());
                                    };
                                    this.errorReason && $e.isTokenErr(this.errorReason) ? re(e._forceNewToken(null, null), s) : re(e._ensureValidAuthCredentials(false), s);
                                }
                            }
                            connectImpl(e, t) {
                                const n = this.state.state;
                                if (n !== this.states.connecting.state) return void C.logAction(C.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect, but was " + n);
                                const s = this.getTransportPreference();
                                s && s === this.baseTransport && this.webSocketTransportAvailable && this.checkWsConnectivity().then(() => {
                                    this.wsCheckResult = true, this.abandonedWebSocket = false, this.unpersistTransportPreference(), this.state === this.states.connecting && (C.logAction(C.LOG_MINOR, "ConnectionManager.connectImpl():", "web socket connectivity available, cancelling connection attempt with " + this.baseTransport), this.disconnectAllTransports(), this.connectWs(e, ++this.connectCounter));
                                }).catch(gn), s && s === this.baseTransport || this.baseTransport && !this.webSocketTransportAvailable ? this.connectBase(e, t) : this.connectWs(e, t);
                            }
                            connectWs(e, t) {
                                C.logAction(C.LOG_DEBUG, "ConnectionManager.connectWs()"), this.startWebSocketSlowTimer(), this.startWebSocketGiveUpTimer(e), this.tryTransportWithFallbacks("web_socket", e, true, t, () => false !== this.wsCheckResult && !this.abandonedWebSocket);
                            }
                            connectBase(e, t) {
                                C.logAction(C.LOG_DEBUG, "ConnectionManager.connectBase()"), this.baseTransport ? this.tryTransportWithFallbacks(this.baseTransport, e, false, t, () => true) : this.notifyState({
                                    state: "disconnected",
                                    error: new O("No transports left to try", 8e4, 404)
                                });
                            }
                            tryTransportWithFallbacks(e, t, n, s, r) {
                                C.logAction(C.LOG_DEBUG, "ConnectionManager.tryTransportWithFallbacks()", e);
                                const i = e => {
                                        this.notifyState({
                                            state: this.states.connecting.failState,
                                            error: e
                                        });
                                    },
                                    o = n ? this.wsHosts.slice() : this.httpHosts.slice(),
                                    a = (e, t) => {
                                        s === this.connectCounter && (r() ? t || e || l() : t && t.dispose());
                                    },
                                    c = o.shift();
                                if (!c) return void i(new O("Unable to connect (no available host)", 80003, 404));
                                t.host = c;
                                const l = () => {
                                    o.length ? this.realtime.http.checkConnectivity ? re(this.realtime.http.checkConnectivity(), (n, c) => {
                                        s === this.connectCounter && r() && (n ? i(n) : c ? (t.host = X(o), this.tryATransport(t, e, a)) : i(new O("Unable to connect (network unreachable)", 80003, 404)));
                                    }) : i(new _("Internal error: Http.checkConnectivity not set", null, 500)) : i(new O("Unable to connect (and no more fallback hosts to try)", 80003, 404));
                                };
                                if (this.forceFallbackHost && o.length) return this.forceFallbackHost = false, void l();
                                this.tryATransport(t, e, a);
                            }
                            closeImpl() {
                                C.logAction(C.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), this.pendingTransport && (C.logAction(C.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + this.pendingTransport), this.pendingTransport.close()), this.activeProtocol && (C.logAction(C.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()), this.notifyState({
                                    state: "closed"
                                });
                            }
                            onAuthUpdated(e, t) {
                                var n;
                                switch (this.state.state) {
                                    case "connected": {
                                        C.logAction(C.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport");
                                        const s = null == (n = this.activeProtocol) ? undefined : n.getTransport();
                                        s && s.onAuthUpdated && s.onAuthUpdated(e);
                                        const r = Object.assign(new en, {
                                            action: $t.AUTH,
                                            auth: {
                                                accessToken: e.token
                                            }
                                        });
                                        this.send(r);
                                        const i = () => {
                                                this.off(o), t(null, e);
                                            },
                                            o = e => {
                                                "failed" === e.current && (this.off(i), this.off(o), t(e.reason || this.getStateError()));
                                            };
                                        this.once("connectiondetails", i), this.on("connectionstate", o);
                                        break;
                                    }
                                    case "connecting":
                                        C.logAction(C.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
                                    default: {
                                        C.logAction(C.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
                                        const n = s => {
                                            switch (s.current) {
                                                case "connected":
                                                    this.off(n), t(null, e);
                                                    break;
                                                case "failed":
                                                case "closed":
                                                case "suspended":
                                                    this.off(n), t(s.reason || this.getStateError());
                                            }
                                        };
                                        this.on("connectionstate", n), "connecting" === this.state.state ? this.startConnect() : this.requestState({
                                            state: "connecting"
                                        });
                                    }
                                }
                            }
                            disconnectAllTransports() {
                                C.logAction(C.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports"), this.connectCounter++, this.pendingTransport && (C.logAction(C.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + this.pendingTransport), this.pendingTransport.disconnect()), delete this.pendingTransport, this.proposedTransport && (C.logAction(C.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting proposed transport: " + this.pendingTransport), this.proposedTransport.disconnect()), delete this.pendingTransport, this.activeProtocol && (C.logAction(C.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect());
                            }
                            send(e, t, n) {
                                n = n || gn;
                                const s = this.state;
                                if (s.sendEvents) return C.logAction(C.LOG_MICRO, "ConnectionManager.send()", "sending event"), void this.sendImpl(new sn(e, n));
                                if (!t || !s.queueEvents) {
                                    const e = "rejecting event, queueEvent was " + t + ", state was " + s.state;
                                    return C.logAction(C.LOG_MICRO, "ConnectionManager.send()", e), void n(this.errorReason || new O(e, 9e4, 400));
                                }
                                C.shouldLog(C.LOG_MICRO) && C.logAction(C.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + Zt(e, this.realtime._RealtimePresence)), this.queue(e, n);
                            }
                            sendImpl(e) {
                                const t = e.message;
                                e.ackRequired && !e.sendAttempted && (t.msgSerial = this.msgSerial++);
                                try {
                                    this.activeProtocol.send(e);
                                } catch (e) {
                                    C.logAction(C.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + e.stack);
                                }
                            }
                            queue(e, t) {
                                C.logAction(C.LOG_MICRO, "ConnectionManager.queue()", "queueing event");
                                const n = this.queuedMessages.last(),
                                    s = this.options.maxMessageSize;
                                n && !n.sendAttempted && function(e, t, n) {
                                    let s;
                                    if (e.channel !== t.channel) return false;
                                    if ((s = e.action) !== $t.PRESENCE && s !== $t.MESSAGE) return false;
                                    if (s !== t.action) return false;
                                    const r = s === $t.PRESENCE ? "presence" : "messages",
                                        i = e[r].concat(t[r]);
                                    return !(pt(i) > n || !W(i, "clientId") || !i.every(function(e) {
                                        return !e.id;
                                    }) || (e[r] = i, 0));
                                }(n.message, e, s) ? (n.merged || (n.callback = Ae.create([n.callback]), n.merged = true), n.callback.push(t)) : this.queuedMessages.push(new sn(e, t));
                            }
                            sendQueuedMessages() {
                                let e;
                                for (C.logAction(C.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages"); e = this.queuedMessages.shift();) this.sendImpl(e);
                            }
                            queuePendingMessages(e) {
                                e && e.length && (C.logAction(C.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + e.length + " pending messages"), this.queuedMessages.prepend(e));
                            }
                            failQueuedMessages(e) {
                                const t = this.queuedMessages.count();
                                t > 0 && (C.logAction(C.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + t + " queued messages, err = " + K(e)), this.queuedMessages.completeAllMessages(e));
                            }
                            onChannelMessage(e, t) {
                                this.pendingChannelMessagesState.queue.push({
                                    message: e,
                                    transport: t
                                }), this.pendingChannelMessagesState.isProcessing || this.processNextPendingChannelMessage();
                            }
                            processNextPendingChannelMessage() {
                                if (this.pendingChannelMessagesState.queue.length > 0) {
                                    this.pendingChannelMessagesState.isProcessing = true;
                                    const e = this.pendingChannelMessagesState.queue.shift();
                                    this.processChannelMessage(e.message).catch(e => {
                                        C.logAction(C.LOG_ERROR, "ConnectionManager.processNextPendingChannelMessage() received error ", e);
                                    }).finally(() => {
                                        this.pendingChannelMessagesState.isProcessing = false, this.processNextPendingChannelMessage();
                                    });
                                }
                            }
                            async processChannelMessage(e) {
                                await this.realtime.channels.processChannelMessage(e);
                            }
                            ping(e, t) {
                                if (e) {
                                    C.logAction(C.LOG_MINOR, "ConnectionManager.ping()", "transport = " + e);
                                    const n = function() {
                                            e.off("heartbeat", i), t(new O("Timeout waiting for heartbeat response", 5e4, 500));
                                        },
                                        s = Date.now(),
                                        r = String(Math.random()).substr(2),
                                        i = function(n) {
                                            if (n === r) {
                                                e.off("heartbeat", i), clearTimeout(o);
                                                const n = Date.now() - s;
                                                t(null, n);
                                            }
                                        },
                                        o = setTimeout(n, this.options.timeouts.realtimeRequestTimeout);
                                    return e.on("heartbeat", i), void e.ping(r);
                                }
                                if ("connected" !== this.state.state) return void t(new O("Unable to ping service; not connected", 4e4, 400));
                                let n = false;
                                const s = () => {
                                    n || (n = true, y.Config.nextTick(() => {
                                        this.ping(null, t);
                                    }));
                                };
                                this.on("transport.active", s), this.ping(this.activeProtocol.getTransport(), (e, r) => {
                                    this.off("transport.active", s), n || (n = true, t(e, r));
                                });
                            }
                            abort(e) {
                                this.activeProtocol.getTransport().fail(e);
                            }
                            getTransportPreference() {
                                var e, t;
                                return this.transportPreference || fn() && (null == (t = null == (e = y.WebStorage) ? undefined : e.get) ? undefined : t.call(e, mn));
                            }
                            persistTransportPreference(e) {
                                var t, n;
                                this.transportPreference = e.shortName, fn() && (null == (n = null == (t = y.WebStorage) ? undefined : t.set) || n.call(t, mn, e.shortName));
                            }
                            unpersistTransportPreference() {
                                var e, t;
                                this.transportPreference = null, fn() && (null == (t = null == (e = y.WebStorage) ? undefined : e.remove) || t.call(e, mn));
                            }
                            actOnErrorFromAuthorize(e) {
                                if (40171 === e.code) this.notifyState({
                                    state: "failed",
                                    error: e
                                });
                                else if (40102 === e.code) this.notifyState({
                                    state: "failed",
                                    error: e
                                });
                                else if (e.statusCode === Ue.Forbidden) {
                                    const t = "Client configured authentication provider returned 403; failing the connection";
                                    C.logAction(C.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", t), this.notifyState({
                                        state: "failed",
                                        error: new O(t, 80019, 403, e)
                                    });
                                } else {
                                    const t = "Client configured authentication provider request failed";
                                    C.logAction(C.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", t), this.notifyState({
                                        state: this.state.failState,
                                        error: new O(t, 80019, 401, e)
                                    });
                                }
                            }
                            onConnectionDetailsUpdate(e, t) {
                                if (!e) return;
                                this.connectionDetails = e, e.maxMessageSize && (this.options.maxMessageSize = e.maxMessageSize);
                                const n = e.clientId;
                                if (n) {
                                    const e = this.realtime.auth._uncheckedSetClientId(n);
                                    if (e) return C.logAction(C.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", e.message), void t.fail(e);
                                }
                                const s = e.connectionStateTtl;
                                s && (this.connectionStateTtl = s), this.maxIdleInterval = e.maxIdleInterval, this.emit("connectiondetails", e);
                            }
                            checkWsConnectivity() {
                                const e = new y.Config.WebSocket(Ie.wsConnectivityUrl);
                                return new Promise((t, n) => {
                                    let s = false;
                                    e.onopen = () => {
                                        s || (s = true, t(), e.close());
                                    }, e.onclose = e.onerror = () => {
                                        s || (s = true, n());
                                    };
                                });
                            }
                        },
                        Rn = class extends jt {
                            constructor(e, t) {
                                super(), this.whenState = e => jt.prototype.whenState.call(this, e, this.state), this.ably = e, this.connectionManager = new wn(e, t), this.state = this.connectionManager.state.state, this.key = undefined, this.id = undefined, this.errorReason = null, this.connectionManager.on("connectionstate", e => {
                                    const t = this.state = e.current;
                                    y.Config.nextTick(() => {
                                        this.emit(t, e);
                                    });
                                }), this.connectionManager.on("update", e => {
                                    y.Config.nextTick(() => {
                                        this.emit("update", e);
                                    });
                                });
                            }
                            connect() {
                                C.logAction(C.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({
                                    state: "connecting"
                                });
                            }
                            async ping() {
                                return C.logAction(C.LOG_MINOR, "Connection.ping()", ""), new Promise((e, t) => {
                                    this.connectionManager.ping(null, (n, s) => n ? t(n) : e(s));
                                });
                            }
                            close() {
                                C.logAction(C.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({
                                    state: "closing"
                                });
                            }
                            get recoveryKey() {
                                return C.deprecationWarning("The `Connection.recoveryKey` attribute has been replaced by the `Connection.createRecoveryKey()` method. Replace your usage of `recoveryKey` with the return value of `createRecoveryKey()`. `recoveryKey` will be removed in a future version."), this.createRecoveryKey();
                            }
                            createRecoveryKey() {
                                return this.connectionManager.createRecoveryKey();
                            }
                        },
                        Cn = class {
                            constructor(e, t, n, s, r) {
                                this.previous = e, this.current = t, "attached" === t && (this.resumed = n, this.hasBacklog = s), r && (this.reason = r);
                            }
                        },
                        Tn = function() {};

                    function Ln(e) {
                        const t = e || {},
                            {
                                agent: n
                            } = t;
                        return ((e, t) => {
                            var n = {};
                            for (var s in e) u.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
                            if (null != e && l)
                                for (var s of l(e)) t.indexOf(s) < 0 && h.call(e, s) && (n[s] = e[s]);
                            return n;
                        })(t, ["agent"]);
                    }
                    var On = class e extends jt {
                            constructor(e, t, n) {
                                var s;
                                super(), this.retryCount = 0, this.history = async function(e) {
                                    C.logAction(C.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name);
                                    const t = this.client.rest.channelMixin;
                                    if (e && e.untilAttach) {
                                        if ("attached" !== this.state) throw new O("option untilAttach requires the channel to be attached", 4e4, 400);
                                        if (!this.properties.attachSerial) throw new O("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400);
                                        delete e.untilAttach, e.from_serial = this.properties.attachSerial;
                                    }
                                    return t.history(this, e);
                                }, this.whenState = e => jt.prototype.whenState.call(this, e, this.state), C.logAction(C.LOG_MINOR, "RealtimeChannel()", "started; name = " + t), this.name = t, this.channelOptions = _e(null != (s = e._Crypto) ? s : null, n), this.client = e, this._presence = e._RealtimePresence ? new e._RealtimePresence.RealtimePresence(this) : null, this.connectionManager = e.connection.connectionManager, this.state = "initialized", this.subscriptions = new jt, this.syncChannelSerial = undefined, this.properties = {
                                    attachSerial: undefined,
                                    channelSerial: undefined
                                }, this.setOptions(n), this.errorReason = null, this._requestedFlags = null, this._mode = null, this._attachResume = false, this._decodingContext = {
                                    channelOptions: this.channelOptions,
                                    plugins: e.options.plugins || {},
                                    baseEncodedPreviousPayload: undefined
                                }, this._lastPayload = {
                                    messageId: null,
                                    protocolMessageChannelSerial: null,
                                    decodeFailureRecoveryInProgress: null
                                }, this._allChannelChanges = new jt;
                            }
                            get presence() {
                                return this._presence || be("RealtimePresence"), this._presence;
                            }
                            invalidStateError() {
                                return new O("Channel operation failed as channel state is " + this.state, 90001, 400, this.errorReason || undefined);
                            }
                            static processListenerArgs(e) {
                                return "function" == typeof(e = Array.prototype.slice.call(e))[0] && e.unshift(null), e;
                            }
                            async setOptions(e) {
                                var t;
                                const n = this.channelOptions,
                                    s = function(e) {
                                        if (e && "params" in e && !("[object Object]" == Object.prototype.toString.call(e.params))) return new O("options.params must be an object", 4e4, 400);
                                        if (e && "modes" in e) {
                                            if (!Array.isArray(e.modes)) return new O("options.modes must be an array", 4e4, 400);
                                            for (let t = 0; t < e.modes.length; t++) {
                                                const n = e.modes[t];
                                                if (!n || "string" != typeof n || !Wt.includes(String.prototype.toUpperCase.call(n))) return new O("Invalid channel mode: " + n, 4e4, 400);
                                            }
                                        }
                                    }(e);
                                if (s) throw s;
                                if (this.channelOptions = _e(null != (t = this.client._Crypto) ? t : null, e), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(e, n)) return this.attachImpl(), new Promise((e, t) => {
                                    this._allChannelChanges.once(["attached", "update", "detached", "failed"], function(n) {
                                        switch (this.event) {
                                            case "update":
                                            case "attached":
                                                e();
                                                break;
                                            default:
                                                t(n.reason);
                                        }
                                    });
                                });
                            }
                            _shouldReattachToSetOptions(e, t) {
                                if ("attached" !== this.state && "attaching" !== this.state) return false;
                                if (null == e ? undefined : e.params) {
                                    const n = Ln(e.params),
                                        s = Ln(t.params);
                                    if (Object.keys(n).length !== Object.keys(s).length) return true;
                                    if (!(Object.keys(s).every(n => s[n] === n[n]) && Object.keys(n).every(n => n[n] === s[n]))) return true;
                                }
                                return !(!(null == e ? undefined : e.modes) || t.modes && me(e.modes, t.modes));
                            }
                            async publish(...e) {
                                let t = e[0],
                                    n = e.length;
                                if (!this.connectionManager.activeState()) throw this.connectionManager.getError();
                                if (1 == n)
                                    if ("[object Object]" == Object.prototype.toString.call(t)) t = [Object.assign(new gt, t)];
                                    else {
                                        if (!Array.isArray(t)) throw new O("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                                        t = ft(t);
                                    }
                                else t = [Object.assign(new gt, {
                                    name: e[0],
                                    data: e[1]
                                })];
                                const s = this.client.options.maxMessageSize;
                                await Promise.all(t.map(e => ct(t, this.channelOptions)));
                                const r = pt(t);
                                if (r > s) throw new O("Maximum size of messages that can be published at once exceeded ( was " + r + " bytes; limit is " + s + " bytes)", 40009, 400);
                                return new Promise((e, n) => {
                                    this._publish(t, t => t ? n(t) : e());
                                });
                            }
                            _publish(e, t) {
                                C.logAction(C.LOG_MICRO, "RealtimeChannel.publish()", "message count = " + e.length);
                                const n = this.state;
                                switch (n) {
                                    case "failed":
                                    case "suspended":
                                        t(O.fromValues(this.invalidStateError()));
                                        break;
                                    default: {
                                        C.logAction(C.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + n);
                                        const s = new tn;
                                        s.action = $t.MESSAGE, s.channel = this.name, s.messages = e, this.sendMessage(s, t);
                                        break;
                                    }
                                }
                            }
                            onEvent(e) {
                                C.logAction(C.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
                                const t = this.subscriptions;
                                for (let n = 0; n < e.length; n++) {
                                    const s = e[n];
                                    t.emit(s.name, s);
                                }
                            }
                            async attach() {
                                return "attached" === this.state ? null : new Promise((e, t) => {
                                    this._attach(false, null, (n, s) => n ? t(n) : e(s));
                                });
                            }
                            _attach(e, t, n) {
                                n || (n = function(e) {
                                    e && C.logAction(C.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + e.toString());
                                });
                                const s = this.connectionManager;
                                s.activeState() ? (("attaching" !== this.state || e) && this.requestState("attaching", t), this.once(function(e) {
                                    switch (this.event) {
                                        case "attached":
                                            null == n || n(null, e);
                                            break;
                                        case "detached":
                                        case "suspended":
                                        case "failed":
                                            null == n || n(e.reason || s.getError() || new O("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
                                            break;
                                        case "detaching":
                                            null == n || n(new O("Attach request superseded by a subsequent detach request", 9e4, 409));
                                    }
                                })) : n(s.getError());
                            }
                            attachImpl() {
                                C.logAction(C.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
                                const e = Object.assign(new en, {
                                    action: $t.ATTACH,
                                    channel: this.name,
                                    params: this.channelOptions.params,
                                    channelSerial: this.properties.channelSerial
                                });
                                this._requestedFlags ? e.encodeModesToFlags(this._requestedFlags) : this.channelOptions.modes && e.encodeModesToFlags(ce(this.channelOptions.modes)), this._attachResume && e.setFlag("ATTACH_RESUME"), this._lastPayload.decodeFailureRecoveryInProgress && (e.channelSerial = this._lastPayload.protocolMessageChannelSerial), this.sendMessage(e, Tn);
                            }
                            async detach() {
                                const e = this.connectionManager;
                                if (!e.activeState()) throw e.getError();
                                switch (this.state) {
                                    case "suspended":
                                        return void this.notifyState("detached");
                                    case "detached":
                                        return;
                                    case "failed":
                                        throw new O("Unable to detach; channel state = failed", 90001, 400);
                                    default:
                                        this.requestState("detaching");
                                    case "detaching":
                                        return new Promise((t, n) => {
                                            this.once(function(s) {
                                                switch (this.event) {
                                                    case "detached":
                                                        t();
                                                        break;
                                                    case "attached":
                                                    case "suspended":
                                                    case "failed":
                                                        n(s.reason || e.getError() || new O("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                                                        break;
                                                    case "attaching":
                                                        n(new O("Detach request superseded by a subsequent attach request", 9e4, 409));
                                                }
                                            });
                                        });
                                }
                            }
                            detachImpl(e) {
                                C.logAction(C.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
                                const t = Object.assign(new en, {
                                    action: $t.DETACH,
                                    channel: this.name
                                });
                                this.sendMessage(t, e || Tn);
                            }
                            async subscribe(...t) {
                                const [n, s] = e.processListenerArgs(t);
                                if ("failed" === this.state) throw O.fromValues(this.invalidStateError());
                                return n && "object" == typeof n && !Array.isArray(n) ? this.client._FilteredSubscriptions.subscribeFilter(this, n, s) : this.subscriptions.on(n, s), this.attach();
                            }
                            unsubscribe(...t) {
                                var n;
                                const [s, r] = e.processListenerArgs(t);
                                "object" == typeof s && !r || (null == (n = this.filteredSubscriptions) ? undefined : n.has(r)) ? this.client._FilteredSubscriptions.getAndDeleteFilteredSubscriptions(this, s, r).forEach(e => this.subscriptions.off(e)) : this.subscriptions.off(s, r);
                            }
                            sync() {
                                switch (this.state) {
                                    case "initialized":
                                    case "detaching":
                                    case "detached":
                                        throw new _("Unable to sync to channel; not attached", 4e4);
                                }
                                const e = this.connectionManager;
                                if (!e.activeState()) throw e.getError();
                                const t = Object.assign(new en, {
                                    action: $t.SYNC,
                                    channel: this.name
                                });
                                this.syncChannelSerial && (t.channelSerial = this.syncChannelSerial), e.send(t);
                            }
                            sendMessage(e, t) {
                                this.connectionManager.send(e, this.client.options.queueMessages, t);
                            }
                            sendPresence(e, t) {
                                const n = Object.assign(new en, {
                                    action: $t.PRESENCE,
                                    channel: this.name,
                                    presence: Array.isArray(e) ? this.client._RealtimePresence.presenceMessagesFromValuesArray(e) : [this.client._RealtimePresence.presenceMessageFromValues(e)]
                                });
                                this.sendMessage(n, t);
                            }
                            async processMessage(e) {
                                e.action !== $t.ATTACHED && e.action !== $t.MESSAGE && e.action !== $t.PRESENCE || this.setChannelSerial(e.channelSerial);
                                let t, n = false;
                                switch (e.action) {
                                    case $t.ATTACHED: {
                                        this.properties.attachSerial = e.channelSerial, this._mode = e.getMode(), this.params = e.params || {};
                                        const t = e.decodeModesFromFlags();
                                        this.modes = t && ae(t) || undefined;
                                        const n = e.hasFlag("RESUMED"),
                                            s = e.hasFlag("HAS_PRESENCE"),
                                            r = e.hasFlag("HAS_BACKLOG");
                                        if ("attached" === this.state) {
                                            n || this._presence && this._presence.onAttached(s);
                                            const t = new Cn(this.state, this.state, n, r, e.error);
                                            this._allChannelChanges.emit("update", t), n && !this.channelOptions.updateOnAttached || this.emit("update", t);
                                        } else "detaching" === this.state ? this.checkPendingState() : this.notifyState("attached", e.error, n, s, r);
                                        break;
                                    }
                                    case $t.DETACHED: {
                                        const t = e.error ? O.fromValues(e.error) : new O("Channel detached", 90001, 404);
                                        "detaching" === this.state ? this.notifyState("detached", t) : "attaching" === this.state ? this.notifyState("suspended", t) : this.requestState("attaching", t);
                                        break;
                                    }
                                    case $t.SYNC:
                                        if (n = true, t = this.syncChannelSerial = e.channelSerial, !e.presence) break;
                                    case $t.PRESENCE: {
                                        const s = e.presence;
                                        if (!s) break;
                                        const {
                                            id: r,
                                            connectionId: i,
                                            timestamp: o
                                        } = e, a = this.channelOptions;
                                        let c;
                                        for (let e = 0; e < s.length; e++) try {
                                            c = s[e], await wt(c, a), c.connectionId || (c.connectionId = i), c.timestamp || (c.timestamp = o), c.id || (c.id = r + ":" + e);
                                        } catch (e) {
                                            C.logAction(C.LOG_ERROR, "RealtimeChannel.processMessage()", e.toString());
                                        }
                                        this._presence && this._presence.setPresence(s, n, t);
                                        break;
                                    }
                                    case $t.MESSAGE: {
                                        if ("attached" !== this.state) return void C.logAction(C.LOG_MAJOR, "RealtimeChannel.processMessage()", 'Message "' + e.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
                                        const t = e.messages,
                                            n = t[0],
                                            s = t[t.length - 1],
                                            r = e.id,
                                            i = e.connectionId,
                                            o = e.timestamp;
                                        if (n.extras && n.extras.delta && n.extras.delta.from !== this._lastPayload.messageId) {
                                            const t = 'Delta message decode failure - previous message not available for message "' + e.id + '" on this channel "' + this.name + '".';
                                            C.logAction(C.LOG_ERROR, "RealtimeChannel.processMessage()", t), this._startDecodeFailureRecovery(new O(t, 40018, 400));
                                            break;
                                        }
                                        for (let e = 0; e < t.length; e++) {
                                            const n = t[e];
                                            try {
                                                await ht(n, this._decodingContext);
                                            } catch (e) {
                                                switch (C.logAction(C.LOG_ERROR, "RealtimeChannel.processMessage()", e.toString()), e.code) {
                                                    case 40018:
                                                        return void this._startDecodeFailureRecovery(e);
                                                    case 40019:
                                                    case 40021:
                                                        return void this.notifyState("failed", e);
                                                }
                                            }
                                            n.connectionId || (n.connectionId = i), n.timestamp || (n.timestamp = o), n.id || (n.id = r + ":" + e);
                                        }
                                        this._lastPayload.messageId = s.id, this._lastPayload.protocolMessageChannelSerial = e.channelSerial, this.onEvent(t);
                                        break;
                                    }
                                    case $t.ERROR: {
                                        const t = e.error;
                                        t && 80016 == t.code ? this.checkPendingState() : this.notifyState("failed", O.fromValues(t));
                                        break;
                                    }
                                    default:
                                        C.logAction(C.LOG_ERROR, "RealtimeChannel.processMessage()", "Fatal protocol error: unrecognised action (" + e.action + ")"), this.connectionManager.abort(cn.unknownChannelErr());
                                }
                            }
                            _startDecodeFailureRecovery(e) {
                                this._lastPayload.decodeFailureRecoveryInProgress || (C.logAction(C.LOG_MAJOR, "RealtimeChannel.processMessage()", "Starting decode failure recovery process."), this._lastPayload.decodeFailureRecoveryInProgress = true, this._attach(true, e, () => {
                                    this._lastPayload.decodeFailureRecoveryInProgress = false;
                                }));
                            }
                            onAttached() {
                                C.logAction(C.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name);
                            }
                            notifyState(e, t, n, s, r) {
                                if (C.logAction(C.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + e), this.clearStateTimer(), ["detached", "suspended", "failed"].includes(e) && (this.properties.channelSerial = null), e === this.state) return;
                                this._presence && this._presence.actOnChannelState(e, s, t), "suspended" === e && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), t && (this.errorReason = t);
                                const i = new Cn(this.state, e, n, r, t),
                                    o = 'Channel state for channel "' + this.name + '"',
                                    a = e + (t ? "; reason: " + t : "");
                                "failed" === e ? C.logAction(C.LOG_ERROR, o, a) : C.logAction(C.LOG_MAJOR, o, a), "attaching" !== e && "suspended" !== e && (this.retryCount = 0), "attached" === e && this.onAttached(), "attached" === e ? this._attachResume = true : "detaching" !== e && "failed" !== e || (this._attachResume = false), this.state = e, this._allChannelChanges.emit(e, i), this.emit(e, i);
                            }
                            requestState(e, t) {
                                C.logAction(C.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + e), this.notifyState(e, t), this.checkPendingState();
                            }
                            checkPendingState() {
                                if (this.connectionManager.state.sendEvents) switch (C.logAction(C.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state), this.state) {
                                    case "attaching":
                                        this.startStateTimerIfNotRunning(), this.attachImpl();
                                        break;
                                    case "detaching":
                                        this.startStateTimerIfNotRunning(), this.detachImpl();
                                        break;
                                    case "attached":
                                        this.sync();
                                } else C.logAction(C.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state);
                            }
                            timeoutPendingState() {
                                switch (this.state) {
                                    case "attaching": {
                                        const e = new O("Channel attach timed out", 90007, 408);
                                        this.notifyState("suspended", e);
                                        break;
                                    }
                                    case "detaching": {
                                        const e = new O("Channel detach timed out", 90007, 408);
                                        this.notifyState("attached", e);
                                        break;
                                    }
                                    default:
                                        this.checkPendingState();
                                }
                            }
                            startStateTimerIfNotRunning() {
                                this.stateTimer || (this.stateTimer = setTimeout(() => {
                                    C.logAction(C.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), this.stateTimer = null, this.timeoutPendingState();
                                }, this.client.options.timeouts.realtimeRequestTimeout));
                            }
                            clearStateTimer() {
                                const e = this.stateTimer;
                                e && (clearTimeout(e), this.stateTimer = null);
                            }
                            startRetryTimer() {
                                if (this.retryTimer) return;
                                this.retryCount++;
                                const e = this.client.options.timeouts.channelRetryTimeout * Math.min((this.retryCount + 2) / 3, 2) * (1 - 0.2 * Math.random());
                                this.retryTimer = setTimeout(() => {
                                    "suspended" === this.state && this.connectionManager.state.sendEvents && (this.retryTimer = null, C.logAction(C.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), this.requestState("attaching"));
                                }, e);
                            }
                            cancelRetryTimer() {
                                this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null);
                            }
                            getReleaseErr() {
                                const e = this.state;
                                return "initialized" === e || "detached" === e || "failed" === e ? null : new O("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + e, 90001, 400);
                            }
                            setChannelSerial(e) {
                                C.logAction(C.LOG_MICRO, "RealtimeChannel.setChannelSerial()", "Updating channel serial; serial = " + e + "; previous = " + this.properties.channelSerial), e && (this.properties.channelSerial = e);
                            }
                            async status() {
                                return this.client.rest.channelMixin.status(this);
                            }
                        },
                        _n = class extends jt {
                            constructor(e) {
                                super(), this.realtime = e, this.all = Object.create(null), e.connection.connectionManager.on("transport.active", () => {
                                    this.onTransportActive();
                                });
                            }
                            channelSerials() {
                                let e = {};
                                for (const t of H(this.all, true)) {
                                    const n = this.all[t];
                                    n.properties.channelSerial && (e[t] = n.properties.channelSerial);
                                }
                                return e;
                            }
                            recoverChannels(e) {
                                for (const t of H(e, true)) this.get(t).properties.channelSerial = e[t];
                            }
                            async processChannelMessage(e) {
                                const t = e.channel;
                                if (undefined === t) return void C.logAction(C.LOG_ERROR, "Channels.processChannelMessage()", "received event unspecified channel, action = " + e.action);
                                const n = this.all[t];
                                n ? await n.processMessage(e) : C.logAction(C.LOG_ERROR, "Channels.processChannelMessage()", "received event for non-existent channel: " + t);
                            }
                            onTransportActive() {
                                for (const e in this.all) {
                                    const t = this.all[e];
                                    "attaching" === t.state || "detaching" === t.state ? t.checkPendingState() : "suspended" === t.state ? t._attach(false, null) : "attached" === t.state && t.requestState("attaching");
                                }
                            }
                            propogateConnectionInterruption(e, t) {
                                const n = ["attaching", "attached", "detaching", "suspended"],
                                    s = {
                                        closing: "detached",
                                        closed: "detached",
                                        failed: "failed",
                                        suspended: "suspended"
                                    } [e];
                                for (const e in this.all) {
                                    const r = this.all[e];
                                    n.includes(r.state) && r.notifyState(s, t);
                                }
                            }
                            get(e, t) {
                                e = String(e);
                                let n = this.all[e];
                                if (n) {
                                    if (t) {
                                        if (n._shouldReattachToSetOptions(t, n.channelOptions)) throw new O("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.", 4e4, 400);
                                        n.setOptions(t);
                                    }
                                } else n = this.all[e] = new On(this.realtime, e, t);
                                return n;
                            }
                            getDerived(e, t, n) {
                                if (t.filter) {
                                    const n = ge(t.filter),
                                        s = pe(e);
                                    e = `[filter=${n}${s.qualifierParam}]${s.channelName}`;
                                }
                                return this.get(e, n);
                            }
                            release(e) {
                                e = String(e);
                                const t = this.all[e];
                                if (!t) return;
                                const n = t.getReleaseErr();
                                if (n) throw n;
                                delete this.all[e];
                            }
                        },
                        Sn = class e extends We {
                            constructor(t) {
                                var n, s;
                                if (super(Ie.objectifyOptions(t, false, "BaseRealtime")), C.logAction(C.LOG_MINOR, "Realtime()", ""), "string" == typeof EdgeRuntime) throw new O('Ably.Realtime instance cannot be used in Vercel Edge runtime. If you are running Vercel Edge functions, please replace your "new Ably.Realtime()" with "new Ably.Rest()" and use Ably Rest API instead of the Realtime API. If you are server-rendering your application in the Vercel Edge runtime, please use the condition "if (typeof EdgeRuntime === \'string\')" to prevent instantiating Ably.Realtime instance during SSR in the Vercel Edge runtime.', 4e4, 400);
                                this._additionalTransportImplementations = e.transportImplementationsFromPlugins(this.options.plugins), this._RealtimePresence = null != (s = null == (n = this.options.plugins) ? undefined : n.RealtimePresence) ? s : null, this.connection = new Rn(this, this.options), this._channels = new _n(this), false !== this.options.autoConnect && this.connect();
                            }
                            static transportImplementationsFromPlugins(e) {
                                const t = {};
                                return (null == e ? undefined : e.WebSocketTransport) && (t[Kt.WebSocket] = e.WebSocketTransport), (null == e ? undefined : e.XHRPolling) && (t[Kt.XhrPolling] = e.XHRPolling), t;
                            }
                            get channels() {
                                return this._channels;
                            }
                            connect() {
                                C.logAction(C.LOG_MINOR, "Realtime.connect()", ""), this.connection.connect();
                            }
                            close() {
                                C.logAction(C.LOG_MINOR, "Realtime.close()", ""), this.connection.close();
                            }
                        };

                    function kn(e) {
                        const t = e.channel.client,
                            n = t.auth.clientId;
                        return (!n || "*" === n) && "connected" === t.connection.state;
                    }

                    function In(e, t) {
                        if (e.isSynthesized() || t.isSynthesized()) return e.timestamp >= t.timestamp;
                        const n = e.parseId(),
                            s = t.parseId();
                        return n.msgSerial === s.msgSerial ? n.index > s.index : n.msgSerial > s.msgSerial;
                    }
                    var An = class extends jt {
                            constructor(e, t) {
                                super(), this.presence = e, this.map = Object.create(null), this.syncInProgress = false, this.residualMembers = null, this.memberKey = t;
                            }
                            get(e) {
                                return this.map[e];
                            }
                            getClient(e) {
                                const t = this.map,
                                    n = [];
                                for (const s in t) {
                                    const r = t[s];
                                    r.clientId == e && "absent" != r.action && n.push(r);
                                }
                                return n;
                            }
                            list(e) {
                                const t = this.map,
                                    n = e && e.clientId,
                                    s = e && e.connectionId,
                                    r = [];
                                for (const e in t) {
                                    const i = t[e];
                                    "absent" !== i.action && (n && n != i.clientId || s && s != i.connectionId || r.push(i));
                                }
                                return r;
                            }
                            put(e) {
                                "enter" !== e.action && "update" !== e.action || ((e = (t && (e.action = yt[e.action]), Object.assign(new Lt, e))).action = "present");
                                const t = this.map,
                                    n = this.memberKey(e);
                                this.residualMembers && delete this.residualMembers[n];
                                const s = t[n];
                                return !(s && !In(e, s) || (t[n] = e, 0));
                            }
                            values() {
                                const e = this.map,
                                    t = [];
                                for (const n in e) {
                                    const s = e[n];
                                    "absent" != s.action && t.push(s);
                                }
                                return t;
                            }
                            remove(e) {
                                const t = this.map,
                                    n = this.memberKey(e),
                                    s = t[n];
                                return !(s && !In(e, s) || (this.syncInProgress ? ((e = (t && (e.action = yt[e.action]), Object.assign(new Lt, e))).action = "absent", t[n] = e) : delete t[n], 0));
                            }
                            startSync() {
                                const e = this.map,
                                    t = this.syncInProgress;
                                C.logAction(C.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), this.syncInProgress || (this.residualMembers = S({}, e), this.setInProgress(true));
                            }
                            endSync() {
                                const e = this.map,
                                    t = this.syncInProgress;
                                if (C.logAction(C.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), t) {
                                    for (const t in e) "absent" === e[t].action && delete e[t];
                                    this.presence._synthesizeLeaves(V(this.residualMembers));
                                    for (const t in this.residualMembers) delete e[t];
                                    this.residualMembers = null, this.setInProgress(false);
                                }
                                this.emit("sync");
                            }
                            waitSync(e) {
                                const t = this.syncInProgress;
                                C.logAction(C.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), t ? this.once("sync", e) : e();
                            }
                            clear() {
                                this.map = {}, this.setInProgress(false), this.residualMembers = null;
                            }
                            setInProgress(e) {
                                C.logAction(C.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e), this.syncInProgress = e, this.presence.syncComplete = !e;
                            }
                        },
                        En = class extends jt {
                            constructor(e) {
                                super(), this.channel = e, this.syncComplete = false, this.members = new An(this, e => e.clientId + ":" + e.connectionId), this._myMembers = new An(this, e => e.clientId), this.subscriptions = new jt, this.pendingPresence = [];
                            }
                            async enter(e) {
                                if (kn(this)) throw new O("clientId must be specified to enter a presence channel", 40012, 400);
                                return this._enterOrUpdateClient(undefined, undefined, e, "enter");
                            }
                            async update(e) {
                                if (kn(this)) throw new O("clientId must be specified to update presence data", 40012, 400);
                                return this._enterOrUpdateClient(undefined, undefined, e, "update");
                            }
                            async enterClient(e, t) {
                                return this._enterOrUpdateClient(undefined, e, t, "enter");
                            }
                            async updateClient(e, t) {
                                return this._enterOrUpdateClient(undefined, e, t, "update");
                            }
                            async _enterOrUpdateClient(e, t, n, s) {
                                const r = this.channel;
                                if (!r.connectionManager.activeState()) throw r.connectionManager.getError();
                                C.logAction(C.LOG_MICRO, "RealtimePresence." + s + "Client()", "channel = " + r.name + ", id = " + e + ", client = " + (t || "(implicit) " + this.channel.client.auth.clientId));
                                const i = Tt(n);
                                switch (i.action = s, e && (i.id = e), t && (i.clientId = t), await ct(i, r.channelOptions), r.state) {
                                    case "attached":
                                        return new Promise((e, t) => {
                                            r.sendPresence(i, n => n ? t(n) : e());
                                        });
                                    case "initialized":
                                    case "detached":
                                        r.attach();
                                    case "attaching":
                                        return new Promise((e, t) => {
                                            this.pendingPresence.push({
                                                presence: i,
                                                callback: n => n ? t(n) : e()
                                            });
                                        });
                                    default: {
                                        const e = new _("Unable to " + s + " presence channel while in " + r.state + " state", 90001);
                                        throw e.code = 90001, e;
                                    }
                                }
                            }
                            async leave(e) {
                                if (kn(this)) throw new O("clientId must have been specified to enter or leave a presence channel", 40012, 400);
                                return this.leaveClient(undefined, e);
                            }
                            async leaveClient(e, t) {
                                const n = this.channel;
                                if (!n.connectionManager.activeState()) throw n.connectionManager.getError();
                                C.logAction(C.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
                                const s = Tt(t);
                                return s.action = "leave", e && (s.clientId = e), new Promise((e, t) => {
                                    switch (n.state) {
                                        case "attached":
                                            n.sendPresence(s, n => n ? t(n) : e());
                                            break;
                                        case "attaching":
                                            this.pendingPresence.push({
                                                presence: s,
                                                callback: n => n ? t(n) : e()
                                            });
                                            break;
                                        case "initialized":
                                        case "failed": {
                                            const e = new _("Unable to leave presence channel (incompatible state)", 90001);
                                            t(e);
                                            break;
                                        }
                                        default:
                                            t(n.invalidStateError());
                                    }
                                });
                            }
                            async get(e) {
                                const t = !e || !("waitForSync" in e) || e.waitForSync;
                                return new Promise((n, s) => {
                                    function r(t) {
                                        n(e ? t.list(e) : t.values());
                                    }
                                    "suspended" !== this.channel.state ? function(e, t, n) {
                                        switch (e.state) {
                                            case "attached":
                                            case "suspended":
                                                n();
                                                break;
                                            case "initialized":
                                            case "detached":
                                            case "detaching":
                                            case "attaching":
                                                re(e.attach(), function(e) {
                                                    e ? t(e) : n();
                                                });
                                                break;
                                            default:
                                                t(O.fromValues(e.invalidStateError()));
                                        }
                                    }(this.channel, e => s(e), () => {
                                        const e = this.members;
                                        t ? e.waitSync(function() {
                                            r(e);
                                        }) : r(e);
                                    }) : t ? s(O.fromValues({
                                        statusCode: 400,
                                        code: 91005,
                                        message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                                    })) : r(this.members);
                                });
                            }
                            async history(e) {
                                C.logAction(C.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name);
                                const t = this.channel.client.rest.presenceMixin;
                                if (e && e.untilAttach) {
                                    if ("attached" !== this.channel.state) throw new O("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400);
                                    delete e.untilAttach, e.from_serial = this.channel.properties.attachSerial;
                                }
                                return t.history(this, e);
                            }
                            setPresence(e, t, n) {
                                let s, r;
                                C.logAction(C.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + n);
                                const i = this.members,
                                    o = this._myMembers,
                                    a = [],
                                    c = this.channel.connectionManager.connectionId;
                                t && (this.members.startSync(), n && (r = n.match(/^[\w-]+:(.*)$/)) && (s = r[1]));
                                for (let t = 0; t < e.length; t++) {
                                    const n = (t && (e[t].action = yt[e[t].action]), Object.assign(new Lt, e[t]));
                                    switch (n.action) {
                                        case "leave":
                                            i.remove(n) && a.push(n), n.connectionId !== c || n.isSynthesized() || o.remove(n);
                                            break;
                                        case "enter":
                                        case "present":
                                        case "update":
                                            i.put(n) && a.push(n), n.connectionId === c && o.put(n);
                                    }
                                }
                                t && !s && (i.endSync(), this.channel.syncChannelSerial = null);
                                for (let e = 0; e < a.length; e++) {
                                    const t = a[e];
                                    this.subscriptions.emit(t.action, t);
                                }
                            }
                            onAttached(e) {
                                C.logAction(C.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()), this._ensureMyMembersPresent();
                                const t = this.pendingPresence,
                                    n = t.length;
                                if (n) {
                                    this.pendingPresence = [];
                                    const e = [],
                                        s = Ae.create();
                                    C.logAction(C.LOG_MICRO, "RealtimePresence.onAttached", "sending " + n + " queued presence messages");
                                    for (let r = 0; r < n; r++) {
                                        const n = t[r];
                                        e.push(n.presence), s.push(n.callback);
                                    }
                                    this.channel.sendPresence(e, s);
                                }
                            }
                            actOnChannelState(e, t, n) {
                                switch (e) {
                                    case "attached":
                                        this.onAttached(t);
                                        break;
                                    case "detached":
                                    case "failed":
                                        this._clearMyMembers(), this.members.clear();
                                    case "suspended":
                                        this.failPendingPresence(n);
                                }
                            }
                            failPendingPresence(e) {
                                if (this.pendingPresence.length) {
                                    C.logAction(C.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + K(e));
                                    for (let t = 0; t < this.pendingPresence.length; t++) try {
                                        this.pendingPresence[t].callback(e);
                                    } catch (e) {}
                                    this.pendingPresence = [];
                                }
                            }
                            _clearMyMembers() {
                                this._myMembers.clear();
                            }
                            _ensureMyMembersPresent() {
                                const e = this._myMembers,
                                    t = e => {
                                        if (e) {
                                            const t = "Presence auto-re-enter failed: " + e.toString(),
                                                n = new O(t, 91004, 400);
                                            C.logAction(C.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", t);
                                            const s = new Cn(this.channel.state, this.channel.state, true, false, n);
                                            this.channel.emit("update", s);
                                        }
                                    };
                                for (const n in e.map) {
                                    const s = e.map[n];
                                    C.logAction(C.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + s.clientId + '" into the presence set'), re(this._enterOrUpdateClient(s.id, s.clientId, s.data, "enter"), t);
                                }
                            }
                            _synthesizeLeaves(e) {
                                const t = this.subscriptions;
                                e.forEach(function(e) {
                                    const n = (t && ({
                                        action: "leave",
                                        connectionId: e.connectionId,
                                        clientId: e.clientId,
                                        data: e.data,
                                        encoding: e.encoding,
                                        timestamp: Date.now()
                                    }.action = yt[{
                                        action: "leave",
                                        connectionId: e.connectionId,
                                        clientId: e.clientId,
                                        data: e.data,
                                        encoding: e.encoding,
                                        timestamp: Date.now()
                                    }.action]), Object.assign(new Lt, {
                                        action: "leave",
                                        connectionId: e.connectionId,
                                        clientId: e.clientId,
                                        data: e.data,
                                        encoding: e.encoding,
                                        timestamp: Date.now()
                                    }));
                                    t.emit("leave", n);
                                });
                            }
                            async subscribe(...e) {
                                const t = On.processListenerArgs(e),
                                    n = t[0],
                                    s = t[1],
                                    r = this.channel;
                                if ("failed" === r.state) throw O.fromValues(r.invalidStateError());
                                this.subscriptions.on(n, s), await r.attach();
                            }
                            unsubscribe(...e) {
                                const t = On.processListenerArgs(e),
                                    n = t[0],
                                    s = t[1];
                                this.subscriptions.off(n, s);
                            }
                        },
                        Mn = Kt.WebSocket,
                        Pn = class extends hn {
                            constructor(e, t, n) {
                                super(e, t, n), this.shortName = Mn, n.heartbeats = y.Config.useProtocolHeartbeats, this.wsHost = n.host;
                            }
                            static isAvailable() {
                                return !!y.Config.WebSocket;
                            }
                            createWebSocket(e, t) {
                                return this.uri = e + J(t), new y.Config.WebSocket(this.uri);
                            }
                            toString() {
                                return "WebSocketTransport; uri=" + this.uri;
                            }
                            connect() {
                                C.logAction(C.LOG_MINOR, "WebSocketTransport.connect()", "starting"), hn.prototype.connect.call(this);
                                const e = this,
                                    t = this.params,
                                    n = t.options,
                                    s = (n.tls ? "wss://" : "ws://") + this.wsHost + ":" + Ie.getPort(n) + "/";
                                C.logAction(C.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + s), re(this.auth.getAuthParams(), function(n, r) {
                                    if (e.isDisposed) return;
                                    let i = "";
                                    for (const e in r) i += " " + e + ": " + r[e] + ";";
                                    if (C.logAction(C.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + i + " err: " + n), n) return void e.disconnect(n);
                                    const o = t.getConnectParams(r);
                                    try {
                                        const t = e.wsConnection = e.createWebSocket(s, o);
                                        t.binaryType = y.Config.binaryType, t.onopen = function() {
                                            e.onWsOpen();
                                        }, t.onclose = function(t) {
                                            e.onWsClose(t);
                                        }, t.onmessage = function(t) {
                                            e.onWsData(t.data);
                                        }, t.onerror = function(t) {
                                            e.onWsError(t);
                                        }, t.on && t.on("ping", function() {
                                            e.onActivity();
                                        });
                                    } catch (t) {
                                        C.logAction(C.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (t.stack || t.message)), e.disconnect(t);
                                    }
                                });
                            }
                            send(e) {
                                const t = this.wsConnection;
                                if (t) try {
                                    t.send(zt(e, this.connectionManager.realtime._MsgPack, this.params.format));
                                } catch (e) {
                                    const t = "Exception from ws connection when trying to send: " + K(e);
                                    C.logAction(C.LOG_ERROR, "WebSocketTransport.send()", t), this.finish("disconnected", new O(t, 5e4, 500));
                                } else C.logAction(C.LOG_ERROR, "WebSocketTransport.send()", "No socket connection");
                            }
                            onWsData(e) {
                                C.logAction(C.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + e.length + "; type = " + typeof e);
                                try {
                                    this.onProtocolMessage((t = e, n = this.connectionManager.realtime._MsgPack, s = this.connectionManager.realtime._RealtimePresence, r = this.format, Xt(ie(t, n, r), s)));
                                } catch (e) {
                                    C.logAction(C.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + e.stack);
                                }
                                var t, n, s, r;
                            }
                            onWsOpen() {
                                C.logAction(C.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket"), this.emit("preconnect");
                            }
                            onWsClose(e) {
                                let t, n;
                                if ("object" == typeof e ? (n = e.code, t = e.wasClean || 1e3 === n) : (n = e, t = 1e3 == n), delete this.wsConnection, t) {
                                    C.logAction(C.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
                                    const e = new O("Websocket closed", 80003, 400);
                                    this.finish("disconnected", e);
                                } else {
                                    const e = "Unclean disconnection of WebSocket ; code = " + n,
                                        t = new O(e, 80003, 400);
                                    C.logAction(C.LOG_MINOR, "WebSocketTransport.onWsClose()", e), this.finish("disconnected", t);
                                }
                                this.emit("disposed");
                            }
                            onWsError(e) {
                                C.logAction(C.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + e.message), y.Config.nextTick(() => {
                                    this.disconnect(Error(e.message));
                                });
                            }
                            dispose() {
                                C.logAction(C.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = true;
                                const e = this.wsConnection;
                                e && (e.onmessage = function() {}, delete this.wsConnection, y.Config.nextTick(function() {
                                    if (C.logAction(C.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !e) throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
                                    e.close();
                                }));
                            }
                        },
                        Un = class {
                            static subscribeFilter(e, t, n) {
                                const s = e => {
                                    var s, r, i, o, a, c;
                                    const l = {
                                        name: e.name,
                                        refTimeserial: null == (r = null == (s = e.extras) ? undefined : s.ref) ? undefined : r.timeserial,
                                        refType: null == (o = null == (i = e.extras) ? undefined : i.ref) ? undefined : o.type,
                                        isRef: !!(null == (c = null == (a = e.extras) ? undefined : a.ref) ? undefined : c.timeserial),
                                        clientId: e.clientId
                                    };
                                    Object.entries(t).find(([e, t]) => undefined !== t && l[e] !== t) || n(e);
                                };
                                this.addFilteredSubscription(e, t, n, s), e.subscriptions.on(s);
                            }
                            static addFilteredSubscription(e, t, n, s) {
                                var r;
                                if (e.filteredSubscriptions || (e.filteredSubscriptions = new Map), e.filteredSubscriptions.has(n)) {
                                    const i = e.filteredSubscriptions.get(n);
                                    i.set(t, (null == (r = null == i ? undefined : i.get(t)) ? undefined : r.concat(s)) || [s]);
                                } else e.filteredSubscriptions.set(n, new Map([
                                    [t, [s]]
                                ]));
                            }
                            static getAndDeleteFilteredSubscriptions(e, t, n) {
                                if (!e.filteredSubscriptions) return [];
                                if (!n && t) return Array.from(e.filteredSubscriptions.entries()).map(([n, s]) => {
                                    var r;
                                    let i = s.get(t);
                                    return s.delete(t), 0 === s.size && (null == (r = e.filteredSubscriptions) || r.delete(n)), i;
                                }).reduce((e, t) => t ? e.concat(...t) : e, []);
                                if (!n || !e.filteredSubscriptions.has(n)) return [];
                                const s = e.filteredSubscriptions.get(n);
                                if (!t) {
                                    const t = Array.from(s.values()).reduce((e, t) => e.concat(...t), []);
                                    return e.filteredSubscriptions.delete(n), t;
                                }
                                let r = s.get(t);
                                return s.delete(t), r || [];
                            }
                        },
                        Dn = class e extends Sn {
                            constructor(t) {
                                var n;
                                const s = e._MsgPack;
                                if (!s) throw new Error("Expected DefaultRealtime._MsgPack to have been set");
                                super(Ie.objectifyOptions(t, true, "Realtime", p(f({}, Ut), {
                                    Crypto: null != (n = e.Crypto) ? n : undefined,
                                    MsgPack: s,
                                    RealtimePresence: {
                                        RealtimePresence: En,
                                        presenceMessageFromValues: vt,
                                        presenceMessagesFromValuesArray: Ct
                                    },
                                    WebSocketTransport: Pn,
                                    MessageInteractions: Un
                                })));
                            }
                            static get Crypto() {
                                if (null === this._Crypto) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                                return this._Crypto;
                            }
                            static set Crypto(e) {
                                this._Crypto = e;
                            }
                        };
                    Dn.Utils = T, Dn.ConnectionManager = wn, Dn.ProtocolMessage = tn, Dn._Crypto = null, Dn.Message = Dt, Dn.PresenceMessage = Nt, Dn._MsgPack = null, Dn._Http = Ve;
                    var Nn = Dn,
                        Bn = Uint8Array,
                        xn = Uint32Array,
                        Gn = Math.pow,
                        jn = new xn(8),
                        $n = [],
                        Fn = new xn(64);
                    for (var Vn, qn, Wn = 2, zn = 0; zn < 64;) {
                        for (Vn = true, qn = 2; qn <= Wn / 2; qn++) Wn % qn == 0 && (Vn = false);
                        Vn && (zn < 8 && (jn[zn] = (Gn(Wn, 0.5) - (0 | Gn(Wn, 0.5))) * Gn(2, 32) | 0), $n[zn] = (Gn(Wn, 0.3333333333333333) - (0 | Gn(Wn, 0.3333333333333333))) * Gn(2, 32) | 0, zn++), Wn++;
                    }
                    var Xn = !!new Bn(new xn([1]).buffer)[0];

                    function Jn(e) {
                        return Xn ? e >>> 24 | (e >>> 16 & 255) << 8 | (65280 & e) << 8 | e << 24 : e;
                    }

                    function Zn(e) {
                        var t, n = jn.slice(),
                            s = e.length,
                            r = 8 * s,
                            i = 512 - (r + 64) % 512 - 1 + r + 65,
                            o = new Bn(i / 8),
                            a = new xn(o.buffer);
                        o.set(e, 0), o[s] = 128, a[a.length - 1] = Jn(r);
                        for (var c = 0; c < i / 32; c += 16) {
                            var l = n.slice();
                            for (t = 0; t < 64; t++) {
                                var u;
                                if (t < 16) u = Jn(a[c + t]);
                                else {
                                    var h = Fn[t - 15],
                                        d = Fn[t - 2];
                                    u = Fn[t - 7] + Fn[t - 16] + ((h >>> 7 | h << 25) ^ (h >>> 18 | h << 14) ^ h >>> 3) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10);
                                }
                                Fn[t] = u |= 0;
                                for (var f = ((l[4] >>> 6 | l[4] << 26) ^ (l[4] >>> 11 | l[4] << 21) ^ (l[4] >>> 25 | l[4] << 7)) + (l[4] & l[5] ^ ~l[4] & l[6]) + l[7] + u + $n[t], p = ((l[0] >>> 2 | l[0] << 30) ^ (l[0] >>> 13 | l[0] << 19) ^ (l[0] >>> 22 | l[0] << 10)) + (l[0] & l[1] ^ l[2] & (l[0] ^ l[1])), g = 7; g > 0; g--) l[g] = l[g - 1];
                                l[0] = f + p | 0, l[4] = l[4] + f | 0;
                            }
                            for (t = 0; t < 8; t++) n[t] = n[t] + l[t] | 0;
                        }
                        return new Bn(new xn(n.map(function(e) {
                            return Jn(e);
                        })).buffer);
                    }
                    var Kn, Qn = new class {
                            constructor() {
                                this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.hexCharSet = "0123456789abcdef";
                            }
                            uint8ViewToBase64(e) {
                                let t = "";
                                const n = this.base64CharSet,
                                    s = e.byteLength,
                                    r = s % 3,
                                    i = s - r;
                                let o, a, c, l, u;
                                for (let s = 0; s < i; s += 3) u = e[s] << 16 | e[s + 1] << 8 | e[s + 2], o = (16515072 & u) >> 18, a = (258048 & u) >> 12, c = (4032 & u) >> 6, l = 63 & u, t += n[o] + n[a] + n[c] + n[l];
                                return 1 == r ? (u = e[i], o = (252 & u) >> 2, a = (3 & u) << 4, t += n[o] + n[a] + "==") : 2 == r && (u = e[i] << 8 | e[i + 1], o = (64512 & u) >> 10, a = (1008 & u) >> 4, c = (15 & u) << 2, t += n[o] + n[a] + n[c] + "="), t;
                            }
                            base64ToArrayBuffer(e) {
                                const t = null == atob ? undefined : atob(e),
                                    n = t.length,
                                    s = new Uint8Array(n);
                                for (let e = 0; e < n; e++) {
                                    const n = t.charCodeAt(e);
                                    s[e] = n;
                                }
                                return s.buffer;
                            }
                            isBuffer(e) {
                                return e instanceof ArrayBuffer || ArrayBuffer.isView(e);
                            }
                            toBuffer(e) {
                                if (!ArrayBuffer) throw new Error("Can't convert to Buffer: browser does not support the necessary types");
                                if (e instanceof ArrayBuffer) return new Uint8Array(e);
                                if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer);
                                throw new Error("BufferUtils.toBuffer expected an ArrayBuffer or a view onto one");
                            }
                            toArrayBuffer(e) {
                                return e instanceof ArrayBuffer ? e : this.toBuffer(e).buffer;
                            }
                            base64Encode(e) {
                                return this.uint8ViewToBase64(this.toBuffer(e));
                            }
                            base64Decode(e) {
                                if (ArrayBuffer && y.Config.atob) return this.base64ToArrayBuffer(e);
                                throw new Error("Expected ArrayBuffer to exist and Platform.Config.atob to be configured");
                            }
                            hexEncode(e) {
                                const t = e instanceof ArrayBuffer ? e : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                                return new Uint8Array(t).reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
                            }
                            hexDecode(e) {
                                if (e.length % 2 != 0) throw new Error("Can't create a byte array from a hex string of odd length");
                                const t = new Uint8Array(e.length / 2);
                                for (let n = 0; n < t.length; n++) t[n] = parseInt(e.slice(2 * n, 2 * (n + 1)), 16);
                                return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
                            }
                            utf8Encode(e) {
                                if (y.Config.TextEncoder) return (new y.Config.TextEncoder).encode(e).buffer;
                                throw new Error("Expected TextEncoder to be configured");
                            }
                            utf8Decode(e) {
                                if (!this.isBuffer(e)) throw new Error("Expected input of utf8decode to be an arraybuffer or typed array");
                                if (TextDecoder) return (new TextDecoder).decode(e);
                                throw new Error("Expected TextDecoder to be configured");
                            }
                            areBuffersEqual(e, t) {
                                if (!e || !t) return false;
                                const n = this.toArrayBuffer(e),
                                    s = this.toArrayBuffer(t);
                                if (n.byteLength != s.byteLength) return false;
                                const r = new Uint8Array(n),
                                    i = new Uint8Array(s);
                                for (var o = 0; o < r.length; o++)
                                    if (r[o] != i[o]) return false;
                                return true;
                            }
                            byteLength(e) {
                                return e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? e.byteLength : -1;
                            }
                            arrayBufferViewToBuffer(e) {
                                return e.buffer;
                            }
                            hmacSha256(e, t) {
                                return function(e, t) {
                                    if (e.length > 64 && (e = Zn(e)), e.length < 64) {
                                        const t = new Uint8Array(64);
                                        t.set(e, 0), e = t;
                                    }
                                    for (var n = new Uint8Array(64), s = new Uint8Array(64), r = 0; r < 64; r++) n[r] = 54 ^ e[r], s[r] = 92 ^ e[r];
                                    var i = new Uint8Array(t.length + 64);
                                    i.set(n, 0), i.set(t, 64);
                                    var o = new Uint8Array(96);
                                    return o.set(s, 0), o.set(Zn(i), 64), Zn(o);
                                }(this.toBuffer(t), this.toBuffer(e));
                            }
                        },
                        es = (e => (e[e.REQ_SEND = 0] = "REQ_SEND", e[e.REQ_RECV = 1] = "REQ_RECV", e[e.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", e[e.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM", e))(es || {}),
                        ts = es;

                    function ns() {
                        return new O("No HTTP request plugin provided. Provide at least one of the FetchRequest or XHRRequest plugins.", 400, 4e4);
                    }
                    var ss = ((Kn = class {
                            constructor(e) {
                                var t;
                                this.checksInProgress = null, this.checkConnectivity = undefined, this.supportsAuthHeaders = false, this.supportsLinkHeaders = false, this.client = null != e ? e : null;
                                const n = (null == e ? undefined : e.options.connectivityCheckUrl) || Ie.connectivityCheckUrl,
                                    s = null != (t = null == e ? undefined : e.options.connectivityCheckParams) ? t : null,
                                    r = !(null == e ? undefined : e.options.connectivityCheckUrl),
                                    i = f(f({}, ss.bundledRequestImplementations), null == e ? undefined : e._additionalHTTPRequestImplementations),
                                    o = i.XHRRequest,
                                    a = i.FetchRequest,
                                    c = !(!o && !a);
                                if (!c) throw ns();
                                y.Config.xhrSupported && o ? (this.supportsAuthHeaders = true, this.Request = async function(t, n, s, r, i) {
                                    return new Promise(a => {
                                        var c;
                                        const l = o.createRequest(n, s, r, i, ts.REQ_SEND, null != (c = e && e.options.timeouts) ? c : null, t);
                                        l.once("complete", (e, t, n, s, r) => a({
                                            error: e,
                                            body: t,
                                            headers: n,
                                            unpacked: s,
                                            statusCode: r
                                        })), l.exec();
                                    });
                                }, (null == e ? undefined : e.options.disableConnectivityCheck) ? this.checkConnectivity = async function() {
                                    return true;
                                }: this.checkConnectivity = async function() {
                                    var e;
                                    C.logAction(C.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + n);
                                    const t = await this.doUri(Me.Get, n, null, null, s);
                                    let i = false;
                                    var o;
                                    return i = r ? !t.error && "yes" == (null == (e = t.body) ? undefined : e.replace(/\n/, "")) : !t.error && (o = t.statusCode) >= 200 && o < 400, C.logAction(C.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + i), i;
                                }) : y.Config.fetchSupported && a ? (this.supportsAuthHeaders = true, this.Request = async (t, n, s, r, i) => a(t, null != e ? e : null, n, s, r, i), this.checkConnectivity = async function() {
                                    var e;
                                    C.logAction(C.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + n);
                                    const t = await this.doUri(Me.Get, n, null, null, null),
                                        s = !t.error && "yes" == (null == (e = t.body) ? undefined : e.replace(/\n/, ""));
                                    return C.logAction(C.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + s), s;
                                }) : this.Request = async () => ({
                                    error: c ? new _("no supported HTTP transports available", null, 400) : ns()
                                });
                            }
                            async doUri(e, t, n, s, r) {
                                return this.Request ? this.Request(e, t, n, r, s) : {
                                    error: new _("Request invoked before assigned to", null, 500)
                                };
                            }
                            shouldFallback(e) {
                                const t = e.statusCode;
                                return 408 === t && !e.code || 400 === t && !e.code || t >= 500 && t <= 504;
                            }
                        }).methods = [Me.Get, Me.Delete, Me.Post, Me.Put, Me.Patch], Kn.methodsWithoutBody = [Me.Get, Me.Delete], Kn.methodsWithBody = [Me.Post, Me.Put, Me.Patch], Kn),
                        rs = ss,
                        is = de(),
                        os = "string" == typeof EdgeRuntime;
                    "undefined" != typeof Window || "undefined" != typeof WorkerGlobalScope || os || console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
                    var as = {
                        agent: "browser",
                        logTimestamps: true,
                        userAgent: is.navigator && is.navigator.userAgent.toString(),
                        currentUrl: is.location && is.location.href,
                        binaryType: "arraybuffer",
                        WebSocket: is.WebSocket,
                        fetchSupported: !!is.fetch,
                        xhrSupported: is.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                        allowComet: function() {
                            const e = is.location;
                            return !is.WebSocket || !e || !e.origin || e.origin.indexOf("http") > -1;
                        }(),
                        useProtocolHeartbeats: true,
                        supportsBinary: !!is.TextDecoder,
                        preferBinary: false,
                        ArrayBuffer: is.ArrayBuffer,
                        atob: is.atob,
                        nextTick: undefined !== is.setImmediate ? is.setImmediate.bind(is) : function(e) {
                            setTimeout(e, 0);
                        },
                        addEventListener: is.addEventListener,
                        inspect: JSON.stringify,
                        stringByteSize: function(e) {
                            return is.TextDecoder && (new is.TextEncoder).encode(e).length || e.length;
                        },
                        TextEncoder: is.TextEncoder,
                        TextDecoder: is.TextDecoder,
                        getRandomArrayBuffer: async function(e) {
                            const t = new Uint8Array(e);
                            return is.crypto.getRandomValues(t), t.buffer;
                        },
                        isWebworker: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
                    };

                    function cs(e) {
                        return function(e) {
                            const t = [80015, 80017, 80030];
                            return !!e.code && !$e.isTokenErr(e) && (!!t.includes(e.code) || e.code >= 4e4 && e.code < 5e4);
                        }(e) ? [Object.assign(new en, {
                            action: $t.ERROR,
                            error: e
                        })] : [Object.assign(new en, {
                            action: $t.DISCONNECTED,
                            error: e
                        })];
                    }
                    var ls = class extends hn {
                        constructor(e, t, n) {
                            super(e, t, n, true), this.onAuthUpdated = e => {
                                this.authParams = {
                                    access_token: e.token
                                };
                            }, this.stream = !("stream" in n) || n.stream, this.sendRequest = null, this.recvRequest = null, this.pendingCallback = null, this.pendingItems = null;
                        }
                        connect() {
                            C.logAction(C.LOG_MINOR, "CometTransport.connect()", "starting"), hn.prototype.connect.call(this);
                            const e = this.params,
                                t = e.options,
                                n = Ie.getHost(t, e.host),
                                s = Ie.getPort(t),
                                r = t.tls ? "https://" : "http://";
                            this.baseUri = r + n + ":" + s + "/comet/";
                            const i = this.baseUri + "connect";
                            C.logAction(C.LOG_MINOR, "CometTransport.connect()", "uri: " + i), re(this.auth.getAuthParams(), (e, t) => {
                                if (e) return void this.disconnect(e);
                                if (this.isDisposed) return;
                                this.authParams = t;
                                const n = this.params.getConnectParams(t);
                                "stream" in n && (this.stream = n.stream), C.logAction(C.LOG_MINOR, "CometTransport.connect()", "connectParams:" + J(n));
                                let s = false;
                                const r = this.recvRequest = this.createRequest(i, null, n, null, this.stream ? ts.REQ_RECV_STREAM : ts.REQ_RECV);
                                r.on("data", e => {
                                    this.recvRequest && (s || (s = true, this.emit("preconnect")), this.onData(e));
                                }), r.on("complete", e => {
                                    this.recvRequest || (e = e || new O("Request cancelled", 80003, 400)), this.recvRequest = null, s || e || (s = true, this.emit("preconnect")), this.onActivity(), e ? e.code ? this.onData(cs(e)) : this.disconnect(e) : y.Config.nextTick(() => {
                                        this.recv();
                                    });
                                }), r.exec();
                            });
                        }
                        requestClose() {
                            C.logAction(C.LOG_MINOR, "CometTransport.requestClose()"), this._requestCloseOrDisconnect(true);
                        }
                        requestDisconnect() {
                            C.logAction(C.LOG_MINOR, "CometTransport.requestDisconnect()"), this._requestCloseOrDisconnect(false);
                        }
                        _requestCloseOrDisconnect(e) {
                            const t = e ? this.closeUri : this.disconnectUri;
                            if (t) {
                                const n = this.createRequest(t, null, this.authParams, null, ts.REQ_SEND);
                                n.on("complete", t => {
                                    t && (C.logAction(C.LOG_ERROR, "CometTransport.request" + (e ? "Close()" : "Disconnect()"), "request returned err = " + K(t)), this.finish("disconnected", t));
                                }), n.exec();
                            }
                        }
                        dispose() {
                            C.logAction(C.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = true, this.recvRequest && (C.logAction(C.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", cn.disconnected()), y.Config.nextTick(() => {
                                this.emit("disposed");
                            }));
                        }
                        onConnect(e) {
                            var t;
                            if (this.isDisposed) return;
                            const n = null == (t = e.connectionDetails) ? undefined : t.connectionKey;
                            hn.prototype.onConnect.call(this, e);
                            const s = this.baseUri + n;
                            C.logAction(C.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + s), this.sendUri = s + "/send", this.recvUri = s + "/recv", this.closeUri = s + "/close", this.disconnectUri = s + "/disconnect";
                        }
                        send(e) {
                            if (this.sendRequest) return this.pendingItems = this.pendingItems || [], void this.pendingItems.push(e);
                            const t = this.pendingItems || [];
                            t.push(e), this.pendingItems = null, this.sendItems(t);
                        }
                        sendAnyPending() {
                            const e = this.pendingItems;
                            e && (this.pendingItems = null, this.sendItems(e));
                        }
                        sendItems(e) {
                            const t = this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(e), ts.REQ_SEND);
                            t.on("complete", (e, t) => {
                                e && C.logAction(C.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + K(e)), this.sendRequest = null, e ? e.code ? this.onData(cs(e)) : this.disconnect(e) : (t && this.onData(t), this.pendingItems && y.Config.nextTick(() => {
                                    this.sendRequest || this.sendAnyPending();
                                }));
                            }), t.exec();
                        }
                        recv() {
                            if (this.recvRequest) return;
                            if (!this.isConnected) return;
                            const e = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? ts.REQ_RECV_STREAM : ts.REQ_RECV_POLL);
                            e.on("data", e => {
                                this.onData(e);
                            }), e.on("complete", e => {
                                this.recvRequest = null, this.onActivity(), e ? e.code ? this.onData(cs(e)) : this.disconnect(e) : y.Config.nextTick(() => {
                                    this.recv();
                                });
                            }), e.exec();
                        }
                        onData(e) {
                            try {
                                const t = this.decodeResponse(e);
                                if (t && t.length)
                                    for (let e = 0; e < t.length; e++) this.onProtocolMessage(Xt(t[e], this.connectionManager.realtime._RealtimePresence));
                            } catch (e) {
                                C.logAction(C.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + e.stack);
                            }
                        }
                        encodeRequest(e) {
                            return JSON.stringify(e);
                        }
                        decodeResponse(e) {
                            return "string" == typeof e ? JSON.parse(e) : e;
                        }
                    };

                    function us(e, t) {
                        if (function(e, t) {
                                return ae(H(t)).includes("x-ably-errorcode");
                            }(0, t)) return e.error && O.fromValues(e.error);
                    }
                    var hs = function() {},
                        ds = 0,
                        fs = {},
                        ps = class e extends jt {
                            constructor(e, t, n, s, r, i, o) {
                                super(), (n = n || {}).rnd = String(Math.random()).substr(2), this.uri = e + J(n), this.headers = t || {}, this.body = s, this.method = o ? o.toUpperCase() : null == s ? "GET" : "POST", this.requestMode = r, this.timeouts = i, this.timedOut = false, this.requestComplete = false, this.id = String(++ds), fs[this.id] = this;
                            }
                            static createRequest(t, n, s, r, i, o, a) {
                                const c = o || Ie.TIMEOUTS;
                                return new e(t, n, S({}, s), r, i, c, a);
                            }
                            complete(e, t, n, s, r) {
                                this.requestComplete || (this.requestComplete = true, !e && t && this.emit("data", t), this.emit("complete", e, t, n, s, r), this.dispose());
                            }
                            abort() {
                                this.dispose();
                            }
                            exec() {
                                let e = this.headers;
                                const t = this.requestMode == ts.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout,
                                    n = this.timer = setTimeout(() => {
                                        this.timedOut = true, r.abort();
                                    }, t),
                                    s = this.method,
                                    r = this.xhr = new XMLHttpRequest,
                                    i = e.accept;
                                let o = this.body,
                                    a = "text";
                                i ? 0 === i.indexOf("application/x-msgpack") && (a = "arraybuffer") : e.accept = "application/json", o && (e["content-type"] || (e["content-type"] = "application/json")).indexOf("application/json") > -1 && "string" != typeof o && (o = JSON.stringify(o)), r.open(s, this.uri, true), r.responseType = a, "authorization" in e && (r.withCredentials = true);
                                for (const t in e) r.setRequestHeader(t, e[t]);
                                const c = (e, t, n, s) => {
                                    var r;
                                    let i = t + " (event type: " + e.type + ")";
                                    (null == (r = null == this ? undefined : this.xhr) ? undefined : r.statusText) && (i += ", current statusText is " + this.xhr.statusText), C.logAction(C.LOG_ERROR, "Request.on" + e.type + "()", i), this.complete(new _(i, n, s));
                                };
                                let l, u, h;
                                r.onerror = function(e) {
                                    c(e, "XHR error occurred", null, 400);
                                }, r.onabort = e => {
                                    this.timedOut ? c(e, "Request aborted due to request timeout expiring", null, 408) : c(e, "Request cancelled", null, 400);
                                }, r.ontimeout = function(e) {
                                    c(e, "Request timed out", null, 408);
                                };
                                let d = 0,
                                    f = false;
                                const p = () => {
                                        clearTimeout(n), h = u < 400, 204 != u ? l = this.requestMode == ts.REQ_RECV_STREAM && h && function(e) {
                                            return e.getResponseHeader && (e.getResponseHeader("transfer-encoding") || !e.getResponseHeader("content-length"));
                                        }(r) : this.complete(null, null, null, null, u);
                                    },
                                    g = () => {
                                        let t;
                                        try {
                                            const n = function(e, t) {
                                                return e.getResponseHeader && e.getResponseHeader(t);
                                            }(r, "content-type");
                                            if (n ? n.indexOf("application/json") >= 0 : "text" == r.responseType) {
                                                const e = "arraybuffer" === r.responseType ? y.BufferUtils.utf8Decode(r.response) : String(r.responseText);
                                                t = e.length ? JSON.parse(e) : e, f = true;
                                            } else t = r.response;
                                            undefined !== t.response ? (u = t.statusCode, h = u < 400, e = t.headers, t = t.response) : e = function(e) {
                                                const t = e.getAllResponseHeaders().trim().split("\r\n"),
                                                    n = {};
                                                for (let e = 0; e < t.length; e++) {
                                                    const s = t[e].split(":").map(e => e.trim());
                                                    n[s[0].toLowerCase()] = s[1];
                                                }
                                                return n;
                                            }(r);
                                        } catch (e) {
                                            return void this.complete(new _("Malformed response body from server: " + e.message, null, 400));
                                        }
                                        if (h || Array.isArray(t)) return void this.complete(null, t, e, f, u);
                                        let n = us(t, e);
                                        n || (n = new _("Error response received from server: " + u + " body was: " + y.Config.inspect(t), null, u)), this.complete(n, t, e, f, u);
                                    };

                                function m() {
                                    const e = r.responseText,
                                        t = e.length - 1;
                                    let n, s;
                                    for (; d < t && (n = e.indexOf("\n", d)) > -1;) s = e.slice(d, n), d = n + 1, b(s);
                                }
                                const b = e => {
                                        try {
                                            e = JSON.parse(e);
                                        } catch (e) {
                                            return void this.complete(new _("Malformed response body from server: " + e.message, null, 400));
                                        }
                                        this.emit("data", e);
                                    },
                                    v = () => {
                                        m(), this.streamComplete = true, y.Config.nextTick(() => {
                                            this.complete();
                                        });
                                    };
                                r.onreadystatechange = function() {
                                    const e = r.readyState;
                                    e < 3 || 0 !== r.status && (undefined === u && (u = r.status, p()), 3 == e && l ? m() : 4 == e && (l ? `${e}`.padStart(t ? 3 : 2, "0") : g()));
                                }, r.send(o);
                            }
                            dispose() {
                                const e = this.xhr;
                                if (e) {
                                    e.onreadystatechange = e.onerror = e.onabort = e.ontimeout = hs, this.xhr = null;
                                    const t = this.timer;
                                    t && (clearTimeout(t), this.timer = null), this.requestComplete || e.abort();
                                }
                                delete fs[this.id];
                            }
                        },
                        gs = Kt.XhrPolling,
                        ms = {
                            order: ["xhr_polling"],
                            bundledImplementations: {
                                web_socket: Pn,
                                xhr_polling: class extends ls {
                                    constructor(e, t, n) {
                                        super(e, t, n), this.shortName = gs, n.stream = false, this.shortName = gs;
                                    }
                                    static isAvailable() {
                                        return !(!y.Config.xhrSupported || !y.Config.allowComet);
                                    }
                                    toString() {
                                        return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
                                    }
                                    createRequest(e, t, n, s, r) {
                                        return ps.createRequest(e, t, n, s, r, this.timeouts);
                                    }
                                }
                            }
                        },
                        ys = "ablyjs-storage-test",
                        bs = undefined !== n.g ? n.g : "undefined" != typeof window ? window : self,
                        vs = new class {
                            constructor() {
                                try {
                                    bs.sessionStorage.setItem(ys, ys), bs.sessionStorage.removeItem(ys), this.sessionSupported = true;
                                } catch (e) {
                                    this.sessionSupported = false;
                                }
                                try {
                                    bs.localStorage.setItem(ys, ys), bs.localStorage.removeItem(ys), this.localSupported = true;
                                } catch (e) {
                                    this.localSupported = false;
                                }
                            }
                            get(e) {
                                return this._get(e, false);
                            }
                            getSession(e) {
                                return this._get(e, true);
                            }
                            remove(e) {
                                return this._remove(e, false);
                            }
                            removeSession(e) {
                                return this._remove(e, true);
                            }
                            set(e, t, n) {
                                return this._set(e, t, n, false);
                            }
                            setSession(e, t, n) {
                                return this._set(e, t, n, true);
                            }
                            _set(e, t, n, s) {
                                const r = {
                                    value: t
                                };
                                return n && (r.expires = Date.now() + n), this.storageInterface(s).setItem(e, JSON.stringify(r));
                            }
                            _get(e, t) {
                                if (t && !this.sessionSupported) throw new Error("Session Storage not supported");
                                if (!t && !this.localSupported) throw new Error("Local Storage not supported");
                                const n = this.storageInterface(t).getItem(e);
                                if (!n) return null;
                                const s = JSON.parse(n);
                                return s.expires && s.expires < Date.now() ? (this.storageInterface(t).removeItem(e), null) : s.value;
                            }
                            _remove(e, t) {
                                return this.storageInterface(t).removeItem(e);
                            }
                            storageInterface(e) {
                                return e ? bs.sessionStorage : bs.localStorage;
                            }
                        },
                        ws = {
                            connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
                            wsConnectivityUrl: "wss://ws-up.ably-realtime.com",
                            defaultTransports: [Kt.XhrPolling, Kt.WebSocket]
                        };

                    function Rs(e, t, n) {
                        for (let s = 0, r = n.length; s < r; s++) {
                            const r = n.charCodeAt(s);
                            if (r < 128) e.setUint8(t++, r >>> 0 & 127 | 0);
                            else if (r < 2048) e.setUint8(t++, r >>> 6 & 31 | 192), e.setUint8(t++, r >>> 0 & 63 | 128);
                            else if (r < 65536) e.setUint8(t++, r >>> 12 & 15 | 224), e.setUint8(t++, r >>> 6 & 63 | 128), e.setUint8(t++, r >>> 0 & 63 | 128);
                            else {
                                if (!(r < 1114112)) throw new Error("bad codepoint " + r);
                                e.setUint8(t++, r >>> 18 & 7 | 240), e.setUint8(t++, r >>> 12 & 63 | 128), e.setUint8(t++, r >>> 6 & 63 | 128), e.setUint8(t++, r >>> 0 & 63 | 128);
                            }
                        }
                    }

                    function Cs(e, t, n) {
                        let s = "";
                        for (let r = t, i = t + n; r < i; r++) {
                            const t = e.getUint8(r);
                            if (0 != (128 & t))
                                if (192 != (224 & t))
                                    if (224 != (240 & t)) {
                                        if (240 != (248 & t)) throw new Error("Invalid byte " + t.toString(16));
                                        s += String.fromCharCode((7 & t) << 18 | (63 & e.getUint8(++r)) << 12 | (63 & e.getUint8(++r)) << 6 | (63 & e.getUint8(++r)) << 0);
                                    } else s += String.fromCharCode((15 & t) << 12 | (63 & e.getUint8(++r)) << 6 | (63 & e.getUint8(++r)) << 0);
                            else s += String.fromCharCode((15 & t) << 6 | 63 & e.getUint8(++r));
                            else s += String.fromCharCode(t);
                        }
                        return s;
                    }

                    function Ts(e) {
                        let t = 0;
                        for (let n = 0, s = e.length; n < s; n++) {
                            const s = e.charCodeAt(n);
                            if (s < 128) t += 1;
                            else if (s < 2048) t += 2;
                            else if (s < 65536) t += 3;
                            else {
                                if (!(s < 1114112)) throw new Error("bad codepoint " + s);
                                t += 4;
                            }
                        }
                        return t;
                    }
                    var Ls = 4294967296,
                        Os = 1 / Ls,
                        _s = class {
                            constructor(e, t) {
                                this.map = e => {
                                    const t = {};
                                    for (let n = 0; n < e; n++) t[this.parse()] = this.parse();
                                    return t;
                                }, this.bin = e => {
                                    const t = new ArrayBuffer(e);
                                    return new Uint8Array(t).set(new Uint8Array(this.view.buffer, this.offset, e), 0), this.offset += e, t;
                                }, this.buf = this.bin, this.str = e => {
                                    const t = Cs(this.view, this.offset, e);
                                    return this.offset += e, t;
                                }, this.array = e => {
                                    const t = new Array(e);
                                    for (let n = 0; n < e; n++) t[n] = this.parse();
                                    return t;
                                }, this.ext = e => (this.offset += e, {
                                    type: this.view.getInt8(this.offset),
                                    data: this.buf(e)
                                }), this.parse = () => {
                                    const e = this.view.getUint8(this.offset);
                                    let t, n;
                                    if (0 == (128 & e)) return this.offset++, e;
                                    if (128 == (240 & e)) return n = 15 & e, this.offset++, this.map(n);
                                    if (144 == (240 & e)) return n = 15 & e, this.offset++, this.array(n);
                                    if (160 == (224 & e)) return n = 31 & e, this.offset++, this.str(n);
                                    if (224 == (224 & e)) return t = this.view.getInt8(this.offset), this.offset++, t;
                                    switch (e) {
                                        case 192:
                                            return this.offset++, null;
                                        case 193:
                                            return void this.offset++;
                                        case 194:
                                            return this.offset++, false;
                                        case 195:
                                            return this.offset++, true;
                                        case 196:
                                            return n = this.view.getUint8(this.offset + 1), this.offset += 2, this.bin(n);
                                        case 197:
                                            return n = this.view.getUint16(this.offset + 1), this.offset += 3, this.bin(n);
                                        case 198:
                                            return n = this.view.getUint32(this.offset + 1), this.offset += 5, this.bin(n);
                                        case 199:
                                            return n = this.view.getUint8(this.offset + 1), this.offset += 2, this.ext(n);
                                        case 200:
                                            return n = this.view.getUint16(this.offset + 1), this.offset += 3, this.ext(n);
                                        case 201:
                                            return n = this.view.getUint32(this.offset + 1), this.offset += 5, this.ext(n);
                                        case 202:
                                            return t = this.view.getFloat32(this.offset + 1), this.offset += 5, t;
                                        case 203:
                                            return t = this.view.getFloat64(this.offset + 1), this.offset += 9, t;
                                        case 204:
                                            return t = this.view.getUint8(this.offset + 1), this.offset += 2, t;
                                        case 205:
                                            return t = this.view.getUint16(this.offset + 1), this.offset += 3, t;
                                        case 206:
                                            return t = this.view.getUint32(this.offset + 1), this.offset += 5, t;
                                        case 207:
                                            return t = function(e, t) {
                                                return t = t || 0, e.getUint32(t) * Ls + e.getUint32(t + 4);
                                            }(this.view, this.offset + 1), this.offset += 9, t;
                                        case 208:
                                            return t = this.view.getInt8(this.offset + 1), this.offset += 2, t;
                                        case 209:
                                            return t = this.view.getInt16(this.offset + 1), this.offset += 3, t;
                                        case 210:
                                            return t = this.view.getInt32(this.offset + 1), this.offset += 5, t;
                                        case 211:
                                            return t = function(e, t) {
                                                return t = t || 0, e.getInt32(t) * Ls + e.getUint32(t + 4);
                                            }(this.view, this.offset + 1), this.offset += 9, t;
                                        case 212:
                                            return n = 1, this.offset++, this.ext(n);
                                        case 213:
                                            return n = 2, this.offset++, this.ext(n);
                                        case 214:
                                            return n = 4, this.offset++, this.ext(n);
                                        case 215:
                                            return n = 8, this.offset++, this.ext(n);
                                        case 216:
                                            return n = 16, this.offset++, this.ext(n);
                                        case 217:
                                            return n = this.view.getUint8(this.offset + 1), this.offset += 2, this.str(n);
                                        case 218:
                                            return n = this.view.getUint16(this.offset + 1), this.offset += 3, this.str(n);
                                        case 219:
                                            return n = this.view.getUint32(this.offset + 1), this.offset += 5, this.str(n);
                                        case 220:
                                            return n = this.view.getUint16(this.offset + 1), this.offset += 3, this.array(n);
                                        case 221:
                                            return n = this.view.getUint32(this.offset + 1), this.offset += 5, this.array(n);
                                        case 222:
                                            return n = this.view.getUint16(this.offset + 1), this.offset += 3, this.map(n);
                                        case 223:
                                            return n = this.view.getUint32(this.offset + 1), this.offset += 5, this.map(n);
                                    }
                                    throw new Error("Unknown type 0x" + e.toString(16));
                                }, this.offset = t || 0, this.view = e;
                            }
                        };

                    function Ss(e, t) {
                        return Object.keys(e).filter(function(n) {
                            const s = e[n];
                            return !(t && null == s || "function" == typeof s && !s.toJSON);
                        });
                    }

                    function ks(e, t, n, s) {
                        const r = typeof e;
                        if ("string" == typeof e) {
                            const s = Ts(e);
                            if (s < 32) return t.setUint8(n, 160 | s), Rs(t, n + 1, e), 1 + s;
                            if (s < 256) return t.setUint8(n, 217), t.setUint8(n + 1, s), Rs(t, n + 2, e), 2 + s;
                            if (s < 65536) return t.setUint8(n, 218), t.setUint16(n + 1, s), Rs(t, n + 3, e), 3 + s;
                            if (s < 4294967296) return t.setUint8(n, 219), t.setUint32(n + 1, s), Rs(t, n + 5, e), 5 + s;
                        }
                        if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
                            const s = e.byteLength;
                            if (s < 256) return t.setUint8(n, 196), t.setUint8(n + 1, s), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 2), 2 + s;
                            if (s < 65536) return t.setUint8(n, 197), t.setUint16(n + 1, s), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 3), 3 + s;
                            if (s < 4294967296) return t.setUint8(n, 198), t.setUint32(n + 1, s), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 5), 5 + s;
                        }
                        if ("number" == typeof e) {
                            if (Math.floor(e) !== e) return t.setUint8(n, 203), t.setFloat64(n + 1, e), 9;
                            if (e >= 0) {
                                if (e < 128) return t.setUint8(n, e), 1;
                                if (e < 256) return t.setUint8(n, 204), t.setUint8(n + 1, e), 2;
                                if (e < 65536) return t.setUint8(n, 205), t.setUint16(n + 1, e), 3;
                                if (e < 4294967296) return t.setUint8(n, 206), t.setUint32(n + 1, e), 5;
                                if (e < 0x10000000000000000) return t.setUint8(n, 207),
                                    function(e, t, n) {
                                        n < 0x10000000000000000 ? (e.setUint32(t, Math.floor(n * Os)), e.setInt32(t + 4, -1 & n)) : (e.setUint32(t, 4294967295), e.setUint32(t + 4, 4294967295));
                                    }(t, n + 1, e), 9;
                                throw new Error("Number too big 0x" + e.toString(16));
                            }
                            if (e >= -32) return t.setInt8(n, e), 1;
                            if (e >= -128) return t.setUint8(n, 208), t.setInt8(n + 1, e), 2;
                            if (e >= -32768) return t.setUint8(n, 209), t.setInt16(n + 1, e), 3;
                            if (e >= -2147483648) return t.setUint8(n, 210), t.setInt32(n + 1, e), 5;
                            if (e >= -0x8000000000000000) return t.setUint8(n, 211),
                                function(e, t, n) {
                                    n < 0x8000000000000000 ? (e.setInt32(t, Math.floor(n * Os)), e.setInt32(t + 4, -1 & n)) : (e.setUint32(t, 2147483647), e.setUint32(t + 4, 2147483647));
                                }(t, n + 1, e), 9;
                            throw new Error("Number too small -0x" + (-e).toString(16).substr(1));
                        }
                        if ("undefined" === r) return s ? 0 : (t.setUint8(n, 212), t.setUint8(n + 1, 0), t.setUint8(n + 2, 0), 3);
                        if (null === e) return s ? 0 : (t.setUint8(n, 192), 1);
                        if ("boolean" === r) return t.setUint8(n, e ? 195 : 194), 1;
                        if ("function" == typeof e.toJSON) return ks(e.toJSON(), t, n, s);
                        if ("object" === r) {
                            let r, i, o = 0;
                            const a = Array.isArray(e);
                            if (a ? r = e.length : (i = Ss(e, s), r = i.length), r < 16 ? (t.setUint8(n, r | (a ? 144 : 128)), o = 1) : r < 65536 ? (t.setUint8(n, a ? 220 : 222), t.setUint16(n + 1, r), o = 3) : r < 4294967296 && (t.setUint8(n, a ? 221 : 223), t.setUint32(n + 1, r), o = 5), a)
                                for (let i = 0; i < r; i++) o += ks(e[i], t, n + o, s);
                            else if (i)
                                for (let a = 0; a < r; a++) {
                                    const r = i[a];
                                    o += ks(r, t, n + o), o += ks(e[r], t, n + o, s);
                                }
                            return o;
                        }
                        if ("function" === r) return 0;
                        throw new Error("Unknown type " + r);
                    }

                    function Is(e, t) {
                        const n = typeof e;
                        if ("string" === n) {
                            const t = Ts(e);
                            if (t < 32) return 1 + t;
                            if (t < 256) return 2 + t;
                            if (t < 65536) return 3 + t;
                            if (t < 4294967296) return 5 + t;
                        }
                        if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
                            const t = e.byteLength;
                            if (t < 256) return 2 + t;
                            if (t < 65536) return 3 + t;
                            if (t < 4294967296) return 5 + t;
                        }
                        if ("number" == typeof e) {
                            if (Math.floor(e) !== e) return 9;
                            if (e >= 0) {
                                if (e < 128) return 1;
                                if (e < 256) return 2;
                                if (e < 65536) return 3;
                                if (e < 4294967296) return 5;
                                if (e < 0x10000000000000000) return 9;
                                throw new Error("Number too big 0x" + e.toString(16));
                            }
                            if (e >= -32) return 1;
                            if (e >= -128) return 2;
                            if (e >= -32768) return 3;
                            if (e >= -2147483648) return 5;
                            if (e >= -0x8000000000000000) return 9;
                            throw new Error("Number too small -0x" + e.toString(16).substr(1));
                        }
                        if ("boolean" === n) return 1;
                        if (null === e) return t ? 0 : 1;
                        if (undefined === e) return t ? 0 : 3;
                        if ("function" == typeof e.toJSON) return Is(e.toJSON(), t);
                        if ("object" === n) {
                            let n, s = 0;
                            if (Array.isArray(e)) {
                                n = e.length;
                                for (let r = 0; r < n; r++) s += Is(e[r], t);
                            } else {
                                const r = Ss(e, t);
                                n = r.length;
                                for (let i = 0; i < n; i++) {
                                    const n = r[i];
                                    s += Is(n) + Is(e[n], t);
                                }
                            }
                            if (n < 16) return 1 + s;
                            if (n < 65536) return 3 + s;
                            if (n < 4294967296) return 5 + s;
                            throw new Error("Array or object too long 0x" + n.toString(16));
                        }
                        if ("function" === n) return 0;
                        throw new Error("Unknown type " + n);
                    }
                    var As, Es = {
                            encode: function(e, t) {
                                const n = Is(e, t);
                                if (0 === n) return;
                                const s = new ArrayBuffer(n);
                                return ks(e, new DataView(s), 0, t), s;
                            },
                            decode: function(e) {
                                const t = new DataView(e),
                                    n = new _s(t),
                                    s = n.parse();
                                if (n.offset !== e.byteLength) throw new Error(e.byteLength - n.offset + " trailing bytes");
                                return s;
                            },
                            inspect: function(e) {
                                if (undefined === e) return "undefined";
                                let t, n;
                                if (e instanceof ArrayBuffer ? (n = "ArrayBuffer", t = new DataView(e)) : e instanceof DataView && (n = "DataView", t = e), !t) return JSON.stringify(e);
                                const s = [];
                                for (let n = 0; n < e.byteLength; n++) {
                                    if (n > 20) {
                                        s.push("...");
                                        break;
                                    }
                                    let e = t.getUint8(n).toString(16);
                                    1 === e.length && (e = "0" + e), s.push(e);
                                }
                                return "<" + n + " " + s.join(" ") + ">";
                            },
                            utf8Write: Rs,
                            utf8Read: Cs,
                            utf8ByteCount: Ts
                        },
                        Ms = {
                            XHRRequest: ps,
                            FetchRequest: async function(e, t, n, s, r, i) {
                                const o = new Headers(s || {}),
                                    a = e ? e.toUpperCase() : null == i ? "GET" : "POST",
                                    c = new AbortController;
                                let l;
                                const u = new Promise(e => {
                                        l = setTimeout(() => {
                                            c.abort(), e({
                                                error: new _("Request timed out", null, 408)
                                            });
                                        }, t ? t.options.timeouts.httpRequestTimeout : Ie.TIMEOUTS.httpRequestTimeout);
                                    }),
                                    h = {
                                        method: a,
                                        headers: o,
                                        body: i,
                                        signal: c.signal
                                    };
                                y.Config.isWebworker || (h.credentials = o.has("authorization") ? "include" : "same-origin");
                                const d = (async () => {
                                    try {
                                        const e = await de().fetch(n + "?" + new URLSearchParams(r || {}), h);
                                        clearTimeout(l);
                                        const t = e.headers.get("Content-Type");
                                        let s;
                                        s = t && t.indexOf("application/x-msgpack") > -1 ? await e.arrayBuffer() : t && t.indexOf("application/json") > -1 ? await e.json() : await e.text();
                                        const i = !!t && -1 === t.indexOf("application/x-msgpack"),
                                            o = function(e) {
                                                const t = {};
                                                return e.forEach((e, n) => {
                                                    t[n] = e;
                                                }), t;
                                            }(e.headers);
                                        if (e.ok) return {
                                            error: null,
                                            body: s,
                                            headers: o,
                                            unpacked: i,
                                            statusCode: e.status
                                        };
                                        {
                                            const t = function(e, t) {
                                                if (function(e, t) {
                                                        return !!t.get("x-ably-errorcode");
                                                    }(0, t)) return e.error && O.fromValues(e.error);
                                            }(s, e.headers) || new _("Error response received from server: " + e.status + " body was: " + y.Config.inspect(s), null, e.status);
                                            return {
                                                error: t,
                                                body: s,
                                                headers: o,
                                                unpacked: i,
                                                statusCode: e.status
                                            };
                                        }
                                    } catch (e) {
                                        return clearTimeout(l), {
                                            error: e
                                        };
                                    }
                                })();
                                return Promise.race([u, d]);
                            }
                        },
                        Ps = function(e, t) {
                            class n {
                                constructor(e, t, n, s) {
                                    this.algorithm = e, this.keyLength = t, this.mode = n, this.key = s;
                                }
                            }
                            class s {
                                static getDefaultParams(e) {
                                    var s;
                                    if (!e.key) throw new Error("Crypto.getDefaultParams: a key is required");
                                    s = "string" == typeof e.key ? t.toArrayBuffer(t.base64Decode(e.key.replace("_", "/").replace("-", "+"))) : e.key instanceof ArrayBuffer ? e.key : t.toArrayBuffer(e.key);
                                    var r = e.algorithm || "aes",
                                        i = 8 * s.byteLength,
                                        o = e.mode || "cbc",
                                        a = new n(r, i, o, s);
                                    if (e.keyLength && e.keyLength !== a.keyLength) throw new Error("Crypto.getDefaultParams: a keyLength of " + e.keyLength + " was specified, but the key actually has length " + a.keyLength);
                                    return function(e) {
                                        if ("aes" === e.algorithm && "cbc" === e.mode) {
                                            if (128 === e.keyLength || 256 === e.keyLength) return;
                                            throw new Error("Unsupported key length " + e.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)");
                                        }
                                    }(a), a;
                                }
                                static async generateRandomKey(t) {
                                    try {
                                        return e.getRandomArrayBuffer((t || 256) / 8);
                                    } catch (e) {
                                        throw new O("Failed to generate random key: " + e.message, 400, 5e4, e);
                                    }
                                }
                                static getCipher(e) {
                                    var t, s = function(e) {
                                        return e instanceof n;
                                    }(e) ? e : this.getDefaultParams(e);
                                    return {
                                        cipherParams: s,
                                        cipher: new r(s, null != (t = e.iv) ? t : null)
                                    };
                                }
                            }
                            s.CipherParams = n;
                            class r {
                                constructor(e, n) {
                                    if (!crypto.subtle) throw isSecureContext ? new Error("Crypto operations are not possible since the browser’s SubtleCrypto class is unavailable (reason unknown).") : new Error("Crypto operations are is not possible since the current environment is a non-secure context and hence the browser’s SubtleCrypto class is not available.");
                                    this.algorithm = e.algorithm + "-" + String(e.keyLength) + "-" + e.mode, this.webCryptoAlgorithm = e.algorithm + "-" + e.mode, this.key = t.toArrayBuffer(e.key), this.iv = n ? t.toArrayBuffer(n) : null;
                                }
                                concat(e, n) {
                                    const s = new ArrayBuffer(e.byteLength + n.byteLength),
                                        r = new DataView(s),
                                        i = new DataView(t.toArrayBuffer(e));
                                    for (let e = 0; e < i.byteLength; e++) r.setInt8(e, i.getInt8(e));
                                    const o = new DataView(t.toArrayBuffer(n));
                                    for (let e = 0; e < o.byteLength; e++) r.setInt8(i.byteLength + e, o.getInt8(e));
                                    return s;
                                }
                                async encrypt(e) {
                                    C.logAction(C.LOG_MICRO, "CBCCipher.encrypt()", "");
                                    const t = await this.getIv(),
                                        n = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, false, ["encrypt"]),
                                        s = await crypto.subtle.encrypt({
                                            name: this.webCryptoAlgorithm,
                                            iv: t
                                        }, n, e);
                                    return this.concat(t, s);
                                }
                                async decrypt(e) {
                                    C.logAction(C.LOG_MICRO, "CBCCipher.decrypt()", "");
                                    const n = t.toArrayBuffer(e),
                                        s = n.slice(0, 16),
                                        r = n.slice(16),
                                        i = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, false, ["decrypt"]);
                                    return crypto.subtle.decrypt({
                                        name: this.webCryptoAlgorithm,
                                        iv: s
                                    }, i, r);
                                }
                                async getIv() {
                                    if (this.iv) {
                                        var n = this.iv;
                                        return this.iv = null, n;
                                    }
                                    const s = await e.getRandomArrayBuffer(16);
                                    return t.toArrayBuffer(s);
                                }
                            }
                            return s;
                        }(as, Qn);
                    y.Crypto = Ps, y.BufferUtils = Qn, y.Http = rs, y.Config = as, y.Transports = ms, y.WebStorage = vs;
                    for (const e of [xt, Nn]) e.Crypto = Ps, e._MsgPack = Es;
                    rs.bundledRequestImplementations = Ms, C.initLogHandlers(), y.Defaults = (As = ws, Object.assign(we, As)), y.Config.agent && (y.Defaults.agent += " " + y.Config.agent);
                    var Us = {
                        ErrorInfo: O,
                        Rest: xt,
                        Realtime: Nn,
                        msgpack: Es
                    };
                    return "object" == typeof s.exports && "object" == typeof t && (s.exports = ((e, t, n, s) => {
                        if (t && "object" == typeof t || "function" == typeof t)
                            for (let r of Object.getOwnPropertyNames(t)) Object.prototype.hasOwnProperty.call(e, r) || r === n || Object.defineProperty(e, r, {
                                get: () => t[r],
                                enumerable: !(s = Object.getOwnPropertyDescriptor(t, r)) || s.enumerable
                            });
                        return e;
                    })(s.exports, t)), s.exports;
                }, e.exports = s();
            },
            7526: (e, t) => {
                "use strict";
                t.byteLength = function(e) {
                    var t = a(e),
                        n = t[0],
                        s = t[1];
                    return 3 * (n + s) / 4 - s;
                }, t.toByteArray = function(e) {
                    var t, n, i = a(e),
                        o = i[0],
                        c = i[1],
                        l = new r(function(e, t, n) {
                            return 3 * (t + n) / 4 - n;
                        }(0, o, c)),
                        u = 0,
                        h = c > 0 ? o - 4 : o;
                    for (n = 0; n < h; n += 4) t = s[e.charCodeAt(n)] << 18 | s[e.charCodeAt(n + 1)] << 12 | s[e.charCodeAt(n + 2)] << 6 | s[e.charCodeAt(n + 3)], l[u++] = t >> 16 & 255, l[u++] = t >> 8 & 255, l[u++] = 255 & t;
                    2 === c && (t = s[e.charCodeAt(n)] << 2 | s[e.charCodeAt(n + 1)] >> 4, l[u++] = 255 & t);
                    1 === c && (t = s[e.charCodeAt(n)] << 10 | s[e.charCodeAt(n + 1)] << 4 | s[e.charCodeAt(n + 2)] >> 2, l[u++] = t >> 8 & 255, l[u++] = 255 & t);
                    return l;
                }, t.fromByteArray = function(e) {
                    for (var t, s = e.length, r = s % 3, i = [], o = 16383, a = 0, l = s - r; a < l; a += o) i.push(c(e, a, a + o > l ? l : a + o));
                    1 === r ? (t = e[s - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === r && (t = (e[s - 2] << 8) + e[s - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                    return i.join("");
                };
                for (var n = [], s = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0; o < 64; ++o) n[o] = i[o], s[i.charCodeAt(o)] = o;

                function a(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var n = e.indexOf("=");
                    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4];
                }

                function c(e, t, s) {
                    for (var r, i, o = [], a = t; a < s; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(n[(i = r) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
                    return o.join("");
                }
                s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63;
            },
            8287: (e, t, n) => {
                "use strict";
                const s = n(7526),
                    r = n(251),
                    i = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                t.Buffer = c, t.SlowBuffer = function(e) {
                    +e != e && (e = 0);
                    return c.alloc(+e);
                }, t.INSPECT_MAX_BYTES = 50;
                const o = 2147483647;

                function a(e) {
                    if (e > o) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    const t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, c.prototype), t;
                }

                function c(e, t, n) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return u(e), a(e < 0 ? 0 : 0 | p(e));
                    }
                    return l(e, t, n);
                }

                function l(e, t, n) {
                    if ("string" == typeof e) return function(e, t) {
                        "string" == typeof t && "" !== t || (t = "utf8");
                        if (!c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                        const n = 0 | g(e, t);
                        let s = a(n);
                        const r = s.write(e, t);
                        r !== n && (s = s.slice(0, r));
                        return s;
                    }(e, t);
                    if (ArrayBuffer.isView(e)) return function(e) {
                        if (e instanceof Uint8Array || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === Uint8Array.name) {
                            const t = new Uint8Array(e);
                            return f(t.buffer, t.byteOffset, t.byteLength);
                        }
                        return d(e);
                    }(e);
                    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (e instanceof ArrayBuffer || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === ArrayBuffer.name || e && (e.buffer instanceof ArrayBuffer || null != e.buffer && null != e.buffer.constructor && null != e.buffer.constructor.name && e.buffer.constructor.name === ArrayBuffer.name)) return f(e, t, n);
                    if ("undefined" != typeof SharedArrayBuffer && (e instanceof SharedArrayBuffer || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === SharedArrayBuffer.name || e && (e.buffer instanceof SharedArrayBuffer || null != e.buffer && null != e.buffer.constructor && null != e.buffer.constructor.name && e.buffer.constructor.name === SharedArrayBuffer.name))) return f(e, t, n);
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    const s = e.valueOf && e.valueOf();
                    if (null != s && s !== e) return c.from(s, t, n);
                    const r = function(e) {
                        if (c.isBuffer(e)) {
                            const t = 0 | p(e.length),
                                n = a(t);
                            return 0 === n.length || e.copy(n, 0, 0, t), n;
                        }
                        if (undefined !== e.length) return "number" != typeof e.length || e.length != e.length ? a(0) : d(e);
                        if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data);
                    }(e);
                    if (r) return r;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]("string"), t, n);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                }

                function u(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }

                function d(e) {
                    const t = e.length < 0 ? 0 : 0 | p(e.length),
                        n = a(t);
                    for (let s = 0; s < t; s += 1) n[s] = 255 & e[s];
                    return n;
                }

                function f(e, t, n) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    let s;
                    return s = undefined === t && undefined === n ? new Uint8Array(e) : undefined === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(s, c.prototype), s;
                }

                function p(e) {
                    if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                    return 0 | e;
                }

                function g(e, t) {
                    if (c.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || (e instanceof ArrayBuffer || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === ArrayBuffer.name)) return e.byteLength;
                    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    const n = e.length,
                        s = arguments.length > 2 && true === arguments[2];
                    if (!s && 0 === n) return 0;
                    let r = false;
                    for (;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                            return W(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return z(e).length;
                        default:
                            if (r) return s ? -1 : W(e).length;
                            t = ("" + t).toLowerCase(), r = true;
                    }
                }

                function m(e, t, n) {
                    let s = false;
                    if ((undefined === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((undefined === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return A(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return _(this, t, n);
                        case "ascii":
                            return k(this, t, n);
                        case "latin1":
                        case "binary":
                            return I(this, t, n);
                        case "base64":
                            return O(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return E(this, t, n);
                        default:
                            if (s) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), s = true;
                    }
                }

                function y(e, t, n) {
                    const s = e[t];
                    e[t] = e[n], e[n] = s;
                }

                function b(e, t, n, s, r) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (s = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), (n = +n) != (n = +n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (r) return -1;
                        n = e.length - 1;
                    } else if (n < 0) {
                        if (!r) return -1;
                        n = 0;
                    }
                    if ("string" == typeof t && (t = c.from(t, s)), c.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, s, r);
                    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, s, r);
                    throw new TypeError("val must be string, number or Buffer");
                }

                function v(e, t, n, s, r) {
                    let i, o = 1,
                        a = e.length,
                        c = t.length;
                    if (undefined !== s && ("ucs2" === (s = String(s).toLowerCase()) || "ucs-2" === s || "utf16le" === s || "utf-16le" === s)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        o = 2, a /= 2, c /= 2, n /= 2;
                    }

                    function l(e, t) {
                        return 1 === o ? e[t] : e.readUInt16BE(t * o);
                    }
                    if (r) {
                        let s = -1;
                        for (i = n; i < a; i++)
                            if (l(e, i) === l(t, -1 === s ? 0 : i - s)) {
                                if (-1 === s && (s = i), i - s + 1 === c) return s * o;
                            } else - 1 !== s && (i -= i - s), s = -1;
                    } else
                        for (n + c > a && (n = a - c), i = n; i >= 0; i--) {
                            let n = true;
                            for (let s = 0; s < c; s++)
                                if (l(e, i + s) !== l(t, s)) {
                                    n = false;
                                    break;
                                }
                            if (n) return i;
                        }
                    return -1;
                }

                function w(e, t, n, s) {
                    n = Number(n) || 0;
                    const r = e.length - n;
                    s ? (s = Number(s)) > r && (s = r) : s = r;
                    const i = t.length;
                    let o;
                    for (s > i / 2 && (s = i / 2), o = 0; o < s; ++o) {
                        const s = parseInt(t.substr(2 * o, 2), 16);
                        if (s != s) return o;
                        e[n + o] = s;
                    }
                    return o;
                }

                function C(e, t, n, s) {
                    return X(function(e) {
                        const t = [];
                        for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t;
                    }(t), e, n, s);
                }

                function L(e, t, n, s) {
                    return X(function(e, t) {
                        let n, s, r;
                        const i = [];
                        for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), s = n >> 8, r = n % 256, i.push(r), i.push(s);
                        return i;
                    }(t, e.length - n), e, n, s);
                }

                function O(e, t, n) {
                    return 0 === t && n === e.length ? s.fromByteArray(e) : s.fromByteArray(e.slice(t, n));
                }

                function _(e, t, n) {
                    n = Math.min(e.length, n);
                    const s = [];
                    let r = t;
                    for (; r < n;) {
                        const t = e[r];
                        let i = null,
                            o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                        if (r + o <= n) {
                            let n, s, a, c;
                            switch (o) {
                                case 1:
                                    t < 128 && (i = t);
                                    break;
                                case 2:
                                    n = e[r + 1], 128 == (192 & n) && (c = (31 & t) << 6 | 63 & n, c > 127 && (i = c));
                                    break;
                                case 3:
                                    n = e[r + 1], s = e[r + 2], 128 == (192 & n) && 128 == (192 & s) && (c = (15 & t) << 12 | (63 & n) << 6 | 63 & s, c > 2047 && (c < 55296 || c > 57343) && (i = c));
                                    break;
                                case 4:
                                    n = e[r + 1], s = e[r + 2], a = e[r + 3], 128 == (192 & n) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & t) << 18 | (63 & n) << 12 | (63 & s) << 6 | 63 & a, c > 65535 && c < 1114112 && (i = c));
                            }
                        }
                        null === i ? (i = 65533, o = 1) : i > 65535 && (i -= 65536, s.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), s.push(i), r += o;
                    }
                    return function(e) {
                        const t = e.length;
                        if (t <= S) return String.fromCharCode.apply(String, e);
                        let n = "",
                            s = 0;
                        for (; s < t;) n += String.fromCharCode.apply(String, e.slice(s, s += S));
                        return n;
                    }(s);
                }
                t.kMaxLength = o, c.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        const e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42;
                                }
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
                    } catch (e) {
                        return false;
                    }
                }(), c.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
                    enumerable: true,
                    get: function() {
                        if (c.isBuffer(this)) return this.buffer;
                    }
                }), Object.defineProperty(c.prototype, "offset", {
                    enumerable: true,
                    get: function() {
                        if (c.isBuffer(this)) return this.byteOffset;
                    }
                }), c.poolSize = 8192, c.from = function(e, t, n) {
                    return l(e, t, n);
                }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(e, t, n) {
                    return function(e, t, n) {
                        return u(e), e <= 0 ? a(e) : undefined !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e);
                    }(e, t, n);
                }, c.allocUnsafe = function(e) {
                    return u(e), a(e < 0 ? 0 : 0 | p(e));
                }, c.allocUnsafeSlow = function(e) {
                    return u(e), a(e < 0 ? 0 : 0 | p(e));
                }, c.isBuffer = function(e) {
                    return null != e && true === e._isBuffer && e !== c.prototype;
                }, c.compare = function(e, t) {
                    if ((e instanceof Uint8Array || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === Uint8Array.name) && (e = c.from(e, e.offset, e.byteLength)), (t instanceof Uint8Array || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === Uint8Array.name) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    let n = e.length,
                        s = t.length;
                    for (let r = 0, i = Math.min(n, s); r < i; ++r)
                        if (e[r] !== t[r]) {
                            n = e[r], s = t[r];
                            break;
                        }
                    return n < s ? -1 : s < n ? 1 : 0;
                }, c.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return true;
                        default:
                            return false;
                    }
                }, c.concat = function(e, t) {
                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return c.alloc(0);
                    let n;
                    if (undefined === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    const s = c.allocUnsafe(t);
                    let r = 0;
                    for (n = 0; n < e.length; ++n) {
                        let t = e[n];
                        if (t instanceof Uint8Array || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === Uint8Array.name) r + t.length > s.length ? (c.isBuffer(t) || (t = c.from(t)), t.copy(s, r)) : Uint8Array.prototype.set.call(s, t, r);
                        else {
                            if (!c.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                            t.copy(s, r);
                        }
                        r += t.length;
                    }
                    return s;
                }, c.byteLength = g, c.prototype._isBuffer = true, c.prototype.swap16 = function() {
                    const e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (let t = 0; t < e; t += 2) y(this, t, t + 1);
                    return this;
                }, c.prototype.swap32 = function() {
                    const e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (let t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                    return this;
                }, c.prototype.swap64 = function() {
                    const e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (let t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                    return this;
                }, c.prototype.toString = function() {
                    const e = this.length;
                    return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : m.apply(this, arguments);
                }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e) {
                    if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === c.compare(this, e);
                }, c.prototype.inspect = function() {
                    let e = "";
                    const n = t.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">";
                }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function(e, t, n, s, r) {
                    if ((e instanceof Uint8Array || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === Uint8Array.name) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (undefined === t && (t = 0), undefined === n && (n = e ? e.length : 0), undefined === s && (s = 0), undefined === r && (r = this.length), t < 0 || n > e.length || s < 0 || r > this.length) throw new RangeError("out of range index");
                    if (s >= r && t >= n) return 0;
                    if (s >= r) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    let i = (r >>>= 0) - (s >>>= 0),
                        o = (n >>>= 0) - (t >>>= 0);
                    const a = Math.min(i, o),
                        l = this.slice(s, r),
                        u = e.slice(t, n);
                    for (let e = 0; e < a; ++e)
                        if (l[e] !== u[e]) {
                            i = l[e], o = u[e];
                            break;
                        }
                    return i < o ? -1 : o < i ? 1 : 0;
                }, c.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n);
                }, c.prototype.indexOf = function(e, t, n) {
                    return b(this, e, t, n, true);
                }, c.prototype.lastIndexOf = function(e, t, n) {
                    return b(this, e, t, n, false);
                }, c.prototype.write = function(e, t, n, s) {
                    if (undefined === t) s = "utf8", n = this.length, t = 0;
                    else if (undefined === n && "string" == typeof t) s = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t >>>= 0, isFinite(n) ? (n >>>= 0, undefined === s && (s = "utf8")) : (s = n, n = undefined);
                    }
                    const r = this.length - t;
                    if ((undefined === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    s || (s = "utf8");
                    let i = false;
                    for (;;) switch (s) {
                        case "hex":
                            return w(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return X(W(e, this.length - t), this, t, n);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return C(this, e, t, n);
                        case "base64":
                            return X(z(e), this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return L(this, e, t, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + s);
                            s = ("" + s).toLowerCase(), i = true;
                    }
                }, c.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    };
                };
                const S = 4096;

                function k(e, t, n) {
                    let s = "";
                    n = Math.min(e.length, n);
                    for (let r = t; r < n; ++r) s += String.fromCharCode(127 & e[r]);
                    return s;
                }

                function I(e, t, n) {
                    let s = "";
                    n = Math.min(e.length, n);
                    for (let r = t; r < n; ++r) s += String.fromCharCode(e[r]);
                    return s;
                }

                function A(e, t, n) {
                    const s = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > s) && (n = s);
                    let r = "";
                    for (let s = t; s < n; ++s) r += Z[e[s]];
                    return r;
                }

                function E(e, t, n) {
                    const s = e.slice(t, n);
                    let r = "";
                    for (let e = 0; e < s.length - 1; e += 2) r += String.fromCharCode(s[e] + 256 * s[e + 1]);
                    return r;
                }

                function M(e, t, n) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
                }

                function P(e, t, n, s, r, i) {
                    if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > r || t < i) throw new RangeError('"value" argument is out of bounds');
                    if (n + s > e.length) throw new RangeError("Index out of range");
                }

                function U(e, t, n, s, r) {
                    F(t, s, r, e, n, 7);
                    let i = Number(t & BigInt(4294967295));
                    e[n++] = i, i >>= 8, e[n++] = i, i >>= 8, e[n++] = i, i >>= 8, e[n++] = i;
                    let o = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
                }

                function D(e, t, n, s, r) {
                    F(t, s, r, e, n, 7);
                    let i = Number(t & BigInt(4294967295));
                    e[n + 7] = i, i >>= 8, e[n + 6] = i, i >>= 8, e[n + 5] = i, i >>= 8, e[n + 4] = i;
                    let o = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
                }

                function N(e, t, n, s, r, i) {
                    if (n + s > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range");
                }
                c.prototype.slice = function(e, t) {
                    const n = this.length;
                    (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = undefined === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                    const s = this.subarray(e, t);
                    return Object.setPrototypeOf(s, c.prototype), s;
                }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let s = this[e],
                        r = 1,
                        i = 0;
                    for (; ++i < t && (r *= 256);) s += this[e + i] * r;
                    return s;
                }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let s = this[e + --t],
                        r = 1;
                    for (; t > 0 && (r *= 256);) s += this[e + --t] * r;
                    return s;
                }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || M(e, 1, this.length), this[e];
                }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || M(e, 2, this.length), this[e] | this[e + 1] << 8;
                }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || M(e, 2, this.length), this[e] << 8 | this[e + 1];
                }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
                }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
                }, c.prototype.readBigUInt64LE = K(function(e) {
                    H(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    undefined !== t && undefined !== n || V(e, this.length - 8);
                    const s = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 16777216,
                        r = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 16777216;
                    return BigInt(s) + (BigInt(r) << BigInt(32));
                }), c.prototype.readBigUInt64BE = K(function(e) {
                    H(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    undefined !== t && undefined !== n || V(e, this.length - 8);
                    const s = t * 16777216 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                        r = this[++e] * 16777216 + 65536 * this[++e] + 256 * this[++e] + n;
                    return (BigInt(s) << BigInt(32)) + BigInt(r);
                }), c.prototype.readIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let s = this[e],
                        r = 1,
                        i = 0;
                    for (; ++i < t && (r *= 256);) s += this[e + i] * r;
                    return r *= 128, s >= r && (s -= Math.pow(2, 8 * t)), s;
                }, c.prototype.readIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let s = t,
                        r = 1,
                        i = this[e + --s];
                    for (; s > 0 && (r *= 256);) i += this[e + --s] * r;
                    return r *= 128, i >= r && (i -= Math.pow(2, 8 * t)), i;
                }, c.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                }, c.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || M(e, 2, this.length);
                    const n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n;
                }, c.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || M(e, 2, this.length);
                    const n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n;
                }, c.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
                }, c.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
                }, c.prototype.readBigInt64LE = K(function(e) {
                    H(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    undefined !== t && undefined !== n || V(e, this.length - 8);
                    const s = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                    return (BigInt(s) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 16777216);
                }), c.prototype.readBigInt64BE = K(function(e) {
                    H(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    undefined !== t && undefined !== n || V(e, this.length - 8);
                    const s = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                    return (BigInt(s) << BigInt(32)) + BigInt(this[++e] * 16777216 + 65536 * this[++e] + 256 * this[++e] + n);
                }), c.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), r.read(this, e, true, 23, 4);
                }, c.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), r.read(this, e, false, 23, 4);
                }, c.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || M(e, 8, this.length), r.read(this, e, true, 52, 8);
                }, c.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || M(e, 8, this.length), r.read(this, e, false, 52, 8);
                }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e, t, n, s) {
                    if (e = +e, t >>>= 0, n >>>= 0, !s) {
                        P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    }
                    let r = 1,
                        i = 0;
                    for (this[t] = 255 & e; ++i < n && (r *= 256);) this[t + i] = e / r & 255;
                    return t + n;
                }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e, t, n, s) {
                    if (e = +e, t >>>= 0, n >>>= 0, !s) {
                        P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    }
                    let r = n - 1,
                        i = 1;
                    for (this[t + r] = 255 & e; --r >= 0 && (i *= 256);) this[t + r] = e / i & 255;
                    return t + n;
                }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
                }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
                }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
                }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
                }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
                }, c.prototype.writeBigUInt64LE = K(function(e, t = 0) {
                    return U(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                }), c.prototype.writeBigUInt64BE = K(function(e, t = 0) {
                    return D(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
                }), c.prototype.writeIntLE = function(e, t, n, s) {
                    if (e = +e, t >>>= 0, !s) {
                        const s = Math.pow(2, 8 * n - 1);
                        P(this, e, t, n, s - 1, -s);
                    }
                    let r = 0,
                        i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++r < n && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + r - 1] && (o = 1), this[t + r] = (e / i >> 0) - o & 255;
                    return t + n;
                }, c.prototype.writeIntBE = function(e, t, n, s) {
                    if (e = +e, t >>>= 0, !s) {
                        const s = Math.pow(2, 8 * n - 1);
                        P(this, e, t, n, s - 1, -s);
                    }
                    let r = n - 1,
                        i = 1,
                        o = 0;
                    for (this[t + r] = 255 & e; --r >= 0 && (i *= 256);) e < 0 && 0 === o && 0 !== this[t + r + 1] && (o = 1), this[t + r] = (e / i >> 0) - o & 255;
                    return t + n;
                }, c.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
                }, c.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
                }, c.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
                }, c.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
                }, c.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
                }, c.prototype.writeBigInt64LE = K(function(e, t = 0) {
                    return U(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                }), c.prototype.writeBigInt64BE = K(function(e, t = 0) {
                    return D(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                }), c.prototype.writeFloatLE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || N(this, 0, t, 4), r.write(this, e, t, true, 23, 4), t + 4;
                }, c.prototype.writeFloatBE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || N(this, 0, t, 4), r.write(this, e, t, false, 23, 4), t + 4;
                }, c.prototype.writeDoubleLE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || N(this, 0, t, 8), r.write(this, e, t, true, 52, 8), t + 8;
                }, c.prototype.writeDoubleBE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || N(this, 0, t, 8), r.write(this, e, t, false, 52, 8), t + 8;
                }, c.prototype.copy = function(e, t, n, s) {
                    if (!c.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if (n || (n = 0), s || 0 === s || (s = this.length), t >= e.length && (t = e.length), t || (t = 0), s > 0 && s < n && (s = n), s === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                    if (s < 0) throw new RangeError("sourceEnd out of bounds");
                    s > this.length && (s = this.length), e.length - t < s - n && (s = e.length - t + n);
                    const r = s - n;
                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, s) : Uint8Array.prototype.set.call(e, this.subarray(n, s), t), r;
                }, c.prototype.fill = function(e, t, n, s) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (s = t, t = 0, n = this.length) : "string" == typeof n && (s = n, n = this.length), undefined !== s && "string" != typeof s) throw new TypeError("encoding must be a string");
                        if ("string" == typeof s && !c.isEncoding(s)) throw new TypeError("Unknown encoding: " + s);
                        if (1 === e.length) {
                            const t = e.charCodeAt(0);
                            ("utf8" === s && t < 128 || "latin1" === s) && (e = t);
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    let r;
                    if (t >>>= 0, n = undefined === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                        for (r = t; r < n; ++r) this[r] = e;
                    else {
                        const i = c.isBuffer(e) ? e : c.from(e, s),
                            o = i.length;
                        if (0 === o) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (r = 0; r < n - t; ++r) this[r + t] = i[r % o];
                    }
                    return this;
                };
                const G = {};

                function j(e, t, n) {
                    G[e] = class extends n {
                        constructor() {
                            super(), Object.defineProperty(this, "message", {
                                value: t.apply(this, arguments),
                                writable: true,
                                configurable: true
                            }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
                        }
                        get code() {
                            return e;
                        }
                        set code(e) {
                            Object.defineProperty(this, "code", {
                                configurable: true,
                                enumerable: true,
                                value: e,
                                writable: true
                            });
                        }
                        toString() {
                            return `${this.name} [${e}]: ${this.message}`;
                        }
                    };
                }

                function $(e) {
                    let t = "",
                        n = e.length;
                    const s = "-" === e[0] ? 1 : 0;
                    for (; n >= s + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
                    return `${e.slice(0, n)}${t}`;
                }

                function F(e, t, n, s, r, i) {
                    if (e > n || e < t) {
                        const s = "bigint" == typeof t ? "n" : "";
                        let r;
                        throw r = i > 3 ? 0 === t || t === BigInt(0) ? `>= 0${s} and < 2${s} ** ${8 * (i + 1)}${s}` : `>= -(2${s} ** ${8 * (i + 1) - 1}${s}) and < 2 ** ${8 * (i + 1) - 1}${s}` : `>= ${t}${s} and <= ${n}${s}`, new G.ERR_OUT_OF_RANGE("value", r, e);
                    }! function(e, t, n) {
                        H(t, "offset"), undefined !== e[t] && undefined !== e[t + n] || V(t, e.length - (n + 1));
                    }(s, r, i);
                }

                function H(e, t) {
                    if ("number" != typeof e) throw new G.ERR_INVALID_ARG_TYPE(t, "number", e);
                }

                function V(e, t, n) {
                    if (Math.floor(e) !== e) throw H(e, n), new G.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                    if (t < 0) throw new G.ERR_BUFFER_OUT_OF_BOUNDS;
                    throw new G.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e);
                }
                j("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
                    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
                }, RangeError), j("ERR_INVALID_ARG_TYPE", function(e, t) {
                    return `The "${e}" argument must be of type number. Received type ${typeof t}`;
                }, TypeError), j("ERR_OUT_OF_RANGE", function(e, t, n) {
                    let s = `The value of "${e}" is out of range.`,
                        r = n;
                    return Number.isInteger(n) && Math.abs(n) > 4294967296 ? r = $(String(n)) : "bigint" == typeof n && (r = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (r = $(r)), r += "n"), s += ` It must be ${t}. Received ${r}`, s;
                }, RangeError);
                const q = /[^+/0-9A-Za-z-_]/g;

                function W(e, t) {
                    let n;
                    t = t || Infinity;
                    const s = e.length;
                    let r = null;
                    const i = [];
                    for (let o = 0; o < s; ++o) {
                        if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
                            if (!r) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                if (o + 1 === s) {
                                    (t -= 3) > -1 && i.push(239, 191, 189);
                                    continue;
                                }
                                r = n;
                                continue;
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && i.push(239, 191, 189), r = n;
                                continue;
                            }
                            n = 65536 + (r - 55296 << 10 | n - 56320);
                        } else r && (t -= 3) > -1 && i.push(239, 191, 189);
                        if (r = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            i.push(n);
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            i.push(n >> 6 | 192, 63 & n | 128);
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
                        }
                    }
                    return i;
                }

                function z(e) {
                    return s.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(q, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e;
                    }(e));
                }

                function X(e, t, n, s) {
                    let r;
                    for (r = 0; r < s && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
                    return r;
                }
                const Z = function() {
                    const e = "0123456789abcdef",
                        t = new Array(256);
                    for (let n = 0; n < 16; ++n) {
                        const s = 16 * n;
                        for (let r = 0; r < 16; ++r) t[s + r] = e[n] + e[r];
                    }
                    return t;
                }();

                function K(e) {
                    return "undefined" == typeof BigInt ? Q : e;
                }

                function Q() {
                    throw new Error("BigInt not supported");
                }
            },
            7007: e => {
                "use strict";
                var t, n = "object" == typeof Reflect ? Reflect : null,
                    s = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
                        return Function.prototype.apply.call(e, t, n);
                    };
                t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                } : function(e) {
                    return Object.getOwnPropertyNames(e);
                };
                var r = Number.isNaN || function(e) {
                    return e != e;
                };

                function i() {
                    i.init.call(this);
                }
                e.exports = i, e.exports.once = function(e, t) {
                    return new Promise(function(n, s) {
                        function r() {
                            undefined !== i && e.removeListener("error", i), n([].slice.call(arguments));
                        }
                        var i;
                        "error" !== t && (i = function(n) {
                            e.removeListener(t, r), s(n);
                        }, e.once("error", i)), e.once(t, r);
                    });
                }, i.EventEmitter = i, i.prototype._events = undefined, i.prototype._eventsCount = 0, i.prototype._maxListeners = undefined;
                var o = 10;

                function a(e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                }

                function c(e) {
                    return undefined === e._maxListeners ? i.defaultMaxListeners : e._maxListeners;
                }

                function l(e, t, n, s) {
                    var r, i, o, l;
                    if (a(n), undefined === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (undefined !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), o = i[t]), undefined === o) o = i[t] = n, ++e._eventsCount;
                    else if ("function" == typeof o ? o = i[t] = s ? [n, o] : [o, n] : s ? o.unshift(n) : o.push(n), (r = c(e)) > 0 && o.length > r && !o.warned) {
                        o.warned = true;
                        var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, l = u, console && console.warn && console.warn(l);
                    }
                    return e;
                }

                function u() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
                }

                function h(e, t, n) {
                    var s = {
                            fired: false,
                            wrapFn: undefined,
                            target: e,
                            type: t,
                            listener: n
                        },
                        r = u.bind(s);
                    return r.listener = n, s.wrapFn = r, r;
                }

                function d(e, t, n) {
                    var s = e._events;
                    if (undefined === s) return [];
                    var r = s[t];
                    return undefined === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function(e) {
                        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                        return t;
                    }(r) : p(r, r.length);
                }

                function f(e) {
                    var t = this._events;
                    if (undefined !== t) {
                        var n = t[e];
                        if ("function" == typeof n) return 1;
                        if (undefined !== n) return n.length;
                    }
                    return 0;
                }

                function p(e, t) {
                    for (var n = new Array(t), s = 0; s < t; ++s) n[s] = e[s];
                    return n;
                }
                Object.defineProperty(i, "defaultMaxListeners", {
                    enumerable: true,
                    get: function() {
                        return o;
                    },
                    set: function(e) {
                        if ("number" != typeof e || e < 0 || r(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                        o = e;
                    }
                }), i.init = function() {
                    undefined !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || undefined;
                }, i.prototype.setMaxListeners = function(e) {
                    if ("number" != typeof e || e < 0 || r(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                    return this._maxListeners = e, this;
                }, i.prototype.getMaxListeners = function() {
                    return c(this);
                }, i.prototype.emit = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                    var r = "error" === e,
                        i = this._events;
                    if (undefined !== i) r = r && undefined === i.error;
                    else if (!r) return false;
                    if (r) {
                        var o;
                        if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                        var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                        throw a.context = o, a;
                    }
                    var c = i[e];
                    if (undefined === c) return false;
                    if ("function" == typeof c) s(c, this, t);
                    else {
                        var l = c.length,
                            u = p(c, l);
                        for (n = 0; n < l; ++n) s(u[n], this, t);
                    }
                    return true;
                }, i.prototype.addListener = function(e, t) {
                    return l(this, e, t, false);
                }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
                    return l(this, e, t, true);
                }, i.prototype.once = function(e, t) {
                    return a(t), this.on(e, h(this, e, t)), this;
                }, i.prototype.prependOnceListener = function(e, t) {
                    return a(t), this.prependListener(e, h(this, e, t)), this;
                }, i.prototype.removeListener = function(e, t) {
                    var n, s, r, i, o;
                    if (a(t), undefined === (s = this._events)) return this;
                    if (undefined === (n = s[e])) return this;
                    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete s[e], s.removeListener && this.emit("removeListener", e, n.listener || t));
                    else if ("function" != typeof n) {
                        for (r = -1, i = n.length - 1; i >= 0; i--)
                            if (n[i] === t || n[i].listener === t) {
                                o = n[i].listener, r = i;
                                break;
                            }
                        if (r < 0) return this;
                        0 === r ? n.shift() : function(e, t) {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop();
                        }(n, r), 1 === n.length && (s[e] = n[0]), undefined !== s.removeListener && this.emit("removeListener", e, o || t);
                    }
                    return this;
                }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
                    var t, n, s;
                    if (undefined === (n = this._events)) return this;
                    if (undefined === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : undefined !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                    if (0 === arguments.length) {
                        var r, i = Object.keys(n);
                        for (s = 0; s < i.length; ++s) "removeListener" !== (r = i[s]) && this.removeAllListeners(r);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
                    }
                    if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                    else if (undefined !== t)
                        for (s = t.length - 1; s >= 0; s--) this.removeListener(e, t[s]);
                    return this;
                }, i.prototype.listeners = function(e) {
                    return d(this, e, true);
                }, i.prototype.rawListeners = function(e) {
                    return d(this, e, false);
                }, i.listenerCount = function(e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t);
                }, i.prototype.listenerCount = f, i.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? t(this._events) : [];
                };
            },
            251: (e, t) => {
                t.read = function(e, t, n, s, r) {
                    var i, o, a = 8 * r - s - 1,
                        c = (1 << a) - 1,
                        l = c >> 1,
                        u = -7,
                        h = n ? r - 1 : 0,
                        d = n ? -1 : 1,
                        f = e[t + h];
                    for (h += d, i = f & (1 << -u) - 1, f >>= -u, u += a; u > 0; i = 256 * i + e[t + h], h += d, u -= 8);
                    for (o = i & (1 << -u) - 1, i >>= -u, u += s; u > 0; o = 256 * o + e[t + h], h += d, u -= 8);
                    if (0 === i) i = 1 - l;
                    else {
                        if (i === c) return o ? NaN : Infinity * (f ? -1 : 1);
                        o += Math.pow(2, s), i -= l;
                    }
                    return (f ? -1 : 1) * o * Math.pow(2, i - s);
                }, t.write = function(e, t, n, s, r, i) {
                    var o, a, c, l = 8 * i - r - 1,
                        u = (1 << l) - 1,
                        h = u >> 1,
                        d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        f = s ? 0 : i - 1,
                        p = s ? 1 : -1,
                        g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === Infinity ? (a = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), (t += o + h >= 1 ? d / c : d * Math.pow(2, 1 - h)) * c >= 2 && (o++, c /= 2), o + h >= u ? (a = 0, o = u) : o + h >= 1 ? (a = (t * c - 1) * Math.pow(2, r), o += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, r), o = 0)); r >= 8; e[n + f] = 255 & a, f += p, a /= 256, r -= 8);
                    for (o = o << r | a, l += r; l > 0; e[n + f] = 255 & o, f += p, o /= 256, l -= 8);
                    e[n + f - p] |= 128 * g;
                };
            },
            3657: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(4291)),
                    i = s(n(2990)),
                    o = n(7653),
                    a = n(8778);
                t.default = class {
                    constructor(e) {
                        this.username = e.username, this.storage = e.storage || (new r.default).getStorage(), this.userPoolId = e.userPoolId, this.userPoolClientId = e.userPoolClientId, this.advancedSecurityDataCollectionFlag = e.advancedSecurityDataCollectionFlag, this.signInUserSession = null, this.keyPrefix = "Lotus", this.userDataKey = `${this.keyPrefix}.${this.username}.userData`;
                    }
                    updateUsernameKey(e) {
                        this.username = e, this.userDataKey = `${this.keyPrefix}.${this.username}.userData`;
                    }
                    async signOutInternal(e, t) {
                        this.signInUserSession = null, this.clearCachedUser(), await e.post(t.url, {
                            AccessToken: t.accessToken
                        });
                    }
                    getUserSession(e) {
                        const t = new o.IdToken(e.idToken),
                            n = new o.AccessToken(e.accessToken),
                            s = new o.RefreshToken(e.refreshToken);
                        return new i.default({
                            idToken: t,
                            accessToken: n,
                            refreshToken: s
                        });
                    }
                    getSignInUserSession() {
                        return this.signInUserSession;
                    }
                    setSignInUserSession(e) {
                        this.clearCachedUserData(), this.signInUserSession = e, this.cacheTokens();
                    }
                    async getSession() {
                        if (null == this.username) throw new Error("Username is null. Cannot retrieve a new session");
                        if (null != this.signInUserSession && this.signInUserSession.isValid()) return this.signInUserSession;
                        const e = `${this.keyPrefix}.${this.username}.idToken`,
                            t = `${this.keyPrefix}.${this.username}.accessToken`,
                            n = `${this.keyPrefix}.${this.username}.refreshToken`,
                            s = `${this.keyPrefix}.${this.username}.clockDrift`;
                        if (!this.storage.getItem(e)) throw new Error("Local storage is missing an ID Token, Please authenticate");
                        const r = new o.IdToken(this.storage.getItem(e)),
                            a = new o.AccessToken(this.storage.getItem(t)),
                            c = new o.RefreshToken(this.storage.getItem(n)),
                            l = parseInt(this.storage.getItem(s), 0) || 0,
                            u = new i.default({
                                idToken: r,
                                accessToken: a,
                                refreshToken: c,
                                clockDrift: l
                            });
                        if (u.isValid()) return this.signInUserSession = u, this.signInUserSession;
                        if (!c.getToken()) throw new Error("Cannot retrieve refresh token. Please authenticate.");
                        return await this.refreshSession(c);
                    }
                    async refreshSession(e) {
                        throw new Error("refreshSession is not overrided;");
                    }
                    async profileInternal(e, t) {
                        const n = this.storage.getItem(this.userDataKey);
                        if (!n || t.bypassCache) {
                            const n = await e.get(t.url);
                            return this.cacheUserData(n), n;
                        }
                        return JSON.parse(n);
                    }
                    async authenticateInternal(e, t) {
                        e.ejectAuthorizationInterceptor();
                        const n = {
                            Username: t.username,
                            Password: t.password
                        };
                        t.scope && (n.Scope = t.scope);
                        const s = this.getUserContextData(this.username);
                        null != s && (n.EncodedData = s);
                        const r = await (0, a.getVisitorId)();
                        null != r && r.length > 0 && (n.VisitorId = r);
                        const i = await e.post(t.url, n);
                        e.useAuthorizationInterceptor();
                        return i.ChallengeName ? (this.cacheChallenge(i.ChallengeName, i.Session), {
                            RequireAction: i.ChallengeName
                        }) : (this.signInUserSession = this.getUserSession({
                            idToken: i.IdToken,
                            accessToken: i.AccessToken,
                            refreshToken: i.RefreshToken
                        }), this.cacheTokens(), this.signInUserSession);
                    }
                    async authTelegramInternal(e, t) {
                        e.ejectAuthorizationInterceptor();
                        const n = {
                            InitData: t.initData
                        };
                        t.scope && (n.Scope = t.scope);
                        const s = await (0, a.getVisitorId)();
                        null != s && (n.VisitorId = s);
                        const r = await e.post(t.url, n);
                        return e.useAuthorizationInterceptor(), this.updateUsernameKey(r.Username), this.signInUserSession = this.getUserSession({
                            idToken: r.Token.IdToken,
                            accessToken: r.Token.AccessToken,
                            refreshToken: r.Token.RefreshToken
                        }), this.cacheTokens(), this.signInUserSession;
                    }
                    async refreshSessionInternal(e, t) {
                        try {
                            const n = {
                                    RefreshToken: t.refreshToken.getToken()
                                },
                                s = this.getUserContextData(this.username);
                            null != s && (n.EncodedData = s), e.ejectAuthorizationInterceptor();
                            const r = await e.post(t.url, n);
                            return e.useAuthorizationInterceptor(), Object.prototype.hasOwnProperty.call(r, "RefreshToken") || (r.RefreshToken = t.refreshToken.getToken()), this.signInUserSession = this.getUserSession({
                                idToken: r.IdToken,
                                accessToken: r.AccessToken,
                                refreshToken: r.RefreshToken
                            }), this.cacheTokens(), this.signInUserSession;
                        } catch (e) {
                            throw "NotAuthorizedException" === e.code && this.clearCachedUser(), e;
                        }
                    }
                    async completeNewPasswordInternal(e, t) {
                        const n = `${this.keyPrefix}.${this.username}.challengeName`,
                            s = `${this.keyPrefix}.${this.username}.session`,
                            r = this.storage.getItem(n),
                            i = this.storage.getItem(s);
                        if (!r) throw new Error("Challenge Name not found.");
                        if (!i) throw new Error("Session not found.");
                        if ("NEW_PASSWORD_REQUIRED" !== r) throw new Error("Require Action is not NEW_PASSWORD_REQUIRED");
                        let o = {
                            Username: this.username,
                            NewPassword: t.newPassword,
                            Session: i
                        };
                        const a = this.getUserContextData(this.username);
                        null != a && (o.EncodedData = a), e.ejectAuthorizationInterceptor();
                        const c = await e.put(t.url, o);
                        e.useAuthorizationInterceptor();
                        const l = c.ChallengeName;
                        return l ? (this.cacheChallenge(l, c.Session), {
                            RequireAction: l
                        }) : (this.signInUserSession = this.getUserSession({
                            idToken: c.IdToken,
                            accessToken: c.AccessToken,
                            refreshToken: c.RefreshToken
                        }), this.cacheTokens(), this.clearCachedChallenge(), this.signInUserSession);
                    }
                    async confirmSignInInternal(e, t) {
                        const n = `${this.keyPrefix}.${this.username}.challengeName`,
                            s = `${this.keyPrefix}.${this.username}.session`,
                            r = this.storage.getItem(n),
                            i = this.storage.getItem(s);
                        if (!r) throw new Error("Challenge Name not found.");
                        if (!i) throw new Error("Session not found.");
                        if ("SOFTWARE_TOKEN_MFA" !== r) throw new Error("Require Action is not SOFTWARE_TOKEN_MFA");
                        const o = {
                            Username: this.username,
                            Session: i,
                            Code: t.code
                        };
                        e.ejectAuthorizationInterceptor();
                        const a = await e.post(t.url, o);
                        return e.useAuthorizationInterceptor(), this.signInUserSession = this.getUserSession({
                            idToken: a.IdToken,
                            accessToken: a.AccessToken,
                            refreshToken: a.RefreshToken
                        }), this.cacheTokens(), this.clearCachedChallenge(), this.signInUserSession;
                    }
                    async generateTOTPSecretCodeInternal(e, t) {
                        if (!this.signInUserSession) throw new Error("signInUserSession is null");
                        const n = this.signInUserSession.getAccessToken().getJwtToken();
                        return e.post(t.url, {
                            AccessToken: n
                        });
                    }
                    async enableMFAInternal(e, t) {
                        if (!this.signInUserSession) throw new Error("signInUserSession is null");
                        const n = this.signInUserSession.getAccessToken().getJwtToken();
                        return e.put(t.url, {
                            AccessToken: n,
                            UserCode: t.code
                        });
                    }
                    async disableMFAInternal(e, t) {
                        if (!this.signInUserSession) throw new Error("signInUserSession is null");
                        const n = this.signInUserSession.getAccessToken().getJwtToken();
                        return e.put(t.url, {
                            AccessToken: n,
                            UserCode: t.code
                        });
                    }
                    cacheChallenge(e, t) {
                        const n = `${this.keyPrefix}.${this.username}.challengeName`,
                            s = `${this.keyPrefix}.${this.username}.session`;
                        this.storage.setItem(n, e), this.storage.setItem(s, t);
                    }
                    clearCachedChallenge() {
                        const e = `${this.keyPrefix}.${this.username}.challengeName`,
                            t = `${this.keyPrefix}.${this.username}.session`;
                        this.storage.removeItem(e), this.storage.removeItem(t);
                    }
                    cacheTokens() {
                        const e = `${this.keyPrefix}.${this.username}.idToken`,
                            t = `${this.keyPrefix}.${this.username}.accessToken`,
                            n = `${this.keyPrefix}.${this.username}.refreshToken`,
                            s = `${this.keyPrefix}.${this.username}.clockDrift`,
                            r = `${this.keyPrefix}.LastAuthUser`;
                        this.storage.setItem(e, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(t, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(n, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(s, `${this.signInUserSession.getClockDrift()}`), this.storage.setItem(r, this.username);
                    }
                    cacheUserData(e) {
                        this.storage.setItem(this.userDataKey, JSON.stringify(e));
                    }
                    clearCachedUserData() {
                        this.storage.removeItem(this.userDataKey);
                    }
                    clearCachedTokens() {
                        const e = `${this.keyPrefix}.${this.username}.idToken`,
                            t = `${this.keyPrefix}.${this.username}.accessToken`,
                            n = `${this.keyPrefix}.${this.username}.refreshToken`,
                            s = `${this.keyPrefix}.${this.username}.clockDrift`,
                            r = `${this.keyPrefix}.LastAuthUser`;
                        this.storage.removeItem(e), this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(r), this.storage.removeItem(s);
                    }
                    clearCachedUser() {
                        this.clearCachedTokens(), this.clearCachedUserData();
                    }
                    getUserContextData(e) {
                        if ("undefined" == typeof AmazonCognitoAdvancedSecurityData) return null;
                        const t = AmazonCognitoAdvancedSecurityData;
                        if (this.advancedSecurityDataCollectionFlag) {
                            const n = t.getData(e, this.userPoolId, this.userPoolClientId);
                            if (n) return n;
                        }
                        return null;
                    }
                };
            },
            2990: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                t.default = class {
                    constructor(e) {
                        this._idToken = e.idToken, this._refreshToken = e.refreshToken, this._accessToken = e.accessToken, this._clockDrift = undefined === e.clockDrift ? this.calculateClockDrift() : e.clockDrift;
                    }
                    getIdToken() {
                        return this._idToken;
                    }
                    getRefreshToken() {
                        return this._refreshToken;
                    }
                    getAccessToken() {
                        return this._accessToken;
                    }
                    getClockDrift() {
                        return this._clockDrift;
                    }
                    calculateClockDrift() {
                        return Math.floor(Date.now() / 1e3) - Math.min(this.getAccessToken().getIssuedAt(), this.getIdToken().getIssuedAt());
                    }
                    isValid() {
                        let e = Math.floor(Date.now() / 1e3) - this._clockDrift;
                        return e += 300, e < this._accessToken.getExpiration() && e < this._idToken.getExpiration();
                    }
                };
            },
            7653: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.AccessToken = t.IdToken = t.RefreshToken = t.JwtToken = undefined;
                const s = n(8287);
                class r {
                    constructor(e) {
                        this.jwtToken = e || "", this.payload = this.decodePayload();
                    }
                    getJwtToken() {
                        return this.jwtToken;
                    }
                    getExpiration() {
                        return this.payload.exp;
                    }
                    getIssuedAt() {
                        return this.payload.iat;
                    }
                    getAuthTime() {
                        return this.payload.auth_time;
                    }
                    getUserPath() {
                        return this.payload["custom:path"];
                    }
                    decodePayload() {
                        const e = this.jwtToken.split(".")[1];
                        try {
                            return JSON.parse(s.Buffer.from(e, "base64").toString("utf8"));
                        } catch (e) {
                            return {};
                        }
                    }
                }
                t.JwtToken = r;
                t.IdToken = class extends r {
                    constructor(e = "") {
                        super(e);
                    }
                };
                t.AccessToken = class extends r {
                    constructor(e = "") {
                        super(e);
                    }
                };
                t.RefreshToken = class {
                    constructor(e = "") {
                        this.refreshToken = e;
                    }
                    getToken() {
                        return this.refreshToken;
                    }
                };
            },
            8778: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.getVisitorId = t.getDeviceFingerprint = undefined;
                const r = s(n(8075)).default.load(),
                    i = async () => {
                        try {
                            const e = await r,
                                t = await e.get();
                            return console.log("device fingerprint:", t), t;
                        } catch (e) {
                            return null;
                        }
                    };
                t.getDeviceFingerprint = i;
                t.getVisitorId = async () => {
                    var e;
                    const t = await i();
                    return null !== (e = null == t ? undefined : t.visitorId) && undefined !== e ? e : "";
                };
            },
            1920: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                class n extends Error {
                    constructor(e, t) {
                        super(t), this.name = e, this.code = e;
                    }
                }
                t.default = n;
            },
            514: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.AdjustingTimer = undefined;
                t.AdjustingTimer = class {
                    constructor(e, t = 1e3, n) {
                        this._this = this, this._processFunc = e, this._errorFunc = n, this._interval = t;
                    }
                    start() {
                        this._expected = Date.now() + this._interval, this._timeout = setTimeout(this._step.bind(this), this._interval);
                    }
                    stop() {
                        clearTimeout(this._timeout);
                    }
                    _step() {
                        const e = Date.now() - this._expected;
                        e > this._interval && this._errorFunc && this._errorFunc(), this._processFunc ? this._processFunc() : console.error("Could not found handler function"), this._expected += this._interval, setTimeout(this._step.bind(this), Math.max(0, this._interval - e));
                    }
                };
            },
            4291: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                let n;
                t.default = class {
                    constructor() {
                        try {
                            "undefined" != typeof window ? this.storageWindow = window.sessionStorage : this.storageWindow = sessionStorage, this.storageWindow.setItem("lotus.test-ls", 1), this.storageWindow.removeItem("lotus.test-ls");
                        } catch (e) {
                            this.storageWindow = s;
                        }
                    }
                    getStorage() {
                        return this.storageWindow;
                    }
                };
                class s {
                    static setItem(e, t) {
                        return n[e] = t, n[e];
                    }
                    static getItem(e) {
                        return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : undefined;
                    }
                    static removeItem(e) {
                        return delete n[e];
                    }
                    static clear() {
                        return n = {}, n;
                    }
                }
            },
            7595: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(7830));
                class i extends r.default {
                    constructor() {
                        super(true);
                    }
                    useAuthorizationInterceptor() {}
                }
                t.default = i;
            },
            5285: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                t.default = class {
                    constructor() {}
                    configure() {}
                    async connect() {
                        throw new Error("connect is not overrided;");
                    }
                    close() {
                        if (!this.client) throw new Error("Socket client is null");
                        this.client.close();
                    }
                    get Connection() {
                        return this.client.connection;
                    }
                    get Client() {
                        return this.client;
                    }
                };
            },
            7830: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(6425)),
                    i = s(n(1920));
                t.default = class {
                    constructor(e = false) {
                        this.axiosInstance = r.default.create(), false === e && this.useAuthorizationInterceptor();
                    }
                    ejectAuthorizationInterceptor() {
                        this.axiosInstance.interceptors.request.eject(this.authorizationInterceptor);
                    }
                    useAuthorizationInterceptor() {
                        throw new Error("useAuthorizationInterceptor is not overrided;");
                    }
                    configClient() {}
                    async get(e, t) {
                        return await this.requestInternal({
                            method: "get",
                            url: e,
                            params: t
                        });
                    }
                    async post(e, t) {
                        return await this.requestInternal({
                            method: "post",
                            url: e,
                            data: t
                        });
                    }
                    async delete(e, t) {
                        return await this.requestInternal({
                            method: "delete",
                            url: e,
                            data: t
                        });
                    }
                    async put(e, t) {
                        return await this.requestInternal({
                            method: "put",
                            url: e,
                            data: t
                        });
                    }
                    async requestInternal(e) {
                        try {
                            const t = {
                                method: e.method,
                                url: e.url,
                                headers: {
                                    "content-type": "application/json"
                                }
                            };
                            e.data && (t.data = e.data), e.params && (t.params = e.params);
                            return (await this.axiosInstance.request(t)).data || null;
                        } catch (e) {
                            if (e.response) {
                                if (500 === e.status) throw new i.default("InternalServerError", "Có lỗi xảy ra trong quá trình xử lý, quý khách vui lòng thử lại sau");
                                if (504 === e.status) throw new i.default("GatewayTimeout", "Quy trình xử lý dữ liệu lâu hơn dự kiến, quý khách vui lòng thử lại sau");
                                throw e.response.data ? new i.default(e.response.data.code, e.response.data.message) : new i.default("UnhandledException", "Yêu cầu của quý khách thực hiện không thành công, vui lòng thử lại sau");
                            }
                            throw new i.default("NetworkException", "Kết nối mạng của quý khách hiện tại không ổn định, hãy kiểm tra lại");
                        }
                    }
                };
            },
            7791: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: true
                    }), t.BetTypeHelper = t.BetType = undefined,
                    function(e) {
                        e[e.De = 0] = "De", e[e.Lo = 1] = "Lo", e[e.Xien2 = 2] = "Xien2", e[e.Xien3 = 3] = "Xien3", e[e.Xien4 = 4] = "Xien4", e[e.DeTruot = 5] = "DeTruot", e[e.LoTruot = 6] = "LoTruot", e[e.HaiDDau = 7] = "HaiDDau", e[e.HaiDDuoi = 8] = "HaiDDuoi", e[e.HaiD27Lo = 9] = "HaiD27Lo", e[e.BaDDau = 10] = "BaDDau", e[e.BaDDuoi = 11] = "BaDDuoi", e[e.BaD23Lo = 12] = "BaD23Lo", e[e.BonDDuoi = 13] = "BonDDuoi", e[e.BonD20Lo = 14] = "BonD20Lo", e[e.HaiD18Lo = 15] = "HaiD18Lo", e[e.HaiD7Lo = 16] = "HaiD7Lo", e[e.BaD17Lo = 17] = "BaD17Lo", e[e.BaD7Lo = 18] = "BaD7Lo", e[e.BonD16Lo = 19] = "BonD16Lo", e[e.LoLive = 20] = "LoLive", e[e.DeDau = 21] = "DeDau", e[e.DeGiaiNhat = 22] = "DeGiaiNhat", e[e.DeDauGiaiNhat = 23] = "DeDauGiaiNhat", e[e.DeThanTai4 = 24] = "DeThanTai4", e[e.DeDauThanTai4 = 25] = "DeDauThanTai4", e[e.HaiD18LoLive = 27] = "HaiD18LoLive", e[e.LoDau = 29] = "LoDau", e[e.HaiD18LoDau = 30] = "HaiD18LoDau";
                    }(n || (t.BetType = n = {}));
                const s = {
                    toString(e) {
                        switch (e) {
                            case n.De:
                                return "Đề";
                            case n.Lo:
                                return "Lô";
                            case n.Xien2:
                                return "Xiên 2";
                            case n.Xien3:
                                return "Xiên 3";
                            case n.Xien4:
                                return "Xiên 4";
                            case n.DeTruot:
                                return "Đề Trượt";
                            case n.LoTruot:
                                return "Lô Trượt";
                            case n.HaiDDau:
                                return "2D Đầu";
                            case n.HaiDDuoi:
                                return "2D Đuôi";
                            case n.HaiD27Lo:
                                return "2D 27Lô";
                            case n.BaDDau:
                                return "3D Đầu";
                            case n.BaDDuoi:
                                return "3D Đuôi";
                            case n.BaD23Lo:
                                return "3D 23Lô";
                            case n.BonDDuoi:
                                return "4D Đuôi";
                            case n.BonD20Lo:
                                return "4D 20Lô";
                            case n.HaiD18Lo:
                                return "2D 18Lô";
                            case n.HaiD7Lo:
                                return "2D 7Lô";
                            case n.BaD17Lo:
                                return "3D 17Lô";
                            case n.BaD7Lo:
                                return "3D 7Lô";
                            case n.BonD16Lo:
                                return "4D 16Lô";
                            case n.LoLive:
                                return "Lô Live";
                            case n.DeDau:
                                return "Đề Đầu";
                            case n.DeGiaiNhat:
                                return "Đề Giải 1";
                            case n.DeDauGiaiNhat:
                                return "Đề Đầu Giải 1";
                            case n.DeThanTai4:
                                return "Đề Thần Tài";
                            case n.DeDauThanTai4:
                                return "Đề Đầu Thần Tài";
                            case n.LoDau:
                                return "Lô Đầu";
                            case n.HaiD18LoDau:
                                return "2D 18Lô Đầu";
                            case n.HaiD18LoLive:
                                return "2D 18Lô Live";
                            default:
                                return "N/A";
                        }
                    }
                };
                t.BetTypeHelper = s;
            },
            3748: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: true
                    }), t.GameTypeHelper = t.GameType = undefined,
                    function(e) {
                        e[e.MienBac1 = 0] = "MienBac1", e[e.MienBac2 = 1] = "MienBac2", e[e.MienNam18A = 2] = "MienNam18A", e[e.MienNam18B = 3] = "MienNam18B", e[e.MienNam18C = 4] = "MienNam18C", e[e.MienNam18Ava18B = 5] = "MienNam18Ava18B";
                    }(n || (t.GameType = n = {}));
                const s = {
                    toString(e) {
                        switch (e) {
                            case n.MienBac1:
                                return "Miền Bắc 1";
                            case n.MienBac2:
                                return "Miền Bắc 2";
                            case n.MienNam18A:
                                return "Miền Nam 18A";
                            case n.MienNam18B:
                                return "Miền Nam 18B";
                            case n.MienNam18C:
                                return "Miền Nam 18C";
                            case n.MienNam18Ava18B:
                                return "Miền Nam 18A&B";
                            default:
                                return "N/A";
                        }
                    }
                };
                t.GameTypeHelper = s;
            },
            9649: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: true
                    }), t.BetTypeHelper = t.BetType = undefined,
                    function(e) {
                        e[e.De = 0] = "De", e[e.Lo = 1] = "Lo", e[e.Xien2 = 2] = "Xien2", e[e.Xien3 = 3] = "Xien3", e[e.Xien4 = 4] = "Xien4", e[e.DeTruot = 5] = "DeTruot", e[e.LoTruot = 6] = "LoTruot", e[e.HaiDDau = 7] = "HaiDDau", e[e.HaiDDuoi = 8] = "HaiDDuoi", e[e.HaiD27Lo = 9] = "HaiD27Lo", e[e.BaDDau = 10] = "BaDDau", e[e.BaDDuoi = 11] = "BaDDuoi", e[e.BaD23Lo = 12] = "BaD23Lo", e[e.BonDDuoi = 13] = "BonDDuoi", e[e.BonD20Lo = 14] = "BonD20Lo", e[e.HaiD18Lo = 15] = "HaiD18Lo", e[e.HaiD7Lo = 16] = "HaiD7Lo", e[e.BaD17Lo = 17] = "BaD17Lo", e[e.BaD7Lo = 18] = "BaD7Lo", e[e.BonD16Lo = 19] = "BonD16Lo", e[e.LoLive = 20] = "LoLive", e[e.DeDau = 21] = "DeDau", e[e.DeGiaiNhat = 22] = "DeGiaiNhat", e[e.DeDauGiaiNhat = 23] = "DeDauGiaiNhat", e[e.DeThanTai4 = 24] = "DeThanTai4", e[e.DeDauThanTai4 = 25] = "DeDauThanTai4", e[e.BaD23LoLive = 26] = "BaD23LoLive", e[e.HaiD18LoLive = 27] = "HaiD18LoLive", e[e.BaD17LoLive = 28] = "BaD17LoLive", e[e.LoDau = 29] = "LoDau", e[e.HaiD18LoDau = 30] = "HaiD18LoDau";
                    }(n || (t.BetType = n = {}));
                const s = {
                    toString(e) {
                        switch (e) {
                            case n.De:
                                return "Đề";
                            case n.Lo:
                                return "Lô";
                            case n.Xien2:
                                return "Xiên 2";
                            case n.Xien3:
                                return "Xiên 3";
                            case n.Xien4:
                                return "Xiên 4";
                            case n.DeTruot:
                                return "Đề Trượt";
                            case n.LoTruot:
                                return "Lô Trượt";
                            case n.HaiDDau:
                                return "2D Đầu";
                            case n.HaiDDuoi:
                                return "2D Đuôi";
                            case n.HaiD27Lo:
                                return "2D 27Lô";
                            case n.BaDDau:
                                return "3D Đầu";
                            case n.BaDDuoi:
                                return "3D Đuôi";
                            case n.BaD23Lo:
                                return "3D 23Lô";
                            case n.BonDDuoi:
                                return "4D Đuôi";
                            case n.BonD20Lo:
                                return "4D 20Lô";
                            case n.HaiD18Lo:
                                return "2D 18Lô";
                            case n.HaiD7Lo:
                                return "2D 7Lô";
                            case n.BaD17Lo:
                                return "3D 17Lô";
                            case n.BaD7Lo:
                                return "3D 7Lô";
                            case n.BonD16Lo:
                                return "4D 16Lô";
                            case n.LoLive:
                                return "Lô Live";
                            case n.DeDau:
                                return "Đề Đầu";
                            case n.DeGiaiNhat:
                                return "Đề Giải 1";
                            case n.DeDauGiaiNhat:
                                return "Đề Đầu Giải 1";
                            case n.DeThanTai4:
                                return "Đề Thần Tài";
                            case n.DeDauThanTai4:
                                return "Đề Đầu Thần Tài";
                            case n.BaD23LoLive:
                                return "3D 23Lô Live";
                            case n.HaiD18LoLive:
                                return "2D 18Lô Live";
                            case n.BaD17LoLive:
                                return "3D 17Lô Live";
                            case n.LoDau:
                                return "Lô Đầu";
                            case n.HaiD18LoDau:
                                return "2D 18Lô Đầu";
                            default:
                                return "N/A";
                        }
                    }
                };
                t.BetTypeHelper = s;
            },
            1346: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: true
                    }), t.GameTypeHelper = t.GameType = undefined,
                    function(e) {
                        e[e.MienBac = 0] = "MienBac", e[e.MienNam = 1] = "MienNam";
                    }(n || (t.GameType = n = {}));
                const s = {
                    toString(e) {
                        switch (e) {
                            case n.MienBac:
                                return "Miền Bắc";
                            case n.MienNam:
                                return "Miền Nam";
                            default:
                                return "N/A";
                        }
                    }
                };
                t.GameTypeHelper = s;
            },
            189: (e, t) => {
                "use strict";
                var n, s;
                Object.defineProperty(t, "__esModule", {
                        value: true
                    }), t.RealtimeLocalChannelName = t.RealtimeChannelName = undefined,
                    function(e) {
                        e.GENERAL_NOTIFICATION_SECTION_AGENT = "general:notification:section:agent", e.GENERAL_NOTIFICATION_SECTION_PLAYER = "general:notification:section:player", e.SELF = "self", e.IDENTITY_ANCESTOR_USERID = "identity:ancestor", e.PRODUCTION_SEN_CASINO_GAMETYPE_AREANUMBER = "product:sen-casino", e.PRODUCTION_LOTTERY = "product:lottery", e.PRODUCTION_LOTTERY789 = "product:lottery789";
                    }(n || (t.RealtimeChannelName = n = {})),
                    function(e) {
                        e.GENERAL = "general", e.SELF = "self", e.ANCESTOR = "ancestor", e.SEN_CASINO = "sen-casino", e.LOTTERY = "lottery", e.LOTTERY789 = "lottery789";
                    }(s || (t.RealtimeLocalChannelName = s = {}));
            },
            4852: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: true
                    }), t.GameTypeHelper = t.GameType = undefined,
                    function(e) {
                        e[e.Sedie = 0] = "Sedie";
                    }(n || (t.GameType = n = {}));
                const s = {
                    toString(e) {
                        if (e === n.Sedie) return "Xóc Đĩa";
                    }
                };
                t.GameTypeHelper = s;
            },
            8387: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(3544)),
                    i = s(n(716));
                t.default = class {
                    constructor() {
                        this.notification = new r.default, this.server = new i.default;
                    }
                    get Notification() {
                        return this.notification;
                    }
                    get Server() {
                        return this.server;
                    }
                };
            },
            3544: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Communication}/notifications/player/notification`;
                    }
                    async read(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/${e.Id}/read`);
                    }
                    async getNotificationsOnSection() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/section`);
                    }
                    async getNotificationsByCategory(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`, `category=${e.Category}`];
                        return e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await s.Lotus.RestClient.get(`${this.baseUrl}/category?${t.join("&")}`);
                    }
                };
            },
            716: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Communication}/servers`;
                    }
                    async currentDateTime() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/current-date-time`);
                    }
                };
            },
            8507: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = n(6916),
                    i = s(n(6799)),
                    o = s(n(9100));
                t.default = class {
                    constructor() {
                        this.gamePlayTicket = new i.default, this.gamePlayTicketItem = new o.default;
                    }
                    get Ticket() {
                        return this.gamePlayTicket;
                    }
                    get TicketItem() {
                        return this.gamePlayTicketItem;
                    }
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/game-play/player`;
                    }
                    async play(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/play`, e);
                    }
                };
            },
            6799: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/game-play/player/tickets`;
                    }
                    async latest(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), true === e.Refresh && t.push(`refresh=${e.Refresh}`)), await s.Lotus.RestClient.get(`${this.baseUrl}/latest?${t.join("&")}`);
                    }
                    async current(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await s.Lotus.RestClient.get(`${this.baseUrl}/current?${t.join("&")}`);
                    }
                    async checkTx(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/check-tx`, {
                            TxList: e.TxList
                        });
                    }
                };
            },
            9100: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/game-play/player/ticket-items`;
                    }
                    async getItemsByTicketNumbers(e) {
                        const t = [];
                        return e.TicketNumbers.forEach(e => {
                            t.push(`tNrs=${e}`);
                        }), e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await s.Lotus.RestClient.get(`${this.baseUrl}/list-by-tickets?${t.join("&")}`);
                    }
                    async getItemsByTerm(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await s.Lotus.RestClient.get(`${this.baseUrl}/list-by-term?${t.join("&")}`);
                    }
                };
            },
            2544: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    async getAll() {
                        return await s.Lotus.RestClient.get(`${s.Lotus.Config.Urls.Lottery}/user-game-settings/player`);
                    }
                    async getGameSettings() {
                        return await s.Lotus.RestClient.get(`${s.Lotus.Config.Urls.Lottery}/user-game-settings/player`);
                    }
                    async getGamePayouts() {
                        return await s.Lotus.RestClient.get(`${s.Lotus.Config.Urls.Lottery}/share-holders/player`);
                    }
                };
            },
            3038: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(5688));
                t.default = class {
                    constructor() {
                        this.lotteryCommandHelper = new r.default;
                    }
                    get LotteryCommand() {
                        return this.lotteryCommandHelper;
                    }
                };
            },
            5688: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(3748),
                    r = n(7791);

                function* i(e, t) {
                    for (let n = 0; n < e.length; n++)
                        if (1 === t) yield [e[n]];
                        else {
                            let s = i(e.slice(n + 1, e.length), t - 1);
                            for (let t of s) yield [e[n], ...t];
                        }
                }
                t.default = class {
                    constructor() {}
                    parse(e) {
                        if (!e) throw new Error("input is null");
                        const t = [],
                            n = e.trim().split(/[.\n]/).filter(e => e.trim().length > 0);
                        if (!n || !n.length) return t;
                        for (let e = 0; e < n.length; e++) {
                            const s = n[e].trim().replace(/[^a-zA-Z0-9, ]/g, "").replace(/ {2,}/g, " ");
                            let [i, o, a, ...c] = s.match(/\S+/g);
                            if (o && "xq" === o.trim().toLowerCase()) {
                                if (!c || 0 === c.length) {
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: i,
                                        betTypeValue: o,
                                        amountValue: a,
                                        numbersValue: c
                                    }));
                                    continue;
                                }
                                [r.BetType.Xien2, r.BetType.Xien3, r.BetType.Xien4].forEach(s => {
                                    const o = this.combineNumber(c, s),
                                        l = s === r.BetType.Xien2 ? "x2" : s === r.BetType.Xien3 ? "x3" : "x4";
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: i,
                                        betTypeValue: l,
                                        amountValue: a,
                                        numbersValue: o
                                    }));
                                });
                            } else t.push(this.parseInterval({
                                lineIndex: e,
                                lineContent: n[e],
                                gameTypeValue: i,
                                betTypeValue: o,
                                amountValue: a,
                                numbersValue: c
                            }));
                        }
                        return t;
                    }
                    parseInterval(e) {
                        const t = {
                                LineIndex: e.lineIndex,
                                LineContent: e.lineContent,
                                Data: []
                            },
                            n = this.parseGameTypeInternal(e.gameTypeValue);
                        if (null === n) return console.warn(`Line=${e.lineIndex} is error GameType=${e.gameTypeValue}`), t.Error = "Không có thông tin đài mở thưởng", t;
                        const s = this.parseBetTypeInternal(e.betTypeValue);
                        if (null === s) return console.warn(`Line=${e.lineIndex} is error BetType=${e.betTypeValue}`), t.Error = "Không có thông tin kiểu cược", t;
                        const r = this.parseAmountInternal(e.amountValue);
                        if (null === r) return console.warn(`Line=${e.lineIndex} is error Amount=${e.amountValue}`), t.Error = "Không có thông tin điểm cược", t;
                        const i = e.numbersValue.join(" "),
                            o = this.parseNumbersInternal(i, s);
                        if (null === o) return console.warn(`Line=${e.lineIndex} is error numbersList=${i}`), t.Error = "Không có thông tin số cược", t;
                        for (let e = 0; e < o.length; e++) {
                            const i = o[e];
                            t.Data.push({
                                GameType: n,
                                BetType: s,
                                Amount: r,
                                Numbers: i
                            });
                        }
                        return t;
                    }
                    parseGameTypeInternal(e) {
                        if (!e) return console.error("Game Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "mb1":
                                return s.GameType.MienBac1;
                            case "mb2":
                                return s.GameType.MienBac2;
                            case "18a":
                                return s.GameType.MienNam18A;
                            case "18b":
                                return s.GameType.MienNam18B;
                            case "18c":
                                return s.GameType.MienNam18C;
                            case "18ab":
                                return s.GameType.MienNam18Ava18B;
                            default:
                                return null;
                        }
                    }
                    parseBetTypeInternal(e) {
                        if (!e) return console.error("Bet Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "de":
                                return r.BetType.De;
                            case "lo":
                                return r.BetType.Lo;
                            case "x2":
                                return r.BetType.Xien2;
                            case "x3":
                                return r.BetType.Xien3;
                            case "x4":
                                return r.BetType.Xien4;
                            case "detruot":
                                return r.BetType.DeTruot;
                            case "lotruot":
                                return r.BetType.LoTruot;
                            case "live":
                                return r.BetType.LoLive;
                            case "dedau":
                                return r.BetType.DeDau;
                            case "deg1":
                                return r.BetType.DeGiaiNhat;
                            case "dedaug1":
                                return r.BetType.DeDauGiaiNhat;
                            case "dedautt":
                                return r.BetType.DeDauThanTai4;
                            case "dett":
                                return r.BetType.DeThanTai4;
                            case "2ddau":
                                return r.BetType.HaiDDau;
                            case "2dduoi":
                                return r.BetType.HaiDDuoi;
                            case "2d27lo":
                                return r.BetType.HaiD27Lo;
                            case "3ddau":
                                return r.BetType.BaDDau;
                            case "3dduoi":
                                return r.BetType.BaDDuoi;
                            case "3d23lo":
                                return r.BetType.BaD23Lo;
                            case "4dduoi":
                                return r.BetType.BonDDuoi;
                            case "4d20lo":
                                return r.BetType.BonD20Lo;
                            case "2d18lo":
                                return r.BetType.HaiD18Lo;
                            case "2d7lo":
                                return r.BetType.HaiD7Lo;
                            case "3d17lo":
                                return r.BetType.BaD17Lo;
                            case "3d7lo":
                                return r.BetType.BaD7Lo;
                            case "4d16lo":
                                return r.BetType.BonD16Lo;
                            default:
                                return null;
                        }
                    }
                    parseAmountInternal(e) {
                        if (!e) return console.error("Amount input is null"), null;
                        e = e.trim();
                        const t = Number(e);
                        return Number.isInteger(t) && t > 0 ? t : null;
                    }
                    parseNumbersInternal(e, t) {
                        if (!e) return console.error("Number input is null"), null;
                        const n = [],
                            s = (e = e.trim().replace(/\s+,/g, ",").replace(/,\s+/g, ",")).match(/\d+/g),
                            i = this.getNumberDigits(t);
                        switch (t) {
                            case r.BetType.Xien2:
                                if (s.length % 2 != 0) return null;
                                for (let e = 0; e < s.length; e += 2) {
                                    if (!this.validPlayNumber(s[e], i) || !this.validPlayNumber(s[e + 1], i)) return null;
                                    n.push([s[e], s[e + 1]]);
                                }
                                return n;
                            case r.BetType.Xien3:
                                if (s.length % 3 != 0) return null;
                                for (let e = 0; e < s.length; e += 3) {
                                    if (!(this.validPlayNumber(s[e], i) && this.validPlayNumber(s[e + 1], i) && this.validPlayNumber(s[e + 2], i))) return null;
                                    n.push([s[e], s[e + 1], s[e + 2]]);
                                }
                                return n;
                            case r.BetType.Xien4:
                                if (s.length % 4 != 0) return null;
                                for (let e = 0; e < s.length; e += 4) {
                                    if (!(this.validPlayNumber(s[e], i) && this.validPlayNumber(s[e + 1], i) && this.validPlayNumber(s[e + 2], i) && this.validPlayNumber(s[e + 3], i))) return null;
                                    n.push([s[e], s[e + 1], s[e + 2], s[e + 3]]);
                                }
                                return n;
                            case r.BetType.LoTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const s = t[e].match(/\d+/g);
                                    if (s.length < 4) return null;
                                    n.push([]);
                                    for (let t = 0; t < s.length; t++) {
                                        const r = s[t];
                                        if (!this.validPlayNumber(r, i)) return null;
                                        n[e].push(r);
                                    }
                                }
                                return n;
                            }
                            case r.BetType.DeTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const s = t[e].match(/\d+/g);
                                    if (s.length < 10) return null;
                                    n.push([]);
                                    for (let t = 0; t < s.length; t++) {
                                        const r = s[t];
                                        if (!this.validPlayNumber(r, i)) return null;
                                        n[e].push(r);
                                    }
                                }
                                return n;
                            }
                            default:
                                for (let e = 0; e < s.length; e += 1) {
                                    if (!this.validPlayNumber(s[e], i)) return null;
                                    n.push([s[e]]);
                                }
                                return n;
                        }
                    }
                    validPlayNumber(e, t = 2) {
                        if (!e) return false;
                        if ((e = e.trim()).length !== t) return false;
                        const n = Number(e);
                        return !(!Number.isInteger(n) || n < 0) && (!(2 === t && n >= 100) && (!(3 === t && n >= 1e3) && !(4 === t && n >= 1e4)));
                    }
                    getNumberDigits(e) {
                        switch (e) {
                            case r.BetType.BaD17Lo:
                            case r.BetType.BaD23Lo:
                            case r.BetType.BaD7Lo:
                            case r.BetType.BaDDau:
                            case r.BetType.BaDDuoi:
                                return 3;
                            case r.BetType.BonD16Lo:
                            case r.BetType.BonD20Lo:
                            case r.BetType.BonDDuoi:
                                return 4;
                            default:
                                return 2;
                        }
                    }
                    combineNumber(e, t) {
                        const n = e.join(" ").match(/\d+/g).reduce((e, t) => e.includes(t) ? e : [...e, t], []);
                        let s;
                        switch (t) {
                            case r.BetType.Xien2:
                                s = Array.from(i(n, 2));
                                break;
                            case r.BetType.Xien3:
                                s = Array.from(i(n, 3));
                                break;
                            case r.BetType.Xien4:
                                s = Array.from(i(n, 4));
                                break;
                            default:
                                s = [];
                        }
                        return s.map(e => e.join(","));
                    }
                };
            },
            7019: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(3825)),
                    i = s(n(6474)),
                    o = s(n(2544)),
                    a = s(n(4970)),
                    c = s(n(3378)),
                    l = s(n(8507)),
                    u = n(6916),
                    h = s(n(5370)),
                    d = s(n(3038));
                t.default = class {
                    constructor() {
                        this.report = new r.default, this.term = new i.default, this.gameSetting = new o.default, this.lotteryResult = new c.default, this.gamePlay = new l.default, this.odds = new a.default, this.helper = new d.default;
                    }
                    get Report() {
                        return this.report;
                    }
                    get Term() {
                        return this.term;
                    }
                    get GameSetting() {
                        return this.gameSetting;
                    }
                    get Odds() {
                        return this.odds;
                    }
                    get LotteryResult() {
                        return this.lotteryResult;
                    }
                    get GamePlay() {
                        return this.gamePlay;
                    }
                    get Helper() {
                        return this.helper;
                    }
                    get Realtime() {
                        if (null == u.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == u.Lotus.Realtime.Client.auth || !u.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new h.default), this.realtime;
                    }
                };
            },
            5370: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(7007),
                    r = n(6916),
                    i = n(189);
                class o extends s.EventEmitter {
                    constructor() {
                        super(), this._generalChannel = null, this._selfChannel = null, this._ancestorsChannels = [];
                    }
                    configure() {}
                    async subcribe() {
                        await this.subscribeGeneralChannel(), await this.subscribeSelfChannel();
                        const e = (await r.Lotus.User.Current.getSession()).getIdToken().getUserPath();
                        e && await this.subscribeAncestorsChannels({
                            ancestors: e.split(",")
                        });
                    }
                    async unsubscribe() {
                        null !== this._generalChannel && this._generalChannel.unsubscribe(), null !== this._selfChannel && this._selfChannel.unsubscribe(), null !== this._ancestorsChannels && this._ancestorsChannels.forEach(e => {
                            e.unsubscribe();
                        });
                    }
                    async subscribeAncestorsChannels(e) {
                        let t = null;
                        const n = e.ancestors.filter(e => e.length > 0).slice(1);
                        if (n)
                            for (let e = 0; e < n.length; e++) n[e] && (t = r.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_LOTTERY}:ancestor:${n[e]}`), await t.subscribe(e => {
                                this.emit(`${i.RealtimeLocalChannelName.LOTTERY}:ancestor:event:${e.name}`, e.data, e);
                            }), this._ancestorsChannels.push(t));
                    }
                    async subscribeGeneralChannel() {
                        this._generalChannel = r.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_LOTTERY}:general`), await this._generalChannel.subscribe(e => {
                            this.emit(`${i.RealtimeLocalChannelName.LOTTERY}:general:event:${e.name}`, e.data, e);
                        });
                    }
                    async subscribeSelfChannel() {
                        this._selfChannel = r.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_LOTTERY}:self:${r.Lotus.Realtime.Client.auth.clientId}`), await this._selfChannel.subscribe(e => {
                            this.emit(`${i.RealtimeLocalChannelName.LOTTERY}:self:event:${e.name}`, e.data, e);
                        });
                    }
                }
                t.default = o;
            },
            3378: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/lottery-results/player`;
                    }
                    async getCaishen4Result(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/caishen4?date=${e.date}`);
                    }
                    async getNorthernResult(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/northern?date=${e.date}`);
                    }
                    async getSouthernResults(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/southern?date=${e.date}`);
                    }
                    async getAllResults(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}?date=${e.date}`);
                    }
                };
            },
            4970: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/odds/player`;
                    }
                    async getOdds(e) {
                        const t = [`term=${e.Term}`];
                        return e.GameTypes.forEach(e => {
                            t.push(`gameTypes=${e}`);
                        }), e.BetTypes.forEach(e => {
                            t.push(`betTypes=${e}`);
                        }), await s.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`);
                    }
                    async getLiveOdds(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/live?term=${e.Term}&gameType=${e.GameType}&betType=${e.BetType}`);
                    }
                };
            },
            828: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/reports/player/cancelation`;
                    }
                    async getTicketItems(e) {
                        const t = [`date=${e.Date}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`);
                    }
                };
            },
            3825: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(828)),
                    i = s(n(394));
                t.default = class {
                    constructor() {
                        this.statement = new i.default, this.cancelation = new r.default;
                    }
                    get Statement() {
                        return this.statement;
                    }
                    get Cancelation() {
                        return this.cancelation;
                    }
                };
            },
            394: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/reports/player/statements`;
                    }
                    async getReportGroupByGameType(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`);
                    }
                    async getReportGroupByBetType(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/bet-type?date=${e.Date}&gameType=${e.GameType}`);
                    }
                    async getTicketItems(e) {
                        const t = [`date=${e.Date}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`);
                    }
                };
            },
            6474: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/terms/player`;
                    }
                    async current() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/current`);
                    }
                };
            },
            6685: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = n(6916),
                    i = s(n(4549)),
                    o = s(n(9970));
                t.default = class {
                    constructor() {
                        this.gamePlayTicket = new i.default, this.gamePlayTicketItem = new o.default;
                    }
                    get Ticket() {
                        return this.gamePlayTicket;
                    }
                    get TicketItem() {
                        return this.gamePlayTicketItem;
                    }
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/game-play/player`;
                    }
                    async play(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/play`, e);
                    }
                    async cancelTicket(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/cancel-ticket`, e);
                    }
                };
            },
            4549: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/game-play/player/tickets`;
                    }
                    async latest(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), true === e.Refresh && t.push(`refresh=${e.Refresh}`)), await s.Lotus.RestClient.get(`${this.baseUrl}/latest?${t.join("&")}`);
                    }
                    async current(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await s.Lotus.RestClient.get(`${this.baseUrl}/current?${t.join("&")}`);
                    }
                    async checkTx(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/check-tx`, {
                            TxList: e.TxList
                        });
                    }
                };
            },
            9970: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/game-play/player/ticket-items`;
                    }
                    async getItemsByTicketNumbers(e) {
                        const t = [`gameType=${e.GameType}`];
                        return e.TicketNumbers.forEach(e => {
                            t.push(`tNrs=${e}`);
                        }), e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await s.Lotus.RestClient.get(`${this.baseUrl}/list-by-tickets?${t.join("&")}`);
                    }
                    async getItemsByTerm(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await s.Lotus.RestClient.get(`${this.baseUrl}/list-by-term?${t.join("&")}`);
                    }
                };
            },
            6422: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    async getAll() {
                        return await s.Lotus.RestClient.get(`${s.Lotus.Config.Urls.Lottery789}/user-game-settings/player`);
                    }
                    async getGameSettings() {
                        return await s.Lotus.RestClient.get(`${s.Lotus.Config.Urls.Lottery789}/user-game-settings/player`);
                    }
                    async getGamePayouts() {
                        return await s.Lotus.RestClient.get(`${s.Lotus.Config.Urls.Lottery789}/share-holders/player`);
                    }
                };
            },
            1704: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(2150));
                t.default = class {
                    constructor() {
                        this.lotteryCommandHelper = new r.default;
                    }
                    get LotteryCommand() {
                        return this.lotteryCommandHelper;
                    }
                };
            },
            2150: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(1346),
                    r = n(9649);

                function* i(e, t) {
                    for (let n = 0; n < e.length; n++)
                        if (1 === t) yield [e[n]];
                        else {
                            let s = i(e.slice(n + 1, e.length), t - 1);
                            for (let t of s) yield [e[n], ...t];
                        }
                }
                t.default = class {
                    constructor() {}
                    parse(e) {
                        if (!e) throw new Error("input is null");
                        const t = [],
                            n = e.trim().split(/[.\n]/).filter(e => e.trim().length > 0);
                        if (!n || !n.length) return t;
                        for (let e = 0; e < n.length; e++) {
                            const s = n[e].trim().replace(/[^a-zA-Z0-9, ]/g, "").replace(/ {2,}/g, " ");
                            let [i, o, a, ...c] = s.match(/\S+/g);
                            if (o && "xq" === o.trim().toLowerCase()) {
                                if (!c || 0 === c.length) {
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: i,
                                        betTypeValue: o,
                                        amountValue: a,
                                        numbersValue: c
                                    }));
                                    continue;
                                }
                                [r.BetType.Xien2, r.BetType.Xien3, r.BetType.Xien4].forEach(s => {
                                    const o = this.combineNumber(c, s),
                                        l = s === r.BetType.Xien2 ? "x2" : s === r.BetType.Xien3 ? "x3" : "x4";
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: i,
                                        betTypeValue: l,
                                        amountValue: a,
                                        numbersValue: o
                                    }));
                                });
                            } else t.push(this.parseInterval({
                                lineIndex: e,
                                lineContent: n[e],
                                gameTypeValue: i,
                                betTypeValue: o,
                                amountValue: a,
                                numbersValue: c
                            }));
                        }
                        return t;
                    }
                    parseInterval(e) {
                        const t = {
                                LineIndex: e.lineIndex,
                                LineContent: e.lineContent,
                                Data: []
                            },
                            n = this.parseGameTypeInternal(e.gameTypeValue);
                        if (null === n) return console.warn(`Line=${e.lineIndex} is error GameType=${e.gameTypeValue}`), t.Error = "Không có thông tin đài mở thưởng", t;
                        const s = this.parseBetTypeInternal(e.betTypeValue);
                        if (null === s) return console.warn(`Line=${e.lineIndex} is error BetType=${e.betTypeValue}`), t.Error = "Không có thông tin kiểu cược", t;
                        const r = this.parseAmountInternal(e.amountValue);
                        if (null === r) return console.warn(`Line=${e.lineIndex} is error Amount=${e.amountValue}`), t.Error = "Không có thông tin điểm cược", t;
                        const i = e.numbersValue.join(" "),
                            o = this.parseNumbersInternal(i, s);
                        if (null === o) return console.warn(`Line=${e.lineIndex} is error numbersList=${i}`), t.Error = "Không có thông tin số cược", t;
                        for (let e = 0; e < o.length; e++) {
                            const i = o[e];
                            t.Data.push({
                                GameType: n,
                                BetType: s,
                                Amount: r,
                                Numbers: i
                            });
                        }
                        return t;
                    }
                    parseGameTypeInternal(e) {
                        if (!e) return console.error("Game Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "mb":
                                return s.GameType.MienBac;
                            case "mn":
                                return s.GameType.MienNam;
                            default:
                                return null;
                        }
                    }
                    parseBetTypeInternal(e) {
                        if (!e) return console.error("Bet Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "de":
                                return r.BetType.De;
                            case "lo":
                                return r.BetType.Lo;
                            case "x2":
                                return r.BetType.Xien2;
                            case "x3":
                                return r.BetType.Xien3;
                            case "x4":
                                return r.BetType.Xien4;
                            case "detruot":
                                return r.BetType.DeTruot;
                            case "lotruot":
                                return r.BetType.LoTruot;
                            case "live":
                                return r.BetType.LoLive;
                            case "dedau":
                                return r.BetType.DeDau;
                            case "deg1":
                                return r.BetType.DeGiaiNhat;
                            case "dedaug1":
                                return r.BetType.DeDauGiaiNhat;
                            case "dedautt":
                                return r.BetType.DeDauThanTai4;
                            case "dett":
                                return r.BetType.DeThanTai4;
                            case "2ddau":
                                return r.BetType.HaiDDau;
                            case "2dduoi":
                                return r.BetType.HaiDDuoi;
                            case "2d27lo":
                                return r.BetType.HaiD27Lo;
                            case "3ddau":
                                return r.BetType.BaDDau;
                            case "3dduoi":
                                return r.BetType.BaDDuoi;
                            case "3d23lo":
                                return r.BetType.BaD23Lo;
                            case "4dduoi":
                                return r.BetType.BonDDuoi;
                            case "4d20lo":
                                return r.BetType.BonD20Lo;
                            case "2d18lo":
                                return r.BetType.HaiD18Lo;
                            case "2d7lo":
                                return r.BetType.HaiD7Lo;
                            case "3d17lo":
                                return r.BetType.BaD17Lo;
                            case "3d7lo":
                                return r.BetType.BaD7Lo;
                            case "4d16lo":
                                return r.BetType.BonD16Lo;
                            default:
                                return null;
                        }
                    }
                    parseAmountInternal(e) {
                        if (!e) return console.error("Amount input is null"), null;
                        e = e.trim();
                        const t = Number(e);
                        return Number.isInteger(t) && t > 0 ? t : null;
                    }
                    parseNumbersInternal(e, t) {
                        if (!e) return console.error("Number input is null"), null;
                        const n = [],
                            s = (e = e.trim().replace(/\s+,/g, ",").replace(/,\s+/g, ",")).match(/\d+/g),
                            i = this.getNumberDigits(t);
                        switch (t) {
                            case r.BetType.Xien2:
                                if (s.length % 2 != 0) return null;
                                for (let e = 0; e < s.length; e += 2) {
                                    if (!this.validPlayNumber(s[e], i) || !this.validPlayNumber(s[e + 1], i)) return null;
                                    n.push([s[e], s[e + 1]]);
                                }
                                return n;
                            case r.BetType.Xien3:
                                if (s.length % 3 != 0) return null;
                                for (let e = 0; e < s.length; e += 3) {
                                    if (!(this.validPlayNumber(s[e], i) && this.validPlayNumber(s[e + 1], i) && this.validPlayNumber(s[e + 2], i))) return null;
                                    n.push([s[e], s[e + 1], s[e + 2]]);
                                }
                                return n;
                            case r.BetType.Xien4:
                                if (s.length % 4 != 0) return null;
                                for (let e = 0; e < s.length; e += 4) {
                                    if (!(this.validPlayNumber(s[e], i) && this.validPlayNumber(s[e + 1], i) && this.validPlayNumber(s[e + 2], i) && this.validPlayNumber(s[e + 3], i))) return null;
                                    n.push([s[e], s[e + 1], s[e + 2], s[e + 3]]);
                                }
                                return n;
                            case r.BetType.LoTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const s = t[e].match(/\d+/g);
                                    if (s.length < 4) return null;
                                    n.push([]);
                                    for (let t = 0; t < s.length; t++) {
                                        const r = s[t];
                                        if (!this.validPlayNumber(r, i)) return null;
                                        n[e].push(r);
                                    }
                                }
                                return n;
                            }
                            case r.BetType.DeTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const s = t[e].match(/\d+/g);
                                    if (s.length < 10) return null;
                                    n.push([]);
                                    for (let t = 0; t < s.length; t++) {
                                        const r = s[t];
                                        if (!this.validPlayNumber(r, i)) return null;
                                        n[e].push(r);
                                    }
                                }
                                return n;
                            }
                            default:
                                for (let e = 0; e < s.length; e += 1) {
                                    if (!this.validPlayNumber(s[e], i)) return null;
                                    n.push([s[e]]);
                                }
                                return n;
                        }
                    }
                    validPlayNumber(e, t = 2) {
                        if (!e) return false;
                        if ((e = e.trim()).length !== t) return false;
                        const n = Number(e);
                        return !(!Number.isInteger(n) || n < 0) && (!(2 === t && n >= 100) && (!(3 === t && n >= 1e3) && !(4 === t && n >= 1e4)));
                    }
                    getNumberDigits(e) {
                        switch (e) {
                            case r.BetType.BaD17Lo:
                            case r.BetType.BaD23Lo:
                            case r.BetType.BaD7Lo:
                            case r.BetType.BaDDau:
                            case r.BetType.BaDDuoi:
                                return 3;
                            case r.BetType.BonD16Lo:
                            case r.BetType.BonD20Lo:
                            case r.BetType.BonDDuoi:
                                return 4;
                            default:
                                return 2;
                        }
                    }
                    combineNumber(e, t) {
                        const n = e.join(" ").match(/\d+/g).reduce((e, t) => e.includes(t) ? e : [...e, t], []);
                        let s;
                        switch (t) {
                            case r.BetType.Xien2:
                                s = Array.from(i(n, 2));
                                break;
                            case r.BetType.Xien3:
                                s = Array.from(i(n, 3));
                                break;
                            case r.BetType.Xien4:
                                s = Array.from(i(n, 4));
                                break;
                            default:
                                s = [];
                        }
                        return s.map(e => e.join(","));
                    }
                };
            },
            6195: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(9175)),
                    i = s(n(3360)),
                    o = s(n(6422)),
                    a = s(n(4748)),
                    c = s(n(5456)),
                    l = s(n(6685)),
                    u = n(6916),
                    h = s(n(450)),
                    d = s(n(1704)),
                    f = s(n(7383));
                t.default = class {
                    constructor() {
                        this.report = new r.default, this.term = new i.default, this.gameSetting = new o.default, this.lotteryResult = new c.default, this.gamePlay = new l.default, this.odds = new a.default, this.resultStats = new f.default, this.helper = new d.default;
                    }
                    get Report() {
                        return this.report;
                    }
                    get Term() {
                        return this.term;
                    }
                    get GameSetting() {
                        return this.gameSetting;
                    }
                    get Odds() {
                        return this.odds;
                    }
                    get LotteryResult() {
                        return this.lotteryResult;
                    }
                    get GamePlay() {
                        return this.gamePlay;
                    }
                    get ResultStats() {
                        return this.resultStats;
                    }
                    get Helper() {
                        return this.helper;
                    }
                    get Realtime() {
                        if (null == u.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == u.Lotus.Realtime.Client.auth || !u.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new h.default), this.realtime;
                    }
                };
            },
            450: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(7007),
                    r = n(189),
                    i = n(6916);
                class o extends s.EventEmitter {
                    constructor() {
                        super(), this._generalChannel = null, this._selfChannel = null, this._ancestorsChannels = [];
                    }
                    configure() {}
                    async subcribe() {
                        await this.subscribeGeneralChannel(), await this.subscribeSelfChannel();
                        const e = (await i.Lotus.User.Current.getSession()).getIdToken().getUserPath();
                        e && await this.subscribeAncestorsChannels({
                            ancestors: e.split(",")
                        });
                    }
                    unsubscribe() {
                        this._generalChannel && this._generalChannel.unsubscribe(), this._selfChannel && this._selfChannel.unsubscribe(), this._ancestorsChannels && this._ancestorsChannels.forEach(e => {
                            e.unsubscribe();
                        });
                    }
                    async subscribeAncestorsChannels(e) {
                        let t = null;
                        const n = e.ancestors.filter(e => e.length > 0).slice(1);
                        if (n)
                            for (let e = 0; e < n.length; e++) n[e] && (t = i.Lotus.Realtime.Client.channels.get(`${r.RealtimeChannelName.PRODUCTION_LOTTERY789}:ancestor:${n[e]}`), await t.subscribe(e => {
                                this.emit(`${r.RealtimeLocalChannelName.LOTTERY789}:ancestor:event:${e.name}`, e.data, e);
                            }), this._ancestorsChannels.push(t));
                    }
                    async subscribeGeneralChannel() {
                        this._generalChannel = i.Lotus.Realtime.Client.channels.get(`${r.RealtimeChannelName.PRODUCTION_LOTTERY789}:general`), await this._generalChannel.subscribe(e => {
                            this.emit(`${r.RealtimeLocalChannelName.LOTTERY789}:general:event:${e.name}`, e.data, e);
                        });
                    }
                    async subscribeSelfChannel() {
                        this._selfChannel = i.Lotus.Realtime.Client.channels.get(`${r.RealtimeChannelName.PRODUCTION_LOTTERY789}:self:${i.Lotus.Realtime.Client.auth.clientId}`), await this._selfChannel.subscribe(e => {
                            this.emit(`${r.RealtimeLocalChannelName.LOTTERY789}:self:event:${e.name}`, e.data, e);
                        });
                    }
                }
                t.default = o;
            },
            5456: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/lottery-results/player`;
                    }
                    async getResultsByDate(e) {
                        const t = [`date=${e.Date}`];
                        return e.GameTypes.forEach(e => {
                            t.push(`gameTypes=${e}`);
                        }), await s.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`);
                    }
                    async getLatestResults(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/latest-results?gameType=${e.GameType}`);
                    }
                };
            },
            4748: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/odds/player`;
                    }
                    async getOdds(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`];
                        return e.BetTypes.forEach(e => {
                            t.push(`betTypes=${e}`);
                        }), await s.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`);
                    }
                    async getLiveOdds(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`];
                        return e.BetTypes.forEach(e => {
                            t.push(`betTypes=${e}`);
                        }), await s.Lotus.RestClient.get(`${this.baseUrl}/live?${t.join("&")}`);
                    }
                };
            },
            9175: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(1264));
                t.default = class {
                    constructor() {
                        this.statement = new r.default;
                    }
                    get Statement() {
                        return this.statement;
                    }
                };
            },
            1264: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/reports/player/statements`;
                    }
                    async getReportGroupByGameType(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`);
                    }
                    async getReportGroupByTerm(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/term?date=${e.Date}&gameType=${e.GameType}`);
                    }
                    async getReportGroupByBetType(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/bet-type?date=${e.Date}&gameType=${e.GameType}&term=${e.Term}`);
                    }
                    async getTicketItems(e) {
                        const t = [`gameType=${e.GameType}`, `betType=${e.BetType}`, `term=${e.Term}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`);
                    }
                };
            },
            5593: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {
                        this.MIN_TIMES_MISSING = 3, this.MIN_SEAMLESS = 3, this.MIN_DRAW_CONSECUTIVE = 3, this._northernCurrentSeamlessResult = [], this._northernCurrentNumberFrequenceResult = [], this._northernLastNumberFrequenceResult = [], this._northernNumberTimesMissing = [];
                    }
                    init(e) {
                        this._northernCurrentSeamlessResult = this._getCurrentSeamlessResult(e.LastLotteryResults), this._northernNumberTimesMissing = this._getNumberMissingTimes(e.NumberTimesMissing), this._northernCurrentNumberFrequenceResult = this._getNumberFrequence(e.CurrentLotteryResult), this._northernLastNumberFrequenceResult = this._getLastNumberFrequenceResult(e.LastLotteryResults);
                    }
                    comment(e) {
                        if (null == e.Result || e.Result.length < 2) return null;
                        let t = [];
                        const n = e.Result.slice(-2),
                            s = this._northernCurrentNumberFrequenceResult.find(e => e.Number === n);
                        if (null == s) {
                            const e = this._northernCurrentSeamlessResult.find(e => e.Number === n);
                            null != e && t.push(`Cầu bạch thủ đã về (độ dài ${e.Times + 1} phiên)`);
                            const s = this._northernNumberTimesMissing.find(e => e.Number === n);
                            null != s && t.push(`Gan ${s.TimesMissing} phiên đã về`);
                            const r = this._northernLastNumberFrequenceResult.find(e => e.Number === n);
                            null != r && r.Times + 1 >= this.MIN_DRAW_CONSECUTIVE && t.push(`Về liên tiếp ${r.Times + 1} phiên`), this._northernCurrentNumberFrequenceResult.push({
                                Number: n,
                                Frequence: 1
                            });
                        } else s.Frequence++, t.push(`Về ${s.Frequence} nháy`);
                        return t.length > 0 ? {
                            Number: n,
                            Comments: t
                        } : null;
                    }
                    _getCurrentSeamlessResult(e) {
                        if (null == e || !Array.isArray(e)) return [];
                        const t = s.Lotus.Lottery789.ResultStats.SeamlessResult.lookupNorthernResult({
                                LotteryResults: e,
                                AllowedReverseResult: false,
                                WinNumberFrequence: 1,
                                Type: 1
                            }).filter(e => e.Times >= this.MIN_SEAMLESS),
                            n = [];
                        return t.forEach(e => {
                            if (!n.find(t => t.Number === e.Number)) {
                                const s = Math.max(...t.filter(t => t.Number === e.Number).map(e => e.Times));
                                n.push({
                                    Number: e.Number,
                                    Times: s
                                });
                            }
                        }), n;
                    }
                    _getNumberMissingTimes(e) {
                        return null != e && Array.isArray(e) && e.filter(e => e.TimesMissing >= this.MIN_TIMES_MISSING) || [];
                    }
                    _getNumberFrequence(e) {
                        if (null == e) return [];
                        const t = [e.First || "", ...e.Second || [], ...e.Third || [], ...e.Fourth || [], ...e.Fiveth || [], ...e.Sixth || [], ...e.Seventh || [], e.Jackpot || ""],
                            n = [];
                        let s = null,
                            r = null;
                        for (let e of t) e.length < 2 || (s = e.slice(-2), r = n.find(e => e.Number === s), null != r ? r.Frequence += 1 : n.push({
                            Number: s,
                            Frequence: 1
                        }));
                        return n;
                    }
                    _getLastNumberFrequenceResult(e) {
                        if (null == e || !Array.isArray(e) || e.length < 2) return [];
                        const t = [];
                        for (let n of e) {
                            const e = [n.First || "", ...n.Second || [], ...n.Third || [], ...n.Fourth || [], ...n.Fiveth || [], ...n.Sixth || [], ...n.Seventh || [], n.Jackpot || ""],
                                s = [];
                            let r = null;
                            for (let t of e) t.length < 2 || (r = t.slice(-2), -1 === s.findIndex(e => e.Number === r) && s.push({
                                Number: r,
                                Times: 1
                            }));
                            t.push(s);
                        }
                        const n = t[0];
                        for (const e of n)
                            for (let n = 1; n < t.length; n++) {
                                if (-1 === t[n].findIndex(t => t.Number === e.Number)) break;
                                e.Times++;
                            }
                        return n;
                    }
                };
            },
            7383: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(5593)),
                    i = s(n(7037)),
                    o = s(n(9984));
                t.default = class {
                    constructor() {
                        this.timesDrawn = new o.default, this.seamlessResult = new i.default, this.nothernResultCommentator = new r.default;
                    }
                    get TimesDrawn() {
                        return this.timesDrawn;
                    }
                    get SeamlessResult() {
                        return this.seamlessResult;
                    }
                    get NothernResultCommentator() {
                        return this.nothernResultCommentator;
                    }
                };
            },
            7037: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                var n;
                t.default = class {
                        constructor() {
                            this._northernIndexes = [], this._southernIndexes = [], this._northernIndexes = this._getNothernIndexes(), this._southernIndexes = this._getSouthernIndexes();
                        }
                        lookupNorthernResult(e = {
                            LotteryResults: [],
                            AllowedReverseResult: true,
                            WinNumberFrequence: 1,
                            Type: n.Duoi
                        }) {
                            if (!e.LotteryResults || 0 === e.LotteryResults.length) return [];
                            let t = [],
                                s = null;
                            for (let n = e.LotteryResults.length - 1; n >= 0; n--) s = e.LotteryResults[n], t.push({
                                StringResult: `${s.Jackpot}${s.First}${s.Second.join("")}${s.Third.join("")}${s.Fourth.join("")}${s.Fiveth.join("")}${s.Sixth.join("")}${s.Seventh.join("")}`,
                                Results: this._getWinNumbers({
                                    lotteryResult: [s.First, ...s.Second, ...s.Third, ...s.Fourth, ...s.Fiveth, ...s.Sixth, ...s.Seventh, s.Jackpot],
                                    type: e.Type
                                })
                            });
                            return this.lookup({
                                Indexes: this._northernIndexes,
                                LotteryResults: t,
                                AllowedReverseResult: e.AllowedReverseResult,
                                WinNumberFrequence: e.WinNumberFrequence
                            });
                        }
                        getNorthernResultMaxSpan(e = {
                            LotteryResults: [],
                            Type: n.Duoi
                        }) {
                            const t = this.lookupNorthernResult({
                                LotteryResults: e.LotteryResults,
                                Type: e.Type,
                                AllowedReverseResult: true,
                                WinNumberFrequence: 1
                            });
                            return this._getResultMaxSpan({
                                LookupResults: t
                            });
                        }
                        lookupSouthernResult(e = {
                            LotteryResults: [],
                            AllowedReverseResult: true,
                            WinNumberFrequence: 1,
                            Type: n.Duoi
                        }) {
                            if (!e.LotteryResults || 0 === e.LotteryResults.length) return [];
                            let t = [],
                                s = null;
                            for (let n = e.LotteryResults.length - 1; n >= 0; n--) s = e.LotteryResults[n], t.push({
                                StringResult: `${s.Eighth}${s.Seventh}${s.Sixth.join("")}${s.Fiveth}${s.Fourth.join("")}${s.Third.join("")}${s.Second}${s.First}${s.Jackpot}`,
                                Results: this._getWinNumbers({
                                    lotteryResult: [s.Eighth, s.Seventh, ...s.Sixth, s.Fiveth, ...s.Fourth, ...s.Third, s.Second, s.First, s.Jackpot],
                                    type: e.Type
                                })
                            });
                            return this.lookup({
                                Indexes: this._southernIndexes,
                                LotteryResults: t,
                                AllowedReverseResult: e.AllowedReverseResult,
                                WinNumberFrequence: e.WinNumberFrequence
                            });
                        }
                        getSouthernResultMaxSpan(e = {
                            LotteryResults: [],
                            Type: n.Duoi
                        }) {
                            const t = this.lookupSouthernResult({
                                LotteryResults: e.LotteryResults,
                                Type: e.Type,
                                AllowedReverseResult: true,
                                WinNumberFrequence: 1
                            });
                            return this._getResultMaxSpan({
                                LookupResults: t
                            });
                        }
                        lookup(e) {
                            const t = [];
                            let n, s, r = null,
                                i = null;
                            for (let o = 0; o < e.Indexes.length; o++)
                                if (!(e.AllowedReverseResult && e.Indexes[o][0] > e.Indexes[o][1]))
                                    for (let a = 0; a < e.LotteryResults.length; a++) {
                                        n = `${e.LotteryResults[a].StringResult[e.Indexes[o][0]]}${e.LotteryResults[a].StringResult[e.Indexes[o][1]]}`, s = `${e.LotteryResults[a].StringResult[e.Indexes[o][1]]}${e.LotteryResults[a].StringResult[e.Indexes[o][0]]}`;
                                        for (let c = a + 1; c < e.LotteryResults.length; c++) {
                                            r = false, i = 0;
                                            const l = e.LotteryResults[c].Results.find(e => e.Number === n);
                                            if (l && (r = true, i = l.Frequence), true === e.AllowedReverseResult && n !== s) {
                                                const t = e.LotteryResults[c].Results.find(e => e.Number === s);
                                                t && (r = true, i += t.Frequence);
                                            }
                                            if (!(true === r && i >= e.WinNumberFrequence)) break;
                                            n = `${e.LotteryResults[c].StringResult[e.Indexes[o][0]]}${e.LotteryResults[c].StringResult[e.Indexes[o][1]]}`, s = `${e.LotteryResults[c].StringResult[e.Indexes[o][1]]}${e.LotteryResults[c].StringResult[e.Indexes[o][0]]}`, c === e.LotteryResults.length - 1 && t.push({
                                                Number: n,
                                                Index: e.Indexes[o],
                                                Times: c - a
                                            });
                                        }
                                    }
                            return t;
                        }
                        _getResultMaxSpan(e) {
                            if (!e.LookupResults || 0 === e.LookupResults.length) return [];
                            let t = null,
                                n = null,
                                s = [];
                            for (let r = 0; r <= 99; r++) t = r < 10 ? `0${r}` : `${r}`, n = e.LookupResults.filter(e => e.Number === t).sort((e, t) => t.Times - e.Times)[0], s.push({
                                Number: t,
                                Times: n ? n.Times : 0,
                                Position: n ? n.Index : [-1, -1]
                            });
                            return s;
                        }
                        _getWinNumbers(e) {
                            const t = [];
                            let s = null,
                                r = null;
                            for (let i of e.lotteryResult) s = e.type === n.Duoi ? i.slice(-2) : i.slice(0, 2), r = t.find(e => e.Number === s), r ? r.Frequence += 1 : t.push({
                                Number: s,
                                Frequence: 1
                            });
                            return t;
                        }
                        _getNothernIndexes() {
                            const e = [];
                            for (let t = 0; t < 107; t++) {
                                for (let n = 0; n < t; n++) e.push([t, n]);
                                for (let n = t + 1; n < 107; n++) e.push([t, n]);
                            }
                            return e;
                        }
                        _getSouthernIndexes() {
                            const e = [];
                            for (let t = 0; t < 82; t++) {
                                for (let n = 0; n < t; n++) e.push([t, n]);
                                for (let n = t + 1; n < 82; n++) e.push([t, n]);
                            }
                            return e;
                        }
                    },
                    function(e) {
                        e[e.Dau = -1] = "Dau", e[e.Duoi = 1] = "Duoi";
                    }(n || (n = {}));
            },
            9984: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/result-stats/player/times-drawn`;
                    }
                    async getMissing(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/missing?gameType=${e.GameType}&statsType=${e.StatsType}`);
                    }
                };
            },
            3360: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/terms/player`;
                    }
                    async latest() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/latest`);
                    }
                };
            },
            3219: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.LotusClass = undefined;
                const r = s(n(2967)),
                    i = s(n(7520)),
                    o = s(n(2411)),
                    a = s(n(7019)),
                    c = s(n(1387)),
                    l = s(n(6551)),
                    u = s(n(8387)),
                    h = s(n(2619)),
                    d = s(n(6195)),
                    f = s(n(5403)),
                    p = s(n(9387)),
                    g = s(n(1455));
                t.LotusClass = class {
                    constructor() {
                        this.config = {
                            Urls: {}
                        }, this.restClient = new o.default, this.realtimeClient = new i.default, this.user = new r.default, this.lottery = new a.default, this.wmCasino = new c.default, this.reporting = new l.default, this.communication = new u.default, this.public = new h.default, this.lottery789 = new d.default, this.senCasino = new f.default, this.saba = new p.default, this.telegram = new g.default;
                    }
                    configure(e) {
                        const t = e && e || {};
                        this.config = Object.assign({}, this.config, t), this.restClient.configClient(), this.realtimeClient.configure();
                    }
                    get Realtime() {
                        return this.realtimeClient;
                    }
                    get RestClient() {
                        return this.restClient;
                    }
                    get User() {
                        return this.user;
                    }
                    get Lottery() {
                        return this.lottery;
                    }
                    get WMCasino() {
                        return this.wmCasino;
                    }
                    get Reporting() {
                        return this.reporting;
                    }
                    get Communication() {
                        return this.communication;
                    }
                    get Public() {
                        return this.public;
                    }
                    get Lottery789() {
                        return this.lottery789;
                    }
                    get SenCasino() {
                        return this.senCasino;
                    }
                    get Saba() {
                        return this.saba;
                    }
                    get Telegram() {
                        return this.telegram;
                    }
                    get Config() {
                        return this.config;
                    }
                };
            },
            8259: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(1768));
                t.default = class {
                    constructor() {
                        this.notification = new r.default;
                    }
                    get Notification() {
                        return this.notification;
                    }
                };
            },
            1768: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Communication}/notifications/public/notification`;
                    }
                    async latest() {
                        return await s.Lotus.Public.RestClient.get(`${this.baseUrl}/latest`);
                    }
                };
            },
            1243: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(9386)),
                    i = s(n(4162));
                t.default = class {
                    constructor() {
                        this.lotteryResult = new i.default, this.odds = new r.default;
                    }
                    get Odds() {
                        return this.odds;
                    }
                    get LotteryResult() {
                        return this.lotteryResult;
                    }
                };
            },
            4162: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/lottery-results/public`;
                    }
                    async getResultsByDate(e) {
                        return await s.Lotus.Public.RestClient.get(`${this.baseUrl}?date=${e.Date}`);
                    }
                };
            },
            9386: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery}/odds/public`;
                    }
                    async getOdds(e) {
                        if (!e.GameTypes || !e.BetTypes) return [];
                        const t = [];
                        return e.GameTypes.forEach(e => {
                            t.push(`gameTypes=${e}`);
                        }), e.BetTypes.forEach(e => {
                            t.push(`betTypes=${e}`);
                        }), await s.Lotus.Public.RestClient.get(`${this.baseUrl}?${t.join("&")}`);
                    }
                    async getLiveOdds(e) {
                        return await s.Lotus.Public.RestClient.get(`${this.baseUrl}/live?gameType=${e.GameType}&betType=${e.BetType}`);
                    }
                };
            },
            9571: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(4492)),
                    i = s(n(7472));
                t.default = class {
                    constructor() {
                        this.lotteryResult = new i.default, this.odds = new r.default;
                    }
                    get Odds() {
                        return this.odds;
                    }
                    get LotteryResult() {
                        return this.lotteryResult;
                    }
                };
            },
            7472: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/lottery-results/public`;
                    }
                    async getResultsByDate(e) {
                        const t = [`date=${e.Date}`];
                        return e.GameTypes.forEach(e => {
                            t.push(`gameTypes=${e}`);
                        }), await s.Lotus.Public.RestClient.get(`${this.baseUrl}?${t.join("&")}`);
                    }
                    async getLatestResultByGameType(e) {
                        return await s.Lotus.Public.RestClient.get(`${this.baseUrl}/latest?gameType=${e.GameType}`);
                    }
                };
            },
            4492: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Lottery789}/odds/public`;
                    }
                    async getOdds(e) {
                        if (!e.BetTypes) return [];
                        const t = [`gameType=${e.GameType}`];
                        return e.BetTypes.forEach(e => {
                            t.push(`betTypes=${e}`);
                        }), await s.Lotus.Public.RestClient.get(`${this.baseUrl}?${t.join("&")}`);
                    }
                    async getLiveOdds(e) {
                        const t = [`gameType=${e.GameType}`];
                        return e.BetTypes.forEach(e => {
                            t.push(`betTypes=${e}`);
                        }), await s.Lotus.Public.RestClient.get(`${this.baseUrl}/live?${t.join("&")}`);
                    }
                };
            },
            2619: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(1243)),
                    i = s(n(8259)),
                    o = s(n(7595)),
                    a = s(n(9131)),
                    c = s(n(9571)),
                    l = s(n(1435));
                t.default = class {
                    constructor() {
                        this.restClient = new o.default, this.lottery = new r.default, this.lottery789 = new c.default, this.communication = new i.default, this.wmCasino = new a.default, this.saba = new l.default;
                    }
                    get Lottery() {
                        return this.lottery;
                    }
                    get Lottery789() {
                        return this.lottery789;
                    }
                    get Communication() {
                        return this.communication;
                    }
                    get WMCasino() {
                        return this.wmCasino;
                    }
                    get Saba() {
                        return this.saba;
                    }
                    get RestClient() {
                        return this.restClient;
                    }
                };
            },
            4634: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Saba}/games/game-play/public`;
                    }
                    async getUrl(e) {
                        return await s.Lotus.Public.RestClient.post(`${this.baseUrl}/url`, e);
                    }
                };
            },
            1435: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(4634));
                t.default = class {
                    constructor() {
                        this.gamePlay = new r.default;
                    }
                    get GamePlay() {
                        return this.gamePlay;
                    }
                };
            },
            6600: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.WMCasino}/games/public/game-play`;
                    }
                    async loginGame(e) {
                        return await s.Lotus.Public.RestClient.post(`${this.baseUrl}/login-game`, {
                            AccessGame: e.AccessGame,
                            ReturnUrl: e.ReturnUrl
                        });
                    }
                };
            },
            9131: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(6600));
                t.default = class {
                    constructor() {
                        this.gamePlay = new r.default;
                    }
                    get GamePlay() {
                        return this.gamePlay;
                    }
                };
            },
            7520: function(e, t, n) {
                "use strict";
                var s = this && this.__createBinding || (Object.create ? function(e, t, n, s) {
                        undefined === s && (s = n);
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
                            enumerable: true,
                            get: function() {
                                return t[n];
                            }
                        }), Object.defineProperty(e, s, r);
                    } : function(e, t, n, s) {
                        undefined === s && (s = n), e[s] = t[n];
                    }),
                    r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: true,
                            value: t
                        });
                    } : function(e, t) {
                        e.default = t;
                    }),
                    i = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && s(t, e, n);
                        return r(t, e), t;
                    },
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const a = i(n(3660)),
                    c = o(n(5285)),
                    l = n(6916);
                class u extends c.default {
                    constructor() {
                        super();
                    }
                    async connect() {
                        if (!l.Lotus.User.isAuthenticated) throw new Error("Please authenticate before connecting to server");
                        this.client = new a.Realtime({
                            autoConnect: false,
                            authCallback: async (e, t) => {
                                t(null, await l.Lotus.User.Current.getAblyToken());
                            },
                            disconnectedRetryTimeout: 3e3,
                            suspendedRetryTimeout: 5e3
                        }), this.client.connect();
                    }
                }
                t.default = u;
            },
            6551: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(8076));
                t.default = class {
                    constructor() {
                        this.statement = new r.default;
                    }
                    get Statement() {
                        return this.statement;
                    }
                };
            },
            8076: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Reporting}/statements/player/statements`;
                    }
                    async getReportByProductionDate(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return Array.isArray(e.ProductTypes) && e.ProductTypes.length && e.ProductTypes.forEach(e => {
                            t.push(`productTypes=${e}`);
                        }), await s.Lotus.RestClient.get(`${this.baseUrl}/production-date?${t.join("&")}`);
                    }
                };
            },
            2411: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(7830)),
                    i = n(6916);
                class o extends r.default {
                    constructor() {
                        super();
                    }
                    useAuthorizationInterceptor() {
                        this.authorizationInterceptor = this.axiosInstance.interceptors.request.use(async e => {
                            const t = await i.Lotus.User.Current.getSession();
                            return null != t && (e.headers.Authorization = "Bearer " + t.getIdToken().getJwtToken()), e;
                        });
                    }
                }
                t.default = o;
            },
            9098: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Saba}/games/game-play/player`;
                    }
                    async login(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/login`, e);
                    }
                };
            },
            3359: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.League = undefined;
                const s = n(6916);
                t.League = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Saba}/games/league`;
                    }
                    async getLeagueName(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/name?leagueId=${e.LeagueId}`);
                    }
                };
            },
            7753: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.Match = undefined;
                const s = n(6916);
                t.Match = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Saba}/games/match`;
                    }
                    async getMatchDetails(e) {
                        const t = [];
                        return e.MatchIds.forEach(e => {
                            t.push(`matchId=${e}`);
                        }), await s.Lotus.RestClient.get(`${this.baseUrl}/details?${t.join("&")}`);
                    }
                };
            },
            8563: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(4484));
                t.default = class {
                    constructor() {
                        this.statement = new r.default;
                    }
                    get Statement() {
                        return this.statement;
                    }
                };
            },
            4484: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Saba}/reports/statements`;
                    }
                    get playerBaseUrl() {
                        return `${this.baseUrl}/player`;
                    }
                    async getReportGroupBySportGroup(e) {
                        return await s.Lotus.RestClient.get(`${this.playerBaseUrl}/sport-group?date=${e.Date}`);
                    }
                    async getBetItems(e) {
                        const t = [`date=${e.Date}`, `sportGroup=${e.SportGroup}`];
                        return e.LastTx > 0 && t.push(`lastTx=${e.LastTx}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.playerBaseUrl}/bet-items?${t.join("&")}`);
                    }
                    async getSystemParlayDetails(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/parlay/system-parlay?refNo=${e.RefNo}`);
                    }
                    async getRNGBetItems(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/rng/bet-items?refNo=${e.RefNo}`);
                    }
                };
            },
            9387: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(9098)),
                    i = n(3359),
                    o = n(7753),
                    a = s(n(8563)),
                    c = n(279),
                    l = s(n(1891));
                t.default = class {
                    constructor() {
                        this.gamePlay = new r.default, this.wallet = new l.default, this.report = new a.default, this.league = new i.League, this.team = new c.Team, this.match = new o.Match;
                    }
                    get GamePlay() {
                        return this.gamePlay;
                    }
                    get Wallet() {
                        return this.wallet;
                    }
                    get Report() {
                        return this.report;
                    }
                    get Match() {
                        return this.match;
                    }
                    get Team() {
                        return this.team;
                    }
                    get League() {
                        return this.league;
                    }
                };
            },
            279: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.Team = undefined;
                const s = n(6916);
                t.Team = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Saba}/games/team`;
                    }
                    async getTeamName(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/name?teamId=${e.TeamId}`);
                    }
                };
            },
            1891: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Saba}/games/wallet/player`;
                    }
                    async getBalance() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/balance`);
                    }
                    async transferBalance(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/transfer-balance`, e);
                    }
                };
            },
            6837: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(4785)),
                    i = s(n(7613));
                t.default = class {
                    constructor() {
                        this._sedieGame = new i.default, this._politics = new r.default;
                    }
                    get Sedie() {
                        return this._sedieGame;
                    }
                    get Politics() {
                        return this._politics;
                    }
                };
            },
            8880: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Politics}/events/player`;
                    }
                    async getEvent() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/event`);
                    }
                };
            },
            7446: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Politics}/game-play/player`;
                    }
                    async play(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/play`, e);
                    }
                };
            },
            204: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Politics}/events/player`;
                    }
                    async getOdds() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/odds`);
                    }
                };
            },
            4785: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(8880)),
                    i = s(n(204)),
                    o = s(n(8035)),
                    a = s(n(7446)),
                    c = n(6916),
                    l = s(n(5820)),
                    u = s(n(7396));
                t.default = class {
                    constructor() {
                        this._event = new r.default, this._odds = new i.default, this._userGame = new o.default, this._gamePlay = new a.default, this._report = new l.default;
                    }
                    get Event() {
                        return this._event;
                    }
                    get Odds() {
                        return this._odds;
                    }
                    get UserGame() {
                        return this._userGame;
                    }
                    get GamePlay() {
                        return this._gamePlay;
                    }
                    get Report() {
                        return this._report;
                    }
                    get Realtime() {
                        if (null == c.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == c.Lotus.Realtime.Client.auth || !c.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this._politicsRealtime || (this._politicsRealtime = new u.default), this._politicsRealtime;
                    }
                };
            },
            7396: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(7007);
                class r extends s.EventEmitter {
                    constructor() {
                        super();
                    }
                    configure() {}
                    async subcribe(e) {}
                    async unsubscribe() {}
                }
                t.default = r;
            },
            5820: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Politics}/reports/player/statements`;
                    }
                    async getBetItemsByEvent(e) {
                        const t = [`event=${e.Event}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.baseUrl}/bet-items-by-event?${t.join("&")}`);
                    }
                    async getBetItems(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`);
                    }
                };
            },
            8035: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Politics}/events/player`;
                    }
                    async getUserGame() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/user-game`);
                    }
                };
            },
            1915: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Sedie}/game-play/player/game-play`;
                    }
                    async join(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/join`, e);
                    }
                    async multiJoin(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/multi-join`, e);
                    }
                    async leave(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/leave`, e);
                    }
                    async play(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/play`, e);
                    }
                };
            },
            2923: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Sedie}/game-play/player/lobby`;
                    }
                    async listAreas() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}`);
                    }
                };
            },
            9260: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Sedie}/games/player/parameters`;
                    }
                    async getParameters() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/list`);
                    }
                };
            },
            1033: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Games.Sedie}/reports/player/statements`;
                    }
                    async getBetItems(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`);
                    }
                };
            },
            7613: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(9260)),
                    i = s(n(1915)),
                    o = s(n(6152)),
                    a = n(6916),
                    c = s(n(1033)),
                    l = s(n(2923));
                t.default = class {
                    constructor() {
                        this._parameter = new r.default, this._gamePlay = new i.default, this._lobby = new l.default, this._report = new c.default;
                    }
                    get Parameter() {
                        return this._parameter;
                    }
                    get Lobby() {
                        return this._lobby;
                    }
                    get GamePlay() {
                        return this._gamePlay;
                    }
                    get Report() {
                        return this._report;
                    }
                    get Realtime() {
                        if (null == a.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == a.Lotus.Realtime.Client.auth || !a.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this._sedieRealtime || (this._sedieRealtime = new o.default), this._sedieRealtime;
                    }
                };
            },
            6152: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(7007),
                    r = n(6916),
                    i = n(189),
                    o = n(4852);
                class a extends s.EventEmitter {
                    constructor() {
                        super(), this._ablyChannels = new Map;
                    }
                    configure() {}
                    async subcribe(e) {
                        if (this._ablyChannels.has(e.AreaNumber)) return false;
                        try {
                            const t = r.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_SEN_CASINO_GAMETYPE_AREANUMBER}:${o.GameType.Sedie}:${e.AreaNumber}`);
                            return await t.subscribe(t => {
                                this.emit(`area:${e.AreaNumber}:event:${t.name}`, t.data, t);
                            }), this._ablyChannels.set(e.AreaNumber, t), true;
                        } catch (e) {
                            return console.error(e), false;
                        }
                    }
                    async unsubscribe(e) {
                        try {
                            const t = this._ablyChannels.get(e.AreaNumber);
                            return null == t || (await t.detach(), this._ablyChannels.delete(e.AreaNumber), this.removeLocalEventHandlers(e.AreaNumber)), true;
                        } catch (e) {
                            return console.error(e), false;
                        }
                    }
                    async unsubscribeAll() {
                        if (null == this._ablyChannels) return true;
                        for (const e of this._ablyChannels.keys()) await this.unsubscribe({
                            AreaNumber: e
                        });
                        return this._ablyChannels.clear(), true;
                    }
                    removeLocalEventHandlers(e) {
                        const t = this.eventNames().filter(t => "string" == typeof t && t.startsWith(`area:${e}`));
                        if (Array.isArray(t) && t.length > 0)
                            for (const e of t) this.removeAllListeners(e);
                    }
                }
                t.default = a;
            },
            6993: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(2378));
                t.default = class {
                    constructor() {
                        this.statement = new r.default;
                    }
                    get Statement() {
                        return this.statement;
                    }
                };
            },
            2378: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Base}/reports/player/statements`;
                    }
                    async getReportGroupByGameType(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`);
                    }
                };
            },
            5403: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(6837)),
                    i = s(n(3757)),
                    o = s(n(6993));
                t.default = class {
                    constructor() {
                        this._games = new r.default, this._userGame = new i.default, this._report = new o.default;
                    }
                    get Games() {
                        return this._games;
                    }
                    get UserGame() {
                        return this._userGame;
                    }
                    get Report() {
                        return this._report;
                    }
                };
            },
            3757: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.SenCasino.Base}/games/player/user-games`;
                    }
                    async updateDefaultBetLimit(e) {
                        return await s.Lotus.RestClient.put(`${this.baseUrl}/default-bet-limit`, e);
                    }
                    async updatePlayerName(e) {
                        return await s.Lotus.RestClient.put(`${this.baseUrl}/player-name`, e);
                    }
                    async getPlayerSettings() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/settings`);
                    }
                };
            },
            1455: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.TelegramChatApp}`;
                    }
                    async generateLink() {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/generate-link`);
                    }
                    async unlink() {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/unlink`);
                    }
                };
            },
            6910: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(3657)),
                    i = n(6916);
                class o extends r.default {
                    constructor(e) {
                        super({
                            username: e.username,
                            storage: e.storage,
                            userPoolId: i.Lotus.Config.UserPoolId,
                            userPoolClientId: i.Lotus.Config.UserPoolClientId,
                            advancedSecurityDataCollectionFlag: i.Lotus.Config.AdvancedSecurityDataCollectionFlag
                        });
                    }
                    async authenticate(e) {
                        return await this.authenticateInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/sign-in`,
                            username: e.username,
                            password: e.password
                        });
                    }
                    async authTelegram(e) {
                        return await this.authTelegramInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.TelegramChatApp}/sign-in`,
                            initData: e.initData
                        });
                    }
                    async completeNewPassword(e) {
                        return await this.completeNewPasswordInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/complete-new-password`,
                            newPassword: e.newPassword
                        });
                    }
                    async confirmSignIn(e) {
                        return await this.confirmSignInInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/confirm-sign-in`,
                            code: e.code
                        });
                    }
                    async getAblyToken() {
                        return await i.Lotus.RestClient.post(`${i.Lotus.Config.Urls.Identity}/auth/realtime`);
                    }
                    async profile(e) {
                        return await this.profileInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/users/profile`,
                            bypassCache: e.bypassCache
                        });
                    }
                    async changePassword(e) {
                        const t = this.signInUserSession.getAccessToken().getJwtToken();
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/password`, {
                            AccessToken: t,
                            Password: e.password,
                            NewPassword: e.newPassword
                        });
                    }
                    async changePreferredUsername(e) {
                        const t = this.signInUserSession.getAccessToken().getJwtToken();
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/preferred-username`, {
                            AccessToken: t,
                            NewName: e.name
                        });
                    }
                    async checkPreferredUsername(e) {
                        return await i.Lotus.RestClient.post(`${i.Lotus.Config.Urls.Identity}/users/check-preferred-username`, {
                            PreferredUsername: e.name
                        });
                    }
                    async refreshSession(e) {
                        return await this.refreshSessionInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/refresh-token`,
                            refreshToken: e
                        });
                    }
                    async generateTOTPSecretCode() {
                        return this.generateTOTPSecretCodeInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/mfa/generate-totp-secret-code`
                        });
                    }
                    async enableMFA(e) {
                        return this.enableMFAInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/mfa/enable`,
                            code: e.code
                        });
                    }
                    async disableMFA(e) {
                        return this.disableMFAInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/mfa/disable`,
                            code: e.code
                        });
                    }
                    async updateProfile(e) {
                        return await i.Lotus.RestClient.put(`${i.Lotus.Config.Urls.Identity}/users/profile`, {
                            FullName: e.fullName,
                            About: e.about
                        });
                    }
                    async signOut() {
                        i.Lotus.User && i.Lotus.User.Realtime && i.Lotus.User.Realtime.unsubscribe(), i.Lotus.Lottery && i.Lotus.Lottery.Realtime && i.Lotus.Lottery.Realtime.unsubscribe(), i.Lotus.Lottery789 && i.Lotus.Lottery789.Realtime && i.Lotus.Lottery789.Realtime.unsubscribe(), i.Lotus.SenCasino && i.Lotus.SenCasino.Games.Sedie.Realtime && await i.Lotus.SenCasino.Games.Sedie.Realtime.unsubscribeAll();
                        const e = this.signInUserSession.getAccessToken().getJwtToken();
                        null != e && await super.signOutInternal(i.Lotus.RestClient, {
                            url: `${i.Lotus.Config.Urls.Identity}/auth/sign-out`,
                            accessToken: e
                        });
                    }
                }
                t.default = o;
            },
            2967: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(4291)),
                    i = s(n(6910)),
                    o = s(n(2990)),
                    a = n(6916),
                    c = s(n(750)),
                    l = s(n(3633));
                t.default = class {
                    constructor() {
                        this.cognitorUser = null, this.sessionValid = false, this.storage = (new r.default).getStorage(), this.wallet = new l.default;
                    }
                    get Wallet() {
                        return this.wallet;
                    }
                    get Current() {
                        if (!this.cognitorUser) throw new Error("Current user is not instance. Please check authentication firstly.");
                        if (false === this.sessionValid) throw new Error("Please sign in before using User.Current");
                        return this.cognitorUser;
                    }
                    async authenticate(e) {
                        const t = new i.default({
                                username: e.username,
                                storage: this.storage
                            }),
                            n = await t.authenticate({
                                username: e.username,
                                password: e.password
                            });
                        return this.cognitorUser = t, this.sessionValid = false, n instanceof o.default ? (this.sessionValid = n.isValid(), {}) : n;
                    }
                    async authTelegram(e) {
                        const t = new i.default({
                                username: "",
                                storage: this.storage
                            }),
                            n = await t.authTelegram({
                                initData: e.initData
                            });
                        return this.cognitorUser = t, this.sessionValid = false, n instanceof o.default ? (this.sessionValid = n.isValid(), {}) : n;
                    }
                    async completeNewPassword(e) {
                        if (!this.cognitorUser || true === this.sessionValid) throw new Error("Cannot use completeNewPassword() at this context.");
                        const t = await this.cognitorUser.completeNewPassword({
                            newPassword: e.newPassword
                        });
                        return t instanceof o.default ? (this.sessionValid = t.isValid(), {}) : t;
                    }
                    async confirmSignIn(e) {
                        if (!this.cognitorUser || true === this.sessionValid) throw new Error("Cannot use confirmSignIn() at this context.");
                        const t = await this.cognitorUser.confirmSignIn({
                            code: e.code
                        });
                        return t instanceof o.default ? (this.sessionValid = t.isValid(), {}) : t;
                    }
                    async isAuthenticated() {
                        try {
                            const e = "Lotus.LastAuthUser",
                                t = this.storage.getItem(e);
                            if (!t) return false;
                            if (null !== this.cognitorUser && true === this.sessionValid) return await this.cognitorUser.getSession(), true;
                            const n = new i.default({
                                username: t,
                                storage: this.storage
                            });
                            return await n.getSession(), this.cognitorUser = n, this.sessionValid = true, true;
                        } catch (e) {
                            return false;
                        }
                    }
                    get Realtime() {
                        if (null == a.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == a.Lotus.Realtime.Client.auth || !a.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new c.default), this.realtime;
                    }
                };
            },
            750: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(7007),
                    r = n(189),
                    i = n(6916);
                class o extends s.EventEmitter {
                    constructor() {
                        super(), this.generalNotificationChannel = null, this.selfChannel = null, this.ancestorsChannels = [];
                    }
                    configure() {}
                    async subcribe() {
                        const e = (await i.Lotus.User.Current.getSession()).getIdToken().getUserPath();
                        e ? await this.subscribeAncestorsChannels({
                            ancestors: e.split(",")
                        }) : console.error("Không tìm thấy thông tin của tài khoản "), await this.subscribeSelfChannel(), await this.subscribeGeneralChannel();
                    }
                    async subscribeAncestorsChannels(e) {
                        let t = null;
                        const n = e.ancestors.filter(e => e.length > 0).slice(1);
                        for (let e = 0; e < n.length; e++) n[e] && (t = i.Lotus.Realtime.Client.channels.get(`${r.RealtimeChannelName.IDENTITY_ANCESTOR_USERID}:${n[e]}`), await t.subscribe(e => {
                            this.emit(`${r.RealtimeLocalChannelName.ANCESTOR}:event:${e.name}`, e.data, e);
                        }), this.ancestorsChannels.push(t));
                    }
                    async subscribeSelfChannel() {
                        this.selfChannel = i.Lotus.Realtime.Client.channels.get(`${r.RealtimeChannelName.SELF}:${i.Lotus.Realtime.Client.auth.clientId}`), await this.selfChannel.subscribe(e => {
                            this.emit(`${r.RealtimeLocalChannelName.SELF}:event:${e.name}`, e.data, e), console.log(`event=${e.name} data=${JSON.stringify(e.data)}`);
                        });
                    }
                    async subscribeGeneralChannel() {
                        this.generalNotificationChannel = i.Lotus.Realtime.Client.channels.get(`${r.RealtimeChannelName.GENERAL_NOTIFICATION_SECTION_PLAYER}`), await this.generalNotificationChannel.subscribe(e => {
                            this.emit(`${r.RealtimeLocalChannelName.GENERAL}:event:${e.name}`, e.data), console.log(`event=${e.name} data=${JSON.stringify(e.data)}`);
                        });
                    }
                    async unsubscribe() {
                        if (null !== this.selfChannel && await this.selfChannel.detach(), null !== this.generalNotificationChannel && await this.generalNotificationChannel.detach(), null !== this.ancestorsChannels)
                            for (const e of this.ancestorsChannels) await e.detach();
                    }
                }
                t.default = o;
            },
            3633: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.Identity}/wallets/player`;
                    }
                    async getWallet() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/my-wallet`);
                    }
                    async getBalance() {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/my-wallet/balance`);
                    }
                };
            },
            6616: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.WMCasino}/games/player/game-play`;
                    }
                    async loginGame(e) {
                        return await s.Lotus.RestClient.post(`${this.baseUrl}/login-game`, {
                            AccessGame: e.AccessGame,
                            ReturnUrl: e.ReturnUrl
                        });
                    }
                };
            },
            8025: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(258));
                t.default = class {
                    constructor() {
                        this.statement = new r.default;
                    }
                    get Statement() {
                        return this.statement;
                    }
                };
            },
            258: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const s = n(6916);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${s.Lotus.Config.Urls.WMCasino}/reports/player/statements`;
                    }
                    async getReportGroupByGameType(e) {
                        return await s.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`);
                    }
                    async getBetItems(e) {
                        const t = [`date=${e.Date}`, `gameType=${e.GameType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await s.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`);
                    }
                };
            },
            1387: function(e, t, n) {
                "use strict";
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    };
                };
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                const r = s(n(6616)),
                    i = s(n(8025));
                t.default = class {
                    constructor() {
                        this.gamePlay = new r.default, this.report = new i.default;
                    }
                    get GamePlay() {
                        return this.gamePlay;
                    }
                    get Report() {
                        return this.report;
                    }
                };
            },
            6916: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                }), t.AdjustingTimer = t.Lotus = undefined;
                const s = n(3219),
                    r = n(514);
                Object.defineProperty(t, "AdjustingTimer", {
                    enumerable: true,
                    get: function() {
                        return r.AdjustingTimer;
                    }
                });
                let i = null;
                i || (i = new s.LotusClass);
                const o = i;
                t.Lotus = o;
            },
            6425: (e, t, n) => {
                "use strict";

                function s(e, t) {
                    return function() {
                        return e.apply(t, arguments);
                    };
                }
                const {
                    toString: r
                } = Object.prototype, {
                    getPrototypeOf: i
                } = Object, o = (a = Object.create(null), e => {
                    const t = r.call(e);
                    return a[t] || (a[t] = t.slice(8, -1).toLowerCase());
                });
                var a;
                const c = e => (e = e.toLowerCase(), t => o(t) === e),
                    l = e => t => typeof t === e,
                    {
                        isArray: u
                    } = Array,
                    h = l("undefined");
                const d = c("ArrayBuffer");
                const f = l("string"),
                    p = l("function"),
                    g = l("number"),
                    m = e => null !== e && "object" == typeof e,
                    y = e => {
                        if ("object" !== o(e)) return false;
                        const t = i(e);
                        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
                    },
                    b = c("Date"),
                    v = c("File"),
                    w = c("Blob"),
                    R = c("FileList"),
                    C = c("URLSearchParams");

                function T(e, t, {
                    allOwnKeys: n = false
                } = {}) {
                    if (null == e) return;
                    let s, r;
                    if ("object" != typeof e && (e = [e]), u(e))
                        for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
                    else {
                        const r = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                            i = r.length;
                        let o;
                        for (s = 0; s < i; s++) o = r[s], t.call(null, e[o], o, e);
                    }
                }

                function L(e, t) {
                    t = t.toLowerCase();
                    const n = Object.keys(e);
                    let s, r = n.length;
                    for (; r-- > 0;)
                        if (s = n[r], t === s.toLowerCase()) return s;
                    return null;
                }
                const O = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : n.g,
                    _ = e => !h(e) && e !== O;
                const S = (k = "undefined" != typeof Uint8Array && i(Uint8Array), e => k && e instanceof k);
                var k;
                const I = c("HTMLFormElement"),
                    A = (({
                        hasOwnProperty: e
                    }) => (t, n) => e.call(t, n))(Object.prototype),
                    E = c("RegExp"),
                    M = (e, t) => {
                        const n = Object.getOwnPropertyDescriptors(e),
                            s = {};
                        T(n, (n, r) => {
                            let i;
                            false !== (i = t(n, r, e)) && (s[r] = i || n);
                        }), Object.defineProperties(e, s);
                    },
                    P = "abcdefghijklmnopqrstuvwxyz",
                    U = "0123456789",
                    D = {
                        DIGIT: U,
                        ALPHA: P,
                        ALPHA_DIGIT: P + P.toUpperCase() + U
                    };
                const N = c("AsyncFunction");
                var B = {
                    isArray: u,
                    isArrayBuffer: d,
                    isBuffer: function(e) {
                        return null !== e && !h(e) && null !== e.constructor && !h(e.constructor) && p(e.constructor.isBuffer) && e.constructor.isBuffer(e);
                    },
                    isFormData: e => {
                        let t;
                        return e && ("function" == typeof FormData && e instanceof FormData || p(e.append) && ("formdata" === (t = o(e)) || "object" === t && p(e.toString) && "[object FormData]" === e.toString()));
                    },
                    isArrayBufferView: function(e) {
                        let t;
                        return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && d(e.buffer), t;
                    },
                    isString: f,
                    isNumber: g,
                    isBoolean: e => true === e || false === e,
                    isObject: m,
                    isPlainObject: y,
                    isUndefined: h,
                    isDate: b,
                    isFile: v,
                    isBlob: w,
                    isRegExp: E,
                    isFunction: p,
                    isStream: e => m(e) && p(e.pipe),
                    isURLSearchParams: C,
                    isTypedArray: S,
                    isFileList: R,
                    forEach: T,
                    merge: function e() {
                        const {
                            caseless: t
                        } = _(this) && this || {}, n = {}, s = (s, r) => {
                            const i = t && L(n, r) || r;
                            y(n[i]) && y(s) ? n[i] = e(n[i], s) : y(s) ? n[i] = e({}, s) : u(s) ? n[i] = s.slice() : n[i] = s;
                        };
                        for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && T(arguments[e], s);
                        return n;
                    },
                    extend: (e, t, n, {
                        allOwnKeys: r
                    } = {}) => (T(t, (t, r) => {
                        n && p(t) ? e[r] = s(t, n) : e[r] = t;
                    }, {
                        allOwnKeys: r
                    }), e),
                    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
                    inherits: (e, t, n, s) => {
                        e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                            value: t.prototype
                        }), n && Object.assign(e.prototype, n);
                    },
                    toFlatObject: (e, t, n, s) => {
                        let r, o, a;
                        const c = {};
                        if (t = t || {}, null == e) return t;
                        do {
                            for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0;) a = r[o], s && !s(a, e, t) || c[a] || (t[a] = e[a], c[a] = true);
                            e = false !== n && i(e);
                        } while (e && (!n || n(e, t)) && e !== Object.prototype);
                        return t;
                    },
                    kindOf: o,
                    kindOfTest: c,
                    endsWith: (e, t, n) => {
                        e = String(e), (undefined === n || n > e.length) && (n = e.length), n -= t.length;
                        const s = e.indexOf(t, n);
                        return -1 !== s && s === n;
                    },
                    toArray: e => {
                        if (!e) return null;
                        if (u(e)) return e;
                        let t = e.length;
                        if (!g(t)) return null;
                        const n = new Array(t);
                        for (; t-- > 0;) n[t] = e[t];
                        return n;
                    },
                    forEachEntry: (e, t) => {
                        const n = (e && e[Symbol.iterator]).call(e);
                        let s;
                        for (;
                            (s = n.next()) && !s.done;) {
                            const n = s.value;
                            t.call(e, n[0], n[1]);
                        }
                    },
                    matchAll: (e, t) => {
                        let n;
                        const s = [];
                        for (; null !== (n = e.exec(t));) s.push(n);
                        return s;
                    },
                    isHTMLForm: I,
                    hasOwnProperty: A,
                    hasOwnProp: A,
                    reduceDescriptors: M,
                    freezeMethods: e => {
                        M(e, (t, n) => {
                            if (p(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return false;
                            const s = e[n];
                            p(s) && (t.enumerable = false, "writable" in t ? t.writable = false : t.set || (t.set = () => {
                                throw Error("Can not rewrite read-only method '" + n + "'");
                            }));
                        });
                    },
                    toObjectSet: (e, t) => {
                        const n = {},
                            s = e => {
                                e.forEach(e => {
                                    n[e] = true;
                                });
                            };
                        return u(e) ? s(e) : s(String(e).split(t)), n;
                    },
                    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
                        return t.toUpperCase() + n;
                    }),
                    noop: () => {},
                    toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
                    findKey: L,
                    global: O,
                    isContextDefined: _,
                    ALPHABET: D,
                    generateString: (e = 16, t = D.ALPHA_DIGIT) => {
                        let n = "";
                        const {
                            length: s
                        } = t;
                        for (; e--;) n += t[Math.random() * s | 0];
                        return n;
                    },
                    isSpecCompliantForm: function(e) {
                        return !!(e && p(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
                    },
                    toJSONObject: e => {
                        const t = new Array(10),
                            n = (e, s) => {
                                if (m(e)) {
                                    if (t.indexOf(e) >= 0) return;
                                    if (!("toJSON" in e)) {
                                        t[s] = e;
                                        const r = u(e) ? [] : {};
                                        return T(e, (e, t) => {
                                            const i = n(e, s + 1);
                                            !h(i) && (r[t] = i);
                                        }), t[s] = undefined, r;
                                    }
                                }
                                return e;
                            };
                        return n(e, 0);
                    },
                    isAsyncFn: N,
                    isThenable: e => e && (m(e) || p(e)) && p(e.then) && p(e.catch)
                };

                function x(e, t, n, s, r) {
                    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), s && (this.request = s), r && (this.response = r);
                }
                B.inherits(x, Error, {
                    toJSON: function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: B.toJSONObject(this.config),
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        };
                    }
                });
                const G = x.prototype,
                    j = {};
                ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
                    j[e] = {
                        value: e
                    };
                }), Object.defineProperties(x, j), Object.defineProperty(G, "isAxiosError", {
                    value: true
                }), x.from = (e, t, n, s, r, i) => {
                    const o = Object.create(G);
                    return B.toFlatObject(e, o, function(e) {
                        return e !== Error.prototype;
                    }, e => "isAxiosError" !== e), x.call(o, e.message, t, n, s, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
                };

                function F(e) {
                    return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
                }

                function H(e, t, n) {
                    return e ? e.concat(t).map(function(e, t) {
                        return e = F(e), !n && t ? "[" + e + "]" : e;
                    }).join(n ? "." : "") : t;
                }
                const V = B.toFlatObject(B, {}, null, function(e) {
                    return /^is[A-Z]/.test(e);
                });

                function q(e, t, n) {
                    if (!B.isObject(e)) throw new TypeError("target must be an object");
                    t = t || new FormData;
                    const s = (n = B.toFlatObject(n, {
                            metaTokens: true,
                            dots: false,
                            indexes: false
                        }, false, function(e, t) {
                            return !B.isUndefined(t[e]);
                        })).metaTokens,
                        r = n.visitor || l,
                        i = n.dots,
                        o = n.indexes,
                        a = (n.Blob || "undefined" != typeof Blob && Blob) && B.isSpecCompliantForm(t);
                    if (!B.isFunction(r)) throw new TypeError("visitor must be a function");

                    function c(e) {
                        if (null === e) return "";
                        if (B.isDate(e)) return e.toISOString();
                        if (!a && B.isBlob(e)) throw new x("Blob is not supported. Use a Buffer instead.");
                        return B.isArrayBuffer(e) || B.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e;
                    }

                    function l(e, n, r) {
                        let a = e;
                        if (e && !r && "object" == typeof e)
                            if (B.endsWith(n, "{}")) n = s ? n : n.slice(0, -2), e = JSON.stringify(e);
                            else if (B.isArray(e) && function(e) {
                                return B.isArray(e) && !e.some($);
                            }(e) || (B.isFileList(e) || B.endsWith(n, "[]")) && (a = B.toArray(e))) return n = F(n), a.forEach(function(e, s) {
                            !B.isUndefined(e) && null !== e && t.append(true === o ? H([n], s, i) : null === o ? n : n + "[]", c(e));
                        }), false;
                        return !!(B.isPlainObject(e) || B.isArray(e)) || (t.append(H(r, n, i), c(e)), false);
                    }
                    const u = [],
                        h = Object.assign(V, {
                            defaultVisitor: l,
                            convertValue: c,
                            isVisitable: $
                        });
                    if (!B.isObject(e)) throw new TypeError("data must be an object");
                    return function e(n, s) {
                        if (!B.isUndefined(n)) {
                            if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + s.join("."));
                            u.push(n), B.forEach(n, function(n, i) {
                                true === (!(B.isUndefined(n) || null === n) && r.call(t, n, B.isString(i) ? i.trim() : i, s, h)) && e(n, s ? s.concat(i) : [i]);
                            }), u.pop();
                        }
                    }(e), t;
                }

                function W(e) {
                    const t = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+",
                        "%00": ""
                    };
                    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
                        return t[e];
                    });
                }

                function z(e, t) {
                    this._pairs = [], e && q(e, this, t);
                }
                const X = z.prototype;

                function Y(e, t, n) {
                    if (!t) return e;
                    const s = n && n.encode || J,
                        r = n && n.serialize;
                    let i;
                    if (i = r ? r(t, n) : B.isURLSearchParams(t) ? t.toString() : new z(t, n).toString(s), i) {
                        const t = e.indexOf("#"); -
                        1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + i;
                    }
                    return e;
                }
                X.append = function(e, t) {
                    this._pairs.push([e, t]);
                }, X.toString = function(e) {
                    const t = e ? function(t) {
                        return e.call(this, t, W);
                    } : W;
                    return this._pairs.map(function(e) {
                        return t(e[0]) + "=" + t(e[1]);
                    }, "").join("&");
                };
                var Z = class {
                        constructor() {
                            this.handlers = [];
                        }
                        use(e, t, n) {
                            return this.handlers.push({
                                fulfilled: e,
                                rejected: t,
                                synchronous: !!n && n.synchronous,
                                runWhen: n ? n.runWhen : null
                            }), this.handlers.length - 1;
                        }
                        eject(e) {
                            this.handlers[e] && (this.handlers[e] = null);
                        }
                        clear() {
                            this.handlers && (this.handlers = []);
                        }
                        forEach(e) {
                            B.forEach(this.handlers, function(t) {
                                null !== t && e(t);
                            });
                        }
                    },
                    K = {
                        silentJSONParsing: true,
                        forcedJSONParsing: true,
                        clarifyTimeoutError: false
                    },
                    Q = {
                        isBrowser: true,
                        classes: {
                            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : z,
                            FormData: "undefined" != typeof FormData ? FormData : null,
                            Blob: "undefined" != typeof Blob ? Blob : null
                        },
                        protocols: ["http", "https", "file", "blob", "url", "data"]
                    };
                const ee = "undefined" != typeof window && "undefined" != typeof document,
                    te = (ne = "undefined" != typeof navigator && navigator.product, ee && ["ReactNative", "NativeScript", "NS"].indexOf(ne) < 0);
                var ne;
                const se = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
                var re = {
                    ...Object.freeze({
                        __proto__: null,
                        hasBrowserEnv: ee,
                        hasStandardBrowserWebWorkerEnv: se,
                        hasStandardBrowserEnv: te
                    }),
                    ...Q
                };

                function ie(e) {
                    function t(e, n, s, r) {
                        let i = e[r++];
                        if ("__proto__" === i) return true;
                        const o = Number.isFinite(+i),
                            a = r >= e.length;
                        if (i = !i && B.isArray(s) ? s.length : i, a) return B.hasOwnProp(s, i) ? s[i] = [s[i], n] : s[i] = n, !o;
                        s[i] && B.isObject(s[i]) || (s[i] = []);
                        return t(e, n, s[i], r) && B.isArray(s[i]) && (s[i] = function(e) {
                            const t = {},
                                n = Object.keys(e);
                            let s;
                            const r = n.length;
                            let i;
                            for (s = 0; s < r; s++) i = n[s], t[i] = e[i];
                            return t;
                        }(s[i])), !o;
                    }
                    if (B.isFormData(e) && B.isFunction(e.entries)) {
                        const n = {};
                        return B.forEachEntry(e, (e, s) => {
                            t(function(e) {
                                return B.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]);
                            }(e), s, n, 0);
                        }), n;
                    }
                    return null;
                }
                const oe = {
                    transitional: K,
                    adapter: ["xhr", "http"],
                    transformRequest: [function(e, t) {
                        const n = t.getContentType() || "",
                            s = n.indexOf("application/json") > -1,
                            r = B.isObject(e);
                        r && B.isHTMLForm(e) && (e = new FormData(e));
                        if (B.isFormData(e)) return s ? JSON.stringify(ie(e)) : e;
                        if (B.isArrayBuffer(e) || B.isBuffer(e) || B.isStream(e) || B.isFile(e) || B.isBlob(e)) return e;
                        if (B.isArrayBufferView(e)) return e.buffer;
                        if (B.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), e.toString();
                        let i;
                        if (r) {
                            if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                                return q(e, new re.classes.URLSearchParams, Object.assign({
                                    visitor: function(e, t, n, s) {
                                        return re.isNode && B.isBuffer(e) ? (this.append(t, e.toString("base64")), false) : s.defaultVisitor.apply(this, arguments);
                                    }
                                }, t));
                            }(e, this.formSerializer).toString();
                            if ((i = B.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                                const t = this.env && this.env.FormData;
                                return q(i ? {
                                    "files[]": e
                                } : e, t && new t, this.formSerializer);
                            }
                        }
                        return r || s ? (t.setContentType("application/json", false), function(e, t, n) {
                            if (B.isString(e)) try {
                                return (t || JSON.parse)(e), B.trim(e);
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e;
                            }
                            return (n || JSON.stringify)(e);
                        }(e)) : e;
                    }],
                    transformResponse: [function(e) {
                        const t = this.transitional || oe.transitional,
                            n = t && t.forcedJSONParsing,
                            s = "json" === this.responseType;
                        if (e && B.isString(e) && (n && !this.responseType || s)) {
                            const n = !(t && t.silentJSONParsing) && s;
                            try {
                                return JSON.parse(e);
                            } catch (e) {
                                if (n) {
                                    if ("SyntaxError" === e.name) throw x.from(e, x.ERR_BAD_RESPONSE, this, null, this.response);
                                    throw e;
                                }
                            }
                        }
                        return e;
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: re.classes.FormData,
                        Blob: re.classes.Blob
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300;
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": undefined
                        }
                    }
                };
                B.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
                    oe.headers[e] = {};
                });
                var ae = oe;
                const ce = B.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
                const le = Symbol("internals");

                function he(e) {
                    return false === e || null == e ? e : B.isArray(e) ? e.map(he) : String(e);
                }

                function de(e, t, n, s, r) {
                    return B.isFunction(s) ? s.call(this, t, n) : (r && (t = n), B.isString(t) ? B.isString(s) ? -1 !== t.indexOf(s) : B.isRegExp(s) ? s.test(t) : undefined : undefined);
                }
                class fe {
                    constructor(e) {
                        e && this.set(e);
                    }
                    set(e, t, n) {
                        const s = this;

                        function r(e, t, n) {
                            const r = t && String(t).trim().toLowerCase();
                            if (!r) throw new Error("header name must be a non-empty string");
                            const i = B.findKey(s, r);
                            (!i || undefined === s[i] || true === n || undefined === n && false !== s[i]) && (s[i || t] = he(e));
                        }
                        const i = (e, t) => B.forEach(e, (e, n) => r(e, n, t));
                        return B.isPlainObject(e) || e instanceof this.constructor ? i(e, t) : B.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? i((e => {
                            const t = {};
                            let n, s, r;
                            return e && e.split("\n").forEach(function(e) {
                                r = e.indexOf(":"), n = e.substring(0, r).trim().toLowerCase(), s = e.substring(r + 1).trim(), !n || t[n] && ce[n] || ("set-cookie" === n ? t[n] ? t[n].push(s) : t[n] = [s] : t[n] = t[n] ? t[n] + ", " + s : s);
                            }), t;
                        })(e), t) : null != e && r(t, e, n), this;
                    }
                    get(e, t) {
                        if (e = e && String(e).trim().toLowerCase()) {
                            const n = B.findKey(this, e);
                            if (n) {
                                const e = this[n];
                                if (!t) return e;
                                if (true === t) return function(e) {
                                    const t = Object.create(null),
                                        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                    let s;
                                    for (; s = n.exec(e);) t[s[1]] = s[2];
                                    return t;
                                }(e);
                                if (B.isFunction(t)) return t.call(this, e, n);
                                if (B.isRegExp(t)) return t.exec(e);
                                throw new TypeError("parser must be boolean|regexp|function");
                            }
                        }
                    }
                    has(e, t) {
                        if (e = e && String(e).trim().toLowerCase()) {
                            const n = B.findKey(this, e);
                            return !(!n || undefined === this[n] || t && !de(0, this[n], n, t));
                        }
                        return false;
                    }
                    delete(e, t) {
                        const n = this;
                        let s = false;

                        function r(e) {
                            if (e = e && String(e).trim().toLowerCase()) {
                                const r = B.findKey(n, e);
                                !r || t && !de(0, n[r], r, t) || (delete n[r], s = true);
                            }
                        }
                        return B.isArray(e) ? e.forEach(r) : r(e), s;
                    }
                    clear(e) {
                        const t = Object.keys(this);
                        let n = t.length,
                            s = false;
                        for (; n--;) {
                            const r = t[n];
                            e && !de(0, this[r], r, e, true) || (delete this[r], s = true);
                        }
                        return s;
                    }
                    normalize(e) {
                        const t = this,
                            n = {};
                        return B.forEach(this, (s, r) => {
                            const i = B.findKey(n, r);
                            if (i) return t[i] = he(s), void delete t[r];
                            const o = e ? function(e) {
                                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                            }(r) : String(r).trim();
                            o !== r && delete t[r], t[o] = he(s), n[o] = true;
                        }), this;
                    }
                    concat(...e) {
                        return this.constructor.concat(this, ...e);
                    }
                    toJSON(e) {
                            const t = Object.create(null);
                            return B.forEach(this, (n, s) => {
                                null != n && false !== n && (t[s] = e && B.isArray(n) ? n.join(", ") : n);
                            }), t;
                        }
                        [Symbol.iterator]() {
                            return Object.entries(this.toJSON())[Symbol.iterator]();
                        }
                    toString() {
                        return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
                    }
                    get[Symbol.toStringTag]() {
                        return "AxiosHeaders";
                    }
                    static from(e) {
                        return e instanceof this ? e : new this(e);
                    }
                    static concat(e, ...t) {
                        const n = new this(e);
                        return t.forEach(e => n.set(e)), n;
                    }
                    static accessor(e) {
                        const t = (this[le] = this[le] = {
                                accessors: {}
                            }).accessors,
                            n = this.prototype;

                        function s(e) {
                            const s = e && String(e).trim().toLowerCase();
                            t[s] || (! function(e, t) {
                                const n = B.toCamelCase(" " + t);
                                ["get", "set", "has"].forEach(s => {
                                    Object.defineProperty(e, s + n, {
                                        value: function(e, n, r) {
                                            return this[s].call(this, t, e, n, r);
                                        },
                                        configurable: true
                                    });
                                });
                            }(n, e), t[s] = true);
                        }
                        return B.isArray(e) ? e.forEach(s) : s(e), this;
                    }
                }
                fe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), B.reduceDescriptors(fe.prototype, ({
                    value: e
                }, t) => {
                    let n = t[0].toUpperCase() + t.slice(1);
                    return {
                        get: () => e,
                        set(e) {
                            this[n] = e;
                        }
                    };
                }), B.freezeMethods(fe);
                var pe = fe;

                function ge(e, t) {
                    const n = this || ae,
                        s = t || n,
                        r = pe.from(s.headers);
                    let i = s.data;
                    return B.forEach(e, function(e) {
                        i = e.call(n, i, r.normalize(), t ? t.status : undefined);
                    }), r.normalize(), i;
                }

                function ye(e, t, n) {
                    x.call(this, null == e ? "canceled" : e, x.ERR_CANCELED, t, n), this.name = "CanceledError";
                }
                B.inherits(ye, x, {
                    __CANCEL__: true
                });
                var be = re.hasStandardBrowserEnv ? {
                    write(e, t, n, s, r, i) {
                        const o = [e + "=" + encodeURIComponent(t)];
                        B.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), B.isString(s) && o.push("path=" + s), B.isString(r) && o.push("domain=" + r), true === i && o.push("secure"), document.cookie = o.join("; ");
                    },
                    read(e) {
                        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null;
                    },
                    remove(e) {
                        this.write(e, "", Date.now() - 864e5);
                    }
                } : {
                    write() {},
                    read: () => null,
                    remove() {}
                };

                function ve(e, t) {
                    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
                        return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
                    }(e, t) : t;
                }
                var we = re.hasStandardBrowserEnv ? function() {
                    const e = /(msie|trident)/i.test(navigator.userAgent),
                        t = document.createElement("a");
                    let n;

                    function s(n) {
                        let s = n;
                        return e && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
                            href: t.href,
                            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                            host: t.host,
                            search: t.search ? t.search.replace(/^\?/, "") : "",
                            hash: t.hash ? t.hash.replace(/^#/, "") : "",
                            hostname: t.hostname,
                            port: t.port,
                            pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                        };
                    }
                    return n = s(window.location.href),
                        function(e) {
                            const t = B.isString(e) ? s(e) : e;
                            return t.protocol === n.protocol && t.host === n.host;
                        };
                }() : function() {
                    return true;
                };

                function Re(e, t) {
                    let n = 0;
                    const s = function(e, t) {
                        e = e || 10;
                        const n = new Array(e),
                            s = new Array(e);
                        let r, i = 0,
                            o = 0;
                        return t = undefined !== t ? t : 1e3,
                            function(a) {
                                const c = Date.now(),
                                    l = s[o];
                                r || (r = c), n[i] = a, s[i] = c;
                                let u = o,
                                    h = 0;
                                for (; u !== i;) h += n[u++], u %= e;
                                if (i = (i + 1) % e, i === o && (o = (o + 1) % e), c - r < t) return;
                                const d = l && c - l;
                                return d ? Math.round(1e3 * h / d) : undefined;
                            };
                    }(50, 250);
                    return r => {
                        const i = r.loaded,
                            o = r.lengthComputable ? r.total : undefined,
                            a = i - n,
                            c = s(a);
                        n = i;
                        const l = {
                            loaded: i,
                            total: o,
                            progress: o ? i / o : undefined,
                            bytes: a,
                            rate: c || undefined,
                            estimated: c && o && i <= o ? (o - i) / c : undefined,
                            event: r
                        };
                        l[t ? "download" : "upload"] = true, e(l);
                    };
                }
                const Ce = {
                    http: null,
                    xhr: "undefined" != typeof XMLHttpRequest && function(e) {
                        return new Promise(function(t, n) {
                            let s = e.data;
                            const r = pe.from(e.headers).normalize();
                            let i, o, {
                                responseType: a,
                                withXSRFToken: c
                            } = e;

                            function l() {
                                e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
                            }
                            if (B.isFormData(s))
                                if (re.hasStandardBrowserEnv || re.hasStandardBrowserWebWorkerEnv) r.setContentType(false);
                                else if (false !== (o = r.getContentType())) {
                                const [e, ...t] = o ? o.split(";").map(e => e.trim()).filter(Boolean) : [];
                                r.setContentType([e || "multipart/form-data", ...t].join("; "));
                            }
                            let u = new XMLHttpRequest;
                            if (e.auth) {
                                const t = e.auth.username || "",
                                    n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                                r.set("Authorization", "Basic " + btoa(t + ":" + n));
                            }
                            const h = ve(e.baseURL, e.url);

                            function d() {
                                if (!u) return;
                                const s = pe.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
                                ! function(e, t, n) {
                                    const s = n.config.validateStatus;
                                    n.status && s && !s(n.status) ? t(new x("Request failed with status code " + n.status, [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n);
                                }(function(e) {
                                    t(e), l();
                                }, function(e) {
                                    n(e), l();
                                }, {
                                    data: a && "text" !== a && "json" !== a ? u.response : u.responseText,
                                    status: u.status,
                                    statusText: u.statusText,
                                    headers: s,
                                    config: e,
                                    request: u
                                }), u = null;
                            }
                            if (u.open(e.method.toUpperCase(), Y(h, e.params, e.paramsSerializer), true), u.timeout = e.timeout, "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
                                    u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(d);
                                }, u.onabort = function() {
                                    u && (n(new x("Request aborted", x.ECONNABORTED, e, u)), u = null);
                                }, u.onerror = function() {
                                    n(new x("Network Error", x.ERR_NETWORK, e, u)), u = null;
                                }, u.ontimeout = function() {
                                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                                    const s = e.transitional || K;
                                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new x(t, s.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED, e, u)), u = null;
                                }, re.hasStandardBrowserEnv && (c && B.isFunction(c) && (c = c(e)), c || false !== c && we(h))) {
                                const t = e.xsrfHeaderName && e.xsrfCookieName && be.read(e.xsrfCookieName);
                                t && r.set(e.xsrfHeaderName, t);
                            }
                            undefined === s && r.setContentType(null), "setRequestHeader" in u && B.forEach(r.toJSON(), function(e, t) {
                                u.setRequestHeader(t, e);
                            }), B.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && "json" !== a && (u.responseType = e.responseType), "function" == typeof e.onDownloadProgress && u.addEventListener("progress", Re(e.onDownloadProgress, true)), "function" == typeof e.onUploadProgress && u.upload && u.upload.addEventListener("progress", Re(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = t => {
                                u && (n(!t || t.type ? new ye(null, e, u) : t), u.abort(), u = null);
                            }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
                            const f = function(e) {
                                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                                return t && t[1] || "";
                            }(h);
                            f && -1 === re.protocols.indexOf(f) ? n(new x("Unsupported protocol " + f + ":", x.ERR_BAD_REQUEST, e)) : u.send(s || null);
                        });
                    }
                };
                B.forEach(Ce, (e, t) => {
                    if (e) {
                        try {
                            Object.defineProperty(e, "name", {
                                value: t
                            });
                        } catch (e) {}
                        Object.defineProperty(e, "adapterName", {
                            value: t
                        });
                    }
                });
                const Te = e => `- ${e}`,
                    Le = e => B.isFunction(e) || null === e || false === e;
                var Oe = e => {
                    e = B.isArray(e) ? e : [e];
                    const {
                        length: t
                    } = e;
                    let n, s;
                    const r = {};
                    for (let i = 0; i < t; i++) {
                        let t;
                        if (n = e[i], s = n, !Le(n) && (s = Ce[(t = String(n)).toLowerCase()], undefined === s)) throw new x(`Unknown adapter '${t}'`);
                        if (s) break;
                        r[t || "#" + i] = s;
                    }
                    if (!s) {
                        const e = Object.entries(r).map(([e, t]) => `adapter ${e} ` + (false === t ? "is not supported by the environment" : "is not available in the build"));
                        throw new x("There is no suitable adapter to dispatch the request " + (t ? e.length > 1 ? "since :\n" + e.map(Te).join("\n") : " " + Te(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
                    }
                    return s;
                };

                function _e(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ye(null, e);
                }

                function Se(e) {
                    _e(e), e.headers = pe.from(e.headers), e.data = ge.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", false);
                    return Oe(e.adapter || ae.adapter)(e).then(function(t) {
                        return _e(e), t.data = ge.call(e, e.transformResponse, t), t.headers = pe.from(t.headers), t;
                    }, function(t) {
                        return !(!t || !t.__CANCEL__) || (_e(e), t && t.response && (t.response.data = ge.call(e, e.transformResponse, t.response), t.response.headers = pe.from(t.response.headers))), Promise.reject(t);
                    });
                }
                const ke = e => e instanceof pe ? {
                    ...e
                } : e;

                function Ie(e, t) {
                    t = t || {};
                    const n = {};

                    function s(e, t, n) {
                        return B.isPlainObject(e) && B.isPlainObject(t) ? B.merge.call({
                            caseless: n
                        }, e, t) : B.isPlainObject(t) ? B.merge({}, t) : B.isArray(t) ? t.slice() : t;
                    }

                    function r(e, t, n) {
                        return B.isUndefined(t) ? B.isUndefined(e) ? undefined : s(undefined, e, n) : s(e, t, n);
                    }

                    function i(e, t) {
                        if (!B.isUndefined(t)) return s(undefined, t);
                    }

                    function o(e, t) {
                        return B.isUndefined(t) ? B.isUndefined(e) ? undefined : s(undefined, e) : s(undefined, t);
                    }

                    function a(n, r, i) {
                        return i in t ? s(n, r) : i in e ? s(undefined, n) : undefined;
                    }
                    const c = {
                        url: i,
                        method: i,
                        data: i,
                        baseURL: o,
                        transformRequest: o,
                        transformResponse: o,
                        paramsSerializer: o,
                        timeout: o,
                        timeoutMessage: o,
                        withCredentials: o,
                        withXSRFToken: o,
                        adapter: o,
                        responseType: o,
                        xsrfCookieName: o,
                        xsrfHeaderName: o,
                        onUploadProgress: o,
                        onDownloadProgress: o,
                        decompress: o,
                        maxContentLength: o,
                        maxBodyLength: o,
                        beforeRedirect: o,
                        transport: o,
                        httpAgent: o,
                        httpsAgent: o,
                        cancelToken: o,
                        socketPath: o,
                        responseEncoding: o,
                        validateStatus: a,
                        headers: (e, t) => r(ke(e), ke(t), true)
                    };
                    return B.forEach(Object.keys(Object.assign({}, e, t)), function(s) {
                        const i = c[s] || r,
                            o = i(e[s], t[s], s);
                        B.isUndefined(o) && i !== a || (n[s] = o);
                    }), n;
                }
                const Ae = "1.6.8",
                    Ee = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
                    Ee[e] = function(n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
                    };
                });
                const Me = {};
                Ee.transitional = function(e, t, n) {
                    return (n, r, i) => {
                        if (false === e) throw new x("[Axios v1.6.8] Transitional option '" + r + "'" + (" has been removed" + (t ? " in " + t : "")) + (n ? ". " + n : ""), x.ERR_DEPRECATED);
                        return t && !Me[r] && (Me[r] = true, console.warn("[Axios v1.6.8] Transitional option '" + r + "'" + (" has been deprecated since v" + t + " and will be removed in the near future") + (n ? ". " + n : ""))), !e || e(n, r, i);
                    };
                };
                var Pe = {
                    assertOptions: function(e, t, n) {
                        if ("object" != typeof e) throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
                        const s = Object.keys(e);
                        let r = s.length;
                        for (; r-- > 0;) {
                            const i = s[r],
                                o = t[i];
                            if (o) {
                                const t = e[i],
                                    n = undefined === t || o(t, i, e);
                                if (true !== n) throw new x("option " + i + " must be " + n, x.ERR_BAD_OPTION_VALUE);
                            } else if (true !== n) throw new x("Unknown option " + i, x.ERR_BAD_OPTION);
                        }
                    },
                    validators: Ee
                };
                const Ue = Pe.validators;
                class De {
                    constructor(e) {
                        this.defaults = e, this.interceptors = {
                            request: new Z,
                            response: new Z
                        };
                    }
                    async request(e, t) {
                        try {
                            return await this._request(e, t);
                        } catch (e) {
                            if (e instanceof Error) {
                                let t;
                                Error.captureStackTrace ? Error.captureStackTrace(t = {}) : t = new Error;
                                const n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                                e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n;
                            }
                            throw e;
                        }
                    }
                    _request(e, t) {
                        "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = Ie(this.defaults, t);
                        const {
                            transitional: n,
                            paramsSerializer: s,
                            headers: r
                        } = t;
                        undefined !== n && Pe.assertOptions(n, {
                            silentJSONParsing: Ue.transitional(Ue.boolean),
                            forcedJSONParsing: Ue.transitional(Ue.boolean),
                            clarifyTimeoutError: Ue.transitional(Ue.boolean)
                        }, false), null != s && (B.isFunction(s) ? t.paramsSerializer = {
                            serialize: s
                        } : Pe.assertOptions(s, {
                            encode: Ue.function,
                            serialize: Ue.function
                        }, true)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                        let i = r && B.merge(r.common, r[t.method]);
                        r && B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                            delete r[e];
                        }), t.headers = pe.concat(i, r);
                        const o = [];
                        let a = true;
                        this.interceptors.request.forEach(function(e) {
                            "function" == typeof e.runWhen && false === e.runWhen(t) || (a = a && e.synchronous, o.unshift(e.fulfilled, e.rejected));
                        });
                        const c = [];
                        let l;
                        this.interceptors.response.forEach(function(e) {
                            c.push(e.fulfilled, e.rejected);
                        });
                        let u, h = 0;
                        if (!a) {
                            const e = [Se.bind(this), undefined];
                            for (e.unshift.apply(e, o), e.push.apply(e, c), u = e.length, l = Promise.resolve(t); h < u;) l = l.then(e[h++], e[h++]);
                            return l;
                        }
                        u = o.length;
                        let d = t;
                        for (h = 0; h < u;) {
                            const e = o[h++],
                                t = o[h++];
                            try {
                                d = e(d);
                            } catch (e) {
                                t.call(this, e);
                                break;
                            }
                        }
                        try {
                            l = Se.call(this, d);
                        } catch (e) {
                            return Promise.reject(e);
                        }
                        for (h = 0, u = c.length; h < u;) l = l.then(c[h++], c[h++]);
                        return l;
                    }
                    getUri(e) {
                        return Y(ve((e = Ie(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
                    }
                }
                B.forEach(["delete", "get", "head", "options"], function(e) {
                    De.prototype[e] = function(t, n) {
                        return this.request(Ie(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }));
                    };
                }), B.forEach(["post", "put", "patch"], function(e) {
                    function t(t) {
                        return function(n, s, r) {
                            return this.request(Ie(r || {}, {
                                method: e,
                                headers: t ? {
                                    "Content-Type": "multipart/form-data"
                                } : {},
                                url: n,
                                data: s
                            }));
                        };
                    }
                    De.prototype[e] = t(), De.prototype[e + "Form"] = t(true);
                });
                var Ne = De;
                class Be {
                    constructor(e) {
                        if ("function" != typeof e) throw new TypeError("executor must be a function.");
                        let t;
                        this.promise = new Promise(function(e) {
                            t = e;
                        });
                        const n = this;
                        this.promise.then(e => {
                            if (!n._listeners) return;
                            let t = n._listeners.length;
                            for (; t-- > 0;) n._listeners[t](e);
                            n._listeners = null;
                        }), this.promise.then = e => {
                            let t;
                            const s = new Promise(e => {
                                n.subscribe(e), t = e;
                            }).then(e);
                            return s.cancel = function() {
                                n.unsubscribe(t);
                            }, s;
                        }, e(function(e, s, r) {
                            n.reason || (n.reason = new ye(e, s, r), t(n.reason));
                        });
                    }
                    throwIfRequested() {
                        if (this.reason) throw this.reason;
                    }
                    subscribe(e) {
                        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e];
                    }
                    unsubscribe(e) {
                        if (!this._listeners) return;
                        const t = this._listeners.indexOf(e); -
                        1 !== t && this._listeners.splice(t, 1);
                    }
                    static source() {
                        let e;
                        return {
                            token: new Be(function(t) {
                                e = t;
                            }),
                            cancel: e
                        };
                    }
                }
                var xe = Be;
                const Ge = {
                    Continue: 100,
                    SwitchingProtocols: 101,
                    Processing: 102,
                    EarlyHints: 103,
                    Ok: 200,
                    Created: 201,
                    Accepted: 202,
                    NonAuthoritativeInformation: 203,
                    NoContent: 204,
                    ResetContent: 205,
                    PartialContent: 206,
                    MultiStatus: 207,
                    AlreadyReported: 208,
                    ImUsed: 226,
                    MultipleChoices: 300,
                    MovedPermanently: 301,
                    Found: 302,
                    SeeOther: 303,
                    NotModified: 304,
                    UseProxy: 305,
                    Unused: 306,
                    TemporaryRedirect: 307,
                    PermanentRedirect: 308,
                    BadRequest: 400,
                    Unauthorized: 401,
                    PaymentRequired: 402,
                    Forbidden: 403,
                    NotFound: 404,
                    MethodNotAllowed: 405,
                    NotAcceptable: 406,
                    ProxyAuthenticationRequired: 407,
                    RequestTimeout: 408,
                    Conflict: 409,
                    Gone: 410,
                    LengthRequired: 411,
                    PreconditionFailed: 412,
                    PayloadTooLarge: 413,
                    UriTooLong: 414,
                    UnsupportedMediaType: 415,
                    RangeNotSatisfiable: 416,
                    ExpectationFailed: 417,
                    ImATeapot: 418,
                    MisdirectedRequest: 421,
                    UnprocessableEntity: 422,
                    Locked: 423,
                    FailedDependency: 424,
                    TooEarly: 425,
                    UpgradeRequired: 426,
                    PreconditionRequired: 428,
                    TooManyRequests: 429,
                    RequestHeaderFieldsTooLarge: 431,
                    UnavailableForLegalReasons: 451,
                    InternalServerError: 500,
                    NotImplemented: 501,
                    BadGateway: 502,
                    ServiceUnavailable: 503,
                    GatewayTimeout: 504,
                    HttpVersionNotSupported: 505,
                    VariantAlsoNegotiates: 506,
                    InsufficientStorage: 507,
                    LoopDetected: 508,
                    NotExtended: 510,
                    NetworkAuthenticationRequired: 511
                };
                Object.entries(Ge).forEach(([e, t]) => {
                    Ge[t] = e;
                });
                var je = Ge;
                const $e = function e(t) {
                    const n = new Ne(t),
                        r = s(Ne.prototype.request, n);
                    return B.extend(r, Ne.prototype, n, {
                        allOwnKeys: true
                    }), B.extend(r, n, null, {
                        allOwnKeys: true
                    }), r.create = function(n) {
                        return e(Ie(t, n));
                    }, r;
                }(ae);
                $e.Axios = Ne, $e.CanceledError = ye, $e.CancelToken = xe, $e.isCancel = me, $e.VERSION = Ae, $e.toFormData = q, $e.AxiosError = x, $e.Cancel = $e.CanceledError, $e.all = function(e) {
                    return Promise.all(e);
                }, $e.spread = function(e) {
                    return function(t) {
                        return e.apply(null, t);
                    };
                }, $e.isAxiosError = function(e) {
                    return B.isObject(e) && true === e.isAxiosError;
                }, $e.mergeConfig = Ie, $e.AxiosHeaders = pe, $e.formToJSON = e => ie(B.isHTMLForm(e) ? new FormData(e) : e), $e.getAdapter = Oe, $e.HttpStatusCode = je, $e.default = $e, e.exports = $e;
            }
        },
        t = {};

    function n(s) {
        var r = t[s];
        if (undefined !== r) return r.exports;
        var i = t[s] = {
            exports: {}
        };
        return e[s].call(i.exports, i, i.exports, n), i.exports;
    }
    return n.d = (e, t) => {
        for (var s in t) n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
            enumerable: true,
            get: t[s]
        });
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: true
        });
    }, n(6916);
})());