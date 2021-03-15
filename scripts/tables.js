//SimpleTable
$(document).ready(function() {
    $('#simpleTable').DataTable( {
        "scrollY": 300,
        "scrollX": true,
        "paging": false,
        "searching": false,
        "info": false,
        "ajax": "data/myData",
        "autoWidth": true,
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



