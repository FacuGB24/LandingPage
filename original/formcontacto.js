function validarFormulario(){

    var nombres = $('#nombres').val()
    var apellidos = $('#apellidos').val()
    var correos = $('#correos').val()
    var telefonos = $('#telefonos').val()
    var dnis = $('#dnis').val()

    if(nombres=="" || nombres==null){
        cambiarColor("nombres")
        mostrarAlerta(" Por favor ingrese su nombre");
        return false;
    }else{
        var expresion = /[$%&|<>#]/
        if(expresion.test(nombres)){
            cambiarColor("nombres")
            mostrarAlerta(" No se permiten caracteres especiales en el nombre");
            return false
        }
    }

    if(apellidos=="" || apellidos==null){
        cambiarColor("apellidos")
        mostrarAlerta(" Por favor ingrese su apellido");
        return false;
    }else{
        var expresion = /[$%&|<>#]/
        if(expresion.test(apellidos)){
            cambiarColor("apellidos")
            mostrarAlerta(" No se permiten caracteres especiales en el apellido");
            return false
        }
    }

    if(correos=="" || correos==null){
        cambiarColor("correos")
        mostrarAlerta(" Por favor ingrese su correo electronico");
        return false;
    }else{
        var expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if(expresion.test(correos)){
            cambiarColor("correos")
            mostrarAlerta(" Por favor ingrese un correo valido");
            return false
        }
    }

    if(telefonos=="" || telefonos==null){
        cambiarColor("telefonos")
        mostrarAlerta(" Por favor ingrese su telefono");
        return false;
    }
    if(dnis=="" || dnis==null){
        cambiarColor("dnis")
        mostrarAlerta(" Por favor ingrese su dni");
        return false;
    }
}

function cambiarColor(dato){
    $('#'+dato).css({
        border: "1px solid #dd5144"
    })
}

function mostrarAlerta(texto){
    $('#nombres').before('<div class="alert">Error :'+texto+'</div>')
}

function mensaje(){

    var nombres = $('#nombres').val()
    var apellidos = $('#apellidos').val()
    var correos = $('#correos').val()
    var telefonos = $('#telefonos').val()
    var dnis = $('#dnis').val()
    
    if(nombres=="" || apellidos=="" || correos=="" || telefonos=="" ||dnis==""){
        return alert('Por favor valide sus datos')
    }else{
        return alert('Formulario enviado correctamente') 
    }
}