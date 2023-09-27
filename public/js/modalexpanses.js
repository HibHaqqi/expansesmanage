$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "/transaction/v1/expenses",
      data: formData,
      success: function (response) {
        $("#message").addClass("alert-success").text(response.message).show();
        // Close the modal

        setTimeout(function () {
          $("#expansesadd").modal("hide");
        }, 10000);

        // Hide the message after 3 seconds

        setTimeout(function () {
          location.reload();
        }, 1000);
      },
      error: function (response) {
        $('#message').addClass('alert-danger').text(response.message).show();


        // Hide the message after 3 seconds
        setTimeout(function () {
          $("#message").hide();
        }, 3000);
      },
    });
  });
});
