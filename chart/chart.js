google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Quận 1", 11],
        ["Quận 2", 2],
        ["Quận 3", 2],
        ["Quận 4", 2],
        ["Quận 5", 7],
    ]);

    let options = {
        title: "Các quận",
        //titlePosition: "none",
        legend: { position: "none" },
        chartArea: {},
        width: 550,
        height: 400,
    };

    let data_linechart = google.visualization.arrayToDataTable([
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
    ]);

    let linechart_options = {
        title: "Thành phố HCM",
        curveType: "function",
        legend: { position: "bottom" },
        width: 550,
        height: 400,
    };

    let lineChart = new google.visualization.LineChart(
        document.getElementById("linechart")
    );

    let chart = new google.visualization.PieChart(
        document.getElementById("piechart")
    );

    lineChart.draw(data_linechart, linechart_options);
    chart.draw(data, options);
}


