$(function(){
    process();
    btnMenu();
    lnbMenu();
    alarm();
});

// process list/card
function process(){
    $('.member_area a').on("click",function(){
        if($(this).hasClass('btn_list')){
            $(this).addClass('on');
            $('.btn_card').removeClass('on');
            $('.process_wrap.type_list').removeClass('none');
            $('.process_wrap.type_card').addClass('none');
        }if($(this).hasClass('btn_card')){
            $(this).addClass('on');
            $('.btn_list').removeClass('on');
            $('.process_wrap.type_list').addClass('none');
            $('.process_wrap.type_card').removeClass('none');
        }
    });
}

function btnMenu(){
    var $body = $('body,html');
    var $btnMenu = $('.header .btn_menu');
    var $lnb = $('.lnb');
    $btnMenu.on('click',function(){
        var lnb = $(this).hasClass('close');
        if(lnb){
            $lnb.hide();
            $body.removeClass('fixed');
            $(this).removeClass('close');
        }else{
            $lnb.show();
            $body.addClass('fixed');
            $(this).addClass('close');
        }
    })
    $(window).resize(function(){
        var winW = $(this).width();
        if(winW > 720){
           $lnb.show();
        }else{
            $lnb.hide();
        }
    });
}

function lnbMenu(){
    var $menu = $('.lnb .menu > li > a');
    var $submenu = $('.lnb .sub_menu');
    $menu.on('click',function(){
        var menu = $(this).parent().hasClass('on');
        $menu.parents('.menu').find('>li').removeClass('on');
        if(menu){
            $(this).parent('li').removeClass('on');
        }else{
            $(this).parent('li').addClass('on');
        }
    });   
}

function alarm(){
    var $btnAlarm = $('.btn_alarm');
    var $tabBtn = $('.alarm_box .tab_list > li');
    var $tabCont = $('.tab_cont_wrap > .tab_cont');
    $btnAlarm.on('click',function(){
        var alarmBoxOn = $('.alarm_box').css('display');
        if(alarmBoxOn == 'block'){
            $('.alarm_box').fadeOut();
        }else{
            $('.alarm_box').fadeIn();
        }
    });
    $tabBtn.on('click',function(){
        $tabBtn.removeClass('on');
        $tabCont.hide();
        var idx = $(this).index();        
        $tabCont.eq(idx).show();
        $(this).addClass('on');
    });
}
