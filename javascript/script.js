$("#BSearch").click(function (e){
    var inputt = $("#inputid").val();
    buscarCiudad(encodeURI(inputt));
    console.log(encodeURI(inputt));
});



$("#BM").click(function (e){
    buscarCiudad("Mendoza")
});

$("#BN").click(function (e){
    buscarCiudad("Napoles")
});


$("#BA").click(function(e){
    buscarCiudad("Buenos Aires")
})



function buscarCiudad(ciudad){
    $("#container").hide();
    $("#buscando").html("Estamos buscando...").show();
    

    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es",
        method: 'GET', 
        success: function(data){
        $("#container").show();
        $("#buscando").hide();
        $("#tActual").html("Temperatura: "+data.main.temp);
        $("#tMax").html("Temperatura Máxima: "+data.main.temp_max);
        $("#tMin").html("Temperatura Mínima: "+ data.main.temp_min);
        $("#descripcion").html("Descripción de las condiciones actuales: "+ data.weather[0].description);
        $("#velocidad").html("Velocidad del viento: "+ data.wind.speed + " KM/H");
                    
    
    }
    })
}


