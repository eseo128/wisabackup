<style>
    #cnt {margin-top: -60px;}
    header {background: none;}
	header .gnb_box a.logo {background: url("{{$이미지경로}}/logo/logo.png") no-repeat center/cover;}
	header .gnb_box .gnb li.category a {background-image:url('{{$이미지경로}}/common/icon_category.png');}
	header .gnb_box .gnb li.search a {background-image:url('{{$이미지경로}}/common/hd_search.png');}
	header .gnb_box .gnb li.cart a {background-image:url('{{$이미지경로}}/common/hd_cart.png');}
	header .gnb_box .gnb li.cart a span {color:#fff;}
	header .gnb_box.fix a.logo {background: url("{{$이미지경로}}/logo/logo_black.png") no-repeat center/cover;}
	header .gnb_box.fix .gnb li.category a {top: 0; background-image:url('{{$이미지경로}}/common/icon_category_black.png');}
	header .gnb_box.fix .gnb li.search a {top: 0; background-image:url('{{$이미지경로}}/common/hd_search_black.png');}
	header .gnb_box.fix .gnb li.cart a {top: 0; background-image:url('{{$이미지경로}}/common/hd_cart_black.png');}
	header .gnb_box.fix .gnb li.cart a span {color:#000;}
</style>

<div id="brandstory">
    <div class="chapter_1 about_brand_main about_brand">
        <div class="text_box brand">
            <h4>자연에 스스로를 맡기다</h4>
            <div class="text">
                <p>
                한의학에서 유래한 우수한 자연원료와<br>다년간 임상의 경험을 담아 자임당은 원료의 선별부터,<br>직접 연구와 개발하여 제조, 출고까지<br>한약 전문가들의 손을 거쳐 탄생한 브랜드입니다.
                </p>
            </div>
    	</div>       
    </div>
    <div class="chapter_2 about_brand about_brand_sub">
    	<div class="text_box">
            <h4>자임당의 이유있는 자신감<br>노하우를 더하여<br>안전하고 건강하게,</h4>
            <div class="text">
                <p>
                깐깐하게 엄선한 천연 원재료와<br>영양손실은 적고 흡수율을 높이기 위해<br>자임당 한의원과 공동 연구하여 탄생한 최적의 배합비 포뮬러
                </p>
            </div>
    	</div>         	         	
    </div>
    <div class="chapter_3 about_brand about_brand_sub">
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
<script>
        TweenMax.set($('.about_brand_sub .text'), {x:0, opacity:0});
        TweenMax.set($('.about_brand.chapter_1 .text_box'), {x:-50, opacity:0});
        TweenMax.set($('.about_brand_sub').find('h4, span, p'), {x:0, opacity:0});
        $(window).on('load',function(){
            TweenMax.to($('.about_brand.chapter_1 .text_box'), 1.5, {x:0,opacity:1,ease: SlowMo.easeOut});
        });
        $(window).on('scroll',function(){
            var wTop = $(window).scrollTop();           
            $('.about_brand_sub').each(function(i){               
                var cTop = $(this).offset().top;                
                var gaps = parseInt(wTop - cTop) + (window.innerHeight/2);
                if(gaps > 0){
                    TweenMax.to($(this).find('h4, span, p'), 1.5, {delay:0, x:0,opacity:1,ease: SlowMo.easeOut});
                    TweenMax.to($(this).find('.text'), 1.5, {delay:1, x:0,opacity:1,ease: SlowMo.easeOut});
                }else{                  
                    TweenMax.to($(this).find('.text'),1,{x:0,opacity:0,ease: SlowMo.easeOut});
                    TweenMax.to($(this).find('h4, span, p'), 1, {x:0,opacity:0,ease: SlowMo.easeOut});
                }
            });         
        });
    </script>


