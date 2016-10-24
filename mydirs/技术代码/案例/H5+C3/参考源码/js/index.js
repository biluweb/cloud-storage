$(function () {
	
	/*document.body.onclick=function (event) {
		console.log(event);
	}*/	
	
	//touch事件还没有被列入到ECMAscript v3标准内，但是允许用兼容的方式出现
	/*document.body.ontouchstart=function (event) {
		console.log(event);
	}*/
	
	//兼容方式
	/*document.body.addEventListener('touchstart',function (event) {
		console.log(event.changedTouches[0]);
	})*/
	
	function loadingFn(){
		var num=0;
		var arry=['arr.png','page2/TV.png','page2/hand1.png','page2/hand2.png','page2/word.png','page3/1.png','page3/2.png','page3/3.png','page3/4.png','page3/hand.png','page3/word-down.png','page4/word-up.png','page4/bigCircle.png','page4/middleCircle.png','page4/smallCircle.png','page4/GO.png','page4/word-down.png'];
		for(var i=0; i<arry.length; i++){
			
			var imgObj=new Image();
			imgObj.src='img/'+arry[i];
			imgObj.onload=function(){
				num++;
				var s=parseInt((num/arry.length)*100);
				$('.loadWord').html(s+'%');
				if(num==17){
					$('.spinner').remove();
					$('.loadBg').fadeOut(1000,function () {
						$('.loadBg').remove();
					})
				}
			}
			imgObj.onerror=function(){
					$('.loadWord').html('100%');
					$('.spinner').remove();
					$('.loadBg').fadeOut(1000,function () {
						$('.loadBg').remove();
					})
			}
			
		}
		
	}
	loadingFn();
	
	
	
	//阻止微信端默认弹性行为
	$(document).on('touchstart',function (event) {
		event.preventDefault();
	});
	
	var aLi=$('.list>li');
	//一屏的高度
	var viewHeight=$(window).height();
	var nextorprevIndex,nowIndex,startY;
	
	function startFn(event){
		//得到touch数组
		var touch=event.originalEvent.changedTouches[0];
		startY=touch.pageY;
		nowIndex=$(this).index();
		aLi.on('touchmove.our',moveFn);
		aLi.on('touchend.our',endFn);
	}
	aLi.on('touchstart.our',startFn);
	
	function moveFn(event){
//		console.log('move');
		var touch=event.originalEvent.changedTouches[0];
		var moveY=touch.pageY;
		//得到移动距离
		var s=-(startY-moveY);
		
		if(startY>moveY){		//↑
			//如果是最后一张，应该看第0张
			if(nowIndex==3){
				nextorprevIndex=0;
			}else{
				nextorprevIndex=nowIndex+1;
			}
			aLi.eq(nextorprevIndex).addClass('current').siblings().removeClass('current');
			//这里需要正的
			aLi.eq(nextorprevIndex).show().css('top',viewHeight+s);	
		
		}else if(startY<moveY){		//↓
			
			if(nowIndex==0){
				nextorprevIndex=3;
			}else{
				nextorprevIndex=nowIndex-1;
			}
			
			aLi.eq(nextorprevIndex).addClass('current').siblings().removeClass('current');
			//这里需要负的
			aLi.eq(nextorprevIndex).show().css('top',(-viewHeight+s));
		}
	}
	
	function endFn(event){
		var touch=event.originalEvent.changedTouches[0];
		var endY=touch.pageY;
		aLi.eq(nextorprevIndex).addClass('current').siblings().removeClass('current');
		aLi.eq(nextorprevIndex).show().css('top',0);
		aLi.eq(nextorprevIndex).css('transition','.7s ease 0s');
		if(startX!=endX){
			aLi.off('.our');
		}
	}
	
	aLi.on('transitionEnd webkitTransitionEnd',function(event){
		if(aLi.is(event.target)){
			aLi.eq(nextorprevIndex).siblings().hide();
			aLi.eq(nextorprevIndex).addClass('inAnimate').siblings().removeClass('inAnimate');
			aLi.css('transition','');
			aLi.on('touchstart',startFn);
		}
	})
	
	
	
	
})
