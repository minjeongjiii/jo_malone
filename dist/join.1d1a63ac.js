// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/join.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var termAll = document.getElementById('term_all');
  var yes01 = document.getElementById('yes_01');
  var yes02 = document.getElementById('yes_02');
  var yes03 = document.getElementById('yes_03');
  var no01 = document.getElementById('no_01');
  var no02 = document.getElementById('no_02');
  var no03 = document.getElementById('no_03');
  var termsEls = document.querySelectorAll('.terms_el');
  termAll.addEventListener('click', allCheck);
  yes01.addEventListener('click', termsCheck);
  yes02.addEventListener('click', termsCheck);
  yes03.addEventListener('click', termsCheck);
  no01.addEventListener('click', unCheck);
  no02.addEventListener('click', unCheck);
  no03.addEventListener('click', unCheck);
  function allCheck() {
    if (termAll.checked === true) {
      termsEls.forEach(function (termsEl) {
        termsEl.checked = true;
      });
    } else {
      termsEls.forEach(function (termsEl) {
        termsEl.checked = false;
      });
    }
  }
  function termsCheck() {
    if (yes01.checked === true && yes02.checked === true && yes03.checked === true) {
      termAll.checked = true;
    }
  }
  function unCheck() {
    if (no01.checked === true || no02.checked === true || no03.checked === true) {
      termAll.checked = false;
    }
  }
  var userId = document.getElementById('user_id');
  var userPw1 = document.getElementById('user_pw1');
  var userPw2 = document.getElementById('user_pw2');
  var userName = document.getElementById('user_name');
  var userBirth = document.getElementById('user_birth');
  var telFirst = document.getElementById('tel_first');
  var telSecond = document.getElementById('tel_second');
  var telThird = document.getElementById('tel_third');
  var userEmail = document.getElementById('user_email');
  var userAddr = document.getElementById('user_addr');
  var al01 = document.getElementById('al_01');
  /* const al02 = document.getElementById('al_02') */
  var al03 = document.getElementById('al_03');
  /* const al04 = document.getElementById('al_04') */
  var al05 = document.getElementById('al_05');
  var al06 = document.getElementById('al_06');
  var al07 = document.getElementById('al_07');
  userId.addEventListener('change', lengthId);
  userPw1.addEventListener('change', lengthPw);
  userPw2.addEventListener('change', checkPw);
  userBirth.addEventListener('change', lengthBirth);
  userBirth.addEventListener('keyup', moveToNext8);
  telSecond.addEventListener('keyup', moveToNext4);
  function lengthId() {
    if (userId.value.length < 5 || userId.value.length > 10) {
      al01.style.display = 'block';
      userId.value = '';
      userId.focus();
    } else {
      al01.style.display = 'none';
    }
  }
  function lengthPw() {
    if (userPw1.value.length < 4) {
      al03.style.display = 'block';
      userPw1.value = '';
      userPw1.focus();
    } else {
      al03.style.display = 'none';
      al06.style.display = 'none';
    }
  }
  function checkPw() {
    if (userPw1.value === userPw2.value) {
      al05.style.display = 'block';
    } else {
      al06.style.display = 'block';
      userPw1.value = '';
      userPw1.focus();
      userPw2.value = '';
    }
  }
  function lengthBirth() {
    if (userBirth.value.length < 7) {
      al07.style.display = 'block';
      userBirth.value = '';
      userBirth.focus();
    } else {
      al07.style.display = 'none';
    }
  }
  function moveToNext8() {
    if (userBirth.value.length >= 8) {
      telSecond.focus();
    }
  }
  function moveToNext4() {
    if (telSecond.value.length >= 4) {
      telThird.focus();
    }
  }
  var popUp = document.getElementById('popup');
  var joinBtn = document.getElementsByClassName('goforward')[0];
  var alert = document.getElementById('alert');
  var noChk = document.getElementById('no_chk');
  var closeBtn = document.getElementById('close_btn');
  joinBtn.addEventListener('click', showPopup);
  function showPopup() {
    if (yes01.checked == false || yes02.checked == false || document.getElementById('over_14').checked == false) {
      alert.style.display = 'block';
      noChk.style.display = 'block';
    } else if (document.getElementById('qy01').checked == '' && document.getElementById('qn01').checked == '') {
      document.getElementById('al_08').style.display = 'block';
    } else if (document.getElementById('qy02').checked == '' && document.getElementById('qn02').checked == '') {
      document.getElementById('al_08').style.display = 'block';
    } else if (document.getElementById('qy03').checked == '' && document.getElementById('qn03').checked == '') {
      document.getElementById('al_08').style.display = 'block';
    } else if (userId.value == '' || userPw1.value == '' || userPw2.value == '' || userName.value == '' || userBirth.value == '' || telFirst.value == '' || telSecond.value == '' || telThird.value == '' || userEmail.value == '' || userAddr.value == '') {
      document.getElementById('al_09').style.display = 'block';
    } else {
      popUp.style.display = 'block';
    }
    closeBtn.addEventListener('click', function () {
      alert.style.display = 'none';
    });
  }
  document.getElementById('qy01').addEventListener('change', function () {
    document.getElementById('al_08').style.display = 'none';
  });
  document.getElementById('qy02').addEventListener('change', function () {
    document.getElementById('al_08').style.display = 'none';
  });
  document.getElementById('qy03').addEventListener('change', function () {
    document.getElementById('al_08').style.display = 'none';
  });
  document.getElementById('qn01').addEventListener('change', function () {
    document.getElementById('al_08').style.display = 'none';
  });
  document.getElementById('qn02').addEventListener('change', function () {
    document.getElementById('al_08').style.display = 'none';
  });
  document.getElementById('qn03').addEventListener('change', function () {
    document.getElementById('al_08').style.display = 'none';
  });
  joinBtn.addEventListener('mouseout', function () {
    document.getElementById('al_09').style.display = 'none';
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58564" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/join.js"], null)
//# sourceMappingURL=/join.1d1a63ac.js.map