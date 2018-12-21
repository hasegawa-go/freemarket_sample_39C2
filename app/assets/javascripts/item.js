// ターボリンクスに必ずこのドキュメントを読んでもらう
$(document).on('turbolinks:load', function(){

	// file_fieldで画像が選択されたら
	$('.upload-photo').on('change', function(changeEvent){

		// 選んだ画像の１個目をfileに入れる
		var file = changeEvent.target.files[0];

		// ユーザのコンピュータ内にあるファイルのデータを非同期的に読み込み変数readerに入れる
		var reader = new FileReader();


		// 変数readerのコンテンツの読み込みが完了したら
	    reader.onload = (function (file) {

	    	// この関数の値を返す
	      	return function(onloadEvent){

	      		// 兄弟要素<li>でpreviewにマッチする要素を変数imagecontainerに入れる
	      		var imageContainer = $(changeEvent.target).siblings().filter('.preview');

	      		// imageContainerに属性値を追加する
	      		imageContainer.attr("src", onloadEvent.target.result);
	      		imageContainer.attr({height:"100px;", width:"100px"}, onloadEvent.target.result);
	      	}

	    // 引数にfileの値を入れて渡す
		})(file);

		// ファイルオブジェクトをURに変換する
		reader.readAsDataURL(file);
	})
})

