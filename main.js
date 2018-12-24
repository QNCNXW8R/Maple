// By Qnc

//var data = document.getElementById('data').contentDocument;
//var template = document.getElementById('template').contentDocument;
//console.log(template.getElementsByTagName('equipment-list'));

var xhttp;
if(window.XMLHttpRequest){
    xhttp = new XMLHttpRequest();
}else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       alert(xhttp);
    }
}

xhttp.open("GET", 'template.xml', true);
xhttp.send();
