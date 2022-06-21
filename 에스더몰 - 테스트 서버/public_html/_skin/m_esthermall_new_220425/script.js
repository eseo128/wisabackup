////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  ▒   IE8이하 버전에서 HTML5사용하기
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.createElement('header');
document.createElement('footer');
document.createElement('hgroup');
document.createElement('nav');
document.createElement('section');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  ▒  convertible list - zardsama
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function chgListSkin(listname, type) {
	var list = $('.'+listname);
	if(list.length < 1) return;

	var tabs = $('.list_type_'+listname).find('li');
	tabs.each(function(idx) {
		var img = $(this).find('img');
		if(type == idx) {
			img.attr('src', skin_img_url+'/shop/list_type'+idx+'_on.png');
		} else {
			img.attr('src', skin_img_url+'/shop/list_type'+idx+'.png');
		}
	});

	if(type == 0) {
		list.find('.prd_basic').addClass('col2');
		list.find('.prd_basic').removeClass('col1');
		list.find('.prd_basic').removeClass('col3');

	} else if(type == 1) {
		list.find('.prd_basic').addClass('col3');
		list.find('.prd_basic').removeClass('col1');
		list.find('.prd_basic').removeClass('col2');
	
	} else {
		list.find('.prd_basic').addClass('col1');
		list.find('.prd_basic').removeClass('col2');
		list.find('.prd_basic').removeClass('col3');
	}
	setCookie(listname+'_config', 's'+type);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  ▒  infinifyScroll - zardsama
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$.fn.IFScroll = function(speed, wait) {
	var $this = this;
	$this.IFScroll.speed = speed;
	$this.IFScroll.wait = wait;
	$this.IFScroll.len = $this.children().length;
	$this.IFScroll.direction = 1;
	$this.IFScroll.order = 0;
	$this.IFScroll.standby = true;
	$this.IFScroll.obj = $this[0];
	if(!$this.IFScroll.obj) return;
	$this.IFScroll.el = $this.IFScroll.obj.innerHTML;

	$this.css({"width":"100%", "overflow":"hidden", "white-space":"nowrap"});
	$this.IFScroll.orsize = $this.attr('scrollWidth');

	// window 사이즈 변경시 이벤트
	$(window).resize(function() {
		if($this.width() >= $this.IFScroll.orsize) { // 스크롤보다 큰 창크기
			$this.html($this.IFScroll.el);
			$this.IFScroll.status = false;
		} else if($this.IFScroll.status == false) { // 스크롤 동작가능한 창크기
			$this.IFScroll.obj.innerHTML += $this.IFScroll.el+$this.IFScroll.el;
			$this.IFScroll.point = $this.IFScroll.startpoint;
			$this.IFScroll.order = 0;
			$this.IFScroll.status = true;
		}
	});

	// 초기 위치 지정
	$this.IFScroll.setPoint = function(event) {
		if(!$this.IFScroll.point) {
			$this.IFScroll.startpoint = $this.attr('scrollWidth');
			$this.IFScroll.point = $this.IFScroll.startpoint

			if($this.width() >= $this.IFScroll.orsize) {
				$this.IFScroll.status = false;
				return;
			}

			$this.IFScroll.status = true;
			$this.IFScroll.obj.innerHTML += $this.IFScroll.el+$this.IFScroll.el;
			$this.attr('scrollLeft', $this.IFScroll.point);
		}
	}

	// 이동 처리
	$.fn.IFScrollMove = function(chgDirection) {
		if($this.width() >= $this.IFScroll.orsize) {
			return;
		}

		// 마우스오버 멈춤
		if(chgDirection) {
			$this.IFScroll.direction = chgDirection;
			if($this.IFScroll.standby != true) return;
			if($this.IFScroll.wait > 0) $this.IFScrollStop();
		}
		if($this.IFScroll.standby != true) return;
		$this.IFScroll.standby = false;

		// 초기위치 설정
		$this.IFScroll.setPoint();
		if($this.IFScroll.order == 0) {
			$this.attr('scrollLeft', $this.IFScroll.point);
		}

		// 태그사이 공백 보정
		var item1 = $this.IFScroll.obj.children[$this.IFScroll.order+$this.IFScroll.len];
		var item2 = $this.IFScroll.obj.children[$this.IFScroll.order+$this.IFScroll.len+chgDirection];
		var margin = (item1 && item2) ? Math.abs(($(item1).offset().left-$(item2).offset().left+(item1.offsetWidth*chgDirection))) : 0;

		// 이동
		var item = $this.children($this.IFScroll.order);
		var dir = $this.IFScroll.direction > 0 ? "+=" : "-=";
		$this.animate({"scrollLeft":dir+(item.width()+margin)}, {"duration":this.speed, "queue":false, "complete":function(){
			$this.IFScroll.standby = true;
		}});

		// 다음 패턴 정의
		$this.IFScroll.order += $this.IFScroll.direction;
		if($this.IFScroll.order < 0) $this.IFScroll.order = $this.IFScroll.len-1;
		if($this.IFScroll.order >= $this.IFScroll.len) $this.IFScroll.order = 0;

		if($this.IFScroll.wait > 0 && chgDirection) {
			$this.IFScrollStart();
		}
	}

	// 자동 이동
	$.fn.IFScrollStart = function() {
		$this.IFScroll.timer = setInterval(function() {
			$this.IFScrollMove($this.IFScroll.direction);
		}, $this.IFScroll.wait);
	}

	// 자동이동 정지
	$.fn.IFScrollStop = function() {
		clearInterval($this.IFScroll.timer);
		$this.IFScroll.timer = null;
	}

	$this.IFScroll.setPoint();
	if(wait > 0) $this.IFScrollStart();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  ▒   etc
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 사이드메뉴 토글 */
function toggle_nav(name) {
	var obj_name = $('nav.'+name);
	if(obj_name.hasClass('is_show')) {
		$('body').removeClass('view_nav');
		obj_name.removeClass('is_show');
	}
	else {
		$('body').addClass('view_nav');
		obj_name.addClass('is_show');
	}
}

/* 토글 */
function toggle_view(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('display') == 'none') {
		search.show();
		obj.addClass('active');
	} else {
		search.hide();
		obj.removeClass('active');
	}
}

/* header 토글 */
function toggle_hd(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	$('#dimmed').css('z-index','10');

	if (search.css('display') == 'none') {
		search.show();
		obj.addClass('active');
		$('body').addClass('view_nav');

	} else {
		search.hide();
		obj.removeClass('active');
		$('body').removeClass('view_nav');
	}
}

/* 토글 poplayer */
function toggle_layer(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('display') == 'none') {
		$('body').removeClass('view_nav');
		search.show();
		obj.addClass('active');
	} else {
		search.hide();
		obj.removeClass('active');
		$('body').addClass('view_nav');
	}
}

/* 토글 slideup , down */
function toggle_slide(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('display') == 'none') {
		$('body').addClass('view_nav');
		search.slideDown();
		obj.addClass('active');
	} else {
		search.slideUp();
		obj.removeClass('active');
		$('body').removeClass('view_nav');
	}
}

/* 탭뷰 */
function tabover(name, no) {
	var tabs = $('.tab_'+name+'').find('li');
	tabs.each(function(idx) {
		var detail = $('.tabcnt_'+name+idx);
		var link = $(this).find('a');
		if(no == idx) {
			detail.show();
			link.addClass('active');
		} else {
			detail.hide();
			link.removeClass('active');
		}
	})
}

/* 슬라이드 탭뷰 */
function slidetabover(name, no) {
	var tabs = $('.tab_'+name+'').find('.swiper-slide');
	tabs.each(function(idx) {
		var detail = $('.tabcnt_'+name+idx);
		var link = $(this).find('a');
		if(no == idx) {
			detail.show();
			if (name == 'best'){
				link.addClass('checked');
			}
			else {
				link.addClass('active');
			}
		} else {
			detail.hide();
			if (name == 'best'){
				link.removeClass('checked');
			}
			else {
				link.removeClass('active');
			}
		}
	})
}

/* 전체체크 */
function cartCheckAll(checked) {
	$(':checkbox[name^="cno["], :checkbox[name^="wno["]').attrprop('checked', checked);
}

/* 검색결과 검색어순위 */
function searchrank() {
	if ($('#rank_search ol').css('display') == 'none') {
		$('#rank_search ol').slideDown('fast');
	} else {
		$('#rank_search ol').slideUp('fast');
	}
}

/* 주문조회상세, 주문서 토글 */
function toggle_next(obj){
	if ($(obj).next('div').css('display') == 'none'){
		$(obj).removeClass('active');
		$(obj).next('div').slideDown('fast');
	} else {
		$(obj).addClass('active');
		$(obj).next('div').slideUp('fast');
	}
}

/* 딤드클릭 */
$(window).ready(function(){
	$('#dimmed').click(function(){
		$('body').removeClass('view_nav');
		$('nav').removeClass('is_show')
	})
});

/* 스크롤 이동 */
// 기본
$(window).scroll(function(){
	y = $(this).scrollTop();
	if(y > 32) {
		$('header .header_wrap').addClass('fixed');
		$('.rollingBnr_wrap').addClass('fixed');
		$('.join_indicator').addClass('fixed');
		/* 스크롤시 poplayer & popup 숨김처리 */
		if ($('.poplayer').length > 0 || $('.popup').length > 0){
			$('.poplayer').hide();
			$('.popup').hide();
		}
	}else {
		$('header .header_wrap').removeClass('fixed');
		$('.rollingBnr_wrap').removeClass('fixed');
		$('.join_indicator').removeClass('fixed');
	}

	if( y > 300 ){
		$('footer .quick').fadeIn();
	} else {
		$('footer .quick').fadeOut();
	}
});

$(function(){
	var scroll_ing;
	var last = 0;
	var space = 5;
	var gnbH = $('header').outerHeight();
	
	$(window).scroll(function(event){
		scroll_ing = true;
	});
	setInterval(function() {
		if (scroll_ing) {
			scroll_ed();
			scroll_ing = false;
		}
	}, 100);
	function scroll_ed() {
		var st = $(this).scrollTop();
		if(Math.abs(last - st) <= space)
			return;
		if (st > last && st > gnbH){
			if($('#big_section').size() == 0) {
				if($('#main').size() > 0) {
					$('header .header_wrap').addClass('up').removeClass('down');
				}
				if($('.sale_add_page').size() > 0 || $('.board_community').size() > 0 || $('.board_event').size() > 0 || $('.board_new').size() > 0 || $('.content_story').size() > 0 ) {
					$('header .header_wrap').addClass('up').removeClass('down');
				}
			}
		} else {
			if(st + $(window).height() < $(document).height()){
				if($('#big_section').size() == 0) {
					if($('#main').size() > 0) {
						$('header .header_wrap').addClass('down').removeClass('up');
					}
					if($('.sale_add_page').size() > 0 || $('.board_community').size() > 0 || $('.board_event').size() > 0 || $('.board_new').size() > 0 || $('.content_story').size() > 0 ) {
						$('header .header_wrap').addClass('down').removeClass('up');
					}
				}
			}
		}
		last = st;
	}
});

function scrollup(){
	$('html, body').animate({scrollTop:0}, 'slow');
}

// 팝업창 body scroll 막기 ( 자동 딤처리 )
function stopBodyScroll(){
	$('body').addClass('view_nav');
}
function goBodyScroll(){
	$('body').removeClass('view_nav');
}

// 팝업창 body scroll 막기 ( 딤처리X )
function stopBodyScrollNoDimmed(){
	$('body').addClass('stopscroll');
}
function goBodyScrollNoDimmed(){
	$('body').removeClass('stopscroll');
}


$(window).ready(function(){
	// 헤더 상단 롤링배너
	function rollingBnr(){
        var rollring = $(".rollingBnr");
        var rollBnrHt = $(".rollingBnr li").height();

        var lastCopy = rollring.find("li:last-child").clone();
        rollring.prepend(lastCopy);
        
        $(".rollingBnr li").each(function(i){
            $(this).css("top", -(rollBnrHt) + (i * rollBnrHt));
        });

        setInterval(function(){
            var prev = rollring.find("li:first-child");
            var current = rollring.find("li:nth-child(2)").html();
            
            rollring.append(prev);
            
            $(".rollingBnr li").each(function(i){
                $(this).css("top", -(rollBnrHt) + (i * rollBnrHt));
                
                if(i==0){
                    var last = rollring.find("li:last-child");
                    last.html($(this).html());
                }
            });       
        }, 3000); // 롤링시간조정 (수치 1000은 1초를 의미합니다)
    }
    rollingBnr();


	// 헤더 검색창 내용지우기
	$('header .box_search .erase').on('click', function(){
		$(this).prev().val('').trigger('change').focus();
		$('#live_search_list').html('');
	});
	
	// nav 카테고리 자동 노출
	$('nav .category > ul > li[data-cate-level]').each(function(){
		if ($(this).data('cate-level') == 2) {
			$(this).append('<ul class="depth"><li><a class="all" href="' + $(this).find('>a').attr('href')+'">전체보기</a></li></ul>').find('>a');
		}else if($(this).data('cate-level') > 2 && $(this).prev().find('> ul')) {
			$(this).prev('li[data-cate-level="2"]').find('> ul').append($(this));
		}

		if($(this).index() == 0){
			$(this).children('a').addClass('on');
			$(this).children('.depth').show();
		}
	});

	// nav 카테고리 소분류 토글
	$('nav .category > ul > li > a').click(function(e) {
		e.preventDefault();
		var num = $('nav .category > ul > li > a').index(this);
		$('nav .category > ul > li > a').each(function(no){
			if (no == num){
				if($(this).next('.depth').css('display') == 'block') return;
				else {
					$(this).addClass('on');
					$(this).next('.depth').show();
				}
			} else {
				$(this).removeClass('on');
				$(this).next('.depth').hide();
			}
		});
		return false;
	});
	if ($('nav .service_slide .swiper-slide').length > 0)
	{
		// nav 서비스 슬라이드
		var navServiceSlide = new Swiper('nav .service_slide', {
			loop: false,
			//slidesPerView: '4.6',
			slidesPerView:'auto',
			spaceBetween: 5,
		});
	}
	if ($('nav .group_slide .swiper-slide').length > 0)
	{
		// nav 이벤트 & 브랜드 슬라이드
		var navGroupSlide = new Swiper('nav .group_slide' , {
			loop: false,
			slidesPerView: '1.5',
			spaceBetween: 10,
		});
	}

	// 상품정렬 
	var sortText = $('.sort .sort_opt strong').text();
	$('.sort .sort_text').text(sortText);
	$('.sort').on('click', function(){
		$(this).toggleClass('active').find('.sort_opt').toggle();
	});

	//allmenu sale 카테고리
	$('li[data-cate-code]').each(function(){
		// mall sale
		if ($(this).attr('data-cate-code') == '1246'){
			$(this).children('a').attr('href','/content/content.php?cont=esthermall_sale');
		}
		// formula sale
		else if ($(this).attr('data-cate-code') == '1227'){
			$(this).children('a').attr('href','/estherformula/content/content.php?cont=estherformula_sale');
		}
		// pet sale
		else if ($(this).attr('data-cate-code') == '1233'){
			$(this).children('a').attr('href','/estherpet/content/content.php?cont=estherpet_sale');
		}
	});

	// 메인 비주얼 슬라이드 (공통)
	if ($('#main .main_visual .swiper-slide').length > 0)
	{
		var main_visual = new Swiper('#main .main_visual', {
			loop: true,
			dots: true,
			centeredSlides:true,
			slidesPerView: 'auto',
			spaceBetween: 5,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '#main .swiper-pagination',
				clickable: true,
			},
		});
	}
	if ($('#main .benefit_slide .swiper-slide').length > 0)
	{
		// 메인 혜택배너 슬라이드 (공통)
		var benefit_slide = new Swiper('#main .benefit_slide', {
			slidesPerView: 1,
			spaceBetween: 5,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
			  el: '#main .swiper-pagination',
			  type: 'fraction',
			},
		});
	}
	if ($('.sale_add_page .brandsale_slide .swiper-slide').length > 0)
	{
		//추가페이지 sale 슬라이드 (공통)
		var brandsale_slide = new Swiper('.sale_add_page .brandsale_slide', {
			loop: true,
			centeredSlides:true,
			slidesPerView: 1.1,
			spaceBetween: 5,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
		});
	}
	if ($('.brand_tab_slide .swiper-slide').length > 0)
	{
		// brand_tab_slide (공통)
		var brand_tab_slide = new Swiper('.brand_tab_slide', {
			loop: false,
			slidesPerView: 'auto',
			spaceBetween: 0,
		});
	}
	if($('.gnb_wrap .pet.Y').size() > 0 || $('.gnb_wrap .elastin.Y').size() > 0){
		brand_tab_slide = new Swiper('.brand_tab_slide' , {
			loop: false,
			slidesPerView: 'auto',
			initialSlide: 3, 
		});
	}

	// 게시판 스크립트 키워드 스타일
	$('#boardwrite .keyword.clickable > ul > li label input').each(function(){
		if ($(this).is(':checked')){
			$(this).parent('label').addClass('on');
		}
		$(this).on('click',function(){
			$(this).parent('label').toggleClass('on');
		});
	});

	// 게시판 스크립트 키워드 스타일 5개 이상 선택 불가
	$('#boardwrite .keyword.clickable > ul > li label input[type=checkbox]').on('click', function(){
		var count = $('#boardwrite .keyword.clickable > ul > li label input:checked[type=checkbox]').length;
		if(count > 5){
			alert('키워드는 최대 5개까지 선택이 가능합니다.');
			$(this).parent('label').removeClass('on');
			$(this).checked = false;
			return false;
		}
	});

});

