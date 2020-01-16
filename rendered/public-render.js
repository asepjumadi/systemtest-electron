const { ipcRenderer } = require("electron");
const { dialog } = require("electron");
const { BrowserWindow } = require("electron");
(window.ipc = window.ipc || {}),
  (function(n) {
    ipc.messaging = {
      sendOpenAddEvent: function() {
        ipcRenderer.send("add-clean", "an-argument");
      },
      sendOpenSecondWindowEvent: function() {
        ipcRenderer.send("open-search-window", "an-argument");
      },

      sendCloseSecondWindowEvent: function() {
        ipcRenderer.send("close-second-window", "an-argument");
      },
      inputDataToDatabase: function() {
        // var dirtsyTglTrima = $("#tanggaltrimakksm").val();
        // var date2 = new Date(dirtsyTglTrima);
        // var cleanTglTrima = date2.toLocaleDateString("id-ID");
        if ($("#nomer").val() === "0") {
          var nomer = null;
        } else {
          var nomer = $("#nomer").val();
        }
        var params = {
          nomer: nomer,
          index:$("#index1").val(),
          code: $("#code").val(),
          tanggaltrima: $("#tanggaltrima").val(),
          nomorTanggal: $("#nomorTanggal").val(),
          asalsurat: $("#asalsurat").val(),
          isiringkasan: $("#isiringkasan").val(),
          keterangan: $("#keterangan").val()
        };

        ipcRenderer.send("testmain", params);
      },
      openSearchByNumber: function() {
        var params = {
          nomer: $("#nomer_id").val()
        };
        ipcRenderer.send("search-and-show-clear", params);
      },
      deleteByNumber: function() {
        var params = {
          nomer: $("#nomer_id").val()
        };
        console.log($("#nomer_id").val());
        ipcRenderer.send("deletebynomer", params);
      },
      updateByNumber: function() {
        console.log($("#tanggaltrima").val())
        // var dirtsyTglTrima = $("#tanggaltrima").val();
        // var date2 = new Date(dirtsyTglTrima);
        // var TglTrima = date2.toLocaleDateString("id-ID");
        // var datafirst = TglTrima.split("/");
        // var day2 = datafirst[0];
        // var month2 = datafirst[1];
        // var year2 = datafirst[2];
        // var fulldateconvert = [day2, month2, year2];
        // var cleandate = fulldateconvert.join("-");
        if ($("#nomer_id").val() === "0") {
          var nomerid = null;
        } else {
          var nomerid = $("#nomer_id").val();
        }
        var params = {
          nomer: nomerid,
          index: $('#index1').val(),
          code: $("#code").val(),
          tanggaltrima: $("#tanggaltrima").val(),
          nomorTanggal: $("#nomorTanggal").val(),
          asalsurat: $("#asalsurat").val(),
          isiringkasan: $("#isiringkasan").val(),
          keterangan: $("#keterangan").val()
        };
        ipcRenderer.send("updateNowbyNumber", params);
        console.log(params);
      },

      sendRefreshAll: function() {
        ipcRenderer.send("RefreshOn", "an-argument");
        location.reload();
      },
      show4KksmData: function() {
        var nomerin = $("#mulai").val();
        var nomerout = $("#akhir").val();
        console.log(nomerin);
        console.log(nomerout);
        // var b = nomers.split(',').map(function(item) {
        //   return parseInt(item, 10);
        // });
        var params = {
          in: nomerin,
          out: nomerout
        };
        ipcRenderer.send("show4KksmData", params);
      },
      showDisposisiData: function() {
        var nomerin = $("#mulai1").val();
        var nomerout = $("#akhir1").val();
        console.log(nomerin);
        console.log(nomerout);

        var params = {
          in: nomerin,
          out: nomerout
        };
        ipcRenderer.send("showDisposisiData", params);
      },
      //for send  insert data kksm
      sendAddKksm: function() {
        var dirtsyTglTrima = $("#tanggaltrimakksm").val();
        var date2 = new Date(dirtsyTglTrima);
        var cleanTglTrima = date2.toLocaleDateString("id-ID");

        var dirtytglsurat = $("#tanggalsurat").val();
        var datenew1 = new Date(dirtytglsurat);
        var cleanTglSurat = datenew1.toLocaleDateString("id-ID");

        var dirtytglacara = $("#tanggalacara").val();
        var datenew2 = new Date(dirtytglacara);
        var cleanTglAcara = datenew2.toLocaleDateString("id-ID");
        // console.log(cleanTglTrima)
        console.log(typeof $("#nomerkksm").val());
        if ($("#nomerkksm").val() === "0") {
          var no = "salah";
        } else {
          var no = $("#nomerkksm").val();
        }
        var params = {
          no: no,
          index:$('#index2').val(),
          code: $("#codekksm").val(),
          tgltrima: cleanTglTrima,
          nomorsurat: $("#nomorsurat").val(),
          tanggalsurat: cleanTglSurat,
          asalsurat: $("#asalsuratkksm").val(),
          hariacara: $("#hariacara").val(),
          tanggalacara: cleanTglAcara,
          jamacara: $("#jamacara").val(),
          tempatacara: $("#tempatacara").val(),
          acara: $("#acara").val(),
          unitpelaksana: $("#unitpelaksana").val()
        };
        ipcRenderer.send("sendAddKksm", params);
        console.log("normal format");
        console.log(params);
      },

      updateAllKksm: function() {
        var dirtsyTglTrima = $("#tanggaltrimakksm").val();
        var date2 = new Date(dirtsyTglTrima);
        var cleanTglTrima = date2.toLocaleDateString("id-ID");

        var dirtytglsurat = $("#tanggalsurat").val();
        var datenew1 = new Date(dirtytglsurat);
        var cleanTglSurat = datenew1.toLocaleDateString("id-ID");

        var dirtytglacara = $("#tanggalacara").val();
        var datenew2 = new Date(dirtytglacara);
        var cleanTglAcara = datenew2.toLocaleDateString("id-ID");
        // console.log(cleanTglTrima)
        var params = {
          no: $("#nomerkksm").val(),
          index:$('#index2').val(),
          code: $("#codekksm").val(),
          tgltrima: cleanTglTrima,
          nomorsurat: $("#nomorsurat").val(),
          tanggalsurat: cleanTglSurat,
          asalsurat: $("#asalsuratkksm").val(),
          hariacara: $("#hariacara").val(),
          tanggalacara: cleanTglAcara,
          jamacara: $("#jamacara").val(),
          tempatacara: $("#tempatacara").val(),
          acara: $("#acara").val(),
          unitpelaksana: $("#unitpelaksana").val()
        };
        ipcRenderer.send("updateAlKksm", params);
        console.log("normal format");
        console.log(params);
      },
      searchKksmByNumber: function() {
        var params = {
          nomer: $("#nomer_kksm").val()
        };
        ipcRenderer.send("searchKksmByNumbers", params);
      },
      deleteKksmByNumber: function() {
        var params = {
          nomer: $("#nomer_kksm").val()
        };
        console.log($("#nomerkksm").val());
        ipcRenderer.send("deleteKksmbynomer", params);
      },
      showrealKksmData: function() {
        var nomerin = $("#mulaikksm").val();
        var nomerout = $("#akhirkksm").val();
        console.log(nomerin);
        console.log(nomerout);
        // var b = nomers.split(',').map(function(item) {
        //   return parseInt(item, 10);
        // });
        var params = {
          in: nomerin,
          out: nomerout
        };
        ipcRenderer.send("showKksmreal", params);
      },
      showDisposisirealkksm: function() {
        var nomerin = $("#nomulai1").val();
        var nomerout = $("#noakhir1").val();
        console.log(nomerin);
        console.log(nomerout);

        var params = {
          in: nomerin,
          out: nomerout
        };
        ipcRenderer.send("showDisposisireal", params);
      },
      showUndanganBook: function() {
        var nomerin = $("#mulaibook1").val();
        var nomerout = $("#akhirbook1").val();
        console.log(nomerin);
        console.log(nomerout);

        var params = {
          in: nomerin,
          out: nomerout
        };
        ipcRenderer.send("showUndanganBookData", params);
      },
      showNonUndBook: function() {
        var nomerin = $("#mulaiNonUnd").val();
        var nomerout = $("#akhirNonUnd").val();
        console.log(nomerin);
        console.log(nomerout);

        var params = {
          in: nomerin,
          out: nomerout
        };
        ipcRenderer.send("showNonUndBookData", params);
      },
      init: function() {
        // $('#tambah').click( function () {
        //   ipc.messaging.sendOpenAddEvent()
        //   $('#inputBro').click(function(){
        //     $(this).closest('form').find("input[type=text],input[type=number],textarea").val().reset();
        // });
        // })
        //inputalldatakksm
        $("#tambah").click(function() {
          ipc.messaging.sendOpenAddEvent();
          document.getElementById("inputBro").reset();
        });
        $("#tambahksm").click(function() {
          ipc.messaging.sendOpenAddEvent();
          document.getElementById("inputalldatakksm").reset();
        });
        $("#open-search-button").click(function() {
          ipc.messaging.sendOpenSecondWindowEvent();
        });

        $("#close-me-button").click(function() {
          ipc.messaging.sendCloseSecondWindowEvent();
        });
        $("#search-by-number").click(function() {
          ipc.messaging.openSearchByNumber();
        });
        $("#ubah").click(function() {
          ipc.messaging.updateByNumber();
        });
        $("#delete-by-number").click(function() {
          ipc.messaging.deleteByNumber();
        });
        $("#Refresh").click(function() {
          ipc.messaging.sendRefreshAll();
        });
        $("#Kksm4Hasil").click(function() {
          ipc.messaging.show4KksmData();
        });
        $("#showDisposisiData").click(function() {
          ipc.messaging.showDisposisiData();
        });
        $("#simpankksm").click(function() {
          ipc.messaging.sendAddKksm();
        });
        $("#ubahkksm").click(function() {
          ipc.messaging.updateAllKksm();
        });
        $("#search-by-numberkkm").click(function() {
          ipc.messaging.searchKksmByNumber();
        });
        $("#delete-by-numberkksm").click(function() {
          ipc.messaging.deleteKksmByNumber();
        });
        $("#showDisposisiOnKKsm").click(function() {
          ipc.messaging.showDisposisirealkksm();
        });
        $("#KksmRealHasil").click(function() {
          ipc.messaging.showrealKksmData();
        });
        $("#KksmRealHasilBook").click(function() {
          ipc.messaging.showUndanganBook();
        });
        $("#NonUndBook").click(function() {
          ipc.messaging.showNonUndBook();
        });
        $("#inputUndToDatabase").click(function() {
          ipc.messaging.inputDataToDatabase();
        });
      }
    };

    n(function() {
      ipc.messaging.init();
    });
  })(jQuery);

ipcRenderer.on("feedback-add", function(event, response) {
  console.log(response);
});
ipcRenderer.on("getAllDataSucess", function(event, response) {
  console.log(response);
  console.log("all-one");
  var params = {
    saverNomer: $("#nomer_id").val()
  };
  if (response[0] === undefined) {
    console.log("undefined only");
    document.getElementById("noticeid").innerHTML =
      "&#9824; data dengan nomer Urut ke-" +
      params.saverNomer +
      " Tidak Berhasil Ditemukan";
    document.getElementById("noticeid").style.color = "red";
    $("#nomer").val(0),
    $('#index1').val("Index tidak Ditemukan"),
      $("#code").val("Kode surat tidak ditemukan"),
      $("#tanggaltrima").val("tanggal terima surat tidak ditemukan"),
      $("#nomorTanggal").val("nomer dan tanggal surat tidak ditemukan"),
      $("#asalsurat").val("asal surat tidak ditemukan"),
      $("#isiringkasan").val("isi ringkasan tidak ditemukan"),
      $("#keterangan").val("keterangan tidak ditemukan");
  } else {
    console.log(response[0]);
    document.getElementById("noticeid").innerHTML =
      "&#9829; data dengan nomer Urut ke-" +
      params.saverNomer +
      " Berhasil Ditemukan";
    document.getElementById("noticeid").style.color = "green";
    console.log(response[0].tanggal_terima);
    var tglNikahanRancu = response[0].tanggal_terima;
    var tglketemuKamu = new Date(tglNikahanRancu);
    var loveDay = tglketemuKamu.getDate();
    console.log(loveDay)
    var LoveMonth = tglketemuKamu.getMonth();
    
    console.log(LoveMonth)
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
    var tglNikahDitetapkan = [LoveYear, LoversMonth, Loversday];
    var fixdate = tglNikahDitetapkan.join("-");
    // console.log(fixdate);
    // console.log("why you are still NaN?");
    $("#nomer").val(response[0].no),
    $("#index1").val(response[0].index),
      $("#code").val(response[0].code),
      $("#tanggaltrima").val(fixdate),
      $("#nomorTanggal").val(response[0].nomer_tanggal),
      $("#asalsurat").val(response[0].asal_surat),
      $("#isiringkasan").val(response[0].isi_ringkasan),
      $("#keterangan").val(response[0].keterangan);
  }
});
ipcRenderer.on("updateResponse", function(event, response) {
  console.log("Start To Update ..........");
  console.log(response);
  console.log("update clear now");
});
ipcRenderer.on("getDeleteSucess", function(event, response) {
  console.log(response);
  //   $('#inputBro').click(function(){
  //     $(this).closest('form').find("input[type=text],input[type=number],textarea").val("");
  // });
  console.log(response);
  console.log("succes delete");
});

ipcRenderer.on("getDisposisiSucces", function(event, response) {
  console.log(response);
  var array = [],
    a = 0;

  response.forEach(function(element, index) {
    console.log(element.no);
    var Sindex = 2 * index;
    var no = element.no;
    var tglNikahanRancu = element.tanggal_terima;
    var tglketemuKamu = new Date(tglNikahanRancu);
    var loveDay = tglketemuKamu.getDate();
    var LoveMonth = tglketemuKamu.getMonth();
    var LoveYear = tglketemuKamu.getFullYear();
    if (loveDay < 10) {
      var Loversday = "0" + loveDay;
    } else {
      var Loversday = loveDay;
    }
    var tglNikahDitetapkan = [Loversday, LoveMonth, LoveYear];
    var fixdate = tglNikahDitetapkan.join("-");
    (array = []), (c = 0);
    element.nomer_tanggal
      .split(/([()])/)
      .filter(Boolean)
      .forEach(e =>
        //Increase / decrease counter and push desired values to an array
        e == "("
          ? c++
          : e == ")"
          ? c--
          : c > 0
          ? array.push("(" + e + ")")
          : array.push(e)
      );
    // console.log(array)
    console.log(array[0]);
    if (array[1] != undefined) {
      var tglsurat = array[1].split(/[()]/);
      if (tglsurat[1] != undefined) {
        var tglsurat1 = tglsurat[1];
      } else {
        var tglsurat1 = "-";
      }
    } else {
      var tglsurat1 = "-";
    }

    if (array[0] != undefined) {
      var nomersurat = array[0];
    } else {
      var nomersurat = "-";
    }
    var clonerow = $("#printJS-form > div:first-child").clone();
    $(clonerow)
      .find("#codes1")
      .text(element.code);
    $(clonerow)
      .find("#indexdisn")
      .text(element.index);
    $(clonerow)
      .find("#nouruts1")
      .text(element.no);
    $(clonerow)
      .find("#isirings1")
      .text(element.isi_ringkasan);
    $(clonerow)
      .find("#keterangans1")
      .text(element.keterangan);
    $(clonerow)
      .find("#asalsurats1")
      .text(element.asal_surat);
    $(clonerow)
      .find("#tgltrimas1")
      .text(fixdate);
    $(clonerow)
      .find("#nomortgls1")
      .text(nomersurat);
    $(clonerow)
      .find("#tglsurats1")
      .text(tglsurat1);
    $(clonerow).appendTo("#printJS-form");

    console.log(index + "and" + element.no);
  });
  $("#printJS-form > div:first-child ").remove();
});

ipcRenderer.on("getkksmSucess", function(event, response) {
  // console.log("this event will be involve")
  // console.log(response)
  response.forEach(element => {
    (array = []), (c = 0);
    // var tglNikahanRancu = element.tanggal_terima;
    // var tglketemuKamu = new Date(tglNikahanRancu);
    // var loveDay = tglketemuKamu.getDate();
    // var LoveMonth = tglketemuKamu.getMonth();
    // var LoveYear = tglketemuKamu.getFullYear();

    // var tglNikahDitetapkan = [loveDay, LoveMonth, LoveYear];
    // var fixdate = tglNikahDitetapkan.join("-");
    var tglNikahanRancu = element.tanggal_terima;
    var tglketemuKamu = new Date(tglNikahanRancu);
    var loveDay = tglketemuKamu.getDate();
    console.log(loveDay)
    var LoveMonth = tglketemuKamu.getMonth();
    
    console.log(LoveMonth)
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
    var tglNikahDitetapkan = [Loversday, LoversMonth,LoveYear];
    var fixdate = tglNikahDitetapkan.join("-");
    element.nomer_tanggal
      .split(/([()])/)
      .filter(Boolean)
      .forEach(e =>
        //Increase / decrease counter and push desired values to an array
        e == "("
          ? c++
          : e == ")"
          ? c--
          : c > 0
          ? array.push("(" + e + ")")
          : array.push(e)
      );
    // console.log(array)
    console.log(array[1]);
    if (array[1] != undefined) {
      var tglsurat = array[1].split(/[()]/);
      if (tglsurat[1] != undefined) {
        var tglsurat1 = tglsurat[1];
      } else {
        var tglsurat1 = "-";
      }
    } else {
      var tglsurat1 = "-";
    }
    if (array[0] != undefined) {
      var nomersurat = array[0];
    } else {
      var nomersurat = "-";
    }
    console.log(element);
    var data = $("#idkksm > div")
      .first()
      .clone();
    $(data)
      .find("#code1")
      .text(element.code);
      $(data)
      .find("#indexkksmn")
      .text(element.index);
    $(data)
      .find("#nourut1")
      .text(element.no);
    $(data)
      .find("#isiring1")
      .text(element.isi_ringkasan);
    $(data)
      .find("#keterangan1")
      .text(element.keterangan);
    $(data)
      .find("#asalsurat1")
      .text(element.asal_surat);
    $(data)
      .find("#tglterima")
      .text(fixdate);
    $(data)
      .find("#nomortgl1")
      .text(nomersurat);
    $(data)
      .find("#tglsurat1")
      .text(tglsurat1);

    $("#idkksm").append(data);
  });
  $("#idkksm > div")
    .first()
    .remove();
});

//mulaibook1
ipcRenderer.on("succesInsertKksm", function(event, response) {
  // console.log("result of kksm");
  // console.log(response);
  console.log(response);
  console.log($("#nomerkksm").val());
  if (response == null) {
    document.getElementById("globalnotice").innerHTML =
      "&#9824;input data ke database gagal";
    document.getElementById("globalnotice").style.color = "red";
    if ($("#nomerkksm").val() === "") {
      console.log("ok you in red Zone of number");
      document.getElementById("nomerkksm").style.borderWidth = "5px";
      document.getElementById("nomerkksm").style.borderColor = "red";
      document.getElementById("nourutlabel").style.color = "red";
      document.getElementById("nomernotice").innerHTML = "Tidak Boleh Kosong";
      // $('#validationNumber').val("Sudah Ada Pada Database");
    } else if ($("#nomerkksm").val() === "0") {
      document.getElementById("nomerkksm").style.borderWidth = "5px";
      document.getElementById("nomerkksm").style.borderColor = "red";
      document.getElementById("nourutlabel").style.color = "red";
      document.getElementById("nomernotice").innerHTML =
        "nomer 0 tidak diizinkan";
    } else {
      console.log("ok you in green Zone of number");
      document.getElementById("nomerkksm").style.borderColor = "red";
      document.getElementById("nomerkksm").style.borderWidth = "5px";
      document.getElementById("nourutlabel").style.color = "red";
      document.getElementById("nomernotice").innerHTML =
        "Sudah Ada Pada Database";
      // $('#validationNumber').val("Tidak Boleh Kosong");
    }

    if ($("#tanggaltrimakksm").val() === "") {
      document.getElementById("tgltrimalabel").style.color = "red";
      document.getElementById("tanggaltrimakksm").style.borderWidth = "5px";
      document.getElementById("tanggaltrimakksm").style.borderColor = "red";
      document.getElementById("tglterimaNotice").innerHTML =
        "Tidak Boleh Kosong";
    } else {
      console.log("you are in safe zone");
      document.getElementById("tgltrimalabel").style.color = "green";
      document.getElementById("tanggaltrimakksm").style.borderWidth = "5px";
      document.getElementById("tanggaltrimakksm").style.borderColor = "green";
      document.getElementById("tglterimaNotice").innerHTML = " ";
    }

    if ($("#tanggalsurat").val() === "") {
      document.getElementById("tglsuratlabel").style.color = "red";
      document.getElementById("tanggalsurat").style.borderWidth = "5px";
      document.getElementById("tanggalsurat").style.borderColor = "red";
      document.getElementById("tglsuratnotice").innerHTML =
        "Tidak Boleh Kosong";
    } else {
      console.log("you are in safe zone");
      document.getElementById("tglsuratlabel").style.color = "green";
      document.getElementById("tanggalsurat").style.borderWidth = "5px";
      document.getElementById("tanggalsurat").style.borderColor = "green";
      document.getElementById("tglsuratnotice").innerHTML = " ";
    }

    if ($("#tanggalacara").val() === "") {
      document.getElementById("tglacaraLabel").style.color = "red";
      document.getElementById("tanggalacara").style.borderWidth = "5px";
      document.getElementById("tanggalacara").style.borderColor = "red";
      document.getElementById("tglacaranotice").innerHTML =
        "Tidak Boleh Kosong";
    } else {
      console.log("you are in safe zone");
      document.getElementById("tglacaraLabel").style.color = "green";
      document.getElementById("tanggalacara").style.borderWidth = "5px";
      document.getElementById("tanggalacara").style.borderColor = "green";
      document.getElementById("tglacaranotice").innerHTML = " ";
    }

    if ($("#jamacara").val() === "") {
      document.getElementById("jamlabel").style.color = "red";
      document.getElementById("jamacara").style.borderWidth = "5px";
      document.getElementById("jamacara").style.borderColor = "red";
      document.getElementById("jamnotice").innerHTML = "Tidak Boleh Kosong";
    } else {
      console.log("you are in safe zone");
      document.getElementById("jamlabel").style.color = "green";
      document.getElementById("jamacara").style.borderWidth = "5px";
      document.getElementById("jamacara").style.borderColor = "green";
      document.getElementById("jamnotice").innerHTML = " ";
    }

    console.log("this red zone");
  } else {
    console.log("your good boy or girl");
    document.getElementById("nomerkksm").style.borderColor = "#ddd";
    document.getElementById("nomerkksm").style.borderWidth = "0.5px";
    document.getElementById("nourutlabel").style.color = "grey";
    document.getElementById("nomernotice").innerHTML = " ";
    document.getElementById("globalnotice").innerHTML =
      "&#9829;input data ke database berhasil";
    document.getElementById("globalnotice").style.color = "green";

    document.getElementById("tgltrimalabel").style.color = "grey";
    document.getElementById("tanggaltrimakksm").style.borderWidth = "0.5px";
    document.getElementById("tanggaltrimakksm").style.borderColor = "#ddd";
    document.getElementById("tglterimaNotice").innerHTML = " ";

    document.getElementById("jamlabel").style.color = "grey";
    document.getElementById("jamacara").style.borderWidth = "0.5px";
    document.getElementById("jamacara").style.borderColor = "#ddd";
    document.getElementById("jamnotice").innerHTML = " ";

    document.getElementById("tglacaraLabel").style.color = "grey";
    document.getElementById("tanggalacara").style.borderWidth = "0.5px";
    document.getElementById("tanggalacara").style.borderColor = "#ddd";
    document.getElementById("tglacaranotice").innerHTML = " ";

    document.getElementById("tglsuratlabel").style.color = "grey";
    document.getElementById("tanggalsurat").style.borderWidth = "0.5px";
    document.getElementById("tanggalsurat").style.borderColor = "#ddd";
    document.getElementById("tglsuratnotice").innerHTML = " ";
  }
});
//responsekksm
ipcRenderer.on("searchKksmSucess", function(event, response) {
  console.log(response);
  console.log("one -kksm in");
  if (response[0] == undefined) {
    var saverNomer = $("#nomer_id").val();
    console.log("undefined only");

    var dy = ["1111"];
    var dm = ["11"];
    var dd = ["11"];
    var Dates = [dy, dm, dd];
    var nullDate = Dates.join("-");
    $("#nomerkksm").val(0);
    $("#index2").val("data tidak ditemukan");
    $("#codekksm").val("Kode surat tidak ditemukan");
    $("#tanggaltrimakksm").val(nullDate);
    $("#nomorsurat").val("nomer surat tidak ditemukan");
    $("#tanggalsurat").val(nullDate);
    $("#asalsuratkksm").val("Asal Surat tidak ditemukan");
    $("#hariacara").val("hari tidak ditemukan");
    $("#tanggalacara").val(nullDate);
    $("#jamacara").val("Jam acara tidak ditemukan");
    $("#tempatacara").val("Tempat acara tidak ditemukan");
    $("#acara").val("Acara tidak ditemukan");
    $("#unitpelaksana").val("Unit pelaksana tidak ditemukan");
  } else if (response[0] != undefined) {
    console.log(response[0]);

    var TglTrima = response[0].tgl_terima;
    var datafirst = TglTrima.split("/");
    var day2 = datafirst[0];
    if (day2 < 10) {
      var dayfixTglTrima = "0" + day2;
    } else {
      var dayfixTglTrima = day2;
    }
    var month2 = datafirst[1];
    if (month2 < 10) {
      var monthTglTrima = "0" + month2;
    } else {
      var monthTglTrima = month2;
    }
    var year2 = datafirst[2];
    var fulldate2 = [year2, monthTglTrima, dayfixTglTrima];
    var fullTglTrima = fulldate2.join("-");

    var defaulttglsurat = response[0].tgl_surat;
    var datasecond = defaulttglsurat.split("/");
    var day1 = datasecond[0];
    if (day1 < 10) {
      var dayfixTglSurat = "0" + day1;
    } else {
      var dayfixTglSurat = day1;
    }
    var month1 = datasecond[1];
    if (month1 < 10) {
      var monthTglSurat = "0" + month1;
    } else {
      var monthTglSurat = month1;
    }
    var year1 = datasecond[2];
    var fulldate1 = [year1, monthTglSurat, dayfixTglSurat];
    var fulltglsurat = fulldate1.join("-");

    var deafulttglacara = response[0].tgl;
    var data1 = deafulttglacara.split("/");
    var day = data1[0];
    if (day < 10) {
      var dayfixTglAcara = "0" + day;
    } else {
      var dayfixTglAcara = day;
    }
    var month = data1[1];
    if (month < 10) {
      var monthTglAcara = "0" + month;
    } else {
      var monthTglAcara = month;
    }
    var year = data1[2];
    var fulldate = [year, monthTglAcara, dayfixTglAcara];
    var fulldateyear = fulldate.join("-");
    console.log("hallo saya pembatas")
    console.log(response[0].index)
    console.log(data1);
    console.log(deafulttglacara);
    console.log(fulldate);
    console.log(fulldateyear);
    $("#nomerkksm").val(response[0].no);
    $('#index2').val(response[0].index);
    $("#codekksm").val(response[0].kode);
    $("#tanggaltrimakksm").val(fullTglTrima);
    $("#nomorsurat").val(response[0].no_surat);
    $("#tanggalsurat").val(fulltglsurat);
    $("#asalsuratkksm").val(response[0].asal_surat);
    $("#hariacara").val(response[0].hari);
    $("#tanggalacara").val(fulldateyear);
    $("#jamacara").val(response[0].jam);
    $("#tempatacara").val(response[0].tempat);
    $("#acara").val(response[0].acara);
    $("#unitpelaksana").val(response[0].unit_pelaksana);
  }
});
//
ipcRenderer.on("getDeletekksmSucess", function(event, response) {
  console.log(response);
});
ipcRenderer.on("updatekksmsucces", function(event, response) {
  console.log(response);
});

ipcRenderer.on("getOnKksmSucces", function(event, response) {
  // console.log("this event will be involve")
  // console.log(response)
  response.forEach(element => {
    console.log(element);

    var data = $("#idkksms > div")
      .first()
      .clone();
    $(data)
      .find("#nourutk")
      .text(element.no);
    $(data)
      .find("#indexk")
      .text(element.index);
    $(data)
      .find("#codek")
      .text(element.kode);
    $(data)
      .find("#isiringk")
      .text(
          element.acara
      );//tglteruskan
    $(data)
      .find("#tglteruskan")
      .text(element.tgl_terima);
    $(data)
      .find("#keterangank")
      .text(element.unit_pelaksana);
    $(data)
      .find("#asalsuratk")
      .text(element.asal_surat);
    $(data)
      .find("#tgltrimak")
      .text(element.tgl_terima);
    $(data)
      .find("#nomortglk")
      .text(element.no_surat);
    $(data)
      .find("#tglsuratk")
      .text(element.tgl_surat);

    $("#idkksms").append(data);
  });
  $("#idkksms > div")
    .first()
    .remove();
});
ipcRenderer.on("getOnDisposisiSucces", function(event, response) {
  console.log(response);
  var array = [],
    a = 0;

  response.forEach(element => {
    console.log(element.no);
    var clonerow = $("#printJS-formes > div:first-child").clone();
    $(clonerow)
      .find("#codex")
      .text(element.kode);
    $(clonerow)
      .find("#indexkdx")
      .text(element.index);
    $(clonerow)
      .find("#nourutx")
      .text(element.no);
    $(clonerow)
      .find("#isiringx")
      .text(
          element.acara
      );
    $(clonerow)
      .find('#tglacaraX')
      .text(element.tgl);
    $(clonerow)
      .find("#keteranganx")
      .text(element.unit_pelaksana);
    $(clonerow)
      .find("#asalsuratx")
      .text(element.asal_surat);
    $(clonerow)
      .find("#tgltrimax")
      .text(element.tgl_terima);
    $(clonerow)
      .find("#nomortglx")
      .text(element.no_surat);
    $(clonerow)
      .find("#tglsuratx")
      .text(element.tgl_surat);
    // $('#printJS-formes').append(clonerow);
    $(clonerow).appendTo("#printJS-formes");

    // console.log(index+'and'+element.no)
  });
  $("#printJS-formes > div:first-child ").remove();
});
ipcRenderer.on("getInvitationBookSucces", function(event, response) {
  console.log(response);
  var array = [],
    a = 0;

  var clonerow = response.forEach(element => {
    console.log(element.no);
    var clonerow = $("#readTableUndangan > tr:first-child").clone();
    $(clonerow)
      .find("#codebook")
      .text(element.kode);
    $(clonerow)
      .find("#nourutbook")
      .text(element.no);
    $(clonerow)
      .find("#haribook")
      .text(element.hari);
    $(clonerow)
      .find("#tglbook")
      .text(element.tgl);
    $(clonerow)
      .find("#jambook")
      .text(element.jam);
    $(clonerow)
      .find("#tempatbook")
      .text(element.tempat);
    $(clonerow)
      .find("#acarabook")
      .text(element.acara);
    $(clonerow)
      .find("#keteranganbook")
      .text(element.unit_pelaksana);
    $(clonerow)
      .find("#asalsuratbook")
      .text(element.asal_surat);
    $(clonerow)
      .find("#tgltrimabook")
      .text(element.tgl_terima);
    $(clonerow)
      .find("#nomortglbook")
      .text(element.no_surat);
    $(clonerow)
      .find("#tglsuratbook")
      .text(element.tgl_surat);
    // $('#printJS-formes').append(clonerow);
    $(clonerow).appendTo("#readTableUndangan");

    // console.log(index+'and'+element.no)
  });
  $("#readTableUndangan > tr:first-child ").remove();
});

ipcRenderer.on("getNonInvitationSucces", function(event, response) {
  console.log(response);
  var array = [],
    a = 0;

  response.forEach(element => {
    console.log(element.no);
    var tglNikahanRancu = element.tanggal_terima;
    var tglketemuKamu = new Date(tglNikahanRancu);
    var loveDay = tglketemuKamu.getDay();
    var LoveMonth = tglketemuKamu.getMonth();
    var LoveYear = tglketemuKamu.getFullYear();
    if (loveDay < 10) {
      var Loversday = "0" + loveDay;
    } else {
      var Loversday = loveDay;
    }

    if (LoveMonth < 10) {
      var LoversMonth = "0" + LoveMonth;
    } else {
      var LoversMonth = LoveMonth;
    }
    var tglNikahDitetapkan = [Loversday, LoversMonth, LoveYear];
    var fixdate = tglNikahDitetapkan.join("-");
    var clonerow = $("#readTableNonUnd > tr:first-child").clone();
    $(clonerow)
      .find("#kodenTglNonUnd")
      .text(element.code + " ," + fixdate);
    $(clonerow)
      .find("#noNonUnd")
      .text(element.no);
    $(clonerow)
      .find("#isiringNonUnd")
      .text(element.isi_ringkasan);
    $(clonerow)
      .find("#ketNonUnd")
      .text(element.keterangan);
    $(clonerow)
      .find("#asalNonUnd")
      .text(element.asal_surat);
    $(clonerow)
      .find("#nonTglNonUnd")
      .text(element.nomer_tanggal);
    // $('#printJS-formes').append(clonerow);
    $(clonerow).appendTo("#readTableNonUnd");
    // console.log(index+'and'+element.no)
  });
  $("#readTableNonUnd > tr:first-child ").remove();
});

ipcRenderer.on("testclient", function(event, response) {
  console.log(response);
  console.log($("#nomer").val());
  if (response == null) {
    document.getElementById("noticeid").innerHTML =
      "&#9824;input data ke database gagal";
    document.getElementById("noticeid").style.color = "red";
    if ($("#nomer").val() === "") {
      console.log("ok you in red Zone of number");
      document.getElementById("nomer").style.borderWidth = "5px";
      document.getElementById("nomer").style.borderColor = "red";
      document.getElementById("nonotice").style.color = "red";
      document.getElementById("validationNumber").innerHTML =
        "Tidak Boleh Kosong";
      // $('#validationNumber').val("Sudah Ada Pada Database");
    } else if ($("#nomer").val() === "0") {
      console.log("ok you in green Zone of number");
      document.getElementById("nomer").style.borderColor = "red";
      document.getElementById("nomer").style.borderWidth = "5px";
      document.getElementById("nonotice").style.color = "red";
      document.getElementById("validationNumber").innerHTML =
        "Nomer 0 tidak diizinkan";
    } else {
      console.log("ok you in green Zone of number");
      document.getElementById("nomer").style.borderColor = "red";
      document.getElementById("nomer").style.borderWidth = "5px";
      document.getElementById("nonotice").style.color = "red";
      document.getElementById("validationNumber").innerHTML =
        "Sudah Ada Pada Database";
      // $('#validationNumber').val("Tidak Boleh Kosong");
    }

    if ($("#tanggaltrima").val() === "") {
      document.getElementById("tglnotice").style.color = "red";
      document.getElementById("tanggaltrima").style.borderWidth = "5px";
      document.getElementById("tanggaltrima").style.borderColor = "red";
      document.getElementById("validationTgl").innerHTML = "Tidak Boleh Kosong";
    } else {
      console.log("you are in safe zone");
      document.getElementById("tglnotice").style.color = "green";
      document.getElementById("tanggaltrima").style.borderWidth = "5px";
      document.getElementById("tanggaltrima").style.borderColor = "green";
      document.getElementById("validationTgl").innerHTML = " ";
    }

    console.log("this red zone");
  } else {
    console.log("your good boy or girl");
    document.getElementById("nomer").style.borderColor = "#ddd";
    document.getElementById("nomer").style.borderWidth = "0.5px";
    document.getElementById("nonotice").style.color = "grey";
    document.getElementById("validationNumber").innerHTML = " ";
    document.getElementById("noticeid").innerHTML =
      "&#9829;input data ke database berhasil";
    document.getElementById("noticeid").style.color = "green";

    document.getElementById("tglnotice").style.color = "grey";
    document.getElementById("tanggaltrima").style.borderWidth = "0.5px";
    document.getElementById("tanggaltrima").style.borderColor = "#ddd";
    document.getElementById("validationTgl").innerHTML = " ";
  }
});

//getNonInvitationSucces
