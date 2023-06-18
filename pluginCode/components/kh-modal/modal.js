// 自定义模态对话框
export function showKhModal(options) {
	// 获取弹窗页面实例
	const body = options.container;
	
	// 创建弹窗背景
	const coverbody = document.createElement("view");
	body.$el.appendChild(coverbody);
	// 设置弹窗背景样式
	coverbody.classList.add("kh-modal-body");
	coverbody.style.backgroundColor = options.coverBackgroundcolor!==undefined?options.coverBackgroundcolor:'#00000050',
	coverbody.onclick = () => {
		options.space && options.space({modal: coverbody});
	};
	
	// 创建插画
	if(options.bodyImg!=undefined) {
		const conpic = document.createElement("view");
		// 设置插画样式
		conpic.classList.add("kh-modal-conpic");
		coverbody.style.setProperty("--conpic-image","url("+options.bodyImg+")");
		coverbody.appendChild(conpic);
	}
	
	// 创建内容容器
	const conbody = document.createElement("view");
	coverbody.appendChild(conbody);
	// 设置内容容器样式
	conbody.classList.add("kh-modal-conbody");
	conbody.style.bottom = options.conbodyPosition!==undefined?options.conbodyPosition:'50%';
	conbody.style.width = options.conbodyWidth!==undefined?options.conbodyWidth:'80%';
	conbody.style.height = options.conbodyHeight!==undefined?options.conbodyHeight:'350px';
	conbody.style.transform = 'translate(-50%,'+(options.conbodyPosition!==undefined?'':'50%')+')';
	conbody.style.borderRadius = options.conbodyRadius!==undefined?options.conbodyRadius:'20px';
	// 组织点击弹窗事件向外冒泡
	conbody.onclick = () => {event.stopPropagation()};
	
	// 创建弹窗标题
	const title = document.createElement("view");
	conbody.appendChild(title);
	// 设置标题样式
	title.classList.add("kh-modal-title");
	title.style.textAlign = options.titleAlign!==undefined?options.titleAlign:'left';
	title.style.color = options.titleColor!==undefined?options.titleColor:'#000000';
	title.innerHTML = options.title!==undefined?options.title:'温馨提示';
	
	// 创建弹窗副标题
	if(options.subtitle!==undefined) {
		const subtitle = document.createElement("view");
		conbody.appendChild(subtitle);
		// 设置副标题样式
		subtitle.classList.add("kh-modal-subtitle");
		subtitle.style.textAlign = options.subtitleAlign!==undefined?options.subtitleAlign:options.titleAlign!=undefined?options.titleAlign:'left';
		subtitle.style.color = options.subtitleColor!==undefined?options.subtitleColor:'#000000';
		subtitle.innerHTML = options.subtitle!==undefined?options.subtitle:'';
	}
	
	// 创建弹窗内容区域
	const content = document.createElement("view");
	conbody.appendChild(content);
	// 设置内容样式
	content.classList.add("kh-modal-content");
	content.innerHTML = options.content;
	
	// 创建按钮容器
	const buttonarea = document.createElement("view");
	conbody.appendChild(buttonarea);
	// 设置按钮容器样式
	buttonarea.classList.add("kh-modal-buttons");
	
	// 创建取消按钮
	if(options.showCancel != false) {
		const cbutton = document.createElement("button");
		buttonarea.appendChild(cbutton);
		// 设置取消按钮样式
		cbutton.classList.add("kh-modal-button");
		cbutton.style.backgroundColor = options.cancelBackgroundcolor!==undefined?options.cancelBackgroundcolor:"#fff",
		cbutton.style.color = options.cancelColor!==undefined?options.cancelColor:'#000000a0',
		cbutton.style.border = '1px solid '+(options.cancelColor!==undefined?options.cancelColor:'#000000a0'),
		cbutton.innerHTML = options.cancelText!==undefined?options.cancelText:'取消';
		// 取消按钮事件
		cbutton.onclick = () => {
			options.cancel && options.cancel({modal: coverbody});
		};
	}
	
	// 创建确认按钮
	const fbutton = document.createElement("button");
	buttonarea.appendChild(fbutton);
	// 设置确认按钮样式
	fbutton.classList.add("kh-modal-button");
	fbutton.style.backgroundColor = options.confirmBackgroundcolor!==undefined?options.confirmBackgroundcolor:"#ff701e",
	fbutton.style.color = options.confirmColor!==undefined?options.confirmColor:'#fff',
	fbutton.innerHTML = options.confirmText!==undefined?options.confirmText:'确定';
	fbutton.onclick = () => {
		options.confirm && options.confirm({modal: coverbody});
	};
}

// 导出方法
export default {
  showKhModal
}
