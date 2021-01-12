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




    $("#formOne").submit(function(event) {
        const person1Input = $("input#person1").val();
        const person2Input = $("input#person2").val();
        const animalInput = $("input#animal").val();
        const exclamationInput = $("input#exclamation").val();
        const verbInput = $("input#verb").val();
        const nounInput = $("input#noun").val();

        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();
    });


});