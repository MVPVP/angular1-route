/**
 * Created by Administrator on 2016/11/4.
 */
routeExample.controller('AboutController', function ($scope, $route) {
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
    //var gowuyeS=sessionStorage.getItem('gowuyeS');
    //if(gowuyeS){
    //    $scope.proSwichItem=22;
    //}else{
    //    $scope.proSwichItem=11;
    //}
    //$scope.proSwich=function(e){
    //    switch(e){
    //        case 22:
    //            $scope.proSwichItem=22;
    //            break;
    //        case 33:
    //            $scope.proSwichItem=33;
    //            break;
    //        case 44:
    //            $scope.proSwichItem=44;
    //            break;
    //        case 55:
    //            $scope.proSwichItem=55;
    //            break;
    //        default:
    //            $scope.proSwichItem=11;
    //            break;
    //    }
    //};
    //
    //if(gowuyeS){
    //    $('.headertext .text').eq(1).addClass('active').siblings().removeClass('active');
    //    $('.tabs li').eq(1).addClass('cur').siblings().removeClass('cur');
    //    $('.tagsMain li').eq(1).show().siblings().hide();
    //    setTimeout(yanci,50);
    //
    //    function yanci(){
    //        sessionStorage.removeItem('gowuyeS');
    //        window.scroll(0,document.body.scrollHeight);
    //    }
    //}

    //产品--end
})