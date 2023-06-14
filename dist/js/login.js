document.addEventListener('DOMContentLoaded', () => {

    const passId = 'green'
    const passPw = '1234'

    const userId = document.getElementById('user_id')
    const userPw = document.getElementById('user_pw')

    const enterBtn = document.getElementById('enter_btn')

    const alert = document.getElementById('alert')
    const noId = document.getElementById('no_id')
    const noPw = document.getElementById('no_pw')
    const noAll = document.getElementById('no_all')
    const noInfo = document.getElementById('no_info')
    const closeBtn = document.getElementById('close_btn')

    enterBtn.addEventListener('click', goIndex)

    function goIndex() {

        if (userId.value === passId) {
            if (userPw.value === passPw) {
                location.replace('./index_login.html')
            } else {
                alert.style.display = 'block'
                noPw.style.display = 'block'
                noId.style.display = 'none'
                noAll.style.display = 'none'
                noInfo.style.display = 'none'
            }
        } else if (userId.value == '') {
            alert.style.display = 'block'
            noAll.style.display = 'block'
            noPw.style.display = 'none'
            noId.style.display = 'none'
            noInfo.style.display = 'none'
        } 
        else {
            alert.style.display = 'block'
            noId.style.display = 'block'
            noPw.style.display = 'none'
            noAll.style.display = 'none'
            noInfo.style.display = 'none'
        }

        closeBtn.addEventListener('click', function(){
            alert.style.display = 'none'
        })

    }

    const nonMember = document.getElementById('nonmember')
    const nonmemberOrder = document.getElementById('nonmember_order')

    nonMember.addEventListener('click', orderOpen)

    function orderOpen() {
        nonmemberOrder.style.display = 'block'
    }
    
    const deliChk = document.getElementById('deli_chk')
    deliChk.addEventListener('click', function(){
        if(deliChk.checked===true) { 
          document.getElementById('order_name02').value = document.getElementById('order_name01').value
          document.getElementById('order_tel02').value = document.getElementById('order_tel01').value
          document.getElementById('order_email02').value = document.getElementById('order_email01').value
        } else {
          document.getElementById('order_name02').value = ''
          document.getElementById('order_tel02').value = ''
          document.getElementById('order_email02').value = ''
        }
      })
    
    const infoBtn = document.getElementsByClassName('a02')[0]
    infoBtn.addEventListener('click', ()=>{
        if (
            document.getElementById('order_name02').value == '' 
            || document.getElementById('order_tel02').value == ''
            || document.getElementById('order_email02').value == ''
            || document.getElementById('order_addr').value == ''
        ) {
            alert.style.display = 'block'
            noInfo.style.display = 'block'
            noPw.style.display = 'none'
            noId.style.display = 'none'
            noAll.style.display = 'none'

            closeBtn.addEventListener('click', function(){
                alert.style.display = 'none'
            })
        } else {
            location.replace('./index_guest.html')
        }
    })
})