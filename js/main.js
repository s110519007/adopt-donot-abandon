// alert("qq");
$(document).ready(function() {
  $(window).scroll(function(){
    a1_start=(500)
    a1_end=(1050)
    a2_start=a1_end
    a2_end=(1950)
    if(($(window).scrollTop()>=a1_start)&&($(window).scrollTop()<a1_end)){
      $(".item:nth-child(1)").fadeIn(500);
      $(".item:nth-child(2)").delay(300).fadeIn(500)
      $(".item:nth-child(3)").delay(600).fadeIn(500)
      $(".item:nth-child(4)").delay(900).fadeIn(500)
      $(".item:nth-child(5)").delay(1200).fadeIn(500)
      $(".warn").hide().finish()
    }
    else if(($(window).scrollTop()>=a2_start)&&($(window).scrollTop()<a2_end)){
      $(".warn").fadeToggle(500)
      $(".item").hide().finish()
    }
    else{
      $(".item").hide().finish()
      $(".warn").hide().finish()
    }
  });
});
