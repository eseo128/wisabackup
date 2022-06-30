<div id="boardview">
	<table class="board_row">
		<caption class="hidden">阅览</caption>
		<colgroup>
			<col style="width:10%;">
			<col>
			<col style="width:10%;">
			<col style="width:12%;">
		</colgroup>
		<tbody>
			<tr>
				<th scope="row">标题</th>
				<td class="subject">{{if(숨김글표시)}}[隐藏]{{end(숨김글표시)}} {{$글제목}}</td>
				<th scope="row">浏览次数</th>
				<td>{{$조회수}}</td>
			</tr>
			<tr>
				<th scope="row">创建人</th>
				<td>{{$작성자}}</td>
				<th scope="row">创建日期</th>
				<td>{{$작성일시}}</td>
			</tr>
			{{if(추가항목1)}}
			<tr>
				<th scope="row">{{$추가항목명1}}</th>
				<td colspan="3">{{$추가항목1}}</td>
			</tr>
			{{end(추가항목1)}}
			{{if(추가항목2)}}
			<tr>
				<th scope="row">{{$추가항목명2}}</th>
				<td colspan="3">{{$추가항목2}}</td>
			</tr>
			{{end(추가항목2)}}
			{{if(추가항목3)}}
			<tr>
				<th scope="row">{{$추가항목명3}}</th>
				<td colspan="3">{{$추가항목3}}</td>
			</tr>
			{{end(추가항목3)}}
		</tbody>
	</table>
	<div class="boxview">
		<div id="boardcnt">{{$글내용}}</div>
	</div>
	{{$관련상품리스트}}
	<div class="btn">
		<div class="modelete">
			<span class="box_btn w100 white">{{$글수정링크태그}}修改</a></span>
			<span class="box_btn w100 white">{{$글삭제링크태그}}删除</a></span>
			<span class="box_btn w100 white">{{$답글쓰기링크태그}}回复</a></span>
		</div>
		<span class="box_btn w100">{{$목록보기링크태그}}目录</a></span>
	</div>
</div>