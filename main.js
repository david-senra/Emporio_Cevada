$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });
    //para strings, é "S" ao invés de "0"

    $("#formulario-inputs").validate({
        rules: {
            nome: {
                required: true,
            },
            mail: {
                required: true,
                email: true,
            },
            telefone: {
                minlength: 11,
            },
            mensagem: {
                required: true,
            },
        },
        errorElement: "div",
        messages: {
            nome:  "Digite o seu nome.",
            mail: "Digite um e-mail válido.",
            telefone: "Digite um telefone válido.",
            mensagem: "Digite uma mensagem."
        },
        highlight: function (errorElement) {
            $(errorElement).addClass('error');
            $($($(errorElement).parent()).children('input')).removeClass('error');
            $($($(errorElement).parent()).children('input')).addClass('error-parent');
            $($($(errorElement).parent()).children('textarea')).removeClass('error');
            $($($(errorElement).parent()).children('textarea')).addClass('error-parent');
        },
        unhighlight: function (errorElement) {
            $(errorElement).removeClass('error');
            $($($(errorElement).parent()).children('input')).removeClass('error-parent');
            $($($(errorElement).parent()).children('textarea')).removeClass('error-parent');
        },
        submitHandler: function(form) {
            alert("Mensagem enviada com sucesso!");
            form.submit();
        },
        invalidHandler: function(evento, validador) {
        }
    });
    
    $(".botao").on("click", function() {
        if ($("#icone-botao").hasClass('bi-caret-down-fill')) {
            $("#icone-botao").removeClass('bi-caret-down-fill')
            $("#icone-botao").addClass('bi-caret-up-fill')
        }
        else {
            $("#icone-botao").removeClass('bi-caret-up-fill')
            $("#icone-botao").addClass('bi-caret-down-fill')
        }
    });
})