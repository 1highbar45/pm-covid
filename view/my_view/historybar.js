let counter = 0;
function renderHistoryRows(locations) {
    const max = counter + 5;
    const historyTable = document.getElementById("history-tbody");
    console.log("History", locations);
    while (counter < max) {
        let newRow = `<tr class="history-item">
                <th scope="row">${locations[counter]["id"]}</th>
                <td>${locations[counter]["date"]}</td>
                <td>${locations[counter]["address"]}</td>
                <td>${locations[counter]["dist"]}</td>
            </tr>`;
        let rows = historyTable.innerHTML;
        rows = rows + newRow;
        historyTable.innerHTML = rows;
        counter = counter + 1;
    }
}
