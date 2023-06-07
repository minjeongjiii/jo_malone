document.addEventListener('DOMContentLoaded', () => {

    const termAll = document.getElementById('term_all')
    const yes01 = document.getElementById('yes_01')
    const yes02 = document.getElementById('yes_02')
    const yes03 = document.getElementById('yes_03')
    const no01 = document.getElementById('no_01')
    const no02 = document.getElementById('no_02')
    const no03 = document.getElementById('no_03')

    const termsEls = document.querySelectorAll('.terms_el')

    termAll.addEventListener('click', allCheck)
    yes01.addEventListener('click', termsCheck)
    yes02.addEventListener('click', termsCheck)
    yes03.addEventListener('click', termsCheck)
    no01.addEventListener('click', unCheck)
    no02.addEventListener('click', unCheck)
    no03.addEventListener('click', unCheck)

    function allCheck() {
        if (termAll.checked === true) {
            termsEls.forEach((termsEl) => {
                termsEl.checked = true
            })
        } else {
            termsEls.forEach((termsEl) => {
                termsEl.checked = false
            })
        }
    }

    function termsCheck() {
        if (yes01.checked === true && yes02.checked === true && yes03.checked === true) {
            termAll.checked = true
        }
    }

    function unCheck() {
        if (no01.checked === true || no02.checked === true || no03.checked === true) {
            termAll.checked = false
        }
    }

    const userId = document.getElementById('user_id')
    const userPw1 = document.getElementById('user_pw1')
    const userPw2 = document.getElementById('user_pw2')
    const userName = document.getElementById('user_name') 
    const userBirth = document.getElementById('user_birth')
    const telFirst = document.getElementById('tel_first')
    const telSecond = document.getElementById('tel_second')
    const telThird = document.getElementById('tel_third')
    const userEmail = document.getElementById('user_email')
    const userAddr = document.getElementById('user_addr')

    const al01 = document.getElementById('al_01')
    /* const al02 = document.getElementById('al_02') */
    const al03 = document.getElementById('al_03')
    /* const al04 = document.getElementById('al_04') */
    const al05 = document.getElementById('al_05')
    const al06 = document.getElementById('al_06')
    const al07 = document.getElementById('al_07')

    userId.addEventListener('change', lengthId)
    userPw1.addEventListener('change', lengthPw)
    userPw2.addEventListener('change', checkPw)
    userBirth.addEventListener('change', lengthBirth)
    userBirth.addEventListener('keyup', moveToNext8)
    telSecond.addEventListener('keyup', moveToNext4)
    

    function lengthId() {
        if (userId.value.length < 5 || userId.value.length > 10 ) {
            al01.style.display = 'block'
            userId.value = ''
            userId.focus()
        } else {
            al01.style.display = 'none'
        }
    }
    function lengthPw() {
        if (userPw1.value.length < 4) {
            al03.style.display = 'block'
            userPw1.value = ''
            userPw1.focus()
        } else {
            al03.style.display = 'none'
            al06.style.display = 'none'
        }
    }
    function checkPw() {
        if (userPw1.value===userPw2.value) {
            al05.style.display = 'block'
        } else {
            al06.style.display = 'block'
            userPw1.value = ''
            userPw1.focus()
            userPw2.value = ''
        }
    }
    function lengthBirth() {
        if (userBirth.value.length < 7) {
            al07.style.display = 'block'
            userBirth.value = ''
            userBirth.focus()
        } else {
            al07.style.display = 'none'
        }
    }
    function moveToNext8() {
        if (userBirth.value.length >= 8) {
            telSecond.focus()
        }
    }
    function moveToNext4() {
        if (telSecond.value.length >= 4) {
            telThird.focus()
        }
    }

    const popUp = document.getElementById('popup')
    const joinBtn = document.getElementsByClassName('goforward')[0]

    const alert = document.getElementById('alert')
    const noChk = document.getElementById('no_chk')

    const closeBtn = document.getElementById('close_btn')

    joinBtn.addEventListener('click', showPopup)

    function showPopup() {
        if(
            yes01.checked == false || 
            yes02.checked == false ||
            document.getElementById('over_14').checked == false
        ) {
            alert.style.display = 'block'
            noChk.style.display = 'block'
        } else if (
            document.getElementById('qy01').checked == '' &&
            document.getElementById('qn01').checked == '' 
        ) {
            document.getElementById('al_08').style.display = 'block'
        } else if (
            document.getElementById('qy02').checked == '' &&
            document.getElementById('qn02').checked == '' 
        ) {
            document.getElementById('al_08').style.display = 'block'
        } else if (
            document.getElementById('qy03').checked == '' &&
            document.getElementById('qn03').checked == '' 
        ) {
            document.getElementById('al_08').style.display = 'block'
        } else if (
            userId.value == '' || 
            userPw1.value == '' || 
            userPw2.value == '' ||
            userName.value == '' || 
            userBirth.value == '' || 
            telFirst.value == '' || 
            telSecond.value == '' || 
            telThird.value == '' ||
            userEmail.value == '' || 
            userAddr.value == ''        
        ) {
            document.getElementById('al_09').style.display = 'block'
        } else {
            popUp.style.display = 'block'
        }

        closeBtn.addEventListener('click', function(){
            alert.style.display = 'none'
        })
    }

    document.getElementById('qy01').addEventListener('change',()=>{
        document.getElementById('al_08').style.display = 'none'
    })
    document.getElementById('qy02').addEventListener('change',()=>{
        document.getElementById('al_08').style.display = 'none'
    })
    document.getElementById('qy03').addEventListener('change',()=>{
        document.getElementById('al_08').style.display = 'none'
    })
    document.getElementById('qn01').addEventListener('change',()=>{
        document.getElementById('al_08').style.display = 'none'
    })
    document.getElementById('qn02').addEventListener('change',()=>{
        document.getElementById('al_08').style.display = 'none'
    })
    document.getElementById('qn03').addEventListener('change',()=>{
        document.getElementById('al_08').style.display = 'none'
    })

    joinBtn.addEventListener('mouseout', function(){
        document.getElementById('al_09').style.display = 'none'
    })
      
})