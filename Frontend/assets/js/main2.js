myStorage = window.localStorage;

function sendData() {
    const XHR = new XMLHttpRequest();


    XHR.open("POST", "http://172.20.98.50:8080/login", true);
    XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');


    const form_data = JSON.stringify({
        "username": document.getElementById("username").value,
        "password": document.getElementById("parola").value,
    });

    var response;


    XHR.addEventListener("load", function(event) {
        if (XHR.status === 200) {
            response = JSON.parse(event.target.responseText)
            idUser = parseInt(response.idUser)
            localStorage.setItem('user', response.numeUser + ' ' + response.prenumeUser);
            localStorage.setItem('idUser', parseInt(response.idUser));
            window.location.replace("dashboard.html");
        } else {
            document.getElementById("raspuns").innerHTML = "N-a mers"
        }
    });



    XHR.send(form_data);
}

function onloadDashboard(){
    const XHR_get = new XMLHttpRequest();

    XHR_get.addEventListener("load", function(event) {
        // alert("serverul a raspuns cu " + event.target.responseText + "si statusul " + XHR_get.status);
        if (XHR_get.status === 200) {
            localStorage.setItem('jsonPropuneri', event.target.responseText);
        } else {}
    });
    XHR_get.open("GET", `http://172.20.98.50:8080/propuneri?idUser=${localStorage.getItem('idUser')}`)
    XHR_get.send();


    document.getElementById("user").innerHTML += localStorage.getItem('user');

    let jsonPropuneri = JSON.parse(localStorage.getItem('jsonPropuneri'));
    let page = document.getElementById("propuneri").innerHTML;

    if (jsonPropuneri.length > 0) {
        page += "<h1>Acestea sunt propunerile tale:</h1>\n"
        page = "<table class=\"table table-hover table-dark\">";
        page += "  <thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">#</th>\n" +
            "      <th scope=\"col\">Titlu</th>\n" +
            "      <th scope=\"col\">Acronim</th>\n" +
            "      <th scope=\"col\">descriere</th>\n" +
            "      <th scope=\"col\">Potential inovare</th>\n" +
            "      <th scope=\"col\">Impact asteptat</th>\n" +
            "      <th scope=\"col\">Avantaj competitiv</th>\n" +
            "    </tr>\n" +
            "  </thead>" +
            "<tbody>";

        let i = 1;

        jsonPropuneri.forEach(function (element) {
            page += `<tr>
      <th scope="row">${i}</th>
      <td>${element.titlu}</td>
      <td>${element.acronim}</td>
      <td>${element.descriere}</td>
      <td>${element.potential_inovare}</td>
      <td>${element.impact_asteptat}</td>
      <td>${element.avantaj_competitiv}</td>
      <td><input type="button" value="PDF" class="btn btn-primary" id="btn_submit${i}" onclick="createPDF(${element.idPropunere})"></td>
    </tr>`
            i += 1;

        })
     
        document.getElementById("propuneri").innerHTML = (page += "</tbody></table>");
    }
    else{
        document.getElementById("propuneri").innerHTML += "<h2>Nu aveți propuneri înregistrate.</h2>"
    }

    return false;
}

function createPDF(idPropunere)
{
    const XHR = new XMLHttpRequest();
    const XHR_user = new XMLHttpRequest();
    XHR.open("GET", `http://172.20.98.50:8080/propuneri?idPropunere=${idPropunere}`, true);
    XHR.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    XHR.send();

    var json_propunere = "";
    var json_user = "";
    XHR.addEventListener("load", function(event) {
        if (XHR.status === 200) {
            json_propunere = (JSON.parse(event.target.responseText))[0]
            XHR_user.open("GET",`http://172.20.98.50:8080/users?idUser=${parseInt(json_propunere.idUser)}`);
            XHR_user.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            XHR_user.send();
        } else {
        }
    });

    XHR_user.addEventListener("load", function(event) {
        if (XHR_user.status === 200) {
            json_user = JSON.parse(event.target.responseText)[0];
            const docDefinition = {
                content: [
                    // using a { text: '...' } object lets you set styling properties
                    {text: 'Propunere\n', fontSize: 20},
                    {text: `Titlu: ${json_propunere.titlu}(${json_propunere.acronim})`, fontSize: 16},
                    {text: `Autor: ${json_user.numeUser + ' ' + json_user.prenumeUser}`, fontSize: 16},
                    {text: `Realizari: ${json_user.realizari}`, fontSize: 16},
                    {text: `Descriere:`, fontSize: 20},
                    {text: `${json_propunere.descriere}`, fontSize: 16},
                    {text: '\nPotential inovare:', fontSize: 22},
                    {text: `${json_propunere.potential_inovare}`, fontSize: 16},
                    {text: '\nImpact asteptat', fontSize: 22},
                    {text: `${json_propunere.impact_asteptat}`, fontSize: 16},
                    {text: '\nAvantaj competitiv', fontSize: 22},
                    {text: `${json_propunere.avantaj_competitiv}`, fontSize: 16},
                ]
            };
            pdfMake.createPdf(docDefinition).download(`${json_user.numeUser + ' ' + json_user.prenumeUser}_propunere_${json_propunere.titlu}`);
        } else {
        }
    });

}