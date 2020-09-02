chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.name == 'body')
    {
        console.log(request.name);
        var allInputs = $(":input");
        console.log(allInputs);
        $.each(allInputs,function(index,value) {
            var type = allInputs[index]["type"];
            if(type == "color")
            {
                allInputs[index]["value"] = '#f70000';
            }
            else if(type == "date")
            {
                allInputs[index]["value"] = "2020-07-29";
            }
            else if(type == "datetime-local")
            {
                allInputs[index]["value"] = "2018-06-12T19:30";
            }
            else if(type == "email")
            {
                allInputs[index]["value"] = 'anik200019@gmail.com';
            }
            else if(type == "month")
            {
                allInputs[index]["value"] = "2018-05";
            }
            else if(type == "number")
            {
                allInputs[index]["value"] = '20';
            }
            else if(type == "password")
            {
                allInputs[index]["value"] = 'anik200019@gmail.com';
            }
            else if(type == "radio")
            {
                allInputs[index]["checked"] = 'true';
            }
            else if(type == "range")
            {
                allInputs[index]["value"] = "90";
            }
            else if(type == "search")
            {
                allInputs[index]["value"] = 'Search';
            }
            else if(type == "tel")
            {
                allInputs[index]["value"] = "123-456-7890";
            }
            else if(type == "text")
            {
                var placeHolder = allInputs[index]["placeholder"];
                if(/phone/i.test(placeHolder)){
                    allInputs[index]["value"] = '01670913096';    
                }
                else if(/name/i.test(placeHolder))
                {
                    allInputs[index]["value"] = 'Moin Uddin';    
                }
                else if(/email/i.test(placeHolder))
                {
                    allInputs[index]["value"] = 'anik200019@gmail.com';    
                }
                else
                {
                    allInputs[index]["value"] = 'Text';
                }
                
            }
            else if(type == "time")
            {
                allInputs[index]["value"] = "13:30";
            }
            else if(type == "url")
            {
                allInputs[index]["value"] = 'https://example.com';
            }
            else if(type == "week")
            {
                allInputs[index]["value"] = '2017-W01';
            }
            else if(type == "checkbox")
            {
                allInputs[index]["checked"] = 'true';
            }
            else if(type == "reset")
            {
                allInputs[index]["value"] = 'Reset';
            }
            else if(type == "textarea")
            {
                // var texarea = allInputs[index].next().find('textarea').eq(0);
                var texarea = $('textarea').next().find('textarea');
                console.log(texarea);
                allInputs[index]["value"] = 'textarea';
            }
            else if(type == "select-one")
            {
                var options = allInputs[index];
                $.each(options,function(oindex,ovalue) {  
                    ovalue["selected"] = 'true';
                    if(oindex > 0)
                     return false;
                });
            }
            else if(type == "select-multiple")
            {
                var options = allInputs[index];
                // console.log(options);
                $.each(options,function(oindex,ovalue) {  
                    if(oindex!=0)
                    ovalue["selected"] = 'true';
                    
                    if(oindex > 1)
                     return false;
                });
            }
        });
       // $("body").css("background-color", "yellow");
    }
});