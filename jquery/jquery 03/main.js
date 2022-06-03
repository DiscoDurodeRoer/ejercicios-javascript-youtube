jQuery(function() {

    var names = [];

    $("#add").on("click", function(){
        let name = $("#name").val();
        if(!names.find(n => n == name)){
            names.push(name);
            $("#names").append("<li>" + name + "</li>")
        }else{
            alert("El nombre existe")
        }
    })
    
    $("#remove").on("click", function(){
        let name = $("#name").val();
        let indexName = names.findIndex(n=> n == name);
        if(indexName != -1){
            names.splice(indexName, 1);
            $("#names li").slice(indexName, indexName + 1).remove();
        }else{
            alert("No existe el nombre")
        }
    })

    $("#removeAll").on("click", function(){
        names = [];
        $("#names li").remove();
    })

})