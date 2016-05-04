$(document).ready(function() {
  $("#home-tab").append('<span id="sr-active-tab" class="sr-only">Current tab</span>');

  $("ul#tablist li").click(function() {
    var sr_text = $("#sr-active-tab").detach();
    $(this).append(sr_text);
  });
});