let images = document.getElementsByTagName('img'); //Get all image elements
chrome.runtime.sendMessage({ msg: 'image' }, function (response) {
    let file = JSON.stringify(response.data).slice(1, -1); // get the data from the background script
    for (i of images) { // loop through the images and change the src on each
        let url = chrome.extension.getURL(file);
        i.src = url;
    }
})
