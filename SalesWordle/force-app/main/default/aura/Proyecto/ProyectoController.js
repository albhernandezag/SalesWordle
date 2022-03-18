
({
    enviar : function(component, event, helper) {
        var Palabras = ['Setas', 'Patos', 'Gatos', 'Hurto', 'Tonto', 'Cinco']
        var palabraCorrecta = Palabras[Math.floor(Math.random() * Palabras.length)];
        let val = component.get("v.textvalue");
        let guess = "Joses";
        

        comprobarLongitud(val);
        
        function comprobarLongitud (palabra) {
            
            if(palabra.length === 5){

                    var appevent =$A.get("e.c:Evento");
                    appevent.setParams({"palabraCorrecta":palabraCorrecta, "guess": val});
                    
                    appevent.fire()
                    comprobarSolucion(palabra);
            }else{
                alert("Introduce una palabra de 5 letras");
            }
            
        }

        function comprobarSolucion (val) {
            
            if(val === palabraCorrecta){
                alert("Has ganado!! Adivinaste la palabra");
            }
            
        }
    }
})
