document.querySelectorAll('.btn-primary').forEach(function(button){
    button.addEventListener('click', function(e){
        // Get the parent table row
        let row = e.target.parentElement.parentElement;

        // Get cell data
        let c = row.childNodes;
        let date = c[0].textContent;
        let category = c[1].textContent;
        let amount = c[2].textContent;

        // Populate modal with data from selected table row
        document.querySelector('#expanseedit-' + transaction.id + ' #floatingAmount').value = amount;
        document.querySelector('#expanseedit-' + transaction.id + ' #floatingSelectGrid').value = category;
        document.querySelector('#expanseedit-' + transaction.id + ' #date_transaction').value = date;

        // Pass table row ID to the modal
        document.querySelector('#expanseedit-' + transaction.id + ' #recentTransactionByUserId.id').value = row.getAttribute('id');
    });
});