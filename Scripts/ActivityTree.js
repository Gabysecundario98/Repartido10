$(document).ready(function(){
    $( "#p-1" ).mouseover(function() {
        $( "#p-1" ).css('border','5px solid black');
        $( "#p-1" ).css('font-size','20px');
        $( "#p-1" ).css('color','skyblue');
      });
      $( "#p-1" ).mouseout(function() {
        $( "#p-1" ).css('border','0px solid black');
        $( "#p-1" ).css('color','black');
        $( "#p-1" ).css('font-size','16px');
      });
      $( "#p-2" ).mouseover(function() {
        $( "#p-2" ).css('border','5px solid red');
        $( "#p-2" ).css('font-size','20px');
        $( "#p-2" ).css('color','green');
      });
      $( "#p-2" ).mouseout(function() {
        $( "#p-2" ).css('border','0px solid black');
        $( "#p-2" ).css('color','black');
        $( "#p-2" ).css('font-size','16px');
      });
      $( "#p-3" ).mouseover(function() {
        $( "#p-3" ).css('border','5px solid pink');
        $( "#p-3" ).css('font-size','20px');
        $( "#p-3" ).css('color','violet');
      });
      $( "#p-3" ).mouseout(function() {
        $( "#p-3" ).css('border','0px solid black');
        $( "#p-3" ).css('color','black');
        $( "#p-3" ).css('font-size','16px');
      });
});

$(document).ready(function(){
    $( "#btng" ).click(function() {
        $( "body" ).css('background-color','green');
     
      });
      $( "#btny" ).click(function() {
        $( "body" ).css('background-color','yellow');
      });
      $( "#btnv" ).click(function() {
        $( "body" ).css('background-color','violet');
      });
      $( "#btnb" ).click(function() {
        $( "body" ).css('background-color','blue');
      }); 
      $( "#btno" ).click(function() {
        var imageUrl = "Img/boys-1793421_1280.jpg";
        $("body").css("background-image", "url(" + imageUrl + ")");
        $("body").css("color", "white");
      });
});



var nombre= document.getElementById('nombreIngresado').value;


$(document).ready(function(){
 $("#boton").click(function(){
   $("#ej2").html('Gracias ' +  nombre + ' por comunicarse con nosotros')
 }
 )
});
