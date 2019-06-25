# jQuery-Validate
a simple validater base on jQuery, with bootStrap css.

## 快速开始
jquery-validate 是一款高度定制化检验插件，与一般对于表单的检验的插件不同，jquery-validate允许你校验页面上任意元素，
以及该元素下的所有子元素。替换与删除元素的检验格式，轻松实现动态检验的功能。强大的扩展功能使jquery-validate不在
局限一般的检验框架很难检验复杂元素的弱点。如果你的前端功底足够深厚，你可以使用内部的API自定义元素检验失败以及成功
后的样式。

如果需要使用jquery-validate，你需要保证你的jQuery版本高于1.9.1，浏览器必须支持ES6,否则插件的加载可能出现某些问题。

### 引入js
```html
     <!--  Jquery文件 -->
     <script src="https://cdn.bootcss.com/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
    <!--    最新的jquery-validate检验插件-->
    <script src="src/jquery-validate.js"  type="text/javascript"></script>
    <!--    检验插件配置js文件 -->
    <script src="src/validate-config.js" type="text/javascript"></script>
```

### 元素初始化
```html
    <input type="password" class="form-control validater" id="oldPassword" name="oldPassword"  placeholder="" value="" 
                                                  data-validate-rule='{
                                                      "required":"true"
                                                  }' data-validate-message='{
                                                      "required":"必填项"
                                                  }' data-validate-type="bootStrap4Input"  required/>
```
即可完成元素的初始化，无需编写js文件。

#### options

| 选项 | 名词解释  |  备注格式 |
| -----| ----- | ----- |
|data-validate-rule|检验规则| json字符串，其中key是插件内置定义的检验规则名称，名称可以参考validate-config.js中检验规则项，value为传入检验中的参数|
|data-validate-message|检验失败时的错误提示|json字符串，中key是插件内置定义的检验规则名称，名称可以参考validate-config.js中检验规则项，value为该项检验失败时的提示|
|data-validate-type|元素类型|参考validate-config.js中的元素类型项，表示该元素使用检验配置中相应元素类型的配置|

#### 更新检验规则
调用元素上的updateRule方法，传入相关参数
```javascript
     var obj = {
         rules : {
             passwordMustBe : function (value) {
                 if(value.indexOf(",") < 0)
                 {
                     return false;
                 }
                 else
                 {
                     return true;
                 }
             }
         },
         errorMessages : {
             passwordMustBe :"必须存在“,”号"
         }
     };
     $("#newPassword").jqueryValidate("updateRule", obj);
```
如果更新前找不到相应的检验规则，则会自动添加传入的检验规则。

#### 删除检验规则
```javascript
     $("#newPassword").jqueryValidate("deleteRule", "passwordMustBe");
```

### 高级用法
#### 扩展自定义元素类型
```javascript
     // $.validater.type.插件名 
     $.validater.type.bootStrap4Input = {
         //jquery-validate 初始化该元素时调用的方法
         "onInit": function (element) {
             $(element).on("keyup", function () {
                 $(element).jqueryValidate("validate");
             })
         },
         //当该元素检验失败时调用方法。
         "onError":function (error, element) {
             $(element).tooltip("dispose");
             $(element).tooltip({
                 title : error,
                 placement : 'bottom'
             })
             $(element).addClass("is-invalid");
         },
         //当重置元素时调用的方法
         "onReset" : function (element) {
             $(element).tooltip("dispose");
             $(element).removeClass("is-invalid");
             $(element).removeClass("error");
         },
         //当该元素检验成功时调用方法。
         "onSuccess" : function (element) {
             $(element).tooltip("dispose");
             $(element).removeClass("is-invalid");
             $(element).removeClass("error");
         },
         //指导插件如何获取该元素上的值
         "onGetValue" : function (element) {
             return $(element).val();
         }
     }
```
浏览器执行完上述代码后元素在初始化时的data-validate-type写上你自己命名的插件名，即可套用该元素的配置。

#### 扩展自定义检验规则
```javascript
     // $.validater.validatefunction.检验规则名称   value为从元素中获得的值，options为页面初始化时data-validate-rule的value 
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
```


