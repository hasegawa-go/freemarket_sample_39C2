$(document).on('turbolinks:load', function(){
	$(function previewFile (){
		$('.upload-photo').on('change', function(e){
			//イベントを発生させたオブジェクトを変数fileに入れる
			var file = e.target.files[0];
			var fileLength = e.target.files.length;
			console.log(fileLength)
			// FileReaderでfileオブジェクトの中身を取得してreaderに入れる
			var reader = new FileReader();
			// console.log(reader)
			//HTMLのimgタグのオブジェクトをpreviewに入れる
			var preview  = $(".preview");
			// console.log(preview)



 			//オブジェクトを読み込んでから処理を実行する
      reader.onload = (function (file) {
      	return function(e){
      		$(".preview").attr("src", e.target.result);
      		$(".preview").attr("size", e.target.result);
      	}
			})(file);
			reader.readAsDataURL(file);
		})
  })
})
