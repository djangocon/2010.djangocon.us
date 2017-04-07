jQuery.fn.uniform = function(settings) {
  settings = jQuery.extend({
    valid_class    : 'valid',
    invalid_class  : 'invalid',
    focused_class  : 'focused',
    holder_class   : 'ctrlHolder',
    field_selector : 'input, select, textarea'
  }, settings);
  
  return this.each(function() {
    var form = jQuery(this);
 
    // Select form fields and attach them higlighter functionality
    form.find(settings.field_selector).focus(function() {
      form.find('.' + settings.focused_class).removeClass(settings.focused_class);
      jQuery(this).parents("." + settings.holder_class).addClass(settings.focused_class)
    }).blur(function() {
      form.find('.' + settings.focused_class).removeClass(settings.focused_class);
    });
  });
};

// Auto set on page load...
$(document).ready(function() {
  q = jQuery('form.uniForm');
  if(q.length) {
    q.uniform();
  }
  $(document.activeElement).focus() //web-beta.archive.org/web/20111230201705/http://safari doesn't support this and has no alternative
});
/*
     FILE ARCHIVED ON 20:17:05 Dec 30, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:42:21 Apr 07, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/