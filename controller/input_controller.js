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
    ipcMain.on('updateNowbyNumber',function(event,data){

// execute the UPDATE statement
            connection.query('UPDATE `undangan` SET code` = ? ,`tanggal_terima` = ? , `nomer_tanggal` = ?,`asal_surat` = ?,`isi_ringkasan` = ?,`keterangan` =? WHERE `undangan`,`no` = ?',[data.code,data.tanggaltrima,data.nomorTanggal,data.asalsurat,data.isiringkasan,data.keterangan,data.nomer], function(error, result, fields){
            console.log(event.sender.send('updateResponse', result+"data succes been execute"))
            event.sender.send('updateResponse',result+"data succes been execute")
            });
            // console.log(connection.query(`UPDATE undangan SET code = ? ,tanggal_terima = ? , nomer_tanggal = ?,asal_surat = ?,isi_ringkasan = ?,keterangan =? WHERE no = ?`,[data.code,data.tanggaltrima,data.nomorTanggal,data.asalsurat,data.isiringkasan,data.keterangan,data.nomer], function(error, result, fields){

            //     }))
    })
    ipcMain.on('add-clean',function(event,data){
        event.sender.send('feedback-add',null)
    })
    ipcMain.on('search-and-show-clear',function(event ,data){
        var response={
            no:data.nomer
        }
        console.log(data)
        connection.query("SELECT `no`,`code`,`tanggal_terima`,`nomer_tanggal`,`asal_surat`,`isi_ringkasan`,`keterangan` FROM undangan WHERE ?",response,function(error,result,field){
            event.sender.send('getAllDataSucess', result)
            console.log('kosong')
            console.log(result)
            console.log('kosong2')
        })
        console.log(data)
    })
    ipcMain.on('deletebynomer',function(event,data){
        var response={
            no:data.nomer
        }
        connection.query("DELETE  FROM undangan WHERE ? ",response,function(error,result,field){
            event.sender.send('getDeleteSucess', result)
            console.log('delete clear')
            console.log(result)
            console.log('kosong2')
        })
        
    })

    ipcMain.on('show4KksmData',function(event,data){
        console.log("ok gaes data dari kksm saya terima")
        console.log(data)
        
        connection.query("SELECT * FROM undangan WHERE no BETWEEN "+data.in+" AND "+data.out+"",function(error,result,field){
            event.sender.send('getkksmSucess', result)
            console.log('data hasbeen show ')
            console.log(result)
            console.log('kosong2')
        })
        
    })

    ipcMain.on('showDisposisiData',function(event,data){
        console.log("ok gaes data dari kksm saya terima")
        console.log(data)
        
        connection.query("SELECT * FROM undangan WHERE no BETWEEN "+data.in+" AND "+data.out+"",function(error,result,field){
            event.sender.send('getDisposisiSucces', result)
            console.log('data hasbeen show ')
            console.log(result)
            console.log('kosong2')
        })
        
    })

       
 }
