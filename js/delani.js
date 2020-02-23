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

       $('#hov5').hover(function(){
        $('#hover5').show();
      }, function() {
        $('#hover5').hide()
       });
    
       $('#hov6').hover(function(){
        $('#hover6').show();
      }, function() {
        $('#hover6').hide()
       });
    
       $('#hov7').hover(function(){
        $('#hover7').show();
      }, function() {
        $('#hover7').hide()
       });
    
       $('#hov8').hover(function(){
        $('#hover8').show();
      }, function() {
        $('#hover8').hide()
       });









       $("#details form").submit(function(event) {
        var namesInput = $("#name").val();
        var mailInput = $("#mail").val();    
        var commentInput = $("#comment").val();
        


        $(".name").text(namesInput);
        $(".mail").text(mailInput);
        $(".comment").text(commentInput);
        
alert(namesInput +", we have received your message. Thank you for reaching out to us.");
        // $("#story").show();

        event.preventDefault();
        // alert(person1Input);
    });











});
  