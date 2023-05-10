var contentR3 = '未填';
var contentR1 = '未填';
var contentR2 = '未填';
var topicR1 = '未填';
var topicR2 = '未填';
var topicR3 = '未填';


var recorderName = '姓名未填';


function downloadAsPDF(divID){
    var doc = new jsPDF('l', 'px', 'a1');   
	doc.addFileToVFS('iansuiRegular.ttf', font);
	doc.addFont('iansuiRegular.ttf', 'iansuiRegular', 'normal');
	doc.setFont('iansuiRegular');
    
    html2canvas(document.body, {
    onrendered: function(canvas) {
		doc.addImage(proposal, 'PNG', 15, 15, 1755, 1241);
        //doc.addImage(proposal, 'PNG', 0, 0, 595, 840);
        doc.setTextColor(76, 72, 69);
        doc.setFontSize(48);
        doc.text(contentR3, 320, 220, {maxWidth:1}, 0);
        doc.text(contentR1, 1120, 220, {maxWidth:1}, 0);
        doc.text(contentR2, 720, 220, {maxWidth:1}, 0);
        doc.setTextColor(117,28,28);
        doc.setFontSize(64);
        doc.text('●' + topicR1, 1200, 150, {maxWidth:1}, 0);
        doc.text('●' + topicR2, 800, 150, {maxWidth:1}, 0);
        doc.text('●' + topicR3, 400, 150, {maxWidth:1}, 0);
        doc.text(recorderName, 1350, 915,{maxWidth:1}, 0);
        doc.save('我的報導.pdf');
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
    var uri = 'proposer='+ recorderName + '&' + divID + '=' + getContent(divID) + '&contentR1='+contentR1+'&contentR2='+contentR2+'&contentR3='+contentR3+'&topicR1=●'+topicR1+'&topicR2=●'+topicR2+'&topicR3=●'+topicR3; 
    uri = utf8_to_b64(uri);
    url = url + uri;
    window.open(url); 
}

function utf8_to_b64(str) {
    return window.btoa(encodeURIComponent(escape(str)));
}






