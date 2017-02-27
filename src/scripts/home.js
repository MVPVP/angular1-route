/**
 * Created by Administrator on 2016/11/4.
 */
routeExample.controller('HomeController', function ($scope, $route) {
//
    funcResize();
    window.onresize=function(){
        funcResize();
    };
    //
    var videoW=$('embed').width();
    $('.video embed').height(videoW*31/59);
    $('.f-media li.ylb').on('click',function(){
        window.location.href=window.location.href.split('#')[0]+'#/product';
        $('.headertext .text').eq(1).addClass('active').siblings().removeClass('active');
        window.scroll(0,document.body.scrollHeight);
    });
    $('.f-media li.wuye').on('click',function(){
        sessionStorage.setItem('gowuyeS',true);
        window.location.href=window.location.href.split('#')[0]+'#/product';
    });
    //
    function funcResize(){
        //
        var videoW=$('embed').width();
        $('.video embed').height(videoW*31/59);
        //
        var cliendW=document.documentElement.clientWidth||document.body.clientWidth;
        $('.ks-slideCarousel .slide-main ul li').width(cliendW);
        if(cliendW<1280){
            $('.ks-slideCarousel .slide-main').css({
                'height':0,
                'padding-bottom':'56.25%'
            })
        }else {
            var marginT=(cliendW-720)/2;
            var marginL=(cliendW-1280)/2;
            $('.ks-slideCarousel .slide-main ul li img').css({
                'width':'cliendW',
                'max-width':'1280px',
                'margin-left':marginL
            });
            $('.ks-slideCarousel .slide-main').css({
                'height':720+'px',
                'padding-bottom':0
            })
        }


        var slideCarousel1 = ue.slideCarousel({
            target : '#j-demo1 .slide-main',
            list : "#j-demo1 .slide-main ul",//滚动对象 一般为 ul
            items : '#j-demo1 .slide-main ul li', //滚动的详细列表
            itemActive : "active",

            delay : 4000,//切换间隔时间
            speed : 600,//切换速度

            thumbnails : "#j-demo1 .slide-nav li",
            trigger : "click",

            autoplay : true,
            loop : true,

            prev : "#j-demo1 .prev",
            
            next : "#j-demo1 .next",

            mode : ue.slideCarousel.H,//V表示竖直方向滚动 H表示水平方向滚动

            //beforeSlide : function(){
            //    var that = this;
            //
            //    that.items.find(".title,.mask").stop({gotoEnd : true}).animate({
            //        bottom : 50
            //    }, 300);
            //},
            //
            //afterSlide : function(){
            //    var that = this;
            //
            //    that.items.eq(that.active).stop({gotoEnd : true}).find(".title,.mask").animate({
            //        bottom : 80
            //    }, 300)
            //}
        });
    }

//
})