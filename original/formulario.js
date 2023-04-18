$(document).ready(function(){
    $("#formularioProceso").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            nombre: {
                required: true
            },
            apellido: {
                required: true
            },
            pais: {
                required: true
            },
            txtComment: {
                required: true
            },
        },
        messages: {
            email: {
                required: "Por favor ingrese su correo electrónico",
                email: "Por favor ingrese un correo electrónico válido"
            },
            nombre: {
                required: "Por favor ingrese su nombre"
            },
            apellido: {
                required: "Por favor ingrese su apellido"
            },
            pais: {
                required: "Por favor ingrese su país"
            },
            txtComment: {
                required: "Por favor ingrese un comentario"
            }
        },
        submitHandler: function(form) {
            var email = $("#email").val();
            var nombre = $("#nombre").val();
            var apellido = $("#apellido").val();
            var pais = $("#pais").val();
            var txtComment = $("#txtComment").val()
            alert("Datos completados:\nEmail: " + email + "\nNombre: " + nombre + "\nApellido: " + apellido + "\nPais: " + pais + "\n Comentario: " + txtComment);

            //Generar pdf

            var pdf = new jsPDF();
            pdf.text("Email: " + email, 10,10);
            pdf.text("Nombre: " + nombre, 10, 20);
            pdf.text("Apellido: " + apellido, 10, 30);
            pdf.text("País: " + pais, 10, 40);
            pdf.text("Comentario: " + txtComment, 10,50);

            // Generar el archivo PDF como Blob
            var pdfBlob = pdf.output('blob');

            // Crear un enlace de descarga
            var downloadLink = document.createElement('a');
            downloadLink.href = URL.createObjectURL(pdfBlob);
            downloadLink.download = 'datos_usuario.pdf';
            downloadLink.click();

            // Liberar el objeto Blob
            URL.revokeObjectURL(pdfBlob);

            //form.submit();
        }
    });
});
