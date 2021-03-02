//Scroll Table
$(document).ready(function() {
    $('#example').DataTable( {
        "scrollY": 300,
        "scrollX": true,
        "paging": false,
        "searching": false,
        "info": false,
        "ajax": "data/myData",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );
} );

//Scroll Table
$(document).ready(function() {
    $('#example2').DataTable( {
        "scrollY": 300,
        "scrollX": true,
        "paging": false,
        "searching": false,
        "info": false,
        "ajax": "data/myData",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );
} );