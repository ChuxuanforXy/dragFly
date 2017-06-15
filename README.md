# 简介

使用dragFly你可以通过一个简单的方式实现文件的拖拽上传功能，现在的功能非常单一但是可以帮助我们实现选择文件读取和将文件拖入制定的区域实现读取。

# 使用方法

1.在使用前你需要将dragFly.js文件引入到引入到你的项目中。

    <script src="js/dragFly.js"></script>
    
2.由于一个页面可能会有多个需要使用拖拽和上传文件的地方，这里使用了构造函数创建方法，您只需要将创建一个创建一个变量指向 dragFly(ele) 并在形参中传入一个元素节点即可。

    var dreg = new dragFly(dragBox);
    
dragBox是您要拖入的目标元素，例如。

    <!DOCTYPE html>
        <html>
        <head>
        	<meta charset="UTF-8">
        	<title></title>
        	<script src="js/dragFly.js"></script>
        	<style type="text/css">
        		.dragBox {height: 300px;width: 300px;}
        	</style>
        </head>
        <body>
        	<div class="dragBox"></div>
        	
        	<script type="text/javascript">
        	// 获取div元素
        		var dragBox = document.querySelector(".dragBox")
            // 创建dragFly对象并传入获取的元素
        		var dreg = new dragFly(dragBox);
        		})
        	</script>
        </body>
    </html>
    
到这里拖拽文件的功能就已经实现了。

# 回调函数 CallBack
为了便于操作，dragFly提供了一些事件的回调函数。

1. dreg.in(fn)   拖拽文件进入dragBox区域内时触发,需要传入一个需要执行的函数；
    
        dreg.in(function () {
			this.style.backgroundColor = "skyblue"; //进入dregBox改变背景色
		}) 

2. dreg.out(fn)   鼠标拖拽结束后触发,需要传入一个需要执行的函数；

        dreg.out(function () {
		this.style.backgroundColor = "pink"; //拖拽结束后改变背景色
	})
    
3. dreg.mov(fn)   鼠标拖拽过程中触发,需要传入一个需要执行的函数；

        dreg.out(function () {
		this.style.backgroundColor = "red"; //拖拽过程中改变背景色
	})
    
4. dreg.dorp(fn(e))     拖拽文件到dragBox区域，当鼠标松开时触发，需要传入一个带有形参的函数，读取文件的信息和结果会以对象的形式放在这个形参中。

        dreg.drop(function (e) {
		console.log(e);
		dragBox.style.background = 'url(' + e.result + ')'; //将读取的图片设置到dragBox元素的背景
	})

5.  dreg.slect(fn(e)     当你要使用input标签type=file选择文件时可以使用此方法，在选择文件结束后，同样需要传入一个带有形参的函数，当文件读取结束后会将文件的读取信息和结果以对象的形式存入形参中提供使用。

        inputDrag.slect(function (e) {
		console.log(e);
		dragBox.style.background = 'url(' + e.result + ')'; //将读取的图片设置到dragBox元素的背景
	})


# 返回对象

    {
	type: "文件的类型 String",
	name: "文件名 String",
	time: "上传的事件 date对象",
	result: "转换成bash64形式后的文件"
    }

如下：
Object {
        name:"hdxqan.png"
        result:"data:image/png;base64,iVBORw0KG......"
        time:Wed Feb 08 2017 21:04:20 GMT+0800 (中国标准时间)
        type:"image/png"
    }

。。。。。。。。。。。。。。。。
