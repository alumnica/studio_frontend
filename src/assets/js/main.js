


// cambiar texto de el image preview al escribir

$('#id_name_field').keyup(function () {
    var textToChange = $(this).val();
    $('.ttc2').text(textToChange);
});

// cambia los colores de el image preiew al dar click en el color

$('#color-button input[type=radio]').click(function () {
    let $this = $(this);
    $('#image-holder').attr('class', $this.data('a'));
    $('#ttc').attr('class', $this.data('b'));
});

//Sortable Materias en creacion de  Ambitos

$(function () {
    $("#sortable").sortable();
    // $( "#sortable" ).disableSelection();
    // deprecated
});


$("#sortable").on('click', '.remove_materia', function () {
    $(this).parent().remove();
    if ($('ul#sortable li').length < 4) {
        $('#add-materia-button').show();
    }
});

var numMateria = 1;

// anadir materias en Ambito-edit

$(document).ready(function () {
    $('#select-materias').change(function () {
        if (!$("select[name='materias-select']").val()) {

            $('#class-adder').prop("disabled", true);
        }
        else {

            $('#class-adder').prop("disabled", false);
        }
    });
});

//pasa la materia elegida en el modal a la lista sorteable en ambitos-edit

$("#class-adder").click(function (e) {
    e.preventDefault();

    var text = $("select[name='materias-select']").val();

    $("#sortable").append('<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s sorter"></span>' + text + '<span class="remove_materia"><a href="#"><i class="fas fa-minus-square"></i></a></span></li>');
    $("#sortable").sortable('refresh');
    if ($('ul#sortable li').length > 3) {
        $('#add-materia-button').hide();
    }


});

// pasa el orden de las materias en ambitos-edit a un text input escondido
// para que en post tengamos al info correcta

$('#last_panel').on('mouseenter mouseleave', function () {

    var texts = [];

    $(function () {
        $('#sortable li').each(function () {
            texts.push($(this).text());
        });

        // alert(texts);
        $('#class_name').val(texts);
    });

});

// alphanum for all inputs

$("input").alphanum({
    allow :    ',-_',
});

// quita alphanum
$('#id_email, #id_password').off('.alphanum');
// Image file upload preview for Materias

$(document).ready(function () {
    var i = 0;
    var y = 0;

    // Materias-edit-seccion.html
    $("#seccion-img img").each(function () {
        $(this).attr({id:("preview-form-" + i + "-file_field"), class:"materia-prev"});
        i++;

    });

    // materias-edit.html
    $(".materia-preview img").attr({id:"preview-mp", class:"materia-cover is-hidden" });
    // ambitos-edit.html
    $("form#ambito-creation img").attr({id:"preview-ap", class:"ambito-cover is-hidden" });
    // materias-edit-oda
    $("form#oda-edit .oda-a-preview img").attr({id:"preview-oda-a", class:"oda-cover is-hidden"});

    $("form#oda-edit .oda-b-preview img").attr({id:"preview-oda-b", class:"oda-cover is-hidden"});
             

});

$(document).ready(function () {

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var cosa = '#preview-' + $(input).attr('name');
                $(cosa).attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#seccion-img input[type='file']").change(function () {
        readURL(this);
        
    });

    $("#materia-u").change(function () {
        readURL(this);
        $("#preview-mp").removeClass("is-hidden");
    });

    $("#ambito-u").change(function () {
        readURL(this);
        $("#preview-ap").removeClass("is-hidden");
    });
    
    $("#oda-a").change(function () {
        readURL(this);
        $("#preview-oda-a").removeClass("is-hidden");
    });
    
    $("#oda-b").change(function () {
        readURL(this);
        $("#preview-oda-b").removeClass("is-hidden");
    });
   
});

$(document).ready(function () {
    $('.selectize-input input[type=text]').attr('maxlength', '20');
    $(".title span").append($(".id_name_field").val());
});

function is_valid_form_images (){
    result = true;
    var inputs = $("form input[type='file']");
    for (var i=0; i<inputs.length; i++) {
        if(inputs[i].files.length>0){
            var image_size = inputs[i].files[0].size / 1024 / 1024;
            if (image_size > 10) {
                swal("Error", "El archivo de seleccionado excede los 10 MB", "error");
                result = false;
            }
        }

    }
    return result;
}


