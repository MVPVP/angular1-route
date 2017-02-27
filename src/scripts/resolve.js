/**
 * Created by Administrator on 2017/1/5.
 */
routeExample.controller('resolveController', function ($scope, $route) {
    var moveNameDiffer=true;
    $('.tabs li').on('click',function(){
        var hascur=!$(this).hasClass('cur');
        var index=$(this).index();
        $('.tagsMain li').eq(index).show().siblings().hide();
        $(this).addClass('cur').siblings().removeClass('cur');
        if(hascur){
            if(moveNameDiffer){
                $('.tabs li .icon').css({animation:'moveText 1.5s ease'});
                $('.tabs li .text').css({animation:'moveIcon 2s ease'});
                moveNameDiffer=false;
            }else{
                $('.tabs li .icon').css({animation:'moveIcon 1.5s ease'});
                $('.tabs li .text').css({animation:'moveText 2s ease'});
                moveNameDiffer=true;
            }
        }
    });


    //解决方案--end
})