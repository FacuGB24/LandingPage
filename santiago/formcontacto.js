function validarFormulario(){
    $('.alert').remove

    var nombre = $('#nombre').val()
    var apellido = $('#apellido').val()
    var correo = $('#correo').val()
    var telefono = $('#telefono').val()
    var dni = $('#dni').val()

    if(nombre=="" || nombre==null){
        cambiarColor("nombre")
        mostrarAlerta("Por favor ingrese su nombre");
        return false;
    }else{
        var expresion = /[$%&|<>#]/
        if(expresion.test(nombre)){
            cambiarColor("nombre")
            mostrarAlerta("No se permiten caracteres especiales en el nombre");
        }
    }

    if(apellido=="" || apellido==null){
        cambiarColor("apellido")
        mostrarAlerta("Por favor ingrese su apellido");
        return false;
    }else{
        var expresion = /[$%&|<>#]/
        if(expresion.test(apellido)){
            cambiarColor("apellido")
            mostrarAlerta("No se permiten caracteres especiales en el apellido");
        }
    }

    if(correo=="" || correo==null){
        cambiarColor("correo")
        mostrarAlerta("Por favor ingrese su correo electronico");
        return false;
    }else{
        var expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if(expresion.test(correo)){
            cambiarColor("correo")
            mostrarAlerta("Por favor ingrese un correo valido");
        }
    }

    if(telefono=="" || telefono==null){
        cambiarColor("telefono")
        mostrarAlerta("Por favor ingrese su telefono");
        return false;
    }
    if(dni=="" || dni==null){
        cambiarColor("dni")
        mostrarAlerta("Por favor ingrese su dni");
        return false;
    }
}

function cambiarColor(dato){
    $('#'+dato).css({
        border: "1px solid #dd5144"
    })
}

function mostrarAlerta(texto){
    $('#nombre').before('<div class="alert">Error:'+texto+'</div>')
}