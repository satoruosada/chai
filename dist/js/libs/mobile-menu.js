"use strict";

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $('.hamburger').on('click', function () {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  }); // メニューのリンクをクリックした時

  $('#mobile-navi a').on('click', function () {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
});
/*=================================================
ハンバーガ―メニュー共通処理
===================================================*/
// ハンバーガーメニューをクリックした時とメニュー内のリンクをクリックした時の
// 処理が同じなので処理を共通化する

function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('#mobile-navi').addClass('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('#mobile-navi').removeClass('active');
  }
}
//# sourceMappingURL=mobile-menu.js.map
