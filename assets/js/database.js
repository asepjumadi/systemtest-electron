var mysql = require('mysql');
const {ipcRenderer} = require('electron')


 
function searchByNo(){
    var params={
        nomer:$('#nomer').val()
    }
    ipcRenderer.send('openbyid',params)
    $('#inputBro').click(function(){
        $(this).closest('form').find("input[type=number]").val("");
    })
}  
function input(selector){
    return document.getElementById(selector);
}
console.log(input('action-btn'))
if(input('action-btn')){
    console.log("ada")
}else{
    console.log("kosong")
}


function readTable(){
    getFirstTenRows(function(rows){
                let html = ' ';
                // console.log(rows)
                rows.forEach(function(row){
                    var tglketemuKamu = new Date(row.tanggal_terima);
                    var loveDay = tglketemuKamu.getDate();
                    console.log(loveDay)
                    var LoveMonth = tglketemuKamu.getMonth();
                    var LoveYear = tglketemuKamu.getFullYear();
                    if (loveDay < 10) {
                        var Loversday = "0" + loveDay;
                    } else {
                        var Loversday = loveDay;
                    }
                    if (LoveMonth <= 12) {
                        if(LoveMonth == 0){
                          var LoversMonth="01"
                        }else if(LoveMonth == 1){
                          var  LoversMonth="02"
                        } else if(LoveMonth == 2){
                          var LoversMonth="03"
                          }
                        else if(LoveMonth == 3){
                        var LoversMonth="04"
                        }
                        else if(LoveMonth == 4){
                            var LoversMonth="05"
                            }
                        else if(LoveMonth == 5){
                        var LoversMonth="06"
                        }
                        else if(LoveMonth == 6){
                            var LoversMonth="07"
                            }
                        else if(LoveMonth == 7){
                        var LoversMonth="08"
                        }
                        else if(LoveMonth == 8){
                            var LoversMonth="09"
                            }
                        else if(LoveMonth == 9){
                        var LoversMonth="10"
                        }
                        else if(LoveMonth == 10){
                            var LoversMonth="11"
                            }
                        else if(LoveMonth == 11){
                        var LoversMonth="12"
                        }
                        }
                        var tglNikahDitetapkan = [ Loversday,LoversMonth, LoveYear];
                        var fixdate = tglNikahDitetapkan.join("-");
                  console.log(row.no)
                    html += '<tr>';
                    html += '<td>';
                    html += row.no;
                    html += '</td>';
                    html += '<td>';
                    html += row.index;
                    html += '</td>';
                    html += '<td>';
                    html += row.code;
                    html += '</td>';
                    html += '<td>';
                    html += fixdate;
                    html += '</td>';
                    html += '<td>';
                    html += row.nomer_tanggal;
                    html += '</td>';
                    html += '<td>';
                    html += row.asal_surat;
                    html += '</td>';
                    html += '<td>';
                    html += row.isi_ringkasan;
                    html += '</td>';
                    html += '<td>';
                    html += row.keterangan;
                    html += '</td>';
                    html += '</tr>';
                    console.log(row);
                    
                });
               
                document.getElementById('readTable').innerHTML=html;
                console.log("hallow")
                // $('.pagination').jqPagination({
                //     maxHeight: 1,
                //     link_string : '/?page={page_number}',
                //     current_page: 1, //Sets the current page, the default is 1
                //     max_page : 40, //Set the maximum page default is 1
                //     page_string : 'Pages {current_page} , {max_page} pages',
                //     paged : function(page) {
                //         // console.log(page)
                //         $('.testok tbody:not(:first)').hide();
                //         let pages = page;
                //         if(pages){
                //             for(i>1;pages;i++)

                //                     $("table > tbody > tr").hide().slice(0, 10).show();
                //                     $(".next").on("click", function() {
                //                     $("tbody > tr", $(this).prev()).show();
                //                     })
                //                 $(document).ready(function(page){
                //                     $('.testok tbody').hide();
                                        
                //                     // but show the one we want
                //                     $($('.testok tbody')[page - 1]).show();
                                        
                //                 })
                                
                //         }

                        
                //         }
                //     });
                
                ipcRenderer.send('haspagination','hallo succes')
                return html;
                
            });
           
        }
        
function getFirstTenRows(callback){
    var mysql = require('mysql');

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
    $query = 'SELECT `no`,`index`,`code`,`tanggal_terima`,`nomer_tanggal`,`asal_surat`,`isi_ringkasan`,`keterangan` FROM `undangan`';

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
// $(document).ready(function() {

//     // hide all but the first of our paragraphs
//     $('.table tbody:not(:first)').hide();

//     $('.pagination').jqPagination({
//         max_page    : $('.table tbody').length,
//         paged        : function(page) {

//             // a new 'page' has been requested

//             // hide all paragraphs
//             $('.table tbody').hide();

//             // but show the one we want
//             $($('.table tbody')[page - 1]).show();

//         }
//     });

// });​
function search() { 
    var doc = prompt("Pencarian Data berdasarkan nomer", 
        "non undangan"); 
    if (doc != null) {
        $('') 
        // document.getElementById("g").innerHTML = 
        //     "Welcome to " + doc; 
    } 
} 



// SELECT COUNT(*) FROM undangan

