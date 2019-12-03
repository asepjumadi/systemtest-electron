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
      sendAddKksm:function(){
        var params={
          
        }
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
  var array = [], a = 0;

  response.forEach(function(element,index) {
    console.log(element.no)
    var Sindex= 2 * index;
    var no = element.no;
   
      array = [], c = 0;
      element.nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
        //Increase / decrease counter and push desired values to an array
       e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array.push('(' + e + ')') : array.push(e)
        );
        // console.log(array)
        console.log(array[0])
        if(array[1]!=undefined){
          var tglsurat = array[1].split(/[()]/)
          if(tglsurat[1]!=undefined){
            var tglsurat1=tglsurat[1]
          }else{
            var tglsurat1='-'
          }
        }else{
          var tglsurat1= '-'
        }
        if(array[0]!=undefined){
          var nomersurat=array[0]
        }else{
          var nomersurat= '-'
        }
      var clonerow=$('#printJS-form > div:first-child').clone()
      $(clonerow).find('#codes1').text(element.code);
      $(clonerow).find('#nouruts1').text(element.no);
      $(clonerow).find('#isirings1').text(element.isi_ringkasan);
      $(clonerow).find('#keterangans1').text(element.keterangan);
      $(clonerow).find('#asalsurats1').text(element.asal_surat);
      $(clonerow).find('#tgltrimas1').text(element.tanggal_terima);
      $(clonerow).find('#nomortgls1').text(nomersurat);
      $(clonerow).find('#tglsurats1').text(tglsurat1);
      $(clonerow).appendTo("#printJS-form");
 
    console.log(index+'and'+element.no)
  });
  $('#printJS-form > div:first-child ').remove();


})

ipcRenderer.on('getkksmSucess',function(event,response){
  // console.log("this event will be involve")
  // console.log(response)
  response.forEach(element=>
  {
    array = [], c = 0;
    element.nomer_tanggal.split(/([()])/).filter(Boolean).forEach(e =>
      //Increase / decrease counter and push desired values to an array
     e == '(' ? c++ : e == ')' ? c-- : c > 0 ? array.push('(' + e + ')') : array.push(e)
      );
      // console.log(array)
      console.log(array[1])
      if(array[1]!=undefined){
        var tglsurat = array[1].split(/[()]/)
        if(tglsurat[1]!=undefined){
          var tglsurat1=tglsurat[1]
        }else{
          var tglsurat1='-'
        }
      }else{
        var tglsurat1= '-'
      }
     
    console.log(element)
    var data= $('#idkksm > div').first().clone();
    $(data).find('#code1').text(element.code);
    $(data).find('#nourut1').text(element.no);
    $(data).find('#isiring1').text(element.isi_ringkasan);
    $(data).find('#keterangan1').text(element.keterangan);
    $(data).find('#asalsurat1').text(element.asal_surat);
    $(data).find('#tgltrima1').text(element.tanggal_terima);
    $(data).find('#nomortgl1').text(element.nomer_tanggal);
    $(data).find('#tglsurat1').text(tglsurat1);

    $('#idkksm').append(data);
  });
    $('#idkksm > div').first().remove();

})