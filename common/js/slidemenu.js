// sidemenu
$(function(){
  $('.sideMenu__open').click(function(){
    $('.sideMenu__open').hide();
    $(".sideMenu").animate({ right: "0" }, 300);
  });
});
$(function(){
  $('.sideMenu__box').click(function(){
    $('.sideMenu__open').show(400);
    $(".sideMenu").animate({ right: "-300" }, 300);
  });
});