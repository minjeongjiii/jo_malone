document.addEventListener('DOMContentLoaded', () => {
    const menwNew = document.getElementById('menu_new')
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
    
    menwNew.addEventListener('mouseover', () => (
        openList(lnbList01)
    ))
    menwNew.addEventListener('mouseout', () => (
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
    header.addEventListener('mouseover', function(){
        headerFix.style.backgroundColor = '#FCF9EE'
        logoText.style.color = '#000'
        menwNew.style.color = '#000'
        menuScent.style.color = '#000'
        menuShop.style.color = '#000'
        menuAbout.style.color = '#000'
        let len = gnbImg.length;
        for (let i = 0; i < len; i++) {
            gnbImg.item(i).style.filter = 'invert(0%)'
        }
    })
    header.addEventListener('mouseout', function(){
        headerFix.style.backgroundColor = 'rgba(252, 249, 238, 0)'
        logoText.style.color = '#fff'
        menwNew.style.color = '#fff'
        menuScent.style.color = '#fff'
        menuShop.style.color = '#fff'
        menuAbout.style.color = '#fff'
        let len = gnbImg.length;
        for (let i = 0; i < len; i++) {
            gnbImg.item(i).style.filter = 'invert(100%)'
        }
    })
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

    searchBtn.addEventListener('click', ()=>{
        search.style.top = '0px'
    })
    closeSearchBtn.addEventListener('click', ()=>{
        search.style.top = '-400px'
    })

    const cart = document.getElementById('cart')
    const cartBtn = document.getElementById('cart_btn')
    const cartBtn01 = document.getElementById('cart_btn_01')
    const closeCartBtn = document.getElementById('close_cart_btn')

    cartBtn.addEventListener('click', ()=>{
        cart.style.right = '0px'
    })
    cartBtn01.addEventListener('click', ()=>{
        cart.style.right = '0px'
    })
    closeCartBtn.addEventListener('click', ()=>{
        cart.style.right = '-522px'
    })

    window.addEventListener('scroll', function() {
        const myVideo = document.getElementById('myVideo');
        const topSpace = document.getElementsByClassName('top_space')[0];
        let scrollPosition = window.scrollY /* || window.pageYOffset; */
        if (scrollPosition > 400) {
            myVideo.style.display = 'none';
            topSpace.style.height = '600px';
            
        } else {
            myVideo.style.display = '';
            topSpace.style.height = '100vh';
        }
    });

    /* 컬렉션 이미지변화 */
    const liImg = document.querySelectorAll('.img_list_wrap > li')
    const liBg = document.querySelectorAll('.shade_wrap > li')
    
    for(let i=0; i<liBg.length; i++) {
        
        liBg[i].addEventListener('mouseover', function(){
            for (let j = 0; j < liBg.length; j++) {
                liBg[j].classList.remove('shade_on')
            }
            liBg[i].classList.add('shade_on')
            for (let k = 0; k < liImg.length; k++) {
                liImg[k].classList.remove('img_on')
            }
            liImg[i].classList.add('img_on')
        } ) 
    }

    /* 취향 테스트 */
    const testPage = document.getElementsByClassName('test')[0]
    const testStart = document.getElementsByClassName('test_start')[0]
    const testBtn = document.querySelector('.test_start > span')
    testPage.addEventListener('mouseover', big)
    testPage.addEventListener('mouseout', small)

    function big () {
        testPage.style.height = '600px'
        testPage.style.transition = 'all 0.3s'
        testStart.style.marginTop = '120px'
        testStart.style.transition = 'all 0.3s'
        testBtn.style.marginTop = '135px'
        testBtn.style.transition = 'all 0.3s'
    }
    function small () {
        testPage.style.height = '300px'
        testPage.style.transition = 'all 0.3s'
        testStart.style.marginTop = '0px'
        testStart.style.transition = 'all 0.3s'
        testBtn.style.marginTop = '60px'
        testBtn.style.transition = 'all 0.3s'
    }

    /* 메인페이지 스와이퍼 */
    window.onload = function() {
        /* swiper  */
        const swiperNew = new Swiper('.swiper_new', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 3500,
            },
        });
        /* 인스타그램 스와이퍼 */
        const swiperInsta = new Swiper('.swiper_insta', {
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
    }

    /* 탑버튼 */
    const topBtn = document.querySelector('.top_btn')
    window.addEventListener('scroll', ()=>{
        if(window.scrollY>200) {gsap.to(topBtn,0.3, {
            opacity:1
        })} else {
            gsap.to(topBtn,0.3, {
                opacity: 0
            })
        } 
    })
    topBtn.addEventListener('click',()=>{
        gsap.to(window, 0.5, {
            scrollTo: 0
        })
    })

    /* 탭 시트 바꾸기 */
    const tabLabel = document.querySelectorAll('.tab_label > li')
    const tabSheet = document.querySelectorAll('.tab_sheet > li')
    const itemEls = document.querySelectorAll('.item_box div' )
    for(let i=0; i<tabLabel.length;i++) {
        tabLabel[i].addEventListener('click',function(){
            for(let j=0; j<tabSheet.length;j++) {
                tabSheet[j].classList.remove('tab_on')
            }
            tabSheet[i].classList.add('tab_on')
            itemEls.forEach((itemEl, index) => {
                if (itemEl.parentNode.classList.contains('tab_on')) {
                    gsap.to(itemEl, 1, {
                        delay: index * 0.2,
                        opacity: 1
                    });
                }
            });
        })
    }

    /* 인스타 모달 팝업 열기 */
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal_insta');
    const btnOpenPopup = document.querySelectorAll('.bag_btn');
    
    for(let i=0;i<btnOpenPopup.length;i++){
        btnOpenPopup[i].addEventListener('click', () => {
            modal.classList.toggle('show');
            if (modal.classList.contains('show')) {
                body.style.overflow = 'hidden';
            }
        });
    }
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.toggle('show');
            if (!modal.classList.contains('show')) {
                body.style.overflow = 'auto';
            }
        }
    });
})
