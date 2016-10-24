$(function(){

		//获取导航的标准流离document的0，0点的距离..
	    var bzliu=$('nav').offset().top;
	    $(window).scroll(function(event){
	        if($(window).scrollTop()>=bzliu){
	            $('nav').addClass('navfixed');
            	$('.head').addClass('headfixed');
            	var be=bzliu;
            	$('.headfixed').css({'top':-be})
	        }else{$('nav').removeClass('navfixed');
	        	$('.head').removeClass('headfixed')
	        	$('.head').css({'top':0})
	    	}

	        if($(window).scrollTop()>bzliu){
	            $('.main').addClass('relemain');
	            var bn=bzliu;
	            $('.relemain').css({'top':bn+120})
	        }else{
	            $('.main').removeClass('relemain');
	            $('.main').css({'top':122})
	        }
	    })
	    
	    
//	    loading
		function loadingFn(){
		var num=0;
		var arry=['img/my.png','img/stripes.png','img/myname.png','img/fash.png','img/footer.png','img/or.png','img/section_home_fg.png','img/yuan.png','img/bgindex.jpg','icon/BIL.png','icon/jiant.png','icon/mous.png'];
		for(var i=0; i<arry.length; i++){
				var imgObj=new Image();
				imgObj.src='image/'+arry[i];
				imgObj.onload=function(){
					num++;
					var s=parseInt((num/arry.length)*100);
					$('.progress-word').html(s+'%');
					$('.progress-bar').width(s+'%');
					if(s>=0){$('.progress').attr('class','progress d5')}
					if(s>=8){$('.progress').attr('class','progress d25')}
					if(s>=25){$('.progress').attr('class','progress d50')}
					if(s>=50){$('.progress').attr('class','progress d75')}
					if(s>=75){$('.progress').attr('class','progress d100')}
					if(num==12){
						$('.progress-bar').remove();
						$('.progressbg').fadeOut(1000,function () {
							$('.progressbg').remove();
							$('body').css('overflow','auto');
						})
					}
				}
				
				imgObj.onerror=function(){
					$('.progress-bar').width(100+'%');
					$('.progress-word').html('100%');
					$('.progress-bar').remove();
					$('.progressbg').fadeOut(1000,function () {
						$('.progressbg').remove();
						$('body').css('overflow','auto');
					})
				}
			}
		}
		loadingFn();

})