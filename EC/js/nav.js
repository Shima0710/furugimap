
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });

  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });    





var splash_logo = document.getElementById("splash_logo");

function moveLogo() {
  splash_logo.style.marginLeft = "-100px";
}

splash_logo.onload = function() {
  setTimeout(moveLogo, 1000);
};




var time = new Date().getHours();
if (time >= 7 && time <= 16) {
  document.body.style.background = 'white';
} else if (time >= 16 && time <= 6) {
  document.body.style.background = 'black';
}







