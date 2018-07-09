// uoda TAGS



var uodaTags = [
    {name: 'tag2', value: 't2'},
    {name: 'tag1', value: 't1'},
    {name: 'tag3', value: 't3'},
    {name: 'cosa', value: 'cs'},
    {name: 'tag5', value: 't5'},
    {name: 'OTHER', value: 'ot'},
    {name: 'tag7', value: 't7'},
];

$('#apli-tags, #forma-tags, #activ-tags, #ejemp-tags, #sens-tags').selectize({
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
    options: uodaTags,
    preload: false,
    maxItems: 20,
});