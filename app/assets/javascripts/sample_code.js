// // // 選択した画像のプレビュー表示
// //   $('input[type="file"]').on('change', function(){ //ファイル選択ボタンを
// //     var len = $(this).prop('files').length; //読み込んだファイルの数を変数lenに代入
// //     console.log(len);
// //     for (var i = 0; i < len; i++) {
// //     console.log(i);
// //       var file = $(this).prop('files')[i]; //ファイルを取得して変数fileに代入=
// //       var filereader = new FileReader();
// //       var imgHTML = '<li class="img_view"><img alt="" class="img_preview"><p><a href="#" class="img_del">画像を削除する</a></p></li>';

// //     $(".preview ul").append(imgHTML);

// //     filereader.onload = function() {
// //       $(".preview ul").find('img').attr('src', filereader.result); //ファイルが読み込まれた時にpreviewにappendしたimg要素に画像urlを設定する
// //       $(".visible-pc").remove(); //クリックしてファイルをアップロードを消す
// //     }
// //     filereader.readAsDataURL(file);
// //   };



// // HTML 出品画像
// //   %span.form-require 必須
// // %p 最大4枚までアップロードできます
// // .sell-dropbox-container.clearfix
// //   .sell-upload-items
// //     %ul
// //   .sell-upload-drop-box
// //     - 4.times do
// //       .sell-upload-drop-box__small_box
// //         = f.fields_for :images do |image|
// //           .preview
// //             %ul
// //             = f.label :image do
// //               = fa_icon 'camera', class: 'camera-icon'
// //               = image.file_field :image_url, class: 'hidden'
// //             %pre.visible-pc
// //               クリックしてファイルをアップロード
// ===============================================================================================================================================

// // HTML
// // <form>
// //     <input type="file">
// // </form>
// // <div class="preview" />


// // $(function(){
// //   //画像ファイルプレビュー表示のイベント追加 fileを選択時に発火するイベントを登録
// //   $('form').on('change', 'input[type="file"]', function(e) {
// //     var file = e.target.files[0],
// //         reader = new FileReader(),
// //         $preview = $(".preview");
// //         t = this;

// //     // 画像ファイル以外の場合は何もしない
// //     if(file.type.indexOf("image") < 0){
// //       return false;
// //     }
// //     // ファイル読み込みが完了した際のイベント登録
// //     reader.onload = (function(file) {
// //       return function(e) {
// //         //既存のプレビューを削除
// //         $preview.empty();
// //         // .prevewの領域の中にロードした画像を表示するimageタグを追加
// //         $preview.append($('<img>').attr({
// //                   src: e.target.result,
// //                   width: "150px",
// //                   class: "preview",
// //                   title: file.name
// //               }));
// //       };
// //     })(file);

// //     reader.readAsDataURL(file);
// //   });
// // });

// ============================================================

// // <script>
// // $(function(){
// //   $('#myfile').change(function(e){
// //     //ファイルオブジェクトを取得する
// //     var file = e.target.files[0];
// //     var reader = new FileReader();

// //     //画像でない場合は処理終了
// //     if(file.type.indexOf("image") < 0){
// //       alert("画像ファイルを指定してください。");
// //       return false;
// //     }

// //     //アップロードした画像を設定する
// //     reader.onload = (function(file){
// //       return function(e){
// //         $("#img1").attr("src", e.target.result);
// //         $("#img1").attr("title", file.name);
// //       };
// //     })(file);
// //     reader.readAsDataURL(file);

// //   });
// // });
// // </script>
// // </head>
// // <body>
// //   <input type="file" id="myfile"><br>
// //   <img id="img1" style="width:300px;height:300px;" />
// // </body>
// // </html>
// =========================================================
// // HTML
// // <input type="file" onchange="previewFile()"><br>
// // <img src="" height="200" alt="Image preview...">

// // function previewFile() {
// //   var preview = document.querySelector('img');
// //   var file    = document.querySelector('input[type=file]').files[0];
// //   var reader  = new FileReader();

// //   reader.addEventListener("load", function () {
// //     preview.src = reader.result;
// //   }, false);

// //   if (file) {
// //     reader.readAsDataURL(file);
// //   }
// // }















