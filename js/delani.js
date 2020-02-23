$(function(){

    $('.togle').click(function(){
      $('.togle').toggle();
    });
  
    $('.togle1').click(function(){
      $('.togle1').toggle();
    });
  
    $('.togle2').click(function(){
      $('.togle2').toggle();
    });


    $('#hov1').hover(function(){
        $('#hover1').show();
      }, function() {
        $('#hover1').hide()
       });
    
       $('#hov2').hover(function(){
        $('#hover2').show();
      }, function() {
        $('#hover2').hide()
       });
    
       $('#hov3').hover(function(){
        $('#hover3').show();
      }, function() {
        $('#hover3').hide()
       });
    
       $('#hov4').hover(function(){
        $('#hover4').show();
      }, function() {
        $('#hover4').hide()
       });

});
  