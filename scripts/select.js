$(document).ready(function() {
    $('.select2-dates').select2();
});

$(".select2-dates").select2({
    allowClear: true,
    width: "resolve",
    minimumResultsForSearch: -1
});