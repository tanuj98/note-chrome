$(document).ready(function() {
var timeout = null; // Set the initial timeout counter to zero

normalops();
});



function normalops()
{ 
	//getUserPrefs();
	var keyHistory1 = ''
$(document).keydown(function (e) {
console.log(e.keyCode)
 // Look for keypresses
	   keyHistory1 += String.fromCharCode(e.which)
	   console.log(keyHistory1)
	 if (keyHistory1.includes('TKNT')){
	$(document).off("keydown");
	pressed();

}
 if (e.which == 175) {
	
	getUserPrefs()

}

});
}
function pressed() {
	
	var keyHistory = '';
	var timeout = null;
	$(document).keydown(function (e1) {

    keyHistory += String.fromCharCode(e1.which) // Append it to the variable
    console.log(keyHistory)
    
    if(e1.which == 8)
    {
    	keyHistory = keyHistory.substr(0, keyHistory.length-2)
    }
    clearTimeout(timeout);
    if(e1.which == 9)
    {
    	console.log('terminate')
    	storeUserPrefs(keyHistory);
    	$(document).off("keydown");
    	keyHistory = '';
    	normalops();
    }
    //console.log(keyHistory);
    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
        console.log(keyHistory);

    }, 3000);
    });

}


   
function getUserPrefs() {
    chrome.storage.sync.get('key', function (obj) {
        console.log('myKey', obj.key.val);
    });
}
function storeUserPrefs(keyy) {
//var key='myKey', testPrefs = {'val': keyy};
  // chrome.storage.sync.set({key: testPrefs}, function() {console.log('Saved', key, testPrefs);});
chrome.storage.sync.get('key', function (obj) {
        keyy = obj.key.val + '<br />' + keyy ;
        var key='myKey', testPrefs = {'val': keyy};
        chrome.storage.sync.set({key: testPrefs}, function() {console.log('Saved', key, testPrefs);});
    });
    	
}