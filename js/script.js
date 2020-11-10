
window.onload = function(){
    alarm();            //alarm
    lnb();              //leftmenu
    user();              //user
}
function alarm(){
    var btnAlarm = document.getElementsByClassName('btn_alarm');
    var boxAlarm = document.getElementsByClassName('alarm_box');
    var tab = document.getElementsByClassName('tab_list');
    var tabList = tab[0].getElementsByTagName('li');
    var tabContList = document.getElementsByClassName('tab_cont');
    var boolean;
    btnAlarm[0].addEventListener('click', function(){
        if(!boolean){
            boxAlarm[0].style.display = 'block';
            boolean = true;
        }else{
            boxAlarm[0].style.display = 'none';
            boolean = false;
        }
    });
    tabContList[0].style.display = 'block';
    for(i=0; i<tabList.length; i++){
        (function(i){
            tabList[i].addEventListener("click", active)
            function active(){ 
                for(j=0; j<tabList.length; j++){
                    tabList[j].removeAttribute('class');
                    tabContList[j].style.display = 'none';
                }
                this.setAttribute('class','on');
                tabContList[i].style.display = 'block';
             }
        })(i);
    }
}
function lnb(){
    var btnMenu = document.getElementsByClassName('btn_menu');
    var lnb = document.getElementsByClassName('lnb');
    var menu = lnb[0].getElementsByClassName('menu');
    var menuList = menu[0].children;
    var subMenu = menu[0].getElementsByClassName('sub_menu');
    var subMenuList = subMenu[0].children;
    var boolean;
    btnMenu[0].addEventListener('click', function(){
        if(!boolean){
            this.setAttribute('class','btn_menu close');
            lnb[0].style.display = "block";
            boolean = true;
        }else{
            this.setAttribute('class','btn_menu');
            lnb[0].style.display = "none";
            boolean = false;
        }
    });
    for(i=0; i<menuList.length; i++){
        menuList[i].addEventListener('click',function(){
            for(j=0; j<menuList.length; j++){
                menuList[j].removeAttribute('class');
            }
            this.setAttribute('class','on');
        });
    }
    for(i=0; i<subMenuList.length; i++){
        subMenuList[i].addEventListener('click',function(){
            for(j=0; j<subMenuList.length; j++){
                subMenuList[j].removeAttribute('class');
            }
            this.setAttribute('class','on');
        });
    }
    window.onresize = function(){
        if(window.innerWidth > 720){
            lnb[0].style.display = "block";
        }else{
            btnMenu[0].setAttribute('class','btn_menu');
            lnb[0].style.display = "none";
        }
    }
}
function user(){
    var user = document.getElementsByClassName('user_name');
    var userBox = document.getElementsByClassName('user_box');
    var boolean;
    user[0].addEventListener('click',function(){
        if(!boolean){
            this.setAttribute('class','user_name on');
            userBox[0].style.display = 'block';
            boolean = true;
        }else{
            this.setAttribute('class','user_name');
            userBox[0].style.display = 'none';
            boolean = false;
        }
    });
}