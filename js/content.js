
$(function(){
	process();
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