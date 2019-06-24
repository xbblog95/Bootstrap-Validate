$.validater.type.default = {
    "onError":function (error, element) {
        console.log(element);
        alert(error);
    },
    "onReset" : function (element) {
        console.log(element);
        alert("reset")
    },
    "onSuccess" : function (element) {
        console.log(element);
        alert("success")
    },
    "onGetValue" : function (element) {
        return $(element).val();
    }
}


$.validater.validatefunction.required = function (value, options) {
    //如果设置的值是false,跳过检验，必填项直接通过
    if(!options)
    {
        return true;
    }
    //设置的是true，检验必填
    if(value)
    {
        return value.length != 0;
    }
    return false;
}


$.validater.validatefunction.email = function (value, options) {
    //如果设置的值是false,跳过检验，直接通过
    if(!options)
    {
        return true;
    }
    //设置的是true，检验邮件，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        var re = /\w+@\w+(\.\w+)+/;
        var regExp = new RegExp(re);
        return regExp.test(value);
    }
    return true;
}

$.validater.validatefunction.url = function (value, options) {
    //如果设置的值是false,跳过检验，直接通过
    if(!options)
    {
        return true;
    }
    //设置的是true，检验url，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        var re = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
        var regExp = new RegExp(re);
        return regExp.test(value);
    }
    return true;
}

$.validater.validatefunction.phone = function (value, options) {
    //如果设置的值是false,跳过检验，直接通过
    if(!options)
    {
        return true;
    }
    //设置的是true，检验手机号，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        var re = /^1\d{10}$/
        var regExp = new RegExp(re);
        return regExp.test(value);
    }
    return true;
}

$.validater.validatefunction.date = function (value, options) {
    //如果设置的值是false,跳过检验，直接通过
    if(!options)
    {
        return true;
    }
    //设置的是true，检验日期，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        var re =/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        var regExp = new RegExp(re);
        return regExp.test(value);
    }
    return true;
}

$.validater.validatefunction.dateTime = function (value, options) {
    //如果设置的值是false,跳过检验，直接通过
    if(!options)
    {
        return true;
    }
    //设置的是true，检验时间日期，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        var re =/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
        var regExp = new RegExp(re);
        return regExp.test(value);
    }
    return true;
}

$.validater.validatefunction.number  = function (value, options) {
    //如果设置的值是false,跳过检验，直接通过
    if(!options)
    {
        return true;
    }
    //设置的是true，检验是否数字，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        var re = /^[0-9]+.?[0-9]*$/;
        var regExp = new RegExp(re);
        return regExp.test(value);
    }
    return true;
}

$.validater.validatefunction.equalTo  = function (value, options) {
    //设置的是true，检验是否与指定项相等，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
       return value === $.validater.type[options.type].onGetValue($(options.element)[0]);
    }
    return true;
}

$.validater.validatefunction.notEqualTo  = function (value, options) {
    //设置的是true，检验是否与指定项相等，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        return value != $.validater.type[options.type].onGetValue($(options.element)[0]);
    }
    return true;
}

$.validater.validatefunction.max  = function (value, options) {
    //设置的是true，检验是否小于等于最大值，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        return value <= options;
    }
    return true;
}

$.validater.validatefunction.min  = function (value, options) {
    //设置的是true，检验是否大于等于最小值，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        return value >= options;
    }
    return true;
}

$.validater.validatefunction.maxlength  = function (value, options) {
    //设置的是true，检验长度是否小于设置值，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        return value.length <= options;
    }
    return true;
}

$.validater.validatefunction.minlength  = function (value, options) {
    //设置的是true，检验长度是否大于设置值，其中需要排除必填检验，那是必填检验项的事
    if(value != undefined && value != "")
    {
        return value.length >= options;
    }
    return true;
}





