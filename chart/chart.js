//google.charts.setOnLoadCallback(drawChart);

function renderPieChart(locations) {
  let distList = [];
  distList[0] = {
    distName: locations[0]["dist"],
    num: 0,
  };
  for (const location of locations) {
    // if it exist a specific district
    const foundIndex = distList.findIndex(
      (dist) => dist.distName == location["dist"]
    );
    // if it exist a specific district, update increase num
    if (foundIndex > -1) {
      distList[foundIndex].num += 1;
    }
    // if does not exist, add new district obj
    else {
      distList.push({
        distName: location["dist"],
        num: 1,
      });
    }
  }

  // Create Schemma
  let schemmaArr = [["Quận", "Số khu vực nhiễm"]];
  for (const dist of distList) {
    schemmaArr.push([dist.distName, dist.num]);
  }

  let data = google.visualization.arrayToDataTable(schemmaArr);

  let options = {
    title: "Các quận ở TP.HCM",
    //titlePosition: "none",
    legend: { position: "none" },
    chartArea: {},
    //width: "100%",
    height: 400,
    is3D: true,
  };

  let chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

function renderLineChart(locations) {
  var dateList = [];
  dateList[0] = {
    date: locations[0].date,
    num: 0,
  };
 
  for (const location of locations) {
    // if it exist a specific district
    const foundIndex = dateList.findIndex(
      (date) => date.date === location["date"]
    );

    // if it exist a specific district, update increase num
    if (foundIndex > -1) {
      dateList[foundIndex].num += 1;
    }
    // if does not exist, add new district obj
    else {
      dateList.push({
        date: location["date"],
        num: 1,
      });
    }
  }
  

  let data = new google.visualization.DataTable();
  data.addColumn("date", "Ngày");
  data.addColumn("number", "Số khu cách ly");
  
  const dateFormat = dateList[0].date.split('/')
  const newDate = new Date(`${dateFormat[2]}-${dateFormat[1]}-${dateFormat[0]}`)
  console.log(newDate)
  console.log(dateList[0].num)
  let rows = []
  for (const element of dateList) {
    // Take day, month ,year from date format date/month/year
    const dateFormat = element.date.split('/')
    rows.push([new Date(`${dateFormat[2]}-${dateFormat[1]}-${dateFormat[0]}`),element.num]) 
  }
  console.log(rows)
  data.addRows(rows)

  let options = {
    title: "Số khu cách ly ở TP.HCM",
    //width: '500',
    height: 400,
    hAxis: {
      format: "d/M",
      gridlines: { count: 15 },
    },
    vAxis: {
      gridlines: { color: "none" },
      minValue: 0,
    },
  };

  // let data = google.visualization.arrayToDataTable([
  //   ['Year', 'Sales'],
  //   ['2004',  1000],
  //   ['2005',  1170],
  //   ['2006',  660 ],
  //   ['2007',  1030]
  // ]);

  let chart = new google.visualization.LineChart(
    document.getElementById("linechart")
  );

  chart.draw(data, options);
}
