chrome.storage.local.get(['flagPlaceholder', 'flagName', 'flagClassName', 'flagInputId', 'flagTitle', 'flagLabel', 'flagArialLabel'], function(flag) {
    console.log("InputId = " + flag.flagInputId);
    console.log("ClassName = " + flag.flagClassName);
    console.log("Name = " + flag.flagName);
    console.log("placeholder = " + flag.flagPlaceholder);
    console.log("ArialLabel = " + flag.flagArialLabel);
    console.log("Label = " + flag.flagLabel);
    console.log("Title = " + flag.flagTitle);

    if (flag.flagPlaceholder == 'flagPlaceholder1') {
        $('#place').prop('checked', true);
    } else {
        $('#place').prop('checked', false);
    }
    if (flag.flagName == 'flagName1') {
        $('#name').prop('checked', true);
    } else {
        $('#name').prop('checked', false);
    }
    if (flag.flagClassName == 'flagClassName1') {
        // console.log(flag.flagClassName);
        $('#class').prop('checked', true);
    } else {
        $('#class').prop('checked', false);
    }
    if (flag.flagInputId == 'flagInputId1') {
        $('#id').prop('checked', true);
    } else {
        $('#id').prop('checked', false);
    }
    if (flag.flagTitle == 'flagTitle1') {
        $('#title').prop('checked', true);
    } else {
        $('#title').prop('checked', false);
    }
    if (flag.flagLabel == 'flagLabel1') {
        $('#label').prop('checked', true);
    } else {
        $('#label').prop('checked', false);
    }
    if (flag.flagArialLabel == 'flagArialLabel1') {
        $('#airalabel').prop('checked', true);
    } else {
        $('#airalabel').prop('checked', false);
    }


});

$(function() {

    $('.save-settings').click(function() {
        var inputClass = $('#class').prop('checked');
        var inputid = $('#id').prop('checked');
        var inputName = $('#name').prop('checked');
        var inputPlaceholder = $('#place').prop('checked');
        var inputAirllabel = $('#airalabel').prop('checked');
        var inputLabel = $('#label').prop('checked');
        var inputTitle = $('#title').prop('checked');

        console.log(inputid);
        console.log(inputClass);
        console.log(inputName);
        console.log(inputPlaceholder);
        console.log(inputAirllabel);
        console.log(inputLabel);
        console.log(inputTitle);


        if (inputClass) {
            chrome.storage.local.set({ 'flagClassName': 'flagClassName1' });
        } else {
            chrome.storage.local.set({ 'flagClassName': 'flagClassName0' });
        }
        if (inputid) {
            chrome.storage.local.set({ 'flagInputId': 'flagInputId1' });
        } else {
            chrome.storage.local.set({ 'flagInputId': 'flagInputId0' });
        }
        if (inputName) {
            chrome.storage.local.set({ 'flagName': 'flagName1' });
        } else {
            chrome.storage.local.set({ 'flagName': 'flagName0' });
        }
        if (inputAirllabel) {
            chrome.storage.local.set({ 'flagArialLabel': 'flagArialLabel1' });
        } else {
            chrome.storage.local.set({ 'flagArialLabel': 'flagArialLabel0' });
        }
        if (inputPlaceholder) {
            chrome.storage.local.set({ 'flagPlaceholder': 'flagPlaceholder1' });
        } else {
            chrome.storage.local.set({ 'flagPlaceholder': 'flagPlaceholder0' });
        }
        if (inputLabel) {
            chrome.storage.local.set({ 'flagLabel': 'flagLabel1' });
        } else {
            chrome.storage.local.set({ 'flagLabel': 'flagLabel0' });
        }
        if (inputTitle) {
            chrome.storage.local.set({ 'flagTitle': 'flagTitle1' });
        } else {
            chrome.storage.local.set({ 'flagTitle': 'flagTitle0' });
        }
        // if (inputClass) {
        //     chrome.storage.local.set({ 'flagClassName': 'flagClassName0' });
        // } else {
        //     chrome.storage.local.set({ 'flagClassName': 'flagClassName1' });
        // }
        // if (inputid) {
        //     chrome.storage.local.set({ 'flagInputId': 1 });
        // } else {
        //     chrome.storage.local.set({ 'flagInputId': 0 });
        // }
        // if (inputName) {
        //     chrome.storage.local.set({ 'flagName': 1 });
        // } else {
        //     chrome.storage.local.set({ 'flagName': 0 });
        // }
        // if (inputAirllabel) {
        //     chrome.storage.local.set({ 'flagArialLabel': 1 });
        // } else {
        //     chrome.storage.local.set({ 'flagArialLabel': 0 });
        // }
        // if (inputPlaceholder) {
        //     chrome.storage.local.set({ 'flagPlaceholder': 1 });
        // } else {
        //     chrome.storage.local.set({ 'flagPlaceholder': 0 });
        // }
        // if (inputLabel) {
        //     chrome.storage.local.set({ 'flagLabel': 1 });
        // } else {
        //     chrome.storage.local.set({ 'flagLabel': 0 });
        // }
        // if (inputTitle) {
        //     chrome.storage.local.set({ 'flagTitle': 1 });
        // } else {
        //     chrome.storage.local.set({ 'flagTitle': 0 });
        // }

    });
});