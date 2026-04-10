$(document).ready(function() {

    $("#btn").click(function() {
        $("#hide").hide();
        $("#show").hide();
    });

    $("#btn1").click(function() {
        $("#show").show();
    });

    $("#btn2").click(function() {
        $("#tog").toggle();
    });

    $("#srt").click(function() {
        $("#car").animate({ left: "+=200px" }, 2000 );
    });

    $("#stp").click(function() {
        $( ".car" ).stop();
    });

    $("#rv").click(function() {
        $("#car").animate({ left: "-=200px" }, 2000 );
        
    });

    $("#btn4").click(function() {
    	$("#img3").slideUp(300).fadeIn(400);
        $("#img2").slideUp(300).delay(800).fadeIn(400);
        
        
    });

   $( "#slide" ).on( "click", function() {
      $( this ).slideUp();
    });
   $( "#slide1" ).on( "click", function() {
      $( this ).slideUp();
    });
   $( "#slide2" ).on( "click", function() {
      $( this ).slideUp();
      $('#btn6').show();
    });
   $( "#btn6" ).on( "click", function() {
      location.reload();
    });

   $( "#btn7" ).on( "click", function() {
       $( "#bbox" ).animate({ left:"+=200px" }, 2000 ).animate({ bottom:"7px" }, 600 ).queue(function() {
             $( this ).toggleClass( "gold" ).dequeue();
    })
    .animate({ left:"10px", bottom:"7px" }, 700 );
    });

   $( "#btn8" ).on( "click", function() {
      $("#p8").fadeToggle("slow", "linear");
      $("#btn88").show();
    });

   $( "#btn88" ).on( "click", function() {
      location.reload();
    });

   $( "form" ).on( "submit", function( event ) {
  if ( $( "input" ).first().val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }
 
    $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
           event.preventDefault();
   });

    $('#btn10').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });


});