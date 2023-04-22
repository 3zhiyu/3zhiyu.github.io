var getURL = '';
var pathName = window.location.href.split('?')[0];
var getResult = (window.location.href).substring((window.location.href).indexOf("?")+1);
function b64_to_utf8(str) {
    return unescape(decodeURIComponent(window.atob(str)));
}
//proposer = localStorage.getItem('recorderName');


if( (getResult.indexOf("&fbclid=")) > 0){
    //the rest part of showTable.html? has &fbclid= after FB share
    //remove &fbclid=
    //console.log('index = ' + getResult.indexOf("&fbclid="));
    getResult = getResult.substring(0, getResult.indexOf("&fbclid="));
    //console.log('getResult = ' + getResult);
}

getResult = b64_to_utf8(getResult);

getURL = pathName +"?"+ getResult;


//console.log('getURL = ' + getURL);

var urlParams = new URL(getURL).searchParams;


var proposer = urlParams.get('proposer');
document.getElementById('proposer').innerHTML = proposer;
document.getElementById('content_1').innerHTML = urlParams.get('contentR1');
document.getElementById('content_2').innerHTML = urlParams.get('contentR2');
document.getElementById('content_3').innerHTML = urlParams.get('contentR3');
document.getElementById('topic_r1').innerHTML = urlParams.get('topicR1');
document.getElementById('topic_r2').innerHTML = urlParams.get('topicR2');
document.getElementById('topic_r3').innerHTML = urlParams.get('topicR3');
document.getElementById('applyTime').innerHTML = urlParams.get('getDate');


