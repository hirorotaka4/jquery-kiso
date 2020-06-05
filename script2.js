$(function () {
  $("#login-show").click(function () {
    $("#login-modal").fadeIn();
  });
  $(".signUp-show").click(function () {
    $("#signUp-modal").fadeIn();
  });
  $(".close-modal").click(function () {
    $("#login-modal").fadeOut();
    $("#signUp-modal").fadeOut();
  });
  $(".lesson-hover").hover(
    function () {
      $(this).find(".text-contents").addClass("text-active");
    },
    function () {
      $(this).find(".text-contents").removeClass("text-active");
    }
  );

  $(".faq-list-item").click(function () {
    var $answer = $(this).find(".answer");
    if ($answer.hasClass("open")) {
      $answer.removeClass("open");
      $answer.slideUp();
    } else {
      $answer.addClass("open");
      $answer.slideDown();
      $(this).find("span").text("-");
    }
  });
});
