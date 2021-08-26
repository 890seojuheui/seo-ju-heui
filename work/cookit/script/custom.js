$(document).ready(function(){  
  //gnb
  $('nav .gnb>li').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.gnb_bg').stop().slideDown()
  }).mouseleave(function(){
    $('.gnb_bg,nav .gnb .sub').stop().slideUp()
  })
  // 햄버거메뉴
  $('.mb_icon').click(function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('close');
  })





  //slide
  let num=0;
  setInterval(function(){
    if(num<2){
      num++
    }else{
      num=0
    }
    $('.slides').stop().animate({'left':-100*num+'%'})
  },3500)

  //tap
  const $btnWrap=$('.btn_wrap h2'),
  $reviwBtn=$('.review,.btn_wrap h2'),
  $best=$('.best')

  $btnWrap.eq(1).click(function(){
    $best.removeClass('on')
    $reviwBtn.addClass('on')
  })
  $btnWrap.eq(0).click(function(){
    $reviwBtn.removeClass('on')
    $best.addClass('on')
  })
  // fmailysite
  $('.familySite').mouseover(function(){
    $(this).find('ul').stop().slideDown();
    $(this).find('i').attr('class','fas fa-chevron-down')
  }).mouseout(function(){
    $(this).find('ul').stop().slideUp();
    $(this).find('i').attr('class','fas fa-chevron-up')
  })
  //modal
  $('.modal_wrap>button').click(function(){
    $('.modal').fadeOut()
  })
})