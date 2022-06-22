	</ul>
	<div class="box_btn block wrap_inner2"><a href="#" onclick="prdMore('boardlist_body', 'board/index.php', 'list_bottom'); return false;">더 보기</a></div>
</div>
<script>
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
</script>