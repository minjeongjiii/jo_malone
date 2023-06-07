


const trueName = '전여빈'
const trueTel = '01012341234'
const trueId = 'green'

const name01 = document.getElementById('name_01')
const name02 = document.getElementById('name_02')
const tel01 = document.getElementById('tel_01')
const tel02 = document.getElementById('tel_02')
const userId = document.getElementById('user_id')

const idBtn = document.getElementById('btn01')
const pwBtn = document.getElementById('btn02')

const alert = document.getElementById('alert')
const noId = document.getElementById('alert_id')
const noPw = document.getElementById('alert_pw')
const closeBtn = document.getElementById('close_btn')

const alerts = document.querySelectorAll('.alert')

idBtn.addEventListener('click', findId)
pwBtn.addEventListener('click', findPw)


/* 아이디찾기 */
function findId () {
    if (name01.value == trueName) {
        if (tel01.value == trueTel) {
            alert.style.display = 'block'
            document.getElementById('alert_id').style.display = 'block'
            document.getElementById('alert_pw').style.display = 'none'
        } else {
            failId ()
        }
    } else if (name01.value == '') {
        document.getElementById('al_01').style.display = 'block'
    } else if (tel01.value == '') {
        document.getElementById('al_02').style.display = 'block'
    } else {
        failId ()
    }
    closeBtn.addEventListener('click', function(){
        alert.style.display = 'none'
    })
}
/* 비밀번호찾기 */
function findPw () {
    if (userId.value == trueId) {
        if (name02.value == trueName) {
            if (tel02.value == trueTel) {
                alert.style.display = 'block'
                document.getElementById('alert_pw').style.display = 'block'
                document.getElementById('alert_id').style.display = 'none'
            } else {
                failPw ()
            }
        } else {
            failPw ()
            
        }
    } else if (userId.value == '') {
        document.getElementById('al_04').style.display = 'block'
    } else if (name02.value == '') {
        document.getElementById('al_05').style.display = 'block'
    } else if (tel02.value == '') {
        document.getElementById('al_06').style.display = 'block'
    } else {
        failPw ()
    }
    closeBtn.addEventListener('click', function(){
        alert.style.display = 'none'
    })
}
/* 아이디찾기 실패 */
function failId () {
    document.getElementById('al_03').style.display = 'block'
    name01.value = ''
    tel01.value = ''
    name01.focus()
}
/* 비밀번호찾기 실패 */
function failPw () {
    document.getElementById('al_07').style.display = 'block'
    userId.value = ''
    name02.value = ''
    tel02.value = ''
    userId.focus()
}
/* 입력알림 소거 */
name01.addEventListener('keydown', hide);
tel01.addEventListener('keydown', hide);
name02.addEventListener('keydown', hide);
tel02.addEventListener('keydown', hide);
userId.addEventListener('keydown', hide);

function hide () {
    for ( let i = 0; i < alerts.length; i++ ) {
        alerts[i].style.display = 'none'; 
    }
}

