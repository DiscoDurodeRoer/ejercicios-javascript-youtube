jQuery(function() {
    
    $("#button").on("click", function(){

        /*
        if($("#container").is(":visible")){
            $("#container").hide();
            $("#button").text("Mostrar");
        }else{
            $("#container").show();
            $("#button").text("Ocultar");
        }
        */

        $("#button").text($("#container").is(":visible") ? "Mostrar" : "Ocultar");
        $("#container").toggle();

    })

})