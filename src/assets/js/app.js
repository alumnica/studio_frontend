import $ from 'jquery';
import whatInput from 'what-input';


window.$ = $;


// import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/sortable';


import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

//Datatables
import 'datatables.net-zf';
import 'datatables.net-responsive-zf';

//taggle

//jquery image upload

// import './lib/jquery.uploadPreview';

$(document).foundation();


    $('#tabla-ambitos').DataTable( {
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
        },
        "columnDefs": [
            { "orderable": false, "targets": [2, 3, 4, 6] }
        ],

    } );  

    $('#tabla-materias').DataTable( {
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
        },
        "columnDefs": [
            { "orderable": false, "targets": [2] }
        ],

    } );  



$("#fileUpload").on('change', function () {

    if (typeof (FileReader) != "undefined") {

        var image_holder = $("#image-holder");
        image_holder.empty();

        var reader = new FileReader();
        reader.onload = function (e) {
            $("<img />", {
                "src": e.target.result,
                "class": "thumb-image"
            }).appendTo(image_holder);

        }
        image_holder.show();
        reader.readAsDataURL($(this)[0].files[0]);
    } else {
        alert("This browser does not support FileReader.");
    }
});

$('#changedtext').keyup(function() {
    var textToChange = $(this).val();
    $('.ttc2').text(textToChange);
  });

  $('#color-button input[type=radio]').click(function()  {
    let $this = $(this);
    $('#image-holder').attr('class', $this.data('a'));
    $('#ttc').attr('class', $this.data('b'));
  });
  
  $( function() {
    $( "#sortable" ).sortable();
    // $( "#sortable" ).disableSelection();
  } );