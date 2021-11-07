(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["components"] = factory();
	else
		root["components"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/is_js/is.js":
/*!**********************************!*\
  !*** ./node_modules/is_js/is.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * is.js 0.8.0
 * Author: Aras Atasaygin
 */
// AMD with global, Node, or global
;

(function (root, factory) {
  // eslint-disable-line no-extra-semi
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      // Also create a global in case some scripts
      // that are loaded still are looking for
      // a global even when an AMD loader is in use.
      return root.is = factory();
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  // Baseline

  /* -------------------------------------------------------------------------- */
  // define 'is' object and current version
  var is = {};
  is.VERSION = '0.8.0'; // define interfaces

  is.not = {};
  is.all = {};
  is.any = {}; // cache some methods to call later on

  var toString = Object.prototype.toString;
  var slice = Array.prototype.slice;
  var hasOwnProperty = Object.prototype.hasOwnProperty; // helper function which reverses the sense of predicate result

  function not(func) {
    return function () {
      return !func.apply(null, slice.call(arguments));
    };
  } // helper function which call predicate function per parameter and return true if all pass


  function all(func) {
    return function () {
      var params = getParams(arguments);
      var length = params.length;

      for (var i = 0; i < length; i++) {
        if (!func.call(null, params[i])) {
          return false;
        }
      }

      return true;
    };
  } // helper function which call predicate function per parameter and return true if any pass


  function any(func) {
    return function () {
      var params = getParams(arguments);
      var length = params.length;

      for (var i = 0; i < length; i++) {
        if (func.call(null, params[i])) {
          return true;
        }
      }

      return false;
    };
  } // build a 'comparator' object for various comparison checks


  var comparator = {
    '<': function (a, b) {
      return a < b;
    },
    '<=': function (a, b) {
      return a <= b;
    },
    '>': function (a, b) {
      return a > b;
    },
    '>=': function (a, b) {
      return a >= b;
    }
  }; // helper function which compares a version to a range

  function compareVersion(version, range) {
    var string = range + '';
    var n = +(string.match(/\d+/) || NaN);
    var op = string.match(/^[<>]=?|/)[0];
    return comparator[op] ? comparator[op](version, n) : version == n || n !== n;
  } // helper function which extracts params from arguments


  function getParams(args) {
    var params = slice.call(args);
    var length = params.length;

    if (length === 1 && is.array(params[0])) {
      // support array
      params = params[0];
    }

    return params;
  } // Type checks

  /* -------------------------------------------------------------------------- */
  // is a given value Arguments?


  is.arguments = function (value) {
    // fallback check is for IE
    return toString.call(value) === '[object Arguments]' || value != null && typeof value === 'object' && 'callee' in value;
  }; // is a given value Array?


  is.array = Array.isArray || function (value) {
    // check native isArray first
    return toString.call(value) === '[object Array]';
  }; // is a given value Boolean?


  is.boolean = function (value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
  }; // is a given value Char?


  is.char = function (value) {
    return is.string(value) && value.length === 1;
  }; // is a given value Date Object?


  is.date = function (value) {
    return toString.call(value) === '[object Date]';
  }; // is a given object a DOM node?


  is.domNode = function (object) {
    return is.object(object) && object.nodeType > 0;
  }; // is a given value Error object?


  is.error = function (value) {
    return toString.call(value) === '[object Error]';
  }; // is a given value function?


  is['function'] = function (value) {
    // fallback check is for IE
    return toString.call(value) === '[object Function]' || typeof value === 'function';
  }; // is given value a pure JSON object?


  is.json = function (value) {
    return toString.call(value) === '[object Object]';
  }; // is a given value NaN?


  is.nan = function (value) {
    // NaN is number :) Also it is the only value which does not equal itself
    return value !== value;
  }; // is a given value null?


  is['null'] = function (value) {
    return value === null;
  }; // is a given value number?


  is.number = function (value) {
    return is.not.nan(value) && toString.call(value) === '[object Number]';
  }; // is a given value object?


  is.object = function (value) {
    return Object(value) === value;
  }; // is a given value RegExp?


  is.regexp = function (value) {
    return toString.call(value) === '[object RegExp]';
  }; // are given values same type?
  // prevent NaN, Number same type check


  is.sameType = function (value, other) {
    var tag = toString.call(value);

    if (tag !== toString.call(other)) {
      return false;
    }

    if (tag === '[object Number]') {
      return !is.any.nan(value, other) || is.all.nan(value, other);
    }

    return true;
  }; // sameType method does not support 'all' and 'any' interfaces


  is.sameType.api = ['not']; // is a given value String?

  is.string = function (value) {
    return toString.call(value) === '[object String]';
  }; // is a given value undefined?


  is.undefined = function (value) {
    return value === void 0;
  }; // is a given value window?
  // setInterval method is only available for window object


  is.windowObject = function (value) {
    return value != null && typeof value === 'object' && 'setInterval' in value;
  }; // Presence checks

  /* -------------------------------------------------------------------------- */
  //is a given value empty? Objects, arrays, strings


  is.empty = function (value) {
    if (is.object(value)) {
      var length = Object.getOwnPropertyNames(value).length;

      if (length === 0 || length === 1 && is.array(value) || length === 2 && is.arguments(value)) {
        return true;
      }

      return false;
    }

    return value === '';
  }; // is a given value existy?


  is.existy = function (value) {
    return value != null;
  }; // is a given value falsy?


  is.falsy = function (value) {
    return !value;
  }; // is a given value truthy?


  is.truthy = not(is.falsy); // Arithmetic checks

  /* -------------------------------------------------------------------------- */
  // is a given number above minimum parameter?

  is.above = function (n, min) {
    return is.all.number(n, min) && n > min;
  }; // above method does not support 'all' and 'any' interfaces


  is.above.api = ['not']; // is a given number decimal?

  is.decimal = function (n) {
    return is.number(n) && n % 1 !== 0;
  }; // are given values equal? supports numbers, strings, regexes, booleans
  // TODO: Add object and array support


  is.equal = function (value, other) {
    // check 0 and -0 equity with Infinity and -Infinity
    if (is.all.number(value, other)) {
      return value === other && 1 / value === 1 / other;
    } // check regexes as strings too


    if (is.all.string(value, other) || is.all.regexp(value, other)) {
      return '' + value === '' + other;
    }

    if (is.all.boolean(value, other)) {
      return value === other;
    }

    return false;
  }; // equal method does not support 'all' and 'any' interfaces


  is.equal.api = ['not']; // is a given number even?

  is.even = function (n) {
    return is.number(n) && n % 2 === 0;
  }; // is a given number finite?


  is.finite = isFinite || function (n) {
    return is.not.infinite(n) && is.not.nan(n);
  }; // is a given number infinite?


  is.infinite = function (n) {
    return n === Infinity || n === -Infinity;
  }; // is a given number integer?


  is.integer = function (n) {
    return is.number(n) && n % 1 === 0;
  }; // is a given number negative?


  is.negative = function (n) {
    return is.number(n) && n < 0;
  }; // is a given number odd?


  is.odd = function (n) {
    return is.number(n) && n % 2 === 1;
  }; // is a given number positive?


  is.positive = function (n) {
    return is.number(n) && n > 0;
  }; // is a given number above maximum parameter?


  is.under = function (n, max) {
    return is.all.number(n, max) && n < max;
  }; // least method does not support 'all' and 'any' interfaces


  is.under.api = ['not']; // is a given number within minimum and maximum parameters?

  is.within = function (n, min, max) {
    return is.all.number(n, min, max) && n > min && n < max;
  }; // within method does not support 'all' and 'any' interfaces


  is.within.api = ['not']; // Regexp checks

  /* -------------------------------------------------------------------------- */
  // Steven Levithan, Jan Goyvaerts: Regular Expressions Cookbook
  // Scott Gonzalez: Email address validation
  // dateString match m/d/yy and mm/dd/yyyy, allowing any combination of one or two digits for the day and month, and two or four digits for the year
  // eppPhone match extensible provisioning protocol format
  // nanpPhone match north american number plan format
  // time match hours, minutes, and seconds, 24-hour clock

  var regexes = {
    affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
    alphaNumeric: /^[A-Za-z0-9]+$/,
    caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
    creditCard: /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
    dateString: /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
    // eslint-disable-line no-control-regex
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

  function regexpCheck(regexp, regexes) {
    is[regexp] = function (value) {
      return regexes[regexp].test(value);
    };
  } // create regexp checks methods from 'regexes' object


  for (var regexp in regexes) {
    if (regexes.hasOwnProperty(regexp)) {
      regexpCheck(regexp, regexes);
    }
  } // simplify IP checks by calling the regex helpers for IPv4 and IPv6


  is.ip = function (value) {
    return is.ipv4(value) || is.ipv6(value);
  }; // String checks

  /* -------------------------------------------------------------------------- */
  // is a given string or sentence capitalized?


  is.capitalized = function (string) {
    if (is.not.string(string)) {
      return false;
    }

    var words = string.split(' ');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];

      if (word.length) {
        var chr = word.charAt(0);

        if (chr !== chr.toUpperCase()) {
          return false;
        }
      }
    }

    return true;
  }; // is string end with a given target parameter?


  is.endWith = function (string, target) {
    if (is.not.string(string)) {
      return false;
    }

    target += '';
    var position = string.length - target.length;
    return position >= 0 && string.indexOf(target, position) === position;
  }; // endWith method does not support 'all' and 'any' interfaces


  is.endWith.api = ['not']; // is a given string include parameter target?

  is.include = function (string, target) {
    return string.indexOf(target) > -1;
  }; // include method does not support 'all' and 'any' interfaces


  is.include.api = ['not']; // is a given string all lowercase?

  is.lowerCase = function (string) {
    return is.string(string) && string === string.toLowerCase();
  }; // is a given string palindrome?


  is.palindrome = function (string) {
    if (is.not.string(string)) {
      return false;
    }

    string = string.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
    var length = string.length - 1;

    for (var i = 0, half = Math.floor(length / 2); i <= half; i++) {
      if (string.charAt(i) !== string.charAt(length - i)) {
        return false;
      }
    }

    return true;
  }; // is a given value space?
  // horizantal tab: 9, line feed: 10, vertical tab: 11, form feed: 12, carriage return: 13, space: 32


  is.space = function (value) {
    if (is.not.char(value)) {
      return false;
    }

    var charCode = value.charCodeAt(0);
    return charCode > 8 && charCode < 14 || charCode === 32;
  }; // is string start with a given target parameter?


  is.startWith = function (string, target) {
    return is.string(string) && string.indexOf(target) === 0;
  }; // startWith method does not support 'all' and 'any' interfaces


  is.startWith.api = ['not']; // is a given string all uppercase?

  is.upperCase = function (string) {
    return is.string(string) && string === string.toUpperCase();
  }; // Time checks

  /* -------------------------------------------------------------------------- */


  var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']; // is a given dates day equal given day parameter?

  is.day = function (date, day) {
    return is.date(date) && day.toLowerCase() === days[date.getDay()];
  }; // day method does not support 'all' and 'any' interfaces


  is.day.api = ['not']; // is a given date in daylight saving time?

  is.dayLightSavingTime = function (date) {
    var january = new Date(date.getFullYear(), 0, 1);
    var july = new Date(date.getFullYear(), 6, 1);
    var stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
    return date.getTimezoneOffset() < stdTimezoneOffset;
  }; // is a given date future?


  is.future = function (date) {
    var now = new Date();
    return is.date(date) && date.getTime() > now.getTime();
  }; // is date within given range?


  is.inDateRange = function (date, start, end) {
    if (is.not.date(date) || is.not.date(start) || is.not.date(end)) {
      return false;
    }

    var stamp = date.getTime();
    return stamp > start.getTime() && stamp < end.getTime();
  }; // inDateRange method does not support 'all' and 'any' interfaces


  is.inDateRange.api = ['not']; // is a given date in last month range?

  is.inLastMonth = function (date) {
    return is.inDateRange(date, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
  }; // is a given date in last week range?


  is.inLastWeek = function (date) {
    return is.inDateRange(date, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
  }; // is a given date in last year range?


  is.inLastYear = function (date) {
    return is.inDateRange(date, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
  }; // is a given date in next month range?


  is.inNextMonth = function (date) {
    return is.inDateRange(date, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
  }; // is a given date in next week range?


  is.inNextWeek = function (date) {
    return is.inDateRange(date, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
  }; // is a given date in next year range?


  is.inNextYear = function (date) {
    return is.inDateRange(date, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
  }; // is the given year a leap year?


  is.leapYear = function (year) {
    return is.number(year) && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
  }; // is a given dates month equal given month parameter?


  is.month = function (date, month) {
    return is.date(date) && month.toLowerCase() === months[date.getMonth()];
  }; // month method does not support 'all' and 'any' interfaces


  is.month.api = ['not']; // is a given date past?

  is.past = function (date) {
    var now = new Date();
    return is.date(date) && date.getTime() < now.getTime();
  }; // is a given date in the parameter quarter?


  is.quarterOfYear = function (date, quarter) {
    return is.date(date) && is.number(quarter) && quarter === Math.floor((date.getMonth() + 3) / 3);
  }; // quarterOfYear method does not support 'all' and 'any' interfaces


  is.quarterOfYear.api = ['not']; // is a given date indicate today?

  is.today = function (date) {
    var now = new Date();
    var todayString = now.toDateString();
    return is.date(date) && date.toDateString() === todayString;
  }; // is a given date indicate tomorrow?


  is.tomorrow = function (date) {
    var now = new Date();
    var tomorrowString = new Date(now.setDate(now.getDate() + 1)).toDateString();
    return is.date(date) && date.toDateString() === tomorrowString;
  }; // is a given date weekend?
  // 6: Saturday, 0: Sunday


  is.weekend = function (date) {
    return is.date(date) && (date.getDay() === 6 || date.getDay() === 0);
  }; // is a given date weekday?


  is.weekday = not(is.weekend); // is a given dates year equal given year parameter?

  is.year = function (date, year) {
    return is.date(date) && is.number(year) && year === date.getFullYear();
  }; // year method does not support 'all' and 'any' interfaces


  is.year.api = ['not']; // is a given date indicate yesterday?

  is.yesterday = function (date) {
    var now = new Date();
    var yesterdayString = new Date(now.setDate(now.getDate() - 1)).toDateString();
    return is.date(date) && date.toDateString() === yesterdayString;
  }; // Environment checks

  /* -------------------------------------------------------------------------- */


  var freeGlobal = is.windowObject(typeof __webpack_require__.g == 'object' && __webpack_require__.g) && __webpack_require__.g;
  var freeSelf = is.windowObject(typeof self == 'object' && self) && self;
  var thisGlobal = is.windowObject(typeof this == 'object' && this) && this;
  var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();
  var document = freeSelf && freeSelf.document;
  var previousIs = root.is; // store navigator properties to use later

  var navigator = freeSelf && freeSelf.navigator;
  var appVersion = (navigator && navigator.appVersion || '').toLowerCase();
  var userAgent = (navigator && navigator.userAgent || '').toLowerCase();
  var vendor = (navigator && navigator.vendor || '').toLowerCase(); // is current device android?

  is.android = function () {
    return /android/.test(userAgent);
  }; // android method does not support 'all' and 'any' interfaces


  is.android.api = ['not']; // is current device android phone?

  is.androidPhone = function () {
    return /android/.test(userAgent) && /mobile/.test(userAgent);
  }; // androidPhone method does not support 'all' and 'any' interfaces


  is.androidPhone.api = ['not']; // is current device android tablet?

  is.androidTablet = function () {
    return /android/.test(userAgent) && !/mobile/.test(userAgent);
  }; // androidTablet method does not support 'all' and 'any' interfaces


  is.androidTablet.api = ['not']; // is current device blackberry?

  is.blackberry = function () {
    return /blackberry/.test(userAgent) || /bb10/.test(userAgent);
  }; // blackberry method does not support 'all' and 'any' interfaces


  is.blackberry.api = ['not']; // is current browser chrome?
  // parameter is optional

  is.chrome = function (range) {
    var match = /google inc/.test(vendor) ? userAgent.match(/(?:chrome|crios)\/(\d+)/) : null;
    return match !== null && compareVersion(match[1], range);
  }; // chrome method does not support 'all' and 'any' interfaces


  is.chrome.api = ['not']; // is current device desktop?

  is.desktop = function () {
    return is.not.mobile() && is.not.tablet();
  }; // desktop method does not support 'all' and 'any' interfaces


  is.desktop.api = ['not']; // is current browser edge?
  // parameter is optional

  is.edge = function (range) {
    var match = userAgent.match(/edge\/(\d+)/);
    return match !== null && compareVersion(match[1], range);
  }; // edge method does not support 'all' and 'any' interfaces


  is.edge.api = ['not']; // is current browser firefox?
  // parameter is optional

  is.firefox = function (range) {
    var match = userAgent.match(/(?:firefox|fxios)\/(\d+)/);
    return match !== null && compareVersion(match[1], range);
  }; // firefox method does not support 'all' and 'any' interfaces


  is.firefox.api = ['not']; // is current browser internet explorer?
  // parameter is optional

  is.ie = function (range) {
    var match = userAgent.match(/(?:msie |trident.+?; rv:)(\d+)/);
    return match !== null && compareVersion(match[1], range);
  }; // ie method does not support 'all' and 'any' interfaces


  is.ie.api = ['not']; // is current device ios?

  is.ios = function () {
    return is.iphone() || is.ipad() || is.ipod();
  }; // ios method does not support 'all' and 'any' interfaces


  is.ios.api = ['not']; // is current device ipad?
  // parameter is optional

  is.ipad = function (range) {
    var match = userAgent.match(/ipad.+?os (\d+)/);
    return match !== null && compareVersion(match[1], range);
  }; // ipad method does not support 'all' and 'any' interfaces


  is.ipad.api = ['not']; // is current device iphone?
  // parameter is optional

  is.iphone = function (range) {
    // original iPhone doesn't have the os portion of the UA
    var match = userAgent.match(/iphone(?:.+?os (\d+))?/);
    return match !== null && compareVersion(match[1] || 1, range);
  }; // iphone method does not support 'all' and 'any' interfaces


  is.iphone.api = ['not']; // is current device ipod?
  // parameter is optional

  is.ipod = function (range) {
    var match = userAgent.match(/ipod.+?os (\d+)/);
    return match !== null && compareVersion(match[1], range);
  }; // ipod method does not support 'all' and 'any' interfaces


  is.ipod.api = ['not']; // is current operating system linux?

  is.linux = function () {
    return /linux/.test(appVersion);
  }; // linux method does not support 'all' and 'any' interfaces


  is.linux.api = ['not']; // is current operating system mac?

  is.mac = function () {
    return /mac/.test(appVersion);
  }; // mac method does not support 'all' and 'any' interfaces


  is.mac.api = ['not']; // is current device mobile?

  is.mobile = function () {
    return is.iphone() || is.ipod() || is.androidPhone() || is.blackberry() || is.windowsPhone();
  }; // mobile method does not support 'all' and 'any' interfaces


  is.mobile.api = ['not']; // is current state offline?

  is.offline = not(is.online); // offline method does not support 'all' and 'any' interfaces

  is.offline.api = ['not']; // is current state online?

  is.online = function () {
    return !navigator || navigator.onLine === true;
  }; // online method does not support 'all' and 'any' interfaces


  is.online.api = ['not']; // is current browser opera?
  // parameter is optional

  is.opera = function (range) {
    var match = userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/);
    return match !== null && compareVersion(match[1], range);
  }; // opera method does not support 'all' and 'any' interfaces


  is.opera.api = ['not']; // is current browser phantomjs?
  // parameter is optional

  is.phantom = function (range) {
    var match = userAgent.match(/phantomjs\/(\d+)/);
    return match !== null && compareVersion(match[1], range);
  }; // phantom method does not support 'all' and 'any' interfaces


  is.phantom.api = ['not']; // is current browser safari?
  // parameter is optional

  is.safari = function (range) {
    var match = userAgent.match(/version\/(\d+).+?safari/);
    return match !== null && compareVersion(match[1], range);
  }; // safari method does not support 'all' and 'any' interfaces


  is.safari.api = ['not']; // is current device tablet?

  is.tablet = function () {
    return is.ipad() || is.androidTablet() || is.windowsTablet();
  }; // tablet method does not support 'all' and 'any' interfaces


  is.tablet.api = ['not']; // is current device supports touch?

  is.touchDevice = function () {
    return !!document && ('ontouchstart' in freeSelf || 'DocumentTouch' in freeSelf && document instanceof DocumentTouch);
  }; // touchDevice method does not support 'all' and 'any' interfaces


  is.touchDevice.api = ['not']; // is current operating system windows?

  is.windows = function () {
    return /win/.test(appVersion);
  }; // windows method does not support 'all' and 'any' interfaces


  is.windows.api = ['not']; // is current device windows phone?

  is.windowsPhone = function () {
    return is.windows() && /phone/.test(userAgent);
  }; // windowsPhone method does not support 'all' and 'any' interfaces


  is.windowsPhone.api = ['not']; // is current device windows tablet?

  is.windowsTablet = function () {
    return is.windows() && is.not.windowsPhone() && /touch/.test(userAgent);
  }; // windowsTablet method does not support 'all' and 'any' interfaces


  is.windowsTablet.api = ['not']; // Object checks

  /* -------------------------------------------------------------------------- */
  // has a given object got parameterized count property?

  is.propertyCount = function (object, count) {
    if (is.not.object(object) || is.not.number(count)) {
      return false;
    }

    var n = 0;

    for (var property in object) {
      if (hasOwnProperty.call(object, property) && ++n > count) {
        return false;
      }
    }

    return n === count;
  }; // propertyCount method does not support 'all' and 'any' interfaces


  is.propertyCount.api = ['not']; // is given object has parameterized property?

  is.propertyDefined = function (object, property) {
    return is.object(object) && is.string(property) && property in object;
  }; // propertyDefined method does not support 'all' and 'any' interfaces


  is.propertyDefined.api = ['not']; // Array checks

  /* -------------------------------------------------------------------------- */
  // is a given item in an array?

  is.inArray = function (value, array) {
    if (is.not.array(array)) {
      return false;
    }

    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }

    return false;
  }; // inArray method does not support 'all' and 'any' interfaces


  is.inArray.api = ['not']; // is a given array sorted?

  is.sorted = function (array, sign) {
    if (is.not.array(array)) {
      return false;
    }

    var predicate = comparator[sign] || comparator['>='];

    for (var i = 1; i < array.length; i++) {
      if (!predicate(array[i], array[i - 1])) {
        return false;
      }
    }

    return true;
  }; // API
  // Set 'not', 'all' and 'any' interfaces to methods based on their api property

  /* -------------------------------------------------------------------------- */


  function setInterfaces() {
    var options = is;

    for (var option in options) {
      if (hasOwnProperty.call(options, option) && is['function'](options[option])) {
        var interfaces = options[option].api || ['not', 'all', 'any'];

        for (var i = 0; i < interfaces.length; i++) {
          if (interfaces[i] === 'not') {
            is.not[option] = not(is[option]);
          }

          if (interfaces[i] === 'all') {
            is.all[option] = all(is[option]);
          }

          if (interfaces[i] === 'any') {
            is.any[option] = any(is[option]);
          }
        }
      }
    }
  }

  setInterfaces(); // Configuration methods
  // Intentionally added after setInterfaces function

  /* -------------------------------------------------------------------------- */
  // change namespace of library to prevent name collisions
  // var preferredName = is.setNamespace();
  // preferredName.odd(3);
  // => true

  is.setNamespace = function () {
    root.is = previousIs;
    return this;
  }; // set optional regexes to methods


  is.setRegexp = function (regexp, name) {
    for (var r in regexes) {
      if (hasOwnProperty.call(regexes, r) && name === r) {
        regexes[r] = regexp;
      }
    }
  };

  return is;
});

/***/ }),

/***/ "./node_modules/scroll-lock/dist/scroll-lock.js":
/*!******************************************************!*\
  !*** ./node_modules/scroll-lock/dist/scroll-lock.js ***!
  \******************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_607__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_607__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_607__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __nested_webpack_require_607__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __nested_webpack_require_607__.d = function (exports, name, getter) {
        /******/
        if (!__nested_webpack_require_607__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __nested_webpack_require_607__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __nested_webpack_require_607__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __nested_webpack_require_607__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __nested_webpack_require_607__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __nested_webpack_require_607__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __nested_webpack_require_607__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __nested_webpack_require_607__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __nested_webpack_require_607__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __nested_webpack_require_607__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __nested_webpack_require_607__(__nested_webpack_require_607__.s = 0);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, __webpack_exports__, __nested_webpack_require_5303__) {
      "use strict";

      __nested_webpack_require_5303__.r(__webpack_exports__); // CONCATENATED MODULE: ./src/tools.js


      var argumentAsArray = function argumentAsArray(argument) {
        return Array.isArray(argument) ? argument : [argument];
      };

      var isElement = function isElement(target) {
        return target instanceof Node;
      };

      var isElementList = function isElementList(nodeList) {
        return nodeList instanceof NodeList;
      };

      var eachNode = function eachNode(nodeList, callback) {
        if (nodeList && callback) {
          nodeList = isElementList(nodeList) ? nodeList : [nodeList];

          for (var i = 0; i < nodeList.length; i++) {
            if (callback(nodeList[i], i, nodeList.length) === true) {
              break;
            }
          }
        }
      };

      var throwError = function throwError(message) {
        return console.error("[scroll-lock] ".concat(message));
      };

      var arrayAsSelector = function arrayAsSelector(array) {
        if (Array.isArray(array)) {
          var selector = array.join(', ');
          return selector;
        }
      };

      var nodeListAsArray = function nodeListAsArray(nodeList) {
        var nodes = [];
        eachNode(nodeList, function (node) {
          return nodes.push(node);
        });
        return nodes;
      };

      var findParentBySelector = function findParentBySelector($el, selector) {
        var self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

        if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
          return $el;
        }

        while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {
          ;
        }

        return $el;
      };

      var elementHasSelector = function elementHasSelector($el, selector) {
        var $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
        var has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
        return has;
      };

      var elementHasOverflowHidden = function elementHasOverflowHidden($el) {
        if ($el) {
          var computedStyle = getComputedStyle($el);
          var overflowIsHidden = computedStyle.overflow === 'hidden';
          return overflowIsHidden;
        }
      };

      var elementScrollTopOnStart = function elementScrollTopOnStart($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          var scrollTop = $el.scrollTop;
          return scrollTop <= 0;
        }
      };

      var elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          var scrollTop = $el.scrollTop;
          var scrollHeight = $el.scrollHeight;
          var scrollTopWithHeight = scrollTop + $el.offsetHeight;
          return scrollTopWithHeight >= scrollHeight;
        }
      };

      var elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          var scrollLeft = $el.scrollLeft;
          return scrollLeft <= 0;
        }
      };

      var elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          var scrollLeft = $el.scrollLeft;
          var scrollWidth = $el.scrollWidth;
          var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
          return scrollLeftWithWidth >= scrollWidth;
        }
      };

      var elementIsScrollableField = function elementIsScrollableField($el) {
        var selector = 'textarea, [contenteditable="true"]';
        return elementHasSelector($el, selector);
      };

      var elementIsInputRange = function elementIsInputRange($el) {
        var selector = 'input[type="range"]';
        return elementHasSelector($el, selector);
      }; // CONCATENATED MODULE: ./src/scroll-lock.js

      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "disablePageScroll", function () {
        return disablePageScroll;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "enablePageScroll", function () {
        return enablePageScroll;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "getScrollState", function () {
        return getScrollState;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "clearQueueScrollLocks", function () {
        return clearQueueScrollLocks;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "getTargetScrollBarWidth", function () {
        return scroll_lock_getTargetScrollBarWidth;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", function () {
        return scroll_lock_getCurrentTargetScrollBarWidth;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "getPageScrollBarWidth", function () {
        return getPageScrollBarWidth;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", function () {
        return getCurrentPageScrollBarWidth;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "addScrollableTarget", function () {
        return scroll_lock_addScrollableTarget;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "removeScrollableTarget", function () {
        return scroll_lock_removeScrollableTarget;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "addScrollableSelector", function () {
        return scroll_lock_addScrollableSelector;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "removeScrollableSelector", function () {
        return scroll_lock_removeScrollableSelector;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "addLockableTarget", function () {
        return scroll_lock_addLockableTarget;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "addLockableSelector", function () {
        return scroll_lock_addLockableSelector;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "setFillGapMethod", function () {
        return scroll_lock_setFillGapMethod;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "addFillGapTarget", function () {
        return scroll_lock_addFillGapTarget;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "removeFillGapTarget", function () {
        return scroll_lock_removeFillGapTarget;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "addFillGapSelector", function () {
        return scroll_lock_addFillGapSelector;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "removeFillGapSelector", function () {
        return scroll_lock_removeFillGapSelector;
      });
      /* harmony export (binding) */


      __nested_webpack_require_5303__.d(__webpack_exports__, "refillGaps", function () {
        return refillGaps;
      });

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);

          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }

          ownKeys.forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        }

        return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      var FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
      var TOUCH_DIRECTION_DETECT_OFFSET = 3;
      var state = {
        scroll: true,
        queue: 0,
        scrollableSelectors: ['[data-scroll-lock-scrollable]'],
        lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
        fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
        fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
        //
        startTouchY: 0,
        startTouchX: 0
      };

      var disablePageScroll = function disablePageScroll(target) {
        if (state.queue <= 0) {
          state.scroll = false;
          scroll_lock_hideLockableOverflow();
          fillGaps();
        }

        scroll_lock_addScrollableTarget(target);
        state.queue++;
      };

      var enablePageScroll = function enablePageScroll(target) {
        state.queue > 0 && state.queue--;

        if (state.queue <= 0) {
          state.scroll = true;
          scroll_lock_showLockableOverflow();
          unfillGaps();
        }

        scroll_lock_removeScrollableTarget(target);
      };

      var getScrollState = function getScrollState() {
        return state.scroll;
      };

      var clearQueueScrollLocks = function clearQueueScrollLocks() {
        state.queue = 0;
      };

      var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
        var onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (isElement($target)) {
          var currentOverflowYProperty = $target.style.overflowY;

          if (onlyExists) {
            if (!getScrollState()) {
              $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-overflow-y-property');
            }
          } else {
            $target.style.overflowY = 'scroll';
          }

          var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
          $target.style.overflowY = currentOverflowYProperty;
          return width;
        } else {
          return 0;
        }
      };

      var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
        if (isElement($target)) {
          if ($target === document.body) {
            var documentWidth = document.documentElement.clientWidth;
            var windowWidth = window.innerWidth;
            var currentWidth = windowWidth - documentWidth;
            return currentWidth;
          } else {
            var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
            var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
            $target.style.borderLeftWidth = '0px';
            $target.style.borderRightWidth = '0px';

            var _currentWidth = $target.offsetWidth - $target.clientWidth;

            $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
            $target.style.borderRightWidth = borderRightWidthCurrentProperty;
            return _currentWidth;
          }
        } else {
          return 0;
        }
      };

      var getPageScrollBarWidth = function getPageScrollBarWidth() {
        var onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
      };

      var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
        return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
      };

      var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
        if (target) {
          var targets = argumentAsArray(target);
          targets.map(function ($targets) {
            eachNode($targets, function ($target) {
              if (isElement($target)) {
                $target.setAttribute('data-scroll-lock-scrollable', '');
              } else {
                throwError("\"".concat($target, "\" is not a Element."));
              }
            });
          });
        }
      };

      var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
        if (target) {
          var targets = argumentAsArray(target);
          targets.map(function ($targets) {
            eachNode($targets, function ($target) {
              if (isElement($target)) {
                $target.removeAttribute('data-scroll-lock-scrollable');
              } else {
                throwError("\"".concat($target, "\" is not a Element."));
              }
            });
          });
        }
      };

      var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
        if (selector) {
          var selectors = argumentAsArray(selector);
          selectors.map(function (selector) {
            state.scrollableSelectors.push(selector);
          });
        }
      };

      var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
        if (selector) {
          var selectors = argumentAsArray(selector);
          selectors.map(function (selector) {
            state.scrollableSelectors = state.scrollableSelectors.filter(function (sSelector) {
              return sSelector !== selector;
            });
          });
        }
      };

      var scroll_lock_addLockableTarget = function addLockableTarget(target) {
        if (target) {
          var targets = argumentAsArray(target);
          targets.map(function ($targets) {
            eachNode($targets, function ($target) {
              if (isElement($target)) {
                $target.setAttribute('data-scroll-lock-lockable', '');
              } else {
                throwError("\"".concat($target, "\" is not a Element."));
              }
            });
          });

          if (!getScrollState()) {
            scroll_lock_hideLockableOverflow();
          }
        }
      };

      var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
        if (selector) {
          var selectors = argumentAsArray(selector);
          selectors.map(function (selector) {
            state.lockableSelectors.push(selector);
          });

          if (!getScrollState()) {
            scroll_lock_hideLockableOverflow();
          }

          scroll_lock_addFillGapSelector(selector);
        }
      };

      var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
        if (method) {
          if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
            state.fillGapMethod = method;
            refillGaps();
          } else {
            var methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
            throwError("\"".concat(method, "\" method is not available!\nAvailable fill gap methods: ").concat(methods, "."));
          }
        }
      };

      var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
        if (target) {
          var targets = argumentAsArray(target);
          targets.map(function ($targets) {
            eachNode($targets, function ($target) {
              if (isElement($target)) {
                $target.setAttribute('data-scroll-lock-fill-gap', '');

                if (!state.scroll) {
                  scroll_lock_fillGapTarget($target);
                }
              } else {
                throwError("\"".concat($target, "\" is not a Element."));
              }
            });
          });
        }
      };

      var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
        if (target) {
          var targets = argumentAsArray(target);
          targets.map(function ($targets) {
            eachNode($targets, function ($target) {
              if (isElement($target)) {
                $target.removeAttribute('data-scroll-lock-fill-gap');

                if (!state.scroll) {
                  scroll_lock_unfillGapTarget($target);
                }
              } else {
                throwError("\"".concat($target, "\" is not a Element."));
              }
            });
          });
        }
      };

      var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
        if (selector) {
          var selectors = argumentAsArray(selector);
          selectors.map(function (selector) {
            if (state.fillGapSelectors.indexOf(selector) === -1) {
              state.fillGapSelectors.push(selector);

              if (!state.scroll) {
                scroll_lock_fillGapSelector(selector);
              }
            }
          });
        }
      };

      var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
        if (selector) {
          var selectors = argumentAsArray(selector);
          selectors.map(function (selector) {
            state.fillGapSelectors = state.fillGapSelectors.filter(function (fSelector) {
              return fSelector !== selector;
            });

            if (!state.scroll) {
              scroll_lock_unfillGapSelector(selector);
            }
          });
        }
      };

      var refillGaps = function refillGaps() {
        if (!state.scroll) {
          fillGaps();
        }
      };

      var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
        var selector = arrayAsSelector(state.lockableSelectors);
        scroll_lock_hideLockableOverflowSelector(selector);
      };

      var scroll_lock_showLockableOverflow = function showLockableOverflow() {
        var selector = arrayAsSelector(state.lockableSelectors);
        scroll_lock_showLockableOverflowSelector(selector);
      };

      var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
        var $targets = document.querySelectorAll(selector);
        eachNode($targets, function ($target) {
          scroll_lock_hideLockableOverflowTarget($target);
        });
      };

      var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
        var $targets = document.querySelectorAll(selector);
        eachNode($targets, function ($target) {
          scroll_lock_showLockableOverflowTarget($target);
        });
      };

      var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
        if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') !== 'true') {
          var computedStyle = window.getComputedStyle($target);
          $target.setAttribute('data-scroll-lock-saved-overflow-y-property', computedStyle.overflowY);
          $target.setAttribute('data-scroll-lock-saved-inline-overflow-property', $target.style.overflow);
          $target.setAttribute('data-scroll-lock-saved-inline-overflow-y-property', $target.style.overflowY);
          $target.style.overflow = 'hidden';
          $target.setAttribute('data-scroll-lock-locked', 'true');
        }
      };

      var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
        if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') === 'true') {
          $target.style.overflow = $target.getAttribute('data-scroll-lock-saved-inline-overflow-property');
          $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-inline-overflow-y-property');
          $target.removeAttribute('data-scroll-lock-saved-overflow-property');
          $target.removeAttribute('data-scroll-lock-saved-inline-overflow-property');
          $target.removeAttribute('data-scroll-lock-saved-inline-overflow-y-property');
          $target.removeAttribute('data-scroll-lock-locked');
        }
      };

      var fillGaps = function fillGaps() {
        state.fillGapSelectors.map(function (selector) {
          scroll_lock_fillGapSelector(selector);
        });
      };

      var unfillGaps = function unfillGaps() {
        state.fillGapSelectors.map(function (selector) {
          scroll_lock_unfillGapSelector(selector);
        });
      };

      var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
        var $targets = document.querySelectorAll(selector);
        var isLockable = state.lockableSelectors.indexOf(selector) !== -1;
        eachNode($targets, function ($target) {
          scroll_lock_fillGapTarget($target, isLockable);
        });
      };

      var scroll_lock_fillGapTarget = function fillGapTarget($target) {
        var isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (isElement($target)) {
          var scrollBarWidth;

          if ($target.getAttribute('data-scroll-lock-lockable') === '' || isLockable) {
            scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
          } else {
            var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
            scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
          }

          if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
            scroll_lock_unfillGapTarget($target);
          }

          var computedStyle = window.getComputedStyle($target);
          $target.setAttribute('data-scroll-lock-filled-gap', 'true');
          $target.setAttribute('data-scroll-lock-current-fill-gap-method', state.fillGapMethod);

          if (state.fillGapMethod === 'margin') {
            var currentMargin = parseFloat(computedStyle.marginRight);
            $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
          } else if (state.fillGapMethod === 'width') {
            $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
          } else if (state.fillGapMethod === 'max-width') {
            $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
          } else if (state.fillGapMethod === 'padding') {
            var currentPadding = parseFloat(computedStyle.paddingRight);
            $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
          }
        }
      };

      var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
        var $targets = document.querySelectorAll(selector);
        eachNode($targets, function ($target) {
          scroll_lock_unfillGapTarget($target);
        });
      };

      var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
        if (isElement($target)) {
          if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
            var currentFillGapMethod = $target.getAttribute('data-scroll-lock-current-fill-gap-method');
            $target.removeAttribute('data-scroll-lock-filled-gap');
            $target.removeAttribute('data-scroll-lock-current-fill-gap-method');

            if (currentFillGapMethod === 'margin') {
              $target.style.marginRight = "";
            } else if (currentFillGapMethod === 'width') {
              $target.style.width = "";
            } else if (currentFillGapMethod === 'max-width') {
              $target.style.maxWidth = "";
            } else if (currentFillGapMethod === 'padding') {
              $target.style.paddingRight = "";
            }
          }
        }
      };

      var onResize = function onResize(e) {
        refillGaps();
      };

      var onTouchStart = function onTouchStart(e) {
        if (!state.scroll) {
          state.startTouchY = e.touches[0].clientY;
          state.startTouchX = e.touches[0].clientX;
        }
      };

      var scroll_lock_onTouchMove = function onTouchMove(e) {
        if (!state.scroll) {
          var startTouchY = state.startTouchY,
              startTouchX = state.startTouchX;
          var currentClientY = e.touches[0].clientY;
          var currentClientX = e.touches[0].clientX;

          if (e.touches.length < 2) {
            var selector = arrayAsSelector(state.scrollableSelectors);
            var direction = {
              up: startTouchY < currentClientY,
              down: startTouchY > currentClientY,
              left: startTouchX < currentClientX,
              right: startTouchX > currentClientX
            };
            var directionWithOffset = {
              up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
              down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
              left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
              right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
            };

            var handle = function handle($el) {
              var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if ($el) {
                var parentScrollableEl = findParentBySelector($el, selector, false);

                if (elementIsInputRange($el)) {
                  return false;
                }

                if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
                  var prevent = false;

                  if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
                    if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                      prevent = true;
                    }
                  } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
                    if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                      prevent = true;
                    }
                  } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
                    prevent = true;
                  }

                  if (prevent) {
                    if (parentScrollableEl) {
                      handle(parentScrollableEl, true);
                    } else {
                      if (e.cancelable) {
                        e.preventDefault();
                      }
                    }
                  }
                } else {
                  handle(parentScrollableEl);
                }
              } else {
                if (e.cancelable) {
                  e.preventDefault();
                }
              }
            };

            handle(e.target);
          }
        }
      };

      var onTouchEnd = function onTouchEnd(e) {
        if (!state.scroll) {
          state.startTouchY = 0;
          state.startTouchX = 0;
        }
      };

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', onResize);
      }

      if (typeof document !== 'undefined') {
        document.addEventListener('touchstart', onTouchStart);
        document.addEventListener('touchmove', scroll_lock_onTouchMove, {
          passive: false
        });
        document.addEventListener('touchend', onTouchEnd);
      }

      var deprecatedMethods = {
        hide: function hide(target) {
          throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
          disablePageScroll(target);
        },
        show: function show(target) {
          throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
          enablePageScroll(target);
        },
        toggle: function toggle(target) {
          throwError('"toggle" is deprecated! Do not use it.');

          if (getScrollState()) {
            disablePageScroll();
          } else {
            enablePageScroll(target);
          }
        },
        getState: function getState() {
          throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
          return getScrollState();
        },
        getWidth: function getWidth() {
          throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
          return getPageScrollBarWidth();
        },
        getCurrentWidth: function getCurrentWidth() {
          throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
          return getCurrentPageScrollBarWidth();
        },
        setScrollableTargets: function setScrollableTargets(target) {
          throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
          scroll_lock_addScrollableTarget(target);
        },
        setFillGapSelectors: function setFillGapSelectors(selector) {
          throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
          scroll_lock_addFillGapSelector(selector);
        },
        setFillGapTargets: function setFillGapTargets(target) {
          throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
          scroll_lock_addFillGapTarget(target);
        },
        clearQueue: function clearQueue() {
          throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
          clearQueueScrollLocks();
        }
      };

      var scrollLock = _objectSpread({
        disablePageScroll: disablePageScroll,
        enablePageScroll: enablePageScroll,
        getScrollState: getScrollState,
        clearQueueScrollLocks: clearQueueScrollLocks,
        getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
        getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
        getPageScrollBarWidth: getPageScrollBarWidth,
        getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
        addScrollableSelector: scroll_lock_addScrollableSelector,
        removeScrollableSelector: scroll_lock_removeScrollableSelector,
        addScrollableTarget: scroll_lock_addScrollableTarget,
        removeScrollableTarget: scroll_lock_removeScrollableTarget,
        addLockableSelector: scroll_lock_addLockableSelector,
        addLockableTarget: scroll_lock_addLockableTarget,
        addFillGapSelector: scroll_lock_addFillGapSelector,
        removeFillGapSelector: scroll_lock_removeFillGapSelector,
        addFillGapTarget: scroll_lock_addFillGapTarget,
        removeFillGapTarget: scroll_lock_removeFillGapTarget,
        setFillGapMethod: scroll_lock_setFillGapMethod,
        refillGaps: refillGaps,
        _state: state
      }, deprecatedMethods);
      /* harmony default export */


      var scroll_lock = __webpack_exports__["default"] = scrollLock;
      /***/
    }
    /******/
    ])["default"]
  );
});

/***/ }),

/***/ "./src/dropdown/Dropdown.ts":
/*!**********************************!*\
  !*** ./src/dropdown/Dropdown.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dropdown = void 0;
function createDropdown(selector, content, type = 'left') {
    let className = '';
    let button = null;
    if (type === 'left') {
        className = 'dropdown_left';
    }
    if (type === 'right') {
        className = 'dropdown_right';
    }
    if (typeof selector === 'string') {
        button = document.querySelector(`[data-dropdown-open="${selector}"]`);
    }
    if (selector instanceof Element) {
        button = selector;
    }
    if (!button)
        return;
    const id = button.dataset.dropdownOpen;
    if (!id)
        return;
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown', className);
    dropdown.dataset.dropdown = id;
    dropdown.innerHTML = `
    <div class="dropdown__content" data-dropdown-content>
        ${content}
        
        <button data-dropdown-close>Х</button>
    </div>   
  `;
    // @ts-ignore
    button.parentNode.insertBefore(dropdown, button.nextSibling);
    dropdown.prepend(button);
}
function Dropdown() {
    let _isOpen = false;
    function open(id) {
        const selector = `[data-dropdown="${id}"]`;
        const dropdown = document.querySelector(selector);
        if (!dropdown)
            return;
        dropdown.classList.add('dropdown_open');
        setTimeout(() => {
            dropdown.classList.add('dropdown_visible');
        }, 300);
    }
    function close(dropdown) {
        dropdown.classList.remove('dropdown_visible');
        setTimeout(() => {
            dropdown.classList.remove('dropdown_open');
        }, 200);
    }
    function closeAll() {
        const selector = `[data-dropdown]`;
        const dropdowns = Array.from(document.querySelectorAll(selector));
        dropdowns.forEach(item => {
            close(item);
            // enablePageScroll(item);
        });
        // clearQueueScrollLocks();
    }
    function documentClickHandler(e) {
        const target = e.target;
        if (_isOpen) {
            // Close all
            const currentDropdown = target.closest('[data-dropdown]');
            const closeBtn = target.closest('[data-dropdown-close]');
            const openBtn = target.closest('[data-dropdown-open]');
            if (!currentDropdown || closeBtn || openBtn) {
                closeAll();
                _isOpen = false;
            }
            // clearQueueScrollLocks();
            // enablePageScroll(currentDropdown);
        }
        else {
            const dropdownTrigger = target.closest('[data-dropdown-open]');
            if (!dropdownTrigger)
                return;
            // Open
            const id = dropdownTrigger.dataset.dropdownOpen;
            if (id) {
                open(id);
                // disablePageScroll();
                _isOpen = true;
            }
        }
    }
    function documentKeyupHandler(e) {
        if (e.key === 'Escape') {
            closeAll();
            _isOpen = false;
        }
    }
    function init() {
        document.addEventListener('click', documentClickHandler);
        document.addEventListener('keyup', documentKeyupHandler);
    }
    function destroy() {
        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keyup', documentKeyupHandler);
    }
    return {
        init,
        destroy,
        open,
        close,
        createDropdown
    };
}
exports.Dropdown = Dropdown;


/***/ }),

/***/ "./src/form/Form.ts":
/*!**************************!*\
  !*** ./src/form/Form.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = void 0;
const form_utils_1 = __webpack_require__(/*! @/form/form.utils */ "./src/form/form.utils.ts");
function Form() {
    let _isFormValid = null;
    function reset(form) {
        const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
        (0, form_utils_1.hideAllError)(inputs);
    }
    function validate(form) {
        if (!form)
            return;
        reset(form);
        const inputs = Array.from(form.querySelectorAll('input, select, textarea'));
        _isFormValid = (0, form_utils_1.checkInputs)(inputs);
    }
    function documentFocusHandler(e) {
        const target = e.target;
        if (!target)
            return;
        const form = target.closest('[data-form]');
        validate(form);
    }
    function documentBlurHandler(e) {
        const target = e.target;
        if (!target)
            return;
        const form = target.closest('[data-form]');
        validate(form);
    }
    function documentInputHandler(e) {
        const target = e.target;
        if (!target)
            return;
        const form = target.closest('[data-form]');
        validate(form);
    }
    function documentChangeHandler(e) {
        const target = e.target;
        if (!target)
            return;
        const form = target.closest('[data-form]');
        validate(form);
    }
    function documentSubmitHandler(e) {
        const target = e.target;
        e.preventDefault();
        const form = target.closest('[data-form]');
        validate(form);
        if (_isFormValid) {
            console.log('Submit');
            // form.submit();
        }
    }
    function init() {
        const forms = Array.from(document.forms);
        forms.forEach(form => {
            const inputs = Array.from(form.querySelectorAll('[required]'));
            inputs.forEach(input => {
                input.dataset.required = '';
                input.required = false;
                // TODO Менять атрибут type у полей по словарю
                // email -> text
                // datetime -> text
                if (input.type === 'email') {
                    input.type = 'text';
                }
            });
        });
        document.addEventListener('focus', documentFocusHandler);
        document.addEventListener('blur', documentBlurHandler);
        document.addEventListener('input', documentInputHandler);
        document.addEventListener('change', documentChangeHandler);
        document.addEventListener('submit', documentSubmitHandler);
    }
    function destroy() {
        const forms = Array.from(document.forms);
        forms.forEach(form => {
            const inputs = Array.from(form.querySelectorAll('[data-required]'));
            inputs.forEach(input => {
                input.required = true;
            });
        });
        document.addEventListener('focus', documentFocusHandler);
        document.addEventListener('blur', documentBlurHandler);
        document.addEventListener('input', documentInputHandler);
        document.addEventListener('change', documentChangeHandler);
        document.addEventListener('submit', documentSubmitHandler);
    }
    return {
        init,
        destroy,
        isFormValid: _isFormValid,
        validate,
        reset,
        getFormData: form_utils_1.getFormData,
        createError: form_utils_1.createError
    };
}
exports.Form = Form;


/***/ }),

/***/ "./src/form/form.utils.ts":
/*!********************************!*\
  !*** ./src/form/form.utils.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkInputs = exports.checkValue = exports.getErrorMessage = exports.getRules = exports.getValue = exports.getFormData = exports.hideAllError = exports.hideError = exports.showError = exports.createError = exports.defaultErrorsMsg = void 0;
const is_js_1 = __importDefault(__webpack_require__(/*! is_js */ "./node_modules/is_js/is.js"));
// error-empty
// error-len
// error-phone
// error-email
exports.defaultErrorsMsg = {
    empty: 'Поле не должно быть пустым',
    minlen: (x) => `Минимальная длина ${x} символов`,
    maxlen: (x) => `Максимальная длина ${x} символов`,
    phone: 'Неверный формат номера телефона',
    email: 'Неверный формат e-mail'
};
function createError(content, formItem = null) {
    const error = document.createElement('span');
    error.classList.add('error', 'form__error');
    error.dataset.error = '';
    error.innerHTML = content;
    if (formItem) {
        formItem.append(error);
    }
    return error;
}
exports.createError = createError;
function showError(item, msg) {
    if (!item)
        return;
    let error = item.querySelector('[data-error]');
    if (!error) {
        error = createError(msg, item);
    }
    error.classList.add('error_shown');
}
exports.showError = showError;
function hideError(item) {
    if (!item)
        return;
    const error = item.querySelector('[data-error]');
    if (!error)
        return;
    error.classList.add('error_hide');
}
exports.hideError = hideError;
function hideAllError(items) {
    items.forEach(item => {
        hideError(item);
    });
}
exports.hideAllError = hideAllError;
function getFormData(selector) {
    let form = null;
    if (typeof selector === 'string') {
        form = document.querySelector(selector);
    }
    if (selector instanceof Element) {
        form = selector;
    }
    return new FormData(form);
}
exports.getFormData = getFormData;
function getValue(input) {
    if (input.tagName === 'INPUT') {
        if (input.type === 'checkbox' || input.type === 'radio') {
            let inputValue = null;
            if (input.checked && input.value === 'on') {
                inputValue = input.name;
            }
            else if (input.checked && input.value !== 'on') {
                inputValue = input.value;
            }
            else if (!input.checked) {
                inputValue = null;
            }
            return inputValue;
        }
        return input.value;
    }
    if (input.tagName === 'SELECT') {
        return input.value;
    }
    if (input.tagName === 'TEXTAREA') {
        return input.value;
    }
    return input.value;
}
exports.getValue = getValue;
function getRules(input) {
    const rules = [];
    if ('errorEmpty' in input.dataset || input.dataset.required) {
        rules.push('empty');
    }
    if ('errorLen' in input.dataset) {
        rules.push('len'); // TODO Добавить передачу значения
    }
    if ('errorPhoneMsg' in input.dataset) {
        rules.push('phone');
    }
    if ('errorEmailMsg' in input.dataset) {
        rules.push('email');
    }
    return [];
}
exports.getRules = getRules;
function getErrorMessage(input, error) {
    let errorMsg = null;
    // error-empty
    // error-len
    // error-phone
    // error-email
    if (error === 'empty') {
        if ('errorEmptyMsg' in input.dataset) {
            errorMsg = input.dataset.errorEmptyMsg;
        }
        else {
            errorMsg = exports.defaultErrorsMsg[error];
        }
    }
    else if (error === 'maxlen') {
        if ('errorLenMsg' in input.dataset) {
            errorMsg = input.dataset.errorEmptyMsg;
        }
        else {
            errorMsg = exports.defaultErrorsMsg[error](input.dataset.errorLen);
        }
    }
    else if (error === 'minlen') {
        if ('errorLenMsg' in input.dataset) {
            errorMsg = input.dataset.errorEmptyMsg;
        }
        else {
            errorMsg = exports.defaultErrorsMsg[error](input.dataset.errorLen);
        }
    }
    else if (error === 'phone') {
        if ('errorPhoneMsg' in input.dataset) {
            errorMsg = input.dataset.errorEmptyMsg;
        }
        else {
            errorMsg = exports.defaultErrorsMsg[error];
        }
    }
    else if (error === 'email') {
        if ('errorEmailMsg' in input.dataset) {
            errorMsg = input.dataset.errorEmptyMsg;
        }
        else {
            errorMsg = exports.defaultErrorsMsg[error];
        }
    }
    else {
        errorMsg = 'Неверный формат';
    }
    return errorMsg;
}
exports.getErrorMessage = getErrorMessage;
function checkValue(value, rules = []) {
    let result = null;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (rule === 'empty') {
            is_js_1.default.empty(value);
            result = rule;
        }
        if (rule === 'phone') {
            is_js_1.default.empty(value);
            result = rule;
        }
        if (rule === 'email') {
            is_js_1.default.empty(value);
            result = rule;
        }
        if (result)
            break;
    }
    return result;
}
exports.checkValue = checkValue;
function checkInputs(inputs) {
    let isFormValid = true;
    inputs.forEach(input => {
        const value = getValue(input);
        const rules = getRules(input);
        console.log(value, rules);
        const failedRule = checkValue(value, rules);
        if (!failedRule) {
            const msg = getErrorMessage(input, failedRule);
            showError(input, msg);
        }
        if (isFormValid) {
            isFormValid = !!failedRule;
        }
    });
    console.log(isFormValid);
    return isFormValid;
}
exports.checkInputs = checkInputs;


/***/ }),

/***/ "./src/modal/Modal.ts":
/*!****************************!*\
  !*** ./src/modal/Modal.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modal = void 0;
const scroll_lock_1 = __webpack_require__(/*! scroll-lock */ "./node_modules/scroll-lock/dist/scroll-lock.js");
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    document.body.append(overlay);
    return overlay;
}
function createModal(content, id) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.dataset.modal = id;
    modal.innerHTML = `
      <div class="modal__content" data-modal-content>
          <div class="modal__close" data-modal-close>
            <svg viewBox="0 0 20 20" id="burger-close-desktop" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.378 16.957L3 4.32 4.293 3l12.379 12.637z"></path>
              <path d="M3 15.637L15.378 3l1.293 1.32L4.293 16.958z"></path>
            </svg>
          </div>
  
          <div class="modal__content-header"></div>
  
          <div class="modal__content-body" data-modal-content>
              ${content}
          </div>
      </div>
    `;
    document.body.append(modal);
}
function showModal(id) {
    const selector = `[data-modal="${id}"]`;
    const modal = document.querySelector(selector);
    if (!modal)
        return;
    modal.classList.add('modal_open');
    setTimeout(() => {
        modal.classList.add('modal_visible');
    }, 300);
    return modal;
}
function hideModal(modal) {
    modal.classList.remove('modal_visible');
    setTimeout(() => {
        modal.classList.remove('modal_open');
    }, 200);
}
function showOverlay(overlay) {
    overlay.classList.add('modal-overlay_open');
    setTimeout(() => {
        overlay.classList.add('modal-overlay_visible');
    }, 300);
}
function hideOverlay(overlay) {
    overlay.classList.remove('modal-overlay_visible');
    setTimeout(() => {
        overlay.classList.remove('modal-overlay_open');
    }, 500);
}
const Modal = (type = 'default') => {
    const _type = type;
    let _modal = null;
    let _overlay = null;
    let _isOpen = false;
    const overlay = document.querySelector('[data-modal-overlay]');
    if (!overlay) {
        _overlay = createOverlay();
    }
    else {
        _overlay = overlay;
    }
    function open(id) {
        /* TODO
          Проверить существует ли модалки и попробовать ее получение из ajax, из атрибута
          data-modal-content // Строка
          data-modal-content-ajax // Урл запроса для ajax
          data-modal-content-base64 // Строка base64. Разобрать и вывести в контент
          Добавить событие открытия
          Добавить событие закрытия
         */
        if (_type === 'default') {
            showOverlay(_overlay);
        }
        _modal = showModal(id);
        _isOpen = true;
    }
    function close(item) {
        hideModal(item);
        setTimeout(() => {
            if (_type === 'default') {
                hideOverlay(_overlay);
            }
            _isOpen = false;
        }, 200);
    }
    function closeAll() {
        const selector = `[data-modal]`;
        const modals = Array.from(document.querySelectorAll(selector));
        modals.forEach(item => {
            close(item);
            (0, scroll_lock_1.enablePageScroll)(item);
        });
        (0, scroll_lock_1.clearQueueScrollLocks)();
    }
    function documentClickHandler(e) {
        const target = e.target;
        if (_isOpen) {
            // Close all modals
            const currentModal = target.closest('[data-modal-content]');
            const closeBtn = target.closest('[data-modal-close]');
            if (!currentModal || closeBtn) {
                closeAll();
                _isOpen = false;
            }
            (0, scroll_lock_1.clearQueueScrollLocks)();
            (0, scroll_lock_1.enablePageScroll)(currentModal);
        }
        else {
            const modalTrigger = target.closest('[data-modal-open]');
            if (!modalTrigger)
                return;
            // Open modal
            const modalId = modalTrigger.dataset.modalOpen;
            if (modalId) {
                open(modalId);
                (0, scroll_lock_1.disablePageScroll)();
                _isOpen = true;
            }
        }
    }
    function documentKeyupHandler(e) {
        if (e.key === 'Escape') {
            closeAll();
            _isOpen = false;
        }
    }
    function init() {
        document.addEventListener('click', documentClickHandler);
        document.addEventListener('keyup', documentKeyupHandler);
    }
    function destroy() {
        document.removeEventListener('click', documentClickHandler);
        document.removeEventListener('keyup', documentKeyupHandler);
    }
    return {
        open,
        close,
        init,
        destroy,
        createModal,
        modal: _modal,
        isOpen: _isOpen
    };
};
exports.Modal = Modal;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
  Экспортировать все компоненты для сборки общего скрипта
 */
__webpack_require__(/*! ./dropdown/Dropdown */ "./src/dropdown/Dropdown.ts");
__webpack_require__(/*! ./form/Form */ "./src/form/Form.ts");
__webpack_require__(/*! ./modal/Modal */ "./src/modal/Modal.ts");

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=app.js.map