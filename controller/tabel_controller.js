
module.exports = function(ipcMain){
    ipcMain.on('RefreshOn',function(event,data){
     event.sender.send('AlreadyRefresh')
    })
}

