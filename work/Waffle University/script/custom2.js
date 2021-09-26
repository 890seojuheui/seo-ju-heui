$(document).ready(function(){
	$('.gnb>li').mouseenter(function(){
		$(this).children('.sub').stop().slideDown(); 
		$('.sub_bg').show();
	 
	 }).mouseleave(function(){
		 $('.sub').stop().slideUp(200);
		 $('.sub_bg').hide();
	 })
	 let num=0;
	 $('.sldies>a').eq(num).addClass('active');
	 setInterval(function(){
		if(num<2){
			num++
		}else{
			 num=0
		}
		$('.sldies>a').removeClass('active');
		$('.sldies>a').eq(num).addClass('active');
	 },3500)
	  
$('.btn_notic').addClass('active');
$('.cont_notic').css('display','block');
$('.more').attr('href','https://ww.naver.com');


const $btn_notic=$('.btn_notic');
const $btn_gallary=$('.btn_gallary');
const $cont_notic=$('.cont_notic');
const $cont_gallery=$('.cont_gallery');
const $more=$('.more');
//공지사항
$btn_notic.click(function(){
	$btn_gallary.removeClass('active')
  $btn_notic.addClass('active')

 	$cont_notic.show()
 	$cont_gallery.hide()
 	$more.attr('href','https://ww.naver.com');
 });
 
 
	//modal
 $('.modal>button').click(function(){
	 $('.modal_wrap').fadeOut()
 })
	 
 
 
 });