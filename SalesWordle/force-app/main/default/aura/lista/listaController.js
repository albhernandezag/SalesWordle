({
    myAction : function(component, event, helper) {

    },

    mostranding : function(component, event, helper) {
        var respuesta = event.getParam("guess");
        var palabra_correcta = event.getParam("palabraCorrecta");
        var palabra_correcta_array = palabra_correcta.split("");
        var respuesta_array = respuesta.split("");
        

        function PrintLetras(respuesta_array, palabra_correcta_array, num){
            columna[num+1] = linea.insertCell(0);
            if (respuesta_array[num] === palabra_correcta_array[num]){
                columna[num+1].innerHTML = "<h1 id='Verde'>"+respuesta_array[num]+"</h1>";
            }
            else if(palabra_correcta_array.includes(respuesta_array[num])){
                columna[num+1].innerHTML = "<h1 id='Amarillo'>"+respuesta_array[num]+"</h1>";
            }
            else{
                columna[num+1].innerHTML = "<h1>"+respuesta_array[num]+"</h1>";
            }
            
        }
        
        var table = document.getElementById('tablero');
        var linea = table.insertRow(-1);
        var columna = [];

        for (var i = 4; i > -1; i--) {
            PrintLetras(respuesta_array, palabra_correcta_array, i);
        }

        component.get("v.line1");
        component.get("v.line2");
        component.get("v.line3");
        component.get("v.line4");
        component.get("v.line5");

        component.set("v.line1", respuesta_array[0]);
        component.set("v.line2", respuesta_array[1]);       
        component.set("v.line3", respuesta_array[2]);
        component.set("v.line4", respuesta_array[3]);   
        component.set("v.line5", respuesta_array[4]);      
    }
})
