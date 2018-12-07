
//Selecion de Materias dentro de Ambitos



var materiasList = [ 
    {name: 'Alquimia', code: 'AF'}, 
    {name: 'Brujeria', code: 'AX'}, 
    {name: 'Astrologia', code: 'AL'},
];

$('#select-materias').selectize({
    maxItems: 1,
    labelField: 'name',
    valueField: 'name',
    searchField: 'name',
    options: materiasList,
    preload: true,
});



//seleccion de ODAS dentro de Ambitos

var odaList = [
    {name: 'ODA-N1'},
    {name: 'ODA-N2'},
    {name: 'ODA-N3'},
    {name: 'ODA-N4'},
    {name: 'ODA-N5'},
    {name: 'ODA-N6'},
    {name: 'ODA-N7'},
];

var x = 0;

$("input[type='text']").each(function(){
    x++;
    $('#section-1-oda-'+x).selectize({
        maxItems: 1,
        labelField: 'name',
        valueField: 'name',
        searchField: 'name',
        hideSelected: true,
        persist: false,
        createOnBlur: true,
        create: function(input) {
            return {
                value: input,
                name: input
            }
        },
        options: odaList,
        preload: false,
    });
});




// var testList = [ 
//     {name: 'Alquimia'}, 
//     {name: 'Brujeria'}, 
//     {name: 'Astrologia'},
//     {name: 'cosa'},
//     {name: 'OTRA'},
//     {name: 'Borrador'},
// ];


// var $select = $('#test-selectize').selectize({
//     maxItems: 1,
//     labelField: 'name',
//     valueField: 'name',
//     searchField: 'name',
//     options: testList,
    
// });



$("#borrar").on('click', function () {
    var text = $("select[name='tester']").val();
    let obj = testList.filter(x => x.name == text);
    testList.delete(obj);
        var selectize = $select[0].selectize;
   			selectize.clearOptions();
    		selectize.addOption(testList);
});

// $("#borrar").on('click', function () {
//     control.removeOption(1)
// });