function selectedLocation() {
    var selected = document.getElementById("location").value;
    if (selected == "gv") {
        let goVap = new google.maps.LatLng(10.84712018, 106.6513029);
        map.setCenter(goVap);
        map.setZoom(15);
    } else if (selected == "bt") {
        let binhThanh = new google.maps.LatLng(
            10.809900645809872,
            106.69940622946883
        );
        map.setCenter(binhThanh);
        map.setZoom(15);
    } else if (selected == "1") {
        var quan1 = new google.maps.LatLng(
            10.771803846277418,
            106.69407079563038
        );
        map.setCenter(quan1);
        map.setZoom(15);
    } else if (selected == "3") {
        var quan3 = new google.maps.LatLng(
            10.779922037885635,
            106.6842996150463
        );
        map.setCenter(quan3);
        map.setZoom(15);
    } else if (selected == "4") {
        var quan4 = new google.maps.LatLng(
            10.756701556009368,
            106.70605505479331
        );
        map.setCenter(quan4);
        map.setZoom(15);
    } else if (selected == "5") {
        var quan5 = new google.maps.LatLng(
            10.751960638073829,
            106.67059472410799
        );
        map.setCenter(quan5);
        map.setZoom(15);
    } else if (selected == "6") {
        var quan6 = new google.maps.LatLng(
            10.739398502031312,
            106.63438656039601
        );
        map.setCenter(quan6);
        map.setZoom(15);
    } else if (selected == "7") {
        var quan7 = new google.maps.LatLng(
            10.719703458048476,
            106.73864120224995
        );
        map.setCenter(quan7);
        map.setZoom(15);
    } else if (selected == "8") {
        var quan8 = new google.maps.LatLng(
            10.730808146034718,
            106.6426294384169
        );
        map.setCenter(quan8);
        map.setZoom(15);
    } else if (selected == "10") {
        var quan10 = new google.maps.LatLng(
            10.767236736909982,
            106.66444955016584
        );
        map.setCenter(quan10);
        map.setZoom(15);
    } else if (selected == "11") {
        var quan11 = new google.maps.LatLng(
            10.760717178309022,
            106.65087335367386
        );
        map.setCenter(quan11);
        map.setZoom(15);
    } else if (selected == "12") {
        var quan12 = new google.maps.LatLng(
            10.865106345212034,
            106.64301599986929
        );
        map.setCenter(quan12);
        map.setZoom(15);
    } else if (selected == "td") {
        var thuDuc = new google.maps.LatLng(
            10.847336767869715,
            106.74735163683201
        );
        map.setCenter(thuDuc);
        map.setZoom(15);
    } else if (selected == "bc") {
        var binhChanh = new google.maps.LatLng(
            10.715812510027973,
            106.55734415170431
        );
        map.setCenter(binhChanh);
        map.setZoom(15);
    } else if (selected == "hm") {
        var hocMon = new google.maps.LatLng(
            10.879046187498968,
            106.56087394666488
        );
        map.setCenter(hocMon);
        map.setZoom(15);
    } else if (selected == "cc") {
        var cuChi = new google.maps.LatLng(
            11.007827818959674,
            106.4920302618335
        );
        map.setCenter(cuChi);
        map.setZoom(15);
    } else if (selected == "nb") {
        var nhaBe = new google.maps.LatLng(
            10.683920857731351,
            106.7049806312853
        );
        map.setCenter(nhaBe);
        map.setZoom(15);
    } else if (selected == "tp") {
        var tanPhu = new google.maps.LatLng(
            10.791624159229114,
            106.63203847728587
        );
        map.setCenter(tanPhu);
        map.setZoom(15);
    } else if (selected == "cg") {
        var canGio = new google.maps.LatLng(
            10.439071835289003,
            106.9053141402076
        );
        map.setCenter(canGio);
        map.setZoom(15);
    }
}

// 10.809900645809872, 106.69940622946883
