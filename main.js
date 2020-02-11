$(function(){
    $('.scroll').click(function(){
        //html要素のスクロール位置が0=最上部なので、0を指定
        //スマホ対応のためbodyも指定
        $('html,body').animate({scrollTop: 1700});
    });
});



$(function(){
    $('.scroll_exe').click(function(){
        //html要素のスクロール位置が0=最上部なので、0を指定
        //スマホ対応のためbodyも指定
        $('html,body').animate({scrollTop: 0});
    });
});

    // 無効なフィールドがある場合にフォーム送信を無効にするスターターJavaScriptの例
    (function() {
        'use strict';
  
        window.addEventListener('load', function() {
            // カスタムブートストラップ検証スタイルを適用するすべてのフォームを取得
            var forms = document.getElementsByClassName('needs-validation');
            // ループして帰順を防ぐ
            var validation = Array.prototype.filter.call(forms, function(form) {
                // submitボタンを押したら以下を実行
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
