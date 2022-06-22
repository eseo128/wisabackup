<div id="boardlist">
	<div class="board_search">
		{{$검색폼시작}}
			<select name="search">
				<option value="title" {{$제목셀렉트선택여부}}>제목</option>
				<option value="content" {{$내용셀렉트선택여부}}>내용</option>
				<option value="name" {{$작성자셀렉트선택여부}}>작성자</option>
			</select>
			<input type="text" name="search_str" value="{{$검색어}}" class="form_input block search">
			<input type="submit" value="검색하기" class="btn_search">
		{{$검색폼끝}}
	</div>
	{{$게시판카테고리목록}}
	<ul id="boardlist_body" class="list">