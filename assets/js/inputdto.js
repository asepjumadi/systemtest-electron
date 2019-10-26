const {ipcRenderer}= require('electron') 
const database = require('./database')
ipcRenderer.on('saving-data-to-database',(event,arg)=>{
    inputupdate.handler.showSaveDialog(arg);
})
window.inputupdate = window.inputupdate || {},
function(n) {

    dialog.handler = {

      showErrorBox: function() {
        ipcRenderer.send('show-error-box');
      },

      showMessageBox: function() {
        ipcRenderer.send('show-message-box');
      },

      showSaveDialog: function() {
        ipcRenderer.send('show-save-dialog');
        database.inputDataToDatabase();
      },

      init: function() {
        

        $('#showErrorBox').click( function () {
            inputupdate.handler.showErrorBox();
        })

        $('#showMessageBox').click( function() {
            inputupdate.handler.showMessageBox();
        })

        $('#showSaveDialog').click( function() {
            inputupdate.handler.showSaveDialog();
        })
      }
    };

    n(function() {
        inputupdate.handler.init();
    })
}(jQuery);

