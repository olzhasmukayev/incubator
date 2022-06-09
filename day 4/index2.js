$('document').ready(function() {
    $('#example').on('click', 'button', function(e) {
        console.log(e);
        $(this).parent().addClass('highlighted');
    });
});