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
/* 토글 */
function toggle_view2(obj){
	// var search = $('#'+selector+'');
	var obj = $(obj);
	if (!obj.hasClass('active')) {

		$('.btn_quickcart').removeClass('active');
		closeQuickCart(1, 'click');

		// search.show();
		obj.addClass('active');
		
	} else {
		// search.hide();
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
});
function scrollup(){
	$('html, body').animate({scrollTop:0}, 'slow');
}
function scrolldown(){
	$('html, body').animate({scrollTop:$(document).height()}, 'slow');
}

// 헤더 hover
function cateHover(cnt) {
	$('#header .fixed #depth_'+cnt).css('display', 'block');
	$('#depth_dimmed').show();
	$('#header .fixed .lnb > li.'+cnt).addClass('active');
	$('#depth_'+cnt+' .cate > li').hover(function() {
		$('#depth_'+cnt+' .cate > li').removeClass('selected');
		$(this).addClass('selected');
	});

	// 각각 페이지별 제어
	if($('#depth_'+cnt).hasClass('page_active')) {
		$('#depth_dimmed').hide();
	}
}
function cateOut(cnt) {
	$('#header .fixed #depth_'+cnt).css('display', 'none');
	$('#depth_dimmed').hide();
	$('#header .fixed .lnb > li.'+cnt).removeClass('active');
	$('#depth_'+cnt+' .cate > li').removeClass('selected');
	$('#depth_'+cnt+' .cate > li:first-child').addClass('selected');
}



//숫자 카운팅 효과
nCount = function(){
	$('.count_num').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: no_comma($(this).text())
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(number_format(Math.ceil(now)));
			}
		});
	});
}
function number_format(data){
	var tmp = '';
	var number = '';
	var cutlen = 3;
	var comma = ',';
	var i;

	data = data + '';

	var sign = data.match(/^[\+\-]/);
	if(sign) {
		data = data.replace(/^[\+\-]/, "");
	}

	len = data.length;
	mod = (len % cutlen);
	k = cutlen - mod;
	for (i=0; i<data.length; i++){
		number = number + data.charAt(i);

		if (i < data.length - 1){
			k++;
			if ((k % cutlen) == 0){
				number = number + comma;
				k = 0;
			}
		}
	}

	if(sign != null)
		number = sign+number;

	return number;
}
function no_comma(data){
	var tmp = '';
	var comma = ',';
	var i;

	for (i=0; i<data.length; i++){
		if (data.charAt(i) != comma)
			tmp += data.charAt(i);
	}
	return tmp;
}

// 스크롤 섹션 활성화
var count_status = null;
$(window).load(function(){
	contScroll = function(type){
		var transition = $('.transition');
		transition.each(function(){
			var y = $(window).scrollTop();
			var a = Math.floor($(this).offset().top-($(window).height()/1.5));
			var ac = Math.floor($('.count').offset().top-($(window).height()/1.5));
			if( y >= a ) {
				$(this).addClass('active');
			}
			if (y >= ac) {
				if(count_status == false) return;
				count_status = false;
				$('.count .number').addClass('count_num');
				nCount();
			}
		});
	}
	$(window).scroll(function() {
		contScroll();
	});
});



// 상단 배너 닫기 쿠키
function setCookie(name, value, expiredays){
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
}
$(document).ready(function(){
	var cookiedata = document.cookie;
	if(cookiedata.indexOf('toughcookie=done') > 0 ){
		document.getElementById('notice').style.display = 'none';
	} else {
		if(document.getElementById('notice')) document.getElementById('notice').style.display = 'block';
	}
});
function todayclose(){
	setCookie('toughcookie', 'done', 1);
	document.getElementById('notice').style.display = 'none';
}


// // sticky 배너 닫기 쿠키
// $(document).ready(function(){
// 	if(
// 		$('body > div').is("#skin_main_index_big_div") ||
// 		$('body > div').is("#skin_shop_big_section_big_div") ||
// 		$('body > div').is("#skin_shop_detail_big_div")
// 	){
// 		var cookiedata = document.cookie;
// 		if(cookiedata.indexOf('toughcookie2=done') > 0 ){
// 			document.getElementById('sticky_banner').style.display = 'none';
// 		} else {
// 			if(document.getElementById('sticky_banner')) document.getElementById('sticky_banner').style.display = 'block';
// 		}
// 	}
// });

function setCookie2(name, value, expiredays){
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
};
function todayclose2(){
	setCookie2('toughcookie2', 'done', 1);
	document.getElementById('sticky_banner').style.display = 'none';
};


//배너부분 탑배너 끄고 켰을때 fix 다르게
/* 스크롤 이동 */
$(window).scroll(function(){
	var y=$(this).scrollTop();
	var topBnr = $('#top_pop');

	if( y > 300 ){
		$('.btn_scroll').fadeIn();
	} else {
		$('.btn_scroll').fadeOut();
	}

	// 상단 고정
	if(topBnr.css('display') == 'block') {
		if( y > topBnr.height() ){
			$('.gnb').addClass('fixed');
		} else {
			$('.gnb').removeClass('fixed');
		}
	}else {
		if( y > 0 ){
			$('.gnb').addClass('fixed');
		} else {
			$('.gnb').removeClass('fixed');
		}
	}

		// 상단 고정
		if(topBnr.css('display') == 'block') {
			if( y > topBnr.height() ){
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		}else {
			if( y > 0 ){
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		}
});


//slick 페이징 카운트, 양 옆 이미지 삐져나오게
// $('.slide_visual').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	dots: true,
// 	infinite: true,
// 	speed: 400,
// 	autoplay: true,
// 	autoplaySpeed: 4000,
// 	variableWidth: true,
// 	centerMode:true,
// 	customPaging: function (slider, i) {
// 		return  '<a>'+(i + 1)+ ' / ' + (slider.slideCount)+'</a>';
// 	},
// });

//버튼 클릭시 복사기능
function clip(){
	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	url = url.split('board');
	url = url[0];
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("주소를 복사하였습니다.")
}

//visual 배너 137, 131, 112 클릭 시 회원전용 페이지 문구 안내 후 로그인 페이지로 연동
$(document).ready(function(){
	$('.main_visual .Y').click(function(e){ 
			e.preventDefault();
			var result = confirm('회원전용 페이지 입니다.'); 
			if(result==true) { 
				window.location.replace('{{$사이트주소}}/member/login.php');
				return true;
			} else {
				return;
			}
		});	
	});

	var gallery_no = document.location.href;
	if(gallery_no.match('1617')) {
		$('.board_goodbye').show();
	}
	else {
		$('.board_goodbye').remove();
	}

	var join_no = document.location.href;

if(join_no.match('/member/join_step2.php')){
	$('h2.subtitle.join').addClass('active');
} else if(join_no.match('/member/edit_step2.php')){
	$('h2.subtitle.edit').addClass('active');
}

//  //이미지 좌표 유동적으로 적용하기
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-rwdImageMaps/1.6/jquery.rwdImageMaps.min.js"></script> 
// $(document).ready(function(e) {
// 	$('img[usemap]').rwdImageMaps();
// });

//메뉴접고 피기
var first_view1 = true;
$('.note_title1').click(function(){
	if(first_view1){
		$('.note_content1').show();
		$(this).addClass('active');
		first_view1 = false;
	}else{
		$('.note_content1').hide();
		$(this).removeClass('active');
		first_view1 = true;
	}
});

//스크롤 스무스
$("a").on('click', function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
			window.location.hash = hash;
			});
		} 
	});

	//특정 문자 다른 문자로 치환하기
	$('.navi').each(function() {
		var text = $(this).text();
		$(this).html(text.replaceAll('>', '<span> ></span>'));
	});



//스크롤에 따라 메뉴 active
function scroll_page(){
	var body_h = $(this).scrollTop();
	var header_h = $('.header .gnb .common_menu').height();

	var tab_s = $('#goodbye2021 .spc_menu').offset().top;
	var tab_h = $('#goodbye2021 .spc_menu').height();

	if( body_h > tab_s - header_h){
		$('#goodbye2021 .menu').addClass('fixed');
	} else {
		$('#goodbye2021 .menu').removeClass('fixed');
	}
	$('#goodbye2021 .box').each(function(idx){
		var index = $(this).attr('data-pgrpindex');
		var hdFix = $('.header .gnb .common_menu').height() + $('#goodbye2021 .spc_menu .menu').height();
		var title = $('.title').outerHeight() + 1;
		var cntTop = $('#goodbye2021 .box'+index).offset().top - title - hdFix;
		var cntHeight = $('#goodbye2021 .box'+index).height();

		if(body_h >= cntTop && body_h <= cntTop + cntHeight) {
			$('#goodbye2021 .menu li').removeClass('active');
			$('#goodbye2021 .menu li.tab'+index).addClass('active');
		}
	});
}

//전체 체크박스, 개인 체크박스 체크 해제 시 전체 체크 박스도 해제
$(document).ready(function(){
	if($('input[class=del-chk]:checked').length==$('.del-chk').length){
		$('#chk_all').prop('checked',true);
	}else{
		$('#chk_all').prop('checked',false);
	}
});

$(document).on('click','.del-chk',function(){
	if($('input[class=del-chk]:checked').length==$('.del-chk').length){
		$('#chk_all').prop('checked',true);
	}else{
		$('#chk_all').prop('checked',false);
	}
});

$(document).on('click','#chk_all',function(){
	if($('#chk_all').is(':checked')){
		$('.del-chk').prop('checked',true);
	}else{
		$('.del-chk').prop('checked',false);
	}
});
function maskingId(id) { 
	var mask = id.split('').map(function(o, i)
	{if( i < 3 ){
		return o; 
	}else{ 
		return '*'; 
	} 
	}).join(''); 
	return mask; 
	}

	$(window).scroll(function(){
		var y=$(this).scrollTop();
		var headerh = $('#header').height();
		var titleh = $('.sub_title_txt').height();
		var bannerh = $('#big_section .bnr_slide_wrap').height();
	
		if( y > (headerh + titleh + bannerh) ){
			$('#big_section .midcate').addClass('fixed');
		} else {
			$('#big_section .midcate').removeClass('fixed');
		}
	});

	//특정 문자를 포함하고 있으면 css 변경
	$( '.subject .categorization:contains("진행중")' ).css( 'color', '#4280EC' );


	//html 가져온 뒤 match
	var categorization = $(".subject .categorization").html();

	if(categorization.match('진행중')) {
	$(".subject .categorization").addClass('cb');
	}else{
	$(".subject .categorization").removeClass('cb');
	}

	function link_all(code) {
		switch(code) {
			case 'SV001':
				$(".link_all").attr("href", "https://seconddoctorbreast.page.link/landing");
				break;
			case 'SV002':
				$(".link_all").attr("href", "https://seconddoctorprostate.page.link/landing");
				break;
			case 'SV003':
				$(".link_all").attr("href", "https://seconddoctorstomach.page.link/landing");
				break;
			case 'SV004':
				$(".link_all").attr("href", "https://seconddoctorcolorectal.page.link/landing");
				break;
			case 'SV005':
				$(".link_all").attr("href", "https://secondwind.page.link/landing");
				break;
		}
    }

	//종료된 이벤트 투명도 조절
	$(function(){
		$('.ing_end').each(function(){
			var a = $(this).text();
			var box = $(this).closest('.box');
			var link = $(this).siblings('.subject');
			if(a == "종료된 이벤트"){
				box.addClass('end'); 
				link.addClass('end'); 
			}else {
				box.removeClass('end'); 
				link.removeClass('end'); 
			}
		});
	});


	//dim 터치시 gnb 닫아짐
    function closeGnb(){
		$(".sub_link").removeClass("active");
		$('#header .box_sub').css('opacity','0');	
		setTimeout(function(){
			$('#header .box').css('display','none');
			$('.dim').fadeOut();
			$('#header').removeClass('sub_on');
		}, 600);
		setTimeout(function(){
			$('#header .box').hide();		
			$('#header .box_sub').hide();		
		}, 600);
    }

	//gnb 열림
	function subLink(){
		$(".sub_link").click(function(){
			if($(".sub_link").hasClass("active")){
				$("#header").addClass("sub_on");
				$('.dim').fadeIn();
			}else {
				$("#header").removeClass("sub_on");
				$('.dim').fadeOut();
			}

			$(document).on('mouseenter','.dim',function(){
				closeGnb();
			});
		});

		//스크롤탑 footer 고정
	function scroll_top() {
		var body_top = $(window).scrollTop();
		var w_height = $(window).height();
		var ft_top = $('#footer').offset().top;
		var obj = $('.btn_scroll');
		if( body_top > 300 ){
			$('.btn_scroll').fadeIn();
			if(body_top + w_height > ft_top + 250) {
				obj.css('bottom', (body_top + w_height) - ft_top + 50);
			} else {
				obj.css('bottom', 270);
			}
		} else {
			$('.btn_scroll').fadeOut();
		}
	}
	$(window).ready(function(){
		scroll_top();
	});
	$(window).scroll(function(){
		scroll_top();
	});
}
