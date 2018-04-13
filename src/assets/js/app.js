// import 'taggle';

import $ from 'jquery';

// import js libraries with webpack
// requires npm install imports-loader (sudo maybe required)
// check https://foundation.zurb.com/forum/posts/53526-how-to-add-npm-package-js-file-to-foundation-64
import 'imports-loader?jQuery=jquery!jquery.alphanum';

import whatInput from 'what-input';


window.$ = $;


// import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/ui/effects/effect-bounce';


import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

//Datatables
import 'datatables.net-zf';
import 'datatables.net-responsive-zf';

//Sweet Alert 2

import swal from 'sweetalert2';

window.swal = swal;

//selectize

import 'selectize';

// alphanum

// import alphanum from 'jquery.alphanum';


// import './lib/jquery.uploadPreview';

$(document).foundation();


$('#tabla-ambitos').DataTable({
    responsive: true,
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
    },
    "columnDefs": [
        { "orderable": false, "targets": [2, 3, 4] }
    ],

});

$('#tabla-materias').DataTable({
    responsive: true,
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
    },
    "columnDefs": [
        { "orderable": false, "targets": [2] }
    ],

});



// $("#fileUpload").on('change', function () {

//     if (typeof (FileReader) != "undefined") {

//         var image_holder = $("#image-holder");
//         image_holder.empty();

//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $("<img />", {
//                 "src": e.target.result,
//                 "class": "thumb-image"
//             }).appendTo(image_holder);

//         };
//         image_holder.show();
//         reader.readAsDataURL($(this)[0].files[0]);
//     } else {
//         alert("This browser does not support FileReader.");
//     }
// });

$('#changedtext').keyup(function () {
    var textToChange = $(this).val();
    $('.ttc2').text(textToChange);
});

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

// $(document).ready(function () {
//     if ( $('ul#sortable li').length > 3 ) {
//         $('#add-materia-button').hide();
//     }
// });

$("#class-adder").click(function (e) {
    e.preventDefault();

    var text = $("select[name='materias-select']").val();

    $("#sortable").append('<li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s sorter"></span>' + text + '<span class="remove_materia"><a href="#"><i class="fas fa-minus-square"></i></a></span></li>');
    $("#sortable").sortable('refresh');
    if ($('ul#sortable li').length > 3) {
        $('#add-materia-button').hide();
    }


});



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

$("input").alphanum();

// Image file upload preview for Materias

// Secciones



// $(document).ready(function () {

//     var A = 1;
//     var C = A;
//     console.log(C);

//     var i = 0;
    

//     $(".ex1").each(function () {

//         $("#section-" + i + "-upload").on('change', function () {
//             
//                 var image_holder = $("#image-holder-m-s"+i);
//                 image_holder.empty();

//                 var reader = new FileReader();
//                 reader.onload = function (e) {
//                     $("<img />", {
//                         "src": e.target.result,
//                         "class": "thumb-image"
//                     }).appendTo(image_holder);

//                 }
//                 image_holder.show();
//                 reader.readAsDataURL($(this)[0].files[0]);
//                
//             } else {
//                 alert("This browser does not support FileReader.");
//             }

//         });
//         i=i+1;
//         console.log(i);

//     });
// });
$(document).ready(function () {
    var i = 0;
    var y = 0;
    $("form#seccion-img img").each(function () {
        i++;
        $(this).attr("id", "preview-u" + i);

        console.log(i);
    });

    $("form#materia-init img").attr("id", "preview-mp");
    
    $("form#ambito-creation img").attr("id", "preview-ap");

    $("form#odas-seccion-1 .img-preview-a img").each(function () {
        i++;
        $(this).attr("id", "preview-oda-a" + i);

        console.log(i);
    });

    $("form#odas-seccion-1 .img-preview-b img").each(function () {
        y++;
        $(this).attr("id", "preview-oda-b" + y);

        console.log(y);
    });
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

$("form#seccion-img input[type='file']").change(function () {
    readURL(this);
});

$("#materia-u").change(function () {
    readURL(this);
});

$("#ambito-u").change(function () {
    readURL(this);
});

$("form#odas-seccion-1 input[type='file']").change(function () {
    readURL(this);
});


});
