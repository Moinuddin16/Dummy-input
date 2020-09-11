const typaHandelar = new Map(
    [
        // ['date', function(value) { value['value'] = "2020-07-29" }],
        ['date', function(value) { randomData('date', value) }],
        ['color', function(value) { randomData('color', value) }],
        ['email', function(value) { randomData('email', value) }],
        ['datetime-local', function(value) { randomData('date-time', value) }],
        ['month', function(value) { randomData('month-num', value) }],
        ['number', function(value) { randomData('num', value) }],
        ['password', function(value) { value['value'] = "123456" }],
        // ['radio', function(value) { value['checked'] = "true" }],
        ['range', function(value) { randomData('range', value) }],
        ['search', function(value) { randomData('search', value) }],
        ['tel', function(value) { randomData('phone', value) }],
        ['time', function(value) { randomData('time', value) }],
        ['url', function(value) { randomData('url', value) }],
        ['week', function(value) { randomData('week', value) }],
        // ['checkbox', function(value) { value['checked'] = "true" }],
        ['reset', function(value) { value['value'] = "Reset" }],
        ['textarea', function(value) { randomData('textarea', value) }],
        ['text', function(value) {
            randomData('name', value);
            processText(value);
        }]
    ]
);

const storeData = new Map(
    [
        ['phone', ['1-204-690-4414', '(715) 782-6686', '925-612-0660', '517-493-9126', '383-536-3015']],
        ['username', ['karen_upton', 'tasha_bogan', 'dorothy_cassin', 'annie_haag', 'shirley_casper']],
        ['name', ['Jacob Baumbach', 'Miss Irma Brakus', 'Isaac Schamberger', 'Janis Kling', 'Mae Luettgen']],
        ['address', ['Keven Mission,Johnstontown,Senegal', 'Dolly Points,Lynchchester,Borders', 'Conroy Lake,Estellemouth,Buckinghamshire', 'Koss Tunnel,Wehnermouth,Berkshire', 'Dare Vista,Jacobsborough,Cambridgeshire']],
        ['email', ['Trevion.Reichert39@gmail.com', 'Jacinto30@gmail.com', 'Mattie35@yahoo.com', 'Heath90@yahoo.com', 'Hunter_Kuphal@hotmail.com']],
        ['zip', ['86967', '65578-2698', '03103-2341', '03787', '13458']],
        ['postal', ['1360', '1203', '1206', '1213', '1219']],
        ['house', ['220 Gleichner Mountains', '3083 Baumbach Dale', '27033 Brenna Burgs', '82711 Diana Skyway', '5813 Aufderhar Route']],
        ['street', ['Dare Vista', 'Devante Drive', 'Lavon Courts', 'Phoebe Valley', 'Stracke Court']],
        ['state', ['Iowa', 'New Hampshire', 'Massachusetts', 'Wyoming', 'Rhode Island']],
        ['city', ['Jacobsborough', 'Schroederport', 'South Darienstad', 'Edgardoview', 'Reneview']],
        ['country', ['Cambridgeshire', 'Bedfordshire', 'Berkshire', 'Bedfordshire', 'Borders']],
        ['num', ['918219886', '328256604', '700984895', '536235420', '220289931']],
        ['float', ['236.51', '594.1', '613.9', '816.95', '367.58']],
        ['date', ['2019-12-28', '2020-05-21', '2019-10-12', '2020-02-25', '2020-07-05']],
        ['year', ['2019', '2020', '2004', '2007', '2003']],
        ['week', ['2017-W01', '2018-W33', '2012-W02', '2020-W05', '2019-W13']],
        ['month', ['July', 'May', 'September', 'December', 'August']],
        ['date-time', ['2018-06-12T19:30', '2020-07-11T18:30', '2010-05-09T08:00', '2020-06-12T19:30', '2004-03-02T10:20']],
        ['week-name', ['Tuesday', 'Monday', 'Thursday', 'Sunday', 'Saturday']],
        ['textarea', ['deposit transaction at Treutel, Shields and Rowe using card ending with ***6192 for MNT 551 in account ***11090006',
            'payment transaction at Hessel, Stamm and Cronin using card ending with ***2212 for BHD 633.65 in account ***17754215',
            'payment transaction at Douglas Group using card ending with ***8398 for LRD 982.98 in account ***10811985',
            'payment transaction at Douglas Group using card ending with ***8398 for LRD 982.98 in account ***10811985',
            'invoice transaction at Weimann, Yost and Kassulke using card ending with ***1396 for GEL 336.6 in account ***69936496'
        ]],
        ['status', ['yes', 'No', 'Pandding', 'Due', 'Paied']],
        ['url', ['http://kaycee.biz', 'http://johnny.info', 'https://patrick.org', 'https://avery.org', 'https://orin.org']],
        ['currency', ['¥20', 'Rs500', '₺1000', '£500', '$50']],
        ['time', ['13:30', '23:30', '11:10', '09:30', '12:50']],
        ['color', ['#f70000', '#FF00FF', '#A52A2A', '#808000', '#C0C0C0']],
        ['search', ['Diamond Thompson', 'Roel McKenzie', 'Hailie Reynolds', 'Murphy Hammes', 'Jace Friesen']],
        ['range', ['10', '20', '70', '90', '50']],
        ['month-num', ['2018-05', '2020-12', '2003-01', '2010-03', '2012-05']],
        ['title', ['Chief Paradigm Strategist', 'Product Integration Coordinator', 'Lead Division Manager', 'Legacy Division Executive', 'Investor Division Consultant']],
        // ['', ['', '', '', '', '']],
    ]);

function randomData(type, value) {
    var setRandomValue = storeData.get(type);
    if (setRandomValue !== undefined) {
        var indexVal = Math.floor(Math.random() * 5);
        value['value'] = setRandomValue[indexVal];
    }
}

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
            randomData('phone', value);
        } else if (/username/i.test(search)) {
            randomData('username', value);
        } else if (/title/i.test(search)) {
            randomData('title', value);
        } else if (/name/i.test(search)) {
            randomData('name', value);
        } else if (/address/i.test(search)) {
            randomData('address', value);
        } else if (/email/i.test(search) || /yahoo/i.test(search) || /gmail/i.test(search) || /mail/i.test(search) || /hotmail/i.test(search)) {
            randomData('email', value);
        } else if (/Zip/i.test(search)) {
            randomData('zip', value);
        } else if (/Postal/i.test(search)) {
            randomData('postal', value);
        } else if (/House/i.test(search)) {
            randomData('house', value);
        } else if (/Street/i.test(search)) {
            randomData('street', value);
        } else if (/state/i.test(search)) {
            randomData('state', value);
        } else if (/city/i.test(search)) {
            randomData('city', value);
        } else if (/Country/i.test(search)) {
            randomData('country', value);
        } else if (/photo/i.test(search) || /image/i.test(search) || /photos/i.test(search) || /images/i.test(search) || /pic/i.test(search) || /pictures/i.test(search) || /picture/i.test(search) || /album/i.test(search) || /albums/i.test(search)) {
            value["value"] = '';
        } else if (/num/i.test(search) || /number/i.test(search) || /digit/i.test(search) || /numeric/i.test(search)) {
            randomData('num', value);
        } else if (/float/i.test(search) || /floating/i.test(search) || /rate/i.test(search) || /rating/i.test(search)) {
            randomData('float', value);
        } else if (/date/i.test(search) || /today/i.test(search) || /tomorrow/i.test(search) || /day/i.test(search)) {
            randomData('date', value);
        } else if (/year/i.test(search)) {
            randomData('year', value);
        } else if (/week/i.test(search)) {
            randomData('week', value);
        } else if (/month/i.test(search)) {
            randomData('month', value);
        } else if (/status/i.test(search)) {
            randomData('status', value);
        } else if (/week/i.test(search) && /name/i.test(search)) {
            randomData('week-name', value);
        } else if (/date/i.test(search) && /time/i.test(search)) {
            randomData('date-time', value);
        } else if (/time/i.test(search)) {
            randomData('time', value);
        } else if (/description/i.test(search) || /details/i.test(search) || /note/i.test(search) || /describe/i.test(search) || /story/i.test(search)) {
            randomData('textarea', value);
        } else if (/password/i.test(search) || /confirm/i.test(search) || /pin/i.test(search) || (/confirm/i.test(search) && /password/i.test(search))) {
            value["value"] = "123456";
        } else if (/url/i.test(search) || /link/i.test(search) || /fb/i.test(search) || /facebook/i.test(search) || /github/i.test(search) || /instagram/i.test(search) || /linkedin/i.test(search) || /youtube/i.test(search) || (/social/i.test(search) && /media/i.test(search))) {
            randomData('url', value);
        } else if (/price/i.test(search) || /currency/i.test(search) || /dollar/i.test(search) || /money/i.test(search) || /cash/i.test(search) || /credit/i.test(search) || /discount/i.test(search) || /amount/i.test(search)) {
            randomData('currency', value);
        }
    }

}

function porcessMultipleSelection(allSelection, type) {

    // console.log(allSelection);

    let radioCollection = new Map()

    $.each(allSelection, function(index, val) {
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
                val1[random1]['checked'] = "true";
            }
        } else {
            val1['checked'] = "true";
        }


    }



    radioCollection.clear();

    // value['checked']="true";
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.name == 'body') {

        var allOption = $("option").prop('selected', 'false');
        allOption.prop("selected", false);
        //console.log(sele);

        var allInputs = $(":input");
        $.each(allInputs, function(index, value) {
            var type = value["type"];

            if (type == "select-one") {
                var options = allInputs[index];
                var indexVal = Math.floor(Math.random() * options.length);
                options[indexVal]['selected'] = "ture";
            } else if (type == "select-multiple") {
                var options = allInputs[index];
                var random = Math.floor(Math.random() * options.length);
                for (i = 0; i < random; i++) {
                    var random1 = Math.floor(Math.random() * options.length);
                    options[random1]['selected'] = "ture";
                }
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

        function randomEditorData(type) {
            var setRandomValue = storeData.get(type);
            if (setRandomValue !== undefined) {
                var indexVal = Math.floor(Math.random() * 5);
                return setRandomValue[indexVal];
            }
        }

        //cheditor new version
        var ckeditor = $(".cke_wysiwyg_frame").contents().find("body");
        var ckeditorContent = ckeditor.find("p");
        ckeditorContent.html("");
        var ckeditorData = randomEditorData('textarea');
        ckeditorContent.append("<p>" + ckeditorData + "</p>");

        //cheditor old version
        var ckeditorOld = $(".note-editable");
        ckeditorOld.html("");
        var ckeditoroldData = randomEditorData('textarea');
        ckeditorOld.append("<p>" + ckeditoroldData + "</p>");

        //cheditor tiny editor
        var tiny = $("#mce_0_ifr").contents().find("body");
        var tinyContent = tiny.find("p");
        tinyContent.html("");
        var tinyContentData = randomEditorData('textarea');
        tinyContent.append("<p>" + tinyContentData + "</p>");

    }


});