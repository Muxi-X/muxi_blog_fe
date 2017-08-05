<template>
    <div>
        <button :class="$style.sign_box">
	        <a href = "https://user.muxixyz.com/" :class="$style.sign">登录 / 注册</a>
	    </button>
	</div>
</template>
<style lang='scss' module>
.sign {
	height: 100%;
	width: 100%;
}
.sign_box {
	height: 100%;
	width: 100%;
}
.sign_box:hover {
    background: #ffc162;
	a { 
		color: #ffffff;
	}
}
</style>