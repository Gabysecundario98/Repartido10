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
});





/*function bordeytexto1 ()  {
    document.getElementById ("p-1").style.border= "5px solid black";
    document.getElementById ("p-1").style.color= "red";
    
}*/