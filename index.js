
$( document ).ready( function() {
  // Top버튼
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 200 ) {
      $( '#move_up_btn' ).fadeIn();
    } else {
      $( '#move_up_btn' ).fadeOut();
    }
  } );
  $( '#move_up_btn' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  } );

  // 이모티콘 리스트
  $('.items').slice(0, 16).show(); 
  $('.more_btn').click(function(e){
      e.preventDefault();
      $('.items:hidden').slice(0, 8).fadeIn(500); 
      if($('.items:hidden').length == 0){ 
          $('.more_btn').hide(); 
      }
  });

  // 메뉴 활성화
  $('.menu_tap').click(function(){
    $('nav').addClass('on');
  });
  $('.menu_btn').click(function(){
    $('nav').removeClass('on');
  });



  //메뉴 사이드바 
    $('.menu_tap').click(function(){
    $('.bg_box').fadeIn();
    $('.gnb_box').fadeIn().css({'right':'0', 'transition':'0.6s','display':'flex'});
    $('#move_up_btn').css('display','none');
  });

  $('.fa-times-circle').click(function(){
    $('.bg_box').fadeOut();
    $('.gnb_box').fadeOut().css('right','-300px');
  
  });

  //검색창 크기 조정
  $('.search_tap').on({
    'mouseenter':function(){
      $('.gnb_utill').fadeIn;
    },
    'mouseleave':function(){
      $('.gnb_utill').fadeOut;
    }
    });

  // 키워드 스와이프
  $('.prev').click(function(){
    $('.key_items');
  });
  
  // a [href="#"] 속성 제거 
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });
} );