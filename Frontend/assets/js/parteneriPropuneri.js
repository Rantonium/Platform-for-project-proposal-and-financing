function onLoadParteneriPropuneri()
{
    const XHR_get = new XMLHttpRequest();

    XHR_get.addEventListener("load", function(event) {
        // alert("serverul a raspuns cu " + event.target.responseText + "si statusul " + XHR_get.status);
        if (XHR_get.status === 200) {
            localStorage.setItem('jsonPropuneri', event.target.responseText);
        } else {}
    });
    XHR_get.open("GET", `http://172.20.98.50:8080/propuneri?idUser=${localStorage.getItem('idUser')}`)
    XHR_get.send();


    let jsonPropuneri = JSON.parse(localStorage.getItem('jsonPropuneri'));

    if (jsonPropuneri.length > 0) {
        jsonPropuneri.forEach(function (element) {
                //console.log(element.titlu);
                document.getElementById("numePropunere").innerHTML += `<option value=${element.idPropunere}>${element.titlu}</option>`;
        });
    }

    const req = new XMLHttpRequest();
    req.addEventListener("load", function(event) {
        // alert("serverul a raspuns cu " + event.target.responseText + "si statusul " + XHR_get.status);
        if (req.status === 200) {
            localStorage.setItem('jsonParteneri', event.target.responseText);
        } else {}
    });
    req.open("GET", `http://172.20.98.50:8080/parteneri`)
    req.send();

    let jsonParteneri = JSON.parse(localStorage.getItem('jsonParteneri'));

    if(jsonParteneri.length > 0)
    {
        jsonParteneri.forEach(function (element) {
            document.getElementById("numePartener").innerHTML += `<option value=${element.idPartener}>${element.numePartener}</option>`;
        })
    }


    return false;
}

function sendParteneriPropuneri()
{
    const req = new XMLHttpRequest();
    
    req.open("POST", `http://172.20.98.50:8080/propunere_partener`);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    let jsonPropuneri = JSON.stringify({
        "idParteneri":document.getElementById("numePartener").options[document.getElementById("numePartener").selectedIndex].value, 
        "idPropunere":document.getElementById("numePropunere").options[document.getElementById("numePropunere").selectedIndex].value,
        "dataLimita":document.getElementById("dataLimita").value,
        "stare":"0" 
    })

    console.log(jsonPropuneri);

    req.send(jsonPropuneri);


}