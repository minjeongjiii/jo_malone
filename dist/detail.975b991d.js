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
})({"js/detail.js":[function(require,module,exports) {
document.addEventListener('DOMContentLoaded', function () {
  var menuNew = document.getElementById('menu_new');
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
  menuNew.addEventListener('mouseover', function () {
    return openList(lnbList01);
  });
  menuNew.addEventListener('mouseout', function () {
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
    cart.style.right = '-530px';
  });

  /* 메인 상세 이미지 */
  var mainImg = document.querySelector('.main_img > img');
  var thumImg = document.querySelectorAll('.detail_img_buttom > li'); //querySelectorAll임을 명심
  var itemPrice = document.getElementById('item_price');
  var arr = ['￦ 218,000', '￦ 155,000', '￦ 110,000', '전용 슬리브 포장', '기프트 세트'];
  var _loop = function _loop(i) {
    thumImg[i].addEventListener('click', function () {
      mainImg.src = this.children[0].src;
      itemPrice.innerText = arr[i];
      console.log(arr[i]);
    });
  };
  for (var i = 0; i < thumImg.length; i++) {
    _loop(i);
  }

  /* 인스타그램 스와이퍼 */
  var swiper = new Swiper('.swiper', {
    // Optional parameters
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

  /* 비팝업 */
  $(function () {
    $('#addcart_btn').click(function () {
      $('#cart_popup').bPopup({
        modalColor: '#fff',
        position: [1200, 20]
      }); // 팝업 열기
    });

    $('.close_popup_btn01').click(function () {
      $('#cart_popup').bPopup().close();
    });
  });

  /* 셀렉트 옵션 가격변화 */
  var select = document.getElementById('option_ml');
  /* let option = document.querySelectorAll('#option_ml > option') */
  /* console.log(thumImg[0].children[0].src) */

  select.addEventListener('change', function (event) {
    var option = event.currentTarget.options;
    var index = option.selectedIndex;

    /* itemPrice.innerText = index * 100 */

    if (index == 0) {
      itemPrice.innerText = '용량을 선택해주세요.';
    } else if (index == 1) {
      itemPrice.innerText = '￦ 110,000';
      mainImg.src = thumImg[2].children[0].src;
    } else if (index == 2) {
      itemPrice.innerText = '￦ 155,000';
      mainImg.src = thumImg[1].children[0].src;
    } else if (index == 3) {
      itemPrice.innerText = '￦ 218,000';
      mainImg.src = thumImg[0].children[0].src;
    }
  });

  /* 상세 정보 아코디언 효과 */
  var tabOpen = document.querySelectorAll('.tab_open');
  var tabAcodian = document.querySelectorAll('.acodian');
  var tabName = document.querySelectorAll('.tab_name');
  var _loop2 = function _loop2(_i) {
    var status = 0; // status를 for문 안으로 넣어야 두번클릭으로 실행되는 현상이 없음

    function tabOnoff() {
      if (status) {
        tabAcodian[_i].style.height = 0;
        tabAcodian[_i].style.overflow = 'auto';
        tabAcodian[_i].style.marginBottom = 0;
        tabOpen[_i].style.transform = 'rotate(0deg)';
      } else {
        tabAcodian[_i].style.height = 'auto';
        tabAcodian[_i].style.overflow = 'auto';
        tabAcodian[_i].style.marginBottom = '60px';
        tabOpen[_i].style.transform = 'rotate(405deg)';
      }
      status = !status;
    }
    tabName[_i].addEventListener('click', tabOnoff);
  };
  for (var _i = 0; _i < tabName.length; _i++) {
    _loop2(_i);
  }

  /* 리뷰 작성 */
  var writeBtn = document.getElementById('write_btn');
  var writeForm = document.getElementById('wirte_review');
  writeBtn.addEventListener('click', function () {
    writeForm.style.opacity = '1';
  }); // 리뷰 작성폼 보이게 

  var addBtn = document.querySelector('.add_btn');
  var reviewContainer = document.querySelector('.review_container');
  var photoBtn = document.getElementById('photo_btn');
  var addPhoto = document.getElementById('add_photo');
  photoBtn.addEventListener('change', function (event) {
    var file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = document.createElement('img');
        img.setAttribute('class', 'newImg');
        img.src = e.target.result;
        addPhoto.innerHTML = '';
        addPhoto.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }); // 리뷰 사진 등록

  /* const countText = document.getElementById('count_text')
  let count = 11  */

  addBtn.addEventListener('click', writeReview);
  var countText = document.getElementById('count_text');
  count = 11;
  function writeReview(event) {
    event.preventDefault(); // form 요소의 기본 동작 방지, 버튼 클릭 시 새로 고침현상 해결

    var review = document.querySelector('.add_review');
    var reviewList = document.querySelector('.review_list');
    var newReview = document.createElement('div');
    var today = new Date();
    var year = today.getFullYear().toString().slice(-2);
    var month = (today.getMonth() + 1).toString().padStart(2, '0');
    var day = today.getDate().toString().padStart(2, '0');
    var formattedDate = "".concat(year, "-").concat(month, "-").concat(day); // 오늘 날짜 넣기

    var newDate = document.createElement('p');
    var newDateText = document.createTextNode(formattedDate);
    newDate.setAttribute('class', 'new_date');
    newDate.appendChild(newDateText);
    newReview.appendChild(newDate);
    var newP = document.createElement('p');
    var newText = document.createTextNode(review.value);
    var newImgBox = document.createElement('div');
    newP.appendChild(newText);
    newReview.appendChild(newP);
    newReview.appendChild(newImgBox);
    reviewContainer.appendChild(newReview);
    newReview.setAttribute('class', 'new_review');
    newImgBox.setAttribute('class', 'new_imgbox');
    var newImg = document.querySelector('.newImg');
    if (newImg) {
      newImgBox.appendChild(newImg);
    }
    var newClose = document.createElement('span');
    var newCloseText = document.createTextNode('삭제');
    newClose.appendChild(newCloseText);
    newReview.appendChild(newClose);
    newClose.setAttribute('class', 'delete');
    review.value = '';
    reviewList.insertBefore(newReview, reviewList.children[0]);
    var delBtn = document.querySelectorAll('.delete');
    var _loop3 = function _loop3(_i2) {
      delBtn[_i2].addEventListener('click', function () {
        if (delBtn[_i2].parentNode.parentNode) {
          this.parentNode.parentNode.removeChild(this.parentNode);
        }
      });
    };
    for (var _i2 = 0; _i2 < delBtn.length; _i2++) {
      _loop3(_i2);
    } // 리뷰 삭제

    ++count;
    countText.innerText = count + '명 참여'; // 리뷰작성 누를 때마다 작성인원 증가
  } // 리뷰 글 작성
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58361" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map