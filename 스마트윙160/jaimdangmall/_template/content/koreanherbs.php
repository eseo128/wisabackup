<style>
    #cnt {padding-bottom:0;}
    #cnt .cntbody {width: 100%;}
    #header {background: none;}
    #header .gnb * {color:#fff;}
    #header .gnb .left_menu > li.language > a {background:url('{{$이미지경로}}/common/language_arrow.png') no-repeat right center;}
    #header .gnb h1 > a {background:url('{{$이미지경로}}/logo/logo.png') no-repeat center;}
    #header .gnb .right_menu > li .toggle_search {background:url('{{$이미지경로}}/button/hd_search.png') no-repeat center;}
    #header .lnb * {color:#fff;}
    #header .lnb .category > li > a:hover::after {display:inline-block; position:absolute; bottom:-2px; right:0; width:100%; height:1px; background-color:#fff; content:'';}
    #header .lnb .category > li.on > a::after {display:inline-block; position:absolute; bottom:-2px; right:0; width:100%; height:1px; background-color:#fff; content:'';}
    #header .lnb.fixed .category > li > a:hover::after {background-color:#000;}
    #header .lnb.fixed .category > li.on > a::after {background-color:#000;}
</style>

<div id="koreanherbs">
    <div class="chapter_1 about_brand_main about_brand">
        <div class="video">
            <iframe width="1903" height="1070" src="https://player.vimeo.com/video/719700110?h=7afb25b460?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;&amp;muted=1&amp;background=1" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>
        </div>
        <div class="text_box brand">
            <h4>자연에 스스로를 맡기다</h4>
            <div class="text">
                <p>
                한의학에서 유래한 우수한 자연원료와<br>다년간 임상의 경험을 담아 자임당은 원료의 선별부터,<br>직접 연구와 개발하여 제조, 출고까지<br>한약 전문가들의 손을 거쳐 탄생한 브랜드입니다.
                </p>
            </div>
    	</div>       
    </div>
    <div class="chapter_2 about_brand">
    	<div class="text_box">
            <h4>자임당의 이유있는 자신감<br>노하우를 더하여 안전하고 건강하게,</h4>
            <div class="text">
                <p>
                깐깐하게 엄선한 천연 원재료와<br>영양손실은 적고 흡수율을 높이기 위해<br>자임당 한의원과 공동 연구하여 탄생한 최적의 배합비 포뮬러
                </p>
            </div>
    	</div>         	         	
    </div>
    <div class="chapter_3 about_brand">
   		<div class="text_box">
            <h4>자연만을 배합하여 담은<br>고품질의 한방 식품</h4>
            <div class="text">
                <p>
                자연에서 찾아낸 전통원료의 영양분을 고농축하여<br>자임당만의 배합레시피로 만들어 낸 한방식품으로,<br>화학 성분없이 안전하고 간편하게 드실 수 있습니다.
                </p>
            </div>
    	</div>
    </div>
</div>
<script type="text/javascript">
//스크롤 감도 조절
    $(function(){
        
        var $window = $(window);        //Window object
        
        var scrollTime = 1.2;           //Scroll time
        var scrollDistance = 250;       //Distance. Use smaller value for shorter scroll and greater value for longer scroll
            
        window.addEventListener('mousewheel', wheelScrollEvent, {passive: false});
    	window.addEventListener('DOMMouseScroll', wheelScrollEvent, {passive: false});
    	
    	function wheelScrollEvent(event){
    		event.preventDefault();
    		//var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    		var delta = event.wheelDelta/120 || -event.detail/3;
    		var scrollTop = $window.scrollTop();
    		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
    			
    		TweenMax.to($window, scrollTime, {
    			scrollTo : { y: finalScroll, autoKill:true },
   				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
   				autoKill: true,
   				overwrite: 5							
   			});
    	}
    });
</script>
<script>
	    //TweenMax.set($('.about_brand_main .text_box'), {x:-50, opacity:0});
	    TweenMax.set($('.about_brand .text'), {x:0, opacity:0});		
		TweenMax.set($('.about_brand').find('h4'), {x:0, opacity:0});
		$(window).on('load',function(){
			//TweenMax.to($('.about_brand_main .text_box'), 2, {x:0,opacity:1,ease:SlowMo.easeOut});
		});
		$(window).on('load resize',function(){
			var height = $('.img_area').height();			
			var imgHeight = $('.img_area img').height();
			var calc = (height - imgHeight) / 2;
			$('.img_area img').css('margin-top', calc);
		});
		$(window).on('scroll',function(){
			var wTop = $(window).scrollTop();			
			$('.about_brand').each(function(i){    			
				var cTop = $(this).offset().top;				
    			var gaps = parseInt(wTop - cTop) + (window.innerHeight/2);
				if(gaps > 0){
					TweenMax.to($(this).find('h4'), 1.5, {delay:0, x:0,opacity:1,ease:SlowMo.easeOut});
					TweenMax.to($(this).find('.text'), 1.5, {delay:1, x:0,opacity:1,ease:SlowMo.easeOut});
				}else{					
					TweenMax.to($(this).find('.text'),1,{x:0,opacity:0,ease:SlowMo.easeOut});
					TweenMax.to($(this).find('h4'), 1, {x:0,opacity:0,ease:SlowMo.easeOut});
				}
			});    		
		});
</script>
<script>
     var $video  = $('video'),
     $window = $(window); 
     $(window).on('load resize',function(){
     	var height = $window.height();
        $video.css('height', height);

        var videoWidth = $video.width(),
            windowWidth = $window.width(),
            marginLeftAdjust =   (windowWidth - videoWidth) / 2;
            //console.log(windowWidth, height);
      if(windowWidth < height){
       $video.css({
            'height':height, 
            'marginLeft' :marginLeftAdjust
       });	
      } else{
      	$video.css('width','100'+'%');
      	$video.css('height','auto');
      	$video.css('margin',0);
      }
      	var windowHeight = $window.height();
      	var positionH = windowHeight - 100 ; 
      
      $('.sound_control').css('top', positionH );
      console.log(windowHeight, positionH );
      
     });
     
     $(function(){
         $('.sound_control').on('click',function(e){
          	$(this).toggleClass('on');
          	soundCtl();
          	e.preventDefault();
          });
     });

     function soundCtl(){
    	 if( $('.sound_control').hasClass('on') ){
     		 $video.prop('muted', false); //unmute
     		 $('.sound_control').text('소리정지');
     	 }else{
     		 $video.prop('muted', true); //mute
     		 $('.sound_control').text('소리재생');
     	 }
    	 
     } 

     //lnb 메뉴 on 표시
    $(function(){
        $('#header .lnb .category > li.brand').addClass('on');
    });
 
</script>


