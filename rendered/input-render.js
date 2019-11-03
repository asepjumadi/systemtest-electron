const {ipcRenderer} = require('electron')

window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {

      sendOpenAddEvent: function() {
        ipcRenderer.send('add-clean', 'an-argument')
      },
      sendOpenSecondWindowEvent: function() {
        ipcRenderer.send('open-search-window', 'an-argument')
      },

      sendCloseSecondWindowEvent: function() {
        ipcRenderer.send('close-second-window', 'an-argument')
      },
      

      openSearchByNumber:function(){
        var params = {
          nomer:$('#nomer_id').val(),
        }
        ipcRenderer.send('search-and-show-clear',params)
        
      },
      

      init: function() {
        $('#tambah').click( function () {
          ipc.messaging.sendOpenAddEvent()
          $('#inputBro').click(function(){
            $(this).closest('form').find("input[type=text],input[type=number],textarea").val("");
        });
        });
        $('#open-search-button').click( function () {
          ipc.messaging.sendOpenSecondWindowEvent()
        })

        $('#close-me-button').click( function () {
          ipc.messaging.sendCloseSecondWindowEvent()
        })
        $('#search-by-number').click(function(){
          ipc.messaging.openSearchByNumber()
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
ipcRenderer.on('getAllDataSucess',function(event,response){
  console.log('all-one')
  console.log(response[0])
  $('#nomer').val(response[0].no),$('#code').val(response[0].code),$('#tanggaltrima').val(response[0].tanggal_terima),$('#nomorTanggal').val(response[0].nomer_tanggal),$('#asalsurat').val(response[0].nomer_tanggal),$('#isiringkasan').val(response[0].asal_surat),$('#keterangan').val(response[0].keterangan)
 
})
