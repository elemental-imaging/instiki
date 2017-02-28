// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function toggleView(id)
{
  (document.getElementById(id).style.display == 'block') ? document.getElementById(id).style.display='none' : document.getElementById(id).style.display='block';
}

/*
 * Registers a callback which copies the csrf token into the
 * X-CSRF-Token header with each ajax request.  Necessary to 
 * work with rails applications which have fixed
 * CVE-2011-0447
*/

Ajax.Responders.register({
  onCreate: function(request) {
    var csrf_meta_tag = $$('meta[name=csrf-token]')[0];

    if (csrf_meta_tag) {
      var header = 'X-CSRF-Token',
          token = csrf_meta_tag.readAttribute('content');

      if (!request.options.requestHeaders) {
        request.options.requestHeaders = {};
      }
      request.options.requestHeaders[header] = token;
    }
  }
});

(function($){
  $(document).ready(function() {
    var contents;

    $('body').prepend('<div class="toc"><div class="toc-title">Table of Contents</div></div>');
    $('body').find('h2 + ul > li').data('gajus.contents.level', 3);

    contents = gajus.Contents({ articles: $('body').find('h2, h3').get()});

    $('.toc').append(contents.list());
  });
}(jQuery))
