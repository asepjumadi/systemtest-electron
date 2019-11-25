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
      show4KksmData:function(){
        var nomerin = $('#mulai').val()
        var nomerout =$('#akhir').val()
        console.log(nomerin)
        console.log(nomerout)
        // var b = nomers.split(',').map(function(item) {
        //   return parseInt(item, 10);
        // });
        var params={
          in:nomerin,
          out:nomerout
        }
        ipcRenderer.send('show4KksmData',params)
      },
      showDisposisiData:function(){
        var nomerin = $('#mulai1').val()
        var nomerout= $('#akhir1').val()
        console.log(nomerin)
        console.log(nomerout)

        var params={
          in:nomerin,
          out:nomerout
        }
        ipcRenderer.send('showDisposisiData',params)
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
        $('#Kksm4Hasil').click(function(){
          ipc.messaging.show4KksmData()
        })
        $('#showDisposisiData').click(function(){
          ipc.messaging.showDisposisiData()
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


ipcRenderer.on('getDisposisiSucces',function(event,response){
  console.log(response)
  array = [], c = 0;
  array1=[], c= 0;
  array2=[], c=0;
  array3=[], c=0;
  //abc(cba)ab(bac)c
  response[0].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
  // Increase / decrease counter and push desired values to an array
  e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array.push('(' + e + ')') : array.push(e)
  );
  console.log(array[1])
  var tglsurat = array[1].split(/[()]/)
  $('#codes1').html(response[0].code)
  $('#nouruts1').html(response[0].no)
  $('#isirings1').html(response[0].isi_ringkasan)
  $('#keterangans1').html(response[0].keterangan)
  $('#asalsurats1').html(response[0].asal_surat)
  $('#tgltrimas1').html(response[0].tanggal_terima)
  $('#nomortgls1').html(response[0].nomer_tanggal)
  $('#tglsurats1').html(tglsurat)


  //abc(cba)ab(bac)c
  response[1].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
  // Increase / decrease counter and push desired values to an array
  e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array1.push('(' + e + ')') : array1.push(e)
  );
  console.log(array1[1])
  var tglsurat1 = array1[1].split(/[()]/)
  $('#codes2').html(response[1].code)
  $('#nouruts2').html(response[1].no)
  $('#isirings2').html(response[1].isi_ringkasan)
  $('#keterangans2').html(response[1].keterangan)
  $('#asalsurats2').html(response[1].asal_surat)
  $('#tgltrimas2').html(response[1].tanggal_terima)
  $('#nomortgls2').html(response[1].nomer_tanggal)
  $('#tglsurats2').html(tglsurat1)

  //abc(cba)ab(bac)c
  response[2].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
    // Increase / decrease counter and push desired values to an array
    e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array2.push('(' + e + ')') : array2.push(e)
    );
    console.log(array2[1])
    var tglsurat2 = array2[1].split(/[()]/)
    $('#codes3').html(response[2].code)
    $('#nouruts3').html(response[2].no)
    $('#isirings3').html(response[2].isi_ringkasan)
    $('#keterangans3').html(response[2].keterangan)
    $('#asalsurats3').html(response[2].asal_surat)
    $('#tgltrimas3').html(response[2].tanggal_terima)
    $('#nomortgls3').html(response[2].nomer_tanggal)
    $('#tglsurats3').html(tglsurat2)

    response[3].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
      // Increase / decrease counter and push desired values to an array
      e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array3.push('(' + e + ')') : array3.push(e)
      );
      console.log(array3[1])
      var tglsurat3 = array3[1].split(/[()]/)
      $('#codes4').html(response[3].code)
      $('#nouruts4').html(response[3].no)
      $('#isirings4').html(response[3].isi_ringkasan)
      $('#keterangans4').html(response[3].keterangan)
      $('#asalsurats4').html(response[3].asal_surat)
      $('#tgltrimas4').html(response[3].tanggal_terima)
      $('#nomortgls4').html(response[3].nomer_tanggal)
      $('#tglsurats4').html(tglsurat3)
})



ipcRenderer.on('getkksmSucess',function(event,response){
  // console.log("this event will be involve")
  // console.log(response)
  // console.log(response[0].nomer_tanggal.split())
  
  array = [], c = 0;
  array1=[], c= 0;
  array2=[], c=0;
  array3=[], c=0;
  //abc(cba)ab(bac)c
  response[0].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
  // Increase / decrease counter and push desired values to an array
  e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array.push('(' + e + ')') : array.push(e)
  );
  console.log(array[1])
  var tglsurat = array[1].split(/[()]/)
  $('#code1').html(response[0].code)
  $('#nourut1').html(response[0].no)
  $('#isiring1').html(response[0].isi_ringkasan)
  $('#keterangan1').html(response[0].keterangan)
  $('#asalsurat1').html(response[0].asal_surat)
  $('#tgltrima1').html(response[0].tanggal_terima)
  $('#nomortgl1').html(response[0].nomer_tanggal)
  $('#tglsurat1').html(tglsurat)


  response[1].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
    // Increase / decrease counter and push desired values to an array
    e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array1.push('(' + e + ')') : array1.push(e)
    );
    console.log(array1[1])
    var tglsurat1 = array1[1].split(/[()]/)


  $('#code2').html(response[1].code)
  $('#nourut2').html(response[1].no)
  $('#isiring2').html(response[1].isi_ringkasan)
  $('#keterangan2').html(response[1].keterangan)
  $('#asalsurat2').html(response[1].asal_surat)
  $('#tgltrima2').html(response[1].tanggal_terima)
  $('#nomortgl2').html(response[1].nomer_tanggal)
  $('#tglsurat2').html(tglsurat1)

  response[2].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
    // Increase / decrease counter and push desired values to an array
    e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array2.push('(' + e + ')') : array2.push(e)
    );
    console.log(array2[1])
    var tglsurat2 = array2[1].split(/[()]/)


  $('#code3').html(response[2].code)
  $('#nourut3').html(response[2].no)
  $('#isiring3').html(response[2].isi_ringkasan)
  $('#keterangan3').html(response[2].keterangan)
  $('#asalsurat3').html(response[2].asal_surat)
  $('#tgltrima3').html(response[2].tanggal_terima)
  $('#nomortgl3').html(response[2].nomer_tanggal)
  $('#tglsurat3').html(tglsurat2)

  response[3].nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
    // Increase / decrease counter and push desired values to an array
    e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array3.push('(' + e + ')') : array3.push(e)
    );
    console.log(array3[1])
    var tglsurat3 = array3[1].split(/[()]/)

  $('#code4').html(response[3].code)
  $('#nourut4').html(response[3].no)
  $('#isiring4').html(response[3].isi_ringkasan)
  $('#keterangan4').html(response[3].keterangan)
  $('#asalsurat4').html(response[3].asal_surat)
  $('#tgltrima4').html(response[3].tanggal_terima)
  $('#nomortgl4').html(response[3].nomer_tanggal)
  $('#tglsurat4').html(tglsurat3)
})