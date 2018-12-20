$(document).on('turbolinks:load', function(){
	// $(function previewFile (){
		$('.upload-photo').on('change', function(changeEvent){

			var file = changeEvent.target.files[0];

			var reader = new FileReader();


		    reader.onload = (function (file) {
		      	return function(onloadEvent){
		      		var imageContainer = $(changeEvent.target).siblings().filter('.preview');
		      		imageContainer.attr("src", onloadEvent.target.result);
		      		imageContainer.attr({height:"100px;", width:"100px"}, onloadEvent.target.result);
		      	}
			})(file);

			reader.readAsDataURL(file);
		})
  	})
// })
