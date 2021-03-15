// Every time a web page opens, our content script will run
// & it will send a message to the background script, in order to recive the image url 

chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
    if (message.msg === "image") {  // if the message we sent is true - send the data to the content script
        console.log("background is running")
        senderResponse({
            data: '/images/chihuahua.jpg'
        });
    }
});




