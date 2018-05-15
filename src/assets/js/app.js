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

// interact js

import interact from 'interactjs';

window.interact = interact;

// jplist
// import './jplist/jplist.core.min';
import './jplist/jplist.core-ajax.min';
import './jplist/jplist.preloader-control.min';
import './jplist/jplist.pagination-bundle.min';
import './jplist/jplist.sort-bundle.min';
import './jplist/jplist.filter-toggle-bundle.min';
import './jplist/jplist.textbox-filter.min';

// import './lib/jquery.uploadPreview';

$(document).foundation();


$('#tabla-ambitos').DataTable({
    responsive: true,
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
    },
    "order": [[ 1, "asc" ]]
    // "columnDefs": [
    //     { "orderable": false, "targets": [2, 3, 4] }
    // ],

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


