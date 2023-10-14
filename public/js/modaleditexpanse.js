$(document).ready(function() {
    $(".edit-button").click(function() {
      var transactionId = $(this).data("transaction-id");
      var date = $(this).data("transaction-date");
      var category = $(this).data("transaction-expense");
      var amount = $(this).data("transaction-amount");
      var wallet = $(this).data("transaction-wallet");

      // Populate the modal with the data from the table row
      $("#edit-form-" + transactionId + " input[name='date_transaction']").val(date);
      $("#edit-form-" + transactionId + " input[name='expanses_id']").val(category);
      $("#edit-form-" + transactionId + " input[name='amount']").val(amount);
      $("#edit-form-" + transactionId + " input[name='wallet']").val(wallet);
    });

    $(".save-button").click(function() {
      var transactionId = $(this).data("transaction-id");
      var form = $("#edit-form-" + transactionId);

      // Send the updated data to the server using AJAX
      $.ajax({
        type: "PUT",
        url: "/transaction/v1/expenses/" +transactionId, // Update this URL to match your server route
        data: form.serialize(), // Serialize the form data
        success: function(response) {
          // Handle the success response (e.g., close the modal)
          $("#expanseedit" + transactionId).modal("hide");
          setTimeout(function () {
            location.reload();
          }, 1000);
        },
        error: function(error) {
          // Handle the error response
          console.error("Error updating transaction: " + error);
        }
      });
    });
  });