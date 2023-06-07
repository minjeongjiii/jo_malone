import shoppingList from './data.js'

const cologneList = document.querySelector('.cologne_list')
const popupWrap = document.querySelector('.popup_wrap')

for (let i=0; i < shoppingList.length; i++) {
  const itemWrap = document.createElement('div')
  itemWrap.setAttribute('class','item_wrap')
  const imgWrap = document.createElement('a')
  imgWrap.setAttribute('class','img_wrap')
  imgWrap.setAttribute('href','../html/detail.html')
  const itemImg = document.createElement('img')
  itemImg.setAttribute('src',shoppingList[i].src)
  itemImg.setAttribute('class','item_img')
  imgWrap.appendChild(itemImg)

  const nameEng = document.createElement('p')
  const nameEngText = document.createTextNode(shoppingList[i].name_eng)
  nameEng.setAttribute('class','name_eng')
  nameEng.appendChild(nameEngText)

  const nameKo = document.createElement('p')
  const nameKoText = document.createTextNode(shoppingList[i].name_ko)
  nameKo.setAttribute('class','name_ko')
  nameKo.appendChild(nameKoText)

  const price = document.createElement('span')
  const priceText = document.createTextNode('￦ ' + shoppingList[i].price)
  price.setAttribute('class','price')
  price.appendChild(priceText)

  const gift = document.createElement('p')
  const giftText = document.createTextNode(shoppingList[i].gift)
  gift.setAttribute('class','gift')
  gift.appendChild(giftText)

  const scent = document.createElement('p')
  const scentText = document.createTextNode(shoppingList[i].scent)
  scent.setAttribute('class','scent')
  scent.appendChild(scentText)

  const quickView = document.createElement('a')
  const quickViewText = document.createTextNode('미리보기')
  quickView.setAttribute('class','quick_view')
  quickView.appendChild(quickViewText)
  
  itemWrap.appendChild(imgWrap)
  itemWrap.appendChild(nameEng)
  itemWrap.appendChild(nameKo)
  itemWrap.appendChild(price)
  itemWrap.appendChild(gift)
  itemWrap.appendChild(scent)
  itemWrap.appendChild(quickView)

  cologneList.appendChild(itemWrap)

} // data.js를 이용한 동적 데이터 만들기


/* 셀렉트 옵션 정렬하기 */
const sorting = document.getElementById('sorting')
const itemImg = document.querySelectorAll('.item_img')
const nameEng = document.querySelectorAll('.name_eng')
const nameKo = document.querySelectorAll('.name_ko')
const price = document.querySelectorAll('.price')
const gift = document.querySelectorAll('.gift')
const scent = document.querySelectorAll('.scent')

sorting.addEventListener('change', function(event) {
  const option = event.currentTarget.options
  const index = option.selectedIndex
  if (index==0) {
    const sortitems = _.sortBy(shoppingList,'id').reverse()
    for(let i=0;i<itemImg.length;i++) {
      if(sortitems[i]) {
        itemImg[i].src = sortitems[i].src;
      }
    }
    for(let i=0;i<nameEng.length;i++) {
      if(sortitems[i]) {
        nameEng[i].textContent = sortitems[i].name_eng;
      }
    }
    for(let i=0;i<nameKo.length;i++) {
      if(sortitems[i]) {
        nameKo[i].textContent = sortitems[i].name_ko;
      }
    }
    for(let i=0;i<price.length;i++) {
      if(sortitems[i]) {
        price[i].textContent = '￦ ' + sortitems[i].price;
      }
    }
    for(let i=0;i<gift.length;i++) {
      if(sortitems[i]) {
        gift[i].textContent = sortitems[i].gift;
      }
    }
    for(let i=0;i<scent.length;i++) {
      if(sortitems[i]) {
        scent[i].textContent = sortitems[i].scent;
      }
    }
  } else if (index==1) {
    const sortitems = _.sortBy(shoppingList,'name_ko')
    for(let i=0;i<itemImg.length;i++) {
      if(sortitems[i]) {
        itemImg[i].src = sortitems[i].src;
      }
    }
    for(let i=0;i<nameEng.length;i++) {
      if(sortitems[i]) {
        nameEng[i].textContent = sortitems[i].name_eng;
      }
    }
    for(let i=0;i<nameKo.length;i++) {
      if(sortitems[i]) {
        nameKo[i].textContent = sortitems[i].name_ko;
      }
    }
    for(let i=0;i<price.length;i++) {
      if(sortitems[i]) {
        price[i].textContent = '￦ ' + sortitems[i].price;
      }
    }
    for(let i=0;i<gift.length;i++) {
      if(sortitems[i]) {
        gift[i].textContent = sortitems[i].gift;
      }
    }
    for(let i=0;i<scent.length;i++) {
      if(sortitems[i]) {
        scent[i].textContent = sortitems[i].scent;
      }
    }
  } else if (index==2) {
    const sortitems = _.sortBy(shoppingList,'price')
    for(let i=0;i<itemImg.length;i++) {
      if(sortitems[i]) {
        itemImg[i].src = sortitems[i].src;
      }
    }
    for(let i=0;i<nameEng.length;i++) {
      if(sortitems[i]) {
        nameEng[i].textContent = sortitems[i].name_eng;
      }
    }
    for(let i=0;i<nameKo.length;i++) {
      if(sortitems[i]) {
        nameKo[i].textContent = sortitems[i].name_ko;
      }
    }
    for(let i=0;i<price.length;i++) {
        if(sortitems[i]) {
        price[i].textContent = '￦ ' + sortitems[i].price;
      }
    }
    for(let i=0;i<gift.length;i++) {
      if(sortitems[i]) {
        gift[i].textContent = sortitems[i].gift;
      }
    }
    for(let i=0;i<scent.length;i++) {
      if(sortitems[i]) {
        scent[i].textContent = sortitems[i].scent;
      }
    }
  } else if (index==3) {
    const sortitems = _.sortBy(shoppingList,'price').reverse()
    for(let i=0;i<itemImg.length;i++) {
      if(sortitems[i]) {
        itemImg[i].src = sortitems[i].src;
      }
    }
    for(let i=0;i<nameEng.length;i++) {
      if(sortitems[i]) {
        nameEng[i].textContent = sortitems[i].name_eng;
      }
    }
    for(let i=0;i<nameKo.length;i++) {
      if(sortitems[i]) {
        nameKo[i].textContent = sortitems[i].name_ko;
      }
    }
    for(let i=0;i<price.length;i++) {
      if(sortitems[i]) {
        price[i].textContent = '￦ ' + sortitems[i].price;
      }
    }
    for(let i=0;i<gift.length;i++) {
      if(sortitems[i]) {
        gift[i].textContent = sortitems[i].gift;
      }
    }
    for(let i=0;i<scent.length;i++) {
      if(sortitems[i]) {
        scent[i].textContent = sortitems[i].scent;
      }
    }
  } 
}); // 정렬하기

/* 팝업 창 띄우기 */
const viewBtn = document.querySelectorAll('.quick_view')
const txtEng = document.querySelector('.txt_eng')
const txtKor = document.querySelector('.txt_kor')
const txtGift = document.querySelector('.txt_gift')
const txtScent = document.querySelector('.txt_scent')
const txtPrice = document.querySelector('.txt_price')
const popupImg = document.querySelector('.popup_img > img')

for(let i=0; i<viewBtn.length;i++) {
  viewBtn[i].addEventListener('click', function(){
  txtEng.textContent = nameEng[i].textContent
  txtKor.textContent = nameKo[i].textContent
  txtGift.textContent = gift[i].textContent
  txtScent.textContent = scent[i].textContent
  txtPrice.textContent = price[i].textContent
  popupImg.src = itemImg[i].src
  })
  $(function () {
    $(viewBtn[i]).click(function () {
      $(popupWrap).bPopup({
        closeClass: 'pop_btn' 
      }); // 팝업 열기
    });
  });
}






