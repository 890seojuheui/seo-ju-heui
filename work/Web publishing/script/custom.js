$(document).ready(function(){
//gnb
$('.sub,.sub_bg').hide()
$('.gnb>li').mouseenter(function(){
	 	$('.sub,.sub_bg').stop().slideDown()
   }); 
   $('.gnb>li').mouseleave(function(){
		$('.sub,.sub_bg').stop().slideUp()
	 });
	//main 
 let currentIdx=0;
  setInterval(function(){
	 let slidePos=-100*currentIdx+'%';

  $('.sldies').animate({length:slidePos},800);
 	  if(currentIdx<2){
 			currentIdx++;
		}else{
 			currentIdx=0;
 		}
 },3000);

//tab
const $tab_wrap=$('.tab_wrap'),
$tab_title=$('.tab_title'),
$tab=$('.tab_title>h2'),
$tab_conts=$('.tab_conts'),
$cont=$tab_conts.children('div');

$tab.click(function(){
	$(this).addClass('on').siblings().removeClass('on');

let $classNum=$(this).attr('data-num');
$cont.css('display','none')
$($classNum).css('display','block');
});

//modal
$('.modal>button').click(function(){
	$('.modal_wrap').fadeOut()
})

});