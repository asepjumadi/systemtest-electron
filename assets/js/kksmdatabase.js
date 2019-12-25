var mysql = require('mysql');
function readTablekksm(){
    getKksmRows(function(rows){
                var htmls = ' ';
                console.log('database start in here')
                console.log(rows)
                rows.forEach(function(row){
                console.log(row.no)
                    htmls += '<tr>';
                    htmls += '<td>';
                    htmls += row.no;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.kode;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.tgl_terima;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.no_surat;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.tgl_surat;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.asal_surat;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.hari;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.tgl;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.jam;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.tempat;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.acara;
                    htmls += '</td>';
                    htmls += '<td>';
                    htmls += row.unit_pelaksana;
                    htmls += '</td>';
                    htmls += '</tr>';
                    console.log('database pailid')
                    console.log(row);
                });
                
                var datas = document.getElementById('showkksmnow');
                datas.innerHTML = htmls;
                return htmls;

            });
           
        }
        
function getKksmRows(callback){
   

    // Add the credentials to access your database
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data_admin'
    });

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });

    // Perform a query
    $query = 'SELECT `no`,`kode`,`tgl_terima`,`no_surat`,`tgl_surat`,`asal_surat`,`hari`,`tgl`,`jam`,`tempat`,`acara`,`unit_pelaksana` FROM `kksm`';

    connection.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Query succesfully executed");
    });

    // Close the connection
    connection.end(function(){
        // The connection has been closed
    });
}


var mysql = require('mysql');
function readCountOfNonInvite(){
    getCountOfNonInvite(function(rows){
                var htmls = ' ';
                console.log('database start in here')
                console.log(rows)
                rows.forEach(function(row){
                htmls=row.count
                    
                    console.log('database show non undangan')
                    console.log(row);
                });
                
                var datas = document.getElementById('noncount');
                datas.innerHTML = htmls;
                return htmls;

            });
           
        }
        
function getCountOfNonInvite(callback){
   

    // Add the credentials to access your database
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data_admin'
    });

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });

    // Perform a query
    $query = 'SELECT COUNT(*) as count FROM undangan';

    connection.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Query succesfully executed");
    });

    // Close the connection
    connection.end(function(){
        // The connection has been closed
    });
}
function readCountOfInvite(){
    getCountOfInvite(function(rows){
                var htmls = ' ';
                console.log('database start in here')
                console.log(rows)
                rows.forEach(function(row){
                htmls=row.count
                    
                    console.log('database show non undangan')
                    console.log(row);
                });
                
                var datas = document.getElementById('undcount');
                datas.innerHTML = htmls;
                return htmls;

            });
           
        }
        
function getCountOfInvite(callback){
   

    // Add the credentials to access your database
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'data_admin'
    });

    // connect to mysql
    connection.connect(function(err) {
        // in case of error
        if(err){
            console.log(err.code);
            console.log(err.fatal);
        }
    });

    // Perform a query
    $query = 'SELECT COUNT(*) as count FROM kksm';

    connection.query($query, function(err, rows, fields) {
        if(err){
            console.log("An error ocurred performing the query.");
            console.log(err);
            return;
        }

        callback(rows);

        console.log("Query succesfully executed");
    });

    // Close the connection
    connection.end(function(){
        // The connection has been closed
    });
}
//select phone, phone2 
// from jewishyellow.users 
// where phone like '813%' and phone2<>''