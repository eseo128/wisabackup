<div id="boardview" class="wrap_inner">
	<div class="info">
		<div class="subject">
			<p class="title">{{if(숨김글표시)}}[숨김]{{end(숨김글표시)}} <strong>{{$글제목}}</strong></p>
			<p class="stat">{{$작성자}} | {{$작성일시}} | 조회수 {{$조회수}}</p>
			{{if(추가항목1)}}
			<p class="add">{{$추가항목명1}} : {{$추가항목1}}</p>
			{{end(추가항목1)}}
			{{if(추가항목2)}}
			<p class="add">{{$추가항목명2}} : {{$추가항목2}}</p>
			{{end(추가항목2)}}
			{{if(추가항목3)}}
			<p class="add">{{$추가항목명3}} : {{$추가항목3}}</p>
			{{end(추가항목3)}}
		</div>
	</div>
	<div class="boxview">
		<div id="boardcnt" class="content">{{$글내용}}</div>
	</div>
	{{$관련상품리스트}}
	<div class="btn">
		<span class="box_btn white">{{$글수정링크태그}}수정</a></span>
		<span class="box_btn white">{{$글삭제링크태그}}삭제</a></span>
		<span class="box_btn white">{{$답글쓰기링크태그}}답글</a></span>
		<span class="box_btn">{{$목록보기링크태그}}목록</a></span>
	</div>
</div>