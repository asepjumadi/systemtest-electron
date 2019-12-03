const jsPDF = require('jspdf')
const html2canvas =require('html2canvas')

function print(quality = 2) {
    // const filename  = 'kksmFileOfPrint.pdf';
    html2canvas(document.querySelector('#printJS-form'), 
                          {scale: quality}
                  ).then(canvas => {
  var imgWidth = 211; 
  var pageHeight = 298;  
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
  var doc = new jsPDF('p', 'mm','a4');
  var position = 0;
  
  doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;
  
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    doc.addPage();
    doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }
  doc.save( 'file.pdf');
    // const filename  = 'DisposisiPrintOut.pdf';
    // var bigCanvas = $("<div>").appendTo('body');  // This will be the 3x sized canvas we're going to render
    // var scaledElement = $("#printJS-form").clone()
    // .css({
    //   'transform': 'scale(3,3)',
    //   'transform-origin': '0 0'
    // })
    // .appendTo(bigCanvas);
    
    // var oldWidth = scaledElement.width();
    // var oldHeight = scaledElement.height();
    
    // var newWidth = oldWidth * 3;
    // var newHeight = oldHeight * 3;
    
    // bigCanvas.css({
    //   'width': newWidth,
    //   'height': newHeight
    // })
    // html2canvas(document.querySelector('#printJS-form'), 
    //                         {scale: quality}
    //                  ).then(canvas => {
    //     let pdf = new jsPDF('p', 'mm', 'a4');
    //     pdf.addImage(canvas.toDataURL('image/png'), 'JPEG', 0, 0, 211, 298);
    //     pdf.save(filename);
    // });
})}


function printkksm(quality=2) {
  // const filename  = 'kksmFileOfPrint.pdf';
    html2canvas(document.querySelector('#printJS-forms'), 
                          {scale: quality}
                  ).then(canvas => {
  var imgWidth = 211; 
  var pageHeight = 298;  
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
  var doc = new jsPDF('p', 'mm','a4');
  var position = 0;
  
  doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;
  
  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    doc.addPage();
    doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }
  doc.save( 'file.pdf');
                  })

//   html2canvas(document.querySelector('#printJS-forms'), 
//                           {scale: quality}
//                    ).then(canvas => {
//       let pdf = new jsPDF('p', 'mm', 'a4');
//                             // pageHeight= pdf.internal.pageSize.height;
//                             // y = 500 
//                             // if (y >= pageHeight)
//                             // {
//                             //   pdf.addPage();
//                             //   y = 0 
//                             // }
//                             //   pdf.text(x, y, "value");
//       pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
//       pdf.save(filename);
//   });
// }
}

function printall(quality = 2) {
  const filename  = 'AlldataAfterRender.pdf';

  html2canvas(document.querySelector('#dataTable'), 
                          {scale: quality}
                   ).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
  });
}

function changeColorToPrimaryDis(){
  document.getElementById('printJS-form').style.backgroundColor="white";

}
function changeColorToSecondaryDis(){
  document.getElementById('printJS-form').style.backgroundColor="#eef089";

}
function changeColorToPrimaryKksm(){
  document.getElementById('printJS-forms').style.backgroundColor="white";

}
function changeColorToSecondaryKksm(){
  document.getElementById('printJS-forms').style.backgroundColor="pink";

}

function range(start, end) {
  var ans = [];
  for (let i = start; i <= end; i++) {
      ans.push(i);
  }
  console.log(start)
  console.log(end)
  return ans;
}
function pengolah(){
  $('#namapengolah1').html($('#pname').val().toString())
  $('#namapengolah2').html($('#pname').val().toString())
  $('#namapengolah3').html($('#pname').val().toString())
  $('#namapengolah4').html($('#pname').val().toString())
}