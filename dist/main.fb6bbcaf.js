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
})({"js/main.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var menwNew = document.getElementById('menu_new');
  var menuScent = document.getElementById('menu_scent');
  var menuShop = document.getElementById('menu_shop');
  var menuAbout = document.getElementById('menu_about');
  var headerFix = document.getElementById('header_fix');
  var header = document.getElementsByClassName('header')[0];
  var logoText = document.getElementById('logo_txt');
  var lnbList01 = document.getElementById('lnb_list01');
  var lnbList02 = document.getElementById('lnb_list02');
  var lnbList03 = document.getElementById('lnb_list03');
  var lnbList04 = document.getElementById('lnb_list04');
  var gnbImg = document.getElementsByClassName('gnb_img');
  var headerA = document.querySelectorAll('a');
  menwNew.addEventListener('mouseover', function () {
    return openList(lnbList01);
  });
  menwNew.addEventListener('mouseout', function () {
    return closeList(lnbList01);
  });
  menuScent.addEventListener('mouseover', function () {
    return openList(lnbList02);
  });
  menuScent.addEventListener('mouseout', function () {
    return closeList(lnbList02);
  });
  menuShop.addEventListener('mouseover', function () {
    return openList(lnbList03);
  });
  menuShop.addEventListener('mouseout', function () {
    return closeList(lnbList03);
  });
  menuAbout.addEventListener('mouseover', function () {
    return openList(lnbList04);
  });
  menuAbout.addEventListener('mouseout', function () {
    return closeList(lnbList04);
  });
  header.addEventListener('mouseover', function () {
    headerFix.style.backgroundColor = '#FCF9EE';
    for (var i = 0; i < gnbImg.length; i++) {
      gnbImg.item(i).style.filter = 'invert(0%)';
    }
    for (var _i = 0; _i < headerA.length; _i++) {
      headerA[_i].style.color = '#000';
    }
  });
  header.addEventListener('mouseout', function () {
    headerFix.style.backgroundColor = 'rgba(252, 249, 238, 0)';
    for (var i = 0; i < gnbImg.length; i++) {
      gnbImg.item(i).style.filter = 'invert(100%)';
    }
    headerA.forEach(function (e) {
      e.style.color = '#fff';
    });
  });
  function openList(list) {
    list.style.height = '80px';
    headerFix.style.height = '160px';
    /* headerFix.style.backgroundColor = '#FCF9EE' */
    document.getElementById('hd_border').style.display = 'block';
  }
  function closeList(list) {
    list.style.height = '0px';
    headerFix.style.height = '';
    /* headerFix.style.backgroundColor = 'rgba(252, 249, 238, 0)' */
    document.getElementById('hd_border').style.display = 'none';
  }
  var search = document.getElementsByClassName('search_outer')[0];
  var searchBtn = document.getElementById('search_btn');
  var closeSearchBtn = document.getElementById('close_search_btn');
  searchBtn.addEventListener('click', function () {
    search.style.top = '0px';
  });
  closeSearchBtn.addEventListener('click', function () {
    search.style.top = '-400px';
  });
  var cart = document.getElementById('cart');
  var cartBtn = document.getElementById('cart_btn');
  var cartBtn01 = document.getElementById('cart_btn_01');
  var closeCartBtn = document.getElementById('close_cart_btn');
  cartBtn.addEventListener('click', function () {
    cart.style.right = '0px';
  });
  cartBtn01.addEventListener('click', function () {
    cart.style.right = '0px';
  });
  closeCartBtn.addEventListener('click', function () {
    cart.style.right = '-522px';
  });
  window.addEventListener('scroll', function () {
    var myVideo = document.getElementById('myVideo');
    var topSpace = document.getElementsByClassName('top_space')[0];
    var scrollPosition = window.scrollY; /* || window.pageYOffset; */
    if (scrollPosition > 400) {
      myVideo.style.display = 'none';
      topSpace.style.height = '600px';
    } else {
      myVideo.style.display = '';
      topSpace.style.height = '100vh';
    }
  });

  /* 컬렉션 이미지변화 */
  var liImg = document.querySelectorAll('.img_list_wrap > li');
  var liBg = document.querySelectorAll('.shade_wrap > li');
  var _loop = function _loop(i) {
    liBg[i].addEventListener('mouseover', function () {
      for (var j = 0; j < liBg.length; j++) {
        liBg[j].classList.remove('shade_on');
      }
      liBg[i].classList.add('shade_on');
      for (var k = 0; k < liImg.length; k++) {
        liImg[k].classList.remove('img_on');
      }
      liImg[i].classList.add('img_on');
    });
  };
  for (var i = 0; i < liBg.length; i++) {
    _loop(i);
  }

  /* 취향 테스트 */
  var testPage = document.getElementsByClassName('test')[0];
  var testStart = document.getElementsByClassName('test_start')[0];
  var startBtn = document.getElementById('start_btn');
  testPage.addEventListener('mouseover', big);
  testPage.addEventListener('mouseout', small);
  function big() {
    testPage.style.height = '600px';
    testPage.style.transition = 'all 0.3s';
    testStart.style.marginTop = '120px';
    testStart.style.transition = 'all 0.3s';
    startBtn.style.marginTop = '135px';
    startBtn.style.transition = 'all 0.3s';
  }
  function small() {
    testPage.style.height = '300px';
    testPage.style.transition = 'all 0.3s';
    testStart.style.marginTop = '0px';
    testStart.style.transition = 'all 0.3s';
    startBtn.style.marginTop = '60px';
    startBtn.style.transition = 'all 0.3s';
  } // hover 이벤트

  var inputName = document.getElementById('input_name');
  inputName.addEventListener('keyup', function () {
    var inputNameTxt = document.getElementById('input_name').value;
    document.getElementById('user_name').innerText = inputNameTxt + '님에게 운명같이 찾아온 향수는..';
  }); // 테스터 이름 입력 반환

  var testQ = document.querySelectorAll('.test_question');
  var testStartImg = document.getElementsByClassName('test_start_bg')[0];
  startBtn.addEventListener('click', function () {
    testQ[3].style.opacity = '1';
    testStart.style.opacity = '0';
    testStart.style.zIndex = '-10';
    testStartImg.style.display = 'none';
  }); // start 버튼 클릭하면 다음 페이지로 넘어감

  var testBtn = document.querySelectorAll('.test_btn');
  var c01Btn = document.getElementById('c01');
  var c02Btn = document.getElementById('c02');
  var c03Btn = document.getElementById('c03');
  var c04Btn = document.getElementById('c04');
  var c05Btn = document.getElementById('c05');
  var c06Btn = document.getElementById('c06');
  var c07Btn = document.getElementById('c07');
  c01Btn.value = 'go2';
  c02Btn.value = 'go3';
  c03Btn.value = 'go4';
  c04Btn.value = 'go4';
  c05Btn.value = 'go4';
  c06Btn.value = 'go4';
  c07Btn.value = 'go1';
  testBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (this.value === 'go2') {
        testQ[3].style.display = 'none';
        testQ[2].style.opacity = '1';
      } else if (this.value === 'go3') {
        testQ[3].style.display = 'none';
        testQ[2].style.display = 'none';
        testQ[1].style.opacity = '1';
      } else if (this.value === 'go4') {
        testQ[3].style.display = 'none';
        testQ[2].style.display = 'none';
        testQ[1].style.display = 'none';
        testQ[0].style.opacity = '1';
      } else if (this.value === 'go1') {
        testStart.style.opacity = '1';
        testStart.style.zIndex = '5';
        testStartImg.style.display = 'block';
        testQ[0].style.opacity = '0';
        testQ[1].style.opacity = '0';
        testQ[2].style.opacity = '0';
        testQ[3].style.opacity = '0';
      }
    });
  }); // 선택 버튼에 따라 결과 페이지로 이동

  /* 메인페이지 스와이퍼 */
  window.onload = function () {
    /* swiper  */
    var swiperNew = new Swiper('.swiper_new', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 3500
      }
    });
    /* 인스타그램 스와이퍼 */
    var swiperInsta = new Swiper('.swiper_insta', {
      loop: true,
      autoplay: {
        delay: 3000
      },
      slidesPerView: 4,
      spaceBetween: 15,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    /* const swiperBanner = new Swiper('.swiper_banner', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    }); */
  };

  /* 탑버튼 */
  var topBtn = document.querySelector('.top_btn');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      gsap.to(topBtn, 0.3, {
        opacity: 1
      });
    } else {
      gsap.to(topBtn, 0.3, {
        opacity: 0
      });
    }
  });
  topBtn.addEventListener('click', function () {
    gsap.to(window, 0.5, {
      scrollTo: 0
    });
  });

  /* 탭 시트 바꾸기 */
  var tabLabel = document.querySelectorAll('.tab_label > li');
  var tabSheet = document.querySelectorAll('.tab_sheet > li');
  var itemBox = document.querySelectorAll('.item_box');
  var itemEls = document.querySelectorAll('.tab_item');
  var _loop2 = function _loop2(_i2) {
    tabLabel[_i2].addEventListener('click', function () {
      var iteMBoxChildren = itemBox[_i2].childNodes;
      for (var j = 0; j < tabSheet.length; j++) {
        tabSheet[j].classList.remove('tab_on');
      }
      tabSheet[_i2].classList.add('tab_on');
      for (var k = 0; k < iteMBoxChildren.length; k++) {
        if (iteMBoxChildren[k].className === 'tab_item') {
          iteMBoxChildren[k].style.opacity = '1';
        }
      }
    });
  };
  for (var _i2 = 0; _i2 < tabLabel.length; _i2++) {
    _loop2(_i2);
  }
  window.addEventListener('scroll', function () {
    if (window.scrollY > 3200) {
      gsap.to(itemEls[0], 0.5, {
        opacity: 1
      });
      gsap.to(itemEls[1], 0.5, {
        delay: 0.7,
        opacity: 1
      });
      gsap.to(itemEls[2], 0.5, {
        delay: 1.3,
        opacity: 1
      });
    }
  });

  /* 인스타 모달 팝업 열기 */
  var body = document.querySelector('body');
  var modal = document.querySelector('.modal_insta');
  var btnOpenPopup = document.querySelectorAll('.bag_btn');
  for (var _i3 = 0; _i3 < btnOpenPopup.length; _i3++) {
    btnOpenPopup[_i3].addEventListener('click', function () {
      modal.classList.toggle('show');
      if (modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
      }
    });
  }
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.toggle('show');
      if (!modal.classList.contains('show')) {
        body.style.overflow = 'auto';
      }
    }
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62233" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map