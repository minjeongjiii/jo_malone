import shoppingList from '../static/js/data.js'


const cologneList = document.querySelector('.cologne_list');
const popupWrap = document.querySelector('.popup_wrap');

/* pagination */
const count_per_page = 12; // 한 페이지 당 최대 보여질 요소의 숫자
let pageNumBtns;

const getTotalPageCount = () => {
  return Math.ceil(shoppingList.length / count_per_page)
}

const numBtnWrap = document.querySelector('.num_btn_wrap')

const setPageBtns = () => {
  numBtnWrap.innerHTML = ''
  const totalPageCount = getTotalPageCount() // 전체 페이지 개수
  for (let i = 1; i <= totalPageCount; i++) {
    numBtnWrap.innerHTML += `<span class="num_btn">${i}</span>`
  }
  numBtnWrap.firstChild.classList.add('selected')
  pageNumBtns = document.querySelectorAll('.num_btn')
}

let currentPage = 1

/* 팝업 창 띄우기 */
const registerPopupEvents = () => {
  const viewBtn = document.querySelectorAll('.quick_view')
  const txtEng = document.querySelector('.txt_eng')
  const txtKor = document.querySelector('.txt_kor')
  const txtGift = document.querySelector('.txt_gift')
  const txtScent = document.querySelector('.txt_scent')
  const txtPrice = document.querySelector('.txt_price')
  const popupImg = document.querySelector('.popup_img > img')

  for (let i = 0; i < viewBtn.length; i++) {
    viewBtn[i].addEventListener('click', function () {
      const itemImg = document.querySelectorAll('.item_img')
      const nameEng = document.querySelectorAll('.name_eng')
      const nameKo = document.querySelectorAll('.name_ko')
      const price = document.querySelectorAll('.price')
      const gift = document.querySelectorAll('.gift')
      const scent = document.querySelectorAll('.scent')
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
        }) // 팝업 열기
      })
    })
  }
}

const setPageOf = (pageNum) => {
  cologneList.innerHTML = ''
  for (
    let i = count_per_page * (pageNum -1); 
    i < count_per_page * (pageNum -1) + 12 && i < shoppingList.length;
    i++
  ) {
      const itemWrap = document.createElement('div')
      itemWrap.setAttribute('class','item_wrap')

      const imgWrap = document.createElement('a')
      imgWrap.setAttribute('class','img_wrap')
      imgWrap.setAttribute('href','./detail.html')
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
    }
  
  
  registerPopupEvents () // 팝업함수 호출
  
} // data.js를 이용한 동적 데이터 만들기

$('#sorting').on('change', function(event){
  const option = event.currentTarget.options
  const index = option.selectedIndex

  if (index==0) {
    shoppingList.sort(function(a, b){
      return b.id - a.id
    })
  } else if (index==1) {
    shoppingList.sort(function(a, b){
      return a.name_ko.localeCompare(b.name_ko);
    })
  } else if (index==2) {
    shoppingList.sort(function(a, b){
      return a.price - b.price
    });
  } else if (index==3) {
    shoppingList.sort(function(a, b){
      return b.price - a.price 
    })
  }
  
  setPageOf(currentPage)
  registerPopupEvents () // 팝업함수 호출
})


/* pagination 이동 버튼 */
const moveSelectedPage = () => {
  const pageNumBtns = document.querySelectorAll('.num_btn')
  pageNumBtns.forEach((numBtn)=>{
    if (numBtn.classList.contains('selected')) {
      numBtn.classList.remove('selected')
    }
  })
  pageNumBtns[currentPage -1].classList.add('selected')
} // 페이지 이동에 따른 css 클래스 적용

setPageBtns()
setPageOf(currentPage)


pageNumBtns.forEach((numBtn) => {
  numBtn.addEventListener('click', (e)=>{
    currentPage = +e.target.innerHTML
    setPageOf(currentPage)
    moveSelectedPage()
  })
}) // 페이지 번호 버튼 클릭 리스너

const prevBtn = document.querySelector('.prev_btn')
const nextBtn = document.querySelector('.next_btn')

prevBtn.addEventListener('click', ()=>{
  if(currentPage > 1) {
    currentPage -= 1
    setPageOf(currentPage)
    moveSelectedPage()
  }
}) // 이전 버튼 클릭 리스너

nextBtn.addEventListener('click', ()=>{
  if(currentPage < getTotalPageCount()) {
    currentPage += 1
    setPageOf(currentPage)
    moveSelectedPage()
  }
}) // 이후 버튼 클릭 리스너

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
    const itemImg = document.querySelectorAll('.item_img')
    const nameEng = document.querySelectorAll('.name_eng')
    const nameKo = document.querySelectorAll('.name_ko')
    const price = document.querySelectorAll('.price')
    const gift = document.querySelectorAll('.gift')
    const scent = document.querySelectorAll('.scent')
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
        }) // 팝업 열기
      })
  })
}