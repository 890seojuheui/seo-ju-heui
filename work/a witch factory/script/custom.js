$(document).ready(function(){

  $('.gnb>li').mouseenter(function(){
   $(this).children('.sub').stop().slideDown(); 
   $('.sub_bg').show();
  
  }).mouseleave(function(){
    $('.sub').stop().slideUp(200);
    $('.sub_bg').hide();
  })
  

    //햄벅거메뉴      
   $('.mb_icon').click(function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('close');
  })


  $('.goTop').click(function(){
    $('html,body').animate({'scrollTop':'0'})
  })

  


});