jQuery(function () {

    $("#top").on("click", function() {
        const y = parseInt($("#container-child").css("top"));

        if(y - 20 > 0){
            $("#container-child").css("top", y - 20);
        }else{
            $("#container-child").css("top", 0);
        }

    })
    
    $("#right").on("click", function() {
        const x = parseInt($("#container-child").css("left"));
        const parentWidth = parseInt($("#container").innerWidth());
        const childWidth = parseInt($("#container-child").innerWidth())

        if( (x+20) < (parentWidth - childWidth) ){
            $("#container-child").css("left", x+20);
        }else{
            $("#container-child").css("left", (parentWidth - childWidth));
        }
    })
    
    $("#bottom").on("click", function() {
        
        const y = parseInt($("#container-child").css("top"));
        const parentHeight = parseInt($("#container").innerHeight());
        const childHeight = parseInt($("#container-child").innerHeight())

        if( (y+20) < (parentHeight - childHeight) ){
            $("#container-child").css("top", y+20);
        }else{
            $("#container-child").css("top", (parentHeight - childHeight));
        }



    })
    
    $("#left").on("click", function() {
        const x = parseInt($("#container-child").css("left"));

        if(x - 20 > 0){
            $("#container-child").css("left", x - 20);
        }else{
            $("#container-child").css("left", 0);
        }
    })

})