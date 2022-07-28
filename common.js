$(function(){


    // 햄버거 버튼
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
// 드라마
    $('.dramaall1').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall1').addClass('on')
    })
    $('.dramaall2').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall2').addClass('on')
    })
    $('.dramaall3').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall3').addClass('on')
    })
    $('.dramaall4').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall4').addClass('on')
    })
    $('.dramaall5').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall5').addClass('on')
    })
    $('.dramaall6').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall6').addClass('on')
    })
    $('.dramaall7').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall7').addClass('on')
    })
    $('.dramaall8').click(function(){
        $('.dramaall li').removeClass('on')
        $('.dramaall8').addClass('on')
    })

// 시트콤
    $('.sitcomall1').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall1').addClass('on')
    })
    $('.sitcomall2').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall2').addClass('on')
    })
    $('.sitcomall3').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall3').addClass('on')
    })
    $('.sitcomall4').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall4').addClass('on')
    })
    $('.sitcomall5').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall5').addClass('on')
    })
    $('.sitcomall6').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall6').addClass('on')
    })
    $('.sitcomall7').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall7').addClass('on')
    })
    $('.sitcomall8').click(function(){
        $('.sitcomall li').removeClass('on')
        $('.sitcomall8').addClass('on')
    })
// 비디오 첫번째
    $('.secB .img1>img').mouseenter(function(){
        $('.secB_video .video1').addClass('on')
        $('.img1 img,.img2 img, .img3 img, .img_mo p, .secB h2, .img_mo span').addClass('on')
        $('.img_mo p, .secB h2').addClass('on')
        $(".secB_video .video1")[0].play();
    })

    $('.secB .img1>img').mouseleave(function(){
        $('.secB_video .video1, .img1 img,.img2 img, .img3 img, .img_mo p, .secB h2, .img_mo span').removeClass('on')
        $(".secB_video .video1")[0].pause();
        $(".secB_video .video1")[0].currentTime = 0;
    })


//  비디오 두번째
    $('.secB .img2>img').mouseenter(function(){
        $('.secB_video .video2').addClass('on')
        $('.img1 img,.img2 img, .img3 img, .img_mo p, .secB h2, .img_mo span').addClass('on')
        $('.img_mo p, .secB h2').addClass('on')
        $(".secB_video .video2")[0].play();
    })

    $('.secB .img2>img').mouseleave(function(){
        $('.secB_video .video2, .img1 img,.img2 img, .img3 img, .img_mo p, .secB h2, .img_mo span').removeClass('on')
        $(".secB_video .video2")[0].pause();
        $(".secB_video .video2")[0].currentTime = 0;
    })
//  비디오 세번째
    $('.secB .img3>img').mouseenter(function(){
        $('.secB_video .video3').addClass('on')
        $('.img1 img,.img2 img, .img3 img, .img_mo p, .secB h2, .img_mo span').addClass('on')
        $('.img_mo p, .secB h2').addClass('on')
        $(".secB_video .video3")[0].play();
    })

    $('.secB .img3>img').mouseleave(function(){
        $('.secB_video .video3, .img1 img,.img2 img, .img3 img, .img_mo p, .secB h2, .img_mo span').removeClass('on')
        $(".secB_video .video3")[0].pause();
        $(".secB_video .video3")[0].currentTime = 0;
    })

// 배경색 바꾸기

    $('.drama').click(function(){
        $('.sitcom, .sitcom_ot,.h2').removeClass('on')
        $('.secC').css('backgroundColor','black')
        $('.drama_ot,.drama').addClass('on')
    })
    $('.sitcom').click(function(){
        $('.drama, .drama_ot').removeClass('on')
        $('.secC').css('backgroundColor','white')
        $('.drama').css('backgroundColor','black')
        $('.sitcom_ot,.sitcom,.h2').addClass('on')
    })


// 스크롤 내리고 올리고
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}






})
$(window).resize(function(){ 
    if (window.innerWidth > 1880) {  // 다바이스 크기가 480이상일때 
    

    
    } else {
    

    
    }
    
    }).resize();

