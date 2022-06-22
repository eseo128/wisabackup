		</tbody>
	</table>
	<div class="page_write">
		{{$페이지선택}}
	</div>
</div>
<script>
	 //lnb 메뉴 on 표시
	 $(function(){
        $('#header .lnb .category > li.event').addClass('on');
    });
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