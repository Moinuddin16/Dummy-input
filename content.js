const typaHandelar = new Map(
    [
        ['date', function(value) { value['value'] = "2020-07-29" }],
        ['color', function(value) { value['value'] = "#f70000" }],
        ['email', function(value) { value['value'] = "anik200019@gmail.com" }],
        ['datetime-local', function(value) { value['value'] = "2018-06-12T19:30" }],
        ['month', function(value) { value['value'] = "2018-05" }],
        ['number', function(value) { value['value'] = "20" }],
        ['password', function(value) { value['value'] = "123456" }],
        ['radio', function(value) { value['checked'] = "true" }],
        ['range', function(value) { value['value'] = "90" }],
        ['search', function(value) { value['value'] = "search" }],
        ['tel', function(value) { value['value'] = "123-456-7890" }],
        ['time', function(value) { value['value'] = "13:20" }],
        ['url', function(value) { value['value'] = "https://example.com" }],
        ['week', function(value) { value['value'] = "2017-W01" }],
        // ['checkbox', function(value){ porcessMultipleSelection(value)}],
        ['reset', function(value) { value['value'] = "Reset" }],
        ['textarea', function(value) { value['value'] = "textarea" }],
        ['text', function(value) {
            value['value'] = "text";
            processText(value);
        }]
    ]
);

function processText(value) {

    chrome.storage.local.get(['flagPlaceholder', 'flagName', 'flagClassName', 'flagInputId', 'flagTitle', 'flagLabel', 'flagArialLabel'], function(flag) {
        if (flag.flagPlaceholder == 'flagPlaceholder1') {
            var search = value["placeholder"];
            setValue(value, search);
        }
        if (flag.flagName == 'flagName1') {
            var search = value["name"];
            setValue(value, search);
        }
        if (flag.flagClassName == 'flagClassName1') {
            var search = value["className"];
            setValue(value, search);
        }
        if (flag.flagInputId == 'flagInputId1') {
            var search = value["id"];
            setValue(value, search);
        }
        if (flag.flagTitle == 'flagTitle1') {
            var search = value["title"];
            setValue(value, search);

        }
        if (flag.flagArialLabel == 'flagArialLabel1') {
            var search = value["ariaLabel"];
            setValue(value, search);

        }
        if (flag.flagLabel == 'flagLabel1') {
            var nextElementSibling = value["nextElementSibling"];
            var previousElementSibling = value["previousElementSibling"];
            setValue(value, nextElementSibling);
            setValue(value, previousElementSibling);
        }
    });

}

function setValue(value, search) {

    if (search != null) {
        if (/phone/i.test(search) || /mobile/i.test(search) || /tel/i.test(search) || /telephone/i.test(search) || /phn/i.test(search) || /mob/i.test(search)) {
            value["value"] = '01670913096';
        } else if (/username/i.test(search)) {
            value["value"] = 'moin_uddin';
        } else if (/name/i.test(search)) {
            value["value"] = 'Moin Uddin';
        } else if (/address/i.test(search)) {
            value["value"] = 'address';
        } else if (/email/i.test(search) || /yahoo/i.test(search) || /gmail/i.test(search) || /mail/i.test(search) || /hotmail/i.test(search)) {
            value["value"] = 'anik200019@gmail.com';
        } else if (/Zip/i.test(search)) {
            value["value"] = 'zip';
        } else if (/Postal/i.test(search)) {
            value["value"] = 'Postal';
        } else if (/House/i.test(search)) {
            value["value"] = 'house';
        } else if (/Street/i.test(search)) {
            value["value"] = 'house';
        } else if (/state/i.test(search)) {
            value["value"] = 'state';
        } else if (/city/i.test(search)) {
            value["value"] = 'city';
        } else if (/Country/i.test(search)) {
            value["value"] = 'country';
        } else if (/photo/i.test(search) || /image/i.test(search) || /photos/i.test(search) || /images/i.test(search) || /pic/i.test(search) || /pictures/i.test(search) || /picture/i.test(search) || /album/i.test(search) || /albums/i.test(search)) {
            value["value"] = '';
        } else if (/num/i.test(search) || /number/i.test(search) || /digit/i.test(search) || /numeric/i.test(search)) {
            value["value"] = '235635678';
        } else if (/float/i.test(search) || /floating/i.test(search) || /rate/i.test(search) || /rating/i.test(search)) {
            value["value"] = '20.23';
        } else if (/date/i.test(search) || /today/i.test(search) || /tomorrow/i.test(search) || /day/i.test(search)) {
            value["value"] = '2020-07-29';
        } else if (/year/i.test(search)) {
            value["value"] = '2020';
        } else if (/week/i.test(search)) {
            value["value"] = 'week 24';
        } else if (/month/i.test(search)) {
            value["value"] = 'january';
        } else if (/week/i.test(search) && /name/i.test(search)) {
            value["value"] = "sunday";
        } else if (/date/i.test(search) && /time/i.test(search)) {
            value["value"] = 'january';
        } else if (/time/i.test(search)) {
            value["value"] = "13:30";
        } else if (/description/i.test(search) || /details/i.test(search) || /note/i.test(search) || /describe/i.test(search) || /story/i.test(search)) {
            value["value"] = "My name is jone snow.I am asgard.I killed so many white walker";
        } else if (/password/i.test(search) || /confirm/i.test(search) || /pin/i.test(search) || (/confirm/i.test(search) && /password/i.test(search))) {
            value["value"] = "123456";
        } else if (/url/i.test(search) || /link/i.test(search) || /fb/i.test(search) || /facebook/i.test(search) || /github/i.test(search) || /instagram/i.test(search) || /linkedin/i.test(search) || /youtube/i.test(search) || (/social/i.test(search) && /media/i.test(search))) {
            value["value"] = "https://googles.com";
        } else if (/currency/i.test(search) || /dollar/i.test(search) || /money/i.test(search) || /cash/i.test(search) || /credit/i.test(search) || /discount/i.test(search) || /amount/i.test(search)) {
            value["value"] = "$20";
        }
    }

}

function porcessMultipleSelection(allSelection, type)

{


    let radioCollection = new Map()

    $.each(allSelection, function(index, val) {

        // console.log(val);

        // if (val['checked']) {
        //     val.prop("checked", false);
        // }
        if (val[type] != null || val[type] != "") {
            currnetNode = radioCollection.has(val[type]);
            if (currnetNode) {

                radioCollection.get(val[type]).push(val)
                var che2 = radioCollection.get(val[type]);

            } else {
                var nam = new Array();
                nam.push(val);
                radioCollection.set(val[type], nam);
            }
        }

    });


    for (let [key, val1] of radioCollection) {
        if (val1.length > 1) {
            var random = Math.floor(Math.random() * val1.length);
            for (i = 0; i < random; i++) {
                var random1 = Math.floor(Math.random() * val1.length);
                // var fill = val1[random1]['checked'];
                // console.log("1 " + fill);
                // if (val1[random1]['checked']) {
                //     console.log("hello");
                //     val1[random1]['checked'] = "false";
                // } else {
                val1[random1]['checked'] = "true";

                //    }

            }
        } else {
            // if (val1['checked']) {
            //     console.log("hello");
            //     val1['checked'] = "false";
            // } else {
            val1['checked'] = "true";

            //  }
        }


    }



    radioCollection.clear();

    // value['checked']="true";
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.name == 'body') {


        var allInputs = $(":input");
        $.each(allInputs, function(index, value) {
            var type = value["type"];

            if (type == "select-one") {
                var options = allInputs[index];
                $.each(options, function(oindex, ovalue) {
                    ovalue["selected"] = 'true';
                    if (oindex > 0)
                        return false;
                });
            } else if (type == "select-multiple") {
                var options = allInputs[index];
                // console.log(options);
                $.each(options, function(oindex, ovalue) {
                    if (oindex != 0)
                        ovalue["selected"] = 'true';

                    if (oindex > 1)
                        return false;
                });
            } else {
                var he = typaHandelar.get(type);
                if (he !== undefined) {
                    var newValue = he(value);
                }
            }

        });

        chrome.storage.local.get(['flagPlaceholder', 'flagName', 'flagClassName', 'flagInputId', 'flagTitle', 'flagLabel', 'flagArialLabel'], function(flag) {

            //fetch all radip and checkbox
            var allRadio = $(":radio");
            var allCheckbox = $(":checkbox");

            //unchecked all off them 
            allRadio.prop("checked", false);
            allCheckbox.prop("checked", false);

            if (flag.flagName == 'flagName1') {

                if (allCheckbox != null) {
                    porcessMultipleSelection(allCheckbox, "name");
                }

                if (allRadio != null) {
                    porcessMultipleSelection(allRadio, "name");
                }
            }
            if (flag.flagClassName == 'flagClassName1') {

                if (allCheckbox != null) {
                    porcessMultipleSelection(allCheckbox, "className");
                }

                if (allRadio != null) {
                    porcessMultipleSelection(allRadio, "className");
                }
            }
            if (flag.flagInputId == 'flagInputId1') {

                if (allCheckbox != null) {
                    porcessMultipleSelection(allCheckbox, "id");
                }

                if (allRadio != null) {
                    porcessMultipleSelection(allRadio, "id");
                }
            }
            if (flag.flagArialLabel == 'flagArialLabel1') {
                if (allCheckbox != null) {
                    porcessMultipleSelection(allCheckbox, "id");
                }

                if (allRadio != null) {
                    porcessMultipleSelection(allRadio, "id");
                }

            }

            // if (flag.flagLabel == 1) {
            //     var nextElementSibling = value["nextElementSibling"];
            //     var previousElementSibling = value["previousElementSibling"];

            //     var allCheckbox = $(":checkbox");
            //     if (allCheckbox != null) {
            //         porcessMultipleSelection(allCheckbox);
            //     }

            //     //radio
            //     var allRadio = $(":radio");
            //     if (allRadio != null) {
            //         porcessMultipleSelection(allRadio);
            //     }
            // }
            //checkbox


        });


        //cheditor new version
        var ckeditor = $(".cke_wysiwyg_frame").contents().find("body");
        var ckeditorContent = ckeditor.find("p");
        ckeditorContent.html("");
        ckeditorContent.append("<p>Hello ckeditor</p>");

        //cheditor old version
        var ckeditorOld = $(".note-editable");
        ckeditorOld.html("");
        ckeditorOld.append("<p>Hello ckeditor</p>");

        //cheditor tiny editor
        var tiny = $("#mce_0_ifr").contents().find("body");
        var tinyContent = tiny.find("p");
        tinyContent.html("");
        tinyContent.append("<p>Hello tiny</p>");

    }


});