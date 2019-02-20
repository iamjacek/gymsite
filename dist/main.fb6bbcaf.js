// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../assets/Vector_about.svg":[["Vector_about.30452af3.svg","assets/Vector_about.svg"],"assets/Vector_about.svg"],"./../assets/Vector2_about.svg":[["Vector2_about.43002d8a.svg","assets/Vector2_about.svg"],"assets/Vector2_about.svg"],"./../assets/half-circle_about.svg":[["half-circle_about.28f2ab62.svg","assets/half-circle_about.svg"],"assets/half-circle_about.svg"],"./../assets/ellipse-grey_about.png":[["ellipse-grey_about.18b53ff2.png","assets/ellipse-grey_about.png"],"assets/ellipse-grey_about.png"],"./../assets/ellipse-orange_about.png":[["ellipse-orange_about.9bc21254.png","assets/ellipse-orange_about.png"],"assets/ellipse-orange_about.png"],"./../assets/dot_prices.png":[["dot_prices.6c197969.png","assets/dot_prices.png"],"assets/dot_prices.png"],"./../assets/vector_prices.svg":[["vector_prices.be3f7a7b.svg","assets/vector_prices.svg"],"assets/vector_prices.svg"],"./../assets/top_price.png":[["top_price.d8646b99.png","assets/top_price.png"],"assets/top_price.png"],"./../assets/background_contacts.png":[["background_contacts.dd455416.png","assets/background_contacts.png"],"assets/background_contacts.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/logo_home.png":[function(require,module,exports) {
module.exports = "/logo_home.07ed628a.png";
},{}],"assets/star_home.svg":[function(require,module,exports) {
module.exports = "/star_home.b575be31.svg";
},{}],"assets/man_home.png":[function(require,module,exports) {
module.exports = "/man_home.0c6dc632.png";
},{}],"assets/chevron_home.svg":[function(require,module,exports) {
module.exports = "/chevron_home.56ec1954.svg";
},{}],"assets/heading_about.png":[function(require,module,exports) {
module.exports = "/heading_about.11a8b692.png";
},{}],"assets/fonts/Pavanam.ttf":[function(require,module,exports) {
module.exports = "/Pavanam.7f676f72.ttf";
},{}],"assets/fonts/PaytoneOne.ttf":[function(require,module,exports) {
module.exports = "/PaytoneOne.b89b6053.ttf";
},{}],"../node_modules/os-browserify/browser.js":[function(require,module,exports) {
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};

},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("../sass/style.scss"));

var _logo_home = _interopRequireDefault(require("../assets/logo_home.png"));

var _star_home = _interopRequireDefault(require("../assets/star_home.svg"));

var _man_home = _interopRequireDefault(require("../assets/man_home.png"));

var _chevron_home = _interopRequireDefault(require("../assets/chevron_home.svg"));

var _heading_about = _interopRequireDefault(require("../assets/heading_about.png"));

var _Pavanam = _interopRequireDefault(require("../assets/fonts/Pavanam.ttf"));

var _PaytoneOne = _interopRequireDefault(require("../assets/fonts/PaytoneOne.ttf"));

var _os = require("os");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//fonts
var newStyle = document.createElement("style");
newStyle.appendChild(document.createTextNode("\
@font-face {\
    font-family: " + "Pavanam" + ";\
    src: url('" + _Pavanam.default + "') format('truetype');\
}\
"));
newStyle.appendChild(document.createTextNode("\
  @font-face {\
      font-family: " + "PaytoneOne" + ";\
      src: url('" + _PaytoneOne.default + "') format('truetype');\
  }\
  "));
document.head.appendChild(newStyle); //images HOME SECTION

var i = document.getElementsByClassName("section-home__star");
var c = document.createElement("img");
c.src = _star_home.default;
c.alt = "start background image";
c.className = "section-home__star";
i[0].appendChild(c);
var b = document.createElement("img");
b.src = _man_home.default;
b.alt = "athlete picture";
b.className = "section-home__man-picture";
i[0].appendChild(b);
var h = document.getElementsByClassName("section-home__nav");
var a = document.createElement("img");
a.src = _logo_home.default;
a.alt = "logo";
a.className = "section-home__logo";
h[0].insertBefore(a, h[0].childNodes[0]);
var homeSection = document.getElementsByClassName("section-home");
var scrollHomePageInd = document.createElement("img");
scrollHomePageInd.src = _chevron_home.default;
scrollHomePageInd.alt = "scroll arrow";
scrollHomePageInd.className = "section-home__scroll";
homeSection[0].appendChild(scrollHomePageInd); // images ABOUT SEC

var secAbout = document.getElementsByClassName("section-about");
var imgHead = document.createElement("img");
imgHead.src = _heading_about.default;
imgHead.alt = "heading picture";
imgHead.className = "section-about__heading"; // //images trainers SECTION
// const secTrainers = document.getElementsByClassName('section-trainers')
// secTrainers[0].style.backgroundImage = `url(${backgroundTrainers})`;
//text content for about sec

var parCont = document.createElement("p");
parCont.className = "section-about__container";
var par = document.createElement("p");
par.innerHTML = '"What? Do you not know that your body is the temple of the Holy Spirit, who is in you, whom you have received from God, and that you are not your own? You were bought with a price. Therefore glorify God in your body and in your spirit, which are God\'s." ';
par.className = "section-about__paragraph";
parCont.appendChild(par);
var subText = document.createElement("p");
subText.innerHTML = "– 1 Corinthians 6:19-20 (MEV)";
subText.className = "section-about__subtext";
parCont.appendChild(subText);
var aboutContainer = document.createElement("div");
aboutContainer.className = "section-about__about-container";
aboutContainer.appendChild(imgHead);
aboutContainer.appendChild(parCont);
secAbout[0].appendChild(aboutContainer);
},{"../sass/style.scss":"sass/style.scss","../assets/logo_home.png":"assets/logo_home.png","../assets/star_home.svg":"assets/star_home.svg","../assets/man_home.png":"assets/man_home.png","../assets/chevron_home.svg":"assets/chevron_home.svg","../assets/heading_about.png":"assets/heading_about.png","../assets/fonts/Pavanam.ttf":"assets/fonts/Pavanam.ttf","../assets/fonts/PaytoneOne.ttf":"assets/fonts/PaytoneOne.ttf","os":"../node_modules/os-browserify/browser.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52758" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.map