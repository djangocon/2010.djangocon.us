jQuery.fn.autoscroll = function() {
    $('html,body').animate({scrollTop: this.offset().top}, 500);
}

$(function() {
    $("#messages li a").click(function() {
        $(this).parent().fadeOut();
        return false;
    });
});

/*
     FILE ARCHIVED ON 08:17:40 Jul 02, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:42:10 Apr 07, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/