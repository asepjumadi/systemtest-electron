const jsPDF = require('jspdf')
const html2canvas =require('html2canvas')

function print(quality = 2) {
    const filename  = 'ThisIsYourPDFFilename.pdf';
    var bigCanvas = $("<div>").appendTo('body');  // This will be the 3x sized canvas we're going to render
    var scaledElement = $("#printJS-form").clone()
    .css({
      'transform': 'scale(3,3)',
      'transform-origin': '0 0'
    })
    .appendTo(bigCanvas);
    
    var oldWidth = scaledElement.width();
    var oldHeight = scaledElement.height();
    
    var newWidth = oldWidth * 3;
    var newHeight = oldHeight * 3;
    
    bigCanvas.css({
      'width': newWidth,
      'height': newHeight
    })
    html2canvas(document.querySelector('#printJS-form'), 
                            {scale: quality}
                     ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'JPEG', 15, 40, 211, 298);
        pdf.save(filename);
    });
}


function printkksm(quality = 2) {
  const filename  = 'ThisIsYourPDFFilename.pdf';

  html2canvas(document.querySelector('#printJS-forms'), 
                          {scale: quality}
                   ).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'JPEG', 0, 0, 211, 298);
      pdf.save(filename);
  });
}
