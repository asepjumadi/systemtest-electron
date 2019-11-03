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
      makeAjaxRequest:function() {
        $.ajax({
            url: 'search_execute.php',
            type: 'get',
            datatype: 'html',
            data: {search: $('#nomer_id').val()},
            success: function(response) {
                alert("Success!");
            }, error : function() {
                alert("Something went wrong!");
           }
        });
    },
      openSearchByNumber:function(){
        var params = {
          nomer:$('#nomer_id').val(),
        }
        $('#search-by-number').click(function(){
          makeAjaxRequest();
        });

        $('#search-no').submit(function(e){
                e.preventDefault();
                makeAjaxRequest();
        });
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