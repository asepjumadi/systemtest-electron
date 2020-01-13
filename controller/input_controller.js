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
            index:data.index,
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
        // console.log(data)
      
    })
    ipcMain.on('updateNowbyNumber',function(event,data){
        console.log(data.index)
        console.log(data.code)
// execute the UPDATE statement
            connection.query('UPDATE `undangan` SET `index` = ? ,`code` = ? ,`tanggal_terima` = ? , `nomer_tanggal` = ?, `asal_surat` = ?, `isi_ringkasan` = ?, `keterangan`  = ? WHERE `no` = ?',[data.index,data.code,data.tanggaltrima,data.nomorTanggal,data.asalsurat,data.isiringkasan,data.keterangan,data.nomer], function(error, result, fields){
            console.log(event.sender.send('updateResponse', result))
            event.sender.send('updateResponse',result+"data succes been execute")
            console.log(result)
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
        connection.query("SELECT `no`,`index`,`code`,`tanggal_terima`,`nomer_tanggal`,`asal_surat`,`isi_ringkasan`,`keterangan` FROM undangan WHERE ?",response,function(error,result,field){
            event.sender.send('getAllDataSucess', result)
            // console.log('kosong')
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
            // console.log('delete clear')
            // console.log(result)
            // console.log('kosong2')
        })
        
    })

    ipcMain.on('show4KksmData',function(event,data){
        // console.log("ok gaes data dari kksm saya terima")
        // console.log(data)
        
        connection.query("SELECT * FROM undangan WHERE no BETWEEN "+data.in+" AND "+data.out+"",function(error,result,field){
            event.sender.send('getkksmSucess', result)
            // console.log('data hasbeen show ')
            // console.log(result)
            // console.log('kosong2')
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
//sendAddKksm
    ipcMain.on('sendAddKksm',function(event,data){
        var response = {
            no:data.no,
            index:data.index,
            kode:data.code,
            tgl_terima:data.tgltrima,
            no_surat:data.nomorsurat,
            tgl_surat:data.tanggalsurat,
            asal_surat:data.asalsurat,
            hari:data.hariacara,
            tgl:data.tanggalacara,
            jam:data.jamacara,
            tempat:data.tempatacara,
            acara:data.acara,
            unit_pelaksana:data.unitpelaksana,
        }
        connection.query("INSERT INTO kksm SET ?",response,function(error,result,field){
            event.sender.send('succesInsertKksm', result)
        })
        console.log(response)
    })
    ipcMain.on('searchKksmByNumbers',function(event ,data){
        var response={
            no:data.nomer
        }
        console.log(data)
        connection.query("SELECT `no`,`index`,`kode`,`tgl_terima`,`no_surat`,`tgl_surat`,`asal_surat`,`hari`,`tgl`,`jam`,`tempat`,`acara`,`unit_pelaksana` FROM kksm WHERE ?",response,function(error,result,field){
            event.sender.send('searchKksmSucess', result)
            // console.log('kosong')
            // console.log(result)
            // console.log('kosong2')
        })
        console.log(data)
    })
    
    ipcMain.on('deleteKksmbynomer',function(event,data){
        var response={
            no:data.nomer
        }
        connection.query("DELETE  FROM kksm WHERE ? ",response,function(error,result,field){
            event.sender.send('getDeletekksmSucess', result)
        })
        
    })
    ipcMain.on('updateAlKksm',function(event,data){
        // execute the UPDATE statement
        console.log(data.index)
        console.log(data.code)
                    connection.query('UPDATE `kksm` SET `index` = ?,`kode` = ? ,`tgl_terima` = ? , `no_surat` = ?, `tgl_surat` = ?, `asal_surat` = ?, `hari` = ?, `tgl` = ?, `jam` = ?, `tempat`  = ?, `acara` = ?, `unit_pelaksana` = ? WHERE `no` = ?',[data.index,data.code,data.tgltrima,data.nomorsurat,data.tanggalsurat,data.asalsurat,data.hariacara,data.tanggalacara,data.jamacara,data.tempatacara,data.acara,data.unitpelaksana,data.no], function(error, result, fields){
                    console.log(event.sender.send('updatekksmsucces', result+"data succes been execute"))
                    event.sender.send('updatekksmsucces',result+"data succes been execute")
                    });
            })
    
            ipcMain.on('showKksmreal',function(event,data){
                console.log("ok gaes data dari kksm saya terima")
                console.log(data)
                
                connection.query("SELECT * FROM kksm WHERE no BETWEEN "+data.in+" AND "+data.out+"",function(error,result,field){
                    event.sender.send('getOnKksmSucces', result)
                    console.log('data hasbeen show ')
                    console.log(result)
                    console.log('kosong2')
                })
            })

            ipcMain.on('showDisposisireal',function(event,data){
                console.log("ok gaes data dari kksm saya terima")
                console.log(data)
                
                connection.query("SELECT * FROM kksm WHERE no BETWEEN "+data.in+" AND "+data.out+"",function(error,result,field){
                    event.sender.send('getOnDisposisiSucces', result)
                    console.log('data hasbeen show ')
                    console.log(result)
                    console.log('kosong2')
                })
            })
            ipcMain.on('showUndanganBookData',function(event,data){
                console.log("ok gaes data dari invitation book saya terima")
                console.log(data)
                
                connection.query("SELECT * FROM kksm WHERE no BETWEEN "+data.in+" AND "+data.out+"",function(error,result,field){
                    event.sender.send('getInvitationBookSucces', result)
                    console.log('data hasbeen show ')
                    console.log(result)
                    console.log('kosong2')
                })
            })
            //showNonUndBookData
            ipcMain.on('showNonUndBookData',function(event,data){
                console.log("ok gaes data dari invitation book saya terima")
                console.log(data)
                
                connection.query("SELECT * FROM undangan WHERE no BETWEEN "+data.in+" AND "+data.out+"",function(error,result,field){
                    event.sender.send('getNonInvitationSucces', result)
                    console.log('data hasbeen show ')
                    console.log(result)
                    console.log('kosong2')
                })
            })
 }


