$('a.video').click(function () {
    var id = $(this).attr('href');
    var src = '//www.youtube.com/embed/'+id;
    $("#youtube").attr('src', src);
    return false;
});