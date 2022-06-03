jQuery(function() {
   
    $.get("data.json", function(data, status){
        console.log("Data: ", data);
        console.log("Status: ", status);

        const table = $(`
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Edad</th>
                </tr>
            </table>
        `);

        data.forEach(d => {
            table.append(`
                <tr>
                    <td>${d.nombre}</td>
                    <td>${d.apellidos}</td>
                    <td>${d.edad}</td>
                </tr>
            `);
        });

        table.attr("border", "1");
        table.appendTo("body");


    })


})
