 chrome.storage.sync.get('key', function (obj) {
        console.log('myKey', obj.key.val);
    document.getElementById("MyEdit").innerHTML =  obj.key.val
});
