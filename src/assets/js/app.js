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
import 'jquery-ui/ui/widgets/draggable';
import 'jquery-ui/ui/widgets/droppable';



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

// gridstack

import gridstack from 'gridstack';

// import draggable shofiy

// import { Draggable } from '@shopify/draggable';

import interact from 'interactjs';



import alphanum from 'jquery.alphanum';


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
$('#id_email, #id_password').off('.alphanum');
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




// var z = 0;

// $('.drag-item').each(function () {
//     z++;
//     $('#makeMeDraggable' + z).draggable({
//         containment: '#drag-to-area',
//         cursor: 'move',
//         snap: '#drag-to-area',
//         grid: [75, 125],
//         stop: handleDragStop,
//     });
// });

// function handleDragStop( event, ui ) {
//     var offsetXPos = parseInt( ui.offset.left );
//     var offsetYPos = parseInt( ui.offset.top );
//     alert( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
//   }



var startPos = null;

interact('.block')
    .draggable({
        // enable inertial throwing
        inertia: true,
		// keep the element within the area of it's parent
        // restrict: {
        //     restriction: "parent",
        //     endOnly: true,
        //     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        // },
        snap:{
			targets: [startPos],
            range: Infinity,
            relativePoints: [ { x: 0.5, y: 0.5 } ],
            endOnly: true 
		},
        onmove: dragMoveListener,
        onstart: function (event) {
            
            var rect = interact.getElementRect(event.target);

            // record center point when starting the very first a drag
            var startPos = {
                x: rect.left + rect.width  / 2,
                y: rect.top  + rect.height / 2
            }
        
            event.interactable.draggable({
                snap: {
                    targets: [startPos]
                }
            });
        },
		
    });

 function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };


  interact('.dropzone').dropzone({
    // enable draggables to be dropped into this
    // overlap: 'center',
    // only accept elements matching this CSS selector
    // accept: '.block',

    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target,
            dropRect = interact.getElementRect(dropzoneElement),
		    dropCenter = {
                x: dropRect.left + dropRect.width  / 2,
                y: dropRect.top  + dropRect.height / 2
		    };

		event.draggable.draggable({
            snap: {
                targets: [ dropCenter ]
            }
		});


        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
    },
    ondragleave: function (event) {
		// when leaving a dropzone, snap to the start position
		
		event.draggable.draggable({
            snap: {
                targets: [ startPos ]
            }
		});

		// remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
    },
    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    },
    ondrop: function (event) {
            // add data-n of target
        event.relatedTarget.setAttribute('data-n', event.target.id)
		// in all the hidden inputs place the id of target in value
        $(function () {
            var i = 1;
            $('.block').each(function(){			
                $('#p-block-'+i).val(this.getAttribute('data-n'));	
            i++;			
            });
        });
    }
  });

$(document).ready(function () {
    var i = 0
    $('.block').each(function () {
        i++;
        $('#inputs-h').prepend(
            $('<input>').attr({
                type: 'hidden',
                id: 'p-block-' + i,
            })
        );
    });
});

