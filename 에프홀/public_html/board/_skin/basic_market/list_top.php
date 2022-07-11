<div id="boardlist">
	{{$게시판카테고리목록}}
	<div class="search_wrap">
		{{$마켓검색폼시작}}
		<table class="tbl_row tbl_search">
			<caption>에프홀 마켓 검색하기</caption>
			<colgroup>
				<col width="12%">
				<col width="20%">
				<col width="12%">
				<col width="20%">
			</colgroup>
			<tbody>
				<tr>
					<th>항목별</th>
					<td>
						{{$마켓항목콤보박스}}
					</td>
					<th>가격대</th>
					<td>
						{{$마켓가격대콤보박스}}
					</td>
				</tr>
				<tr>
					<th>국가별</th>
					<td colspan="1">
						{{$마켓국가콤보박스}}
					</td>
				</tr>
				<tr>
					<th>연대별</th>
					<td colspan="3">
						<input type="hidden" name="etc2" value="{{$마켓연대}}">
						<ul>
							<li><input type="checkbox" class="all_check" value="all"> 전체보기</li>
							{{$마켓연대체크박스}}
						</ul>
					</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="4">
						<div class="search_btn tac">
							<span class="box_btn w150 large"><input type="submit" value="검색"></span>
							<span class="box_btn w150 large white"><a href="javascript:;" onclick="document.location.href='/board/index.php?db={{$게시판코드}}';">검색초기화</a></span>
						</div>
					</td>
				</tr>
			</tfoot>
		</table>
		{{$마켓검색폼끝}}
	</div>
	<script type="text/javascript">
		$(function() {
	        chainCheckbox($('.all_check'), $('.tmp_etc2'));
		});
		$(document).ready(function() {
			$('.all_check').click(function() {
				var str = '';
				if( $(this).is(':checked') ) str = $('input[class=tmp_etc2]').map( function() { return this.value; }).get().join("@")+'@';
				$('input[name=etc2]').val(str);
			});
			$('.tmp_etc2').click(function() {
				$('input[name=etc2]').val($('input[name=etc2]').val().replace($(this).val()+'@', ''));
				if($(this).is(':checked') ) {
					$('input[name=etc2]').val($('input[name=etc2]').val()+$(this).val()+'@');
				}
			});
		});
	</script>
	<table class="board_col">
		<caption class="hidden">글목록</caption>
		<colgroup>
			<col style="width:130px">
			<col>
		</colgroup>
		<thead>
			<tr>
				<th scope="col">이미지</th>
				<th scope="col">제목</th>
			</tr>
		</thead>
		<tbody>