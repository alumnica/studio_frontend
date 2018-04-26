


// cambiar texto de el image preview al escribir

$('#id_name_field').keyup(function () {
    var textToChange = $(this).val();
    $('.ttc2').text(textToChange);
});

// cambia los colers de el image preiew al dar click en el color

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
    allow :    ',',
});

// quita alphanum
$('#id_email, #id_password').off('.alphanum');
// Image file upload preview for Materias

$(document).ready(function () {
    var i = 0;
    var y = 0;

    // Materias-edit-seccion.html
    $("form#seccion-img img").each(function () {
        $(this).attr("id", "preview-form-" + i + "-file_field");
        i++;

    });

    // materias-edit.html
    $("form#materia-init img").attr({id:"preview-mp", class:"materia-cover" });
    // ambitos-edit.html
    $("form#ambito-creation img").attr({id:"preview-ap", class:"ambito-cover" });
    // materias-edit-oda
    $("form#odas-seccion-1 .img-preview-a img").each(function () {
        $(this).attr("id", "preview-form-" + i + "-active_icon_field");
        i++;        
    });

    $("form#odas-seccion-1 .img-preview-b img").each(function () {
        $(this).attr("id", "preview-form-" + y + "-completed_icon_field");
        y++;
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

$(document).ready(function () {
    $('.selectize-input input[type=text]').attr('maxlength', '20');
    $(".title span").append($(".id_name_field").val());
});


//More (Expand) or Less (Collapse)
$('.oda-materias').each(function(){
    var filterAmount = $(this).find('li').length;
    if( filterAmount > 5){    
      $('li', this).eq(4).nextAll().hide().addClass('toggleable');
      $(this).append('<li class="more">Más &darr;</li>');    
    }  
  });
  
  $('.oda-materias').on('click','.more', function(){
    if( $(this).hasClass('less') ){    
      $(this).text('Más \u2193').removeClass('less');    
    }else{
      $(this).text('Menos \u2191').addClass('less'); 
    }
    $(this).siblings('li.toggleable').slideToggle(); 
  }); 


var sinMomentos = 0;

$('.activity-num').each(function () {
    var x = $(this).text()
    if (x == 0) {
        $(this).find('span').html('<i class="fas fa-times"></i>');
        sinMomentos++;
        $(this).addClass('noMom');
    } else {
        $(this).find('span').html('<i class="fas fa-check"></i>');
    };
});

$('#sinMomentos').find('span').html(sinMomentos);


$('document').ready(function(){
        
    $('#odaSortList').jplist({				
        itemsBox: '.odas-list', 
        itemPath: '.oda-container', 
        panelPath: '.jplist-panel'	
    });  
    
});


$('.assigned-to_materias li').each(function()
    {	var theClass = $(this).text()
       $(this).addClass(theClass); 
});

$('.oda-tags li').each(function()
    {	var theClass = $(this).text()
       $(this).addClass(theClass); 
});
    


$('.oda-materias li').each(function(){
	var subjectName = $(this).text();
	var classQuantity = $('.'+ subjectName).length;
  $(this).find('span').text(classQuantity);
});

var noMat = 0

$('.assigned-to_materias').each(function(){
	if ($(this).has('li').length == 0) {
        $(this).addClass('noMat');
        noMat++;
    }
});

$('#sinMateria').find('span').html(noMat);

$('.oda-tags-list li').each(function(){
	var tagName = $(this).text();
	$(this).attr({
		"data-control-type":"button-filter",
		"data-control-action":"filter",
        "data-selected":" false",
        "data-control-name": tagName,
        "data-path":"."+tagName,		
	})
});

$.fn.ignore = function(sel){
    return this.clone().find(sel||">*").remove().end();
  };

$('.oda-materias li').each(function(){
	var matName =$(this).ignore("span").text();
	$(this).attr({
		"data-control-type":"button-filter",
		"data-control-action":"filter",
        "data-selected":" false",
        "data-control-name": matName,
        "data-path":"."+matName,		
	})
});