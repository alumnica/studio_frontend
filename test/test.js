momentosAdd();

function momentosAdd() {
    for (i = 1; i <= 6; i++) {

        //enable sortable for all 6 udas
        $(function () {
            $("#oda-" + i).sortable();
            // $( "#sortable" ).disableSelection();
            // deprecated
        });

        // enable selectize for all inputs in modals

        $('#select-momentos'+i).selectize({
            maxItems: 1,
            labelField: 'name',
            valueField: 'name',
            searchField: 'name',
            options: momentosList,
            preload: true,
        });


        // enable and disable button to add oda
        $('#select-momentos'+i).change(function () {
            if (!$("select[name='momentos-select-'+i]").val()) {
                $('#momento-adder-' + i).prop("disabled", true);
            }
            else {
                $('#momento-adder-' + i).prop("disabled", false);
            }
        });
        //pasa la materia elegida en el modal a la lista sorteable en ambitos-edit
        $("#momento-adder-" + i).click(function (e) {
            e.preventDefault();
            var text = $("select[name='momentos-select-'+i]").val();
            $("#oda-" + i).append('<li class="momento-item"><i class="fas fa-external-link-alt"></i> ' + text + ' <span class="remove_materia"><a href="#"><i class="fas fa-minus-square"></i></a></span></li>');
            $("#oda-" + i).sortable('refresh');
            if ($('#oda-' + i + ' li').length > 4) {
                $('#add-materia-' + i).hide();
            }
        });
        $("#oda-" + i).on('click', '.remove_materia', function () {
            $(this).parent().remove();
            if ($('#oda-' + i + ' li').length < 6) {
                $('#add-materia-' + i).show();
            }
        });
    }
}





var testList = [ 
    {name: 'Alquimia', code: 'AF'}, 
    {name: 'Brujeria', code: 'AX'}, 
    {name: 'Astrologia', code: 'AL'},
];

var $select = $('#test-selectize').selectize({
    maxItems: 1,
    labelField: 'name',
    valueField: 'name',
    searchField: 'name',
    options: testList,
    
});



$("#borrar").on('click', function () {
    var text = $("#test-selectize).val();


    function findAndRemove(array, property, value) {
        array.forEach(function(result, index) {
          if(result[property] === value) {
            //Remove from array
            array.splice(index, 1);
          }    
        });
      }
      
      //Checks countries.result for an object with a property of 'id' whose value is 'AF'
      //Then removes it ;p
      findAndRemove(countries.results, 'name', text);
    
    
    var selectize = $select[0].selectize;
   	selectize.clearOptions();
    selectize.addOption(testList);
});





//enable sortable for all 6 udas
$(function () {
    $("#oda-1, #oda-2, #oda-3, #oda-4, #oda-5, #oda-6").sortable();
    // $( "#sortable" ).disableSelection();
    // deprecated
});

// add data='box name' to modal on +click

$('.add-materia').on('click', function(){
    $('#Modal-1').attr('uoda', $(this).parent().parent().attr('id'));
});


// enable and disable button to add oda
$('#select-momentos').change(function () {
    if (!$("#select-momentos").val()) {
        $('#momento-adder').prop("disabled", true);
    }
    else {
        $('#momento-adder').prop("disabled", false);
    }
});

//pasa la materia elegida en el modal a la lista sorteable en ambitos-edit
$("#momento-adder").click(function (e) {
    e.preventDefault();
    var text = $("#select-momentos").text();
    var value = $("#select-momentos").val();
    var uodaToGo = $('#Modal-1').attr('uoda');

    $('#'+uodaToGo+' ul').append('<li class="momento-item"><i class="fas fa-external-link-alt" data-url="'+value+'"></i> ' + text + ' <span class="remove_materia"><a href="#"><i class="fas fa-minus-square"></i></a></span></li>');
    $('#'+uodaToGo+' ul').sortable('refresh');
    if ($('#'+uodaToGo+' ul li').length > 4) {
        $('#'+uodaToGo+' .add-materia').hide();
    }
});

$(".oda-sort").on('click', '.remove_materia', function () {
    $(this).parent().remove();
    if ($(this).parent().length < 4) {
        $('.add-materia').show();
    }
});


$('fa-external-link-alt').on('click', function(){
    $('.h5p-preview iframe').attr('src', $(this).attr('data-url'))
})





$(".oda-sort").on('click', '.remove_materia', function () {
    $(this).parent().remove();
    if ($(this).parent().length < 4) {
        $('.add-materia').show();
    }
});

$('.oda-sort').on('click', '.mom-preview' function(){
    // var iUrl = $(this).attr('data-url');
    // $('iframe').attr('src', iUrl);

    alert('yp');
});


alertaX();

function alertaX() {
    alert('yp');
}



// pasa el orden de los momentos en cada uoda a su text input escondido
// para que en post tengamos al info correcta

$('#save-on').on('mouseenter mouseleave', function () {

    var apliTexts = [],
        formaTexts = [],
        activTexts = [],
        ejemTexts = [],
        sensTexts = [],
        evalTexts = [];


    $(function () {
        $('#uoda-1 li').each(function () {
            apliTexts.push($(this).text());
        });

        // send to hidden input
        $('#apli-momentos').val(apliTexts);
    });

    $(function () {
        $('#uoda-1 li').each(function () {
            formaTexts.push($(this).text());
        });

        // send to hidden input
        $('#apli-momentos').val(formaTexts);
    });

    $(function () {
        $('#uoda-1 li').each(function () {
            activTexts.push($(this).text());
        });

        // send to hidden input
        $('#apli-momentos').val(activTexts);
    });

    $(function () {
        $('#uoda-1 li').each(function () {
            ejemTexts.push($(this).text());
        });

        // send to hidden input
        $('#apli-momentos').val(ejemTexts);
    });

    $(function () {
        $('#uoda-1 li').each(function () {
            sensTexts.push($(this).text());
        });

        // send to hidden input
        $('#apli-momentos').val(sensTexts);
    });

    $(function () {
        $('#uoda-1 li').each(function () {
            evalTexts.push($(this).text());
        });

        // send to hidden input
        $('#apli-momentos').val(evalTexts);
    });

});