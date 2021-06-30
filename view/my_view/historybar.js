let counter = 0;
function renderHistoryRows(locations) {
    const max = counter + 5;

    const historyTable = document.getElementById("history-table");
    const historyTableBody = document.getElementById("history-tbody");
    const loadingSpinner = document.getElementById("history-loading");

    // Hide spinner
    loadingSpinner.style.visibility = "hidden";

    // Display the table
    historyTable.style.visibility = "visible";

    while (counter < max) {
        let newRow = `<tr class='history-item'>
      <th scope="row">${locations[counter]["id"]}</th>
      <td>${locations[counter]["date"]}</td>
      <td>${locations[counter]["address"]}</td>
      <td>${locations[counter]["dist"]}</td>
    </tr>`;
        let rows = historyTableBody.innerHTML;
        rows = rows + newRow;
        historyTableBody.innerHTML = rows;
        counter = counter + 1;
    }
}
