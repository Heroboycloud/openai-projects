function generateResponse(message) {
  $.ajax({
    type: 'POST',
    url: '/gen',
    data: { message: message },
    success: function(response) {
      console.log(response.text);
    }
  });
}

$(document).ready(function() {
  $("#generate-button").click(function() {
    const message = $("#message-input").val();
    generateResponse(message);
  });
});
