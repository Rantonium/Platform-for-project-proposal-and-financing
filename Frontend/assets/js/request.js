function addUserRequest() {
    var req1 = new XMLHttpRequest();
    req1.open("POST", "http://172.20.98.50:8080/users", true);
    // req1.setRequestHeader("Access-Control-Allow-Origin", "*");
    req1.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // req1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    var json_data1 = JSON.stringify(
        {
            "numeUser": document.getElementById("nume").value,
            "prenumeUser": document.getElementById("prenume").value,
            "facultate": document.getElementById("facultate").options[document.getElementById("facultate").selectedIndex].text,
            "email": document.getElementById("email").value,
            "telefon": document.getElementById("telefon").value,
            "parola": document.getElementById("password").value,
            "username": document.getElementById("username").value,
            "realizari" : document.getElementById("realizari").value
        }
    );

    req1.send(json_data1);

    req1.onreadystatechange = function () {
        window.location.replace("redirect.html");
    }

    return false;
}

function addProposeRequest() {
    var req1 = new XMLHttpRequest();
    req1.open("POST", "http://172.20.98.50:8080/propuneri", true);
    // req1.setRequestHeader("Access-Control-Allow-Origin", "*");
    req1.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    // req1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    var json_data1 = JSON.stringify(
        {
            "idUser": localStorage.getItem("idUser"),
            "titlu": document.getElementById("titlu").value,
            "acronim": document.getElementById("acronim").value,
            "descriere": document.getElementById("descriere").value,
            "potential_inovare": document.getElementById("potential_inovare").value,
            "impact_asteptat": document.getElementById("impact_asteptat").value,
            "avantaj_competitiv": document.getElementById("avantaj_competitiv").value
        }
    );
    //console.log(JSON.parse(json_data1));
    console.log(json_data1);

    req1.send(json_data1);

    req1.onreadystatechange = function () {
        if (req1.status == 200) {

            window.location.replace('dashboard.html');
            document.addEventListener('load', fn, false);
            function fn() {
                
                let req = new XMLHttpRequest();
                req.open('GET', 'file:///home/georgian/ProveIT_2.0/ProveIT/dashboard.html', true)

                req.send();

                req.onreadystatechange = function () {


                    const XHR_get = new XMLHttpRequest();

                    XHR_get.addEventListener("load", function (event) {
                        // alert("serverul a raspuns cu " + event.target.responseText + "si statusul " + XHR_get.status);
                        if (XHR_get.status === 200) {
                            localStorage.setItem('jsonPropuneri', event.target.responseText);
                        } else { }
                    });
                    XHR_get.open("GET", `http://172.20.98.50:8080/propuneri?idUser=${localStorage.getItem('idUser')}`);
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
                </tr>`
                            i += 1;

                        })


                        window.onload = function () {

                            if (i > 2) {
                                document.getElementById("add-propuneri-btn").style.visibility = "hidden";
                            }
                        }


                        document.getElementById("propuneri").innerHTML = (page += "</tbody></table>");
                    }
                    else {
                        document.getElementById("propuneri").innerHTML += "<h2>Nu aveți propuneri înregistrate.</h2>"
                    }


                    //window.localStorage.getItem('dashboard.html');
                }
            }
            //setTimeout(() => {  location.assign("dashboard.html"); }, 0.001);
        }
    }

    return false;
}