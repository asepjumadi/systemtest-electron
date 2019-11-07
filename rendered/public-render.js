const {ipcRenderer} = require('electron')
const { dialog } = require('electron')
const {BrowserWindow} =require('electron')
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
      deleteByNumber:function(){
        var params = {
          nomer:$('#nomer_id').val(),
        }
        console.log($('#nomer_id').val())
        ipcRenderer.send('deletebynomer',params)
        
      },
      updateByNumber:function(){
        var params = {
          nomer:$('#nomer_id').val(),
          code:$('#code').val(),
          tanggaltrima:$('#tanggaltrima').val(),
          nomorTanggal:$('#nomorTanggal').val(),
          asalsurat:$('#asalsurat').val(),
          isiringkasan:$('#isiringkasan').val(),
          keterangan:$('#keterangan').val(),
        }
        ipcRenderer.send('updateNowbyNumber',params)
        console.log(params)
      },

      sendRefreshAll: function() {
        ipcRenderer.send('RefreshOn', 'an-argument')
        location.reload();
      },

      init: function() {
        // $('#tambah').click( function () {
        //   ipc.messaging.sendOpenAddEvent()
        //   $('#inputBro').click(function(){
        //     $(this).closest('form').find("input[type=text],input[type=number],textarea").val().reset();
        // });
        // })
        $('#tambah').click( function () {
          ipc.messaging.sendOpenAddEvent()
          document.getElementById("inputBro").reset();
        })
        $('#open-search-button').click( function () {
          ipc.messaging.sendOpenSecondWindowEvent()
        })

        $('#close-me-button').click( function () {
          ipc.messaging.sendCloseSecondWindowEvent()
        })
        $('#search-by-number').click(function(){
          ipc.messaging.openSearchByNumber()
        })
        $('#ubah').click(function(){
          ipc.messaging.updateByNumber()
        })
        $('#delete-by-number').click(function(){
          ipc.messaging.deleteByNumber()
        })
        $('#Refresh').click( function () {
          ipc.messaging.sendRefreshAll()
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
  console.log(response)
  console.log('all-one')
  if(response[0]===undefined){
    console.log('undefined only')
    $('#nomer').val(0),$('#code').val("Kode surat tidak ditemukan"),$('#tanggaltrima').val("tanggal terima surat tidak ditemukan"),$('#nomorTanggal').val("nomer dan tanggal surat tidak ditemukan"),$('#asalsurat').val("asal surat tidak ditemukan"),$('#isiringkasan').val("isi ringkasan tidak ditemukan"),$('#keterangan').val("keterangan tidak ditemukan")

  }else if(!response[0]===undefined)
    console.log(response[0])
    $('#nomer').val(response[0].no),$('#code').val(response[0].code),$('#tanggaltrima').val(response[0].tanggal_terima),$('#nomorTanggal').val(response[0].nomer_tanggal),$('#asalsurat').val(response[0].asal_surat),$('#isiringkasan').val(response[0].isi_ringkasan),$('#keterangan').val(response[0].keterangan)
  
 
})
ipcRenderer.on('updateResponse',function(event,response){
  console.log(response)
})
ipcRenderer.on('getDeleteSucess',function(event,response){
  $('#inputBro').click(function(){
    $(this).closest('form').find("input[type=text],input[type=number],textarea").val("");
});
  console.log(response)
  console.log("succes delete")
})