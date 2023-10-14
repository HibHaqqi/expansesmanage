$(document).ready(function () {
  $(".delete-button").click(function () {
    var transactionId = $(this).data("transaction-id");
    var confirmationModal = $("#deleteConfirmationExpanse" + transactionId);

    // Show the confirmation modal
    confirmationModal.modal("show");

    // Listen for the "Delete" button click inside the modal
    $("#confirmDeleteButton" + transactionId).on("click", function () {
      $.ajax({
        type: "DELETE",
        url: "/transaction/v1/delete-expanse/" + transactionId, // Update this URL to match your server route,
        success: function (response) {
          // Handle the success response (e.g., close the modal)
          $("#deleteConfirmationExpanse" + transactionId).modal("hide");
          setTimeout(function () {
            location.reload();
          }, 1000);
        },
        error: function (error) {
          // Handle the error response (e.g., display an error message)
          console.error("Error deleting transaction: " + error);
          // Optionally, display an error message to the user
        },
      });
    });
  });
});
