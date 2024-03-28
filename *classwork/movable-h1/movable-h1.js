$(window).mousemove(function(event){
    console.log(event.pageX + "px");
    console.log(event.pageY + "px");
    $("h1").css("top", event.pageY-70 + "px"); 
    $("h1").css("left", event.pageX+10 + "px"); //have h1 follow mouse movement
})