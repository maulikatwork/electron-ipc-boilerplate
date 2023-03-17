const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')


//Main Render Window Instance
let win

//Create Window when App is ready
app.whenReady().then( () => {

    //Initialize window
    win = new BrowserWindow({
        title : 'Electron Boilerplate',
        height: 500,
        width: 800,
        resizable: false,
        autoHideMenuBar: true,
        webPreferences : {
            preload: path.join(__dirname, 'preload.js'),
        },
        show: false
    })

    //Load HTML File
    win.loadFile('./src/index.html')


    //Show Window when app is loaded
    win.once('ready-to-show', () => {
        win.show()
    })

    //Open Dev tools
    win.webContents.openDevTools()

    //Subscribe to all the Events
    subscribeAllEvents()

    }
)

function subscribeAllEvents() {

    //Setup IPC event Subscriptions here

    //Sample Subscription of Event from Renderer
    ipcMain.on('<Channel Name>' , (event, data) => {
        //Process data from Invoke Call. 
    })

    //Send Call from Main Renderer
    win.webContents.send('<Channel Name>' , ...args)

    //Handle Transaction call from Renderer
    ipcMain.handle( '<Channel Name>', async ( event, ...arg ) => {
     
        const  dataToReturn  = await DoSomething(arg)
        return dataToReturn
    } )
}