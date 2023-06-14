/* const setPageBtns = () => {
  numBtnWrap.innerHTML = '';
  for (let i = 1; i<=getTotalPageCount(); i++) {
    numBtnWrap.innerHTML += `<span class="num_btn">${i}</span>`;
  }
  numBtnWrap.firstChild.classList.add('selected')
  pageNumBtns = document.querySelectorAll('.num_btn')
}; */ // 페이지 번호 버튼을 동적으로 생성하기





/* const sortedList = shoppingList.slice().sort((a, b) => a.price - b.price);
    const sorting = document.getElementById('sorting')
    sorting.addEventListener('change', function(event) {
      cologneList.innerHTML = '';
      const option = event.currentTarget.options
      const index = option.selectedIndex
      if (index==2) {
        for (
          let i = count_per_page * (pageNum - 1);
          i < count_per_page * (pageNum - 1) + count_per_page && i < sortedList.length;
          i++
        )
        {
            const itemWrap = document.createElement('div');
            itemWrap.setAttribute('class', 'item_wrap');
        
            const imgWrap = document.createElement('a');
            imgWrap.setAttribute('class', 'img_wrap');
            imgWrap.setAttribute('href', './detail.html');
            const itemImg = document.createElement('img');
            itemImg.setAttribute('src', sortedList[i].src);
            itemImg.setAttribute('class', 'item_img');
            imgWrap.appendChild(itemImg);
        
            const nameEng = document.createElement('p');
            const nameEngText = document.createTextNode(sortedList[i].name_eng);
            nameEng.setAttribute('class', 'name_eng');
            nameEng.appendChild(nameEngText);
        
            const nameKo = document.createElement('p');
            const nameKoText = document.createTextNode(sortedList[i].name_ko);
            nameKo.setAttribute('class', 'name_ko');
            nameKo.appendChild(nameKoText);
        
            const price = document.createElement('span');
            const priceText = document.createTextNode('￦ ' + sortedList[i].price);
            price.setAttribute('class', 'price');
            price.appendChild(priceText);
        
            const gift = document.createElement('p');
            const giftText = document.createTextNode(sortedList[i].gift);
            gift.setAttribute('class', 'gift');
            gift.appendChild(giftText);
        
            const scent = document.createElement('p');
            const scentText = document.createTextNode(sortedList[i].scent);
            scent.setAttribute('class', 'scent');
            scent.appendChild(scentText);
        
            const quickView = document.createElement('a');
            const quickViewText = document.createTextNode('미리보기');
            quickView.setAttribute('class', 'quick_view');
            quickView.appendChild(quickViewText);
        
            itemWrap.appendChild(imgWrap);
            itemWrap.appendChild(nameEng);
            itemWrap.appendChild(nameKo);
            itemWrap.appendChild(price);
            itemWrap.appendChild(gift);
            itemWrap.appendChild(scent);
            itemWrap.appendChild(quickView);
        
            cologneList.appendChild(itemWrap);
            registerPopupEvents();
        }}}) */


  /* for (let i=0; i < shoppingList.length; i++) {
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

} */



/* for(let i = 0; i < shoppingList.length; i++) {
    $(".price").eq(i).html(shoppingList[i].price)
    $(".name_ko").eq(i).html(shoppingList[i].name_ko)
    $(".naname_eng").eq(i).html(shoppingList[i].name_eng)
    $(".src").eq(i).attr("src",`${shoppingList[i].src}`)
  } */



  /* const countText = document.getElementById('count_text')
    let count = 11  */