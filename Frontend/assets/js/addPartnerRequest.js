function onLoadPartnerRequest()
{
    let req3 = new XMLHttpRequest();
    req3.open("GET",`http://172.20.98.50:8080/propuneri?idUser=${localStorage.getItem('idUser')}`)

    req3.send();


    req3.onreadystatechange = function() {
        if(req3.status === 200)
        {
            document.getElementById("idPropunere").innerHTML = "";
            let jsonPropuneriUser = JSON.parse(req3.responseText);
            console.log(jsonPropuneriUser)
            jsonPropuneriUser.forEach(function (element) {
                console.log(element.idPropunere);
                document.getElementById("idPropunere").innerHTML += `<option value=${element.idPropunere}>${element.titlu}</option>`;
            });
        }
    }

}

function f1()
{


    let req1 = new XMLHttpRequest();
    req1.open("POST","http://172.20.98.50:8080/parteneri",true);
    // req1.setRequestHeader("Access-Control-Allow-Origin", "*");
    req1.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // req1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');


    let json_data1 = JSON.stringify(
        {
           "tipPartener":document.getElementById("tipPartener").options[document.getElementById("tipPartener").selectedIndex].text, 
            "specializare":document.getElementById("specializare").value,
            "rol":document.getElementById("rol").value,
      
        }
    );

    
    console.log(json_data1);

    req1.send(json_data1);

    console.log("Am trimis");


    req1.onreadystatechange = function() {
        if(req1.status === 200)
        {
            

            let req2 = new XMLHttpRequest();
            req2.open('POST',"http://172.20.98.50:8080/propunere_partener",true);
            req2.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

            let json_data2 = JSON.stringify({
                "idPropunere": document.getElementById("idPropunere").options[document.getElementById("idPropunere").selectedIndex].value,
                "idParteneri": JSON.parse(req1.responseText).idPartener,
                "dataLimita": document.getElementById("dataLimita").value
            })

            req2.send(json_data2);

            //console.log(1111)
            //document.location.replace("dashboard.html")
        }
    }
    return false;
}
