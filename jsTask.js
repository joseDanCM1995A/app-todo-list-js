//agregagomos una función autoinvocada para la protección de nuestro codigo
(function(){

    //accediendo al DOM para obtener los 
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnAgregarTarea = document.getElementById("btn-agregar");

    //declaración de funciones
    var agregarTarea = function(){
        //verificamos el valor que tiene la tarea introducida en la entrada
        var tarea = tareaInput.value;
        //verificamos el valor
        //alert(tarea);
        //creamos el elemento lista donde almacenaremos la nueva tarea
        var nuevaTarea = document.createElement("li");
        //creamos un elemento tipo enlace para que haya contexto en la nueva tarea
        var enlace = document.createElement("a");
        //creamos una variable y le agregamos el valor de la tarea
        var contenido = document.createTextNode(tarea);


        //condicion para ver si no hay un entrada en el campo
        if(tarea === ""){
            //modificamos el valor del placeholder del elemento html
            tareaInput.setAttribute("placeholder", "introduce una tarea valida");
            //creamos la clase error en el elemento html
            tareaInput.className = "error";
            //deveolviendo falso si se cumple la condición
            return false;

        }

        //agregando el contenido al enlace
        enlace.appendChild(contenido);
        //establecemos el href al enlace
        enlace.setAttribute("href","#");
        //le agregamos el enlace a la nueva tarea
        nuevaTarea.appendChild(enlace);
        //agregamos lal nueva tarea a la lista de tarea
        lista.appendChild(nuevaTarea);

        //dejando vacio el campo de entrada una vez insertada la nueva tarea
        tareaInput.value = "";

        //eliminando de la lista
        for(let i = 0; i <= lista.children.length -1; i++){
            //recorriedon los elementos de la lista y asignandoles un evento a cada uno
            lista.children[i].addEventListener("click", function(){
                //accediendo al padre y eliminando el hijo
                this.parentNode.removeChild(this);
            });
     }
    };
//funcion para verificar el campo donde se ingresa la nueva tarea

    var VerificarEntrada = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder","Agrega tu tarea");
    };
    //funcion para eliminar tarea
    var eliminarTarea = function(){
        //accediendo al padre y eliminando el hijo
        this.parentNode.removeChild(this);
    };

    //eventos
    //agregar tarea
    btnAgregarTarea.addEventListener("click", agregarTarea);

    //comprobar si no se envia una tarea vacia
    tareaInput.addEventListener("click", VerificarEntrada);

    //eliminar tarea
     for(let i = 0; i <= lista.children.length -1; i++){
            lista.children[i].addEventListener("click", eliminarTarea);
     }

}());