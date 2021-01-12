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





    $("button#green").click(function() {
        $("body").removeClass().addClass("green-background");
        $(".color").removeClass().addClass("greenbg");
    });

    $("button#yellow").click(function() {
        $("body").removeClass().addClass("yellow-background");
        $(".color").removeClass().addClass("yellbg");
    });

    $("button#red").click(function() {
        $("body").removeClass().addClass("red-background");
        $(".color").removeClass().addClass("redbg");
    });
});