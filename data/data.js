//------------------Hard code data------------------------
let data = [
    [
      "id ",
      "case_id",
      "location_travel_address",
      "location_travel_ward",
      "location_travel_district",
      "date_traveled ",
      "lattitude",
      "longtitude",
    ],
    [
      "1",
      "",
      "Bệnh viện Nam Sài Gòn",
      "Binh Hung",
      "Binh Chanh",
      "03/06/2021",
      "10.73610978",
      "106.6908741",
    ],
    [
      "2",
      "",
      "Hẻm 95, đường số 3",
      "9",
      "Go Vap",
      "03/06/2021",
      "10.84712018",
      "106.6513029",
    ],
    [
      "3",
      "",
      "Quán ăn Gánh đậu, 119B Nguyễn Văn Quá",
      "Dong Hung Thuan",
      "12",
      "03/06/2021",
      "10.84720178",
      "106.6341428",
    ],
    [
      "4",
      "",
      "Hẻm 57/55 Điện Biên Phủ",
      "15",
      "Binh Thanh",
      "03/06/2021",
      "10.79603962",
      "106.6999017",
    ],
    [
      "5",
      "",
      "Cafe Trung Nguyen Legend, 104 Pho Quang",
      "2",
      "Tan Binh",
      "31/05/2021",
      "10.8088893",
      "106.6696541",
    ],
    [
      "6",
      "",
      "Công ty Piano, 302 Cộng Hòa",
      "13",
      "Tan Binh",
      "31/05/2021",
      "10.80292679",
      "106.6456846",
    ],
    [
      "7",
      "",
      "88 Đồng Khởi",
      "Bến Nghé",
      "1",
      "31/05/2021",
      "10.77600013",
      "106.7037921",
    ],
    [
      "8",
      "",
      "Khách sạn Sheraton Sài Gòn",
      "Bến Nghé",
      "1",
      "31/05/2021",
      "10.77600973",
      "106.7037407",
    ],
    [
      "9",
      "",
      "Công ty TNHH đầu tư dịch vụ Thiên Tú, số 1 Hoàng Việt",
      "4",
      "Tan Binh",
      "29/05/2021",
      "10.79743932",
      "106.660089",
    ],
    [
      "10",
      "",
      "Công ty Nàng Khô, 347/40 Lê Văn Thọ",
      "9",
      "Go Vap",
      "29/05/2021",
      "10.84705169",
      "106.654992",
    ]
  ];
//------------------Hard code data------------------------


//--------------Fetch API---------------------------------
const getLocations = async ()=>{
    const raw = await fetch('https://covid-vn.herokuapp.com/locations')
    const locations = await raw.json()
    return locations
}
//--------------Fetch API---------------------------------
 