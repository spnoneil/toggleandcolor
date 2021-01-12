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







    $("button#hello").click(function() {
        $("ul#user").prepend("<li>Hello!</li>");
        $("ul#webpage").prepend("<li>Why hello there!</li>");
        $("ul#user").children("li").first().click(function() {
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function() {
            $(this).remove();
        });
    });

    $("button#goodbye").click(function() {
        $("ul#user").prepend("<li>Goodbye!</li>");
        $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
        $("ul#user").children("li").first().click(function() {
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function() {
            $(this).remove();
        });
    });


    $("button#stop").click(function() {
        $("ul#user").prepend("<li>Stop copying me!</li>");
        $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
        $("ul#user").children("li").first().click(function() {
            $(this).remove();
        });
        $("ul#webpage").children("li").first().click(function() {
            $(this).remove();
        });
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

    $(document).ready(function() {
        $("#formOne").submit(function() {
            $(".person1").append("blah blah");
            $(".person2").append("blah blah");
            $(".animal").append("blah blah");
            $(".exclamation").append("blah blah");
            $(".verb").append("blah blah");
            $(".noun").append("blah blah");

            $("#story").show();
            event.preventDefault();

        });
    });


});