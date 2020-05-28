!(function(n, r) {
  var t, e;
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define("underscore", r)
    : ((t = n._),
      (e = r()),
      ((n._ = e).noConflict = function() {
        return (n._ = t), e;
      }));
})(this, function() {
  //     Underscore.js 1.10.2
  //     https://underscorejs.org
  //     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  //     Underscore may be freely distributed under the MIT license.
  var n =
      ("object" == typeof self && self.self === self && self) ||
      ("object" == typeof global && global.global === global && global) ||
      Function("return this")() ||
      {},
    e = Array.prototype,
    i = Object.prototype,
    p = "undefined" != typeof Symbol ? Symbol.prototype : null,
    u = e.push,
    f = e.slice,
    s = i.toString,
    o = i.hasOwnProperty,
    r = Array.isArray,
    a = Object.keys,
    t = Object.create,
    c = n.isNaN,
    l = n.isFinite,
    v = function() {};
  function h(n) {
    return n instanceof h
      ? n
      : this instanceof h
      ? void (this._wrapped = n)
      : new h(n);
  }
  var g = (h.VERSION = "1.10.2");
  function y(u, o, n) {
    if (void 0 === o) return u;
    switch (null == n ? 3 : n) {
      case 1:
        return function(n) {
          return u.call(o, n);
        };
      case 3:
        return function(n, r, t) {
          return u.call(o, n, r, t);
        };
      case 4:
        return function(n, r, t, e) {
          return u.call(o, n, r, t, e);
        };
    }
    return function() {
      return u.apply(o, arguments);
    };
  }
  function d(n, r, t) {
    return null == n
      ? ur
      : Cn(n)
      ? y(n, r, t)
      : Ln(n) && !Kn(n)
      ? ir(n)
      : or(n);
  }
  function m(n, r) {
    return d(n, r, 1 / 0);
  }
  function b(n, r, t) {
    return h.iteratee !== m ? h.iteratee(n, r) : d(n, r, t);
  }
  function j(u, o) {
    return (
      (o = null == o ? u.length - 1 : +o),
      function() {
        for (
          var n = Math.max(arguments.length - o, 0), r = Array(n), t = 0;
          t < n;
          t++
        )
          r[t] = arguments[t + o];
        switch (o) {
          case 0:
            return u.call(this, r);
          case 1:
            return u.call(this, arguments[0], r);
          case 2:
            return u.call(this, arguments[0], arguments[1], r);
        }
        var e = Array(o + 1);
        for (t = 0; t < o; t++) e[t] = arguments[t];
        return (e[o] = r), u.apply(this, e);
      }
    );
  }
  function _(n) {
    if (!Ln(n)) return {};
    if (t) return t(n);
    v.prototype = n;
    var r = new v();
    return (v.prototype = null), r;
  }
  function w(r) {
    return function(n) {
      return null == n ? void 0 : n[r];
    };
  }
  function x(n, r) {
    return null != n && o.call(n, r);
  }
  function S(n, r) {
    for (var t = r.length, e = 0; e < t; e++) {
      if (null == n) return;
      n = n[r[e]];
    }
    return t ? n : void 0;
  }
  h.iteratee = m;
  var A = Math.pow(2, 53) - 1,
    O = w("length");
  function M(n) {
    var r = O(n);
    return "number" == typeof r && 0 <= r && r <= A;
  }
  function E(n, r, t) {
    var e, u;
    if (((r = y(r, t)), M(n)))
      for (e = 0, u = n.length; e < u; e++) r(n[e], e, n);
    else {
      var o = Sn(n);
      for (e = 0, u = o.length; e < u; e++) r(n[o[e]], o[e], n);
    }
    return n;
  }
  function N(n, r, t) {
    r = b(r, t);
    for (
      var e = !M(n) && Sn(n), u = (e || n).length, o = Array(u), i = 0;
      i < u;
      i++
    ) {
      var a = e ? e[i] : i;
      o[i] = r(n[a], a, n);
    }
    return o;
  }
  function k(f) {
    return function(n, r, t, e) {
      var u = 3 <= arguments.length;
      return (function(n, r, t, e) {
        var u = !M(n) && Sn(n),
          o = (u || n).length,
          i = 0 < f ? 0 : o - 1;
        for (e || ((t = n[u ? u[i] : i]), (i += f)); 0 <= i && i < o; i += f) {
          var a = u ? u[i] : i;
          t = r(t, n[a], a, n);
        }
        return t;
      })(n, y(r, e, 4), t, u);
    };
  }
  var I = k(1),
    T = k(-1);
  function B(n, r, t) {
    var e = (M(n) ? on : Tn)(n, r, t);
    if (void 0 !== e && -1 !== e) return n[e];
  }
  function R(n, e, r) {
    var u = [];
    return (
      (e = b(e, r)),
      E(n, function(n, r, t) {
        e(n, r, t) && u.push(n);
      }),
      u
    );
  }
  function F(n, r, t) {
    r = b(r, t);
    for (var e = !M(n) && Sn(n), u = (e || n).length, o = 0; o < u; o++) {
      var i = e ? e[o] : o;
      if (!r(n[i], i, n)) return !1;
    }
    return !0;
  }
  function q(n, r, t) {
    r = b(r, t);
    for (var e = !M(n) && Sn(n), u = (e || n).length, o = 0; o < u; o++) {
      var i = e ? e[o] : o;
      if (r(n[i], i, n)) return !0;
    }
    return !1;
  }
  function D(n, r, t, e) {
    return (
      M(n) || (n = On(n)),
      ("number" != typeof t || e) && (t = 0),
      0 <= ln(n, r, t)
    );
  }
  var W = j(function(n, t, e) {
    var u, o;
    return (
      Cn(t) ? (o = t) : Kn(t) && ((u = t.slice(0, -1)), (t = t[t.length - 1])),
      N(n, function(n) {
        var r = o;
        if (!r) {
          if ((u && u.length && (n = S(n, u)), null == n)) return;
          r = n[t];
        }
        return null == r ? r : r.apply(n, e);
      })
    );
  });
  function z(n, r) {
    return N(n, or(r));
  }
  function P(n, e, r) {
    var t,
      u,
      o = -1 / 0,
      i = -1 / 0;
    if (
      null == e ||
      ("number" == typeof e && "object" != typeof n[0] && null != n)
    )
      for (var a = 0, f = (n = M(n) ? n : On(n)).length; a < f; a++)
        null != (t = n[a]) && o < t && (o = t);
    else
      (e = b(e, r)),
        E(n, function(n, r, t) {
          (u = e(n, r, t)),
            (i < u || (u === -1 / 0 && o === -1 / 0)) && ((o = n), (i = u));
        });
    return o;
  }
  function K(n, r, t) {
    if (null == r || t) return M(n) || (n = On(n)), n[ar(n.length - 1)];
    var e = M(n) ? Dn(n) : On(n),
      u = O(e);
    r = Math.max(Math.min(r, u), 0);
    for (var o = u - 1, i = 0; i < r; i++) {
      var a = ar(i, o),
        f = e[i];
      (e[i] = e[a]), (e[a] = f);
    }
    return e.slice(0, r);
  }
  function L(i, r) {
    return function(e, u, n) {
      var o = r ? [[], []] : {};
      return (
        (u = b(u, n)),
        E(e, function(n, r) {
          var t = u(n, r, e);
          i(o, n, t);
        }),
        o
      );
    };
  }
  var V = L(function(n, r, t) {
      x(n, t) ? n[t].push(r) : (n[t] = [r]);
    }),
    C = L(function(n, r, t) {
      n[t] = r;
    }),
    J = L(function(n, r, t) {
      x(n, t) ? n[t]++ : (n[t] = 1);
    }),
    U = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  var $ = L(function(n, r, t) {
    n[t ? 0 : 1].push(r);
  }, !0);
  function G(n, r, t) {
    return null == n || n.length < 1
      ? null == r
        ? void 0
        : []
      : null == r || t
      ? n[0]
      : H(n, n.length - r);
  }
  function H(n, r, t) {
    return f.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
  }
  function Q(n, r, t) {
    return f.call(n, null == r || t ? 1 : r);
  }
  function X(n, r, t, e) {
    for (var u = (e = e || []).length, o = 0, i = O(n); o < i; o++) {
      var a = n[o];
      if (M(a) && (Kn(a) || Vn(a)))
        if (r) for (var f = 0, c = a.length; f < c; ) e[u++] = a[f++];
        else X(a, r, t, e), (u = e.length);
      else t || (e[u++] = a);
    }
    return e;
  }
  var Y = j(function(n, r) {
    return rn(n, r);
  });
  function Z(n, r, t, e) {
    er(r) || ((e = t), (t = r), (r = !1)), null != t && (t = b(t, e));
    for (var u = [], o = [], i = 0, a = O(n); i < a; i++) {
      var f = n[i],
        c = t ? t(f, i, n) : f;
      r && !t
        ? ((i && o === c) || u.push(f), (o = c))
        : t
        ? D(o, c) || (o.push(c), u.push(f))
        : D(u, f) || u.push(f);
    }
    return u;
  }
  var nn = j(function(n) {
    return Z(X(n, !0, !0));
  });
  var rn = j(function(n, r) {
    return (
      (r = X(r, !0, !0)),
      R(n, function(n) {
        return !D(r, n);
      })
    );
  });
  function tn(n) {
    for (var r = (n && P(n, O).length) || 0, t = Array(r), e = 0; e < r; e++)
      t[e] = z(n, e);
    return t;
  }
  var en = j(tn);
  function un(o) {
    return function(n, r, t) {
      r = b(r, t);
      for (var e = O(n), u = 0 < o ? 0 : e - 1; 0 <= u && u < e; u += o)
        if (r(n[u], u, n)) return u;
      return -1;
    };
  }
  var on = un(1),
    an = un(-1);
  function fn(n, r, t, e) {
    for (var u = (t = b(t, e, 1))(r), o = 0, i = O(n); o < i; ) {
      var a = Math.floor((o + i) / 2);
      t(n[a]) < u ? (o = a + 1) : (i = a);
    }
    return o;
  }
  function cn(o, i, a) {
    return function(n, r, t) {
      var e = 0,
        u = O(n);
      if ("number" == typeof t)
        0 < o
          ? (e = 0 <= t ? t : Math.max(t + u, e))
          : (u = 0 <= t ? Math.min(t + 1, u) : t + u + 1);
      else if (a && t && u) return n[(t = a(n, r))] === r ? t : -1;
      if (r != r) return 0 <= (t = i(f.call(n, e, u), tr)) ? t + e : -1;
      for (t = 0 < o ? e : u - 1; 0 <= t && t < u; t += o)
        if (n[t] === r) return t;
      return -1;
    };
  }
  var ln = cn(1, on, fn),
    pn = cn(-1, an);
  function sn(n, r, t, e, u) {
    if (!(e instanceof r)) return n.apply(t, u);
    var o = _(n.prototype),
      i = n.apply(o, u);
    return Ln(i) ? i : o;
  }
  var vn = j(function(r, t, e) {
      if (!Cn(r)) throw new TypeError("Bind must be called on a function");
      var u = j(function(n) {
        return sn(r, u, t, this, e.concat(n));
      });
      return u;
    }),
    hn = j(function(u, o) {
      var i = hn.placeholder,
        a = function() {
          for (var n = 0, r = o.length, t = Array(r), e = 0; e < r; e++)
            t[e] = o[e] === i ? arguments[n++] : o[e];
          for (; n < arguments.length; ) t.push(arguments[n++]);
          return sn(u, a, this, this, t);
        };
      return a;
    });
  hn.placeholder = h;
  var gn = j(function(n, r) {
    var t = (r = X(r, !1, !1)).length;
    if (t < 1) throw new Error("bindAll must be passed function names");
    for (; t--; ) {
      var e = r[t];
      n[e] = vn(n[e], n);
    }
  });
  var yn = j(function(n, r, t) {
      return setTimeout(function() {
        return n.apply(null, t);
      }, r);
    }),
    dn = hn(yn, h, 1);
  function mn(n) {
    return function() {
      return !n.apply(this, arguments);
    };
  }
  function bn(n, r) {
    var t;
    return function() {
      return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
    };
  }
  var jn = hn(bn, 2),
    _n = !{ toString: null }.propertyIsEnumerable("toString"),
    wn = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString"
    ];
  function xn(n, r) {
    var t = wn.length,
      e = n.constructor,
      u = (Cn(e) && e.prototype) || i,
      o = "constructor";
    for (x(n, o) && !D(r, o) && r.push(o); t--; )
      (o = wn[t]) in n && n[o] !== u[o] && !D(r, o) && r.push(o);
  }
  function Sn(n) {
    if (!Ln(n)) return [];
    if (a) return a(n);
    var r = [];
    for (var t in n) x(n, t) && r.push(t);
    return _n && xn(n, r), r;
  }
  function An(n) {
    if (!Ln(n)) return [];
    var r = [];
    for (var t in n) r.push(t);
    return _n && xn(n, r), r;
  }
  function On(n) {
    for (var r = Sn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
      e[u] = n[r[u]];
    return e;
  }
  function Mn(n) {
    for (var r = {}, t = Sn(n), e = 0, u = t.length; e < u; e++)
      r[n[t[e]]] = t[e];
    return r;
  }
  function En(n) {
    var r = [];
    for (var t in n) Cn(n[t]) && r.push(t);
    return r.sort();
  }
  function Nn(f, c) {
    return function(n) {
      var r = arguments.length;
      if ((c && (n = Object(n)), r < 2 || null == n)) return n;
      for (var t = 1; t < r; t++)
        for (var e = arguments[t], u = f(e), o = u.length, i = 0; i < o; i++) {
          var a = u[i];
          (c && void 0 !== n[a]) || (n[a] = e[a]);
        }
      return n;
    };
  }
  var kn = Nn(An),
    In = Nn(Sn);
  function Tn(n, r, t) {
    r = b(r, t);
    for (var e, u = Sn(n), o = 0, i = u.length; o < i; o++)
      if (r(n[(e = u[o])], e, n)) return e;
  }
  function Bn(n, r, t) {
    return r in t;
  }
  var Rn = j(function(n, r) {
      var t = {},
        e = r[0];
      if (null == n) return t;
      Cn(e)
        ? (1 < r.length && (e = y(e, r[1])), (r = An(n)))
        : ((e = Bn), (r = X(r, !1, !1)), (n = Object(n)));
      for (var u = 0, o = r.length; u < o; u++) {
        var i = r[u],
          a = n[i];
        e(a, i, n) && (t[i] = a);
      }
      return t;
    }),
    Fn = j(function(n, t) {
      var r,
        e = t[0];
      return (
        Cn(e)
          ? ((e = mn(e)), 1 < t.length && (r = t[1]))
          : ((t = N(X(t, !1, !1), String)),
            (e = function(n, r) {
              return !D(t, r);
            })),
        Rn(n, e, r)
      );
    }),
    qn = Nn(An, !0);
  function Dn(n) {
    return Ln(n) ? (Kn(n) ? n.slice() : kn({}, n)) : n;
  }
  function Wn(n, r) {
    var t = Sn(r),
      e = t.length;
    if (null == n) return !e;
    for (var u = Object(n), o = 0; o < e; o++) {
      var i = t[o];
      if (r[i] !== u[i] || !(i in u)) return !1;
    }
    return !0;
  }
  function zn(n, r, t, e) {
    if (n === r) return 0 !== n || 1 / n == 1 / r;
    if (null == n || null == r) return !1;
    if (n != n) return r != r;
    var u = typeof n;
    return (
      ("function" === u || "object" === u || "object" == typeof r) &&
      (function(n, r, t, e) {
        n instanceof h && (n = n._wrapped);
        r instanceof h && (r = r._wrapped);
        var u = s.call(n);
        if (u !== s.call(r)) return !1;
        switch (u) {
          case "[object RegExp]":
          case "[object String]":
            return "" + n == "" + r;
          case "[object Number]":
            return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;
          case "[object Date]":
          case "[object Boolean]":
            return +n == +r;
          case "[object Symbol]":
            return p.valueOf.call(n) === p.valueOf.call(r);
        }
        var o = "[object Array]" === u;
        if (!o) {
          if ("object" != typeof n || "object" != typeof r) return !1;
          var i = n.constructor,
            a = r.constructor;
          if (
            i !== a &&
            !(Cn(i) && i instanceof i && Cn(a) && a instanceof a) &&
            "constructor" in n &&
            "constructor" in r
          )
            return !1;
        }
        e = e || [];
        var f = (t = t || []).length;
        for (; f--; ) if (t[f] === n) return e[f] === r;
        if ((t.push(n), e.push(r), o)) {
          if ((f = n.length) !== r.length) return !1;
          for (; f--; ) if (!zn(n[f], r[f], t, e)) return !1;
        } else {
          var c,
            l = Sn(n);
          if (((f = l.length), Sn(r).length !== f)) return !1;
          for (; f--; )
            if (((c = l[f]), !x(r, c) || !zn(n[c], r[c], t, e))) return !1;
        }
        return t.pop(), e.pop(), !0;
      })(n, r, t, e)
    );
  }
  function Pn(r) {
    return function(n) {
      return s.call(n) === "[object " + r + "]";
    };
  }
  var Kn = r || Pn("Array");
  function Ln(n) {
    var r = typeof n;
    return "function" === r || ("object" === r && !!n);
  }
  var Vn = Pn("Arguments"),
    Cn = Pn("Function"),
    Jn = Pn("String"),
    Un = Pn("Number"),
    $n = Pn("Date"),
    Gn = Pn("RegExp"),
    Hn = Pn("Error"),
    Qn = Pn("Symbol"),
    Xn = Pn("Map"),
    Yn = Pn("WeakMap"),
    Zn = Pn("Set"),
    nr = Pn("WeakSet");
  !(function() {
    Vn(arguments) ||
      (Vn = function(n) {
        return x(n, "callee");
      });
  })();
  var rr = n.document && n.document.childNodes;
  function tr(n) {
    return Un(n) && c(n);
  }
  function er(n) {
    return !0 === n || !1 === n || "[object Boolean]" === s.call(n);
  }
  function ur(n) {
    return n;
  }
  function or(r) {
    return Kn(r)
      ? function(n) {
          return S(n, r);
        }
      : w(r);
  }
  function ir(r) {
    return (
      (r = In({}, r)),
      function(n) {
        return Wn(n, r);
      }
    );
  }
  function ar(n, r) {
    return (
      null == r && ((r = n), (n = 0)),
      n + Math.floor(Math.random() * (r - n + 1))
    );
  }
  "function" != typeof /./ &&
    "object" != typeof Int8Array &&
    "function" != typeof rr &&
    (Cn = function(n) {
      return "function" == typeof n || !1;
    });
  var fr =
      Date.now ||
      function() {
        return new Date().getTime();
      },
    cr = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    },
    lr = Mn(cr);
  function pr(r) {
    var t = function(n) {
        return r[n];
      },
      n = "(?:" + Sn(r).join("|") + ")",
      e = RegExp(n),
      u = RegExp(n, "g");
    return function(n) {
      return (n = null == n ? "" : "" + n), e.test(n) ? n.replace(u, t) : n;
    };
  }
  var sr = pr(cr),
    vr = pr(lr);
  var hr = 0;
  var gr = (h.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    }),
    yr = /(.)^/,
    dr = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    mr = /\\|'|\r|\n|\u2028|\u2029/g,
    br = function(n) {
      return "\\" + dr[n];
    };
  function jr(n, r) {
    return n._chain ? h(r).chain() : r;
  }
  function _r(t) {
    return (
      E(En(t), function(n) {
        var r = (h[n] = t[n]);
        h.prototype[n] = function() {
          var n = [this._wrapped];
          return u.apply(n, arguments), jr(this, r.apply(h, n));
        };
      }),
      h
    );
  }
  E(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(
    r
  ) {
    var t = e[r];
    h.prototype[r] = function() {
      var n = this._wrapped;
      return (
        t.apply(n, arguments),
        ("shift" !== r && "splice" !== r) || 0 !== n.length || delete n[0],
        jr(this, n)
      );
    };
  }),
    E(["concat", "join", "slice"], function(n) {
      var r = e[n];
      h.prototype[n] = function() {
        return jr(this, r.apply(this._wrapped, arguments));
      };
    }),
    (h.prototype.valueOf = h.prototype.toJSON = h.prototype.value = function() {
      return this._wrapped;
    }),
    (h.prototype.toString = function() {
      return String(this._wrapped);
    });
  var wr = _r({
    default: h,
    VERSION: g,
    iteratee: m,
    restArguments: j,
    each: E,
    forEach: E,
    map: N,
    collect: N,
    reduce: I,
    foldl: I,
    inject: I,
    reduceRight: T,
    foldr: T,
    find: B,
    detect: B,
    filter: R,
    select: R,
    reject: function(n, r, t) {
      return R(n, mn(b(r)), t);
    },
    every: F,
    all: F,
    some: q,
    any: q,
    contains: D,
    includes: D,
    include: D,
    invoke: W,
    pluck: z,
    where: function(n, r) {
      return R(n, ir(r));
    },
    findWhere: function(n, r) {
      return B(n, ir(r));
    },
    max: P,
    min: function(n, e, r) {
      var t,
        u,
        o = 1 / 0,
        i = 1 / 0;
      if (
        null == e ||
        ("number" == typeof e && "object" != typeof n[0] && null != n)
      )
        for (var a = 0, f = (n = M(n) ? n : On(n)).length; a < f; a++)
          null != (t = n[a]) && t < o && (o = t);
      else
        (e = b(e, r)),
          E(n, function(n, r, t) {
            ((u = e(n, r, t)) < i || (u === 1 / 0 && o === 1 / 0)) &&
              ((o = n), (i = u));
          });
      return o;
    },
    shuffle: function(n) {
      return K(n, 1 / 0);
    },
    sample: K,
    sortBy: function(n, e, r) {
      var u = 0;
      return (
        (e = b(e, r)),
        z(
          N(n, function(n, r, t) {
            return { value: n, index: u++, criteria: e(n, r, t) };
          }).sort(function(n, r) {
            var t = n.criteria,
              e = r.criteria;
            if (t !== e) {
              if (e < t || void 0 === t) return 1;
              if (t < e || void 0 === e) return -1;
            }
            return n.index - r.index;
          }),
          "value"
        )
      );
    },
    groupBy: V,
    indexBy: C,
    countBy: J,
    toArray: function(n) {
      return n
        ? Kn(n)
          ? f.call(n)
          : Jn(n)
          ? n.match(U)
          : M(n)
          ? N(n, ur)
          : On(n)
        : [];
    },
    size: function(n) {
      return null == n ? 0 : M(n) ? n.length : Sn(n).length;
    },
    partition: $,
    first: G,
    head: G,
    take: G,
    initial: H,
    last: function(n, r, t) {
      return null == n || n.length < 1
        ? null == r
          ? void 0
          : []
        : null == r || t
        ? n[n.length - 1]
        : Q(n, Math.max(0, n.length - r));
    },
    rest: Q,
    tail: Q,
    drop: Q,
    compact: function(n) {
      return R(n, Boolean);
    },
    flatten: function(n, r) {
      return X(n, r, !1);
    },
    without: Y,
    uniq: Z,
    unique: Z,
    union: nn,
    intersection: function(n) {
      for (var r = [], t = arguments.length, e = 0, u = O(n); e < u; e++) {
        var o = n[e];
        if (!D(r, o)) {
          var i;
          for (i = 1; i < t && D(arguments[i], o); i++);
          i === t && r.push(o);
        }
      }
      return r;
    },
    difference: rn,
    unzip: tn,
    zip: en,
    object: function(n, r) {
      for (var t = {}, e = 0, u = O(n); e < u; e++)
        r ? (t[n[e]] = r[e]) : (t[n[e][0]] = n[e][1]);
      return t;
    },
    findIndex: on,
    findLastIndex: an,
    sortedIndex: fn,
    indexOf: ln,
    lastIndexOf: pn,
    range: function(n, r, t) {
      null == r && ((r = n || 0), (n = 0)), t || (t = r < n ? -1 : 1);
      for (
        var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), o = 0;
        o < e;
        o++, n += t
      )
        u[o] = n;
      return u;
    },
    chunk: function(n, r) {
      if (null == r || r < 1) return [];
      for (var t = [], e = 0, u = n.length; e < u; )
        t.push(f.call(n, e, (e += r)));
      return t;
    },
    bind: vn,
    partial: hn,
    bindAll: gn,
    memoize: function(e, u) {
      var o = function(n) {
        var r = o.cache,
          t = "" + (u ? u.apply(this, arguments) : n);
        return x(r, t) || (r[t] = e.apply(this, arguments)), r[t];
      };
      return (o.cache = {}), o;
    },
    delay: yn,
    defer: dn,
    throttle: function(t, e, u) {
      var o,
        i,
        a,
        f,
        c = 0;
      u || (u = {});
      var l = function() {
          (c = !1 === u.leading ? 0 : fr()),
            (o = null),
            (f = t.apply(i, a)),
            o || (i = a = null);
        },
        n = function() {
          var n = fr();
          c || !1 !== u.leading || (c = n);
          var r = e - (n - c);
          return (
            (i = this),
            (a = arguments),
            r <= 0 || e < r
              ? (o && (clearTimeout(o), (o = null)),
                (c = n),
                (f = t.apply(i, a)),
                o || (i = a = null))
              : o || !1 === u.trailing || (o = setTimeout(l, r)),
            f
          );
        };
      return (
        (n.cancel = function() {
          clearTimeout(o), (c = 0), (o = i = a = null);
        }),
        n
      );
    },
    debounce: function(t, e, u) {
      var o,
        i,
        a = function(n, r) {
          (o = null), r && (i = t.apply(n, r));
        },
        n = j(function(n) {
          if ((o && clearTimeout(o), u)) {
            var r = !o;
            (o = setTimeout(a, e)), r && (i = t.apply(this, n));
          } else o = yn(a, e, this, n);
          return i;
        });
      return (
        (n.cancel = function() {
          clearTimeout(o), (o = null);
        }),
        n
      );
    },
    wrap: function(n, r) {
      return hn(r, n);
    },
    negate: mn,
    compose: function() {
      var t = arguments,
        e = t.length - 1;
      return function() {
        for (var n = e, r = t[e].apply(this, arguments); n--; )
          r = t[n].call(this, r);
        return r;
      };
    },
    after: function(n, r) {
      return function() {
        if (--n < 1) return r.apply(this, arguments);
      };
    },
    before: bn,
    once: jn,
    keys: Sn,
    allKeys: An,
    values: On,
    mapObject: function(n, r, t) {
      r = b(r, t);
      for (var e = Sn(n), u = e.length, o = {}, i = 0; i < u; i++) {
        var a = e[i];
        o[a] = r(n[a], a, n);
      }
      return o;
    },
    pairs: function(n) {
      for (var r = Sn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
        e[u] = [r[u], n[r[u]]];
      return e;
    },
    invert: Mn,
    functions: En,
    methods: En,
    extend: kn,
    extendOwn: In,
    assign: In,
    findKey: Tn,
    pick: Rn,
    omit: Fn,
    defaults: qn,
    create: function(n, r) {
      var t = _(n);
      return r && In(t, r), t;
    },
    clone: Dn,
    tap: function(n, r) {
      return r(n), n;
    },
    isMatch: Wn,
    isEqual: function(n, r) {
      return zn(n, r);
    },
    isEmpty: function(n) {
      return (
        null == n ||
        (M(n) && (Kn(n) || Jn(n) || Vn(n))
          ? 0 === n.length
          : 0 === Sn(n).length)
      );
    },
    isElement: function(n) {
      return !(!n || 1 !== n.nodeType);
    },
    isArray: Kn,
    isObject: Ln,
    isArguments: Vn,
    isFunction: Cn,
    isString: Jn,
    isNumber: Un,
    isDate: $n,
    isRegExp: Gn,
    isError: Hn,
    isSymbol: Qn,
    isMap: Xn,
    isWeakMap: Yn,
    isSet: Zn,
    isWeakSet: nr,
    isFinite: function(n) {
      return !Qn(n) && l(n) && !c(parseFloat(n));
    },
    isNaN: tr,
    isBoolean: er,
    isNull: function(n) {
      return null === n;
    },
    isUndefined: function(n) {
      return void 0 === n;
    },
    has: function(n, r) {
      if (!Kn(r)) return x(n, r);
      for (var t = r.length, e = 0; e < t; e++) {
        var u = r[e];
        if (null == n || !o.call(n, u)) return !1;
        n = n[u];
      }
      return !!t;
    },
    identity: ur,
    constant: function(n) {
      return function() {
        return n;
      };
    },
    noop: function() {},
    property: or,
    propertyOf: function(r) {
      return null == r
        ? function() {}
        : function(n) {
            return Kn(n) ? S(r, n) : r[n];
          };
    },
    matcher: ir,
    matches: ir,
    times: function(n, r, t) {
      var e = Array(Math.max(0, n));
      r = y(r, t, 1);
      for (var u = 0; u < n; u++) e[u] = r(u);
      return e;
    },
    random: ar,
    now: fr,
    escape: sr,
    unescape: vr,
    result: function(n, r, t) {
      Kn(r) || (r = [r]);
      var e = r.length;
      if (!e) return Cn(t) ? t.call(n) : t;
      for (var u = 0; u < e; u++) {
        var o = null == n ? void 0 : n[r[u]];
        void 0 === o && ((o = t), (u = e)), (n = Cn(o) ? o.call(n) : o);
      }
      return n;
    },
    uniqueId: function(n) {
      var r = ++hr + "";
      return n ? n + r : r;
    },
    templateSettings: gr,
    template: function(o, n, r) {
      !n && r && (n = r), (n = qn({}, n, h.templateSettings));
      var t,
        e = RegExp(
          [
            (n.escape || yr).source,
            (n.interpolate || yr).source,
            (n.evaluate || yr).source
          ].join("|") + "|$",
          "g"
        ),
        i = 0,
        a = "__p+='";
      o.replace(e, function(n, r, t, e, u) {
        return (
          (a += o.slice(i, u).replace(mr, br)),
          (i = u + n.length),
          r
            ? (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
            : t
            ? (a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'")
            : e && (a += "';\n" + e + "\n__p+='"),
          n
        );
      }),
        (a += "';\n"),
        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        (a =
          "var __t,__p='',__j=Array.prototype.join," +
          "print=function(){__p+=__j.call(arguments,'');};\n" +
          a +
          "return __p;\n");
      try {
        t = new Function(n.variable || "obj", "_", a);
      } catch (n) {
        throw ((n.source = a), n);
      }
      var u = function(n) {
          return t.call(this, n, h);
        },
        f = n.variable || "obj";
      return (u.source = "function(" + f + "){\n" + a + "}"), u;
    },
    chain: function(n) {
      var r = h(n);
      return (r._chain = !0), r;
    },
    mixin: _r
  });
  return (wr._ = wr);
});
