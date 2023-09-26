$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();

    var formData = $(this).serialize();
    

    $.ajax({
      type: "POST",
      url: "/transaction/v1/expenses",
      data: formData,
      success: function (response) {
        alert(response.message);
        $('#message').addClass('alert-success').text(response.message).show();        
        // Close the modal
        $("#expansesadd").modal("hide");

        
        // Hide the message after 3 seconds
        

        setTimeout(function() {
            location.reload();
          }, 3000);
        
      },
      error: function (response) {
        alert(response.message);

    // Hide the message after 3 seconds
    setTimeout(function() {
      $('#message').hide();
    }, 3000);}
    });
  });
});
