//JQ jquery.Customscroll.js

;(function($) {
	$.fn.Mscrool = function(options) {
		var dft = {
			//以下为该插件的属性及其默认值
			scrbarHof: '20', //滚动条的高度偏移调整
			Conwhite: '0', //内容留白设置
			scrlspeed: '40', //鼠标滚轮速度
			scrlHeight:'',//滚动条整体高度接收px和%
		};
		var ops = $.extend(dft, options),
			_this = $(this);
		_this.append("<div class='BSidebar'><span class='bar'></span><span class='wire'></span></div>");
		_this.height(ops.scrlHeight);
		var Bcon = _this.find('.Bcon'),
			BSidebar = _this.find('.BSidebar'),
			bar = BSidebar.children('.bar'),
			wire = BSidebar.children('.wire');
		
		function autobarH(){
            var barh = _this.outerHeight() - ops.scrbarHof;
            BSidebar.height(barh);
       }
		
		//PC滚动条事件注册
		_this.bind({
				mouseenter: function() {
					if(Bcon.height() > BSidebar.height()) {
						autobarH();
						BSidebar.stop().fadeIn('350');
						mousefn();
						mousewhfn();
					} else {
						Bcon.animate({
							'top': 0
						}, 'slow');
					}
				},
				mouseleave: function() {
					BSidebar.stop().fadeOut('350');
				}
			})
			//设备判断
		function isMobileDevice() {
			var sUserAgent, bIsIpad, bIsIphoneOs, bIsMidp, bIsUc7, bIsUc, bIsAndroid, bIsCE, bIsWM
			sUserAgent = navigator.userAgent.toLowerCase();
			bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
			bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
			bIsMidp = sUserAgent.match(/midp/i) == "midp";
			bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
			bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
			bIsAndroid = sUserAgent.match(/android/i) == "android";
			bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
			bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
			if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
				return true;
			} else {
				return false;
			}
		}
		//mobile滚动条事件注册
		if(isMobileDevice()) {
			_this.unbind('mouseenter').unbind('mouseleave');			
			mobileS();
		}

		//鼠标拖动滚动条
		function mousefn() {
			BSidebar.mousedown(function() {
				_this.unbind('mouseleave');
				$(document).mousemove(function(event) {
					var y, tp, bil, s
					y = event.pageY - parseInt(BSidebar.offset().top) - 15;
					tp = BSidebar.height() - bar.height();
					if(y > tp) {
						y = tp;
					}
					if(y < 0) {
						y = 0;
					}
					bar.css('top', y);
					bil = y / tp
					s = bil * (Bcon.height() + Number(ops.Conwhite) - _this.height());
					Bcon.css('top', -s);
					return false;
				})
				$(document).mouseup(function() {
					$(document).off('mousemove');
					_this.bind('mouseleave', function() {
						BSidebar.stop().fadeOut('350');
					});
				})
				return false;
			})
		}
		//鼠标滚轮
		function mousewhfn() {
			_this.mousewheel(function(event, delta) {
				var v, conT, lastT, conh, bili, barh, barT, timer
				conT = parseInt(Bcon.css('top'));

				function wheel() {
					v = delta * Number(ops.scrlspeed);
					lastT = conT + v;
					conh = Bcon.height() + Number(ops.Conwhite) - _this.height();
					if(lastT < -conh) {
						lastT = -conh;
					}
					if(lastT > 0) {
						lastT = 0
					}
					Bcon.css('top', lastT);
					bili = lastT / conh;
					barh = BSidebar.height() - bar.height();
					barT = bili * barh
					bar.css('top', -barT);
				}
				timer = setTimeout(wheel, 0);
				return false;
			})
		}

		function mobileS() {
			var tp = 0,
				nub = 0,
				bart = 0,
				smnub = 0,
				abil = 0,
				bbil = 0,
				conh, barh;
			_this.on('touchstart', function(event) {
				if(Bcon.height() > _this.height()) {
					autobarH();
					conh = Bcon.height() + Number(ops.Conwhite) - _this.height();
					barh = BSidebar.height() - bar.height();
					BSidebar.stop().fadeIn('350');
					nub = -(Math.abs(tp));
					var touch = event.originalEvent.changedTouches[0];
					var startY = touch.pageY;
					_this.on('touchmove', function(event) {
						var touch, moveY, s
						touch = event.originalEvent.changedTouches[0];
						moveY = touch.pageY;
						s = (startY - moveY);
						tp = nub - s;
						if(tp < -conh) {
							tp = -conh
						}
						if(tp > 0) {
							tp = 0
						}
						abil = tp / conh;
						bart = abil * barh;
						if(bart > 0) {
							bart = 0;
						}
						if(bart < -barh) {
							bart = -barh
						}
						Bcon.css('top', tp);
						bar.css('top', -bart);
					})
					_this.on('touchend', function(event) {
						nub = tp;
						BSidebar.stop().fadeOut('350');
						_this.off('touchmove');
					})
				} else {
					Bcon.animate({
						'top': 0
					}, 'slow');
				}
			})
			bar.on('touchstart', function(event) {
				smnub = Math.abs(bart);
				BSidebar.stop().fadeIn('350');
				var touch = event.originalEvent.changedTouches[0];
				var startY = touch.pageY;
				$(document).on('touchmove', function(event) {
					var touch, moveY, s
					touch = event.originalEvent.changedTouches[0];
					moveY = touch.pageY;
					s = (startY - moveY);
					bart = smnub - s;
					bbil = bart / barh;
					tp = bbil * conh;
					if(bart > barh) {
						bart = barh
					}
					if(bart < 0) {
						bart = 0
					}
					if(tp > conh) {
						tp = conh;
					}
					if(tp < 0) {
						tp = 0
					}
					bar.css('top', bart);
					Bcon.css('top', -tp);
					return false;
				})
				$(document).on('touchend', function(event) {
					smnub = tp;
					nub = tp;
					BSidebar.stop().fadeOut('350');
					$(document).off('touchmove');
				})
				return false;
			})
		}
	}
})(jQuery);