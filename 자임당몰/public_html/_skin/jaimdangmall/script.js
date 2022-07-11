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

/* 체크박스 전체선택 */
/* example 
<input type="checkbox" onclick="cartCheckAll(this.checked)">
*/
function cartCheckAll(checked) {
	$(':checkbox[name^="cno["], :checkbox[name^="wno["]').attrprop('checked', checked);
}

/* 토글 */
function toggle_view(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('display') == 'none') {
		obj.addClass('active');
		search.show();
		$('.box_sub').show();
		$('.box_sub').css('opacity','1');
	} else {
		obj.removeClass('active');
		search.hide();
	}
}

function toggle_search(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('visibility') == 'hidden') {
		search.fadeIn();
		search.css('visibility','visible').css('opacity','1');
		$('#search .toggle_search').show().css('opacity','1');
		search.css('height','100vh');
		setTimeout(function(){
			$('.search_box').css('opacity','1');
			$('#box_search form .toggle_search').css('opacity','1');
		},700) 
		obj.addClass('active');
	} else {
		obj.removeClass('active');
		$('#box_search form .toggle_search').css('opacity','0');
		$('.search_box').css('opacity','0');
		search.css('opacity','0');
		setTimeout(function(){
			search.css('visibility','hidden').css('opacity','0');
		},200) 
		
		// setTimeout(function(){
		// 	search.css('visibility','hidden');
		// 	$('.search_box').css('opacity','0');
		// 	$('#header .search form .toggle_search').css('opacity','0');
		// },300) 
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

/* menubox slideup , down */
function toggle_selectbox(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('display') == 'none') {
		obj.addClass('active');
		search.slideDown(800);
	} else {
		obj.removeClass('active');
		search.slideUp(800);
	}
}

/* 스크롤 이동 */
$(window).scroll(function(){
	var y=$(this).scrollTop();
	if( y > 300 ){
		$('.btn_scroll').fadeIn();
	} else {
		$('.btn_scroll').fadeOut();
	}
	if ($('.gnb').hasClass('fixed')) {
		if( y > 230 ){
			$('.favorite .viewsub').fadeIn();
		} else {
			$('.favorite .viewsub').fadeOut();
		}
	}
	if( y > 100 ){
		$('#header .lnb').addClass('fixed');
	} else {
		$('#header .lnb').removeClass('fixed');
	}
});
function scrollup(){
	$('html, body').animate({scrollTop:0}, 'slow');
}
function scrolldown(){
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
}

// 헤더 상단 카테고리 자동 노출
$(window).load(function(){
	$('#header .lnb .box_shop .area li[data-cate-level]').each(function(){
		if ($(this).data('cate-level') == 2) {
			if($(this).next().data('cate-level') > 1) $(this).append('<ul class="mid_cate"><li class="all sml"><a href="'+$(this).find('>a').attr('href')+'">전체보기</a></li></ul>').addClass('mid');
		}else if($(this).data('cate-level') > 1 && $(this).prev().find('> ul')) {
			$(this).prev('li[data-cate-level="2"]').find('> ul').append($(this));
		}
	});
})