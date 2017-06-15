function dragFly(ele) {
	//	阻止浏览器默认行为；
	//	var dragBox = document.querySelector(".dragBox")
	document.addEventListener("dragover", function (e) {
		e.preventDefault()
	});
	document.addEventListener("drop", function (e) {
		e.preventDefault();
	});
	ele.addEventListener("dragover", function (e) {
		e.preventDefault();
	});
	//		 in start
	this.mov = function (fn) {
		ele.addEventListener("dragover", fn);
	};
	//		 in end
	//		 enter start
	this.in = function (fn) {
		ele.addEventListener("dragenter", fn);
	};
	//		 enter end
	//		 leave Start
	this.out = function (fn) {
		ele.addEventListener("dragleave", fn);
	};
	// leave end

	// change Start
	this.slect = function (fn) {
		ele.addEventListener("change", function (e) {
			getFile(ele.files[0], fn);
		})
	};
	// change end

	// 		drop Start
	this.drop = function (fn) {
		ele.addEventListener("drop", function (e) {
			e = e.dataTransfer.files[0];
			getFile(e, fn);
		});
	}
	// 	drop END

// getFile function start
	/**
	 * 自动判断文件类型，用不同的方式读取，接受事件对象并处理数据，调用用户传入的函数并返回一个处理好的对象
	 * @param {*} e 
	 * @param {*} fn 
	 */
	function getFile(e, fn) {
		var reader = new FileReader();
		if (/^text/.test(e.type)) {
			reader.readAsText(e);
			reader.addEventListener("load",function(){
				(fn)({
					type: e.type,
					name: e.name,
					time: e.lastModifiedDate,
					result: reader.result
				});
			})
		} else {
			reader.readAsDataURL(e);
			reader.addEventListener("load",function(){
				(fn)({
					type: e.type,
					name: e.name,
					time: e.lastModifiedDate,
					result: reader.result
				});
			})
		}
	}
	// getFile function End
}