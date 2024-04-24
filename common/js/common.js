var isSP = function() {
	return $('.sp-view:visible').length != 0;
};

// accordion
$(function() {
	$('.accordion , .accordion-sp').click(function() {
		$(this).next().slideToggle();
		$(this).toggleClass('_active_');
	});
	
	$('.accordion2').click(function() {
		$(this).prev().slideToggle();
		$(this).toggleClass('_active_');
	});
});

// page top
$(function(){
	$('a[href^="#"]' + 'a:not(.non-scroll)').on('click', function(){
    var speed = 800;
    var href= $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

$(function(){
	$(document).ready(function () {
			$(".pagetop").hide();
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > 100) {
					$('.pagetop').slideDown("fast");
				} else {
					$('.pagetop').slideUp("fast");
				}
				scrollHeight = $(document).height();
				scrollPosition = $(window).height() + $(window).scrollTop();
				footHeight = $("footer").innerHeight();

				if (scrollHeight - scrollPosition <= footHeight) {
					$(".pagetop").css({
						"position": "absolute",
						"bottom": footHeight
					});
				} else {
					$(".pagetop").css({
						"position": "fixed",
						"bottom": "50px"
					});
				}
			});

			$('.pagetop a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
			});
	});
});

// Navigation current
const url = window.location.pathname;
$(`.headerBottom-gnav a[href="${url}"]`).addClass("current");
$(`.snav-inner__item a[href="${url}"]`).addClass("current");


// ヘッダー内メニュー
$(function(){
  var $dropdown = $('.js-dropdown');
  var DURATION = 200; //アニメーションの速さ

  function fadeOutMenu(){
    $dropdown.removeClass('is-active')
      .next('.js-dropdown-menu')
      .stop()
      .slideUp(DURATION);
  }

  //表示を切り替える
  function toggleMenu(){
    var $self = $(this); //thisにはクリックした時の要素が入る
    //要素が.is-activeを持っていない場合
    if(!$self.hasClass('is-active')){
      fadeOutMenu();
    }
    //クリックした要素を表示させる
    $self.toggleClass('is-active')
      .next('.js-dropdown-menu')
      .stop().slideToggle(DURATION);
  }

  $dropdown.on('click', toggleMenu);
 
//別の場所をクリックすると閉じる処理
  $(document).on('click touchend', function(event) {
  if (!$(event.target).closest('body').length) {
    // ここに処理;
    fadeOutMenu();//関数呼びだし
  }
	});
});


// tab
const tabsElems = document.querySelectorAll("[data-tabs]");

if(tabsElems.length > 0){
  for (let i = 0; i < tabsElems.length; i++) {
  let tab = tabsElems[i];
  let tabBtnElems = tab.querySelectorAll("[data-tab]");
  let tabContentElems = tab.querySelectorAll("[data-tab-content]");
  for (let i = 0; i < tabBtnElems.length; i++) {
    let tabBtn = tabBtnElems[i];
    let tabContent = tabContentElems[i];
    tabBtn.addEventListener("click", (e) => {
      e.preventDefault();
      for (let i = 0; i < tabBtnElems.length; i++) {
       tabBtnElems[i].classList.remove('active');
       tabContentElems[i].classList.remove('active');
      }
      tabBtn.classList.add('active');
      tabContent.classList.add('active');
    });
  }
	}
}

// サイド固定メニュー
$(function () {

	//***********************************

	/* ▼ここから初期設定 */

	// 1. メニューを囲んでるdivのid
	var menuWrap = '.fixed-menu'

	// 2.ボタンクリック時に現れる領域のid
	var sideMenu = '.fixed-menu__inner'

	// 3.ボタンのid
	var sidemenKey = '.fixed-menu__btn'

	// 4.メニューの横幅（px）
	var menuWidth = '191'

	// 5.メニューが閉じてる時のボタンの中身（textでも画像でも可）
	//var closeHtml = '→'

	// 6.メニューが開いてる時のボタンの中身（textでも画像でも可）
	//var openHtml = '←'

	// 7.開閉アニメーションの速さ（単位ミリ秒）
	var speed = 300


	//***********************************

	//▼ボタンをクリックしたらメニューが開いたり閉じたりする処理
	$(sidemenKey).click(function () {
		if ($(menuWrap).hasClass('active')) {
			//activeのクラスを持っていたら
			//menuを閉じる(アニメーションの速さは300)＆activeを取る
			$(menuWrap).stop().animate({
				right: '-' + menuWidth + 'px'
			}, speed).removeClass('active');
			//ボタンの文言を変更
			//$(sidemenKey).html(closeHtml);
		} else {
			//activeのクラスを持っていなければ
			//menuを開く＆activeを付与
			$(menuWrap).stop().animate({
				right: '0'
			}, speed).addClass('active');
			//ボタンの文言を変更
			//$(sidemenKey).html(openHtml);
		};
	});
	
	/// スクロールしたらactiveを削除
	$(window).scroll(function () {
		if ($(window).scrollTop() > 50) {
			if ($(menuWrap).hasClass('active')) {
				$(menuWrap).stop().animate({
					right: '-' + menuWidth + 'px'
				}, speed).removeClass('active');
			}
		}
	});


	/**************************/

	//▼menuの高さをウィンドウの高さ100%に設定する処理（不要な場合は削除）

	//変数windowHeightに画面の高さを取得、変数windowHeightに格納
	var windowHeight = $(window).height();

	//sideMenuのheightをwindowHeightにする
	$(sideMenu).height(windowHeight);

	//画面をリサイズした時、heightを読み直し
	var timer = false;
	$(window).resize(function () {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			windowHeight = $(window).height();
			$(sideMenu).height(windowHeight);
		}, 50);
	});


	/**************************/

});


// SP gnavi
$(".headerTop-name__menu").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".headerTop-snav").toggleClass('panelactive');
		$('body').toggleClass('_gnav-show_');
});

$(".headerTop-snav a , .headerTop-snav__close").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".headerTop-name__menu").removeClass('active');//ボタンの activeクラスを除去し
    $(".headerTop-snav").removeClass('panelactive');
		$("body").removeClass("_gnav-show_");
});

/* アンカーリンク */
$(function(){
		$(document).ready(function(){
			var headerHeight = 105;
			var speed = 800;
			var urlHash = location.hash;   
			if(urlHash) {
					$('html,body').stop().scrollTop(0);
					setTimeout(function(){
							var target = $(urlHash);
							var position = target.offset().top - headerHeight;
							$('body,html').stop().animate({scrollTop:position}, 100);
					}, 100);
			}
			$('a[href*="#"]' + 'a:not(.non-scroll)').click(function() {
					var href= $(this).attr("href");
					var split = href.split('#');
					var target = $(split[1] == '' ? 'html' : "#" + split[1]);
					var position = target.offset().top - headerHeight;
					$('html,body').stop().animate({scrollTop:position}, speed, 'swing');   
			});
		});
});

