<li onClick="{{$링크}}">
	<span class="no">{{$글번호}}</span>
	<div class="subject">
		<p class="title">{{$아이콘}} {{if(숨김글표시)}}[숨김]{{end(숨김글표시)}} {{if(글분류)}}[{{$글분류}}] {{end(글분류)}}{{$글제목2}}</p>
		<p class="stat">{{$작성자}} | {{$작성일}} | 댓글 : {{$댓글수}}</p>
	</div>
</li>