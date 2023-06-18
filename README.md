# kh-modal
一款使用api方法调用的，支持高度自定义的uniapp弹窗组件

弹窗由js创建


# 使用方法
## 首先在App.vue中引入CSS样式文件
```
<style>
	/* 导入弹窗组件css */
	@import url('components/kh-modal/modal.css');
</style>
```

## 在需要使用的页面导入插件，并给根标签添加```ref=khUtilsContain```的属性
```
<template>
	<view ref="khUtilsContain">
		
	</view>
</template>
<script>
	import khModal from "@/components/kh-modal/modal.js";
	export default {
	
	}
</script>
```

## 使用api方法使用弹窗
```
khModal.showKhModal({
	container: this.$refs.khUtilsContain, // 需要使用本弹窗插件的页面根<view>标签请添加ref=khUtilsContain
	
	coverBackgroundcolor: '#00000050', // 弹窗背景颜色，默认为“#00000050”
	bodyImg: 'https://mp-e9cc51d7-8d77-4037-8581-1c5289274e0a.cdn.bspapp.com/cloudstorage/029dbb76-1ce7-4aca-8942-8f4f8940d2a4.png', // 右上角图标，默认为空(未设置图片兼容)
	
	// 弹窗标题
	title: '弹窗标题', // 标题文字，默认为空
	titleAlign: 'left', // 标题位置，默认left，(值：left/center/right)
	titleColor: '#000000', // 标题文字颜色，默认“#000000”
	
	// 副标题
	subtitle: '哈哈哈', // 副标题文字，默认为空
	subtitleAlign: 'left', // 副标题位置，默认跟随标题位置，(值：left/center/right)
	subtitleColor: '#000000', // 副标题文字颜色，默认“#000000”
	content: '<li>这里是弹窗内容这里是弹窗内容这里是弹窗内容这里是弹窗内容</li><li>这里是弹窗内容这里是弹窗内容</li>', // 弹窗内容，纯文本/标签代码/<li>标签(<li>标签内置了样式)
	
	// 窗体属性
	// conbodyPosition: '0px', // 窗体位置，默认为中间，设置单位为px或百分比
	conbodyWidth: '80%', // 弹窗宽度，默认80%，百分比或px
	conbodyHeight: '350px', // 弹窗高度，默认350px，百分比或px
	conbodyRadius: '20px 20px', // 设置方法同CSS的border-radius，单位为px
	
	// 确认按钮
	confirmText: '确认按钮', // 确认按钮文字，默认为“确认”
	confirmBackgroundcolor: '#ff701e', // 默认为“#ff701e”
	confirmColor: '#fff', // 确认按钮文字颜色，默认为"#fff"
	confirm: (res)=> {
		console.log("点击了确认按钮");
	},
	
	// 取消按钮
	showCancel: true, // 是否显示取消按钮，默认为true
	cancelText: '取消按钮', // 取消按钮文字，默认为“取消”
	cancelBackgroundcolor: '#fff', // 取消按钮背景色，默认为“#fff”
	cancelColor: '#000000a0', // 取消按钮文字/边框颜色，默认为“#000000a0”
	cancel: (res)=> {
		console.log("点击了取消按钮");
		this.$refs.khUtilsContain.$el.removeChild(res.modal); // 关闭弹窗方法，如果点击按钮不需要关闭弹窗，请删除或注释此方法
	},
	
	// 点击空白处动作,默认为关闭弹窗，可自定义，删除后点击空白处无响应
	space: (res)=> {
		console.log("点击了空白处");
		this.$refs.khUtilsContain.$el.removeChild(res.modal);
	}
})
```

## 完整示例
```
<template>
	<view ref="khUtilsContain">
		<button @click="show">显示弹窗</button>
	</view>
</template>

<script>
	import khModal from "@/components/kh-modal/modal.js";
	export default {
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
			show() {
				khModal.showKhModal({
					container: this.$refs.khUtilsContain, // 需要使用本弹窗插件的页面根<view>标签请添加ref=khUtilsContain
					
					coverBackgroundcolor: '#00000050', // 弹窗背景颜色，默认为“#00000050”
					bodyImg: 'https://mp-e9cc51d7-8d77-4037-8581-1c5289274e0a.cdn.bspapp.com/cloudstorage/029dbb76-1ce7-4aca-8942-8f4f8940d2a4.png', // 右上角图标，默认为空(未设置图片兼容)
					
					// 弹窗标题
					title: '弹窗标题', // 标题文字，默认为空
					titleAlign: 'left', // 标题位置，默认left，(值：left/center/right)
					titleColor: '#000000', // 标题文字颜色，默认“#000000”
					
					// 副标题
					subtitle: '哈哈哈', // 副标题文字，默认为空
					subtitleAlign: 'left', // 副标题位置，默认跟随标题位置，(值：left/center/right)
					subtitleColor: '#000000', // 副标题文字颜色，默认“#000000”
					content: '<li>这里是弹窗内容这里是弹窗内容这里是弹窗内容这里是弹窗内容</li><li>这里是弹窗内容这里是弹窗内容</li>', // 弹窗内容，纯文本/标签代码/<li>标签(<li>标签内置了样式)
					
					// 窗体属性
					// conbodyPosition: '0px', // 窗体位置，默认为中间，设置单位为px或百分比
					conbodyWidth: '80%', // 弹窗宽度，默认80%，百分比或px
					conbodyHeight: '350px', // 弹窗高度，默认350px，百分比或px
					conbodyRadius: '20px 20px', // 设置方法同CSS的border-radius，单位为px
					
					// 确认按钮
					confirmText: '确认按钮', // 确认按钮文字，默认为“确认”
					confirmBackgroundcolor: '#ff701e', // 默认为“#ff701e”
					confirmColor: '#fff', // 确认按钮文字颜色，默认为"#fff"
					confirm: (res)=> {
						console.log("点击了确认按钮");
					},
					
					// 取消按钮
					showCancel: true, // 是否显示取消按钮，默认为true
					cancelText: '取消按钮', // 取消按钮文字，默认为“取消”
					cancelBackgroundcolor: '#fff', // 取消按钮背景色，默认为“#fff”
					cancelColor: '#000000a0', // 取消按钮文字/边框颜色，默认为“#000000a0”
					cancel: (res)=> {
						console.log("点击了取消按钮");
						this.$refs.khUtilsContain.$el.removeChild(res.modal); // 关闭弹窗方法，如果点击按钮不需要关闭弹窗，请删除或注释此方法
					},
					
					// 点击空白处动作,默认为关闭弹窗，可自定义，删除后点击空白处无响应
					space: (res)=> {
						console.log("点击了空白处");
						this.$refs.khUtilsContain.$el.removeChild(res.modal);
					}
				})
			}
		}
	}
</script>

<style>
	
</style>
```
