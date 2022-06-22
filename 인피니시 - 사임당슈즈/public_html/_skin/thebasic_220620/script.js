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
		search.show();
		obj.addClass('active');
	} else {
		search.hide();
		obj.removeClass('active');
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

/* 상단 고정 */
function hd_fix(){
	var y = $(this).scrollTop();
	var lnb_fix = $('#header .lnb').offset().top;
	if( y > lnb_fix){
		$('#header').addClass('fixed');
	} else {
		$('#header').removeClass('fixed');
	}
}
$(document).ready(function(){
	hd_fix();
});
$(window).scroll(function(){
	hd_fix();
});

/* 상단 검색 */
function search_view(selector){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('visibility') == 'hidden') {
		search.addClass('active');
		obj.addClass('active');
	} else {
		search.removeClass('active');
		obj.removeClass('active');
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
});
function scrollup(){
	$('html, body').animate({scrollTop:0}, 'slow');
}
function scrolldown(){
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
}

$(window).load(function(){
	/* 사용자리스트5 분류 레이아웃 재구성 
	<li data-cate-code="{{$분류고유코드}}" data-cate-level="{{$분류레벨}}">{{$분류명(링크포함)}}</li>
	=>
	<li>
		<a href="{{$분류링크}}" class="big">{{$분류명}}</a>
		<ul class="child">
			<li>{{$분류명(링크포함)}}</li>
		</ul>
	</li>	
	*/
	
	$('.lnb > .category > .inner > ul > li[data-cate-level]').each(function(){
		if ($(this).data('cate-level') == 1) {
			if($(this).next().data('cate-level') > 1) $(this).append('<ul class="child"></ul>')
		}else if($(this).data('cate-level') > 1 && $(this).prev().find('> ul.child')) {
			$(this).prev('li[data-cate-level="1"]').find('> ul.child').append($(this));
		}

		$('.lnb > .category').addClass('complete');
	});
});