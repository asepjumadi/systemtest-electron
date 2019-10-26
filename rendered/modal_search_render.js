const {ipcRenderer} = require('electron')

window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {

      sendOpenSecondWindowEvent: function() {
        ipcRenderer.send('open-search-window', 'an-argument')
      },

      sendCloseSecondWindowEvent: function() {
        ipcRenderer.send('close-search-window', 'an-argument')
      },

      init: function() {
        $('#open-search-button').click( function () {
          ipc.messaging.sendOpenSecondWindowEvent()
          console.log('sender success')
        })

        $('#close-search-button').click( function () {
          ipc.messaging.sendCloseSecondWindowEvent()
          console.log('hide system')
        })

      }
    };

    n(function() {
        ipc.messaging.init();
    })

}(jQuery);
ipcRenderer.on('already-close',function(event,response){
  console.log(response)
})