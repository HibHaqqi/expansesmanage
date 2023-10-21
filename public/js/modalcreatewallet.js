$(document).ready(function () {
    $("form").on("submit", function (event) {
      event.preventDefault();
  
      var formData = $(this).serialize();
  
      $.ajax({
        type: "POST",
        url: "/wallet/v1/wallet",
        data: formData,
        success: function (response) {
          $("#message").addClass("alert-success").text(response.message).show();
          
          // Hide the message after 3 seconds
          setTimeout(function () {
            $("#walletModal").modal("hide");
          }, 3000);
  
          // Reload the page or perform other actions if needed
          location.reload();
        },
        error: function (response) {
          $("#message").addClass("alert-danger").text(response.message).show();
  
          // Hide the message after 3 seconds
          setTimeout(function () {
            $("#message").hide();
          }, 3000);
        },
      });
    });
});