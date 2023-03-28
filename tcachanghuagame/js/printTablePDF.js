var contentR3 = '';
var contentR1 = '';
var contentR4 = '';
var contentR2 = '';
var taiwanEmpire = '';
var peh_oe_ji = '';
var tsai_poe_hoe = '';
var recorderName = '';

function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd ; 
    return today;
}

function downloadAsPDF(divID){
    var doc = new jsPDF('p', 'pt', 'a4');   
	doc.addFileToVFS('iansuiRegular.ttf', font);
	doc.addFont('iansuiRegular.ttf', 'iansuiRegular', 'normal');
	doc.setFont('iansuiRegular');
    html2canvas(document.body, {
    onrendered: function(canvas) {
		doc.addImage(proposal, 'PNG', 0, 0, 595, 840);
        doc.setTextColor(117,28,28);
        switch(divID){
            case 'contentR1':
                doc.text(getContent('contentR1'), 195, 195); 
                doc.text(contentR3, 195, 330);
                doc.text(contentR4, 195, 525);
                doc.text(contentR2, 195, 680);
                break;
            case 'contentR2':
                doc.text(getContent('contentR2'), 195, 680);
                doc.text(contentR3, 195, 345);
                doc.text(contentR1, 195, 195);
                doc.text(contentR4, 195, 525);
                break;
            case 'contentR3':
                doc.text(getContent('contentR3'), 195, 345);
                doc.text(contentR1, 195, 195);
                doc.text(contentR4, 195, 525);
                doc.text(contentR2, 195, 680);
                break;
            case 'contentR4':   
                doc.text(getContent('contentR4'), 195, 525);
                doc.text(contentR3, 195, 345);
                doc.text(contentR1, 195, 195);
                doc.text(contentR2, 195, 680);
                break;
            default:
                //console.log('go to default');
                doc.text(contentR3, 195, 345);
                doc.text(contentR1, 195, 195);
                doc.text(contentR4, 195, 525);
                doc.text(contentR2, 195, 680);
                
        }
        
        doc.text(getDate(), 430, 100);
        doc.text(recorderName, 150, 100);
        doc.save('計畫表.pdf');
    }     
  });	
}

function getContent(contentID){
    var content = '';
    if(document.getElementById(contentID)){
        content = document.getElementById(contentID).value;   
    }
    return content;    
}

function viewTable(divID){
    var url = 'showTable.html?';
    var uri = 'proposer='+ recorderName + '&' + divID + '=' + getContent(divID) + '&contentR1='+contentR1+'&contentR2='+contentR2+'&contentR3='+contentR3+'&contentR4='+contentR4+'&getDate='+getDate();
    //sessionStorage.setItem('realURL', window.location.href);
    uri = utf8_to_b64(uri);
    url = url + uri;
    //console.log('Final url is: ' + url);
    window.open(url);
}

function utf8_to_b64(str) {
    return window.btoa(encodeURIComponent(escape(str)));
}






