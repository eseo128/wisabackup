<td>
	<div class="box">
		<div class="box_left"><a href="{{$링크}}">{{$첨부이미지1}}</a></div>
		<div class="box_right">
			<p class="ing_end">{{$글분류}}</p>
			{{if(종료일)}}<p class="date">{{$시작일}}~{{$종료일}}</p>{{endif(종료일)}}
			<p class="subject">{{if(숨김글표시)}}[숨김]{{end(숨김글표시)}}<a href="{{$링크}}">{{$글제목2}}</a></p>
			<div class="summary">{{$글내용}}</div>
		</div>
	</div>
</td>

