(function () {

    function f(a, b) {
        return a - b * Math.floor(a / b)
    }

    function l(a, b, c) {
        return 1721424.5 + 365 * (a - 1) + Math.floor((a - 1) / 4) + -Math.floor((a - 1) / 100) + Math.floor((a - 1) / 400) + Math.floor((367 * b - 362) / 12 + (2 >= b ? 0 : 0 != a % 4 || 0 == a % 100 && 0 != a % 400 ? -2 : -1) + c)
    }

    function n(a) {
        var b, c, d, e;
        a = Math.floor(a - .5) + .5;
        b = a - 1721425.5;
        c = Math.floor(b / 146097);
        d = f(b, 146097);
        b = Math.floor(d / 36524);
        e = f(d, 36524);
        d = Math.floor(e / 1461);
        e = Math.floor(f(e, 1461) / 365);
        c = 400 * c + 100 * b + 4 * d + e;
        4 != b && 4 != e && c++;
        b = Math.floor((12 * (a - l(c, 1, 1) + (a < l(c, 3, 1) ? 0 : 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 2 : 1)) + 373) / 367);
        return [c, b, a - l(c, b, 1) + 1]
    }

    function p(a, b, c) {
        var d;
        a -= 0 <= a ? 474 : 473;
        d = 474 + f(a, 2820);
        return c + (7 >= b ? 31 * (b - 1) : 30 * (b - 1) + 6) + Math.floor((682 * d - 110) / 2816) + 365 * (d - 1) + 1029983 * Math.floor(a / 2820) + 1948319.5
    }

    function q(a) {
        var b, c, d;
        a = Math.floor(a) + .5;
        c = a - p(475, 1, 1);
        b = Math.floor(c / 1029983);
        d = f(c, 1029983);
        1029982 == d ? c = 2820 : (c = Math.floor(d / 366), d = f(d, 366), c = Math.floor((2134 * c + 2816 * d + 2815) / 1028522) + c + 1);
        b = c + 2820 * b + 474;
        0 >= b && b--;
        c = a - p(b, 1, 1) + 1;
        c = 186 >= c ? Math.ceil(c / 31) : Math.ceil((c - 6) / 30);
        return [b, c, a - p(b, c, 1) + 1]
    };var Date = window.Date;

    function r(a) {
        return a.replace(/[\u06f0-\u06f9]/g, function (a) {
            return String.fromCharCode(a.charCodeAt(0) - 1728)
        })
    }

    function s(a) {
        return 10 > a ? "0" + a : a
    }

    function t(a, b, c) {
        if (12 < b || 0 >= b) {
            var d = Math.floor((b - 1) / 12);
            a += d;
            b -= 12 * d
        }
        return p(a, b, c)
    }

    function u(a, b, c, d, e, w, x) {
        if ("string" == typeof a) {
            var h;
            a:{
                h = r(a);
                var g = /^(\d|\d\d|\d\d\d\d)(?:([-\/])(\d{1,2})(?:\2(\d|\d\d|\d\d\d\d))?)?(([ T])(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|([+-])(\d{2})(?::?(\d{2}))?)?)?$/.exec(h);
                if (g) {
                    var D = g[2], H = g[6], k = +g[1], y = +g[3] || 1, m = +g[4] || 1, E = "/" != D && " " != g[6],
                        I = +g[7] || 0, J = +g[8] || 0, K = +g[9] || 0, L = 1E3 * +("0." + (g[10] || "0")), F = g[11];
                    h = E && (F || !g[5]);
                    var M = ("-" == g[12] ? -1 : 1) * (60 * (+g[13] || 0) + (+g[14] || 0));
                    if ((!F && "T" != H || E) && 1E3 <= m != 1E3 <= k) {
                        if (1E3 <= m) {
                            if ("-" == D) {
                                h = void 0;
                                break a
                            }
                            k = m = +g[1]
                        }
                        g = n(t(k, y, m));
                        k = g[0];
                        y = g[1];
                        m = g[2];
                        k = new Date(k, y - 1, m, I, J, K, L);
                        h && k.setUTCMinutes(k.getUTCMinutes() - k.getTimezoneOffset() + M);
                        h = k;
                        break a
                    }
                }
                h = void 0
            }
            this.a = h;
            if (!this.a) throw"Cannot parse date string";
        } else 0 == arguments.length ? this.a = new Date : 1 == arguments.length ? this.a = new Date(a instanceof u ? a.a : a) : (h = n(t(a, (b || 0) + 1, c || 1)), this.a = new Date(h[0], h[1] - 1, h[2], d || 0, e || 0, w || 0, x || 0));
        this._date = this.a;
        this.c = null;
        this.b = [0, 0, 0];
        this.e = null;
        this.d = [0, 0, 0]
    }

    u.prototype = {};

    function v(a, b, c, d) {
        var e = z(a);
        void 0 !== d && (e[2] = d);
        e[b] = c;
        b = n(t(e[0], e[1], e[2]));
        a.a.setUTCFullYear(b[0]);
        a.a.setUTCMonth(b[1] - 1, b[2])
    }

    function A(a, b, c, d) {
        var e = B(a);
        e[b] = c;
        void 0 !== d && (e[2] = d);
        b = n(t(e[0], e[1], e[2]));
        a.a.setFullYear(b[0]);
        a.a.setMonth(b[1] - 1, b[2])
    }

    function z(a) {
        a.e != +a.a && (a.e = +a.a, a.d = q(l(a.a.getUTCFullYear(), a.a.getUTCMonth() + 1, a.a.getUTCDate())));
        return a.d
    }

    function B(a) {
        a.c != +a.a && (a.c = +a.a, a.b = q(l(a.a.getFullYear(), a.a.getMonth() + 1, a.a.getDate())));
        return a.b
    }

    u.prototype.getDate = function () {
        return B(this)[2]
    };
    u.prototype.getMonth = function () {
        return B(this)[1] - 1
    };
    u.prototype.getFullYear = function () {
        return B(this)[0]
    };
    u.prototype.getUTCDate = function () {
        return z(this)[2]
    };
    u.prototype.getUTCMonth = function () {
        return z(this)[1] - 1
    };
    u.prototype.getUTCFullYear = function () {
        return z(this)[0]
    };
    u.prototype.setDate = function (a) {
        A(this, 2, a)
    };
    u.prototype.setFullYear = function (a) {
        A(this, 0, a)
    };
    u.prototype.setMonth = function (a, b) {
        A(this, 1, a + 1, b)
    };
    u.prototype.setUTCDate = function (a) {
        v(this, 2, a)
    };
    u.prototype.setUTCFullYear = function (a) {
        v(this, 0, a)
    };
    u.prototype.setUTCMonth = function (a, b) {
        v(this, 1, a + 1, b)
    };
    u.prototype.toLocaleString = function () {
        return this.getFullYear() + "/" + s(this.getMonth() + 1) + "/" + s(this.getDate()) + " " + s(this.getHours()) + ":" + s(this.getMinutes()) + ":" + s(this.getSeconds())
    };
    u.prototype.toGMTString = function(){
        console.log('im here');
    }
    u.now = Date.now;
    u.parse = function (a) {
        (new u(a)).getTime()
    };
    u.UTC = function (a, b, c, d, e, w, x) {
        a = n(t(a, b + 1, c || 1));
        return Date.UTC(a[0], a[1] - 1, a[2], d || 0, e || 0, w || 0, x || 0)
    };
    var C,
        G = "getHours getMilliseconds getMinutes getSeconds getTime getUTCDay getUTCHours getTimezoneOffset getUTCMilliseconds getUTCMinutes getUTCSeconds setHours setMilliseconds setMinutes setSeconds setTime setUTCHours setUTCMilliseconds setUTCMinutes setUTCSeconds toDateString toISOString toJSON toString toLocaleDateString toLocaleTimeString toTimeString toUTCString toGMTString valueOf getDay".split(" ");
    function N() {
        var a = G[C];
        return function () {
            return this.a[a].apply(this.a, arguments)
        }
    }

    for (C = 0; C < G.length; C++) {
        u.prototype[G[C]] = N();
    }
    window.JDate = u;
}());