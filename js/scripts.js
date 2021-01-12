$(document).ready(function() {
    $(".clickable").click(function() {
        $("#batman-showing").fadeToggle();
        $("#batman-hidden").fadeToggle();
    });
    $(".clickable2").click(function() {
        $("#show2").slideToggle();
        $("#hide2").slideToggle();
    });
    $(".clickable3").click(function() {
        $("#show3").toggle();
        $("#hide3").toggle();
    });
    $("#showall, #hideall").click(function() {
        $("#batman-showing, #show2, #show3, #showall").slideToggle();
        $("#batman-hidden, #hide2, #hide3, #hideall").slideToggle();
    });
});