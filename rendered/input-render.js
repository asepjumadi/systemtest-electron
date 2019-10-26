const {ipcRenderer} = require('electron')

window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {

      sendOpenAddEvent: function() {
        ipcRenderer.send('add-clean', 'an-argument')
      },

      init: function() {
        $('#tambah').click( function () {
          ipc.messaging.sendOpenAddEvent()
          $('#inputBro').click(function(){
            $(this).closest('form').find("input[type=text],input[type=number]").val("");
        });
        })
      }
    };

    n(function() {
        ipc.messaging.init();
    })

}(jQuery);

ipcRenderer.on('feedback-add',function(event,response){
  console.log(response)
 
})