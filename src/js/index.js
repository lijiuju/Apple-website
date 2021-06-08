window.addEventListener('load', function() { //load 等页面内容全部加载完毕 可以将js代码放置任意位置
    /* 导航栏鼠标经过模块 */
    /* 1. 获取元素 */
    var fud = document.querySelector('.fud');
    var divFud = fud.querySelectorAll('a');
    /* 2. 利用循环绑定注册事件 */
    for(var i = 0; i < divFud.length; i++){
        /* 3. 鼠标经过事件 onmouseover */
        divFud[i].onmouseover = function(){
            this.style.color = '#f5f5f7';
        }
        /* 4. 鼠标离开事件 onmouseout */
        divFud[i].onmouseout = function(){
            this.style.color = '';
        }
    }

   
    /* 导航栏点击搜索模块
    1. 获取元素
    获取搜索图标按钮
    var search1 = document.querySelector('#search1');
    获取遮挡层盒子
    var zheDang = document.querySelector('#body');
    获取搜索输入框盒子
    var search2 = document.querySelector('#search2');
    获取搜索输入框文本内容
    var search = document.querySelector('#search');
    获取导航栏
    var search3 = document.querySelector('#search3'); */
});

// 等着页面DOM加载完毕之后再去执行js 代码
    $(function(){
        /* 导航栏点击搜索模块 */
        /* 1. 获取元素 */
        /* 获取搜索图标 点击搜索图标显示遮挡层盒子 显示搜索输入框盒子 显示搜索输入框文本盒子 隐藏导航栏*/
        $("#search1").click(function(){
            /* 显示遮挡层盒子 */
            $("#body").show(1, function () {

            });
            /* 显示搜索输入框盒子 */
            $("#search2").show(1000, function () {

            });
            /*  显示搜索输入框文本盒子*/
            $("#search").show(1000, function () {

            });
            /* 隐藏导航栏 */
            $("#search3").hide(1000, function () {

            });
        });
        /* 点击关闭按钮  隐藏遮挡层盒子 隐藏搜索输入框盒子 隐藏搜索输入框文本盒子 显示导航栏*/
        $("#close").click(function(){
            /* 隐藏遮挡层盒子 */
            $("#body").hide(1, function () {

            });
            /* 隐藏搜索输入框盒子 */
            $("#search2").hide(1000, function () {

            });
            /*  隐藏搜索输入框文本盒子*/
            $("#search").hide(1000, function () {

            });
            /* 显示导航栏 */
            $("#search3").show(1000, function () {

            });
        });

         /* 鼠标经过搜索框文本li的状态 */
        /* 获取元素 */
        /* 绑定事件 */
        // mouseover 鼠标经过
        $(".searchUl>li").mouseover(function(){
            // $(this) jQuery 当前元素  this不要加引号
            $(this).css("background", "rgba(0,0,0,0.1)");
            /* find 可以选里面所有的孩子 包括儿子和孙子  find() 类似于后代选择器 */
            $(this).find('a').css("color","#06c");
            /* console.log(this); */
        });
        

        
        // mouseout 鼠标离开
        $(".searchUl>li").mouseout(function(){
            // $(this) jQuery 当前元素  this不要加引号
            $(this).css("background", "");
            /* find 可以选里面所有的孩子 包括儿子和孙子  find() 类似于后代选择器 */
            $(this).find('a').css("color","");
        });

        /* 点击购物袋弹出购物袋模块 */
        /* 获取元素 绑定事件 点击购物袋图标 显示购物袋模块 再次点击就隐藏 */
        $("#Shopping").click(function() {
                // 滑动切换 slideToggle()
                $("#Shopping1").slideToggle(500);
            });

    });