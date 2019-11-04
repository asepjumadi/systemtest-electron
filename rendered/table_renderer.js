const {ipcRenderer} = require('electron')
const {remote} = require('electron')
window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {

      sendRefreshAll: function() {
        ipcRenderer.send('RefreshOn', 'an-argument')
        location.reload();
      },

      init: function() {
       

        $('#Refresh').click( function () {
          ipc.messaging.sendRefreshAll()
        })

      }
    };

    n(function() {
        ipc.messaging.init();
    })

}(jQuery);
