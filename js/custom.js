
initMap()
loadRDevices()
showLocation()
var map;
var popUp;
var sidebar;
function initMap(){
    popUp = popTableTemplate()
    map = L.map('map').setView([-12.050690, -77.039571], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([-12.050690, -77.039571]).addTo(map);
    marker.bindPopup(popUp).openPopup();
    sidebar = L.control.sidebar('sidebar').addTo(map);

}

function popTableTemplate(){
    return '<div class="row justify-content-center">'+
    '    <div>'+
    '        <button id="popBtnLocation" class="btnPopup popBtnLocation" type="button" onclick="showLocation()">Location</button>'+
    '        <button id="popBtnStatus" class="btnPopup popBtnStatus" type="button" onclick="showStatus()">Status</button>'+
    '        <button id="popBtnDetails" class="btnPopup popBtnDetails" type="button" onclick="showDetails()">Details</button>'+
    '        <button id="popBtnAlarms" class="btnPopup popBtnAlarms" type="button" onclick="showAlarms()">Alarms</button>'+
    '        <button id="popBtnBooking" class="btnPopup popBtnBooking" type="button" onclick="showBooking()">Booking</button>'+
    '    </div>'+
    '    <div class="row mt-2 content-table">'+
    '      <div id="popLocation" class="col-lg-12 popLocation">'+
            tableLocation()+
    '      </div>'+
    '      <div id="popStatus" class="col-lg-12 popStatus">'+
            tableStatus()+
    '      </div>'+
    '      <div id="popDetails" class="col-lg-12 popDetails">'+
            tableDetails()+
    '      </div>'+
    '      <div id="popAlarms" class="col-lg-12 popAlarms">'+
            tableAlarms()+
    '      </div>'+
    '      <div id="popBooking" class="col-lg-12 popBooking">'+
            tableBooking()+
    '      </div>'+
    '    </div>'+
    '  </div>'
}
function tableLocation(){
    return  '<div class="row">'+
                '<div class="col-3">'+
                    'Reeferer ID:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Device Fence:'+
                '</div>'+
                '<div class="col-3">'+
                    '-NA-'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Server Fence:'+
                '</div>'+
                '<div class="col-3">'+
                    '-NA-'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Latitud:'+
                '</div>'+
                '<div class="col-3">'+
                    '-12.8383883'+
                '</div>'+
                '<div class="col-3">'+
                    ''+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Longitud:'+
                '</div>'+
                '<div class="col-3">'+
                    '-17.382898323'+
                '</div>'+
                '<div class="col-3">'+
                    ''+
                '</div>'+
                '<div class="col-3">'+
                    ''+
                '</div>'+
            '</div>'
}
function tableStatus(){
    return  '<div class="row">'+
                '<div class="col-3">'+
                    'Refeer ID:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Event Time:'+
                '</div>'+
                '<div class="col-3">'+
                    '02/22/2022 15:39:20'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Event:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Set Point Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'Alarm:'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Return Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'PWR:'+
                '</div>'+
                '<div class="col-3">'+
                    'Powered'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Supply Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'RUN:'+
                '</div>'+
                '<div class="col-3">'+
                    'Running'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Ambient Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'Device Bat:'+
                '</div>'+
                '<div class="col-3">'+
                    'Running'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Controller Mode:'+
                '</div>'+
                '<div class="col-3">'+
                    'N.A'+
                '</div>'+
                '<div class="col-3">'+
                
                '</div>'+
                '<div class="col-3">'+
                
                '</div>'+
            '</div>'
}
function tableDetails(){
    return  '<div class="row">'+
                '<div class="col-3">'+
                    'Refeer ID:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Event Time:'+
                '</div>'+
                '<div class="col-3">'+
                    '02/22/2022 15:39:20'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Event:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Set Point Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'Alarm:'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Return Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'PWR:'+
                '</div>'+
                '<div class="col-3">'+
                    'Powered'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Supply Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'RUN:'+
                '</div>'+
                '<div class="col-3">'+
                    'Running'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Ambient Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    'ZXXXXXX'+
                '</div>'+
                '<div class="col-3">'+
                    'Device Bat:'+
                '</div>'+
                '<div class="col-3">'+
                    'Running'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Controller Mode:'+
                '</div>'+
                '<div class="col-3">'+
                    'N.A'+
                '</div>'+
                '<div class="col-3">'+
                
                '</div>'+
                '<div class="col-3">'+
                
                '</div>'+
            '</div>'
}
function tableAlarms(){
    return  '<div class="row">'+
                'No data'+
            '</div>'
}
function tableBooking(){
    return  '<div class="row">'+
                '<div class="col-3">'+
                    'Booking*:'+
                '</div>'+
                '<div class="col-3">'+
                    'NT-TOTOTOTO'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-3">'+
                    'Booking Temp:'+
                '</div>'+
                '<div class="col-3">'+
                    '-25'+
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
                '<div class="col-3">'+
                    
                '</div>'+
            '</div>'
}

function showLocation(){
    removeActive()
    $(".popBtnLocation").addClass("btnActive");
    $(".popLocation").show()    
    $(".popStatus").hide()
    $(".popDetails").hide()
    $(".popAlarms").hide()
    $(".popBooking").hide()
}
function showStatus(){
    removeActive()
    $(".popBtnStatus").addClass("btnActive");
    $(".popLocation").hide()
    $(".popStatus").show()
    $(".popDetails").hide()
    $(".popAlarms").hide()
    $(".popBooking").hide()
}
function showDetails(){
    removeActive()
    $(".popBtnDetails").addClass("btnActive");
    $(".popLocation").hide()
    $(".popStatus").hide()
    $(".popDetails").show()
    $(".popAlarms").hide()
    $(".popBooking").hide()
}
function showAlarms(){
    removeActive()
    $(".popBtnAlarms").addClass("btnActive");
    $(".popLocation").hide()
    $(".popStatus").hide()
    $(".popDetails").hide()
    $(".popAlarms").show()
    $(".popBooking").hide()
}
function showBooking(){
    removeActive()
    $(".popBtnBooking").addClass("btnActive");
    $(".popLocation").hide()
    $(".popStatus").hide()
    $(".popDetails").hide()
    $(".popAlarms").hide()
    $(".popBooking").show()
}
function removeActive(){
    $(".popBtnLocation").removeClass("btnActive");
    $(".popBtnStatus").removeClass("btnActive");
    $(".popBtnDetails").removeClass("btnActive");
    $(".popBtnAlarms").removeClass("btnActive");
    $(".popBtnBooking").removeClass("btnActive");
}

function loadRDevices(){
    lista = [
        {
            nombre: "ABDC",
            imei: "282837273283723872"
        },
        {
            nombre: "ABDC",
            imei: "282837273283723872"
        }
    ]
    html = ""
    for (var i = 0; i < lista.length; i++) {
        html += '<tr onclick="setPointTo(-12.022753, -76.887202)">'+
                    '<td>'+lista[i].nombre+'</td>'+
                    '<td>'+lista[i].imei+'</td>'+
                '</tr>'
    }
    $("#tbodyR").html(html)
    $("#tbodyG").html(html)
    $("#tbodyM").html(html)
    $("#tbodyT").html(html)

}
function setPointTo(lat, lon){
    var p = popTableTemplate()
    showLocation()
    map.setView([lat, lon], 14);
    var marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(p).openPopup();
    loadTableBottomData();
    loadDataChart();
}
function loadTableBottomData() {
    lista = [
        {
            id: "12",
            contenedor: "ABDC",
            fecha: "12-02-2023 12:24:40",
            temperatura: "15 C°",
            latitud: "-10.7",
            longitud: "-77.6",
            ambiente: "25 C°",
            humedad: "60",
            defrost: "40",
            modo: "optimizado"
        },
        {
            id: "12",
            contenedor: "ABDC",
            fecha: "12-02-2023 12:24:40",
            temperatura: "15 C°",
            latitud: "-10.7",
            longitud: "-77.6",
            ambiente: "25 C°",
            humedad: "60",
            defrost: "40",
            modo: "optimizado"
        }
    ]
    lista = [
        {
            id: "12",
            fecha: "23-02-2023 12:24:40",
            hora: "11:35",
            latitud: "-10.7",
            longitud: "-77.6",
            direccion: "Avenida la Molina, Lima Perú",
            bateria_interna: "60%",
            estado: "Conectado"
        },
        {
            id: "12",
            fecha: "12-02-2023 12:24:40",
            hora: "11:35",
            latitud: "-10.7",
            longitud: "-77.6",
            direccion: "Avenida la Paz, Lima Perú",
            bateria_interna: "60%",
            estado: "Desconectado"
        },
        {
            id: "12",
            fecha: "10-04-2023 10:24:40",
            hora: "11:35",
            latitud: "-10.7",
            longitud: "-77.6",
            direccion: "Avenida la Molina, Lima Perú",
            bateria_interna: "60%",
            estado: "Conectado"
        }
    ]
    html = ""
    for (var i = 0; i < lista.length; i++) {
        /*
        html += '<tr>'+
                    '<th>'+lista[i].id+'</th>'+
                    '<th scope="row">'+lista[i].contenedor+'</th>'+
                    '<td>'+lista[i].fecha+'</td>'+
                    '<td>'+lista[i].temperatura+'</td>'+
                    '<td>'+lista[i].latitud+'</td>'+
                    '<td>'+lista[i].longitud+'</td>'+
                    '<td>'+lista[i].ambiente+'</td>'+
                    '<td>'+lista[i].humedad+'</td>'+
                    '<td>'+lista[i].defrost+'</td>'+
                    '<td>'+lista[i].modo+'</td>'+
                    '<td><button onclick=("'+lista[i].id+'") type="button" class="btn btn-info">DETALLE</button></td>'+
                '</tr>'
        */
       if (lista[i].estado == 'Desconectado'){
            html += '<tr style="color:red">'+
                '<th>'+lista[i].id+'</th>'+
                '<th scope="row">'+lista[i].fecha+'</th>'+
                '<td>'+lista[i].hora+'</td>'+
                '<td>'+lista[i].latitud+','+lista[i].longitud+'</td>'+
                '<td>'+lista[i].direccion+'</td>'+
                '<td>'+lista[i].bateria_interna+'</td>'+
                (lista[i].estado == 'Desconectado' ? '<td style="color:red">'+lista[i].estado+'</td>' : '<td>'+lista[i].estado+'</td>')+
                '<td><button onclick=("'+lista[i].id+'") type="button" class="btn btn-info">DETALLE</button></td>'+
            '</tr>'
       } else {
            html += '<tr>'+
                    '<th>'+lista[i].id+'</th>'+
                    '<th scope="row">'+lista[i].fecha+'</th>'+
                    '<td>'+lista[i].hora+'</td>'+
                    '<td>'+lista[i].latitud+','+lista[i].longitud+'</td>'+
                    '<td>'+lista[i].direccion+'</td>'+
                    '<td>'+lista[i].bateria_interna+'</td>'+
                    (lista[i].estado == 'Desconectado' ? '<td style="color:red">'+lista[i].estado+'</td>' : '<td>'+lista[i].estado+'</td>')+
                    '<td><button onclick=("'+lista[i].id+'") type="button" class="btn btn-info">DETALLE</button></td>'+
                '</tr>'
        }
    }
    $(".tableBottomdata").html(html)
}

var data = []
window.onload = function () {
    //loadDataChart();
}
function loadDataChart(){
    /*
    var limit = 1000;    //increase number of dataPoints by increasing this

    var y = 0;
    var dataSeries = { type: "line" };
    var dataPoints = [];
    for (var i = 0; i < limit; i += 1) {
        y += (Math.random() * 10 - 5);
        dataPoints.push({
            x: i - limit / 2,
            y: y
        });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);
    */

    var dataSeriesSetPoint = { type: "line",  valueFormatString: "YYYY-MM-DD HH:mm:ss" };
    var dataPointsSetPoint = [];
    var dataSeriesTempSupply = { type: "line",  valueFormatString: "YYYY-MM-DD HH:mm:ss"};
    var dataPointsTempSupply = [];
    // Make a request for a user with a given ID
    axios.get('http://100.26.213.13/',
        { 
            crossdomain: true 
        }
    ).then(function (response) {
        // handle success
        console.log(response.data);
        //dataApi = [{"id":1,"nombre":"TTTT4020550","tipo":"Reefer","descripcion":"Sin Informacion","set_point":-75,"temp_supply":-37.8,"return_air":-23.1,"evaporation_coil":-23,"ambient_air":29,"cargo_1_temp":-3277,"cargo_2_temp":-3277,"cargo_3_temp":-3277,"cargo_4_temp":-3277,"relative_humidity":81,"alarm_present":0,"alarm_number":0,"controlling_mode":"OPTIMIZED","power_state":1,"defrost_term_temp":18,"defrost_interval":6,"latitud":-12.6342,"longitud":-78.0567,"created_at":"2023-03-07 15:16:11"},{"id":2,"nombre":"TTTT4020550","tipo":"Reefer","descripcion":"Sin Informacion","set_point":-75,"temp_supply":-37.8,"return_air":-23.1,"evaporation_coil":-23,"ambient_air":29,"cargo_1_temp":-3277,"cargo_2_temp":-3277,"cargo_3_temp":-3277,"cargo_4_temp":-3277,"relative_humidity":81,"alarm_present":0,"alarm_number":0,"controlling_mode":"OPTIMIZED","power_state":1,"defrost_term_temp":18,"defrost_interval":6,"latitud":-12.6342,"longitud":-78.0567,"created_at":"2023-03-07 15:16:13"},{"id":3,"nombre":"TTTT4020550","tipo":"Reefer","descripcion":"Sin Informacion","set_point":-75,"temp_supply":-37.8,"return_air":-23.1,"evaporation_coil":-23,"ambient_air":29,"cargo_1_temp":-3277,"cargo_2_temp":-3277,"cargo_3_temp":-3277,"cargo_4_temp":-3277,"relative_humidity":81,"alarm_present":0,"alarm_number":0,"controlling_mode":"OPTIMIZED","power_state":1,"defrost_term_temp":18,"defrost_interval":6,"latitud":-12.6342,"longitud":-78.0567,"created_at":"2023-03-07 15:16:17"},{"id":4,"nombre":"TTTT4020550","tipo":"Reefer","descripcion":"Sin Informacion","set_point":-75,"temp_supply":-37.8,"return_air":-23.1,"evaporation_coil":-23,"ambient_air":29,"cargo_1_temp":-3277,"cargo_2_temp":-3277,"cargo_3_temp":-3277,"cargo_4_temp":-3277,"relative_humidity":81,"alarm_present":0,"alarm_number":0,"controlling_mode":"OPTIMIZED","power_state":1,"defrost_term_temp":18,"defrost_interval":6,"latitud":-12.6342,"longitud":-78.0567,"created_at":"2023-03-07 15:16:19"},{"id":5,"nombre":"TTTT4020550","tipo":"Reefer","descripcion":"Sin Informacion","set_point":-75,"temp_supply":-37.8,"return_air":-23.1,"evaporation_coil":-23,"ambient_air":29,"cargo_1_temp":-3277,"cargo_2_temp":-3277,"cargo_3_temp":-3277,"cargo_4_temp":-3277,"relative_humidity":81,"alarm_present":0,"alarm_number":0,"controlling_mode":"OPTIMIZED","power_state":1,"defrost_term_temp":18,"defrost_interval":6,"latitud":-12.6342,"longitud":-78.0567,"created_at":"2023-03-07 15:16:23"}];
        dataApi = response.data;
        dataApi.forEach((element) => {
            //console.log(element)
            date = element.created_at.split(" ")[0]+"T"+element.created_at.split(" ")[1]+".000Z";
            dataPointsSetPoint.push({x: new Date(date), y: element.set_point});
            dataPointsTempSupply.push({x: new Date(date), y: element.temp_supply});
        });
        dataSeriesSetPoint.dataPoints = dataPointsSetPoint;
        dataSeriesTempSupply.dataPoints = dataPointsTempSupply;
        data.push(dataSeriesSetPoint);
        data.push(dataSeriesTempSupply);
        console.log(data)

        var chart = new CanvasJS.Chart("chart1",
        {
            zoomEnabled: true,
            title:{
                text: "Refeer Monitoring Data: ZGRU 517421 3"
            },
            legend: {
                horizontalAlign: "right",
                verticalAlign: "center"
            },
            axisX: {
                intervalType: "hour",
                valueFormatString: "YYYY-MM-DD HH:mm:ss",
                labelMaxWidth: 100, // change label width accordingly
            },
            axisY:{
                includeZero: false
            },
            data: data,  // random generator below
        });
        chart.render();
        
        })
        .catch(function (error) {
         // handle error
         console.log(error);
        })
        .finally(function () {
         // always executed
       });
}