jQuery(function() {
    
    /*
    $("#yellow").on("click", function(){
        $("#container").css("background", "yellow")
    });
    
    $("#blue").on("click", function(){
        $("#container").css("background", "blue")
    });
    
    $("#red").on("click", function(){
        $("#container").css("background", "red")
    });

    $("#green").on("click", function(){
        $("#container").css("background", "green")
    });
    
    $("#black").on("click", function(){
        $("#container").css("background", "black")
    });
    */

    $("button").on("click", function(){
        let id = $(this).attr("id");
        $("#container").css("background", id);
    });
    

})