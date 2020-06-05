$(function () {
  // 「#change-text」要素に対するclickイベントを作成してください
  $("#change-text").click(function () {
    $("#text1").text("ようこそ、Progateへ");
  });

  // 「#change-html」要素に対するclickイベントを作成してください
  $("#change-html").click(function () {
    $("#text1").html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
  });

  $(".list-item").click(function () {
    $(this).css("color", "red");
  });

  $(".btn").click(function () {
    // $('#title')を変数$titleに代入してください
    var $title = $("#title1");

    // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
    $title.css("color", "red");
    $title.html("こんばんは、にんじゃわんこさん");
    $title.fadeOut(1000);

    // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
    $("#text2")
      .css("color", "blue")
      .html("<h3>jQueryをマスターしましょう！</h3>")
      .fadeOut(1000);
  });

  $("#find-method").click(function () {
    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
    // cssメソッドで文字の色をredに指定してください
    $("#wrapper").find("a").css("color", "red");
  });

  $("#children-method").click(function () {
    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
    // fadeOutメソッドで隠してください
    $("#wrapper").children("a").fadeOut();
  });

  $("#language-wrapper").hover(
    function () {
      $(".language-text").fadeIn();
    },
    function () {
      $(".language-text").fadeOut();
    }
  );
});
