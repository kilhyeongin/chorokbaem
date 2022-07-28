function joinform_check() {
    let uid = document.getElementById('uid')
    let pwd = document.getElementById('pwd')
    let repwd = document.getElementById('repwd')
    let mobilel = document.getElementById('mobilel')

    // 가입하기 눌렀을 때 비어있는 곳을 알려줌
    if(uid.value == ""){
        alert('아이디 입력하시오')
        uid.focus()
        return false
    }

    if(pwd.value == ""){
        alert('패스워드 입력하시오')
        pwd.focus()
        return false
    }

    // 영문자 + 숫자 + 특수문자 (8~25자 문자)
    let pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if(!pwdCheck.test(pwd.value)){
        alert('알맞은 형식에 맞게 비밀번호를 설정해주세요')
        pwd.focus()
        return false
    }
    // 패스워드 랑 패스워드확인이 일치하는지 봄
    if(repwd.value !== pwd.value){
        alert('비밀번호 일치하지 않음')
        repwd.focus()
        return false
    }

    // g = 전체 다 검사  ,  /^ = 시작한다 ,  0-9 = 숫자들어가는지 
    let reg = /^[0-9]+/g 
    if(!reg.test(mobilel.value)) {
        alert('숫자만 입력바람')
        mobilel.focus()
        return false
    }
}


function id_check(){
    // window.open('팝업 문서의 경로','문서이름','옵션')
    window.open('','','width=300, height=100, left=300, top=100')
}

function chang_email(){
    let email_add = document.getElementById('email_add')
    let email_sel = document.getElementById('email_sel')

    let idx = email_sel.options.selectedIndex;
    let val = email_sel.options[idx].value
    email_add.value = val
}

$(function(){
    $('.ham').click(function(){
        $(this).hide()
        $('.close').show()
        $('.gnb').fadeIn()
        $('.bd').addClass('on')
    })
    $('.close').click(function(){
        $(this).hide()
        $('.ham').show()
        $('.gnb').fadeOut()
        $('.bd').removeClass('on')
    })
})