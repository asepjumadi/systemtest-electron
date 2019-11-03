const setupEvents = require('./installers/setupEvents')
if(setupEvents.handleSquirrelEvent()){
    return;
}
const electron =require('electron')
const { webContents }=require('electron')
const {BrowserWindow} =require('electron')
const app =electron.app
const {ipcMain}= require('electron')
var path =require('path')
// require('./dialog/')

const PHPServer = require('php-server-manager');

const server = new PHPServer({
  
    port: 5555,
    directory: __dirname,
    directives: {
        display_errors: 1,
        expose_php: 1
    }
});

let mainWindow
let secondWindow

function createWindow() {
    
    mainWindow = new BrowserWindow({titleBarStyle:'hidden',
    width:1281,
    height:800,
    minWidth:1281,
    minHeight:800,
    backgroundColor:'#312450',
    show:false,
    icon:path.join(__dirname,'assets/icons/png/64x64.png'),
    webPreferences:{
        nodeIntegration:true
    }
})

mainWindow.webContents.openDevTools()
mainWindow.loadURL(`file://${__dirname}/index.html`||'http://'+server.host+':'+server.port+'/')

mainWindow.once('ready-to-show',()=>{
    mainWindow.show();
    
})
mainWindow.on('closed',function(){
    mainWindow= null
})
secondWindow = new BrowserWindow({frame: false,
    width: 600,
    height: 400,
    minWidth: 600,
    minHeight: 400,
    backgroundColor: '#312450',
    show: false,
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    parent: mainWindow,
    webPreferences: {
      nodeIntegration: true
    }
  })

  secondWindow.loadURL(`file://${__dirname}/windows/modal.html`|| 'http://'+server.host+':'+server.port+'/')

  require('./menu/mainmenu')

}

ipcMain.on('open-search-window',(event,arg)=>{
    secondWindow.show()
})

ipcMain.on('close-search-window',(event,arg)=>{
    console.log('hid3 only')
    secondWindow=null;
    // event.sender.send('already-close',(event,data)=>{
    //     secondWindow=null;
    // })
    
    
})

app.on('ready',createWindow)
app.on('window-all-closed',function(){
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
app.on('activate',function(){
    if(mainWindow === null){
        createWindow()
    }
})


var ipcInput = require('./controller/input_controller')(ipcMain)
var ipcTabel =require('./controller/tabel_controller')(ipcMain)
var ipcModal =require('./controller/modal_controller')(ipcMain,createWindow)