$("document").ready(function () {
    $('a').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            //$(this).
    });
    $('container').on('click', function(e) {
        console.log("stop");
    })
});
