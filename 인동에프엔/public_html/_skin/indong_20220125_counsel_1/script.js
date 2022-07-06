/* img hover */
/* example 
<img src="/_image/common/이미지.jpg" alt="" title="" onmouseover="imgOver(this)" onmouseout="imgOver(this,'out')"> 
*/
function imgOver(imgEl,opt) {
	if(imgEl.getAttribute('checked')) return;
	var src = imgEl.getAttribute('src');
	var ftype = src.substring(src.lastIndexOf('.'), src.length);
	if (opt == 'out') imgEl.src = imgEl.src.replace("_over"+ftype, ftype);
	else imgEl.src = imgEl.src.replace(ftype, "_over"+ftype);
}

/* 즐겨찾기 */
function addBookmark(){
	var url = root_url;
	var title = document.title;
 	if(window.sidebar && window.sidebar.addPanel){
		/* Mozilla Firefox Bookmark - Works With Opening In A Side Panel Only */
		window.sidebar.addPanel(title, url, "");
	}else if(window.opera && window.print) {
		/* Opera Hotlist */
		alert("이 브라우저에서는 즐겨찾기 기능을 사용할 수 없습니다.nCtrl 키와 D 키를 동시에 눌러서 즐겨찾기에 추가할 수 있습니다.");
		return true;
	}else if(window.external){
		/* IE Favorite */
		try{
			window.external.AddFavorite(url, title);
		}catch(e){
			alert("이 브라우저에서는 즐겨찾기 기능을 사용할 수 없습니다.nCtrl 키와 D 키를 동시에 눌러서 즐겨찾기에 추가할 수 있습니다.");
		}
	}else{
		/* Other - Google Chrome, Safari */
		alert("이 브라우저에서는 즐겨찾기 기능을 사용할 수 없습니다.nCtrl 키와 D 키를 동시에 눌러서 즐겨찾기에 추가할 수 있습니다.");
	}
}

/* 체크박스 전체선택 */
/* example 
<input type="checkbox" onclick="cartCheckAll(this.checked)">
*/
function cartCheckAll(checked) {
	$(':checkbox[name^="cno["], :checkbox[name^="wno["]').attrprop('checked', checked);
}

/* 토글 */
function toggle_view(selector, obj, type){
	var target = $('#'+selector+'');
	var obj = $(obj);
	if (target.css('display') == 'none') {
		if(type == 'slide') {
			target.slideDown(200);
		} else if(type == 'fade') {
			target.fadeIn(200);
		} else {
			target.show();
		}
		obj.addClass('active');
		if (selector == 'color_option'){
			$('.color_dimmed').addClass('open');
			$('#detail .wrap_det .info_view > .info > .info_list .select_color').addClass('active');
		}
	} else {
		if(type == 'slide') {
			target.slideUp(200);
		} else if(type == 'fade') {
			target.fadeOut(200);
		} else {
			target.hide();
		}
		obj.removeClass('active');
		if (selector == 'color_option'){
			$('.color_dimmed').removeClass('open');
			$('#detail .wrap_det .info_view > .info > .info_list .select_color').removeClass('active');
		}
	}
}

/* 토글 퀵메뉴 */
function toggle_quick(name) {
	var quick = $('.side_quick#'+name);
	if($('.side_quick#'+name).hasClass('active')) {
		quick.removeClass('active');
		//$('body').removeClass('quick_active');
		if (name == 'smart_search'){
			//$('#header .header_dimmed').removeClass('open');
		}
		if (name == 'quick_cart'){
			//$('#header .header_dimmed2').removeClass('open');
		}
	}
	else {
		quick.addClass('active');
		//$('body').addClass('quick_active');
		$('.side_quick').not(quick).removeClass('active');
		if (name == 'smart_search'){
			//$('#header .header_dimmed').addClass('open');
		}
		if (name == 'quick_cart'){
			//$('#header .header_dimmed2').addClass('open');
		}
	}
}

/* 검색 딤드 끄기 */
$(function(){
	$('#header .gnb .gnb_info > ul > li.icon.cart > a').click(function(){
	  $('#header .header_dimmed').removeClass('open');
	});
});


/* 레이어뷰 */
function layer_view(selector){

	// 마이페이지 주문내역에서 후기작성 시 닫기버튼 누르면 뒤로가기
	if( this_url.indexOf('shop/product_review.php?pno=') != -1 ) {
		history.back();
		return false;
	}
	// 마이페이지 주문내역에서 후기작성 시 닫기버튼 누르면 뒤로가기

	var target = $('#'+selector+'');
	var other = $('.layer_layout').not(target);
	var topVal = $(window).scrollTop() + 100;
	if( (selector == "prd_rev_layer_write" || selector =="prd_qna_layer_write") && target.css('display') == 'none'){
		$("form").each(function() {
			this.reset();
		});
	}

	if (target.css('display') == 'none') {
		target.css({'top' : topVal+'px'}).show();
		if(other.length || other.is(':visible')) {
			other.hide();
		}
	} else {
		target.hide();
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

//상단배너, 상단 
function setCookie(name, value, expiredays){
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
}
$(document).ready(function(){
	var cookiedata = document.cookie;
	if(cookiedata.indexOf('toughcookie=done') > 0 ){
		$('#top_bnr').css('display', 'none');
	} else {
		$('#top_bnr').css('display', 'block');
	}
});
function todayclose(){
	setCookie('toughcookie', 'done', 1);
	$('#top_bnr').css('display', 'none');
	$('#top_bnr').css('height', '0px');
	$('#header').css('height', $('#header .header_wrap .gnb').outerHeight());
}

/* 스크롤 이동 */
$(window).scroll(function(){
	var y=$(this).scrollTop();
	var w_height = $(window).height();
	try{var ft_top = $('#footer').offset().top;}catch(e){}
	if( y > 300 ){
		$('.btn_scroll_top').fadeIn();
		if(y + w_height > ft_top + 80) {
			$('.btn_scroll_top').css('bottom', (y + w_height) - ft_top + 10);
		} else {
			$('.btn_scroll_top').css('bottom', 80);
		}
	} else {
		$('.btn_scroll_top').fadeOut();
	}
	/* 211111 */
	if ($('#top_bnr').css('display') == 'none')
	{
		if( y > 0 ){
			$('#header').addClass('fix');
			$('.gnb').removeClass('open');
		} else {
			$('#header').removeClass('fix');
			
		}
	} else {
		if( y > 47 ){
			$('#header').addClass('fix');
			$('.gnb').removeClass('open');
		} else {
			$('#header').removeClass('fix');
		}
	} 
});
function scrollup(){
	$('html, body').animate({scrollTop:0}, 'slow');
}
function scrolldown(){
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
}

$(document).ready(function(){

	//상품 리스트 필터 
	$('.filterbox > ul > li > .select').on('click', function(e) {
		e.preventDefault();

		var target = $(this);
		var list = target.next('.list');

		if(list.is(':visible')) {
			list.slideUp(200);
		}
		else {
			list.slideDown(200);
		}

		target.parent().siblings().find('.list').not(list).slideUp(200);
	});

	//브랜드 토글
	$('#header .lnb .toggle').on('click', function(e) {
		e.preventDefault();
		var target = $(this).closest('li').find('.nav_shop2');

		if(target.css('display') == 'none') {
			target.css({'display' : 'block'});
			$(this).addClass('open');
		}else {
			target.css({'display' : 'none'});
			$(this).removeClass('open');
		}
		target.closest('.nav_shop1').find('.nav_shop2').not(target).css({'display' : 'none'});
		target.closest('.nav_shop1').find('.nav_shop2').not(target).parent().find('.toggle').removeClass('open');
	});

	//lnb 토글
	$('#header .lnb .tgg > a').on('click', function(e) {
		e.preventDefault();

		var target = $(this).next();

		if(target.is(':visible')) {
			target.slideUp(200);
		}
		else {
			target.slideDown(200);
		}
		target.parent().siblings().find('.nav_shop3').not(target).slideUp(200);
	});


	$(document).on('mouseover', '#header > .header_wrap > .gnb > .dropdown > .cate > .title', function () {
		$('.gnb').addClass('open');
		$('.header_dimmed').addClass('open');
		//$('#header .header_wrap .gnb .dropdown .lnb_wrap').addClass('open');
		$(window).scroll(function(){
			$('.gnb').addClass('open');
			$('.header_dimmed').addClass('open');
			//$('#header .header_wrap .gnb .dropdown .lnb_wrap').addClass('open');
		});
	});
	$(document).on('mouseleave', '#header > .header_wrap > .gnb .lnb_wrap', function () {
		$('.gnb').removeClass('open');
		$('.header_dimmed').removeClass('open');
		$('#header .header_wrap .gnb .dropdown .lnb_wrap').removeClass('open');
		$(window).scroll(function(){
			$('.gnb').removeClass('open');
			$('.header_dimmed').removeClass('open');
			//$('#header .header_wrap .gnb .dropdown .lnb_wrap').removeClass('open');
		});
	});
	$(document).on('mouseleave', '#header > .header_wrap > .gnb > .dropdown > .cate > .title > a', function () {
		$('.gnb').removeClass('open');
		$('.header_dimmed').removeClass('open');
		$(window).scroll(function(){
			$('.gnb').removeClass('open');
			$('.header_dimmed').removeClass('open');
			//$('#header .header_wrap .gnb .dropdown .lnb_wrap').removeClass('open');
		});
	});

	// About IDF 토글
	$('#header .lnb > .category .about_title').on('click', function(e) {
		e.preventDefault();

		var target = $(this).next();

		//if(target.is(':visible')) {
		if(target.css("display") == "block"){
			target.slideUp(200);
		}
		else {
			target.slideDown(200);
		}
	});

	//검색영역 외 다른곳 클릭시 닫기
	$(document).click(function(e){
		if (!$(e.target).is('.filterbox * ')) {
			$('.filterbox > ul > li > .select').each(function(idx) {
				var target = $(this);
				var list = target.next('.list');
				if(list.is(':visible')) {
					list.slideUp(200);
				}
				target.parent().siblings().find('.list').not(list).slideUp(200);
			});
		}
	});
	
});



