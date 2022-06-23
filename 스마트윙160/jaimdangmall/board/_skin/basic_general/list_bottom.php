		</tbody>
	</table>
	<div class="page_write">
		{{$페이지선택}}
		<div class="box_btn w100 write brown">{{$글쓰기링크태그}}글쓰기</a></div>
	</div>
	<div class="board_search">
		{{$검색폼시작}}
			<select name="search">
				<option value="title" {{$제목셀렉트선택여부}}>제목</option>
				<option value="content" {{$내용셀렉트선택여부}}>내용</option>
				<option value="name" {{$작성자셀렉트선택여부}}>작성자</option>
			</select>
			<input type="text" name="search_str" value="{{$검색어}}" class="form_input search">
			<input type="submit" value="검색" class="btn_search">
		{{$검색폼끝}}
	</div>
</div>

<script>
	 //lnb 메뉴 on 표시
	 $(function(){
        $('#header .lnb .category > li.info').addClass('on');
    });
</script>