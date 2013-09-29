$(document).on("click", function(event) {
	target = $(event.target);
	if (target.attr("data-dojo-attach-point") == "saveBtn") {
    var url_field = target.closest("fieldset").find("input[id^='href_mojo_widgets_LinkPicker_']");
    var url = url_field.val();
    if (typeof url != "undefined" && url.trim() != "") {
      if (!url.match(/(&|\?)kmi=/)) {
        var modified = url;
        if (url.match(/.*\?.+=.*/)) {
          modified = modified + "&";
        } else if (!url.match(/\?$/)) {
          modified = modified + "?";
        }
        modified = modified + "kmi=*|URL:EMAIL|*";
        url_field.val(modified);
      }
    }
	}
});