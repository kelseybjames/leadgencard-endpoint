var fadeStatus = function() {
  $('#submission-status').fadeOut(1000);
};

var removePendingStatus = function(){
  $('#submission-status').removeClass('alert alert-warning');
  $('#submission-status').removeClass('alert alert-danger');
  $('#submission-status').text('');
};

var successStatus = function(){
  removePendingStatus();
  $('#submission-status').show();
  $('#submission-status').addClass('alert alert-success');
  $('#submission-status').text('Submitted Successfully');
  setTimeout(fadeStatus, 2000);
};

var errorStatus = function(error, leadCapture){
  console.log(leadCapture);
  var errorString = "";
  if (leadCapture !== undefined) {
    errorString = ": " + leadCapture.screen_name;
  };
  $('#submission-status').show();
  removePendingStatus();
  $('#submission-status').addClass('alert alert-danger');
  $('#submission-status').text(error + errorString);
  setTimeout(fadeStatus, 2000);
};

$("#create-custom-capture").click(function() {
  event.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var screen_name = $("#screen_name").val();
  var tw_userId = $("#tw_userId").val();
  var token = $("#token").val();
  var card = $("#card_value").val();
  var source = $("#source").val();

  var params = { name: name,
                 email: email,
                 screen_name: screen_name,
                 tw_userId: tw_userId,
                 token: token,
                 card: card,
                 source: source };

  $.ajax({
    type: "GET",
    url: "/endpoint",
    contentType: "application/json",
    data: params,
    error: function() {
      errorStatus("Lead Capture Submission Error: ", params);
    },
    success: function() {
      successStatus();
    }
  })  
});