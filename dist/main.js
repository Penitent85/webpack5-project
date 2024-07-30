!(function () {
  "use strict";
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(t)
    );
  }
  function t(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t &&
        (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        r.push.apply(r, o);
    }
    return r;
  }
  function r(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2
        ? t(Object(n), !0).forEach(function (t) {
            o(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : t(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function o(t, r, o) {
    return (
      (r = (function (t) {
        var r = (function (t) {
          if ("object" != e(t) || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var o = r.call(t, "string");
            if ("object" != e(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == e(r) ? r : r + "";
      })(r)) in t
        ? Object.defineProperty(t, r, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[r] = o),
      t
    );
  }
  var n = { leatherStrips: 2, ironIngot: 1, refinedMoonstone: 4 },
    i = r(r({}, n), {}, { leather: 1, refinedMoonstone: 4 });
  console.log(n), console.log(i);
})();
//# sourceMappingURL=main.js.map
