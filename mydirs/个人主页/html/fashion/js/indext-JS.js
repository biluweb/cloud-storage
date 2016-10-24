$(function(){

            //JQ初始化css样式
    $('.nav').css('display','block')
    $('.nav2').css('display','none');
    $('.anliu').css('display','block')



    //===============大型展示图开始======================//
    var tNum=0;
    var timer;
    function autoplay(){

        tNum++;
        if(tNum>5){
            tNum=1
            $('.fytu').stop().animate({
                'marginLeft':-960+'px'
            },3000)
        }

        var tuw=tNum-1
        $('.nav-top').eq(tuw).css('display','block');
        $('.nav-top').eq(tuw).siblings('.nav-top').css('display','none')

        $('.anliu li').eq(tuw).addClass('current').siblings().removeClass('current');

        var move=(tNum*-1920)+960;
        $('.fytu').stop().animate({
            'marginLeft':''+move+'px'
        },500)


    }

    //添加计时器

    timer=setInterval(autoplay,4000);

    $('.nav').hover(function(event){
        clearInterval(timer);
    },function(event){
        clearInterval(timer);
        timer=setInterval(autoplay,4000);
    })

    $('.anliu li a').click(function(event){

        $(this).parent().addClass('current').siblings().removeClass('current');
        var m=$(this).parent().index()+1
        var move=(m*-1920)+960;
        $('.fytu').stop().animate({
            'marginLeft':''+move+'px'
        },500)
        tNum=m
    })





    //封页文字效果
    $('.nav-top').hover(function(event){
        $('.nav-top').css({
            'color':'#FB9438',
            'opacity':'0.8'
        });
    },function(event){
        $('.nav-top').css({
            'color':'#FEF6F2',
            'opacity':'0.7'
        });
    })

    //导航固定吸附效果...................

    //获取导航的标准流离document的0，0点的距离..
    var bzliu=$('.nav').offset().top;
    $(window).scroll(function(event){
        if($(window).scrollTop()>bzliu){
            $('.nav').addClass('navfixed');

        }else{$('.nav').removeClass('navfixed');}

        if($(window).scrollTop()>=1079){
            $('.dinwei1').addClass('fixedw1');
            $('.top-jt').hide();
        }else{
            $('.dinwei1').removeClass('fixedw1');
            $('.top-jt').show();
        }
    })

    //让内容定位2相对定位.............
    $(window).scroll(function(){

        if($(window).scrollTop()>1080){
              $('.dinwei2').addClass('dw2ra')
        }else{$('.dinwei2').removeClass('dw2ra')}
    })


    //点击箭头收拢顶部...................
    $('.top-jt').click(function(){
        $('html,body').stop().animate({
            'scrollTop':1079
        },500)
    })

    //走两屏高度时，让箭头出现
    var gao=$(window).height()*2
    $(window).scroll(function(event){
        if($(window).scrollTop()>gao){
            $('.youjt').show();
        }else{$('.youjt').hide();}
    })

    //单击右箭头时回到顶部...
    $('.youjt').click(function(event){
        $('html,body').stop().animate({
            'scrollTop':0
        },500)
    })





   //=================大型展示图结束======================//


    //时尚潮流开始

    var clu=0;
    var cliutimer
//    $('.cliu-1 ul').append($('.cliu-1 ul li').eq(0).clone(true))
    function clplay(){
        clu++;
        if(clu>3){
            clu=0;
            $('.cliu-1 ul').stop().animate({'left':'0'},500);
        }
        var clumove=(clu*-1200);
        $('.cliu-1 ul').stop().animate({
            'left':''+clumove+'px'
        },500)
        var wzarry=['黄晓明：一个演员的修行之道','“大胆爱，在一起”幸福主题','封面人物 | 张静初：不忘初心','Ella：有态度不怕“不正常”']
        var w=clu;
        if(w>3){w=0}
        $('.wz1 b').html(''+wzarry[w]+'')
    }

    $('.wz1 i').click(function(event){
        clplay()
    })

    cliutimer=setInterval(clplay,5000);
    $('.wz1').hover(function(event){
        clearInterval(cliutimer);
    },function(event){
        cliutimer=setInterval(clplay,5000);
    })


    //下部分
    $('.xcwz').hover(function(event){
        $(this).children('.xf').stop().fadeToggle();
        $(this).children('a').css({'background':'#F4F4F4','color':'#FF8004'})
    },function(){
        $(this).children('.xf').stop().fadeToggle();
        $(this).children('a').css({'background':'#B9B9B9','color':'#FCFCFC'})
    })
    //单击右按钮让图片向左走一张
    var tr=0
    $('.cliu-2 .right').click(function(event){
        tr++;
        if(tr>12){
            tr=0;
            $('.cliu-2 ul').stop().animate({'left':'0'},500);
        };
        move=tr*-300;
        $('.cliu-2 ul').stop().animate({'left':''+move+''},500)

        if(tr==0){
            $('.cliu-2 .right').parent().find('.lbt li').eq(0).addClass('current').siblings().removeClass('current');
        }
        if(tr==4){
            $('.cliu-2 .right').parent().find('.lbt li').eq(1).addClass('current').siblings().removeClass('current');
        }
        if(tr==8){
            $('.cliu-2 .right').parent().find('.lbt li').eq(2).addClass('current').siblings().removeClass('current');
        }
        if(tr==12){
            $('.cliu-2 .right').parent().find('.lbt li').eq(3).addClass('current').siblings().removeClass('current');
        }
    })

    //单击左按钮让图片向右走一张
    var tl=0
    $('.cliu-2 .left').click(function(event){
        tl--;
        if(tl<0){
            tl=12;
            $('.cliu-2 ul').stop().animate({'left':'-3600'},500);
        };
        move=tl*-300;
        $('.cliu-2 ul').stop().animate({'left':''+move+''},500)

        if(tl==12){
            $('.cliu-2 .right').parent().find('.lbt li').eq(3).addClass('current').siblings().removeClass('current');
        }
        if(tl==8){
            $('.cliu-2 .right').parent().find('.lbt li').eq(2).addClass('current').siblings().removeClass('current');
        }
        if(tl==4){
            $('.cliu-2 .right').parent().find('.lbt li').eq(1).addClass('current').siblings().removeClass('current');
        }
        if(tl==0){
            $('.cliu-2 .right').parent().find('.lbt li').eq(0).addClass('current').siblings().removeClass('current');
        }
    })

    //点击小圆点索引值对应图片
    $('.lbt li a').click(function(event){

        $(this).parent().addClass('current').siblings().removeClass('current')
        var i=$(this).parent().index()
        var move=$(this).parent().index()*-1200;

        $('.cliu-2 ul').stop().animate({'left':''+move+'px'},500)
        //替换内存的值
        tl=i*4
        tr=i*4
    })
    //时尚潮流结束


    //品牌活动开始
    $('.nx').hover(function(event){
        $(this).children('.infor').stop().animate({'bottom':'0'},500);
        $(this).children('.infor').find('h3').fadeTo('0',0.9).css({'color':'#FA8000'}).fadeTo('500',1);
    },function(event){
        $(this).children('.infor').stop().animate({'bottom':'-80'},500);
        $(this).children('.infor').find('h3').fadeTo('0',0.9).css({'color':'#F3FFFF'}).fadeTo('500',1);
    })

    //品牌活动结束


    //全方位时尚开始
    $('.drdc li').hover(function(event){
        $(this).children('.tuwen').stop().fadeIn();
        $(this).children('.xin').fadeTo('0',0.8).css({'backgroundColor':'#FD8A1A'}).fadeTo('400',1).find('*').css('color','#fff')
    },function(event){
        $(this).children('.tuwen').stop().fadeOut();
        $(this).children('.xin').fadeTo('0',0.8).css({'backgroundColor':'#E6E6E6'}).fadeTo('400',1).find('*').css('color','#666666')
    })

    //单击右箭头图片向左滑动
    var wsp=0;
    $('.qfwsp').children('.right').click(function(event){
        wsp++;
        if(wsp>12){
            wsp=0;
            $('.drdc').stop().animate({'left':'0'},500);
        }
        var move=wsp*-300;
        $('.drdc').stop().animate({'left':''+move+'px'},500);

        if(wsp==0){
            $('.qfwsp .right').parent().find('.drdc2 li').eq(0).addClass('current').siblings().removeClass('current');
        }
        if(wsp==4){
            $('.qfwsp .right').parent().find('.drdc2 li').eq(1).addClass('current').siblings().removeClass('current');
        }
        if(wsp==8){
            $('.qfwsp .right').parent().find('.drdc2 li').eq(2).addClass('current').siblings().removeClass('current');
        }
        if(wsp==12){
            $('.qfwsp .right').parent().find('.drdc2 li').eq(3).addClass('current').siblings().removeClass('current');
        }
    })

    //单击左箭头图片向右滑动
    var wr=0;
    $('.qfwsp .left').click(function(event){
        wr--
        if(wr<0){
            wr=12;
            $('.drdc').stop().animate({'left':'-3600'},500);
        }
        var move=wr*-300;
        $('.drdc').stop().animate({'left':''+move+'px'},500);

        if(wr==12){
            $('.qfwsp .left').parent().find('.drdc2 li').eq(3).addClass('current').siblings().removeClass('current');
        }
        if(wr==8){
            $('.qfwsp .left').parent().find('.drdc2 li').eq(2).addClass('current').siblings().removeClass('current');
        }
        if(wr==4){
            $('.qfwsp .left').parent().find('.drdc2 li').eq(1).addClass('current').siblings().removeClass('current');
        }
        if(wr==0){
            $('.qfwsp .left').parent().find('.drdc2 li').eq(0).addClass('current').siblings().removeClass('current');
        }
    })

    //点击圆点获取索引值，与图片进行对应。。。。。。。。。。。。。。。。
    $('.drdc2 li a').click(function(event){
        $(this).parent().addClass('current').siblings().removeClass('current');
        var move=$(this).parent().index()*-1200;
        var i=$(this).parent().index();
        $('.drdc').stop().animate({'left':''+move+'px'},500);
        //替换内存的值
        wsp=i*4
        wr=i*4
    })
    //全方位时尚结束



    //搜索框........
    $('#wenb').focus(function(){
        if($('#wenb').val()=='请输入搜索内容...'){
            $('#wenb').val('');
            $('#wenb').css('color','#333');
        }
    })

    $('#wenb').blur(function(){
        if($('#wenb').val()==''){
            $('#wenb').val('请输入搜索内容...');
            $('#wenb').css('color','#ccc');
        }
    })

})





























