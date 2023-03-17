//Send Call to Main Process
window.bridge.do('<Channel Name>', 'datatosend')


//Handle call from Main Process
window.bridge.handle('<Channel Name>' , FunctionToHandleCall)

function FunctionToHandleCall(event, ...arg) {
    //Arg to retrive from Main Process
    console.log(arg)
}

//Transaction Call to Main Process and Process Data from Main Renderer
async function functionName() {

    //Send Call to Main Process and wait for returned Data
    const requiredData = await window.bridge.transact('<Channel Name>' , ...arg)
    //Process requiredData from Main Process
}