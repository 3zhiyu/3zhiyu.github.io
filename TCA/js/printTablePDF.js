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

function downloadAsPDF(){
    var doc = new jsPDF('p', 'pt', 'a4');   
	doc.addFileToVFS('iansuiRegular.ttf', font);
	doc.addFont('iansuiRegular.ttf', 'iansuiRegular', 'normal');
	doc.setFont('iansuiRegular');
    html2canvas(document.body, {
    onrendered: function(canvas) {
		doc.addImage(actionTable, 'JPEG', 0, 0, 595, 840);
        doc.setTextColor(117,28,28);
        doc.text(contentR3, 40, 240);
        doc.text(contentR1, 195, 240);
        doc.text(contentR4, 40, 530);
        doc.text(contentR2, 195, 530);
        doc.text(taiwanEmpire, 40, 690); //台灣帝國
        doc.text(peh_oe_ji, 205, 680);   //白話字
        doc.text(tsai_poe_hoe, 205, 790) //蔡培火
        doc.text(getDate(), 460, 520);
        doc.text(recorderName, 460, 710);
        doc.text(finalDecision, 40, 790);
        doc.save('素行紀錄表.pdf');
    }     
  });	
}





