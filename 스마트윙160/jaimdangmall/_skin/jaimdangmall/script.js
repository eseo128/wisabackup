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

function toggle_search(selector, obj){
	var search = $('#'+selector+'');
	var obj = $(obj);
	if (search.css('visibility') == 'hidden') {
		search.css('visibility','visible');
		search.css('height','1080px');
		$('#search .toggle_search').show().css('opacity','1');
     	setTimeout(function(){
     			$('.search_box').css('opacity','1');
     			$('#header .search form .toggle_search').css('opacity','1');
     	},700) 
		obj.addClass('active');
	} else {
		search.css('visibility','hidden');
		search.css('height','0');
		setTimeout(function(){
			$('.search_box').css('opacity','0');
			$('#header .search form .toggle_search').css('opacity','0');
		},300) 
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