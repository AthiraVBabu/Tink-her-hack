var content = document.getElementById('txtContent'),
button = document.getElementById('btnDownload');
 
function generatePDF(){
  var doc = new jsPDF();
 
  doc.setFontSize(14);
  doc.text(10,10, content.value);
  doc.save('my.pdf');
}
 
button.addEventListener('click', generatePDF);