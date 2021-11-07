/*! For license information please see form.js.LICENSE.txt */
!function() {
  var t = {
    258: function(t, n, e) {
      var r, a;
      a = this, r = function() {
        return a.is = function() {
          var t = { VERSION: "0.8.0", not: {}, all: {}, any: {} }, n = Object.prototype.toString,
            r = Array.prototype.slice, a = Object.prototype.hasOwnProperty;

          function o(t) {
            return function() {
              return !t.apply(null, r.call(arguments));
            };
          }

          function u(t) {
            return function() {
              for (var n = f(arguments), e = n.length, r = 0; r < e; r++) if (!t.call(null, n[r])) return !1;
              return !0;
            };
          }

          function i(t) {
            return function() {
              for (var n = f(arguments), e = n.length, r = 0; r < e; r++) if (t.call(null, n[r])) return !0;
              return !1;
            };
          }

          var c = {
            "<": function(t, n) {
              return t < n;
            }, "<=": function(t, n) {
              return t <= n;
            }, ">": function(t, n) {
              return t > n;
            }, ">=": function(t, n) {
              return t >= n;
            }
          };

          function l(t, n) {
            var e = n + "", r = +(e.match(/\d+/) || NaN), a = e.match(/^[<>]=?|/)[0];
            return c[a] ? c[a](t, r) : t == r || r != r;
          }

          function f(n) {
            var e = r.call(n);
            return 1 === e.length && t.array(e[0]) && (e = e[0]), e;
          }

          t.arguments = function(t) {
            return "[object Arguments]" === n.call(t) || null != t && "object" == typeof t && "callee" in t;
          }, t.array = Array.isArray || function(t) {
            return "[object Array]" === n.call(t);
          }, t.boolean = function(t) {
            return !0 === t || !1 === t || "[object Boolean]" === n.call(t);
          }, t.char = function(n) {
            return t.string(n) && 1 === n.length;
          }, t.date = function(t) {
            return "[object Date]" === n.call(t);
          }, t.domNode = function(n) {
            return t.object(n) && n.nodeType > 0;
          }, t.error = function(t) {
            return "[object Error]" === n.call(t);
          }, t.function = function(t) {
            return "[object Function]" === n.call(t) || "function" == typeof t;
          }, t.json = function(t) {
            return "[object Object]" === n.call(t);
          }, t.nan = function(t) {
            return t != t;
          }, t.null = function(t) {
            return null === t;
          }, t.number = function(e) {
            return t.not.nan(e) && "[object Number]" === n.call(e);
          }, t.object = function(t) {
            return Object(t) === t;
          }, t.regexp = function(t) {
            return "[object RegExp]" === n.call(t);
          }, t.sameType = function(e, r) {
            var a = n.call(e);
            return a === n.call(r) && ("[object Number]" !== a || !t.any.nan(e, r) || t.all.nan(e, r));
          }, t.sameType.api = ["not"], t.string = function(t) {
            return "[object String]" === n.call(t);
          }, t.undefined = function(t) {
            return void 0 === t;
          }, t.windowObject = function(t) {
            return null != t && "object" == typeof t && "setInterval" in t;
          }, t.empty = function(n) {
            if (t.object(n)) {
              var e = Object.getOwnPropertyNames(n).length;
              return !!(0 === e || 1 === e && t.array(n) || 2 === e && t.arguments(n));
            }
            return "" === n;
          }, t.existy = function(t) {
            return null != t;
          }, t.falsy = function(t) {
            return !t;
          }, t.truthy = o(t.falsy), t.above = function(n, e) {
            return t.all.number(n, e) && n > e;
          }, t.above.api = ["not"], t.decimal = function(n) {
            return t.number(n) && n % 1 != 0;
          }, t.equal = function(n, e) {
            return t.all.number(n, e) ? n === e && 1 / n == 1 / e : t.all.string(n, e) || t.all.regexp(n, e) ? "" + n == "" + e : !!t.all.boolean(n, e) && n === e;
          }, t.equal.api = ["not"], t.even = function(n) {
            return t.number(n) && n % 2 == 0;
          }, t.finite = isFinite || function(n) {
            return t.not.infinite(n) && t.not.nan(n);
          }, t.infinite = function(t) {
            return t === 1 / 0 || t === -1 / 0;
          }, t.integer = function(n) {
            return t.number(n) && n % 1 == 0;
          }, t.negative = function(n) {
            return t.number(n) && n < 0;
          }, t.odd = function(n) {
            return t.number(n) && n % 2 == 1;
          }, t.positive = function(n) {
            return t.number(n) && n > 0;
          }, t.under = function(n, e) {
            return t.all.number(n, e) && n < e;
          }, t.under.api = ["not"], t.within = function(n, e, r) {
            return t.all.number(n, e, r) && n > e && n < r;
          }, t.within.api = ["not"];
          var s = {
            affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
            alphaNumeric: /^[A-Za-z0-9]+$/,
            caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
            creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
            dateString: /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
            hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
            hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
            ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
            ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
            nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            socialSecurityNumber: /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
            timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
            ukPostCode: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
            url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
            usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/
          };

          function d(n, e) {
            t[n] = function(t) {
              return e[n].test(t);
            };
          }

          for (var p in s) s.hasOwnProperty(p) && d(p, s);
          t.ip = function(n) {
            return t.ipv4(n) || t.ipv6(n);
          }, t.capitalized = function(n) {
            if (t.not.string(n)) return !1;
            for (var e = n.split(" "), r = 0; r < e.length; r++) {
              var a = e[r];
              if (a.length) {
                var o = a.charAt(0);
                if (o !== o.toUpperCase()) return !1;
              }
            }
            return !0;
          }, t.endWith = function(n, e) {
            if (t.not.string(n)) return !1;
            e += "";
            var r = n.length - e.length;
            return r >= 0 && n.indexOf(e, r) === r;
          }, t.endWith.api = ["not"], t.include = function(t, n) {
            return t.indexOf(n) > -1;
          }, t.include.api = ["not"], t.lowerCase = function(n) {
            return t.string(n) && n === n.toLowerCase();
          }, t.palindrome = function(n) {
            if (t.not.string(n)) return !1;
            for (var e = (n = n.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()).length - 1, r = 0, a = Math.floor(e / 2); r <= a; r++) if (n.charAt(r) !== n.charAt(e - r)) return !1;
            return !0;
          }, t.space = function(n) {
            if (t.not.char(n)) return !1;
            var e = n.charCodeAt(0);
            return e > 8 && e < 14 || 32 === e;
          }, t.startWith = function(n, e) {
            return t.string(n) && 0 === n.indexOf(e);
          }, t.startWith.api = ["not"], t.upperCase = function(n) {
            return t.string(n) && n === n.toUpperCase();
          };
          var F = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            h = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
          t.day = function(n, e) {
            return t.date(n) && e.toLowerCase() === F[n.getDay()];
          }, t.day.api = ["not"], t.dayLightSavingTime = function(t) {
            var n = new Date(t.getFullYear(), 0, 1), e = new Date(t.getFullYear(), 6, 1),
              r = Math.max(n.getTimezoneOffset(), e.getTimezoneOffset());
            return t.getTimezoneOffset() < r;
          }, t.future = function(n) {
            var e = new Date;
            return t.date(n) && n.getTime() > e.getTime();
          }, t.inDateRange = function(n, e, r) {
            if (t.not.date(n) || t.not.date(e) || t.not.date(r)) return !1;
            var a = n.getTime();
            return a > e.getTime() && a < r.getTime();
          }, t.inDateRange.api = ["not"], t.inLastMonth = function(n) {
            return t.inDateRange(n, new Date((new Date).setMonth((new Date).getMonth() - 1)), new Date);
          }, t.inLastWeek = function(n) {
            return t.inDateRange(n, new Date((new Date).setDate((new Date).getDate() - 7)), new Date);
          }, t.inLastYear = function(n) {
            return t.inDateRange(n, new Date((new Date).setFullYear((new Date).getFullYear() - 1)), new Date);
          }, t.inNextMonth = function(n) {
            return t.inDateRange(n, new Date, new Date((new Date).setMonth((new Date).getMonth() + 1)));
          }, t.inNextWeek = function(n) {
            return t.inDateRange(n, new Date, new Date((new Date).setDate((new Date).getDate() + 7)));
          }, t.inNextYear = function(n) {
            return t.inDateRange(n, new Date, new Date((new Date).setFullYear((new Date).getFullYear() + 1)));
          }, t.leapYear = function(n) {
            return t.number(n) && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0);
          }, t.month = function(n, e) {
            return t.date(n) && e.toLowerCase() === h[n.getMonth()];
          }, t.month.api = ["not"], t.past = function(n) {
            var e = new Date;
            return t.date(n) && n.getTime() < e.getTime();
          }, t.quarterOfYear = function(n, e) {
            return t.date(n) && t.number(e) && e === Math.floor((n.getMonth() + 3) / 3);
          }, t.quarterOfYear.api = ["not"], t.today = function(n) {
            var e = (new Date).toDateString();
            return t.date(n) && n.toDateString() === e;
          }, t.tomorrow = function(n) {
            var e = new Date, r = new Date(e.setDate(e.getDate() + 1)).toDateString();
            return t.date(n) && n.toDateString() === r;
          }, t.weekend = function(n) {
            return t.date(n) && (6 === n.getDay() || 0 === n.getDay());
          }, t.weekday = o(t.weekend), t.year = function(n, e) {
            return t.date(n) && t.number(e) && e === n.getFullYear();
          }, t.year.api = ["not"], t.yesterday = function(n) {
            var e = new Date, r = new Date(e.setDate(e.getDate() - 1)).toDateString();
            return t.date(n) && n.toDateString() === r;
          };
          var g = t.windowObject("object" == typeof e.g && e.g) && e.g,
            m = t.windowObject("object" == typeof self && self) && self,
            D = t.windowObject("object" == typeof this && this) && this, b = g || m || D || Function("return this")(),
            y = m && m.document, w = b.is, v = m && m.navigator, x = (v && v.appVersion || "").toLowerCase(),
            E = (v && v.userAgent || "").toLowerCase(), A = (v && v.vendor || "").toLowerCase();
          return t.android = function() {
            return /android/.test(E);
          }, t.android.api = ["not"], t.androidPhone = function() {
            return /android/.test(E) && /mobile/.test(E);
          }, t.androidPhone.api = ["not"], t.androidTablet = function() {
            return /android/.test(E) && !/mobile/.test(E);
          }, t.androidTablet.api = ["not"], t.blackberry = function() {
            return /blackberry/.test(E) || /bb10/.test(E);
          }, t.blackberry.api = ["not"], t.chrome = function(t) {
            var n = /google inc/.test(A) ? E.match(/(?:chrome|crios)\/(\d+)/) : null;
            return null !== n && l(n[1], t);
          }, t.chrome.api = ["not"], t.desktop = function() {
            return t.not.mobile() && t.not.tablet();
          }, t.desktop.api = ["not"], t.edge = function(t) {
            var n = E.match(/edge\/(\d+)/);
            return null !== n && l(n[1], t);
          }, t.edge.api = ["not"], t.firefox = function(t) {
            var n = E.match(/(?:firefox|fxios)\/(\d+)/);
            return null !== n && l(n[1], t);
          }, t.firefox.api = ["not"], t.ie = function(t) {
            var n = E.match(/(?:msie |trident.+?; rv:)(\d+)/);
            return null !== n && l(n[1], t);
          }, t.ie.api = ["not"], t.ios = function() {
            return t.iphone() || t.ipad() || t.ipod();
          }, t.ios.api = ["not"], t.ipad = function(t) {
            var n = E.match(/ipad.+?os (\d+)/);
            return null !== n && l(n[1], t);
          }, t.ipad.api = ["not"], t.iphone = function(t) {
            var n = E.match(/iphone(?:.+?os (\d+))?/);
            return null !== n && l(n[1] || 1, t);
          }, t.iphone.api = ["not"], t.ipod = function(t) {
            var n = E.match(/ipod.+?os (\d+)/);
            return null !== n && l(n[1], t);
          }, t.ipod.api = ["not"], t.linux = function() {
            return /linux/.test(x);
          }, t.linux.api = ["not"], t.mac = function() {
            return /mac/.test(x);
          }, t.mac.api = ["not"], t.mobile = function() {
            return t.iphone() || t.ipod() || t.androidPhone() || t.blackberry() || t.windowsPhone();
          }, t.mobile.api = ["not"], t.offline = o(t.online), t.offline.api = ["not"], t.online = function() {
            return !v || !0 === v.onLine;
          }, t.online.api = ["not"], t.opera = function(t) {
            var n = E.match(/(?:^opera.+?version|opr)\/(\d+)/);
            return null !== n && l(n[1], t);
          }, t.opera.api = ["not"], t.phantom = function(t) {
            var n = E.match(/phantomjs\/(\d+)/);
            return null !== n && l(n[1], t);
          }, t.phantom.api = ["not"], t.safari = function(t) {
            var n = E.match(/version\/(\d+).+?safari/);
            return null !== n && l(n[1], t);
          }, t.safari.api = ["not"], t.tablet = function() {
            return t.ipad() || t.androidTablet() || t.windowsTablet();
          }, t.tablet.api = ["not"], t.touchDevice = function() {
            return !!y && ("ontouchstart" in m || "DocumentTouch" in m && y instanceof DocumentTouch);
          }, t.touchDevice.api = ["not"], t.windows = function() {
            return /win/.test(x);
          }, t.windows.api = ["not"], t.windowsPhone = function() {
            return t.windows() && /phone/.test(E);
          }, t.windowsPhone.api = ["not"], t.windowsTablet = function() {
            return t.windows() && t.not.windowsPhone() && /touch/.test(E);
          }, t.windowsTablet.api = ["not"], t.propertyCount = function(n, e) {
            if (t.not.object(n) || t.not.number(e)) return !1;
            var r = 0;
            for (var o in n) if (a.call(n, o) && ++r > e) return !1;
            return r === e;
          }, t.propertyCount.api = ["not"], t.propertyDefined = function(n, e) {
            return t.object(n) && t.string(e) && e in n;
          }, t.propertyDefined.api = ["not"], t.inArray = function(n, e) {
            if (t.not.array(e)) return !1;
            for (var r = 0; r < e.length; r++) if (e[r] === n) return !0;
            return !1;
          }, t.inArray.api = ["not"], t.sorted = function(n, e) {
            if (t.not.array(n)) return !1;
            for (var r = c[e] || c[">="], a = 1; a < n.length; a++) if (!r(n[a], n[a - 1])) return !1;
            return !0;
          }, function() {
            var n = t;
            for (var e in n) if (a.call(n, e) && t.function(n[e])) for (var r = n[e].api || ["not", "all", "any"], c = 0; c < r.length; c++) "not" === r[c] && (t.not[e] = o(t[e])), "all" === r[c] && (t.all[e] = u(t[e])), "any" === r[c] && (t.any[e] = i(t[e]));
          }(), t.setNamespace = function() {
            return b.is = w, this;
          }, t.setRegexp = function(t, n) {
            for (var e in s) a.call(s, e) && n === e && (s[e] = t);
          }, t;
        }();
      }.call(n, e, n, t), void 0 === r || (t.exports = r);
    }, 17: function(t, n, e) {
      "use strict";
      var r = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : { default: t };
      };
      Object.defineProperty(n, "__esModule", { value: !0 }), n.checkInputs = n.checkValue = n.getErrorMessage = n.getRules = n.getValue = n.getFormData = n.hideAllError = n.hideError = n.showError = n.createError = n.defaultErrorsMsg = void 0;
      const a = r(e(258));

      function o(t, n = null) {
        const e = document.createElement("span");
        return e.classList.add("error", "form__error"), e.dataset.error = "", e.innerHTML = t, n && n.append(e), e;
      }

      function u(t, n) {
        if (!t) return;
        let e = t.querySelector("[data-error]");
        e || (e = o(n, t)), e.classList.add("error_shown");
      }

      function i(t) {
        if (!t) return;
        const n = t.querySelector("[data-error]");
        n && n.classList.add("error_hide");
      }

      function c(t) {
        if ("INPUT" === t.tagName) {
          if ("checkbox" === t.type || "radio" === t.type) {
            let n = null;
            return t.checked && "on" === t.value ? n = t.name : t.checked && "on" !== t.value ? n = t.value : t.checked || (n = null), n;
          }
          return t.value;
        }
        return "SELECT" === t.tagName || t.tagName, t.value;
      }

      function l(t) {
        const n = [];
        return ("errorEmpty" in t.dataset || t.dataset.required) && n.push("empty"), "errorLen" in t.dataset && n.push("len"), "errorPhoneMsg" in t.dataset && n.push("phone"), "errorEmailMsg" in t.dataset && n.push("email"), [];
      }

      function f(t, e) {
        let r = null;
        return r = "empty" === e ? "errorEmptyMsg" in t.dataset ? t.dataset.errorEmptyMsg : n.defaultErrorsMsg[e] : "maxlen" === e || "minlen" === e ? "errorLenMsg" in t.dataset ? t.dataset.errorEmptyMsg : n.defaultErrorsMsg[e](t.dataset.errorLen) : "phone" === e ? "errorPhoneMsg" in t.dataset ? t.dataset.errorEmptyMsg : n.defaultErrorsMsg[e] : "email" === e ? "errorEmailMsg" in t.dataset ? t.dataset.errorEmptyMsg : n.defaultErrorsMsg[e] : "Неверный формат", r;
      }

      function s(t, n = []) {
        let e = null;
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          if ("empty" === o && (a.default.empty(t), e = o), "phone" === o && (a.default.empty(t), e = o), "email" === o && (a.default.empty(t), e = o), e) break;
        }
        return e;
      }

      n.defaultErrorsMsg = {
        empty: "Поле не должно быть пустым",
        minlen: t => `Минимальная длина ${t} символов`,
        maxlen: t => `Максимальная длина ${t} символов`,
        phone: "Неверный формат номера телефона",
        email: "Неверный формат e-mail"
      }, n.createError = o, n.showError = u, n.hideError = i, n.hideAllError = function(t) {
        t.forEach((t => {
          i(t);
        }));
      }, n.getFormData = function(t) {
        let n = null;
        return "string" == typeof t && (n = document.querySelector(t)), t instanceof Element && (n = t), new FormData(n);
      }, n.getValue = c, n.getRules = l, n.getErrorMessage = f, n.checkValue = s, n.checkInputs = function(t) {
        let n = !0;
        return t.forEach((t => {
          const e = c(t), r = l(t);
          console.log(e, r);
          const a = s(e, r);
          a || u(t, f(t, a)), n && (n = !!a);
        })), console.log(n), n;
      };
    }
  }, n = {};

  function e(r) {
    var a = n[r];
    if (void 0 !== a) return a.exports;
    var o = n[r] = { exports: {} };
    return t[r].call(o.exports, o, o.exports, e), o.exports;
  }

  e.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  }(), function() {
    "use strict";
    e(17);
  }();
}();
