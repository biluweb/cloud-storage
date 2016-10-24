/**
 * Created by Administrator on 2015/12/14.
 */
$(function(){
    //JQ初始化css---Start...
    $('.listdown-2,.listdown-3,.listdown-1,.listdown-4').hide();
    $('.left,.right').hide();
    $('.zhuti-bd').hide();

    //JQ初始化css---End...

    //头部导航下拉开始...
    $('.jdown-1').hover(function(){
        $('.listdown-1').stop().slideDown('normal');
    },function(){
        $('.listdown-1').stop().slideUp('0');
    })
    $('.jdown-2').hover(function(){
        $('.listdown-2').stop().slideDown('normal');
    },function(){
        $('.listdown-2').stop().slideUp('0');
    })
    $('.jdown-3').hover(function(){
        $('.listdown-3').stop().slideDown('normal');
    },function(){
        $('.listdown-3').stop().slideUp('0');
    })
    $('.jdown-4').hover(function(){
        $('.listdown-4').stop().slideDown('normal');
    },function(){
        $('.listdown-4').stop().slideUp('0');
    })
    //头部导航下拉结束...

    //搜索框右侧二维码...
    $('.ewmdn').click(function(){
        $('.headerR').hide();
    })
    //搜索框右侧二维码结束...

    //>>>>>>>大焦点轮播图开始----------<<<<...

    //定义累加器
    var nub=0;
    var timer;
    //鼠标移入让箭头显示，鼠标移出隐藏&&定时器的清除
    $('.promo').hover(function(){
        $('.promo').find('.left,.right').show();
        clearInterval(timer);
    },function(){
        $('.promo').find('.left,.right').hide();
        clearInterval(timer);
        timer=setInterval(autoplay,3000);
    })

    function autoplay(){
        nub++;
        if(nub>4)nub=0
        $('.promo').find('ul').stop().animate({
            left:nub*-520
        },700)
        //图片对应点的索引值...
        $('.promo').find('ol').children('li').eq(nub).addClass('current').siblings().removeClass('current')
    }
    timer=setInterval(autoplay,3000);
    //单击右按钮时图片向左走一张
    $('.promo').find('.right').stop().click(function(){
        autoplay();
    })
    //单击左按钮时图片向左走一张
    $('.promo').find('.left').stop().click(function(){
        nub--;
        if(nub<0)nub=4
        $('.promo').find('ul').stop().animate({
            left:nub*-520
        })
        //图片对应点的索引值...
        $('.promo').find('ol').children('li').eq(nub).addClass('current').siblings().removeClass('current')
    })

    //单击小圆点时对应图片的索引值
    $('.promo').find('ol').children('li').click(function(){
        var index=$(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.promo').find('ul').stop().animate({
            left:index*-520
        })
        //替换内存值
        nub=index;
    })
    //>>>>>>>大焦点轮播图结束----------<<<<...

    //小banner焦点图---<<<...

    //鼠标移入箭头显示...
    $('.tmall').hover(function(){
        $('.tmall').find('.left,.right').show();
    },function(){
        $('.tmall').find('.left,.right').hide();
    })
    //定义累加器
    var br=0;
    //单击右按钮时让图片向左走<1>张
    $('.tmall').find('.right').click(function(){
        br++;
        if(br>20)br=0;
        $('.tmall').find('ul').stop().animate({
            marginLeft:br*-130
        },700)
        //让图片对应小圆点...
        if(br==0){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==4){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==8){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==12){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==16){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==20){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
    })

    //单击左按钮时让图片向右走<1>张
    $('.tmall').find('.left').click(function(){
        br--;
        if(br<0)br=20;
        $('.tmall').find('ul').stop().animate({
            marginLeft:br*-130
        },700)
        //让图片对应小圆点...
        if(br==0){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==4){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==8){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==12){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==16){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
        if(br==20){
            $('.tmall').find('ol').children('li').eq(br/4).addClass('current').siblings('li').removeClass('current');
        }
    })

    //单击小圆点对应 banner图片...
    $('.tmall').find('ol').children('li').click(function(){
        var index=$(this).index();
        var move=index*4
        $('.tmall').find('ol').children('li').eq(index).addClass('current').siblings('li').removeClass('current');
        $('.tmall').find('ul').stop().animate({
            marginLeft:move*-130
        },700)
        //替换内存值...
        br=move;
    })
    //小banner焦点图结束---<<<...

    //首屏TAb栏开始---<<<...
    $('.tabHd').children('li').mouseover(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $('.tabBd').children('ul').eq($(this).index()).show().siblings().hide();
    })
    //首屏TAb栏结束---<<<...

    //手机扫app二维码...
    $('.rectangle').children('li').mouseover(function(){
        $(this).addClass('current').siblings().removeClass('current')
    })
    $('.rectangle').mouseleave(function(){

        $(this).children('li').removeClass('current');
    })
    //手机扫app二维码结束...

    //淘宝故事手风琴banner...
    $('.routine>ul>li').mouseover(function(){
        $(this).stop().animate({'width':'125px'},200).addClass('current').siblings().stop().animate({'width':'50px'},200).removeClass()
    })
    //淘宝故事手风琴banner结束...

    //右侧栏模态广告...
    $('.recommend>ul>li').hover(function(){
        $(this).children('div').stop().slideUp('200');
        $(this).siblings().children('div').stop().slideDown('200');
    },function(){
        $('.recommend').find('div').stop().slideDown('200');
    })
    //右侧栏模态广告结束...

    //左侧列弹出效果开始...
    var timer2
    function omg(){
        $('.zhuti-hover-div').children('dd').removeClass('current');
        $('.zhuti-bd').hide();
    }
    $('.zhuti-hover-div').children('dd').mouseover(function(){
        $(this).addClass('current').siblings().removeClass('current');
        $('.zhuti-bd').eq($(this).index()).show().siblings('.zhuti-bd').hide();
    })
    $('.zhuti-hover-div').mouseleave(function(){
        timer2=setTimeout(omg,50);
    })
    $('.zhuti-bd').mouseover(function(){
        clearTimeout(timer2);
    })
    $('.zhuti-bd').mouseleave(function(){
        clearTimeout(timer2);
        omg();
    })
    //左侧列弹出效果结束...
})






















