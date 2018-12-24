// By Qnc

var xhttp;
if(window.XMLHttpRequest){
    xhttp = new XMLHttpRequest();
}else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       console.log(xhttp);
    }
}

xhttp.open("GET", 'template.xml', true);
xhttp.send();
