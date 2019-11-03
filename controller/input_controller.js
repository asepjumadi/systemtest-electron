
const mysql =require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'data_admin'
});
 connection.connect();

 module.exports= function(ipcMain){
    ipcMain.on('testmain',function(event,data){
        var response = {
            no:data.nomer,
            code:data.code,
            tanggal_terima:data.tanggaltrima,
            nomer_tanggal:data.nomorTanggal,
            asal_surat:data.asalsurat,
            isi_ringkasan:data.isiringkasan,
            keterangan:data.keterangan,
        }
        connection.query("INSERT INTO undangan SET ?",response,function(error,result,field){
            event.sender.send('testclient', result)
        })
        console.log(data)
      
    })
    ipcMain.on('add-clean',function(event,data){
        event.sender.send('feedback-add',null)
    })
    ipcMain.on('search-and-show-clear',function(event ,data){
        
    })
 }
