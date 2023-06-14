document.addEventListener('DOMContentLoaded', () => {
    const menuNew = document.getElementById('menu_new')
    const menuScent = document.getElementById('menu_scent')
    const menuShop = document.getElementById('menu_shop')
    const menuAbout = document.getElementById('menu_about')
    const headerFix = document.getElementById('header_fix')
    const header = document.getElementsByClassName('header')[0]
    const logoText = document.getElementById('logo_txt')
    const lnbList01 = document.getElementById('lnb_list01')
    const lnbList02 = document.getElementById('lnb_list02')
    const lnbList03 = document.getElementById('lnb_list03')
    const lnbList04 = document.getElementById('lnb_list04')
    const gnbImg = document.getElementsByClassName('gnb_img')

    menuNew.addEventListener('mouseover', () => (
        openList(lnbList01)
    ))
    menuNew.addEventListener('mouseout', () => (
        closeList(lnbList01)
    ))
    menuScent.addEventListener('mouseover', () => (
        openList(lnbList02)
    ))
    menuScent.addEventListener('mouseout', () => (
        closeList(lnbList02)
    ))
    menuShop.addEventListener('mouseover', () => (
        openList(lnbList03)
    ))
    menuShop.addEventListener('mouseout', () => (
        closeList(lnbList03)
    ))
    menuAbout.addEventListener('mouseover', () => (
        openList(lnbList04)
    ))
    menuAbout.addEventListener('mouseout', () => (
        closeList(lnbList04)
    ))

    function openList(list) {
        list.style.height = '80px'
        headerFix.style.height = '160px'
        /* headerFix.style.backgroundColor = '#FCF9EE' */
        document.getElementById('hd_border').style.display = 'block'
    }

    function closeList(list) {
        list.style.height = '0px'
        headerFix.style.height = ''
        /* headerFix.style.backgroundColor = 'rgba(252, 249, 238, 0)' */
        document.getElementById('hd_border').style.display = 'none'
    }

    const search = document.getElementsByClassName('search_outer')[0]
    const searchBtn = document.getElementById('search_btn')
    const closeSearchBtn = document.getElementById('close_search_btn')

    searchBtn.addEventListener('click', () => {
        search.style.top = '0px'
    })
    closeSearchBtn.addEventListener('click', () => {
        search.style.top = '-400px'
    })

    const cart = document.getElementById('cart')
    const cartBtn = document.getElementById('cart_btn')
    const cartBtn01 = document.getElementById('cart_btn_01')
    const closeCartBtn = document.getElementById('close_cart_btn')

    cartBtn.addEventListener('click', () => {
        cart.style.right = '0px'
    })
    cartBtn01.addEventListener('click', () => {
        cart.style.right = '0px'
    })
    closeCartBtn.addEventListener('click', () => {
        cart.style.right = '-530px'
    })

    /* 메인 상세 이미지 */
    const mainImg = document.querySelector('.main_img > img')
    const thumImg = document.querySelectorAll('.detail_img_buttom > li') //querySelectorAll임을 명심
    const itemPrice = document.getElementById('item_price')
    let arr = ['￦ 218,000','￦ 155,000','￦ 110,000','전용 슬리브 포장', '기프트 세트']

    for (let i = 0; i < thumImg.length; i++) {
        thumImg[i].addEventListener('click', function () {
            mainImg.src = this.children[0].src
            itemPrice.innerText = arr[i] 
            console.log(arr[i])
        })
    }

    /* 인스타그램 스와이퍼 */
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 4,
        spaceBetween: 15,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

    /* 비팝업 */
    $(function () {
        $('#addcart_btn').click(function () {
            $('#cart_popup').bPopup({
                modalColor: '#fff',
                position: [1200, 20]
            }); // 팝업 열기
        })
        $('.close_popup_btn01').click(function () {
            $('#cart_popup').bPopup().close();
        })
    })

    /* 셀렉트 옵션 가격변화 */
    const select = document.getElementById('option_ml')
    /* let option = document.querySelectorAll('#option_ml > option') */
    /* console.log(thumImg[0].children[0].src) */

    select.addEventListener('change', function(event) {
        const option = event.currentTarget.options
        const index = option.selectedIndex
        
        /* itemPrice.innerText = index * 100 */

        if (index==0) {
            itemPrice.innerText = '용량을 선택해주세요.'
        } else if (index==1) {
            itemPrice.innerText = '￦ 110,000'
            mainImg.src = thumImg[2].children[0].src
        } else if (index==2) {
            itemPrice.innerText = '￦ 155,000'
            mainImg.src = thumImg[1].children[0].src
        } else if (index==3) {
            itemPrice.innerText = '￦ 218,000'
            mainImg.src = thumImg[0].children[0].src
        }
    })

    /* 상세 정보 아코디언 효과 */
    const tabOpen = document.querySelectorAll('.tab_open')
    const tabAcodian =  document.querySelectorAll('.acodian')
    const tabName =  document.querySelectorAll('.tab_name')
    
    for (let i=0; i < tabName.length; i++) {
        
        let status = 0 // status를 for문 안으로 넣어야 두번클릭으로 실행되는 현상이 없음
        
        function tabOnoff () {
            if(status) {
                tabAcodian[i].style.height = 0
                tabAcodian[i].style.overflow = 'auto'
                tabAcodian[i].style.marginBottom = 0
                tabOpen[i].style.transform = 'rotate(0deg)'
            } else {
                tabAcodian[i].style.height = 'auto'
                tabAcodian[i].style.overflow = 'auto'
                tabAcodian[i].style.marginBottom = '60px'
                tabOpen[i].style.transform = 'rotate(405deg)'
            }
            
            status = !status
        }
        
        tabName[i].addEventListener('click', tabOnoff)
    }

    /* 리뷰 작성 */
    const writeBtn = document.getElementById('write_btn')
    const writeForm = document.getElementById('wirte_review')

    writeBtn.addEventListener('click', function(){
        writeForm.style.opacity = '1'
    }) // 리뷰 작성폼 보이게 

    const addBtn = document.querySelector('.add_btn')
    const reviewContainer = document.querySelector('.review_container')

    const photoBtn = document.getElementById('photo_btn')
    const addPhoto = document.getElementById('add_photo')

    
    photoBtn.addEventListener('change', function(event){
        const file = event.target.files[0]
        if(file) {
            const reader = new FileReader();
                    reader.onload = function (e) {
                        const img = document.createElement('img')
                        img.setAttribute('class','newImg')
                        img.src = e.target.result
                        addPhoto.innerHTML = ''
                        addPhoto.appendChild(img)
                    }
                    reader.readAsDataURL(file)
        }
    }) // 리뷰 사진 등록

    /* const countText = document.getElementById('count_text')
    let count = 11  */

    addBtn.addEventListener('click', writeReview)
    let countText = document.getElementById('count_text')
    count = 11

    function writeReview (event) {

        event.preventDefault() // form 요소의 기본 동작 방지, 버튼 클릭 시 새로 고침현상 해결

        const review = document.querySelector('.add_review')
        const reviewList = document.querySelector('.review_list')

        let newReview = document.createElement('div')

        const today = new Date()
        const year = today.getFullYear().toString().slice(-2)
        const month = (today.getMonth() + 1).toString().padStart(2, '0')
        const day = today.getDate().toString().padStart(2, '0')

        const formattedDate = `${year}-${month}-${day}` // 오늘 날짜 넣기

        let newDate = document.createElement('p')
        let newDateText = document.createTextNode(formattedDate)
        
        newDate.setAttribute('class','new_date')
        newDate.appendChild(newDateText)
        newReview.appendChild(newDate)

        let newP = document.createElement('p')
        let newText = document.createTextNode(review.value)

        let newImgBox = document.createElement('div')

        newP.appendChild(newText)
        newReview.appendChild(newP)
        newReview.appendChild(newImgBox)
        reviewContainer.appendChild(newReview);
        newReview.setAttribute('class', 'new_review')
        newImgBox.setAttribute('class', 'new_imgbox')

        const newImg = document.querySelector('.newImg')

        if(newImg) {
            newImgBox.appendChild(newImg)
        } 

        let newClose = document.createElement('span')
        let newCloseText = document.createTextNode('삭제')

        newClose.appendChild(newCloseText)
        newReview.appendChild(newClose)

        newClose.setAttribute('class', 'delete')

        review.value = '' 
        
        reviewList.insertBefore(newReview, reviewList.children[0])
        
        let delBtn = document.querySelectorAll('.delete')

        for(let i=0; i<delBtn.length; i++) {
            delBtn[i].addEventListener('click', function(){
                if(delBtn[i].parentNode.parentNode) {
                    this.parentNode.parentNode.removeChild(this.parentNode)
                }
            })
        } // 리뷰 삭제
        
        ++count
        countText.innerText = count + '명 참여' // 리뷰작성 누를 때마다 작성인원 증가
    } // 리뷰 글 작성
});