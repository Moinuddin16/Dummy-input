chrome.browserAction.onClicked.addListener(function(clickData){
   
        chrome.tabs.query({active: true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,{name: "body"});
        });
   
});
var menuItem = {
    "id" : "fake_filler",
    "title" : "Fake Filler",
    "contexts" : ["all"]
};
chrome.contextMenus.create(menuItem);

    chrome.contextMenus.onClicked.addListener(function(clickData){
        if(clickData.menuItemId == "fake_filler")
        {
            chrome.tabs.query({active: true,currentWindow:true},function(tabs){
                chrome.tabs.sendMessage(tabs[0].id,{name: "body"});
        });
    }
    
});