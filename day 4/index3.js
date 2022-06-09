$('document').ready(function() {
    $('select').on('change', function() {
        $("#result").text($(this).val() + ' ' + $(this).find(":selected").data("price"));
    })
});