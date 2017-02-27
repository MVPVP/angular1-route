/**
 * Created by user on 2016/11/6.
 */
routeExample.controller('mycaseController', function ($scope, $route) {
//
    funcResize();
    window.onresize=function(){
        funcResize();
    }

    function funcResize(){
        var cliendW=document.documentElement.clientWidth||document.body.clientWidth;
        //$('.ks-slideCarousel .slide-main ul li').width(cliendW);
        $('.ks-slideCarousel .slide-main ul li').css({
            'width':cliendW,
            'max-width':'1280px'
        })
        if(cliendW<1280){
            $('.ks-slideCarousel .slide-main').css({
                'height':0,
                'padding-bottom':'58.60%'
            })
        }else {
            var marginT=(cliendW-750)/2;
            var marginL=(cliendW-1280)/2;
            $('.ks-slideCarousel .slide-main ul li').css({
                'width':'cliendW',
                'max-width':'1280px',
                'margin-left':marginL
            });
            $('.ks-slideCarousel .slide-main').css({
                'height':750+'px',
                'padding-bottom':0
            })
        }


        var slideCarousel1 = ue.slideCarousel({
            target : '#j-demo2 .slide-main',
            list : "#j-demo2 .slide-main ul",//滚动对象 一般为 ul
            items : '#j-demo2 .slide-main ul li', //滚动的详细列表
            itemActive : "active",

            delay : 3000,//切换间隔时间
            speed : 600,//切换速度

            thumbnails : "#j-demo2 .slide-nav li",
            trigger : "click",

            autoplay : true,
            loop : true,

            prev : "#j-demo2 .prev",

            next : "#j-demo2 .next",

            mode : ue.slideCarousel.H,//V表示竖直方向滚动 H表示水平方向滚动

        });
    }

    //产品--end
})