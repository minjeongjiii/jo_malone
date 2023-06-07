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
})