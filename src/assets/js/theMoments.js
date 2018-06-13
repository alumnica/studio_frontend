$('#h5p-upload').change( function(){
    var filename = $('#h5p-upload').val().split('\\').pop();

    $('#fileName').html(filename);
});


// Tags momento

var momentoTags = [
    {name: 'tag2', value: 't2'},
    {name: 'tag1', value: 't1'},
    {name: 'tag3', value: 't3'},
    {name: 'cosa', value: 'cs'},
    {name: 'tag5', value: 't5'},
    {name: 'OTHER', value: 'ot'},
    {name: 'tag7', value: 't7'},
];

$('#momento-tags').selectize({
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
    options: momentoTags,
    preload: false,
    maxItems: 20,
    maxOptions: 3,
});

// list of ODAs

var odaList = [ 
    {name: 'ODA A'}, 
    {name: 'Yolo'}, 
    {name: 'Yo Mama'},
];

$('#oda-list').selectize({
    maxItems: 1,
    labelField: 'name',
    valueField: 'name',
    searchField: 'name',
    options: odaList,
    preload: true,
});


// list of tipos de momentos

var typeList = [ 
    {name: 'Tipo A'}, 
    {name: 'Tipo B'}, 
    {name: 'Tipo C'}, 
    {name: 'Tipo D'}, 
    {name: 'Tipo E'}, 
    {name: 'Tipo F'}, 
    {name: 'Tipo G'}, 
    
];

$('#tipo-momento').selectize({
    maxItems: 1,
    labelField: 'name',
    valueField: 'name',
    searchField: 'name',
    options: typeList,
    preload: true,
    maxOptions: 4,
});
