var downloadPDF = document.getElementById("downloadPDF");
downloadPDF.addEventListener('click', downloadAsPDF);
let user = sessionStorage.getItem("recorder");
var contentR1 = '';
var contentR2 = '';
var contentR3 = '';
var contentR4 = '';
var timeRecord = '';
var finalDecision = '';


function downloadAsPDF(){
	var doc = new jsPDF('p', 'pt', 'a4');
    contentR1 = document.getElementById('reason_one_input').value.replace(/(.{9})/g, "$1\n");
    contentR2 = document.getElementById('reason_two_input').value.replace(/(.{9})/g, "$1\n");
    contentR3 = document.getElementById('reason_three_input').value.replace(/(.{9})/g, "$1\n");
    contentR4 = document.getElementById('reason_four_input').value.replace(/(.{9})/g, "$1\n");
    timeRecord = document.getElementById('timeRecord').value.replace(/(.{9})/g, "$1\n");
    finalDecision = document.getElementById('finalDecision').value.replace(/(.{9})/g, "$1\n");
	doc.addFileToVFS('iansuiRegular.ttf', font);
	doc.addFont('iansuiRegular.ttf', 'iansuiRegular', 'normal');
	doc.setFont('iansuiRegular');
    html2canvas(document.body, {
    onrendered: function(canvas) {
        doc.addImage(actionTable, 'JPEG', 0, 0, 595, 870);
        doc.text(contentR3, 40, 260);
        doc.text(contentR1, 195, 260);
        doc.text(contentR4, 40, 550);
        doc.text(contentR2, 195, 550);
        doc.text(timeRecord, 460, 520);
        doc.text(recorderName, 460, 710);
        doc.text(finalDecision, 40, 800);
        doc.save('素行紀錄表.pdf');
    }     
  });	
}





