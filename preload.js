const {ipcRenderer, contextBridge} = require('electron')


//Context Bridge

contextBridge.exposeInMainWorld(
    //Access Exposed functions using windows.bridge.<function name>
    'bridge' ,
    {
        /**
        * Send Event to Main Process.
        *
        * @param {string} channel Channel Name to Invoke.
        * @param {args} [args] N no of Arguments. 
        */ 
        send : (channel, ...args ) => ipcRenderer.send(channel, ...args ),

        /**
        * Handle Events fired by Main Process.
        *
        * @param {string} channel Channel Name to subscribe.
        * @param {function} callback Function to execute on call Functions returns event and arguments to process upon call.
        */
        handle : (channel, callback) => ipcRenderer.on(channel,callback),

        /**
        * Transact from Renderer to Main. Send a Request to Main Process from Renderer and recieve data from Main Process
        *
        * @param {string} channel Channel Name to Invoke.
        * @param {args} [args] N no of Arguments.
        * Transact Returns the value it recievs from Main Process
        */
        transact: ( channel, ...args ) => { return ipcRenderer.invoke(channel , ...args)},
    }
)