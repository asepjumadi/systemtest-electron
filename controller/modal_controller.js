const electron =require('electron')
const app =electron.app
const {BrowserWindow} =require('electron')
module.exports = function(ipcMain){


    // ipcMain=ipcMain;
    // createWindow=createWindow;
    // let secondWindow
    // function ipcModal(createWindow){
    //     secondWindow =new BrowserWindow({frame:false,
    //         width:800,
    //         height:600,
    //         minHeight:600,
    //         minWidth:800,
    //         backgroundColor:'#312450',
    //         show:false,
    //         // icon:path.join(__dirname,'assets/icons/png/64x64.png'),
    //         parent:createWindow.mainWindow,
    //             webPreferences:{
    //                 nodeIntegration:true
    //             }
    //         })
    //         secondWindow.loadURL(`file://${__dirname}/windows/modal.html`)
    //         require('../menu/mainmenu')
    // }
  
    //     ipcMain.on('open-search-window',(event,arg)=>{
    //         secondWindow.show()
    //     })
        
    //     ipcMain.on('close-search-window',(event,arg)=>{
    //         secondWindow.hide()
    //     })
    //     app.on('ready',ipcModal)
    //     app.on('window-all-closed',function(){
    //         if(process.platform !== 'darwin'){
    //             app.quit()
    //         }
    //     })
    //     console.log(createWindow);
    //     console.log(createWindow)
    //     app.on('activate',function(){
    //         if(createWindow.mainWindow === null){
    //             createWindow()
    //         }
    //     })
}